define(['jquery', 'cookie'], function ($, cookie) {
    return {
        // getData: function () {
        //     $.ajax({
        //         type: "post",
        //         url: "http://localhost:8080/1910class/trendiano.com/src/lib/goodList.php",
        //         // data: "data",
        //         // dataType: "dataType",
        //         success: function (res) {
        //             var str = '';
        //             var data = JSON.parse(res);
        //             console.log(data);
        //             // console.log(JSON.parse(res));
        //             data.forEach((elm, index) => {
        //                 // console.log(elm.src);
        //                 str += `<li><a href="./../html/goodsDetail.html?id=${elm.id}">
        //                     <img src="./../image/goodsList/${elm.src}" alt="">
        //                     <span class="T-brand">TRENDIANO</span>
        //                     <span class="T-name">${elm.title}</span>
        //                     <p><span class="price">￥${elm.price}</span></p>
        //                 </a>
        //             </li>`;
        //             })
        //             $('.itemList').append(str);
        //         }
        //     });
        // },
        picHover: function () {
            $('.mainRight').on({
                mouseover: function () {
                    // console.log(this);
                    let page = $('.pageActive').text();
                    page = (page - 1) * 12;
                    console.log(page);
                    var index = $('.itemList>li').index($(this).parents('li'));
                    let number = index + 1 + page;
                    console.log(number);
                    if (number < 15) {
                        var baseUrl = './../image/goodsList/';
                        $(this)[0].src = `${baseUrl}list${number}-hover.jpg`;
                    } else {
                        $(this)[0].src = `./../image/goodsList/list-hover.jpg`;
                    }
                },
                mouseout: function () {
                    let page = $('.pageActive').text();
                    page = (page - 1) * 12;
                    var index = $('.itemList>li').index($(this).parents('li'));
                    let number = index + 1 + page;
                    if (number < 15) {
                        var baseUrl = './../image/goodsList/';
                        $(this)[0].src = `${baseUrl}list${number}.jpg`;
                    } else {
                        $(this)[0].src = `./../image/goodsList/list.jpg`;
                    }
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
        pagechange: {
            next: function (callback) {
                $('.next').on('click', function () {
                    $('.itemList').empty();
                    if ($('.pageActive').text() != $('.pageNum .num').length) {
                        $('.pageActive').next().addClass('pageActive').prev().removeClass('pageActive');
                        callback && callback($('.pageActive').text());
                    }
                })
            },
            prev: function (callback) {

                $('.prev').on('click', function () {
                    $('.itemList').empty();
                    if ($('.pageActive').text() != '1') {
                        $('.pageActive').prev().addClass('pageActive').next().removeClass('pageActive');
                        callback && callback($('.pageActive').text());
                    }
                })
            },
            current: function (callback) {
                $('.num').on('click', function () {
                    $('.itemList').empty();
                    $(this).addClass('pageActive').siblings().removeClass('pageActive');
                    callback && callback($('.pageActive').text());
                })

            }
        },
        pageAjax: function (pageNum) {
            // console.log(pageNum);
            $.ajax({
                type: "post",
                url: "./../lib/pageNum.php",
                data: {
                    page: pageNum,
                },
                dataType: "json",
                success: function (res) {
                    var str = '';
                    console.log(res);
                    // var data = JSON.parse(res);
                    // console.log(data);
                    // console.log(JSON.parse(res));
                    res.forEach((elm, index) => {
                        // console.log(elm.src);
                        str += `<li><a href="./../html/goodsDetail.html?id=${elm.id}">
                            <img src="./../image/goodsList/${elm.src}" alt="">
                            <span class="T-brand">TRENDIANO</span>
                            <span class="T-name">${elm.title}</span>
                            <p><span class="price">￥${elm.price}</span></p>
                        </a>
                    </li>`;
                    });
                    $('.itemList').append(str);
                }
            });
        },
        // switchPage: function () {
        //     $('.pageNum').on('click', ' .num', function () {
        //         //添加后就是未来元素，用委托
        //         $('.pageNum span').replaceWith(`<a class="num">${$('.pageNum span').html()}</a>`);
        //         $(this).replaceWith(`<span class="current">${$(this).html()}</span>`);

        //     })
        // },
        // next: function () {
        //     // $('.pageNum').on('click', '.next', function () {
        //     //     var span = $('.pageNum span');
        //     //     span.next().replaceWith(`<span class="current">${parseInt(span.html()) + 1}</span>`);
        //     //     span.replaceWith(`<a class="num">${span.html()}</a>`);

        //     // })
        // },


    }
})