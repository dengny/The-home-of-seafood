(function() {
    //将页头导入首页
    this.axios.get(
            'header.html'
        ).then(result => {
            $(result.data).replaceAll("#header")
            $('<link rel="stylesheet" href="../css/header.css">').appendTo("head")
        })
        //将页尾导入首页
    this.axios.get(
            'footer.html'
        ).then(result => {
            $(result.data).replaceAll("#footer")
            $('<link rel="stylesheet" href="../css/footer.css">').appendTo("head")
        })
        //将轮播图导入首页
    this.axios.get(
        'carousel.html'
    ).then(result => {
        $(result.data).replaceAll('#carousel');
        $('<link rel="stylesheet" href="../css/carousel.css"></link>').appendTo("head")
    })

    //主体楼层js
    var recommend = document.getElementsByClassName("recommend");
    for (var i = 0; i < recommend.length; i++) {
        var divs = recommend[i].children;
        for (var div of divs) {
            div.onmouseover = function() {
                var div = this;
                var div1 = div.querySelector("p:nth-child(5)");
                div1.style.height = "0px";
                var div2 = div.querySelector("div:last-child");
                div2.style.display = "block";
            }
            div.onmouseout = function() {
                var div = this;
                var div1 = div.querySelector("p:nth-child(5)");
                div1.style.height = "20px";
                var div2 = div.querySelector("div:last-child");
                div2.style.display = "none";
            }
        }
    }
})()