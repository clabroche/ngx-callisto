import { Renderer2, ElementRef } from "@angular/core";
import { NotificationsService } from "../providers/notifications.service";
/**
 * Display an mini-popup
 * @example
 * const ns= new NotificationsService()
 * const getFirstNotifId = _=>ns.notifications[0].id
 * const random=_=>Math.random()
 *
 * <button (click)="ns.add('add','test')">Add notif</button>
 * <button (click)="ns.delete(getFirstNotifId())">delete notif</button>
 * <button (click)="ns.deleteAll()">delete all notif</button>
 * <button (click)="ns.updateNotif(getFirstNotifId(),{title:random(),msg: random()})">Update notif</button>
 * <notifications></notifications>
 */
export declare class NotificationsComponent {
    ns: NotificationsService;
    private renderer2;
    htmlNotifications: Iterable<ElementRef>;
    _notifications: any[];
    /**
     * Load dependencies instances
     */
    constructor(ns: NotificationsService, renderer2: Renderer2);
    /**
     * launch css animations and delete notification from id
     */
    deleteNotif(id: any): Promise<{}>;
    /**
     * delete All notifications
     */
    deleteAll(): any;
    /**
     * Get HTML ref of the concern id
     */
    getHtmlNotif(id: any): Promise<any>;
}
