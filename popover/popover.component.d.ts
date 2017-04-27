import { EventEmitter, ElementRef, SimpleChanges } from '@angular/core';
import { ObservableComponent } from "../core/index";
export declare type AttachmentX = 'left' | 'center' | 'right';
export declare const AttachmentX: {
    Left: AttachmentX;
    Center: AttachmentX;
    Right: AttachmentX;
};
export declare type AttachmentY = 'top' | 'center' | 'bottom';
export declare const AttachmentY: {
    Top: AttachmentY;
    Center: AttachmentY;
    Bottom: AttachmentY;
};
export declare class PopoverComponent extends ObservableComponent {
    protected readonly me: ElementRef;
    private static readonly Tag;
    private tag;
    debug: false;
    target: string | any;
    targetX: AttachmentX;
    targetY: AttachmentY;
    attachmentX: AttachmentX;
    attachmentY: AttachmentY;
    _visible: boolean;
    visible: boolean;
    visibleChange: EventEmitter<boolean>;
    private translateX;
    private translateY;
    readonly hidden: boolean;
    visibility: string;
    readonly transform: string;
    readonly popoverState: string;
    constructor(me: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private onWindowResize(ev);
    private getTargetPosition();
    private getAttachmentPosition();
    open(): void;
    close(): void;
    toggle(): void;
    reposition(): void;
}
