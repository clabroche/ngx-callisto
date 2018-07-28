import { Component, Input } from '@angular/core';

/**
 * Display Box Container
 * @example
 *  <box title="Box title">
 *  |  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
 *  </box>
 */
@Component({
  selector: 'clt-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class CltBoxComponent {

  @Input() title: String;



}

