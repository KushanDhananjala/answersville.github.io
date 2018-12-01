!function (i) {
  i.fn.theiaStickySidebar = function (t) {
    function o(t, o) {
      return !0 === t.initialized || !(i("body").width() < t.minWidth) && (e(t, o), !0)
    }

    function e(t, o) {
      t.initialized = !0, i("head").append(i('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), o.each(function () {
        function o() {
          a.fixedScrollTop = 0, a.sidebar.css({"min-height": "1px"}), a.stickySidebar.css({
            position: "static",
            width: ""
          })
        }

        function e(t) {
          var o = t.height();
          return t.children().each(function () {
            o = Math.max(o, i(this).height())
          }), o
        }

        var a = {};
        a.sidebar = i(this), a.options = t || {}, a.container = i(a.options.containerSelector), 0 == a.container.size() && (a.container = a.sidebar.parent()), a.sidebar.css({
          position: "relative",
          overflow: "visible",
          "-webkit-box-sizing": "border-box",
          "-moz-box-sizing": "border-box",
          "box-sizing": "border-box"
        }), a.stickySidebar = a.sidebar.find(".theiaStickySidebar"), 0 == a.stickySidebar.length && (a.sidebar.find("script").remove(), a.stickySidebar = i("<div>").addClass("theiaStickySidebar").append(a.sidebar.children()), a.sidebar.append(a.stickySidebar)), a.marginTop = parseInt(a.sidebar.css("margin-top")), a.marginBottom = parseInt(a.sidebar.css("margin-bottom")), a.paddingTop = parseInt(a.sidebar.css("padding-top")), a.paddingBottom = parseInt(a.sidebar.css("padding-bottom"));
        var n = a.stickySidebar.offset().top, d = a.stickySidebar.outerHeight();
        a.stickySidebar.css("padding-top", 1), a.stickySidebar.css("padding-bottom", 1), n -= a.stickySidebar.offset().top, d = a.stickySidebar.outerHeight() - d - n, 0 == n ? (a.stickySidebar.css("padding-top", 0), a.stickySidebarPaddingTop = 0) : a.stickySidebarPaddingTop = 1, 0 == d ? (a.stickySidebar.css("padding-bottom", 0), a.stickySidebarPaddingBottom = 0) : a.stickySidebarPaddingBottom = 1, a.previousScrollTop = null, a.fixedScrollTop = 0, o(), a.onScroll = function (a) {
          if (a.stickySidebar.is(":visible")) if (i("body").width() < a.options.minWidth) o(); else if (a.options.disableOnResponsiveLayouts && a.sidebar.outerWidth(!0) + 50 > a.container.width()) o(); else {
            var n = i(document).scrollTop(), d = "static";
            if (n >= a.container.offset().top + (a.paddingTop + a.marginTop - a.options.additionalMarginTop)) {
              var s, r = a.paddingTop + a.marginTop + t.additionalMarginTop,
                c = a.paddingBottom + a.marginBottom + t.additionalMarginBottom, p = a.container.offset().top,
                b = a.container.offset().top + e(a.container), l = 0 + t.additionalMarginTop;
              s = a.stickySidebar.outerHeight() + r + c < i(window).height() ? l + a.stickySidebar.outerHeight() : i(window).height() - a.marginBottom - a.paddingBottom - t.additionalMarginBottom;
              var g = p - n + a.paddingTop + a.marginTop, h = b - n - a.paddingBottom - a.marginBottom,
                f = a.stickySidebar.offset().top - n, S = a.previousScrollTop - n;
              "fixed" == a.stickySidebar.css("position") && "modern" == a.options.sidebarBehavior && (f += S), "legacy" == a.options.sidebarBehavior && (f = s - a.stickySidebar.outerHeight(), f = Math.max(f, s - a.stickySidebar.outerHeight())), f = S > 0 ? Math.min(f, l) : Math.max(f, s - a.stickySidebar.outerHeight()), f = Math.max(f, g), f = Math.min(f, h - a.stickySidebar.outerHeight());
              var u = a.container.height() == a.stickySidebar.outerHeight();
              d = (u || f != l) && (u || f != s - a.stickySidebar.outerHeight()) ? n + f - a.sidebar.offset().top - a.paddingTop <= t.additionalMarginTop ? "static" : "absolute" : "fixed"
            }
            if ("fixed" == d) a.stickySidebar.css({
              position: "fixed",
              width: a.sidebar.width(),
              top: f,
              left: a.sidebar.offset().left + parseInt(a.sidebar.css("padding-left"))
            }); else if ("absolute" == d) {
              var m = {};
              "absolute" != a.stickySidebar.css("position") && (m.position = "absolute", m.top = n + f - a.sidebar.offset().top - a.stickySidebarPaddingTop - a.stickySidebarPaddingBottom), m.width = a.sidebar.width(), m.left = "", a.stickySidebar.css(m)
            } else "static" == d && o();
            "static" != d && 1 == a.options.updateSidebarHeight && a.sidebar.css({"min-height": a.stickySidebar.outerHeight() + a.stickySidebar.offset().top - a.sidebar.offset().top + a.paddingBottom}), a.previousScrollTop = n
          }
        }, a.onScroll(a), i(document).scroll(function (i) {
          return function () {
            i.onScroll(i)
          }
        }(a)), i(window).resize(function (i) {
          return function () {
            i.stickySidebar.css({position: "static"}), i.onScroll(i)
          }
        }(a))
      })
    }

    var a = {
      containerSelector: "",
      additionalMarginTop: 0,
      additionalMarginBottom: 0,
      updateSidebarHeight: !0,
      minWidth: 0,
      disableOnResponsiveLayouts: !0,
      sidebarBehavior: "modern"
    };
    (t = i.extend(a, t)).additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0, function (t, e) {
      o(t, e) || (console.log("TST: Body width smaller than options.minWidth. Init is delayed."), i(document).scroll(function (t, e) {
        return function (a) {
          o(t, e) && i(this).unbind(a)
        }
      }(t, e)), i(window).resize(function (t, e) {
        return function (a) {
          o(t, e) && i(this).unbind(a)
        }
      }(t, e)))
    }(t, this)
  }
}(jQuery);
