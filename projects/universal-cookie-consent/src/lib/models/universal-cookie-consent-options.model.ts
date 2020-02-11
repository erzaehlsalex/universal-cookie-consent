import { UniversalCookieConsentType } from './universal-cookie-consent-type.model';
import { InjectionToken } from '@angular/core';

export const UNIVERSAL_COOKIE_CONSENT_OPTIONS = new InjectionToken<UniversalCookieConsentOptions>(
    'UniversalCookieConsentOptions');

/**
 * Configuration settings for the universal cookie consent
 */
export interface UniversalCookieConsentOptions {

    /**
     * Url for the logo displayed in the cookie consent modal
     */
    logoUrl?: string;

    consentTypes: UniversalCookieConsentType[];

    /**
     * Flag whether to disable scrolling on the body while the cookie consent modal is shown
     */
    disableBodyScroll?: boolean;

    introText?: string;

    customizeText?: string;

    acceptText?: string;

    customizeHeadingText?: string;

    customizeIntroText?: string;

    backText?: string;

    saveText?: string;

}
