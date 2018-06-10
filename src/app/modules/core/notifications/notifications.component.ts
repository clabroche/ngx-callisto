import { Component, Renderer2, ViewChildren, ElementRef, QueryList } from "@angular/core";
import { DefiNotificationsService } from "../providers/notifications.service";
import * as bluebird from 'bluebird'
import { Observable } from "rxjs/Observable";

/**
 * Display an mini-popup 
 * @example
 * const ns= new DefiNotificationsService()
 * const getFirstNotifId = _=>ns.notifications[0].id
 * const random=_=>Math.random()
 *
 * <button (click)="ns.add('add','test')">Add notif</button>
 * <button (click)="ns.delete(getFirstNotifId())">delete notif</button>
 * <button (click)="ns.deleteAll()">delete all notif</button>
 * <button (click)="ns.updateNotif(getFirstNotifId(),{title:random(),msg: random()})">Update notif</button>
 * <notifications></notifications>
 */
@Component({
  selector: "defi-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.scss"]
})
export class DefiNotificationsComponent {

  @ViewChildren('notifModel') htmlNotifications:Iterable<ElementRef>

  _notifications = []

  /**
   * Load dependencies instances
   */
  constructor(public ns: DefiNotificationsService, private renderer2: Renderer2) {
    this.ns.addEvent.subscribe(data => this._notifications.push(data))
    this.ns.removeEvent.subscribe((id:any) => this.deleteNotif(id))
  }

  /**
   * launch css animations and delete notification from id 
   */
  deleteNotif(id){
    return new Promise(async (resolve, reject) => {
      const htmlNotif = await this.getHtmlNotif(id)
      if(!htmlNotif) return
      this.renderer2.addClass(htmlNotif,"deleteNotif")
      setTimeout(() => {
        this._notifications = this._notifications.filter(notif => notif.id !== id)
        resolve()
      }, 500);
    });
  }

  /**
   * delete All notifications
   */
  deleteAll(){

    return bluebird.each(this.htmlNotifications, htmlNotif=>{
      this.deleteNotif(htmlNotif.nativeElement.id)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 50);  
      });
    })
  }

  /**
   * Get HTML ref of the concern id
   */
  async getHtmlNotif(id) {
    let htmlNotif = await bluebird.filter(this.htmlNotifications, htmlNotif => htmlNotif.nativeElement.id === id)
    if (htmlNotif.length) return htmlNotif.pop().nativeElement
  }
}
 