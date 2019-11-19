require.config({
    paths: {
        jquery: './../../node_modules/jquery/dist/jquery.min',
        md5: './jquery.md5',
        cookie: './cookie',
        regLogin: './reg-login'
    },
    shim: {
        md5: ['jquery']
    }
})

require(['jquery', 'regLogin'], function ($, regObj) {

    regObj.switchCode();
    regObj.tab();
    regObj.phoneVer();
    regObj.pwdVer();
    regObj.loginVerify(function () {
        console.log(222222);
        regObj.logEvent($('.login'));
    })
    regObj.registerVerify(function () {
        regObj.regEvent($('.reg'));
    })
    // regObj.pwdConfirmVer();

})