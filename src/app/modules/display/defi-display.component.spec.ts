import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CltDisplayComponent } from './defi-display.component';
import { CltDisplayModule } from './defi-display.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CltDisplayItemDirective } from './directives/defi-display-item.directive';
import { Component, ViewChildren, ViewChild, QueryList } from '@angular/core';
import { CltOverlayModule } from '../overlay/overlay.module';
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
  @ViewChild(CltDisplayComponent) displayComponent: CltDisplayComponent;
  @ViewChildren(CltDisplayItemDirective) displayItems: QueryList<CltDisplayItemDirective>;
  visible = false;
}
describe('CltDisplayComponent', () => {
  let component: CltDisplayComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerComponent],
      imports: [
        CltDisplayModule,
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
