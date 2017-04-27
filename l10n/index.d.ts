import { ModuleWithProviders } from '@angular/core';
import { L10nLoaderService, L10nNoopLoaderService, L10nStaticLoaderService, L10nAsyncLoaderService } from './l10n-loader.service';
import { L10nParserService, L10nFormatParserService } from './l10n-parser.service';
import { L10nService, L10nConfig } from './l10n.service';
export { L10nNoopLoaderService, L10nStaticLoaderService, L10nAsyncLoaderService, L10nFormatParserService, L10nService };
export interface IL10nLoaderService {
    new (...args: any[]): L10nLoaderService;
}
export interface IL10nParserService {
    new (...args: any[]): L10nParserService;
}
export interface RootConfig {
    config?: L10nConfig;
    loader: IL10nLoaderService;
    loaderConfig: any;
    parser?: any;
}
export declare class L10nModule {
    static forRoot(config: RootConfig): ModuleWithProviders;
}
