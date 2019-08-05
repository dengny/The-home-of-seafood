(function() {
    let i = 0;
    let LIWIDTH = 1000;
    let LICOUNT = 4;
    let DURATION = 500;
    let ulImgs = document.getElementById("ul-imgs");
    let ulIdxs = document.getElementById("ul-idxs");
    let lis = ulIdxs.children;

    function moveTo(to) {
        if (to == undefined) {
            to = i + 1;
        }
        if (i == 0) {
            if (to > i) {
                ulImgs.className = "transition";
            } else {
                ulImgs.className = "";
                ulImgs.style.mariginLeft = -LIWIDTH * LICOUNT + 'px';
                setTimeout(function() {
                    moveTo(LICOUNT - 1);
                }, 100)
                return;
            }
        }
        i = to;
        ulImgs.style.marginLeft = -i * LIWIDTH + 'px';
        for (var li of lis) {
            li.className = "";
        }
        if (i == LICOUNT) {
            i = 0;
            setTimeout(function() {
                ulImgs.className = "";
                ulImgs.style.marginLeft = 0;
            }, DURATION);
        }
        lis[i].className = "active";
    }

    let canClick = true;
    let btnLeft = document.getElementById("btn-left");
    let btnRight = document.getElementById("btn-right");
    btnLeft.onclick = function() {
        move(-1)
    }
    btnRight.onclick = function() {
        move(1)
    }

    function move(n) {
        if (canClick) {
            canClick = false;
            moveTo(i + n);
            setTimeout(function() {
                canClick = true;
            }, DURATION + 100)
        }
    }

    ulIdxs.onclick = function(e) {
        if (canClick) {
            let li = e.target;
            if (li.nodeName == 'LI') {
                if (li.className != "active") {
                    for (var i = 0; i < lis.length; i++) {
                        if (lis[i] == li) {
                            break;
                        }
                    }
                    canClick = false;
                    moveTo(i);
                    setTimeout(function() {
                        canClick = true;
                    }, DURATION);
                }
            }
        }
    }

    let interval = 3000;
    let timer = setInterval(function() {
        moveTo();
    }, interval)

    let banner = document.getElementById("banner");
    banner.onmouseover = function() {
        clearInterval(timer);
    }
    banner.onmouseout = function() {
        timer = setInterval(function() {
            moveTo();
        }, interval)
    }

})()