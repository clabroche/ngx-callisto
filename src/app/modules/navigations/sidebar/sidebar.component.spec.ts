import { TestBed, async } from '@angular/core/testing';

import { RouterModule } from '@angular/router';
import { CltSidebarComponent, Configuration } from './sidebar.component';
import { CltSideBarService } from '../providers/sidebar.service';
import { APP_BASE_HREF} from '@angular/common';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const navbarConf: Configuration = {
  list: [{
    id: 'home',
    icon: 'fa fa-home',
    description: 'Accueil',
    click: function () {
      console.log('ho');
    },
    url: 'lkjelkjdelk'
  }],
  bottom: [{
    icon: 'fa fa-cog',
    description: 'Settings',
    click: function () {
      console.log('ho');
    },
    url: 'lkjelkjdelk'
  }]
};


describe('CltSidebarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CltSidebarComponent
      ],
      imports: [
        BrowserAnimationsModule,
        RouterModule.forRoot([{
          path: '', component: CltSidebarComponent
        }])
      ],
      providers: [CltSideBarService, {provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(CltSidebarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have good properties and dependencies`, async(() => {
    const fixture = TestBed.createComponent(CltSidebarComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.sidebar instanceof CltSideBarService).toBeTruthy();
    expect(app.hintState).toEqual('close');
  }));

  it(`should toggle slidebar`, async () => {
    const fixture = TestBed.createComponent(CltSidebarComponent);
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
    const fixture = TestBed.createComponent(CltSidebarComponent);
    const app: CltSidebarComponent = fixture.debugElement.componentInstance;
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
    const fixture = TestBed.createComponent(CltSidebarComponent);
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
