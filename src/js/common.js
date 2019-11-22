define([
    'jquery',
    'cookie',
], function ($, cookie) {
    return {
        scrollListDetail: function () {
            let high = $('.title .change');
            $(document).on('scroll', function () {
                let navTop = $(this).scrollTop();
                console.log(navTop);
                if (navTop >= 88) {
                    $('.nav').css({
                        position: "fixed",
                        top: 0,
                    });
                    $('.title').css({
                        position: "fixed",
                        top: 47,
                        'z-index': 800,
                    })
                    if (high) {
                        high.css({
                            'line-height': '48px'
                        })
                    }
                } else {
                    $('.nav').css({
                        position: "relative",
                    });
                    $('.title').css({
                        position: "relative",
                        top: 0,
                    })
                    if (high) {
                        high.css({
                            'line-height': '80px'
                        })
                    }
                }
            })
        },
        scroll: function () {
            $(document).on('scroll', function () {
                let navTop = $(this).scrollTop();
                console.log(navTop);
                if (navTop >= 88) {
                    $('.nav').css({
                        position: "fixed",
                        top: 0,
                    })
                } else {
                    $('.nav').css({
                        position: "relative",
                    })
                }
            })
        },
        saveUser: function () {
            let user = cookie.get('user');
            if (user) {
                let user = (JSON.parse(cookie.get('user'))).user;
                console.log(user);
                $('.loginIn').html('退出');
                $('.welcome').html(`${user}，您好！`);
            }
        },
        back: function () {
            $('.loginIn').on('click', function () {
                if ($(this).html() == '登录') {
                    location.href = "./../html/login.html";
                    console.log($(this).html());
                } else if ($(this).html() == '退出') {
                    console.log(2222);
                    console.log($(this).html());
                    location.href = "./../html/index1.html";
                    cookie.remove('user');
                    $('.loginIn').html('登录');
                    $('.welcome').empty();
                }
            })

        },
        getBagNum: function () {
            let shop = cookie.get('shop');
            if (shop) {
                shop = JSON.parse(shop);
                let sum = 0;
                // console.log(shop);
                shop.forEach((elm, index) => {
                    let num = parseInt(elm.num);
                    sum += num;
                })
                $('.carNum').html(sum);
            }
        },
    }

});