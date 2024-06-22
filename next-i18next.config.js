"use strict";
const path = require('path');
Object.defineProperty(exports, "__esModule", { value: true });

var nextI18NextConfig = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'es', 'ca'],
        localeDetection: false
    },
    localePath: path.resolve('./public/locales'),
    ns: ['common'],
    reloadOnPrerender: process.env.NODE_ENV === 'development',
    debug: true,
};

exports.default = nextI18NextConfig;
