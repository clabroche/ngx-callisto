import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent, MapBridgeComponent } from './map.component';
import { MapModule } from '../../modules/map/map.module';
import { DemoSDK } from '../demo-sdk.module';
import { Sample1Component } from './sample1/sample1.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MapComponentSample', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        DemoSDK,
        MapModule.forRoot()
      ],
      declarations: [
        MapComponent,
        MapBridgeComponent,
        Sample1Component
      ]
    });
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [MapBridgeComponent]
      }
    });
    TestBed.compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
});
