import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample1Component } from './sample1.component';
import { CltMapModule } from '../../../modules/map/map.module';
import { HttpClientModule } from '@angular/common/http';

describe('Sample1Component', () => {
  let component: Sample1Component;
  let fixture: ComponentFixture<Sample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CltMapModule.forRoot(),
        HttpClientModule
      ],
      declarations: [ Sample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
