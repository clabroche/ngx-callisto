import { sandboxOf } from 'angular-playground';
import { DefiBoxComponent } from './box.component';

export default sandboxOf(DefiBoxComponent, {
  imports: []
}).add('Simple', {
  template: `
      <box title="Hey I am a title">
        me a content in a box
        <box>
          And me a content in a box in a box
        </box>
      </box>
      `
});