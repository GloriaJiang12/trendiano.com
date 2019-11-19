require.config({
    paths: {
        jquery: './../../node_modules/jquery/dist/jquery.min',
        indePage: './index',
        cookie: './cookie'
    },
    // shim: {
    //     md5: ['jquery']
    // }
})

require(['indePage'], function (indObj) {
    indObj.getData();
    indObj.getBagNum();
    indObj.saveUser();
    indObj.back();
})