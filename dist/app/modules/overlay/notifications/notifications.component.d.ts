import { Renderer2, ElementRef } from '@angular/core';
import { CltNotificationsService } from '../providers/notifications.service';
/**
 * Display an mini-popup
 */
export declare class CltNotificationsComponent {
    ns: CltNotificationsService;
    private renderer2;
    htmlNotifications: Iterable<ElementRef>;
    _notifications: any[];
    /**
     * Load dependencies instances
     */
    constructor(ns: CltNotificationsService, renderer2: Renderer2);
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
