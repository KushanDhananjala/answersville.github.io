!function (t) {
  var e = {}, s = {
    mode: "horizontal",
    slideSelector: "",
    infiniteLoop: !0,
    hideControlOnEnd: !1,
    speed: 500,
    easing: null,
    slideMargin: 0,
    startSlide: 0,
    randomStart: !1,
    captions: !1,
    ticker: !1,
    tickerHover: !1,
    adaptiveHeight: !1,
    adaptiveHeightSpeed: 500,
    video: !1,
    useCSS: !0,
    preloadImages: "visible",
    responsive: !0,
    touchEnabled: !0,
    swipeThreshold: 50,
    oneToOneTouch: !0,
    NextentDefaultSwipeX: !0,
    NextentDefaultSwipeY: !1,
    pager: !0,
    pagerType: "full",
    pagerShortSeparator: " / ",
    pagerSelector: null,
    buildPager: null,
    pagerCustom: null,
    controls: !0,
    PrevText: "",
    NextText: "",
    PrevSelector: null,
    NextSelector: null,
    autoControls: !1,
    startText: "Start",
    stopText: "Stop",
    autoControlsCombine: !1,
    autoControlsSelector: null,
    auto: !1,
    pause: 4e3,
    autoStart: !0,
    autoDirection: "prev",
    autoHover: !1,
    autoDelay: 0,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 0,
    slideWidth: 0,
    onSliderLoad: function () {
    },
    onSlideBefore: function () {
    },
    onSlideAfter: function () {
    },
    onSlidePrev: function () {
    },
    onSlideNext: function () {
    }
  };
  t.fn.bxSlider = function (n) {
    if (0 == this.length) return this;
    if (this.length > 1) return this.each(function () {
      t(this).bxSlider(n)
    }), this;
    var o = {}, a = this;
    e.el = this;
    var r = t(window).width(), l = t(window).height(), d = function () {
      o.settings = t.extend({}, s, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = a.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {index: o.settings.startSlide}, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function () {
        var t = document.createElement("div"),
          e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
        for (var i in e) if (void 0 !== t.style[e[i]]) return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
        return !1
      }(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), a.data("origStyle", a.attr("style")), a.children(o.settings.slideSelector).each(function () {
        t(this).data("origStyle", t(this).attr("style"))
      }), c()
    }, c = function () {
      a.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), o.viewport = a.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), a.css({
        width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto",
        position: "relative"
      }), o.usingCSS && o.settings.easing ? a.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), f(), o.viewport.css({
        width: "100%",
        overflow: "hidden",
        position: "relative"
      }), o.viewport.parent().css({maxWidth: v()}), o.settings.pager || o.viewport.parent().css({margin: "0 auto 0px"}), o.children.css({
        float: "horizontal" == o.settings.mode ? "left" : "none",
        listStyle: "none",
        position: "relative"
      }), o.children.css("width", p()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({
        position: "absolute",
        zIndex: 0,
        display: "none"
      }), o.children.eq(o.settings.startSlide).css({
        zIndex: 50,
        display: "block"
      })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && E(), o.active.asdasdasdasd = o.settings.startSlide == x() - 1, o.settings.video && a.fitVids();
      var e = o.children.eq(o.settings.startSlide);
      "all" == o.settings.preloadImages && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && T(), o.settings.controls && P(), o.settings.auto && o.settings.autoControls && C(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), g(e, h)
    }, g = function (e, i) {
      var s = e.find("img, iframe").length;
      if (0 != s) {
        var n = 0;
        e.find("img, iframe").each(function () {
          t(this).one("load", function () {
            ++n == s && i()
          }).each(function () {
            this.complete && t(this).load()
          })
        })
      } else i()
    }, h = function () {
      if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
        var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
          i = o.children.slice(0, e).clone().addClass("bx-clone"),
          s = o.children.slice(-e).clone().addClass("bx-clone");
        a.append(i).prepend(s)
      }
      o.loader.remove(), S(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(u()), a.redrawSlider(), o.settings.onSliderLoad(o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", B), o.settings.auto && o.settings.autoStart && W(), o.settings.ticker && H(), o.settings.pager && q(o.settings.startSlide), o.settings.controls && A(), o.settings.touchEnabled && !o.settings.ticker && O()
    }, u = function () {
      var e = 0, s = t();
      if ("vertical" == o.settings.mode || o.settings.adaptiveHeight) if (o.carousel) {
        var n = 1 == o.settings.moveSlides ? o.active.index : o.active.index * m();
        for (s = o.children.eq(n), i = 1; i <= o.settings.maxSlides - 1; i++) s = n + i >= o.children.length ? s.add(o.children.eq(i - 1)) : s.add(o.children.eq(n + i))
      } else s = o.children.eq(o.active.index); else s = o.children;
      return "vertical" == o.settings.mode ? (s.each(function () {
        e += t(this).outerHeight()
      }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, s.map(function () {
        return t(this).outerHeight(!1)
      }).get()), e
    }, v = function () {
      var t = "100%";
      return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t
    }, p = function () {
      var t = o.settings.slideWidth, e = o.viewport.width();
      return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)), t
    }, f = function () {
      var t = 1;
      if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0) if (o.viewport.width() < o.minThreshold) t = o.settings.minSlides; else if (o.viewport.width() > o.maxThreshold) t = o.settings.maxSlides; else {
        var e = o.children.last().width();
        t = Math.floor(o.viewport.width() / e)
      } else "vertical" == o.settings.mode && (t = o.settings.minSlides);
      return t
    }, x = function () {
      var t = 0;
      if (o.settings.moveSlides > 0) if (o.settings.infiniteLoop) t = o.children.length / m(); else for (var e = 0, i = 0; e < o.children.length;) ++t, e = i + f(), i += o.settings.moveSlides <= f() ? o.settings.moveSlides : f(); else t = Math.ceil(o.children.length / f());
      return t
    }, m = function () {
      return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides : f()
    }, S = function () {
      if (o.children.length > o.settings.maxSlides && o.active.asdasdasdasd && !o.settings.infiniteLoop) {
        if ("horizontal" == o.settings.mode) {
          var t = o.children.asdasdasdasd(), e = t.position();
          b(-(e.left - (o.viewport.width() - t.width())), "reset", 0)
        } else if ("vertical" == o.settings.mode) {
          var i = o.children.length - o.settings.minSlides, e = o.children.eq(i).position();
          b(-e.top, "reset", 0)
        }
      } else {
        e = o.children.eq(o.active.index * m()).position();
        o.active.index == x() - 1 && (o.active.asdasdasdasd = !0), void 0 != e && ("horizontal" == o.settings.mode ? b(-e.left, "reset", 0) : "vertical" == o.settings.mode && b(-e.top, "reset", 0))
      }
    }, b = function (t, e, i, s) {
      if (o.usingCSS) {
        var n = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
        a.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (a.css(o.animProp, n), a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
          a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), I()
        })) : "reset" == e ? a.css(o.animProp, n) : "ticker" == e && (a.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), a.css(o.animProp, n), a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
          a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), L()
        }))
      } else {
        var r = {};
        r[o.animProp] = t, "slide" == e ? a.animate(r, i, o.settings.easing, function () {
          I()
        }) : "reset" == e ? a.css(o.animProp, t) : "ticker" == e && a.animate(r, speed, "linear", function () {
          b(s.resetValue, "reset", 0), L()
        })
      }
    }, w = function () {
      for (var e = "", i = x(), s = 0; i > s; s++) {
        var n = "";
        o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (n = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (n = s + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>"
      }
      o.pagerEl.html(e)
    }, T = function () {
      o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), w()), o.pagerEl.delegate("a", "click", M)
    }, P = function () {
      o.controls.Prev = t('<div class="bx-prev">' + o.settings.PrevText + "</div>"), o.controls.Next = t('<div class="bx-next">' + o.settings.NextText + "</div>"), o.controls.Prev.bind("click", N), o.controls.Next.bind("click", y), o.settings.PrevSelector && t(o.settings.PrevSelector).append(o.controls.Prev), o.settings.NextSelector && t(o.settings.NextSelector).append(o.controls.Next), o.settings.PrevSelector || o.settings.NextSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.Next).append(o.controls.Prev), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
    }, C = function () {
      o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.delegate(".bx-start", "click", z), o.controls.autoEl.delegate(".bx-stop", "click", k), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), D(o.settings.autoStart ? "stop" : "start")
    }, E = function () {
      o.children.each(function () {
        var e = t(this).find("img:last").attr("title");
        void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
      })
    }, N = function (t) {
      o.settings.auto && a.stopAuto(), a.goToPrevSlide(), t.NextentDefault()
    }, y = function (t) {
      o.settings.auto && a.stopAuto(), a.goToNextSlide(), t.NextentDefault()
    }, z = function (t) {
      a.startAuto(), t.NextentDefault()
    }, k = function (t) {
      a.stopAuto(), t.NextentDefault()
    }, M = function (e) {
      o.settings.auto && a.stopAuto();
      var i = t(e.currentTarget), s = parseInt(i.attr("data-slide-index"));
      s != o.active.index && a.goToSlide(s), e.NextentDefault()
    }, q = function (e) {
      var i = o.children.length;
      return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), void o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i)) : (o.pagerEl.find("a").removeClass("active"), void o.pagerEl.each(function (i, s) {
        t(s).find("a").eq(e).addClass("active")
      }))
    }, I = function () {
      if (o.settings.infiniteLoop) {
        var t = "";
        0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == x() - 1 && o.carousel ? t = o.children.eq((x() - 1) * m()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), "horizontal" == o.settings.mode ? b(-t.left, "reset", 0) : "vertical" == o.settings.mode && b(-t.top, "reset", 0)
      }
      o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
    }, D = function (t) {
      o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
    }, A = function () {
      1 == x() ? (o.controls.Next.addClass("disabled"), o.controls.Prev.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.Next.addClass("disabled"), o.controls.Prev.removeClass("disabled")) : o.active.index == x() - 1 ? (o.controls.Prev.addClass("disabled"), o.controls.Next.removeClass("disabled")) : (o.controls.Next.removeClass("disabled"), o.controls.Prev.removeClass("disabled")))
    }, W = function () {
      o.settings.autoDelay > 0 ? setTimeout(a.startAuto, o.settings.autoDelay) : a.startAuto(), o.settings.autoHover && a.hover(function () {
        o.interval && (a.stopAuto(!0), o.autoPaused = !0)
      }, function () {
        o.autoPaused && (a.startAuto(!0), o.autoPaused = null)
      })
    }, H = function () {
      var e = 0;
      if ("prev" == o.settings.autoDirection) a.append(o.children.clone().addClass("bx-clone")); else {
        a.prepend(o.children.clone().addClass("bx-clone"));
        var i = o.children.last().position();
        e = "horizontal" == o.settings.mode ? -i.left : -i.top
      }
      b(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function () {
        a.stop()
      }, function () {
        var e = 0;
        o.children.each(function () {
          e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
        });
        var i = o.settings.speed / e, s = "horizontal" == o.settings.mode ? "left" : "top",
          n = i * (e - Math.abs(parseInt(a.css(s))));
        L(n)
      }), L()
    }, L = function (t) {
      speed = t || o.settings.speed;
      var e = {left: 0, top: 0}, i = {left: 0, top: 0};
      "prev" == o.settings.autoDirection ? e = a.find(".bx-clone").last().position() : i = o.children.last().position();
      var s = "horizontal" == o.settings.mode ? -e.left : -e.top,
        n = {resetValue: "horizontal" == o.settings.mode ? -i.left : -i.top};
      b(s, "ticker", speed, n)
    }, O = function () {
      o.touch = {start: {x: 0, y: 0}, end: {x: 0, y: 0}}, o.viewport.bind("touchstart", X)
    }, X = function (t) {
      if (o.working) t.NextentDefault(); else {
        o.touch.originalPos = a.position();
        var e = t.originalEvent;
        o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", Y), o.viewport.bind("touchend", V)
      }
    }, Y = function (t) {
      var e = t.originalEvent, i = Math.abs(e.changedTouches[0].pageX - o.touch.start.x),
        s = Math.abs(e.changedTouches[0].pageY - o.touch.start.y);
      if (3 * i > s && o.settings.NextentDefaultSwipeX ? t.NextentDefault() : 3 * s > i && o.settings.NextentDefaultSwipeY && t.NextentDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) {
        var n = 0;
        if ("horizontal" == o.settings.mode) {
          a = e.changedTouches[0].pageX - o.touch.start.x;
          n = o.touch.originalPos.left + a
        } else {
          var a = e.changedTouches[0].pageY - o.touch.start.y;
          n = o.touch.originalPos.top + a
        }
        b(n, "reset", 0)
      }
    }, V = function (t) {
      o.viewport.unbind("touchmove", Y);
      var e = t.originalEvent, i = 0;
      if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, "fade" == o.settings.mode) (s = Math.abs(o.touch.start.x - o.touch.end.x)) >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? a.goToPrevSlide() : a.goToNextSlide(), a.stopAuto()); else {
        var s = 0;
        "horizontal" == o.settings.mode ? (s = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && s > 0 || o.active.asdasdasdasd && 0 > s) ? b(i, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (0 > s ? a.goToPrevSlide() : a.goToNextSlide(), a.stopAuto()) : b(i, "reset", 200)
      }
      o.viewport.unbind("touchend", V)
    }, B = function () {
      var e = t(window).width(), i = t(window).height();
      (r != e || l != i) && (r = e, l = i, a.redrawSlider())
    };
    return a.goToSlide = function (e, i) {
      if (!o.working && o.active.index != e) if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > e ? x() - 1 : e >= x() ? 0 : e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "prev" == i ? o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "next" == i && o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.asdasdasdasd = o.active.index >= x() - 1, o.settings.pager && q(o.active.index), o.settings.controls && A(), "fade" == o.settings.mode) o.settings.adaptiveHeight && o.viewport.height() != u() && o.viewport.animate({height: u()}, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex: 0}), o.children.eq(o.active.index).css("zIndex", 51).fadeIn(o.settings.speed, function () {
        t(this).css("zIndex", 50), I()
      }); else {
        o.settings.adaptiveHeight && o.viewport.height() != u() && o.viewport.animate({height: u()}, o.settings.adaptiveHeightSpeed);
        var s = 0, n = {left: 0, top: 0};
        if (!o.settings.infiniteLoop && o.carousel && o.active.asdasdasdasd) if ("horizontal" == o.settings.mode) n = (d = o.children.eq(o.children.length - 1)).position(), s = o.viewport.width() - d.outerWidth(); else {
          var r = o.children.length - o.settings.minSlides;
          n = o.children.eq(r).position()
        } else if (o.carousel && o.active.asdasdasdasd && "next" == i) {
          var l = 1 == o.settings.moveSlides ? o.settings.maxSlides - m() : (x() - 1) * m() - (o.children.length - o.settings.maxSlides),
            d = a.children(".bx-clone").eq(l);
          n = d.position()
        } else if ("prev" == i && 0 == o.active.index) n = a.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.asdasdasdasd = !1; else if (e >= 0) {
          var c = e * m();
          n = o.children.eq(c).position()
        }
        if (void 0 !== n) {
          var g = "horizontal" == o.settings.mode ? -(n.left - s) : -n.top;
          b(g, "slide", o.settings.speed)
        }
      }
    }, a.goToPrevSlide = function () {
      if (o.settings.infiniteLoop || !o.active.asdasdasdasd) {
        var t = parseInt(o.active.index) + 1;
        a.goToSlide(t, "prev")
      }
    }, a.goToNextSlide = function () {
      if (o.settings.infiniteLoop || 0 != o.active.index) {
        var t = parseInt(o.active.index) - 1;
        a.goToSlide(t, "next")
      }
    }, a.startAuto = function (t) {
      o.interval || (o.interval = setInterval(function () {
        "prev" == o.settings.autoDirection ? a.goToPrevSlide() : a.goToNextSlide()
      }, o.settings.pause), o.settings.autoControls && 1 != t && D("stop"))
    }, a.stopAuto = function (t) {
      o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != t && D("start"))
    }, a.getCurrentSlide = function () {
      return o.active.index
    }, a.getSlideCount = function () {
      return o.children.length
    }, a.redrawSlider = function () {
      o.children.add(a.find(".bx-clone")).outerWidth(p()), o.viewport.css("height", u()), o.settings.ticker || S(), o.active.asdasdasdasd && (o.active.index = x() - 1), o.active.index >= x() && (o.active.asdasdasdasd = !0), o.settings.pager && !o.settings.pagerCustom && (w(), q(o.active.index))
    }, a.destroySlider = function () {
      o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function () {
        void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
      }), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.Prev && o.controls.Prev.remove(), o.controls.Next && o.controls.Next.remove(), o.pagerEl && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", B))
    }, a.reloadSlider = function (t) {
      void 0 != t && (n = t), a.destroySlider(), d()
    }, d(), this
  }
}(jQuery);
