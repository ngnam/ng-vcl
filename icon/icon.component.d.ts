import { IconService } from './icon.service';
export declare class IconComponent {
    private _iconService;
    src: string | undefined;
    svguse: string | undefined;
    iconClass: string | undefined;
    icon: string | undefined;
    label: string | undefined;
    ariaRole: string | undefined;
    constructor(_iconService: IconService);
    readonly mergedIconClass: string;
    readonly isAriaHidden: boolean;
}
