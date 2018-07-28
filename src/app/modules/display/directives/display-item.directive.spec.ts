import { CltDisplayItemDirective } from './display-item.directive';
import { Component, ViewChild } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';

@Component({
  selector: 'container',
  template: `
    <div cltDisplayItem="cltDisplayItem"></div>
  `
}) class ContainerComponent {
  @ViewChild(CltDisplayItemDirective) cltDisplayItem: CltDisplayItemDirective;
}
describe('CltDisplayItemDirective', () => {
  let component: CltDisplayItemDirective;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerComponent, CltDisplayItemDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance.cltDisplayItem;
    window.localStorage.removeItem('display');
  });

  it('should create with display true when no localStorage', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.display).toBeTruthy();
  });
  it('should create with display false when localStorage set to false', () => {
    component.storage = 'test';
    component.name = 'name';
    window.localStorage.setItem('display', JSON.stringify({ test: { name: false } }));
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.display).toBeFalsy();
  });
  it('should not throw when unexpected value from localstorage', () => {
    component.storage = 'test';
    component.name = 'name';
    window.localStorage.setItem('display', JSON.stringify({ tessssssst: { name: false } }));
    window.localStorage.setItem('display', JSON.stringify({ test: { naaaaaame: false } }));
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.display).toBeTruthy();
  });
  it('should create localstorage entry when does not exist on toggle then toggle it', () => {
    component.storage = 'test';
    component.name = 'name';
    fixture.detectChanges();

    component.toggle({ checked: true });
    expect(JSON.parse(window.localStorage.getItem('display')).test.name).toBeTruthy();
    expect(component.display).toBeTruthy();

    component.toggle({ checked: false });
    expect(JSON.parse(window.localStorage.getItem('display')).test.name).toBeFalsy();
    expect(component.display).toBeFalsy();
  });
});
