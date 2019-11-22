require.config({
    paths: {
        jquery: './../../node_modules/jquery/dist/jquery.min',
        lazyload: './../js/jquery.lazyload.min',
        listPage: './goodsList',
        cookie: './cookie',
        common: './common'
    },
    shim: {
        lazyload: ['jquery']
    },

})
require(['listPage', 'common'], function (listObj, common) {
    // listObj.getData();
    listObj.pageAjax($('.pageActive').text());
    listObj.picHover();
    common.getBagNum();
    listObj.pagechange.next(function (page) {
        listObj.pageAjax(page);
    });
    listObj.pagechange.prev(function (page) {
        listObj.pageAjax(page);
    });
    listObj.pagechange.current(function (page) {
        listObj.pageAjax(page);
    });
    common.saveUser();
    common.back();
    common.scrollListDetail();
})