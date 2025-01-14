"use strict";
var global = typeof window !== 'undefined' ? window : self;
global.config = {
    //apiUrl: typeof window !== 'undefined' && window.location ? window.location.href.substr(0, window.location.href.lastIndexOf('/') + 1) + 'api/' : 'https://wallet.kryptokrona.com/api/',
    apiUrl: 'http://wallet.kryptokrona.se/api/',
    mainnetExplorerUrl: "http://explorer.kryptokrona.com",
    coinUnitPlaces: 2,
    coinDisplayUnitPlaces: 2,
    txMinConfirms: 60,
    txCoinbaseMinConfirms: 120,
    addressPrefix: 2239254,
    integratedAddressPrefix: 0,
    addressPrefixTestnet: 0,
    integratedAddressPrefixTestnet: 0,
    subAddressPrefix: 0,
    subAddressPrefixTestnet: 0,
    feePerKB: new JSBigInt('100'),
    dustThreshold: new JSBigInt('1'),
    defaultMixin: 7,
    idleTimeout: 30,
    idleWarningDuration: 20,
    coinSymbol: 'XKR',
    coinName: 'kryptokrona',
    coinUriPrefix: 'kryptokrona:',
    avgBlockTime: 90,
    maxBlockNumber: 500000000,
};
