import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupComponent, BodyDirective } from './popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { FormBuilder, Validators } from '@angular/forms';

describe('PopupComponent', () => {
  let component: PopupComponent;
  let fixture: ComponentFixture<PopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [
        PopupComponent,
        BodyDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open/close', (done) => {
    component.open({ test: 123456 }).subscribe(data => {
      setTimeout(() => {
        expect(component.result).toBeNull();
        expect(component._open).toEqual(false);
        expect(component.state).toEqual('close');
        expect(data).toEqual('ok');
        done();
      }, 100);
    });
    expect(component.result.constructor.name).toEqual('Subject');
    expect(component.context).toEqual({ test: 123456 });
    expect(component._open).toEqual(true);
    expect(component.state).toEqual('open');
    fixture.detectChanges();
    const buttonOk = fixture.debugElement.query(By.css('.host-ok')).nativeElement;
    buttonOk.click();
  });

  it('should bind a form', (done) => {
    const form = new FormBuilder().group({
      test: ['', Validators.required]
    });
    component.openEvent.subscribe(_ => {
      fixture.detectChanges();
      let buttonOk = fixture.debugElement.query(By.css('.host-ok')).nativeElement;
      expect(buttonOk.disabled).toBeTruthy();

      form.controls.test.setValue('test');
      fixture.detectChanges();
      expect(buttonOk.disabled).toBeFalsy();

      buttonOk = fixture.debugElement.query(By.css('.host-ok')).nativeElement;
      buttonOk.click();
    });
    component.bindForm(form).open({ test: 123456 }).subscribe(_ => {
      done();
    });
  });
});
