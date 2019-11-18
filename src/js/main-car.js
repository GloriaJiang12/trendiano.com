require.config({
    paths: {
        jquery: './../../node_modules/jquery/dist/jquery.min',
        cookie: './cookie',
        carPage: './shopCar1',
    },
})
require(['jquery', 'carPage'], function ($, carObj) {
    carObj.getData();
    carObj.delete();
    carObj.allCheck();
})