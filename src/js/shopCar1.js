define(['jquery', 'cookie'], function ($, cookie) {
    return {
        getData: function () {
            var str = '';
            let shop = cookie.get('shop');
            if (shop) {
                var shopCK = JSON.parse(shop);
                console.log(shopCK);
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
                            console.log(pic.p1);
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
                                <th><a href="">米白/S</a></th>
                                <th><span class="price">￥${elm.price}</span></th>
                                <th class="operate">
                                    <div class="editNum">
                                        <em class="cut">+</em>
                                        <input type="text" name="" id="" value="1" class="num">
                                        <em class="plus">-</em>
                                    </div>
                                    <a href="">收藏</a>&nbsp;/&nbsp;
                                    <a href="jacascript:;" class="del" data-id="${arr[0].id}">删除</a>
                                </th>
                                <th><span class="smallCount">￥${elm.price*arr[0].num}</span></th>
                            </tr>
                        `;

                        })

                        $('tbody').append(str);
                        // console.log($('.num').val());

                    }
                });
            }
        },
        delete: function () {
            $('tbody').on('click', '.del', function () {
                var shopCK = JSON.parse(cookie.get('shop'));
                // console.log($(this)[0].dataset.id);
                shopCK.forEach((elm, index) => {
                    if (elm.id == $(this)[0].dataset.id) {
                        var i = index;
                        shopCK.splice(i, 1);
                        cookie.set('shop', JSON.stringify(shopCK));

                    }
                })
                location.reload();
            })
        },
        plus: function () {
            $('.editNum').on('click', '.editNum>em', function () {

            })
        },
        allCheck: function () {
            $('.container').on('click', '#checkAll', function () {
                // console.log($('tbody input[type="checkbox"]'));
                var p = 0;
                $('tbody input[type="checkbox"]').prop('checked', $(this)[0].checked);
                // console.log($('.smallCount').html());
                if ($(this)[0].checked) {

                    var shopCK = JSON.parse(cookie.get('shop'));
                    shopCK.forEach((elm, index) => {
                        p += elm.price * elm.num;
                    })
                    // console.log(p);
                }
                $('.totalPrices').html(p);
            })
        }
    }
});