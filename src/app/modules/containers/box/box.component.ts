import { Component, Input } from "@angular/core";

/**
 * Display Box Container
 * @example 
 *  <box title="Box title">
 *  |  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
 *  </box>
 */
@Component({
  selector: "defi-box",
  templateUrl: "./box.component.html",
  styleUrls: ["./box.component.scss"]
})
export class DefiBoxComponent {

  @Input() title:String



}
 