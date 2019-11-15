define(['jquery', 'md5'], function ($, md5) {
    return {
        regEvent: function (selector) {
            console.log(selector);
            $(selector).on('click', function () {
                console.log(1);
                $.ajax({
                    type: "post",
                    url: "./../lib/reg.php",
                    data: {
                        phone: $('#phone').val(),
                        password: $.md5($('#pwd').val())
                    },
                    dataType: "json",
                    success: function (res) {
                        console.log(res);
                    }
                });
            })
        },
        logEvent: function (selector) {
            $(selector).on('click', function () {
                $.ajax({
                    type: "post",
                    url: "./../lib/login.php",
                    data: {
                        phone: $('#phone').val(),
                        password: $.md5($('#pwd').val())
                    },
                    dataType: "json",
                    success: function (res) {
                        console.log(res);
                    }
                });
            })
        },
        switchCode: function () {
            $('.imgVer').on('click', function () {
                console.log($(this)[0].src);
                $(this)[0].src = randomImg();
            })

            function randomImg() {
                var codeArr = ['./../image/securityCode/1.jpg', './../image/securityCode/2.jpg', './../image/securityCode/3.jpg', './../image/securityCode/4.jpg',
                    './../image/securityCode/5.jpg', './../image/securityCode/6.jpg',
                    './../image/securityCode/7.jpg', './../image/securityCode/7.jpg'
                ];
                var ranNum = Math.floor(Math.random() * codeArr.length);
                return codeArr[ranNum];
            }
        },
        tab: function () {
            $('.wrapper>ul>li').on('click', function () {
                var index = $('.wrapper>ul>li').index(this);
                console.log($(this));
                $(this).addClass('active').siblings().removeClass('active');
                $('.wrapper>div').eq(index).addClass('show').siblings().removeClass('show');
            })
        }
    }
});