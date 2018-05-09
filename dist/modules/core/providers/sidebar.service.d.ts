/**
 * Control the sidebar outside the component
 */
export declare class SideBarService {
    /**
     * Component watch this variable to open/close the sidebar
     */
    _open: boolean;
    /**
     * Open sidebar
     */
    open(): void;
    /**
     * Close sidebar
     */
    close(): void;
    /**
     * Toggle sidebar
     */
    toggle(): void;
}
