import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeManagerComponent } from './theme-manager.component';
import { PanelModule } from 'primeng/panel';
import { ColorPickerModule } from 'ngx-color-picker';
import { TableModule } from 'primeng/table';
import { ScheduleModule } from 'primeng/schedule';
import { TabViewModule } from 'primeng/tabview';
import { DefiOverlayModule, DefiCommonService, DefiCoreModule } from 'ngx-defi-core/dist';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('ThemeManagerComponent', () => {
  let component: ThemeManagerComponent;
  let fixture: ComponentFixture<ThemeManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeManagerComponent ],
      imports: [
        BrowserAnimationsModule,
        PanelModule,
        ColorPickerModule,
        TableModule,
        ScheduleModule,
        TabViewModule,
        DefiOverlayModule,
        DefiCoreModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
