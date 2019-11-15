require.config({
    path: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        md5: './jquery.md5',
        regLogin: './reg-login'
    },
    shim: {
        md5: ['jquery']
    }
})

require(['jquery'], function () {

})