define(['jquery', 'md5', 'cookie'], function ($, md5, cookie) {
    return {
        regEvent: function (selector) {
            // console.log(selector);
            // $(selector).on('click', function () {
            $.ajax({
                type: "post",
                url: "./../lib/reg.php",
                data: {
                    phone: $('#phone').val(),
                    password: $.md5($('#pwd').val())
                },
                dataType: "json",
                success: function (res) {
                    console.log(res.msg);
                    if (res.msg == '注册成功') {
                        let options = {
                            user: $('#phone').val(),
                            pwd: $.md5($('#pwd').val())
                        }
                        location.href = './../html/index1.html';
                        cookie.set('user', JSON.stringify(options));
                    } else if ((res.msg == '用户名已存在')) {
                        alert(res.msg);
                        location.href = './../html/regester.html';
                    }

                }
            });
            // })
        },
        logEvent: function (selector) {
            // $(selector).on('click', function () {
            $.ajax({
                type: "post",
                url: "./../lib/login.php",
                data: {
                    phone: $('#phone').val(),
                    password: $.md5($('#pwd').val())
                },
                dataType: "json",
                success: function (res) {
                    console.log(res.msg);
                    let user = $('#phone').val();
                    if (res.msg == '登陆成功') {
                        let options = {
                            user: $('#phone').val(),
                            pwd: $.md5($('#pwd').val())
                        }
                        console.log(1);
                        location.href = './../html/index1.html';
                        cookie.set('user', JSON.stringify(options));
                    } else if ((res.msg == '账号或密码错误')) {
                        alert(res.msg);
                        location.href = './../html/login.html';
                    }
                }
            });
            // })
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
                // console.log($(this));
                $(this).addClass('active').siblings().removeClass('active');
                $('.wrapper>div').eq(index).addClass('show').siblings().removeClass('show');
            })
        },
        loginVerify: function (callback) {

            $('.login').on('click', function () {
                $('.error').empty();
                if ($('#phone')[0].dataset.phone == 'true' && $('#pwd')[0].dataset.pwd == 'true') {
                    console.log(1111111111);
                    callback && callback();
                } else {
                    console.log($('#pwd').val());
                    if ($('#phone')[0].dataset.phone == 'false') {
                        $('.error').append(`<p>手机号码格式不正确</p>`);
                    }
                    if ($('#pwd')[0].dataset.pwd == 'false') {
                        console.log(30);
                        $('.error').append(`<p>密码格式不正确</p>`);
                    }
                }
            })
        },
        registerVerify: function (callback) {
            $('.reg').on('click', function () {
                $('.error').empty();
                if ($('#phone')[0].dataset.phone == 'true' && $('#pwd')[0].dataset.pwd == 'true' && $('#pwd').val() == $('#confirm').val()) {
                    callback && callback();
                } else {
                    if ($('#phone')[0].dataset.phone == 'false') {
                        $('.error').append(`<p>手机号码格式不正确</p>`);
                    }
                    if ($('#pwd')[0].dataset.pwd == 'false') {
                        $('.error').append(`<p>密码格式不正确</p>`);
                    }
                    if ($('#pwd').val() != $('#confirm').val()) {
                        $('.error').append(`<p>两次密码不一致</p>`);
                    }
                }


            })
        },
        phoneVer: function () {
            let reg = /^1[3]|[5-9]\d{9}/;
            // console.log($('#phone'));
            if (!($('#phone').val())) {
                $('#phone')[0].dataset.phone = 'false';
            }
            $('#phone').on('blur', function () {
                // console.log(33333);
                if (reg.test($(this).val())) {
                    $(this)[0].dataset.phone = 'true';
                } else if (reg.test($(this).val()) == 'false') {
                    // console.log(44444);
                    $(this)[0].dataset.phone = 'false';

                }
            })


        },
        pwdVer: function () {
            let reg = /^.{6,16}$/;
            if (!($('#pwd').val())) {
                $('#pwd')[0].dataset.pwd = 'false';
            }
            $('#pwd').on('blur', function () {
                if (reg.test($(this).val())) {
                    $(this)[0].dataset.pwd = 'true';
                } else if (reg.test($(this).val()) == 'false') {
                    $(this)[0].dataset.pwd = 'false';
                }
            })
        },
        // pwdConfirmVer: function () {
        //     $('#confirm').on('blur', function () {
        //         if ($(this).val() == $('#pwd').val()) {
        //             $(this)[0].dataset.conf = 'true';
        //         } else {
        //             $(this)[0].dataset.conf = 'false';
        //         }
        //     })
        // }


    }
});