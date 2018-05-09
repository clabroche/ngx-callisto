/**
 * Control the sidePanel outside the component
 */
export declare class SidePanelService {
    /**
     * Component watch this variable to open/close the sidePanel
     */
    _open: boolean;
    template: any;
    context: any;
    /**
     * Open sidePanel
     */
    open(template?: any, context?: any): void;
    /**
     * Close sidePanel
     */
    close(): void;
    /**
     * Toggle sidePanel
     */
    toggle(): void;
}
