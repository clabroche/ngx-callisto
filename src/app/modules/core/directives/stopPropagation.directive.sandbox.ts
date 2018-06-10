import { sandboxOf } from 'angular-playground';
import { DefiClickStopPropagation } from './stopPropagation.directive';

let rand = Math.random()
const getRandom = _=>rand
const random = _=>{rand=Math.random()}
export default sandboxOf(DefiClickStopPropagation, {
  imports: [],
}).add('Simple', {
  context:{
    random,
    getRandom
  },
  template: `
<div (click)="random()" style="width: 100%;height:100vh; display: flex; justify-content: center; align-items: center;background-color: #B3E5FC;flex-direction:column;">
    Blue center square doesn't update this: {{getRandom()}}
    <div defi-click-stop-propagation style="width: 50%;height: 50%; background-color: #009688;"></div>
</div>
  `
});