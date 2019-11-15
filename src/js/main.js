require.config({
    paths: {
        jquery: './../../node_modules/jquery/dist/jquery.min',
        md5: './jquery.md5',
        regLogin: './reg-login'
    },
    shim: {
        md5: ['jquery']
    }
})

require(['jquery', 'regLogin'], function ($, regObj) {
    regObj.regEvent($('.reg'));
    regObj.logEvent($('.login'));
    regObj.switchCode();
    regObj.tab();
})