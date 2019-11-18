define(['jquery'], function ($) {
    return {
        getData: function () {
            $.ajax({
                type: "post",
                url: "http://localhost:8080/1910class/trendiano.com/src/lib/index1.php",
                // dataType: "dataType",
                success: function (res) {
                    var baseUrl = './../image/index/';
                    var data = JSON.parse(res);
                    var banImg = JSON.parse(data[0].img);
                    var smbanStr = '';
                    var proStr = '';
                    var newsStr = '';
                    var newStr = '';
                    var sImg = JSON.parse(data[1].img)
                    console.log(data);
                    console.log(sImg);
                    sImg.forEach((elm, index) => {
                        console.log(elm);
                        if (index == 0) {
                            for (var i in elm) {
                                // console.log(i, elm[0][i]);
                                smbanStr += `<li><a href=""><img src="${baseUrl}${elm[i]}" alt=""><span>TRENDIANO 冬季大片丨高级感归于日常</span></a></li>`;
                            }
                        }

                        if (index == 1) {
                            for (var i in elm) {
                                proStr += ` <li><a href="./goodsList.html"><img src="${baseUrl}${elm[i]}" alt=""><span>T恤</span></a></li>`;
                            }
                        }

                        if (index == 2) {
                            for (var i in elm) {
                                newsStr += ` <li><a href=""><img src="${baseUrl}${elm[i]}" alt=""><span>TRENDIANO 冬季大片丨高级感归于日常</span></a>
                        </li>`;
                            }
                        }

                        if (index == 3) {
                            for (var i in elm) {
                                newStr += `<li><a href=""><img src="${baseUrl}${elm[i]}" alt=""><span>进化的丹宁，你可以想象</span></a>
                        </li>`;
                            }
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
        }
    }
})