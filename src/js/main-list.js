require.config({
    paths: {
        jquery: './../../node_modules/jquery/dist/jquery.min',
        listPage: './goodsList',
        cookie: './cookie'
    },
})
require(['listPage'], function (listObj) {
    listObj.getData();
    listObj.picHover();
    listObj.getBagNum();
})