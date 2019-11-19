define(['jquery', 'cookie'], function ($, cookie) {
    return {
        getData: function () {
            $.ajax({
                type: "post",
                url: "http://localhost:8080/1910class/trendiano.com/src/lib/goodList.php",
                // data: "data",
                // dataType: "dataType",
                success: function (res) {
                    var str = '';
                    var data = JSON.parse(res);
                    console.log(JSON.parse(res));
                    data.forEach((elm, index) => {
                        console.log(elm.src);
                        str += `<li><a href="./../html/goodsDetail.html?id=${elm.id}">
                            <img src="./../image/goodsList/${elm.src}" alt="">
                            <span class="T-brand">TRENDIANO</span>
                            <span class="T-name">${elm.title}</span>
                            <p><span class="price">￥${elm.price}</span></p>
                        </a>
                    </li>`;
                    })
                    $('.itemList').append(str);
                }
            });
        },
        picHover: function () {
            $('.mainRight').on({
                mouseover: function () {
                    console.log(this);
                    // console.log($(this)[0].src);
                    console.log($(this).parents('li'));
                    // console.log($('.itemList'))
                    var index = $('.itemList>li').index($(this).parents('li'));
                    var baseUrl = './../image/goodsList/';
                    $(this)[0].src = `${baseUrl}list${index+1}-hover.jpg`;
                },
                mouseout: function () {
                    var index = $('.itemList>li').index($(this).parents('li'));
                    var baseUrl = './../image/goodsList/';
                    $(this)[0].src = `${baseUrl}list${index+1}.jpg`;
                }
            }, 'li>a>img')
        },
        getBagNum: function () {
            let shop = cookie.get('shop');
            shop = JSON.parse(shop);
            let sum = 0;
            // console.log(shop);
            shop.forEach((elm, index) => {
                let num = parseInt(elm.num);
                sum += num;
            })
            $('.carNum').html(sum);
        },
    }
})