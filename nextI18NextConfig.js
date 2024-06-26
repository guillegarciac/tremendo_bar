"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nextI18NextConfig = {
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en', 'ca'],
        localeDetection: false,
    },
    localePath: 'public/locales',
    ns: ['common'],
    reloadOnPrerender: process.env.NODE_ENV === 'development',
    debug: true,
};
exports.default = nextI18NextConfig;
