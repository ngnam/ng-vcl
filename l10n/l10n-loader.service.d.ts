import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
export interface TranslationPackage {
    [key: string]: string;
}
export interface TranslationPackageGroup {
    [key: string]: {
        [locale: string]: string;
    };
}
export declare let L10N_LOADER_CONFIG: InjectionToken<{}>;
export declare abstract class L10nLoaderService {
    /**
     * Return a TranslationPackage as a stream.
     * May emit new values over time
     */
    abstract getTranslationPackage(locale: string): Observable<TranslationPackage>;
    abstract getSupportedLocales(): Observable<string[]>;
}
export declare class L10nStaticLoaderService extends L10nLoaderService {
    private config;
    constructor(config: TranslationPackageGroup);
    getTranslationPackage(locale: string): Observable<TranslationPackage>;
    getSupportedLocales(): Observable<string[]>;
}
export declare class L10nAsyncLoaderService extends L10nLoaderService {
    private config;
    private data$;
    constructor(config: any);
    getTranslationPackage(locale: string): Observable<TranslationPackage>;
    getSupportedLocales(): Observable<string[]>;
}
export declare class L10nNoopLoaderService extends L10nLoaderService {
    getTranslationPackage(locale: string): Observable<TranslationPackage>;
    getSupportedLocales(): Observable<string[]>;
}
