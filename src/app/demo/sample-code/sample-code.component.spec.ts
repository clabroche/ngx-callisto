import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCodeComponent } from './sample-code.component';
import { DemoSDK } from '../demo-sdk.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SampleCodeComponent', () => {
  let component: SampleCodeComponent;
  let fixture: ComponentFixture<SampleCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        NoopAnimationsModule,
        DemoSDK
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
