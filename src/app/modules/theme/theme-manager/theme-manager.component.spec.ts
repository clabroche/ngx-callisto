import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeManagerComponent } from './theme-manager.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { TableModule } from 'primeng/table';
import { ScheduleModule } from 'primeng/schedule';
import { TabViewModule } from 'primeng/tabview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CltOverlayModule } from '../../overlay/overlay.module';
import { CltCoreModule } from '../../core/core.module';
import { CltContainersModule } from '../../containers/containers.module';


describe('ThemeManagerComponent', () => {
  let component: ThemeManagerComponent;
  let fixture: ComponentFixture<ThemeManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeManagerComponent ],
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
    fixture = TestBed.createComponent(ThemeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
