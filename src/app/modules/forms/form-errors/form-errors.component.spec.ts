import { TestBed, async } from '@angular/core/testing';

import { DefiFormErrorsComponent } from './form-errors.component';
import { FormsModule } from '@angular/forms';


describe('FormErrorsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DefiFormErrorsComponent,
      ],
      imports:[
        FormsModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(DefiFormErrorsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
