!function (t) {
  function e(e, n, i) {
    var a, s = this, o = e.add(this), c = e.find(i.tabss), f = n.jquery ? n : e.children(n);
    c.length || (c = e.children()), f.length || (f = e.parent().find(n)), f.length || (f = t(n)), t.extend(this, {
      click: function (n, f) {
        var l = c.eq(n), u = !e.data("tabss");
        if ("string" == typeof n && n.replace("#", "") && (l = c.filter('[href*="' + n.replace("#", "") + '"]'), n = Math.max(c.index(l), 0)), i.rotate) {
          var h = c.length - 1;
          if (n < 0) return s.click(h, f);
          if (n > h) return s.click(0, f)
        }
        if (!l.length) {
          if (a >= 0) return s;
          n = i.initialIndex, l = c.eq(n)
        }
        if (n === a) return s;
        if (f = f || t.Event(), f.type = "onBeforeClick", o.trigger(f, [n]), !f.isDefaultPrevented()) {
          var d = u ? i.initialEffect && i.effect || "default" : i.effect;
          return r[d].call(s, n, function () {
            a = n, f.type = "onClick", o.trigger(f, [n])
          }), c.removeClass(i.current), l.addClass(i.current), s
        }
      }, getConf: function () {
        return i
      }, getTabss: function () {
        return c
      }, getPanes: function () {
        return f
      }, getCurrentPane: function () {
        return f.eq(a)
      }, getCurrentTab: function () {
        return c.eq(a)
      }, getIndex: function () {
        return a
      }, next: function () {
        return s.click(a + 1)
      }, prev: function () {
        return s.click(a - 1)
      }, destroy: function () {
        return c.off(i.event).removeClass(i.current), f.find('a[href^="#"]').off("click.T"), s
      }
    }), t.each("onBeforeClick,onClick".split(","), function (e, n) {
      t.isFunction(i[n]) && t(s).on(n, i[n]), s[n] = function (e) {
        return e && t(s).on(n, e), s
      }
    }), i.history && t.fn.history && (t.tools.history.init(c), i.event = "history"), c.each(function (e) {
      t(this).on(i.event, function (t) {
        return s.click(e, t), t.preventDefault()
      })
    }), f.find('a[href^="#"]').on("click.T", function (e) {
      s.click(t(this).attr("href"), e)
    }), location.hash && "a" == i.tabss && e.find('[href="' + location.hash + '"]').length ? s.click(location.hash) : (0 === i.initialIndex || i.initialIndex > 0) && s.click(i.initialIndex)
  }

  t.tools = t.tools || {version: "v1.2.7"}, t.tools.tabss = {
    conf: {
      tabss: "a",
      current: "current",
      onBeforeClick: null,
      onClick: null,
      effect: "default",
      initialEffect: !1,
      initialIndex: 0,
      event: "click",
      rotate: !1,
      slideUpSpeed: 400,
      slideDownSpeed: 400,
      history: !1
    }, addEffect: function (t, e) {
      r[t] = e
    }
  };
  var n, i, r = {
    default: function (t, e) {
      this.getPanes().hide().eq(t).show(), e.call()
    }, fade: function (t, e) {
      var n = this.getConf(), i = n.fadeOutSpeed, r = this.getPanes();
      i ? r.fadeOut(i) : r.hide(), r.eq(t).fadeIn(n.fadeInSpeed, e)
    }, slide: function (t, e) {
      var n = this.getConf();
      this.getPanes().slideUp(n.slideUpSpeed), this.getPanes().eq(t).slideDown(n.slideDownSpeed, e)
    }, ajax: function (t, e) {
      this.getPanes().eq(0).load(this.getTabss().eq(t).attr("href"), e)
    }
  };
  t.tools.tabss.addEffect("horizontal", function (e, r) {
    if (!n) {
      var a = this.getPanes().eq(e), s = this.getCurrentPane();
      i || (i = this.getPanes().eq(0).width()), n = !0, a.show(), s.animate({width: 0}, {
        step: function (t) {
          a.css("width", i - t)
        }, complete: function () {
          t(this).hide(), r.call(), n = !1
        }
      }), s.length || (r.call(), n = !1)
    }
  }), t.fn.tabss = function (n, i) {
    var r = this.data("tabss");
    return r && (r.destroy(), this.removeData("tabss")), t.isFunction(i) && (i = {onBeforeClick: i}), i = t.extend({}, t.tools.tabss.conf, i), this.each(function () {
      r = new e(t(this), n, i), t(this).data("tabss", r)
    }), i.api ? r : this
  }
}(jQuery);
