import { NgModule, InjectionToken } from '@angular/core';
import { UniversalCookieConsentComponent } from './components/universal-cookie-consent/universal-cookie-consent.component';
import {
    UniversalCookieConsentOptions,
    UNIVERSAL_COOKIE_CONSENT_OPTIONS
} from './models/universal-cookie-consent-options.model';
import { ModuleWithProviders } from '@angular/core';
import { UniversalCookieConsentService } from './services/universal-cookie-consent.service';
import {
    UniversalCookieConsentContainerComponent
} from './components/universal-cookie-consent-container/universal-cookie-consent-container.component';
import { CommonModule } from '@angular/common';

export const DEFAULT_MODULE_PROVIDERS = [
    UniversalCookieConsentService
];

export const UNIVERSAL_COOKIE_CONSENT_OPTION_DEFAULTS: Partial<UniversalCookieConsentOptions> = {
    acceptText: 'Accept',
    customizeText: 'Customize',
    backText: 'Back',
    saveText: 'Save',
    customizeHeadingText: 'Cookie Settings'
};

@NgModule({
    declarations: [UniversalCookieConsentComponent, UniversalCookieConsentContainerComponent],
    imports: [
        CommonModule
    ],
    exports: [UniversalCookieConsentComponent, UniversalCookieConsentContainerComponent],
    providers: DEFAULT_MODULE_PROVIDERS
})
export class UniversalCookieConsentModule {

    static forRoot(options: UniversalCookieConsentOptions): ModuleWithProviders {
        return {
            ngModule: UniversalCookieConsentModule,
            providers: [
                ...DEFAULT_MODULE_PROVIDERS,
                {
                    provide: UNIVERSAL_COOKIE_CONSENT_OPTIONS,
                    useValue: {
                        ...UNIVERSAL_COOKIE_CONSENT_OPTION_DEFAULTS,
                        ...options
                    }
                }
            ]
        };
    }

    constructor() {

    }
}
