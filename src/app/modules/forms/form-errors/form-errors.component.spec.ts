import { TestBed, async } from '@angular/core/testing';

import { CltFormErrorsComponent } from './form-errors.component';
import { FormsModule } from '@angular/forms';


describe('FormErrorsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CltFormErrorsComponent,
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(CltFormErrorsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
