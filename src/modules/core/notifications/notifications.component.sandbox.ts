import { sandboxOf } from 'angular-playground';
import { NotificationsComponent } from './notifications.component';
import { NotificationsService } from '../providers/notifications.service';

const ns= new NotificationsService()
const getFirstNotifId = _=>ns.notifications[0].id
const random=_=>Math.random()
export default sandboxOf(NotificationsComponent, {
  imports: [],
  providers: [{
    provide: NotificationsService, useValue: ns
  }]
}).add('Simple', {
  context:{
    ns,
    getFirstNotifId,
    random
  },
  template: `
  <button (click)="ns.add('add','test')">Add notif</button>
  <button (click)="ns.delete(getFirstNotifId())">delete notif</button>
  <button (click)="ns.deleteAll()">delete all notif</button>
  <button (click)="ns.updateNotif(getFirstNotifId(),{title:random(),msg: random()})">Update notif</button>
  <notifications></notifications>
  `
});