require.config({
    paths: {
        jquery: './../../node_modules/jquery/dist/jquery.min',
        cookie: './cookie',
        carPage: './shopCar1',
        common: './common'
    },
})
require(['jquery', 'carPage', 'common'], function ($, carObj, common) {
    carObj.getData(function () {
        carObj.totalPrice();
        common.saveUser();
        common.back();
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
    common.getBagNum();
    carObj.pay();
})