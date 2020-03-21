function carousel(left, top) {
        /* 获取元素对象 */
        var $carousel = $(".carousel");
        var $imgs = $(".carousel-imgs li");
        var $btnL = $(".carousel-btn-left");
        var $btnR = $(".carousel-btn-right");
        /* 创建导航按钮 */
        var $item_group = $("<ul></ul>");
        $item_group.attr("class", "carousel-items");
        $imgs.each(function() {
            $item_group.append("<li></li>");
        });
        $carousel.append($item_group);
        /* 样式初始化 */
        $item_group.css({
            "list-style": "none",
            "position": "absolute",
            "left": "0px",
			"right": "0px",
            "bottom": "20px",
			"text-align": "center",
        });
        $item_group.children().css({
            "width": "25px",
            "height": "5px",
            "margin": "4px",
            "background": "white",
            "opacity": "0.6",
            "cursor": "pointer",
			"display": "inline-block"
        });
        var index = 0; // 初始展示位置
        var $items = $(".carousel-items li");
        $items.eq(index).css("background", "gray");
        /* 按钮点击动作 */
        $btnL.click(function() {
            imgAnimator(false);
        });

        $btnR.click(function() {
            imgAnimator(true);
        });

        $items.click(function() {
            imgAnimator(true, $items.index($(this)));
        });
        /* 图像动画 */
        function imgAnimator(toNext, select) {
            if(select != null) {
                index = select;
            } else if(toNext == true) {
                index = ($imgs.length + index + 1) % $imgs.length;
            } else if(toNext == false) {
                index = ($imgs.length + index - 1) % $imgs.length;
            }
            $items.css("background", "white");
            $items.eq(index).css("background", "grey");
            var position = index * -($imgs.outerWidth());
            $imgs.parent().animate({
                "left": position + "px"
            }, "fast");
        }
    }
	carousel("0%", "0%");