window.Modernizr = function (e, t, n) {
  function r(e) {
    g.cssText = e
  }

  function o(e, t) {
    return r(E.join(e + ";") + (t || ""))
  }

  function a(e, t) {
    return typeof e === t
  }

  function i(e, t) {
    return !!~("" + e).indexOf(t)
  }

  function c(e, t) {
    for (var r in e) {
      var o = e[r];
      if (!i(o, "-") && g[o] !== n) return "pfx" != t || o
    }
    return !1
  }

  function s(e, t, r) {
    for (var o in e) {
      var i = t[e[o]];
      if (i !== n) return !1 === r ? e[o] : a(i, "function") ? i.bind(r || t) : i
    }
    return !1
  }

  function u(e, t, n) {
    var r = e.charAt(0).toUpperCase() + e.slice(1), o = (e + " " + x.join(r + " ") + r).split(" ");
    return a(t, "string") || a(t, "undefined") ? c(o, t) : (o = (e + " " + w.join(r + " ") + r).split(" "), s(o, t, n))
  }

  var l, d, f = {}, m = t.documentElement, p = "modernizr", h = t.createElement(p), g = h.style,
    v = t.createElement("input"), y = ":)", b = {}.toString, E = " -webkit- -moz- -o- -ms- ".split(" "),
    x = "Webkit Moz O ms".split(" "), w = "Webkit Moz O ms".toLowerCase().split(" "),
    S = {svg: "https://www.w3.org/2000/svg"}, C = {}, k = {}, T = {}, M = [], N = M.slice, P = function (e, n, r, o) {
      var a, i, c, s, u = t.createElement("div"), l = t.body, d = l || t.createElement("body");
      if (parseInt(r, 10)) for (; r--;) (c = t.createElement("div")).id = o ? o[r] : p + (r + 1), u.appendChild(c);
      return a = ["&#173;", '<style id="s', p, '">', e, "</style>"].join(""), u.id = p, (l ? u : d).innerHTML += a, d.appendChild(u), l || (d.style.background = "", d.style.overflow = "hidden", s = m.style.overflow, m.style.overflow = "hidden", m.appendChild(d)), i = n(u, e), l ? u.parentNode.removeChild(u) : (d.parentNode.removeChild(d), m.style.overflow = s), !!i
    }, j = function () {
      var e = {select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img"};
      return function (r, o) {
        o = o || t.createElement(e[r] || "div");
        var i = (r = "on" + r) in o;
        return i || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(r, ""), i = a(o[r], "function"), a(o[r], "undefined") || (o[r] = n), o.removeAttribute(r))), o = null, i
      }
    }(), $ = {}.hasOwnProperty;
  d = a($, "undefined") || a($.call, "undefined") ? function (e, t) {
    return t in e && a(e.constructor.prototype[t], "undefined")
  } : function (e, t) {
    return $.call(e, t)
  }, Function.prototype.bind || (Function.prototype.bind = function (e) {
    var t = this;
    if ("function" != typeof t) throw new TypeError;
    var n = N.call(arguments, 1), r = function () {
      if (this instanceof r) {
        var o = function () {
        };
        o.prototype = t.prototype;
        var a = new o, i = t.apply(a, n.concat(N.call(arguments)));
        return Object(i) === i ? i : a
      }
      return t.apply(e, n.concat(N.call(arguments)))
    };
    return r
  }), C.flexbox = function () {
    return u("flexWrap")
  }, C.flexboxlegacy = function () {
    return u("boxDirection")
  }, C.canvas = function () {
    var e = t.createElement("canvas");
    return !(!e.getContext || !e.getContext("2d"))
  }, C.canvastext = function () {
    return !(!f.canvas || !a(t.createElement("canvas").getContext("2d").fillText, "function"))
  }, C.webgl = function () {
    return !!e.WebGLRenderingContext
  }, C.touch = function () {
    var n;
    return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : P(["@media (", E.join("touch-enabled),("), p, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
      n = 9 === e.offsetTop
    }), n
  }, C.geolocation = function () {
    return "geolocation" in navigator
  }, C.postmessage = function () {
    return !!e.postMessage
  }, C.websqldatabase = function () {
    return !!e.openDatabase
  }, C.indexedDB = function () {
    return !!u("indexedDB", e)
  }, C.hashchange = function () {
    return j("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
  }, C.history = function () {
    return !(!e.history || !history.pushState)
  }, C.draganddrop = function () {
    var e = t.createElement("div");
    return "draggable" in e || "ondragstart" in e && "ondrop" in e
  }, C.websockets = function () {
    return "WebSocket" in e || "MozWebSocket" in e
  }, C.rgba = function () {
    return r("background-color:rgba(150,255,150,.5)"), i(g.backgroundColor, "rgba")
  }, C.hsla = function () {
    return r("background-color:hsla(120,40%,100%,.5)"), i(g.backgroundColor, "rgba") || i(g.backgroundColor, "hsla")
  }, C.multiplebgs = function () {
    return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(g.background)
  }, C.backgroundsize = function () {
    return u("backgroundSize")
  }, C.borderimage = function () {
    return u("borderImage")
  }, C.borderradius = function () {
    return u("borderRadius")
  }, C.boxshadow = function () {
    return u("boxShadow")
  }, C.textshadow = function () {
    return "" === t.createElement("div").style.textShadow
  }, C.opacity = function () {
    return o("opacity:.55"), /^0.55$/.test(g.opacity)
  }, C.cssanimations = function () {
    return u("animationName")
  }, C.csscolumns = function () {
    return u("columnCount")
  }, C.cssgradients = function () {
    var e = "background-image:";
    return r((e + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + e) + E.join("linear-gradient(left top,#9f9, white);" + e)).slice(0, -e.length)), i(g.backgroundImage, "gradient")
  }, C.cssreflections = function () {
    return u("boxReflect")
  }, C.csstransforms = function () {
    return !!u("transform")
  }, C.csstransforms3d = function () {
    var e = !!u("perspective");
    return e && "webkitPerspective" in m.style && P("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t, n) {
      e = 9 === t.offsetLeft && 3 === t.offsetHeight
    }), e
  }, C.csstransitions = function () {
    return u("transition")
  }, C.fontface = function () {
    var e;
    return P('@font-face {font-family:"font";src:url("https://")}', function (n, r) {
      var o = t.getElementById("smodernizr"), a = o.sheet || o.styleSheet,
        i = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || "" : "";
      e = /src/i.test(i) && 0 === i.indexOf(r.split(" ")[0])
    }), e
  }, C.generatedcontent = function () {
    var e;
    return P(["#", p, "{font:0/0 a}#", p, ':after{content:"', y, '";visibility:hidden;font:3px/1 a}'].join(""), function (t) {
      e = t.offsetHeight >= 3
    }), e
  }, C.video = function () {
    var e = t.createElement("video"), n = !1;
    try {
      (n = !!e.canPlayType) && ((n = new Boolean(n)).ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
    } catch (e) {
    }
    return n
  }, C.audio = function () {
    var e = t.createElement("audio"), n = !1;
    try {
      (n = !!e.canPlayType) && ((n = new Boolean(n)).ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
    } catch (e) {
    }
    return n
  }, C.localstorage = function () {
    try {
      return localStorage.setItem(p, p), localStorage.removeItem(p), !0
    } catch (e) {
      return !1
    }
  }, C.sessionstorage = function () {
    try {
      return sessionStorage.setItem(p, p), sessionStorage.removeItem(p), !0
    } catch (e) {
      return !1
    }
  }, C.webworkers = function () {
    return !!e.Worker
  }, C.applicationcache = function () {
    return !!e.applicationCache
  }, C.svg = function () {
    return !!t.createElementNS && !!t.createElementNS(S.svg, "svg").createSVGRect
  }, C.inlinesvg = function () {
    var e = t.createElement("div");
    return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == S.svg
  }, C.smil = function () {
    return !!t.createElementNS && /SVGAnimate/.test(b.call(t.createElementNS(S.svg, "animate")))
  }, C.svgclippaths = function () {
    return !!t.createElementNS && /SVGClipPath/.test(b.call(t.createElementNS(S.svg, "clipPath")))
  };
  for (var D in C) d(C, D) && (l = D.toLowerCase(), f[l] = C[D](), M.push((f[l] ? "" : "no-") + l));
  return f.input || (f.input = function (n) {
    for (var r = 0, o = n.length; r < o; r++) T[n[r]] = !!(n[r] in v);
    return T.list && (T.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), T
  }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), f.inputtypes = function (e) {
    for (var r, o, a, i = 0, c = e.length; i < c; i++) v.setAttribute("type", o = e[i]), (r = "text" !== v.type) && (v.value = y, v.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && v.style.WebkitAppearance !== n ? (m.appendChild(v), r = (a = t.defaultView).getComputedStyle && "textfield" !== a.getComputedStyle(v, null).WebkitAppearance && 0 !== v.offsetHeight, m.removeChild(v)) : /^(search|tel)$/.test(o) || (r = /^(url|email)$/.test(o) ? v.checkValidity && !1 === v.checkValidity() : v.value != y)), k[e[i]] = !!r;
    return k
  }("search tel url email datetime date month week time datetime-local number range color".split(" "))), f.addTest = function (e, t) {
    if ("object" == typeof e) for (var r in e) d(e, r) && f.addTest(r, e[r]); else {
      if (e = e.toLowerCase(), f[e] !== n) return f;
      t = "function" == typeof t ? t() : t, m.className += " " + (t ? "" : "no-") + e, f[e] = t
    }
    return f
  }, r(""), h = v = null, function (e, t) {
    function n(e, t) {
      var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement;
      return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
    }

    function r() {
      var e = g.elements;
      return "string" == typeof e ? e.split(" ") : e
    }

    function o(e) {
      var t = h[e[m]];
      return t || (t = {}, p++, e[m] = p, h[p] = t), t
    }

    function a(e, n, r) {
      if (n || (n = t), u) return n.createElement(e);
      r || (r = o(n));
      var a;
      return a = r.cache[e] ? r.cache[e].cloneNode() : f.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), a.canHaveChildren && !d.test(e) ? r.frag.appendChild(a) : a
    }

    function i(e, t) {
      t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
        return g.shivMethods ? a(n, e, t) : t.createElem(n)
      }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function (e) {
        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
      }) + ");return n}")(g, t.frag)
    }

    function c(e) {
      e || (e = t);
      var r = o(e);
      return !g.shivCSS || s || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), u || i(e, r), e
    }

    var s, u, l = e.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
      f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
      m = "_html5shiv", p = 0, h = {};
    !function () {
      try {
        var e = t.createElement("a");
        e.innerHTML = "<xyz></xyz>", s = "hidden" in e, u = 1 == e.childNodes.length || function () {
          t.createElement("a");
          var e = t.createDocumentFragment();
          return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
        }()
      } catch (e) {
        s = !0, u = !0
      }
    }();
    var g = {
      elements: l.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
      shivCSS: !1 !== l.shivCSS,
      supportsUnknownElements: u,
      shivMethods: !1 !== l.shivMethods,
      type: "default",
      shivDocument: c,
      createElement: a,
      createDocumentFragment: function (e, n) {
        if (e || (e = t), u) return e.createDocumentFragment();
        for (var a = (n = n || o(e)).frag.cloneNode(), i = 0, c = r(), s = c.length; i < s; i++) a.createElement(c[i]);
        return a
      }
    };
    e.html5 = g, c(t)
  }(this, t), f._version = "2.6.2", f._prefixes = E, f._domPrefixes = w, f._cssomPrefixes = x, f.mq = function (t) {
    var n = e.matchMedia || e.msMatchMedia;
    if (n) return n(t).matches;
    var r;
    return P("@media " + t + " { #" + p + " { position: absolute; } }", function (t) {
      r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
    }), r
  }, f.hasEvent = j, f.testProp = function (e) {
    return c([e])
  }, f.testAllProps = u, f.testStyles = P, f.prefixed = function (e, t, n) {
    return t ? u(e, t, n) : u(e, "pfx")
  }, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + M.join(" "), f
}(this, this.document);
