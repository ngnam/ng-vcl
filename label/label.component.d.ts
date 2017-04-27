export declare class LabelComponent {
    label: string | undefined;
    type: 'primary' | 'success' | 'info' | 'warning' | 'error' | undefined;
    /**
     * TODO(issue) this overwrites the users classes
     * @link https://github.com/angular/angular/issues/7289
     */
    readonly vclPrimary: boolean;
    readonly vclSuccess: boolean;
    readonly vclInfo: boolean;
    readonly vclWarning: boolean;
    readonly vclError: boolean;
}
