import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCodeComponent } from './sample-code.component';

describe('SampleCodeComponent', () => {
  let component: SampleCodeComponent;
  let fixture: ComponentFixture<SampleCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleCodeComponent ]
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
