import { sandboxOf } from 'angular-playground';
import { DefiDebounceInputDirective } from './debounceInput.directive';

let value= ''
let debounceTime = 500
const getValue = _ => value
const getDebounceTime = _ => debounceTime
const setDebounceTime= time=> debounceTime = time
const type = data=> value=data
export default sandboxOf(DefiDebounceInputDirective, {
  imports: [],
}).add('Simple', {
  context:{
    getValue,
    setDebounceTime,
    getDebounceTime,
    type
  },
  template: `
    ValueInput
    <input type="text" debounce-input (debounce)="type($event.target.value)" [debounceTime]="getDebounceTime()" />
    
    DebounceTimeInput
    <input type="number" (change)="setDebounceTime($event.target.value)" [value]="getDebounceTime()" />

    Debounce time:{{getDebounceTime()}} Value: {{getValue()}}
      `
});