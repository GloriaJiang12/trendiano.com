require.config({
    paths: {
        jquery: './../../node_modules/jquery/dist/jquery.min',
        listPage: './goodsList',
        cookie: './cookie'
    },
})
require(['listPage'], function (listObj) {
    // listObj.getData();
    listObj.pageAjax($('.pageActive').text());
    listObj.picHover();
    listObj.getBagNum();
    listObj.pagechange.next(function (page) {
        listObj.pageAjax(page);
    });
    listObj.pagechange.prev(function (page) {
        listObj.pageAjax(page);
    });
    listObj.pagechange.current(function (page) {
        listObj.pageAjax(page);
    });
    // listObj.pageAjax();
})