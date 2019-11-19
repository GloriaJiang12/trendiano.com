require.config({
    paths: {
        jquery: './../../node_modules/jquery/dist/jquery.min',
        detailPage: './goodsDetail',
        cookie: './cookie'
    },
})
require(['detailPage'], function (detailObj) {
    detailObj.getData(function (id, price) {
        $('.addCar').on('click', function () {
            detailObj.addItem(id, price, '1');
        })
    });
    detailObj.active();
    detailObj.listClick();
    detailObj.scalePic();
    detailObj.getBagNum();


})