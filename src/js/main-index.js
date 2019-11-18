require.config({
    paths: {
        jquery: './../../node_modules/jquery/dist/jquery.min',
        indePage: './index'
    },
    // shim: {
    //     md5: ['jquery']
    // }
})

require(['indePage'], function (indObj) {
    indObj.getData();
})