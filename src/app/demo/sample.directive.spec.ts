import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDirective } from './sample.directive';
import { Component, ViewChild } from '@angular/core';
@Component({
  selector: '',
  template: ''
}) class ContainerComponent {
  @ViewChild(SampleDirective) sampleDirective: SampleDirective;
}
describe('SampleDirective', () => {
  let component: ContainerComponent;
  let directive: SampleDirective;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    directive = component.sampleDirective;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
