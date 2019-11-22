define(['jquery', 'cookie', 'lazyload'], function ($, cookie, lazyload) {
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
                            smbanStr += `<li><a href=""><img data-original="${baseUrl}${elm.bn}" alt="" class="lazy"><span>${elm.desc}</span></a></li>`;
                        }

                        if (index >= 4 && index <= 8) {
                            proStr += ` <li><a href="./goodsList.html"><img data-original="${baseUrl}${elm.row}" alt="" class="lazy" width:"94px" height:"121px"><span>${elm.pro}</span></a></li>`;

                        }

                        if (index >= 9 && index <= 14) {
                            newsStr += ` <li><a href=""><img data-original="${baseUrl}${elm.news}" alt="" class="lazy"><span>${elm.des}</span></a>
                        </li>`;
                        }

                        if (index >= 15 && index <= 18) {
                            // for (var i in elm) {
                            newStr += `<li><a href=""><img data-original="${baseUrl}${elm.n}" alt="" class="lazy"><span>${elm.de}</span></a>
                        </li>`;
                        }
                    })
                    var banStr = `<a href=""><img data-original="${baseUrl}${banImg[0].banner}" alt="" class="lazy"></a>`;

                    $('.banner').append(banStr);
                    $('.smallban').append(smbanStr);
                    $('.product>ul').append(proStr);
                    $('.news>ul').append(newsStr);
                    $('.newGoods>ul').append(newStr);
                    $("img.lazy").lazyload({
                        placeholder: './../image/loading.gif',
                        effect: "fadeIn",
                        threshold: -150,
                        //    event: 'mouseover'
                    });
                }
            });
        },

    }
})