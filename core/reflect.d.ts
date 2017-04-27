import { Type, AnimationEntryMetadata, Component } from '@angular/core';
export declare function defineMetadata(key: string, value: any, target: any): void;
export declare function getMetadata(key: string, target: any): any;
export declare function setAnnotation(cls: Type<{}>, key: string, value: any): void;
export declare function getAnnotation(cls: Type<{}>): Component;
export declare function setAnimations(cls: Type<{}>, animations: AnimationEntryMetadata[]): void;
