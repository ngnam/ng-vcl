import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
export declare class BusyIndicatorComponent {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    type: 'straight' | 'circular';
    label: string;
    iconHeight: string;
    iconWidth: string;
    readonly indicatorSrc: SafeResourceUrl;
}
