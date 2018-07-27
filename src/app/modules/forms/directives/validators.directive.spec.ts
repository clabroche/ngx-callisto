import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CltValidatorsDirective } from './validators.directive';
import { FormsModule} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('CltValidatorsDirective', function () {

  @Component({
    template: `
     <input type="text" [clt-validators]="model"/>`
  })
  class TestComponent {
    model;
  }

  beforeEach(function() {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        CltValidatorsDirective
      ],
      imports: [
        CommonModule,
        FormsModule
      ]
    }).compileComponents();
  });

  it('should have no badinput/goodInput on default', async () => {
    const fixture = TestBed.createComponent(TestComponent);
    const app: TestComponent = fixture.debugElement.componentInstance;
    const input = fixture.debugElement.query(By.directive(CltValidatorsDirective));
    expect(input.nativeElement.className.includes('goodInput')).toEqual(false);
    expect(input.nativeElement.className.includes('badInput')).toEqual(false);
  });
  it('should have badinput on invalid validator', async () => {
    const fixture = TestBed.createComponent(TestComponent);
    const app: TestComponent = fixture.debugElement.componentInstance;
    const input = fixture.debugElement.query(By.directive(CltValidatorsDirective));
    app.model = { valid: false };
    fixture.detectChanges();
    expect(input.nativeElement.className.includes('goodInput')).toEqual(false);
    expect(input.nativeElement.className.includes('badInput')).toEqual(true);
  });
  it('should have goodinput on valid validator', async () => {
    const fixture = TestBed.createComponent(TestComponent);
    const app: TestComponent = fixture.debugElement.componentInstance;
    const input = fixture.debugElement.query(By.directive(CltValidatorsDirective));

    app.model = { valid: true };
    fixture.detectChanges();
    expect(input.nativeElement.className.includes('goodInput')).toEqual(true);
    expect(input.nativeElement.className.includes('badInput')).toEqual(false);
  });
});
