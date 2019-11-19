define(['jquery', 'cookie'], function ($, cookie) {
    return {
        getData: function () {
            $.ajax({
                type: "post",
                url: "http://localhost:8080/1910class/trendiano.com/src/lib/index1.php",
                // dataType: "dataType",
                success: function (res) {
                    var baseUrl = './../image/index/';
                    // console.log(res);
                    var data = JSON.parse(res);
                    var banImg = JSON.parse(data[0].img);
                    var smbanStr = '';
                    var proStr = '';
                    var newsStr = '';
                    var newStr = '';
                    var sImg = JSON.parse(data[1].img);
                    sImg.forEach((elm, index) => {
                        if (index >= 0 && index <= 3) {
                            smbanStr += `<li><a href=""><img src="${baseUrl}${elm.bn}" alt=""><span>${elm.desc}</span></a></li>`;
                        }

                        if (index >= 4 && index <= 8) {
                            proStr += ` <li><a href="./goodsList.html"><img src="${baseUrl}${elm.row}" alt=""><span>${elm.pro}</span></a></li>`;

                        }

                        if (index >= 9 && index <= 14) {
                            newsStr += ` <li><a href=""><img src="${baseUrl}${elm.news}" alt=""><span>${elm.des}</span></a>
                        </li>`;
                        }

                        if (index >= 15 && index <= 18) {
                            // for (var i in elm) {
                            newStr += `<li><a href=""><img src="${baseUrl}${elm.n}" alt=""><span>${elm.de}</span></a>
                        </li>`;
                        }
                    })
                    var banStr = `<a href=""><img src="${baseUrl}${banImg[0].banner}" alt="" ></a>`;

                    $('.banner').append(banStr);
                    $('.smallban').append(smbanStr);
                    $('.product>ul').append(proStr);
                    $('.news>ul').append(newsStr);
                    $('.newGoods>ul').append(newStr);

                }
            });
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

        }
    }
})