require.config({
    paths: {
        jquery: './../../node_modules/jquery/dist/jquery.min',
        detailPage: './goodsDetail',
        cookie: './cookie',
        common: './common'
    },
})
require(['detailPage', 'common'], function (detailObj, common) {
    detailObj.getData(function (id, price) {
        $('.addCar').on('click', function () {
            let size = $('.optSize li.bg a').text();
            if (size) {
                detailObj.addItem(id, price, '1', size);
                location.href = './../html/shopCar.html';
            } else {
                alert('请选择尺码');
            }

        })
    });
    detailObj.active();
    detailObj.listClick();
    detailObj.scalePic();
    common.getBagNum();
    common.saveUser();
    common.back();
    common.scrollListDetail();

})