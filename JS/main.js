  $(document).ready(function () {
            $(window).scroll(function () {
		/* 滚动条发生滚动 */
		var top = $(document).scrollTop();
		 var items = $("#content").find(".item");
                var menu = $("#menu");

		 var currentId = "";//当前所在的楼层(item)id
		items.each(function() {
			var m = $(this);
			var itemTop = m.offset().top;
			if (top > itemTop-200) {
				currentId = "#" + m.attr("id");
			} else {
				return false;
			}
			console.log(itemTop);
		});

		/*	console.log(itemTop);*/
		// 给相应的楼层设置current ，取消奇台链接的current
	  var currentLink = menu.find(".current");
                if (currentId && currentLink.attr("href") != currentId) {
                    currentLink.removeClass("current");
                    menu.find("[href=" + currentId + "]").addClass("current");
                }
            });
        });