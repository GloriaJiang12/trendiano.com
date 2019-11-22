require.config({
    paths: {
        jquery: './../../node_modules/jquery/dist/jquery.min',
        lazyload: './../js/jquery.lazyload.min',
        indePage: './index',
        cookie: './cookie',
        common: './common'
    },
    shim: {
        lazyload: ['jquery']
    }
})

require(['indePage', 'common'], function (indObj, common) {
    indObj.getData();
    common.getBagNum();
    common.saveUser();
    common.back();
    common.scroll();
})