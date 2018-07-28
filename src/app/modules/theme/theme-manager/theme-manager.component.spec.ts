import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CltThemeManagerComponent } from './theme-manager.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { TableModule } from 'primeng/table';
import { ScheduleModule } from 'primeng/schedule';
import { TabViewModule } from 'primeng/tabview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CltOverlayModule } from '../../overlay/overlay.module';
import { CltCoreModule } from '../../core/core.module';
import { CltContainersModule } from '../../containers/containers.module';


describe('CltThemeManagerComponent', () => {
  let component: CltThemeManagerComponent;
  let fixture: ComponentFixture<CltThemeManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CltThemeManagerComponent ],
      imports: [
        BrowserAnimationsModule,
        CltContainersModule,
        ColorPickerModule,
        TableModule,
        ScheduleModule,
        TabViewModule,
        CltOverlayModule,
        CltCoreModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CltThemeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
