import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefiDisplayComponent } from './defi-display.component';
import { DefiDisplayModule } from './defi-display.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefiDisplayItemDirective } from './directives/defi-display-item.directive';
import { Component, ViewChildren, ViewChild, QueryList } from '@angular/core';
import { DefiOverlayModule } from '../overlay/overlay.module';
@Component({
  selector: 'container',
  template: `
    <defi-display [elements]='[a,b,c,d]' [(visible)]="visible"></defi-display>
    <div defiDisplayItem name="a" #a="defiDisplayItem"></div>
    <div defiDisplayItem name="b" #b="defiDisplayItem"></div>
    <div defiDisplayItem name="c" #c="defiDisplayItem"></div>
    <div defiDisplayItem name="d" #d="defiDisplayItem"></div>
  `
}) class ContainerComponent {
  @ViewChild(DefiDisplayComponent) displayComponent: DefiDisplayComponent;
  @ViewChildren(DefiDisplayItemDirective) displayItems: QueryList<DefiDisplayItemDirective>;
  visible = false;
}
describe('DefiDisplayComponent', () => {
  let component: DefiDisplayComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerComponent],
      imports: [
        DefiDisplayModule,
        BrowserAnimationsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance.displayComponent;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should propage storage input to item directives', () => {
    component.storage = 'test';
    fixture.detectChanges();
    expect(component.elements.length).toEqual(4);
    component.elements.map(item => {
      expect(item.storage).toEqual('test');
    });
  });
  it('should two way bind visible property', () => {
    fixture.detectChanges();
    expect(fixture.componentInstance.visible).toBeFalsy();
    expect(component.visible).toBeFalsy();
    fixture.componentInstance.visible = true;
    fixture.detectChanges();
    expect(fixture.componentInstance.visible).toBeTruthy();
    expect(component.visible).toBeTruthy();

    component.changeVisibleState(false);
    fixture.detectChanges();
    expect(fixture.componentInstance.visible).toBeFalsy();
    expect(component.visible).toBeFalsy();
  });
});
