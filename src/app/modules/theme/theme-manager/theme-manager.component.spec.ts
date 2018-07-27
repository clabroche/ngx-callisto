import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeManagerComponent } from './theme-manager.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { TableModule } from 'primeng/table';
import { ScheduleModule } from 'primeng/schedule';
import { TabViewModule } from 'primeng/tabview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefiOverlayModule } from '../../overlay/overlay.module';
import { DefiCoreModule } from '../../core/core.module';
import { DefiContainersModule } from '../../containers/containers.module';


describe('ThemeManagerComponent', () => {
  let component: ThemeManagerComponent;
  let fixture: ComponentFixture<ThemeManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeManagerComponent ],
      imports: [
        BrowserAnimationsModule,
        DefiContainersModule,
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
