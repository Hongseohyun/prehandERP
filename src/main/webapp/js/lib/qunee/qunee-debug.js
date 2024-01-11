window.Q = (function (window, document, undefined) {
    "use strict";
    ///start
    function _98(t, e, i) {
        if (t.hasChildren()) {
            var n = t._fe || t.getChildren();
            if (n) {
                n = n._jz || n;
                for (var s = 0, o = n.length; o > s; s++)if (e.call(i, n[s]) === !1 || _98(n[s], e, i) === !1)return !1;
                return !0
            }
        }
    }

    function _h2(t) {
        if (!t.hasChildren())return t instanceof Node ? t : null;
        for (var e, i = t._fe._jz, n = i.length - 1; n >= 0;) {
            if (e = i[n], e = _h2(e))return e;
            n--
        }
        return null
    }

    function _2s(t, e, i, n) {
        return n ? _$a(t, e, i) : _$j(t, e, i)
    }

    function _$a(t, e, i) {
        t = t._jz || t;
        for (var n, s = 0, o = t.length; o > s; s++)if (n = t[s], n.hasChildren() && !_$a(n.children, e, i) || e.call(i, n) === !1)return !1;
        return !0
    }

    function _$j(t, e, i) {
        t = t._jz || t;
        for (var n, s = 0, o = t.length; o > s; s++)if (n = t[s], e.call(i, n) === !1 || n.hasChildren() && !_$j(n.children, e, i))return !1;
        return !0
    }

    function _$o(t, e, i, n) {
        return n ? _2(t, e, i) : _3(t, e, i)
    }

    function _2(t, e, i) {
        t = t._jz || t;
        for (var n, s = t.length, o = s - 1; o >= 0; o--)if (n = t[o], n.hasChildren() && !_2(n.children, e, i) || e.call(i, n) === !1)return !1;
        return !0
    }

    function _3(t, e, i) {
        t = t._jz || t;
        for (var n, s = t.length, o = s - 1; o >= 0; o--)if (n = t[o], e.call(i, n) === !1 || n.hasChildren() && !_3(n.children, e, i))return !1;
        return !0
    }

    function _1k(t, e, i) {
        for (var n, s = (t._jz || t).slice(0); s.length;) {
            n = s[0], s = s.splice(1);
            var o = e.call(i, n);
            if (o === !1)return !1;
            if (n.hasChildren()) {
                var r = n.children;
                r = r._jz || r, s = s.concat(r)
            }
        }
        return !0
    }

    function _8(t, e, i) {
        for (var n, s = (t._jz || t).slice(0); s.length;) {
            n = s[s.length - 1], s = s.splice(0, s.length - 1);
            var o = e.call(i, n);
            if (o === !1)return !1;
            if (n.hasChildren()) {
                var r = n.children;
                r = r._jz || r, s = s.concat(r)
            }
        }
        return !0
    }

    function stableSortMerge(t, e) {
        function i(t, i) {
            for (var n = t.length, s = i.length, o = n + s, r = new Array(o), a = 0, h = 0, l = 0; o > l;)r[l++] = a === n ? i[h++] : h === s || e(t[a], i[h]) <= 0 ? t[a++] : i[h++];
            return r
        }

        function n(t) {
            var e = t.length, s = Math.ceil(e / 2);
            return 1 >= e ? t : i(n(t.slice(0, s)), n(t.slice(s)))
        }

        return n(t)
    }

    function _i1(t, e, i, n) {
        t instanceof HashList && (t = t._jz);
        for (var s = 0, o = (t._jz || t).length; o > s; s++) {
            var r = e.call(i, t[s], s, n);
            if (r === !1)return !1
        }
        return !0
    }

    function _mxt(t, e, i) {
        for (var n = t instanceof HashList, s = t._jz || t, o = 0, r = s.length; r > o; o++) {
            var a = s[o];
            e.call(i, a) && (n ? t.remove(a) : t.splice(o, 1), o--, r--)
        }
    }

    function _7x(t, e, i, n) {
        t instanceof HashList && (t = t._jz);
        for (var s = (t._jz || t).length - 1; s >= 0; s--) {
            var o = e.call(i, t[s], s, n);
            if (o === !1)return !1
        }
        return !0
    }

    function _db(t) {
        if (t.clone instanceof Function)return t.clone(!0);
        var e, i = [];
        return _i1(t, function (t) {
            e = t && t.clone instanceof Function ? t.clone() : t, i.push(e)
        }, this), i
    }

    function _mh(t, e, i) {
        void 0 === i || 0 > i ? t.push(e) : t.splice(i, 0, e)
    }

    function _kj(t, e) {
        var i = t.indexOf(e);
        return 0 > i || i >= t.length ? !1 : t.splice(i, 1)
    }

    function _g5(t, e, i) {
        var n = t.indexOf(e);
        return n === i || 0 > n || n >= t.length ? !1 : (t.splice(n, 1), _mh(t, e, i), !0)
    }

    function containsInArray(t, e) {
        var i = !1;
        return _i1(t, function (t) {
            return e == t ? (i = !0, !1) : void 0
        }), i
    }

    function _f7(t, e, i) {
        return e instanceof Object ? t = _7k(e, t) : e && !i && (i = parseInt(e)), e && !i && (i = parseInt(e)), i ? setTimeout(t, i) : setTimeout(t)
    }

    function _ec(t, e) {
        return e && (t = _7k(e, t)), window.requestAnimationFrame(t)
    }

    function _ha(t, e) {
        return t.className = e, t
    }

    function _mxu(t, e) {
        if (!t.hasOwnProperty("classList")) {
            var i = t.getAttribute("class");
            if (!i)return _ha(t, e);
            for (var n = i.split(" "), s = 0, o = n.length; o > s; s++)if (n[s] == e)return;
            return i += " " + e, _ha(t, i)
        }
        t.classList.add(e)
    }

    function _mxw(t, e) {
        if (!t.hasOwnProperty("classList")) {
            var i = t.getAttribute("class");
            if (!i || !i.indexOf(e))return;
            for (var n = "", s = i.split(" "), o = 0, r = s.length; r > o; o++)s[o] != e && (n += s[o] + " ");
            return _ha(t, n)
        }
        t.classList.remove(e)
    }

    function _hc(t) {
        return t instanceof Number || "number" == typeof t
    }

    function _hd(t) {
        return void 0 !== t && (t instanceof String || "string" == typeof t)
    }

    function _f8(t) {
        return void 0 !== t && (t instanceof Boolean || "boolean" == typeof t)
    }

    function _hy(t) {
        return Array.isArray(t)
    }

    function _2o(t) {
        t || (t = window.event), t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }

    function _21(t) {
        t || (t = window.event), t.stopPropagation ? t.stopPropagation() : t.cancelBubble || (t.cancelBubble = !0)
    }

    function _ek(t) {
        _2o(t), _21(t)
    }

    function _fc(t) {
        return Math.floor(Math.random() * t)
    }

    function _df() {
        return Math.random() >= .5
    }

    function _hw() {
        idIndex = 0
    }

    function _hh() {
        return ++idIndex
    }

    function _ky(t, e, i) {
        if (i && _ky(t, i), t && e && "object" == typeof e)for (var n in e)n && (t[n] = e[n]);
        return t
    }

    function _hu(t, e) {
        if (t && e)for (var i in e)"undefined" == typeof t[i] && (t[i] = e[i]);
        return t
    }

    function _hj(t, e) {
        var i = t;
        for (var n in e)if (e.__lookupGetter__) {
            var s = e.__lookupGetter__(n), o = e.__lookupSetter__(n);
            s || o ? (s && i.__defineGetter__(n, s), o && i.__defineSetter__(n, o)) : i[n] = e[n]
        } else i[n] = e[n];
        return i
    }

    function _kl(t, e, i) {
        if (!(t instanceof Function))throw new Error("subclass must be type of Function");
        var n = null;
        "object" == typeof e && (n = e, e = t, t = function () {
            e.apply(this, arguments)
        });
        var s = t.prototype, o = function () {
        };
        return o.prototype = e.prototype, t.prototype = new o, t.superclass = e.prototype, t.superclass.constructor = e, _hj(t.prototype, s), n && _hj(t.prototype, n), i && _hj(t.prototype, i), t.prototype.class = t, t
    }

    function _39(t, e, i) {
        return _iw(t, e, "constructor", i)
    }

    function _iw(t, e, i, n) {
        var s = e.superclass;
        if (s) {
            var o = s[i];
            return o ? o.apply(t, n) : void 0
        }
    }

    function _91(t) {
        return t.toFixed(4)
    }

    function _7d(t) {
        delete t.scope, delete t.handle
    }

    function _78(t, e) {
        t[e] && (_7d(t[e]), delete t[e])
    }

    function _7k(t, e) {
        var i = function () {
            return i.handle.apply(i.scope, arguments)
        };
        return i.handle = e, i.scope = t, i
    }

    function _7q(t) {
        for (var e = 0, i = 0; i < t.length; i++)e = 31 * e + t.charCodeAt(i);
        return e
    }

    function _km(t, e) {
        return t == e
    }

    function _mxy(t, e, i, n, s) {
        if (n)return void Object.defineProperty(t, e, {value: i, enumerable: !0});
        var o = {configurable: !0, enumerable: !0}, r = "$" + e;
        void 0 !== i && (t[r] = i), o.get = function () {
            return this[r]
        }, o.set = function (t) {
            var i = this[r];
            if (_km(i, t))return !1;
            var n = new PropertyChangeEvent(this, e, t, i);
            return this.beforeEvent(n) ? (this[r] = t, s && s.call(this, t, i), this.onEvent(n), !0) : !1
        }, Object.defineProperty(t, e, o)
    }

    function _82(t, e) {
        for (var i = 0, n = e.length; n > i; i++) {
            var s = e[i];
            _mxy(t, s.name || s, s.defaultValue || s.value, s.readOnly, s.onSetting)
        }
    }

    function _mz0(t) {
        if (t && t > 0 && 1 > t) {
            var e = Math.floor(16777215 * Math.random());
            return "rgba(" + (e >> 16 & 255) + "," + (e >> 8 & 255) + "," + (255 & e) + "," + t.toFixed(2) + ")"
        }
        return _hs(Math.floor(16777215 * Math.random()))
    }

    function _7f(t, e) {
        return e / (e - t)
    }

    function _dm(t, e) {
        return e - e / t
    }

    function _mz8(t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t)
    }

    function _hr(t) {
        return t > 0 ? Math.ceil(t) : Math.floor(t)
    }

    function _hs(t) {
        return 16777216 > t ? "#" + ("000000" + t.toString(16)).slice(-6) : "rgba(" + (t >> 16 & 255) + "," + (t >> 8 & 255) + "," + (255 & t) + "," + ((t >> 24 & 255) / 255).toFixed(2) + ")"
    }

    function _6d(t, e, i) {
        "object" != typeof i || i.hasOwnProperty("enumerable") || (i.enumerable = !0), Object.defineProperty(t, e, i)
    }

    function _50(t, e) {
        for (var i in e)if ("_" != i[0]) {
            var n = e[i];
            "object" != typeof n || n.hasOwnProperty("enumerable") || (n.enumerable = !0)
        }
        Object.defineProperties(t, e)
    }

    function stringToObject(t, e) {
        e || (e = window);
        for (var i = t.split("."), n = 0, s = i.length; s > n; n++) {
            var o = i[n];
            e = e[o]
        }
        return e
    }

    function isMouseEvent(t) {
        return t instanceof MouseEvent || t instanceof Object && void 0 !== t.touches
    }

    function _ml(t) {
        window.console && console.log(t)
    }

    function _kx(t) {
        window.console && console.trace(t)
    }

    function _kw(t) {
        window.console && console.error(t)
    }

    function _i0(t, e) {
        var i = Date.now();
        if (e && e > 1)for (var n = 0, s = 1e4; e > n;) {
            if (Date.now() - i > s)return !1;
            t(n++)
        } else t();
        return Date.now() - i
    }

    function perpendicularLine(t, e, i) {
        var n, s, o;
        0 == t._mw ? (n = -1, o = 0, s = e) : 0 == t._mz ? (n = 0, o = 1, s = i) : (n = -1 / t._mw, s = (t._mw - n) * e + t._mx, o = 1);
        var r = new Line;
        return r._mw = n, r._mx = s, r._mz = o, r._mv = e, r._mt = i, r._l7 = Math.atan2(n, o), r._mzos = Math.cos(r._l7), r._sin = Math.sin(r._l7), r
    }

    function createLineFromAngle(t, e, i) {
        var n, s = new Line, o = Math.tan(i), r = 1;
        return 1 / 0 == o || o == -1 / 0 ? (o = -1, r = 0, n = t) : Math.abs(o) < 1e-15 ? (o = 0, r = 1, n = e) : n = e - o * t, s._mw = o, s._mz = r, s._mx = n, s._mv = t, s._mt = e, s._l7 = i, s._mzos = Math.cos(i), s._sin = Math.sin(i), s
    }

    function getIntersectionPointOnRect(t, e, i, n, s) {
        var o, r;
        e > n ? o = -1 : n > e && (o = 1), i > s ? r = -1 : s > i && (r = 1);
        var a, h;
        if (!o)return h = 0 > r ? t.y : t.bottom, {x: e, y: h};
        if (!r)return a = 0 > o ? t.x : t.right, {x: a, y: i};
        var l = (i - s) / (e - n), _ = i - l * e, u = 0 > o ? e - t.x : e - t.right, d = 0 > r ? i - t.y : i - t.bottom;
        return Math.abs(l) >= Math.abs(d / u) ? (h = 0 > r ? t.y : t.bottom, a = (h - _) / l) : (a = 0 > o ? t.x : t.right, h = l * a + _), {
            x: a,
            y: h
        }
    }

    function intersectsRect(t, e, i, n, s, o, r, a) {
        return 0 >= r || 0 >= a || 0 >= i || 0 >= n ? !1 : (r += s, a += o, i += t, n += e, (s > r || r > t) && (o > a || a > e) && (t > i || i > s) && (e > n || n > o))
    }

    function intersectsPoint(t, e, i, n, s, o) {
        return s >= t && t + i >= s && o >= e && e + n >= o
    }

    function containsRect(t, e, i, n, s, o, r, a) {
        return s >= t && o >= e && t + i >= s + r && e + n >= o + a
    }

    function _mxa(t, e, i) {
        if (!t)return {x: 0, y: 0};
        if (void 0 !== t.x)return {x: t.x, y: t.y};
        var n, s, o = t.horizontalPosition, r = t.verticalPosition;
        switch (o) {
            case LEFT:
                n = 0;
                break;
            case RIGHT:
                n = e;
                break;
            default:
                n = e / 2
        }
        switch (r) {
            case TOP:
                s = 0;
                break;
            case BOTTOM:
                s = i;
                break;
            default:
                s = i / 2
        }
        return {x: n, y: s}
    }

    function doChildAdd(t, e, i) {
        t.children.add(e, i), t.onChildAdd(e, i)
    }

    function doChildRemove(t, e) {
        t._fe && (t._fe.remove(e), t.onChildRemove(e))
    }

    function css_mzamelCase(t) {
        return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (t, e) {
            return e.toUpperCase()
        })
    }

    function css_pascalCase(t) {
        return t.replace(/[A-Z]/g, function (t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function css_hasClass(t, e) {
        return t.className && t.className.match(new RegExp("\\b" + e + "\\b"))
    }

    function css_mxw(t, e) {
        return css_supportClassList ? void t.classList.remove(e) : void(t.className && (t.className = t.className.replace(new RegExp("\\b" + e + "\\b", "g"), "")))
    }

    function css_mzss(t, e) {
        var i = t.style;
        if (!i)return !1;
        var n, s;
        for (n in e)e.hasOwnProperty(n) && (s = css_pre(n)) && (i[s] = e[n]);
        return t
    }

    function css_toString(t) {
        var e, i, n = "";
        for (e in t)t.hasOwnProperty(e) && (i = css_pre(e)) && (n += css_pascalCase(i) + ":" + t[e] + ";");
        return n ? n.substring(0, n.length - 1) : n
    }

    function css_mcCSS(t, e, i) {
        (e = css_pre(e)) && (t.style[e] = i)
    }

    function css_mhRule(t, e) {
        return css_styleSheet ? (e && !_hd(e) && (e = css_toString(e)), css_styleSheet.insertRule ? void css_styleSheet.insertRule(t + "{" + e + "}", 0) : void(css_styleSheet.addRule && css_styleSheet.addRule(t, e, 0))) : !1
    }

    function _8d(t, e) {
        t.touches && (t = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t.touches[0]);
        var i = e.getBoundingClientRect(), n = t.clientX || 0, s = t.clientY || 0;
        return isTouchSupport && isSafari && (window.pageXOffset && n == t.pageX && (n -= window.pageXOffset), window.pageYOffset && s == t.pageY && (s -= window.pageYOffset)), {
            x: n - i.left,
            y: s - i.top
        }
    }

    function addEventListenerSupport(t, e) {
        return this["$" + e] = _4i(t, e, function (t) {
            return onEventSupport.call(this, t, e)
        }, !1, this)
    }

    function toQEvent(t) {
        var e = this;
        return t.getData = function () {
            return e._kz.getElementByMouseEvent(t)
        }, t.getUI = function () {
            return e._kz.getUIByMouseEvent(t)
        }, t
    }

    function _ic(t) {
        this.__mzancelClick || (this.__mzlickEvent = t, this.__mzlickTime ? this.__mzlickTime++ : (this.__mzlickTime = 1, setTimeout(_7k(this, function () {
            if (this.__mzlickEvent) {
                var t = this.__mzlickTime;
                this.__mzlickTime = 0, 1 == t ? this._ih(this.__mzlickEvent, "onclick") : t > 1 && this._ih(this.__mzlickEvent, "ondblclick"), this.__mzlickEvent = null
            }
        }), Defaults.DOUBLE_CLICK_INTERVAL_TIME)))
    }

    function _fk(t) {
        if (t.touches) {
            for (var e = t.touches, i = [], n = 0, s = e.length; s > n; n++) {
                var o = e[n];
                i.push({pageX: o.pageX, pageY: o.pageY, clientX: o.clientX, clientY: o.clientY})
            }
            return {timeStamp: t.timeStamp, touches: i, scale: t.scale}
        }
        return {timeStamp: t.timeStamp, x: t.clientX, y: t.clientY}
    }

    function _mxn(t, e) {
        switch (e) {
            case"touchstart":
                if (t.touches.length >= 2)return this._90 = _fk(t), this._mzh.clear(), this._1s(), void(this._mzj || (this._mzj = t, this._90 = _fk(t)));
            case"mousedown":
                if (_ek(t), 2 == t.button)return;
                if (this._ih(t, "onstart"), this._mzj = t, this._90 = _fk(t), t.button || (this.__onLongPressFunction ? this.__longPressTimer && this._1s() : this.__onLongPressFunction = _7k(this, function () {
                        this.__longPressTimer = null, this._mzj && (this.__mzancelClick = !0, this._ih(this._mzj, "onlongpress"))
                    }), this.__longPressTimer = setTimeout(this.__onLongPressFunction, Defaults.LONG_PRESS_INTERVAL), this.__mzancelClick = !1), isTouchSupport)return;
                return void(InteractionSupport._mzurrentInteractionSupport = this);
            case"touchend":
                if (!this._mzj)return void(this._moving = null);
                if (t.touches.length)return void(this._90 = _fk(t));
                t.timeStamp - this._mzj.timeStamp < 200 && _ic.call(this, this._mzj);
            case"touchcancel":
                if (!this._mzj)return void(this._moving = null);
                this._moving && (this._moving = null, this._ii(t));
            case"mouseup":
                return void this._e3(t);
            case"click":
                return void _ic.call(this, t);
            case"mousewheel":
            case"DOMMouseScroll":
                return t.delta = t.wheelDelta || -t.detail, this._ih(t, "onmousewheel");
            case"touchmove":
                var i = t.touches.length;
                return this._moving || (this._moving = !0, 1 == i && this._ea()), void this._kd(t)
        }
    }

    function onEventSupport(t, e) {
        return t = toQEvent.call(this, t), _mxn.call(this, t, e), "click" != e && "dblclick" != e ? this._ih(t, "on" + e) : void 0
    }

    function removeEventListenerSupport(t, e) {
        var i = "$" + e;
        _2n(t, e, this[i]), _78(this, i)
    }

    function addEventListenersSupport(t) {
        _i1(EVENT_TYPES, function (e) {
            addEventListenerSupport.call(this, t, e)
        }, this), isTouchSupport || InteractionSupport._mwq || (InteractionSupport._mwq = !0, _4i(window, "mousemove", function (t) {
            if (InteractionSupport._mzurrentInteractionSupport) {
                _ek(t);
                var e = InteractionSupport._mzurrentInteractionSupport;
                if (!InteractionSupport._dragging) {
                    if (e._mzj) {
                        var i = e._mzj.screenX - t.screenX, n = e._mzj.screenY - t.screenY;
                        if (4 > i * i + n * n)return
                    }
                    InteractionSupport._dragging = !0, e._ea()
                }
                e._kd(t)
            }
        }, !0), _4i(window, "mouseup", function (t) {
            var e = InteractionSupport._mzurrentInteractionSupport;
            delete InteractionSupport._mzurrentInteractionSupport, InteractionSupport._dragging && (delete InteractionSupport._dragging, _2o(t), t = toQEvent.call(e, t), e._ii(t), e._e3(t))
        }, !0))
    }

    function clearEventListenersSupport(t) {
        _i1(EVENT_TYPES, function (e) {
            removeEventListenerSupport.call(this, t, e)
        }, this), this._mxl()
    }

    function DragSupport(t, e, i) {
        this._lt = t, this._mzh = new DragPoints, addEventListenersSupport.call(this, t), e && (this._listener = e), this._l2 = i
    }

    function isMetaKey(t) {
        return isMac && t.metaKey || !isMac && t.ctrlKey
    }

    function DragPoints() {
        this.points = []
    }

    function loadXML(t, e, i, n, s) {
        loadURL(t, function (n) {
            if (e) {
                var s = n.responseXML;
                if (!s)return void(i || ON_AJAX_ERROR)("'" + t + "' XML format error.");
                e(s)
            }
        }, i, n, s)
    }

    function loadJSON(t, e, i, n, s) {
        loadURL(t, function (n) {
            if (e) {
                var s, o = n.responseText;
                if (!o)return (i || ON_AJAX_ERROR)("'" + t + "' JSON format error."), s = new Error("'" + t + "' JSON format error."), e(o, s);
                try {
                    o = JSON.parse(o)
                } catch (r) {
                    (i || ON_AJAX_ERROR)(r), s = r
                }
                e(o, s)
            }
        }, i, n, s)
    }

    function loadURL(t, e, i, n, s) {
        (i === !1 || n === !1) && (s = !1);
        try {
            var o = new XMLHttpRequest, r = encodeURI(t);
            if (s !== !1) {
                var a;
                a = r.indexOf("?") > 0 ? "&" : "?", r += a + "__time=" + Date.now()
            }
            o.open("GET", r), o.onreadystatechange = function () {
                return 4 == o.readyState ? o.status && 200 != o.status ? void(i || ON_AJAX_ERROR)("'" + t + "' load error") : void(e && e(o)) : void 0
            }, o.send(n)
        } catch (h) {
            (i || ON_AJAX_ERROR)("'" + t + "' load error", h)
        }
    }

    function intersectsRect(t, e, i, n, s, o, r, a) {
        return 0 >= r || 0 >= a || 0 >= i || 0 >= n ? !1 : (r += s, a += o, i += t, n += e, (s > r || r > t) && (o > a || a > e) && (t > i || i > s) && (e > n || n > o))
    }

    function containsRect(t, e, i, n, s, o, r, a) {
        return s >= t && o >= e && t + i >= s + r && e + n >= o + a
    }

    function rotatePoint(t, e, i) {
        return t instanceof Object && t.x ? rotateThePointAt(t, e, 0, 0) : rotatePointAt(t, e, i, 0, 0)
    }

    function rotatePointAt(t, e, i, n, s) {
        var o = Math.sin(i), r = Math.cos(i), a = t - n, h = e - s;
        return t = a * r - h * o + n, e = a * o + h * r + s, new Point(t, e, i)
    }

    function rotateThePointAt(t, e, i, n) {
        i = i || 0, n = n || 0;
        var s = Math.sin(e), o = Math.cos(e), r = t.x - i, a = t.y - n;
        return t.x = r * o - a * s + i, t.y = r * s + a * o + n, t
    }

    function rotateRect(t, e, i) {
        return rotateRectAt(t, e, i, 0, 0)
    }

    function rotateRectAt(t, e, i, n, s) {
        var o = rotatePointAt(t.x, t.y, e, n, s), r = rotatePoint(t.x + t.width, t.y, e, n, s), a = rotatePoint(t.x + t.width, t.y + t.height, e, n, s), h = rotatePoint(t.x, t.y + t.height, e, n, s);
        return i ? i.clear() : i = new Rect, i.addPoint(o), i.addPoint(r), i.addPoint(a), i.addPoint(h), i
    }

    function setCanvasSize(t, e) {
        var i = this.ratio || 1;
        this.style.width = t + "px", this.style.height = e + "px", this.width = t * i, this.height = e * i
    }

    function clearCanvas() {
        this.canvas.width = this.canvas.width
    }

    function _hl(t) {
        var e = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
        return devicePixelRatio2 / e
    }

    function _9r(t, e, i) {
        var n = document.createElement("canvas");
        if (n.g = n.getContext("2d"), t !== !0 && !i)return t && e && (n.width = t, n.height = e), n;
        var s = n.g;
        return s.ratio = n.ratio = _hl(s), n.setSize = setCanvasSize, s._la = clearCanvas, t && e && n.setSize(t, e), n
    }

    function _1b(t, e, i) {
        if (void 0 === t || null === t)return {width: 0, height: 0};
        var n = getTempG();
        i = i || Defaults.FONT, n.font != i && (n.font = i);
        for (var s = e * Defaults.LINE_HEIGHT, o = 0, r = 0, a = t.split("\n"), h = 0, l = a.length; l > h; h++) {
            var _ = a[h];
            o = Math.max(n.measureText(_).width, o), r += s
        }
        return {width: o, height: r}
    }

    function getTempG(t, e) {
        return _di || (_di = _9r()), t && e && (_di.width = t, _di.height = e), _di.g
    }

    function asinh(t) {
        return Math.log(t + Math.sqrt(t * t + 1))
    }

    function caculateCurveTByLengthFunction(t, e) {
        e = e || t(1);
        var i = 1 / e, n = .5 * i, s = Math.min(1, e / 100);
        return function (o) {
            if (0 >= o)return 0;
            if (o >= e)return 1;
            for (var r = o * i, a = 0; a++ < 10;) {
                var h = t(r), l = o - h;
                if (Math.abs(l) <= s)return r;
                r += l * n
            }
            return r
        }
    }

    function pointOnQuadratic(t, e, i) {
        var n = 1 - t, s = n * n * e[0] + 2 * n * t * e[2] + t * t * e[4], o = n * n * e[1] + 2 * n * t * e[3] + t * t * e[5];
        if (i) {
            var r = (e[0] + e[4] - 2 * e[2]) * t + e[2] - e[0], a = (e[1] + e[5] - 2 * e[3]) * t + e[3] - e[1];
            return {x: s, y: o, rotate: Math.atan2(a, r)}
        }
        return {t: t, x: s, y: o}
    }

    function derivQuadraticCurve(t, e, i) {
        var n = t - 2 * e + i;
        return 0 != n ? (t - e) / n : -1
    }

    function calculateQuadraticCurveBounds(t, e) {
        e.add(t[4], t[5]);
        var i = derivQuadraticCurve(t[0], t[2], t[4]);
        if (i > 0 && 1 > i) {
            var n = pointOnQuadratic(i, t);
            e.add(n.x, n.y)
        }
        var s = derivQuadraticCurve(t[1], t[3], t[5]);
        if (s > 0 && 1 > s) {
            var n = pointOnQuadratic(s, t);
            e.add(n.x, n.y)
        }
        return e
    }

    function caculateQuadraticCurveLengthFunction(t) {
        if (t[0] == t[2] && t[1] == t[3] || t[1] == t[3] && t[1] == t[5]) {
            var e = t[0], i = t[1], n = t[4], s = t[5], o = Math.sqrt(calculateDistanceSquare(e, i, n, s));
            return function (t) {
                return o * t
            }
        }
        var r = t[0], a = t[2], h = t[4], l = r - 2 * a + h, _ = 2 * a - 2 * r;
        r = t[1], a = t[3], h = t[5];
        var u = r - 2 * a + h, d = 2 * a - 2 * r, c = 4 * (l * l + u * u), f = 4 * (l * _ + u * d), E = _ * _ + d * d, o = 4 * c * E - f * f, g = 1 / o, p = .125 * Math.pow(c, -1.5), v = 2 * Math.sqrt(c), T = (o * asinh(f / Math.sqrt(o)) + 2 * Math.sqrt(c) * f * Math.sqrt(E)) * p;
        return function (t) {
            var e = f + 2 * t * c, i = e / Math.sqrt(o), n = e * e * g;
            return (o * Math.log(i + Math.sqrt(n + 1)) + v * e * Math.sqrt(E + t * f + t * t * c)) * p - T
        }
    }

    function pointOnBezier(t, e, i) {
        var n = 1 - t, s = e[0], o = e[2], r = e[4], a = e[6], h = s * n * n * n + 3 * o * t * n * n + 3 * r * t * t * n + a * t * t * t;
        if (i)var l = 3 * t * t * a + (6 * t - 9 * t * t) * r + (9 * t * t - 12 * t + 3) * o + (-3 * t * t + 6 * t - 3) * s;
        s = e[1], o = e[3], r = e[5], a = e[7];
        var _ = s * n * n * n + 3 * o * t * n * n + 3 * r * t * t * n + a * t * t * t;
        if (i) {
            var u = 3 * t * t * a + (6 * t - 9 * t * t) * r + (9 * t * t - 12 * t + 3) * o + (-3 * t * t + 6 * t - 3) * s;
            return {x: h, y: _, rotate: Math.atan2(u, l)}
        }
        return {x: h, y: _}
    }

    function derivBezierCurve(t, e, i, n) {
        var s = -t + 3 * e - 3 * i + n;
        if (0 == s)return [(t - e) / (2 * i - 4 * e + 2 * t)];
        var o = 2 * t - 4 * e + 2 * i, r = e - t, a = o * o - 4 * s * r;
        return 0 > a ? void 0 : 0 == a ? [-o / (2 * s)] : (a = Math.sqrt(a), [(a - o) / (2 * s), (-a - o) / (2 * s)])
    }

    function calculateBezierCurveBounds(t, e) {
        e.add(t[6], t[7]);
        var i = derivBezierCurve(t[0], t[2], t[4], t[6]);
        if (i)for (var n = 0; n < i.length; n++) {
            var s = i[n];
            if (!(0 >= s || s >= 1)) {
                var o = pointOnBezier(s, t);
                e.add(o.x, o.y)
            }
        }
        if (i = derivBezierCurve(t[1], t[3], t[5], t[7]))for (var n = 0; n < i.length; n++) {
            var s = i[n];
            if (!(0 >= s || s >= 1)) {
                var o = pointOnBezier(s, t);
                e.add(o.x, o.y)
            }
        }
    }

    function caculateBezierCurveLength2(t) {
        var e = {x: t[0], y: t[1]}, i = {x: t[2], y: t[3]}, n = {x: t[4], y: t[5]}, s = {
            x: t[6],
            y: t[7]
        }, o = e.x - 0, r = e.y - 0, a = i.x - 0, h = i.y - 0, l = n.x - 0, _ = n.y - 0, u = s.x - 0, d = s.y - 0, c = 3 * (-o + 3 * a - 3 * l + u), f = 6 * (o - 2 * a + l), E = 3 * (-o + a), g = 3 * (-r + 3 * h - 3 * _ + d), p = 6 * (r - 2 * h + _), v = 3 * (-r + h), T = function (t) {
            var e = c * t * t + f * t + E, i = g * t * t + p * t + v;
            return Math.sqrt(e * e + i * i)
        }, m = (T(0) + 4 * T(.5) + T(1)) / 6;
        return m
    }

    function caculateBezierCurveLengthFunction(t, e) {
        function i(t, e, i, n) {
            var s = -t + 3 * e - 3 * i + n, o = 2 * t - 4 * e + 2 * i, r = e - t;
            return function (t) {
                return 3 * (s * t * t + o * t + r)
            }
        }

        function n(t, e) {
            var i = s(t), n = o(t);
            return Math.sqrt(i * i + n * n) * e
        }

        var s = i(t[0], t[2], t[4], t[6]), o = i(t[1], t[3], t[5], t[7]);
        e = e || 100;
        var r = 1 / e;
        return function (t) {
            if (!t)return 0;
            for (var e, i = 0, s = 0; ;) {
                if (e = i + r, e >= t)return s += n(i, e - i);
                s += n(i, r), i = e
            }
        }
    }

    function inCircle(t, e, i) {
        return calculateDistanceSquare(e, i, t.cx, t.cy) <= t._squareR + DISTANCE_TOLERANCE
    }

    function circleByTwoPoints(t, e, i, n) {
        return i = i || calculateDistance2(t, e), new Circle((t.x + e.x) / 2, (t.y + e.y) / 2, i / 2, t, e, null, n)
    }

    function calculateDistance2(t, e) {
        return calculateDistance(t.x, t.y, e.x, e.y)
    }

    function Circle(t, e, i, n, s, o, r) {
        this.cx = t, this.cy = e, this.r = i, this._squareR = i * i, this.p1 = n, this.p2 = s, this.p3 = o, this._otherPoint = r
    }

    function Ellipse(t, e, i, n) {
        this.cx = t, this.cy = e, this.width = i, this.height = n
    }

    function smallEmbodyCircle(t) {
        var e = t[0], i = t[1], n = t[2], s = Circle._mzreateCircle(e, i, n);
        return tryCircle(t, e, i, n, s)
    }

    function smallEmbodyEllipse(t, e) {
        e = e || caculateBounds(t);
        for (var i, n = e.width / e.height, s = [], o = t.length, r = 0; o > r; r++)i = t[r], s.push({
            x: i.x,
            y: i.y * n
        });
        var a = smallEmbodyCircle(s);
        return a ? new Ellipse(a.cx, a.cy / n, 2 * a.r, 2 * a.r / n) : void 0
    }

    function tryCircle(t, e, i, n, s) {
        for (var o, r, a = t.length, h = s._squareR, l = 0; a > l; l++)if (o = t[l], o != e && o != i && o != n) {
            var _ = calculateDistanceSquare(s.cx, s.cy, o.x, o.y);
            _ - DISTANCE_TOLERANCE > h && (h = _, r = o)
        }
        if (!r)return s;
        var u, d = Circle._mzreateCircle(r, e, i), c = Circle._mzreateCircle(r, e, n), f = Circle._mzreateCircle(r, n, i);
        return inCircle(d, n.x, n.y) && (u = d), inCircle(c, i.x, i.y) && (!u || u.r > c.r) && (u = c), inCircle(f, e.x, e.y) && (!u || u.r > f.r) && (u = f), e = u.p1, i = u.p2, n = u.p3 || u._otherPoint, tryCircle(t, e, i, n, u)
    }

    function caculateBounds(t) {
        for (var e, i = t.length, n = new Rect, s = 0; i > s; s++)e = t[s], n.add(e.x, e.y);
        return n
    }

    function PathGenerator(t, e, i, n, s) {
        this._6f && this.validate();
        var o = s ? this.getBounds(s) : this.bounds, r = i / o.width, a = t - r * o.x, h = n / o.height, l = e - h * o.y, _ = this._fg, u = [];
        return _i1(_, function (t) {
            var e = t.clone(), i = e.points;
            if (i && i.length) {
                for (var n = i.length, s = [], o = 0; n > o; o++) {
                    var _ = i[o];
                    o++;
                    var d = i[o];
                    _ = r * _ + a, d = h * d + l, s.push(_), s.push(d)
                }
                e.points = s
            }
            u.push(e)
        }, this), new Path(u)
    }

    function pathHitTest(t, e, i, n, s, o) {
        if (s = s || 0, i = i || 0, !s && !o)return !1;
        if (!n) {
            var r = this.getBounds(s);
            if (!r.intersectsPoint(t, e, i))return !1
        }
        var a = Math.round(2 * i) || 1, h = getTempG(a, a), l = (h.canvas, -t + i), _ = -e + i;
        if (h.setTransform(1, 0, 0, 1, l, _), !h.isPointInStroke) {
            this._ln(h), s && h.stroke(), o && h.fill();
            for (var u = h.getImageData(0, 0, a, a).data, d = u.length / 4; d > 0;) {
                if (u[4 * d - 1] > ALPHA_TOLERANCE)return !0;
                --d
            }
            return !1
        }
        return h.lineWidth = (s || 0) + 2 * i, this._ln(h), s && h.isPointInStroke(i, i) ? !0 : o ? h.isPointInPath(i, i) : !1
    }

    function calculatePointByLength(t, e, i) {
        if (!this._j7)return null;
        var n = this._fg;
        if (n.length < 2)return null;
        i === !1 && (t += this._j7);
        var s = n[0];
        if (0 >= t)return calculatePointInfoOnStraightLine(s.points[0], s.points[1], n[1].points[0], n[1].points[1], t, e);
        if (t >= this._j7) {
            s = n[n.length - 1];
            var o, r, a = s.points, h = a.length, l = a[h - 2], _ = a[h - 1];
            if (h >= 4)o = a[h - 4], r = a[h - 3]; else {
                s = n[n.length - 2];
                var u = s.lastPoint;
                o = u.x, r = u.y
            }
            return calculatePointInfoOnStraightLine(l, _, l + l - o, _ + _ - r, t - this._j7, e)
        }
        for (var d, c = 0, f = 1, h = n.length; h > f; f++)if (d = n[f], d._j7) {
            if (!(c + d._j7 < t)) {
                var E, u = s.lastPoint;
                if (d.type == ARC_TO) {
                    var g = d.points;
                    E = getLocationOnArcByLength(t - c, d, u.x, u.y, g[0], g[1], g[2], g[3], d._r)
                } else {
                    if (!d._lf)return calculatePointInfoOnStraightLine(u.x, u.y, d.points[0], d.points[1], t - c, e);
                    var p = caculateCurveTByLengthFunction(d._lf, d._j7)(t - c), g = d.points;
                    E = d.type == CURVE_TO && 6 == g.length ? pointOnBezier(p, [u.x, u.y].concat(g), !0) : pointOnQuadratic(p, [u.x, u.y].concat(g), !0)
                }
                return e && (E.x -= e * Math.sin(E.rotate || 0), E.y += e * Math.cos(E.rotate || 0)), E
            }
            c += d._j7, s = d
        } else s = d
    }

    function getLocationOnArcByLength(t, e, i, n, s, o, r, a) {
        if (t <= e._l1)return calculatePointInfoOnStraightLine(i, n, s, o, t);
        if (t >= e._j7)return t -= e._j7, calculatePointInfoOnStraightLine(e._p2x, e._p2y, r, a, t);
        if (t -= e._l1, e._o) {
            var h = t / e._r;
            e._CCW && (h = -h);
            var l = rotatePointAt(e._p1x, e._p1y, h, e._o.x, e._o.y);
            return l.rotate += e._mw1 || 0, l.rotate += Math.PI, l
        }
        return calculatePointInfoOnStraightLine(e._p1x, e._p1y, e._p2x, e._p2y, t)
    }

    function perpendicularLine(t, e, i) {
        var n, s, o;
        0 == t._mw ? (n = -1, o = 0, s = e) : 0 == t._mz ? (n = 0, o = 1, s = i) : (n = -1 / t._mw, s = (t._mw - n) * e + t._mx, o = 1);
        var r = new Line;
        return r._mw = n, r._mx = s, r._mz = o, r._mv = e, r._mt = i, r
    }

    function angleEquals(t, e) {
        var i = (t - e) % (2 * Math.PI);
        return i > 1e-5 || -1e-5 > i
    }

    function angleFormat(t) {
        return t %= 2 * Math.PI, 0 > t && (t += 2 * Math.PI), t
    }

    function caculateArcLength(t, e, i, n, s, o, r, a) {
        var h = calculateDistance(e, i, n, s), l = calculateDistance(n, s, o, r);
        if (!h || !l)return t._d = 0, t._r = 0, t._l1 = h, t._l2 = l, t._j7 = 0;
        var _ = constructLine(n, s, e, i), u = constructLine(n, s, o, r);
        t._mw1 = _, t._mw2 = u;
        var d = _ - u;
        d = angleFormat(d), d > Math.PI && (d = 2 * Math.PI - d, t._CCW = !0);
        var c = Math.PI - d, f = Math.tan(d / 2), E = a / f, g = Math.min(h, l);
        E > g && (E = g, a = f * E);
        var p, v = n + Math.cos(_) * E, T = s + Math.sin(_) * E, m = n + Math.cos(u) * E, y = s + Math.sin(u) * E, S = new Line(e, i, n, s), I = new Line(n, s, o, r), P = perpendicularLine(S, v, T), O = perpendicularLine(I, m, y), R = P._3u(O), A = Math.atan2(T - R.y, v - R.x), L = Math.atan2(y - R.y, m - R.x);
        p = t._CCW ? L : A;
        for (var C, w = 0; 4 > w;) {
            var D = w * HALF_PI;
            if (angleFormat(D - p) <= c) {
                var x, N;
                if (C ? C++ : C = 1, 0 == w ? (x = R.x + a, N = R.y) : 1 == w ? (x = R.x, N = R.y + a) : 2 == w ? (x = R.x - a, N = R.y) : (x = R.x, N = R.y - a), t["_mxoundaryPoint" + C] = {
                        x: x,
                        y: N
                    }, 2 == C)break
            }
            w++
        }
        return t._p1x = v, t._p1y = T, t._p2x = m, t._p2y = y, t._o = R, t._d = E, t._r = a, t._l1 = h - E, t._l2 = l - E, t._j7 = t._l1 + c * a
    }

    function constructThreePoint(t, e, i, n, s, o, r) {
        var a = constructLine(i, n, t, e), h = constructLine(i, n, s, o), l = a - h;
        return r ? l : (0 > l && (l = -l), l > Math.PI && (l -= Math.PI), l)
    }

    function constructLine(t, e, i, n) {
        return Math.atan2(n - e, i - t)
    }

    function getImagePostfix(t) {
        var e = REG_BASE64_IMAGE.exec(t);
        if (e)return e[1];
        var i = t.lastIndexOf(".");
        return i >= 0 && i < t.length - 1 ? t.substring(i + 1) : void 0
    }

    function getImageType(t) {
        if (!t)return null;
        if (t instanceof Path)return IMAGE_TYPE_SHAPE;
        if (t.draw instanceof Function)return IMAGE_TYPE_DRAWABLE;
        if (_hd(t)) {
            var e = getImagePostfix(t);
            if (e) {
                if (!isIE && REG_GIF.test(e))return IMAGE_TYPE_GIF;
                if (REG_SVG.test(e))return IMAGE_TYPE_SVG
            }
            return IMAGE_TYPE_DEFAULT
        }
    }

    function QImage(t, e, i) {
        if (this._lm = getImageType(t), !this._lm)throw new Error("the image format is not supported", t);
        this._lq = t, this._mwd = e, this._mw0 = i, this.width = e || Defaults.IMAGE_WIDTH, this.height = i || Defaults.IMAGE_HEIGHT, this._jj = {}
    }

    function _8e(t, e, i, n) {
        return e ? (IMAGE_CACHE[t] = new QImage(e, i, n), t) : void delete IMAGE_CACHE[t]
    }

    function _h7(t) {
        if (t._ld)return t._ld;
        var e = _hd(t);
        if (!e && !t.name)return t._ld = new QImage(t);
        var i = t.name || t;
        return i in IMAGE_CACHE ? IMAGE_CACHE[i] : IMAGE_CACHE[i] = new QImage(t)
    }

    function _h4(t) {
        return t in IMAGE_CACHE
    }

    function _mwf(t, e, i) {
        i = i || {};
        var n = t.getBounds(i.lineWidth);
        if (!n.width || !n.height)return !1;
        var s = e.getContext("2d"), o = e.ratio || 1, r = i.scaleMode || "full.uniform", a = /full/i.test(r), h = /uniform/i.test(r), l = 1, _ = 1;
        if (a) {
            var u = e.width, d = e.height, c = i.padding, f = 0, E = 0;
            if (c) {
                var g, p, v, T;
                _hc(c) ? g = p = v = T = c : (g = c.top || 0, p = c.bottom || 0, v = c.left || 0, T = c.right || 0), u -= v + T, d -= g + p, f += v, E += g
            }
            l = u / n.width, _ = d / n.height, h && (l > _ ? (f += (u - _ * n.width) / 2, l = _) : _ > l && (E += (d - l * n.height) / 2, _ = l)), (f || E) && s.translate(f, E)
        }
        s.translate(-n.x * l, -n.y * _), t.draw(s, o, i, l, _, !0)
    }

    function _ep(t, e, i) {
        var n = _h7(t);
        return n ? (n.validate(), (n._lm == IMAGE_TYPE_GIF || n._6p()) && n._mwi(function (t) {
            t.source && (this.width = this.width, _mwf(t.source, this, i))
        }, e), void _mwf(n, e, i)) : (Q.error("draw image error - " + t), !1)
    }

    function _7i(t, e, i, n) {
        var s = t.length;
        if (s && !(0 > s)) {
            n = n || 1;
            for (var o, r, a, h = [], l = 0; l++ < s;)if (o = t.getLocation(l, 0), o && calculateDistance(e, i, o.x, o.y) <= n) {
                r = l, a = o.rotate;
                break
            }
            if (void 0 !== r) {
                for (var o, _, u, d = 0, l = 0, c = t._fg.length; c > l; l++) {
                    if (o = t._fg[l], !_ && (d += o._j7 || 0, d > r)) {
                        _ = !0;
                        var f = Math.max(10, o._j7 / 6), E = f * Math.sin(a), g = f * Math.cos(a);
                        if (o.type == CURVE_TO) {
                            var p = o.points[0], v = o.points[1];
                            if (u) {
                                var T = new Line(e, i, e + g, i + E), m = T._3u(new Line(u.lastPoint.x, u.lastPoint.y, o.points[0], o.points[1]));
                                void 0 !== m.x && (p = m.x, v = m.y)
                            }
                            h.push(new PathSegment(CURVE_TO, [p, v, e - g, i - E, e, i]))
                        } else h.push(new PathSegment(QUAD_TO, [e - g, i - E, e, i]));
                        if (o.points)if (o.type == CURVE_TO) {
                            o.points[0] = e + g, o.points[1] = i + E;
                            var T = new Line(e, i, e + g, i + E), m = T._3u(new Line(o.points[2], o.points[3], o.points[4], o.points[5]));
                            void 0 !== m.x && (o.points[2] = m.x, o.points[3] = m.y)
                        } else if (o.type == QUAD_TO) {
                            o.type = CURVE_TO, o.points = [e + g, i + E].concat(o.points);
                            var T = new Line(e, i, e + g, i + E), m = T._3u(new Line(o.points[2], o.points[3], o.points[4], o.points[5]));
                            void 0 !== m.x && (o.points[2] = m.x, o.points[3] = m.y)
                        } else o.type == LINE_TO && (o.type = QUAD_TO, o.points = [e + g, i + E].concat(o.points), l == c - 1 && (o.invalidTerminal = !0))
                    }
                    h.push(o), u = o
                }
                return h
            }
        }
    }

    function toPixelsFromCanvas(t) {
        var e = t.width, i = t.height;
        try {
            var n = t.g.getImageData(0, 0, e, i);
            return toPixelsFromCanvasData(n.data, e, i)
        } catch (s) {
            Q.error(s)
        }
    }

    function Pixels(t, e, i) {
        this._19(t, e, i)
    }

    function toPixelsFromCanvasData(t, e, i) {
        return new Pixels(t, e, i)
    }

    function colorToRGB(t) {
        if ("#" == t[0]) {
            if (t = t.substring(1), 3 == t.length)t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]; else if (6 != t.length)return;
            return t = parseInt(t, 16), [t >> 16 & 255, t >> 8 & 255, 255 & t]
        }
        if (/^rgb/i.test(t)) {
            var e = t.indexOf("("), i = t.indexOf(")");
            if (0 > e || e > i)return;
            if (t = t.substring(e + 1, i), t = t.split(","), t.length < 3)return;
            var n = parseInt(t[0]), s = parseInt(t[1]), o = parseInt(t[2]), r = 3 == t.length ? 255 : parseInt(t[3]);
            return [n, s, o, r]
        }
    }

    function colorBurn(t, e, i) {
        return i || (i = Defaults.BLEND_MODE), i == Consts.BLEND_MODE_MULTIPLY ? t * e : i == Consts.BLEND_MODE_DARKEN ? Math.min(t, e) : i == Consts.BLEND_MODE_COLOR_BURN ? 1 - (1 - e) / t : i == Consts.BLEND_MODE_LINEAR_BURN ? t + e - 1 : i == Consts.BLEND_MODE_LIGHTEN ? Math.max(t, e) : i == Consts.BLEND_MODE_SCREEN ? t + e - t * e : e
    }

    function getRenderCanvas(t, e, i) {
        var n = colorToRGB(e);
        if (!n)return void Q.error("color error, [" + e + "]");
        var s = t.g.getImageData(0, 0, t.width, t.height), o = s.data;
        if (i instanceof Function)o = i(t, o, n) || o; else {
            var r = n[0] / 255, a = n[1] / 255, h = n[2] / 255;
            if (i == Consts.BLEND_MODE_GRAY)for (var l = 0, _ = o.length; _ > l; l += 4) {
                var u = 77 * o[l] + 151 * o[l + 1] + 28 * o[l + 2] >> 8;
                o[l] = u * r | 0, o[l + 1] = u * a | 0, o[l + 2] = u * h | 0
            } else for (var l = 0, _ = o.length; _ > l; l += 4)o[l] = 255 * colorBurn(r, o[l] / 255, i) | 0, o[l + 1] = 255 * colorBurn(a, o[l + 1] / 255, i) | 0, o[l + 2] = 255 * colorBurn(h, o[l + 2] / 255, i) | 0
        }
        var t = _9r(t.width, t.height);
        return t.g.putImageData(s, 0, 0), t
    }

    function UIHitTest(t, e, i, n) {
        return 1 > i && (i = 1), UIHitTestByRect(t - i, e - i, 2 * i, 2 * i, n)
    }

    function UIHitTestByRect(t, e, i, n, s) {
        i = Math.round(i) || 1, n = Math.round(n) || 1;
        var o = getTempG(i, n);
        o.setTransform(1, 0, 0, 1, -t, -e), s.draw(o);
        for (var r = o.getImageData(0, 0, i, n).data, a = r.length / 4; a-- > 0;)if (r[4 * a - 1] > ALPHA_TOLERANCE)return !0;
        return !1
    }

    function UIHitTestByBoundsAbsolute(t, e, i, n, s, o) {
        t -= s.$x, e -= s.$y;
        var r = s._fi.intersection(t, e, i, n);
        if (!r)return !1;
        t = r.x * o, e = r.y * o, i = r.width * o, n = r.height * o, i = Math.round(i) || 1, n = Math.round(n) || 1;
        var a = getTempG(), h = a.canvas;
        h.width < i || h.height < n ? (h.width = i, h.height = n) : (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, i, n)), a.setTransform(1, 0, 0, 1, -t - s.$x * o, -e - s.$y * o), a.scale(o, o), s._jm(a, 1);
        for (var l = a.getImageData(0, 0, i, n).data, _ = l.length / 4; _-- > 0;)if (l[4 * _ - 1] > ALPHA_TOLERANCE)return !0;
        return !1
    }

    function createBubblePointer(t, e, i, n, s, o, r, a, h) {
        if (intersectsPoint(t, e, i, n, a, h))return null;
        var l, _, u, d = new PathSegment(LINE_TO, [t + i - s, e]), c = new PathSegment(QUAD_TO, [t + i, e, t + i, e + o]), f = new PathSegment(LINE_TO, [t + i, e + n - o]), E = new PathSegment(QUAD_TO, [t + i, e + n, t + i - s, e + n]), g = new PathSegment(LINE_TO, [t + s, e + n]), p = new PathSegment(QUAD_TO, [t, e + n, t, e + n - o]), v = new PathSegment(LINE_TO, [t, e + o]), T = new PathSegment(QUAD_TO, [t, e, t + s, e]), m = (new PathSegment(CLOSE), [d, c, f, E, g, p, v, T]), y = new Rect(t + s, e + o, i - s - s, n - o - o);
        t > a ? (l = LEFT, u = 5) : a > t + i ? (l = RIGHT, u = 1) : (l = CENTER, u = 0), e > h ? (_ = TOP, l == LEFT && (u = 7)) : h > e + n ? (_ = BOTTOM, l == RIGHT ? u = 3 : l == CENTER && (u = 4)) : (_ = MIDDLE, l == LEFT ? u = 6 : l == RIGHT && (u = 2));
        var S = bubbleIntersectionPoints(u, t, e, i, n, s, o, r, a, h, y), I = S[0], P = S[1], O = new Path, R = O._fg;
        R.push(new PathSegment(MOVE_TO, [I.x, I.y])), R.push(new PathSegment(LINE_TO, [a, h])), R.push(new PathSegment(LINE_TO, [P.x, P.y])), P._lu && (R.push(P._lu), P._luNO++);
        for (var A = P._luNO % 8, L = I._luNO; ;)if (R.push(m[A]), ++A, A %= 8, A == L)break;
        return I._lu && R.push(I._lu), O.closePath(), O
    }

    function bubbleConerIntersectionPoints(t, e, i, n, s, o, r, a, h, l, _, u, d, c) {
        var f = new Line(u, d, i, n), E = new Line(e[0], e[1], e[4], e[5]), g = E._3u(f, _), p = g[0], v = g[1];
        if (void 0 !== p._rest) {
            p._luNO = (t - 1) % 8, v._luNO = (t + 1) % 8;
            var T = p._rest;
            7 == t ? (p.y = o + l + Math.min(c.height, T), v.x = s + h + Math.min(c.width, T)) : 5 == t ? (p.x = s + h + Math.min(c.width, T), v.y = o + a - l - Math.min(c.height, T)) : 3 == t ? (p.y = o + a - l - Math.min(c.height, T), v.x = s + r - h - Math.min(c.width, T)) : 1 == t && (p.x = s + r - h - Math.min(c.width, T), v.y = o + l + Math.min(c.height, T))
        } else {
            f._mc(f._mv, f._mt, p.x, p.y), p = f._$h(e), f._mc(f._mv, f._mt, v.x, v.y), v = f._$h(e);
            var m = breakQuadraticCurve2(e, [p, v]), y = m[0], S = m[2];
            p._luNO = t, v._luNO = t, p._lu = new PathSegment(QUAD_TO, y.slice(2)), v._lu = new PathSegment(QUAD_TO, S.slice(2))
        }
        return [p, v]
    }

    function bubbleIntersectionPoints0(t, e, i, n, s, o, r, a, h, l) {
        var _, u;
        if (h - a >= e + o)_ = {y: i, x: h - a}, _._luNO = 0; else {
            _ = {y: i + r, x: Math.max(e, h - a)};
            var d = [e, i + r, e, i, e + o, i], c = new Line(h, l, _.x, _.y);
            if (_ = c._$h(d)) {
                _hy(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var f = breakQuadraticCurve2(d, [_]);
                f = f[0], f && (_._lu = new PathSegment(QUAD_TO, f.slice(2))), _._luNO = 7
            } else _ = {y: i, x: e + o}, _._luNO = 0
        }
        if (e + n - o >= h + a)u = {y: i, x: h + a}, u._luNO = 0; else {
            u = {y: i + r, x: Math.min(e + n, h + a)};
            var E = [e + n - o, i, e + n, i, e + n, i + r], c = new Line(h, l, u.x, u.y);
            if (u = c._$h(E)) {
                _hy(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var f = breakQuadraticCurve2(E, [u]);
                f && f[f.length - 1] && (u._lu = new PathSegment(QUAD_TO, f[f.length - 1].slice(2))), u._luNO = 1
            } else u = {y: i, x: e + n - o}, u._luNO = 0
        }
        return [_, u]
    }

    function bubbleIntersectionPoints2(t, e, i, n, s, o, r, a, h, l) {
        var _, u;
        if (l - a >= i + r)_ = {x: e + n, y: l - a}, _._luNO = 2; else {
            _ = {x: e + n - o, y: Math.max(i, l - a)};
            var d = [e + n - o, i, e + n, i, e + n, i + r], c = new Line(h, l, _.x, _.y);
            if (_ = c._$h(d)) {
                _hy(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var f = breakQuadraticCurve2(d, [_]);
                f = f[0], f && (_._lu = new PathSegment(QUAD_TO, f.slice(2))), _._luNO = 1
            } else _ = {x: e + n, y: i + r}, _._luNO = 2
        }
        if (i + s - r >= l + a)u = {x: e + n, y: l + a}, u._luNO = 2; else {
            u = {x: e + n - o, y: Math.min(i + s, l + a)};
            var E = [e + n, i + s - r, e + n, i + s, e + n - o, i + s], c = new Line(h, l, u.x, u.y);
            if (u = c._$h(E)) {
                _hy(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var f = breakQuadraticCurve2(E, [u]);
                f[1] && (u._lu = new PathSegment(QUAD_TO, f[1].slice(2))), u._luNO = 3
            } else u = {x: e + n, y: i + s - r}, u._luNO = 2
        }
        return [_, u]
    }

    function bubbleIntersectionPoints4(t, e, i, n, s, o, r, a, h, l) {
        var _, u;
        if (h - a >= e + o)u = {y: i + s, x: h - a}, u._luNO = 4; else {
            u = {y: i + s - r, x: Math.max(e, h - a)};
            var d = [e + o, i + s, e, i + s, e, i + s - r], c = new Line(h, l, u.x, u.y);
            if (u = c._$h(d)) {
                _hy(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var f = breakQuadraticCurve2(d, [u]);
                f = f[f.length - 1], f && (u._lu = new PathSegment(QUAD_TO, f.slice(2))), u._luNO = 5
            } else u = {y: i + s, x: e + o}, u._luNO = 4
        }
        if (e + n - o >= h + a)_ = {y: i + s, x: h + a}, _._luNO = 4; else {
            _ = {y: i + s - r, x: Math.min(e + n, h + a)};
            var E = [e + n, i + s - r, e + n, i + s, e + n - o, i + s], c = new Line(h, l, _.x, _.y);
            if (_ = c._$h(E)) {
                _hy(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var f = breakQuadraticCurve2(E, [_]);
                f[0] && (_._lu = new PathSegment(QUAD_TO, f[0].slice(2))), _._luNO = 3
            } else _ = {y: i + s, x: e + n - o}, _._luNO = 4
        }
        return [_, u]
    }

    function bubbleIntersectionPoints6(t, e, i, n, s, o, r, a, h, l) {
        var _, u;
        if (l - a >= i + r)u = {x: e, y: l - a}, u._luNO = 6; else {
            u = {x: e + o, y: Math.max(i, l - a)};
            var d = [e, i + r, e, i, e + o, i], c = new Line(h, l, u.x, u.y);
            if (u = c._$h(d)) {
                _hy(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var f = breakQuadraticCurve2(d, [u]);
                f = f[f.length - 1], f && (u._lu = new PathSegment(QUAD_TO, f.slice(2)))
            } else u = {x: e, y: i + r};
            u._luNO = 7
        }
        if (i + s - r >= l + a)_ = {x: e, y: l + a}, _._luNO = 6; else {
            _ = {x: e + o, y: Math.min(i + s, l + a)};
            var E = [e + o, i + s, e, i + s, e, i + s - r], c = new Line(h, l, _.x, _.y);
            if (_ = c._$h(E)) {
                _hy(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var f = breakQuadraticCurve2(E, [_]);
                f[0] && (_._lu = new PathSegment(QUAD_TO, f[0].slice(2))), _._luNO = 5
            } else _ = {x: e, y: i + s - r}, _._luNO = 6
        }
        return [_, u]
    }

    function bubbleIntersectionPoints(t, e, i, n, s, o, r, a, h, l, _) {
        var u = a / 2;
        switch (t) {
            case 7:
                var d = [e, i + r, e, i, e + o, i], c = e + o, f = i + r;
                return bubbleConerIntersectionPoints(t, d, c, f, e, i, n, s, o, r, a, h, l, _);
            case 5:
                return d = [e + o, i + s, e, i + s, e, i + s - r], c = e + o, f = i + s - r, bubbleConerIntersectionPoints(t, d, c, f, e, i, n, s, o, r, a, h, l, _);
            case 3:
                return d = [e + n, i + s - r, e + n, i + s, e + n - o, i + s], c = e + n - o, f = i + s - r, bubbleConerIntersectionPoints(t, d, c, f, e, i, n, s, o, r, a, h, l, _);
            case 1:
                return d = [e + n - o, i, e + n, i, e + n, i + r], c = e + n - o, f = i + r, bubbleConerIntersectionPoints(t, d, c, f, e, i, n, s, o, r, a, h, l, _);
            case 0:
                return bubbleIntersectionPoints0(t, e, i, n, s, o, r, u, h, l, _);
            case 2:
                return bubbleIntersectionPoints2(t, e, i, n, s, o, r, u, h, l, _);
            case 4:
                return bubbleIntersectionPoints4(t, e, i, n, s, o, r, u, h, l, _);
            case 6:
                return bubbleIntersectionPoints6(t, e, i, n, s, o, r, u, h, l, _)
        }
    }

    function breakQuadraticCurve2(t, e) {
        for (var i, n, s, o, r, a, h = t[0], l = t[1], _ = t[2], u = t[3], d = t[4], c = t[5], f = [], E = 0; E < e.length; E++)r = e[E], a = r.t, 0 != a && 1 != a ? (i = h + (_ - h) * a, n = l + (u - l) * a, s = _ + (d - _) * a, o = u + (c - u) * a, f.push([h, l, i, n, r.x, r.y]), h = r.x, l = r.y, _ = s, u = o) : f.push(null);
        return void 0 !== s && f.push([r.x, r.y, s, o, d, c]), f
    }

    function localToParent(t) {
        return this.$layoutByAnchorPoint && this._mxc && (t.x -= this._mxc.x, t.y -= this._mxc.y), this.$rotate && rotateThePointAt(t, this.$rotate), t.x += this.$offsetX || 0, t.y += this.$offsetY || 0, this.$rotatable && this.$_hostRotate ? rotateThePointAt(t, this.$_hostRotate) : t
    }

    function parentToLocal(t) {
        return this.$rotatable && this.$_hostRotate && rotateThePointAt(t, -this.$_hostRotate), t.x -= this.$offsetX || 0, t.y -= this.$offsetY || 0, this.$rotate && rotateThePointAt(t, -this.$rotate), this.$layoutByAnchorPoint && this._mxc && (t.x += this._mxc.x, t.y += this._mxc.y), t
    }

    function UIValidateBoundsBackgroundBorderAndPointer() {
        var t = this.$invalidateSize;
        this.$invalidateSize && (this.$invalidateSize = !1, this.$invalidateAnchorPoint = !0, this._87.setByRect(this._je), this.$padding && this._87.grow(this.$padding), this.$border && this._87.grow(this.$border));
        var e = this._$t();
        if (e)var i = this.showPointer && this.$pointerWidth;
        return this.$invalidateAnchorPoint && this.$layoutByAnchorPoint && (this.$invalidateAnchorPoint = !1, i && (t = !0), this._mxc = _mxa(this.$anchorPosition, this._87.width, this._87.height), this._mxc.x += this._87.x, this._mxc.y += this._87.y), e ? (t && (this._mxackgroundGradientInvalidateFlag = !0, UIValidateBackgroundShape.call(this, i)), this._mxackgroundGradientInvalidateFlag && (this._mxackgroundGradientInvalidateFlag = !1, this._mxackgroundGradient = this.backgroundGradient && this._lrShape && this._lrShape.bounds ? Gradient.prototype.generatorGradient.call(this.backgroundGradient, this._lrShape.bounds) : null), t) : (this.__lyPointer = !1, t)
    }

    function UIValidateBackgroundShape(t) {
        var e = this._87.x + this.$border / 2, i = this._87.y + this.$border / 2, n = this._87.width - this.$border, s = this._87.height - this.$border, o = 0, r = 0;
        if (this.$borderRadius && (_hc(this.$borderRadius) ? o = r = this.$borderRadius : (o = this.$borderRadius.x || 0, r = this.$borderRadius.y || 0), o = Math.min(o, n / 2), r = Math.min(r, s / 2)), t && (this._pointerX = this._mxc.x - this.$offsetX + this.$pointerX, this._pointerY = this._mxc.y - this.$offsetY + this.$pointerY, !this._87.intersectsPoint(this._pointerX, this._pointerY))) {
            var a = new Bubble(e, i, n, s, o, r, this.$pointerWidth, this._pointerX, this._pointerY);
            return this._lrShape = a._lu, this._lrShape.bounds.set(e, i, n, s), void(this.__lyPointer = !0)
        }
        this._lrShape && this._lrShape.clear(), this._lrShape = Shapes.getRect(e, i, n, s, o, r, this._lrShape), this._lrShape.bounds.set(e, i, n, s)
    }

    function addPointToRect(t, e, i, n) {
        return n && (t.width < 0 || t.height < 0) ? (t.x = e, t.y = i, void(t.width = t.height = 0)) : (e < t.x ? (t.width += t.x - e, t.x = e) : e > t.x + t.width && (t.width = e - t.x), void(i < t.y ? (t.height += t.y - i, t.y = i) : i > t.y + t.height && (t.height = i - t.y)))
    }

    function UIGetLocation(t, e, i) {
        var n, s = t.position, o = void 0 === t.layoutByPath ? this.layoutByPath : t.layoutByPath;
        return this.$data instanceof Path && o ? (n = pathUtils._mxa(s, this.$data, this.lineWidth, e, i), n.x *= this._jf, n.y *= this._jh) : (n = _mxa(s, this._87.width, this._87.height), n.x += this._87.x, n.y += this._87.y), localToParent.call(this, n)
    }

    function UILayoutChild(t, e) {
        if (e)if (e._87.isEmpty())t.$x = e.$x, t.$y = e.$y; else {
            var i = UIGetLocation.call(e, t);
            t.$x = i.x, t.$y = i.y, t._hostRotate = i.rotate
        } else t.$x = 0, t.$y = 0;
        t.$invalidateRotate && UIValidateRotate.call(t)
    }

    function addStyleClearSupport(t) {
        t._la = function () {
            this.lineDash = [], this.lineDashOffset = 0, this.lineWidth = 0, this.fillStyle = null, this.strokeStyle = null
        }
    }

    function addLineDashSupport(t) {
        if (void 0 === t.lineDash) {
            var e, i;
            if (t.setLineDash)e = t.getLineDash, i = t.setLineDash; else {
                var n;
                if (void 0 !== t.mozDash)n = "mozDash"; else {
                    if (void 0 === t.webkitLineDash)return !1;
                    n = "webkitLineDash"
                }
                i = function (t) {
                    this[n] = t
                }, e = function () {
                    return this[n]
                }
            }
            _6d(t, "lineDash", {
                get: function () {
                    return e.call(this)
                }, set: function (t) {
                    i.call(this, t)
                }
            })
        }
        if (void 0 === t.lineDashOffset) {
            var s;
            if (void 0 !== t.mozDashOffset)s = "mozDashOffset"; else {
                if (void 0 === t.webkitLineDashOffset)return;
                s = "webkitLineDashOffset"
            }
            _6d(t, "lineDashOffset", {
                get: function () {
                    return this[s]
                }, set: function (t) {
                    this[s] = t
                }
            })
        }
    }

    function GifLoader(t, e, i, n, s) {
        var o, r, a, h, l, _, u, d, c = function (t) {
            return function (e) {
                t(e)
            }
        }, f = function () {
            r = null, a = null, h = l, l = null, _ = null
        }, E = function (t) {
            o = t, u || (u = _9r()), u.width = o.width, u.height = o.height, e.width = o.width, e.height = o.height
        }, g = function (t) {
            p(), f(), r = t.transparencyGiven ? t.transparencyIndex : null, a = 10 * t.delayTime, l = t.disposalMethod
        }, p = function () {
            if (_) {
                var t = _.getImageData(0, 0, o.width, o.height), i = {
                    data: t,
                    _pixels: toPixelsFromCanvasData(t.data, o.width, o.height),
                    delay: a
                };
                s.call(e, i)
            }
        }, v = function (t) {
            _ || (_ = u.getContext("2d"));
            var e = t.lctFlag ? t.lct : o.gct, i = _.getImageData(t.leftPos, t.topPos, t.width, t.height);
            t.pixels.forEach(function (t, n) {
                r !== t ? (i.data[4 * n + 0] = e[t][0], i.data[4 * n + 1] = e[t][1], i.data[4 * n + 2] = e[t][2], i.data[4 * n + 3] = 255) : (2 === h || 3 === h) && (i.data[4 * n + 3] = 0)
            }), _.clearRect(0, 0, o.width, o.height), _.putImageData(i, t.leftPos, t.topPos)
        }, T = function () {
        }, m = {
            hdr: c(E), gce: c(g), com: c(T), app: {NETSCAPE: c(T)}, img: c(v, !0), eof: function () {
                p(), i.call(e)
            }
        }, y = new XMLHttpRequest;
        isIE || y.overrideMimeType("text/plain; charset=x-user-defined"), y.onload = function () {
            d = new Stream(y.responseText);
            try {
                parseGIF(d, m)
            } catch (t) {
                n.call(e, "parse")
            }
        }, y.onerror = function () {
            n.call(e, "xhr")
        }, y.open("GET", t, !0), y.send()
    }

    function findAgentNode(t) {
        return t.parent ? (t = t.parent, t._dz ? t._dz : t._gs === !1 ? t : null) : null
    }

    function _54(t, e, i) {
        if (i = i || e.toAgent, i == t)return !1;
        var n = t.getEdgeBundle(i);
        return n || (n = new EdgeBundle(t, i), t._linkedNodes[i.id] = n), n._im(e, t)
    }

    function _36(t, e, i) {
        if (i = i || e.toAgent, i == t)return !1;
        var n = t.getEdgeBundle(i);
        return n ? n._d8(e, t) : void 0
    }

    function _5x(t, e, i) {
        return void 0 === i && (i = e.toAgent), i != t ? (t._8c || (t._8c = new HashList), t._8c.add(e) === !1 ? !1 : void t._9m++) : void 0
    }

    function _2z(t, e, i) {
        return t._8c && t._8c.remove(e) !== !1 ? (t._9m--, void _36(t, e, i)) : !1
    }

    function _6o(t, e) {
        return e.fromAgent != t ? (t._9h || (t._9h = new HashList), t._9h.add(e) === !1 ? !1 : void t._mx9++) : void 0
    }

    function _3p(t, e) {
        return t._9h && t._9h.remove(e) !== !1 ? (t._mx9--, void _36(e.fromAgent, e, t)) : !1
    }

    function findGroup(t, e) {
        if (void 0 === e && (e = t instanceof Edge), e) {
            if (t.isInvalid())return null;
            var i = findGroup(t.from, !1);
            if (t.isLooped())return i;
            for (var n = findGroup(t.to, !1); null != i && null != n;) {
                if (i == n)return i;
                if (i.isDescendantOf(n))return n;
                if (n.isDescendantOf(i))return i;
                i = findGroup(i, !1), n = findGroup(n, !1)
            }
            return null
        }
        for (var s = t.parent; null != s;) {
            if (s._i9())return s;
            s = s.parent
        }
        return null
    }

    function findFollowers(t, e, i) {
        t._i9() && t.hasChildren() && t.children.forEach(function (t) {
            t instanceof Node && e.add(t) && findFollowers(t, e, i)
        }, this), t.hasFollowers() && t._do.forEach(function (t) {
            (null == i || i.accept(t)) && e.add(t) && findFollowers(t, e, i)
        })
    }

    function sendToTopSibling(t, e) {
        e.parent ? e.parent.setChildIndex(e, e.parent.childrenCount - 1) : t.roots.setIndex(e, t.roots.length - 1)
    }

    function sendToBottomSibling(t, e) {
        e.parent ? e.parent.setChildIndex(e, 0) : t.roots.setIndex(e, 0)
    }

    function _ik(t, e, i) {
        return e ? e.getChildIndex(i) : t.roots.indexOf(i)
    }

    function elementSendToTop(t, e) {
        if (e instanceof Edge)return void(e.isInvalid() || sendToTopEdge(t, e));
        for (sendToTopSibling(t, e); e = e.parent;)sendToTopSibling(t, e)
    }

    function elementSendToBottom(t, e) {
        if (e instanceof Edge)return void(e.isInvalid() || sendToTopEdge(t, e));
        for (sendToTopSibling(t, e); e = e.parent;)sendToTopSibling(t, e)
    }

    function sendToTopEdge(t, e) {
        var i = e.fromAgent;
        if (e.isLooped())sendToTopSibling(t, i); else {
            var n = e.toAgent;
            sendToTopSibling(t, i), sendToTopSibling(t, n)
        }
    }

    function sendToBottomEdge(t, e) {
        var i = e.fromAgent;
        if (e.isLooped())sendToBottomSibling(t, i); else {
            var n = e.toAgent;
            sendToBottomSibling(t, i), sendToBottomSibling(t, n)
        }
    }

    function _mzf(t, e) {
        return t._9m++, t._fj ? (e._iy = t._ie, t._ie._ix = e, void(t._ie = e)) : (t._fj = e, void(t._ie = e))
    }

    function _8z(t, e) {
        t._9m--, t._ie == e && (t._ie = e._iy), e._iy ? e._iy._ix = e._ix : t._fj = e._ix, e._ix && (e._ix._iy = e._iy), e._iy = null, e._ix = null, _36(t, e, e.$to)
    }

    function _er(t, e) {
        return t._mx9++, t._if ? (e._k7 = t._j9, t._j9._k8 = e, void(t._j9 = e)) : (t._if = e, void(t._j9 = e))
    }

    function _9u(t, e) {
        t._mx9--, t._j9 == e && (t._j9 = e._k7), e._k7 ? e._k7._k8 = e._k8 : t._if = e._k8, e._k8 && (e._k8._k7 = e._k7), e._k7 = null, e._k8 = null
    }

    function getAllChildrenEdgeInfos(t, e) {
        return e = e || new HashList, t.forEachEdge(function (t) {
            e.add({id: t.id, edge: t, fromAgent: t.$from._dz, toAgent: t.$to._dz})
        }), t.forEachChild(function (t) {
            t instanceof Node && getAllChildrenEdgeInfos(t, e)
        }), e
    }

    function _52(t, e, i) {
        return _3l(t, e, i) === !1 ? !1 : _37(t, e, i)
    }

    function _37(t, e, i) {
        if (t._fj)for (var n = t._fj; n;) {
            if (e.call(i, n) === !1)return !1;
            n = n._ix
        }
    }

    function _3l(t, e, i) {
        if (t._if)for (var n = t._if; n;) {
            if (e.call(i, n) === !1)return !1;
            n = n._k8
        }
    }

    function addRect(t, e, i, n, s, o, r) {
        return o || r ? (o = o || 0, r = void 0 === r ? o : r || 0, o = Math.min(o, n / 2), r = Math.min(r, s / 2), t.moveTo(e + o, i), t.lineTo(e + n - o, i), t.quadTo(e + n, i, e + n, i + r), t.lineTo(e + n, i + s - r), t.quadTo(e + n, i + s, e + n - o, i + s), t.lineTo(e + o, i + s), t.quadTo(e, i + s, e, i + s - r), t.lineTo(e, i + r), t.quadTo(e, i, e + o, i), t.closePath(), t) : (t.moveTo(e, i), t.lineTo(e + n, i), t.lineTo(e + n, i + s), t.lineTo(e, i + s), t.closePath(), t)
    }

    function addCircle(t, e) {
        var i = e.r || 1, n = e.cx || 0, s = e.cy || 0, o = i * Math.tan(Math.PI / 8), r = i * Math.sin(Math.PI / 4);
        t.moveTo(n + i, s), t.quadTo(n + i, s + o, n + r, s + r), t.quadTo(n + o, s + i, n, s + i), t.quadTo(n - o, s + i, n - r, s + r), t.quadTo(n - i, s + o, n - i, s), t.quadTo(n - i, s - o, n - r, s - r), t.quadTo(n - o, s - i, n, s - i), t.quadTo(n + o, s - i, n + r, s - r), t.quadTo(n + i, s - o, n + i, s)
    }

    function addEllipse(t, e, i, n, s) {
        e instanceof Ellipse && (n = e.width, s = e.height, i = e.cy - s / 2, e = e.cx - n / 2);
        var o = .5522848, r = n / 2 * o, a = s / 2 * o, h = e + n, l = i + s, _ = e + n / 2, u = i + s / 2;
        return t.moveTo(e, u), t.curveTo(e, u - a, _ - r, i, _, i), t.curveTo(_ + r, i, h, u - a, h, u), t.curveTo(h, u + a, _ + r, l, _, l), t.curveTo(_ - r, l, e, u + a, e, u), t
    }

    function addStar(t, e, i, n, s) {
        var o = 2 * n, r = 2 * s, a = e + n / 2, h = i + s / 2;
        return t.moveTo(a - o / 4, h - r / 12), t.lineTo(e + .306 * n, i + .579 * s), t.lineTo(a - o / 6, h + r / 4), t.lineTo(e + n / 2, i + .733 * s), t.lineTo(a + o / 6, h + r / 4), t.lineTo(e + .693 * n, i + .579 * s), t.lineTo(a + o / 4, h - r / 12), t.lineTo(e + .611 * n, i + .332 * s), t.lineTo(a + 0, h - r / 4), t.lineTo(e + .388 * n, i + .332 * s), t.closePath(), t
    }

    function addDelta(t, e, i, n, s) {
        return t.moveTo(e, i), t.lineTo(e + n, i + s / 2), t.lineTo(e, i + s), t.closePath(), t
    }

    function addDiamond(t, e, i, n, s) {
        return t.moveTo(e, i + s / 2), t.lineTo(e + n / 2, i), t.lineTo(e + n, i + s / 2), t.lineTo(e + n / 2, i + s), t.closePath(), t
    }

    function addStandardArrow(t, e, i, n, s, o) {
        return t.moveTo(e, i), t.lineTo(e + n, i + s / 2), t.lineTo(e, i + s), o || (t.lineTo(e + .25 * n, i + s / 2), t.closePath()), t
    }

    function createRegularPolygon(t, e, i, n, s) {
        if (!t || 3 > t)throw new Error("edge number must greater than 2");
        t = 0 | t, n = n || 50, s = s || 0, e = e || 0, i = i || 0;
        for (var o, r, a = 0, h = 2 * Math.PI / t, l = new Path; t > a;)o = e + n * Math.cos(s), r = i + n * Math.sin(s), a ? l.lineTo(o, r) : l.moveTo(o, r), ++a, s += h;
        return l.closePath(), l
    }

    function createHeart() {
        var t = new Path;
        return t.moveTo(75, 40), t.curveTo(75, 37, 70, 25, 50, 25), t.curveTo(20, 25, 20, 62.5, 20, 62.5), t.curveTo(20, 80, 40, 102, 75, 120), t.curveTo(110, 102, 130, 80, 130, 62.5), t.curveTo(130, 62.5, 130, 25, 100, 25), t.curveTo(85, 25, 75, 37, 75, 40), t
    }

    function createTrapezium() {
        var t = new Path;
        return t.moveTo(20, 0), t.lineTo(80, 0), t.lineTo(100, 100), t.lineTo(0, 100), t.closePath(), t
    }

    function createRhombus() {
        var t = new Path;
        return t.moveTo(100, 0), t.lineTo(100, 80), t.lineTo(0, 100), t.lineTo(0, 20), t.closePath(), t
    }

    function createParallelogram() {
        var t = new Path;
        return t.moveTo(20, 0), t.lineTo(100, 0), t.lineTo(80, 100), t.lineTo(0, 100), t.closePath(), t
    }

    function createArrow1() {
        var t = new Path;
        return t.moveTo(43, 23), t.lineTo(28, 10), t.lineTo(37, 2), t.lineTo(63, 31), t.lineTo(37, 59), t.lineTo(28, 52), t.lineTo(44, 38), t.lineTo(3, 38), t.lineTo(3, 23), t.closePath(), t
    }

    function createArrow2() {
        var t = new Path;
        return t.moveTo(1, 8), t.lineTo(7, 2), t.lineTo(32, 26), t.lineTo(7, 50), t.lineTo(1, 44), t.lineTo(18, 26), t.closePath(), t.moveTo(27, 8), t.lineTo(33, 2), t.lineTo(57, 26), t.lineTo(33, 50), t.lineTo(27, 44), t.lineTo(44, 26), t.closePath(), t
    }

    function createArrow3() {
        var t = new Path;
        return t.moveTo(0, 15), t.lineTo(23, 15), t.lineTo(23, 1), t.lineTo(47, 23), t.lineTo(23, 43), t.lineTo(23, 29), t.lineTo(0, 29), t.closePath(), t
    }

    function createArrow4() {
        var t = new Path;
        return t.moveTo(0, 21), t.lineTo(30, 21), t.lineTo(19, 0), t.lineTo(25, 0), t.lineTo(47, 25), t.lineTo(25, 48), t.lineTo(19, 48), t.lineTo(30, 28), t.lineTo(0, 28), t.closePath(), t
    }

    function createArrow5() {
        var t = new Path;
        return t.moveTo(0, 0), t.lineTo(34, 24), t.lineTo(0, 48), t.lineTo(14, 24), t.closePath(), t
    }

    function createArrow6() {
        var t = new Path;
        return t.moveTo(20, 0), t.lineTo(34, 14), t.lineTo(20, 28), t.lineTo(22, 18), t.lineTo(1, 25), t.lineTo(10, 14), t.lineTo(1, 3), t.lineTo(22, 10), t.closePath(), t
    }

    function createArrow7() {
        var t = new Path;
        return t.moveTo(4, 18), t.lineTo(45, 18), t.lineTo(37, 4), t.lineTo(83, 25), t.lineTo(37, 46), t.lineTo(45, 32), t.lineTo(4, 32), t.closePath(), t
    }

    function createArrow8() {
        var t = new Path;
        return t.moveTo(17, 11), t.lineTo(27, 11), t.lineTo(42, 27), t.lineTo(27, 42), t.lineTo(17, 42), t.lineTo(28, 30), t.lineTo(4, 30), t.lineTo(4, 23), t.lineTo(28, 23), t.closePath(), t
    }

    function initShapes() {
        Shapes.register(Consts.SHAPE_CIRCLE, addEllipse(new Path, 0, 0, 100, 100)), Shapes.register(Consts.SHAPE_RECT, addRect(new Path, 0, 0, 100, 100)), Shapes.register(Consts.SHAPE_ROUNDRECT, addRect(new Path, 0, 0, 100, 100, 20, 20)), Shapes.register(Consts.SHAPE_STAR, addStar(new Path, 0, 0, 100, 100)), Shapes.register(Consts.SHAPE_TRIANGLE, addDelta(new Path, 0, 0, 100, 100)), Shapes.register(Consts.SHAPE_PENTAGON, createRegularPolygon(5)), Shapes.register(Consts.SHAPE_HEXAGON, createRegularPolygon(6)), Shapes.register(Consts.SHAPE_DIAMOND, addDiamond(new Path, 0, 0, 100, 100)), Shapes.register(Consts.SHAPE_HEART, createHeart()), Shapes.register(Consts.SHAPE_TRAPEZIUM, createTrapezium()), Shapes.register(Consts.SHAPE_RHOMBUS, createRhombus()), Shapes.register(Consts.SHAPE_PARALLELOGRAM, createParallelogram());
        var t = new Path;
        t.moveTo(20, 0), t.lineTo(40, 0), t.lineTo(40, 20), t.lineTo(60, 20), t.lineTo(60, 40), t.lineTo(40, 40), t.lineTo(40, 60), t.lineTo(20, 60), t.lineTo(20, 40), t.lineTo(0, 40), t.lineTo(0, 20), t.lineTo(20, 20), t.closePath(), Shapes.register(Consts.SHAPE_CROSS, t), Shapes.register(Consts.SHAPE_ARROW_STANDARD, addStandardArrow(new Path, 0, 0, 100, 100)), Shapes.register(Consts.SHAPE_ARROW_1, createArrow1()), Shapes.register(Consts.SHAPE_ARROW_2, createArrow2()), Shapes.register(Consts.SHAPE_ARROW_3, createArrow3()), Shapes.register(Consts.SHAPE_ARROW_4, createArrow4()), Shapes.register(Consts.SHAPE_ARROW_5, createArrow5()), Shapes.register(Consts.SHAPE_ARROW_6, createArrow6()), Shapes.register(Consts.SHAPE_ARROW_7, createArrow7()), Shapes.register(Consts.SHAPE_ARROW_8, createArrow8()), Shapes.register(Consts.SHAPE_ARROW_OPEN, addStandardArrow(new Path, 0, 0, 100, 100, !0))
    }

    function Bus() {
        _39(this, Bus, arguments), this.busLayout = !0
    }

    function GraphModel() {
        _39(this, GraphModel), this._$u = new Dispatcher
    }

    function checkGroupAgentEdges() {
        if (this._gs === !0) {
            var t = this._8c, e = this._9h;
            if (t)for (t = t._jz; t.length;) {
                var i = t[0];
                _2z(this, i, i.toAgent)
            }
            if (e)for (e = e._jz; e.length;) {
                var i = e[0];
                _3p(this, i, i.fromAgent)
            }
            return void this.forEachChild(function (t) {
                t._i9() && checkGroupAgentEdges.call(t)
            })
        }
        var n = getAllChildrenEdgeInfos(this);
        n.forEach(function (t) {
            t = t.edge;
            var e = t.$from, i = t.$to, n = e.isDescendantOf(this), s = i.isDescendantOf(this);
            n && !s ? (_5x(this, t), _54(this, t)) : s && !n && (_6o(this, t), _54(t.fromAgent, t, this))
        }, this)
    }

    function Text() {
        _39(this, Text, arguments), this.$image = null
    }

    function createUIPropertyFunction(t, e, i, n) {
        return t[e] = i, n ? {
            get: function () {
                return this[e]
            }, set: function (t) {
                if (t !== this[e]) {
                    this[e] = t, !this._mwq, this._1n = !0;
                    for (var i = n.length; --i >= 0;)this[n[i]] = !0
                }
            }
        } : {
            get: function () {
                return this[e]
            }, set: function (t) {
                t !== this[e] && (this[e] = t)
            }
        }
    }

    function defineUIProperties(t, e) {
        var i = {}, n = {};
        for (var s in e) {
            var o = e[s];
            o.validateFlags && o.validateFlags.forEach(function (t, e, i) {
                i[e] = "$invalidate" + t, n[t] = !0
            }), i[s] = createUIPropertyFunction(t, "$" + s, o.value, o.validateFlags)
        }
        for (var r in n)t["$invalidate" + r] = !0;
        Object.defineProperties(t, i)
    }

    function doBinding(t, e, i, n) {
        if (Array.isArray(e))for (var s = e.length; --s >= 0;)doBinding(t, e[s], i, n); else {
            var o = e.target;
            if (o) {
                if (o instanceof BaseUI || (o = t[o]), !o)return
            } else o = t;
            if (n || (n = t.getProperty(e.property, i)), e.bindingProperty && (o[e.bindingProperty] = n), e.callback) {
                var r = e.callback;
                r instanceof Function || (r = t[r]), r instanceof Function && r.call(t, n, o)
            }
        }
    }

    function UIBindingMap() {
        PROPERTY_TYPES.forEach(function (t) {
            this[t] = {}
        }, this)
    }

    function setElementProperty(t, e, i, n) {
        return n == Consts.PROPERTY_TYPE_ACCESSOR ? void(t[i] = e) : n == Consts.PROPERTY_TYPE_CLIENT ? void t.set(i, e) : n == Consts.PROPERTY_TYPE_STYLE ? void t.setStyle(i, e) : !1
    }

    function EdgeUI() {
        _39(this, EdgeUI, arguments)
    }

    function NodeUI() {
        _39(this, NodeUI, arguments)
    }

    function BaseCanvas(t) {
        this._6y(), this._dy(t), this._fs = [], this._mwo = new ClipSupport, this._k2 = new CanvasMatrix(this), this._md = new HashList;
        var e = this;
        this._md._fm = function (t, i, n) {
            i.destroy();
            var s = i.uiBounds;
            return i._i5 && s && e._mwo._lr(i.$x + i.uiBounds.x, i.$y + i.uiBounds.y, i.uiBounds.width, i.uiBounds.height), HashList.prototype._fm.call(this, t, i, n)
        }, this._md.clear = function () {
            return this.forEach(function (t) {
                t.destroy()
            }), HashList.prototype.clear.call(this)
        }, this._mzx = [], this._8b = {}, this._8g = new Rect, this._8p = [], this._mzz()
    }

    function createCanvas(t) {
        var e = _9r(!0);
        return addLineDashSupport(e.g), e.onselectstart = function () {
            return !1
        }, t.appendChild(e), e.className = CANVAS_CLASS_NAME, e
    }

    function CanvasMatrix(t) {
        this._dh = t, this._k2 = new Matrix2D, this._k2.ratio = t.ratio, this._76 = new Rect
    }

    function calculateOrthogonalAndFlexionalEdgePoints(t, e, i, n) {
        var s = isHorizontal(t, e, i, n), o = [];
        if (isFlexionalTypeEdge(t))flexional(s, e, i, o, n.getStyle(Styles.EDGE_EXTEND)); else {
            orthogonal(t, e, i, o, s, n);
            var r = isSplitByPercent(t, n), a = r ? calculateSplitValueByPercent(t, s, e, i, n.getStyle(Styles.EDGE_SPLIT_PERCENT)) : n.getStyle(Styles.EDGE_SPLIT_VALUE);
            0 == a && (s = !s)
        }
        return o
    }

    function isSamePoint(t, e) {
        return t.x == e.x && t.y == e.y
    }

    function isHorizontal(t, e, i) {
        if (null != t) {
            if (t == Consts.EDGE_TYPE_ELBOW_HORIZONTAL || t == Consts.EDGE_TYPE_ORTHOGONAL_HORIZONTAL || t == Consts.EDGE_TYPE_HORIZONTAL_VERTICAL || t == Consts.EDGE_TYPE_EXTEND_LEFT || t == Consts.EDGE_TYPE_EXTEND_RIGHT)return !0;
            if (t == Consts.EDGE_TYPE_ELBOW_VERTICAL || t == Consts.EDGE_TYPE_ORTHOGONAL_VERTICAL || t == Consts.EDGE_TYPE_VERTICAL_HORIZONTAL || t == Consts.EDGE_TYPE_EXTEND_TOP || t == Consts.EDGE_TYPE_EXTEND_BOTTOM)return !1
        }
        var n = calculateXGap(e, i), s = calculateYGap(e, i);
        return n >= s
    }

    function flexional(t, e, i, n, s) {
        t ? flexionalHorizontal(e, i, n, s) : flexionalVertical(e, i, n, s)
    }

    function isSplitByPercent(t, e) {
        return e.getStyle(Styles.EDGE_SPLIT_BY_PERCENT)
    }

    function isExtendTypeEdge(t) {
        return null != t && (t == Consts.EDGE_TYPE_EXTEND_TOP || t == Consts.EDGE_TYPE_EXTEND_LEFT || t == Consts.EDGE_TYPE_EXTEND_BOTTOM || t == Consts.EDGE_TYPE_EXTEND_RIGHT)
    }

    function isFlexionalTypeEdge(t) {
        return t && (t == Consts.EDGE_TYPE_ELBOW || t == Consts.EDGE_TYPE_ELBOW_HORIZONTAL || t == Consts.EDGE_TYPE_ELBOW_VERTICAL)
    }

    function calculateControlPoint(t, e, i, n, s) {
        if (t == Consts.EDGE_TYPE_HORIZONTAL_VERTICAL || t == Consts.EDGE_TYPE_VERTICAL_HORIZONTAL)return new Point(n.x + n.width / 2, n.y + n.height / 2);
        var o;
        if (isExtendTypeEdge(t)) {
            var r = Math.min(i.y, n.y), a = Math.min(i.x, n.x), h = Math.max(i.bottom, n.bottom), l = Math.max(i.right, n.right);
            if (o = s.getStyle(Styles.EDGE_EXTEND), t == Consts.EDGE_TYPE_EXTEND_TOP)return new Point((a + l) / 2, r - o);
            if (t == Consts.EDGE_TYPE_EXTEND_LEFT)return new Point(a - o, (r + h) / 2);
            if (t == Consts.EDGE_TYPE_EXTEND_BOTTOM)return new Point((a + l) / 2, h + o);
            if (t == Consts.EDGE_TYPE_EXTEND_RIGHT)return new Point(l + o, (r + h) / 2)
        }
        var _ = isSplitByPercent(t, s);
        if (o = _ ? calculateSplitValueByPercent(t, e, i, n, s.getStyle(Styles.EDGE_SPLIT_PERCENT)) : s.getStyle(Styles.EDGE_SPLIT_VALUE), o == Number.NEGATIVE_INFINITY || o == Number.POSITIVE_INFINITY)return new Point(n.x + n.width / 2, n.y + n.height / 2);
        if (0 == o)return new Point(i.x + i.width / 2, i.y + i.height / 2);
        if (e) {
            var u = i.x + i.right < n.x + n.right;
            return new Point(calculateSplitLocation(u, o, i.x, i.width), i.y + i.height / 2)
        }
        var d = i.y + i.bottom < n.y + n.bottom;
        return new Point(i.x + i.width / 2, calculateSplitLocation(d, o, i.y, i.height))
    }

    function calculateGap(t, e, i, n) {
        var s = Math.max(e, n) - Math.min(t, i);
        return s - (e - t + n - i)
    }

    function calculateXGap(t, e) {
        var i = Math.max(t.x + t.width, e.x + e.width) - Math.min(t.x, e.x);
        return i - t.width - e.width
    }

    function calculateYGap(t, e) {
        var i = Math.max(t.y + t.height, e.y + e.height) - Math.min(t.y, e.y);
        return i - t.height - e.height
    }

    function calculateSplitValueByPercent(t, e, i, n, s) {
        var o = calculateSplitGapByPercent(s, e, i, n, null);
        return o * s
    }

    function calculateSplitGapByPercent(t, e, i, n) {
        return e ? _$n(t, i.x, i.right, n.x, n.right) : _$n(t, i.y, i.bottom, n.y, n.bottom)
    }

    function _$n(t, e, i, n, s) {
        var o = calculateGap(e, i, n, s), r = n + s > e + i;
        if (o > 0) {
            if (1 == t)return o + (s - n) / 2;
            if (t >= 0 && 1 > t)return o;
            if (0 > t)return r ? n - e : i - s
        }
        return Math.abs(r && t > 0 || !r && 0 > t ? i - s : e - n)
    }

    function calculateSplitPercentByControlPoint(t, e, i, n) {
        return e ? calculateSplitPercent(t.x, i.x, i.right, n.x, n.right) : calculateSplitPercent(t.y, i.y, i.bottom, n.y, n.bottom)
    }

    function calculateSplitPercent(t, e, i, n, s) {
        if (t >= e && i >= t)return 0;
        var o = calculateGap(e, i, n, s);
        if (o > 0 && t >= n && s >= t)return 1;
        var r = n + s > e + i;
        if (o > 0) {
            if (t > Math.min(i, s) && t < Math.max(e, n))return Math.abs(t - (r ? i : e)) / o;
            if (r) {
                if (e > t)return (t - e) / (n - e)
            } else if (t > i)return (i - t) / (i - s)
        }
        return t > i ? (r ? t - i : i - t) / Math.abs(i - s) : (r ? t - e : e - t) / Math.abs(e - n)
    }

    function calculateSplitLocation(t, e, i, n) {
        return t == e > 0 ? i + n + Math.abs(e) : i - Math.abs(e)
    }

    function calculateAngle(t, e) {
        if (0 != t && 0 != e)return Math.atan2(t, e);
        if (0 == t) {
            if (e > 0)return 0;
            if (0 > e)return Math.PI
        }
        return t > 0 ? Math.PI / 2 : -Math.PI / 2
    }

    function drawCorner(t, e) {
        var i = t.length;
        if (!(3 > i)) {
            var n = e.getStyle(Styles.EDGE_CORNER);
            if (n != Consts.EDGE_CORNER_NONE) {
                var s = e.getStyle(Styles.EDGE_CORNER_RADIUS), o = 0, r = 0;
                s && (_hc(s) ? o = r = s : (o = s.x || 0, r = s.y || 0));
                for (var a, h, l, _, u = t[0], d = t[1], c = null, f = 2; i > f; f++) {
                    var E = t[f], g = d.x - u.x, p = d.y - u.y, v = E.x - d.x, T = E.y - d.y, m = !g || g > -DISTANCE_TOLERANCE && DISTANCE_TOLERANCE > g, y = !p || p > -DISTANCE_TOLERANCE && DISTANCE_TOLERANCE > p, S = !v || v > -DISTANCE_TOLERANCE && DISTANCE_TOLERANCE > v, I = !T || T > -DISTANCE_TOLERANCE && DISTANCE_TOLERANCE > T, P = y;
                    (m && I || y && S) && (P ? (a = Math.min(2 == f ? Math.abs(g) : Math.abs(g) / 2, o), h = Math.min(f == i - 1 ? Math.abs(T) : Math.abs(T) / 2, r), l = new Point(d.x - (g > 0 ? a : -a), d.y), _ = new Point(d.x, d.y + (T > 0 ? h : -h))) : (a = Math.min(f == i - 1 ? Math.abs(v) : Math.abs(v) / 2, o), h = Math.min(2 == f ? Math.abs(p) : Math.abs(p) / 2, r), l = new Point(d.x, d.y - (p > 0 ? h : -h)), _ = new Point(d.x + (v > 0 ? a : -a), d.y)), _kj(t, d), f--, i--, (l.x != u.x || l.y != u.y) && (_mh(t, l, f), f++, i++), n == Consts.EDGE_CORNER_BEVEL ? (_mh(t, _, f), f++, i++) : n == Consts.EDGE_CORNER_ROUND && (_mh(t, [d, _], f), f++, i++)), u = d, d = E
                }
                null != c && _.x == d.x && _.y == d.y && _kj(t, d)
            }
        }
    }

    function orthogonal(t, e, i, n, s, o) {
        var r = o.getStyle(Styles.EDGE_CONTROL_POINT), a = null == r;
        if (null != r) {
            var h = (new Rect).union(e).union(i);
            h.intersects(r) || (s = calculateIsHorizontalByControlPoint(r.x, r.y, h.y, h.x, h.bottom, h.right))
        } else r = calculateControlPoint(t, s, e, i, o);
        s ? sideToSide(e, i, r, n, a) : topToBottom(e, i, r, n, a)
    }

    function calculateIsHorizontalByControlPoint(t, e, i, n, s, o) {
        return i > e && i - e > n - t && i - e > t - o || e > s && e - s > n - t && e - s > t - o ? !1 : !0
    }

    function contains(t, e, i) {
        return e >= t.x && e <= t.right && i >= t.y && i <= t.bottom
    }

    function topToBottom(t, e, i, n, s) {
        var o = Math.max(t.y, e.y), r = Math.min(t.y + t.height, e.y + e.height), a = null != i ? i.y : r + (o - r) / 2, h = t.x + t.width / 2, l = e.x + e.width / 2;
        if (0 == s && null != i && (i.x >= t.x && i.x <= t.x + t.width && (h = i.x), i.x >= e.x && i.x <= e.x + e.width && (l = i.x)), contains(e, h, a) || contains(t, h, a) || n.push(new Point(h, a)), contains(e, l, a) || contains(t, l, a) || n.push(new Point(l, a)), 0 == n.length)if (null != i)contains(e, i.x, a) || contains(t, i.x, a) || n.push(new Point(i.x, a)); else {
            var _ = Math.max(t.x, e.x), u = Math.min(t.x + t.width, e.x + e.width);
            n.push(new Point(_ + (u - _) / 2, a))
        }
    }

    function sideToSide(t, e, i, n, s) {
        var o = Math.max(t.x, e.x), r = Math.min(t.x + t.width, e.x + e.width), a = null != i ? i.x : r + (o - r) / 2, h = t.y + t.height / 2, l = e.y + e.height / 2;
        if (0 == s && null != i && (i.y >= t.y && i.y <= t.y + t.height && (h = i.y), i.y >= e.y && i.y <= e.y + e.height && (l = i.y)), contains(e, a, h) || contains(t, a, h) || n.push(new Point(a, h)), contains(e, a, l) || contains(t, a, l) || n.push(new Point(a, l)), 0 == n.length)if (null != i)contains(e, a, i.y) || contains(t, a, i.y) || n.push(new Point(a, i.y)); else {
            var _ = Math.max(t.y, e.y), u = Math.min(t.y + t.height, e.y + e.height);
            n.push(new Point(a, _ + (u - _) / 2))
        }
    }

    function flexionalHorizontal(t, e, i, n) {
        var s = e.x + e.width < t.x, o = t.x + t.width < e.x, r = s ? t.x : t.x + t.width, a = t.y + t.height / 2, h = o ? e.x : e.x + e.width, l = e.y + e.height / 2, _ = n, u = s ? -_ : _, d = new Point(r + u, a);
        u = o ? -_ : _;
        var c = new Point(h + u, l);
        if (s == o) {
            var f = s ? Math.min(r, h) - n : Math.max(r, h) + n;
            i.push(new Point(f, a)), i.push(new Point(f, l))
        } else if (d.x < c.x == s) {
            var E = a + (l - a) / 2;
            i.push(d), i.push(new Point(d.x, E)), i.push(new Point(c.x, E)), i.push(c)
        } else i.push(d), i.push(c)
    }

    function flexionalVertical(t, e, i, n) {
        var s = e.y + e.height < t.y, o = t.y + t.height < e.y, r = t.x + t.width / 2, a = s ? t.y : t.y + t.height, h = e.x + e.width / 2, l = o ? e.y : e.y + e.height, _ = n, u = s ? -_ : _, d = new Point(r, a + u);
        u = o ? -_ : _;
        var c = new Point(h, l + u);
        if (s == o) {
            var f = s ? Math.min(a, l) - n : Math.max(a, l) + n;
            i.push(new Point(r, f)), i.push(new Point(h, f))
        } else if (d.y < c.y == s) {
            var E = r + (h - r) / 2;
            i.push(d), i.push(new Point(E, d.y)), i.push(new Point(E, c.y)), i.push(c)
        } else i.push(d), i.push(c)
    }

    function rectanglePerimeter(t, e, i, n) {
        var s, o;
        s = i.x > t.x && i.x < t.right ? i.x : t.x + t.width / 2, o = i.y > t.y && i.y < t.bottom ? i.y : t.y + t.height / 2;
        var r = i.x - s, a = i.y - o, h = Math.atan2(a, r);
        if (n) {
            var l = Math.cos(h), _ = Math.sin(h);
            return getIntersectPointOnNodeUI3(n, t, i, {x: s, y: o}, l, _)
        }
        var u = new Point(0, 0), d = Math.PI, c = HALF_PI, f = c - h, E = Math.atan2(t.height, t.width);
        return -d + E > h || h > d - E ? (u.x = t.x, u.y = o - t.width * Math.tan(h) / 2) : -E > h ? (u.y = t.y, u.x = s - t.height * Math.tan(f) / 2) : E > h ? (u.x = t.x + t.width, u.y = o + t.width * Math.tan(h) / 2) : (u.y = t.y + t.height, u.x = s + t.height * Math.tan(f) / 2), i.x >= t.x && i.x <= t.x + t.width ? u.x = i.x : i.y >= t.y && i.y <= t.y + t.height && (u.y = i.y), i.x < t.x ? u.x = t.x : i.x > t.x + t.width && (u.x = t.x + t.width), i.y < t.y ? u.y = t.y : i.y > t.y + t.height && (u.y = t.y + t.height), u
    }

    function isSplitTypeEdge(t) {
        return null != t && (t == Consts.EDGE_TYPE_ORTHOGONAL || t == Consts.EDGE_TYPE_ORTHOGONAL_HORIZONTAL || t == Consts.EDGE_TYPE_ORTHOGONAL_VERTICAL)
    }

    function isOrthogonalOrFlexionalEdge(t, e) {
        return t.$data.hasPathSegments() ? !1 : t.$data.isLooped() ? !1 : isOrthogonalOrFlexionalType(e)
    }

    function isOrthogonalEdge(t) {
        return t.$data.hasPathSegments() ? !1 : t.$data.isLooped() ? !1 : isOrthogonalType(t.$data.edgeType)
    }

    function isOrthogonalOrFlexionalType(t) {
        return t == Consts.EDGE_TYPE_ORTHOGONAL || t == Consts.EDGE_TYPE_ORTHOGONAL_HORIZONTAL || t == Consts.EDGE_TYPE_HORIZONTAL_VERTICAL || t == Consts.EDGE_TYPE_ORTHOGONAL_VERTICAL || t == Consts.EDGE_TYPE_VERTICAL_HORIZONTAL || t == Consts.EDGE_TYPE_EXTEND_TOP || t == Consts.EDGE_TYPE_EXTEND_LEFT || t == Consts.EDGE_TYPE_EXTEND_BOTTOM || t == Consts.EDGE_TYPE_EXTEND_RIGHT || t == Consts.EDGE_TYPE_ELBOW || t == Consts.EDGE_TYPE_ELBOW_HORIZONTAL || t == Consts.EDGE_TYPE_ELBOW_VERTICAL
    }

    function isOrthogonalType(t) {
        return t == Consts.EDGE_TYPE_ORTHOGONAL || t == Consts.EDGE_TYPE_ORTHOGONAL_HORIZONTAL || t == Consts.EDGE_TYPE_HORIZONTAL_VERTICAL || t == Consts.EDGE_TYPE_ORTHOGONAL_VERTICAL || t == Consts.EDGE_TYPE_VERTICAL_HORIZONTAL || t == Consts.EDGE_TYPE_EXTEND_TOP || t == Consts.EDGE_TYPE_EXTEND_LEFT || t == Consts.EDGE_TYPE_EXTEND_BOTTOM || t == Consts.EDGE_TYPE_EXTEND_RIGHT
    }

    function createSimpleArrow(t, e, i) {
        var n = i.x - e.x, s = i.y - e.y, o = Math.sqrt(n * n + s * s), r = Math.atan2(s, n), a = {
            x: o - 8,
            y: 4
        }, h = {x: o - 8, y: -4};
        transformPoint(a, r), transformPoint(h, r), a.x += e.x, a.y += e.y, h.x += e.x, h.y += e.y, t.moveTo(a.x, a.y), t.lineTo(i.x, i.y), t.lineTo(h.x, h.y)
    }

    function createArrow(t, e) {
        var i, n;
        e && e.width && e.height ? (i = e.width, n = e.height) : i = n = isNaN(e) ? Defaults.ARROW_SIZE : e;
        var s = Shapes.getShape(t, -i, -n / 2, i, n);
        return s || (s = new Path, s.moveTo(-i, -n / 2), s.lineTo(0, 0), s.lineTo(-i, n / 2)), s
    }

    function offsetEdge() {
    }

    function transformPoint(t, e) {
        var i = Math.sin(e), n = Math.cos(e), s = t.x, o = t.y;
        return t.x = s * n - o * i, t.y = s * i + o * n, t
    }

    function calculatePointInfoOnStraightLine(t, e, i, n, s, o) {
        var r = Math.atan2(n - e, i - t), a = new Point(s, o);
        return a.rotate = r, transformPoint(a, r), a.x += t, a.y += e, a
    }

    function getIntersectPointOnCircle(t, e, i, n, s) {
        var o = Math.asin(s / i);
        return new Point(e.x + Math.cos(n - o) * i, e.y + Math.sin(n - o) * i)
    }

    function getIntersectPoint2(t, e, i, n, s) {
        for (var o = e.x, r = e.y; s-- > 0;)if (o += i, r += n, o < t.x || o > t.x + t.width || r < t.y || r > t.y + t.height)return {
            x: o,
            y: r
        };
        return {x: o, y: r}
    }

    function getIntersectPoint(t, e, i) {
        var n = Math.atan2(i.y - e.y, i.x - e.x), s = e.distanceTo(i), o = Math.cos(n), r = Math.sin(n), a = Math.round(s);
        return getIntersectPoint2(t, e, o, r, a)
    }

    function calculateEdgeBundle(t, e, i, n, s) {
        e = getIntersectionPointOnRect(n, e.x, e.y, i.x, i.y), i = getIntersectionPointOnRect(s, i.x, i.y, e.x, e.y);
        var o = Math.PI / 2 + Math.atan2(i.y - e.y, i.x - e.x), r = t * Math.cos(o), a = t * Math.sin(o), h = i.x - e.x, l = i.y - e.y, _ = e.x + .25 * h, u = e.y + .25 * l, d = e.x + .75 * h, c = e.y + .75 * l;
        return [new PathSegment(CURVE_TO, [_ + r, u + a, d + r, c + a])]
    }

    function appendTerminalPoints(t, e, i) {
        if (_mh(t, new PathSegment(MOVE_TO, [e.x, e.y]), 0), i) {
            if (t.length > 1) {
                var n = t[t.length - 1];
                if (QUAD_TO == n.type && (n.invalidTerminal || void 0 === n.points[2] || null === n.points[2]))return n.points[2] = i.x, n.points[3] = i.y, void(n.invalidTerminal = !0);
                if (CURVE_TO == n.type && (n.invalidTerminal || void 0 === n.points[4] || null === n.points[4]))return n.points[4] = i.x, n.points[5] = i.y, void(n.invalidTerminal = !0)
            }
            t.push(new PathSegment(LINE_TO, [i.x, i.y]))
        }
    }

    function calculateEdgePath(t, e, i, n, s, o, r, a) {
        return e.hasPathSegments() ? void(i._fg = e._9y.toDatas()) : n == s ? void t.drawLoopedEdge(i, n, o, r) : void t.drawEdge(i, n, s, o, r, a)
    }

    function drawEdge(t, e, i, n, s) {
        var o = n == s, r = t.graph.getUI(n), a = o ? r : t.graph.getUI(s);
        if (r && a) {
            var h = e.edgeType, l = r.bodyBounds.clone(), _ = o ? l : a.bodyBounds.clone(), u = e.hasPathSegments();
            if (!o && !h && !u) {
                var d = n.busLayout, c = s.busLayout;
                if (d != c) {
                    var f, E, g, p, v = e.angle;
                    d ? (f = r, E = l, g = a, p = _) : (f = a, E = _, g = r, p = l);
                    var T = caculateIntersectionOnBus(E, f, d, g, p, v);
                    if (T && 2 == T.length) {
                        var m = T[0], y = T[1];
                        return i.moveTo(m.x, m.y), y.x == m.x && y.y == m.y && (y.y += .01), i.lineTo(y.x, y.y), void(i._6f = !0)
                    }
                }
            }
            calculateEdgePath(t, e, i, r, a, h, l, _), (!o || u) && offsetTerminalPointToEdge(t, e, i, r, a, h, l, _), i._6f = !0
        }
    }

    function offsetTerminalPointToEdge(t, e, i, n, s, o, r, a) {
        var h = r.center, l = a.center, _ = t.fromAtEdge, u = t.toAtEdge;
        if (!_ && !u)return void appendTerminalPoints(i._fg, h, l);
        var d = i._fg;
        if (d.length) {
            if (_) {
                var c = d[0], f = c.firstPoint;
                r.contains(f.x, f.y) && (c.type == CURVE_TO ? (h = f, f = {
                    x: c.points[2],
                    y: c.points[3]
                }, c.points = c.points.slice(2), c.type = QUAD_TO) : c.type == QUAD_TO && (h = f, f = {
                    x: c.points[0],
                    y: c.points[1]
                }, c.points = c.points.slice(2), c.type = LINE_TO)), getIntersectPointOnNodeUI3(n, r, f, h, void 0, void 0)
            }
            if (u) {
                var E, g = d[d.length - 1], p = g.lastPoint, v = g.points.length, T = void 0 === p.x || void 0 === p.y;
                v >= 4 && (T || a.contains(p.x, p.y)) && (T || (l = p), E = !0, p = {
                    x: g.points[v - 4],
                    y: g.points[v - 3]
                }, a.contains(p.x, p.y) && (l = p, v >= 6 ? (p = {
                    x: g.points[v - 6],
                    y: g.points[v - 5]
                }, g.points = g.points.slice(0, 4), g.type = QUAD_TO) : 1 == d.length ? (p = {
                    x: h.x,
                    y: h.y
                }, g.points = g.points.slice(0, 2), g.type = LINE_TO) : (g = d[d.length - 2], p = g.lastPoint))), getIntersectPointOnNodeUI3(s, a, p, l, void 0, void 0), E && (v = g.points.length, g.points[v - 2] = l.x, g.points[v - 1] = l.y, l = null)
            }
        } else {
            var m = Math.atan2(l.y - h.y, l.x - h.x), y = Math.cos(m), S = Math.sin(m);
            _ && getIntersectPointOnNodeUI3(n, r, l, h, y, S), u && getIntersectPointOnNodeUI3(s, a, h, l, -y, -S)
        }
        appendTerminalPoints(i._fg, h, l)
    }

    function getIntersectPointOnNodeUI3(t, e, i, n, s, o) {
        if (void 0 === s) {
            var r = Math.atan2(i.y - n.y, i.x - n.x);
            s = Math.cos(r), o = Math.sin(r)
        }
        for (i = {x: i.x, y: i.y}, e.contains(i.x, i.y) || (i = getIntersectionPointOnRect(e, n.x, n.y, i.x, i.y)); ;) {
            if (!e.contains(i.x, i.y))return n;
            if (t.hitTest(i.x - s, i.y - o, Defaults.LOOKING_EDGE_ENDPOINT_TOLERANCE)) {
                n.x = i.x - s / 2, n.y = i.y - o / 2;
                break
            }
            i.x -= s, i.y -= o
        }
        return n
    }

    function calculateEdgeSegments(t, e, i, n, s, o, r, a) {
        if (e.hasPathSegments())return e._9y;
        var h = e.edgeType;
        if (isOrthogonalOrFlexionalType(h)) {
            var l = calculateOrthogonalAndFlexionalEdgePoints(h, i, n, t, s, o);
            if (!l || !l.length)return null;
            _mh(l, r, 0), l.push(a), h != Consts.EDGE_TYPE_ELBOW && drawCorner(l, t);
            for (var _ = [], u = l.length, d = 1; u - 1 > d; d++) {
                var c = l[d];
                _.push(_hy(c) ? new PathSegment(QUAD_TO, [c[0].x, c[0].y, c[1].x, c[1].y]) : new PathSegment(LINE_TO, [c.x, c.y]))
            }
            return _
        }
        if (e.$bundleEnabled) {
            var f = t._2h();
            if (!f)return;
            return calculateEdgeBundle(f, r, a, i, n)
        }
    }

    function drawLoopedEdge(t, e, i) {
        var n = t.getStyle(Styles.EDGE_LOOPED_EXTAND), s = t._2h(), o = n + .2 * s, r = e.x + e.width - o, a = e.y, h = e.x + e.width, l = e.y + o;
        n += s;
        var _ = .707, u = -.707, d = e.x + e.width, c = e.y, f = d + _ * n, E = c + u * n, g = {x: r, y: a}, p = {
            x: f,
            y: E
        }, v = {
            x: h,
            y: l
        }, T = g.x, m = p.x, y = v.x, S = g.y, I = p.y, P = v.y, O = ((P - S) * (I * I - S * S + m * m - T * T) + (I - S) * (S * S - P * P + T * T - y * y)) / (2 * (m - T) * (P - S) - 2 * (y - T) * (I - S)), R = ((y - T) * (m * m - T * T + I * I - S * S) + (m - T) * (T * T - y * y + S * S - P * P)) / (2 * (I - S) * (y - T) - 2 * (P - S) * (m - T)), o = Math.sqrt((T - O) * (T - O) + (S - R) * (S - R)), A = Math.atan2(g.y - R, g.x - O), L = Math.atan2(v.y - R, v.x - O), C = L - A;
        return 0 > C && (C += 2 * Math.PI), PathDrawArc(O, R, A, C, o, o, !0, i)
    }

    function PathDrawArc(t, e, i, n, s, o, r, a) {
        var h, l, _, u, d, c, f, E, g, p, v;
        if (Math.abs(n) > 2 * Math.PI && (n = 2 * Math.PI), d = Math.ceil(Math.abs(n) / (Math.PI / 4)), h = n / d, l = h, _ = i, d > 0) {
            c = t + Math.cos(_) * s, f = e + Math.sin(_) * o, moveTo ? a.moveTo(c, f) : a.lineTo(c, f);
            for (var T = 0; d > T; T++)_ += l, u = _ - l / 2, E = t + Math.cos(_) * s, g = e + Math.sin(_) * o, p = t + Math.cos(u) * (s / Math.cos(l / 2)), v = e + Math.sin(u) * (o / Math.cos(l / 2)), a.quadTo(p, v, E, g)
        }
    }

    function caculateIntersectionOnBus(t, e, i, n, s, o) {
        var r = s.cx, a = s.cy, h = r < t.x, l = r > t.right, _ = a < t.y, u = a > t.bottom, d = t.cx, c = t.cy, f = h || l, E = _ || u, g = void 0 === o || null === o;
        g && (o = Math.atan2(a - c, r - d), f || E || (o += Math.PI));
        var p = Math.cos(o), v = Math.sin(o), T = caculateIntersectPointOn(e, t, {x: r, y: a}, -p, -v);
        T || (o = Math.atan2(a - c, r - d), f || E || (o += Math.PI), p = Math.cos(o), v = Math.sin(o), T = caculateIntersectPointOn(e, t, {
                x: r,
                y: a
            }, -p, -v) || {x: d, y: c});
        var m = caculateIntersectPointOn(n, s, {x: T.x, y: T.y}, -T.perX || p, -T.perY || v, !1) || {x: r, y: a};
        return i ? [T, m] : [m, T]
    }

    function getIntersectionPointOnRectByLine(t, e, i, n, s, o) {
        var r = e < t.x, a = e > t.right, h = i < t.y, l = i > t.bottom;
        if (r && n > 0) {
            var _ = t.x - e, u = i + _ * s / n;
            if (u >= t.y && u <= t.bottom)return {x: t.x, y: u, perX: n, perY: s}
        }
        if (a && 0 > n) {
            var _ = t.right - e, u = i + _ * s / n;
            if (u >= t.y && u <= t.bottom)return {x: t.right, y: u, perX: n, perY: s}
        }
        if (h && s > 0) {
            var d = t.y - i, c = e + d * n / s;
            if (c >= t.x && c <= t.right)return {x: c, y: t.y, perX: n, perY: s}
        }
        if (l && 0 > s) {
            var d = t.bottom - i, c = e + d * n / s;
            if (c >= t.x && c <= t.right)return {x: c, y: t.bottom, perX: n, perY: s}
        }
        return o !== !1 ? getIntersectionPointOnRectByLine(t, e, i, -n, -s, !1) : void 0
    }

    function caculateIntersectPointOn(t, e, i, n, s, o) {
        if (!e.contains(i.x, i.y)) {
            if (i = getIntersectionPointOnRectByLine(e, i.x, i.y, n, s, o), !i)return;
            return caculateIntersectPointIn(t, e, i, i.perX, i.perY)
        }
        return o === !1 ? caculateIntersectPointIn(t, e, i, n, s) : caculateIntersectPointIn(t, e, {
            x: i.x,
            y: i.y,
            perX: n,
            perY: s
        }, n, s) || caculateIntersectPointIn(t, e, i, -n, -s)
    }

    function caculateIntersectPointIn(t, e, i, n, s) {
        for (; ;) {
            if (!e.contains(i.x, i.y))return;
            if (t.hitTest(i.x + n, i.y + s))break;
            i.x += n, i.y += s
        }
        return i
    }

    function toImage(t) {
        return _h4(t) ? t : t.match(/.(gif|jpg|jpeg|png)$/gi) ? t : (t = stringToObject(t), t instanceof Object && t.draw ? t : void 0)
    }

    function _7g(t) {
        for (var e = t.parent; e;) {
            if (e.enableSubNetwork)return e;
            e = e.parent
        }
        return null
    }

    function GroupUI() {
        _39(this, GroupUI, arguments)
    }

    function createNavButton(t, e, i, n, s, o, r) {
        var a = document.createElement("div");
        a.className = "Q-Graph-Nav-Button", css_mzss(a, NAV_BUTTON_CSS), e && css_mzss(a, e);
        var h = document.createElement("img");
        return o && (isTouchSupport ? h.ontouchstart = o : h.onmousedown = o), h.name = r, h.src = i, css_mzss(h, NAV_BUTTON_IMAGE_CSS), s && css_mzss(h, s), n && css_mcCSS(h, "transform", "rotate(180deg)"), a._img = h, a.appendChild(h), t.appendChild(a), a
    }

    function createNavigationPane(t, e) {
        this._navPane = document.createElement("div"), this._navPane.className = "Q-Graph-Nav", css_mzss(this._navPane, {
            "background-color": "rgba(0, 0, 0, 0)",
            overflow: "hidden",
            "float": "left",
            "user-select": "none",
            position: "absolute"
        }), this._top = createNavButton(this._navPane, {width: "100%"}, Defaults.NAVIGATION_IMAGE_TOP, !1, null, e, "top"), this._left = createNavButton(this._navPane, {height: "100%"}, Defaults.NAVIGATION_IMAGE_LEFT, !1, NAV_VERTICAL_MIDDLE_CSS, e, "left"), this._right = createNavButton(this._navPane, {
            height: "100%",
            right: "0px"
        }, Defaults.NAVIGATION_IMAGE_LEFT, !0, NAV_VERTICAL_MIDDLE_CSS, e, "right"), this._mxottom = createNavButton(this._navPane, {
            width: "100%",
            bottom: "0px"
        }, Defaults.NAVIGATION_IMAGE_TOP, !0, null, e, "bottom"), t.appendChild(this._navPane)
    }

    function NavigationPane(t, e) {
        this._dh = t;
        var i = function (e) {
            var i, n, s = e.target, o = s.name;
            if ("left" == o)i = 1; else if ("right" == o)i = -1; else if ("top" == o)n = 1; else {
                if ("bottom" != o)return;
                n = -1
            }
            isTouchSupport && (s.className = "hover", setTimeout(function () {
                s.className = ""
            }, 100)), _ek(e), t._kz._mw7(i, n)
        };
        createNavigationPane.call(this, e, i), this._3j(e.clientWidth, e.clientHeight)
    }

    function ScrollBar(t, e) {
        this._dh = t, this.init(e, t)
    }

    function ShapeNodeUI() {
        _39(this, ShapeNodeUI, arguments)
    }

    function TopCanvas(t, e) {
        this._dh = t, this._js = createCanvas(e), this.g = this._js.g, this._9j = new HashList
    }

    function selectAllElement(t) {
        var e = t.selectionModel, i = [];
        return t.graphModel.forEach(function (e) {
            t.isVisible(e) && t.isSelectable(e) && i.push(e)
        }), e.set(i)
    }

    function zoomByMouseEvent(t, e, i, n) {
        void 0 === n && (n = Defaults.ZOOM_ANIMATE);
        var s = t.globalToLocal(e);
        return i ? t.zoomIn(s.x, s.y, n) : t.zoomOut(s.x, s.y, n)
    }

    function exportGraph(t, e, i) {
        var n = t.bounds;
        i = i || n, e = e || 1;
        var s = null;
        s && i.width * i.height * e * e > s && (e = Math.sqrt(s / i.width / i.height));
        var o = _9r();
        addLineDashSupport(o.g), o.width = i.width * e, o.height = i.height * e, t._8t._fw(o.g, e, i);
        var r = null;
        try {
            r = o.toDataURL("image/png")
        } catch (a) {
            Q.error(a)
        }
        return {canvas: o, data: r, width: o.width, height: o.height}
    }

    function DrawableInteraction(t) {
        this.graph = t, this.topCanvas = t.topCanvas
    }

    function InteractionMode(t, e) {
        this.interactions = t, this.defaultCursor = e || "default"
    }

    function DrawPathInteraction() {
        _39(this, DrawPathInteraction, arguments)
    }

    function mixDrawProperties(t, e) {
        if (!t)return e;
        var i = {};
        for (var n in t)i[n] = t[n];
        for (var n in e)void 0 === i[n] && (i[n] = e[n]);
        return i
    }

    function CreateEdgeInteraction() {
        _39(this, CreateEdgeInteraction, arguments)
    }

    function CreateShapeInteraction() {
        _39(this, CreateShapeInteraction, arguments)
    }

    function CreateLineInteraction() {
        _39(this, CreateLineInteraction, arguments)
    }

    function CreateSimpleEdgeInteraction() {
        _39(this, CreateSimpleEdgeInteraction, arguments)
    }

    function localToGlobal(t, e, i) {
        t += window.pageXOffset, e += window.pageYOffset;
        var n = i.getBoundingClientRect();
        return {x: t + n.left, y: e + n.top}
    }

    function showDivCenterAt(t, e, i) {
        var n = t.offsetWidth, s = t.offsetHeight;
        t.style.left = e - n / 2 + "px", t.style.top = i - s / 2 + "px"
    }

    function getLabelSize(t) {
        var e = document.createElement("canvas"), i = e.getContext("2d"), n = getComputedStyle(t, null), s = n.font;
        s || (s = n.fontStyle + " " + n.fontSize + " " + n.fontFamily), i.font = s;
        var o = t.value, r = o.split("\n"), a = parseInt(n.fontSize), h = 0, l = 0;
        return Q.forEach(r, function (t) {
            var e = i.measureText(t).width;
            e > h && (h = e), l += 1.2 * a
        }), {width: h, height: l}
    }

    function pasteIntoInput(t, e) {
        if ("number" == typeof t.selectionStart && "number" == typeof t.selectionEnd) {
            var i = t.value, n = t.selectionStart;
            t.value = i.slice(0, n) + e + i.slice(t.selectionEnd), t.selectionEnd = t.selectionStart = n + e.length
        } else if ("undefined" != typeof document.selection) {
            var s = document.selection.createRange();
            s.text = e, s.collapse(!1), s.select()
        }
    }

    function selectInput(t) {
        if (isIE) {
            var e = window.scrollX || window.pageXOffset, i = window.scrollY || window.pageYOffset;
            return t.select(), void window.scrollTo(e, i)
        }
        t.select()
    }

    function focus(t) {
        if (isIE) {
            var e = window.scrollX || window.pageXOffset, i = window.scrollY || window.pageYOffset;
            return t.focus(), void window.scrollTo(e, i)
        }
        t.focus()
    }

    function LabelEditor() {
    }

    function PointsInteraction(t) {
        this.graph = t, this.topCanvas = t.topCanvas, this.handlerSize = isTouchSupport ? 8 : 5
    }

    function ResizeInteraction(t) {
        this.graph = t, this.topCanvas = t.topCanvas, this.handlerSize = isTouchSupport ? 8 : 4, this._rotateHandleLength = isTouchSupport ? 30 : 20
    }

    function toUIBounds(t, e) {
        var i = new Rect;
        return i.addPoint(localToParent.call(t, {x: e.x, y: e.y})), i.addPoint(localToParent.call(t, {
            x: e.x + e.width,
            y: e.y
        })), i.addPoint(localToParent.call(t, {
            x: e.x + e.width,
            y: e.y + e.height
        })), i.addPoint(localToParent.call(t, {x: e.x, y: e.y + e.height})), i
    }

    function getCursorByAngle(t) {
        t %= 2 * Math.PI;
        var e = Math.round(t / QUARTER_PI);
        return 0 == e || 4 == e ? "ew-resize" : 1 == e || 5 == e ? "nwse-resize" : 2 == e || 6 == e ? "ns-resize" : "nesw-resize"
    }

    function showDivAt(t, e, i) {
        var n = document.documentElement, s = new Q.Rect(window.pageXOffset, window.pageYOffset, n.clientWidth - 2, n.clientHeight - 2), o = t.offsetWidth, r = t.offsetHeight;
        e + o > s.x + s.width && (e = s.x + s.width - o), i + r > s.y + s.height && (i = s.y + s.height - r), e < s.x && (e = s.x), i < s.y && (i = s.y), t.style.left = e + "px", t.style.top = i + "px"
    }

    function InteractionEvent(t, e, i, n, s) {
        this.source = t, this.type = "interaction", this.kind = e, this.event = i, this.data = n, this.datas = s
    }

    function InteractionManager(t) {
        this._4q = {}, this._kz = t, this._kz._1l.addListener(this._9g, this), this.currentMode = Consts.INTERACTION_MODE_DEFAULT
    }

    function toInteractionList(t, e) {
        var i = t.interactions;
        if (!i)return null;
        for (var n = [], s = 0, o = i.length; o > s; s++) {
            var r = i[s];
            r instanceof Function && n.push(new r(e))
        }
        return n
    }

    function isHorizontalDirection(t) {
        return t >= 10 && 20 > t
    }

    function isOppositeDirection(t) {
        return t == DIRECTION_LEFT || t == DIRECTION_TOP
    }

    function prepareLayoutDatas() {
        var t, e, i = {}, n = [], s = 0, o = {}, r = 0;
        this.graph.forEach(function (a) {
            if (this.isLayoutable(a))if (a instanceof Node) {
                var h = {node: a, id: a.id, x: a.x, y: a.y};
                for (this.appendNodeInfo && this.appendNodeInfo(a, h), i[a.id] = h, n.push(h), s++, e = a.parent; e instanceof Group;) {
                    t || (t = {});
                    var l = t[e.id];
                    l || (l = t[e.id] = {id: e.id, children: []}), l.children.push(h), e = e.parent
                }
            } else if (a instanceof Edge && !a.isLooped() && a.fromAgent && a.toAgent) {
                var h = {edge: a};
                o[a.id] = h, r++
            }
        }, this);
        var a = {};
        for (var h in o) {
            var l = o[h], _ = l.edge, u = _.fromAgent, d = _.toAgent, c = u.id + "-" + d.id, f = d.id + "-" + u.id;
            if (i[u.id] && i[d.id] && !a[c] && !a[f]) {
                var E = i[u.id], g = i[d.id];
                l.from = E, l.to = g, a[c] = l, this.appendEdgeInfo && this.appendEdgeInfo(_, l)
            } else delete o[h], r--
        }
        return {
            groups: t,
            nodesArray: n,
            nodes: i,
            nodeCount: s,
            edges: o,
            edgeCount: r,
            minEnergy: this.minEnergyFunction(s, r)
        }
    }

    function DynamicLayouter(t) {
        this.graph = t, this.currentMovingNodes = {}
    }

    function SpringLayouter() {
        _39(this, SpringLayouter, arguments)
    }

    function forEachLinkedNode(t, e, i, n, s) {
        n ? t.forEachEdge(function (n) {
            var o = n.otherNode(t);
            o != i && o._marker != s && e(o, t)
        }, this, !0) : t.forEachOutEdge(function (n) {
            var o = n.toAgent;
            o != i && o._marker != s && e(o, t)
        })
    }

    var idIndex = 0;
    if (window.navigator) {
        var userAgent = navigator.userAgent, isOpera = /opera/i.test(userAgent), isIE = !isOpera && /msie/i.test(userAgent), isIE11 = /rv:11.0/i.test(userAgent), isIE10 = /MSIE 10./i.test(userAgent);
        if (isIE11 && (isIE = !0), /msie\s[6,7,8]/i.test(userAgent))throw new Error("your browser is not supported");
        var isWebkit = /webkit|khtml/i.test(userAgent), isGecko = !isWebkit && /gecko/i.test(userAgent), isFirefox = /firefox\//i.test(userAgent), isChrome = /Chrome\//i.test(userAgent), isSafari = !isChrome && /Safari\//i.test(userAgent), isMac = /Macintosh;/i.test(userAgent), isIOS = /(iPad|iPhone|iPod)/g.test(userAgent), isAndroid = /Android/g.test(userAgent), isWindowsPhone = /Windows Phone/g.test(userAgent), isTouchSupport = (isIOS || isAndroid || isWindowsPhone) && "ontouchstart" in window, appleWebkitMatch = userAgent.match(/AppleWebKit\/([0-9\.]*)/);
        if (appleWebkitMatch && appleWebkitMatch.length > 1)var webkitVersion = parseFloat(appleWebkitMatch[1]);
        if (isAndroid) {
            var androidVersion = parseFloat(userAgent.match(/Android\s([0-9\.]*)/)[1]);
            if (webkitVersion && 534.3 >= webkitVersion)var withoutClip = !0
        }
    }
    window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
            return window.setTimeout(function () {
                t()
            }, 1e3 / 60)
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (t) {
            return window.clearTimeout(t)
        });
    var Colors = {
        blue: "#2898E0",
        yellow: "#FFDB19",
        red: "#E21667",
        dark: "#1D4876",
        gray: "#888"
    }, Defaults = {SELECTION_TOLERANCE: 2, DOUBLE_BUFFER: void 0, LABEL_COLOR: "#333"};
    _50(Defaults, {
        FONT_STYLE: {
            get: function () {
                return this._fontStyle || (this._fontStyle = "normal")
            }, set: function (t) {
                this._fontStyle != t && (this._fontStyle = t, this._fontChanged = !0)
            }
        }, FONT_SIZE: {
            get: function () {
                return this._fontSize || (this._fontSize = 12)
            }, set: function (t) {
                this._fontSize != t && (this._fontSize = t, this._fontChanged = !0)
            }
        }, FONT_FAMILY: {
            get: function () {
                return this._fontFamily || (this._fontFamily = "Verdana,helvetica,arial,sans-serif")
            }, set: function (t) {
                this._fontFamily != t && (this._fontFamily = t, this._fontChanged = !0)
            }
        }, FONT: {
            get: function () {
                return (this._fontChanged || void 0 === this._fontChanged) && (this._fontChanged = !1, this._font = this.FONT_STYLE + " " + this.FONT_SIZE + "px " + this.FONT_FAMILY), this._font
            }
        }
    });
    var Matrix2D = function () {
    };
    Matrix2D.prototype = {
        _mm: 0, _mn: 0, _kr: !0, _ks: 1, _g4: function (t, e, i) {
            var n = this._mzq(e), s = this._mzn(i), o = t * n, r = t * s;
            return this._9e(t, e - o, i - r)
        }, _mzq: function (t) {
            return (t - this._mm) / this._ks
        }, _mzn: function (t) {
            return (t - this._mn) / this._ks
        }, _ee: function (t, e) {
            return this._9e(this._ks, this._mm + t, this._mn + e)
        }, _9e: function (t, e, i) {
            return this._ks == t && this._mm == e && this._mn == i ? !1 : (this._kr && (1 != this.ratio || 2 != this.ratio ? (e = Math.round(e * this.ratio) / this.ratio, i = Math.round(i * this.ratio) / this.ratio) : (e = Math.round(e), i = Math.round(i))), this._mm = e, this._mn = i, this._ks = t, void(this._32 && this._32()))
        }, _hf: function () {
            return {a: this._ks, b: 0, c: 0, d: this._ks, e: this._mm, f: this._mn}
        }, toString: function () {
            return "matrix(" + _91(this._ks) + ",0,0," + _91(this._ks) + "," + _91(this._mm) + "," + _91(this._mn) + ")"
        }, _ft: function (t) {
            css_mcCSS(t, "transform", this.toString())
        }
    };
    var HashList = function (t) {
        this._jz = [], this._lw = {}, t && this.add(t)
    };
    HashList.prototype = {
        _jz: null, _lw: null, get: function (t) {
            return this.getByIndex(t)
        }, getById: function (t) {
            return this._lw[t]
        }, getByIndex: function (t) {
            return this._jz[t]
        }, forEach: function (t, e, i) {
            return _i1(this._jz, t, e, i)
        }, forEachReverse: function (t, e, i) {
            return _7x(this._jz, t, e, i)
        }, size: function () {
            return this._jz.length
        }, contains: function (t) {
            return this.containsById(t.id)
        }, containsById: function (t) {
            return this._lw.hasOwnProperty(t)
        }, setIndex: function (t, e) {
            var i = this._jz.indexOf(t);
            if (0 > i)throw new Error("'" + t.id + "' not exist");
            return i == e ? !1 : (this._jz.splice(i, 1), this._jz.splice(e, 0, t), !0)
        }, setIndexAfter: function (t, e) {
            var i = this._jz.indexOf(t);
            if (0 > i)throw new Error("'" + t.id + "' not exist");
            return i == e ? e : i == e + 1 ? e + 1 : (i > e && (e += 1), this._jz.splice(i, 1), this._jz.splice(e, 0, t), e)
        }, setIndexBefore: function (t, e) {
            var i = this._jz.indexOf(t);
            if (0 > i)throw new Error("'" + t.id + "' not exist");
            return i == e ? e : i == e - 1 ? e - 1 : (e > i && (e -= 1), this._jz.splice(i, 1), this._jz.splice(e, 0, t), e)
        }, indexOf: function (t) {
            return this._jz.indexOf(t)
        }, getIndexById: function (t) {
            var e = this.getById(t);
            return e ? this._jz.indexOf(e) : -1
        }, add: function (t, e) {
            return _hy(t) ? this._gc(t, e) : this._ku(t, e)
        }, addFirst: function (t) {
            return this.add(t, 0)
        }, _gc: function (t, e) {
            if (0 == t.length)return !1;
            var i = !1, n = e >= 0;
            t = t._jz || t;
            for (var s = 0, o = t.length; o > s; s++) {
                var r = t[s];
                null !== r && void 0 !== r && this._ku(r, e, !0) && (i = !0, n && e++)
            }
            return i
        }, _ku: function (t, e) {
            var i = t.id;
            return void 0 === i || this.containsById(i) ? !1 : (_mh(this._jz, t, e), this._lw[i] = t, t)
        }, remove: function (t) {
            return _hy(t) ? this._mxp(t) : t.id ? this._fm(t.id, t) : this.removeById(t)
        }, _mxp: function (t) {
            if (0 == t.length)return !1;
            var e = !1;
            t = t._jz || t;
            for (var i = 0, n = t.length; n > i; i++) {
                var s = t[i];
                if (null !== s && void 0 !== s) {
                    void 0 === s.id && (s = this._lw[s]);
                    var o = s.id;
                    this._fm(o, s, !0) && (e = !0)
                }
            }
            return e
        }, _fm: function (t, e) {
            return void 0 !== t && this.containsById(t) ? ((null === e || void 0 === e) && (e = this.getById(t)), delete this._lw[t], _kj(this._jz, e), !0) : !1
        }, removeById: function (t) {
            var e = this._lw[t];
            return e ? this._fm(t, e) : !1
        }, set: function (t) {
            if (!t || 0 == t)return void this.clear();
            if (this.isEmpty() || !_hy(t))return this.clear(), this.add(t);
            var e = [], i = {}, n = 0;
            if (_i1(t, function (t) {
                    this._lw[t.id] ? (i[t.id] = t, n++) : e.push(t)
                }, this), n != this.length) {
                var s = [];
                this.forEach(function (t) {
                    i[t.id] || s.push(t)
                }, this), s.length && this._mxp(s)
            }
            return e.length && this._gc(e), !0
        }, clear: function () {
            return this.isEmpty() ? !1 : (this._jz.length = 0, this._lw = {}, !0)
        }, toDatas: function () {
            return this._jz.slice(0)
        }, isEmpty: function () {
            return 0 == this._jz.length
        }, valueOf: function () {
            return this._jz.length
        }, clone: function (t) {
            var e = new HashList;
            return e.add(t ? _db(this._jz) : this.toDatas()), e
        }
    }, _50(HashList.prototype, {
        datas: {
            get: function () {
                return this._jz
            }
        }, random: {
            get: function () {
                return this._jz && this._jz.length ? this._jz[_fc(this._jz.length)] : null
            }
        }, length: {
            get: function () {
                return this._jz ? this._jz.length : 0
            }
        }
    });
    var TOW_PI = 2 * Math.PI, HALF_PI = .5 * Math.PI, getFirstElementChildByTagName = function (t, e) {
        e = e.toUpperCase();
        for (var i = isIE ? t.firstChild : t.firstElementChild; i && (1 != i.nodeType || i.tagName && i.tagName.toUpperCase() != e);)i = isIE ? i.nextSibling : i.nextElementSibling;
        return i && 1 == i.nodeType && i.tagName && i.tagName.toUpperCase() == e ? i : null
    }, Point = function (t, e, i) {
        t instanceof Point && (e = t.y, t = t.x, i = t.rotate), this.set(t, e, i)
    }, calculateDistance = function (t, e, i, n) {
        var s = t - i, o = e - n;
        return Math.sqrt(s * s + o * o)
    };
    Point.prototype = {
        x: 0, y: 0, rotate: void 0, set: function (t, e, i) {
            this.x = t || 0, this.y = e || 0, this.rotate = i || 0
        }, negate: function () {
            this.x = -this.x, this.y = -this.y
        }, offset: function (t, e) {
            this.x += t, this.y += e
        }, equals: function (t) {
            return this.x == t.x && this.y == t.y
        }, distanceTo: function (t) {
            return calculateDistance(this.x, this.y, t.x, t.y)
        }, toString: function () {
            return "Point(" + this.x + ", " + this.y + ")"
        }, clone: function () {
            return new Point(this.x, this.y)
        }
    }, Object.defineProperty(Point.prototype, "distance", {
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }
    });
    var Line = function (t, e, i, n) {
        void 0 !== t && this._mc(t, e, i, n)
    };
    Line.prototype = {
        _mv: null,
        _mt: null,
        _mr: null,
        _mp: null,
        _mw: null,
        _mx: null,
        _mz: 1,
        _mc: function (t, e, i, n) {
            this._mv = t, this._mt = e, this._mr = i, this._mp = n, t == i ? (this._mw = -1, this._mz = 0, this._mx = t) : (this._mw = (e - n) / (t - i), this._mx = e - this._mw * t, this._mz = 1), this._l7 = Math.atan2(this._mp - this._mt, this._mr - this._mv), this._mzos = Math.cos(this._l7), this._sin = Math.sin(this._l7)
        },
        _d3: function (t) {
            return 0 == this._mz ? Number.NaN : this._mw * t + this._mx
        },
        _d1: function (t) {
            return 0 == this._mw ? Number.NaN : (t - this._mx) / this._mw
        },
        _$h: function (t) {
            var e, i, n, s, o, r = t[0], a = t[2], h = t[4], l = t[1], _ = t[3], u = t[5], d = this._mw, c = this._mx, f = this._mz;
            if (0 == f ? (n = Math.sqrt((-d * d * r - d * c) * h + d * d * a * a + 2 * d * c * a - d * c * r), s = -d * a + d * r, o = d * h - 2 * d * a + d * r) : (n = Math.sqrt((-l + d * r + c) * u + _ * _ + (-2 * d * a - 2 * c) * _ + (d * h + c) * l + (-d * d * r - d * c) * h + d * d * a * a + 2 * d * c * a - d * c * r), s = -_ + l + d * a - d * r, o = u - 2 * _ + l - d * h + 2 * d * a - d * r), 0 != o) {
                e = (n + s) / o, i = (-n + s) / o;
                var E, g;
                return e >= 0 && 1 >= e && (E = pointOnQuadratic(e, t)), i >= 0 && 1 >= i && (g = pointOnQuadratic(i, t)), E && g ? [E, g] : E ? E : g ? g : void 0
            }
        },
        _3u: function (t, e, i) {
            if (this._mw == t._mw || 0 == this._mz && 0 == t._mz)return null;
            var n, s;
            if (n = 0 == this._mz ? this._mx : 0 == t._mz ? t._mx : (t._mx - this._mx) / (this._mw - t._mw), s = 0 == this._mw ? this._mx : 0 == t._mw ? t._mx : this._mz ? this._mw * n + this._mx : t._mw * n + t._mx, !e)return {
                x: n,
                y: s
            };
            var o, r, a;
            if (i)o = -e / 2, r = -o; else {
                o = -calculateDistance(this._mv, this._mt, n, s), r = calculateDistance(this._mr, this._mp, n, s);
                var h = -o + r;
                if (h > e) {
                    var l = e / h;
                    o *= l, r *= l
                } else a = (e - h) / 2
            }
            var _ = this._7l(n, s, o), u = this._7l(n, s, r);
            return a && (_._rest = a, u._rest = a), [_, u]
        },
        _7l: function (t, e, i) {
            return 0 == this._mz ? {x: t, y: e + i} : {x: t + i * this._mzos, y: e + i * this._sin}
        }
    };
    var Size = function (t, e) {
        this.width = t, this.height = e
    };
    Size.prototype = {
        width: 0, height: 0, isEmpty: function () {
            return this.width <= 0 || this.height <= 0
        }, clone: function () {
            return new Size(this.width, this.height)
        }, toString: function () {
            return "Size(" + this.width + ", " + this.height + ")"
        }
    };
    var Rect = function (t, e, i, n) {
        t instanceof Object && !_hc(t) && (e = t.y, i = t.width, n = t.height, t = t.x), void 0 === i && (i = -1), void 0 === n && (n = -1), this.x = t || 0, this.y = e || 0, this.width = i, this.height = n
    };
    Rect.prototype = {
        x: 0, y: 0, width: -1, height: -1, setByRect: function (t) {
            this.x = t.x || 0, this.y = t.y || 0, this.width = t.width || 0, this.height = t.height || 0
        }, set: function (t, e, i, n) {
            this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = n || 0
        }, offset: function (t, e) {
            this.x += t, this.y += e
        }, contains: function (t, e) {
            return t instanceof Rect ? containsRect(this.x, this.y, this.width, this.height, t.x, t.y, t.width, t.height) : t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height
        }, intersectsPoint: function (t, e, i) {
            return this.width <= 0 && this.height <= 0 ? !1 : i ? this.intersectsRect(t - i, e - i, 2 * i, 2 * i) : t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height
        }, intersectsRect: function (t, e, i, n) {
            return intersectsRect(this.x, this.y, this.width, this.height, t, e, i, n)
        }, intersects: function (t, e) {
            return _hc(t.width) ? this.intersectsRect(t.x, t.y, t.width, t.height) : this.intersectsPoint(t, e)
        }, intersection: function (t, e, i, n) {
            var s = this.x, o = this.y, r = s;
            r += this.width;
            var a = o;
            a += this.height;
            var h = t;
            h += i;
            var l = e;
            return l += n, t > s && (s = t), e > o && (o = e), r > h && (r = h), a > l && (a = l), r -= s, a -= o, 0 > r || 0 > a ? null : new Rect(s, o, r, a)
        }, addPoint: function (t) {
            this.add(t.x, t.y)
        }, add: function (t, e) {
            if (_hc(t.width))return this.addRect(t.x, t.y, t.width, t.height);
            if (_hc(t.x) && (e = t.y, t = t.x), this.width < 0 || this.height < 0)return this.x = t, this.y = e, void(this.width = this.height = 0);
            var i = this.x, n = this.y, s = this.width, o = this.height;
            s += i, o += n, i > t && (i = t), n > e && (n = e), t > s && (s = t), e > o && (o = e), s -= i, o -= n, s > Number.MAX_VALUE && (s = Number.MAX_VALUE), o > Number.MAX_VALUE && (o = Number.MAX_VALUE), this.set(i, n, s, o)
        }, addRect: function (t, e, i, n) {
            var s = this.width, o = this.height;
            (0 > s || 0 > o) && this.set(t, e, i, n);
            var r = i, a = n;
            if (!(0 > r || 0 > a)) {
                var h = this.x, l = this.y;
                s += h, o += l;
                var _ = t, u = e;
                r += _, a += u, h > _ && (h = _), l > u && (l = u), r > s && (s = r), a > o && (o = a), s -= h, o -= l, s > Number.MAX_VALUE && (s = Number.MAX_VALUE), o > Number.MAX_VALUE && (o = Number.MAX_VALUE), this.set(h, l, s, o)
            }
        }, shrink: function (t, e, i, n) {
            return _hc(t) ? 1 == arguments.length ? n = e = i = t || 0 : 2 == arguments.length ? (i = t || 0, n = e || 0) : (t = t || 0, e = e || 0, i = i || 0, n = n || 0) : (e = t.left || 0, i = t.bottom || 0, n = t.right || 0, t = t.top || 0), this.x += e, this.y += t, this.width -= e + n, this.height -= t + i, this
        }, grow: function (t, e, i, n) {
            return _hc(t) ? 1 == arguments.length ? n = e = i = t || 0 : 2 == arguments.length ? (i = t || 0, n = e || 0) : (t = t || 0, e = e || 0, i = i || 0, n = n || 0) : (e = t.left || 0, i = t.bottom || 0, n = t.right || 0, t = t.top || 0), this.x -= e, this.y -= t, this.width += e + n, this.height += t + i, this
        }, isEmpty: function () {
            return this.width <= 0 && this.height <= 0
        }, toString: function () {
            return this.x + " , " + this.y + " , " + this.width + " , " + this.height
        }, union: function (t) {
            var e = this.width, i = this.height;
            if (0 > e || 0 > i)return new Rect(t.x, t.y, t.width, t.height);
            var n = t.width, s = t.height;
            if (0 > n || 0 > s)return new Rect(this.x, this.y, this.width, this.height);
            var o = this.x, r = this.y;
            e += o, i += r;
            var a = t.x, h = t.y;
            return n += a, s += h, o > a && (o = a), r > h && (r = h), n > e && (e = n), s > i && (i = s), e -= o, i -= r, e > Number.MAX_VALUE && (e = Number.MAX_VALUE), i > Number.MAX_VALUE && (i = Number.MAX_VALUE), new Rect(o, r, e, i)
        }, clear: function () {
            this.set(0, 0, -1, -1)
        }, equals: function (t) {
            return this.x == t.x && this.y == t.y && this.width == t.width && this.height == t.height
        }, clone: function (t, e) {
            return new Rect(this.x + (t || 0), this.y + (e || 0), this.width, this.height)
        }, getIntersectionPoint: function (t, e, i, n) {
            return getIntersectionPointOnRect(this, t, e, i, n)
        }
    }, _kl(Rect, Size), _50(Rect.prototype, {
        left: {
            get: function () {
                return this.x
            }
        }, top: {
            get: function () {
                return this.y
            }
        }, bottom: {
            get: function () {
                return this.y + this.height
            }
        }, right: {
            get: function () {
                return this.x + this.width
            }
        }, cx: {
            get: function () {
                return this.x + this.width / 2
            }
        }, cy: {
            get: function () {
                return this.y + this.height / 2
            }
        }, center: {
            get: function () {
                return new Point(this.cx, this.cy)
            }
        }
    });
    var Insets = function (t, e, i, n) {
        1 == arguments.length ? e = i = n = t : 2 == arguments.length && (i = t, n = e), this.set(t, e, i, n)
    };
    Insets.prototype = {
        top: 0, bottom: 0, left: 0, right: 0, set: function (t, e, i, n) {
            this.top = t || 0, this.left = e || 0, this.bottom = i || 0, this.right = n || 0
        }, clone: function () {
            return new Insets(this.top, this.left, this.bottom, this.right)
        }, equals: function (t) {
            return t && this.top == t.top && this.bottom == t.bottom && this.left == t.left && this.right == t.right
        }
    };
    var Position = function (t, e) {
        this.horizontalPosition = t, this.verticalPosition = e
    };
    Position.prototype = {
        verticalPosition: !1, horizontalPosition: !1, toString: function () {
            return (this.horizontalPosition || "") + (this.verticalPosition || "")
        }
    }, _6d(Position.prototype, "sortName", {
        get: function () {
            return (this.horizontalPosition || "") + (this.verticalPosition || "")
        }
    });
    var LEFT = "l", CENTER = "c", RIGHT = "r", TOP = "t", MIDDLE = "m", BOTTOM = "b";
    Position.LEFT_TOP = new Position(LEFT, TOP), Position.LEFT_MIDDLE = new Position(LEFT, MIDDLE), Position.LEFT_BOTTOM = new Position(LEFT, BOTTOM), Position.CENTER_TOP = new Position(CENTER, TOP), Position.CENTER_MIDDLE = new Position(CENTER, MIDDLE), Position.CENTER_BOTTOM = new Position(CENTER, BOTTOM), Position.RIGHT_TOP = new Position(RIGHT, TOP), Position.RIGHT_MIDDLE = new Position(RIGHT, MIDDLE), Position.RIGHT_BOTTOM = new Position(RIGHT, BOTTOM);
    var positions = [Position.LEFT_TOP, Position.LEFT_MIDDLE, Position.LEFT_BOTTOM, Position.CENTER_TOP, Position.CENTER_MIDDLE, Position.CENTER_BOTTOM, Position.RIGHT_TOP, Position.RIGHT_MIDDLE, Position.RIGHT_BOTTOM];
    _6d(Position, "random", {
        get: function () {
            return positions[_fc(positions.length)]
        }
    });
    var RoundRect = function (t, e, i, n, s) {
        this.set(t, e, i, n), this.radius = s
    };
    RoundRect.prototype = {
        radius: 0, classify: function (t, e, i, n) {
            return e > t ? 0 : e + n > t ? 1 : i - n > t ? 2 : i > t ? 3 : 4
        }, intersectsRect: function (t, e, i, n) {
            if (_iw(this, RoundRect, "intersectsRect", arguments) === !1)return !1;
            var s = this.x, o = this.y, r = s + this.width, a = o + this.height, h = 2 * radius, l = 2 * radius, _ = Math.min(this.width, Math.abs(h)) / 2, u = Math.min(this.height, Math.abs(l)) / 2, d = this.classify(t, s, r, _), c = this.classify(t + i, s, r, _), f = this.classify(e, o, a, u), E = this.classify(e + n, o, a, u);
            return 2 == d || 2 == c || 2 == f || 2 == E ? !0 : 2 > d && c > 2 || 2 > f && E > 2 ? !0 : (t = 1 == c ? t = t + i - (s + _) : t -= r - _, e = 1 == E ? e = e + n - (o + u) : e -= a - u, t /= _, e /= u, 1 >= t * t + e * e)
        }, intersectsPoint: function (t, e) {
            if (_iw(this, RoundRect, "intersectsPoint", arguments) === !1)return !1;
            var i = this.x, n = this.y, s = i + this.width, o = n + this.height;
            if (i > t || n > e || t >= s || e >= o)return !1;
            var r = 2 * radius, a = 2 * radius, h = Math.min(this.width, Math.abs(r)) / 2, l = Math.min(this.height, Math.abs(a)) / 2;
            return t >= (i += h) && t < (i = s - h) ? !0 : e >= (n += l) && e < (n = o - l) ? !0 : (t = (t - i) / h, e = (e - n) / l, 1 >= t * t + e * e)
        }, clone: function () {
            return new RoundRect(this.x, this.y, this.width, this.height, this.radius)
        }
    }, _kl(RoundRect, Rect);
    var Event = function (t, e, i, n) {
        this.source = t, this.type = e, this.kind = i, this.value = n
    };
    Event.prototype = {
        source: null, type: null, kind: null, value: null, toString: function () {
            return "source: " + this.source + ", type: " + this.type + ", kind: " + this.kind
        }
    };
    var PropertyChangeEvent = function (t, e, i, n, s) {
        this.source = t, this.kind = e, this.oldValue = n, this.value = i, this.propertyType = s
    };
    PropertyChangeEvent.prototype = {
        type: "property.change", propertyType: null, toString: function () {
            return "source: " + this.source + ", type: " + this.type + ", propertyName: " + this.kind + ", oldValue: " + this.oldValue + ", value: " + this.value
        }
    }, _kl(PropertyChangeEvent, Event), _6d(PropertyChangeEvent.prototype, "propertyName", {
        get: function () {
            return this.kind
        }, set: function (t) {
            this.kind = t
        }
    });
    var ParentChangeEvent = function (t, e, i) {
        this.source = t, this.oldValue = t.parent, this.value = e, this.newIndex = i, this.oldValue && (this.oldIndex = this.oldValue.getChildIndex(t))
    };
    ParentChangeEvent.prototype = {kind: "parent"}, _kl(ParentChangeEvent, PropertyChangeEvent);
    var ChildAddEvent = function (t, e) {
        this.source = t, this.value = e
    };
    ChildAddEvent.prototype.kind = "child.add", _kl(ChildAddEvent, PropertyChangeEvent);
    var ChildRemoveEvent = function (t, e) {
        this.source = t, this.value = e
    };
    ChildRemoveEvent.prototype.kind = "child.remove", _kl(ChildRemoveEvent, PropertyChangeEvent);
    var ChildIndexChangeEvent = function (t, e, i, n) {
        this.source = e, this.oldValue = i, this.value = n, this.parent = t, this.child = e, this.oldIndex = i, this.newIndex = n
    };
    ChildIndexChangeEvent.prototype.kind = "child.index", _kl(ChildIndexChangeEvent, PropertyChangeEvent);
    var Handler = function () {
    };
    Handler.prototype = {
        listener: null, beforeEvent: function (t) {
            return null != this.listener && this.listener.beforeEvent ? this.listener.beforeEvent(t) : !0
        }, onEvent: function (t) {
            null != this.listener && this.listener.onEvent && this.listener.onEvent(t)
        }
    };
    var Dispatcher = function () {
        _39(this, Dispatcher, arguments), this.events = {}, this.listeners = []
    }, QListener = function (t, e) {
        this.listener = t, this.scope = e, t instanceof Function ? this.onEvent = t : (this.onEvent = t.onEvent, this.beforeEvent = t.beforeEvent), this.equals = function (t) {
            return t && this.listener == t.listener && this.scope == t.scope
        }
    };
    QListener.prototype = {
        equals: function (t) {
            return t && this.listener == t.listener && this.scope == t.scope
        }, destroy: function () {
            delete this.scope, delete this.listener
        }
    }, Dispatcher.prototype = {
        listeners: null, _mxr: function () {
            return this.listeners && this.listeners.length > 0
        }, _7s: function (t, e) {
            return t instanceof Dispatcher ? t : new QListener(t, e)
        }, _9l: function (t, e) {
            if (t instanceof Dispatcher)return this.listeners.indexOf(t);
            for (var i = this.listeners, n = 0, s = i.length; s > n; n++) {
                var o = i[n];
                if (o.listener == t && o.scope == e)return n
            }
            return -1
        }, contains: function (t, e) {
            return this._9l(t, e) >= 0
        }, addListener: function (t, e) {
            return this.contains(t, e) ? !1 : void this.listeners.push(this._7s(t, e))
        }, removeListener: function (t, e, i) {
            var n = this._9l(t, e);
            if (n >= 0) {
                var s = this.listeners.splice(n, 1)[0];
                i || _7d(s)
            }
        }, on: function (t, e) {
            this.addListener(t, e)
        }, un: function (t, e, i) {
            this.removeListener(t, e, i)
        }, onEvent: function (t) {
            return this.listeners ? void _i1(this.listeners, function (e) {
                e.onEvent && (e.scope ? e.onEvent.call(e.scope, t) : e.onEvent(t))
            }, this) : !1
        }, beforeEvent: function (t) {
            return this.listeners ? _i1(this.listeners, function (e) {
                return e.beforeEvent ? e.scope ? e.beforeEvent.call(e.scope, t) : e.beforeEvent(t) : !0
            }, this) : !0
        }, _du: function (t) {
            return this.beforeEvent(t) === !1 ? !1 : (this.onEvent(t), !0)
        }, clear: function () {
            this.listeners = []
        }, destroy: function () {
            this.clear()
        }
    }, _kl(Dispatcher, Handler);
    var IListener = {
        onEvent: function () {
        }, beforeEvent: function () {
        }
    }, ListEvent = function (t, e, i, n, s) {
        this.source = t, this.type = "list", this.kind = e, this.data = i, this.index = n, this.oldIndex = s
    };
    ListEvent.prototype = {
        index: -1, oldIndex: -1, toString: function () {
            return "source: " + this.source + ", type: " + this.type + ", kind: " + this.kind + ", data: " + this.data + ", index: " + this.index + ", oldIndex: " + this.oldIndex
        }
    }, _kl(ListEvent, Event), ListEvent.KIND_ADD = "add", ListEvent.KIND_REMOVE = "remove", ListEvent.KIND_CLEAR = "clear", ListEvent.KIND_INDEX_CHANGE = "index.change";
    var Data = function () {
        this.id = ++idIndex, this._mz3 = {}
    };
    Data.prototype = {
        _mz3: null, id: null, get: function (t) {
            return this._mz3[t]
        }, set: function (t, e) {
            var i = this.get(t);
            if (i === e)return !1;
            var n = new PropertyChangeEvent(this, t, e, i);
            return n.propertyType = Consts.PROPERTY_TYPE_CLIENT, this._mx8(t, e, n, this._mz3)
        }, _mx8: function (t, e, i, n) {
            return this.beforeEvent(i) === !1 ? !1 : (n || (n = this._mz3), void 0 === e ? delete n[t] : n[t] = e, this.onEvent(i), !0)
        }, remove: function (t) {
            this.set(t, null)
        }, valueOf: function () {
            return this.id
        }, toString: function () {
            return this.id
        }, _dy: function (t, e) {
            if (void 0 === e && (e = -1), this == t || t == this._jk)return !1;
            if (t && this == t._jk && !t._dy(null))return !1;
            var i = new ParentChangeEvent(this, t, e);
            if (!this.beforeEvent(i))return !1;
            var n, s, o = this._jk;
            return t && (n = new ChildAddEvent(t, this), !t.beforeEvent(n)) ? !1 : null == o || (s = new ChildRemoveEvent(o, this), o.beforeEvent(s)) ? (this._jk = t, null != t && doChildAdd(t, this, e), null != o && doChildRemove(o, this), this.onEvent(i), null != t && t.onEvent(n), null != o && o.onEvent(s), this.onParentChanged(o, t), !0) : !1
        }, addChild: function (t, e) {
            var i = t._dy(this, e);
            return i && this.onChildAdd(t, e), i
        }, onChildAdd: function () {
        }, removeChild: function (t) {
            if (!this._fe || !this._fe.contains(t))return !1;
            var e = t._dy(null);
            return this.onChildRemove(t), e
        }, onChildRemove: function () {
        }, toChildren: function () {
            return this._fe ? this._fe.toDatas() : null
        }, clearChildren: function () {
            if (this._fe && this._fe.length) {
                var t = this.toChildren();
                _i1(t, function (t) {
                    t._dy(null)
                }, this), this.onChildrenClear(t)
            }
        }, forEachChild: function (t, e) {
            return this.hasChildren() ? this._fe.forEach(t, e) : !1
        }, onChildrenClear: function () {
        }, getChildIndex: function (t) {
            return this._fe && this._fe.length ? this._fe.indexOf(t) : -1
        }, setChildIndex: function (t, e) {
            if (!this._fe || !this._fe.length)return !1;
            var i = this._fe.indexOf(t);
            if (0 > i || i == e)return !1;
            var n = new ChildIndexChangeEvent(this, t, i, e);
            return this.beforeEvent(n) === !1 ? !1 : (this._fe.remove(t) && this._fe.add(t, e), this.onEvent(n), !0)
        }, hasChildren: function () {
            return this._fe && this._fe.length > 0
        }, getChildAt: function (t) {
            return null == this._fe ? null : this._fe._jz[t]
        }, isDescendantOf: function (t) {
            if (!t.hasChildren())return !1;
            for (var e = this.parent; null != e;) {
                if (t == e)return !0;
                e = e.parent
            }
            return !1
        }, onParentChanged: function () {
        }, firePropertyChangeEvent: function (t, e, i, n) {
            this.onEvent(new PropertyChangeEvent(this, t, e, i, n))
        }
    }, _kl(Data, Handler), _50(Data.prototype, {
        childrenCount: {
            get: function () {
                return this._fe ? this._fe.length : 0
            }
        }, children: {
            get: function () {
                return this._fe || (this._fe = new HashList), this._fe
            }
        }, parent: {
            get: function () {
                return this._jk
            }, set: function (t) {
                this._dy(t, -1)
            }
        }, properties: {
            get: function () {
                return this._mz3
            }, set: function (t) {
                this._mz3 != t && (this._mz3 = t)
            }
        }
    });
    var HashCollection = function () {
        this._jz = [], this._lw = {}, this._1l = new Dispatcher
    };
    HashCollection.prototype = {
        beforeEvent: function (t) {
            return null != this._1l && this._1l.beforeEvent ? this._1l.beforeEvent(t) : !0
        }, onEvent: function (t) {
            return this._1l instanceof Function ? void this._1l(t) : void(null != this._1l && this._1l.onEvent && this._1l.onEvent(t))
        }, _1l: null, setIndex: function (t, e) {
            if (!this.contains(t))throw new Error("'" + t.getId() + "' not exist");
            var i = this.indexOf(t);
            if (i == e)return !1;
            var n = new ListEvent(this, ListEvent.KIND_INDEX_CHANGE, t, e, i);
            return this.beforeEvent(n) === !1 ? !1 : (this._jz.remove(t) >= 0 && this._jz.add(e, t), this.onEvent(n), !0)
        }, _gc: function (t, e) {
            if (0 == t.length)return !1;
            var i = !1, n = e >= 0, s = new ListEvent(this, ListEvent.KIND_ADD, t, e);
            if (this.beforeEvent(s) === !1)return !1;
            var o = [];
            t = t._jz || t;
            for (var r = 0, a = t.length; a > r; r++) {
                var h = t[r];
                null !== h && void 0 !== h && this._ku(h, e, !0) && (o.push(h), i = !0, n && e++)
            }
            return s.data = o, this.onEvent(s), i
        }, _ku: function (t, e, i) {
            if (this.accept(t) === !1)return !1;
            if (i)return _iw(this, HashCollection, "_ku", arguments);
            var n = new ListEvent(this, ListEvent.KIND_ADD, t, e);
            return this.beforeEvent(n) === !1 ? !1 : _iw(this, HashCollection, "_ku", arguments) ? (this._l0(t, n), t) : !1
        }, _l0: function (t, e) {
            this.onEvent(e)
        }, _mxp: function (t) {
            if (0 == t.length)return !1;
            var e = new ListEvent(this, ListEvent.KIND_REMOVE, t);
            if (this.beforeEvent(e) === !1)return !1;
            var i = [], n = !1;
            t = t._jz || t;
            for (var s = 0, o = t.length; o > s; s++) {
                var r = t[s];
                if (null !== r && void 0 !== r) {
                    var a = r.id || r;
                    void 0 === r.id && (r = null), this._fm(a, r, !0) && (i.push(r), n = !0)
                }
            }
            return e.data = i, this.onEvent(e), n
        }, _fm: function (t, e, i) {
            if (i)return _iw(this, HashCollection, "_fm", arguments);
            var n = new ListEvent(this, ListEvent.KIND_REMOVE, e);
            return this.beforeEvent(n) === !1 ? !1 : _iw(this, HashCollection, "_fm", arguments) ? (this.onEvent(n), !0) : !1
        }, clear: function () {
            if (this.isEmpty())return !1;
            var t = new ListEvent(this, ListEvent.KIND_CLEAR, this.toDatas());
            return this.beforeEvent(t) === !1 ? !1 : _iw(this, HashCollection, "clear") ? (this.onEvent(t), !0) : !1
        }, accept: function (t) {
            return this.filter && this.filter(t) === !1 ? !1 : !0
        }
    }, _kl(HashCollection, HashList), _6d(HashCollection.prototype, "listChangeDispatcher", {
        get: function () {
            return this._1l
        }
    });
    var DataModel = function () {
        _39(this, DataModel, arguments), this.selectionChangeDispatcher = new Dispatcher, this._selectionModel = new SelectionModel(this), this._selectionModel._1l = this.selectionChangeDispatcher, this.dataChangeDispatcher = new Dispatcher, this.dataChangeDispatcher.addListener({
            beforeEvent: this.beforeDataPropertyChange,
            onEvent: this.onDataPropertyChanged
        }, this), this.parentChangeDispatcher = new Dispatcher, this.childIndexChangeDispatcher = new Dispatcher, this.$roots = new HashList;
        var t = this;
        this.$roots.setIndex = function (e, i) {
            if (!t.$roots.contains(e))throw new Error("'" + e.id + "' not exist");
            var n = t.$roots._jz.indexOf(e);
            if (n == i)return !1;
            t.$roots._jz.splice(n, 1), t.$roots._jz.splice(i, 0, e), t._mzzIndexFlag = !0;
            var s = new ChildIndexChangeEvent(t, e, n, i);
            return t._2c(s), !0
        }
    };
    DataModel.prototype = {
        selectionModel: null,
        selectionChangeDispatcher: null,
        dataChangeDispatcher: null,
        parentChangeDispatcher: null,
        roots: null,
        _l0: function (t, e) {
            t.listener = this.dataChangeDispatcher, t.parent || this.$roots.add(t), this.onEvent(e)
        },
        _fm: function (t, e) {
            if (_iw(this, DataModel, "_fm", arguments)) {
                if (e instanceof Edge)e.disconnect(); else if (e instanceof Node) {
                    var i = e.getEdges();
                    this.remove(i)
                }
                var n = e.parent;
                return null == n ? this.$roots.remove(e) : (n.removeChild(e), n.__6f = !0), e.hasChildren() && this.remove(e.toChildren()), e.listener = null, !0
            }
            return !1
        },
        _61: function (t) {
            var e = t.source;
            this.contains(e) && (null == e.parent ? this.$roots.add(e) : null == t.oldValue && this.$roots.remove(e), this.parentChangeDispatcher.onEvent(t))
        },
        _2c: function (t) {
            this.childIndexChangeDispatcher.onEvent(t)
        },
        beforeDataPropertyChange: function (t) {
            return t instanceof ParentChangeEvent ? this.parentChangeDispatcher.beforeEvent(t) : !0
        },
        onDataPropertyChanged: function (t) {
            return t instanceof ParentChangeEvent ? (this._mzzIndexFlag = !0, t.source._mzzIndexFlag = !0, void this._61(t)) : void(t instanceof ChildIndexChangeEvent && (this._mzzIndexFlag = !0, t.source._mzzIndexFlag = !0, this._2c(t)))
        },
        toRoots: function () {
            return this.$roots.toDatas()
        },
        _gh: function (t) {
            var e, i = t._jk;
            e = i ? i._fe : this.$roots;
            var n = e.indexOf(t);
            if (0 > n)throw new Error("data '" + t + "' not exist in the box");
            return 0 == n ? i : e.getByIndex(n - 1)
        },
        _gi: function (t) {
            var e, i = t._jk;
            e = i ? i._fe : this.$roots;
            var n = e.indexOf(t);
            if (0 > n)throw new Error("data '" + t + "' not exist in the box");
            return n == e.length - 1 ? i ? this._gi(i) : null : e.getByIndex(n + 1)
        },
        forEachByDepthFirst: function (t, e, i) {
            return this.$roots.length ? _2s(this.$roots, t, e, i) : !1
        },
        forEachByDepthFirstReverse: function (t, e, i) {
            return this.$roots.length ? _$o(this.$roots, t, e, i) : !1
        },
        forEachByBreadthFirst: function (t, e) {
            return this.$roots.length ? _1k(this.$roots, t, e) : !1
        },
        forEachByBreadthFirstReverse: function (t, e) {
            return this.$roots.length ? _8(this.$roots, t, e) : !1
        },
        clear: function () {
            return _iw(this, DataModel, "clear") ? (this.$roots.clear(), this.selectionModel.clear(), !0) : !1
        }
    }, _kl(DataModel, HashCollection), _50(DataModel.prototype, {
        selectionModel: {
            get: function () {
                return this._selectionModel
            }
        }, roots: {
            get: function () {
                return this.$roots
            }
        }
    });
    var SelectionModel = function (t) {
        _39(this, SelectionModel), this.box = t, this._mxoxChangeListener = {
            onEvent: function (t) {
                ListEvent.KIND_REMOVE == t.kind ? null != t.data ? this.remove(t.data) : null != t.datas && this.remove(t.datas) : ListEvent.KIND_CLEAR == t.kind && this.clear()
            }
        }, this.box.listChangeDispatcher.addListener(this._mxoxChangeListener, this)
    };
    SelectionModel.prototype = {
        box: null, isSelected: function (t) {
            return this.containsById(t.id || t)
        }, select: function (t) {
            return this.add(t)
        }, unselect: function (t) {
            return this.remove(t)
        }, reverseSelect: function (t) {
            return this.contains(t) ? this.remove(t) : this.add(t)
        }, accept: function (t) {
            return this.box.contains(t)
        }
    }, _kl(SelectionModel, HashCollection);
    var css_supportClassList = null, css_styleSheet = null, css_prefix = null, css_pre = function () {
        if (!document.createElement)return function (t) {
            return t
        };
        var t = document.createElement("div"), e = t.style, i = {};
        return function (t) {
            if (i[t])return i[t];
            var n = css_mzamelCase(t);
            return void 0 !== e[n] || css_prefix && void 0 !== e[n = css_mzamelCase(css_prefix + n)] ? (i[t] = n, n) : t
        }
    }(), css_DefaultCSS = {};
    !function () {
        if (!document.head)return !1;
        for (var t = document.head, e = "Webkit Moz O ms Khtml".split(" "), i = 0; i < e.length; i++)if (void 0 !== t.style[e[i] + "Transform"]) {
            css_prefix = "-" + e[i].toLowerCase() + "-";
            break
        }
        var n = document.createElement("style");
        window.createPopup || n.appendChild(document.createTextNode("")), n.classList && (css_supportClassList = !0), n.type = "text/css", n.id = "qunee-styles", t.appendChild(n), css_styleSheet = n.sheet;
        var s, o;
        for (var r in css_DefaultCSS) {
            var a = css_DefaultCSS[r];
            s = r, o = "";
            for (var h in a)o += css_pre(h) + ":" + a[h] + ";\n";
            css_mhRule(s, o)
        }
    }();
    var _4i = function (t, e, i, n, s) {
        if (s) {
            var o = function (t) {
                o.handle.call(o.scope, t)
            };
            return o.scope = s, o.handle = i, t.addEventListener(e, o, n), o
        }
        return t.addEventListener(e, i, n), i
    }, _2n = function (t, e, i) {
        t.removeEventListener(e, i)
    }, _2o = function (t) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }, _21 = function (t) {
        t.stopPropagation ? t.stopPropagation() : t.cancelBubble || (t.cancelBubble = !0)
    }, _ek = function (t) {
        _2o(t), _21(t)
    };
    Defaults.DOUBLE_CLICK_INTERVAL_TIME = isTouchSupport ? 500 : 300, Defaults.LONG_PRESS_INTERVAL = isTouchSupport ? 1500 : 1e3;
    var EVENT_TYPES, MouseWheelName = "onmousewheel" in window ? "mousewheel" : "DOMMouseScroll";
    EVENT_TYPES = MouseWheelName + ",mousedown,mouseup,click,mousemove,keydown", isTouchSupport && (EVENT_TYPES += ",touchstart,touchmove,touchend,touchcancel"), EVENT_TYPES = EVENT_TYPES.split(","), DragSupport.prototype = {
        _mxl: function () {
            InteractionSupport._mzurrentInteractionSupport == this && (delete InteractionSupport._dragging, delete InteractionSupport._mzurrentInteractionSupport), this._1s(), delete this._90, this._mzj && (delete this._mzj.getData, delete this._mzj.getUI, delete this._mzj)
        }, _l2: null, _ij: function () {
            var t = this._lt;
            t && clearEventListenersSupport.call(this, t)
        }, destroy: function () {
            this._ij()
        }, _mzj: null, _1s: function () {
            this.__longPressTimer && (clearTimeout(this.__longPressTimer), this.__longPressTimer = null)
        }, _ea: function () {
            this.__mzancelClick = !0, this._1s(), this._ih(this._mzj, "startdrag"), this._mzh.clear()
        }, _mzh: null, _6s: function (t) {
            var e = this._90;
            this._90 = _fk(t), this._mzh.add(e, this._90, t)
        }, _kd: function (t) {
            this._6s(t), this._ih(t, "ondrag"), t.touches && t.touches.length > 1 && this._ih(t, "onpinch")
        }, _ii: function (t) {
            isTouchSupport || this._6s(t);
            var e = this._mzh.getCurrentSpeed();
            e && (t.vx = e.x, t.vy = e.y), this._ih(t, "enddrag"), this._mzh.clear()
        }, _e3: function (t) {
            this._mzj && (this._1s(), this._ih(t, "onrelease"), this._mzj = null, this._90 = null)
        }, _ih: function (t, e) {
            this._listener && this._listener[e] instanceof Function && this._listener[e].call(this._listener, t, this._l2 || this._lt)
        }
    };
    var InteractionSupport = function (t) {
        this._kz = t, _39(this, InteractionSupport, [t.canvasPanel])
    };
    InteractionSupport._mzurrentInteractionSupport = null, InteractionSupport.prototype = {
        _4g: function (t) {
            this._4e(function (e) {
                e.onElementRemoved instanceof Function && e.onElementRemoved(t, this._kz)
            })
        }, _7z: function () {
            this._4e(function (t) {
                t.onClear instanceof Function && t.onClear(this._kz)
            })
        }, _ij: function () {
            this._25 && this._2q(this._25), this._$p && this._2q(this._$p), this._mxl()
        }, _kz: null, _25: null, _$p: null, _6v: function (t) {
            return this._25 == t ? !1 : (this._25 && this._25.length && this._2q(this._25), void(this._25 = t))
        }, _9: function (t) {
            this._$p || (this._$p = []), this._$p.push(t)
        }, _5: function (t) {
            this._$p && 0 != this._$p.length && _kj(this._$p, t)
        }, _ih: function (t, e, i) {
            this._kz[e] instanceof Function && this._kz[e].call(this._kz, t, i), this._25 && this._ga(t, e, this._25, i), this._$p && this._ga(t, e, this._$p, i)
        }, _4e: function (t) {
            this._25 && _i1(this._25, t, this), this._$p && _i1(this._$p, t, this)
        }, _ga: function (t, e, i, n) {
            if (!_hy(i))return void this._9n(t, e, i, n);
            for (var s = 0; s < i.length; s++) {
                var o = i[s];
                this._9n(t, e, o, n)
            }
        }, _9n: function (t, e, i, n) {
            var s = i[e];
            s && s.call(i, t, this._kz, n)
        }, _3c: function (t) {
            t.destroy instanceof Function && t.destroy.call(t, this._kz)
        }, _2q: function (t) {
            if (!_hy(t))return void this._3c(t);
            for (var e = 0; e < t.length; e++) {
                var i = t[e];
                i && this._3c(i)
            }
        }
    }, _kl(InteractionSupport, DragSupport), DragPoints.prototype = {
        limitCount: 10,
        points: null,
        add: function (t, e, i) {
            var n = e.timeStamp - t.timeStamp || 1;
            i.interval = n;
            var s, o;
            if (!i.touches)return s = e.x - t.x, o = e.y - t.y, i.dx = s, i.dy = o, void this._ku(s, o, n);
            var r = i.touches.length;
            if (1 == r)s = i.touches[0].clientX - t.touches[0].clientX, o = i.touches[0].clientY - t.touches[0].clientY; else {
                for (var a, h, l, _ = [], u = [], d = 0, c = 0, f = 0, E = 0, g = 0, p = 0, v = 0, r = t.touches.length; r > v; v++) {
                    a = t.touches[v];
                    var T = a.clientX, m = a.clientY;
                    d += T, c += m, v && (g = Math.max(g, Math.sqrt((T - h) * (T - h) + (m - l) * (m - l)))), h = T, l = m, _.push({
                        x: T,
                        y: m
                    })
                }
                d /= r, c /= r;
                for (var v = 0, r = i.touches.length; r > v; v++) {
                    a = i.touches[v];
                    var T = a.clientX, m = a.clientY;
                    f += T, E += m, v && (p = Math.max(p, Math.sqrt((T - h) * (T - h) + (m - l) * (m - l)))), h = T, l = m, u.push({
                        x: T,
                        y: m
                    })
                }
                if (f /= r, E /= r, s = f - d, o = E - c, g && p) {
                    var y = p / g;
                    i.scale && t.scale && (y = i.scale / t.scale), i.center = {
                        x: f,
                        y: E,
                        clientX: f,
                        clientY: E
                    }, i.dScale = y, i.prev = t
                }
            }
            i.dx = s, i.dy = o, this._ku(s, o, n)
        },
        _ku: function (t, e, i) {
            var n = {interval: i, dx: t, dy: e};
            this.points.splice(0, 0, n), this.points.length > this.limitCount && this.points.pop()
        },
        getCurrentSpeed: function () {
            if (!this.points.length)return null;
            for (var t = 0, e = 0, i = 0, n = 0, s = this.points.length; s > n; n++) {
                var o = this.points[n], r = o.interval;
                if (r > 300)break;
                if (t += o.interval, e += o.dx, i += o.dy, t > 500)break
            }
            return 0 == t || 0 == e && 0 == i ? null : {x: e / t, y: i / t}
        },
        clear: function () {
            this.points = []
        }
    };
    var CURSOR_ZOOMIN, CURSOR_ZOOMOUT, CURSOR_GRAB, CURSOR_GRABBING;
    isWebkit ? (CURSOR_ZOOMIN = "-webkit-zoom-in", CURSOR_ZOOMOUT = "-webkit-zoom-out", CURSOR_GRAB = "-webkit-grab", CURSOR_GRABBING = "-webkit-grabbing") : isGecko ? (CURSOR_ZOOMIN = "-moz-zoom-in", CURSOR_ZOOMOUT = "-moz-zoom-out", CURSOR_GRAB = "-moz-grab", CURSOR_GRABBING = "-moz-grabbing") : (CURSOR_ZOOMIN = "crosshair", CURSOR_ZOOMOUT = "crosshair", CURSOR_GRAB = "default", CURSOR_GRABBING = "move");
    var CURSOR_POINTER = "pointer", CURSOR_DEFAULT = "default", CURSOR_ROTATE = "url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFVJREFUeNpi/P//PwMlgBGfAYyMIOn/jGQZANIMoskyAKYZGeAyiGgX4PIOSWGAzRBGUmMBw1CqGUBMlA1yA4gxhKhYwBnfpKQDqqREquRGYgBAgAEAD8h/4adTIzwAAAAASUVORK5CYII=) 8 8,crosshair", PI = Math.PI, pow = Math.pow, sin = Math.sin, BACK_CONST = 1.70158, Easing = {
        swing: function (t) {
            return -Math.cos(t * PI) / 2 + .5
        }, easeNone: function (t) {
            return t
        }, easeIn: function (t) {
            return t * t
        }, easeOut: function (t) {
            return (2 - t) * t
        }, easeBoth: function (t) {
            return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - --t * (t - 2))
        }, easeInStrong: function (t) {
            return t * t * t * t
        }, easeOutStrong: function (t) {
            return 1 - --t * t * t * t
        }, easeBothStrong: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t)
        }, elasticIn: function (t) {
            var e = .3, i = e / 4;
            return 0 === t || 1 === t ? t : -(pow(2, 10 * (t -= 1)) * sin(2 * (t - i) * PI / e))
        }, elasticOut: function (t) {
            var e = .3, i = e / 4;
            return 0 === t || 1 === t ? t : pow(2, -10 * t) * sin(2 * (t - i) * PI / e) + 1
        }, elasticBoth: function (t) {
            var e = .45, i = e / 4;
            return 0 === t || 2 === (t *= 2) ? t : 1 > t ? -.5 * pow(2, 10 * (t -= 1)) * sin(2 * (t - i) * PI / e) : pow(2, -10 * (t -= 1)) * sin(2 * (t - i) * PI / e) * .5 + 1
        }, backIn: function (t) {
            return 1 === t && (t -= .001), t * t * ((BACK_CONST + 1) * t - BACK_CONST)
        }, backOut: function (t) {
            return (t -= 1) * t * ((BACK_CONST + 1) * t + BACK_CONST) + 1
        }, backBoth: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * (((BACK_CONST *= 1.525) + 1) * t - BACK_CONST) : .5 * ((t -= 2) * t * (((BACK_CONST *= 1.525) + 1) * t + BACK_CONST) + 2)
        }, bounceIn: function (t) {
            return 1 - Easing.bounceOut(1 - t)
        }, bounceOut: function (t) {
            var e, i = 7.5625;
            return e = 1 / 2.75 > t ? i * t * t : 2 / 2.75 > t ? i * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? i * (t -= 2.25 / 2.75) * t + .9375 : i * (t -= 2.625 / 2.75) * t + .984375
        }, bounceBoth: function (t) {
            return .5 > t ? .5 * Easing.bounceIn(2 * t) : .5 * Easing.bounceOut(2 * t - 1) + .5
        }
    }, FrameTimer = function (t) {
        this._j5 = t
    };
    FrameTimer.prototype = {
        _j5: null, _lc: function (t) {
            var e = Date.now();
            this._lo();
            var i = this;
            this._requestID = requestAnimationFrame(function n() {
                var s = Date.now(), o = s - e;
                return !o || i._j5 && i._j5(o) !== !1 ? (e = s, void(i._requestID = requestAnimationFrame(n))) : (i._lo(), void(t instanceof Function && t.call()))
            })
        }, _lo: function () {
            return this._requestID ? (window.cancelAnimationFrame(this._requestID), void delete this._requestID) : !1
        }, _f2: function () {
            return null != this._requestID
        }
    };
    var FrameAnimation = function (t, e, i, n) {
        this._onStep = t, this._l2 = e || this, this._3n = n, i && i > 0 && (this._j2 = i)
    };
    FrameAnimation.prototype = {
        _j2: 1e3, _3n: null, _f5: 0, _lo: function () {
            return this._f5 = 0, this._dd = 0, _iw(this, FrameAnimation, "_lo")
        }, _dd: 0, _j5: function (t) {
            if (this._f5 += t, this._f5 >= this._j2)return this._onStep.call(this._l2, 1, (1 - this._dd) * this._j2, t, this._j2), !1;
            var e = this._f5 / this._j2;
            return this._3n && (e = this._3n(e)), this._onStep.call(this._l2, e, (e - this._dd) * this._j2, t, this._j2) === !1 ? !1 : void(this._dd = e)
        }
    }, _kl(FrameAnimation, FrameTimer);
    var ON_AJAX_ERROR = function (t) {
        _kw(t)
    }, Q = {
        version: "0.0",
        extend: _kl,
        doSuperConstructor: _39,
        doSuper: _iw,
        createFunction: _7k,
        setClass: _ha,
        appendClass: _mxu,
        removeClass: _mxw,
        forEach: _i1,
        forEachReverse: _7x,
        isNumber: _hc,
        isString: _hd,
        isBoolean: _f8,
        isArray: _hy,
        eventPreventDefault: _2o,
        eventStopPropagation: _21,
        stopEvent: _ek,
        callLater: _f7,
        nextFrame: _ec,
        forEachChild: _98,
        forEachByDepthFirst: _2s,
        forEachByDepthFirstReverse: _$o,
        forEachByBreadthFirst: _1k,
        randomInt: _fc,
        randomBool: _df,
        randomColor: _mz0,
        addEventListener: _4i,
        getFirstElementChildByTagName: getFirstElementChildByTagName
    };
    Q.isTouchSupport = isTouchSupport, Q.isIOS = isIOS, Q.intersectsPoint = intersectsPoint, Q.containsRect = containsRect, Q.Rect = Rect, Q.Size = Size, Q.Point = Point, Q.Insets = Insets, Q.Event = Event, Q.PropertyChangeEvent = PropertyChangeEvent, Q.ListEvent = ListEvent, Q.Handler = Handler, Q.Dispatcher = Dispatcher, Q.Position = Position, Q.Data = Data, Q.SelectionModel = SelectionModel, Q.DataModel = DataModel, Q.IListener = IListener, Q.loadURL = loadURL, Q.loadXML = loadXML, Q.loadJSON = loadJSON, Q.isMetaKey = isMetaKey, Q.calculateDistance = calculateDistance, Q.HashList = HashList, Q.DragSupport = DragSupport, Q.alert = function (t) {
        alert(t)
    }, Q.prompt = function (t, e, i, n) {
        var s = prompt(t, e);
        return s != e && i ? i.call(n, s) : s
    }, Q.confirm = function (t, e, i) {
        var n = confirm(t);
        return n && e ? e.call(i) : n
    }, Q.addCSSRule = css_mhRule;
    var Consts = {
        IMAGE_ADJUST_FLIP: "flip",
        IMAGE_ADJUST_MIRROR: "mirror",
        SELECTION_TYPE_BORDER_RECT: "border.rect",
        SELECTION_TYPE_BORDER: "border",
        SELECTION_TYPE_SHADOW: "shadow",
        NS_SVG: "http://www.w3.org/2000/svg",
        PROPERTY_TYPE_ACCESSOR: 0,
        PROPERTY_TYPE_STYLE: 1,
        PROPERTY_TYPE_CLIENT: 2,
        EDGE_TYPE_DEFAULT: null,
        EDGE_TYPE_ELBOW: "elbow",
        EDGE_TYPE_ELBOW_HORIZONTAL: "elbow.H",
        EDGE_TYPE_ELBOW_VERTICAL: "elbow.V",
        EDGE_TYPE_ORTHOGONAL: "orthogonal",
        EDGE_TYPE_ORTHOGONAL_HORIZONTAL: "orthogonal.H",
        EDGE_TYPE_ORTHOGONAL_VERTICAL: "orthogonal.V",
        EDGE_TYPE_HORIZONTAL_VERTICAL: "orthogonal.H.V",
        EDGE_TYPE_VERTICAL_HORIZONTAL: "orthogonal.V.H",
        EDGE_TYPE_EXTEND_TOP: "extend.top",
        EDGE_TYPE_EXTEND_LEFT: "extend.left",
        EDGE_TYPE_EXTEND_BOTTOM: "extend.bottom",
        EDGE_TYPE_EXTEND_RIGHT: "extend.right",
        EDGE_TYPE_ZIGZAG: "zigzag",
        EDGE_CORNER_NONE: "none",
        EDGE_CORNER_ROUND: "round",
        EDGE_CORNER_BEVEL: "bevel",
        GROUP_TYPE_RECT: "rect",
        GROUP_TYPE_CIRCLE: "circle",
        GROUP_TYPE_ELLIPSE: "ELLIPSE",
        SHAPE_CIRCLE: "oval",
        SHAPE_RECT: "rect",
        SHAPE_ROUNDRECT: "roundrect",
        SHAPE_STAR: "star",
        SHAPE_TRIANGLE: "triangle",
        SHAPE_HEXAGON: "hexagon",
        SHAPE_PENTAGON: "pentagon",
        SHAPE_TRAPEZIUM: "trapezium",
        SHAPE_RHOMBUS: "rhombus",
        SHAPE_PARALLELOGRAM: "parallelogram",
        SHAPE_HEART: "heart",
        SHAPE_DIAMOND: "diamond",
        SHAPE_CROSS: "cross",
        SHAPE_ARROW_STANDARD: "arrow.standard",
        SHAPE_ARROW_1: "arrow.1",
        SHAPE_ARROW_2: "arrow.2",
        SHAPE_ARROW_3: "arrow.3",
        SHAPE_ARROW_4: "arrow.4",
        SHAPE_ARROW_5: "arrow.5",
        SHAPE_ARROW_6: "arrow.6",
        SHAPE_ARROW_7: "arrow.7",
        SHAPE_ARROW_8: "arrow.8",
        SHAPE_ARROW_OPEN: "arrow.open"
    };
    Consts.LINE_CAP_TYPE_BUTT = "butt", Consts.LINE_CAP_TYPE_ROUND = "round", Consts.LINE_CAP_TYPE_SQUARE = "square", Consts.LINE_JOIN_TYPE_BEVEL = "bevel", Consts.LINE_JOIN_TYPE_ROUND = "round", Consts.LINE_JOIN_TYPE_MITER = "miter", Defaults.SELECTION_TYPE = Consts.SELECTION_TYPE_SHADOW, Defaults.SELECTION_TOLERANCE = 3, Defaults.SELECTION_BORDER = 2, Defaults.SELECTION_SHADOW_BLUR = 7, Defaults.SELECTION_COLOR = _hs(3422561023), Defaults.SELECTION_TYPE = Consts.SELECTION_TYPE_SHADOW, Defaults.BORDER_RADIUS = 10, Defaults.POINTER_WIDTH = 10, Defaults.DOUBLE_BUFFER = void 0, Defaults.ARROW_SIZE = 10, Defaults.IMAGE_MAX_SIZE = 200, Defaults.LINE_HEIGHT = 1.2;
    var devicePixelRatio2 = window.devicePixelRatio || 1;
    1 > devicePixelRatio2 && (devicePixelRatio2 = 1);
    var _di;
    Q.createCanvas = _9r;
    var calculateDistanceSquare = function (t, e, i, n) {
        var s = t - i, o = e - n;
        return s * s + o * o
    };
    Circle.prototype = {
        equals: function (t) {
            return this.cx == t.cx && this.cy == t.cy && this.r == t.r
        }
    }, Circle._mzreateCircle = function (t, e, i) {
        if (!i)return circleByTwoPoints(t, e);
        var n = calculateDistanceSquare(t.x, t.y, e.x, e.y), s = calculateDistanceSquare(t.x, t.y, i.x, i.y), o = calculateDistanceSquare(i.x, i.y, e.x, e.y);
        if (n + DISTANCE_TOLERANCE >= s + o)return circleByTwoPoints(t, e, 0, i);
        if (s + DISTANCE_TOLERANCE >= n + o)return circleByTwoPoints(t, i, 0, e);
        if (o + DISTANCE_TOLERANCE >= n + s)return circleByTwoPoints(e, i, 0, t);
        var r;
        Math.abs(i.y - e.y) < 1e-4 && (r = t, t = e, e = r), r = i.x * (t.y - e.y) + t.x * (e.y - i.y) + e.x * (-t.y + i.y);
        var a = (i.x * i.x * (t.y - e.y) + (t.x * t.x + (t.y - e.y) * (t.y - i.y)) * (e.y - i.y) + e.x * e.x * (-t.y + i.y)) / (2 * r), h = (e.y + i.y) / 2 - (i.x - e.x) / (i.y - e.y) * (a - (e.x + i.x) / 2);
        return new Circle(a, h, calculateDistance(a, h, t.x, t.y), t, e, i)
    };
    var DISTANCE_TOLERANCE = .01, pathUtils = {
        _mxa: function (t, e, i, n, s) {
            var o = 0, r = 0, a = e._j7;
            if (i = i || 0, void 0 === t.x) {
                var h = t.horizontalPosition, l = t.verticalPosition, _ = !0;
                switch (h) {
                    case RIGHT:
                        _ = !1;
                        break;
                    case CENTER:
                        o += a / 2
                }
                switch (l) {
                    case TOP:
                        r -= i / 2;
                        break;
                    case BOTTOM:
                        r += i / 2
                }
            } else o = t.x, r = t.y, Math.abs(o) > 0 && Math.abs(o) < 1 && (o *= a);
            s && null != n && (r += n.y, o += Math.abs(n.x) < 1 ? n.x * a : n.x);
            var u = calculatePointByLength.call(e, o, r, _);
            return u ? (s || null == n || u.offset(n), u) : {x: 0, y: 0}
        }, _ln: function (t, e) {
            var i = e.type, n = e.points;
            switch (i) {
                case ARC_TO:
                    t.arcTo(n[0], n[1], n[2], n[3], e._r);
                    break;
                case MOVE_TO:
                    t.moveTo(n[0], n[1]);
                    break;
                case LINE_TO:
                    t.lineTo(n[0], n[1]);
                    break;
                case QUAD_TO:
                    t.quadraticCurveTo(n[0], n[1], n[2], n[3]);
                    break;
                case CURVE_TO:
                    t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
                    break;
                case CLOSE:
                    t.closePath()
            }
        }, _5m: function (t, e, i, n) {
            var s = e.type;
            if (s != MOVE_TO && s != CLOSE) {
                var o = i.lastPoint, r = e.points;
                switch (i.type == MOVE_TO && t.add(o.x, o.y), s) {
                    case ARC_TO:
                        caculateArcLength(e, o.x, o.y, r[0], r[1], r[2], r[3], r[4]), t.add(r[0], r[1]), t.add(e._p1x, e._p1y), t.add(e._p2x, e._p2y), e._mxoundaryPoint1 && t.add(e._mxoundaryPoint1.x, e._mxoundaryPoint1.y), e._mxoundaryPoint2 && t.add(e._mxoundaryPoint2.x, e._mxoundaryPoint2.y);
                        break;
                    case LINE_TO:
                        t.add(r[0], r[1]);
                        break;
                    case QUAD_TO:
                        calculateQuadraticCurveBounds([o.x, o.y].concat(r), t);
                        break;
                    case CURVE_TO:
                        calculateBezierCurveBounds([o.x, o.y].concat(r), t);
                        break;
                    case CLOSE:
                        n && t.add(n.points[0], n.points[1])
                }
            }
        }, _5o: function (t, e, i) {
            var n = t.type;
            if (n == MOVE_TO)return 0;
            var s = e.lastPoint, o = t.points;
            switch (n == CURVE_TO && 4 == o.length && (n = QUAD_TO), n) {
                case LINE_TO:
                    return calculateDistance(o[0], o[1], s.x, s.y);
                case ARC_TO:
                    return t._j7;
                case QUAD_TO:
                    var r = caculateQuadraticCurveLengthFunction([s.x, s.y].concat(o));
                    return t._lf = r, r(1);
                case CURVE_TO:
                    var r = caculateBezierCurveLengthFunction([s.x, s.y].concat(o));
                    return t._lf = r, r(1) || caculateBezierCurveLength2([s.x, s.y].concat(o));
                case CLOSE:
                    if (s && i)return t.points = i.points, calculateDistance(i.points[0], i.points[1], s.x, s.y)
            }
            return 0
        }
    }, REG_BASE64_IMAGE = /^data:image\/(\w+);base64,/i, REG_GIF = /^gif/i, REG_SVG = /^svg/i, IMAGE_TYPE_DEFAULT = 10, IMAGE_TYPE_SVG = 11, IMAGE_TYPE_GIF = 12, IMAGE_TYPE_DRAWABLE = 20, IMAGE_TYPE_SHAPE = 30;
    Defaults.IMAGE_WIDTH = 50, Defaults.IMAGE_HEIGHT = 30, Defaults.MAX_CACHE_PIXELS = 1e6;
    var IMAGE_STATUS_LOADING = 1, IMAGE_STATUS_LOADED = 2, IMAGE_STATUS_ERROR = 3;
    QImage.prototype = {
        _jo: 0,
        _6f: !0,
        _ld: null,
        _js: null,
        _lq: null,
        _lm: null,
        _mwd: void 0,
        _mw0: void 0,
        _6p: function () {
            return this._jo == IMAGE_STATUS_LOADING
        },
        getBounds: function (t) {
            return this._lm == IMAGE_TYPE_SHAPE ? this._lq.getBounds(t) : (this._6f && this._fr(), this)
        },
        validate: function () {
            this._6f && this._fr()
        },
        _fr: function () {
            if (this._6f = !1, this._lm == IMAGE_TYPE_SHAPE)return this._lq.validate(), void this.setByRect(this._lq.bounds);
            if (this._lm == IMAGE_TYPE_DRAWABLE)return void this._mw1();
            if (this._jo != IMAGE_STATUS_LOADING)try {
                this._dw()
            } catch (t) {
                this._jo = IMAGE_STATUS_ERROR, Q.error(t)
            }
        },
        _5c: function () {
            this._du(), this._dispatcher.clear(), delete this._dispatcher
        },
        _j1: function (t) {
            this._ld && this._ld.parentNode && this._ld.parentNode.removeChild(this._ld), this._jo = IMAGE_STATUS_ERROR, Q.error("Image load error - " + this._lq), this._pixels = null, this._js = null, this._ld = null, t !== !1 && this._5c()
        },
        _dw: function () {
            var t = this._lq;
            if (this._jo = IMAGE_STATUS_LOADING, this._dispatcher = new Dispatcher, this._lm == IMAGE_TYPE_GIF) {
                for (var e in GIFImageSupport)this[e] = GIFImageSupport[e];
                return void GifLoader(this._lq, this, this._mzd, this._j1, this._e5)
            }
            this._ld || (this._ld = document.createElement("img"), isIE && (this._ld.style.visibility = "hidden", document.body.appendChild(this._ld))), this._ld.src = t, this._ld.width && (this.width = this._ld.width, this.height = this._ld.height), this._ld.onload = isIE ? function (t) {
                setTimeout(this._81.bind(this, t), 100)
            }.bind(this) : this._81.bind(this), this._ld.onerror = this._j1.bind(this)
        },
        _81: function () {
            this._jo = IMAGE_STATUS_LOADED;
            var t = this._ld.width, e = this._ld.height;
            if (this._ld.parentNode && this._ld.parentNode.removeChild(this._ld), !t || !e)return void this._j1();
            this.width = t, this.height = e;
            var i = this._dp();
            i.width = t, i.height = e, i.g.drawImage(this._ld, 0, 0, t, e), this._pixels = isIE && this._lm == IMAGE_TYPE_SVG ? null : toPixelsFromCanvas(i), this._5c()
        },
        _mw1: function () {
            var t = this._lq;
            if (!(t.draw instanceof Function))return void this._j1(!1);
            if (t.cacheable === !1 && t.width && t.height)return this.width = t.width, void(this.height = t.height);
            var e = t.width || Defaults.IMAGE_MAX_SIZE, i = t.height || Defaults.IMAGE_MAX_SIZE, n = this._dp();
            n.width = e, n.height = i;
            var s = n.g;
            t.draw(s);
            var o = s.getImageData(0, 0, e, i), r = toPixelsFromCanvasData(o.data, e, i);
            this.x = r._x, this.y = r._y, this.width = r._width, this.height = r._height, n.width = this.width, n.height = this.height, s.putImageData(o, -this.x, -this.y), this._pixels = r
        },
        _dp: function () {
            return this._js || (this._js = _9r())
        },
        _6x: function (t, e, i, n, s, o) {
            e.save(), e.rect(0, 0, n, s), e.fillStyle = o || "#CCC", e.fill(), e.clip(), e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = "#888";
            var r = 6 * (e.canvas.ratio || 1);
            e.font = "normal " + r + "px Verdana,helvetica,arial,sans-serif", e.strokeStyle = "#FFF", e.lineWidth = 1, e.strokeText(t, n / 2 + .5, s / 2 + .5), e.strokeStyle = "#000", e.strokeText(t, n / 2 - .5, s / 2 - .5), e.fillText(t, n / 2, s / 2), e.restore()
        },
        draw: function (t, e, i, n, s, o) {
            if (this.width && this.height) {
                e = e || 1, n = n || 1, s = s || 1;
                var r = this.width * n, a = this.height * s;
                if (o && i.shadowColor && (t.shadowColor = i.shadowColor, t.shadowBlur = (i.shadowBlur || 0) * e, t.shadowOffsetX = (i.shadowOffsetX || 0) * e, t.shadowOffsetY = (i.shadowOffsetY || 0) * e), this._jo == IMAGE_STATUS_LOADING)return this._6x("Loading...", t, e, r, a, i.renderColor);
                if (this._jo == IMAGE_STATUS_ERROR)return this._6x("Error...", t, e, r, a, i.renderColor);
                if (this._lm == IMAGE_TYPE_SHAPE)return t.scale(n, s), void this._lq.draw(t, e, i);
                var h = this._fx(e, n, s);
                return h ? ((this.x || this.y) && t.translate(this.x * n, this.y * s), t.scale(n / h.scale, s / h.scale), void h._ln(t, i.renderColor, i.renderColorBlendMode)) : void this._ja(t, e, n, s, this.width * n, this.height * s, i)
            }
        },
        _ja: function (t, e, i, n, s, o, r) {
            if (this._lm == IMAGE_TYPE_DRAWABLE)return 1 != i && 1 != n && t.scale(i, n), void this._lq.draw(t, r);
            if (this._ld) {
                if (!isFirefox)return void t.drawImage(this._ld, 0, 0, s, o);
                var i = e * s / this.width, n = e * o / this.height;
                t.scale(1 / i, 1 / n), t.drawImage(this._ld, 0, 0, s * i, o * n)
            }
        },
        _jj: null,
        _fx: function (t, e, i) {
            if (this._lm == IMAGE_TYPE_DRAWABLE && this._lq.cacheable === !1)return null;
            if (this._lm == IMAGE_TYPE_DEFAULT || (t *= Math.max(e, i)) <= 1)return this._defaultCache || (this._defaultCache = this._g0(this._js || this._ld, 1)), this._defaultCache;
            var n = this._jj.maxScale || 0;
            if (t = Math.ceil(t), n >= t) {
                for (var s = t, o = this._jj[s]; !o && ++s <= n;)o = this._jj[s];
                if (o)return o
            }
            t % 2 && t++;
            var r = this.width * t, a = this.height * t;
            if (r * a > Defaults.MAX_CACHE_PIXELS)return null;
            var h = _9r(r, a);
            return (this.x || this.y) && h.g.translate(-this.x * t, -this.y * t), this._ja(h.g, 1, t, t, r, a), this._g0(h, t)
        },
        _g0: function (t, e) {
            var i = new BufferedImage(t, e);
            return this._jj[e] = i, this._jj.maxScale = e, i
        },
        hitTest: function (t, e, i) {
            if (this._lm == IMAGE_TYPE_SHAPE)return this._lq.hitTest.apply(this._lq, arguments);
            if (!(this._pixels || this._ld && this._ld._pixels))return !0;
            var n = this._pixels || this._ld._pixels;
            return n._ip(t, e, i)
        },
        _du: function () {
            this._dispatcher && this._dispatcher.onEvent(new Event(this, "image", "load", this._ld))
        },
        _mwi: function (t, e) {
            this._dispatcher && this._dispatcher.addListener(t, e)
        },
        _6j: function (t, e) {
            this._dispatcher && this._dispatcher.removeListener(t, e)
        },
        _mz2: function (t) {
            this._jj = {}, (t || this.width * this.height > 1e5) && (this._ld = null, this._js = null)
        }
    }, _kl(QImage, Rect);
    var IMAGE_CACHE = {};
    Q.drawImage = _ep, Q.registerImage = _8e, Q.hasImage = _h4, Q.getAllImages = function () {
        var t = [];
        for (var e in IMAGE_CACHE)t.push(e);
        return t
    };
    var Gradient = function (t, e, i, n, s, o) {
        this.type = t, this.colors = e, this.positions = i, this.angle = n || 0, this.tx = s || 0, this.ty = o || 0
    };
    Consts.GRADIENT_TYPE_RADIAL = "r", Consts.GRADIENT_TYPE_LINEAR = "l", Gradient.prototype = {
        type: null,
        colors: null,
        positions: null,
        angle: null,
        tx: 0,
        ty: 0,
        position: Position.CENTER_MIDDLE,
        isEmpty: function () {
            return null == this.colors || 0 == this.colors.length
        },
        _6e: function () {
            var t = this.colors.length;
            if (1 == t)return [0];
            for (var e = [], i = 1 / (t - 1), n = 0; t > n; n++)e.push(i * n);
            return this.positions || (this.positions = e), e
        },
        generatorGradient: function (t) {
            if (null == this.colors || 0 == this.colors.length)return null;
            var e, i = getTempG();
            if (this.type == Consts.GRADIENT_TYPE_LINEAR) {
                var n = this.angle;
                n > Math.PI && (n -= Math.PI);
                var s;
                if (n <= Math.PI / 2) {
                    var o = Math.atan2(t.height, t.width), r = Math.sqrt(t.width * t.width + t.height * t.height), a = o - n;
                    s = Math.cos(a) * r
                } else {
                    var o = Math.atan2(t.width, t.height), r = Math.sqrt(t.width * t.width + t.height * t.height), a = o - (n - Math.PI / 2);
                    s = Math.cos(a) * r
                }
                var h = s / 2, l = h * Math.cos(n), _ = h * Math.sin(n), u = t.x + t.width / 2 - l, d = t.y + t.height / 2 - _, c = t.x + t.width / 2 + l, f = t.y + t.height / 2 + _;
                e = i.createLinearGradient(u, d, c, f)
            } else {
                if (!(this.type = Consts.GRADIENT_TYPE_RADIAL))return null;
                var E = _mxa(this.position, t.width, t.height);
                E.x += t.x, E.y += t.y, this.tx && (E.x += Math.abs(this.tx) < 1 ? t.width * this.tx : this.tx), this.ty && (E.y += Math.abs(this.ty) < 1 ? t.height * this.ty : this.ty);
                var g = calculateDistance(E.x, E.y, t.x, t.y);
                g = Math.max(g, calculateDistance(E.x, E.y, t.x, t.y + t.height)), g = Math.max(g, calculateDistance(E.x, E.y, t.x + t.width, t.y + t.height)), g = Math.max(g, calculateDistance(E.x, E.y, t.x + t.width, t.y)), e = i.createRadialGradient(E.x, E.y, 0, E.x, E.y, g)
            }
            var p = this.colors, v = this.positions;
            v && v.length == p.length || (v = this._6e());
            for (var T = 0, m = p.length; m > T; T++)e.addColorStop(v[T], p[T]);
            return e
        }
    };
    var LINEAR_GRADIENT_VERTICAL = new Gradient(Consts.GRADIENT_TYPE_LINEAR, [_hs(2332033023), _hs(1154272460), _hs(1154272460), _hs(1442840575)], [.1, .3, .7, .9], Math.PI / 2), LINEAR_GRADIENT_HORIZONTAL = new Gradient(Consts.GRADIENT_TYPE_LINEAR, [_hs(2332033023), _hs(1154272460), _hs(1154272460), _hs(1442840575)], [.1, .3, .7, .9], 0), LINEAR_GRADIENT_HORIZONTAL_2 = new Gradient(Consts.GRADIENT_TYPE_LINEAR, [_hs(1154272460), _hs(1442840575)], [.1, .9], 0), RADIAL_GRADIENT = new Gradient(Consts.GRADIENT_TYPE_RADIAL, [_hs(2298478591), _hs(1156509422), _hs(1720223880), _hs(1147561574)], [.1, .3, .7, .9], 0, -.3, -.3), rainbowColors = [_hs(0), _hs(4294901760), _hs(4294967040), _hs(4278255360), _hs(4278250239), _hs(4278190992), _hs(4294901958), _hs(0)], rainbowPositions = [0, .12, .28, .45, .6, .75, .8, 1], RAINBOW_LINEAR_GRADIENT = new Gradient(Consts.GRADIENT_TYPE_LINEAR, rainbowColors, rainbowPositions), RAINBOW_LINEAR_GRADIENT_VERTICAL = new Gradient(Consts.GRADIENT_TYPE_LINEAR, rainbowColors, rainbowPositions, Math.PI / 2), RAINBOW_RADIAL_GRADIENT = new Gradient(Consts.GRADIENT_TYPE_RADIAL, rainbowColors, rainbowPositions);
    Gradient.LINEAR_GRADIENT_VERTICAL = LINEAR_GRADIENT_VERTICAL, Gradient.LINEAR_GRADIENT_HORIZONTAL = LINEAR_GRADIENT_HORIZONTAL, Gradient.RADIAL_GRADIENT = RADIAL_GRADIENT, Gradient.RAINBOW_LINEAR_GRADIENT = RAINBOW_LINEAR_GRADIENT, Gradient.RAINBOW_LINEAR_GRADIENT_VERTICAL = RAINBOW_LINEAR_GRADIENT_VERTICAL, Gradient.RAINBOW_RADIAL_GRADIENT = RAINBOW_RADIAL_GRADIENT;
    var MOVE_TO = "m", LINE_TO = "l", QUAD_TO = "q", CURVE_TO = "c", ARC_TO = "a", CLOSE = "z";
    Consts.SEGMENT_MOVE_TO = MOVE_TO, Consts.SEGMENT_LINE_TO = LINE_TO, Consts.SEGMENT_QUAD_TO = QUAD_TO, Consts.SEGMENT_CURVE_TO = CURVE_TO, Consts.SEGMENT_ARC_TO = ARC_TO, Consts.SEGMENT_CLOSE = CLOSE;
    var PathSegment = function (t, e) {
        this.id = ++idIndex, _hy(t) ? this.points = t : (this.type = t, this.points = e)
    };
    PathSegment.prototype = {
        toJSON: function () {
            var t = {type: this.type, points: this.points};
            return this.invalidTerminal && (t.invalidTerminal = !0), t
        }, parseJSON: function (t) {
            this.type = t.type, this.points = t.points, this.invalidTerminal = t.invalidTerminal
        }, points: null, type: LINE_TO, clone: function () {
            return new PathSegment(this.type, _db(this.points))
        }, move: function (t, e) {
            if (this.points)for (var i = 0, n = this.points.length; n > i; i++) {
                var s = this.points[i];
                Q.isNumber(s) && (this.points[i] += i % 2 == 0 ? t : e)
            }
        }
    }, _50(PathSegment.prototype, {
        lastPoint: {
            get: function () {
                return this.type == ARC_TO ? {x: this._p2x, y: this._p2y} : {
                    x: this.points[this.points.length - 2],
                    y: this.points[this.points.length - 1]
                }
            }
        }, firstPoint: {
            get: function () {
                return {x: this.points[0], y: this.points[1]}
            }
        }
    }), Q.PathSegment = PathSegment;
    var ALPHA_TOLERANCE = 0, Path = function (t) {
        this.bounds = new Rect, this._fg = t || []
    };
    Path.prototype = {
        toJSON: function () {
            var t = [];
            return this._fg.forEach(function (e) {
                t.push(e.toJSON())
            }), t
        }, parseJSON: function (t) {
            var e = this._fg;
            t.forEach(function (t) {
                e.push(new PathSegment(t.type, t.points))
            })
        }, clear: function () {
            this._fg.length = 0, this.bounds.clear(), this._j7 = 0, this._6f = !0
        }, _dn: !0, _6h: function (t, e) {
            this._dn && 0 === this._fg.length && t != MOVE_TO && this._fg.push(new PathSegment(MOVE_TO, [0, 0])), this._fg.push(new PathSegment(t, e)), this._6f = !0
        }, add: function (t) {
            this._fg.push(t), this._6f = !0
        }, removePathSegment: function (t) {
            return t >= this._fg.length ? !1 : (this._fg.splice(t, 1), void(this._6f = !0))
        }, moveTo: function (t, e) {
            this._6h(MOVE_TO, [t, e])
        }, lineTo: function (t, e) {
            this._6h(LINE_TO, [t, e])
        }, quadTo: function (t, e, i, n) {
            this._6h(QUAD_TO, [t, e, i, n])
        }, curveTo: function (t, e, i, n, s, o) {
            this._6h(CURVE_TO, [t, e, i, n, s, o])
        }, arcTo: function (t, e, i, n, s) {
            this._6h(ARC_TO, [t, e, i, n, s])
        }, closePath: function () {
            this._6h(CLOSE)
        }, _83: function (t, e, i, n, s) {
            if (n.selectionColor) {
                if (i == Consts.SELECTION_TYPE_SHADOW) {
                    if (!n.selectionShadowBlur)return;
                    return t.shadowColor = n.selectionColor, t.shadowBlur = n.selectionShadowBlur * e, t.shadowOffsetX = (n.selectionShadowOffsetX || 0) * e, void(t.shadowOffsetY = (n.selectionShadowOffsetY || 0) * e)
                }
                if (i == Consts.SELECTION_TYPE_BORDER) {
                    if (!n.selectionBorder)return;
                    t.strokeStyle = n.selectionColor, t.lineWidth = n.selectionBorder + (s.lineWidth || 0), this._ln(t), t.stroke()
                }
            }
        }, _6f: !0, _fg: null, _j7: 0, lineCap: "butt", lineJoin: "round", draw: function (t, e, i, n, s) {
            t.lineCap = i.lineCap || this.lineCap, t.lineJoin = i.lineJoin || this.lineJoin, n && (s || (s = i), this._83(t, e, s.selectionType, s, i)), i.outlineStyle && (this._ln(t), t.lineWidth = i.lineWidth + 2 * (i.outline || 0), t.strokeStyle = i.outlineStyle, t.stroke()), t.lineWidth = 0, this._ln(t), i.fillColor && (t.fillStyle = i.renderColor || i.fillColor, t.fill()), i.fillGradient && (t.fillStyle = i._fillGradient || i.fillGradient, t.fill()), i.lineWidth && (t.lineWidth = i.lineWidth, i.lineDash && (t.lineDash = i.lineDash, t.lineDashOffset = i.lineDashOffset), t.strokeStyle = i.renderColor || i.strokeStyle, t.stroke(), t.lineDash = [])
        }, _ln: function (t) {
            t.beginPath();
            for (var e, i, n = 0, s = this._fg.length; s > n; n++)e = this._fg[n], pathUtils._ln(t, e, i), i = e
        }, invalidate: function () {
            this._6f = !0
        }, validate: function () {
            if (this._6f = !1, this.bounds.clear(), this._j7 = 0, 0 != this._fg.length)for (var t, e, i = this._fg, n = 1, s = i[0], o = s, r = i.length; r > n; n++)t = i[n], t.type == MOVE_TO ? o = t : (pathUtils._5m(this.bounds, t, s, o), e = pathUtils._5o(t, s, o), t._j7 = e, this._j7 += e), s = t
        }, getBounds: function (t, e) {
            if (this._6f && this.validate(), e = e || new Rect, t) {
                var i = t / 2;
                e.set(this.bounds.x - i, this.bounds.y - i, this.bounds.width + t, this.bounds.height + t)
            } else e.set(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);
            return e
        }, hitTest: function (t, e, i, n, s, o) {
            return pathHitTest.call(this, t, e, i, n, s, o)
        }, toSegments: function () {
            return [].concat(this._fg)
        }, generator: function (t, e, i, n, s) {
            return PathGenerator.call(this, t, e, i, n, s)
        }, getLocation: function (t, e) {
            return calculatePointByLength.call(this, t, e || 0)
        }
    }, _50(Path.prototype, {
        segments: {
            get: function () {
                return this._fg
            }, set: function (t) {
                this.clear(), this._fg = t
            }
        }, length: {
            get: function () {
                return this._6f && this.validate(), this._j7
            }
        }, _empty: {
            get: function () {
                return 0 == this._fg.length
            }
        }
    }), Pixels.prototype = {
        _19: function (t, e) {
            var i, n, s, o, r, a = t.length, h = 0, l = 0;
            for (r = 0; a > r; r += 4)if (t[r + 3] > 0) {
                i = (r + 4) / e / 4 | 0;
                break
            }
            for (r = a - 4; r >= 0; r -= 4)if (t[r + 3] > 0) {
                n = (r + 4) / e / 4 | 0;
                break
            }
            for (h = 0; e > h; h++) {
                for (l = i; n > l; l++)if (t[l * e * 4 + 4 * h + 3] > 0) {
                    s = h;
                    break
                }
                if (s >= 0)break
            }
            for (h = e - 1; h >= 0; h--) {
                for (l = i; n > l; l++)if (t[l * e * 4 + 4 * h + 3] > 0) {
                    o = h;
                    break
                }
                if (o >= 0)break
            }
            this._x = s, this._y = i, this._width = o - s + 1, this._height = n - i + 1, this._je = new Rect(s, i, this._width, this._height), this._pixelSize = this._width * this._height, this._originalPixelsWidth = e, this._originalPixels = t
        }, _fa: function (t, e) {
            return this._originalPixels[4 * (t + this._x + (this._y + e) * this._originalPixelsWidth) + 3]
        }, _ip: function (t, e, i) {
            if (t = Math.round(t - this._x), e = Math.round(e - this._y), !i || 1 >= i)return this._fa(t, e);
            i = 0 | i;
            for (var n = t, s = e; e + i > s;) {
                for (var n = t; t + i > n;) {
                    if (this._fa(n, s))return !0;
                    ++n
                }
                ++s
            }
            return !1
        }
    }, Consts.BLEND_MODE_DARKEN = "darken", Consts.BLEND_MODE_MULTIPLY = "multiply", Consts.BLEND_MODE_COLOR_BURN = "color.burn", Consts.BLEND_MODE_LINEAR_BURN = "linear.burn", Consts.BLEND_MODE_LIGHTEN = "lighten", Consts.BLEND_MODE_SCREEN = "screen", Consts.BLEND_MODE_GRAY = "gray", Defaults.BLEND_MODE = Consts.BLEND_MODE_LINEAR_BURN;
    var BufferedImage = function (t, e, i) {
        this._js = t, this.scale = e || 1, t instanceof Image && (i = !1), this._iz = i
    };
    BufferedImage.prototype = {
        scale: 1, _js: null, _jj: null, _iz: !0, _ln: function (t, e, i) {
            if (!e || this._iz === !1)return void t.drawImage(this._js, 0, 0);
            this._jj || (this._jj = {});
            var n = e + i, s = this._jj[n];
            if (s || (s = getRenderCanvas(this._js, e, i), s || (this._iz = !1), this._jj[n] = s || this._js), s)if (isIE)try {
                t.drawImage(s, 0, 0)
            } catch (o) {
            } else t.drawImage(s, 0, 0)
        }
    };
    var IShape = {
        drawSelected: function () {
        }, draw: function () {
        }
    }, Bubble = function (t, e, i, n, s, o, r, a, h) {
        this._lu = createBubblePointer(t, e, i, n, s, o, r, a, h)
    }, Graphs = {
        server: {
            draw: function (t) {
                t.save(), t.translate(0, 0), t.beginPath(), t.moveTo(0, 0), t.lineTo(40, 0), t.lineTo(40, 40), t.lineTo(0, 40), t.closePath(), t.clip(), t.translate(0, 0), t.translate(0, 0), t.scale(1, 1), t.translate(0, 0), t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4, t.save(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.restore(), t.save();
                var e = t.createLinearGradient(6.75, 3.9033, 30.5914, 27.7447);
                e.addColorStop(.0493, "#1C6B9D"), e.addColorStop(.0689, "#186493"), e.addColorStop(.0939, "#145E8B"), e.addColorStop(.129, "#115B87"), e.addColorStop(.2266, "#115A85"), e.addColorStop(.2556, "#125C89"), e.addColorStop(.2869, "#176291"), e.addColorStop(.3194, "#1D6C9F"), e.addColorStop(.3525, "#2479B0"), e.addColorStop(.3695, "#2881BB"), e.addColorStop(.5025, "#1F6FA2"), e.addColorStop(.9212, "#115A86"), e.addColorStop(1, "#004063"), t.fillStyle = e, t.beginPath(), t.moveTo(25.677, 4.113), t.bezierCurveTo(25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004), t.bezierCurveTo(19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003), t.bezierCurveTo(12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004), t.bezierCurveTo(9.19, 2.897, 8.977, 2.989, 8.805, 3.094), t.bezierCurveTo(8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63), t.bezierCurveTo(5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05), t.bezierCurveTo(4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307), t.bezierCurveTo(22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575), t.bezierCurveTo(24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004), t.bezierCurveTo(25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004), t.bezierCurveTo(25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85), t.bezierCurveTo(25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253), t.bezierCurveTo(25.706, 4.885, 25.749, 4.478, 25.677, 4.113), t.bezierCurveTo(25.67, 4.077, 25.697, 4.217, 25.677, 4.113), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.save(), t.fillStyle = "#2e8ece", t.beginPath(), t.moveTo(19.763, 6.645), t.bezierCurveTo(20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778), t.bezierCurveTo(20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999), t.bezierCurveTo(21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999), t.bezierCurveTo(21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372), t.lineTo(21.398, 36.253), t.bezierCurveTo(21.397, 36.489, 21.349, 36.713, 21.262, 36.917), t.bezierCurveTo(21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458), t.bezierCurveTo(20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996), t.bezierCurveTo(20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949), t.lineTo(4.675, 37.877), t.bezierCurveTo(4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741), t.bezierCurveTo(3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376), t.bezierCurveTo(3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996), t.bezierCurveTo(3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172), t.lineTo(2.924, 8.431), t.bezierCurveTo(2.923, 8.192, 2.971, 7.964, 3.057, 7.758), t.bezierCurveTo(3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209), t.bezierCurveTo(3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837), t.bezierCurveTo(4.17, 6.749, 4.396, 6.701, 4.633, 6.7), t.lineTo(19.763, 6.645), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.save(), t.fillStyle = "#efefef", t.beginPath(), t.arc(12.208, 26.543, 2.208, 0, 6.283185307179586, !0), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#2e8ece", t.beginPath(), t.arc(12.208, 26.543, 1.876, 0, 6.283185307179586, !0), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#efefef", t.beginPath(), t.moveTo(19.377, 17.247), t.bezierCurveTo(19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998), t.lineTo(5.882, 18.108999999999998), t.bezierCurveTo(5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247), t.lineTo(5.02, 11.144), t.bezierCurveTo(5.02, 10.666, 5.406, 10.281, 5.882, 10.281), t.lineTo(18.516, 10.281), t.bezierCurveTo(18.993, 10.281, 19.377, 10.666, 19.377, 11.144), t.lineTo(19.377, 17.247), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.save(), t.fillStyle = "#2e8ece", t.beginPath(), t.moveTo(18.536, 13.176),t.bezierCurveTo(18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794),t.lineTo(6.479, 13.794),t.bezierCurveTo(6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176),t.lineTo(5.861, 11.84),t.bezierCurveTo(5.861, 11.498, 6.137, 11.221, 6.479, 11.221),t.lineTo(17.918, 11.221),t.bezierCurveTo(18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84),t.lineTo(18.535, 13.176),t.closePath(),t.fill(),t.stroke(),t.restore(),t.save(),t.fillStyle = "#2e8ece",t.beginPath(),t.moveTo(18.536, 16.551),t.bezierCurveTo(18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997),t.lineTo(6.479, 17.168999999999997),t.bezierCurveTo(6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551),t.lineTo(5.861, 15.215999999999998),t.bezierCurveTo(5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998),t.lineTo(17.918, 14.596999999999998),t.bezierCurveTo(18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998),t.lineTo(18.535, 16.551),t.closePath(),t.fill(),t.stroke(),t.restore(),t.restore(),t.restore()
            }
        }, exchanger2: {
            draw: function (t) {
                t.save(), t.translate(0, 0), t.beginPath(), t.moveTo(0, 0), t.lineTo(40, 0), t.lineTo(40, 40), t.lineTo(0, 40), t.closePath(), t.clip(), t.translate(0, 0), t.translate(0, 0), t.scale(1, 1), t.translate(0, 0), t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4, t.save(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.restore(), t.save();
                var e = t.createLinearGradient(.4102, 24.3613, 39.5898, 24.3613);
                e.addColorStop(0, "#1C6B9D"), e.addColorStop(.0788, "#115A85"), e.addColorStop(.2046, "#135D89"), e.addColorStop(.3649, "#186494"), e.addColorStop(.5432, "#1F70A4"), e.addColorStop(.6798, "#257AB2"), e.addColorStop(.7462, "#2377AD"), e.addColorStop(.8508, "#1E6DA0"), e.addColorStop(.98, "#125C89"), e.addColorStop(1, "#105984"), t.fillStyle = e, t.beginPath(), t.moveTo(.41, 16.649), t.bezierCurveTo(.633, 19.767, .871, 20.689, 1.094, 23.807000000000002), t.bezierCurveTo(1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002), t.bezierCurveTo(10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523), t.bezierCurveTo(26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004), t.bezierCurveTo(38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005), t.bezierCurveTo(39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005), t.bezierCurveTo(39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.save(), t.fillStyle = "#2e8ece", t.beginPath(), t.moveTo(16.4, 25.185), t.bezierCurveTo(12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705), t.bezierCurveTo(3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999), t.bezierCurveTo(1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998), t.bezierCurveTo(11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998), t.bezierCurveTo(22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998), t.bezierCurveTo(32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998), t.bezierCurveTo(40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997), t.bezierCurveTo(33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996), t.bezierCurveTo(23.289, 25.28, 19.824, 25.436, 16.4, 25.185), t.bezierCurveTo(13.529, 24.977, 19.286, 25.396, 16.4, 25.185), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.save(), t.save(), t.save(), t.save(), t.save(), t.fillStyle = "#f7f8f8", t.beginPath(), t.moveTo(5.21, 21.754), t.lineTo(8.188, 17.922), t.lineTo(9.53, 18.75), t.lineTo(15.956, 16.004), t.lineTo(18.547, 17.523), t.lineTo(12.074, 20.334), t.lineTo(13.464, 21.204), t.lineTo(5.21, 21.754), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.restore(), t.save(), t.save(), t.save(), t.fillStyle = "#f7f8f8", t.beginPath(), t.moveTo(17.88, 14.61), t.lineTo(9.85, 13.522), t.lineTo(11.703, 12.757), t.lineTo(7.436, 10.285), t.lineTo(10.783, 8.942), t.lineTo(15.091, 11.357), t.lineTo(16.88, 10.614), t.lineTo(17.88, 14.61), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.save(), t.save(), t.fillStyle = "#f7f8f8", t.beginPath(), t.moveTo(17.88, 14.61), t.lineTo(9.85, 13.522), t.lineTo(11.703, 12.757), t.lineTo(7.436, 10.285), t.lineTo(10.783, 8.942), t.lineTo(15.091, 11.357), t.lineTo(16.88, 10.614), t.lineTo(17.88, 14.61), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.restore(),t.save(),t.save(),t.save(),t.fillStyle = "#f7f8f8",t.beginPath(),t.moveTo(23.556, 15.339),t.lineTo(20.93, 13.879),t.lineTo(26.953, 11.304),t.lineTo(25.559, 10.567),t.lineTo(33.251, 9.909),t.lineTo(31.087, 13.467),t.lineTo(29.619, 12.703),t.lineTo(23.556, 15.339),t.closePath(),t.fill(),t.stroke(),t.restore(),t.restore(),t.restore(),t.save(),t.save(),t.save(),t.fillStyle = "#f7f8f8",t.beginPath(),t.moveTo(30.028, 23.383),t.lineTo(24.821, 20.366),t.lineTo(22.915, 21.227),t.lineTo(21.669, 16.762),t.lineTo(30.189, 17.942),t.lineTo(28.33, 18.782),t.lineTo(33.579, 21.725),t.lineTo(30.028, 23.383),t.closePath(),t.fill(),t.stroke(),t.restore(),t.restore(),t.save(),t.save(),t.fillStyle = "#f7f8f8",t.beginPath(),t.moveTo(30.028, 23.383),t.lineTo(24.821, 20.366),t.lineTo(22.915, 21.227),t.lineTo(21.669, 16.762),t.lineTo(30.189, 17.942),t.lineTo(28.33, 18.782),t.lineTo(33.579, 21.725),t.lineTo(30.028, 23.383),t.closePath(),t.fill(),t.stroke(),t.restore(),t.restore(),t.restore(),t.restore(),t.restore(),t.restore()
            }
        }, exchanger: {
            draw: function (t) {
                t.save(), t.translate(0, 0), t.beginPath(), t.moveTo(0, 0), t.lineTo(40, 0), t.lineTo(40, 40), t.lineTo(0, 40), t.closePath(), t.clip(), t.translate(0, 0), t.translate(0, 0), t.scale(1, 1), t.translate(0, 0), t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4, t.save(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.restore(), t.save();
                var e = t.createLinearGradient(.2095, 20.7588, 39.4941, 20.7588);
                e.addColorStop(0, "#6A6969"), e.addColorStop(.0788, "#4F4C4B"), e.addColorStop(.352, "#545252"), e.addColorStop(.6967, "#646262"), e.addColorStop(.8916, "#6F6E6F"), e.addColorStop(.9557, "#4C4948"), e.addColorStop(1, "#494645"), t.fillStyle = e, t.beginPath(), t.moveTo(39.449, 12.417), t.lineTo(39.384, 9.424), t.bezierCurveTo(39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024), t.bezierCurveTo(-.026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002), t.bezierCurveTo(.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437), t.bezierCurveTo(1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094), t.bezierCurveTo(8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089), t.bezierCurveTo(23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996), t.bezierCurveTo(34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997), t.bezierCurveTo(37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997), t.lineTo(37.711, 30.316999999999997), t.lineTo(39.281, 16.498999999999995), t.bezierCurveTo(39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994), t.bezierCurveTo(39.515, 14.105, 39.449, 12.417, 39.449, 12.417), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.save(), t.save(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.restore(), t.save();
                var e = t.createLinearGradient(19.8052, 7.7949, 19.8052, 24.7632);
                e.addColorStop(0, "#7D7D7D"), e.addColorStop(.1455, "#808080"), e.addColorStop(.2975, "#888888"), e.addColorStop(.4527, "#939293"), e.addColorStop(.6099, "#9E9D9D"), e.addColorStop(.7687, "#A7A5A4"), e.addColorStop(.9268, "#A9A6A5"), e.addColorStop(.9754, "#A7A4A3"), e.addColorStop(1, "#FFFFFF"), t.fillStyle = e, t.beginPath(), t.moveTo(33.591, 24.763), t.bezierCurveTo(23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003), t.bezierCurveTo(3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003), t.bezierCurveTo(1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004), t.bezierCurveTo(4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004), t.bezierCurveTo(6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004), t.bezierCurveTo(16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005), t.bezierCurveTo(30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004), t.bezierCurveTo(36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005), t.bezierCurveTo(37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005), t.bezierCurveTo(39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005), t.bezierCurveTo(38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005), t.bezierCurveTo(37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007), t.bezierCurveTo(37.151, 24.271, 35.264, 24.77, 33.591, 24.763), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.restore(), t.save(), t.save(), t.save(), t.fillStyle = "#f7f8f8", t.beginPath(), t.moveTo(10.427, 19.292), t.lineTo(5.735, 16.452), t.lineTo(12.58, 13.8), t.lineTo(12.045, 15.07), t.lineTo(20.482, 15.072), t.lineTo(19.667, 17.887), t.lineTo(11.029, 17.851), t.lineTo(10.427, 19.292), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.save(), t.save(), t.fillStyle = "#f7f8f8", t.beginPath(), t.moveTo(13.041, 13.042), t.lineTo(8.641, 10.73), t.lineTo(14.82, 8.474), t.lineTo(14.373, 9.537), t.lineTo(22.102, 9.479), t.lineTo(21.425, 11.816), t.lineTo(13.54, 11.85), t.lineTo(13.041, 13.042), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.save(), t.save(), t.fillStyle = "#f7f8f8", t.beginPath(), t.moveTo(29.787, 16.049), t.lineTo(29.979, 14.704), t.lineTo(21.51, 14.706), t.lineTo(22.214, 12.147), t.lineTo(30.486, 12.116), t.lineTo(30.653, 10.926), t.lineTo(36.141, 13.4), t.lineTo(29.787, 16.049), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.save(), t.save(), t.fillStyle = "#f7f8f8", t.beginPath(), t.moveTo(28.775, 23.14), t.lineTo(29.011, 21.49), t.lineTo(19.668, 21.405), t.lineTo(20.523, 18.295), t.lineTo(29.613, 18.338), t.lineTo(29.815, 16.898), t.lineTo(35.832, 19.964), t.lineTo(28.775, 23.14), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.restore(),t.restore()
            }
        }, cloud: {
            draw: function (t) {
                t.save(), t.beginPath(), t.moveTo(0, 0), t.lineTo(90.75, 0), t.lineTo(90.75, 62.125), t.lineTo(0, 62.125), t.closePath(), t.clip(), t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4, t.save();
                var e = t.createLinearGradient(44.0054, 6.4116, 44.0054, 51.3674);
                e.addColorStop(0, "rgba(159, 160, 160, 0.7)"), e.addColorStop(.9726, "#E9EAEA"), t.fillStyle = e, t.beginPath(), t.moveTo(57.07, 20.354), t.bezierCurveTo(57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358), t.bezierCurveTo(54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001), t.bezierCurveTo(33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003), t.bezierCurveTo(18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004), t.bezierCurveTo(14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49), t.bezierCurveTo(29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961), t.bezierCurveTo(34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995), t.bezierCurveTo(43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994), t.bezierCurveTo(49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999), t.bezierCurveTo(66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999), t.bezierCurveTo(73.986, 27.436, 66.413, 20.354, 57.07, 20.354), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore()
            }
        }, node: {
            width: 60, height: 100, draw: function (t) {
                t.save(), t.translate(0, 0), t.beginPath(), t.moveTo(0, 0), t.lineTo(40, 0), t.lineTo(40, 40), t.lineTo(0, 40), t.closePath(), t.clip(), t.translate(0, 0), t.translate(0, 0), t.scale(1, 1), t.translate(0, 0), t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4, t.save(), t.fillStyle = "#9fa0a0", t.beginPath(), t.moveTo(13.948, 31.075), t.lineTo(25.914, 31.075), t.quadraticCurveTo(25.914, 31.075, 25.914, 31.075), t.lineTo(25.914, 34.862), t.quadraticCurveTo(25.914, 34.862, 25.914, 34.862), t.lineTo(13.948, 34.862), t.quadraticCurveTo(13.948, 34.862, 13.948, 34.862), t.lineTo(13.948, 31.075), t.quadraticCurveTo(13.948, 31.075, 13.948, 31.075), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#c9caca", t.beginPath(), t.moveTo(29.679, 35.972), t.bezierCurveTo(29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244), t.lineTo(11.456, 37.244), t.bezierCurveTo(10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972), t.lineTo(10.183, 36.136), t.bezierCurveTo(10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863), t.lineTo(28.407, 34.863), t.bezierCurveTo(29.11, 34.863, 29.678, 35.431, 29.678, 36.136), t.lineTo(29.678, 35.972), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#c9caca", t.beginPath(), t.moveTo(.196, 29.346), t.bezierCurveTo(.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075), t.lineTo(37.936, 31.075), t.bezierCurveTo(38.891, 31.075, 39.665, 30.301, 39.665, 29.346), t.lineTo(39.665, 27.174), t.lineTo(.196, 27.174), t.lineTo(.196, 29.346), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#3e3a39", t.beginPath(), t.moveTo(37.937, 3.884), t.lineTo(1.926, 3.884), t.bezierCurveTo(.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614), t.lineTo(.19699999999999984, 27.12), t.lineTo(39.666000000000004, 27.12), t.lineTo(39.666000000000004, 5.615), t.bezierCurveTo(39.665, 4.657, 38.892, 3.884, 37.937, 3.884), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.save(), t.restore(), t.save(), t.restore(), t.restore(), t.save();
                var e = t.createLinearGradient(6.9609, 2.9341, 32.9008, 28.874);
                e.addColorStop(0, "#B2CBEA"), e.addColorStop(1, "#2E8ECE"), t.fillStyle = e, t.beginPath(), t.moveTo(35.788, 6.39), t.lineTo(4.074, 6.39), t.bezierCurveTo(3.315, 6.39, 2.702, 7.003, 2.702, 7.763), t.lineTo(2.702, 24.616), t.lineTo(37.159, 24.616), t.lineTo(37.159, 7.763), t.bezierCurveTo(37.159, 7.003, 36.546, 6.39, 35.788, 6.39), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore()
            }
        }, group: {
            draw: function (t) {
                t.save(), t.translate(0, 0), t.beginPath(), t.moveTo(0, 0), t.lineTo(47.75, 0), t.lineTo(47.75, 40), t.lineTo(0, 40), t.closePath(), t.clip(), t.translate(0, 0), t.translate(0, 0), t.scale(1, 1), t.translate(0, 0), t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4, t.save(), t.save(), t.fillStyle = "#9fa0a0", t.beginPath(), t.moveTo(10.447, 26.005), t.lineTo(18.847, 26.005), t.quadraticCurveTo(18.847, 26.005, 18.847, 26.005), t.lineTo(18.847, 28.663), t.quadraticCurveTo(18.847, 28.663, 18.847, 28.663), t.lineTo(10.447, 28.663), t.quadraticCurveTo(10.447, 28.663, 10.447, 28.663), t.lineTo(10.447, 26.005), t.quadraticCurveTo(10.447, 26.005, 10.447, 26.005), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#c9caca", t.beginPath(), t.moveTo(21.491, 29.443), t.bezierCurveTo(21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338), t.lineTo(8.698, 30.338), t.bezierCurveTo(8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443), t.lineTo(7.8020000000000005, 29.557000000000002), t.bezierCurveTo(7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003), t.lineTo(20.597, 28.662000000000003), t.bezierCurveTo(21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002), t.lineTo(21.491, 29.443), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#c9caca", t.beginPath(), t.moveTo(.789, 24.79), t.bezierCurveTo(.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005), t.lineTo(27.289, 26.005), t.bezierCurveTo(27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79), t.lineTo(28.504, 23.267), t.lineTo(.789, 23.267), t.lineTo(.789, 24.79), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#3e3a39", t.beginPath(), t.moveTo(27.289, 6.912), t.lineTo(2.006, 6.912), t.bezierCurveTo(1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126), t.lineTo(.7889999999999997, 23.227), t.lineTo(28.503999999999998, 23.227), t.lineTo(28.503999999999998, 8.126), t.bezierCurveTo(28.504, 7.455, 27.961, 6.912, 27.289, 6.912), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.save(), t.restore(), t.save(), t.restore(), t.restore(), t.save();
                var e = t.createLinearGradient(5.54, 6.2451, 23.7529, 24.458);
                e.addColorStop(0, "#B2CBEA"), e.addColorStop(1, "#2E8ECE"), t.fillStyle = e, t.beginPath(), t.moveTo(25.78, 8.671), t.lineTo(3.514, 8.671), t.bezierCurveTo(2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635), t.lineTo(2.549, 21.466), t.lineTo(26.743, 21.466), t.lineTo(26.743, 9.636), t.bezierCurveTo(26.743, 9.102, 26.312, 8.671, 25.78, 8.671), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.save(), t.save(), t.fillStyle = "#9fa0a0", t.beginPath(), t.moveTo(27.053, 33.602), t.lineTo(36.22, 33.602), t.quadraticCurveTo(36.22, 33.602, 36.22, 33.602), t.lineTo(36.22, 36.501), t.quadraticCurveTo(36.22, 36.501, 36.22, 36.501), t.lineTo(27.053, 36.501), t.quadraticCurveTo(27.053, 36.501, 27.053, 36.501), t.lineTo(27.053, 33.602), t.quadraticCurveTo(27.053, 33.602, 27.053, 33.602), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#c9caca", t.beginPath(), t.moveTo(39.104, 37.352), t.bezierCurveTo(39.104, 37.891, 38.67, 38.327, 38.13, 38.327), t.lineTo(25.143, 38.327), t.bezierCurveTo(24.602, 38.327, 24.166, 37.891, 24.166, 37.352), t.lineTo(24.166, 37.477999999999994), t.bezierCurveTo(24.166, 36.937, 24.602, 36.501, 25.143, 36.501), t.lineTo(38.131, 36.501), t.bezierCurveTo(38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994), t.lineTo(39.105, 37.352), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#c9caca", t.beginPath(), t.moveTo(16.514, 32.275), t.bezierCurveTo(16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601), t.lineTo(45.433, 33.601), t.bezierCurveTo(46.166, 33.601, 46.758, 33.005, 46.758, 32.275), t.lineTo(46.758, 30.607999999999997), t.lineTo(16.514, 30.607999999999997), t.lineTo(16.514, 32.275), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#3e3a39", t.beginPath(), t.moveTo(45.433, 12.763), t.lineTo(17.839, 12.763), t.bezierCurveTo(17.107, 12.763, 16.514, 13.356, 16.514, 14.089), t.lineTo(16.514, 30.57), t.lineTo(46.757999999999996, 30.57), t.lineTo(46.757999999999996, 14.088), t.bezierCurveTo(46.758, 13.356, 46.166, 12.763, 45.433, 12.763), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.save(), t.restore(), t.save(), t.restore(), t.restore(), t.save(), e = t.createLinearGradient(21.6973, 12.0352, 41.5743, 31.9122), e.addColorStop(0, "#B2CBEA"), e.addColorStop(1, "#2E8ECE"), t.fillStyle = e, t.beginPath(), t.moveTo(43.785, 14.683), t.lineTo(19.486, 14.683), t.bezierCurveTo(18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735), t.lineTo(18.433, 28.649), t.lineTo(44.837, 28.649), t.lineTo(44.837, 15.734), t.bezierCurveTo(44.838, 15.153, 44.367, 14.683, 43.785, 14.683), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(),t.save(),t.globalAlpha = .5,t.beginPath(),t.moveTo(23.709, 36.33),t.lineTo(4.232, 36.33),t.lineTo(4.232, 27.199),t.lineTo(5.304, 27.199),t.lineTo(5.304, 35.259),t.lineTo(23.709, 35.259),t.lineTo(23.709, 36.33),t.closePath(),t.fill(),t.stroke(),t.restore(),t.restore()
            }
        }, subnetwork: {
            draw: function (t) {
                t.save(), t.translate(0, 0), t.beginPath(), t.moveTo(0, 0), t.lineTo(60.75, 0), t.lineTo(60.75, 42.125), t.lineTo(0, 42.125), t.closePath(), t.clip(), t.translate(0, .26859504132231393), t.scale(.6694214876033058, .6694214876033058), t.translate(0, 0), t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4, t.save(), t.save(), t.restore(), t.save(), t.restore(), t.restore(), t.save();
                var e = t.createLinearGradient(43.6724, -2.7627, 43.6724, 59.3806);
                e.addColorStop(0, "rgba(159, 160, 160, 0.7)"), e.addColorStop(.9726, "#E9EAEA"), t.fillStyle = e, t.beginPath(), t.moveTo(61.732, 16.509), t.bezierCurveTo(61.686, 16.509, 61.644, 16.515, 61.599, 16.515), t.bezierCurveTo(58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006), t.bezierCurveTo(29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415), t.bezierCurveTo(9.09, 20.566, 2.229, 28.136, 2.229, 37.326), t.bezierCurveTo(2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006), t.bezierCurveTo(23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001), t.bezierCurveTo(31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001), t.bezierCurveTo(42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001), t.bezierCurveTo(51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014), t.bezierCurveTo(74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001), t.bezierCurveTo(85.116, 26.298, 74.646, 16.509, 61.732, 16.509), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.save(), t.fillStyle = "#9fa0a0", t.beginPath(), t.moveTo(34.966, 44.287), t.lineTo(45.112, 44.287), t.quadraticCurveTo(45.112, 44.287, 45.112, 44.287), t.lineTo(45.112, 47.497), t.quadraticCurveTo(45.112, 47.497, 45.112, 47.497), t.lineTo(34.966, 47.497), t.quadraticCurveTo(34.966, 47.497, 34.966, 47.497), t.lineTo(34.966, 44.287), t.quadraticCurveTo(34.966, 44.287, 34.966, 44.287), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#727171", t.beginPath(), t.moveTo(48.306, 48.439), t.bezierCurveTo(48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52), t.lineTo(32.854, 49.52), t.bezierCurveTo(32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439), t.lineTo(31.771, 48.578), t.bezierCurveTo(31.771, 47.981, 32.253, 47.497, 32.854, 47.497), t.lineTo(47.226, 47.497), t.bezierCurveTo(47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578), t.lineTo(48.306, 48.439), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#b5b5b6", t.beginPath(), t.moveTo(23.302, 42.82), t.bezierCurveTo(23.302, 43.63, 23.96, 44.287, 24.772, 44.287), t.lineTo(55.308, 44.287), t.bezierCurveTo(56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82), t.lineTo(56.775, 40.98), t.lineTo(23.302, 40.98), t.lineTo(23.302, 42.82), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#3e3a39", t.beginPath(), t.moveTo(55.307, 21.229), t.lineTo(24.771, 21.229), t.bezierCurveTo(23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695), t.lineTo(23.301000000000002, 40.933), t.lineTo(56.774, 40.933), t.lineTo(56.774, 22.695), t.bezierCurveTo(56.774, 21.884, 56.119, 21.229, 55.307, 21.229), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.save(), t.restore(), t.save(), t.restore(), t.restore(), t.save(), e = t.createLinearGradient(29.04, 20.4219, 51.0363, 42.4181), e.addColorStop(0, "#B2CBEA"), e.addColorStop(1, "#2E8ECE"), t.fillStyle = e, t.beginPath(), t.moveTo(53.485, 23.353), t.lineTo(26.592, 23.353), t.bezierCurveTo(25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003), t.lineTo(25.427, 38.807), t.lineTo(54.647, 38.807), t.lineTo(54.647, 24.517000000000003), t.bezierCurveTo(54.648, 23.873, 54.127, 23.353, 53.485, 23.353), t.closePath(),t.fill(),t.stroke(),t.restore(),t.restore(),t.restore()
            }
        }
    };
    for (var name in Graphs)_8e("Q-" + name, Graphs[name]);
    var UIValidateRotate = function () {
        this.$invalidateRotate = !1;
        var t = this._fi;
        t.clear();
        var e = this._87.x + this.$border / 2, i = this._87.y + this.$border / 2, n = this._87.width - this.$border, s = this._87.height - this.$border, o = localToParent.call(this, {
            x: e,
            y: i
        });
        addPointToRect(t, o.x, o.y, !0), o = localToParent.call(this, {
            x: e + n,
            y: i
        }), addPointToRect(t, o.x, o.y), o = localToParent.call(this, {
            x: e + n,
            y: i + s
        }), addPointToRect(t, o.x, o.y), o = localToParent.call(this, {
            x: e,
            y: i + s
        }), addPointToRect(t, o.x, o.y), this.__lyPointer && (o = localToParent.call(this, {
            x: this._pointerX,
            y: this._pointerY
        }), addPointToRect(t, o.x, o.y)), this.$border && t.grow(this.$border / 2)
    }, GIF_INTERVAL_MIN = 20, GIFImageSupport = {
        _hn: !1, _jv: null, _de: 0, _lj: -1, _lk: null, _e5: function (t) {
            this._jv || (this._jv = [], this._jo = IMAGE_STATUS_LOADED), this._jv.push(t), this._ec(), this._lc()
        }, _lc: function () {
            if (!this._lk) {
                var t = this;
                this._lk = setTimeout(function e() {
                    return t._ec() !== !1 ? void(t._lk = setTimeout(e, t._g3())) : void delete t._lk
                }, this._g3())
            }
        }, _g3: function () {
            return Math.max(GIF_INTERVAL_MIN, this._jv[this._lj].delay)
        }, _ec: function () {
            return this._g5(this._lj + 1)
        }, _g5: function (t) {
            if (this._hn)t %= this._de; else if (t >= this._jv.length)return !1;
            if (this._lj == t)return !1;
            this._lj = t;
            var e = this._jv[this._lj], i = e._mzache;
            return i || (e._mzache = i = _9r(this.width, this.height), i.g.putImageData(e.data, 0, 0), i._pixels = e._pixels), this._ld = i, this.$invalidateSize = !0, this._du()
        }, _mzd: function () {
            return this._jv ? (this._hn = !0, this._de = this._jv.length, 1 == this._de ? this._du() : void this._lc()) : void this._j1()
        }, _lo: function () {
            this._lk && (clearTimeout(this._lk), delete this._lk)
        }, _du: function () {
            var t = this._dispatcher.listeners;
            if (!t || !t.length)return !1;
            for (var e = new Event(this, "image", "load", this._ld), i = 0, n = t.length; n > i; i++) {
                var s = t[i];
                s.scope._jk && s.scope._jk._ijed ? (t.splice(i, 1), i--, n--) : s.onEvent.call(s.scope, e)
            }
            return t.length > 0
        }, _mwi: function (t, e) {
            this._dispatcher.addListener(t, e), this._hn && !this._lk && this._lc()
        }, _6j: function (t, e) {
            this._dispatcher.removeListener(t, e), this._dispatcher._mxr() || this._lo()
        }, _ij: function () {
            this._lo(), this._dispatcher.clear()
        }, _fx: function () {
            var t = this._ld._mxufferedImage;
            return t || (this._ld._mxufferedImage = t = new BufferedImage(this._ld, 1)), t
        }
    }, bitsToNum = function (t) {
        return t.reduce(function (t, e) {
            return 2 * t + e
        }, 0)
    }, byteToBitArr = function (t) {
        for (var e = [], i = 7; i >= 0; i--)e.push(!!(t & 1 << i));
        return e
    }, Stream = function (t) {
        this.data = t, this.len = this.data.length, this.pos = 0, this.readByte = function () {
            if (this.pos >= this.data.length)throw new Error("Attempted to read past end of stream.");
            return 255 & t.charCodeAt(this.pos++)
        }, this.readBytes = function (t) {
            for (var e = [], i = 0; t > i; i++)e.push(this.readByte());
            return e
        }, this.read = function (t) {
            for (var e = "", i = 0; t > i; i++)e += String.fromCharCode(this.readByte());
            return e
        }, this.readUnsigned = function () {
            var t = this.readBytes(2);
            return (t[1] << 8) + t[0]
        }
    }, lzwDecode = function (t, e) {
        for (var i, n, s = 0, o = function (t) {
            for (var i = 0, n = 0; t > n; n++)e.charCodeAt(s >> 3) & 1 << (7 & s) && (i |= 1 << n), s++;
            return i
        }, r = [], a = 1 << t, h = a + 1, l = t + 1, _ = [], u = function () {
            _ = [], l = t + 1;
            for (var e = 0; a > e; e++)_[e] = [e];
            _[a] = [], _[h] = null
        }; ;)if (n = i, i = o(l), i !== a) {
            if (i === h)break;
            if (i < _.length)n !== a && _.push(_[n].concat(_[i][0])); else {
                if (i !== _.length)throw new Error("Invalid LZW code.");
                _.push(_[n].concat(_[n][0]))
            }
            r.push.apply(r, _[i]), _.length === 1 << l && 12 > l && l++
        } else u();
        return r
    }, parseGIF = function (t, e) {
        e || (e = {});
        var i = function (e) {
            for (var i = [], n = 0; e > n; n++)i.push(t.readBytes(3));
            return i
        }, n = function () {
            var e, i;
            i = "";
            do e = t.readByte(), i += t.read(e); while (0 !== e);
            return i
        }, s = function () {
            var n = {};
            if (n.sig = t.read(3), n.ver = t.read(3), "GIF" !== n.sig)throw new Error("Not a GIF file.");
            n.width = t.readUnsigned(), n.height = t.readUnsigned();
            var s = byteToBitArr(t.readByte());
            n.gctFlag = s.shift(), n.colorRes = bitsToNum(s.splice(0, 3)), n.sorted = s.shift(), n.gctSize = bitsToNum(s.splice(0, 3)), n.bgColor = t.readByte(), n.pixelAspectRatio = t.readByte(), n.gctFlag && (n.gct = i(1 << n.gctSize + 1)), e.hdr && e.hdr(n)
        }, o = function (i) {
            var s = function (i) {
                var n = (t.readByte(), byteToBitArr(t.readByte()));
                i.reserved = n.splice(0, 3), i.disposalMethod = bitsToNum(n.splice(0, 3)), i.userInput = n.shift(), i.transparencyGiven = n.shift(), i.delayTime = t.readUnsigned(), i.transparencyIndex = t.readByte(), i.terminator = t.readByte(), e.gce && e.gce(i)
            }, o = function (t) {
                t.comment = n(), e.com && e.com(t)
            }, r = function (i) {
                t.readByte();
                i.ptHeader = t.readBytes(12), i.ptData = n(), e.pte && e.pte(i)
            }, a = function (i) {
                {
                    var s = function (i) {
                        t.readByte();
                        i.unknown = t.readByte(), i.iterations = t.readUnsigned(), i.terminator = t.readByte(), e.app && e.app.NETSCAPE && e.app.NETSCAPE(i)
                    }, o = function (t) {
                        t.appData = n(), e.app && e.app[t.identifier] && e.app[t.identifier](t)
                    };
                    t.readByte()
                }
                switch (i.identifier = t.read(8), i.authCode = t.read(3), i.identifier) {
                    case"NETSCAPE":
                        s(i);
                        break;
                    default:
                        o(i)
                }
            }, h = function (t) {
                t.data = n(), e.unknown && e.unknown(t)
            };
            switch (i.label = t.readByte(), i.label) {
                case 249:
                    i.extType = "gce", s(i);
                    break;
                case 254:
                    i.extType = "com", o(i);
                    break;
                case 1:
                    i.extType = "pte", r(i);
                    break;
                case 255:
                    i.extType = "app", a(i);
                    break;
                default:
                    i.extType = "unknown", h(i)
            }
        }, r = function (s) {
            var o = function (t, e) {
                for (var i = new Array(t.length), n = t.length / e, s = function (n, s) {
                    var o = t.slice(s * e, (s + 1) * e);
                    i.splice.apply(i, [n * e, e].concat(o))
                }, o = [0, 4, 2, 1], r = [8, 8, 4, 2], a = 0, h = 0; 4 > h; h++)for (var l = o[h]; n > l; l += r[h])s(l, a), a++;
                return i
            };
            s.leftPos = t.readUnsigned(), s.topPos = t.readUnsigned(), s.width = t.readUnsigned(), s.height = t.readUnsigned();
            var r = byteToBitArr(t.readByte());
            s.lctFlag = r.shift(), s.interlaced = r.shift(), s.sorted = r.shift(), s.reserved = r.splice(0, 2), s.lctSize = bitsToNum(r.splice(0, 3)), s.lctFlag && (s.lct = i(1 << s.lctSize + 1)), s.lzwMinCodeSize = t.readByte();
            var a = n();
            s.pixels = lzwDecode(s.lzwMinCodeSize, a), s.interlaced && (s.pixels = o(s.pixels, s.width)), e.img && e.img(s)
        }, a = function () {
            var i = {};
            switch (i.sentinel = t.readByte(), String.fromCharCode(i.sentinel)) {
                case"!":
                    i.type = "ext", o(i);
                    break;
                case",":
                    i.type = "img", r(i);
                    break;
                case";":
                    i.type = "eof", e.eof && e.eof(i);
                    break;
                default:
                    throw new Error("Unknown block: 0x" + i.sentinel.toString(16))
            }
            "eof" !== i.type && setTimeout(a, 0)
        }, h = function () {
            s(), setTimeout(a, 0)
        };
        h()
    }, authorizationInfo = "";
    document.addEventListener && document.addEventListener("keydown", function (t) {
        if (t.ctrlKey && t.shiftKey && t.altKey && 73 == t.keyCode) {
            var e = Q.name + "\nVersion - " + Q.version + "\nPublish Date - " + Q.publishDate + "\n" + Q.about + "\n" + Q.copyright + authorizationInfo;
            Q.alert(e)
        }
    }, !1), authorizationInfo = "\nLicensed to: " + decodeURIComponent("IRIS%20by%20MOBIGEN%20CO.%2CLTD.");
    var StyleChangeEvent = function (t, e, i, n) {
        this.source = t, this.kind = e, this.oldValue = n, this.value = i, this.propertyType = Consts.PROPERTY_TYPE_STYLE
    };
    _kl(StyleChangeEvent, PropertyChangeEvent);
    var Element = function (t) {
        this.id = ++idIndex, this._mz3 = {}, this._j6 = {}, t && (this.$name = t)
    };
    Element.prototype = {
        _j6: null, getStyle: function (t) {
            return this._j6[t]
        }, setStyle: function (t, e) {
            var i = this._j6[t];
            return i === e || i && e && i.equals && i.equals(e) ? !1 : this._mx8(t, e, new StyleChangeEvent(this, t, e, i), this._j6)
        }, putStyles: function (t, e) {
            for (var i in t) {
                var n = t[i];
                e ? this._j6[i] = n : this.setStyle(i, n)
            }
        }, _$s: !0, invalidateVisibility: function (t) {
            this._$s = !0, t || (this instanceof Node && this.hasEdge() && this.forEachEdge(function (t) {
                t._$s = !0
            }), this._i9() && this.hasChildren() && this.forEachChild(function (t) {
                t.invalidateVisibility()
            }))
        }, onParentChanged: function () {
            this.invalidateVisibility()
        }, _i9: function () {
            return !this._49 && this instanceof Group
        }, invalidate: function () {
            this.onEvent(new Event(this, "ui", "invalidate"))
        }, _mzb: null, addUI: function (t, e) {
            if (this._mzb || (this._mzb = new HashList), t.id || (t.id = ++idIndex), this._mzb.containsById(t.id))return !1;
            var i = {id: t.id, ui: t, bindingProperties: e};
            this._mzb.add(i);
            var n = new Event(this, "ui", "add", i);
            return this.onEvent(n)
        }, removeUI: function (t) {
            if (!this._mzb)return !1;
            var e = this._mzb.getById(t.id);
            return e ? (this._mzb.remove(e), void this.onEvent(new Event(this, "ui", "remove", e))) : !1
        }, toString: function () {
            return this.$name || this.id
        }, type: "Q.Element", _49: !1, _i5: !0
    }, _kl(Element, Data), _82(Element.prototype, ["uiClass", "name", "zIndex", "tooltip"]), _50(Element.prototype, {
        enableSubNetwork: {
            get: function () {
                return this._49
            }, set: function (t) {
                if (this._49 != t) {
                    var e = this._49;
                    this._49 = t, this instanceof Node && this._11(), this.onEvent(new PropertyChangeEvent(this, "enableSubNetwork", t, e))
                }
            }
        }, bindingUIs: {
            get: function () {
                return this._mzb
            }
        }, styles: {
            get: function () {
                return this._j6
            }, set: function (t) {
                if (this._j6 != t) {
                    for (var e in this._j6)e in t || (t[e] = void 0);
                    this.putStyles(t), this._j6 = t
                }
            }
        }
    });
    var Edge = function (t, e, i) {
        this.id = ++idIndex, this._mz3 = {}, this._j6 = {}, i && (this.$name = i), this.$from = t, this.$to = e, this.connect()
    };
    Edge.prototype = {
        $uiClass: EdgeUI,
        _k7: null,
        _iy: null,
        _k8: null,
        _ix: null,
        _eb: !1,
        type: "Q.Edge",
        otherNode: function (t) {
            return t == this.from ? this.to : t == this.to ? this.from : void 0
        },
        connect: function () {
            if (this._eb)return !1;
            if (!this.$from || !this.$to)return !1;
            if (this._eb = !0, this.$from == this.$to)return void this.$from._ib(this);
            _er(this.$to, this), _mzf(this.$from, this), _54(this.$from, this, this.$to);
            var t = this.fromAgent, e = this.toAgent;
            if (t != e) {
                var i;
                this.$from._dz && (_5x(t, this, e), i = !0), this.$to._dz && (_6o(e, this, t), i = !0), i && _54(t, this, e)
            }
        },
        disconnect: function () {
            if (!this._eb)return !1;
            if (this._eb = !1, this.$from == this.$to)return void this.$from._mz5(this);
            _8z(this.$from, this), _9u(this.$to, this), _36(this.$from, this, this.$to);
            var t = this.fromAgent, e = this.toAgent;
            if (t != e) {
                var i;
                this.$from._dz && (_2z(t, this, e), i = !0), this.$to._dz && (_3p(e, this, t), i = !0), i && _36(t, this, e)
            }
        },
        isConnected: function () {
            return this._eb
        },
        isInvalid: function () {
            return !this.$from || !this.$to
        },
        isLooped: function () {
            return this.$from == this.$to
        },
        getEdgeBundle: function (t) {
            return t ? this._3e() : this.isLooped() ? this.$from._47 : this.$from.getEdgeBundle(this.$to)
        },
        hasEdgeBundle: function () {
            var t = this.getEdgeBundle(!0);
            return t && t.edges.length > 1
        },
        _3e: function () {
            var t = this.fromAgent, e = this.toAgent;
            return t == e ? this.$from._dz || this.$to._dz ? null : this.$from._47 : this.fromAgent.getEdgeBundle(this.toAgent)
        },
        _9y: null,
        hasPathSegments: function () {
            return this._9y && !this._9y.isEmpty()
        },
        isBundleEnabled: function () {
            return this.bundleEnabled && !this.hasPathSegments()
        },
        firePathChange: function (t) {
            this.onEvent(new PropertyChangeEvent(this, "path.segment", t))
        },
        addPathSegment: function (t, e, i) {
            var n = new PathSegment(e || LINE_TO, t);
            this._9y || (this._9y = new HashList), this._9y.add(n, i), this.firePathChange(n)
        },
        addPathSegement: function () {
            return Q.log('change "edge.addPathSegement(...)" to "edge.addPathSegment(...)"'), this.addPathSegment.apply(this, arguments)
        },
        removePathSegmentByIndex: function (t) {
            if (!this._9y)return !1;
            var e = this._9y.getByIndex(t);
            e && (this._9y.remove(e), this.firePathChange(e))
        },
        removePathSegment: function (t) {
            return this._9y ? (this._9y.remove(t), void this.firePathChange(t)) : !1
        },
        movePathSegment: function (t, e, i) {
            if (!this._9y)return !1;
            if (t = t || 0, e = e || 0, Q.isNumber(i)) {
                var n = this._9y.getByIndex(i);
                return n ? (n.move(t, e), void this.firePathChange()) : !1
            }
            _i1(function (i) {
                i.move(t, e)
            }), this.firePathChange()
        },
        move: function (t, e) {
            return this._9y ? (this._9y.forEach(function (i) {
                i.move(t, e)
            }, this), void this.firePathChange()) : !1
        },
        validateEdgeBundle: function () {
        }
    }, _kl(Edge, Element), _50(Edge.prototype, {
        pathSegments: {
            get: function () {
                return this._9y
            }, set: function (t) {
                Q.isArray(t) && (t = new HashList(t)), this._9y = t, this.firePathChange()
            }
        }, from: {
            get: function () {
                return this.$from
            }, set: function (t) {
                if (this.$from != t) {
                    var e = new PropertyChangeEvent(this, "from", t, this.$from);
                    this.beforeEvent(e) !== !1 && (this.disconnect(), this.$from = t, this.connect(), this.onEvent(e))
                }
            }
        }, to: {
            get: function () {
                return this.$to
            }, set: function (t) {
                if (this.$to != t) {
                    var e = new PropertyChangeEvent(this, "to", t, this.$to);
                    this.beforeEvent(e) !== !1 && (this.disconnect(), this.$to = t, this.connect(), this.onEvent(e))
                }
            }
        }, fromAgent: {
            get: function () {
                return this.$from ? this.$from._dz || this.$from : null
            }
        }, toAgent: {
            get: function () {
                return this.$to ? this.$to._dz || this.$to : null
            }
        }
    }), _82(Edge.prototype, ["edgeType", {name: "bundleEnabled", value: !0}, "angle"]);
    var Node = function (t, e, i) {
        this.id = ++idIndex, this._mz3 = {}, this._j6 = {}, t && (this.$name = t), this.$image = "Q-node", this.$anchorPosition = Position.CENTER_MIDDLE, this.$location = {
            x: e || 0,
            y: i || 0
        }, this._linkedNodes = {}
    };
    Node.prototype = {
        $uiClass: NodeUI, _dz: null, forEachEdge: function (t, e, i) {
            return !i && this._l1 && this._l1.forEach(t, e) === !1 ? !1 : _52(this, t, e)
        }, forEachOutEdge: function (t, e) {
            return _37(this, t, e)
        }, forEachInEdge: function (t, e) {
            return _3l(this, t, e)
        }, getEdges: function () {
            var t = [];
            return this.forEachEdge(function (e) {
                t.push(e)
            }), t
        }, _if: null, _fj: null, _j9: null, _ie: null, _mx9: 0, _9m: 0, hasInEdge: function () {
            return null != this._if
        }, hasOutEdge: function () {
            return null != this._fj
        }, hasEdge: function () {
            return null != this._if || null != this._fj || this.hasLoops()
        }, linkedWith: function (t) {
            return t.from == this || t.to == this || t.fromAgent == this || t.toAgent == this
        }, hasEdgeWith: function (t) {
            var e = this.getEdgeBundle(t);
            return e && e.edges.length > 0
        }, _l1: null, _47: null, hasLoops: function () {
            return this._l1 && this._l1.length > 0
        }, _ib: function (t) {
            return this._l1 || (this._l1 = new HashList, this._47 = new EdgeBundle(this, this, this._l1)), this._47._im(t)
        }, _mz5: function (t) {
            return this._47 ? this._47._d8(t) : void 0
        }, getEdgeBundle: function (t) {
            return t == this ? this._47 : this._linkedNodes[t.id] || t._linkedNodes[this.id]
        }, _6l: function () {
            return this._9h && this._9h.length
        }, _5l: function () {
            return this._8c && this._8c.length
        }, _9k: function () {
            return this._6l() || this._5l()
        }, _8c: null, _9h: null, _mz6: function () {
            var t = this._dz, e = findAgentNode(this);
            if (t != e) {
                var i = getAllChildrenEdgeInfos(this);
                this._94(e), i.forEach(function (t) {
                    var e = t.fromAgent, i = t.toAgent, t = t.edge, n = t.$from._dz, s = t.$to._dz;
                    e != i && (e && _2z(e, t, i || t.$to), i && _3p(i, t, e || t.$from)), n != s && (n && _5x(n, t, s || t.$to), s && _6o(s, t, n || t.$from), _54(n || t.$from, t, s || t.$to))
                }, this)
            }
        }, onParentChanged: function () {
            this.invalidateVisibility(), this._mz6()
        }, _89: null, _11: function () {
            var t;
            if (this._49 ? t = null : (t = this._dz, t || this._gs !== !1 || (t = this)), this._89 == t)return !1;
            if (this._89 = t, this._fe && this._fe._jz.length)for (var e, i = this._fe._jz, n = 0, s = i.length; s > n; n++)e = i[n], e instanceof Node && e._94(t)
        }, setLocation: function (t, e) {
            if (this.$location && this.$location.x == t && this.$location.y == e)return !1;
            var i = new PropertyChangeEvent(this, "location", this.$location, {x: t, y: e});
            return this.beforeEvent(i) === !1 ? !1 : (this.$location ? (this.$location.x = t, this.$location.y = e) : this.$location = new Point(t, e), this.onEvent(i), !0)
        }, _do: null, addFollower: function (t) {
            return null == t ? !1 : t.host = this
        }, removeFollower: function (t) {
            return this._do && this._do.contains(t) ? t.host = null : !1
        }, hasFollowers: function () {
            return this._do && !this._do.isEmpty()
        }, toFollowers: function () {
            return this.hasFollowers() ? this._do.toDatas() : null
        }, clearFollowers: function () {
            if (this.hasFollowers()) {
                {
                    this.toFollowers()
                }
                _i1(this.toFollowers(), function (t) {
                    t.host = null
                })
            }
        }, getFollowerIndex: function (t) {
            return this._do && this._do.contains(t) ? this._do.indexOf(t) : -1
        }, setFollowerIndex: function (t, e) {
            return this._do && this._do.contains(t) ? void this._do.setIndex(t, e) : -1
        }, getFollowerCount: function () {
            return this._do ? this._do.length : 0
        }, _96: function () {
            return this._do ? this._do : (this._do = new HashList, this._do)
        }, isFollow: function (t) {
            if (!t || !this._host)return !1;
            for (var e = this._host; e;) {
                if (e == t)return !0;
                e = e._host
            }
            return !1
        }, _94: function (t) {
            return t == this._dz ? !1 : (this._dz = t, this.invalidateVisibility(), void this._11())
        }, type: "Q.Node"
    }, _kl(Node, Element), _50(Node.prototype, {
        loops: {
            get: function () {
                return this._l1
            }
        }, edgeCount: {
            get: function () {
                return this._mx9 + this._9m
            }
        }, agentNode: {
            get: function () {
                return this._dz || this
            }
        }, host: {
            set: function (t) {
                if (this == t || t == this._host)return !1;
                var e = new PropertyChangeEvent(this, "host", this._host, t);
                if (!1 === this.beforeEvent(e))return !1;
                var i = null, n = null, s = this._host;
                if (null != t && (i = new PropertyChangeEvent(t, "follower.add", null, this), !1 === t.beforeEvent(i)))return !1;
                if (null != s && (n = new PropertyChangeEvent(s, "follower.remove", null, this), !1 === s.beforeEvent(n)))return !1;
                if (this._host = t, null != t) {
                    var o = t._96();
                    o.add(this)
                }
                if (null != s) {
                    var o = s._96();
                    o.remove(this)
                }
                return this.onEvent(e), null != t && t.onEvent(i), null != s && s.onEvent(n), !0
            }, get: function () {
                return this._host
            }
        }
    }), _82(Node.prototype, ["location", "size", "image", "rotate", "anchorPosition"]), _50(Node.prototype, {
        x: {
            get: function () {
                return this.location.x
            }, set: function (t) {
                t != this.location.x && (this.location = new Point(t, this.location.y))
            }
        }, y: {
            get: function () {
                return this.location.y
            }, set: function (t) {
                t != this.location.y && (this.location = new Point(this.location.x, t))
            }
        }
    });
    var ShapeNode = function (t, e) {
        t instanceof Path && (e = t, t = void 0), _39(this, ShapeNode, [t]), this.$path = e || new Path, this.image = this.$path, this.anchorPosition = null, this.uiClass = ShapeNodeUI, Defaults.SHAPENODE_STYLES || (Defaults.SHAPENODE_STYLES = {}, Defaults.SHAPENODE_STYLES[Styles.ARROW_TO] = !1), this.putStyles(Defaults.SHAPENODE_STYLES)
    };
    ShapeNode.prototype = {
        $uiClass: ShapeNodeUI, type: "Q.ShapeNode", moveTo: function (t, e) {
            this.path.moveTo(t, e), this.firePathChange()
        }, lineTo: function (t, e) {
            this.path.lineTo(t, e), this.firePathChange()
        }, quadTo: function (t, e, i, n) {
            this.path.quadTo(t, e, i, n), this.firePathChange()
        }, curveTo: function (t, e, i, n, s, o) {
            this.path.curveTo(t, e, i, n, s, o), this.firePathChange()
        }, arcTo: function (t, e, i, n, s) {
            this.path.arcTo(t, e, i, n, s), this.firePathChange()
        }, closePath: function () {
            this.path.closePath(), this.firePathChange()
        }, clear: function () {
            this.path.clear(), this.firePathChange()
        }, removePathSegmentByIndex: function (t) {
            this.path.removePathSegment(t) !== !1 && this.firePathChange()
        }, firePathChange: function () {
            this.path._6f = !0, this.onEvent(new PropertyChangeEvent(this, "path.segment"))
        }
    }, _kl(ShapeNode, Node), _82(ShapeNode.prototype, ["path"]), _50(ShapeNode.prototype, {
        pathSegments: {
            get: function () {
                return this.path.segments
            }, set: function (t) {
                this.path.segments = t || [], this.firePathChange()
            }
        }, length: {
            get: function () {
                return this.path.length
            }
        }
    }), Q.ShapeNode = ShapeNode;
    var Shapes = {
        _jc: {}, register: function (t, e) {
            Shapes._jc[t] = e
        }, getShape: function (t, e, i, n, s, o) {
            void 0 === n && (n = e, s = i, e = 0, i = 0), n || (n = 50), s || (s = 50);
            var r = Shapes._jc[t];
            return r ? r.generator instanceof Function ? r.generator(e, i, n, s, o) : r : void 0
        }, getRect: function (t, e, i, n, s, o, r) {
            return addRect(r || new Path, t, e, i, n, s, o)
        }, getAllShapes: function (t, e, i, n, s) {
            var o = {};
            for (var r in Shapes._jc) {
                var a = Shapes.getShape(r, t, e, i, n, s);
                a && (o[r] = a)
            }
            return o
        }, createRegularShape: function (t, e, i, n, s) {
            return createRegularPolygon(t, e, i, n, s)
        }
    };
    initShapes(), Bus.prototype = {type: "Q.Bus"}, _kl(Bus, ShapeNode), Q.Bus = Bus, GraphModel.prototype = {
        _h0: function (t) {
            var e, i = t._jk;
            e = i ? i._fe : this.$roots;
            var n = e.indexOf(t);
            if (0 > n)throw new Error("data '" + t + "' not exist in the box");
            for (; n >= 0;) {
                if (0 == n)return i instanceof Node ? i : null;
                n -= 1;
                var s = e.getByIndex(n);
                if (s = _h2(s))return s
            }
            return null
        }, forEachNode: function (t, e) {
            this.forEach(function (i) {
                return i instanceof Node && t.call(e, i) === !1 ? !1 : void 0
            })
        }, _3x: null
    }, _kl(GraphModel, DataModel), _50(GraphModel.prototype, {
        propertyChangeDispatcher: {
            get: function () {
                return this._$u
            }
        }, currentSubNetwork: {
            get: function () {
                return this._3x
            }, set: function (t) {
                if (t && !t.enableSubNetwork && (t = null), this._3x != t) {
                    var e = this._3x;
                    this._3x = t, this._$u.onEvent(new PropertyChangeEvent(this, "currentSubNetwork", t, e))
                }
            }
        }
    }), Defaults.GROUP_TYPE = Consts.GROUP_TYPE_RECT, Defaults.GROUP_PADDING = 5, Defaults.GROUP_EXPANDED = !0, Defaults.GROUP_MIN_SIZE = {
        width: 60,
        height: 60
    };
    var Group = function (t, e, i) {
        _39(this, Group, arguments), (void 0 === e || void 0 === i) && (this.$location.invalidateFlag = !0), this.$groupType = Defaults.GROUP_TYPE, this.$padding = Defaults.GROUP_PADDING, this.$image = Graphs.group, this.$minSize = Defaults.GROUP_MIN_SIZE, this.expanded = Defaults.GROUP_EXPANDED
    };
    Group.prototype = {
        type: "Q.Group", $uiClass: GroupUI, _mw6: function () {
            return !this._gs && !this._dz
        }, forEachOutEdge: function (t, e, i) {
            if (_37(this, t, e) === !1)return !1;
            if (!i && this._mw6())return this._8c ? this._8c.forEach(t, e) : void 0
        }, forEachInEdge: function (t, e, i) {
            if (_3l(this, t, e) === !1)return !1;
            if (!i && this._mw6())return this._9h ? this._9h.forEach(t, e) : void 0
        }, forEachEdge: function (t, e, i) {
            if (_iw(this, Group, "forEachEdge", arguments) === !1)return !1;
            if (!i && !i && this._mw6())return this._9h && this._9h.forEach(t, e) === !1 ? !1 : this._8c ? this._8c.forEach(t, e) : void 0
        }, hasInEdge: function (t) {
            return t ? null != this._if : null != this._if || this._6l()
        }, hasOutEdge: function (t) {
            return t ? null != this._fj : null != this._fj || this._5l()
        }, hasEdge: function (t) {
            return t ? null != this._if || null != this._fj : null != this._if || null != this._fj || this._9k()
        }
    }, _kl(Group, Node), _50(Group.prototype, {
        expanded: {
            get: function () {
                return this._gs
            }, set: function (t) {
                if (this._gs != t) {
                    var e = new PropertyChangeEvent(this, "expanded", t, this._gs);
                    this.beforeEvent(e) !== !1 && (this._gs = t, this._11(), this.onEvent(e), this._dz || checkGroupAgentEdges.call(this))
                }
            }
        }
    }), _82(Group.prototype, ["minSize", "groupType", "padding", "groupImage"]), Q.Group = Group, Text.prototype.type = "Q.Text", _kl(Text, Node), Q.Text = Text;
    var BaseUI = function (t) {
        this._je = new Rect, this._87 = new Rect, this._fi = new Rect, this.id = ++idIndex, t && (this.data = t)
    };
    BaseUI.prototype = {
        invalidate: function () {
            this.invalidateData()
        },
        _1n: !0,
        _je: null,
        _87: null,
        _fi: null,
        _mwq: !1,
        _jf: 1,
        _jh: 1,
        _i5: !0,
        _85: 0,
        _6b: 0,
        _jk: null,
        _mxc: null,
        borderColor: "#444",
        borderLineDash: null,
        borderLineDashOffset: null,
        syncSelection: !0,
        syncSelectionStyles: !0,
        _1e: function () {
            this.$anchorPoint = _mxa(this.anchorPosition, this._85, this._6b)
        },
        setMeasuredBounds: function (t, e, i, n) {
            return t instanceof Object && (i = t.x, n = t.y, e = t.height, t = t.width), this._je.width == t && this._je.height == e && this._je.x == i && this._je.y == n ? !1 : void this._je.set(i || 0, n || 0, t || 0, e || 0)
        },
        initialize: function () {
        },
        measure: function () {
        },
        draw: function () {
        },
        _83: function (t, e, i) {
            i.selectionType == Consts.SELECTION_TYPE_SHADOW ? (t.shadowColor = i.selectionColor, t.shadowBlur = i.selectionShadowBlur * e, t.shadowOffsetX = (i.selectionShadowOffsetX || 0) * e, t.shadowOffsetY = (i.selectionShadowOffsetY || 0) * e) : this._27(t, e, i)
        },
        _27: function (t, e, i) {
            var n = i.selectionBorder || 0;
            i.selectionBackgroundColor && (t.fillStyle = i.selectionBackgroundColor, t.fillRect(this._87.x - n / 2, this._87.y - n / 2, this._87.width + n, this._87.height + n)), t.strokeStyle = i.selectionColor, t.lineWidth = n, t.strokeRect(this._87.x - n / 2, this._87.y - n / 2, this._87.width + n, this._87.height + n)
        },
        _jm: function (t, e, i, n) {
            if (!this._i5)return !1;
            if (this.syncSelection || (i = this.selected), (i && !this.syncSelectionStyles || !n) && (n = this), t.save(), 1 != this.$alpha && (t.globalAlpha = this.$alpha), t.translate(this.$x, this.$y), this.$rotatable && this.$_hostRotate && t.rotate(this.$_hostRotate), (this.offsetX || this.offsetY) && t.translate(this.offsetX, this.offsetY), this.$rotate && t.rotate(this.$rotate), this.$layoutByAnchorPoint && this._mxc && t.translate(-this._mxc.x, -this._mxc.y), this.shadowColor && (t.shadowColor = this.shadowColor, t.shadowBlur = this.shadowBlur * e, t.shadowOffsetX = this.shadowOffsetX * e, t.shadowOffsetY = this.shadowOffsetY * e), i && n.selectionType == Consts.SELECTION_TYPE_BORDER_RECT && (this._27(t, e, n), i = !1), this._$t() && this._lrShape && !this._lrShape._empty) {
                this._lrShape.validate();
                var s = {
                    lineWidth: this.$border,
                    strokeStyle: this.borderColor,
                    lineDash: this.borderLineDash,
                    lineDashOffset: this.borderLineDashOffset,
                    fillColor: this.$backgroundColor,
                    fillGradient: this._mxackgroundGradient,
                    lineCap: "butt",
                    lineJoin: "round"
                };
                this._lrShape.draw(t, e, s, i, n), i = !1, t.shadowColor = "rgba(0,0,0,0)"
            }
            t.beginPath(), this.draw(t, e, i, n), t.restore()
        },
        invalidateData: function () {
            this.$invalidateData = !0, this._1n = !0
        },
        invalidateSize: function () {
            this.$invalidateSize = !0, this._1n = !0
        },
        invalidateRender: function () {
            this._1n = !0
        },
        _56: function () {
        },
        _$t: function () {
            return this.$backgroundColor || this.$backgroundGradient || this.$border
        },
        _45: function () {
            return this.$backgroundColor || this.$backgroundGradient
        },
        doValidate: function () {
            return this.$invalidateData && (this.$invalidateData = !1, this.measure() !== !1 && (this.$invalidateSize = !0)), this.$invalidateSize && this.validateSize && this.validateSize(), UIValidateBoundsBackgroundBorderAndPointer.call(this) ? (this.$invalidateRotate = !0, this.onBoundsChanged && this.onBoundsChanged(), !0) : this.$invalidateLocation ? (this.$invalidateLocation = !1, !0) : void 0
        },
        validate: function () {
            var t = this._i5;
            return this.$invalidateVisibility && (this.$invalidateVisibility = !1, this._i5 = this.$visible, !this._i5 || (this.$data || this.$showEmpty) && this._56() !== !1 || (this._i5 = !1)), this._i5 ? (this._1n = !1, this._mwq || (this.initialize(), this._mwq = !0), this.doValidate()) : t != this._i5
        },
        _i3: function (t, e) {
            return t -= this.$x, e -= this.$y, parentToLocal.call(this, {x: t, y: e})
        },
        hitTest: function (t, e, i, n) {
            if (t -= this.$x, e -= this.$y, !this._fi.intersectsPoint(t, e, i))return !1;
            var s = parentToLocal.call(this, {x: t, y: e});
            return t = s.x, e = s.y, !n && this._$t() && this._lrShape && this._lrShape.hitTest(t, e, i, !1, this.$border, this.$backgroundColor || this.$backgroundGradient) ? !0 : this.doHitTest(t, e, i)
        },
        doHitTest: function (t, e, i) {
            return this._je.intersectsPoint(t, e, i)
        },
        hitTestByBounds: function (t, e, i, n) {
            var s = this._i3(t, e);
            return !n && this._$t() && this._lrShape && this._lrShape.hitTest(t, e, i, !1, this.$border, this.$backgroundColor || this.$backgroundGradient) ? !0 : this._je.intersectsPoint(s.x, s.y, i)
        },
        onDataChanged: function () {
            this.$invalidateData = !0, this._1n = !0, this.$invalidateVisibility = !0
        },
        getBounds: function () {
            var t = this._fi.clone();
            return t.offset(this.x, this.y), this.parent && (this.parent.rotate && rotateRect(t, this.parent.rotate, t), t.offset(this.parent.x || 0, this.parent.y || 0)), t
        },
        destroy: function () {
            this._ijed = !0
        },
        _dr: !1
    }, _50(BaseUI.prototype, {
        originalBounds: {
            get: function () {
                return this._je
            }
        }, data: {
            get: function () {
                return this.$data
            }, set: function (t) {
                if (this.$data != t) {
                    var e = this.$data;
                    this.$data = t, this.onDataChanged(t, e)
                }
            }
        }, parent: {
            get: function () {
                return this._jk
            }
        }, showOnTop: {
            get: function () {
                return this._dr
            }, set: function (t) {
                t != this._dr && (this._dr = t, this._1n = !0, this._jk && this._jk._mx4 && this._jk._mx4(this))
            }
        }
    }), defineUIProperties(BaseUI.prototype, {
        visible: {value: !0, validateFlags: ["Visibility", "Location"]},
        showEmpty: {validateFlags: ["Visibility"]},
        anchorPosition: {value: Position.CENTER_MIDDLE, validateFlags: ["AnchorPoint"]},
        position: {value: Position.CENTER_MIDDLE, validateFlags: ["Location"]},
        offsetX: {value: 0, validateFlags: ["Location"]},
        offsetY: {value: 0, validateFlags: ["Location"]},
        layoutByAnchorPoint: {value: !0, validateFlags: ["Size", "AnchorPoint"]},
        padding: {value: 0, validateFlags: ["Size"]},
        border: {value: 0, validateFlags: ["Size"]},
        borderRadius: {value: Defaults.BORDER_RADIUS},
        showPointer: {value: !1, validateFlags: ["Size"]},
        pointerX: {value: 0, validateFlags: ["Size"]},
        pointerY: {value: 0, validateFlags: ["Size"]},
        pointerWidth: {value: Defaults.POINTER_WIDTH},
        backgroundColor: {validateFlags: ["Size"]},
        backgroundGradient: {validateFlags: ["Size", "BackgroundGradient"]},
        selected: {value: !1, validateFlags: ["Size"]},
        selectionBorder: {value: Defaults.SELECTION_BORDER, validateFlags: ["Size"]},
        selectionShadowBlur: {value: Defaults.SELECTION_SHADOW_BLUR, validateFlags: ["Size"]},
        selectionColor: {value: Defaults.SELECTION_COLOR, validateFlags: ["Size"]},
        selectionType: {value: Defaults.SELECTION_TYPE, validateFlags: ["Size"]},
        selectionShadowOffsetX: {value: 0, validateFlags: ["Size"]},
        selectionShadowOffsetY: {value: 0, validateFlags: ["Size"]},
        shadowBlur: {value: 0, validateFlags: ["Size"]},
        shadowColor: {validateFlags: ["Size"]},
        shadowOffsetX: {value: 0, validateFlags: ["Size"]},
        shadowOffsetY: {value: 0, validateFlags: ["Size"]},
        renderColorBlendMode: {},
        renderColor: {},
        x: {value: 0, validateFlags: ["Location"]},
        y: {value: 0, validateFlags: ["Location"]},
        rotatable: {value: !0, validateFlags: ["Rotate", "Size"]},
        rotate: {value: 0, validateFlags: ["Rotate", "Size"]},
        _hostRotate: {validateFlags: ["Rotate"]},
        lineWidth: {value: 0, validateFlags: ["Data"]},
        alpha: {value: 1}
    });
    var PROPERTY_TYPES = [Consts.PROPERTY_TYPE_ACCESSOR, Consts.PROPERTY_TYPE_STYLE, Consts.PROPERTY_TYPE_CLIENT];
    UIBindingMap.prototype = {
        removeBinding: function (t) {
            for (var e = PROPERTY_TYPES.length; --e >= 0;) {
                var i = PROPERTY_TYPES[e], n = this[i];
                for (var s in n) {
                    var o = n[s];
                    Array.isArray(o) ? (_mxt(o, function (e) {
                        return e.target == t
                    }, this), o.length || delete n[s]) : o.target == t && delete n[s]
                }
            }
        }, _2v: function (t, e, i) {
            if (!i && (i = this[e.propertyType || Consts.PROPERTY_TYPE_ACCESSOR], !i))return !1;
            var n = i[t];
            n ? (Array.isArray(n) || (i[t] = n = [n]), n.push(e)) : i[t] = e
        }, _30: function (t, e, i, n, s, o) {
            t = t || Consts.PROPERTY_TYPE_ACCESSOR;
            var r = this[t];
            if (!r)return !1;
            var a = {property: e, propertyType: t, bindingProperty: n, target: i, callback: s, invalidateSize: o};
            this._2v(e, a, r)
        }, onBindingPropertyChange: function (t, e, i, n) {
            var s = this[i || Consts.PROPERTY_TYPE_ACCESSOR];
            if (!s)return !1;
            var o = s[e];
            return o ? (t._1n = !0, doBinding(t, o, i, n), !0) : !1
        }, initBindingProperties: function (t, e) {
            for (var i = PROPERTY_TYPES.length; --i >= 0;) {
                var n = PROPERTY_TYPES[i], s = this[n];
                for (var o in s) {
                    var r = s[o];
                    if (r.bindingProperty) {
                        var a = r.target;
                        if (a) {
                            if (!(a instanceof BaseUI || (a = t[a])))continue
                        } else a = t;
                        var h;
                        h = e === !1 ? t.getProperty(r.property, n) : n == Consts.PROPERTY_TYPE_STYLE ? t.graph.getStyle(t.$data, r.property) : t.$data[r.property], void 0 !== h && (a[r.bindingProperty] = h)
                    }
                }
            }
        }
    };
    var Styles = {};
    Styles.SELECTION_COLOR = "selection.color", Styles.SELECTION_BORDER = "selection.border", Styles.SELECTION_SHADOW_BLUR = "selection.shadow.blur", Styles.SELECTION_SHADOW_OFFSET_X = "selection.shadow.offset.x", Styles.SELECTION_SHADOW_OFFSET_Y = "selection.shadow.offset.y", Styles.SELECTION_TYPE = "selection.type", Styles.RENDER_COLOR = "render.color", Styles.RENDER_COLOR_BLEND_MODE = "render.color.blend.mode", Styles.ALPHA = "alpha", Styles.SHADOW_BLUR = "shadow.blur", Styles.SHADOW_COLOR = "shadow.color", Styles.SHADOW_OFFSET_X = "shadow.offset.x", Styles.SHADOW_OFFSET_Y = "shadow.offset.y", Styles.SHAPE_STROKE = "shape.stroke", Styles.SHAPE_STROKE_STYLE = "shape.stroke.style", Styles.SHAPE_LINE_DASH = "shape.line.dash", Styles.SHAPE_LINE_DASH_OFFSET = "shape.line.dash.offset", Styles.SHAPE_FILL_COLOR = "shape.fill.color", Styles.SHAPE_FILL_GRADIENT = "shape.fill.gradient", Styles.SHAPE_OUTLINE = "shape.outline", Styles.SHAPE_OUTLINE_STYLE = "shape.outline.style", Styles.LINE_CAP = "line.cap", Styles.LINE_JOIN = "line.join", Styles.LAYOUT_BY_PATH = "layout.by.path", Styles.BACKGROUND_COLOR = "background.color", Styles.BACKGROUND_GRADIENT = "background.gradient", Styles.BORDER = "border.width", Styles.BORDER_COLOR = "border.color", Styles.BORDER_LINE_DASH = "border.line.dash", Styles.BORDER_LINE_DASH_OFFSET = "border.line.dash.offset", Styles.BORDER_RADIUS = "border.radius", Styles.PADDING = "padding", Styles.IMAGE_BACKGROUND_COLOR = "image.background.color", Styles.IMAGE_BACKGROUND_GRADIENT = "image.background.gradient", Styles.IMAGE_BORDER = "image.border.width", Styles.IMAGE_BORDER_STYLE = Styles.IMAGE_BORDER_COLOR = "image.border.style", Styles.IMAGE_BORDER_LINE_DASH = "image.border.line.dash", Styles.IMAGE_BORDER_LINE_DASH_OFFSET = "image.border.line.dash.offset", Styles.IMAGE_RADIUS = Styles.IMAGE_BORDER_RADIUS = "image.radius", Styles.IMAGE_PADDING = "image.padding", Styles.IMAGE_Z_INDEX = "image.z.index", Styles.IMAGE_ADJUST = "image.adjust", Styles.IMAGE_ALPHA = "image.alpha", Styles.LABEL_ROTATE = "label.rotate", Styles.LABEL_POSITION = "label.position", Styles.LABEL_VISIBLE = "label.visible", Styles.LABEL_ANCHOR_POSITION = "label.anchor.position", Styles.LABEL_COLOR = "label.color", Styles.LABEL_FONT_SIZE = "label.font.size", Styles.LABEL_FONT_FAMILY = "label.font.family", Styles.LABEL_FONT_STYLE = "label.font.style", Styles.LABEL_PADDING = "label.padding", Styles.LABEL_POINTER_WIDTH = "label.pointer.width", Styles.LABEL_POINTER = "label.pointer", Styles.LABEL_RADIUS = "label.radius", Styles.LABEL_OFFSET_X = "label.offset.x", Styles.LABEL_OFFSET_Y = "label.offset.y", Styles.LABEL_SIZE = "label.size", Styles.LABEL_ALIGN_POSITION = "label.align.position", Styles.LABEL_BORDER = "label.border", Styles.LABEL_BORDER_STYLE = "label.border.style", Styles.LABEL_BACKGROUND_COLOR = "label.background.color", Styles.LABEL_BACKGROUND_GRADIENT = "label.background.gradient", Styles.LABEL_ROTATABLE = "label.rotatable", Styles.LABEL_SHADOW_BLUR = "label.shadow.blur", Styles.LABEL_SHADOW_COLOR = "label.shadow.color", Styles.LABEL_SHADOW_OFFSET_X = "label.shadow.offset.x", Styles.LABEL_SHADOW_OFFSET_Y = "label.shadow.offset.y", Styles.LABEL_Z_INDEX = "label.z.index", Styles.LABEL_ON_TOP = "label.on.top", Styles.GROUP_BACKGROUND_COLOR = "group.background.color", Styles.GROUP_BACKGROUND_GRADIENT = "group.background.gradient", Styles.GROUP_STROKE = "group.stroke", Styles.GROUP_STROKE_STYLE = "group.stroke.color", Styles.GROUP_STROKE_LINE_DASH = "group.stroke.line.dash", Styles.GROUP_STROKE_LINE_DASH_OFFSET = "group.stroke.line.dash.offset", Styles.EDGE_BUNDLE_LABEL_ROTATE = "edge.bundle.label.rotate", Styles.EDGE_BUNDLE_LABEL_POSITION = "edge.bundle.label.position", Styles.EDGE_BUNDLE_LABEL_ANCHOR_POSITION = "edge.bundle.label.anchor.position", Styles.EDGE_BUNDLE_LABEL_COLOR = "edge.bundle.label.color", Styles.EDGE_BUNDLE_LABEL_FONT_SIZE = "edge.bundle.label.font.size", Styles.EDGE_BUNDLE_LABEL_FONT_FAMILY = "edge.bundle.label.font.family", Styles.EDGE_BUNDLE_LABEL_FONT_STYLE = "edge.bundle.label.font.style", Styles.EDGE_BUNDLE_LABEL_PADDING = "edge.bundle.label.padding", Styles.EDGE_BUNDLE_LABEL_POINTER_WIDTH = "edge.bundle.label.pointer.width", Styles.EDGE_BUNDLE_LABEL_POINTER = "edge.bundle.label.pointer", Styles.EDGE_BUNDLE_LABEL_RADIUS = "edge.bundle.label.radius", Styles.EDGE_BUNDLE_LABEL_OFFSET_X = "edge.bundle.label.offset.x", Styles.EDGE_BUNDLE_LABEL_OFFSET_Y = "edge.bundle.label.offset.y", Styles.EDGE_BUNDLE_LABEL_BORDER = "edge.bundle.label.border", Styles.EDGE_BUNDLE_LABEL_BORDER_STYLE = "edge.bundle.label.border.color", Styles.EDGE_BUNDLE_LABEL_BACKGROUND_COLOR = "edge.bundle.label.background.color", Styles.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT = "edge.bundle.label.background.gradient", Styles.EDGE_BUNDLE_LABEL_ROTATABLE = "edge.bundle.label.rotatable", Styles.EDGE_WIDTH = "edge.width", Styles.EDGE_COLOR = "edge.color", Styles.EDGE_OUTLINE = "edge.outline", Styles.EDGE_OUTLINE_STYLE = "edge.outline.style", Styles.EDGE_LINE_DASH = "edge.line.dash", Styles.EDGE_LINE_DASH_OFFSET = "edge.line.dash.offset", Styles.EDGE_FROM_OFFSET = "edge.from.offset",Styles.EDGE_TO_OFFSET = "edge.to.offset",Styles.EDGE_BUNDLE_GAP = "edge.bundle.gap",Styles.EDGE_LOOPED_EXTAND = "edge.looped.extand",Styles.EDGE_EXTEND = "edge.extend",Styles.EDGE_CONTROL_POINT = "edge.control.point",Styles.EDGE_SPLIT_BY_PERCENT = "edge.split.by.percent",Styles.EDGE_SPLIT_PERCENT = "edge.split.percent",Styles.EDGE_SPLIT_VALUE = "edge.split.value",Styles.EDGE_CORNER = "edge.corner",Styles.EDGE_CORNER_RADIUS = "edge.corner.radius",Styles.EDGE_FROM_AT_EDGE = "edge.from.at.edge",Styles.EDGE_TO_AT_EDGE = "edge.to.at.edge",Styles.ARROW_FROM = "arrow.from",Styles.ARROW_FROM_SIZE = "arrow.from.size",Styles.ARROW_FROM_OFFSET = "arrow.from.offset",Styles.ARROW_FROM_STROKE = "arrow.from.stroke",Styles.ARROW_FROM_STROKE_STYLE = "arrow.from.stroke.style",Styles.ARROW_FROM_OUTLINE = "arrow.from.outline",Styles.ARROW_FROM_OUTLINE_STYLE = "arrow.from.outline.style",Styles.ARROW_FROM_LINE_DASH = "arrow.from.line.dash",Styles.ARROW_FROM_LINE_DASH_OFFSET = "arrow.from.line.dash.offset",Styles.ARROW_FROM_FILL_COLOR = "arrow.from.fill.color",Styles.ARROW_FROM_FILL_GRADIENT = "arrow.from.fill.gradient",Styles.ARROW_FROM_LINE_CAP = "arrow.from.line.cap",Styles.ARROW_FROM_LINE_JOIN = "arrow.from.line.join",Styles.ARROW_TO = "arrow.to",Styles.ARROW_TO_SIZE = "arrow.to.size",Styles.ARROW_TO_OFFSET = "arrow.to.offset",Styles.ARROW_TO_STROKE = "arrow.to.stroke",Styles.ARROW_TO_STROKE_STYLE = "arrow.to.stroke.style",Styles.ARROW_TO_OUTLINE = "arrow.to.outline",Styles.ARROW_TO_OUTLINE_STYLE = "arrow.to.outline.style",Styles.ARROW_TO_LINE_DASH = "arrow.to.line.dash",Styles.ARROW_TO_LINE_DASH_OFFSET = "arrow.to.line.dash.offset",Styles.ARROW_TO_FILL_COLOR = "arrow.to.fill.color",Styles.ARROW_TO_FILL_GRADIENT = "arrow.to.fill.gradient",Styles.ARROW_TO_LINE_CAP = "arrow.to.line.cap",Styles.ARROW_TO_LINE_JOIN = "arrow.to.line.join";
    var ElementUIBindingMap = new UIBindingMap, PROPERTY_TYPE_ACCESSOR = Consts.PROPERTY_TYPE_ACCESSOR, PROPERTY_TYPE_STYLE = Consts.PROPERTY_TYPE_STYLE, SAMPLE_STYLE_MODE = !1;
    ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SELECTION_TYPE, null, "selectionType"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SELECTION_BORDER, null, "selectionBorder"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SELECTION_SHADOW_BLUR, null, "selectionShadowBlur"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SELECTION_COLOR, null, "selectionColor"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SELECTION_SHADOW_OFFSET_X, null, "selectionShadowOffsetX"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SELECTION_SHADOW_OFFSET_Y, null, "selectionShadowOffsetY"), ElementUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "name", "label", "data"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_VISIBLE, "label", "visible"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_POSITION, "label", "position"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_ANCHOR_POSITION, "label", "anchorPosition"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_COLOR, "label", "color"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_FONT_SIZE, "label", "fontSize"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_BORDER, "label", "border"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_BORDER_STYLE, "label", "borderColor"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_BACKGROUND_COLOR, "label", "backgroundColor"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_ON_TOP, "label", "showOnTop"), SAMPLE_STYLE_MODE || (ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SHADOW_BLUR, null, "shadowBlur"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SHADOW_COLOR, null, "shadowColor"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SHADOW_OFFSET_X, null, "shadowOffsetX"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SHADOW_OFFSET_Y, null, "shadowOffsetY"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_FONT_FAMILY, "label", "fontFamily"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_FONT_STYLE, "label", "fontStyle"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_ALIGN_POSITION, "label", "alignPosition"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_ROTATE, "label", "rotate"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_PADDING, "label", "padding"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_POINTER_WIDTH, "label", "pointerWidth"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_POINTER, "label", "showPointer"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_RADIUS, "label", "borderRadius"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_OFFSET_X, "label", "offsetX"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_OFFSET_Y, "label", "offsetY"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_ROTATABLE, "label", "rotatable"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_BACKGROUND_GRADIENT, "label", "backgroundGradient"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_SIZE, "label", "size"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_SHADOW_BLUR, "label", "shadowBlur"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_SHADOW_COLOR, "label", "shadowColor"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_SHADOW_OFFSET_X, "label", "shadowOffsetX"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_SHADOW_OFFSET_Y, "label", "shadowOffsetY"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LABEL_Z_INDEX, "label", "zIndex"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.RENDER_COLOR, null, "renderColor"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.RENDER_COLOR_BLEND_MODE, null, "renderColorBlendMode"), ElementUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ALPHA, null, "alpha"));
    var NodeUIBindingMap = new UIBindingMap;
    NodeUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "location"), NodeUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "anchorPosition", null, "_38"), NodeUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "rotate", null, "rotate"), SAMPLE_STYLE_MODE || (NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.BACKGROUND_COLOR, null, "backgroundColor"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.BACKGROUND_GRADIENT, null, "backgroundGradient"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.PADDING, null, "padding"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.BORDER, null, "border"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.BORDER_RADIUS, null, "borderRadius"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.BORDER_COLOR, null, "borderColor"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.BORDER_LINE_DASH, null, "borderLineDash"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.BORDER_LINE_DASH_OFFSET, null, "borderLineDashOffset")), NodeUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "image", "image", "data", "_mzi"), NodeUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "size", "image", "size"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SHAPE_STROKE, "image", "lineWidth"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SHAPE_STROKE_STYLE, "image", "strokeStyle"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SHAPE_FILL_COLOR, "image", "fillColor"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LAYOUT_BY_PATH, "image", "layoutByPath"), SAMPLE_STYLE_MODE || (NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.IMAGE_ADJUST, "image", "adjustType"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SHAPE_OUTLINE, "image", "outline"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SHAPE_OUTLINE_STYLE, "image", "outlineStyle"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SHAPE_FILL_GRADIENT, "image", "fillGradient"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SHAPE_LINE_DASH, "image", "lineDash"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SHAPE_LINE_DASH_OFFSET, "image", "lineDashOffset"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LINE_CAP, "image", "lineCap"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LINE_JOIN, "image", "lineJoin"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.IMAGE_BACKGROUND_COLOR, "image", "backgroundColor"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.IMAGE_BACKGROUND_GRADIENT, "image", "backgroundGradient"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.IMAGE_PADDING, "image", "padding"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.IMAGE_BORDER, "image", "border"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.IMAGE_BORDER_RADIUS, "image", "borderRadius"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.IMAGE_BORDER_COLOR, "image", "borderColor"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.IMAGE_BORDER_LINE_DASH, "image", "borderLineDash"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.IMAGE_BORDER_LINE_DASH_OFFSET, "image", "borderLineDashOffset"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.IMAGE_Z_INDEX, "image", "zIndex"), NodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.IMAGE_ALPHA, "image", "alpha")), NodeUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "expanded", null, null, "checkBody"), NodeUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "enableSubNetwork", null, null, "checkBody");
    var GroupUIBindingMap = new UIBindingMap;
    GroupUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "groupType", null, null, "_5r"), GroupUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "groupImage", null, null, "_5r"), GroupUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "minSize", null, null, "_5r"), GroupUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "padding", null, null, "_5r"), GroupUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.GROUP_BACKGROUND_COLOR, "shape", "fillColor"), GroupUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.GROUP_BACKGROUND_GRADIENT, "shape", "fillGradient"), GroupUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.GROUP_STROKE, "shape", "lineWidth"), GroupUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.GROUP_STROKE_STYLE, "shape", "strokeStyle"), GroupUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.GROUP_STROKE_LINE_DASH, "shape", "lineDash"), GroupUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.GROUP_STROKE_LINE_DASH_OFFSET, "shape", "lineDashOffset");
    var EdgeUIBindingMap = new UIBindingMap;
    EdgeUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "from", "shape", null, "_4m"), EdgeUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "to", "shape", null, "_4m"), EdgeUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "edgeType", "shape", null, "_4m"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_WIDTH, "shape", "lineWidth"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_COLOR, "shape", "strokeStyle"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM, "shape", "fromArrow"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO, "shape", "toArrow"), SAMPLE_STYLE_MODE || (EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_FROM_AT_EDGE, null, "fromAtEdge", "_4m"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_TO_AT_EDGE, null, "toAtEdge", "_4m"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_OUTLINE, "shape", "outline"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_OUTLINE_STYLE, "shape", "outlineStyle"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_LINE_DASH, "shape", "lineDash"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_LINE_DASH_OFFSET, "shape", "lineDashOffset"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_CONTROL_POINT, "shape", null, "_4m"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_FROM_OFFSET, "shape", null, "_4m"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_TO_OFFSET, "shape", null, "_4m"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LINE_CAP, "shape", "lineCap"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LINE_JOIN, "shape", "lineJoin"), EdgeUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "path.segment", null, null, "_4m", !0), EdgeUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "angle", null, null, "_4m", !0), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_SIZE, "shape", "fromArrowSize"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_OFFSET, "shape", "fromArrowOffset"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_STROKE, "shape", "fromArrowStroke"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_STROKE_STYLE, "shape", "fromArrowStrokeStyle"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_OUTLINE, "shape", "fromArrowOutline"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_OUTLINE_STYLE, "shape", "fromArrowOutlineStyle"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_FILL_COLOR, "shape", "fromArrowFillColor"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_FILL_GRADIENT, "shape", "fromArrowFillGradient"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_LINE_DASH, "shape", "fromArrowLineDash"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_LINE_DASH_OFFSET, "shape", "fromArrowLineDashOffset"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_LINE_JOIN, "shape", "fromArrowLineJoin"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_LINE_CAP, "shape", "fromArrowLineCap"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_SIZE, "shape", "toArrowSize"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_OFFSET, "shape", "toArrowOffset"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_STROKE, "shape", "toArrowStroke"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_STROKE_STYLE, "shape", "toArrowStrokeStyle"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_OUTLINE, "shape", "toArrowOutline"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_OUTLINE_STYLE, "shape", "toArrowOutlineStyle"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_FILL_COLOR, "shape", "toArrowFillColor"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_FILL_GRADIENT, "shape", "toArrowFillGradient"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_LINE_DASH, "shape", "toArrowLineDash"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_LINE_DASH_OFFSET, "shape", "toArrowLineDashOffset"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_LINE_JOIN, "shape", "toArrowLineJoin"), EdgeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_LINE_CAP, "shape", "toArrowLineCap"));
    var EdgeBundleLabelBindingMap = new UIBindingMap;
    EdgeBundleLabelBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_COLOR, "bundleLabel", "color"), EdgeBundleLabelBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_POSITION, "bundleLabel", "position"), EdgeBundleLabelBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_ANCHOR_POSITION, "bundleLabel", "anchorPosition"), EdgeBundleLabelBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_FONT_SIZE, "bundleLabel", "fontSize"), EdgeBundleLabelBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_ROTATABLE, "bundleLabel", "rotatable"), SAMPLE_STYLE_MODE || (EdgeBundleLabelBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_ROTATE, "bundleLabel", "rotate"), EdgeBundleLabelBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_FONT_FAMILY, "bundleLabel", "fontFamily"), EdgeBundleLabelBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_FONT_STYLE, "bundleLabel", "fontStyle"), EdgeBundleLabelBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_PADDING, "bundleLabel", "padding"), EdgeBundleLabelBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_POINTER_WIDTH, "bundleLabel", "pointerWidth"), EdgeBundleLabelBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_POINTER, "bundleLabel", "showPointer"), EdgeBundleLabelBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_RADIUS, "bundleLabel", "borderRadius"), EdgeBundleLabelBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_OFFSET_X, "bundleLabel", "offsetX"), EdgeBundleLabelBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_OFFSET_Y, "bundleLabel", "offsetY"), EdgeBundleLabelBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_BORDER, "bundleLabel", "border"), EdgeBundleLabelBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_BORDER_STYLE, "bundleLabel", "borderColor"), EdgeBundleLabelBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_BACKGROUND_COLOR, "bundleLabel", "backgroundColor"), EdgeBundleLabelBindingMap._30(PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT, "bundleLabel", "backgroundGradient"));
    var ShapeNodeUIBindingMap = new UIBindingMap;
    ShapeNodeUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "location"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.BACKGROUND_COLOR, null, "backgroundColor"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.BACKGROUND_GRADIENT, null, "backgroundGradient"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.PADDING, null, "padding"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.BORDER, null, "border"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.BORDER_RADIUS, null, "borderRadius"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.BORDER_COLOR, null, "borderColor"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.BORDER_LINE_DASH, null, "borderLineDash"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.BORDER_LINE_DASH_OFFSET, null, "borderLineDashOffset"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "rotate", null, "rotate"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "path.segment", null, null, "invalidateShape"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "path", "image", "data"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_ACCESSOR, "size", "image", "size"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SHAPE_STROKE, "image", "lineWidth"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SHAPE_STROKE_STYLE, "image", "strokeStyle"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SHAPE_FILL_COLOR, "image", "fillColor"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SHAPE_FILL_GRADIENT, "image", "fillGradient"), SAMPLE_STYLE_MODE || (ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SHAPE_OUTLINE, "image", "outline"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SHAPE_OUTLINE_STYLE, "image", "outlineStyle"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SHAPE_LINE_DASH, "image", "lineDash"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.SHAPE_LINE_DASH_OFFSET, "image", "lineDashOffset"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LINE_CAP, "image", "lineCap"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LINE_JOIN, "image", "lineJoin"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.LAYOUT_BY_PATH, "image", "layoutByPath"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.IMAGE_BACKGROUND_COLOR, "image", "backgroundColor"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.IMAGE_BACKGROUND_GRADIENT, "image", "backgroundGradient"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.IMAGE_PADDING, "image", "padding"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.IMAGE_BORDER, "image", "border"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.IMAGE_BORDER_RADIUS, "image", "borderRadius"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.IMAGE_BORDER_COLOR, "image", "borderColor"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.IMAGE_BORDER_LINE_DASH, "image", "borderLineDash"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.IMAGE_BORDER_LINE_DASH_OFFSET, "image", "borderLineDashOffset"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM, "image", "fromArrow"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_SIZE, "image", "fromArrowSize"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_OFFSET, "image", "fromArrowOffset"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_STROKE, "image", "fromArrowStroke"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_STROKE_STYLE, "image", "fromArrowStrokeStyle"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_FILL_COLOR, "image", "fromArrowFillColor"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_FILL_GRADIENT, "image", "fromArrowFillGradient"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_LINE_DASH, "image", "fromArrowLineDash"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_LINE_DASH_OFFSET, "image", "fromArrowLineDashOffset"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_LINE_JOIN, "image", "fromArrowLineJoin"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_LINE_CAP, "image", "fromArrowLineCap"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_SIZE, "image", "toArrowSize"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_OFFSET, "image", "toArrowOffset"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO, "image", "toArrow"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_STROKE, "image", "toArrowStroke"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_STROKE_STYLE, "image", "toArrowStrokeStyle"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_FILL_COLOR, "image", "toArrowFillColor"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_FILL_GRADIENT, "image", "toArrowFillGradient"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_LINE_DASH, "image", "toArrowLineDash"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_LINE_DASH_OFFSET, "image", "toArrowLineDashOffset"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_LINE_JOIN, "image", "toArrowLineJoin"), ShapeNodeUIBindingMap._30(PROPERTY_TYPE_STYLE, Styles.ARROW_TO_LINE_CAP, "image", "toArrowLineCap"));
    var CHILDREN_SORT_FUNCTION = function (t, e) {
        return t = t.zIndex, e = e.zIndex, t == e ? 0 : (t = t || 0, e = e || 0, t > e ? 1 : e > t ? -1 : void 0)
    }, ElementUI = function (t, e) {
        this.uiBounds = new Rect, _39(this, ElementUI, arguments), this.id = this.$data.id, this.graph = e, this._fe = [], this._mza = new UIBindingMap
    };
    ElementUI.prototype = {
        syncSelection: !1,
        graph: null,
        layoutByAnchorPoint: !1,
        _mza: null,
        _fe: null,
        addChild: function (t, e) {
            t._jk = this, void 0 !== e ? _mh(this._fe, t, e) : this._fe.push(t), t._dr && this._mx4(t), this.invalidateChildrenIndex(), this.invalidateSize(), this.$invalidateChild = !0
        },
        removeChild: function (t) {
            this._mza.removeBinding(t), t._jk = null, _kj(this._fe, t), this._jt && this._jt.remove(t), this.invalidateSize(), this.$invalidateChild = !0
        },
        getProperty: function (t, e) {
            return e == Consts.PROPERTY_TYPE_STYLE ? this.graph.getStyle(this.$data, t) : e == Consts.PROPERTY_TYPE_CLIENT ? this.$data.get(t) : this.$data[t]
        },
        getStyle: function (t) {
            return this.graph.getStyle(this.$data, t)
        },
        _$x: function (t, e, i) {
            var n = this._mza.onBindingPropertyChange(this, t, e, i);
            return ElementUIBindingMap.onBindingPropertyChange(this, t, e, i) || n
        },
        onPropertyChange: function (t) {
            if ("zIndex" == t.kind)return this.invalidateRender(), !0;
            if ("ui" == t.type) {
                if ("invalidate" == t.kind)return this.invalidate(), !0;
                var e = t.value;
                return e && e.ui ? ("add" == t.kind ? this._9a(e) : "remove" == t.kind && this.removeChild(e.ui), !0) : !1
            }
            return this._$x(t.kind, t.propertyType || PROPERTY_TYPE_ACCESSOR, t.value)
        },
        label: null,
        initLabel: function () {
            var t = new LabelUI;
            t.name = "label", this.addChild(t), this.label = t
        },
        initialize: function () {
            this.initLabel(), this.$data._mzb && this.$data._mzb.forEach(this._9a, this), ElementUIBindingMap.initBindingProperties(this), this._mza.initBindingProperties(this, !1)
        },
        addBinding: function (t, e) {
            return e.property ? (e.target = t, void this._mza._2v(e.property, e)) : !1
        },
        _gf: function (t, e) {
            var i = this.$data;
            if (!i._mzb)return !1;
            var n = i._mzb.getById(t.id);
            if (!n || !n.bindingProperties)return !1;
            var s = n.bindingProperties;
            if (_hy(s)) {
                var o = !1;
                return _i1(s, function (t) {
                    return "data" == t.bindingProperty ? (o = setElementProperty(i, e, t.property, t.propertyType), !1) : void 0
                }, this), o
            }
            return "data" == s.bindingProperty ? setElementProperty(i, e, s.property, s.propertyType) : !1
        },
        _9a: function (t) {
            var e = t.ui;
            if (e) {
                var i = t.bindingProperties;
                i && (Array.isArray(i) ? i.forEach(function (t) {
                    this.addBinding(e, t)
                }, this) : this.addBinding(e, i)), this.addChild(e)
            }
        },
        validate: function () {
            return this._mwq || (this.initialize(), this._mwq = !0), this.doValidate()
        },
        _$d: !0,
        invalidateChildrenIndex: function () {
            this._$d = !0
        },
        doValidate: function () {
            if (this._1n && (this._1n = !1, this.validateChildren() && (this.measure(), this.$invalidateSize = !0), this._$d && (this._$d = !1, isChrome ? this._fe = stableSortMerge(this._fe, CHILDREN_SORT_FUNCTION) : this._fe.sort(CHILDREN_SORT_FUNCTION))), UIValidateBoundsBackgroundBorderAndPointer.call(this) && (this.$invalidateRotate = !0), this.$invalidateRotate) {
                UIValidateRotate.call(this), this.uiBounds.setByRect(this._fi);
                var t = this.$selectionBorder || 0, e = Math.max(this.$selectionBorder || 0, this.$shadowOffsetX || 0, this.$selectionShadowOffsetX || 0), i = Math.max(this.$shadowOffsetY || 0, this.$selectionShadowOffsetY || 0), n = Math.max(2 * t, this.$shadowBlur, this.$selectionShadowBlur);
                n += Defaults.UI_BOUNDS_GROW || 0;
                var s = n - e, o = n + e, r = n - i, a = n + i;
                return 0 > s && (s = 0), 0 > o && (o = 0), 0 > r && (r = 0), 0 > a && (a = 0), this.uiBounds.grow(r, s, a, o), this.onBoundsChanged && this.onBoundsChanged(), this.$invalidateBounds = !0, !0
            }
        },
        validateChildren: function () {
            var t = this.$invalidateChild;
            this.$invalidateChild = !1;
            var e = this._mxody, i = this.bodyChanged;
            e && (e.$renderColor = this.$renderColor, e.$renderColorBlendMode = this.$renderColorBlendMode, e.$shadowColor = this.$shadowColor, e.$shadowBlur = this.$shadowBlur, e.$shadowOffsetX = this.$shadowOffsetX, e.$shadowOffsetY = this.$shadowOffsetY), this.bodyChanged = !1, e && e._1n && (i = e.validate() || i, e.$x = 0, e.$y = 0, e.$invalidateRotate && UIValidateRotate.call(e), t = !0);
            for (var n = 0, s = this._fe.length; s > n; n++) {
                var o = this._fe[n];
                if (o != e) {
                    var r = o._1n && o.validate();
                    (r || i) && o._i5 && UILayoutChild(o, e, this), !t && r && (t = !0)
                }
            }
            return t
        },
        measure: function () {
            this._je.clear();
            for (var t, e, i = 0, n = this._fe.length; n > i; i++)t = this._fe[i], t._i5 && (e = t._fi, e.width <= 0 || e.height <= 0 || this._je.addRect(t.$x + e.x, t.$y + e.y, e.width, e.height))
        },
        _jt: null,
        _mx4: function (t) {
            if (!this._jt) {
                if (!t.showOnTop)return;
                return this._jt = new HashList, this._jt.add(t)
            }
            return t.showOnTop ? this._jt.add(t) : this._jt.remove(t)
        },
        draw: function (t, e, i) {
            for (var n, s = 0, o = this._fe.length; o > s; s++)n = this._fe[s], n._i5 && !n.showOnTop && n._jm(t, e, i, this)
        },
        _9c: function (t, e) {
            if (!this._i5 || !this._jt || !this._jt.length)return !1;
            t.save(), t.translate(this.$x, this.$y), this.$rotatable && this.$_hostRotate && t.rotate(this.$_hostRotate), (this.offsetX || this.offsetY) && t.translate(this.offsetX, this.offsetY), this.$rotate && t.rotate(this.$rotate), this.$layoutByAnchorPoint && this._mxc && t.translate(-this._mxc.x, -this._mxc.y), this.shadowColor && (t.shadowColor = this.shadowColor, t.shadowBlur = this.shadowBlur * e, t.shadowOffsetX = this.shadowOffsetX * e, t.shadowOffsetY = this.shadowOffsetY * e), t.beginPath();
            for (var i, n = 0, s = this._fe.length; s > n; n++)i = this._fe[n], i._i5 && i.showOnTop && i._jm(t, e, this.selected, this);
            t.restore()
        },
        doHitTest: function (t, e, i) {
            if (i) {
                if (!this._je.intersectsRect(t - i, e - i, 2 * i, 2 * i))return !1
            } else if (!this._je.intersectsPoint(t, e))return !1;
            return this.hitTestChildren(t, e, i)
        },
        hitTestChildren: function (t, e, i) {
            for (var n, s = this._fe.length - 1; s >= 0; s--)if (n = this._fe[s], n._i5 && n.hitTest(t, e, i))return n;
            return !1
        },
        destroy: function () {
            this._ijed = !0;
            for (var t, e = this._fe.length - 1; e >= 0; e--)t = this._fe[e], t.destroy()
        }
    }, _kl(ElementUI, BaseUI), _50(ElementUI.prototype, {
        renderColorBlendMode: {
            get: function () {
                return this.$renderColorBlendMode
            }, set: function (t) {
                this.$renderColorBlendMode = t, this._1n = !0, this.body && (this.body.renderColorBlendMode = this.$renderColorBlendMode)
            }
        }, renderColor: {
            get: function () {
                return this.$renderColor
            }, set: function (t) {
                this.$renderColor = t, this._1n = !0, this.body && (this.body.renderColor = this.$renderColor)
            }
        }, bodyBounds: {
            get: function () {
                if (this.$invalidateBounds) {
                    this.$invalidateBounds = !1;
                    var t, e = this.body;
                    t = e && e._i5 && !this._$t() ? e._fi.clone() : this._fi.clone(), this.rotate && rotateRect(t, this.rotate, t), t.x += this.$x, t.y += this.$y, this._d6 = t
                }
                return this._d6
            }
        }, bounds: {
            get: function () {
                return new Rect((this.$x || 0) + this.uiBounds.x, (this.$y || 0) + this.uiBounds.y, this.uiBounds.width, this.uiBounds.height)
            }
        }, body: {
            get: function () {
                return this._mxody
            }, set: function (t) {
                t && this._mxody != t && (this._mxody = t, this.bodyChanged = !0, this.invalidateSize())
            }
        }
    }), Defaults.UI_BOUNDS_GROW = 1;
    var ImageUI = function () {
        _39(this, ImageUI, arguments)
    };
    ImageUI.prototype = {
        strokeStyle: "#000",
        lineWidth: 0,
        fillColor: null,
        fillGradient: null,
        _jf: 1,
        _jh: 1,
        outline: 0,
        onDataChanged: function (t) {
            _iw(this, ImageUI, "onDataChanged", arguments), this._ld && this._81 && this._ld._6j(this._81, this), t && this._mzi(t)
        },
        _mzi: function (t) {
            this._ld = _h7(t), this._ld.validate(), (this._ld._lm == IMAGE_TYPE_GIF || this._ld._6p()) && (this._81 || (this._81 = function () {
                this.invalidateData(), this._jk && this._jk.graph && (this._jk.invalidateSize(), this._jk.graph.invalidate())
            }), this._ld._mwi(this._81, this))
        },
        _ld: null,
        initialize: function () {
            this._mzi(this.$data)
        },
        _56: function () {
            return this._ld && this._ld.draw
        },
        _9p: function (t) {
            if (!t || t.width <= 0 || t.height <= 0 || !this.$size || !(this.size instanceof Object))return this._jf = 1, void(this._jh = 1);
            var e = this.size.width, i = this.size.height;
            if ((void 0 === e || null === e) && (e = -1), (void 0 === i || null === i) && (i = -1), 0 > e && 0 > i)return this._jf = 1, void(this._jh = 1);
            var n, s, o = t.width, r = t.height;
            e >= 0 && (n = e / o), i >= 0 && (s = i / r), 0 > e ? n = s : 0 > i && (s = n), this._jf = n, this._jh = s
        },
        validateSize: function () {
            if (this.$invalidateScale) {
                this.$invalidateScale = !1;
                {
                    var t = this._originalBounds;
                    this._jf, this._jh
                }
                this._9p(t), this.setMeasuredBounds(t.width * this._jf, t.height * this._jh, t.x * this._jf, t.y * this._jh)
            }
        },
        measure: function () {
            var t = this._ld.getBounds(this.lineWidth + this.outline);
            return t ? (this.$invalidateScale = !0, void(this._originalBounds = t.clone())) : void this._je.set(0, 0, 0, 0)
        },
        onBoundsChanged: function () {
            this.$invalidateFillGradient = !0
        },
        _1t: function () {
            this.$invalidateFillGradient = !1, this._fillGradient = this.fillGradient ? Gradient.prototype.generatorGradient.call(this.$fillGradient, this._87) : null
        },
        _jx: function (t) {
            var e, i;
            if ("flip" == this.$adjustType)e = 1, i = -1; else {
                if ("mirror" != this.$adjustType)return;
                e = -1, i = 1
            }
            var n = this._je.cx, s = this._je.cy;
            t.translate(n, s), t.scale(e, i), t.translate(-n, -s)
        },
        draw: function (t, e, i, n) {
            if (this._jf && this._jh) {
                if (this.$invalidateFillGradient && this._1t(), t.save(), this.$adjustType && this._jx(t), this._ld._lm == IMAGE_TYPE_SHAPE)return t.scale(this._jf, this._jh), this._ld._lq.draw(t, e, this, i, n || this), void t.restore();
                i && this._83(t, e, n), this._ld.draw(t, e, this, this._jf, this._jh), t.restore()
            }
        },
        doHitTest: function (t, e, i) {
            if (this._ld.hitTest) {
                if ("flip" == this.$adjustType) {
                    var n = this._je.cy;
                    e = 2 * n - e
                } else if ("mirror" == this.$adjustType) {
                    var s = this._je.cx;
                    t = 2 * s - t
                }
                t /= this._jf, e /= this._jh;
                var o = (this._jf + this._jh) / 2;
                return o > 1 && (i /= o, i = 0 | i), this._ld._lq instanceof Path ? this._ld._lq.hitTest(t, e, i, !0, this.$lineWidth, this.$fillColor || this.$fillGradient) : this._ld.hitTest(t, e, i)
            }
            return !0
        },
        $invalidateScale: !0,
        $invalidateFillGradient: !0
    }, _kl(ImageUI, BaseUI), defineUIProperties(ImageUI.prototype, {
        adjustType: {},
        fillColor: {},
        size: {validateFlags: ["Size", "Scale"]},
        fillGradient: {validateFlags: ["FillGradient"]}
    }), _50(ImageUI.prototype, {
        originalBounds: {
            get: function () {
                return this._originalBounds
            }
        }
    }), Defaults.ALIGN_POSITION = Position.CENTER_MIDDLE;
    var LabelUI = function () {
        _39(this, LabelUI, arguments), this.color = Defaults.LABEL_COLOR
    };
    LabelUI.prototype = {
        color: Defaults.LABEL_COLOR,
        showPointer: !0,
        fontSize: null,
        fontFamily: null,
        fontStyle: null,
        _hp: null,
        alignPosition: null,
        measure: function () {
            this.font;
            var t = _1b(this.$data, this.$fontSize || Defaults.FONT_SIZE, this.$font);
            if (this._hp = t, this.$size) {
                var e = this.$size.width || 0, i = this.$size.height || 0;
                return this.setMeasuredBounds(e > t.width ? e : t.width, i > t.height ? i : t.height)
            }
            return this.setMeasuredBounds(t.width, t.height)
        },
        doHitTest: function (t, e, i) {
            return this.$data ? UIHitTest(t, e, i, this) : !1
        },
        draw: function (t, e, i, n) {
            i && this._83(t, e, n);
            var s = this.$fontSize || Defaults.FONT_SIZE;
            if (this.$rotatable && this.$_hostRotate) {
                var o = angleFormat(this.$_hostRotate);
                o > HALF_PI && 3 * HALF_PI > o && (t.translate(this._je.width / 2, this._je.height / 2), t.rotate(Math.PI), t.translate(-this._je.width / 2, -this._je.height / 2))
            }
            var r = this.alignPosition || Defaults.ALIGN_POSITION, a = r.horizontalPosition, h = r.verticalPosition, l = s * Defaults.LINE_HEIGHT, _ = l / 2;
            if (h != TOP && this._hp.height < this._je.height) {
                var u = this._je.height - this._hp.height;
                _ += h == MIDDLE ? u / 2 : u
            }
            t.translate(0, _), t.font != this.$font && (t.font = this.$font), a == CENTER ? (t.textAlign = "center", t.translate(this._je.width / 2, 0)) : a == RIGHT ? (t.textAlign = "right", t.translate(this._je.width, 0)) : t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.color;
            for (var d = 0, c = this.$data.split("\n"), f = 0, E = c.length; E > f; f++) {
                var g = c[f];
                t.fillText(g, 0, d), d += l
            }
        },
        _56: function () {
            return null != this.$data || this.$size
        },
        $invalidateFont: !0
    }, _kl(LabelUI, BaseUI), defineUIProperties(LabelUI.prototype, {
        size: {validateFlags: ["Data"]},
        fontStyle: {validateFlags: ["Data", "Font"]},
        fontSize: {validateFlags: ["Data", "Font"]},
        fontFamily: {validateFlags: ["Data", "Font"]}
    }), _50(LabelUI.prototype, {
        font: {
            get: function () {
                return this.$invalidateFont && (this.$invalidateFont = !1, this.$font = (this.$fontStyle || Defaults.FONT_STYLE) + " " + (this.$fontSize || Defaults.FONT_SIZE) + "px " + (this.$fontFamily || Defaults.FONT_FAMILY)), this.$font
            }
        }
    });
    var ShapeUI = function (t) {
        t = t || new Path, this.pathBounds = new Rect, _39(this, ShapeUI, [t])
    };
    ShapeUI.prototype = {
        layoutByPath: !0,
        layoutByAnchorPoint: !1,
        measure: function () {
            this.$invalidateFromArrow = !0, this.$invalidateToArrow = !0, this.$data.getBounds(this.$lineWidth + this.$outline, this.pathBounds), this.setMeasuredBounds(this.pathBounds)
        },
        validateSize: function () {
            if (this.$invalidateFromArrow || this.$invalidateToArrow) {
                var t = this.pathBounds.clone();
                if (this.$invalidateFromArrow) {
                    this.$invalidateFromArrow = !1;
                    var e = this.validateFromArrow();
                    e && t.add(e)
                }
                if (this.$invalidateToArrow) {
                    this.$invalidateToArrow = !1;
                    var e = this.validateToArrow();
                    e && t.add(e)
                }
                this.setMeasuredBounds(t)
            }
        },
        validateFromArrow: function () {
            if (!this.$data._j7 || !this.$fromArrow)return void(this.$fromArrowShape = null);
            var t = this.$data, e = 0, i = 0, n = this.$fromArrowOffset;
            n && (isNaN(n) && (n.x || n.y) ? (e += n.x || 0, i += n.y || 0) : e += n || 0, e > 0 && 1 > e && (e *= t._j7)), this.fromArrowLocation = t.getLocation(e, i), this.fromArrowLocation.rotate = Math.PI + this.fromArrowLocation.rotate || 0, this.$fromArrowShape = createArrow(this.$fromArrow, this.$fromArrowSize);
            var s = this.$fromArrowShape.getBounds(this.fromArrowStyles.lineWidth + this.fromArrowStyles.outline);
            return this.fromArrowFillGradient instanceof Q.Gradient ? this.fromArrowStyles._fillGradient = Gradient.prototype.generatorGradient.call(this.fromArrowFillGradient, s) : this.fromArrowStyles && (this.fromArrowStyles._fillGradient = null), rotateRectAt(s, this.fromArrowLocation.rotate, s, s.right, s.cy), s.offset(this.fromArrowLocation.x, this.fromArrowLocation.y), s
        },
        validateToArrow: function () {
            if (!this.$data._j7 || !this.$toArrow)return void(this.$toArrowShape = null);
            var t = this.$data, e = 0, i = 0, n = this.$toArrowOffset;
            n && (isNaN(n) && (n.x || n.y) ? (e += n.x || 0, i += n.y || 0) : e += n || 0), 0 > e && e > -1 && (e *= t._j7), e += t._j7, this.toArrowLocation = t.getLocation(e, i), this.$toArrowShape = createArrow(this.$toArrow, this.$toArrowSize);
            var s = this.$toArrowShape.getBounds(this.toArrowStyles.lineWidth + this.toArrowStyles.outline);
            return this.toArrowFillGradient instanceof Q.Gradient ? this.toArrowStyles._fillGradient = Gradient.prototype.generatorGradient.call(this.toArrowFillGradient, s) : this.toArrowStyles && (this.toArrowStyles._fillGradient = null), rotateRectAt(s, this.toArrowLocation.rotate, s, s.right, s.cy), s.offset(this.toArrowLocation.x, this.toArrowLocation.y), s
        },
        _2t: function (t) {
            var e = t ? "from" : "to", i = this[e + "ArrowStroke"];
            void 0 === i && (i = this.$lineWidth);
            var n = this[e + "ArrowStrokeStyle"];
            void 0 === n && (n = this.strokeStyle);
            var s = this[e + "ArrowStyles"];
            s || (this[e + "ArrowStyles"] = s = {}), s.lineWidth = i, s.strokeStyle = n, s.lineDash = this[e + "ArrowLineDash"], s.lineDashOffset = this[e + "ArrowLineDashOffset"], s.fillColor = this[e + "ArrowFillColor"], s.fillGradient = this[e + "ArrowFillGradient"], s.lineCap = this[e + "ArrowLineCap"], s.lineJoin = this[e + "ArrowLineJoin"], s.outline = this[e + "ArrowOutline"] || 0, s.outlineStyle = this[e + "ArrowOutlineStyle"]
        },
        doValidate: function () {
            return this.$fromArrow && this._2t(!0), this.$toArrow && this._2t(!1), _iw(this, ShapeUI, "doValidate")
        },
        drawArrow: function (t, e, i, n) {
            if (this.$fromArrow && this.$fromArrowShape) {
                t.save();
                var s = this.fromArrowLocation, o = s.x, r = s.y, a = s.rotate;
                t.translate(o, r), a && t.rotate(a), this.$fromArrowShape.draw(t, e, this.fromArrowStyles, i, n), t.restore()
            }
            if (this.$toArrow && this.$toArrowShape) {
                t.save();
                var s = this.toArrowLocation, o = s.x, r = s.y, a = s.rotate;
                t.translate(o, r), a && t.rotate(a), this.$toArrowShape.draw(t, e, this.toArrowStyles, i, n), t.restore()
            }
        },
        outlineStyle: null,
        outline: 0,
        onBoundsChanged: function () {
            this.$invalidateFillGradient = !0
        },
        _1t: function () {
            this.$invalidateFillGradient = !1, this._fillGradient = this.$fillGradient ? Gradient.prototype.generatorGradient.call(this.$fillGradient, this._87) : null
        },
        draw: function (t, e, i, n) {
            this.$invalidateFillGradient && this._1t(), this.$data.draw(t, e, this, i, n), this.drawArrow(t, e, i, n)
        },
        doHitTest: function (t, e, i) {
            if (this.$data.hitTest(t, e, i, !0, this.$lineWidth + this.$outline, this.$fillColor || this.$fillGradient))return !0;
            if (this.$toArrow && this.$toArrowShape) {
                var n = t - this.toArrowLocation.x, s = e - this.toArrowLocation.y;
                if (this.toArrowLocation.rotate) {
                    var o = rotatePoint(n, s, -this.toArrowLocation.rotate);
                    n = o.x, s = o.y
                }
                var r = this.toArrowStyles.fillColor || this.toArrowStyles.fillGradient;
                if (this.$toArrowShape.hitTest(n, s, i, !0, this.toArrowStyles.lineWidth, r))return !0
            }
            if (this.$fromArrow && this.$fromArrowShape) {
                var n = t - this.fromArrowLocation.x, s = e - this.fromArrowLocation.y;
                if (this.fromArrowLocation.rotate) {
                    var o = rotatePoint(n, s, -this.fromArrowLocation.rotate);
                    n = o.x, s = o.y
                }
                var r = this.fromArrowStyles.fillColor || this.fromArrowStyles.fillGradient;
                if (this.$fromArrowShape.hitTest(n, s, i, !0, this.fromArrowStyles.lineWidth, r))return !0
            }
            return !1
        },
        $fromArrowOutline: 0,
        $toArrowOutline: 0,
        $invalidateFillGradient: !0,
        $invalidateFromArrow: !0,
        $invalidateToArrow: !0
    }, _kl(ShapeUI, BaseUI), defineUIProperties(ShapeUI.prototype, {
        fillColor: {},
        fillGradient: {validateFlags: ["FillGradient"]},
        fromArrowOffset: {validateFlags: ["FromArrow", "Size"]},
        fromArrowSize: {validateFlags: ["FromArrow", "Size"]},
        fromArrow: {validateFlags: ["FromArrow", "Size"]},
        fromArrowOutline: {validateFlags: ["FromArrow", "Size"]},
        fromArrowStroke: {validateFlags: ["FromArrow", "Size"]},
        toArrowOffset: {validateFlags: ["ToArrow", "Size"]},
        toArrowSize: {validateFlags: ["ToArrow", "Size"]},
        toArrow: {validateFlags: ["ToArrow", "Size"]},
        toArrowOutline: {validateFlags: ["ToArrow", "Size"]},
        toArrowStroke: {validateFlags: ["ToArrow", "Size"]},
        outline: {value: 0, validateFlags: ["Data"]}
    }), _50(ShapeUI.prototype, {
        length: {
            get: function () {
                return this.data.length
            }
        }
    }), EdgeUI.prototype = {
        shape: null, path: null, initialize: function () {
            _iw(this, EdgeUI, "initialize"), this.path = new Path, this.path._dn = !1, this.shape = new ShapeUI(this.path), this.addChild(this.shape, 0), this._mxody = this.shape, EdgeUIBindingMap.initBindingProperties(this)
        }, _1q: !0, _65: null, _$t: function () {
            return !1
        }, _45: function () {
            return !1
        }, validatePoints: function () {
            this.shape.invalidateData();
            var t = this.$data, e = this.path;
            e.clear();
            var i = t.fromAgent, n = t.toAgent;
            i && n && drawEdge(this, t, e, i, n)
        }, drawLoopedEdge: function (t, e, i, n) {
            drawLoopedEdge(this, n, t)
        }, drawEdge: function (t, e, i, n, s, o) {
            var r = this.getStyle(Styles.EDGE_FROM_OFFSET), a = this.getStyle(Styles.EDGE_TO_OFFSET);
            if (r && (s.x += r.x || 0, s.y += r.y || 0), a && (o.x += a.x || 0, o.y += a.y || 0), n == Consts.EDGE_TYPE_ZIGZAG) {
                var h = s.center, l = o.center, _ = (h.x + l.x) / 2, u = (h.y + l.y) / 2, d = h.x - l.x, c = h.y - l.y, f = Math.sqrt(d * d + c * c), E = Math.atan2(c, d);
                E += Math.PI / 6, f *= .04, f > 30 && (f = 30);
                var g = Math.cos(E) * f, p = Math.sin(E) * f;
                return t.lineTo(_ - p, u + g), void t.lineTo(_ + p, u - g)
            }
            var v = calculateEdgeSegments(this, this.data, s, o, e, i, s.center, o.center);
            v && (t._fg = v)
        }, _2h: function () {
            if (!this.$data.isBundleEnabled())return null;
            var t = this.graph._8t._8x(this.$data);
            if (!t || !t.canBind(this.graph) || !t._gs)return null;
            var e = t.getYOffset(this);
            return t.isPositiveOrder(this.$data) || (e = -e), e
        }, checkBundleLabel: function () {
            var t = this.getBundleLabel();
            return t ? (this.bundleLabel || this.createBundleLabel(), this.bundleLabel._i5 = !0, void(this.bundleLabel.data = t)) : void(this.bundleLabel && (this.bundleLabel._i5 = !1, this.bundleLabel.data = null))
        }, createBundleLabel: function () {
            var t = new LabelUI;
            t.editable = !1, this.bundleLabel = t, this.addChild(this.bundleLabel), EdgeBundleLabelBindingMap.initBindingProperties(this)
        }, getBundleLabel: function () {
            return this.graph.getBundleLabel(this.data)
        }, doValidate: function () {
            return this._1q && (this._1q = !1, this.validatePoints()), this.checkBundleLabel(), _iw(this, EdgeUI, "doValidate")
        }, _4m: function () {
            this._1q = !0, this.invalidateSize()
        }, _$x: function (t, e, i) {
            var n = this._mza.onBindingPropertyChange(this, t, e, i);
            return n = ElementUIBindingMap.onBindingPropertyChange(this, t, e, i) || n, this.bundleLabel && this.bundleLabel.$data && (n = EdgeBundleLabelBindingMap.onBindingPropertyChange(this, t, e, i) || n), EdgeUIBindingMap.onBindingPropertyChange(this, t, e, i) || n
        }
    }, _kl(EdgeUI, ElementUI), EdgeUI.drawReferenceLine = function (t, e, i, n) {
        if (t.moveTo(e.x, e.y), !n || n == Consts.EDGE_TYPE_DEFAULT)return void t.lineTo(i.x, i.y);
        if (n == Consts.EDGE_TYPE_VERTICAL_HORIZONTAL)t.lineTo(e.x, i.y); else if (n == Consts.EDGE_TYPE_HORIZONTAL_VERTICAL)t.lineTo(i.x, e.y); else if (0 == n.indexOf(Consts.EDGE_TYPE_ORTHOGONAL)) {
            var s;
            s = n == Consts.EDGE_TYPE_ORTHOGONAL_HORIZONTAL ? !0 : n == Consts.EDGE_TYPE_ORTHOGONAL_VERTICAL ? !1 : Math.abs(e.x - i.x) > Math.abs(e.y - i.y);
            var o = (e.x + i.x) / 2, r = (e.y + i.y) / 2;
            s ? (t.lineTo(o, e.y), t.lineTo(o, i.y)) : (t.lineTo(e.x, r), t.lineTo(i.x, r))
        }
        t.lineTo(i.x, i.y)
    }, _50(EdgeUI.prototype, {
        length: {
            get: function () {
                return this.path ? this.path.length : 0
            }
        }
    }), EdgeUI.prototype.addPoint = function (t, e, i) {
        var n = _7i(this.path, t, e, i);
        if (n && n.length > 2) {
            var s = this.data, o = n[n.length - 1];
            s.pathSegments = o.type == LINE_TO ? n.splice(1, n.length - 2) : n.splice(1, n.length - 1)
        }
    }, NodeUI.prototype = {
        _38: null, image: null, initialize: function () {
            _iw(this, NodeUI, "initialize"), this._mwx(), NodeUIBindingMap.initBindingProperties(this)
        }, _mzi: function () {
            this.data.image ? this.image && (this.body = this.image) : this.label && (this.body = this.label)
        }, _mwx: function () {
            this.image = new ImageUI, this.addChild(this.image, 0), this._mzi()
        }, doValidate: function () {
            this.body && (this instanceof GroupUI && !this.$data.groupImage && this._68() ? this.body.$layoutByAnchorPoint = !1 : (this.body.$layoutByAnchorPoint = null != this._38, this.body.anchorPosition = this._38));
            var t = this.$data.$location, e = 0, i = 0;
            t && (e = t.x, i = t.y);
            var n = this.$x != e || this.$y != i;
            return n && (this.$invalidateBounds = !0), this.$x = e, this.$y = i, ElementUI.prototype.doValidate.call(this) || n
        }, _$x: function (t, e, i) {
            var n = this._mza.onBindingPropertyChange(this, t, e, i);
            return n = ElementUIBindingMap.onBindingPropertyChange(this, t, e, i) || n, NodeUIBindingMap.onBindingPropertyChange(this, t, e, i) || n
        }
    }, _kl(NodeUI, ElementUI);
    var UI_SORT_FUNCTION = function (t, e) {
        return t = t.$data.zIndex || 0, e = e.$data.zIndex || 0, t - e
    };
    BaseCanvas.prototype = {
        _kt: 1,
        _mzx: null,
        _8b: null,
        _8g: null,
        _$g: !0,
        _md: null,
        _mf: null,
        _js: null,
        _mwo: null,
        _6f: !1,
        _mwq: !1,
        _k2: null,
        _4b: function (t, e) {
            for (var i = this._mzx, n = 0, s = i.length; s > n; n++)if (t.call(e, i[n]) === !1)return !1
        },
        _eo: function (t, e) {
            this._md.forEach(t, e)
        },
        _$z: function (t, e) {
            for (var i = this._mzx, n = i.length - 1; n >= 0; n--)if (t.call(e, i[n]) === !1)return !1
        },
        _4j: function (t, e) {
            this._md.forEachReverse(t, e)
        },
        _3j: function (t, e) {
            this._7n && this._7n._3j && this._7n._3j(t, e)
        },
        _mzc: function () {
            this._k2._43(), this._kz && this._kz.originAtCenter ? this._k2._eu(0, 0) : this._k2._2a = !0
        },
        _4c: function () {
            return this._$g && (this._$g = !1, this._1x()), this._8g
        },
        _3m: function () {
            return this._k2._12 ? !1 : (this._k2._12 = !0, void this._mzz())
        },
        _mzz: function () {
            this._6f || (this._6f = !0, _ec(this._fr.bind(this)))
        },
        _mws: function () {
            var t = !this._mwq || 0 == this._md.length;
            this._mwq || (this._mwq = !0, this._mzc(), this._$g = !0), this._mwh(t);
            var e = this._js.g;
            if (this._md.isEmpty())return e._la(), this._topCanvas._jm(), this._6f = !1, this._k2._jq(this, !0), void this._4c();
            if (this._k2._jq(this, this._kz.fullRefresh || this._mwo._lp), this._ja) {
                var i = this._ks;
                e.canvas.ratio && (i *= e.canvas.ratio), this._ja(e, i, t)
            }
            this._mwo._la(), this._k2._6m(), this._topCanvas._jm(), this._6f = !1
        },
        _fr: function () {
            this._6f && (this._ijed || (this._mwq && this._kz && this._kz._$s && (this._kz._$s = !1, this._kz.forEach(function (t) {
                t.invalidateVisibility(!0)
            })), this._mws(), this._28()))
        },
        _fs: null,
        _1g: function (t, e, i, n, s) {
            if (!i || !n)return void this._5q();
            var o = this._mzx, r = this._8b;
            this._5q(), this._fs.length = 0;
            var a, h = {}, l = this._mwo;
            s = s || l._lp;
            for (var _, u, d, c, f, E, g = this._md._jz, p = t + i, v = e + n, T = 0, m = g.length; m > T; T++)if (E = g[T], f = E.__oldBounds, E.__oldBounds = null, E._i5)if (c = E.__jeChanged, E.__jeChanged = !1, _ = E.uiBounds, u = _.x + E.$x, d = _.y + E.$y, p > u && v > d && u + _.width > t && d + _.height > e) {
                if (a = E.$data.zIndex, a in h || (h[a] = !0, this._fs.push(a || 0)), o.push(E), this._8b[E.id] = E, s)continue;
                f && (l._lr(f.x, f.y, f.width, f.height), s = l._lp), c && (l._lr(u, d, _.width, _.height), s = l._lp)
            } else!s && r[E.id] && f && (l._lr(f.x, f.y, f.width, f.height), s = l._lp); else!s && f && (l._lr(f.x, f.y, f.width, f.height), s = l._lp)
        },
        _d9: function (t) {
            var e = t.$data.__i5Changed;
            return t.$data.__i5Changed = !1, t._1n || t.$data._6f ? (t.$data._6f = !1, t._mwq && (t.__oldBounds = {
                x: t.$x + t.uiBounds.x,
                y: t.$y + t.uiBounds.y,
                width: t.uiBounds.width,
                height: t.uiBounds.height
            }), t.__jeChanged = t.validate(), e || t.__jeChanged) : (e && t._mwq && (t.__oldBounds = {
                x: t.$x + t.uiBounds.x,
                y: t.$y + t.uiBounds.y,
                width: t.uiBounds.width,
                height: t.uiBounds.height
            }), e)
        },
        _ja: function (t, e, i, n) {
            n = n || this._k2._76;
            var s = n.x, o = n.y, r = n.width, a = n.height;
            this._1g(s, o, r, a, i), this._4c(), this._fs.length && (isChrome ? (this._fs.sort(), this._mzx = stableSortMerge(this._mzx, UI_SORT_FUNCTION)) : this._mzx.sort(UI_SORT_FUNCTION));
            try {
                this._is(t, e)
            } catch (h) {
                Q.error(h), this._kwFlag || (this._kwFlag = !0, this._kz.invalidate())
            }
        },
        _is: function (t, e) {
            t.save(), this._mwo._k1(t, this._js, this._k2), this._k2._mwy(t);
            for (var i, n, s = this._mzx, o = [], r = 0, a = s.length; a > r; r++)i = s[r], n = i.uiBounds, (this._mwo._lp || this._mwo._en(n.x + i.$x, n.y + i.$y, n.width, n.height)) && (i._jm(t, e), i._jt && i._jt.length && o.push(i));
            if (o.length)for (r = 0, a = o.length; a > r; r++)o[r]._9c(t, e);
            t.restore()
        },
        _fw: function (t, e, i) {
            t.save(), t.translate(-i.x * e, -i.y * e), t.scale(e, e);
            var n, s, o = this._md._jz.slice();
            this._fs.length && (isChrome ? (this._fs.sort(), o = stableSortMerge(o, UI_SORT_FUNCTION)) : o.sort(UI_SORT_FUNCTION));
            for (var r = [], a = 0, h = o.length; h > a; a++)n = o[a], n._i5 && (s = n.uiBounds, i.intersectsRect(s.x + n.$x, s.y + n.$y, s.width, s.height) && (n._jm(t, e), n._jt && n._jt.length && r.push(n)));
            if (r.length)for (a = 0, h = r.length; h > a; a++)r[a]._9c(t, e);
            t.restore()
        },
        _10: function () {
        },
        _1x: function () {
            for (var t, e, i = this._md._jz, n = new Rect, s = i.length - 1; s >= 0; s--)t = i[s], t._i5 && (e = t.uiBounds, n.addRect(t.$x + e.x, t.$y + e.y, e.width, e.height));
            var o = this._8g;
            this._8g = n, n.equals(o) || this._10(o, n)
        },
        _mwh: function () {
            for (var t, e = this._md._jz, i = e.length - 1; i >= 0; i--)t = e[i], this._d9(t) && !this._$g && (this._$g = !0)
        },
        _1v: function (t, e, i, n) {
            this._mwo._lp || (t && (t > 0 && this._mwo._lr(this._k2._76.x, this._k2._76.y, t / this._k2._ks, this._k2._93 / this._k2._ks), i + t < this._k2._mxx && this._mwo._lr(this._k2._76.x + (i + t) / this._k2._ks, this._k2._76.y, (this._k2._mxx - i - t) / this._k2._ks, this._k2._93 / this._k2._ks)), e && (e > 0 && this._mwo._lr(this._k2._76.x, this._k2._76.y, this._k2._mxx / this._k2._ks, e / this._k2._ks), n + e < this._k2._93 && this._mwo._lr(this._k2._76.x, this._k2._76.y + (n + e) / this._k2._ks, this._k2._mxx / this._k2._ks, (this._k2._93 - n - e) / this._k2._ks)))
        },
        _ee: function (t, e) {
            this._mzz(), this._k2._ee(t, e)
        },
        _mwg: function (t, e, i) {
            this._mzz(), this._k2._mwg(t, e, i)
        },
        _8w: function () {
        },
        _g4: function (t, e, i) {
            return this._mwq ? void(this._k2._g4(t, e, i) !== !1 && this._mzz()) : void(this._k2._ks = t)
        },
        _23: function () {
            var t = this._4c();
            if (!t.isEmpty()) {
                var e = this._k2._mxx / t.width, i = this._k2._93 / t.height, n = Math.min(e, i);
                return n = Math.max(this._fp, Math.min(this._g7, n)), {scale: n, cx: t.cx, cy: t.cy}
            }
        },
        _k3: function (t, e, i) {
            return this._k2._k3(t, e, i) === !1 ? !1 : void this._mzz()
        },
        _in: function (t, e) {
            return this._k2._in(t, e) === !1 ? !1 : void this._mzz()
        },
        _k5: function (t, e) {
            return this._k2._k5(t, e) === !1 ? !1 : void this._mzz()
        },
        _6r: function () {
            return this._k2._6rFlag ? !1 : (this._k2._6rFlag = !0, void this._mzz())
        },
        _5q: function () {
            this._mzx.length = 0, this._8b = {}
        },
        _kp: function () {
            this._la()
        },
        _ij: function () {
            this._la(), this._ijed = !0, this._6f = !1, this._topCanvas.clear(), this._8p.length = 0, this._7n && (this._7n._ij(), delete this._7n)
        },
        _la: function () {
            this._mwq = !1, this._$g = !0, this._md.clear(), this._5q(), this._mwo._la(), this._mzz()
        },
        _8q: function (t, e, i, n) {
            var s = this._ks;
            return new Rect(this._mzq(t), this._mzn(e), i / s, n / s)
        },
        _mzq: function (t) {
            return this._k2._mzq(t)
        },
        _mzn: function (t) {
            return this._k2._mzn(t)
        },
        _e4: function (t) {
            return this._k2._e4(t)
        },
        _eh: function (t) {
            return this._k2._eh(t)
        },
        _kn: function (t) {
            return this._md.getById(t.id || t)
        },
        _$f: function (t) {
            var e = this._8d(t);
            return e.x = this._mzq(e.x), e.y = this._mzn(e.y), e
        },
        _gb: function (t, e) {
            return {x: this._e4(t), y: this._eh(e)}
        },
        _ei: function (t, e) {
            return {x: this._mzq(t), y: this._mzn(e)}
        },
        _8d: function (t) {
            return _8d(t, this._jsPanel)
        },
        _3t: function (t) {
            if (void 0 !== t.uiId)return t.uiId ? this._md.getById(t.uiId) : null;
            var e = Math.round(Defaults.SELECTION_TOLERANCE / this._k2._ks) || .1;
            this._js.ratio && (e *= this._js.ratio);
            for (var i, n = this._$f(t), s = n.x, o = n.y, r = this._mzx, a = r.length - 1; a >= 0; a--)if (i = r[a], i._i5 && i.hitTest(s, o, e))return t.uiId = i.id, i;
            t.uiId = null
        },
        hitTest: function (t) {
            var e = this._3t(t);
            if (!e)return null;
            var i = Math.round(Defaults.SELECTION_TOLERANCE / this._k2._ks) || 1;
            this._js.ratio && (i *= this._js.ratio);
            var n = this._$f(t), s = n.x, o = n.y, r = e.hitTest(s, o, i, !0);
            return r instanceof BaseUI ? r : e
        },
        _mwv: function (t) {
            void 0 !== t.id && (t = t.id);
            var e = this._md.getById(t);
            return e ? new Rect((e.$x || 0) + e.uiBounds.x, (e.$y || 0) + e.uiBounds.y, e.uiBounds.width, e.uiBounds.height) : void 0
        },
        _8p: null,
        _28: function () {
            if (!this._8p.length)return !1;
            var t = this._8p;
            this._8p = [], _i1(t, function (t) {
                try {
                    t.delay ? _f7(t.call, t.scope, t.delay) : t.call.call(t.scope)
                } catch (e) {
                }
            }, this), this._fr()
        },
        callLater: function (t, e, i) {
            e && _hc(e) && (i = e, e = null);
            var n = this._8p;
            n.push({call: t, scope: e, delay: i}), this._6f || this._28()
        },
        _6y: function () {
            return this._jsPanel || this._5t(), this._jsPanel
        },
        _5t: function () {
            var t = document.createElement("div");
            t.className = CANVAS_PANEL_CLASS_NAME, t.tabIndex = 0, this._js = createCanvas(t), this.ratio = this._js.ratio || 1, this._topCanvas = new TopCanvas(this, t), this._jsPanel = t
        },
        _dy: function (t) {
            var e = this._6y();
            e.parentNode && e.parentNode.removeChild(e), t.appendChild(this._6y()), _mxu(t, "Q-Graph")
        }
    }, css_mhRule(".Q-Graph", "text-align: left; outline: none;-webkit-tap-highlight-color:rgba(0,0,0,0);user-select: none");
    var CANVAS_STYLES = {
        position: "absolute",
        "user-select": "none",
        outline: "none",
        "transform-origin": "0 0",
        "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
    }, CANVAS_CLASS_NAME = "Q-Canvas";
    css_mhRule("." + CANVAS_CLASS_NAME, CANVAS_STYLES);
    var CANVAS_DIV_STYLES = {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        outline: "none",
        padding: "0"
    }, CANVAS_PANEL_CLASS_NAME = "Q-CanvasPanel";
    css_mhRule("." + CANVAS_PANEL_CLASS_NAME, CANVAS_DIV_STYLES), _50(BaseCanvas.prototype, {
        _76: {
            get: function () {
                return this._k2._76
            }
        }, _eg: {
            get: function () {
                return this._k2._eg
            }, set: function (t) {
                return !t || 1 > t ? !1 : void(this._k2._eg = t)
            }
        }, _g7: {
            get: function () {
                return this._k2._g7
            }, set: function (t) {
                return !t || 1 > t ? !1 : void(this._k2._g7 = t)
            }
        }, _fp: {
            get: function () {
                return this._k2._fp
            }, set: function (t) {
                return !t || 0 >= t ? !1 : void(this._k2._fp = t)
            }
        }, _ks: {
            get: function () {
                return this._k2._g8()
            }, set: function (t) {
                this._g4(t)
            }
        }, _mm: {
            get: function () {
                return this._k2._lf()
            }
        }, _mn: {
            get: function () {
                return this._k2._lg()
            }
        }
    }), CanvasMatrix.prototype = {
        _dh: null,
        _mxx: 0,
        _93: 0,
        _2a: !0,
        _12: !0,
        _k2: null,
        _76: null,
        _eg: 1.3,
        _g7: 10,
        _fp: .1,
        _ks: 1,
        _mm: 0,
        _mn: 0,
        _6m: function () {
            this._k2._ft(this._dh._js)
        },
        _43: function () {
            return this._12 = !1, this._5h(this._dh._jsPanel.clientWidth, this._dh._jsPanel.clientHeight)
        },
        _5h: function (t, e) {
            return this._mxx == t && this._93 == e ? !1 : (this._mxx = t, this._93 = e, void this._dh._3j(t, e))
        },
        _eu: function (t, e, i) {
            i && (i = Math.max(this._fp, Math.min(this._g7, i)), this._ks = i), this._mm = this._mxx / 2 - t * this._ks, this._mn = this._93 / 2 - e * this._ks, this._2a = !0
        },
        _2w: function (t, e) {
            t = t || this._mxx, e = e || this._93, this._76.set(-this._mm / this._ks, -this._mn / this._ks, t / this._ks, e / this._ks)
        },
        _k3: function (t, e, i) {
            return this._g4(this._5u() * t, e, i)
        },
        _k5: function (t, e) {
            return this._g4(this._5u() * this._eg, t, e)
        },
        _in: function (t, e) {
            return this._g4(this._5u() / this._eg, t, e)
        },
        _g4: function (t, e, i) {
            this._6rFlag = !1, t = Math.max(this._fp, Math.min(this._g7, t));
            var n = this._5u();
            return void 0 === e && (e = this._mxx / 2, i = this._93 / 2), t != n && (this._2a = !0, this._dh._8w(n, t)), this._k2._g4(t / this._ks, e, i)
        },
        _5u: function () {
            return this._ks * this._k2._ks
        },
        _ee: function (t, e) {
            this._k2._ee(t, e)
        },
        _mwg: function (t, e, i) {
            var n = this._lf(), s = this._lg(), o = this._g8();
            return i && (i = Math.max(this._fp, Math.min(this._g7, i))), t != n || e != s || i && i != o ? (i && i != o ? (i /= this._ks, this._2a = !0) : i = this._k2._ks, t -= n * i, e -= s * i, this._k2._9e(i, t, e), this._dh._32(n, s, o, arguments[0], arguments[1], arguments[2]), o != arguments[2] && this._dh._8w(o, arguments[2]), !0) : !1
        },
        _6r: function () {
            this._6rFlag = !0
        },
        _g8: function () {
            return this._ks * this._k2._ks
        },
        _lf: function () {
            return this._mm * this._k2._ks + this._k2._mm
        },
        _lg: function () {
            return this._mn * this._k2._ks + this._k2._mn
        },
        _jq: function (t, e) {
            this._12 && this._43(), isTouchSupport && isAndroid && (e = !0);
            var i = t._js, n = i.ratio || 1, s = i.clientWidth, o = i.clientHeight, r = this._mxx != s, a = this._93 != o, h = r || a;
            h && t._topCanvas._js.setSize(this._mxx, this._93);
            var l = this._mm, _ = this._mn, u = this._ks;
            if (this._6rFlag) {
                this._6rFlag = !1;
                var d = t._23();
                d && this._eu(d.cx, d.cy, d.scale)
            }
            if (this._2a || e || h)return this._2a = !1, this._ks *= this._k2._ks, this._mm = this._mm * this._k2._ks + this._k2._mm, this._mn = this._mn * this._k2._ks + this._k2._mn, this._k2._ks = 1, this._k2._mm = 0, this._k2._mn = 0, h && i.setSize(this._mxx, this._93), t._mwo._lp = !0, this._2w(this._mxx, this._93), void((l != this._mm || _ != this._mn || u != this._ks) && (t._32(l, _, u, this._mm, this._mn, this._ks), u != this._ks && t._8w(u, this._ks)));
            var c = this._k2._mm, f = this._k2._mn;
            if (c || f) {
                this._k2._mm = 0, this._k2._mn = 0, this._mm += c, this._mn += f, this._2w(s, o);
                var E = i.g;
                this._ep(E, i, c * n, f * n), t._1v(c, f, s, o), t._32(l, _, u, this._mm, this._mn, this._ks)
            }
        },
        _ep: function (t, e, i, n) {
            var s = this._mxackCanvas;
            s || (s = this._mxackCanvas = document.createElement("canvas"), s.g = s.getContext("2d")), s.width = e.width, s.height = e.height, s.g.drawImage(e, i, n), t._la(), t.drawImage(s, 0, 0)
        },
        _mwy: function (t) {
            1 != t.canvas.ratio && t.scale(t.canvas.ratio, t.canvas.ratio), t.translate(this._mm, this._mn), t.scale(this._ks, this._ks)
        },
        _mzq: function (t) {
            return (t - this._mm) / this._ks
        },
        _mzn: function (t) {
            return (t - this._mn) / this._ks
        },
        _e4: function (t) {
            return t * this._ks + this._mm
        },
        _eh: function (t) {
            return t * this._ks + this._mn
        }
    };
    var ClipSupport = function () {
        this._gm = [], this._je = new Rect
    };
    ClipSupport.prototype = {
        _gk: 20, _gm: null, _lp: !1, _je: null, _la: function () {
            this._lp = !1, this._gm.length = 0, this._je.clear()
        }, _iv: function () {
            return this._lp || this._gm.length > 0
        }, _lr: function (t, e, i, n) {
            this._lp || 0 >= i || 0 >= n || (this._gm.push({
                x: t,
                y: e,
                width: i,
                height: n
            }), this._je.addRect(t, e, i, n))
        }, _gn: function (t) {
            this._lr(t.x, t.y, t.width, t.height)
        }, _en: function (t, e, i, n) {
            if (!this._je.intersectsRect(t, e, i, n))return !1;
            if (withoutClip || this._gm.length >= this._gk)return !0;
            for (var s, o = 0, r = this._gm.length; r > o; o++)if (s = this._gm[o], intersectsRect(t, e, i, n, s.x, s.y, s.width, s.height))return !0;
            return !1
        }, _k1: function (t, e, i) {
            if (this._lp)return t.setTransform(1, 0, 0, 1, 0, 0), void(isAndroid && 4.3 > androidVersion ? (t.clearRect(0, 0, e.width, e.height), e.style.display = "none", e.offsetHeight, e.style.display = "inherit") : t.clearRect(0, 0, e.width, e.height));
            t.beginPath();
            var n, s, o, r, a = i._ks, h = this._gm, l = e.ratio || 1;
            if (withoutClip || h.length >= this._gk)return n = i._e4(this._je.x) * l, s = i._eh(this._je.y) * l, o = _hr(n + this._je.width * a * l) - (n = _mz8(n)), r = _hr(s + this._je.height * a * l) - (s = _mz8(s)), t.clearRect(n, s, o, r), t.rect(n, s, o, r), void t.clip();
            for (var _, u = 0, d = h.length; d > u; u++)_ = h[u], n = i._e4(_.x) * l, s = i._eh(_.y) * l, o = _hr(n + _.width * a * l) - (n = _mz8(n)), r = _hr(s + _.height * a * l) - (s = _mz8(s)), t.clearRect(n, s, o, r), t.rect(n, s, o, r);
            t.clip()
        }
    };
    var DefaultStyles = {};
    DefaultStyles[Styles.SELECTION_COLOR] = Defaults.SELECTION_COLOR, DefaultStyles[Styles.SELECTION_BORDER] = Defaults.SELECTION_BORDER, DefaultStyles[Styles.SELECTION_SHADOW_BLUR] = Defaults.SELECTION_SHADOW_BLUR, DefaultStyles[Styles.SELECTION_TYPE] = Consts.SELECTION_TYPE_SHADOW, DefaultStyles[Styles.SELECTION_SHADOW_OFFSET_X] = 2, DefaultStyles[Styles.SELECTION_SHADOW_OFFSET_Y] = 2, DefaultStyles[Styles.LABEL_COLOR] = Defaults.LABEL_COLOR, DefaultStyles[Styles.LABEL_POSITION] = Position.CENTER_BOTTOM, DefaultStyles[Styles.LABEL_ANCHOR_POSITION] = Position.CENTER_TOP, DefaultStyles[Styles.LABEL_PADDING] = new Insets(0, 2), DefaultStyles[Styles.LABEL_POINTER_WIDTH] = 8, DefaultStyles[Styles.LABEL_RADIUS] = 8, DefaultStyles[Styles.LABEL_POINTER] = !0, DefaultStyles[Styles.LABEL_BORDER] = 0, DefaultStyles[Styles.LABEL_BORDER_STYLE] = "#000", DefaultStyles[Styles.LABEL_ROTATABLE] = !0, DefaultStyles[Styles.LABEL_BACKGROUND_COLOR] = null, DefaultStyles[Styles.LABEL_BACKGROUND_GRADIENT] = null, DefaultStyles[Styles.EDGE_COLOR] = "#555555", DefaultStyles[Styles.EDGE_WIDTH] = 1.5, DefaultStyles[Styles.EDGE_FROM_AT_EDGE] = !0, DefaultStyles[Styles.EDGE_TO_AT_EDGE] = !0, DefaultStyles[Styles.GROUP_BACKGROUND_COLOR] = _hs(3438210798), DefaultStyles[Styles.GROUP_STROKE] = 1, DefaultStyles[Styles.GROUP_STROKE_STYLE] = "#000", DefaultStyles[Styles.ARROW_TO] = !0, DefaultStyles[Styles.ARROW_FROM_SIZE] = Defaults.ARROW_SIZE, DefaultStyles[Styles.ARROW_TO_SIZE] = Defaults.ARROW_SIZE, DefaultStyles[Styles.EDGE_LOOPED_EXTAND] = 10, DefaultStyles[Styles.EDGE_CORNER_RADIUS] = 8, DefaultStyles[Styles.EDGE_CORNER] = Consts.EDGE_CORNER_ROUND, DefaultStyles[Styles.EDGE_SPLIT_BY_PERCENT] = !0, DefaultStyles[Styles.EDGE_EXTEND] = 20, DefaultStyles[Styles.EDGE_SPLIT_PERCENT] = .5, DefaultStyles[Styles.EDGE_SPLIT_VALUE] = 20, DefaultStyles[Styles.EDGE_BUNDLE_GAP] = 20, DefaultStyles[Styles.EDGE_BUNDLE_LABEL_ANCHOR_POSITION] = Position.CENTER_BOTTOM, DefaultStyles[Styles.EDGE_BUNDLE_LABEL_POSITION] = Position.CENTER_TOP, DefaultStyles[Styles.EDGE_BUNDLE_LABEL_COLOR] = "#075bc5", DefaultStyles[Styles.SHAPE_STROKE] = 1, DefaultStyles[Styles.SHAPE_STROKE_STYLE] = "#2898E0", DefaultStyles[Styles.RENDER_COLOR_BLEND_MODE] = Defaults.BLEND_MODE, DefaultStyles[Styles.ALPHA] = 1, Defaults.LOOKING_EDGE_ENDPOINT_TOLERANCE = 2, Consts.NAVIGATION_SCROLLBAR = "navigation.scrollbar", Consts.NAVIGATION_NONE = "navigation.none", Consts.NAVIGATION_BUTTON = "navigation.button", Defaults.NAVIGATION_TYPE = Consts.NAVIGATION_SCROLLBAR;
    var ElementCanvas = function (t, e) {
        this._kz = t, _hd(e) && (e = document.getElementById(e)), e && e.tagName || (e = document.createElement("div")), _39(this, ElementCanvas, [e]), this._kz._$u.addListener(this._15, this), this._kz._$b.addListener(this._1o, this), this._kz._1l.addListener(this._9g, this), this._kz._13.addListener(this._6n, this), this._kz._$m.addListener(this._34, this), this._kz._$q.addListener(this._3r, this), this._mwu = {}, this._40(Defaults.NAVIGATION_TYPE, !0)
    };
    ElementCanvas.prototype = {
        _$k: null, _3r: function (t) {
            var e = t.source, i = t.data;
            if (i)if (this._mwq) {
                var n, s;
                if (_hy(i))for (var o = 0, r = i.length; r > o; o++)s = i[o].id, n = this._md.getById(s), n && (n.selected = e.containsById(s), n.invalidateRender()); else {
                    if (s = i.id, n = this._md.getById(s), !n)return;
                    n.selected = e.containsById(s), n.invalidateRender()
                }
                this._mzz()
            } else {
                this._$k || (this._$k = {});
                var n, s;
                if (_hy(i))for (var o = 0, r = i.length; r > o; o++)s = i[o].id, this._$k[s] = !0; else s = i.id, this._$k[s] = !0
            }
        }, _kz: null, _mz7: function (t) {
            var e = t.uiClass;
            return e ? new e(t, this._kz) : void 0
        }, _15: function () {
        }, _1o: function (t) {
            if (!this._mwq)return !1;
            var e = t.source, i = t.kind;
            "enableSubNetwork" == i && this._kz.invalidateVisibility(), "uiClass" == i ? (this._md.removeById(e.id), this._l0(e)) : "expanded" == i && e._i9() && t.value && this._5g(e);
            var n = this._md.getById(e.id);
            n && n._mwq && n.onPropertyChange(t) && this._mzz()
        }, _3w: function (t) {
            var e = this._kn(t);
            e && (e.invalidateData(), this._mzz())
        }, _9g: function (t) {
            if (!this._mwq)return !1;
            switch (this._$g = !0, t.kind) {
                case ListEvent.KIND_ADD:
                    this._l0(t.data);
                    break;
                case ListEvent.KIND_REMOVE:
                    this._gw(t.data);
                    break;
                case ListEvent.KIND_CLEAR:
                    this._it(t.data)
            }
        }, _la: function () {
            this._mwu = {}, _iw(this, ElementCanvas, "_la")
        }, _mwu: null, _l0: function (t) {
            var e = this._mz7(t);
            e && (this._md.add(e), this._mwq && (this._mwu[t.id] = t), this._mzz())
        }, _gw: function (t) {
            if (Q.isArray(t)) {
                for (var e, i = [], n = 0, s = t.length; s > n; n++)e = t[n].id, i.push(e), delete this._mwu[e];
                t = i
            } else t = t.id, delete this._mwu[t];
            this._md.remove(t) && this._mzz()
        }, _it: function () {
            this._la()
        }, _6n: function (t) {
            return this._mwq ? void(t.source instanceof Node && !this._mwu[t.source.id] && (t.oldValue && (this._3w(t.oldValue), t.oldValue.__6f = !0), t.value && (this._3w(t.value), t.value.__6f = !0), this._5g(t.source))) : !1
        }, _34: function (t) {
            return this._mwq ? void(t.source instanceof Node && !this._mwu[t.source.id] && this._5g(t.source)) : !1
        }, _mwh: function (t) {
            return t ? this._$v() : void this._mwc()
        }, _33: function (t) {
            if (t._edgeBundleInvalidateFlag) {
                var e = t.getEdgeBundle(!0);
                if (!e)return t._edgeBundleInvalidateFlag = !1, void t.validateEdgeBundle();
                e._fr(this._kz), e._mxj(function (t) {
                    t.validateEdgeBundle()
                })
            }
        }, _$v: function () {
            var t, e = (this._kz, this._kz.graphModel), i = this._md, n = [], s = 1;
            if (e.forEachByDepthFirst(function (e) {
                    return e instanceof Edge ? (this._33(e), void n.push(e)) : (t = this._mz7(e), void(t && (i.add(t), t._i5 = this._dt(e, !1, !0), e.__lj = s++)))
                }, this), i.length)for (var o = i._jz, s = o.length - 1; s >= 0; s--)t = o[s], t._i5 && this._3y(t, t.$data);
            for (var r, s = 0, a = n.length; a > s; s++)if (r = n[s], t = this._mz7(r))if (t._i5 = this._dt(r, !0, !0), t._i5) {
                this._3y(t, r, !0), i.add(t);
                var h = r.fromAgent, l = r.toAgent, _ = h.__lj || 0;
                h != l && (_ = Math.max(_, l.__lj || 0)), r.__lj = _
            } else i.add(t);
            if (n.length && i._jz.sort(function (t, e) {
                    return t.$data.__lj - e.$data.__lj
                }), this._$k) {
                var u = e.selectionModel;
                for (var d in this._$k)if (u.containsById(d)) {
                    var t = i.getById(d);
                    t && (t.selected = !0)
                }
                this._$k = null
            }
        }, _mwc: function () {
            for (var t in this._mwu) {
                var e = this._mwu[t];
                e instanceof Node ? this._5g(e) : this._5f(e)
            }
            this._mwu = {};
            for (var i, n, s, o = this._md._jz, r = [], a = o.length - 1; a >= 0; a--)i = o[a], n = i.$data, s = n instanceof Edge, s && this._33(n), i._i5 = this._dt(n, s), i._i5 ? s ? r.push(i) : this._3y(i, n) && !this._$g && (this._$g = !0) : n.__i5Changed && i._mwq && (i.__oldBounds = {
                x: i.$x + i.uiBounds.x,
                y: i.$y + i.uiBounds.y,
                width: i.uiBounds.width,
                height: i.uiBounds.height
            });
            if (r.length)for (var a = 0, h = r.length; h > a; a++)i = r[a], this._3y(i, i.$data) && !this._$g && (this._$g = !0)
        }, _3y: function (t, e, i) {
            if (i || void 0 === i && e instanceof Edge)return e.__4m && (e.__4m = !1, t._4m()), this._d9(t);
            if (e.__6f && e._i9() && (t._5r(), e.__6f = !1), this._d9(t)) {
                var n = this._4y(e);
                return n && (n.__6f = !0), e.hasEdge() && e.forEachEdge(function (t) {
                    t.__4m = !0
                }, this), !0
            }
        }, _2x: function (t, e) {
            var i = t.fromAgent, n = t.toAgent, s = e.getIndexById(i.id);
            if (i == n)return s;
            var o = e.getIndexById(n.id);
            return Math.max(s, o)
        }, _3h: function (t, e) {
            var i = this.graphModel._h0(t);
            return i ? e.getIndexById(i.id) : 0
        }, _5g: function (t) {
            var e = this._md, i = e.getById(t.id);
            if (!i)throw new Error("UI '" + t.name + "' not found");
            var n = this._3h(t, e), s = [i];
            t.hasChildren() && _98(t, function (t) {
                t instanceof Node && (i = e.getById(t.id), i && s.push(i))
            }, this), this._4w(e, n, s)
        }, _5f: function (t) {
            var e = this._md.getById(t.id);
            if (e) {
                var i = this._2x(t, this._md);
                this._md.setIndexBefore(e, i)
            }
        }, _4w: function (t, e, i) {
            function n(t) {
                s.add(t)
            }

            var s = new HashList;
            if (_i1(i, function (i) {
                    e = t.setIndexAfter(i, e), i.$data.forEachEdge(n)
                }, this), 0 != s.length) {
                s.forEach(this._5f, this)
            }
        }, _8x: function (t) {
            return t.getEdgeBundle(!0)
        }, _5a: function (t) {
            if (!t.isBundleEnabled())return !1;
            var e = t.getEdgeBundle(!0);
            e && e.reverseExpanded() !== !1 && this._mzz()
        }, _4y: function (t) {
            var e = findGroup(t);
            return e && e.expanded ? e : null
        }, _h6: function (t) {
            return findGroup(t)
        }, _3d: function (t, e, i) {
            t._$s = !1;
            var n = t._i5;
            t._i5 = this._56(t, e), i || t._i5 == n || (t.__i5Changed = !0)
        }, _56: function (t, e) {
            return this._3z(t, e) ? !this._kz._i5Filter || this._kz._i5Filter(t) !== !1 : !1
        }, _dt: function (t, e, i) {
            return t._$s && this._3d(t, e, i), t._i5
        }, _mw9: function (t) {
            return !this._kz._3x || this._kz._3x == _7g(t)
        }, _3z: function (t, e) {
            if (t.visible === !1)return !1;
            if (void 0 === e && (e = t instanceof Edge), !e)return this._kz._3x != _7g(t) ? !1 : !t._dz;
            var i = t.fromAgent, n = t.toAgent;
            if (!i || !n)return !1;
            if (i == n && !t.isLooped())return !1;
            if (t.isBundleEnabled()) {
                var s = t.getEdgeBundle(!0);
                if (s && !s._dt(t))return !1
            }
            var o = this._dt(i, !1), r = this._dt(n, !1);
            return o && r ? !0 : !1
        }, _7o: null, _7n: null, _40: function (t, e) {
            return e || t != this._7o ? (this._7o = t, this._7n && (this._7n._ij(), delete this._7n), t == Consts.NAVIGATION_SCROLLBAR ? void(this._7n = new ScrollBar(this, this._jsPanel)) : t == Consts.NAVIGATION_BUTTON ? void(this._7n = new NavigationPane(this, this._jsPanel)) : void 0) : !1
        }, _32: function (t, e, i, n, s, o) {
            this._kz._4s(new PropertyChangeEvent(this._kz, "transform", {tx: n, ty: s, scale: o}, {
                tx: t,
                ty: e,
                scale: i
            })), this._6a()
        }, _8w: function (t, e) {
            this._kz._4s(new PropertyChangeEvent(this._kz, "scale", e, t))
        }, _6a: function () {
            this._7n && this._7n._jq(), this._kz._4s(new PropertyChangeEvent(this._kz, "bounds"))
        }, _10: function (t, e) {
            this._kz._4s(new PropertyChangeEvent(this._kz, "element.bounds", e, t)), this._6a()
        }
    }, _kl(ElementCanvas, BaseCanvas), _50(ElementCanvas.prototype, {
        graphModel: {
            get: function () {
                return this._kz._kzModel
            }
        }
    });
    var Graph = function (t, e) {
        this._$u = new Dispatcher, this._$u.on(function (t) {
            "currentSubNetwork" == t.kind && this.invalidateVisibility()
        }, this), this._1l = new Dispatcher, this._1l.addListener(function (t) {
            !this.currentSubNetwork || t.kind != ListEvent.KIND_CLEAR && t.kind != ListEvent.KIND_REMOVE || this.graphModel.contains(this.currentSubNetwork) || (this.currentSubNetwork = null)
        }, this), this._$b = new Dispatcher, this._13 = new Dispatcher, this._$m = new Dispatcher, this._$q = new Dispatcher, this.graphModel = e || new GraphModel, this._8t = new ElementCanvas(this, t), this._3f = new InteractionManager(this), this._1i = new Dispatcher, this._onresize = _4i(window, "resize", function () {
            this.updateViewport()
        }, !1, this), this._8t._jsPanel.ondrop = function (t) {
            this.ondrop(t)
        }.bind(this), this._8t._jsPanel.ondragover = function (t) {
            this.ondragover(t)
        }.bind(this)
    };
    Graph.prototype = {
        fullRefresh: !1,
        originAtCenter: !0,
        editable: !1,
        ondragover: function (t) {
            Q.stopEvent(t)
        },
        getDropInfo: function (t, e) {
            var i = null;
            if (e)try {
                i = JSON.parse(e)
            } catch (n) {
            }
            return i
        },
        ondrop: function (t) {
            var e = t.dataTransfer;
            if (e) {
                var i = e.getData("text"), n = this.getDropInfo(t, i);
                n || (n = {}, n.image = e.getData("image"), n.type = e.getData("type"), n.label = e.getData("label"), n.groupImage = e.getData("groupImage"));
                var s = this.globalToLocal(t);
                if (s = this.toLogical(s.x, s.y), !(this.dropAction instanceof Function && this.dropAction.call(this, t, s, n) === !1) && (n.image || n.label)) {
                    var o = n.image, r = n.type, a = n.label, h = n.groupImage;
                    Q.stopEvent(t);
                    var l;
                    if (r && "Node" != r ? "Text" == r ? l = this.createText(a, s.x, s.y) : "ShapeNode" == r ? l = this.createShapeNode(a, s.x, s.y) : "Group" == r ? (l = this.createGroup(a, s.x, s.y), h && (h = toImage(h), h && (l.groupImage = h))) : (r = stringToObject(r), r instanceof Function && r.prototype instanceof Node && (l = new r, l.name = a, l.location = new Point(s.x, s.y), this._kzModel.add(l))) : l = this.createNode(a, s.x, s.y), l) {
                        if (o && (o = toImage(o), o && (l.image = o)), t.shiftKey) {
                            var _ = this.getElementByMouseEvent(t);
                            (_.enableSubNetwork || _ instanceof Group) && (l.parent = _)
                        }
                        if (n.properties)for (var u in n.properties)l[u] = n.properties[u];
                        if (n.clientProperties)for (var u in n.clientProperties)l.set(u, n.clientProperties[u]);
                        if (n.styles && l.putStyles(n.styles), this.onElementCreated(l, t, n) === !1)return !1;
                        var d = new InteractionEvent(this, InteractionEvent.ELEMENT_CREATED, t, l);
                        return this.onInteractionEvent(d), l
                    }
                }
            }
        },
        enableDoubleClickToOverview: !0,
        _8t: null,
        _$u: null,
        _1l: null,
        _$b: null,
        _$q: null,
        _13: null,
        _$m: null,
        _1y: function (t) {
            return this._$u.beforeEvent(t)
        },
        _4s: function (t) {
            this._$u.onEvent(t)
        },
        isVisible: function (t) {
            return this._8t._dt(t)
        },
        isMovable: function (t) {
            return (t instanceof Node || t instanceof Edge && t.hasPathSegments()) && t.movable !== !1
        },
        isSelectable: function (t) {
            return t.selectable !== !1
        },
        isEditable: function (t) {
            return t.editable !== !1
        },
        isRotatable: function (t) {
            return t.rotatable !== !1
        },
        isResizable: function (t) {
            return t.resizable !== !1
        },
        canLinkFrom: function (t) {
            return t.linkable !== !1 && t.canLinkFrom !== !1
        },
        canLinkTo: function (t) {
            return t.linkable !== !1 && t.canLinkTo !== !1
        },
        createNode: function (t, e, i) {
            var n = new Node(t, e, i);
            return this._kzModel.add(n), n
        },
        createText: function (t, e, i) {
            var n = new Text(t, e, i);
            return this._kzModel.add(n), n
        },
        createShapeNode: function (t, e, i, n) {
            _hc(e) && (n = i, i = e, e = null);
            var s = new ShapeNode(t, e);
            return s.$location = new Point(i, n), this._kzModel.add(s), s
        },
        createGroup: function (t, e, i) {
            var n = new Group(t, e, i);
            return this._kzModel.add(n), n
        },
        createEdge: function (t, e, i) {
            if (t instanceof Node) {
                var n = i;
                i = e, e = t, t = n
            }
            var s = new Edge(e, i);
            return t && (s.$name = t), this._kzModel.add(s), s
        },
        addElement: function (t, e) {
            this._kzModel.add(t), e && t.hasChildren() && t.forEachChild(function (t) {
                this.addElement(t, e)
            }, this)
        },
        removeElement: function (t) {
            this._kzModel.remove(t)
        },
        clear: function () {
            this._kzModel.clear()
        },
        getStyle: function (t, e) {
            var i = t._j6[e];
            return void 0 !== i ? i : this.getDefaultStyle(e)
        },
        getDefaultStyle: function (t) {
            if (this._j6) {
                var e = this._j6[t];
                if (void 0 !== e)return e
            }
            return DefaultStyles[t]
        },
        translate: function (t, e, i) {
            return i ? this.translateTo(this.tx + t, this.ty + e, this.scale, i) : this._8t._ee(t, e)
        },
        translateTo: function (t, e, i, n) {
            if (n) {
                var s = this._5j();
                return s._li(t, e, i, n)
            }
            return this._8t._mwg(t, e, i)
        },
        centerTo: function (t, e, i, n) {
            return (!i || 0 >= i) && (i = this.scale), this.translateTo(this.width / 2 - t * i, this.height / 2 - e * i, i, n)
        },
        moveToCenter: function (t, e) {
            this.callLater(function () {
                var i = this.bounds;
                this.centerTo(i.cx, i.cy, t, e)
            }, this)
        },
        zoomToOverview: function (t, e) {
            return this.callLater(function () {
                var i = this._8t._23();
                i && (e && (i.scale = Math.min(i.scale, e)), this.centerTo(i.cx, i.cy, i.scale, t))
            }, this)
        },
        zoomAt: function (t, e, i, n) {
            if (void 0 === n && (n = void 0 === this.zoomAnimation || null === this.zoomAnimation ? Defaults.ZOOM_ANIMATE : this.zoomAnimation), void 0 === e && (e = this.width / 2), e = e || 0, void 0 === i && (i = this.height / 2), i = i || 0, n) {
                var s = this.scale;
                return t = s * t, t >= this.maxScale || t <= this.minScale ? !1 : (e = t * (this.tx - e) / s + e, i = t * (this.ty - i) / s + i, this.translateTo(e, i, t, n))
            }
            return this._8t._k3(t, e, i)
        },
        zoomOut: function (t, e, i) {
            return i ? this.zoomAt(1 / this.scaleStep, t, e, i) : this._8t._in(t, e)
        },
        zoomIn: function (t, e, i) {
            return i ? this.zoomAt(this.scaleStep, t, e, i) : this._8t._k5(t, e)
        },
        _5j: function () {
            return this._panAnimation || (this._panAnimation = new PanAnimation(this)), this._panAnimation
        },
        enableInertia: !0,
        _mw7: function (t, e) {
            var i = this._5j();
            return i._gy(t || 0, e || 0)
        },
        stopAnimation: function () {
            this._panAnimation && this._panAnimation._lo()
        },
        getUI: function (t) {
            return isMouseEvent(t) ? this._8t._3t(t) : this._8t._kn(t)
        },
        getUIByMouseEvent: function (t) {
            return this._8t._3t(t)
        },
        hitTest: function (t) {
            return this._8t.hitTest(t)
        },
        globalToLocal: function (t) {
            return this._8t._8d(t)
        },
        toCanvas: function (t, e) {
            return this._8t._gb(t, e)
        },
        toLogical: function (t, e) {
            return isMouseEvent(t) ? this._8t._$f(t) : this._8t._ei(t, e)
        },
        getElementByMouseEvent: function (t) {
            var e = this._8t._3t(t);
            return e ? e.$data : void 0
        },
        getElement: function (t) {
            if (isMouseEvent(t)) {
                var e = this._8t._3t(t);
                return e ? e.$data : null
            }
            return this._kzModel.getById(t)
        },
        invalidate: function () {
            this._8t._mzz()
        },
        invalidateUI: function (t) {
            t.invalidate(), this.invalidate()
        },
        invalidateElement: function (t) {
            this._8t._3w(t)
        },
        getUIBounds: function (t) {
            return this._8t._mwv(t)
        },
        forEachVisibleUI: function (t, e) {
            return this._8t._4b(t, e)
        },
        forEachReverseVisibleUI: function (t, e) {
            return this._8t._$z(t, e)
        },
        forEachUI: function (t, e) {
            return this._8t._eo(t, e)
        },
        forEachReverseUI: function (t, e) {
            return this._8t._4j(t, e)
        },
        forEach: function (t, e) {
            return this._kzModel.forEach(t, e)
        },
        getElementByName: function (t) {
            var e;
            return this._kzModel.forEach(function (i) {
                return i.name == t ? (e = i, !1) : void 0
            }), e
        },
        focus: function (t) {
            if (t) {
                var e = window.scrollX || window.pageXOffset, i = window.scrollY || window.pageYOffset;
                return this.canvasPanel.focus(), void window.scrollTo(e, i)
            }
            this.canvasPanel.focus()
        },
        callLater: function (t, e, i) {
            this._8t.callLater(t, e, i)
        },
        exportImage: function (t, e) {
            return exportGraph(this, t, e)
        },
        setSelection: function (t) {
            return this._kzModel._selectionModel.set(t)
        },
        select: function (t) {
            return this._kzModel._selectionModel.select(t)
        },
        unselect: function (t) {
            return this._kzModel._selectionModel.unselect(t)
        },
        reverseSelect: function (t) {
            return this._kzModel._selectionModel.reverseSelect(t)
        },
        selectAll: function () {
            selectAllElement(this)
        },
        unSelectAll: function () {
            this.selectionModel.clear()
        },
        unselectAll: function () {
            this.unSelectAll()
        },
        isSelected: function (t) {
            return this._kzModel._selectionModel.contains(t)
        },
        sendToTop: function (t) {
            elementSendToTop(this._kzModel, t)
        },
        sendToBottom: function (t) {
            elementSendToBottom(this._kzModel, t)
        },
        moveElements: function (t, e, i) {
            var n = [], s = new HashList;
            return _i1(t, function (t) {
                t instanceof Node ? n.push(t) : t instanceof Edge && s.add(t)
            }), this._e7(n, e, i, s)
        },
        _e7: function (t, e, i, n) {
            if (0 == e && 0 == i || 0 == t.length && 0 == n.length)return !1;
            if (0 != t.length) {
                var s = this._4k(t);
                n = this._4o(s, n), _i1(s, function (t) {
                    var n = t.$location;
                    n ? t.setLocation(n.x + e, n.y + i) : t.setLocation(e, i)
                })
            }
            return n && n.length && this._e8(n, e, i), !0
        },
        _e8: function (t, e, i) {
            t.forEach(function (t) {
                t.move(e, i)
            })
        },
        _4o: function (t, e) {
            return this.graphModel.forEach(function (i) {
                i instanceof Edge && this.isMovable(i) && t.contains(i.fromAgent) && t.contains(i.toAgent) && e.add(i)
            }, this), e
        },
        _4k: function (t) {
            var e = new HashList;
            return _i1(t, function (t) {
                !this.isMovable(t), e.add(t), findFollowers(t, e, this._movableFilter)
            }, this), e
        },
        reverseExpanded: function (t) {
            return this._8t._5a(t)
        },
        _3f: null,
        _1i: null,
        beforeInteractionEvent: function (t) {
            return this._1i.beforeEvent(t)
        },
        onInteractionEvent: function (t) {
            this._1i.onEvent(t)
        },
        addCustomInteraction: function (t) {
            this._3f.addCustomInteraction(t)
        },
        enableWheelZoom: !0,
        enableTooltip: !0,
        getTooltip: function (t) {
            return t.tooltip || t.name
        },
        updateViewport: function () {
            this._8t._3m();
            var t = new PropertyChangeEvent(this, "viewport");
            this._4s(t)
        },
        destroy: function () {
            this._4s(new PropertyChangeEvent(this, "destroy", !0, this._ijed)), this._ijed = !0, _2n(window, "resize", this._onresize), _78(this, "_onresize"), this._3f.destroy(), this.graphModel = new GraphModel;
            var t = this.html;
            this._8t._ij(), t && (t.innerHTML = "")
        },
        onPropertyChange: function (t, e, i) {
            this._$u.addListener(function (n) {
                n.kind == t && e.call(i, n)
            })
        },
        removeSelection: function () {
            var t = this.selectionModel._jz;
            return t && 0 != t.length ? (t = t.slice(), this._kzModel.remove(t), t) : !1
        },
        removeSelectionByInteraction: function (t) {
            var e = this.selectionModel.datas;
            return e && 0 != e.length ? void Q.confirm("Delete Elements - " + e.length, function () {
                var e = this.removeSelection();
                if (e) {
                    var i = new InteractionEvent(this, InteractionEvent.ELEMENT_REMOVED, t, e);
                    this.onInteractionEvent(i)
                }
            }, this) : !1
        },
        createShapeByInteraction: function (t, e, i, n) {
            var s = new Path(e);
            e.length > 2 && s.closePath();
            var o = this.createShapeNode("Shape", s, i, n);
            this.onElementCreated(o, t);
            var r = new InteractionEvent(this, InteractionEvent.ELEMENT_CREATED, t, o);
            return this.onInteractionEvent(r), o
        },
        createLineByInteraction: function (t, e, i, n) {
            var s = new Path(e), o = this.createShapeNode("Line", s, i, n);
            o.setStyle(Q.Styles.SHAPE_FILL_COLOR, null), o.setStyle(Q.Styles.SHAPE_FILL_GRADIENT, null), o.setStyle(Q.Styles.LAYOUT_BY_PATH, !0), this.onElementCreated(o, t);
            var r = new InteractionEvent(this, InteractionEvent.ELEMENT_CREATED, t, o);
            return this.onInteractionEvent(r), o
        },
        createEdgeByInteraction: function (t, e, i, n) {
            var s = this.createEdge("Edge", t, e);
            if (n)s._9y = n; else {
                var o = this.edgeUIClass, r = this.edgeType;
                this.interactionProperties && (o = this.interactionProperties.uiClass || o, r = this.interactionProperties.edgeType || r), o && (s.uiClass = o), r && (s.edgeType = r)
            }
            this.onElementCreated(s, i);
            var a = new InteractionEvent(this, InteractionEvent.ELEMENT_CREATED, i, s);
            return this.onInteractionEvent(a), s
        },
        onElementCreated: function (t) {
            !t.parent && this.currentSubNetwork && (t.parent = this.currentSubNetwork)
        },
        allowEmptyLabel: !1,
        startLabelEdit: function (t, e, i, n) {
            var s = this;
            i.startEdit(n.x, n.y, e.data, this.getStyle(t, Styles.LABEL_FONT_SIZE), function (i) {
                return s.onLabelEdit(t, e, i, e.parent)
            })
        },
        onLabelEdit: function (t, e, i, n) {
            return i || this.allowEmptyLabel ? void("label" == e.name ? t.name = i : n._gf(e, i) === !1 && (e.data = i, this.invalidateElement(t))) : (Q.alert("Label Can't Empty"), !1)
        },
        setInteractionMode: function (t, e) {
            this.interactionMode = t, this.interactionProperties = e
        },
        upSubNetwork: function () {
            return this._3x ? this.currentSubNetwork = _7g(this._3x) : !1
        },
        _$s: !1,
        invalidateVisibility: function () {
            this._$s = !0, this.invalidate()
        },
        getBundleLabel: function (t) {
            var e = t.getEdgeBundle(!0);
            return e && e.agentEdge == t ? "+" + e.bindableEdges.length : null
        },
        zoomAnimation: null
    }, _50(Graph.prototype, {
        center: {
            get: function () {
                return this.toLogical(this.html.clientWidth / 2, this.html.clientHeight / 2)
            }
        }, visibleFilter: {
            get: function () {
                return this._i5Filter
            }, set: function (t) {
                this._i5Filter = t, this.invalidateVisibility()
            }
        }, topCanvas: {
            get: function () {
                return this._8t._topCanvas
            }
        }, propertyChangeDispatcher: {
            get: function () {
                return this._$u
            }
        }, listChangeDispatcher: {
            get: function () {
                return this._1l
            }
        }, dataPropertyChangeDispatcher: {
            get: function () {
                return this._$b
            }
        }, selectionChangeDispatcher: {
            get: function () {
                return this._$q
            }
        }, parentChangeDispatcher: {
            get: function () {
                return this._13
            }
        }, childIndexChangeDispatcher: {
            get: function () {
                return this._$m
            }
        }, interactionDispatcher: {
            get: function () {
                return this._1i
            }
        }, cursor: {
            set: function (t) {
                this.canvasPanel.style.cursor = t || this._3f.defaultCursor
            }, get: function () {
                return this.canvasPanel.style.cursor
            }
        }, interactionMode: {
            get: function () {
                return this._3f._mzurrentMode
            }, set: function (t) {
                var e = this.interactionMode;
                e != t && (this._3f.currentMode = t, this._4s(new PropertyChangeEvent(this, "interactionMode", t, e)))
            }
        }, scaleStep: {
            get: function () {
                return this._8t._eg
            }, set: function (t) {
                this._8t._eg = t
            }
        }, maxScale: {
            get: function () {
                return this._8t._g7
            }, set: function (t) {
                this._8t._g7 = t
            }
        }, minScale: {
            get: function () {
                return this._8t._fp
            }, set: function (t) {
                this._8t._fp = t
            }
        }, scale: {
            get: function () {
                return this._8t._ks
            }, set: function (t) {
                return this._8t._ks = t
            }
        }, tx: {
            get: function () {
                return this._8t._mm
            }
        }, ty: {
            get: function () {
                return this._8t._mn
            }
        }, styles: {
            get: function () {
                return this._j6
            }, set: function (t) {
                this._j6 = t
            }
        }, selectionModel: {
            get: function () {
                return this._kzModel._selectionModel
            }
        }, graphModel: {
            get: function () {
                return this._kzModel
            }, set: function (t) {
                if (this._kzModel == t)return !1;
                var e = this._kzModel, i = new PropertyChangeEvent(this, "graphModel", e, t);
                return this._1y(i) === !1 ? !1 : (null != e && (e.propertyChangeDispatcher.removeListener(this._$u, this), e.listChangeDispatcher.removeListener(this._1l, this), e.dataChangeDispatcher.removeListener(this._$b, this), e.parentChangeDispatcher.removeListener(this._13, this), e.childIndexChangeDispatcher.removeListener(this._$m, this), e.selectionChangeDispatcher.removeListener(this._$q, this)), this._kzModel = t, this._kzModel && (this._kzModel.propertyChangeDispatcher.addListener(this._$u, this), this._kzModel.listChangeDispatcher.addListener(this._1l, this), this._kzModel.dataChangeDispatcher.addListener(this._$b, this), this._kzModel.parentChangeDispatcher.addListener(this._13, this), this._kzModel.childIndexChangeDispatcher.addListener(this._$m, this), this._kzModel.selectionChangeDispatcher.addListener(this._$q, this)), this._8t && this._8t._kp(), void this._4s(i))
            }
        }, count: {
            get: function () {
                return this._kzModel.length
            }
        }, width: {
            get: function () {
                return this.html.clientWidth
            }
        }, height: {
            get: function () {
                return this.html.clientHeight
            }
        }, viewportBounds: {
            get: function () {
                return this._8t._76
            }
        }, bounds: {
            get: function () {
                return this._8t._4c()
            }
        }, canvasPanel: {
            get: function () {
                return this._8t._jsPanel
            }
        }, html: {
            get: function () {
                return this._8t._jsPanel.parentNode
            }
        }, navigationType: {
            get: function () {
                return this._8t._7o
            }, set: function (t) {
                this._8t._40(t)
            }
        }, _3x: {
            get: function () {
                return this._kzModel._3x
            }
        }, currentSubNetwork: {
            get: function () {
                return this._kzModel.currentSubNetwork
            }, set: function (t) {
                this._kzModel.currentSubNetwork = t
            }
        }
    }), Defaults.GROUP_MIN_WIDTH = 60, Defaults.GROUP_MIN_HEIGHT = 60, GroupUI.prototype = {
        initialize: function () {
            _iw(this, GroupUI, "initialize"), this.checkBody()
        }, _mwk: function () {
            this._lu = new Path, this.shape = new ImageUI(this._lu), this.shape.layoutByPath = !1, this.addChild(this.shape, 0), this.body = this.shape
        }, checkBody: function () {
            return this._68() ? (this._2g = !0, this.shape ? (this.shape.visible = !0, this.body = this.shape) : (this._mwk(), GroupUIBindingMap.initBindingProperties(this)), void(this.image && (this.image.visible = !1))) : (this.image ? (this.image.visible = !0, this.body = this.image) : this._mwx(), void(this.shape && (this.shape.visible = !1)))
        }, _68: function () {
            return this.$data._i9() && this.$data.expanded
        }, _lu: null, _2g: !0, _5r: function () {
            this._1n = !0, this._2g = !0
        }, doValidate: function () {
            if (this._2g && this._68()) {
                if (this._2g = !1, this.shape.invalidateData(), this.$data.groupImage) {
                    this.shape.data = this.$data.groupImage;
                    var t = this._2l();
                    return this.shape.offsetX = t.x + t.width / 2, this.shape.offsetY = t.y + t.height / 2, this.shape.size = {
                        width: t.width,
                        height: t.height
                    }, NodeUI.prototype.doValidate.call(this)
                }
                this.shape.offsetX = 0, this.shape.offsetY = 0;
                var e = this._8y(this.$data.groupType);
                this._lu.clear(), e instanceof Rect ? addRect(this._lu, e.x, e.y, e.width, e.height, e.rx, e.ry) : e instanceof Circle ? addCircle(this._lu, e) : e instanceof Ellipse && addEllipse(this._lu, e), this._lu._6f = !0, this.shape.invalidateData()
            }
            return NodeUI.prototype.doValidate.call(this)
        }, _6u: function (t, e, i) {
            switch (t) {
                case Consts.GROUP_TYPE_CIRCLE:
                    return new Circle(0, 0, Math.max(e, i) / 2);
                case Consts.GROUP_TYPE_ELLIPSE:
                    return new Ellipse(0, 0, e, i);
                default:
                    return new Rect(-e / 2, -i / 2, e, i)
            }
        }, _2l: function () {
            return this._8y(null)
        }, _8y: function (t) {
            var e = this.data, i = e.padding, n = e.minSize, s = Defaults.GROUP_MIN_WIDTH, o = Defaults.GROUP_MIN_HEIGHT;
            if (n && (s = n.width, o = n.height), !e.hasChildren())return this._6u(t, s, o);
            var r, a = this.$data._fe._jz;
            (t == Consts.GROUP_TYPE_CIRCLE || t == Consts.GROUP_TYPE_ELLIPSE) && (r = []);
            for (var h, l, _, u, d = new Rect, c = 0, f = a.length; f > c; c++) {
                var E = a[c];
                if (this.graph.isVisible(E)) {
                    var g = this.graph.getUI(E);
                    g && (h = g.$x + g._fi.x, l = g.$y + g._fi.y, _ = g._fi.width, u = g._fi.height, d.addRect(h, l, _, u), r && (r.push({
                        x: h,
                        y: l
                    }), r.push({x: h + _, y: l}), r.push({x: h + _, y: l + u}), r.push({x: h, y: l + u})))
                }
            }
            i && d.grow(i);
            var p = this.$data.$location;
            p ? p.invalidateFlag && (p.invalidateFlag = !1, p.x = d.cx, p.y = d.cy) : p = this.$data.$location = {
                x: d.cx,
                y: d.cy
            };
            var v, T = p.x, m = p.y;
            if (t == Consts.GROUP_TYPE_CIRCLE) {
                v = smallEmbodyCircle(r), v.cx -= T, v.cy -= m;
                var y = Math.max(s, o) / 2;
                return v.r < y && (v.cx += y - v.r, v.cy += y - v.r, v.r = y), v
            }
            return t == Consts.GROUP_TYPE_ELLIPSE ? (v = smallEmbodyEllipse(r, d), v.cx -= T, v.cy -= m, v.width < s && (v.cx += (s - v.width) / 2, v.width = s), v.height < o && (v.cy += (o - v.height) / 2, v.height = o), v) : (v = d, d.width < s && (d.width = s), d.height < o && (d.height = o), d.offset(-T, -m), v)
        }, _$x: function (t, e, i) {
            if (!this._68())return _iw(this, GroupUI, "_$x", arguments);
            var n = this._mza.onBindingPropertyChange(this, t, e, i);
            return n = ElementUIBindingMap.onBindingPropertyChange(this, t, e, i) || n, n = NodeUIBindingMap.onBindingPropertyChange(this, t, e, i) || n, GroupUIBindingMap.onBindingPropertyChange(this, t, e, i) || n
        }
    }, _kl(GroupUI, NodeUI);
    var IDrawable = {
        draw: function () {
        }
    };
    Defaults.NAVIGATION_IMAGE_LEFT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA09JREFUeNqcVl1Ik1EYfqebIuaQTWQK/udkdKMXIggG3XQRRBDdRBDdhDdBhRAVFUS/1FVXEt1EEBVEIIFIN0JGEEF6E+HU6VR0iDPdnKLT2fN87h2fY+aODzzfDud8ezjP9/6c49jZ2ZGhoSExxFGwHWwDh7u6ut7pguMQghR7nzX3GaL3OSgQc1zno6qqSgKBgBQUWBKnsanzhxG8DXaUlJRIQ0ODVFRUSEtLi661mQoeA886HA7x+/1SWFgo/Fxzc3O6PmwqeIWP6upqcbvd1gTFVlZWOAyBH0wEabVdrRLr6+syNTWl670ISipfwXa1yu/FX1odHR2VVCqlER7Ul/MR7OajpqZGysrKrInZ2VmJx+Mc/gEf2V8+SPAu2FpaWiq1tbXWRCKRkHA4bLe6la9gB3gml1X+An0Q+579p/0EnRpV7ow7JKanp60dAiMQe5Drj/sJ3gID/Gb8dgS/2czMjK6/3M9WLsETuawGg0G1+gm7+5mvYJFGlfnGvCMmJydlbW2Nw1/g4/9FMVvwDrsJK4EVQcRiMXt5vTgox+yCJ8FTrFHWKq1ub2/vsQr+zlfQpVbr6+szVllaLDHgx0FWswV7wLry8vKM1eXlZSOr2YKtfDQ2NmYWQqGQDl+BQVPBEW1HCt0puzHoNhXkIZOMRCKytLRkTfh8PvF4PNYQvGkqGNbsHxsbk62t3Xpvbm4Wp9OpGXDORJB4DX7d3NyUiYmJ3SwvKpKmpiZdvwx6TASJZ+DqwsKCRKNRa6KyslK8Xi+H3nSNGwlG0lG1rCeTyYx1l8uldX7BRJB4Cw5SbHx8fDfrIUZRtY4z2GciSDwF/y4uLgrtW35hm/aBI+ANU8GoRp0BYqAIBoiBAo5jl5dMBImP4BemEL+n1caRQjbr3RCtMxFU6xEmO5OeYLIz6dMNpcdUMKbW2WQ3NjZEa764uJjDTuyy20TQOsjBAVpnbyS0Z9qi7jcRJJ6wPNnS5ufnrQl7qwOumgomNOFpPd107c24A7u8aHr7GgD7eSww6jwWaF0vT9pTTS+cD9l7eYVj7+Shr41Ee6rTUJAZ3gs+p3Veh7lj4BvO6jeHvWPz6tZHy2mxfohdMw3KHqTvNZ0sQYzv2df+CTAAM91P5i8bXigAAAAASUVORK5CYII=", Defaults.NAVIGATION_IMAGE_TOP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUCAYAAAD/Rn+7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAohJREFUeNrMVs+LUlEUPk8jNBGJXKWgBCrRZhAiCFy0HYigVdvazdQf0A+CftAPaFlNu4HZtQqGgdkOKAQRSAgRPkEUtG2ImBKj9n2Pc0XNmcb3Xj8OfN57ve/d893vnHfutYrFoixrhUJh4f+lUumEzn8Xn+yYH4uAWBjNHWBVx7tonoFo3+vaAR/IXUKzRXLBYFAIJbqlc/9GQTjnu/eAyxzHYjHJZrPOnG3b0ul0zqD7As/toH0CNffd+LHc5CDsIrAGnA0EApJOpyWRSMw80G63pdFoyGg04vAL8AYk3/8NgveBK+xEo1HJ5XISDoedieFw6LQaZun3+1KtVqXb7Zp3t0Hy8Z8imAfWgRXLsiSVSkkymRT2aQipE1oaQ82Q08bjsbRaLWk2m04f9gnYANGynwTvAlfZiUQijmpsaQwhQ8mQThtDztAzBWi9Xs9Rk63aO5B86pXgOeAWcJ5KUTEqZ1Rj6OiUoVTb1PYGfxh6boapYNSkklRU1fwIvALRz24Irrt1hC936Y3h3Y2jEpws7jVUILpMaixUc57gjGqZTMZzsoPkbz+uWq12oJqG4Gngtta3X1Tzo1yA6IHlaYGarJfP4eMrCZ7C4C1wMhQKzZQIPwuukjy0wJtSNRgMOPwGXKNEKyQXj8cln89PyFG1SqUi9XrdkOORdV1358p0Y1xjh2tybfow4aVvciAXciI3nqe2SX7NrXnV6lQN2PPj5qNn8kOoydxa45ldLpcnapLD1Adomxx8DVww6lFqNeegB/aPch90EfLjek2bXDim/H+An5vmNvMIeKk3EN9VO0TNH/NqTvl/MF9mTD6aEjJa9kbtUc0Z//Dh+LdM3v2v9lOAAQDlEZVA4N7FygAAAABJRU5ErkJggg==";
    var NAV_BUTTON_CSS = {position: "absolute", "text-align": "center"}, NAV_BUTTON_IMAGE_CSS = {
        padding: "10px",
        transition: "opacity 0.2s ease-in"
    }, NAV_VERTICAL_MIDDLE_CSS = {position: "relative", display: "block"};
    css_mhRule(".Q-Graph-Nav img", "opacity:0.7;vertical-align:middle;"), css_mhRule(".Q-Graph-Nav img:hover,img.hover", "opacity:1;background-color: rgba(0, 0, 0, 0.5)"), isTouchSupport || (css_mhRule(".Q-Graph-Nav", "opacity:0;" + css_pre("transition") + ":opacity 3s cubic-bezier(0.8, 0, 0.8, 1)"), css_mhRule(".Q-Graph-Nav:hover", "opacity:1;" + css_pre("transition") + ":opacity 0.3s linear")), NavigationPane.prototype = {
        _mzs: function (t, e) {
            return t._i5 == e ? !1 : (t._i5 = e, void(t.style.display = e ? "block" : "none"))
        }, _3j: function (t, e) {
            var i = e / 2 - this._left._img.clientHeight / 2 + "px";
            this._left._img.style.top = i, this._right._img.style.top = i, this._navPane.style.width = t + "px", this._navPane.style.height = e + "px"
        }, _mwa: function (t, e, i, n) {
            this._mzs(this._top, t), this._mzs(this._left, e), this._mzs(this._mxottom, i), this._mzs(this._right, n)
        }, _ij: function () {
            var t = this._navPane.parentNode;
            t && t.removeChild(this._navPane)
        }, _jq: function () {
            var t = this._dh._kz;
            if (t) {
                var e = t.bounds;
                if (e.isEmpty())return void this._mwa(!1, !1, !1, !1);
                var i = t.viewportBounds, n = i.y > e.y + 1, s = i.x > e.x + 1, o = i.bottom < e.bottom - 1, r = i.right < e.right - 1;
                this._mwa(n, s, o, r)
            }
        }
    };
    var SCROLLBAR_SIZE = 8;
    css_mhRule(".Q-Graph-ScrollBar", "position: absolute;box-sizing: border-box;box-shadow: #FFF 0px 0px 1px; background-color: rgba(120,120,120,0.3);border-radius: 4px;margin: 1px;"), css_mhRule(".Q-Graph-ScrollBar:hover", "background-color: #7E7E7E;" + css_pre("transition") + ": background-color 0.2s linear;"), css_mhRule(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;"), css_mhRule(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;"), css_mhRule(".Q-Graph-ScrollBar--V.Both", "margin-bottom: 8px;"), css_mhRule(".Q-Graph-ScrollBar--H.Both", "margin-right: 8px;"), isTouchSupport || (css_mhRule(".Q-Graph-ScrollPane", "opacity:0;" + css_pre("transition") + ":opacity 3s cubic-bezier(0.8, 0, 0.8, 1);"), css_mhRule(".Q-Graph:hover .Q-Graph-ScrollPane", "opacity:1;" + css_pre("transition") + ":opacity 0.3s linear;")), ScrollBar.prototype = {
        _ij: function () {
            this._verticalDragSupport._ij(), this._horizontalDragSupport._ij(), delete this._verticalDragSupport, delete this._horizontalDragSupport, this._lt.parentNode && this._lt.parentNode.removeChild(this._lt)
        }, _lt: null, _mwm: null, _8u: null, init: function (t) {
            var e = document.createElement("div");
            e.className = "Q-Graph-ScrollPane", css_mzss(e, {width: "100%", height: "100%", position: "relative"});
            var i = document.createElement("div");
            i.className = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
            var n = document.createElement("div");
            n.className = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H", e.appendChild(i), e.appendChild(n), t.appendChild(e), this._lt = e, this._8u = n, this._mwm = i, n.isH = !0;
            var s = this, o = {
                ondrag: function (t, e) {
                    var i = s._dh._kz;
                    if (i) {
                        var n = e.isH, o = n ? t.dx : t.dy;
                        if (o && e.scale) {
                            var r = i.scale / e.scale;
                            n ? i.translate(-r * o, 0) : i.translate(0, -r * o), Q.stopEvent(t)
                        }
                    }
                }, enddrag: function (t, e) {
                    var i = s._dh._kz;
                    if (i && i.enableInertia) {
                        var n = e.isH, o = n ? t.vx : t.vy;
                        if (Math.abs(o) > .1) {
                            var r = i.scale / e.scale;
                            o *= r, n ? i._mw7(-o, 0) : i._mw7(0, -o)
                        }
                    }
                }
            };
            this._verticalDragSupport = new DragSupport(i, o), this._horizontalDragSupport = new DragSupport(n, o)
        }, _jq: function () {
            var t = this._dh._kz;
            if (t) {
                var e = t.bounds;
                if (e.isEmpty())return this._4v(!1), void this._4u(!1);
                var i = t.viewportBounds, n = t.width, s = t.height, o = t.scale, r = 1 / o, a = i.x > e.x + r || i.right < e.right - r, h = i.y > e.y + r || i.bottom < e.bottom - r, l = a && h;
                l ? (_mxu(this._mwm, "Both"), _mxu(this._8u, "Both")) : (_mxw(this._mwm, "Both"), _mxw(this._8u, "Both")), this._4v(a, i, e, l ? n - SCROLLBAR_SIZE : n), this._4u(h, i, e, l ? s - SCROLLBAR_SIZE : s)
            }
        }, _4v: function (t, e, i, n) {
            if (!t)return this._8u.style.display = "none", void(this._8u.scale = 0);
            var s = Math.min(e.x, i.x), o = Math.max(e.right, i.right), r = o - s, a = n / r;
            this._8u.scale = a, this._8u.style.left = parseInt((e.x - s) * a) + "px", this._8u.style.right = parseInt((o - e.right) * a) + "px", this._8u.style.display = ""
        }, _4u: function (t, e, i, n) {
            if (!t)return this._mwm.style.display = "none", void(this._mwm.scale = 0);
            var s = Math.min(e.y, i.y), o = Math.max(e.bottom, i.bottom), r = o - s, a = n / r;
            this._mwm.scale = a, this._mwm.style.top = parseInt((e.y - s) * a) + "px", this._mwm.style.bottom = parseInt((o - e.bottom) * a) + "px", this._mwm.style.display = ""
        }
    }, ShapeNodeUI.prototype = {
        shape: null, initialize: function () {
            _iw(this, ShapeNodeUI, "initialize"), this._mwx(), ShapeNodeUIBindingMap.initBindingProperties(this)
        }, _mwx: function () {
            this.image = new ShapeUI(this.$data.path), this.addChild(this.image, 0), this.body = this.image
        }, invalidateShape: function () {
            this.image.invalidateData(), this.invalidateRender()
        }, _$x: function (t, e, i) {
            var n = this._mza.onBindingPropertyChange(this, t, e, i);
            return n = ElementUIBindingMap.onBindingPropertyChange(this, t, e, i) || n, ShapeNodeUIBindingMap.onBindingPropertyChange(this, t, e, i) || n
        }, doValidate: function () {
            this.body && (this.body.$layoutByAnchorPoint = null != this._38, this.body.anchorPosition = this._38);
            var t = this.$data.$location, e = 0, i = 0;
            t && (e = t.x, i = t.y);
            var n = this.$x != e || this.$y != i;
            return n && (this.$invalidateBounds = !0), this.$x = e, this.$y = i, ElementUI.prototype.doValidate.call(this) || n
        }
    }, _kl(ShapeNodeUI, ElementUI), _50(ShapeNodeUI.prototype, {
        path: {
            get: function () {
                return this.data.path
            }
        }, length: {
            get: function () {
                return this.data.length
            }
        }
    }), ShapeNodeUI.prototype.addPoint = function (t, e, i) {
        var n = this._i3(t, e), s = this.data, o = _7i(s.path, n.x, n.y, i);
        o && (s.pathSegments = o)
    }, TopCanvas.prototype = {
        _ly: function () {
            this._js.style.visibility = "visible"
        }, _kb: function () {
            this._js.style.visibility = "hidden"
        }, clear: function () {
            this._9j.clear(), this._mzz()
        }, contains: function (t) {
            return t instanceof Object && t.id && (t = t.id), this._9j.containsById(t)
        }, addDrawable: function (t, e) {
            if (e) {
                var i = {id: ++idIndex, drawable: t, scope: e};
                return this._9j.add(i), i
            }
            return t.id || (t.id = ++idIndex), this._9j.add(t), t
        }, removeDrawable: function (t) {
            return t.id ? void this._9j.remove(t) : this._9j.removeById(t)
        }, _9j: null, invalidate: function () {
            this._mzz()
        }, _mzz: function () {
            this._dh._6f || this._jm()
        }, _jm: function () {
            css_mcCSS(this._js, "transform", "");
            var t = this._dh._ks, e = this.g;
            e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, this._js.width, this._js.height), e.save(), this._dh._k2._mwy(e);
            for (var i = this._9j._jz, n = 0, s = i.length; s > n; n++)e.save(), e.beginPath(), this._fo(e, i[n], t), e.restore();
            e.restore()
        }, _fo: function (t, e, i) {
            return e instanceof Function ? void e(t, i) : void(e.drawable instanceof Function && e.scope && e.drawable.call(e.scope, t, i))
        }
    }, Defaults.ZOOM_ANIMATE = isIE ? !1 : !0;
    var PanAnimation = function (t) {
        this._kz = t
    };
    Defaults.ANIMATION_MAXTIME = 600, Defaults.ANIMATION_TYPE = Easing.easeOut, PanAnimation.prototype = {
        _kz: null,
        _mw: .001,
        _ej: null,
        _mzo: function (t) {
            return t > 1 ? 1 : -1 > t ? -1 : t
        },
        _gy: function (t, e) {
            t *= .6, e *= .6, t = this._mzo(t), e = this._mzo(e), this._lo();
            var i = Math.sqrt(t * t + e * e);
            if (.01 > i)return !1;
            var n = Math.min(Defaults.ANIMATION_MAXTIME, i / this._mw);
            this._speedX = t, this._speedY = e, this._mwX = t / n, this._mwY = e / n, this._ej = new FrameAnimation(this._57, this, n, Easing.easeOutStrong), this._ej._lc()
        },
        _57: function (t, e) {
            if (0 != t) {
                var i = this._speedX * e - .5 * this._mwX * e * e, n = this._speedY * e - .5 * this._mwY * e * e;
                this._speedX -= this._mwX * e, this._speedY -= this._mwY * e, this._kz.translate(i, n)
            }
        },
        _lo: function () {
            this._ej && this._ej._lo()
        },
        _ir: function (t) {
            var e = this._fromTX + (this._toTX - this._fromTX) * t, i = this._fromTY + (this._toTY - this._fromTY) * t, n = this._fromScale + (this._toScale - this._fromScale) * t;
            this._kz.translateTo(e, i, n)
        },
        _li: function (t, e, i, n) {
            var s = this._kz, o = s.scale;
            if (0 >= i && (i = o), this._lo(), t != s.tx || e != s.ty || i != o) {
                var r, a, h;
                n instanceof Object && (r = n.duration, a = n.maxTime, h = n.animationType);
                var l = s.tx, _ = s.ty;
                if (!r) {
                    var u = calculateDistance(t, e, l, _);
                    if (r = u / 2, i != o) {
                        var d = i > o ? i / o : o / i;
                        r = Math.max(r, 50 * d)
                    }
                }
                a = a || Defaults.ANIMATION_MAXTIME, h = h || Defaults.ANIMATION_TYPE, r = Math.min(a, r), this._fromTX = l, this._fromTY = _, this._fromScale = o, this._toTX = t, this._toTY = e, this._toScale = i, this._ej = new FrameAnimation(this._ir, this, r, h), this._ej._lc()
            }
        }
    }, Defaults.INTERACTION_HANDLER_SIZE_TOUCH = 8, Defaults.INTERACTION_HANDLER_SIZE_DESKTOP = 4, Defaults.INTERACTION_ROTATE_HANDLER_SIZE_TOUCH = 30, Defaults.INTERACTION_ROTATE_HANDLER_SIZE_DESKTOP = 20;
    var QUARTER_PI = Math.PI / 4;
    DrawableInteraction.prototype = {
        onElementRemoved: function (t, e) {
            this.element && (t == this.element || _hy(t) && containsInArray(t, this.element)) && this.destroy(e)
        }, onClear: function (t) {
            this.element && this.destroy(t)
        }, destroy: function () {
            delete this.element, this.removeDrawable()
        }, invalidate: function () {
            this.topCanvas.invalidate()
        }, removeDrawable: function () {
            this._fuId && (this.topCanvas.removeDrawable(this._fuId), delete this._fuId, this.invalidate())
        }, addDrawable: function () {
            this._fuId || (this._fuId = this.topCanvas.addDrawable(this.doDraw, this).id, this.invalidate())
        }, doDraw: function () {
        }, escapable: !0, onkeydown: function (t, e) {
            this.escapable && 27 == t.keyCode && (_ek(t), this.destroy(e))
        }
    }, Q.DrawableInteraction = DrawableInteraction, InteractionMode.prototype = {
        defaultCursor: "default",
        getInteractionInstances: function (t) {
            if (!this.interactions)return null;
            for (var e = [], i = 0, n = this.interactions.length; n > i; i++) {
                var s = this.interactions[i];
                s instanceof Function ? e.push(new s(t)) : s instanceof Object && e.push(s)
            }
            return e
        }
    }, DrawPathInteraction.prototype = {
        _ed: null, _k9: null, destroy: function () {
            _iw(this, DrawPathInteraction, "destroy", arguments), delete this._k9, delete this._90, delete this._ed
        }, doDraw: function (t) {
            var e = this.points;
            e && (e.forEach(function (e) {
                this.drawPoint(t, e)
            }, this), this.isClosePath && t.closePath(), this.styleDraw(t))
        }, styleDraw: function (t) {
            var e = mixDrawProperties(this.graph.interactionProperties, this.getDefaultDrawStyles(this.graph));
            e.lineWidth && (t.lineWidth = e.lineWidth, e.lineCap && (t.lineCap = e.lineCap), e.lineJoin && (t.lineJoin = e.lineJoin), e.lineDash && (t.lineDash = e.lineDash, t.lineDashOffset = e.lineDashOffset || 0), t.strokeStyle = e.strokeStyle, t.stroke()), e.fillStyle && (t.fillStyle = e.fillStyle, t.fill())
        }, drawPoint: function (t, e, i) {
            if (i)return void t.moveTo(e.x, e.y);
            if (Q.isArray(e)) {
                var n = e[0], s = e[1];
                t.quadraticCurveTo(n.x, n.y, s.x, s.y)
            } else t.lineTo(e.x, e.y)
        }, setCurrentPoint: function (t) {
            this.currentPoint = t
        }, addPoint: function (t) {
            this._k9 || (this._k9 = [], this.addDrawable()), this._k9.push(t), this.invalidate()
        }
    }, _50(DrawPathInteraction.prototype, {
        currentPoint: {
            get: function () {
                return this._90
            }, set: function (t) {
                this._90 = t, this.invalidate()
            }
        }, prevPoint: {
            get: function () {
                return this._k9 && this._k9.length ? this._k9[this._k9.length - 1] : null
            }
        }, points: {
            get: function () {
                return this._90 && this._k9 && this._k9.length ? this._k9.concat(this._90) : void 0
            }
        }
    }), _kl(DrawPathInteraction, DrawableInteraction), Q.DrawPathInteraction = DrawPathInteraction, CreateEdgeInteraction.prototype = {
        destroy: function () {
            _iw(this, CreateEdgeInteraction, "destroy", arguments), delete this._lcTime, delete this.start
        }, doDraw: function (t, e) {
            return this._k9 ? this._k9.length <= 1 ? CreateSimpleEdgeInteraction.prototype.doDraw.call(this, t, e) : void _iw(this, CreateEdgeInteraction, "doDraw", arguments) : void 0
        }, ondblclick: function (t, e) {
            this.destroy(e)
        }, finish: function (t, e, i) {
            if (this._lcTime && Date.now() - this._lcTime < 200)return void this.destroy(e);
            var n;
            this._k9 && this._k9.length >= 2 && (this._k9.shift(), n = new HashList, _i1(this._k9, function (t) {
                if (Q.isArray(t)) {
                    var e = t[0], i = t[1];
                    n.add(new PathSegment(Consts.SEGMENT_QUAD_TO, [e.x, e.y, i.x, i.y]))
                } else n.add(new PathSegment(Consts.SEGMENT_LINE_TO, [t.x, t.y]))
            }, this)), e.createEdgeByInteraction(this.start, i, t, n), this.destroy(e)
        }, onstart: function (t, e) {
            if (2 != t.button) {
                var i = t.getData();
                if (this.start) {
                    var n = i instanceof Node && e.canLinkTo(i, this.start);
                    return n ? void this.finish(t, e, i) : void this.addPoint(this.toLogicalPoint(t))
                }
                var s = i instanceof Node && e.canLinkFrom(i);
                s && (this.start = i, this._lcTime = Date.now(), this.addPoint(this.toLogicalPoint(t)))
            }
        }, onmousemove: function (t) {
            this.start && this.setCurrentPoint(this.toLogicalPoint(t))
        }, toLogicalPoint: function (t) {
            return this.graph.toLogical(t)
        }, startdrag: function (t) {
            this.start && (t.responded = !0)
        }, ondrag: function (t) {
            this.start && this.setCurrentPoint(this.toLogicalPoint(t))
        }, enddrag: function (t, e) {
            if (this.start) {
                var i = t.getData(), n = i instanceof Node && e.canLinkTo(i, this.start);
                n && this.finish(t, e, i)
            }
        }, getDefaultDrawStyles: function () {
            return {
                lineWidth: this.graph.getDefaultStyle(Styles.EDGE_WIDTH),
                strokeStyle: this.graph.getDefaultStyle(Styles.EDGE_COLOR),
                lineDash: this.graph.getDefaultStyle(Styles.EDGE_LINE_DASH),
                lineDashOffset: this.graph.getDefaultStyle(Styles.EDGE_LINE_DASH_OFFSET),
                lineCap: this.graph.getDefaultStyle(Styles.LINE_CAP),
                lineJoin: this.graph.getDefaultStyle(Styles.LINE_JOIN)
            }
        }
    }, _kl(CreateEdgeInteraction, DrawPathInteraction), Q.CreateEdgeInteraction = CreateEdgeInteraction, CreateShapeInteraction.prototype = {
        getDefaultDrawStyles: function () {
            return {
                lineWidth: this.graph.getDefaultStyle(Styles.SHAPE_STROKE),
                strokeStyle: this.graph.getDefaultStyle(Styles.SHAPE_STROKE_STYLE),
                fillStyle: this.graph.getDefaultStyle(Styles.SHAPE_FILL_COLOR)
            }
        }, finish: function (t, e) {
            if (this._k9 && this._k9.length) {
                var i = this._k9, n = 0, s = 0, o = 0;
                i.forEach(function (t) {
                    return Q.isArray(t) ? void t.forEach(function () {
                        n += t.x, s += t.y, o++
                    }) : (n += t.x, s += t.y, void o++)
                }), n /= o, s /= o;
                var r = [];
                i.forEach(function (t, e) {
                    if (0 == e)return void r.push(new PathSegment(Consts.SEGMENT_MOVE_TO, [t.x - n, t.y - s]));
                    if (Q.isArray(t)) {
                        var i = t[0], o = t[1];
                        r.push(new PathSegment(Consts.SEGMENT_QUAD_TO, [i.x - n, i.y - s, o.x - n, o.y - s]))
                    } else r.push(new PathSegment(Consts.SEGMENT_LINE_TO, [t.x - n, t.y - s]))
                }), this.createElement(t, r, n, s), this.destroy(e)
            }
        }, startdrag: function (t) {
            t.responded = !0
        }, createElement: function (t, e, i, n) {
            return this.graph.createShapeByInteraction(t, e, i, n)
        }, onstart: function (t, e) {
            var i = e.toLogical(t);
            this._ed = i, this.addPoint(i)
        }, onmousemove: function (t, e) {
            this._ed && (this.currentPoint = e.toLogical(t))
        }, ondblclick: function (t, e) {
            if (this._ed) {
                if (this._k9.length < 3)return void this.destroy(e);
                delete this._k9[this._k9.length - 1], this.finish(t, e)
            }
        }, isClosePath: !0
    }, _kl(CreateShapeInteraction, DrawPathInteraction), Q.CreateShapeInteraction = CreateShapeInteraction, CreateLineInteraction.prototype = {
        isClosePath: !1,
        createElement: function (t, e, i, n) {
            return this.graph.createLineByInteraction(t, e, i, n)
        },
        getDefaultDrawStyles: function () {
            return {
                lineWidth: DefaultStyles[Styles.SHAPE_STROKE],
                strokeStyle: DefaultStyles[Styles.SHAPE_STROKE_STYLE],
                lineDash: this.graph.getDefaultStyle(Styles.SHAPE_LINE_DASH),
                lineDashOffset: this.graph.getDefaultStyle(Styles.SHAPE_LINE_DASH_OFFSET),
                lineCap: this.graph.getDefaultStyle(Styles.LINE_CAP),
                lineJoin: this.graph.getDefaultStyle(Styles.LINE_JOIN)
            }
        }
    }, _kl(CreateLineInteraction, CreateShapeInteraction), Q.CreateLineInteraction = CreateLineInteraction, CreateSimpleEdgeInteraction.prototype = {
        destroy: function (t) {
            _iw(this, CreateSimpleEdgeInteraction, "destroy", arguments), t.cursor = "", this.start = null
        }, doDraw: function (t) {
            if (this.start && this.currentPoint) {
                var e, i;
                this.graph.interactionProperties && (e = this.graph.interactionProperties.uiClass, i = this.graph.interactionProperties.edgeType), e = e || this.graph.edgeUIClass || Q.EdgeUI, i = i || this.graph.edgeType;
                var n = e.drawReferenceLine || Q.EdgeUI.drawReferenceLine, s = this.graph.getUI(this.start);
                s && s.bodyBounds && (s = s.bodyBounds.center, n(t, s, this.currentPoint, i), this.styleDraw(t))
            }
        }, canLinkFrom: function (t, e) {
            return t instanceof Node && e.canLinkFrom(t)
        }, canLinkTo: function (t, e) {
            return t instanceof Node && e.canLinkTo(t, this.start)
        }, startdrag: function (t, e) {
            var i = t.getData();
            this.canLinkFrom(i, e) && (t.responded = !0, this.start = i, e.cursor = "crosshair", this.addDrawable())
        }, ondrag: function (t, e) {
            this.start && (Q.stopEvent(t), this.currentPoint = e.toLogical(t), this.invalidate())
        }, enddrag: function (t, e) {
            if (this.start) {
                this.invalidate();
                var i = t.getData();
                this.canLinkTo(i, e) && e.createEdgeByInteraction(this.start, i, t), this.destroy(e)
            }
        }, getDefaultDrawStyles: function () {
            return {
                lineWidth: this.graph.getDefaultStyle(Styles.EDGE_WIDTH),
                strokeStyle: this.graph.getDefaultStyle(Styles.EDGE_COLOR),
                lineDash: this.graph.getDefaultStyle(Styles.EDGE_LINE_DASH),
                lineDashOffset: this.graph.getDefaultStyle(Styles.EDGE_LINE_DASH_OFFSET),
                lineCap: this.graph.getDefaultStyle(Styles.LINE_CAP),
                lineJoin: this.graph.getDefaultStyle(Styles.LINE_JOIN)
            }
        }
    }, _kl(CreateSimpleEdgeInteraction, DrawPathInteraction), Q.CreateSimpleEdgeInteraction = CreateSimpleEdgeInteraction, Defaults.LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS = !1, LabelEditor.prototype = {
        html: null,
        createHTML: function () {
            var t = document.createElement("textarea");
            t.className = "Q-LabelEditor", t.style.position = "absolute", t.style.textAlign = "center", t.style.border = "solid #08E 1px", t.style.padding = "5px", t.style.boxShadow = "0px 0px 10px rgba(40, 85, 184, 0.75)", t.style.display = "none", t.style.overflow = "hidden";
            var e = this;
            return t.oninput = function (t) {
                e.onValueChange(t)
            }, t.onkeydown = function (t) {
                return 27 == t.keyCode ? void e.cancelEdit() : void 0
            }, t.onkeypress = function (i) {
                if (13 == i.keyCode || 10 == i.keyCode) {
                    if (i.preventDefault(), i.altKey || i.ctrlKey || i.shiftKey)return pasteIntoInput(t, "\n"), void e.onValueChange(i);
                    e.stopEdit()
                }
            }, document.body.appendChild(t), t
        },
        setText: function (t, e) {
            this.html.value = t || "", e && (this.html.style.fontSize = e), selectInput(this.html), this.onSizeChange(this.html)
        },
        onSizeChange: function (t) {
            var e = (t.offsetWidth, t.offsetHeight, getLabelSize(t));
            return t.style.width = e.width + 30 + "px", t.style.height = e.height + 10 + "px", e
        },
        onValueChange: function (t) {
            {
                var e = t.target;
                this.onSizeChange(e)
            }
            e.style.left = e.x - e.offsetWidth / 2 + "px"
        },
        onClickOnWindow: function (t) {
            t.target != this.html && (Defaults.LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS ? this.stopEdit() : this.cancelEdit())
        },
        startEdit: function (t, e, i, n, s) {
            this.html || (this.html = this.createHTML()), this.stopEditWhenClickOnWindow || (this.stopEditWhenClickOnWindow = function (t) {
                this.onClickOnWindow(t)
            }.bind(this)), window.addEventListener("mousedown", this.stopEditWhenClickOnWindow, !0), this.callback = s, this.html.x = t, this.html.y = e, this.html.style.display = "block", showDivCenterAt(this.html, t, e), this.setText(i, n || 10), showDivCenterAt(this.html, t, e)
        },
        isEditing: function () {
            return "none" != this.html.style.display
        },
        cancelEdit: function () {
            this.stopEdit(!0)
        },
        stopEdit: function (t) {
            if (this.isEditing()) {
                window.removeEventListener("mousedown", this.stopEditWhenClickOnWindow);
                var e = this.html.value;
                if (!t && this.callback && this.callback(e) === !1)return !1;
                this.html.style.display = "none", this.html.value = null, this.callback = null
            }
        },
        destroy: function () {
            this.html && document.body.removeChild(this.html)
        }
    }, Q.LabelEditor = LabelEditor;
    var DoubleClickInteraction = function (t) {
        this.graph = t
    };
    DoubleClickInteraction.prototype = {
        destroy: function (t) {
            t.labelEditor && (t.labelEditor.destroy(), delete t.labelEditor)
        }, ondblclick: function (t, e) {
            var i = t.getData();
            if (!i)return e.currentSubNetwork ? void e.upSubNetwork() : void(e.enableDoubleClickToOverview && e.zoomToOverview(Defaults.ZOOM_ANIMATE));
            if (e.editable && e.isEditable(i)) {
                var n = e.hitTest(t);
                if (n instanceof LabelUI && n.editable !== !1) {
                    var s = e.labelEditor;
                    s || (e.labelEditor = s = new LabelEditor);
                    var o = n.getBounds();
                    return o = e.toCanvas(o.x + o.width / 2, o.y + o.height / 2), o = localToGlobal(o.x, o.y, e.html), void e.startLabelEdit(i, n, s, o)
                }
            }
            var r = i instanceof Group, a = i instanceof Edge && i.hasEdgeBundle();
            return i._49 && (isMetaKey(t) || !r && !a) ? void(e.currentSubNetwork = i) : r ? void(i.expanded = !i.expanded) : a ? void this.graph.reverseExpanded(i) : void 0
        }
    };
    var EditInteraction = function (t) {
        this.graph = t
    };
    EditInteraction.prototype = {
        onmousedown: function (t, e) {
            e.focus(!0)
        }, onkeydown: function (t, e) {
            if (e.editable) {
                var i = t.keyCode;
                if (8 == i || 46 == i || 127 == i)return e.removeSelectionByInteraction(t), void _2o(t);
                if (isMetaKey(t)) {
                    if (67 == i); else if (86 == i); else if (90 == i); else if (89 != i)return;
                    _2o(t)
                }
            }
        }
    }, Q.EditInteraction = EditInteraction;
    var ExportInteraction = function (t) {
        this.graph = t
    };
    ExportInteraction.prototype = {
        onkeydown: function (t, e) {
            if (t.metaKey && 83 == t.keyCode) {
                var i = e.exportImage(e.scale, e.viewportBounds), n = window.open(), s = n.document;
                s.title = "export image - " + i.width + " x " + i.height;
                var o = s.createElement("img");
                o.src = i.data, s.body.appendChild(o), _2o(t)
            }
        }
    };
    var MoveInteraction = function (t) {
        this.graph = t
    };
    MoveInteraction.prototype = {
        destroy: function () {
            delete this.draggingElements, delete this.currentDraggingElement
        }, _2j: function (t) {
            var e = new HashList;
            return t.selectionModel.forEach(function (i) {
                t.isMovable(i) && t.isVisible(i) && e.add(i)
            }, this), e
        }, onstart: function (t, e) {
            this.currentDraggingElement && this.destroy(e)
        }, startdrag: function (t, e) {
            if (!t.responded) {
                var i = t.getData();
                if (!i || !e.isSelected(i) || !e.isMovable(i))return void this.destroy(e);
                t.responded = !0, this.currentDraggingElement = i, this.draggingElements = this._2j(e);
                var n = new InteractionEvent(e, InteractionEvent.ELEMENT_MOVE_START, t, this.currentDraggingElement, this.draggingElements.datas);
                return e.beforeInteractionEvent(n) === !1 ? void this.destroy(e) : void e.onInteractionEvent(n)
            }
        }, ondrag: function (t, e) {
            if (this.currentDraggingElement) {
                _ek(t);
                var i = t.dx, n = t.dy, s = e.scale;
                i /= s, n /= s;
                var o = new InteractionEvent(e, InteractionEvent.ELEMENT_MOVING, t, this.currentDraggingElement, this.draggingElements.datas);
                e.moveElements(this.draggingElements.datas, i, n), e.onInteractionEvent(o)
            }
        }, enddrag: function (t, e) {
            if (this.currentDraggingElement) {
                if (this.draggingElements && this.draggingElements.length) {
                    if (t.shiftKey) {
                        var i, n = e.toLogical(t), s = n.x, o = n.y;
                        e.forEachReverseVisibleUI(function (t) {
                            var e = t.data;
                            if (!this.draggingElements.contains(e) && t.uiBounds.intersectsPoint(s - t.x, o - t.y) && t.hitTest(s, o, 1)) {
                                if (e instanceof Q.Edge) {
                                    if (!e.enableSubNetwork)return;
                                    for (var n = this.draggingElements.length; n-- > 0;) {
                                        var r = this.draggingElements.get(n);
                                        if (r instanceof Q.Node && r.linkedWith(e))return
                                    }
                                    return i = e, !1
                                }
                                return (e.enableSubNetwork || e._i9() && e.expanded) && (i = e), !1
                            }
                        }, this), i && this.draggingElements.forEach(function (t) {
                            for (var e = t.parent; e;) {
                                if (this.draggingElements.contains(e))return;
                                e = e.parent
                            }
                            t.parent = i
                        }, this)
                    }
                    var r = new InteractionEvent(e, InteractionEvent.ELEMENT_MOVE_END, t, this.currentDraggingElement, this.draggingElements.datas);
                    e.onInteractionEvent(r)
                }
                this.destroy(e)
            }
        }, onpinch: function (t, e) {
            this.currentDraggingElement && this.enddrag(t, e)
        }, step: 1, onkeydown: function (t, e) {
            if (isMetaKey(t)) {
                var i, n;
                if (37 == t.keyCode ? i = -1 : 39 == t.keyCode ? i = 1 : 38 == t.keyCode ? n = -1 : 40 == t.keyCode && (n = 1), i || n) {
                    var s = this._2j(e).datas;
                    if (0 != s.length) {
                        _2o(t), i = i || 0, n = n || 0;
                        var o = this.step / e.scale, r = new InteractionEvent(e, InteractionEvent.ELEMENT_MOVE_END, t, null, s);
                        e.moveElements(s, i * o, n * o), e.onInteractionEvent(r)
                    }
                }
            }
        }
    };
    var PANNING_LIVE_TIME = 2e3, PanInteraction = function (t) {
        this.graph = t
    };
    PanInteraction.prototype = {
        onkeydown: function (t, e) {
            isMetaKey(t) || (37 == t.keyCode ? (this._66(e, 1, 0), _2o(t)) : 39 == t.keyCode ? (this._66(e, -1, 0), _2o(t)) : 38 == t.keyCode ? (this._66(e, 0, 1), _2o(t)) : 40 == t.keyCode && (this._66(e, 0, -1), _2o(t)))
        }, _66: function (t, e, i) {
            t._mw7(e, i)
        }, onstart: function (t, e) {
            this._lc && this.destroy(e)
        }, _lc: !1, startdrag: function (t, e) {
            t.responded || (t.responded = !0, this._lc = !0, e.cursor = CURSOR_GRABBING)
        }, ondrag: function (t, e) {
            this._lc && (_ek(t), e.translate(t.dx || 0, t.dy || 0))
        }, enddrag: function (t, e) {
            if (this._lc) {
                if (e.enableInertia !== !1) {
                    var i = t.vx, n = t.vy;
                    (Math.abs(i) > .1 || Math.abs(n) > .1) && e._mw7(i, n)
                }
                this.destroy(e)
            }
        }, onpinch: function (t, e) {
            this._lc = !0;
            var i = t.dScale;
            if (i && 1 != i) {
                var n = e.globalToLocal(t.center);
                e.zoomAt(i, n.x, n.y, !1)
            }
        }, destroy: function (t) {
            this._lc = !1, t.cursor = null
        }
    }, PointsInteraction.prototype = {
        _1o: function (t) {
            this.element && t.source == this.element && this.graph.callLater(function () {
                this._jq()
            }, this)
        }, _7: function () {
            this._lqPropertyChangeListing || (this._lqPropertyChangeListing = !0, this.graph.dataPropertyChangeDispatcher.addListener(this._1o, this))
        }, _4: function () {
            this._lqPropertyChangeListing = !1, this.graph.dataPropertyChangeDispatcher.removeListener(this._1o, this)
        }, onElementRemoved: function (t, e) {
            this.element && (t == this.element || _hy(t) && containsInArray(t, this.element)) && this.destroy(e)
        }, onClear: function (t) {
            this.element && this.destroy(t)
        }, destroy: function () {
            this.graph.cursor = null, this.element && delete this.element._editting, delete this.element, delete this._9y, delete this._90, delete this._mzanEdit, this._74(), this._4()
        }, _74: function () {
            this.drawLineId && (this.topCanvas.removeDrawable(this.drawLineId), delete this.drawLineId, this.topCanvas.invalidate())
        }, _mx3: function () {
            this.drawLineId && this.topCanvas.contains(this.drawLineId) || (this.drawLineId = this.topCanvas.addDrawable(this.drawLine, this).id, this.topCanvas.invalidate())
        }, _9y: null, _5z: function (t) {
            this._9y = t, this.invalidate()
        }, _e1: function (t, e, i) {
            t.beginPath(), e.isControlPoint ? t.rect(e.x - this.handlerSize / i, e.y - this.handlerSize / i, this.handlerSize / i * 2, this.handlerSize / i * 2) : t.arc(e.x, e.y, this.handlerSize / i, 0, 2 * Math.PI, !1), t.lineWidth = 1 / i, t.lineDash = [], t.strokeStyle = "#888", t.fillStyle = "rgba(255, 255, 0, 0.8)", t.stroke(), t.fill()
        }, _fu: function (t, e, i, n) {
            n ? t.moveTo(e, i) : t.lineTo(e, i)
        }, drawLine: function (t, e) {
            if (this._9y && this._9y.length) {
                t.save();
                var i = this.element instanceof ShapeNode;
                i && (t.translate(this.element.x, this.element.y), this.element.rotate && t.rotate(this.element.rotate));
                var n, s = [];
                t.beginPath();
                {
                    this._9y.length
                }
                _i1(this._9y, function (e) {
                    if (e.type != Consts.SEGMENT_CLOSE)for (var i = 0, o = e.points; i + 1 < o.length;) {
                        var r = o[i], a = o[i + 1], h = {x: r, y: a, isControlPoint: this._6z(e, i)};
                        s.push(h), this._fu(t, h.x, h.y, null == n), n = h, i += 2
                    }
                }, this), t.lineWidth = 1 / e, t.lineDash = [2 / e, 3 / e], t.strokeStyle = "#555", t.stroke(), _i1(s, function (i) {
                    this._e1(t, i, e)
                }, this), t.restore()
            }
        }, invalidate: function () {
            this.topCanvas.invalidate()
        }, _3o: function (t) {
            if (this.element != t && (this.element && this.destroy(), t && this.isEditable(t))) {
                var e = this._5w(t, this.graph);
                e && (this.element = t, t._editting = !0, this._mzanEdit = !0, this._5z(e), this._7(), this._mx3())
            }
        }, _jq: function () {
            if (this.drawLineId && this.element) {
                var t = this._5w(this.element, this.graph);
                return t ? void this._5z(t) : void this.destroy(this.graph)
            }
        }, _5w: function (t, e) {
            return e.isEditable(t) ? t.pathSegments || [] : void 0
        }, _i3: function (t, e) {
            t -= this.element.x, e -= this.element.y;
            var i = {x: t, y: e};
            return this.element.rotate && transformPoint(i, -this.element.rotate), i
        }, onclick: function (t, e) {
            if (e.editable && t.altKey && this.element) {
                var i = this._fy(t, e);
                if (i && i.isControlPoint)return void this.element.removePathSegmentByIndex(i.index);
                if (this.element == t.getData()) {
                    var n = e.toLogical(t), s = e.getUI(this.element);
                    s.addPoint(n.x, n.y, this.handlerSize || 2)
                }
            }
        }, isEditable: function (t) {
            return this.graph.isEditable(t) && (t instanceof Edge || t instanceof ShapeNode)
        }, ondblclick: function (t, e) {
            if (!e.editable)return void(this.element && this.destroy(e));
            var i = t.getData();
            return !i || i == this.element || i._editting ? void this.destroy(e) : void this._3o(i)
        }, onstart: function (t, e) {
            if (!e.editable)return void(this.element && this.destroy(e));
            if (!t.responded) {
                if (this.element && this._fy(t, e))return void(t.responded = !0);
                var i = t.getData();
                return i && e.isResizable(i) && i instanceof ShapeNode ? void(this.element && i != this.element && this.destroy()) : void this._3o(i)
            }
        }, onrelease: function () {
            this.element && (this._mzanEdit = !0)
        }, _90: null, _fy: function (t, e) {
            var i = e.toLogical(t);
            this.element instanceof ShapeNode && (i = this._i3(i.x, i.y));
            var n, s = e.scale, o = this.handlerSize / s, r = this._9y;
            return _i1(r, function (t, e) {
                for (var s = 0, a = t.points; s + 1 < a.length;) {
                    var h = a[s], l = a[s + 1], _ = calculateDistance(i.x, i.y, h, l);
                    if (o > _) {
                        if (n = {segment: t, index: e, pointIndex: s}, this._6z(t, s)) {
                            n.isControlPoint = !0;
                            var u = r instanceof HashList ? r.getByIndex(e + 1) : r[e + 1];
                            u && (n.nextSegment = u)
                        }
                        return !1
                    }
                    s += 2
                }
            }, this), n
        }, _6z: function (t, e) {
            return e == t.points.length - 2
        }, startdrag: function (t, e) {
            if (this.element && this._mzanEdit && (this._90 = this._fy(t, e), this._90)) {
                this._74(), t.responded = !0;
                var i = new InteractionEvent(e, InteractionEvent.POINT_MOVE_START, t, this.element);
                i.point = this._90, e.onInteractionEvent(i)
            }
        }, ondrag: function (t, e) {
            if (this.element && this._90) {
                var i = t.dx, n = t.dy, s = e.scale;
                if (i /= s, n /= s, this.element.rotate) {
                    var o = {x: i, y: n};
                    transformPoint(o, -this.element.rotate), i = o.x, n = o.y
                }
                var r = this._90.segment;
                if (!this._90.isControlPoint || r.type != QUAD_TO && r.type != CURVE_TO)r.points[this._90.pointIndex] += i, r.points[this._90.pointIndex + 1] += n; else {
                    for (var a = r.points.length - 4; a < r.points.length;)r.points[a] += i, r.points[a + 1] += n, a += 2;
                    !this._90.nextSegment || this._90.nextSegment.type != CURVE_TO && this._90.nextSegment.type != QUAD_TO || (this._90.nextSegment.points[0] += i, this._90.nextSegment.points[1] += n)
                }
                this.element.firePathChange();
                var h = new InteractionEvent(e, InteractionEvent.POINT_MOVING, t, this.element);
                h.point = this._90, e.onInteractionEvent(h)
            }
        }, enddrag: function (t, e) {
            if (this.element && this._90) {
                this._mx3(), this._jq();
                var i = new InteractionEvent(e, InteractionEvent.POINT_MOVE_END, t, this.element);
                i.point = this._90, e.onInteractionEvent(i)
            }
        }, onmousemove: function (t, e) {
            this.element && (e.cursor = t.altKey && (this._fy(t, e) || this.element == t.getData()) ? "crosshair" : null)
        }
    }, Defaults.SELECTION_RECTANGLE_STROKE = 1, Defaults.SELECTION_RECTANGLE_STROKE_COLOR = _hs(3724541951), Defaults.SELECTION_RECTANGLE_FILL_COLOR = _hs(1430753245);
    var RectangleSelectionInteraction = function (t) {
        this.graph = t, this.topCanvas = t._8t._topCanvas
    };
    RectangleSelectionInteraction.prototype = {
        onstart: function (t, e) {
            this._lc && this.destroy(e)
        }, startdrag: function (t, e) {
            t.responded || (t.responded = !0, this._lc = e.toLogical(t), e.cursor = "crosshair", this._1aId = this.topCanvas.addDrawable(this._1a, this).id)
        }, ondrag: function (t, e) {
            if (this._lc) {
                _ek(t), this._end = e.toLogical(t), this.invalidate();
                var i = new InteractionEvent(e, InteractionEvent.SELECT_START, t, e.selectionModel);
                e.onInteractionEvent(i)
            }
        }, enddrag: function (t, e) {
            if (this._lc) {
                this._frTimer && (clearTimeout(this._frTimer), this._frTimer = null), this._fr(!0), this.destroy(e);
                var i = new InteractionEvent(e, InteractionEvent.SELECT_END, t, e.selectionModel);
                e.onInteractionEvent(i)
            }
        }, onpinch: function (t, e) {
            this._lc && this.enddrag(t, e)
        }, _1a: function (t, e) {
            t.strokeStyle = Defaults.SELECTION_RECTANGLE_STROKE_COLOR, t.fillStyle = Defaults.SELECTION_RECTANGLE_FILL_COLOR, t.lineWidth = Defaults.SELECTION_RECTANGLE_STROKE / e;
            var i = this._lc.x, n = this._lc.y;
            t.rect(i, n, this._end.x - i, this._end.y - n), t.fill(), t.stroke()
        }, invalidate: function () {
            return this.invalidateFlag ? void this.topCanvas.invalidate() : (this.invalidateFlag = !0, void(this._frTimer = setTimeout(this._fr.bind(this), 100)))
        }, _fr: function (t) {
            if (this.invalidateFlag = !1, this._frTimer = null, !this._lc || isIE10 && !t)return void this.topCanvas.invalidate();
            var e = Math.min(this._lc.x, this._end.x), i = Math.min(this._lc.y, this._end.y), n = Math.abs(this._lc.x - this._end.x), s = Math.abs(this._lc.y - this._end.y);
            if (!n || !s)return void this.graph.selectionModel.clear();
            var o, r = [], a = this.graph.scale;
            if (this.graph.forEachVisibleUI(function (t) {
                    t._i5 && this.graph.isSelectable(t.$data) && (o = t._fi, (containsRect(e, i, n, s, o.x + t._x, o.y + t._y, o.width, o.height) || UIHitTestByBoundsAbsolute(e, i, n, s, t, a)) && r.push(t.$data))
                }, this), this.graph.selectionModel.set(r), this.topCanvas.invalidate(), !t) {
                var h = new InteractionEvent(this.graph, InteractionEvent.SELECT_BETWEEN, null, this.graph.selectionModel);
                this.graph.onInteractionEvent(h)
            }
        }, destroy: function (t) {
            this._lc = null, t.cursor = null, this._1aId && (this.topCanvas.removeDrawable(this._1aId), delete this._1aId, this.topCanvas.invalidate())
        }
    };
    var QUARTER_PI = Math.PI / 4;
    ResizeInteraction.prototype = {
        _ey: !1, _f0: !1, _1o: function (t) {
            this.element && t.source == this.element && this.graph.callLater(function () {
                this._mw4()
            }, this)
        }, _7: function () {
            this._lqPropertyChangeListing || (this._lqPropertyChangeListing = !0, this.graph.dataPropertyChangeDispatcher.addListener(this._1o, this))
        }, _4: function () {
            this._lqPropertyChangeListing = !1, this.graph.dataPropertyChangeDispatcher.removeListener(this._1o, this)
        }, onElementRemoved: function (t, e) {
            this.element && (t == this.element || _hy(t) && containsInArray(t, this.element)) && this.destroy(e)
        }, onClear: function (t) {
            this.element && this.destroy(t)
        }, ondblclick: function (t, e) {
            this.element && this.destroy(e)
        }, destroy: function (t) {
            t.cursor = null, delete this.element, delete this._d6, delete this._mxody, delete this._90, delete this._mzanEdit, delete this._k9, delete this._rotatePoint, delete this._f0, delete this._ey, delete this._insets, this._74(), this._4()
        }, _74: function () {
            this._fuId && (this.topCanvas.removeDrawable(this._fuId), delete this._fuId, this.topCanvas.invalidate())
        }, _mx3: function () {
            this._fuId && this.topCanvas.contains(this._fuId) || (this._fuId = this.topCanvas.addDrawable(this._fu, this).id, this.topCanvas.invalidate())
        }, _d6: null, _k9: null, _8r: function (t) {
            this._d6 = t;
            var e = this._d6.x, i = this._d6.y, n = this._d6.width, s = this._d6.height, o = this.element instanceof Group && this.element.expanded;
            if (this._f0) {
                var r = [];
                o || (r.push({
                    x: e,
                    y: i,
                    p: Position.LEFT_TOP,
                    cursor: "nwse-resize",
                    rotate: 5 * QUARTER_PI
                }), r.push({
                    x: e + n / 2,
                    y: i,
                    p: Position.CENTER_TOP,
                    cursor: "ns-resize",
                    rotate: 6 * QUARTER_PI
                }), r.push({
                    x: e + n,
                    y: i,
                    p: Position.RIGHT_TOP,
                    cursor: "nesw-resize",
                    rotate: 7 * QUARTER_PI
                }), r.push({
                    x: e,
                    y: i + s / 2,
                    p: Position.LEFT_MIDDLE,
                    cursor: "ew-resize",
                    rotate: 4 * QUARTER_PI
                }), r.push({
                    x: e,
                    y: i + s,
                    p: Position.LEFT_BOTTOM,
                    cursor: "nesw-resize",
                    rotate: 3 * QUARTER_PI
                })), r.push({
                    x: e + n,
                    y: i + s / 2,
                    p: Position.RIGHT_MIDDLE,
                    cursor: "ew-resize",
                    rotate: 0
                }), r.push({
                    x: e + n / 2,
                    y: i + s,
                    p: Position.CENTER_BOTTOM,
                    cursor: "ns-resize",
                    rotate: 2 * QUARTER_PI
                }), r.push({
                    x: e + n,
                    y: i + s,
                    p: Position.RIGHT_BOTTOM,
                    cursor: "nwse-resize",
                    rotate: QUARTER_PI
                }), this._k9 = r
            }
            this._rotatePoint = this._ey ? {x: e + n / 2, y: i, cursor: CURSOR_ROTATE} : null, this._mzz()
        }, _e1: function (t, e, i, n) {
            t.beginPath();
            var s = (this.handlerSize - 1) / n;
            t.rect(e - s, i - s, 2 * s, 2 * s), t.lineWidth = 1 / n, t.lineDash = [], t.strokeStyle = "#888", t.fillStyle = "rgba(255, 255, 255, 0.8)", t.stroke(), t.fill()
        }, _63: function (t, e, i, n, s, o) {
            s = s || this.handlerSize, o = o || "rgba(0, 255, 0, 1)", t.beginPath(), s /= n, t.arc(e, i, s, 0, 2 * Math.PI, !1), t.lineWidth = 1 / n, t.lineDash = [], t.strokeStyle = "#888", t.fillStyle = o, t.stroke(), t.fill()
        }, _i3: function (t, e) {
            t -= this.element.x, e -= this.element.y;
            var i = {x: t, y: e};
            return this.element.rotate && transformPoint(i, -this.element.rotate), i
        }, _fu: function (t, e) {
            if (this._d6) {
                if (t.save(), t.translate(this.element.x, this.element.y), this.element.rotate && t.rotate(this.element.rotate), this._rotatePoint) {
                    this._63(t, 0, 0, e, 3, "#FF0");
                    var i = this._rotatePoint.x, n = this._rotatePoint.y - this._rotateHandleLength / e;
                    t.beginPath(), t.moveTo(i, this._rotatePoint.y), t.lineTo(i, n), t.lineWidth = 1 / e, t.strokeStyle = "#555", t.stroke(), this._63(t, i, n, e)
                }
                if (this._k9) {
                    var s = this._d6.x, o = this._d6.y, r = this._d6.width, a = this._d6.height;
                    t.beginPath(), t.rect(s, o, r, a), t.lineWidth = 1 / e, t.lineDash = [2 / e, 3 / e], t.strokeStyle = "#555", t.stroke(), _i1(this._k9, function (i) {
                        this._e1(t, i.x, i.y, e)
                    }, this)
                }
                t.restore()
            }
        }, _mzz: function () {
            this.topCanvas.invalidate()
        }, _3o: function (t, e, i, n) {
            this.element = t, this._mx3();
            var s = e.getUI(t);
            this._mxody = s.body, this._f0 = i, this._ey = n, this._mw4(), this._7()
        }, _mw4: function () {
            if (this._fuId) {
                var t = toUIBounds(this._mxody, this._mxody._je), e = toUIBounds(this._mxody, this._mxody._87);
                this._insets = new Insets(t.y - e.y, t.x - e.x, e.bottom - t.bottom, e.right - t.right), this._8r(e)
            }
        }, _mx5: function (t, e) {
            return e.isResizable(t)
        }, _mx6: function (t, e) {
            return (!t._i9() || !t.expanded) && e.isRotatable(t)
        }, _dk: function (t, e) {
            return t instanceof Node && e.isEditable(t)
        }, onstart: function (t, e) {
            if (!e.editable)return void(this.element && this.destroy(e));
            if (!t.responded) {
                var i = e.getUI(t), n = t.getData();
                if (n != this.element) {
                    if (this.element) {
                        if (this._fy(t, e))return void(t.responded = !0);
                        this.destroy(e)
                    }
                    if (n && !n._editting && this._dk(n, e)) {
                        var s = this._mx5(n, e, i), o = this._mx6(n, e, i);
                        (s || o) && this._3o(n, e, s, o)
                    }
                }
            }
        }, onrelease: function (t, e) {
            this.element && (this._mzanEdit = !0, this._mx3(), e.callLater(function () {
                this._mw4()
            }, this))
        }, _90: null, _fy: function (t, e) {
            var i = e.toLogical(t);
            i = this._i3(i.x, i.y);
            var n = e.scale, s = this.handlerSize / n;
            if (this._rotatePoint) {
                var o = this._rotatePoint.x, r = this._rotatePoint.y - this._rotateHandleLength / n;
                if (calculateDistance(i.x, i.y, o, r) < s)return this._rotatePoint
            }
            if (this._k9 && this._k9.length) {
                var a;
                return _i1(this._k9, function (t) {
                    return calculateDistance(i.x, i.y, t.x, t.y) < s ? (a = t, !1) : void 0
                }, this), a
            }
        }, onmousemove: function (t, e) {
            if (this.element) {
                var i = this._fy(t, e);
                if (!i)return void(e.cursor = null);
                if (i != this._rotatePoint && this.element.rotate) {
                    var n = i.rotate + this.element.rotate;
                    return void(e.cursor = getCursorByAngle(n))
                }
                e.cursor = i.cursor
            }
        }, startdrag: function (t, e) {
            if (this.element && (this._74(), this._mzanEdit && (this._90 = this._fy(t, e), this._90))) {
                if (t.responded = !0, this._90 == this._rotatePoint)return this._90.start = e.toLogical(t), void(this._90.rotate = this.element.rotate || 0);
                var i = new InteractionEvent(e, InteractionEvent.RESIZE_START, t, this.element);
                i.point = this._90, e.onInteractionEvent(i)
            }
        }, _7a: function (t, e, i, n, s, o) {
            var r = this._d6, a = r.x, h = r.y, l = r.width, _ = r.height;
            if (o) {
                var u = n != l;
                u ? s = n * _ / l : n = s * l / _
            }
            var d = t.path._fg, c = n / l, f = s / _, E = -a * c + e, g = -h * f + i;
            d.forEach(function (t) {
                if (t.type != Consts.SEGMENT_CLOSE) {
                    var n = t.points;
                    if (n && n.length)for (var s = 0, o = n.length; o > s; s += 2) {
                        var r = n[s], l = n[s + 1];
                        n[s] = (r - a) * c + e - E, n[s + 1] = (l - h) * f + i - g
                    }
                }
            }), this._d6.set(e - E, i - g, n, s), t.setLocation(t.x + E, t.y + g), t.firePathChange()
        }, _mw2: function (t, e, i, n, s) {
            this._d6.set(e, i, n, s), t.minSize = {width: n, height: s}
        }, _4h: function (t, e, i, n, s) {
            if (this.element instanceof Group)return this._mw2(this.element, t, e, i, n, s);
            if (this.element instanceof ShapeNode)return this._7a(this.element, t, e, i, n, s);
            var o = this._mxody instanceof LabelUI;
            if (!o && s) {
                var r = this._d6, a = this._mxody.originalBounds, h = i != r.width;
                h ? n = i * a.height / a.width : i = n * a.width / a.height
            }
            var l = this.element.anchorPosition, _ = new Size(i - this._insets.left - this._insets.right, n - this._insets.top - this._insets.bottom);
            if (_.width < 1 && (i = this._insets.left + this._insets.right + 1, _.width = 1), _.height < 1 && (n = this._insets.top + this._insets.bottom + 1, _.height = 1), o ? this.element.setStyle(Styles.LABEL_SIZE, _) : this.element.size = _, l) {
                var u = _mxa(l, i, n), d = u.x + t - (this._mxody.offsetX || 0), c = u.y + e - (this._mxody.offsetY || 0);
                if (this._d6.set(t - d, e - c, i, n), this.element.rotate) {
                    var u = transformPoint({x: d, y: c}, this.element.rotate);
                    d = u.x, c = u.y
                }
                this.element.x += d, this.element.y += c
            } else {
                var d = this._d6.x * i / this._d6.width - t, c = this._d6.y * n / this._d6.height - e;
                if (this._d6.set(t + d, e + c, i, n), this.element.rotate) {
                    var u = transformPoint({x: d, y: c}, this.element.rotate);
                    d = u.x, c = u.y
                }
                this.element.x -= d, this.element.y -= c
            }
        }, ondrag: function (t, e) {
            if (this.element && this._90)if (this._90 != this._rotatePoint) {
                var i = t.dx, n = t.dy, s = e.scale;
                if (i /= s, n /= s, this.element.rotate) {
                    var o = {x: i, y: n};
                    transformPoint(o, -this.element.rotate), i = o.x, n = o.y
                }
                var r = this._90.p, a = this._d6, h = a.x, l = a.y, _ = a.width, u = a.height;
                r.horizontalPosition == LEFT ? i >= _ ? (h += _, _ = i - _ || 1) : (h += i, _ -= i) : r.horizontalPosition == RIGHT && (-i >= _ ? (_ = -i - _ || 1, h -= _) : _ += i), r.verticalPosition == TOP ? n >= u ? (l += u, u = n - u || 1) : (l += n, u -= n) : r.verticalPosition == BOTTOM && (-n >= u ? (u = -n - u || 1, l -= u) : u += n), this._4h(h, l, _, u, t.shiftKey);
                var d = new InteractionEvent(e, InteractionEvent.RESIZING, t, this.element);
                d.point = this._90, e.onInteractionEvent(d)
            } else {
                var o = e.toLogical(t), c = constructThreePoint(o.x, o.y, this.element.x, this.element.y, this._90.start.x, this._90.start.y, !0);
                c += this._90.rotate || 0, t.shiftKey && (c = Math.round(c / Math.PI * 4) * Math.PI / 4), this.element.rotate = c % (2 * Math.PI);
                var d = new InteractionEvent(e, InteractionEvent.ROTATING, t, this.element)
            }
        }, enddrag: function (t, e) {
            if (this.element && this._90 && this._90 != this._rotatePoint) {
                var i = new InteractionEvent(e, InteractionEvent.RESIZE_END, t, this.element);
                i.point = this._90, e.onInteractionEvent(i)
            }
        }
    }, Q.ResizeInteraction = ResizeInteraction;
    var SelectionInteraction = function (t) {
        this.graph = t
    };
    SelectionInteraction.prototype = {
        onstart: function (t, e) {
            if (!t.responded) {
                !isTouchSupport && isIE && e.focus(!0);
                var i = t.getData();
                if (i && !e.isSelectable(i) && (i = null), i && isMetaKey(t)) {
                    e.reverseSelect(i);
                    var n = new InteractionEvent(e, InteractionEvent.SELECT, t, e.selectionModel);
                    return void e.onInteractionEvent(n)
                }
                if (!i || !e.selectionModel.isSelected(i)) {
                    i ? (e.setSelection(i), e.sendToTop(i)) : e.setSelection(null);
                    var n = new InteractionEvent(e, InteractionEvent.SELECT, t, e.selectionModel);
                    e.onInteractionEvent(n)
                }
            }
        }, onkeydown: function (t, e) {
            return 27 == t.keyCode ? void e.unSelectAll() : void(isMetaKey(t) && 65 == t.keyCode && (e.selectAll(), _2o(t)))
        }
    };
    var CURSOR_OFFSET_X = 0, CURSOR_OFFSET_Y = 15;
    Defaults.TOOLTIP_DURATION = 3e3, Defaults.TOOLTIP_DELAY = 1e3;
    var tooltipClass = "Q-Tooltip";
    css_mhRule("." + tooltipClass, {
        "background-color": "#FFFFCA",
        overflow: "hidden",
        "box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)",
        color: "#000",
        "pointer-events": "none",
        border: "1px solid #D9D9D9",
        padding: "2px 4px",
        display: "block",
        position: "absolute"
    });
    var TooltipInteraction = function (t) {
        this.graph = t, this._mx0 = {}
    };
    TooltipInteraction.prototype = {
        _mx0: null, _mx1: null, _mx2: function () {
            delete this._initTimer, this._mx0.data && (this._mx1 || (this._mx1 = document.createElement("div"), this._mx1.className = tooltipClass), this._mx1.parentNode || document.body.appendChild(this._mx1), this._d4(this.graph, this._mx0.data))
        }, _d4: function (t, e) {
            var i = t.getTooltip(e), n = "text" == e.tooltipType;
            i && !n && (i = i.replace(/\n/g, "<br>")), n ? this._mx1.textContent = i || "" : this._mx1.innerHTML = i || "";
            var s = this._mx0.evt.pageX + CURSOR_OFFSET_X, o = this._mx0.evt.pageY + CURSOR_OFFSET_Y;
            showDivAt(this._mx1, s, o), this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer), this._deleteTimer = setTimeout(Q.createFunction(this, this._8s), t.tooltipDuration || Defaults.TOOLTIP_DURATION)
        }, _8s: function () {
            delete this._deleteTimer, this._mx1 && this._mx1.parentNode && this._mx1.parentNode.removeChild(this._mx1), delete this._mx1, this._mx0 = {}
        }, _ex: function (t, e, i, n) {
            if (!this._mx1) {
                var s = n.tooltipDelay;
                return isNaN(s) && (s = Defaults.TOOLTIP_DELAY), void(this._initTimer = setTimeout(Q.createFunction(this, this._mx2), s))
            }
            this._d4(n, t)
        }, onstart: function (t, e) {
            this.destroy(e)
        }, onmousemove: function (t, e) {
            if (e.enableTooltip) {
                var i = t.getData();
                if (this._mx0.evt = t, this._mx0.data != i && (this._mx0.data = i, this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer), i)) {
                    var n = e.getTooltip(i);
                    n && this._ex(i, n, t, e)
                }
            }
        }, destroy: function () {
            this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer), this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer), this._mx1 && this._8s(), this._mx0 = {}
        }
    };
    var WheelZoomInteraction = function (t) {
        this.graph = t
    };
    WheelZoomInteraction.prototype = {
        onmousewheel: function (t, e) {
            if (e.enableWheelZoom !== !1) {
                if (e._scaling)return void _2o(t);
                e._scaling = !0, _f7(function () {
                    delete e._scaling
                }, this, 100), zoomByMouseEvent(e, t, t.delta > 0) !== !1 && _2o(t)
            }
        }
    };
    var ZoomInInteraction = function (t) {
        this.graph = t
    };
    ZoomInInteraction.prototype = {
        onclick: function (t, e) {
            zoomByMouseEvent(e, t, !isMetaKey(t))
        }
    };
    var ZoomOutInteraction = function (t) {
        this.graph = t
    };
    ZoomOutInteraction.prototype = {
        onclick: function (t, e) {
            zoomByMouseEvent(e, t, isMetaKey(t))
        }
    }, _kl(InteractionEvent, Event), InteractionEvent.ELEMENT_MOVE_START = "element.move.start", InteractionEvent.ELEMENT_MOVING = "element.moving", InteractionEvent.ELEMENT_MOVE_END = "element.move.end", InteractionEvent.ELEMENT_CREATED = "element.created", InteractionEvent.ELEMENT_REMOVED = "element.removed", InteractionEvent.POINT_MOVE_START = "point.move.start", InteractionEvent.POINT_MOVING = "point.moving", InteractionEvent.POINT_MOVE_END = "point.move.end", InteractionEvent.RESIZE_START = "resize.start", InteractionEvent.RESIZING = "resizing", InteractionEvent.RESIZE_END = "resize.end", InteractionEvent.ROTATING = "rotating", InteractionEvent.ROTATE_END = "rotate.end", InteractionEvent.EDGE_BUNDLE = "edge.bundle", InteractionEvent.SELECT = "select", InteractionEvent.SELECT_START = "select.start", InteractionEvent.SELECT_BETWEEN = "select.between", InteractionEvent.SELECT_END = "select.end", InteractionEvent.LONG_CLICK = "long.click", InteractionManager.prototype = {
        _9g: function (t) {
            if (this._interactionSupport)switch (t.kind) {
                case ListEvent.KIND_REMOVE:
                    this._interactionSupport._4g(t.data);
                    break;
                case ListEvent.KIND_CLEAR:
                    this._interactionSupport._7z(t.data)
            }
        }, destroy: function () {
            delete this._kz, delete this._4q, this._interactionSupport && (this._interactionSupport._ij(), delete this._interactionSupport)
        }, _kz: null, _4q: null, defaultMode: null, _h9: function (t, e, i) {
            this._4q[t] = new InteractionMode(e, i), t == this.currentMode && this._interactionSupport._6v(e)
        }, addCustomInteraction: function (t) {
            this._interactionSupport._9(t)
        }, _mj: function (t) {
            var e = this._4q[t];
            return e ? e : defaultInteractionModes[t]
        }
    }, _50(InteractionManager.prototype, {
        defaultCursor: {
            get: function () {
                return this.currentInteractionMode ? this.currentInteractionMode.defaultCursor : void 0
            }
        }, currentMode: {
            get: function () {
                return this._mzurrentMode
            }, set: function (t) {
                if (this._mzurrentMode != t) {
                    {
                        this._mzurrentMode
                    }
                    this._interactionSupport || (this._interactionSupport = new InteractionSupport(this._kz)), this._mzurrentMode = t, this.currentInteractionMode = this._mj(this._mzurrentMode), this._kz.cursor = this.defaultCursor, this._interactionSupport._6v(this.currentInteractionMode ? this.currentInteractionMode.getInteractionInstances(this._kz) : [])
                }
            }
        }
    });
    var defaultInteractionModes = {};
    Defaults.registerInteractions = function (t, e, i) {
        var n = new InteractionMode(e, i);
        defaultInteractionModes[t] = n
    }, Consts.INTERACTION_MODE_VIEW = "view", Consts.INTERACTION_MODE_DEFAULT = "default", Consts.INTERACTION_MODE_SELECTION = "selection", Consts.INTERACTION_MODE_ZOOMIN = "zoomin", Consts.INTERACTION_MODE_ZOOMOUT = "zoomout", Consts.INTERACTION_MODE_CREATE_SIMPLE_EDGE = "create.simple.edge", Consts.INTERACTION_MODE_CREATE_EDGE = "create.edge", Consts.INTERACTION_MODE_CREATE_SHAPE = "create.shape", Consts.INTERACTION_MODE_CREATE_LINE = "create.line", Defaults.registerInteractions(Consts.INTERACTION_MODE_VIEW, [SelectionInteraction, PanInteraction, WheelZoomInteraction, ExportInteraction, DoubleClickInteraction, TooltipInteraction]), Defaults.registerInteractions(Consts.INTERACTION_MODE_CREATE_SIMPLE_EDGE, [EditInteraction, CreateSimpleEdgeInteraction, SelectionInteraction, PanInteraction, WheelZoomInteraction, ExportInteraction, TooltipInteraction]), Defaults.registerInteractions(Consts.INTERACTION_MODE_CREATE_EDGE, [EditInteraction, CreateEdgeInteraction, SelectionInteraction, PanInteraction, WheelZoomInteraction, ExportInteraction, TooltipInteraction]), Defaults.registerInteractions(Consts.INTERACTION_MODE_CREATE_SHAPE, [EditInteraction, CreateShapeInteraction, SelectionInteraction, PanInteraction, WheelZoomInteraction, ExportInteraction, TooltipInteraction]), Defaults.registerInteractions(Consts.INTERACTION_MODE_CREATE_LINE, [CreateLineInteraction, SelectionInteraction, PanInteraction, WheelZoomInteraction, ExportInteraction, TooltipInteraction]), Defaults.registerInteractions(Consts.INTERACTION_MODE_DEFAULT, [EditInteraction, ResizeInteraction, PointsInteraction, SelectionInteraction, MoveInteraction, PanInteraction, WheelZoomInteraction, ExportInteraction, DoubleClickInteraction, TooltipInteraction]), Defaults.registerInteractions(Consts.INTERACTION_MODE_SELECTION, [EditInteraction, ResizeInteraction, PointsInteraction, SelectionInteraction, MoveInteraction, RectangleSelectionInteraction, PanInteraction, WheelZoomInteraction, ExportInteraction, DoubleClickInteraction, TooltipInteraction]), Defaults.registerInteractions(Consts.INTERACTION_MODE_ZOOMIN, [WheelZoomInteraction, ExportInteraction, ZoomInInteraction], CURSOR_ZOOMIN), Defaults.registerInteractions(Consts.INTERACTION_MODE_ZOOMOUT, [WheelZoomInteraction, ExportInteraction, ZoomOutInteraction], CURSOR_ZOOMOUT), Q.PanInteraction = PanInteraction, Q.SelectionInteraction = SelectionInteraction, Q.MoveInteraction = MoveInteraction, Q.WheelZoomInteraction = WheelZoomInteraction, Q.DoubleClickInteraction = DoubleClickInteraction, Q.ExportInteraction = ExportInteraction, Q.TooltipInteraction = TooltipInteraction, Q.RectangleSelectionInteraction = RectangleSelectionInteraction, Q.PointsInteraction = PointsInteraction;
    var Layouter = function (t) {
        this.graph = t
    };
    Q.Layouter = Layouter, Layouter.prototype = {
        getNodeBounds: function (t) {
            return this.graph.getUIBounds(t)
        }, isLayoutable: function (t) {
            return t.layoutable !== !1
        }, getLayoutResult: function () {
        }, updateLocations: function (t, e, i, n, s) {
            if (e === !0) {
                if (this.animate || (this.animate = new NodeTranslation), i && (this.animate.duration = i), n && (this.animate.animationType = n), this.animate.locations = t, s) {
                    var o = s, r = this;
                    s = function () {
                        o.call(r, t)
                    }
                }
                return void this.animate.start(s)
            }
            for (var a in t) {
                var h = t[a], l = h.node;
                l.setLocation(h.x, h.y)
            }
            s && s.call(this, t)
        }, _g1: function (t) {
            var e, i, n, s = null;
            t && (e = t.byAnimate, s = t.callback, i = t.duration, n = t.animationType);
            var o = this.getLayoutResult(t);
            return o ? (this.updateLocations(o, e, i, n, s), o) : !1
        }, doLayout: function (t, e) {
            return this.graph && e !== !0 ? void this.graph.callLater(function () {
                this._g1(t)
            }, this) : this._g1(t)
        }
    };
    var DIRECTION_RIGHT = 11, DIRECTION_LEFT = 12, DIRECTION_CENTER = 13, DIRECTION_BOTTOM = 21, DIRECTION_TOP = 22, DIRECTION_MIDDLE = 23;
    Consts.DIRECTION_RIGHT = DIRECTION_RIGHT, Consts.DIRECTION_LEFT = DIRECTION_LEFT, Consts.DIRECTION_CENTER = DIRECTION_CENTER, Consts.DIRECTION_BOTTOM = DIRECTION_BOTTOM, Consts.DIRECTION_TOP = DIRECTION_TOP, Consts.DIRECTION_MIDDLE = DIRECTION_MIDDLE;
    var LAYOUT_TYPE_EVEN = "even", LAYOUT_TYPE_TWO_SIDE = "two.side", LAYOUT_TYPE_EVEN_HORIZONTAL = "even.h", LAYOUT_TYPE_EVEN_VERTICAL = "even.v";
    Consts.LAYOUT_TYPE_EVEN = LAYOUT_TYPE_EVEN, Consts.LAYOUT_TYPE_EVEN_HORIZONTAL = LAYOUT_TYPE_EVEN_HORIZONTAL, Consts.LAYOUT_TYPE_EVEN_VERTICAL = LAYOUT_TYPE_EVEN_VERTICAL, Consts.LAYOUT_TYPE_TWO_SIDE = LAYOUT_TYPE_TWO_SIDE, Q.isHorizontalDirection = isHorizontalDirection;
    var TreeLayouter = function (t) {
        this.graph = t
    };
    TreeLayouter.prototype = {
        hGap: 50,
        vGap: 50,
        parentChildrenDirection: DIRECTION_BOTTOM,
        layoutType: LAYOUT_TYPE_EVEN,
        defaultSize: {width: 50, height: 60},
        getNodeSize: function (t) {
            if (this.graph._8t._mwq) {
                var e = this.graph.getUI(t);
                if (e)return e._fi
            }
            return t.image && t.image.bounds ? {
                width: t.image.bounds.width,
                height: t.image.bounds.height
            } : this.defaultSize
        },
        _mzr: function (t, e) {
            if (this.isLayoutable(t)) {
                var i = this.getNodeSize(t), n = t.id, s = (t.parentChildrenDirection, e ? this._9w[e.id] : this._mxd);
                this._9w[n] = new TreeLayoutBounds(t.hGap || this.hGap, t.vGap || this.vGap, t.layoutType || this.layoutType, t.parentChildrenDirection, s, t, i.width, i.height)
            }
        },
        _9w: null,
        _mxd: null,
        _la: function () {
            this._9w = null, this._mxd = null
        },
        getLayoutResult: function (t) {
            var e, i, n, s, o = this.graph;
            t instanceof Object && (e = t.x, i = t.y, o = t.root || this.graph, n = t.bounds, s = t.undirected), this._9w = {}, this._mxd = new TreeLayoutBounds, this._mxd._mc(this.hGap, this.vGap, this.parentChildrenDirection, this.layoutType);
            var r = {}, a = forEachByTopoDepthFirstSearch(o, this._mzr, this, !1, s);
            return a && (this._mxd._g1(e || 0, i || 0, r), n && n.set(this._mxd.x, this._mxd.y, this._mxd.width, this._mxd.height)), this._la(), r
        },
        doLayout: function (t, e) {
            if (_hc(t)) {
                var i = t, n = 0;
                _hc(e) && (n = e), t = {x: i, y: n}, e = !0
            }
            return _iw(this, TreeLayouter, "doLayout", [t, e])
        }
    }, _kl(TreeLayouter, Layouter);
    var TreeLayoutBounds = function (t, e, i, n, s, o, r, a) {
        this._m0 = t || 0, this._m2 = e || 0, this.layoutType = i, this.parentChildrenDirection = n, this.parentBounds = s, s && s._gd(this), this.node = o, this._em = r, this._mzt = a
    };
    TreeLayoutBounds.prototype = {
        _mc: function (t, e, i, n) {
            this._m0 = t, this._m2 = e, this.parentChildrenDirection = i, this.layoutType = n
        },
        _8n: function () {
            this._fe = []
        },
        _m0: 0,
        _m2: 0,
        _fe: null,
        _em: 0,
        _mzt: 0,
        layoutType: null,
        parentChildrenDirection: null,
        _gd: function (t) {
            this._fe || (this._fe = []), this._fe.push(t)
        },
        _mzv: function (t, e, i, n) {
            var s = new Rect;
            return i(this._fe, function (i) {
                i._3k(t, e), s.add(i), n ? t += i.width + this._m0 : e += i.height + this._m2
            }, this), s
        },
        _8l: function (t, e, i, n, s) {
            var o, r = n ? this._m0 : this._m2, a = n ? this._m2 : this._m0, h = n ? "width" : "height", l = n ? "height" : "width", _ = n ? "_em" : "_mzt", u = n ? "_mzt" : "_em", d = n ? "hostDX" : "hostDY", c = n ? "hostDY" : "hostDX", f = new Rect, E = 0, g = 0, p = [], v = 0, T = 0;
            i(this._fe, function (i) {
                var s = T >= g;
                i._inheritedParentChildrenDirection = s ? n ? DIRECTION_LEFT : DIRECTION_TOP : n ? DIRECTION_RIGHT : DIRECTION_BOTTOM, i._3k(t, e), s ? (p.push(i), E = Math.max(E, i[h]), g += i[l] + a) : (o || (o = []), o.push(i), v = Math.max(v, i[h]), T += i[l] + a)
            }, this), g -= a, T -= a;
            var m = Math.max(g, T), y = r, S = 0;
            this.node && (s && (y += this[_] + r, m > this[u] ? this[c] = (m - this[u]) / 2 : S = (this[u] - m) / 2), this[d] = E + y / 2 - this[_] / 2);
            var I = 0, P = S;
            return _i1(p, function (t) {
                n ? t.offset(E - t[h], P) : t.offset(P, E - t[h]), P += a + t[l], f.add(t)
            }, this), o ? (P = S, I = E + y, _i1(o, function (t) {
                n ? t.offset(I, P) : t.offset(P, I), P += a + t[l], f.add(t)
            }, this), f) : f
        },
        offset: function (t, e) {
            this.x += t, this.y += e, this.nodeX += t, this.nodeY += e, this._7w(t, e)
        },
        _mxf: function (t, e) {
            return 2 * this.cx - t - e - t
        },
        _mxh: function (t, e) {
            return 2 * this.cy - t - e - t
        },
        _m3: function (t) {
            if (this._fe && 0 != this._fe.length) {
                if (t)return this.node && (this.nodeX += this._mxf(this.nodeX, this._em)), void _i1(this._fe, function (t) {
                    t.offset(this._mxf(t.x, t.width), 0)
                }, this);
                this.node && (this.nodeY += this._mxh(this.nodeY, this._mzt)), _i1(this._fe, function (t) {
                    t.offset(0, this._mxh(t.y, t.height))
                }, this)
            }
        },
        _7w: function (t, e) {
            this._fe && _i1(this._fe, function (i) {
                i.offset(t, e)
            }, this)
        },
        _3k: function (t, e) {
            return this.x = t || 0, this.y = e || 0, this._fe && 0 != this._fe.length ? void this._1m(this.x, this.y, this.layoutType) : void(this.node && (this.width = this._em, this.height = this._mzt, this.nodeX = this.x, this.nodeY = this.y))
        },
        _7u: function (t) {
            this.node && (t[this.node.id] = {
                node: this.node,
                x: this.nodeX + this._em / 2,
                y: this.nodeY + this._mzt / 2,
                left: this.nodeX,
                top: this.nodeY,
                width: this._em,
                height: this._mzt
            }), this._fe && _i1(this._fe, function (e) {
                e._7u(t)
            }, this)
        },
        _g1: function (t, e, i) {
            this._3k(t, e), this._7u(i)
        },
        _1m: function (t, e, i) {
            var n, s = t, o = e;
            !this.parentChildrenDirection && this.parentBounds && (this.parentChildrenDirection = this._inheritedParentChildrenDirection || this.parentBounds.parentChildrenDirection);
            var r = this.parentChildrenDirection, a = isHorizontalDirection(r);
            if (this.node) {
                n = r == DIRECTION_CENTER || r == DIRECTION_MIDDLE;
                var h = isOppositeDirection(r);
                n || (a ? t += this._em + this._m0 : e += this._mzt + this._m2)
            }
            var l, _ = this.node && this.node.layoutReverse ? _7x : _i1;
            if (i == LAYOUT_TYPE_TWO_SIDE)l = this._8l(t, e, _, !a, n); else {
                var u;
                u = i == LAYOUT_TYPE_EVEN ? !a : i == LAYOUT_TYPE_EVEN_HORIZONTAL, l = this._mzv(t, e, _, u, n)
            }
            var d = 0, c = 0;
            l && !l.isEmpty() && (d = l.width, c = l.height, this.add(l)), this.node && (this.nodeX = s, this.nodeY = o, void 0 !== this.hostDX || void 0 !== this.hostDY ? (this.nodeX += this.hostDX || 0, this.nodeY += this.hostDY || 0) : a ? this.nodeY += c / 2 - this._mzt / 2 : this.nodeX += d / 2 - this._em / 2, this.addRect(this.nodeX, this.nodeY, this._em, this._mzt), h && this._m3(a))
        },
        node: null,
        uiBounds: null
    }, _kl(TreeLayoutBounds, Rect), DynamicLayouter.prototype = {
        layoutDatas: null, isMovable: function (t) {
            return !this.currentMovingNodes[t.id]
        }, _72: !1, _3i: function () {
            this._72 = !0, this.graph._1l.addListener(this._9b, this), this.graph._1i.addListener(this._2e, this)
        }, _1z: function () {
            this._72 = !1, this.graph._1l.removeListener(this._9b, this), this.graph._1i.removeListener(this._2e, this)
        }, invalidateFlag: !0, invalidateLayoutDatas: function () {
            this.invalidateFlag = !0
        }, resetLayoutDatas: function () {
            return this.invalidateFlag = !1, this.layoutDatas = prepareLayoutDatas.call(this)
        }, _2e: function (t) {
            InteractionEvent.ELEMENT_MOVE_START == t.kind ? (this.currentMovingNodes = {}, t.datas.forEach(function (t) {
                this.currentMovingNodes[t.id] = t
            }, this)) : InteractionEvent.ELEMENT_MOVE_END == t.kind && (this.currentMovingNodes = {})
        }, _9b: function () {
            this.invalidateLayoutDatas()
        }, isRunning: function () {
            return this.timer && this.timer._f2()
        }, getLayoutResult: function () {
            this.stop(), this.resetLayoutDatas();
            for (var t = this.getMaxIterations(this.layoutDatas.nodeCount || 0, this.layoutDatas.edgeCount || 0), e = 0; t > e && this.step(!1) !== !1; e++);
            var i = this.layoutDatas.nodes;
            return this.onstop(), i
        }, _lv: function () {
            return !1
        }, step: function (t) {
            if (t === !1)return this._lv(this.timeStep);
            (this.invalidateFlag || !this.layoutDatas) && this.resetLayoutDatas();
            var e = this._lv(t), i = this.layoutDatas.nodes;
            for (var n in i) {
                var s = i[n], o = s.node;
                this.isMovable(o) ? o.setLocation(s.x, s.y) : (s.x = o.x, s.y = o.y, s.vx = 0, s.vy = 0)
            }
            return e
        }, onstop: function () {
            delete this.layoutDatas
        }, start: function (t) {
            if (this.isRunning())return !1;
            this._72 || this._3i(), this._j5r || (this._j5r = _7k(this, function (t) {
                return this.step(t)
            })), this.invalidateLayoutDatas(), this.timer = new FrameTimer(this._j5r);
            var e = this;
            return this.timer._lc(function () {
                e.onstop(), t && t()
            }), !0
        }, stop: function () {
            this.timer && (this.timer._lo(), this.onstop())
        }, getMaxIterations: function (t) {
            return Math.min(1e3, 3 * t + 10)
        }, minEnergyFunction: function (t, e) {
            return 10 + Math.pow(t + e, 1.4)
        }, resetGraph: function () {
            this._72 || this._3i(), this.resetLayoutDatas()
        }, destroy: function () {
            this.stop(), this._1z()
        }
    }, _kl(DynamicLayouter, Layouter);
    var BalloonLayouter = function (t, e, i, n) {
        this.graph = t, _hc(e) && (this.radius = e), _hc(i) && (this.gap = i), _hc(n) && (this.startAngle = n)
    };
    Q.BalloonLayouter = BalloonLayouter;
    var ANGLE_SPACING_PROPORTIONAL = "proportional", ANGLE_SPACING_REGULAR = "regular", RADIUS_MODE_UNIFORM = "uniform", RADIUS_MODE_VARIABLE = "variable";
    Consts.ANGLE_SPACING_PROPORTIONAL = ANGLE_SPACING_PROPORTIONAL, Consts.ANGLE_SPACING_REGULAR = ANGLE_SPACING_REGULAR, Consts.RADIUS_MODE_UNIFORM = RADIUS_MODE_UNIFORM, Consts.RADIUS_MODE_VARIABLE = RADIUS_MODE_VARIABLE, BalloonLayouter.prototype = {
        angleSpacing: ANGLE_SPACING_PROPORTIONAL,
        radiusMode: RADIUS_MODE_VARIABLE,
        gap: 4,
        radius: 50,
        startAngle: 0,
        _9w: null,
        _mxd: null,
        _la: function () {
            this._9w = null, this._mxd = null
        },
        getLayoutResult: function (t) {
            var e, i = 0, n = 0, s = this.graph;
            t instanceof Object && (i = t.cx || 0, n = t.cy || 0, s = t.root || this.graph, e = t.bounds), this._9w = {}, this._mxd = new BalloonBounds(this);
            var o = {}, r = forEachByTopoBreadthFirstSearch(s, this._mzr, this);
            return r && (this._mxd._fe && 1 == this._mxd._fe.length && (this._mxd = this._mxd._fe[0]), this._mxd._ev(!0), this._mxd._5i(i, n, this.startAngle, o, e)), this._la(), o
        },
        _mzr: function (t, e) {
            if (this.isLayoutable(t)) {
                var i = e ? this._9w[e.id] : this._mxd;
                this._9w[t.id] = new BalloonBounds(this, t, i)
            }
        },
        defaultSize: 40,
        getRadius: function () {
            return this.radius
        },
        getNodeSize: function (t) {
            if (this.graph._8t._mwq) {
                var e = this.graph.getUI(t);
                if (e)return (e._fi.width + e._fi.height) / 2
            }
            return this.defaultSize
        },
        getGap: function () {
            return this.gap
        },
        _3b: function (t, e, i) {
            return this.getNodeSize(t, e, i) + this.getGap(t, e, i)
        }
    };
    var calulateRadiusProportionalAngleSpacing = function (t) {
        var e, i = this._fe.length, n = 0, s = 0;
        if (_i1(this._fe, function (t) {
                var i = t._ev();
                1 > i && (i = 1), s += i, i > n && (n = i, e = t)
            }, this), i > 1) {
            var o = 0, r = {}, a = s / i / 3;
            s = 0, _i1(this._fe, function (t) {
                var e = t._m7;
                a > e && (e = a), r[t.id] = e, s += e
            }, this);
            var h = PI2 / s;
            _i1(this._fe, function (e, i) {
                var n = r[e.id], s = n * h;
                0 === i && (o = t ? -s / 2 : -s), e._l7 = o + s / 2, e._l9 = s, o += s
            }, this)
        }
        return [n, e._l9]
    }, calulateRadiusRegularAngleSpacing = function (t) {
        var e = this._8j, i = 2 * Math.PI / e, n = 0, s = t ? 0 : e > 1 ? -i / 2 : 0;
        return _i1(this._fe, function (t) {
            t._l7 = s % PI2, s += i, t._l9 = i;
            var e = t._ev();
            e > n && (n = e)
        }, this), [n, i]
    }, BalloonBounds = function (t, e, i) {
        this.layouter = t, e && (this._m8 = e, this.id = e.id), i && (i._gd(this), i._m5 = !1, this._l5 = i._l5 + 1)
    }, PI2 = 2 * Math.PI;
    BalloonBounds.prototype = {
        _l9: 0,
        _l7: 0,
        _ke: 0,
        _et: 0,
        _d5: 0,
        _l5: 0,
        _m5: !0,
        _m7: 0,
        _gp: 0,
        _fe: null,
        _m8: null,
        _gd: function (t) {
            this._fe || (this._fe = []), this._fe.push(t), t.parent = this
        },
        _gq: function (t) {
            if (this._l7 = (this._l7 + t) % PI2, this._fe) {
                var e = this._fe.length;
                if (1 == e)return void this._fe[0]._gq(this._l7);
                t = this._l7 + Math.PI, _i1(this._fe, function (e) {
                    e._gq(t)
                }, this)
            }
        },
        _8j: 0,
        _7c: function (t) {
            if (this._m8 && (this._gp = this.layouter._3b(this._m8, this._l5, this._m5) / 2), !this._fe)return null;
            this._gp;
            return this._8j = this._fe.length, this._8j <= 2 || this.layouter.angleSpacing == ANGLE_SPACING_REGULAR ? calulateRadiusRegularAngleSpacing.call(this, t) : calulateRadiusProportionalAngleSpacing.call(this, t)
        },
        _ev: function (t) {
            var e = this._7c(t);
            if (!e)return this._m7 = this._gp;
            var i = e[0], n = e[1], s = this.layouter.getRadius(this._m8, this._l5);
            if (s < this._gp && (s = this._gp), this._et = s, this._gp + i > s && (s = this._gp + i), i && this._8j > 1 && n < Math.PI) {
                var o = i / Math.sin(n / 2);
                o > s && (s = o)
            }
            return this._ke = s, this._m7 = s + i, this._m8 && this._fe && this.layouter.radiusMode == RADIUS_MODE_VARIABLE && _i1(this._fe, function (t) {
                var e = t._m7;
                1 == t._8j && (e /= 2);
                var i = this._gp + e, n = t._l9;
                if (n && n < Math.PI) {
                    var s = Math.sin(n / 2), o = e / s;
                    o > e && (e = o)
                }
                i > e && (e = i), t._d5 = e
            }, this), (!this._m8 || t) && this._gq(0), this._m7
        },
        _5i: function (t, e, i, n, s) {
            if (this._m8 && (n[this._m8.id] = {
                    x: t,
                    y: e,
                    node: this._m8
                }, s && s.addRect(t - this._gp / 2, e - this._gp / 2, this._gp, this._gp)), this._fe) {
                if (!this._m8 && 1 == this._fe.length)return void this._fe[0]._5i(t, e, i, n, s);
                i = i || 0;
                var o = this._ke, r = this._et;
                _i1(this._fe, function (a) {
                    var h = o;
                    a._d5 && (h = Math.max(r, a._d5));
                    var l = a._l7 + i, _ = t + h * Math.cos(l), u = e + h * Math.sin(l);
                    a._5i(_, u, i, n, s)
                }, this)
            }
        }
    }, _kl(BalloonLayouter, Layouter);
    var BarycentricLayouter = function () {
        _39(this, BarycentricLayouter, arguments)
    };
    _kl(BarycentricLayouter, SpringLayouter);
    var EdgeBundle = function (t, e) {
        this.node1 = t, this.node2 = e, t == e ? (this.isLooped = !0, this._l4 = t._l1) : this._l4 = new HashList, this._8i = [], this._gs = Defaults.EDGE_BUNDLE_EXPANDED
    };
    Defaults.EDGE_BUNDLE_EXPANDED = !0, EdgeBundle.prototype = {
        node1: null,
        node2: null,
        _l4: null,
        _gs: Defaults.EDGE_BUNDLE_EXPANDED,
        _8i: null,
        _gu: null,
        agentEdge: null,
        _mxj: function (t, e, i) {
            this._l4.forEach(function (n) {
                return i && n.$from != i && n.fromAgent != i ? void 0 : t.call(e, n)
            })
        },
        _5e: 0,
        _58: 0,
        _im: function (t, e) {
            return this._l4.add(t) === !1 ? !1 : (e == this.node1 ? this._5e++ : this._58++, this._mwq ? void this._17(t) : void(this._mwq = !0))
        },
        _d8: function (t, e) {
            return this._l4.remove(t) === !1 ? !1 : (e == this.node1 ? this._5e-- : this._58--, this._17(t), void this._l4.forEach(function (t) {
                t._edgeBundleInvalidateFlag = !0, t.__4m = !0
            }, this))
        },
        _17: function (t) {
            this._mzzBindableFlag = !0, this._6f = !0, t._edgeBundleInvalidateFlag = !0, t.__4m = !0
        },
        _mzz: function () {
            this._6f || (this._6f = !0, this._l4.forEach(function (t) {
                t._edgeBundleInvalidateFlag = !0
            }))
        },
        isEmpty: function () {
            return this._l4.isEmpty()
        },
        isPositiveOrder: function (t) {
            return this.node1 == t.$from || this.node1 == t.fromAgent
        },
        canBind: function (t) {
            return t && this._6f && this._fr(t), this._l4.length > 1 && this._8i.length > 1
        },
        _ik: function (t) {
            return this._8i.indexOf(t)
        },
        getYOffset: function (t) {
            return this._gu[t.id]
        },
        _42: function (t) {
            if (!this.canBind())return void(this._gu = {});
            var e = {}, i = this._8i.length;
            if (!(2 > i)) {
                var n = 0, s = this._8i[0];
                e[s.id] = 0;
                for (var o = 1; i > o; o++) {
                    s = this._8i[o];
                    var r = t.getStyle(s, Styles.EDGE_BUNDLE_GAP) || DefaultStyles[Styles.EDGE_BUNDLE_GAP];
                    n += r, e[s.id] = n
                }
                if (!this.isLooped)for (var a = n / 2, o = 0; i > o; o++)s = this._8i[o], e[s.id] -= a;
                this._gu = e
            }
        },
        _mxk: function (t) {
            return this._gs == t ? !1 : (this._gs = t, this._mzz(), !0)
        },
        reverseExpanded: function () {
            return this._mxk(!this._gs)
        },
        _1c: function () {
            this._mzzBindableFlag = !1, this._8i.length = 0;
            var t;
            this._l4.forEach(function (e) {
                if (e.isBundleEnabled()) {
                    if (!this.isPositiveOrder(e))return t || (t = []), void t.push(e);
                    this._8i.push(e)
                }
            }, this), t && (this._8i = t.concat(this._8i))
        },
        _dt: function (t) {
            return t == this.agentEdge || !this.canBind() || this._gs
        },
        _fr: function (t) {
            this._6f = !1, this._l4.forEach(function (t) {
                t._edgeBundleInvalidateFlag = !1
            }), this._mzzBindableFlag && this._1c();
            var e = this._gs, i = this.canBind(), n = !i || e;
            _i1(this._8i, function (t) {
                t._$s = !0, t._i5InBundle = n, n && (t.__4m = !0)
            }, this), n ? this._9t(null, t) : (this._9t(this._8i[0], t), this.agentEdge._i5InBundle = !0, this.agentEdge.__4m = !0), n && this._42(t)
        },
        _9t: function (t, e) {
            if (t != this.agentEdge) {
                var i = this.agentEdge;
                return this.agentEdge = t, e && e._4s(new PropertyChangeEvent(this, "agentEdge", t, i)), !0
            }
        }
    }, _50(EdgeBundle.prototype, {
        bindableEdges: {
            get: function () {
                return this._8i
            }
        }, edges: {
            get: function () {
                return this._l4._jz
            }
        }, length: {
            get: function () {
                return this._l4 ? this._l4.length : 1
            }
        }, expanded: {
            get: function () {
                return this._gs
            }, set: function (t) {
                return this._gs == t ? !1 : (this._gs = t, void this._mzz())
            }
        }
    });
    var nbodyForce = function () {
        function t(t, e) {
            this.node = t, this.body = e
        }

        function e() {
            this.stack = [], this.popIdx = 0
        }

        var i = -1e6, n = .8;
        e.prototype = {
            isEmpty: function () {
                return 0 === this.popIdx
            }, push: function (e, i) {
                var n = this.stack[this.popIdx];
                n ? (n.node = e, n.body = i) : this.stack[this.popIdx] = new t(e, i), ++this.popIdx
            }, pop: function () {
                return this.popIdx > 0 ? this.stack[--this.popIdx] : void 0
            }, reset: function () {
                this.popIdx = 0
            }
        };
        var s = [], o = new e, r = function () {
            this.body = null, this.quads = [], this.mass = 0, this.massX = 0, this.massY = 0, this.left = 0, this.top = 0, this.bottom = 0, this.right = 0, this.isInternal = !1
        }, a = [], h = 0, l = function () {
            var t;
            return a[h] ? (t = a[h], t.quads[0] = null, t.quads[1] = null, t.quads[2] = null, t.quads[3] = null, t.body = null, t.mass = t.massX = t.massY = 0, t.left = t.right = t.top = t.bottom = 0, t.isInternal = !1) : (t = new r, a[h] = t), ++h, t
        }, _ = l(), u = function (t, e) {
            var i = Math.abs(t.x - e.x), n = Math.abs(t.y - e.y);
            return 1e-8 > i && 1e-8 > n
        }, d = function (t) {
            for (o.reset(), o.push(_, t); !o.isEmpty();) {
                var e = o.pop(), i = e.node, n = e.body;
                if (i.isInternal) {
                    var s = n.x, r = n.y;
                    i.mass = i.mass + n.mass, i.massX = i.massX + n.mass * s, i.massY = i.massY + n.mass * r;
                    var a = 0, h = i.left, d = (i.right + h) / 2, c = i.top, f = (i.bottom + c) / 2;
                    if (s > d) {
                        a += 1;
                        var E = h;
                        h = d, d += d - E
                    }
                    if (r > f) {
                        a += 2;
                        var g = c;
                        c = f, f += f - g
                    }
                    var p = i.quads[a];
                    p || (p = l(), p.left = h, p.top = c, p.right = d, p.bottom = f, i.quads[a] = p), o.push(p, n)
                } else if (i.body) {
                    var v = i.body;
                    if (i.body = null, i.isInternal = !0, u(v, n)) {
                        if (i.right - i.left < 1e-8)return;
                        do {
                            var T = Math.random(), m = (i.right - i.left) * T, y = (i.bottom - i.top) * T;
                            v.x = i.left + m, v.y = i.top + y
                        } while (u(v, n))
                    }
                    o.push(i, v), o.push(i, n)
                } else i.body = n
            }
        }, c = function (t) {
            var e, o, r, a, h = s, l = 1, u = 0, d = 1;
            for (h[0] = _; l;) {
                var c = h[u], f = c.body;
                l -= 1, u += 1, f && f !== t ? (o = f.x - t.x, r = f.y - t.y, a = Math.sqrt(o * o + r * r), 0 === a && (o = (Math.random() - .5) / 50, r = (Math.random() - .5) / 50, a = Math.sqrt(o * o + r * r)), e = i * f.mass * t.mass / (a * a), -1e3 > e && (e = -1e3), e /= a, t.fx = t.fx + e * o, t.fy = t.fy + e * r) : (o = c.massX / c.mass - t.x, r = c.massY / c.mass - t.y, a = Math.sqrt(o * o + r * r), 0 === a && (o = (Math.random() - .5) / 50, r = (Math.random() - .5) / 50, a = Math.sqrt(o * o + r * r)), (c.right - c.left) / a < n ? (e = i * c.mass * t.mass / (a * a), -1e3 > e && (e = -1e3), e /= a, t.fx = t.fx + e * o, t.fy = t.fy + e * r) : (c.quads[0] && (h[d] = c.quads[0], l += 1, d += 1), c.quads[1] && (h[d] = c.quads[1], l += 1, d += 1), c.quads[2] && (h[d] = c.quads[2], l += 1, d += 1), c.quads[3] && (h[d] = c.quads[3], l += 1, d += 1)))
            }
        }, f = function (t, e) {
            i = e;
            var n, s = Number.MAX_VALUE, o = Number.MAX_VALUE, r = Number.MIN_VALUE, a = Number.MIN_VALUE, u = t, c = u.length;
            for (n = c; n--;) {
                var f = u[n].x, E = u[n].y;
                s > f && (s = f), f > r && (r = f), o > E && (o = E), E > a && (a = E)
            }
            var g = r - s, p = a - o;
            for (g > p ? a = o + g : r = s + p, h = 0, _ = l(), _.left = s, _.right = r, _.top = o, _.bottom = a, n = c; n--;)d(u[n], _)
        };
        return {init: f, update: c}
    }, applyCenterAttractiveForce = function (t) {
        t.fx -= t.x * this.attractive, t.fy -= t.y * this.attractive
    }, applySpringForce = function (t) {
        if (0 != t.k) {
            var e = this._mzl, i = t.from, n = t.to, s = n.x - i.x, o = n.y - i.y, r = s * s + o * o, a = Math.sqrt(r) || .1, h = (a - e) * t.k * this.elastic;
            h /= a;
            var l = h * s, _ = h * o;
            n.fx -= l, n.fy -= _, i.fx += l, i.fy += _
        }
    };
    SpringLayouter.prototype = {
        appendNodeInfo: function (t, e) {
            e.mass = t.layoutMass || 1, e.fx = 0, e.fy = 0, e.vx = 0, e.vy = 0
        }, appendEdgeInfo: function (t, e) {
            e.k = t.layoutElasticity || 1
        }, setMass: function (t, e) {
            t.layoutMass = e, this.layoutDatas && this.layoutDatas.nodes && (t = this.layoutDatas.nodes[t.id], t && (t.mass = e))
        }, setElasticity: function (t, e) {
            t.layoutElasticity = e, this.layoutDatas && this.layoutDatas.edges && (t = this.layoutDatas.edges[t.id], t && (t.k = e))
        }, _mzl: 50, _i7: .5, timeStep: .15, repulsion: 50, attractive: .1, elastic: 3, _mb: 1e3, _ki: function (t) {
            return this._mb + .3 * (t - this._mb)
        }, _lv: function (t, e) {
            var i = (Date.now(), this.layoutDatas.nodes);
            for (var n in i) {
                var s = i[n];
                e && (s.x += Math.random() - .5, s.y += Math.random() - .5), applyCenterAttractiveForce.call(this, s)
            }
            var o = this.layoutDatas.groups;
            if (o)for (var n in o) {
                var r = o[n], a = r.children, h = 0, l = 0;
                a.forEach(function (t) {
                    h += t.x, l += t.y
                }), h /= a.length, l /= a.length;
                var _ = 10 * this.attractive;
                a.forEach(function (t) {
                    t.fx -= (t.x - h) * _, t.fy -= (t.y - l) * _
                })
            }
            var u = this._nbodyForce;
            u || (u = this._nbodyForce = nbodyForce()), u.init(this.layoutDatas.nodesArray, -this.repulsion * this.repulsion * this.repulsion);
            for (var n in i)u.update(i[n]);
            if (this.elastic) {
                var d = this.layoutDatas.edges;
                for (var n in d)applySpringForce.call(this, d[n])
            }
            return this._m9(t)
        }, _m9: function (t) {
            var e = this.layoutDatas.minEnergy, i = (this.layoutDatas.currentEnergy, this.layoutDatas.nodes), t = this.timeStep, n = 0, s = this._i7;
            for (var o in i) {
                var r = i[o], a = r.fx / r.mass, h = r.fy / r.mass, l = r.vx += a * t, _ = r.vy += h * t;
                r.x += l * t, r.y += _ * t, e > n && (n += 2 * (l * l + _ * _)), r.fx = 0, r.fy = 0, r.vx *= s, r.vy *= s
            }
            return this.layoutDatas.currentEnergy = n, n >= e
        }
    }, _kl(SpringLayouter, DynamicLayouter), Q.SpringLayouter = SpringLayouter;
    var NodeTranslation = function (t) {
        this.locations = t
    };
    NodeTranslation.prototype = {
        oldLocations: null,
        _f3: null,
        duration: 700,
        animationType: Easing.easeOutStrong,
        _71: function (t) {
            if (this._f3 = t, this.oldLocations = {}, t)for (var e in t) {
                var i = t[e], n = i.node;
                this.oldLocations[e] = {x: n.x, y: n.y}
            }
        },
        setLocation: function (t, e, i) {
            t.setLocation(e, i)
        },
        forEach: function (t, e) {
            for (var i in this.locations) {
                var n = this.oldLocations[i], s = this.locations[i];
                t.call(e, n, s)
            }
        },
        _kg: function (t) {
            this.forEach(function (e, i) {
                var n = i.node, s = e.x + (i.x - e.x) * t, o = e.y + (i.y - e.y) * t;
                this.setLocation(n, s, o)
            }, this)
        },
        stop: function () {
            this._mwnimate && this._mwnimate._lo()
        },
        start: function (t) {
            this._mwnimate ? (this._mwnimate._lo(), this._mwnimate._j2 = this.duration, this._mwnimate._ejType = this.animationType, this._mwnimate._onfinish = this._onfinish) : this._mwnimate = new FrameAnimation(this._kg, this, this.duration, this.animationType), this._mwnimate._lc(t)
        }
    }, _50(NodeTranslation.prototype, {
        locations: {
            get: function () {
                return this._f3
            }, set: function (t) {
                this._f3 != t && this._71(t)
            }
        }
    });
    var findRootNodes = function (t) {
        var e = new HashList;
        return t.forEach(function (t) {
            t instanceof Node && (t.hasInEdge() || e.add(t._dz || t))
        }), e
    }, forEachByTopoSearch = function (t, e, i, n, s, o) {
        if (e instanceof Data)return t(e, i, n, s, o), e;
        if (e instanceof Graph) {
            var r = new HashList;
            e._kzModel.forEach(function (t) {
                return e.isVisible(t) ? t._i9() && t._gs && t.hasChildren() ? void(t.$location && (t.$location.invalidateFlag = !1)) : void r.add(t) : void 0
            }), e = r
        }
        var e = findRootNodes(e);
        return _i1(e, function (e) {
            t(e, i, n, s, o)
        }), e
    }, forEachByTopoDepthFirstSearch = function (t, e, i, n, s) {
        return forEachByTopoSearch(depthFirstSearch, t, e, i, n, s)
    }, forEachByTopoBreadthFirstSearch = function (t, e, i, n, s) {
        return forEachByTopoSearch(breadthFirstSearch, t, e, i, n, s)
    };
    GraphModel.prototype.forEachByTopoDepthFirstSearch = function (t, e, i, n) {
        forEachByTopoDepthFirstSearch(this, t, e, i, n)
    }, GraphModel.prototype.forEachByTopoBreadthFirstSearch = function (t, e, i, n) {
        forEachByTopoBreadthFirstSearch(this, t, e, i, n)
    };
    var depthFirstSearch = function (t, e, i, n, s) {
        function o(t, e, i, n, s, r, a, h) {
            t._marker = r, n || e.call(i, t, h, a), forEachLinkedNode(t, function (h) {
                o(h, e, i, n, s, r, a + 1, t)
            }, h, s, r), n && e.call(i, t, h, a)
        }

        o(t, e, i, n, s, {}, 0)
    }, breadthFirstSearch = function (t, e, i, n, s) {
        function o(t, e, i, n, s, r, a) {
            var h, l = t.length;
            t.forEach(function (t, o) {
                var _ = t.v;
                _._marker = r, n || e.call(i, _, t._from, a, o, l), forEachLinkedNode(_, function (t) {
                    h || (h = []), t._marker = r, h.push({v: t, _from: _})
                }, _, s, r)
            }), h && o(h, e, i, n, s, r, a + 1), n && t.forEach(function (t, n) {
                e.call(i, t.v, t._from, a, n, l)
            })
        }

        o([{v: t}], e, i, n, s, {}, 0)
    };
    Q.toColor = _hs, Q.log = _ml, Q.error = _kw, Q.trace = _kx, Q.isIE = isIE, Q.isOpera = isOpera, Q.isWebkit = isWebkit, Q.isGecko = isGecko, Q.isFirefox = isFirefox, Q.isSafari = isSafari, Q.isChrome = isChrome, Q.isMac = isMac, Q.DefaultStyles = DefaultStyles, Q.Defaults = Defaults, Q.Styles = Styles, Q.Consts = Consts, Q.Graphs = Graphs, Q.Graph = Graph, Q.BaseUI = BaseUI, Q.ElementUI = ElementUI, Q.NodeUI = NodeUI, Q.EdgeUI = EdgeUI, Q.LabelUI = LabelUI, Q.ImageUI = ImageUI, Q.Shapes = Shapes, Q.Path = Path, Q.Gradient = Gradient, Q.InteractionEvent = InteractionEvent, Q.Element = Element, Q.Node = Node, Q.Edge = Edge, Q.GraphModel = GraphModel, Q.EdgeBundle = EdgeBundle, Q.TreeLayouter = TreeLayouter, Q.name = "Qunee for HTML5";
    var VERSION2 = "2.0";
    Q.version = "2.5 beta1", Q.about = "Qunee - Diagramming Components for HTML5/Canvas", Q.copyright = "Copyright © 2015 Qunee.com", Q.css = css_mzss;
    var Qunee = Q;
    Q.IDrawable = IDrawable, _ml = function () {
    }, Q.publishDate = "2/2/2016";
    return Q;
})(window, document);
