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
                var codeArr = ['./../image/securityCode/2831.jpg', './../image/securityCode/4853.jpg', './../image/securityCode/0066.jpg', './../image/securityCode/0885.jpg',
                    './../image/securityCode/2953.jpg', './../image/securityCode/2560.jpg',
                    './../image/securityCode/3467.jpg', './../image/securityCode/1890.jpg'
                ];
                let arr = ['2831', '4853', '0066', '0885', '2953', '2560', '3467', '1890'];
                var ranNum = Math.floor(Math.random() * codeArr.length);
                return codeArr[ranNum];
            }
            // if (($('#imgCode').val() == randomImg().num) || ($('#securityCode').val() == randomImg().num)) {
            //     return 'true';
            // } else {
            //     console.log($('#imgCode').val(), randomImg().num)
            //     $('.error').append(`<p>请正确输入验证码</p>`);
            // }
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
                let i = $('.imgVer')[0].src.indexOf($('#securityCode').val());
                // console.log($('#securityCode').val(), $('.imgVer')[0].src)
                if ($('#phone')[0].dataset.phone == 'true' && $('#pwd')[0].dataset.pwd == 'true' && (i != -1 && i != 0)) {
                    callback && callback();
                } else {
                    // console.log($('#pwd').val());
                    if ($('#phone')[0].dataset.phone == 'false') {
                        $('.error').append(`<p>手机号码格式不正确</p>`);
                    }
                    if ($('#pwd')[0].dataset.pwd == 'false') {
                        console.log(30);
                        $('.error').append(`<p>密码格式不正确</p>`);
                    }
                    if (i == -1 || i == 0) {
                        $('.error').append(`<p>请正确输入验证码</p>`);
                    }
                }
            })
        },
        registerVerify: function (callback) {
            $('.reg').on('click', function () {
                $('.error').empty();
                let i = $('.imgVer')[0].src.indexOf($('#imgCode').val());
                if ($('#phone')[0].dataset.phone == 'true' && $('#pwd')[0].dataset.pwd == 'true' && $('#pwd').val() == $('#confirm').val() && (i != -1 && i != 0)) {
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
                    if (i == -1 || i == 0) {
                        //当输入框为空，i为0
                        $('.error').append(`<p>请正确输入验证码</p>`);
                    }
                }
            })
        },
        phoneVer: function () {
            let reg = /^1[3]|[5-9]\d{9}/;
            if (!($('#phone').val())) {
                $('#phone')[0].dataset.phone = 'false';
            }
            $('#phone').on('blur', function () {
                if (reg.test($(this).val())) {
                    $(this)[0].dataset.phone = 'true';
                } else if (reg.test($(this).val()) == 'false') {
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