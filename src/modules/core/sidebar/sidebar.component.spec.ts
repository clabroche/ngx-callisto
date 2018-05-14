import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';

import { Routes, RouterModule, Router } from '@angular/router';
import { SidebarComponent, Configuration } from './sidebar.component';
import { SideBarService } from '../providers/sidebar.service';
import { APP_BASE_HREF} from '@angular/common';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
const callbackFun = function () {
  return 'random-routes';
};

const navbarConf: Configuration = {
  list: [{
    id: 'home',
    icon: 'fa fa-home',
    description: 'Accueil',
    click: function () {
      console.log('ho');
    },
    externalUrl: 'lkjelkjdelk'
  }],
  bottom: [{
    icon: 'fa fa-cog',
    description: 'Settings',
    click: function () {
      console.log('ho');
    },
    externalUrl: 'lkjelkjdelk'
  }]
};


describe('SidebarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SidebarComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        BrowserAnimationsModule
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, SideBarService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have good properties and dependencies`, async(() => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.sidebar instanceof SideBarService).toBeTruthy();
    expect(app.hintState).toEqual('close');
  }));

  it(`should toggle slidebar`, async () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    await wait(300);

    const toggleButton: HTMLElement = fixture.debugElement.query(By.css('#toggleSidebar')).nativeElement;
    const sidebar: HTMLElement = fixture.debugElement.query(By.css('#sidebar')).nativeElement;

    expect(sidebar.className.includes('closeSidebar')).toEqual(true);
    expect(sidebar.className.includes('openSidebar')).toEqual(false);
    expect(sidebar.clientWidth).toEqual(40);

    toggleButton.click();
    fixture.detectChanges();
    await wait(300);

    expect(sidebar.className.includes('closeSidebar')).toEqual(false);
    expect(sidebar.className.includes('openSidebar')).toEqual(true);
    expect(sidebar.clientWidth).toEqual(175);
  });
  it(`should toggle hint`, async () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const app: SidebarComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    app.conf = navbarConf;
    fixture.detectChanges();

    const homeButton: HTMLElement = fixture.debugElement.query(By.css('#home')).nativeElement;
    const hint: HTMLElement = fixture.debugElement.query(By.css('#hint-home')).nativeElement;
    const toggleButton: HTMLElement = fixture.debugElement.query(By.css('#toggleSidebar')).nativeElement;

    expect(hint.clientWidth).toEqual(0);

    homeButton.dispatchEvent(new MouseEvent('mouseover', {
        view: window,
        bubbles: true,
        cancelable: true
      }));
      fixture.detectChanges();
      await wait(200);
      expect(hint.clientWidth).not.toEqual(0);
  });
  it(`should not toggle hint when sidebar is open`, async () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const app = fixture.debugElement.componentInstance;
    app.conf = navbarConf;
    fixture.detectChanges();

    const homeButton: HTMLElement = fixture.debugElement.query(By.css('#home')).nativeElement;
    const hint: HTMLElement = fixture.debugElement.query(By.css('#hint-home')).nativeElement;
    const toggleButton: HTMLElement = fixture.debugElement.query(By.css('#toggleSidebar')).nativeElement;

    expect(hint.clientWidth).toEqual(0);
    toggleButton.click();
    fixture.detectChanges();
    await wait(300);

    homeButton.dispatchEvent(new MouseEvent('mouseover', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    fixture.detectChanges();
    await wait(200);
    expect(hint.clientWidth).toEqual(0);
  });
});


function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
