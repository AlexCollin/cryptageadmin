$(function() {
    $("#show-other-sub").click(function() {
        $(".other-acc:hidden").first().show("fast"), "" == $(".other-acc:hidden").first().text() && $("#show-other-sub").hide()
    }), $("#show-other-filters").click(function() {
        "none" == $(".other-filters").css("display") ? ($(".other-filters").show("fast"), $("#show-other-filters i").addClass("icmn-minus2"), $("#show-other-filters i").removeClass("icmn-plus2")) : ($(".other-filters").hide("fast"), $("#show-other-filters i").addClass("icmn-plus2"), $("#show-other-filters i").removeClass("icmn-minus2"))
    })
    
    $("div.dropdown").hover(
	function(){
	  $(this).addClass("open");
	},
	function(){
	  $(this).removeClass("open");
	});
});
$(function() {
    if ($(".left-menu .left-menu-list-submenu > a").on("click", function() {
            var a = $("body").hasClass("menu-top") && $(window).width() > 768;
            if (!a) {
                var b = $(this).parent(),
                    c = $(".left-menu .left-menu-list-opened");
                b.hasClass("left-menu-list-opened") || b.parent().closest(".left-menu-list-submenu").length || c.removeClass("left-menu-list-opened").find("> ul").slideUp(200), b.toggleClass("left-menu-list-opened").find("> ul").slideToggle(200)
            }
        }), $("body").hasClass("menu-top") || cleanUI.hasTouch || cleanUI.hasTouch || $("nav.left-menu .scroll-pane").each(function() {
            $(this).jScrollPane({
                autoReinitialise: !0,
                autoReinitialiseDelay: 100
            });
            var b, a = $(this).data("jsp");
            $(window).bind("resize", function() {
                b || (b = setTimeout(function() {
                    a.reinitialise(), b = null
                }, 50))
            })
        }), $("body").hasClass("menu-top")) {
        var a = $("nav.left-menu .left-menu-inner"),
            b = 0;
        a.addClass("scrolled-to-left"), $(window).on("resize", function() {
            b = 0, a.css("transform", "translate3d(0px, 0px, 0px)")
        }), $("nav.left-menu").on("mousemove", function(c) {
            if ($(window).width() > 751) {
                console.log(c);
                var d = $("nav.left-menu").width(),
                    e = $(window).width(),
                    f = (e - d) / 2,
                    g = function() {
                        var a = 0;
                        return $("nav.left-menu .left-menu-list-root > *").each(function() {
                            a += $(this).width()
                        }), a
                    }(),
                    h = $("nav.left-menu .logo-container").outerWidth(),
                    i = d - h - g,
                    j = 100;
                i < 0 && (c.clientX < e - d - f + h + j && (b < 0 || b < i) && (b -= i, a.removeClass("scrolled-to-right").addClass("scrolled-to-left").css("transform", "translate3d(" + b + "px, 0px, 0px)")), c.clientX > d + f - j && (b >= 0 || b > i) && (b = i, a.removeClass("scrolled-to-left").addClass("scrolled-to-right").css("transform", "translate3d(" + b + "px, 0px, 0px)")))
            }
        })
    }
    $(".left-menu-toggle").on("click", function() {
        $(this).toggleClass("active"), $("nav.left-menu").toggleClass("left-menu-showed"), $(".main-backdrop").toggleClass("main-backdrop-showed")
    }), $(".main-backdrop").on("click", function() {
        $(".left-menu-toggle").removeClass("active"), $("nav.left-menu").removeClass("left-menu-showed"), $(".main-backdrop").removeClass("main-backdrop-showed")
    }), $("nav.left-menu a.left-menu-link").on("click", function() {
        $(this).parent().hasClass("left-menu-list-submenu") || ($(".left-menu-toggle").removeClass("active"), $("nav.left-menu").removeClass("left-menu-showed"), $(".main-backdrop").removeClass("main-backdrop-showed"))
    }), $("body").hasClass("mode-material") && ! function(a) {
        a("body").on("click", ".btn, .left-menu-link", function(b) {
            var c = a(this);
            0 == c.find("> .ink").length && (a(".ink").remove(), c.append("<span class='ink'></span>"));
            var d = c.find("> .ink");
            if (d.removeClass("animate"), !d.height() && !d.width()) {
                var e = Math.max(c.outerWidth(), c.outerHeight());
                d.css({
                    height: e,
                    width: e
                })
            }
            var f = b.pageX - c.offset().left - d.width() / 2,
                g = b.pageY - c.offset().top - d.height() / 2;
            d.css({
                top: g + "px",
                left: f + "px"
            }).addClass("animate")
        })
    }(jQuery)
});