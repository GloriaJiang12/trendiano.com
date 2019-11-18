require.config({
    paths: {
        jquery: './../../node_modules/jquery/dist/jquery.min',
        listPage: './goodsList'
    },
})
require(['listPage'], function (listObj) {
    listObj.getData();
    listObj.picHover();
})