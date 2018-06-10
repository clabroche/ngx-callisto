import { TestBed, inject } from '@angular/core/testing';
import { Component } from '@angular/core';
import { DefiShowPasswordDirective } from './showPassword.directive';
import { FormsModule, ReactiveFormsModule, NgModel} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('DefiShowPasswordDirective', function () {
  
  @Component({
    template: `
     <input type="password" defi-show-password/>`
  })
  class TestComponent {
    model
  }

  beforeEach(function() {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        DefiShowPasswordDirective
      ],
      imports: [
        CommonModule,
        FormsModule
      ]
    }).compileComponents();
  });

  it('visible and invisible password', async () => {
    const fixture = TestBed.createComponent(TestComponent);
    const app: TestComponent = fixture.debugElement.componentInstance;
    const input = fixture.debugElement.query(By.directive(DefiShowPasswordDirective))
    expect(input.nativeElement.type).toEqual('password')
    fixture.detectChanges()
    fixture.debugElement.query(By.css('.toggle-eye')).nativeElement.click()
    expect(input.nativeElement.type).toEqual('text')
    fixture.debugElement.query(By.css('.toggle-eye')).nativeElement.click()
    expect(input.nativeElement.type).toEqual('password')
  });
});
