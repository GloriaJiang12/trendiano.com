require.config({
    paths: {
        jquery: './../../node_modules/jquery/dist/jquery.min',
        cookie: './cookie',
        carPage: './shopCar1',
    },
})
require(['jquery', 'carPage'], function ($, carObj) {
    carObj.getData(function () {
        carObj.totalPrice();
    });
    carObj.delete(function () {

        carObj.totalPrice();

    });
    carObj.plusCut(function () {

        carObj.totalPrice();
    });
    carObj.allCheck(function () {
        carObj.totalPrice();
    });
    carObj.singleCheck(function () {
        carObj.totalPrice();
    });
    carObj.deleteCheck(function () {
        carObj.totalPrice();
    });
})