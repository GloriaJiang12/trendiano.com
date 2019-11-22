define(['jquery', 'cookie'], function ($, cookie) {
    return {
        getData: function (callback) {
            var str = '';
            let shop = cookie.get('shop');
            if (shop) {
                var shopCK = JSON.parse(shop);
                // console.log(shopCK);
                var shopId = shopCK.map(elm => elm.id).join();


                $.ajax({
                    type: "post",
                    url: "http://localhost:8080/1910class/trendiano.com/src/lib/shopCar.php",
                    data: {
                        id: shopId,
                    },
                    dataType: "json",
                    success: function (res) {
                        // console.log(res);

                        res.forEach((elm, i) => { //遍历一遍，filter遍历三遍，arr只有一个对应对象
                            var pic = JSON.parse(elm.carPic);
                            // console.log(pic.p1);
                            let arr = shopCK.filter(val => {
                                // 从购物车cookie数据中取出于本条遍历数据相同id的元素
                                return val.id == elm.id; //过滤元素，将结果为true的返回成一个新数组
                            })
                            // console.log(arr);
                            str += `
                                <tr>
                                <th><input type="checkbox" name="single" id="single" checked></th>
                                <th class = "carImg"><a href = ""><img src = "./../image/goodsInfo/${pic.p1}" alt = "" srcset = ""> </a></th>
                                <th>
                                    <div>
                                        <p>TRENDIANO</p>
                                        <p><a href="">${elm.title}</a></p>
                                        <p>货号：3ZC4320900010</p>
                                    </div>
                                </th>
                                <th><a href="">${elm.color}/${arr[0].size}</a></th>
                                <th><span class="price">￥${elm.price}</span></th>
                                <th class="operate">
                                    <div class="editNum">
                                        <em class="cut">-</em>
                                        <input type="text" name="" id="num" value="${arr[0].num}" class="num" data-sum="${elm.sum}">
                                        <em class="plus">+</em>
                                    </div>
                                    <a href="">收藏</a>&nbsp;/&nbsp;
                                    <a href="" class="del" data-id="${arr[0].id}">删除</a>
                                </th>
                                <th><span class="smallCount">￥${arr[0].price*arr[0].num}</span></th>
                            </tr>
                        `;

                        })

                        $('tbody').append(str);
                        // console.log($('.num').val());
                        callback && callback();
                    }
                });
            }
        },
        delete: function (callback) {
            $('tbody').on('click', '.del', function () {
                let shopCK = JSON.parse(cookie.get('shop'));
                shopCK.forEach((elm, index) => {
                    if (elm.id == $(this)[0].dataset.id) {
                        var i = index;
                        shopCK.splice(i, 1);
                        cookie.set('shop', JSON.stringify(shopCK));
                    }
                })
                // location.reload();
                callback && callback();
            })
        },
        deleteCheck: function (callback) {
            $('.container').on('click', '.delCheck', function () {
                let allSingleCheck = $('tbody input[type="checkbox"]');
                console.log(allSingleCheck);
                let shopCK = JSON.parse(cookie.get('shop'));
                allSingleCheck.each(function (i, elms) {
                    // console.log($(elms));
                    if ($(elms).is(':checked')) {
                        shopCK.forEach((elm, index) => {
                            // console.log($(this));
                            // console.log($(this).parents('tr').find('.del')[0].dataset.id);
                            if (elm.id == $(this).parents('tr').find('.del')[0].dataset.id) {
                                var iCookie = index;
                                shopCK.splice(iCookie, 1);
                                cookie.set('shop', JSON.stringify(shopCK));
                            }
                        })
                    }
                })
                location.reload();
                callback && callback();
            })
        },
        plusCut: function (callback) {
            $('tbody').on('click', 'tr .editNum>em', function () {
                let num = parseInt($(this).siblings('input').val());
                // console.log(num);num记得转number
                let maxNum = $(this).siblings('input')[0].dataset.sum;
                let shopCK = JSON.parse(cookie.get('shop'));
                let id = $(this).parents('.editNum').siblings('.del')[0].dataset.id;
                let smallCount = $(this).parents('tr').find('.smallCount');
                if ($(this).hasClass('cut')) {
                    num = num > 1 ? num - 1 : 1;
                    $(this).siblings('input').val(num);
                } else if ($(this).hasClass('plus')) {
                    num = num < maxNum ? num + 1 : maxNum
                    $(this).siblings('input').val(num);
                };
                shopCK.forEach((elm, index) => {
                    if (elm.id == id) {
                        elm.num = num;
                        console.log(this);
                        smallCount.html(`￥${elm.num * elm.price}`);
                        cookie.set('shop', JSON.stringify(shopCK));
                    }
                })
                callback && callback();
            })
        },
        allCheck: function (callback) {
            $('.container').on('click', '#checkAll', function () {
                let allSingleCheck = $('tbody input[type="checkbox"]');
                var p = 0;
                allSingleCheck.prop('checked', $(this)[0].checked);
                if ($(this)[0].checked) {
                    // $('.totalPrices').html() = 0;
                    var shopCK = JSON.parse(cookie.get('shop'));
                    shopCK.forEach((elm, index) => {
                        p += elm.price * elm.num;
                    })
                }
                $('.totalPrices').html(p);
                callback && callback();
            })
        },

        singleCheck: function (callback) {
            let allCheck = $('#checkAll');
            $('.container').on('click', '#single', function () {
                let allSingleCheck = $('tbody input[type="checkbox"]');
                let len = allSingleCheck.length;
                let num = 0;
                allSingleCheck.each((i, elm) => {
                    // console.log(i, elm);
                    if ($(elm).is(':checked')) {
                        num++;
                    }
                })
                if (num == len) {
                    allCheck.prop('checked', true);
                } else {
                    allCheck.prop('checked', false);
                }
                callback && callback();
            })
        },
        totalPrice: function () {
            let allSingleCheck = $('tbody input[type="checkbox"]');
            let itemCount = 0;
            let totalPrices = 0;
            allSingleCheck.each(function (i, elm) {
                // console.log(i, elm);
                if ($(elm).is(':checked')) {
                    var price = Number($(elm).parents('tr').find('.smallCount').html().slice(1));
                    var item = Number($(elm).parents('tr').find('.num').val());
                    // console.log()
                    itemCount += item;
                    totalPrices += price;
                }
            })
            $('.totalPrices').html(totalPrices);
            $('.itemCount').html(itemCount);
            $('.carNum').html(itemCount);
        },

        pay: function () {
            $('.pay').on('click', function () {
                alert(`总共${$('.totalPrices').text()}元`)
            })
        }
    }
});