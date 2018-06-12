import { Injectable, IterableDiffers } from "@angular/core";
import * as uuid from 'uuid'
import { Observable, Subject } from "rxjs";

/**
 * Describe a notification
 */
export interface Notification {
  /**
   * ID of the notification
   */
  id?: string;
  /**
   * Header on notification
   */
  title?: string;
  /**
   * Content on notification
   */
  msg?: string;
  /**
   * Timeout function 
   */
  timeout?: any;
}
/**
 * Control the sidebar outside the component
 */
@Injectable()
export class DefiNotificationsService {
  /**
   * Component watch this variable to open/close the sidebar
   */
  notifications: Array<Notification> = [];
  /**
   * Emit event that contains complete notification on add
   */
  addEvent: Subject<any> = new Subject();
  /**
   * Emit event that contains id on remove 
   */
  removeEvent: Subject<any> = new Subject();

  /**
   * Fetch delay from localStorage 
   */
  constructor() {
    let notificationsDelay = +localStorage.getItem("notificationsDelay");
    if (notificationsDelay < 500) {
      notificationsDelay = 6000;
      localStorage.setItem("notificationsDelay", "6000");
    }
  }

  /**
   * Open sidebar
   */
  add(title, msg) {
    const notif: Notification = {
      id: uuid.v4(),
      title: title || "",
      msg: msg || ""
    };
    this.addEvent.next(notif);
    notif.timeout = this.defaultTimeout(notif);
    this.notifications.push(notif);
    return notif;
  }

  /**
   * Time to display notification on screen. (Localstorage key: notificationsDelay)
   */
  defaultTimeout(notif) {
    return setTimeout(() => {
      this.delete(notif.id);
    }, +localStorage.getItem("notificationsDelay"));
  }

  /**
   * update notification from id 
   */
  updateNotif(id, _notif: Notification) {
    this.notifications.map(notif => {
      if (notif.id === id) {
        if (_notif.msg) notif.msg = _notif.msg;
        if (_notif.title) notif.title = _notif.title;
        clearTimeout(notif.timeout);
        notif.timeout = this.defaultTimeout(notif);
      }
    });
  }
  /**
   * delete a notification
   */
  delete(id) {
    this.removeEvent.next(id);
    this.notifications = this.notifications.filter(notif => notif.id !== id);
  }

  /**
   * Delete all notifications 
   */
  deleteAll() {
    this.notifications.map(notif => this.delete(notif.id));
  }
}