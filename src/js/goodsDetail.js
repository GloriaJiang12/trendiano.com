define(['jquery', 'cookie'], function ($, cookie) {
    return {
        getData: function (callback) {
            var id = location.search.split('=')[1];
            $.ajax({
                type: "get",
                url: "http://localhost:8080/1910class/trendiano.com/src/lib/goodDetail.php",
                data: {
                    id: id
                },
                dataType: "json",
                success: function (res) {
                    // console.log(res);
                    var listPic = JSON.parse(res.carPic);
                    var str = '';
                    for (var i in listPic) {
                        str += `<li><img src="./../image/goodsInfo/${listPic[i]}" alt=""></li>`;
                    }
                    $('.imgList').append(str);
                    $('.title span').prepend(res.title);
                    $('.detail>h2').prepend(res.title);
                    $('.proPrice').append(`￥${res.price}`);
                    $('.mid').prepend(`<img src="./../image/goodsInfo/${listPic.p1}" alt="" class="midImg">`);
                    $('.bigBox').prepend(`<img src="./../image/goodsInfo/${listPic.p1}" alt="" class="bigImg">`);
                    callback && callback(res.id, res.price);
                }
            });

        },
        addItem: function (id, price, num) {
            var shop = cookie.get('shop');

            var options = {
                id: id,
                price: price,
                num: num
            }

            if (shop) {
                shop = JSON.parse(shop);
                console.log(shop);
                if (shop.some(elm => elm.id == id)) {
                    shop.forEach(elm => {
                        elm.id == id ? elm.num = num : null
                    })
                } else {
                    shop.push(options);
                }
            } else {
                shop = [];
                shop.push(options);

                // console.log(JSON.parse(cookie.get('shop')));
            }
            cookie.set('shop', JSON.stringify(shop), 1);

        },
        active: function () {
            var countNextClick = 1;
            var countPreClick = 1;
            $('.imgListBox>span').on('click', function () {

                var i = $('.imgListBox>span').index(this);
                var clickNum = parseInt(($('.imgList').height() - $('.imgBox').height()) / 132);
                // console.log(countPreClick);
                // console.log(countNextClick);
                if ((countNextClick == (clickNum + 1)) && (countPreClick == (clickNum + 1))) {
                    countNextClick = 1;
                    countPreClick = 1;
                }
                if (i) {
                    if (countNextClick <= clickNum) {
                        $('.imgList').css({
                            'top': `-=128`
                        })
                        countNextClick++;
                    }
                } else {
                    // if (countPreClick > clickNum) return;
                    if (countPreClick < countNextClick) {
                        $('.imgList').css({
                            'top': `+=128`
                        });
                        countPreClick++;
                    }
                }
                // if ((countNextClick > clickNum) | (countPreClick > clickNum)) {
                //     return;
                // }

            })
            $('.optSize>li:not(".size ")').on('click', function () {
                $(this).addClass('bg').siblings().removeClass('bg');
            })
        },
        listClick: function () {
            $('.imgList').on('click', 'li>img', function () {
                var midPic = $(this).parents('.mainCenter').find('.mid>img');
                var bigPic = $(this).parents('.mainCenter').find('.bigBox>img')
                midPic[0].src = $(this)[0].src;
                bigPic[0].src = $(this)[0].src;
            })
        },
        scalePic: function () {
            $('.mid').on({
                'mouseover': function () {
                    // console.log($('.bigBox').height());
                    $('.bigBox').show();
                    $('.moveBox').show();
                    $('.moveBox').css({
                        'height': $('.bigBox').height() * $('.mid').height() / $(
                            '.bigImg').height() + 'px',
                        'width': $('.bigBox').width() * $('.mid').width() / $(
                            '.bigImg').width() + 'px'
                    });

                },
                'mousemove': function (ev) {
                    var ratio = $('.bigImg').width() / $('.mid').width();
                    var y = ev.pageY - $('.mid').offset().top - ($('.moveBox').height() / 2);
                    var x = ev.pageX - $('.mid').offset().left - ($('.moveBox').width() / 2);
                    if (y <= 0) {
                        y = 0;
                    } else if (y >= $('.mid').height() - $('.moveBox').height()) {
                        y = $('.mid').height() - $('.moveBox').height();
                    }
                    if (x <= 0) {
                        x = 0;
                    } else if (x >= $('.mid').width() - $('.moveBox').width()) {
                        x = $('.mid').width() - $('.moveBox').width();
                    }
                    $('.moveBox').css({
                        'top': y + 'px',
                        'left': x + 'px'
                    })
                    $('.bigImg').css({
                        'top': -y * ratio + 'px',
                        'left': -x * ratio + 'px'
                    })
                },
                'mouseout': function () {
                    $('.bigBox').hide();
                    $('.moveBox').hide();
                },

            })
        }
    }
})