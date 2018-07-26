import { Directive, Component } from '@angular/core';
import { NgModule } from '@angular/compiler/src/core';

export interface DemoInterface {
  name: string;
  link: string;
  relativeModule: any;
  sampleComponent;
}
