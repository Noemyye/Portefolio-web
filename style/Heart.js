var colour="#E31B23"; // Couleur des cœurs
    var sparkles=50;
    var x=ox=400;
    var y=oy=300;
    var swide=800;
    var shigh=600;
    var sleft=sdown=0;
    var hearts = new Array(); // Utilisez un tableau pour stocker les cœurs

    window.onload=function() { 
        if (document.getElementById) {
            var i;
            for (i = 0; i < sparkles; i++) {
                var heart = createHeart(5, 5); // Créez des cœurs
                heart.style.visibility = "hidden";
                document.body.appendChild(hearts[i] = heart);
            }
            set_width();
            sparkle();
        }
    }

    function sparkle() {
        var c;
        if (x != ox || y != oy) {
            ox = x;
            oy = y;
            for (c = 0; c < sparkles; c++) {
                if (!hearts[c].visible) {
                    hearts[c].style.left = (x = heartx[c] = x) + "px";
                    hearts[c].style.top = (y = hearty[c] = y) + "px";
                    hearts[c].style.clip = "rect(0px, 5px, 5px, 0px)";
                    hearts[c].style.visibility = "visible";
                    hearts[c].visible = true;
                    break;
                }
            }
        }
        for (c = 0; c < sparkles; c++) {
            if (hearts[c].visible) {
                hearty[c] += 1 + Math.random() * 3;
                if (hearty[c] < shigh + sdown) {
                    hearts[c].style.top = hearty[c] + "px";
                    heartx[c] += (c % 5 - 2) / 5;
                    hearts[c].style.left = heartx[c] + "px";
                } else {
                    hearts[c].style.visibility = "hidden";
                    hearts[c].visible = false;
                }
            }
        }
        setTimeout("sparkle()", 40);
    }

    function set_width() {
        if (typeof (self.innerWidth) == "number") {
            swide = self.innerWidth;
            shigh = self.innerHeight;
        } else if (document.documentElement && document.documentElement.clientWidth) {
            swide = document.documentElement.clientWidth;
            shigh = document.documentElement.clientHeight;
        } else if (document.body.clientWidth) {
            swide = document.body.clientWidth;
            shigh = document.body.clientHeight;
        }
    }

    function createHeart(height, width) {
        var heart = document.createElement("div");
        heart.style.position = "absolute";
        heart.style.height = height + "px";
        heart.style.width = width + "px";
        heart.style.overflow = "hidden";
        heart.style.color = colour; // Utilisez la couleur définie pour les cœurs
        heart.innerHTML = "&hearts;"; // Utilisez le symbole de cœur
        heart.visible = false;
        return heart;
    }

    document.onmousemove = mouse;

    function mouse(e) {
        set_scroll();
        y = (e) ? e.pageY : event.y + sdown;
        x = (e) ? e.pageX : event.x + sleft;
    }

    function set_scroll() {
        if (typeof (self.pageYOffset) == "number") {
            sdown = self.pageYOffset;
            sleft = self.pageXOffset;
        } else if (document.body.scrollTop || document.body.scrollLeft) {
            sdown = document.body.scrollTop;
            sleft = document.body.scrollLeft;
        } else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
            sleft = document.documentElement.scrollLeft;
            sdown = document.documentElement.scrollTop;
        } else {
            sdown = 0;
            sleft = 0;
        }
    }