import { sandboxOf } from 'angular-playground';
import { SidePanelComponent } from './side-panel.component';
import { SidePanelService } from '../providers/sidepanel.service';

const sp = new SidePanelService()
const open = (template, context = {})=>sp.open(template, context)

export default sandboxOf(SidePanelComponent, {
  imports: [
  ],
  providers: [{
    provide: SidePanelService, useValue: sp
  }]
}).add('Simple', {
  context:{
    open
  },
  template: `
  <div style="display:flex;">
    <div>
      <button (click)="open(template)">Open with template</button>
      <br/>
      <br/>
      <input type="text" #inputContext placeholder="Enter a name here"/>
      <button (click)="open(template, {
        value: inputContext.value
      })">Open with context</button>
    </div>
    <sidePanel></sidePanel>
  </div>
  <ng-template #template let-value="value"> Hey {{value}} !</ng-template>
  `
});