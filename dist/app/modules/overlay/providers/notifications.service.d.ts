/// <reference types="node" />
import { Subject } from 'rxjs';
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
export declare class CltNotificationsService {
    /**
     * Component watch this variable to open/close the sidebar
     */
    notifications: Array<Notification>;
    /**
     * Emit event that contains complete notification on add
     */
    addEvent: Subject<any>;
    /**
     * Emit event that contains id on remove
     */
    removeEvent: Subject<any>;
    /**
     * Fetch delay from localStorage
     */
    constructor();
    /**
     * Open sidebar
     */
    add(title: any, msg: any): Notification;
    /**
     * Time to display notification on screen. (Localstorage key: notificationsDelay)
     */
    defaultTimeout(notif: any): NodeJS.Timer;
    /**
     * update notification from id
     */
    updateNotif(id: any, _notif: Notification): void;
    /**
     * delete a notification
     */
    delete(id: any): void;
    /**
     * Delete all notifications
     */
    deleteAll(): void;
}
