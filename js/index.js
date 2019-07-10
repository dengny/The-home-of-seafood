var recommend = document.getElementsByClassName("recommend")[0];
var divs = recommend.children;
for (var div of divs) {
    div.onmouseover = function() {
            var div = this;
            div1 = div.querySelector("p:nth-child(5)");
            div1.style.height = "0px";
            div2 = div.querySelector("div:last-child");
            div2.style.display = "block";
        }
        // div.onmouseover = function() {
        //     var div = this;
        //     div1 = div.querySelector("p:nth-child(5)");
        //     div1.style.height = "20px";
        //     div2 = div.querySelector("div:last-child");
        //     div2.style.display = "none";
        // }
}