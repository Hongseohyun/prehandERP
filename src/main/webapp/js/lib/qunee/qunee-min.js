window.Q = function (t, i, e) {
    "use strict";

    function n(t, i, e) {
        if (t.hasChildren()) {
            var r = t._fe || t.getChildren();
            if (r) {
                r = r._jz || r;
                for (var s = 0, o = r.length; o > s; s++)
                    if (i.call(e, r[s]) === !1 || n(r[s], i, e) === !1)
                        return !1;
                return !0
            }
        }
    }

    function r(t) {
        if (!t.hasChildren())
            return t instanceof Kh ? t : null;
        for (var i, e = t._fe._jz, n = e.length - 1; n >= 0;) {
            if (i = e[n], i = r(i))
                return i;
            n--
        }
        return null
    }

    function s(t, i, e, n) {
        return n ? o(t, i, e) : h(t, i, e)
    }

    function o(t, i, e) {
        t = t._jz || t;
        for (var n, r = 0, s = t.length; s > r; r++)
            if (n = t[r], n.hasChildren() && !o(n.children, i, e) || i.call(e, n) === !1)
                return !1;
        return !0
    }

    function h(t, i, e) {
        t = t._jz || t;
        for (var n, r = 0, s = t.length; s > r; r++)
            if (n = t[r], i.call(e, n) === !1 || n.hasChildren() && !h(n.children, i, e))
                return !1;
        return !0
    }

    function a(t, i, e, n) {
        return n ? l(t, i, e) : _(t, i, e)
    }

    function l(t, i, e) {
        t = t._jz || t;
        for (var n, r = t.length, s = r - 1; s >= 0; s--)
            if (n = t[s], n.hasChildren() && !l(n.children, i, e) || i.call(e, n) === !1)
                return !1;
        return !0
    }

    function _(t, i, e) {
        t = t._jz || t;
        for (var n, r = t.length, s = r - 1; s >= 0; s--)
            if (n = t[s], i.call(e, n) === !1 || n.hasChildren() && !_(n.children, i, e))
                return !1;
        return !0
    }

    function u(t, i, e) {
        for (var n, r = (t._jz || t).slice(0); r.length;) {
            n = r[0],
                r = r.splice(1);
            var s = i.call(e, n);
            if (s === !1)
                return !1;
            if (n.hasChildren()) {
                var o = n.children;
                o = o._jz || o,
                    r = r.concat(o)
            }
        }
        return !0
    }

    function d(t, i, e) {
        for (var n, r = (t._jz || t).slice(0); r.length;) {
            n = r[r.length - 1],
                r = r.splice(0, r.length - 1);
            var s = i.call(e, n);
            if (s === !1)
                return !1;
            if (n.hasChildren()) {
                var o = n.children;
                o = o._jz || o,
                    r = r.concat(o)
            }
        }
        return !0
    }

    function f(t, i) {
        function e(t, e) {
            for (var n = t.length, r = e.length, s = n + r, o = new Array(s), h = 0, a = 0, l = 0; s > l;)
                o[l++] = h === n ? e[a++] : a === r || i(t[h], e[a]) <= 0 ? t[h++] : e[a++];
            return o
        }

        function n(t) {
            var i = t.length,
                r = Math.ceil(i / 2);
            return 1 >= i ? t : e(n(t.slice(0, r)), n(t.slice(r)))
        }

        return n(t)
    }

    function c(t, i, e, n) {
        t instanceof Xs && (t = t._jz);
        for (var r = 0, s = (t._jz || t).length; s > r; r++) {
            var o = i.call(e, t[r], r, n);
            if (o === !1)
                return !1
        }
        return !0
    }

    function v(t, i, e) {
        for (var n = t instanceof Xs, r = t._jz || t, s = 0, o = r.length; o > s; s++) {
            var h = r[s];
            i.call(e, h) && (n ? t.remove(h) : t.splice(s, 1), s--, o--)
        }
    }

    function g(t, i, e, n) {
        t instanceof Xs && (t = t._jz);
        for (var r = (t._jz || t).length - 1; r >= 0; r--) {
            var s = i.call(e, t[r], r, n);
            if (s === !1)
                return !1
        }
        return !0
    }

    function E(t) {
        if (t.clone instanceof Function)
            return t.clone(!0);
        var i,
            e = [];
        return c(t, function (t) {
            i = t && t.clone instanceof Function ? t.clone() : t,
                e.push(i)
        }, this),
            e
    }

    function m(t, i, n) {
        n === e || 0 > n ? t.push(i) : t.splice(n, 0, i)
    }

    function p(t, i) {
        var e = t.indexOf(i);
        return 0 > e || e >= t.length ? !1 : t.splice(e, 1)
    }

    function y(t, i) {
        var e = !1;
        return c(t, function (t) {
            return i == t ? (e = !0, !1) : void 0
        }),
            e
    }

    function T(t, i, e) {
        return i instanceof Object ? t = j(i, t) : i && !e && (e = parseInt(i)),
        i && !e && (e = parseInt(i)),
            e ? setTimeout(t, e) : setTimeout(t)
    }

    function w(i, e) {
        return e && (i = j(e, i)),
            t.requestAnimationFrame(i)
    }

    function O(t, i) {
        return t.className = i,
            t
    }

    function A(t, i) {
        if (!t.hasOwnProperty("classList")) {
            var e = t.getAttribute("class");
            if (!e)
                return O(t, i);
            for (var n = e.split(" "), r = 0, s = n.length; s > r; r++)
                if (n[r] == i)
                    return;
            return e += " " + i,
                O(t, e)
        }
        t.classList.add(i)
    }

    function x(t, i) {
        if (!t.hasOwnProperty("classList")) {
            var e = t.getAttribute("class");
            if (!e || !e.indexOf(i))
                return;
            for (var n = "", r = e.split(" "), s = 0, o = r.length; o > s; s++)
                r[s] != i && (n += r[s] + " ");
            return O(t, n)
        }
        t.classList.remove(i)
    }

    function L(t) {
        return t instanceof Number || "number" == typeof t
    }

    function b(t) {
        return t !== e && (t instanceof String || "string" == typeof t)
    }

    function S(t) {
        return t !== e && (t instanceof Boolean || "boolean" == typeof t)
    }

    function I(t) {
        return Array.isArray(t)
    }

    function R(i) {
        i || (i = t.event),
            i.preventDefault ? i.preventDefault() : i.returnValue = !1
    }

    function C(i) {
        i || (i = t.event),
            i.stopPropagation ? i.stopPropagation() : i.cancelBubble || (i.cancelBubble = !0)
    }

    function D(t) {
        R(t),
            C(t)
    }

    function P(t) {
        return Math.floor(Math.random() * t)
    }

    function N() {
        return Math.random() >= .5
    }

    function z(t, i) {
        var e = t;
        for (var n in i)
            if (i.__lookupGetter__) {
                var r = i.__lookupGetter__(n),
                    s = i.__lookupSetter__(n);
                r || s ? (r && e.__defineGetter__(n, r), s && e.__defineSetter__(n, s)) : e[n] = i[n]
            } else
                e[n] = i[n];
        return e
    }

    function k(t, i, e) {
        if (!(t instanceof Function))
            throw new Error("subclass must be type of Function");
        var n = null;
        "object" == typeof i && (n = i, i = t, t = function () {
            i.apply(this, arguments)
        });
        var r = t.prototype,
            s = function () {
            };
        return s.prototype = i.prototype,
            t.prototype = new s,
            t.superclass = i.prototype,
            t.superclass.constructor = i,
            z(t.prototype, r),
        n && z(t.prototype, n),
        e && z(t.prototype, e),
            t.prototype.class = t,
            t
    }

    function M(t, i, e) {
        return B(t, i, "constructor", e)
    }

    function B(t, i, e, n) {
        var r = i.superclass;
        if (r) {
            var s = r[e];
            return s ? s.apply(t, n) : void 0
        }
    }

    function G(t) {
        return t.toFixed(4)
    }

    function $(t) {
        delete t.scope,
            delete t.handle
    }

    function F(t, i) {
        t[i] && ($(t[i]), delete t[i])
    }

    function j(t, i) {
        var e = function () {
            return e.handle.apply(e.scope, arguments)
        };
        return e.handle = i,
            e.scope = t,
            e
    }

    function Y(t, i) {
        return t == i
    }

    function H(t, i, n, r, s) {
        if (r)
            return void Object.defineProperty(t, i, {
                value: n,
                enumerable: !0
            });
        var o = {
                configurable: !0,
                enumerable: !0
            },
            h = "$" + i;
        n !== e && (t[h] = n),
            o.get = function () {
                return this[h]
            },
            o.set = function (t) {
                var e = this[h];
                if (Y(e, t))
                    return !1;
                var n = new co(this, i, t, e);
                return this.beforeEvent(n) ? (this[h] = t, s && s.call(this, t, e), this.onEvent(n), !0) : !1
            },
            Object.defineProperty(t, i, o)
    }

    function U(t, i) {
        for (var e = 0, n = i.length; n > e; e++) {
            var r = i[e];
            H(t, r.name || r, r.defaultValue || r.value, r.readOnly, r.onSetting)
        }
    }

    function W(t) {
        if (t && t > 0 && 1 > t) {
            var i = Math.floor(16777215 * Math.random());
            return "rgba(" + (i >> 16 & 255) + "," + (i >> 8 & 255) + "," + (255 & i) + "," + t.toFixed(2) + ")"
        }
        return V(Math.floor(16777215 * Math.random()))
    }

    function q(t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t)
    }

    function X(t) {
        return t > 0 ? Math.ceil(t) : Math.floor(t)
    }

    function V(t) {
        return 16777216 > t ? "#" + ("000000" + t.toString(16)).slice(-6) : "rgba(" + (t >> 16 & 255) + "," + (t >> 8 & 255) + "," + (255 & t) + "," + ((t >> 24 & 255) / 255).toFixed(2) + ")"
    }

    function K(t, i, e) {
        "object" != typeof e || e.hasOwnProperty("enumerable") || (e.enumerable = !0),
            Object.defineProperty(t, i, e)
    }

    function Z(t, i) {
        for (var e in i)
            if ("_" != e[0]) {
                var n = i[e];
                "object" != typeof n || n.hasOwnProperty("enumerable") || (n.enumerable = !0)
            }
        Object.defineProperties(t, i)
    }

    function J(i, e) {
        e || (e = t);
        for (var n = i.split("."), r = 0, s = n.length; s > r; r++) {
            var o = n[r];
            e = e[o]
        }
        return e
    }

    function Q(t) {
        return t instanceof MouseEvent || t instanceof Object && t.touches !== e
    }

    function ti(i) {
        t.console && console.log(i)
    }

    function ii(i) {
        t.console && console.trace(i)
    }

    function ei(i) {
        t.console && console.error(i)
    }

    function ni(t, i, e) {
        var n,
            r,
            s;
        0 == t._mw ? (n = -1, s = 0, r = i) : 0 == t._mz ? (n = 0, s = 1, r = e) : (n = -1 / t._mw, r = (t._mw - n) * i + t._mx, s = 1);
        var o = new Qs;
        return o._mw = n,
            o._mx = r,
            o._mz = s,
            o._mv = i,
            o._mt = e,
            o._l7 = Math.atan2(n, s),
            o._mzos = Math.cos(o._l7),
            o._sin = Math.sin(o._l7),
            o
    }

    function ri(t, i, e, n, r) {
        var s,
            o;
        i > n ? s = -1 : n > i && (s = 1),
            e > r ? o = -1 : r > e && (o = 1);
        var h,
            a;
        if (!s)
            return a = 0 > o ? t.y : t.bottom, {
                x: i,
                y: a
            };
        if (!o)
            return h = 0 > s ? t.x : t.right, {
                x: h,
                y: e
            };
        var l = (e - r) / (i - n),
            _ = e - l * i,
            u = 0 > s ? i - t.x : i - t.right,
            d = 0 > o ? e - t.y : e - t.bottom;
        return Math.abs(l) >= Math.abs(d / u) ? (a = 0 > o ? t.y : t.bottom, h = (a - _) / l) : (h = 0 > s ? t.x : t.right, a = l * h + _), {
            x: h,
            y: a
        }
    }

    function si(t, i, e, n, r, s, o, h) {
        return 0 >= o || 0 >= h || 0 >= e || 0 >= n ? !1 : (o += r, h += s, e += t, n += i, (r > o || o > t) && (s > h || h > i) && (t > e || e > r) && (i > n || n > s))
    }

    function oi(t, i, e, n, r, s) {
        return r >= t && t + e >= r && s >= i && i + n >= s
    }

    function hi(t, i, e, n, r, s, o, h) {
        return r >= t && s >= i && t + e >= r + o && i + n >= s + h
    }

    function ai(t, i, n) {
        if (!t)
            return {
                x: 0,
                y: 0
            };
        if (t.x !== e)
            return {
                x: t.x,
                y: t.y
            };
        var r,
            s,
            o = t.horizontalPosition,
            h = t.verticalPosition;
        switch (o) {
            case ro:
                r = 0;
                break;
            case oo:
                r = i;
                break;
            default:
                r = i / 2
        }
        switch (h) {
            case ho:
                s = 0;
                break;
            case lo:
                s = n;
                break;
            default:
                s = n / 2
        }
        return {
            x: r,
            y: s
        }
    }

    function li(t, i, e) {
        t.children.add(i, e),
            t.onChildAdd(i, e)
    }

    function _i(t, i) {
        t._fe && (t._fe.remove(i), t.onChildRemove(i))
    }

    function ui(t) {
        return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (t, i) {
            return i.toUpperCase()
        })
    }

    function di(t) {
        return t.replace(/[A-Z]/g, function (t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function fi(t, i) {
        var e = t.style;
        if (!e)
            return !1;
        var n,
            r;
        for (n in i)
            i.hasOwnProperty(n) && (r = Co(n)) && (e[r] = i[n]);
        return t
    }

    function ci(t) {
        var i,
            e,
            n = "";
        for (i in t)
            t.hasOwnProperty(i) && (e = Co(i)) && (n += di(e) + ":" + t[i] + ";");
        return n ? n.substring(0, n.length - 1) : n
    }

    function vi(t, i, e) {
        (i = Co(i)) && (t.style[i] = e)
    }

    function gi(t, i) {
        return Io ? (i && !b(i) && (i = ci(i)), Io.insertRule ? void Io.insertRule(t + "{" + i + "}", 0) : void (Io.addRule && Io.addRule(t, i, 0))) : !1
    }

    function Ei(i, e) {
        i.touches && (i = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i.touches[0]);
        var n = e.getBoundingClientRect(),
            r = i.clientX || 0,
            s = i.clientY || 0;
        return Fs && ks && (t.pageXOffset && r == i.pageX && (r -= t.pageXOffset), t.pageYOffset && s == i.pageY && (s -= t.pageYOffset)), {
            x: r - n.left,
            y: s - n.top
        }
    }

    function mi(t, i) {
        return this["$" + i] = Po(t, i, function (t) {
            return Oi.call(this, t, i)
        }, !1, this)
    }

    function pi(t) {
        var i = this;
        return t.getData = function () {
            return i._kz.getElementByMouseEvent(t)
        },
            t.getUI = function () {
                return i._kz.getUIByMouseEvent(t)
            },
            t
    }

    function yi(t) {
        this.__mzancelClick || (this.__mzlickEvent = t, this.__mzlickTime ? this.__mzlickTime++ : (this.__mzlickTime = 1, setTimeout(j(this, function () {
            if (this.__mzlickEvent) {
                var t = this.__mzlickTime;
                this.__mzlickTime = 0,
                    1 == t ? this._ih(this.__mzlickEvent, "onclick") : t > 1 && this._ih(this.__mzlickEvent, "ondblclick"),
                    this.__mzlickEvent = null
            }
        }), Ws.DOUBLE_CLICK_INTERVAL_TIME)))
    }

    function Ti(t) {
        if (t.touches) {
            for (var i = t.touches, e = [], n = 0, r = i.length; r > n; n++) {
                var s = i[n];
                e.push({
                    pageX: s.pageX,
                    pageY: s.pageY,
                    clientX: s.clientX,
                    clientY: s.clientY
                })
            }
            return {
                timeStamp: t.timeStamp,
                touches: e,
                scale: t.scale
            }
        }
        return {
            timeStamp: t.timeStamp,
            x: t.clientX,
            y: t.clientY
        }
    }

    function wi(t, i) {
        switch (i) {
            case "touchstart":
                if (t.touches.length >= 2)
                    return this._90 = Ti(t), this._mzh.clear(), this._1s(), void (this._mzj || (this._mzj = t, this._90 = Ti(t)));
            case "mousedown":
                if (D(t), 2 == t.button)
                    return;
                if (this._ih(t, "onstart"), this._mzj = t, this._90 = Ti(t), t.button || (this.__onLongPressFunction ? this.__longPressTimer && this._1s() : this.__onLongPressFunction = j(this, function () {
                    this.__longPressTimer = null,
                    this._mzj && (this.__mzancelClick = !0, this._ih(this._mzj, "onlongpress"))
                }), this.__longPressTimer = setTimeout(this.__onLongPressFunction, Ws.LONG_PRESS_INTERVAL), this.__mzancelClick = !1), Fs)
                    return;
                return void (Mo._mzurrentInteractionSupport = this);
            case "touchend":
                if (!this._mzj)
                    return void (this._moving = null);
                if (t.touches.length)
                    return void (this._90 = Ti(t));
                t.timeStamp - this._mzj.timeStamp < 200 && yi.call(this, this._mzj);
            case "touchcancel":
                if (!this._mzj)
                    return void (this._moving = null);
                this._moving && (this._moving = null, this._ii(t));
            case "mouseup":
                return void this._e3(t);
            case "click":
                return void yi.call(this, t);
            case "mousewheel":
            case "DOMMouseScroll":
                return t.delta = t.wheelDelta || -t.detail,
                    this._ih(t, "onmousewheel");
            case "touchmove":
                var e = t.touches.length;
                return this._moving || (this._moving = !0, 1 == e && this._ea()),
                    void this._kd(t)
        }
    }

    function Oi(t, i) {
        return t = pi.call(this, t),
            wi.call(this, t, i),
            "click" != i && "dblclick" != i ? this._ih(t, "on" + i) : void 0
    }

    function Ai(t, i) {
        var e = "$" + i;
        No(t, i, this[e]),
            F(this, e)
    }

    function xi(i) {
        c(zo, function (t) {
            mi.call(this, i, t)
        }, this),
        Fs || Mo._mwq || (Mo._mwq = !0, Po(t, "mousemove", function (t) {
            if (Mo._mzurrentInteractionSupport) {
                D(t);
                var i = Mo._mzurrentInteractionSupport;
                if (!Mo._dragging) {
                    if (i._mzj) {
                        var e = i._mzj.screenX - t.screenX,
                            n = i._mzj.screenY - t.screenY;
                        if (4 > e * e + n * n)
                            return
                    }
                    Mo._dragging = !0,
                        i._ea()
                }
                i._kd(t)
            }
        }, !0), Po(t, "mouseup", function (t) {
            var i = Mo._mzurrentInteractionSupport;
            delete Mo._mzurrentInteractionSupport,
            Mo._dragging && (delete Mo._dragging, R(t), t = pi.call(i, t), i._ii(t), i._e3(t))
        }, !0))
    }

    function Li(t) {
        c(zo, function (i) {
            Ai.call(this, t, i)
        }, this),
            this._mxl()
    }

    function bi(t, i, e) {
        this._lt = t,
            this._mzh = new Ii,
            xi.call(this, t),
        i && (this._listener = i),
            this._l2 = e
    }

    function Si(t) {
        return Ms && t.metaKey || !Ms && t.ctrlKey
    }

    function Ii() {
        this.points = []
    }

    function Ri(t, i, e, n, r) {
        Di(t, function (n) {
            if (i) {
                var r = n.responseXML;
                if (!r)
                    return void (e || Ko)("'" + t + "' XML format error.");
                i(r)
            }
        }, e, n, r)
    }

    function Ci(t, i, e, n, r) {
        Di(t, function (n) {
            if (i) {
                var r,
                    s = n.responseText;
                if (!s)
                    return (e || Ko)("'" + t + "' JSON format error."), r = new Error("'" + t + "' JSON format error."), i(s, r);
                try {
                    s = JSON.parse(s)
                } catch (o) {
                    (e || Ko)(o),
                        r = o
                }
                i(s, r)
            }
        }, e, n, r)
    }

    function Di(t, i, e, n, r) {
        (e === !1 || n === !1) && (r = !1);
        try {
            var s = new XMLHttpRequest,
                o = encodeURI(t);
            if (r !== !1) {
                var h;
                h = o.indexOf("?") > 0 ? "&" : "?",
                    o += h + "__time=" + Date.now()
            }
            s.open("GET", o),
                s.onreadystatechange = function () {
                    return 4 == s.readyState ? s.status && 200 != s.status ? void (e || Ko)("'" + t + "' load error") : void (i && i(s)) : void 0
                },
                s.send(n)
        } catch (a) {
            (e || Ko)("'" + t + "' load error", a)
        }
    }

    function si(t, i, e, n, r, s, o, h) {
        return 0 >= o || 0 >= h || 0 >= e || 0 >= n ? !1 : (o += r, h += s, e += t, n += i, (r > o || o > t) && (s > h || h > i) && (t > e || e > r) && (i > n || n > s))
    }

    function hi(t, i, e, n, r, s, o, h) {
        return r >= t && s >= i && t + e >= r + o && i + n >= s + h
    }

    function Pi(t, i, e) {
        return t instanceof Object && t.x ? zi(t, i, 0, 0) : Ni(t, i, e, 0, 0)
    }

    function Ni(t, i, e, n, r) {
        var s = Math.sin(e),
            o = Math.cos(e),
            h = t - n,
            a = i - r;
        return t = h * o - a * s + n,
            i = h * s + a * o + r,
            new Zs(t, i, e)
    }

    function zi(t, i, e, n) {
        e = e || 0,
            n = n || 0;
        var r = Math.sin(i),
            s = Math.cos(i),
            o = t.x - e,
            h = t.y - n;
        return t.x = o * s - h * r + e,
            t.y = o * r + h * s + n,
            t
    }

    function ki(t, i, e) {
        return Mi(t, i, e, 0, 0)
    }

    function Mi(t, i, e, n, r) {
        var s = Ni(t.x, t.y, i, n, r),
            o = Pi(t.x + t.width, t.y, i, n, r),
            h = Pi(t.x + t.width, t.y + t.height, i, n, r),
            a = Pi(t.x, t.y + t.height, i, n, r);
        return e ? e.clear() : e = new io,
            e.addPoint(s),
            e.addPoint(o),
            e.addPoint(h),
            e.addPoint(a),
            e
    }

    function Bi(t, i) {
        var e = this.ratio || 1;
        this.style.width = t + "px",
            this.style.height = i + "px",
            this.width = t * e,
            this.height = i * e
    }

    function Gi() {
        this.canvas.width = this.canvas.width
    }

    function $i(t) {
        var i = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
        return Qo / i
    }

    function Fi(t, e, n) {
        var r = i.createElement("canvas");
        if (r.g = r.getContext("2d"), t !== !0 && !n)
            return t && e && (r.width = t, r.height = e), r;
        var s = r.g;
        return s.ratio = r.ratio = $i(s),
            r.setSize = Bi,
            s._la = Gi,
        t && e && r.setSize(t, e),
            r
    }

    function ji(t, i, n) {
        if (t === e || null === t)
            return {
                width: 0,
                height: 0
            };
        var r = Yi();
        n = n || Ws.FONT,
        r.font != n && (r.font = n);
        for (var s = i * Ws.LINE_HEIGHT, o = 0, h = 0, a = t.split("\n"), l = 0, _ = a.length; _ > l; l++) {
            var u = a[l];
            o = Math.max(r.measureText(u).width, o),
                h += s
        }
        return {
            width: o,
            height: h
        }
    }

    function Yi(t, i) {
        return th || (th = Fi()),
        t && i && (th.width = t, th.height = i),
            th.g
    }

    function Hi(t) {
        return Math.log(t + Math.sqrt(t * t + 1))
    }

    function Ui(t, i) {
        i = i || t(1);
        var e = 1 / i,
            n = .5 * e,
            r = Math.min(1, i / 100);
        return function (s) {
            if (0 >= s)
                return 0;
            if (s >= i)
                return 1;
            for (var o = s * e, h = 0; h++ < 10;) {
                var a = t(o),
                    l = s - a;
                if (Math.abs(l) <= r)
                    return o;
                o += l * n
            }
            return o
        }
    }

    function Wi(t, i, e) {
        var n = 1 - t,
            r = n * n * i[0] + 2 * n * t * i[2] + t * t * i[4],
            s = n * n * i[1] + 2 * n * t * i[3] + t * t * i[5];
        if (e) {
            var o = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0],
                h = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
            return {
                x: r,
                y: s,
                rotate: Math.atan2(h, o)
            }
        }
        return {
            t: t,
            x: r,
            y: s
        }
    }

    function qi(t, i, e) {
        var n = t - 2 * i + e;
        return 0 != n ? (t - i) / n : -1
    }

    function Xi(t, i) {
        i.add(t[4], t[5]);
        var e = qi(t[0], t[2], t[4]);
        if (e > 0 && 1 > e) {
            var n = Wi(e, t);
            i.add(n.x, n.y)
        }
        var r = qi(t[1], t[3], t[5]);
        if (r > 0 && 1 > r) {
            var n = Wi(r, t);
            i.add(n.x, n.y)
        }
        return i
    }

    function Vi(t) {
        if (t[0] == t[2] && t[1] == t[3] || t[1] == t[3] && t[1] == t[5]) {
            var i = t[0],
                e = t[1],
                n = t[4],
                r = t[5],
                s = Math.sqrt(ih(i, e, n, r));
            return function (t) {
                return s * t
            }
        }
        var o = t[0],
            h = t[2],
            a = t[4],
            l = o - 2 * h + a,
            _ = 2 * h - 2 * o;
        o = t[1],
            h = t[3],
            a = t[5];
        var u = o - 2 * h + a,
            d = 2 * h - 2 * o,
            f = 4 * (l * l + u * u),
            c = 4 * (l * _ + u * d),
            v = _ * _ + d * d,
            s = 4 * f * v - c * c,
            g = 1 / s,
            E = .125 * Math.pow(f, -1.5),
            m = 2 * Math.sqrt(f),
            p = (s * Hi(c / Math.sqrt(s)) + 2 * Math.sqrt(f) * c * Math.sqrt(v)) * E;
        return function (t) {
            var i = c + 2 * t * f,
                e = i / Math.sqrt(s),
                n = i * i * g;
            return (s * Math.log(e + Math.sqrt(n + 1)) + m * i * Math.sqrt(v + t * c + t * t * f)) * E - p
        }
    }

    function Ki(t, i, e) {
        var n = 1 - t,
            r = i[0],
            s = i[2],
            o = i[4],
            h = i[6],
            a = r * n * n * n + 3 * s * t * n * n + 3 * o * t * t * n + h * t * t * t;
        if (e)
            var l = 3 * t * t * h + (6 * t - 9 * t * t) * o + (9 * t * t - 12 * t + 3) * s + (-3 * t * t + 6 * t - 3) * r;
        r = i[1],
            s = i[3],
            o = i[5],
            h = i[7];
        var _ = r * n * n * n + 3 * s * t * n * n + 3 * o * t * t * n + h * t * t * t;
        if (e) {
            var u = 3 * t * t * h + (6 * t - 9 * t * t) * o + (9 * t * t - 12 * t + 3) * s + (-3 * t * t + 6 * t - 3) * r;
            return {
                x: a,
                y: _,
                rotate: Math.atan2(u, l)
            }
        }
        return {
            x: a,
            y: _
        }
    }

    function Zi(t, i, e, n) {
        var r = -t + 3 * i - 3 * e + n;
        if (0 == r)
            return [(t - i) / (2 * e - 4 * i + 2 * t)];
        var s = 2 * t - 4 * i + 2 * e,
            o = i - t,
            h = s * s - 4 * r * o;
        return 0 > h ? void 0 : 0 == h ? [-s / (2 * r)] : (h = Math.sqrt(h), [(h - s) / (2 * r), (-h - s) / (2 * r)])
    }

    function Ji(t, i) {
        i.add(t[6], t[7]);
        var e = Zi(t[0], t[2], t[4], t[6]);
        if (e)
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if (!(0 >= r || r >= 1)) {
                    var s = Ki(r, t);
                    i.add(s.x, s.y)
                }
            }
        if (e = Zi(t[1], t[3], t[5], t[7]))
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if (!(0 >= r || r >= 1)) {
                    var s = Ki(r, t);
                    i.add(s.x, s.y)
                }
            }
    }

    function Qi(t) {
        var i = {
                x: t[0],
                y: t[1]
            },
            e = {
                x: t[2],
                y: t[3]
            },
            n = {
                x: t[4],
                y: t[5]
            },
            r = {
                x: t[6],
                y: t[7]
            },
            s = i.x - 0,
            o = i.y - 0,
            h = e.x - 0,
            a = e.y - 0,
            l = n.x - 0,
            _ = n.y - 0,
            u = r.x - 0,
            d = r.y - 0,
            f = 3 * (-s + 3 * h - 3 * l + u),
            c = 6 * (s - 2 * h + l),
            v = 3 * (-s + h),
            g = 3 * (-o + 3 * a - 3 * _ + d),
            E = 6 * (o - 2 * a + _),
            m = 3 * (-o + a),
            p = function (t) {
                var i = f * t * t + c * t + v,
                    e = g * t * t + E * t + m;
                return Math.sqrt(i * i + e * e)
            },
            y = (p(0) + 4 * p(.5) + p(1)) / 6;
        return y
    }

    function te(t, i) {
        function e(t, i, e, n) {
            var r = -t + 3 * i - 3 * e + n,
                s = 2 * t - 4 * i + 2 * e,
                o = i - t;
            return function (t) {
                return 3 * (r * t * t + s * t + o)
            }
        }

        function n(t, i) {
            var e = r(t),
                n = s(t);
            return Math.sqrt(e * e + n * n) * i
        }

        var r = e(t[0], t[2], t[4], t[6]),
            s = e(t[1], t[3], t[5], t[7]);
        i = i || 100;
        var o = 1 / i;
        return function (t) {
            if (!t)
                return 0;
            for (var i, e = 0, r = 0; ;) {
                if (i = e + o, i >= t)
                    return r += n(e, i - e);
                r += n(e, o),
                    e = i
            }
        }
    }

    function ie(t, i, e) {
        return ih(i, e, t.cx, t.cy) <= t._squareR + eh
    }

    function ee(t, i, e, n) {
        return e = e || ne(t, i),
            new re((t.x + i.x) / 2, (t.y + i.y) / 2, e / 2, t, i, null, n)
    }

    function ne(t, i) {
        return Js(t.x, t.y, i.x, i.y)
    }

    function re(t, i, e, n, r, s, o) {
        this.cx = t,
            this.cy = i,
            this.r = e,
            this._squareR = e * e,
            this.p1 = n,
            this.p2 = r,
            this.p3 = s,
            this._otherPoint = o
    }

    function se(t, i, e, n) {
        this.cx = t,
            this.cy = i,
            this.width = e,
            this.height = n
    }

    function oe(t) {
        var i = t[0],
            e = t[1],
            n = t[2],
            r = re._mzreateCircle(i, e, n);
        return ae(t, i, e, n, r)
    }

    function he(t, i) {
        i = i || le(t);
        for (var e, n = i.width / i.height, r = [], s = t.length, o = 0; s > o; o++)
            e = t[o], r.push({
                x: e.x,
                y: e.y * n
            });
        var h = oe(r);
        return h ? new se(h.cx, h.cy / n, 2 * h.r, 2 * h.r / n) : void 0
    }

    function ae(t, i, e, n, r) {
        for (var s, o, h = t.length, a = r._squareR, l = 0; h > l; l++)
            if (s = t[l], s != i && s != e && s != n) {
                var _ = ih(r.cx, r.cy, s.x, s.y);
                _ - eh > a && (a = _, o = s)
            }
        if (!o)
            return r;
        var u,
            d = re._mzreateCircle(o, i, e),
            f = re._mzreateCircle(o, i, n),
            c = re._mzreateCircle(o, n, e);
        return ie(d, n.x, n.y) && (u = d),
        ie(f, e.x, e.y) && (!u || u.r > f.r) && (u = f),
        ie(c, i.x, i.y) && (!u || u.r > c.r) && (u = c),
            i = u.p1,
            e = u.p2,
            n = u.p3 || u._otherPoint,
            ae(t, i, e, n, u)
    }

    function le(t) {
        for (var i, e = t.length, n = new io, r = 0; e > r; r++)
            i = t[r], n.add(i.x, i.y);
        return n
    }

    function _e(t, i, e, n, r) {
        this._6f && this.validate();
        var s = r ? this.getBounds(r) : this.bounds,
            o = e / s.width,
            h = t - o * s.x,
            a = n / s.height,
            l = i - a * s.y,
            _ = this._fg,
            u = [];
        return c(_, function (t) {
            var i = t.clone(),
                e = i.points;
            if (e && e.length) {
                for (var n = e.length, r = [], s = 0; n > s; s++) {
                    var _ = e[s];
                    s++;
                    var d = e[s];
                    _ = o * _ + h,
                        d = a * d + l,
                        r.push(_),
                        r.push(d)
                }
                i.points = r
            }
            u.push(i)
        }, this),
            new Ph(u)
    }

    function ue(t, i, e, n, r, s) {
        if (r = r || 0, e = e || 0, !r && !s)
            return !1;
        if (!n) {
            var o = this.getBounds(r);
            if (!o.intersectsPoint(t, i, e))
                return !1
        }
        var h = Math.round(2 * e) || 1,
            a = Yi(h, h),
            l = (a.canvas, -t + e),
            _ = -i + e;
        if (a.setTransform(1, 0, 0, 1, l, _), !a.isPointInStroke) {
            this._ln(a),
            r && a.stroke(),
            s && a.fill();
            for (var u = a.getImageData(0, 0, h, h).data, d = u.length / 4; d > 0;) {
                if (u[4 * d - 1] > Dh)
                    return !0;
                --d
            }
            return !1
        }
        return a.lineWidth = (r || 0) + 2 * e,
            this._ln(a),
            r && a.isPointInStroke(e, e) ? !0 : s ? a.isPointInPath(e, e) : !1
    }

    function de(t, i, e) {
        if (!this._j7)
            return null;
        var n = this._fg;
        if (n.length < 2)
            return null;
        e === !1 && (t += this._j7);
        var r = n[0];
        if (0 >= t)
            return br(r.points[0], r.points[1], n[1].points[0], n[1].points[1], t, i);
        if (t >= this._j7) {
            r = n[n.length - 1];
            var s,
                o,
                h = r.points,
                a = h.length,
                l = h[a - 2],
                _ = h[a - 1];
            if (a >= 4)
                s = h[a - 4], o = h[a - 3];
            else {
                r = n[n.length - 2];
                var u = r.lastPoint;
                s = u.x,
                    o = u.y
            }
            return br(l, _, l + l - s, _ + _ - o, t - this._j7, i)
        }
        for (var d, f = 0, c = 1, a = n.length; a > c; c++)
            if (d = n[c], d._j7) {
                if (!(f + d._j7 < t)) {
                    var v,
                        u = r.lastPoint;
                    if (d.type == Ih) {
                        var g = d.points;
                        v = fe(t - f, d, u.x, u.y, g[0], g[1], g[2], g[3], d._r)
                    } else {
                        if (!d._lf)
                            return br(u.x, u.y, d.points[0], d.points[1], t - f, i);
                        var E = Ui(d._lf, d._j7)(t - f),
                            g = d.points;
                        v = d.type == Sh && 6 == g.length ? Ki(E, [u.x, u.y].concat(g), !0) : Wi(E, [u.x, u.y].concat(g), !0)
                    }
                    return i && (v.x -= i * Math.sin(v.rotate || 0), v.y += i * Math.cos(v.rotate || 0)),
                        v
                }
                f += d._j7,
                    r = d
            } else
                r = d
    }

    function fe(t, i, e, n, r, s, o, h) {
        if (t <= i._l1)
            return br(e, n, r, s, t);
        if (t >= i._j7)
            return t -= i._j7, br(i._p2x, i._p2y, o, h, t);
        if (t -= i._l1, i._o) {
            var a = t / i._r;
            i._CCW && (a = -a);
            var l = Ni(i._p1x, i._p1y, a, i._o.x, i._o.y);
            return l.rotate += i._mw1 || 0,
                l.rotate += Math.PI,
                l
        }
        return br(i._p1x, i._p1y, i._p2x, i._p2y, t)
    }

    function ni(t, i, e) {
        var n,
            r,
            s;
        0 == t._mw ? (n = -1, s = 0, r = i) : 0 == t._mz ? (n = 0, s = 1, r = e) : (n = -1 / t._mw, r = (t._mw - n) * i + t._mx, s = 1);
        var o = new Qs;
        return o._mw = n,
            o._mx = r,
            o._mz = s,
            o._mv = i,
            o._mt = e,
            o
    }

    function ce(t) {
        return t %= 2 * Math.PI,
        0 > t && (t += 2 * Math.PI),
            t
    }

    function ve(t, i, e, n, r, s, o, h) {
        var a = Js(i, e, n, r),
            l = Js(n, r, s, o);
        if (!a || !l)
            return t._d = 0, t._r = 0, t._l1 = a, t._l2 = l, t._j7 = 0;
        var _ = Ee(n, r, i, e),
            u = Ee(n, r, s, o);
        t._mw1 = _,
            t._mw2 = u;
        var d = _ - u;
        d = ce(d),
        d > Math.PI && (d = 2 * Math.PI - d, t._CCW = !0);
        var f = Math.PI - d,
            c = Math.tan(d / 2),
            v = h / c,
            g = Math.min(a, l);
        v > g && (v = g, h = c * v);
        var E,
            m = n + Math.cos(_) * v,
            p = r + Math.sin(_) * v,
            y = n + Math.cos(u) * v,
            T = r + Math.sin(u) * v,
            w = new Qs(i, e, n, r),
            O = new Qs(n, r, s, o),
            A = ni(w, m, p),
            x = ni(O, y, T),
            L = A._3u(x),
            b = Math.atan2(p - L.y, m - L.x),
            S = Math.atan2(T - L.y, y - L.x);
        E = t._CCW ? S : b;
        for (var I, R = 0; 4 > R;) {
            var C = R * Vs;
            if (ce(C - E) <= f) {
                var D,
                    P;
                if (I ? I++ : I = 1, 0 == R ? (D = L.x + h, P = L.y) : 1 == R ? (D = L.x, P = L.y + h) : 2 == R ? (D = L.x - h, P = L.y) : (D = L.x, P = L.y - h), t["_mxoundaryPoint" + I] = {
                    x: D,
                    y: P
                }, 2 == I)
                    break
            }
            R++
        }
        return t._p1x = m,
            t._p1y = p,
            t._p2x = y,
            t._p2y = T,
            t._o = L,
            t._d = v,
            t._r = h,
            t._l1 = a - v,
            t._l2 = l - v,
            t._j7 = t._l1 + f * h
    }

    function ge(t, i, e, n, r, s, o) {
        var h = Ee(e, n, t, i),
            a = Ee(e, n, r, s),
            l = h - a;
        return o ? l : (0 > l && (l = -l), l > Math.PI && (l -= Math.PI), l)
    }

    function Ee(t, i, e, n) {
        return Math.atan2(n - i, e - t)
    }

    function me(t) {
        var i = rh.exec(t);
        if (i)
            return i[1];
        var e = t.lastIndexOf(".");
        return e >= 0 && e < t.length - 1 ? t.substring(e + 1) : void 0
    }

    function pe(t) {
        if (!t)
            return null;
        if (t instanceof Ph)
            return uh;
        if (t.draw instanceof Function)
            return _h;
        if (b(t)) {
            var i = me(t);
            if (i) {
                if (!Is && sh.test(i))
                    return lh;
                if (oh.test(i))
                    return ah
            }
            return hh
        }
    }

    function ye(t, i, e) {
        if (this._lm = pe(t), !this._lm)
            throw new Error("the image format is not supported", t);
        this._lq = t,
            this._mwd = i,
            this._mw0 = e,
            this.width = i || Ws.IMAGE_WIDTH,
            this.height = e || Ws.IMAGE_HEIGHT,
            this._jj = {}
    }

    function Te(t, i, e, n) {
        return i ? (vh[t] = new ye(i, e, n), t) : void delete vh[t]
    }

    function we(t) {
        if (t._ld)
            return t._ld;
        var i = b(t);
        if (!i && !t.name)
            return t._ld = new ye(t);
        var e = t.name || t;
        return e in vh ? vh[e] : vh[e] = new ye(t)
    }

    function Oe(t) {
        return t in vh
    }

    function Ae(t, i, e) {
        e = e || {};
        var n = t.getBounds(e.lineWidth);
        if (!n.width || !n.height)
            return !1;
        var r = i.getContext("2d"),
            s = i.ratio || 1,
            o = e.scaleMode || "full.uniform",
            h = /full/i.test(o),
            a = /uniform/i.test(o),
            l = 1,
            _ = 1;
        if (h) {
            var u = i.width,
                d = i.height,
                f = e.padding,
                c = 0,
                v = 0;
            if (f) {
                var g,
                    E,
                    m,
                    p;
                L(f) ? g = E = m = p = f : (g = f.top || 0, E = f.bottom || 0, m = f.left || 0, p = f.right || 0),
                    u -= m + p,
                    d -= g + E,
                    c += m,
                    v += g
            }
            l = u / n.width,
                _ = d / n.height,
            a && (l > _ ? (c += (u - _ * n.width) / 2, l = _) : _ > l && (v += (d - l * n.height) / 2, _ = l)),
            (c || v) && r.translate(c, v)
        }
        r.translate(-n.x * l, -n.y * _),
            t.draw(r, s, e, l, _, !0)
    }

    function xe(t, i, e) {
        var n = we(t);
        return n ? (n.validate(), (n._lm == lh || n._6p()) && n._mwi(function (t) {
            t.source && (this.width = this.width, Ae(t.source, this, e))
        }, i), void Ae(n, i, e)) : (Zo.error("draw image error - " + t), !1)
    }

    function Le(t, i, n, r) {
        var s = t.length;
        if (s && !(0 > s)) {
            r = r || 1;
            for (var o, h, a, l = [], _ = 0; _++ < s;)
                if (o = t.getLocation(_, 0), o && Js(i, n, o.x, o.y) <= r) {
                    h = _,
                        a = o.rotate;
                    break
                }
            if (h !== e) {
                for (var o, u, d, f = 0, _ = 0, c = t._fg.length; c > _; _++) {
                    if (o = t._fg[_], !u && (f += o._j7 || 0, f > h)) {
                        u = !0;
                        var v = Math.max(10, o._j7 / 6),
                            g = v * Math.sin(a),
                            E = v * Math.cos(a);
                        if (o.type == Sh) {
                            var m = o.points[0],
                                p = o.points[1];
                            if (d) {
                                var y = new Qs(i, n, i + E, n + g),
                                    T = y._3u(new Qs(d.lastPoint.x, d.lastPoint.y, o.points[0], o.points[1]));
                                T.x !== e && (m = T.x, p = T.y)
                            }
                            l.push(new Ch(Sh, [m, p, i - E, n - g, i, n]))
                        } else
                            l.push(new Ch(bh, [i - E, n - g, i, n]));
                        if (o.points)
                            if (o.type == Sh) {
                                o.points[0] = i + E,
                                    o.points[1] = n + g;
                                var y = new Qs(i, n, i + E, n + g),
                                    T = y._3u(new Qs(o.points[2], o.points[3], o.points[4], o.points[5]));
                                T.x !== e && (o.points[2] = T.x, o.points[3] = T.y)
                            } else if (o.type == bh) {
                                o.type = Sh,
                                    o.points = [i + E, n + g].concat(o.points);
                                var y = new Qs(i, n, i + E, n + g),
                                    T = y._3u(new Qs(o.points[2], o.points[3], o.points[4], o.points[5]));
                                T.x !== e && (o.points[2] = T.x, o.points[3] = T.y)
                            } else
                                o.type == Lh && (o.type = bh, o.points = [i + E, n + g].concat(o.points), _ == c - 1 && (o.invalidTerminal = !0))
                    }
                    l.push(o),
                        d = o
                }
                return l
            }
        }
    }

    function be(t) {
        var i = t.width,
            e = t.height;
        try {
            var n = t.g.getImageData(0, 0, i, e);
            return Ie(n.data, i, e)
        } catch (r) {
            Zo.error(r)
        }
    }

    function Se(t, i, e) {
        this._19(t, i, e)
    }

    function Ie(t, i, e) {
        return new Se(t, i, e)
    }

    function Re(t) {
        if ("#" == t[0]) {
            if (t = t.substring(1), 3 == t.length)
                t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
            else if (6 != t.length)
                return;
            return t = parseInt(t, 16),
                [t >> 16 & 255, t >> 8 & 255, 255 & t]
        }
        if (/^rgb/i.test(t)) {
            var i = t.indexOf("("),
                e = t.indexOf(")");
            if (0 > i || i > e)
                return;
            if (t = t.substring(i + 1, e), t = t.split(","), t.length < 3)
                return;
            var n = parseInt(t[0]),
                r = parseInt(t[1]),
                s = parseInt(t[2]),
                o = 3 == t.length ? 255 : parseInt(t[3]);
            return [n, r, s, o]
        }
    }

    function Ce(t, i, e) {
        return e || (e = Ws.BLEND_MODE),
            e == Jo.BLEND_MODE_MULTIPLY ? t * i : e == Jo.BLEND_MODE_DARKEN ? Math.min(t, i) : e == Jo.BLEND_MODE_COLOR_BURN ? 1 - (1 - i) / t : e == Jo.BLEND_MODE_LINEAR_BURN ? t + i - 1 : e == Jo.BLEND_MODE_LIGHTEN ? Math.max(t, i) : e == Jo.BLEND_MODE_SCREEN ? t + i - t * i : i
    }

    function De(t, i, e) {
        var n = Re(i);
        if (!n)
            return void Zo.error("color error, [" + i + "]");
        var r = t.g.getImageData(0, 0, t.width, t.height),
            s = r.data;
        if (e instanceof Function)
            s = e(t, s, n) || s;
        else {
            var o = n[0] / 255,
                h = n[1] / 255,
                a = n[2] / 255;
            if (e == Jo.BLEND_MODE_GRAY)
                for (var l = 0, _ = s.length; _ > l; l += 4) {
                    var u = 77 * s[l] + 151 * s[l + 1] + 28 * s[l + 2] >> 8;
                    s[l] = u * o | 0,
                        s[l + 1] = u * h | 0,
                        s[l + 2] = u * a | 0
                }
            else
                for (var l = 0, _ = s.length; _ > l; l += 4)
                    s[l] = 255 * Ce(o, s[l] / 255, e) | 0, s[l + 1] = 255 * Ce(h, s[l + 1] / 255, e) | 0, s[l + 2] = 255 * Ce(a, s[l + 2] / 255, e) | 0
        }
        var t = Fi(t.width, t.height);
        return t.g.putImageData(r, 0, 0),
            t
    }

    function Pe(t, i, e, n) {
        return 1 > e && (e = 1),
            Ne(t - e, i - e, 2 * e, 2 * e, n)
    }

    function Ne(t, i, e, n, r) {
        e = Math.round(e) || 1,
            n = Math.round(n) || 1;
        var s = Yi(e, n);
        s.setTransform(1, 0, 0, 1, -t, -i),
            r.draw(s);
        for (var o = s.getImageData(0, 0, e, n).data, h = o.length / 4; h-- > 0;)
            if (o[4 * h - 1] > Dh)
                return !0;
        return !1
    }

    function ze(t, i, e, n, r, s) {
        t -= r.$x,
            i -= r.$y;
        var o = r._fi.intersection(t, i, e, n);
        if (!o)
            return !1;
        t = o.x * s,
            i = o.y * s,
            e = o.width * s,
            n = o.height * s,
            e = Math.round(e) || 1,
            n = Math.round(n) || 1;
        var h = Yi(),
            a = h.canvas;
        a.width < e || a.height < n ? (a.width = e, a.height = n) : (h.setTransform(1, 0, 0, 1, 0, 0), h.clearRect(0, 0, e, n)),
            h.setTransform(1, 0, 0, 1, -t - r.$x * s, -i - r.$y * s),
            h.scale(s, s),
            r._jm(h, 1);
        for (var l = h.getImageData(0, 0, e, n).data, _ = l.length / 4; _-- > 0;)
            if (l[4 * _ - 1] > Dh)
                return !0;
        return !1
    }

    function ke(t, i, e, n, r, s, o, h, a) {
        if (oi(t, i, e, n, h, a))
            return null;
        var l,
            _,
            u,
            d = new Ch(Lh, [t + e - r, i]),
            f = new Ch(bh, [t + e, i, t + e, i + s]),
            c = new Ch(Lh, [t + e, i + n - s]),
            v = new Ch(bh, [t + e, i + n, t + e - r, i + n]),
            g = new Ch(Lh, [t + r, i + n]),
            E = new Ch(bh, [t, i + n, t, i + n - s]),
            m = new Ch(Lh, [t, i + s]),
            p = new Ch(bh, [t, i, t + r, i]),
            y = (new Ch(Rh), [d, f, c, v, g, E, m, p]),
            T = new io(t + r, i + s, e - r - r, n - s - s);
        t > h ? (l = ro, u = 5) : h > t + e ? (l = oo, u = 1) : (l = so, u = 0),
            i > a ? (_ = ho, l == ro && (u = 7)) : a > i + n ? (_ = lo, l == oo ? u = 3 : l == so && (u = 4)) : (_ = ao, l == ro ? u = 6 : l == oo && (u = 2));
        var w = je(u, t, i, e, n, r, s, o, h, a, T),
            O = w[0],
            A = w[1],
            x = new Ph,
            L = x._fg;
        L.push(new Ch(xh, [O.x, O.y])),
            L.push(new Ch(Lh, [h, a])),
            L.push(new Ch(Lh, [A.x, A.y])),
        A._lu && (L.push(A._lu), A._luNO++);
        for (var b = A._luNO % 8, S = O._luNO; ;)
            if (L.push(y[b]), ++b, b %= 8, b == S)
                break;
        return O._lu && L.push(O._lu),
            x.closePath(),
            x
    }

    function Me(t, i, n, r, s, o, h, a, l, _, u, d, f, c) {
        var v = new Qs(d, f, n, r),
            g = new Qs(i[0], i[1], i[4], i[5]),
            E = g._3u(v, u),
            m = E[0],
            p = E[1];
        if (m._rest !== e) {
            m._luNO = (t - 1) % 8,
                p._luNO = (t + 1) % 8;
            var y = m._rest;
            7 == t ? (m.y = o + _ + Math.min(c.height, y), p.x = s + l + Math.min(c.width, y)) : 5 == t ? (m.x = s + l + Math.min(c.width, y), p.y = o + a - _ - Math.min(c.height, y)) : 3 == t ? (m.y = o + a - _ - Math.min(c.height, y), p.x = s + h - l - Math.min(c.width, y)) : 1 == t && (m.x = s + h - l - Math.min(c.width, y), p.y = o + _ + Math.min(c.height, y))
        } else {
            v._mc(v._mv, v._mt, m.x, m.y),
                m = v._$h(i),
                v._mc(v._mv, v._mt, p.x, p.y),
                p = v._$h(i);
            var T = Ye(i, [m, p]),
                w = T[0],
                O = T[2];
            m._luNO = t,
                p._luNO = t,
                m._lu = new Ch(bh, w.slice(2)),
                p._lu = new Ch(bh, O.slice(2))
        }
        return [m, p]
    }

    function Be(t, i, e, n, r, s, o, h, a, l) {
        var _,
            u;
        if (a - h >= i + s)
            _ = {
                y: e,
                x: a - h
            },
                _._luNO = 0;
        else {
            _ = {
                y: e + o,
                x: Math.max(i, a - h)
            };
            var d = [i, e + o, i, e, i + s, e],
                f = new Qs(a, l, _.x, _.y);
            if (_ = f._$h(d)) {
                I(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var c = Ye(d, [_]);
                c = c[0],
                c && (_._lu = new Ch(bh, c.slice(2))),
                    _._luNO = 7
            } else
                _ = {
                    y: e,
                    x: i + s
                },
                    _._luNO = 0
        }
        if (i + n - s >= a + h)
            u = {
                y: e,
                x: a + h
            },
                u._luNO = 0;
        else {
            u = {
                y: e + o,
                x: Math.min(i + n, a + h)
            };
            var v = [i + n - s, e, i + n, e, i + n, e + o],
                f = new Qs(a, l, u.x, u.y);
            if (u = f._$h(v)) {
                I(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var c = Ye(v, [u]);
                c && c[c.length - 1] && (u._lu = new Ch(bh, c[c.length - 1].slice(2))),
                    u._luNO = 1
            } else
                u = {
                    y: e,
                    x: i + n - s
                },
                    u._luNO = 0
        }
        return [_, u]
    }

    function Ge(t, i, e, n, r, s, o, h, a, l) {
        var _,
            u;
        if (l - h >= e + o)
            _ = {
                x: i + n,
                y: l - h
            },
                _._luNO = 2;
        else {
            _ = {
                x: i + n - s,
                y: Math.max(e, l - h)
            };
            var d = [i + n - s, e, i + n, e, i + n, e + o],
                f = new Qs(a, l, _.x, _.y);
            if (_ = f._$h(d)) {
                I(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var c = Ye(d, [_]);
                c = c[0],
                c && (_._lu = new Ch(bh, c.slice(2))),
                    _._luNO = 1
            } else
                _ = {
                    x: i + n,
                    y: e + o
                },
                    _._luNO = 2
        }
        if (e + r - o >= l + h)
            u = {
                x: i + n,
                y: l + h
            },
                u._luNO = 2;
        else {
            u = {
                x: i + n - s,
                y: Math.min(e + r, l + h)
            };
            var v = [i + n, e + r - o, i + n, e + r, i + n - s, e + r],
                f = new Qs(a, l, u.x, u.y);
            if (u = f._$h(v)) {
                I(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var c = Ye(v, [u]);
                c[1] && (u._lu = new Ch(bh, c[1].slice(2))),
                    u._luNO = 3
            } else
                u = {
                    x: i + n,
                    y: e + r - o
                },
                    u._luNO = 2
        }
        return [_, u]
    }

    function $e(t, i, e, n, r, s, o, h, a, l) {
        var _,
            u;
        if (a - h >= i + s)
            u = {
                y: e + r,
                x: a - h
            },
                u._luNO = 4;
        else {
            u = {
                y: e + r - o,
                x: Math.max(i, a - h)
            };
            var d = [i + s, e + r, i, e + r, i, e + r - o],
                f = new Qs(a, l, u.x, u.y);
            if (u = f._$h(d)) {
                I(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var c = Ye(d, [u]);
                c = c[c.length - 1],
                c && (u._lu = new Ch(bh, c.slice(2))),
                    u._luNO = 5
            } else
                u = {
                    y: e + r,
                    x: i + s
                },
                    u._luNO = 4
        }
        if (i + n - s >= a + h)
            _ = {
                y: e + r,
                x: a + h
            },
                _._luNO = 4;
        else {
            _ = {
                y: e + r - o,
                x: Math.min(i + n, a + h)
            };
            var v = [i + n, e + r - o, i + n, e + r, i + n - s, e + r],
                f = new Qs(a, l, _.x, _.y);
            if (_ = f._$h(v)) {
                I(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var c = Ye(v, [_]);
                c[0] && (_._lu = new Ch(bh, c[0].slice(2))),
                    _._luNO = 3
            } else
                _ = {
                    y: e + r,
                    x: i + n - s
                },
                    _._luNO = 4
        }
        return [_, u]
    }

    function Fe(t, i, e, n, r, s, o, h, a, l) {
        var _,
            u;
        if (l - h >= e + o)
            u = {
                x: i,
                y: l - h
            },
                u._luNO = 6;
        else {
            u = {
                x: i + s,
                y: Math.max(e, l - h)
            };
            var d = [i, e + o, i, e, i + s, e],
                f = new Qs(a, l, u.x, u.y);
            if (u = f._$h(d)) {
                I(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var c = Ye(d, [u]);
                c = c[c.length - 1],
                c && (u._lu = new Ch(bh, c.slice(2)))
            } else
                u = {
                    x: i,
                    y: e + o
                };
            u._luNO = 7
        }
        if (e + r - o >= l + h)
            _ = {
                x: i,
                y: l + h
            },
                _._luNO = 6;
        else {
            _ = {
                x: i + s,
                y: Math.min(e + r, l + h)
            };
            var v = [i + s, e + r, i, e + r, i, e + r - o],
                f = new Qs(a, l, _.x, _.y);
            if (_ = f._$h(v)) {
                I(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var c = Ye(v, [_]);
                c[0] && (_._lu = new Ch(bh, c[0].slice(2))),
                    _._luNO = 5
            } else
                _ = {
                    x: i,
                    y: e + r - o
                },
                    _._luNO = 6
        }
        return [_, u]
    }

    function je(t, i, e, n, r, s, o, h, a, l, _) {
        var u = h / 2;
        switch (t) {
            case 7:
                var d = [i, e + o, i, e, i + s, e],
                    f = i + s,
                    c = e + o;
                return Me(t, d, f, c, i, e, n, r, s, o, h, a, l, _);
            case 5:
                return d = [i + s, e + r, i, e + r, i, e + r - o],
                    f = i + s,
                    c = e + r - o,
                    Me(t, d, f, c, i, e, n, r, s, o, h, a, l, _);
            case 3:
                return d = [i + n, e + r - o, i + n, e + r, i + n - s, e + r],
                    f = i + n - s,
                    c = e + r - o,
                    Me(t, d, f, c, i, e, n, r, s, o, h, a, l, _);
            case 1:
                return d = [i + n - s, e, i + n, e, i + n, e + o],
                    f = i + n - s,
                    c = e + o,
                    Me(t, d, f, c, i, e, n, r, s, o, h, a, l, _);
            case 0:
                return Be(t, i, e, n, r, s, o, u, a, l, _);
            case 2:
                return Ge(t, i, e, n, r, s, o, u, a, l, _);
            case 4:
                return $e(t, i, e, n, r, s, o, u, a, l, _);
            case 6:
                return Fe(t, i, e, n, r, s, o, u, a, l, _)
        }
    }

    function Ye(t, i) {
        for (var n, r, s, o, h, a, l = t[0], _ = t[1], u = t[2], d = t[3], f = t[4], c = t[5], v = [], g = 0; g < i.length; g++)
            h = i[g], a = h.t, 0 != a && 1 != a ? (n = l + (u - l) * a, r = _ + (d - _) * a, s = u + (f - u) * a, o = d + (c - d) * a, v.push([l, _, n, r, h.x, h.y]), l = h.x, _ = h.y, u = s, d = o) : v.push(null);
        return s !== e && v.push([h.x, h.y, s, o, f, c]),
            v
    }

    function He(t) {
        return this.$layoutByAnchorPoint && this._mxc && (t.x -= this._mxc.x, t.y -= this._mxc.y),
        this.$rotate && zi(t, this.$rotate),
            t.x += this.$offsetX || 0,
            t.y += this.$offsetY || 0,
            this.$rotatable && this.$_hostRotate ? zi(t, this.$_hostRotate) : t
    }

    function Ue(t) {
        return this.$rotatable && this.$_hostRotate && zi(t, -this.$_hostRotate),
            t.x -= this.$offsetX || 0,
            t.y -= this.$offsetY || 0,
        this.$rotate && zi(t, -this.$rotate),
        this.$layoutByAnchorPoint && this._mxc && (t.x += this._mxc.x, t.y += this._mxc.y),
            t
    }

    function We() {
        var t = this.$invalidateSize;
        this.$invalidateSize && (this.$invalidateSize = !1, this.$invalidateAnchorPoint = !0, this._87.setByRect(this._je), this.$padding && this._87.grow(this.$padding), this.$border && this._87.grow(this.$border));
        var i = this._$t();
        if (i)
            var e = this.showPointer && this.$pointerWidth;
        return this.$invalidateAnchorPoint && this.$layoutByAnchorPoint && (this.$invalidateAnchorPoint = !1, e && (t = !0), this._mxc = ai(this.$anchorPosition, this._87.width, this._87.height), this._mxc.x += this._87.x, this._mxc.y += this._87.y),
            i ? (t && (this._mxackgroundGradientInvalidateFlag = !0, qe.call(this, e)), this._mxackgroundGradientInvalidateFlag && (this._mxackgroundGradientInvalidateFlag = !1, this._mxackgroundGradient = this.backgroundGradient && this._lrShape && this._lrShape.bounds ? gh.prototype.generatorGradient.call(this.backgroundGradient, this._lrShape.bounds) : null), t) : (this.__lyPointer = !1, t)
    }

    function qe(t) {
        var i = this._87.x + this.$border / 2,
            e = this._87.y + this.$border / 2,
            n = this._87.width - this.$border,
            r = this._87.height - this.$border,
            s = 0,
            o = 0;
        if (this.$borderRadius && (L(this.$borderRadius) ? s = o = this.$borderRadius : (s = this.$borderRadius.x || 0, o = this.$borderRadius.y || 0), s = Math.min(s, n / 2), o = Math.min(o, r / 2)), t && (this._pointerX = this._mxc.x - this.$offsetX + this.$pointerX, this._pointerY = this._mxc.y - this.$offsetY + this.$pointerY, !this._87.intersectsPoint(this._pointerX, this._pointerY))) {
            var h = new zh(i, e, n, r, s, o, this.$pointerWidth, this._pointerX, this._pointerY);
            return this._lrShape = h._lu,
                this._lrShape.bounds.set(i, e, n, r),
                void (this.__lyPointer = !0)
        }
        this._lrShape && this._lrShape.clear(),
            this._lrShape = Jh.getRect(i, e, n, r, s, o, this._lrShape),
            this._lrShape.bounds.set(i, e, n, r)
    }

    function Xe(t, i, e, n) {
        return n && (t.width < 0 || t.height < 0) ? (t.x = i, t.y = e, void (t.width = t.height = 0)) : (i < t.x ? (t.width += t.x - i, t.x = i) : i > t.x + t.width && (t.width = i - t.x), void (e < t.y ? (t.height += t.y - e, t.y = e) : e > t.y + t.height && (t.height = e - t.y)))
    }

    function Ve(t, i, n) {
        var r,
            s = t.position,
            o = t.layoutByPath === e ? this.layoutByPath : t.layoutByPath;
        return this.$data instanceof Ph && o ? (r = nh._mxa(s, this.$data, this.lineWidth, i, n), r.x *= this._jf, r.y *= this._jh) : (r = ai(s, this._87.width, this._87.height), r.x += this._87.x, r.y += this._87.y),
            He.call(this, r)
    }

    function Ke(t, i) {
        if (i)
            if (i._87.isEmpty())
                t.$x = i.$x, t.$y = i.$y;
            else {
                var e = Ve.call(i, t);
                t.$x = e.x,
                    t.$y = e.y,
                    t._hostRotate = e.rotate
            }
        else
            t.$x = 0, t.$y = 0;
        t.$invalidateRotate && Bh.call(t)
    }

    function Ze(t) {
        if (t.lineDash === e) {
            var i,
                n;
            if (t.setLineDash)
                i = t.getLineDash, n = t.setLineDash;
            else {
                var r;
                if (t.mozDash !== e)
                    r = "mozDash";
                else {
                    if (t.webkitLineDash === e)
                        return !1;
                    r = "webkitLineDash"
                }
                n = function (t) {
                    this[r] = t
                },
                    i = function () {
                        return this[r]
                    }
            }
            K(t, "lineDash", {
                get: function () {
                    return i.call(this)
                },
                set: function (t) {
                    n.call(this, t)
                }
            })
        }
        if (t.lineDashOffset === e) {
            var s;
            if (t.mozDashOffset !== e)
                s = "mozDashOffset";
            else {
                if (t.webkitLineDashOffset === e)
                    return;
                s = "webkitLineDashOffset"
            }
            K(t, "lineDashOffset", {
                get: function () {
                    return this[s]
                },
                set: function (t) {
                    this[s] = t
                }
            })
        }
    }

    function Je(t, i, e, n, r) {
        var s,
            o,
            h,
            a,
            l,
            _,
            u,
            d,
            f = function (t) {
                return function (i) {
                    t(i)
                }
            },
            c = function () {
                o = null,
                    h = null,
                    a = l,
                    l = null,
                    _ = null
            },
            v = function (t) {
                s = t,
                u || (u = Fi()),
                    u.width = s.width,
                    u.height = s.height,
                    i.width = s.width,
                    i.height = s.height
            },
            g = function (t) {
                E(),
                    c(),
                    o = t.transparencyGiven ? t.transparencyIndex : null,
                    h = 10 * t.delayTime,
                    l = t.disposalMethod
            },
            E = function () {
                if (_) {
                    var t = _.getImageData(0, 0, s.width, s.height),
                        e = {
                            data: t,
                            _pixels: Ie(t.data, s.width, s.height),
                            delay: h
                        };
                    r.call(i, e)
                }
            },
            m = function (t) {
                _ || (_ = u.getContext("2d"));
                var i = t.lctFlag ? t.lct : s.gct,
                    e = _.getImageData(t.leftPos, t.topPos, t.width, t.height);
                t.pixels.forEach(function (t, n) {
                    o !== t ? (e.data[4 * n + 0] = i[t][0], e.data[4 * n + 1] = i[t][1], e.data[4 * n + 2] = i[t][2], e.data[4 * n + 3] = 255) : (2 === a || 3 === a) && (e.data[4 * n + 3] = 0)
                }),
                    _.clearRect(0, 0, s.width, s.height),
                    _.putImageData(e, t.leftPos, t.topPos)
            },
            p = function () {
            },
            y = {
                hdr: f(v),
                gce: f(g),
                com: f(p),
                app: {
                    NETSCAPE: f(p)
                },
                img: f(m, !0),
                eof: function () {
                    E(),
                        e.call(i)
                }
            },
            T = new XMLHttpRequest;
        Is || T.overrideMimeType("text/plain; charset=x-user-defined"),
            T.onload = function () {
                d = new Yh(T.responseText);
                try {
                    Uh(d, y)
                } catch (t) {
                    n.call(i, "parse")
                }
            },
            T.onerror = function () {
                n.call(i, "xhr")
            },
            T.open("GET", t, !0),
            T.send()
    }

    function Qe(t) {
        return t.parent ? (t = t.parent, t._dz ? t._dz : t._gs === !1 ? t : null) : null
    }

    function tn(t, i, e) {
        if (e = e || i.toAgent, e == t)
            return !1;
        var n = t.getEdgeBundle(e);
        return n || (n = new El(t, e), t._linkedNodes[e.id] = n),
            n._im(i, t)
    }

    function en(t, i, e) {
        if (e = e || i.toAgent, e == t)
            return !1;
        var n = t.getEdgeBundle(e);
        return n ? n._d8(i, t) : void 0
    }

    function nn(t, i, n) {
        return n === e && (n = i.toAgent),
            n != t ? (t._8c || (t._8c = new Xs), t._8c.add(i) === !1 ? !1 : void t._9m++) : void 0
    }

    function rn(t, i, e) {
        return t._8c && t._8c.remove(i) !== !1 ? (t._9m--, void en(t, i, e)) : !1
    }

    function sn(t, i) {
        return i.fromAgent != t ? (t._9h || (t._9h = new Xs), t._9h.add(i) === !1 ? !1 : void t._mx9++) : void 0
    }

    function on(t, i) {
        return t._9h && t._9h.remove(i) !== !1 ? (t._mx9--, void en(i.fromAgent, i, t)) : !1
    }

    function hn(t, i) {
        if (i === e && (i = t instanceof Vh), i) {
            if (t.isInvalid())
                return null;
            var n = hn(t.from, !1);
            if (t.isLooped())
                return n;
            for (var r = hn(t.to, !1); null != n && null != r;) {
                if (n == r)
                    return n;
                if (n.isDescendantOf(r))
                    return r;
                if (r.isDescendantOf(n))
                    return n;
                n = hn(n, !1),
                    r = hn(r, !1)
            }
            return null
        }
        for (var s = t.parent; null != s;) {
            if (s._i9())
                return s;
            s = s.parent
        }
        return null
    }

    function an(t, i, e) {
        t._i9() && t.hasChildren() && t.children.forEach(function (t) {
            t instanceof Kh && i.add(t) && an(t, i, e)
        }, this),
        t.hasFollowers() && t._do.forEach(function (t) {
            (null == e || e.accept(t)) && i.add(t) && an(t, i, e)
        })
    }

    function ln(t, i) {
        i.parent ? i.parent.setChildIndex(i, i.parent.childrenCount - 1) : t.roots.setIndex(i, t.roots.length - 1)
    }

    function _n(t, i) {
        if (i instanceof Vh)
            return void (i.isInvalid() || dn(t, i));
        for (ln(t, i); i = i.parent;)
            ln(t, i)
    }

    function un(t, i) {
        if (i instanceof Vh)
            return void (i.isInvalid() || dn(t, i));
        for (ln(t, i); i = i.parent;)
            ln(t, i)
    }

    function dn(t, i) {
        var e = i.fromAgent;
        if (i.isLooped())
            ln(t, e);
        else {
            var n = i.toAgent;
            ln(t, e),
                ln(t, n)
        }
    }

    function fn(t, i) {
        return t._9m++,
            t._fj ? (i._iy = t._ie, t._ie._ix = i, void (t._ie = i)) : (t._fj = i, void (t._ie = i))
    }

    function cn(t, i) {
        t._9m--,
        t._ie == i && (t._ie = i._iy),
            i._iy ? i._iy._ix = i._ix : t._fj = i._ix,
        i._ix && (i._ix._iy = i._iy),
            i._iy = null,
            i._ix = null,
            en(t, i, i.$to)
    }

    function vn(t, i) {
        return t._mx9++,
            t._if ? (i._k7 = t._j9, t._j9._k8 = i, void (t._j9 = i)) : (t._if = i, void (t._j9 = i))
    }

    function gn(t, i) {
        t._mx9--,
        t._j9 == i && (t._j9 = i._k7),
            i._k7 ? i._k7._k8 = i._k8 : t._if = i._k8,
        i._k8 && (i._k8._k7 = i._k7),
            i._k7 = null,
            i._k8 = null
    }

    function En(t, i) {
        return i = i || new Xs,
            t.forEachEdge(function (t) {
                i.add({
                    id: t.id,
                    edge: t,
                    fromAgent: t.$from._dz,
                    toAgent: t.$to._dz
                })
            }),
            t.forEachChild(function (t) {
                t instanceof Kh && En(t, i)
            }),
            i
    }

    function mn(t, i, e) {
        return yn(t, i, e) === !1 ? !1 : pn(t, i, e)
    }

    function pn(t, i, e) {
        if (t._fj)
            for (var n = t._fj; n;) {
                if (i.call(e, n) === !1)
                    return !1;
                n = n._ix
            }
    }

    function yn(t, i, e) {
        if (t._if)
            for (var n = t._if; n;) {
                if (i.call(e, n) === !1)
                    return !1;
                n = n._k8
            }
    }

    function Tn(t, i, n, r, s, o, h) {
        return o || h ? (o = o || 0, h = h === e ? o : h || 0, o = Math.min(o, r / 2), h = Math.min(h, s / 2), t.moveTo(i + o, n), t.lineTo(i + r - o, n), t.quadTo(i + r, n, i + r, n + h), t.lineTo(i + r, n + s - h), t.quadTo(i + r, n + s, i + r - o, n + s), t.lineTo(i + o, n + s), t.quadTo(i, n + s, i, n + s - h), t.lineTo(i, n + h), t.quadTo(i, n, i + o, n), t.closePath(), t) : (t.moveTo(i, n), t.lineTo(i + r, n), t.lineTo(i + r, n + s), t.lineTo(i, n + s), t.closePath(), t)
    }

    function wn(t, i) {
        var e = i.r || 1,
            n = i.cx || 0,
            r = i.cy || 0,
            s = e * Math.tan(Math.PI / 8),
            o = e * Math.sin(Math.PI / 4);
        t.moveTo(n + e, r),
            t.quadTo(n + e, r + s, n + o, r + o),
            t.quadTo(n + s, r + e, n, r + e),
            t.quadTo(n - s, r + e, n - o, r + o),
            t.quadTo(n - e, r + s, n - e, r),
            t.quadTo(n - e, r - s, n - o, r - o),
            t.quadTo(n - s, r - e, n, r - e),
            t.quadTo(n + s, r - e, n + o, r - o),
            t.quadTo(n + e, r - s, n + e, r)
    }

    function On(t, i, e, n, r) {
        i instanceof se && (n = i.width, r = i.height, e = i.cy - r / 2, i = i.cx - n / 2);
        var s = .5522848,
            o = n / 2 * s,
            h = r / 2 * s,
            a = i + n,
            l = e + r,
            _ = i + n / 2,
            u = e + r / 2;
        return t.moveTo(i, u),
            t.curveTo(i, u - h, _ - o, e, _, e),
            t.curveTo(_ + o, e, a, u - h, a, u),
            t.curveTo(a, u + h, _ + o, l, _, l),
            t.curveTo(_ - o, l, i, u + h, i, u),
            t
    }

    function An(t, i, e, n, r) {
        var s = 2 * n,
            o = 2 * r,
            h = i + n / 2,
            a = e + r / 2;
        return t.moveTo(h - s / 4, a - o / 12),
            t.lineTo(i + .306 * n, e + .579 * r),
            t.lineTo(h - s / 6, a + o / 4),
            t.lineTo(i + n / 2, e + .733 * r),
            t.lineTo(h + s / 6, a + o / 4),
            t.lineTo(i + .693 * n, e + .579 * r),
            t.lineTo(h + s / 4, a - o / 12),
            t.lineTo(i + .611 * n, e + .332 * r),
            t.lineTo(h + 0, a - o / 4),
            t.lineTo(i + .388 * n, e + .332 * r),
            t.closePath(),
            t
    }

    function xn(t, i, e, n, r) {
        return t.moveTo(i, e),
            t.lineTo(i + n, e + r / 2),
            t.lineTo(i, e + r),
            t.closePath(),
            t
    }

    function Ln(t, i, e, n, r) {
        return t.moveTo(i, e + r / 2),
            t.lineTo(i + n / 2, e),
            t.lineTo(i + n, e + r / 2),
            t.lineTo(i + n / 2, e + r),
            t.closePath(),
            t
    }

    function bn(t, i, e, n, r, s) {
        return t.moveTo(i, e),
            t.lineTo(i + n, e + r / 2),
            t.lineTo(i, e + r),
        s || (t.lineTo(i + .25 * n, e + r / 2), t.closePath()),
            t
    }

    function Sn(t, i, e, n, r) {
        if (!t || 3 > t)
            throw new Error("edge number must greater than 2");
        t = 0 | t,
            n = n || 50,
            r = r || 0,
            i = i || 0,
            e = e || 0;
        for (var s, o, h = 0, a = 2 * Math.PI / t, l = new Ph; t > h;)
            s = i + n * Math.cos(r), o = e + n * Math.sin(r), h ? l.lineTo(s, o) : l.moveTo(s, o), ++h, r += a;
        return l.closePath(),
            l
    }

    function In() {
        var t = new Ph;
        return t.moveTo(75, 40),
            t.curveTo(75, 37, 70, 25, 50, 25),
            t.curveTo(20, 25, 20, 62.5, 20, 62.5),
            t.curveTo(20, 80, 40, 102, 75, 120),
            t.curveTo(110, 102, 130, 80, 130, 62.5),
            t.curveTo(130, 62.5, 130, 25, 100, 25),
            t.curveTo(85, 25, 75, 37, 75, 40),
            t
    }

    function Rn() {
        var t = new Ph;
        return t.moveTo(20, 0),
            t.lineTo(80, 0),
            t.lineTo(100, 100),
            t.lineTo(0, 100),
            t.closePath(),
            t
    }

    function Cn() {
        var t = new Ph;
        return t.moveTo(100, 0),
            t.lineTo(100, 80),
            t.lineTo(0, 100),
            t.lineTo(0, 20),
            t.closePath(),
            t
    }

    function Dn() {
        var t = new Ph;
        return t.moveTo(20, 0),
            t.lineTo(100, 0),
            t.lineTo(80, 100),
            t.lineTo(0, 100),
            t.closePath(),
            t
    }

    function Pn() {
        var t = new Ph;
        return t.moveTo(43, 23),
            t.lineTo(28, 10),
            t.lineTo(37, 2),
            t.lineTo(63, 31),
            t.lineTo(37, 59),
            t.lineTo(28, 52),
            t.lineTo(44, 38),
            t.lineTo(3, 38),
            t.lineTo(3, 23),
            t.closePath(),
            t
    }

    function Nn() {
        var t = new Ph;
        return t.moveTo(1, 8),
            t.lineTo(7, 2),
            t.lineTo(32, 26),
            t.lineTo(7, 50),
            t.lineTo(1, 44),
            t.lineTo(18, 26),
            t.closePath(),
            t.moveTo(27, 8),
            t.lineTo(33, 2),
            t.lineTo(57, 26),
            t.lineTo(33, 50),
            t.lineTo(27, 44),
            t.lineTo(44, 26),
            t.closePath(),
            t
    }

    function zn() {
        var t = new Ph;
        return t.moveTo(0, 15),
            t.lineTo(23, 15),
            t.lineTo(23, 1),
            t.lineTo(47, 23),
            t.lineTo(23, 43),
            t.lineTo(23, 29),
            t.lineTo(0, 29),
            t.closePath(),
            t
    }

    function kn() {
        var t = new Ph;
        return t.moveTo(0, 21),
            t.lineTo(30, 21),
            t.lineTo(19, 0),
            t.lineTo(25, 0),
            t.lineTo(47, 25),
            t.lineTo(25, 48),
            t.lineTo(19, 48),
            t.lineTo(30, 28),
            t.lineTo(0, 28),
            t.closePath(),
            t
    }

    function Mn() {
        var t = new Ph;
        return t.moveTo(0, 0),
            t.lineTo(34, 24),
            t.lineTo(0, 48),
            t.lineTo(14, 24),
            t.closePath(),
            t
    }

    function Bn() {
        var t = new Ph;
        return t.moveTo(20, 0),
            t.lineTo(34, 14),
            t.lineTo(20, 28),
            t.lineTo(22, 18),
            t.lineTo(1, 25),
            t.lineTo(10, 14),
            t.lineTo(1, 3),
            t.lineTo(22, 10),
            t.closePath(),
            t
    }

    function Gn() {
        var t = new Ph;
        return t.moveTo(4, 18),
            t.lineTo(45, 18),
            t.lineTo(37, 4),
            t.lineTo(83, 25),
            t.lineTo(37, 46),
            t.lineTo(45, 32),
            t.lineTo(4, 32),
            t.closePath(),
            t
    }

    function $n() {
        var t = new Ph;
        return t.moveTo(17, 11),
            t.lineTo(27, 11),
            t.lineTo(42, 27),
            t.lineTo(27, 42),
            t.lineTo(17, 42),
            t.lineTo(28, 30),
            t.lineTo(4, 30),
            t.lineTo(4, 23),
            t.lineTo(28, 23),
            t.closePath(),
            t
    }

    function Fn() {
        Jh.register(Jo.SHAPE_CIRCLE, On(new Ph, 0, 0, 100, 100)),
            Jh.register(Jo.SHAPE_RECT, Tn(new Ph, 0, 0, 100, 100)),
            Jh.register(Jo.SHAPE_ROUNDRECT, Tn(new Ph, 0, 0, 100, 100, 20, 20)),
            Jh.register(Jo.SHAPE_STAR, An(new Ph, 0, 0, 100, 100)),
            Jh.register(Jo.SHAPE_TRIANGLE, xn(new Ph, 0, 0, 100, 100)),
            Jh.register(Jo.SHAPE_PENTAGON, Sn(5)),
            Jh.register(Jo.SHAPE_HEXAGON, Sn(6)),
            Jh.register(Jo.SHAPE_DIAMOND, Ln(new Ph, 0, 0, 100, 100)),
            Jh.register(Jo.SHAPE_HEART, In()),
            Jh.register(Jo.SHAPE_TRAPEZIUM, Rn()),
            Jh.register(Jo.SHAPE_RHOMBUS, Cn()),
            Jh.register(Jo.SHAPE_PARALLELOGRAM, Dn());
        var t = new Ph;
        t.moveTo(20, 0),
            t.lineTo(40, 0),
            t.lineTo(40, 20),
            t.lineTo(60, 20),
            t.lineTo(60, 40),
            t.lineTo(40, 40),
            t.lineTo(40, 60),
            t.lineTo(20, 60),
            t.lineTo(20, 40),
            t.lineTo(0, 40),
            t.lineTo(0, 20),
            t.lineTo(20, 20),
            t.closePath(),
            Jh.register(Jo.SHAPE_CROSS, t),
            Jh.register(Jo.SHAPE_ARROW_STANDARD, bn(new Ph, 0, 0, 100, 100)),
            Jh.register(Jo.SHAPE_ARROW_1, Pn()),
            Jh.register(Jo.SHAPE_ARROW_2, Nn()),
            Jh.register(Jo.SHAPE_ARROW_3, zn()),
            Jh.register(Jo.SHAPE_ARROW_4, kn()),
            Jh.register(Jo.SHAPE_ARROW_5, Mn()),
            Jh.register(Jo.SHAPE_ARROW_6, Bn()),
            Jh.register(Jo.SHAPE_ARROW_7, Gn()),
            Jh.register(Jo.SHAPE_ARROW_8, $n()),
            Jh.register(Jo.SHAPE_ARROW_OPEN, bn(new Ph, 0, 0, 100, 100, !0))
    }

    function jn() {
        M(this, jn, arguments),
            this.busLayout = !0
    }

    function Yn() {
        M(this, Yn),
            this._$u = new yo
    }

    function Hn() {
        if (this._gs === !0) {
            var t = this._8c,
                i = this._9h;
            if (t)
                for (t = t._jz; t.length;) {
                    var e = t[0];
                    rn(this, e, e.toAgent)
                }
            if (i)
                for (i = i._jz; i.length;) {
                    var e = i[0];
                    on(this, e, e.fromAgent)
                }
            return void this.forEachChild(function (t) {
                t._i9() && Hn.call(t)
            })
        }
        var n = En(this);
        n.forEach(function (t) {
            t = t.edge;
            var i = t.$from,
                e = t.$to,
                n = i.isDescendantOf(this),
                r = e.isDescendantOf(this);
            n && !r ? (nn(this, t), tn(this, t)) : r && !n && (sn(this, t), tn(t.fromAgent, t, this))
        }, this)
    }

    function Un() {
        M(this, Un, arguments),
            this.$image = null
    }

    function Wn(t, i, e, n) {
        return t[i] = e,
            n ? {
                    get: function () {
                        return this[i]
                    },
                    set: function (t) {
                        if (t !== this[i]) {
                            this[i] = t,
                                !this._mwq,
                                this._1n = !0;
                            for (var e = n.length; --e >= 0;)
                                this[n[e]] = !0
                        }
                    }
                }
                : {
                    get: function () {
                        return this[i]
                    },
                    set: function (t) {
                        t !== this[i] && (this[i] = t)
                    }
                }
    }

    function qn(t, i) {
        var e = {},
            n = {};
        for (var r in i) {
            var s = i[r];
            s.validateFlags && s.validateFlags.forEach(function (t, i, e) {
                e[i] = "$invalidate" + t,
                    n[t] = !0
            }),
                e[r] = Wn(t, "$" + r, s.value, s.validateFlags)
        }
        for (var o in n)
            t["$invalidate" + o] = !0;
        Object.defineProperties(t, e)
    }

    function Xn(t, i, e, n) {
        if (Array.isArray(i))
            for (var r = i.length; --r >= 0;)
                Xn(t, i[r], e, n);
        else {
            var s = i.target;
            if (s) {
                if (s instanceof ta || (s = t[s]), !s)
                    return
            } else
                s = t;
            if (n || (n = t.getProperty(i.property, e)), i.bindingProperty && (s[i.bindingProperty] = n), i.callback) {
                var o = i.callback;
                o instanceof Function || (o = t[o]),
                o instanceof Function && o.call(t, n, s)
            }
        }
    }

    function Vn() {
        ia.forEach(function (t) {
            this[t] = {}
        }, this)
    }

    function Kn(t, i, e, n) {
        return n == Jo.PROPERTY_TYPE_ACCESSOR ? void (t[e] = i) : n == Jo.PROPERTY_TYPE_CLIENT ? void t.set(e, i) : n == Jo.PROPERTY_TYPE_STYLE ? void t.setStyle(e, i) : !1
    }

    function Zn() {
        M(this, Zn, arguments)
    }

    function Jn() {
        M(this, Jn, arguments)
    }

    function Qn(t) {
        this._6y(),
            this._dy(t),
            this._fs = [],
            this._mwo = new wa,
            this._k2 = new ir(this),
            this._md = new Xs;
        var i = this;
        this._md._fm = function (t, e, n) {
            e.destroy();
            var r = e.uiBounds;
            return e._i5 && r && i._mwo._lr(e.$x + e.uiBounds.x, e.$y + e.uiBounds.y, e.uiBounds.width, e.uiBounds.height),
                Xs.prototype._fm.call(this, t, e, n)
        },
            this._md.clear = function () {
                return this.forEach(function (t) {
                    t.destroy()
                }),
                    Xs.prototype.clear.call(this)
            },
            this._mzx = [],
            this._8b = {},
            this._8g = new io,
            this._8p = [],
            this._mzz()
    }

    function tr(t) {
        var i = Fi(!0);
        return Ze(i.g),
            i.onselectstart = function () {
                return !1
            },
            t.appendChild(i),
            i.className = pa,
            i
    }

    function ir(t) {
        this._dh = t,
            this._k2 = new qs,
            this._k2.ratio = t.ratio,
            this._76 = new io
    }

    function er(t, i, e, n) {
        var r = nr(t, i, e, n),
            s = [];
        if (hr(t))
            rr(r, i, e, s, n.getStyle(ea.EDGE_EXTEND));
        else {
            Er(t, i, e, s, r, n);
            var o = sr(t, n),
                h = o ? dr(t, r, i, e, n.getStyle(ea.EDGE_SPLIT_PERCENT)) : n.getStyle(ea.EDGE_SPLIT_VALUE);
            0 == h && (r = !r)
        }
        return s
    }

    function nr(t, i, e) {
        if (null != t) {
            if (t == Jo.EDGE_TYPE_ELBOW_HORIZONTAL || t == Jo.EDGE_TYPE_ORTHOGONAL_HORIZONTAL || t == Jo.EDGE_TYPE_HORIZONTAL_VERTICAL || t == Jo.EDGE_TYPE_EXTEND_LEFT || t == Jo.EDGE_TYPE_EXTEND_RIGHT)
                return !0;
            if (t == Jo.EDGE_TYPE_ELBOW_VERTICAL || t == Jo.EDGE_TYPE_ORTHOGONAL_VERTICAL || t == Jo.EDGE_TYPE_VERTICAL_HORIZONTAL || t == Jo.EDGE_TYPE_EXTEND_TOP || t == Jo.EDGE_TYPE_EXTEND_BOTTOM)
                return !1
        }
        var n = _r(i, e),
            r = ur(i, e);
        return n >= r
    }

    function rr(t, i, e, n, r) {
        t ? wr(i, e, n, r) : Or(i, e, n, r)
    }

    function sr(t, i) {
        return i.getStyle(ea.EDGE_SPLIT_BY_PERCENT)
    }

    function or(t) {
        return null != t && (t == Jo.EDGE_TYPE_EXTEND_TOP || t == Jo.EDGE_TYPE_EXTEND_LEFT || t == Jo.EDGE_TYPE_EXTEND_BOTTOM || t == Jo.EDGE_TYPE_EXTEND_RIGHT)
    }

    function hr(t) {
        return t && (t == Jo.EDGE_TYPE_ELBOW || t == Jo.EDGE_TYPE_ELBOW_HORIZONTAL || t == Jo.EDGE_TYPE_ELBOW_VERTICAL)
    }

    function ar(t, i, e, n, r) {
        if (t == Jo.EDGE_TYPE_HORIZONTAL_VERTICAL || t == Jo.EDGE_TYPE_VERTICAL_HORIZONTAL)
            return new Zs(n.x + n.width / 2, n.y + n.height / 2);
        var s;
        if (or(t)) {
            var o = Math.min(e.y, n.y),
                h = Math.min(e.x, n.x),
                a = Math.max(e.bottom, n.bottom),
                l = Math.max(e.right, n.right);
            if (s = r.getStyle(ea.EDGE_EXTEND), t == Jo.EDGE_TYPE_EXTEND_TOP)
                return new Zs((h + l) / 2, o - s);
            if (t == Jo.EDGE_TYPE_EXTEND_LEFT)
                return new Zs(h - s, (o + a) / 2);
            if (t == Jo.EDGE_TYPE_EXTEND_BOTTOM)
                return new Zs((h + l) / 2, a + s);
            if (t == Jo.EDGE_TYPE_EXTEND_RIGHT)
                return new Zs(l + s, (o + a) / 2)
        }
        var _ = sr(t, r);
        if (s = _ ? dr(t, i, e, n, r.getStyle(ea.EDGE_SPLIT_PERCENT)) : r.getStyle(ea.EDGE_SPLIT_VALUE), s == Number.NEGATIVE_INFINITY || s == Number.POSITIVE_INFINITY)
            return new Zs(n.x + n.width / 2, n.y + n.height / 2);
        if (0 == s)
            return new Zs(e.x + e.width / 2, e.y + e.height / 2);
        if (i) {
            var u = e.x + e.right < n.x + n.right;
            return new Zs(vr(u, s, e.x, e.width), e.y + e.height / 2)
        }
        var d = e.y + e.bottom < n.y + n.bottom;
        return new Zs(e.x + e.width / 2, vr(d, s, e.y, e.height))
    }

    function lr(t, i, e, n) {
        var r = Math.max(i, n) - Math.min(t, e);
        return r - (i - t + n - e)
    }

    function _r(t, i) {
        var e = Math.max(t.x + t.width, i.x + i.width) - Math.min(t.x, i.x);
        return e - t.width - i.width
    }

    function ur(t, i) {
        var e = Math.max(t.y + t.height, i.y + i.height) - Math.min(t.y, i.y);
        return e - t.height - i.height
    }

    function dr(t, i, e, n, r) {
        var s = fr(r, i, e, n, null);
        return s * r
    }

    function fr(t, i, e, n) {
        return i ? cr(t, e.x, e.right, n.x, n.right) : cr(t, e.y, e.bottom, n.y, n.bottom)
    }

    function cr(t, i, e, n, r) {
        var s = lr(i, e, n, r),
            o = n + r > i + e;
        if (s > 0) {
            if (1 == t)
                return s + (r - n) / 2;
            if (t >= 0 && 1 > t)
                return s;
            if (0 > t)
                return o ? n - i : e - r
        }
        return Math.abs(o && t > 0 || !o && 0 > t ? e - r : i - n)
    }

    function vr(t, i, e, n) {
        return t == i > 0 ? e + n + Math.abs(i) : e - Math.abs(i)
    }

    function gr(t, i) {
        var e = t.length;
        if (!(3 > e)) {
            var n = i.getStyle(ea.EDGE_CORNER);
            if (n != Jo.EDGE_CORNER_NONE) {
                var r = i.getStyle(ea.EDGE_CORNER_RADIUS),
                    s = 0,
                    o = 0;
                r && (L(r) ? s = o = r : (s = r.x || 0, o = r.y || 0));
                for (var h, a, l, _, u = t[0], d = t[1], f = null, c = 2; e > c; c++) {
                    var v = t[c],
                        g = d.x - u.x,
                        E = d.y - u.y,
                        y = v.x - d.x,
                        T = v.y - d.y,
                        w = !g || g > -eh && eh > g,
                        O = !E || E > -eh && eh > E,
                        A = !y || y > -eh && eh > y,
                        x = !T || T > -eh && eh > T,
                        b = O;
                    (w && x || O && A) && (b ? (h = Math.min(2 == c ? Math.abs(g) : Math.abs(g) / 2, s), a = Math.min(c == e - 1 ? Math.abs(T) : Math.abs(T) / 2, o), l = new Zs(d.x - (g > 0 ? h : -h), d.y), _ = new Zs(d.x, d.y + (T > 0 ? a : -a))) : (h = Math.min(c == e - 1 ? Math.abs(y) : Math.abs(y) / 2, s), a = Math.min(2 == c ? Math.abs(E) : Math.abs(E) / 2, o), l = new Zs(d.x, d.y - (E > 0 ? a : -a)), _ = new Zs(d.x + (y > 0 ? h : -h), d.y)), p(t, d), c--, e--, (l.x != u.x || l.y != u.y) && (m(t, l, c), c++, e++), n == Jo.EDGE_CORNER_BEVEL ? (m(t, _, c), c++, e++) : n == Jo.EDGE_CORNER_ROUND && (m(t, [d, _], c), c++, e++)),
                        u = d,
                        d = v
                }
                null != f && _.x == d.x && _.y == d.y && p(t, d)
            }
        }
    }

    function Er(t, i, e, n, r, s) {
        var o = s.getStyle(ea.EDGE_CONTROL_POINT),
            h = null == o;
        if (null != o) {
            var a = (new io).union(i).union(e);
            a.intersects(o) || (r = mr(o.x, o.y, a.y, a.x, a.bottom, a.right))
        } else
            o = ar(t, r, i, e, s);
        r ? Tr(i, e, o, n, h) : yr(i, e, o, n, h)
    }

    function mr(t, i, e, n, r, s) {
        return e > i && e - i > n - t && e - i > t - s || i > r && i - r > n - t && i - r > t - s ? !1 : !0
    }

    function pr(t, i, e) {
        return i >= t.x && i <= t.right && e >= t.y && e <= t.bottom
    }

    function yr(t, i, e, n, r) {
        var s = Math.max(t.y, i.y),
            o = Math.min(t.y + t.height, i.y + i.height),
            h = null != e ? e.y : o + (s - o) / 2,
            a = t.x + t.width / 2,
            l = i.x + i.width / 2;
        if (0 == r && null != e && (e.x >= t.x && e.x <= t.x + t.width && (a = e.x), e.x >= i.x && e.x <= i.x + i.width && (l = e.x)), pr(i, a, h) || pr(t, a, h) || n.push(new Zs(a, h)), pr(i, l, h) || pr(t, l, h) || n.push(new Zs(l, h)), 0 == n.length)
            if (null != e)
                pr(i, e.x, h) || pr(t, e.x, h) || n.push(new Zs(e.x, h));
            else {
                var _ = Math.max(t.x, i.x),
                    u = Math.min(t.x + t.width, i.x + i.width);
                n.push(new Zs(_ + (u - _) / 2, h))
            }
    }

    function Tr(t, i, e, n, r) {
        var s = Math.max(t.x, i.x),
            o = Math.min(t.x + t.width, i.x + i.width),
            h = null != e ? e.x : o + (s - o) / 2,
            a = t.y + t.height / 2,
            l = i.y + i.height / 2;
        if (0 == r && null != e && (e.y >= t.y && e.y <= t.y + t.height && (a = e.y), e.y >= i.y && e.y <= i.y + i.height && (l = e.y)), pr(i, h, a) || pr(t, h, a) || n.push(new Zs(h, a)), pr(i, h, l) || pr(t, h, l) || n.push(new Zs(h, l)), 0 == n.length)
            if (null != e)
                pr(i, h, e.y) || pr(t, h, e.y) || n.push(new Zs(h, e.y));
            else {
                var _ = Math.max(t.y, i.y),
                    u = Math.min(t.y + t.height, i.y + i.height);
                n.push(new Zs(h, _ + (u - _) / 2))
            }
    }

    function wr(t, i, e, n) {
        var r = i.x + i.width < t.x,
            s = t.x + t.width < i.x,
            o = r ? t.x : t.x + t.width,
            h = t.y + t.height / 2,
            a = s ? i.x : i.x + i.width,
            l = i.y + i.height / 2,
            _ = n,
            u = r ? -_ : _,
            d = new Zs(o + u, h);
        u = s ? -_ : _;
        var f = new Zs(a + u, l);
        if (r == s) {
            var c = r ? Math.min(o, a) - n : Math.max(o, a) + n;
            e.push(new Zs(c, h)),
                e.push(new Zs(c, l))
        } else if (d.x < f.x == r) {
            var v = h + (l - h) / 2;
            e.push(d),
                e.push(new Zs(d.x, v)),
                e.push(new Zs(f.x, v)),
                e.push(f)
        } else
            e.push(d), e.push(f)
    }

    function Or(t, i, e, n) {
        var r = i.y + i.height < t.y,
            s = t.y + t.height < i.y,
            o = t.x + t.width / 2,
            h = r ? t.y : t.y + t.height,
            a = i.x + i.width / 2,
            l = s ? i.y : i.y + i.height,
            _ = n,
            u = r ? -_ : _,
            d = new Zs(o, h + u);
        u = s ? -_ : _;
        var f = new Zs(a, l + u);
        if (r == s) {
            var c = r ? Math.min(h, l) - n : Math.max(h, l) + n;
            e.push(new Zs(o, c)),
                e.push(new Zs(a, c))
        } else if (d.y < f.y == r) {
            var v = o + (a - o) / 2;
            e.push(d),
                e.push(new Zs(v, d.y)),
                e.push(new Zs(v, f.y)),
                e.push(f)
        } else
            e.push(d), e.push(f)
    }

    function Ar(t) {
        return t == Jo.EDGE_TYPE_ORTHOGONAL || t == Jo.EDGE_TYPE_ORTHOGONAL_HORIZONTAL || t == Jo.EDGE_TYPE_HORIZONTAL_VERTICAL || t == Jo.EDGE_TYPE_ORTHOGONAL_VERTICAL || t == Jo.EDGE_TYPE_VERTICAL_HORIZONTAL || t == Jo.EDGE_TYPE_EXTEND_TOP || t == Jo.EDGE_TYPE_EXTEND_LEFT || t == Jo.EDGE_TYPE_EXTEND_BOTTOM || t == Jo.EDGE_TYPE_EXTEND_RIGHT || t == Jo.EDGE_TYPE_ELBOW || t == Jo.EDGE_TYPE_ELBOW_HORIZONTAL || t == Jo.EDGE_TYPE_ELBOW_VERTICAL
    }

    function xr(t, i) {
        var e,
            n;
        i && i.width && i.height ? (e = i.width, n = i.height) : e = n = isNaN(i) ? Ws.ARROW_SIZE : i;
        var r = Jh.getShape(t, -e, -n / 2, e, n);
        return r || (r = new Ph, r.moveTo(-e, -n / 2), r.lineTo(0, 0), r.lineTo(-e, n / 2)),
            r
    }

    function Lr(t, i) {
        var e = Math.sin(i),
            n = Math.cos(i),
            r = t.x,
            s = t.y;
        return t.x = r * n - s * e,
            t.y = r * e + s * n,
            t
    }

    function br(t, i, e, n, r, s) {
        var o = Math.atan2(n - i, e - t),
            h = new Zs(r, s);
        return h.rotate = o,
            Lr(h, o),
            h.x += t,
            h.y += i,
            h
    }

    function Sr(t, i, e, n, r) {
        i = ri(n, i.x, i.y, e.x, e.y),
            e = ri(r, e.x, e.y, i.x, i.y);
        var s = Math.PI / 2 + Math.atan2(e.y - i.y, e.x - i.x),
            o = t * Math.cos(s),
            h = t * Math.sin(s),
            a = e.x - i.x,
            l = e.y - i.y,
            _ = i.x + .25 * a,
            u = i.y + .25 * l,
            d = i.x + .75 * a,
            f = i.y + .75 * l;
        return [new Ch(Sh, [_ + o, u + h, d + o, f + h])]
    }

    function Ir(t, i, n) {
        if (m(t, new Ch(xh, [i.x, i.y]), 0), n) {
            if (t.length > 1) {
                var r = t[t.length - 1];
                if (bh == r.type && (r.invalidTerminal || r.points[2] === e || null === r.points[2]))
                    return r.points[2] = n.x, r.points[3] = n.y, void (r.invalidTerminal = !0);
                if (Sh == r.type && (r.invalidTerminal || r.points[4] === e || null === r.points[4]))
                    return r.points[4] = n.x, r.points[5] = n.y, void (r.invalidTerminal = !0)
            }
            t.push(new Ch(Lh, [n.x, n.y]))
        }
    }

    function Rr(t, i, e, n, r, s, o, h) {
        return i.hasPathSegments() ? void (e._fg = i._9y.toDatas()) : n == r ? void t.drawLoopedEdge(e, n, s, o) : void t.drawEdge(e, n, r, s, o, h)
    }

    function Cr(t, i, e, n, r) {
        var s = n == r,
            o = t.graph.getUI(n),
            h = s ? o : t.graph.getUI(r);
        if (o && h) {
            var a = i.edgeType,
                l = o.bodyBounds.clone(),
                _ = s ? l : h.bodyBounds.clone(),
                u = i.hasPathSegments();
            if (!s && !a && !u) {
                var d = n.busLayout,
                    f = r.busLayout;
                if (d != f) {
                    var c,
                        v,
                        g,
                        E,
                        m = i.angle;
                    d ? (c = o, v = l, g = h, E = _) : (c = h, v = _, g = o, E = l);
                    var p = Mr(v, c, d, g, E, m);
                    if (p && 2 == p.length) {
                        var y = p[0],
                            T = p[1];
                        return e.moveTo(y.x, y.y),
                        T.x == y.x && T.y == y.y && (T.y += .01),
                            e.lineTo(T.x, T.y),
                            void (e._6f = !0)
                    }
                }
            }
            Rr(t, i, e, o, h, a, l, _),
            (!s || u) && Dr(t, i, e, o, h, a, l, _),
                e._6f = !0
        }
    }

    function Dr(t, i, n, r, s, o, h, a) {
        var l = h.center,
            _ = a.center,
            u = t.fromAtEdge,
            d = t.toAtEdge;
        if (!u && !d)
            return void Ir(n._fg, l, _);
        var f = n._fg;
        if (f.length) {
            if (u) {
                var c = f[0],
                    v = c.firstPoint;
                h.contains(v.x, v.y) && (c.type == Sh ? (l = v, v = {
                    x: c.points[2],
                    y: c.points[3]
                }, c.points = c.points.slice(2), c.type = bh) : c.type == bh && (l = v, v = {
                    x: c.points[0],
                    y: c.points[1]
                }, c.points = c.points.slice(2), c.type = Lh)),
                    Pr(r, h, v, l, e, e)
            }
            if (d) {
                var g,
                    E = f[f.length - 1],
                    m = E.lastPoint,
                    p = E.points.length,
                    y = m.x === e || m.y === e;
                p >= 4 && (y || a.contains(m.x, m.y)) && (y || (_ = m), g = !0, m = {
                    x: E.points[p - 4],
                    y: E.points[p - 3]
                }, a.contains(m.x, m.y) && (_ = m, p >= 6 ? (m = {
                    x: E.points[p - 6],
                    y: E.points[p - 5]
                }, E.points = E.points.slice(0, 4), E.type = bh) : 1 == f.length ? (m = {
                    x: l.x,
                    y: l.y
                }, E.points = E.points.slice(0, 2), E.type = Lh) : (E = f[f.length - 2], m = E.lastPoint))),
                    Pr(s, a, m, _, e, e),
                g && (p = E.points.length, E.points[p - 2] = _.x, E.points[p - 1] = _.y, _ = null)
            }
        } else {
            var T = Math.atan2(_.y - l.y, _.x - l.x),
                w = Math.cos(T),
                O = Math.sin(T);
            u && Pr(r, h, _, l, w, O),
            d && Pr(s, a, l, _, -w, -O)
        }
        Ir(n._fg, l, _)
    }

    function Pr(t, i, n, r, s, o) {
        if (s === e) {
            var h = Math.atan2(n.y - r.y, n.x - r.x);
            s = Math.cos(h),
                o = Math.sin(h)
        }
        for (n = {
            x: n.x,
            y: n.y
        }, i.contains(n.x, n.y) || (n = ri(i, r.x, r.y, n.x, n.y)); ;) {
            if (!i.contains(n.x, n.y))
                return r;
            if (t.hitTest(n.x - s, n.y - o, Ws.LOOKING_EDGE_ENDPOINT_TOLERANCE)) {
                r.x = n.x - s / 2,
                    r.y = n.y - o / 2;
                break
            }
            n.x -= s,
                n.y -= o
        }
        return r
    }

    function Nr(t, i, e, n, r, s, o, h) {
        if (i.hasPathSegments())
            return i._9y;
        var a = i.edgeType;
        if (Ar(a)) {
            var l = er(a, e, n, t, r, s);
            if (!l || !l.length)
                return null;
            m(l, o, 0),
                l.push(h),
            a != Jo.EDGE_TYPE_ELBOW && gr(l, t);
            for (var _ = [], u = l.length, d = 1; u - 1 > d; d++) {
                var f = l[d];
                _.push(I(f) ? new Ch(bh, [f[0].x, f[0].y, f[1].x, f[1].y]) : new Ch(Lh, [f.x, f.y]))
            }
            return _
        }
        if (i.$bundleEnabled) {
            var c = t._2h();
            if (!c)
                return;
            return Sr(c, o, h, e, n)
        }
    }

    function zr(t, i, e) {
        var n = t.getStyle(ea.EDGE_LOOPED_EXTAND),
            r = t._2h(),
            s = n + .2 * r,
            o = i.x + i.width - s,
            h = i.y,
            a = i.x + i.width,
            l = i.y + s;
        n += r;
        var _ = .707,
            u = -.707,
            d = i.x + i.width,
            f = i.y,
            c = d + _ * n,
            v = f + u * n,
            g = {
                x: o,
                y: h
            },
            E = {
                x: c,
                y: v
            },
            m = {
                x: a,
                y: l
            },
            p = g.x,
            y = E.x,
            T = m.x,
            w = g.y,
            O = E.y,
            A = m.y,
            x = ((A - w) * (O * O - w * w + y * y - p * p) + (O - w) * (w * w - A * A + p * p - T * T)) / (2 * (y - p) * (A - w) - 2 * (T - p) * (O - w)),
            L = ((T - p) * (y * y - p * p + O * O - w * w) + (y - p) * (p * p - T * T + w * w - A * A)) / (2 * (O - w) * (T - p) - 2 * (A - w) * (y - p)),
            s = Math.sqrt((p - x) * (p - x) + (w - L) * (w - L)),
            b = Math.atan2(g.y - L, g.x - x),
            S = Math.atan2(m.y - L, m.x - x),
            I = S - b;
        return 0 > I && (I += 2 * Math.PI),
            kr(x, L, b, I, s, s, !0, e)
    }

    function kr(t, i, e, n, r, s, o, h) {
        var a,
            l,
            _,
            u,
            d,
            f,
            c,
            v,
            g,
            E,
            m;
        if (Math.abs(n) > 2 * Math.PI && (n = 2 * Math.PI), d = Math.ceil(Math.abs(n) / (Math.PI / 4)), a = n / d, l = a, _ = e, d > 0) {
            f = t + Math.cos(_) * r,
                c = i + Math.sin(_) * s,
                moveTo ? h.moveTo(f, c) : h.lineTo(f, c);
            for (var p = 0; d > p; p++)
                _ += l, u = _ - l / 2, v = t + Math.cos(_) * r, g = i + Math.sin(_) * s, E = t + Math.cos(u) * (r / Math.cos(l / 2)), m = i + Math.sin(u) * (s / Math.cos(l / 2)), h.quadTo(E, m, v, g)
        }
    }

    function Mr(t, i, n, r, s, o) {
        var h = s.cx,
            a = s.cy,
            l = h < t.x,
            _ = h > t.right,
            u = a < t.y,
            d = a > t.bottom,
            f = t.cx,
            c = t.cy,
            v = l || _,
            g = u || d,
            E = o === e || null === o;
        E && (o = Math.atan2(a - c, h - f), v || g || (o += Math.PI));
        var m = Math.cos(o),
            p = Math.sin(o),
            y = Gr(i, t, {
                x: h,
                y: a
            }, -m, -p);
        y || (o = Math.atan2(a - c, h - f), v || g || (o += Math.PI), m = Math.cos(o), p = Math.sin(o), y = Gr(i, t, {
            x: h,
            y: a
        }, -m, -p) || {
            x: f,
            y: c
        });
        var T = Gr(r, s, {
            x: y.x,
            y: y.y
        }, -y.perX || m, -y.perY || p, !1) || {
            x: h,
            y: a
        };
        return n ? [y, T] : [T, y]
    }

    function Br(t, i, e, n, r, s) {
        var o = i < t.x,
            h = i > t.right,
            a = e < t.y,
            l = e > t.bottom;
        if (o && n > 0) {
            var _ = t.x - i,
                u = e + _ * r / n;
            if (u >= t.y && u <= t.bottom)
                return {
                    x: t.x,
                    y: u,
                    perX: n,
                    perY: r
                }
        }
        if (h && 0 > n) {
            var _ = t.right - i,
                u = e + _ * r / n;
            if (u >= t.y && u <= t.bottom)
                return {
                    x: t.right,
                    y: u,
                    perX: n,
                    perY: r
                }
        }
        if (a && r > 0) {
            var d = t.y - e,
                f = i + d * n / r;
            if (f >= t.x && f <= t.right)
                return {
                    x: f,
                    y: t.y,
                    perX: n,
                    perY: r
                }
        }
        if (l && 0 > r) {
            var d = t.bottom - e,
                f = i + d * n / r;
            if (f >= t.x && f <= t.right)
                return {
                    x: f,
                    y: t.bottom,
                    perX: n,
                    perY: r
                }
        }
        return s !== !1 ? Br(t, i, e, -n, -r, !1) : void 0
    }

    function Gr(t, i, e, n, r, s) {
        if (!i.contains(e.x, e.y)) {
            if (e = Br(i, e.x, e.y, n, r, s), !e)
                return;
            return $r(t, i, e, e.perX, e.perY)
        }
        return s === !1 ? $r(t, i, e, n, r) : $r(t, i, {
            x: e.x,
            y: e.y,
            perX: n,
            perY: r
        }, n, r) || $r(t, i, e, -n, -r)
    }

    function $r(t, i, e, n, r) {
        for (; ;) {
            if (!i.contains(e.x, e.y))
                return;
            if (t.hitTest(e.x + n, e.y + r))
                break;
            e.x += n,
                e.y += r
        }
        return e
    }

    function Fr(t) {
        return Oe(t) ? t : t.match(/.(gif|jpg|jpeg|png)$/gi) ? t : (t = J(t), t instanceof Object && t.draw ? t : void 0)
    }

    function jr(t) {
        for (var i = t.parent; i;) {
            if (i.enableSubNetwork)
                return i;
            i = i.parent
        }
        return null
    }

    function Yr() {
        M(this, Yr, arguments)
    }

    function Hr(t, e, n, r, s, o, h) {
        var a = i.createElement("div");
        a.className = "Q-Graph-Nav-Button",
            fi(a, ba),
        e && fi(a, e);
        var l = i.createElement("img");
        return o && (Fs ? l.ontouchstart = o : l.onmousedown = o),
            l.name = h,
            l.src = n,
            fi(l, Sa),
        s && fi(l, s),
        r && vi(l, "transform", "rotate(180deg)"),
            a._img = l,
            a.appendChild(l),
            t.appendChild(a),
            a
    }

    function Ur(t, e) {
        this._navPane = i.createElement("div"),
            this._navPane.className = "Q-Graph-Nav",
            fi(this._navPane, {
                "background-color": "rgba(0, 0, 0, 0)",
                overflow: "hidden",
                "float": "left",
                "user-select": "none",
                position: "absolute"
            }),
            this._top = Hr(this._navPane, {
                width: "100%"
            }, Ws.NAVIGATION_IMAGE_TOP, !1, null, e, "top"),
            this._left = Hr(this._navPane, {
                height: "100%"
            }, Ws.NAVIGATION_IMAGE_LEFT, !1, Ia, e, "left"),
            this._right = Hr(this._navPane, {
                height: "100%",
                right: "0px"
            }, Ws.NAVIGATION_IMAGE_LEFT, !0, Ia, e, "right"),
            this._mxottom = Hr(this._navPane, {
                width: "100%",
                bottom: "0px"
            }, Ws.NAVIGATION_IMAGE_TOP, !0, null, e, "bottom"),
            t.appendChild(this._navPane)
    }

    function Wr(t, i) {
        this._dh = t;
        var e = function (i) {
            var e,
                n,
                r = i.target,
                s = r.name;
            if ("left" == s)
                e = 1;
            else if ("right" == s)
                e = -1;
            else if ("top" == s)
                n = 1;
            else {
                if ("bottom" != s)
                    return;
                n = -1
            }
            Fs && (r.className = "hover", setTimeout(function () {
                r.className = ""
            }, 100)),
                D(i),
                t._kz._mw7(e, n)
        };
        Ur.call(this, i, e),
            this._3j(i.clientWidth, i.clientHeight)
    }

    function qr(t, i) {
        this._dh = t,
            this.init(i, t)
    }

    function Xr() {
        M(this, Xr, arguments)
    }

    function Vr(t, i) {
        this._dh = t,
            this._js = tr(i),
            this.g = this._js.g,
            this._9j = new Xs
    }

    function Kr(t) {
        var i = t.selectionModel,
            e = [];
        return t.graphModel.forEach(function (i) {
            t.isVisible(i) && t.isSelectable(i) && e.push(i)
        }),
            i.set(e)
    }

    function Zr(t, i, n, r) {
        r === e && (r = Ws.ZOOM_ANIMATE);
        var s = t.globalToLocal(i);
        return n ? t.zoomIn(s.x, s.y, r) : t.zoomOut(s.x, s.y, r)
    }

    function Jr(t, i, e) {
        var n = t.bounds;
        e = e || n,
            i = i || 1;
        var r = null;
        r && e.width * e.height * i * i > r && (i = Math.sqrt(r / e.width / e.height));
        var s = Fi();
        Ze(s.g),
            s.width = e.width * i,
            s.height = e.height * i,
            t._8t._fw(s.g, i, e);
        var o = null;
        try {
            o = s.toDataURL("image/png")
        } catch (h) {
            Zo.error(h)
        }
        return {
            canvas: s,
            data: o,
            width: s.width,
            height: s.height
        }
    }

    function Qr(t) {
        this.graph = t,
            this.topCanvas = t.topCanvas
    }

    function ts(t, i) {
        this.interactions = t,
            this.defaultCursor = i || "default"
    }

    function is() {
        M(this, is, arguments)
    }

    function es(t, i) {
        if (!t)
            return i;
        var n = {};
        for (var r in t)
            n[r] = t[r];
        for (var r in i)
            n[r] === e && (n[r] = i[r]);
        return n
    }

    function ns() {
        M(this, ns, arguments)
    }

    function rs() {
        M(this, rs, arguments)
    }

    function ss() {
        M(this, ss, arguments)
    }

    function os() {
        M(this, os, arguments)
    }

    function hs(i, e, n) {
        i += t.pageXOffset,
            e += t.pageYOffset;
        var r = n.getBoundingClientRect();
        return {
            x: i + r.left,
            y: e + r.top
        }
    }

    function as(t, i, e) {
        var n = t.offsetWidth,
            r = t.offsetHeight;
        t.style.left = i - n / 2 + "px",
            t.style.top = e - r / 2 + "px"
    }

    function ls(t) {
        var e = i.createElement("canvas"),
            n = e.getContext("2d"),
            r = getComputedStyle(t, null),
            s = r.font;
        s || (s = r.fontStyle + " " + r.fontSize + " " + r.fontFamily),
            n.font = s;
        var o = t.value,
            h = o.split("\n"),
            a = parseInt(r.fontSize),
            l = 0,
            _ = 0;
        return Zo.forEach(h, function (t) {
            var i = n.measureText(t).width;
            i > l && (l = i),
                _ += 1.2 * a
        }), {
            width: l,
            height: _
        }
    }

    function _s(t, e) {
        if ("number" == typeof t.selectionStart && "number" == typeof t.selectionEnd) {
            var n = t.value,
                r = t.selectionStart;
            t.value = n.slice(0, r) + e + n.slice(t.selectionEnd),
                t.selectionEnd = t.selectionStart = r + e.length
        } else if ("undefined" != typeof i.selection) {
            var s = i.selection.createRange();
            s.text = e,
                s.collapse(!1),
                s.select()
        }
    }

    function us(i) {
        if (Is) {
            var e = t.scrollX || t.pageXOffset,
                n = t.scrollY || t.pageYOffset;
            return i.select(),
                void t.scrollTo(e, n)
        }
        i.select()
    }

    function ds() {
    }

    function fs(t) {
        this.graph = t,
            this.topCanvas = t.topCanvas,
            this.handlerSize = Fs ? 8 : 5
    }

    function cs(t) {
        this.graph = t,
            this.topCanvas = t.topCanvas,
            this.handlerSize = Fs ? 8 : 4,
            this._rotateHandleLength = Fs ? 30 : 20
    }

    function vs(t, i) {
        var e = new io;
        return e.addPoint(He.call(t, {
            x: i.x,
            y: i.y
        })),
            e.addPoint(He.call(t, {
                x: i.x + i.width,
                y: i.y
            })),
            e.addPoint(He.call(t, {
                x: i.x + i.width,
                y: i.y + i.height
            })),
            e.addPoint(He.call(t, {
                x: i.x,
                y: i.y + i.height
            })),
            e
    }

    function gs(t) {
        t %= 2 * Math.PI;
        var i = Math.round(t / Da);
        return 0 == i || 4 == i ? "ew-resize" : 1 == i || 5 == i ? "nwse-resize" : 2 == i || 6 == i ? "ns-resize" : "nesw-resize"
    }

    function Es(e, n, r) {
        var s = i.documentElement,
            o = new Zo.Rect(t.pageXOffset, t.pageYOffset, s.clientWidth - 2, s.clientHeight - 2),
            h = e.offsetWidth,
            a = e.offsetHeight;
        n + h > o.x + o.width && (n = o.x + o.width - h),
        r + a > o.y + o.height && (r = o.y + o.height - a),
        n < o.x && (n = o.x),
        r < o.y && (r = o.y),
            e.style.left = n + "px",
            e.style.top = r + "px"
    }

    function ms(t, i, e, n, r) {
        this.source = t,
            this.type = "interaction",
            this.kind = i,
            this.event = e,
            this.data = n,
            this.datas = r
    }

    function ps(t) {
        this._4q = {},
            this._kz = t,
            this._kz._1l.addListener(this._9g, this),
            this.currentMode = Jo.INTERACTION_MODE_DEFAULT
    }

    function ys(t) {
        return t >= 10 && 20 > t
    }

    function Ts(t) {
        return t == Ka || t == Qa
    }

    function ws() {
        var t,
            i,
            e = {},
            n = [],
            r = 0,
            s = {},
            o = 0;
        this.graph.forEach(function (h) {
            if (this.isLayoutable(h))
                if (h instanceof Kh) {
                    var a = {
                        node: h,
                        id: h.id,
                        x: h.x,
                        y: h.y
                    };
                    for (this.appendNodeInfo && this.appendNodeInfo(h, a), e[h.id] = a, n.push(a), r++, i = h.parent; i instanceof Qh;) {
                        t || (t = {});
                        var l = t[i.id];
                        l || (l = t[i.id] = {
                            id: i.id,
                            children: []
                        }),
                            l.children.push(a),
                            i = i.parent
                    }
                } else if (h instanceof Vh && !h.isLooped() && h.fromAgent && h.toAgent) {
                    var a = {
                        edge: h
                    };
                    s[h.id] = a,
                        o++
                }
        }, this);
        var h = {};
        for (var a in s) {
            var l = s[a],
                _ = l.edge,
                u = _.fromAgent,
                d = _.toAgent,
                f = u.id + "-" + d.id,
                c = d.id + "-" + u.id;
            if (e[u.id] && e[d.id] && !h[f] && !h[c]) {
                var v = e[u.id],
                    g = e[d.id];
                l.from = v,
                    l.to = g,
                    h[f] = l,
                this.appendEdgeInfo && this.appendEdgeInfo(_, l)
            } else
                delete s[a], o--
        }
        return {
            groups: t,
            nodesArray: n,
            nodes: e,
            nodeCount: r,
            edges: s,
            edgeCount: o,
            minEnergy: this.minEnergyFunction(r, o)
        }
    }

    function Os(t) {
        this.graph = t,
            this.currentMovingNodes = {}
    }

    function As() {
        M(this, As, arguments)
    }

    function xs(t, i, e, n, r) {
        n ? t.forEachEdge(function (n) {
            var s = n.otherNode(t);
            s != e && s._marker != r && i(s, t)
        }, this, !0) : t.forEachOutEdge(function (n) {
            var s = n.toAgent;
            s != e && s._marker != r && i(s, t)
        })
    }

    var Ls = 0;
    if (t.navigator) {
        var bs = navigator.userAgent,
            Ss = /opera/i.test(bs),
            Is = !Ss && /msie/i.test(bs),
            Rs = /rv:11.0/i.test(bs),
            Cs = /MSIE 10./i.test(bs);
        if (Rs && (Is = !0), /msie\s[6,7,8]/i.test(bs))
            throw new Error("your browser is not supported");
        var Ds = /webkit|khtml/i.test(bs),
            Ps = !Ds && /gecko/i.test(bs),
            Ns = /firefox\//i.test(bs),
            zs = /Chrome\//i.test(bs),
            ks = !zs && /Safari\//i.test(bs),
            Ms = /Macintosh;/i.test(bs),
            Bs = /(iPad|iPhone|iPod)/g.test(bs),
            Gs = /Android/g.test(bs),
            $s = /Windows Phone/g.test(bs),
            Fs = (Bs || Gs || $s) && "ontouchstart" in t,
            js = bs.match(/AppleWebKit\/([0-9\.]*)/);
        if (js && js.length > 1)
            var Ys = parseFloat(js[1]);
        if (Gs) {
            var Hs = parseFloat(bs.match(/Android\s([0-9\.]*)/)[1]);
            if (Ys && 534.3 >= Ys)
                var Us = !0
        }
    }
    t.requestAnimationFrame || (t.requestAnimationFrame = t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (i) {
        return t.setTimeout(function () {
            i()
        }, 1e3 / 60)
    }),
    t.cancelAnimationFrame || (t.cancelAnimationFrame = t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || t.msCancelAnimationFrame || function (i) {
        return t.clearTimeout(i)
    });
    var Ws = {
        SELECTION_TOLERANCE: 2,
        DOUBLE_BUFFER: e,
        LABEL_COLOR: "#333"
    };
    Z(Ws, {
        FONT_STYLE: {
            get: function () {
                return this._fontStyle || (this._fontStyle = "normal")
            },
            set: function (t) {
                this._fontStyle != t && (this._fontStyle = t, this._fontChanged = !0)
            }
        },
        FONT_SIZE: {
            get: function () {
                return this._fontSize || (this._fontSize = 12)
            },
            set: function (t) {
                this._fontSize != t && (this._fontSize = t, this._fontChanged = !0)
            }
        },
        FONT_FAMILY: {
            get: function () {
                return this._fontFamily || (this._fontFamily = "Verdana,helvetica,arial,sans-serif")
            },
            set: function (t) {
                this._fontFamily != t && (this._fontFamily = t, this._fontChanged = !0)
            }
        },
        FONT: {
            get: function () {
                return (this._fontChanged || this._fontChanged === e) && (this._fontChanged = !1, this._font = this.FONT_STYLE + " " + this.FONT_SIZE + "px " + this.FONT_FAMILY),
                    this._font
            }
        }
    });
    var qs = function () {
    };
    qs.prototype = {
        _mm: 0,
        _mn: 0,
        _kr: !0,
        _ks: 1,
        _g4: function (t, i, e) {
            var n = this._mzq(i),
                r = this._mzn(e),
                s = t * n,
                o = t * r;
            return this._9e(t, i - s, e - o)
        },
        _mzq: function (t) {
            return (t - this._mm) / this._ks
        },
        _mzn: function (t) {
            return (t - this._mn) / this._ks
        },
        _ee: function (t, i) {
            return this._9e(this._ks, this._mm + t, this._mn + i)
        },
        _9e: function (t, i, e) {
            return this._ks == t && this._mm == i && this._mn == e ? !1 : (this._kr && (1 != this.ratio || 2 != this.ratio ? (i = Math.round(i * this.ratio) / this.ratio, e = Math.round(e * this.ratio) / this.ratio) : (i = Math.round(i), e = Math.round(e))), this._mm = i, this._mn = e, this._ks = t, void (this._32 && this._32()))
        },
        _hf: function () {
            return {
                a: this._ks,
                b: 0,
                c: 0,
                d: this._ks,
                e: this._mm,
                f: this._mn
            }
        },
        toString: function () {
            return "matrix(" + G(this._ks) + ",0,0," + G(this._ks) + "," + G(this._mm) + "," + G(this._mn) + ")"
        },
        _ft: function (t) {
            vi(t, "transform", this.toString())
        }
    };
    var Xs = function (t) {
        this._jz = [],
            this._lw = {},
        t && this.add(t)
    };
    Xs.prototype = {
        _jz: null,
        _lw: null,
        get: function (t) {
            return this.getByIndex(t)
        },
        getById: function (t) {
            return this._lw[t]
        },
        getByIndex: function (t) {
            return this._jz[t]
        },
        forEach: function (t, i, e) {
            return c(this._jz, t, i, e)
        },
        forEachReverse: function (t, i, e) {
            return g(this._jz, t, i, e)
        },
        size: function () {
            return this._jz.length
        },
        contains: function (t) {
            return this.containsById(t.id)
        },
        containsById: function (t) {
            return this._lw.hasOwnProperty(t)
        },
        setIndex: function (t, i) {
            var e = this._jz.indexOf(t);
            if (0 > e)
                throw new Error("'" + t.id + "' not exist");
            return e == i ? !1 : (this._jz.splice(e, 1), this._jz.splice(i, 0, t), !0)
        },
        setIndexAfter: function (t, i) {
            var e = this._jz.indexOf(t);
            if (0 > e)
                throw new Error("'" + t.id + "' not exist");
            return e == i ? i : e == i + 1 ? i + 1 : (e > i && (i += 1), this._jz.splice(e, 1), this._jz.splice(i, 0, t), i)
        },
        setIndexBefore: function (t, i) {
            var e = this._jz.indexOf(t);
            if (0 > e)
                throw new Error("'" + t.id + "' not exist");
            return e == i ? i : e == i - 1 ? i - 1 : (i > e && (i -= 1), this._jz.splice(e, 1), this._jz.splice(i, 0, t), i)
        },
        indexOf: function (t) {
            return this._jz.indexOf(t)
        },
        getIndexById: function (t) {
            var i = this.getById(t);
            return i ? this._jz.indexOf(i) : -1
        },
        add: function (t, i) {
            return I(t) ? this._gc(t, i) : this._ku(t, i)
        },
        addFirst: function (t) {
            return this.add(t, 0)
        },
        _gc: function (t, i) {
            if (0 == t.length)
                return !1;
            var n = !1,
                r = i >= 0;
            t = t._jz || t;
            for (var s = 0, o = t.length; o > s; s++) {
                var h = t[s];
                null !== h && h !== e && this._ku(h, i, !0) && (n = !0, r && i++)
            }
            return n
        },
        _ku: function (t, i) {
            var n = t.id;
            return n === e || this.containsById(n) ? !1 : (m(this._jz, t, i), this._lw[n] = t, t)
        },
        remove: function (t) {
            return I(t) ? this._mxp(t) : t.id ? this._fm(t.id, t) : this.removeById(t)
        },
        _mxp: function (t) {
            if (0 == t.length)
                return !1;
            var i = !1;
            t = t._jz || t;
            for (var n = 0, r = t.length; r > n; n++) {
                var s = t[n];
                if (null !== s && s !== e) {
                    s.id === e && (s = this._lw[s]);
                    var o = s.id;
                    this._fm(o, s, !0) && (i = !0)
                }
            }
            return i
        },
        _fm: function (t, i) {
            return t !== e && this.containsById(t) ? ((null === i || i === e) && (i = this.getById(t)), delete this._lw[t], p(this._jz, i), !0) : !1
        },
        removeById: function (t) {
            var i = this._lw[t];
            return i ? this._fm(t, i) : !1
        },
        set: function (t) {
            if (!t || 0 == t)
                return void this.clear();
            if (this.isEmpty() || !I(t))
                return this.clear(), this.add(t);
            var i = [],
                e = {},
                n = 0;
            if (c(t, function (t) {
                this._lw[t.id] ? (e[t.id] = t, n++) : i.push(t)
            }, this), n != this.length) {
                var r = [];
                this.forEach(function (t) {
                    e[t.id] || r.push(t)
                }, this),
                r.length && this._mxp(r)
            }
            return i.length && this._gc(i),
                !0
        },
        clear: function () {
            return this.isEmpty() ? !1 : (this._jz.length = 0, this._lw = {}, !0)
        },
        toDatas: function () {
            return this._jz.slice(0)
        },
        isEmpty: function () {
            return 0 == this._jz.length
        },
        valueOf: function () {
            return this._jz.length
        },
        clone: function (t) {
            var i = new Xs;
            return i.add(t ? E(this._jz) : this.toDatas()),
                i
        }
    },
        Z(Xs.prototype, {
            datas: {
                get: function () {
                    return this._jz
                }
            },
            random: {
                get: function () {
                    return this._jz && this._jz.length ? this._jz[P(this._jz.length)] : null
                }
            },
            length: {
                get: function () {
                    return this._jz ? this._jz.length : 0
                }
            }
        });
    var Vs = (2 * Math.PI, .5 * Math.PI),
        Ks = function (t, i) {
            i = i.toUpperCase();
            for (var e = Is ? t.firstChild : t.firstElementChild; e && (1 != e.nodeType || e.tagName && e.tagName.toUpperCase() != i);)
                e = Is ? e.nextSibling : e.nextElementSibling;
            return e && 1 == e.nodeType && e.tagName && e.tagName.toUpperCase() == i ? e : null
        },
        Zs = function (t, i, e) {
            t instanceof Zs && (i = t.y, t = t.x, e = t.rotate),
                this.set(t, i, e)
        },
        Js = function (t, i, e, n) {
            var r = t - e,
                s = i - n;
            return Math.sqrt(r * r + s * s)
        };
    Zs.prototype = {
        x: 0,
        y: 0,
        rotate: e,
        set: function (t, i, e) {
            this.x = t || 0,
                this.y = i || 0,
                this.rotate = e || 0
        },
        negate: function () {
            this.x = -this.x,
                this.y = -this.y
        },
        offset: function (t, i) {
            this.x += t,
                this.y += i
        },
        equals: function (t) {
            return this.x == t.x && this.y == t.y
        },
        distanceTo: function (t) {
            return Js(this.x, this.y, t.x, t.y)
        },
        toString: function () {
            return "Point(" + this.x + ", " + this.y + ")"
        },
        clone: function () {
            return new Zs(this.x, this.y)
        }
    },
        Object.defineProperty(Zs.prototype, "distance", {
            get: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }
        });
    var Qs = function (t, i, n, r) {
        t !== e && this._mc(t, i, n, r)
    };
    Qs.prototype = {
        _mv: null,
        _mt: null,
        _mr: null,
        _mp: null,
        _mw: null,
        _mx: null,
        _mz: 1,
        _mc: function (t, i, e, n) {
            this._mv = t,
                this._mt = i,
                this._mr = e,
                this._mp = n,
                t == e ? (this._mw = -1, this._mz = 0, this._mx = t) : (this._mw = (i - n) / (t - e), this._mx = i - this._mw * t, this._mz = 1),
                this._l7 = Math.atan2(this._mp - this._mt, this._mr - this._mv),
                this._mzos = Math.cos(this._l7),
                this._sin = Math.sin(this._l7)
        },
        _d3: function (t) {
            return 0 == this._mz ? Number.NaN : this._mw * t + this._mx
        },
        _d1: function (t) {
            return 0 == this._mw ? Number.NaN : (t - this._mx) / this._mw
        },
        _$h: function (t) {
            var i,
                e,
                n,
                r,
                s,
                o = t[0],
                h = t[2],
                a = t[4],
                l = t[1],
                _ = t[3],
                u = t[5],
                d = this._mw,
                f = this._mx,
                c = this._mz;
            if (0 == c ? (n = Math.sqrt((-d * d * o - d * f) * a + d * d * h * h + 2 * d * f * h - d * f * o), r = -d * h + d * o, s = d * a - 2 * d * h + d * o) : (n = Math.sqrt((-l + d * o + f) * u + _ * _ + (-2 * d * h - 2 * f) * _ + (d * a + f) * l + (-d * d * o - d * f) * a + d * d * h * h + 2 * d * f * h - d * f * o), r = -_ + l + d * h - d * o, s = u - 2 * _ + l - d * a + 2 * d * h - d * o), 0 != s) {
                i = (n + r) / s,
                    e = (-n + r) / s;
                var v,
                    g;
                return i >= 0 && 1 >= i && (v = Wi(i, t)),
                e >= 0 && 1 >= e && (g = Wi(e, t)),
                    v && g ? [v, g] : v ? v : g ? g : void 0
            }
        },
        _3u: function (t, i, e) {
            if (this._mw == t._mw || 0 == this._mz && 0 == t._mz)
                return null;
            var n,
                r;
            if (n = 0 == this._mz ? this._mx : 0 == t._mz ? t._mx : (t._mx - this._mx) / (this._mw - t._mw), r = 0 == this._mw ? this._mx : 0 == t._mw ? t._mx : this._mz ? this._mw * n + this._mx : t._mw * n + t._mx, !i)
                return {
                    x: n,
                    y: r
                };
            var s,
                o,
                h;
            if (e)
                s = -i / 2, o = -s;
            else {
                s = -Js(this._mv, this._mt, n, r),
                    o = Js(this._mr, this._mp, n, r);
                var a = -s + o;
                if (a > i) {
                    var l = i / a;
                    s *= l,
                        o *= l
                } else
                    h = (i - a) / 2
            }
            var _ = this._7l(n, r, s),
                u = this._7l(n, r, o);
            return h && (_._rest = h, u._rest = h),
                [_, u]
        },
        _7l: function (t, i, e) {
            return 0 == this._mz ? {
                    x: t,
                    y: i + e
                }
                : {
                    x: t + e * this._mzos,
                    y: i + e * this._sin
                }
        }
    };
    var to = function (t, i) {
        this.width = t,
            this.height = i
    };
    to.prototype = {
        width: 0,
        height: 0,
        isEmpty: function () {
            return this.width <= 0 || this.height <= 0
        },
        clone: function () {
            return new to(this.width, this.height)
        },
        toString: function () {
            return "Size(" + this.width + ", " + this.height + ")"
        }
    };
    var io = function (t, i, n, r) {
        t instanceof Object && !L(t) && (i = t.y, n = t.width, r = t.height, t = t.x),
        n === e && (n = -1),
        r === e && (r = -1),
            this.x = t || 0,
            this.y = i || 0,
            this.width = n,
            this.height = r
    };
    io.prototype = {
        x: 0,
        y: 0,
        width: -1,
        height: -1,
        setByRect: function (t) {
            this.x = t.x || 0,
                this.y = t.y || 0,
                this.width = t.width || 0,
                this.height = t.height || 0
        },
        set: function (t, i, e, n) {
            this.x = t || 0,
                this.y = i || 0,
                this.width = e || 0,
                this.height = n || 0
        },
        offset: function (t, i) {
            this.x += t,
                this.y += i
        },
        contains: function (t, i) {
            return t instanceof io ? hi(this.x, this.y, this.width, this.height, t.x, t.y, t.width, t.height) : t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this.height
        },
        intersectsPoint: function (t, i, e) {
            return this.width <= 0 && this.height <= 0 ? !1 : e ? this.intersectsRect(t - e, i - e, 2 * e, 2 * e) : t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this.height
        },
        intersectsRect: function (t, i, e, n) {
            return si(this.x, this.y, this.width, this.height, t, i, e, n)
        },
        intersects: function (t, i) {
            return L(t.width) ? this.intersectsRect(t.x, t.y, t.width, t.height) : this.intersectsPoint(t, i)
        },
        intersection: function (t, i, e, n) {
            var r = this.x,
                s = this.y,
                o = r;
            o += this.width;
            var h = s;
            h += this.height;
            var a = t;
            a += e;
            var l = i;
            return l += n,
            t > r && (r = t),
            i > s && (s = i),
            o > a && (o = a),
            h > l && (h = l),
                o -= r,
                h -= s,
                0 > o || 0 > h ? null : new io(r, s, o, h)
        },
        addPoint: function (t) {
            this.add(t.x, t.y)
        },
        add: function (t, i) {
            if (L(t.width))
                return this.addRect(t.x, t.y, t.width, t.height);
            if (L(t.x) && (i = t.y, t = t.x), this.width < 0 || this.height < 0)
                return this.x = t, this.y = i, void (this.width = this.height = 0);
            var e = this.x,
                n = this.y,
                r = this.width,
                s = this.height;
            r += e,
                s += n,
            e > t && (e = t),
            n > i && (n = i),
            t > r && (r = t),
            i > s && (s = i),
                r -= e,
                s -= n,
            r > Number.MAX_VALUE && (r = Number.MAX_VALUE),
            s > Number.MAX_VALUE && (s = Number.MAX_VALUE),
                this.set(e, n, r, s)
        },
        addRect: function (t, i, e, n) {
            var r = this.width,
                s = this.height;
            (0 > r || 0 > s) && this.set(t, i, e, n);
            var o = e,
                h = n;
            if (!(0 > o || 0 > h)) {
                var a = this.x,
                    l = this.y;
                r += a,
                    s += l;
                var _ = t,
                    u = i;
                o += _,
                    h += u,
                a > _ && (a = _),
                l > u && (l = u),
                o > r && (r = o),
                h > s && (s = h),
                    r -= a,
                    s -= l,
                r > Number.MAX_VALUE && (r = Number.MAX_VALUE),
                s > Number.MAX_VALUE && (s = Number.MAX_VALUE),
                    this.set(a, l, r, s)
            }
        },
        shrink: function (t, i, e, n) {
            return L(t) ? 1 == arguments.length ? n = i = e = t || 0 : 2 == arguments.length ? (e = t || 0, n = i || 0) : (t = t || 0, i = i || 0, e = e || 0, n = n || 0) : (i = t.left || 0, e = t.bottom || 0, n = t.right || 0, t = t.top || 0),
                this.x += i,
                this.y += t,
                this.width -= i + n,
                this.height -= t + e,
                this
        },
        grow: function (t, i, e, n) {
            return L(t) ? 1 == arguments.length ? n = i = e = t || 0 : 2 == arguments.length ? (e = t || 0, n = i || 0) : (t = t || 0, i = i || 0, e = e || 0, n = n || 0) : (i = t.left || 0, e = t.bottom || 0, n = t.right || 0, t = t.top || 0),
                this.x -= i,
                this.y -= t,
                this.width += i + n,
                this.height += t + e,
                this
        },
        isEmpty: function () {
            return this.width <= 0 && this.height <= 0
        },
        toString: function () {
            return this.x + " , " + this.y + " , " + this.width + " , " + this.height
        },
        union: function (t) {
            var i = this.width,
                e = this.height;
            if (0 > i || 0 > e)
                return new io(t.x, t.y, t.width, t.height);
            var n = t.width,
                r = t.height;
            if (0 > n || 0 > r)
                return new io(this.x, this.y, this.width, this.height);
            var s = this.x,
                o = this.y;
            i += s,
                e += o;
            var h = t.x,
                a = t.y;
            return n += h,
                r += a,
            s > h && (s = h),
            o > a && (o = a),
            n > i && (i = n),
            r > e && (e = r),
                i -= s,
                e -= o,
            i > Number.MAX_VALUE && (i = Number.MAX_VALUE),
            e > Number.MAX_VALUE && (e = Number.MAX_VALUE),
                new io(s, o, i, e)
        },
        clear: function () {
            this.set(0, 0, -1, -1)
        },
        equals: function (t) {
            return this.x == t.x && this.y == t.y && this.width == t.width && this.height == t.height
        },
        clone: function (t, i) {
            return new io(this.x + (t || 0), this.y + (i || 0), this.width, this.height)
        },
        getIntersectionPoint: function (t, i, e, n) {
            return ri(this, t, i, e, n)
        }
    },
        k(io, to),
        Z(io.prototype, {
            left: {
                get: function () {
                    return this.x
                }
            },
            top: {
                get: function () {
                    return this.y
                }
            },
            bottom: {
                get: function () {
                    return this.y + this.height
                }
            },
            right: {
                get: function () {
                    return this.x + this.width
                }
            },
            cx: {
                get: function () {
                    return this.x + this.width / 2
                }
            },
            cy: {
                get: function () {
                    return this.y + this.height / 2
                }
            },
            center: {
                get: function () {
                    return new Zs(this.cx, this.cy)
                }
            }
        });
    var eo = function (t, i, e, n) {
        1 == arguments.length ? i = e = n = t : 2 == arguments.length && (e = t, n = i),
            this.set(t, i, e, n)
    };
    eo.prototype = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        set: function (t, i, e, n) {
            this.top = t || 0,
                this.left = i || 0,
                this.bottom = e || 0,
                this.right = n || 0
        },
        clone: function () {
            return new eo(this.top, this.left, this.bottom, this.right)
        },
        equals: function (t) {
            return t && this.top == t.top && this.bottom == t.bottom && this.left == t.left && this.right == t.right
        }
    };
    var no = function (t, i) {
        this.horizontalPosition = t,
            this.verticalPosition = i
    };
    no.prototype = {
        verticalPosition: !1,
        horizontalPosition: !1,
        toString: function () {
            return (this.horizontalPosition || "") + (this.verticalPosition || "")
        }
    },
        K(no.prototype, "sortName", {
            get: function () {
                return (this.horizontalPosition || "") + (this.verticalPosition || "")
            }
        });
    var ro = "l",
        so = "c",
        oo = "r",
        ho = "t",
        ao = "m",
        lo = "b";
    no.LEFT_TOP = new no(ro, ho),
        no.LEFT_MIDDLE = new no(ro, ao),
        no.LEFT_BOTTOM = new no(ro, lo),
        no.CENTER_TOP = new no(so, ho),
        no.CENTER_MIDDLE = new no(so, ao),
        no.CENTER_BOTTOM = new no(so, lo),
        no.RIGHT_TOP = new no(oo, ho),
        no.RIGHT_MIDDLE = new no(oo, ao),
        no.RIGHT_BOTTOM = new no(oo, lo);
    var _o = [no.LEFT_TOP, no.LEFT_MIDDLE, no.LEFT_BOTTOM, no.CENTER_TOP, no.CENTER_MIDDLE, no.CENTER_BOTTOM, no.RIGHT_TOP, no.RIGHT_MIDDLE, no.RIGHT_BOTTOM];
    K(no, "random", {
        get: function () {
            return _o[P(_o.length)]
        }
    });
    var uo = function (t, i, e, n, r) {
        this.set(t, i, e, n),
            this.radius = r
    };
    uo.prototype = {
        radius: 0,
        classify: function (t, i, e, n) {
            return i > t ? 0 : i + n > t ? 1 : e - n > t ? 2 : e > t ? 3 : 4
        },
        intersectsRect: function (t, i, e, n) {
            if (B(this, uo, "intersectsRect", arguments) === !1)
                return !1;
            var r = this.x,
                s = this.y,
                o = r + this.width,
                h = s + this.height,
                a = 2 * radius,
                l = 2 * radius,
                _ = Math.min(this.width, Math.abs(a)) / 2,
                u = Math.min(this.height, Math.abs(l)) / 2,
                d = this.classify(t, r, o, _),
                f = this.classify(t + e, r, o, _),
                c = this.classify(i, s, h, u),
                v = this.classify(i + n, s, h, u);
            return 2 == d || 2 == f || 2 == c || 2 == v ? !0 : 2 > d && f > 2 || 2 > c && v > 2 ? !0 : (t = 1 == f ? t = t + e - (r + _) : t -= o - _, i = 1 == v ? i = i + n - (s + u) : i -= h - u, t /= _, i /= u, 1 >= t * t + i * i)
        },
        intersectsPoint: function (t, i) {
            if (B(this, uo, "intersectsPoint", arguments) === !1)
                return !1;
            var e = this.x,
                n = this.y,
                r = e + this.width,
                s = n + this.height;
            if (e > t || n > i || t >= r || i >= s)
                return !1;
            var o = 2 * radius,
                h = 2 * radius,
                a = Math.min(this.width, Math.abs(o)) / 2,
                l = Math.min(this.height, Math.abs(h)) / 2;
            return t >= (e += a) && t < (e = r - a) ? !0 : i >= (n += l) && i < (n = s - l) ? !0 : (t = (t - e) / a, i = (i - n) / l, 1 >= t * t + i * i)
        },
        clone: function () {
            return new uo(this.x, this.y, this.width, this.height, this.radius)
        }
    },
        k(uo, io);
    var fo = function (t, i, e, n) {
        this.source = t,
            this.type = i,
            this.kind = e,
            this.value = n
    };
    fo.prototype = {
        source: null,
        type: null,
        kind: null,
        value: null,
        toString: function () {
            return "source: " + this.source + ", type: " + this.type + ", kind: " + this.kind
        }
    };
    var co = function (t, i, e, n, r) {
        this.source = t,
            this.kind = i,
            this.oldValue = n,
            this.value = e,
            this.propertyType = r
    };
    co.prototype = {
        type: "property.change",
        propertyType: null,
        toString: function () {
            return "source: " + this.source + ", type: " + this.type + ", propertyName: " + this.kind + ", oldValue: " + this.oldValue + ", value: " + this.value
        }
    },
        k(co, fo),
        K(co.prototype, "propertyName", {
            get: function () {
                return this.kind
            },
            set: function (t) {
                this.kind = t
            }
        });
    var vo = function (t, i, e) {
        this.source = t,
            this.oldValue = t.parent,
            this.value = i,
            this.newIndex = e,
        this.oldValue && (this.oldIndex = this.oldValue.getChildIndex(t))
    };
    vo.prototype = {
        kind: "parent"
    },
        k(vo, co);
    var go = function (t, i) {
        this.source = t,
            this.value = i
    };
    go.prototype.kind = "child.add",
        k(go, co);
    var Eo = function (t, i) {
        this.source = t,
            this.value = i
    };
    Eo.prototype.kind = "child.remove",
        k(Eo, co);
    var mo = function (t, i, e, n) {
        this.source = i,
            this.oldValue = e,
            this.value = n,
            this.parent = t,
            this.child = i,
            this.oldIndex = e,
            this.newIndex = n
    };
    mo.prototype.kind = "child.index",
        k(mo, co);
    var po = function () {
    };
    po.prototype = {
        listener: null,
        beforeEvent: function (t) {
            return null != this.listener && this.listener.beforeEvent ? this.listener.beforeEvent(t) : !0
        },
        onEvent: function (t) {
            null != this.listener && this.listener.onEvent && this.listener.onEvent(t)
        }
    };
    var yo = function () {
            M(this, yo, arguments),
                this.events = {},
                this.listeners = []
        },
        To = function (t, i) {
            this.listener = t,
                this.scope = i,
                t instanceof Function ? this.onEvent = t : (this.onEvent = t.onEvent, this.beforeEvent = t.beforeEvent),
                this.equals = function (t) {
                    return t && this.listener == t.listener && this.scope == t.scope
                }
        };
    To.prototype = {
        equals: function (t) {
            return t && this.listener == t.listener && this.scope == t.scope
        },
        destroy: function () {
            delete this.scope,
                delete this.listener
        }
    },
        yo.prototype = {
            listeners: null,
            _mxr: function () {
                return this.listeners && this.listeners.length > 0
            },
            _7s: function (t, i) {
                return t instanceof yo ? t : new To(t, i)
            },
            _9l: function (t, i) {
                if (t instanceof yo)
                    return this.listeners.indexOf(t);
                for (var e = this.listeners, n = 0, r = e.length; r > n; n++) {
                    var s = e[n];
                    if (s.listener == t && s.scope == i)
                        return n
                }
                return -1
            },
            contains: function (t, i) {
                return this._9l(t, i) >= 0
            },
            addListener: function (t, i) {
                return this.contains(t, i) ? !1 : void this.listeners.push(this._7s(t, i))
            },
            removeListener: function (t, i, e) {
                var n = this._9l(t, i);
                if (n >= 0) {
                    var r = this.listeners.splice(n, 1)[0];
                    e || $(r)
                }
            },
            on: function (t, i) {
                this.addListener(t, i)
            },
            un: function (t, i, e) {
                this.removeListener(t, i, e)
            },
            onEvent: function (t) {
                return this.listeners ? void c(this.listeners, function (i) {
                    i.onEvent && (i.scope ? i.onEvent.call(i.scope, t) : i.onEvent(t))
                }, this) : !1
            },
            beforeEvent: function (t) {
                return this.listeners ? c(this.listeners, function (i) {
                    return i.beforeEvent ? i.scope ? i.beforeEvent.call(i.scope, t) : i.beforeEvent(t) : !0
                }, this) : !0
            },
            _du: function (t) {
                return this.beforeEvent(t) === !1 ? !1 : (this.onEvent(t), !0)
            },
            clear: function () {
                this.listeners = []
            },
            destroy: function () {
                this.clear()
            }
        },
        k(yo, po);
    var wo = {
            onEvent: function () {
            },
            beforeEvent: function () {
            }
        },
        Oo = function (t, i, e, n, r) {
            this.source = t,
                this.type = "list",
                this.kind = i,
                this.data = e,
                this.index = n,
                this.oldIndex = r
        };
    Oo.prototype = {
        index: -1,
        oldIndex: -1,
        toString: function () {
            return "source: " + this.source + ", type: " + this.type + ", kind: " + this.kind + ", data: " + this.data + ", index: " + this.index + ", oldIndex: " + this.oldIndex
        }
    },
        k(Oo, fo),
        Oo.KIND_ADD = "add",
        Oo.KIND_REMOVE = "remove",
        Oo.KIND_CLEAR = "clear",
        Oo.KIND_INDEX_CHANGE = "index.change";
    var Ao = function () {
        this.id = ++Ls,
            this._mz3 = {}
    };
    Ao.prototype = {
        _mz3: null,
        id: null,
        get: function (t) {
            return this._mz3[t]
        },
        set: function (t, i) {
            var e = this.get(t);
            if (e === i)
                return !1;
            var n = new co(this, t, i, e);
            return n.propertyType = Jo.PROPERTY_TYPE_CLIENT,
                this._mx8(t, i, n, this._mz3)
        },
        _mx8: function (t, i, n, r) {
            return this.beforeEvent(n) === !1 ? !1 : (r || (r = this._mz3), i === e ? delete r[t] : r[t] = i, this.onEvent(n), !0)
        },
        remove: function (t) {
            this.set(t, null)
        },
        valueOf: function () {
            return this.id
        },
        toString: function () {
            return this.id
        },
        _dy: function (t, i) {
            if (i === e && (i = -1), this == t || t == this._jk)
                return !1;
            if (t && this == t._jk && !t._dy(null))
                return !1;
            var n = new vo(this, t, i);
            if (!this.beforeEvent(n))
                return !1;
            var r,
                s,
                o = this._jk;
            return t && (r = new go(t, this), !t.beforeEvent(r)) ? !1 : null == o || (s = new Eo(o, this), o.beforeEvent(s)) ? (this._jk = t, null != t && li(t, this, i), null != o && _i(o, this), this.onEvent(n), null != t && t.onEvent(r), null != o && o.onEvent(s), this.onParentChanged(o, t), !0) : !1
        },
        addChild: function (t, i) {
            var e = t._dy(this, i);
            return e && this.onChildAdd(t, i),
                e
        },
        onChildAdd: function () {
        },
        removeChild: function (t) {
            if (!this._fe || !this._fe.contains(t))
                return !1;
            var i = t._dy(null);
            return this.onChildRemove(t),
                i
        },
        onChildRemove: function () {
        },
        toChildren: function () {
            return this._fe ? this._fe.toDatas() : null
        },
        clearChildren: function () {
            if (this._fe && this._fe.length) {
                var t = this.toChildren();
                c(t, function (t) {
                    t._dy(null)
                }, this),
                    this.onChildrenClear(t)
            }
        },
        forEachChild: function (t, i) {
            return this.hasChildren() ? this._fe.forEach(t, i) : !1
        },
        onChildrenClear: function () {
        },
        getChildIndex: function (t) {
            return this._fe && this._fe.length ? this._fe.indexOf(t) : -1
        },
        setChildIndex: function (t, i) {
            if (!this._fe || !this._fe.length)
                return !1;
            var e = this._fe.indexOf(t);
            if (0 > e || e == i)
                return !1;
            var n = new mo(this, t, e, i);
            return this.beforeEvent(n) === !1 ? !1 : (this._fe.remove(t) && this._fe.add(t, i), this.onEvent(n), !0)
        },
        hasChildren: function () {
            return this._fe && this._fe.length > 0
        },
        getChildAt: function (t) {
            return null == this._fe ? null : this._fe._jz[t]
        },
        isDescendantOf: function (t) {
            if (!t.hasChildren())
                return !1;
            for (var i = this.parent; null != i;) {
                if (t == i)
                    return !0;
                i = i.parent
            }
            return !1
        },
        onParentChanged: function () {
        },
        firePropertyChangeEvent: function (t, i, e, n) {
            this.onEvent(new co(this, t, i, e, n))
        }
    },
        k(Ao, po),
        Z(Ao.prototype, {
            childrenCount: {
                get: function () {
                    return this._fe ? this._fe.length : 0
                }
            },
            children: {
                get: function () {
                    return this._fe || (this._fe = new Xs),
                        this._fe
                }
            },
            parent: {
                get: function () {
                    return this._jk
                },
                set: function (t) {
                    this._dy(t, -1)
                }
            },
            properties: {
                get: function () {
                    return this._mz3
                },
                set: function (t) {
                    this._mz3 != t && (this._mz3 = t)
                }
            }
        });
    var xo = function () {
        this._jz = [],
            this._lw = {},
            this._1l = new yo
    };
    xo.prototype = {
        beforeEvent: function (t) {
            return null != this._1l && this._1l.beforeEvent ? this._1l.beforeEvent(t) : !0
        },
        onEvent: function (t) {
            return this._1l instanceof Function ? void this._1l(t) : void (null != this._1l && this._1l.onEvent && this._1l.onEvent(t))
        },
        _1l: null,
        setIndex: function (t, i) {
            if (!this.contains(t))
                throw new Error("'" + t.getId() + "' not exist");
            var e = this.indexOf(t);
            if (e == i)
                return !1;
            var n = new Oo(this, Oo.KIND_INDEX_CHANGE, t, i, e);
            return this.beforeEvent(n) === !1 ? !1 : (this._jz.remove(t) >= 0 && this._jz.add(i, t), this.onEvent(n), !0)
        },
        _gc: function (t, i) {
            if (0 == t.length)
                return !1;
            var n = !1,
                r = i >= 0,
                s = new Oo(this, Oo.KIND_ADD, t, i);
            if (this.beforeEvent(s) === !1)
                return !1;
            var o = [];
            t = t._jz || t;
            for (var h = 0, a = t.length; a > h; h++) {
                var l = t[h];
                null !== l && l !== e && this._ku(l, i, !0) && (o.push(l), n = !0, r && i++)
            }
            return s.data = o,
                this.onEvent(s),
                n
        },
        _ku: function (t, i, e) {
            if (this.accept(t) === !1)
                return !1;
            if (e)
                return B(this, xo, "_ku", arguments);
            var n = new Oo(this, Oo.KIND_ADD, t, i);
            return this.beforeEvent(n) === !1 ? !1 : B(this, xo, "_ku", arguments) ? (this._l0(t, n), t) : !1
        },
        _l0: function (t, i) {
            this.onEvent(i)
        },
        _mxp: function (t) {
            if (0 == t.length)
                return !1;
            var i = new Oo(this, Oo.KIND_REMOVE, t);
            if (this.beforeEvent(i) === !1)
                return !1;
            var n = [],
                r = !1;
            t = t._jz || t;
            for (var s = 0, o = t.length; o > s; s++) {
                var h = t[s];
                if (null !== h && h !== e) {
                    var a = h.id || h;
                    h.id === e && (h = null),
                    this._fm(a, h, !0) && (n.push(h), r = !0)
                }
            }
            return i.data = n,
                this.onEvent(i),
                r
        },
        _fm: function (t, i, e) {
            if (e)
                return B(this, xo, "_fm", arguments);
            var n = new Oo(this, Oo.KIND_REMOVE, i);
            return this.beforeEvent(n) === !1 ? !1 : B(this, xo, "_fm", arguments) ? (this.onEvent(n), !0) : !1
        },
        clear: function () {
            if (this.isEmpty())
                return !1;
            var t = new Oo(this, Oo.KIND_CLEAR, this.toDatas());
            return this.beforeEvent(t) === !1 ? !1 : B(this, xo, "clear") ? (this.onEvent(t), !0) : !1
        },
        accept: function (t) {
            return this.filter && this.filter(t) === !1 ? !1 : !0
        }
    },
        k(xo, Xs),
        K(xo.prototype, "listChangeDispatcher", {
            get: function () {
                return this._1l
            }
        });
    var Lo = function () {
        M(this, Lo, arguments),
            this.selectionChangeDispatcher = new yo,
            this._selectionModel = new bo(this),
            this._selectionModel._1l = this.selectionChangeDispatcher,
            this.dataChangeDispatcher = new yo,
            this.dataChangeDispatcher.addListener({
                beforeEvent: this.beforeDataPropertyChange,
                onEvent: this.onDataPropertyChanged
            }, this),
            this.parentChangeDispatcher = new yo,
            this.childIndexChangeDispatcher = new yo,
            this.$roots = new Xs;
        var t = this;
        this.$roots.setIndex = function (i, e) {
            if (!t.$roots.contains(i))
                throw new Error("'" + i.id + "' not exist");
            var n = t.$roots._jz.indexOf(i);
            if (n == e)
                return !1;
            t.$roots._jz.splice(n, 1),
                t.$roots._jz.splice(e, 0, i),
                t._mzzIndexFlag = !0;
            var r = new mo(t, i, n, e);
            return t._2c(r),
                !0
        }
    };
    Lo.prototype = {
        selectionModel: null,
        selectionChangeDispatcher: null,
        dataChangeDispatcher: null,
        parentChangeDispatcher: null,
        roots: null,
        _l0: function (t, i) {
            t.listener = this.dataChangeDispatcher,
            t.parent || this.$roots.add(t),
                this.onEvent(i)
        },
        _fm: function (t, i) {
            if (B(this, Lo, "_fm", arguments)) {
                if (i instanceof Vh)
                    i.disconnect();
                else if (i instanceof Kh) {
                    var e = i.getEdges();
                    this.remove(e)
                }
                var n = i.parent;
                return null == n ? this.$roots.remove(i) : (n.removeChild(i), n.__6f = !0),
                i.hasChildren() && this.remove(i.toChildren()),
                    i.listener = null,
                    !0
            }
            return !1
        },
        _61: function (t) {
            var i = t.source;
            this.contains(i) && (null == i.parent ? this.$roots.add(i) : null == t.oldValue && this.$roots.remove(i), this.parentChangeDispatcher.onEvent(t))
        },
        _2c: function (t) {
            this.childIndexChangeDispatcher.onEvent(t)
        },
        beforeDataPropertyChange: function (t) {
            return t instanceof vo ? this.parentChangeDispatcher.beforeEvent(t) : !0
        },
        onDataPropertyChanged: function (t) {
            return t instanceof vo ? (this._mzzIndexFlag = !0, t.source._mzzIndexFlag = !0, void this._61(t)) : void (t instanceof mo && (this._mzzIndexFlag = !0, t.source._mzzIndexFlag = !0, this._2c(t)))
        },
        toRoots: function () {
            return this.$roots.toDatas()
        },
        _gh: function (t) {
            var i,
                e = t._jk;
            i = e ? e._fe : this.$roots;
            var n = i.indexOf(t);
            if (0 > n)
                throw new Error("data '" + t + "' not exist in the box");
            return 0 == n ? e : i.getByIndex(n - 1)
        },
        _gi: function (t) {
            var i,
                e = t._jk;
            i = e ? e._fe : this.$roots;
            var n = i.indexOf(t);
            if (0 > n)
                throw new Error("data '" + t + "' not exist in the box");
            return n == i.length - 1 ? e ? this._gi(e) : null : i.getByIndex(n + 1)
        },
        forEachByDepthFirst: function (t, i, e) {
            return this.$roots.length ? s(this.$roots, t, i, e) : !1
        },
        forEachByDepthFirstReverse: function (t, i, e) {
            return this.$roots.length ? a(this.$roots, t, i, e) : !1
        },
        forEachByBreadthFirst: function (t, i) {
            return this.$roots.length ? u(this.$roots, t, i) : !1
        },
        forEachByBreadthFirstReverse: function (t, i) {
            return this.$roots.length ? d(this.$roots, t, i) : !1
        },
        clear: function () {
            return B(this, Lo, "clear") ? (this.$roots.clear(), this.selectionModel.clear(), !0) : !1
        }
    },
        k(Lo, xo),
        Z(Lo.prototype, {
            selectionModel: {
                get: function () {
                    return this._selectionModel
                }
            },
            roots: {
                get: function () {
                    return this.$roots
                }
            }
        });
    var bo = function (t) {
        M(this, bo),
            this.box = t,
            this._mxoxChangeListener = {
                onEvent: function (t) {
                    Oo.KIND_REMOVE == t.kind ? null != t.data ? this.remove(t.data) : null != t.datas && this.remove(t.datas) : Oo.KIND_CLEAR == t.kind && this.clear()
                }
            },
            this.box.listChangeDispatcher.addListener(this._mxoxChangeListener, this)
    };
    bo.prototype = {
        box: null,
        isSelected: function (t) {
            return this.containsById(t.id || t)
        },
        select: function (t) {
            return this.add(t)
        },
        unselect: function (t) {
            return this.remove(t)
        },
        reverseSelect: function (t) {
            return this.contains(t) ? this.remove(t) : this.add(t)
        },
        accept: function (t) {
            return this.box.contains(t)
        }
    },
        k(bo, xo);
    var So = null,
        Io = null,
        Ro = null,
        Co = function () {
            if (!i.createElement)
                return function (t) {
                    return t
                };
            var t = i.createElement("div"),
                n = t.style,
                r = {};
            return function (t) {
                if (r[t])
                    return r[t];
                var i = ui(t);
                return n[i] !== e || Ro && n[i = ui(Ro + i)] !== e ? (r[t] = i, i) : t
            }
        }
        (),
        Do = {};
    !function () {
        if (!i.head)
            return !1;
        for (var n = i.head, r = "Webkit Moz O ms Khtml".split(" "), s = 0; s < r.length; s++)
            if (n.style[r[s] + "Transform"] !== e) {
                Ro = "-" + r[s].toLowerCase() + "-";
                break
            }
        var o = i.createElement("style");
        t.createPopup || o.appendChild(i.createTextNode("")),
        o.classList && (So = !0),
            o.type = "text/css",
            o.id = "qunee-styles",
            n.appendChild(o),
            Io = o.sheet;
        var h,
            a;
        for (var l in Do) {
            var _ = Do[l];
            h = l,
                a = "";
            for (var u in _)
                a += Co(u) + ":" + _[u] + ";\n";
            gi(h, a)
        }
    }
    ();
    var Po = function (t, i, e, n, r) {
            if (r) {
                var s = function (t) {
                    s.handle.call(s.scope, t)
                };
                return s.scope = r,
                    s.handle = e,
                    t.addEventListener(i, s, n),
                    s
            }
            return t.addEventListener(i, e, n),
                e
        },
        No = function (t, i, e) {
            t.removeEventListener(i, e)
        },
        R = function (t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        },
        C = function (t) {
            t.stopPropagation ? t.stopPropagation() : t.cancelBubble || (t.cancelBubble = !0)
        },
        D = function (t) {
            R(t),
                C(t)
        };
    Ws.DOUBLE_CLICK_INTERVAL_TIME = Fs ? 500 : 300,
        Ws.LONG_PRESS_INTERVAL = Fs ? 1500 : 1e3;
    var zo,
        ko = "onmousewheel" in t ? "mousewheel" : "DOMMouseScroll";
    zo = ko + ",mousedown,mouseup,click,mousemove,keydown",
    Fs && (zo += ",touchstart,touchmove,touchend,touchcancel"),
        zo = zo.split(","),
        bi.prototype = {
            _mxl: function () {
                Mo._mzurrentInteractionSupport == this && (delete Mo._dragging, delete Mo._mzurrentInteractionSupport),
                    this._1s(),
                    delete this._90,
                this._mzj && (delete this._mzj.getData, delete this._mzj.getUI, delete this._mzj)
            },
            _l2: null,
            _ij: function () {
                var t = this._lt;
                t && Li.call(this, t)
            },
            destroy: function () {
                this._ij()
            },
            _mzj: null,
            _1s: function () {
                this.__longPressTimer && (clearTimeout(this.__longPressTimer), this.__longPressTimer = null)
            },
            _ea: function () {
                this.__mzancelClick = !0,
                    this._1s(),
                    this._ih(this._mzj, "startdrag"),
                    this._mzh.clear()
            },
            _mzh: null,
            _6s: function (t) {
                var i = this._90;
                this._90 = Ti(t),
                    this._mzh.add(i, this._90, t)
            },
            _kd: function (t) {
                this._6s(t),
                    this._ih(t, "ondrag"),
                t.touches && t.touches.length > 1 && this._ih(t, "onpinch")
            },
            _ii: function (t) {
                Fs || this._6s(t);
                var i = this._mzh.getCurrentSpeed();
                i && (t.vx = i.x, t.vy = i.y),
                    this._ih(t, "enddrag"),
                    this._mzh.clear()
            },
            _e3: function (t) {
                this._mzj && (this._1s(), this._ih(t, "onrelease"), this._mzj = null, this._90 = null)
            },
            _ih: function (t, i) {
                this._listener && this._listener[i] instanceof Function && this._listener[i].call(this._listener, t, this._l2 || this._lt)
            }
        };
    var Mo = function (t) {
        this._kz = t,
            M(this, Mo, [t.canvasPanel])
    };
    Mo._mzurrentInteractionSupport = null,
        Mo.prototype = {
            _4g: function (t) {
                this._4e(function (i) {
                    i.onElementRemoved instanceof Function && i.onElementRemoved(t, this._kz)
                })
            },
            _7z: function () {
                this._4e(function (t) {
                    t.onClear instanceof Function && t.onClear(this._kz)
                })
            },
            _ij: function () {
                this._25 && this._2q(this._25),
                this._$p && this._2q(this._$p),
                    this._mxl()
            },
            _kz: null,
            _25: null,
            _$p: null,
            _6v: function (t) {
                return this._25 == t ? !1 : (this._25 && this._25.length && this._2q(this._25), void (this._25 = t))
            },
            _9: function (t) {
                this._$p || (this._$p = []),
                    this._$p.push(t)
            },
            _5: function (t) {
                this._$p && 0 != this._$p.length && p(this._$p, t)
            },
            _ih: function (t, i, e) {
                this._kz[i] instanceof Function && this._kz[i].call(this._kz, t, e),
                this._25 && this._ga(t, i, this._25, e),
                this._$p && this._ga(t, i, this._$p, e)
            },
            _4e: function (t) {
                this._25 && c(this._25, t, this),
                this._$p && c(this._$p, t, this)
            },
            _ga: function (t, i, e, n) {
                if (!I(e))
                    return void this._9n(t, i, e, n);
                for (var r = 0; r < e.length; r++) {
                    var s = e[r];
                    this._9n(t, i, s, n)
                }
            },
            _9n: function (t, i, e, n) {
                var r = e[i];
                r && r.call(e, t, this._kz, n)
            },
            _3c: function (t) {
                t.destroy instanceof Function && t.destroy.call(t, this._kz)
            },
            _2q: function (t) {
                if (!I(t))
                    return void this._3c(t);
                for (var i = 0; i < t.length; i++) {
                    var e = t[i];
                    e && this._3c(e)
                }
            }
        },
        k(Mo, bi),
        Ii.prototype = {
            limitCount: 10,
            points: null,
            add: function (t, i, e) {
                var n = i.timeStamp - t.timeStamp || 1;
                e.interval = n;
                var r,
                    s;
                if (!e.touches)
                    return r = i.x - t.x, s = i.y - t.y, e.dx = r, e.dy = s, void this._ku(r, s, n);
                var o = e.touches.length;
                if (1 == o)
                    r = e.touches[0].clientX - t.touches[0].clientX, s = e.touches[0].clientY - t.touches[0].clientY;
                else {
                    for (var h, a, l, _ = [], u = [], d = 0, f = 0, c = 0, v = 0, g = 0, E = 0, m = 0, o = t.touches.length; o > m; m++) {
                        h = t.touches[m];
                        var p = h.clientX,
                            y = h.clientY;
                        d += p,
                            f += y,
                        m && (g = Math.max(g, Math.sqrt((p - a) * (p - a) + (y - l) * (y - l)))),
                            a = p,
                            l = y,
                            _.push({
                                x: p,
                                y: y
                            })
                    }
                    d /= o,
                        f /= o;
                    for (var m = 0, o = e.touches.length; o > m; m++) {
                        h = e.touches[m];
                        var p = h.clientX,
                            y = h.clientY;
                        c += p,
                            v += y,
                        m && (E = Math.max(E, Math.sqrt((p - a) * (p - a) + (y - l) * (y - l)))),
                            a = p,
                            l = y,
                            u.push({
                                x: p,
                                y: y
                            })
                    }
                    if (c /= o, v /= o, r = c - d, s = v - f, g && E) {
                        var T = E / g;
                        e.scale && t.scale && (T = e.scale / t.scale),
                            e.center = {
                                x: c,
                                y: v,
                                clientX: c,
                                clientY: v
                            },
                            e.dScale = T,
                            e.prev = t
                    }
                }
                e.dx = r,
                    e.dy = s,
                    this._ku(r, s, n)
            },
            _ku: function (t, i, e) {
                var n = {
                    interval: e,
                    dx: t,
                    dy: i
                };
                this.points.splice(0, 0, n),
                this.points.length > this.limitCount && this.points.pop()
            },
            getCurrentSpeed: function () {
                if (!this.points.length)
                    return null;
                for (var t = 0, i = 0, e = 0, n = 0, r = this.points.length; r > n; n++) {
                    var s = this.points[n],
                        o = s.interval;
                    if (o > 300)
                        break;
                    if (t += s.interval, i += s.dx, e += s.dy, t > 500)
                        break
                }
                return 0 == t || 0 == i && 0 == e ? null : {
                    x: i / t,
                    y: e / t
                }
            },
            clear: function () {
                this.points = []
            }
        };
    var Bo,
        Go,
        $o,
        Fo;
    Ds ? (Bo = "-webkit-zoom-in", Go = "-webkit-zoom-out", $o = "-webkit-grab", Fo = "-webkit-grabbing") : Ps ? (Bo = "-moz-zoom-in", Go = "-moz-zoom-out", $o = "-moz-grab", Fo = "-moz-grabbing") : (Bo = "crosshair", Go = "crosshair", $o = "default", Fo = "move");
    var jo = "url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFVJREFUeNpi/P//PwMlgBGfAYyMIOn/jGQZANIMoskyAKYZGeAyiGgX4PIOSWGAzRBGUmMBw1CqGUBMlA1yA4gxhKhYwBnfpKQDqqREquRGYgBAgAEAD8h/4adTIzwAAAAASUVORK5CYII=) 8 8,crosshair",
        Yo = Math.PI,
        Ho = Math.pow,
        Uo = Math.sin,
        Wo = 1.70158,
        qo = {
            swing: function (t) {
                return -Math.cos(t * Yo) / 2 + .5
            },
            easeNone: function (t) {
                return t
            },
            easeIn: function (t) {
                return t * t
            },
            easeOut: function (t) {
                return (2 - t) * t
            },
            easeBoth: function (t) {
                return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - --t * (t - 2))
            },
            easeInStrong: function (t) {
                return t * t * t * t
            },
            easeOutStrong: function (t) {
                return 1 - --t * t * t * t
            },
            easeBothStrong: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t)
            },
            elasticIn: function (t) {
                var i = .3,
                    e = i / 4;
                return 0 === t || 1 === t ? t : -(Ho(2, 10 * (t -= 1)) * Uo(2 * (t - e) * Yo / i))
            },
            elasticOut: function (t) {
                var i = .3,
                    e = i / 4;
                return 0 === t || 1 === t ? t : Ho(2, -10 * t) * Uo(2 * (t - e) * Yo / i) + 1
            },
            elasticBoth: function (t) {
                var i = .45,
                    e = i / 4;
                return 0 === t || 2 === (t *= 2) ? t : 1 > t ? -.5 * Ho(2, 10 * (t -= 1)) * Uo(2 * (t - e) * Yo / i) : Ho(2, -10 * (t -= 1)) * Uo(2 * (t - e) * Yo / i) * .5 + 1
            },
            backIn: function (t) {
                return 1 === t && (t -= .001),
                t * t * ((Wo + 1) * t - Wo)
            },
            backOut: function (t) {
                return (t -= 1) * t * ((Wo + 1) * t + Wo) + 1
            },
            backBoth: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * (((Wo *= 1.525) + 1) * t - Wo) : .5 * ((t -= 2) * t * (((Wo *= 1.525) + 1) * t + Wo) + 2)
            },
            bounceIn: function (t) {
                return 1 - qo.bounceOut(1 - t)
            },
            bounceOut: function (t) {
                var i,
                    e = 7.5625;
                return i = 1 / 2.75 > t ? e * t * t : 2 / 2.75 > t ? e * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? e * (t -= 2.25 / 2.75) * t + .9375 : e * (t -= 2.625 / 2.75) * t + .984375
            },
            bounceBoth: function (t) {
                return .5 > t ? .5 * qo.bounceIn(2 * t) : .5 * qo.bounceOut(2 * t - 1) + .5
            }
        },
        Xo = function (t) {
            this._j5 = t
        };
    Xo.prototype = {
        _j5: null,
        _lc: function (t) {
            var i = Date.now();
            this._lo();
            var e = this;
            this._requestID = requestAnimationFrame(function n() {
                var r = Date.now(),
                    s = r - i;
                return !s || e._j5 && e._j5(s) !== !1 ? (i = r, void (e._requestID = requestAnimationFrame(n))) : (e._lo(), void (t instanceof Function && t.call()))
            })
        },
        _lo: function () {
            return this._requestID ? (t.cancelAnimationFrame(this._requestID), void delete this._requestID) : !1
        },
        _f2: function () {
            return null != this._requestID
        }
    };
    var Vo = function (t, i, e, n) {
        this._onStep = t,
            this._l2 = i || this,
            this._3n = n,
        e && e > 0 && (this._j2 = e)
    };
    Vo.prototype = {
        _j2: 1e3,
        _3n: null,
        _f5: 0,
        _lo: function () {
            return this._f5 = 0,
                this._dd = 0,
                B(this, Vo, "_lo")
        },
        _dd: 0,
        _j5: function (t) {
            if (this._f5 += t, this._f5 >= this._j2)
                return this._onStep.call(this._l2, 1, (1 - this._dd) * this._j2, t, this._j2), !1;
            var i = this._f5 / this._j2;
            return this._3n && (i = this._3n(i)),
                this._onStep.call(this._l2, i, (i - this._dd) * this._j2, t, this._j2) === !1 ? !1 : void (this._dd = i)
        }
    },
        k(Vo, Xo);
    var Ko = function (t) {
            ei(t)
        },
        Zo = {
            version: "0.0",
            extend: k,
            doSuperConstructor: M,
            doSuper: B,
            createFunction: j,
            setClass: O,
            appendClass: A,
            removeClass: x,
            forEach: c,
            forEachReverse: g,
            isNumber: L,
            isString: b,
            isBoolean: S,
            isArray: I,
            eventPreventDefault: R,
            eventStopPropagation: C,
            stopEvent: D,
            callLater: T,
            nextFrame: w,
            forEachChild: n,
            forEachByDepthFirst: s,
            forEachByDepthFirstReverse: a,
            forEachByBreadthFirst: u,
            randomInt: P,
            randomBool: N,
            randomColor: W,
            addEventListener: Po,
            getFirstElementChildByTagName: Ks
        };
    Zo.isTouchSupport = Fs,
        Zo.isIOS = Bs,
        Zo.intersectsPoint = oi,
        Zo.containsRect = hi,
        Zo.Rect = io,
        Zo.Size = to,
        Zo.Point = Zs,
        Zo.Insets = eo,
        Zo.Event = fo,
        Zo.PropertyChangeEvent = co,
        Zo.ListEvent = Oo,
        Zo.Handler = po,
        Zo.Dispatcher = yo,
        Zo.Position = no,
        Zo.Data = Ao,
        Zo.SelectionModel = bo,
        Zo.DataModel = Lo,
        Zo.IListener = wo,
        Zo.loadURL = Di,
        Zo.loadXML = Ri,
        Zo.loadJSON = Ci,
        Zo.isMetaKey = Si,
        Zo.calculateDistance = Js,
        Zo.HashList = Xs,
        Zo.DragSupport = bi,
        Zo.alert = function (t) {
            alert(t)
        },
        Zo.prompt = function (t, i, e, n) {
            var r = prompt(t, i);
            return r != i && e ? e.call(n, r) : r
        },
        Zo.confirm = function (t, i, e) {
            var n = confirm(t);
            return n && i ? i.call(e) : n
        },
        Zo.addCSSRule = gi;
    var Jo = {
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
    Jo.LINE_CAP_TYPE_BUTT = "butt",
        Jo.LINE_CAP_TYPE_ROUND = "round",
        Jo.LINE_CAP_TYPE_SQUARE = "square",
        Jo.LINE_JOIN_TYPE_BEVEL = "bevel",
        Jo.LINE_JOIN_TYPE_ROUND = "round",
        Jo.LINE_JOIN_TYPE_MITER = "miter",
        Ws.SELECTION_TYPE = Jo.SELECTION_TYPE_SHADOW,
        Ws.SELECTION_TOLERANCE = 3,
        Ws.SELECTION_BORDER = 2,
        Ws.SELECTION_SHADOW_BLUR = 7,
        Ws.SELECTION_COLOR = V(3422561023),
        Ws.SELECTION_TYPE = Jo.SELECTION_TYPE_SHADOW,
        Ws.BORDER_RADIUS = 10,
        Ws.POINTER_WIDTH = 10,
        Ws.DOUBLE_BUFFER = e,
        Ws.ARROW_SIZE = 10,
        Ws.IMAGE_MAX_SIZE = 200,
        Ws.LINE_HEIGHT = 1.2;
    var Qo = t.devicePixelRatio || 1;
    1 > Qo && (Qo = 1);
    var th;
    Zo.createCanvas = Fi;
    var ih = function (t, i, e, n) {
        var r = t - e,
            s = i - n;
        return r * r + s * s
    };
    re.prototype = {
        equals: function (t) {
            return this.cx == t.cx && this.cy == t.cy && this.r == t.r
        }
    },
        re._mzreateCircle = function (t, i, e) {
            if (!e)
                return ee(t, i);
            var n = ih(t.x, t.y, i.x, i.y),
                r = ih(t.x, t.y, e.x, e.y),
                s = ih(e.x, e.y, i.x, i.y);
            if (n + eh >= r + s)
                return ee(t, i, 0, e);
            if (r + eh >= n + s)
                return ee(t, e, 0, i);
            if (s + eh >= n + r)
                return ee(i, e, 0, t);
            var o;
            Math.abs(e.y - i.y) < 1e-4 && (o = t, t = i, i = o),
                o = e.x * (t.y - i.y) + t.x * (i.y - e.y) + i.x * (-t.y + e.y);
            var h = (e.x * e.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - e.y)) * (i.y - e.y) + i.x * i.x * (-t.y + e.y)) / (2 * o),
                a = (i.y + e.y) / 2 - (e.x - i.x) / (e.y - i.y) * (h - (i.x + e.x) / 2);
            return new re(h, a, Js(h, a, t.x, t.y), t, i, e)
        };
    var eh = .01,
        nh = {
            _mxa: function (t, i, n, r, s) {
                var o = 0,
                    h = 0,
                    a = i._j7;
                if (n = n || 0, t.x === e) {
                    var l = t.horizontalPosition,
                        _ = t.verticalPosition,
                        u = !0;
                    switch (l) {
                        case oo:
                            u = !1;
                            break;
                        case so:
                            o += a / 2
                    }
                    switch (_) {
                        case ho:
                            h -= n / 2;
                            break;
                        case lo:
                            h += n / 2
                    }
                } else
                    o = t.x, h = t.y, Math.abs(o) > 0 && Math.abs(o) < 1 && (o *= a);
                s && null != r && (h += r.y, o += Math.abs(r.x) < 1 ? r.x * a : r.x);
                var d = de.call(i, o, h, u);
                return d ? (s || null == r || d.offset(r), d) : {
                    x: 0,
                    y: 0
                }
            },
            _ln: function (t, i) {
                var e = i.type,
                    n = i.points;
                switch (e) {
                    case Ih:
                        t.arcTo(n[0], n[1], n[2], n[3], i._r);
                        break;
                    case xh:
                        t.moveTo(n[0], n[1]);
                        break;
                    case Lh:
                        t.lineTo(n[0], n[1]);
                        break;
                    case bh:
                        t.quadraticCurveTo(n[0], n[1], n[2], n[3]);
                        break;
                    case Sh:
                        t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
                        break;
                    case Rh:
                        t.closePath()
                }
            },
            _5m: function (t, i, e, n) {
                var r = i.type;
                if (r != xh && r != Rh) {
                    var s = e.lastPoint,
                        o = i.points;
                    switch (e.type == xh && t.add(s.x, s.y), r) {
                        case Ih:
                            ve(i, s.x, s.y, o[0], o[1], o[2], o[3], o[4]),
                                t.add(o[0], o[1]),
                                t.add(i._p1x, i._p1y),
                                t.add(i._p2x, i._p2y),
                            i._mxoundaryPoint1 && t.add(i._mxoundaryPoint1.x, i._mxoundaryPoint1.y),
                            i._mxoundaryPoint2 && t.add(i._mxoundaryPoint2.x, i._mxoundaryPoint2.y);
                            break;
                        case Lh:
                            t.add(o[0], o[1]);
                            break;
                        case bh:
                            Xi([s.x, s.y].concat(o), t);
                            break;
                        case Sh:
                            Ji([s.x, s.y].concat(o), t);
                            break;
                        case Rh:
                            n && t.add(n.points[0], n.points[1])
                    }
                }
            },
            _5o: function (t, i, e) {
                var n = t.type;
                if (n == xh)
                    return 0;
                var r = i.lastPoint,
                    s = t.points;
                switch (n == Sh && 4 == s.length && (n = bh), n) {
                    case Lh:
                        return Js(s[0], s[1], r.x, r.y);
                    case Ih:
                        return t._j7;
                    case bh:
                        var o = Vi([r.x, r.y].concat(s));
                        return t._lf = o,
                            o(1);
                    case Sh:
                        var o = te([r.x, r.y].concat(s));
                        return t._lf = o,
                        o(1) || Qi([r.x, r.y].concat(s));
                    case Rh:
                        if (r && e)
                            return t.points = e.points, Js(e.points[0], e.points[1], r.x, r.y)
                }
                return 0
            }
        },
        rh = /^data:image\/(\w+);base64,/i,
        sh = /^gif/i,
        oh = /^svg/i,
        hh = 10,
        ah = 11,
        lh = 12,
        _h = 20,
        uh = 30;
    Ws.IMAGE_WIDTH = 50,
        Ws.IMAGE_HEIGHT = 30,
        Ws.MAX_CACHE_PIXELS = 1e6;
    var dh = 1,
        fh = 2,
        ch = 3;
    ye.prototype = {
        _jo: 0,
        _6f: !0,
        _ld: null,
        _js: null,
        _lq: null,
        _lm: null,
        _mwd: e,
        _mw0: e,
        _6p: function () {
            return this._jo == dh
        },
        getBounds: function (t) {
            return this._lm == uh ? this._lq.getBounds(t) : (this._6f && this._fr(), this)
        },
        validate: function () {
            this._6f && this._fr()
        },
        _fr: function () {
            if (this._6f = !1, this._lm == uh)
                return this._lq.validate(), void this.setByRect(this._lq.bounds);
            if (this._lm == _h)
                return void this._mw1();
            if (this._jo != dh)
                try {
                    this._dw()
                } catch (t) {
                    this._jo = ch,
                        Zo.error(t)
                }
        },
        _5c: function () {
            this._du(),
                this._dispatcher.clear(),
                delete this._dispatcher
        },
        _j1: function (t) {
            this._ld && this._ld.parentNode && this._ld.parentNode.removeChild(this._ld),
                this._jo = ch,
                Zo.error("Image load error - " + this._lq),
                this._pixels = null,
                this._js = null,
                this._ld = null,
            t !== !1 && this._5c()
        },
        _dw: function () {
            var t = this._lq;
            if (this._jo = dh, this._dispatcher = new yo, this._lm == lh) {
                for (var e in $h)
                    this[e] = $h[e];
                return void Je(this._lq, this, this._mzd, this._j1, this._e5)
            }
            this._ld || (this._ld = i.createElement("img"), Is && (this._ld.style.visibility = "hidden", i.body.appendChild(this._ld))),
                this._ld.src = t,
            this._ld.width && (this.width = this._ld.width, this.height = this._ld.height),
                this._ld.onload = Is ? function (t) {
                    setTimeout(this._81.bind(this, t), 100)
                }
                    .bind(this) : this._81.bind(this),
                this._ld.onerror = this._j1.bind(this)
        },
        _81: function () {
            this._jo = fh;
            var t = this._ld.width,
                i = this._ld.height;
            if (this._ld.parentNode && this._ld.parentNode.removeChild(this._ld), !t || !i)
                return void this._j1();
            this.width = t,
                this.height = i;
            var e = this._dp();
            e.width = t,
                e.height = i,
                e.g.drawImage(this._ld, 0, 0, t, i),
                this._pixels = Is && this._lm == ah ? null : be(e),
                this._5c()
        },
        _mw1: function () {
            var t = this._lq;
            if (!(t.draw instanceof Function))
                return void this._j1(!1);
            if (t.cacheable === !1 && t.width && t.height)
                return this.width = t.width, void (this.height = t.height);
            var i = t.width || Ws.IMAGE_MAX_SIZE,
                e = t.height || Ws.IMAGE_MAX_SIZE,
                n = this._dp();
            n.width = i,
                n.height = e;
            var r = n.g;
            t.draw(r);
            var s = r.getImageData(0, 0, i, e),
                o = Ie(s.data, i, e);
            this.x = o._x,
                this.y = o._y,
                this.width = o._width,
                this.height = o._height,
                n.width = this.width,
                n.height = this.height,
                r.putImageData(s, -this.x, -this.y),
                this._pixels = o
        },
        _dp: function () {
            return this._js || (this._js = Fi())
        },
        _6x: function (t, i, e, n, r, s) {
            i.save(),
                i.rect(0, 0, n, r),
                i.fillStyle = s || "#CCC",
                i.fill(),
                i.clip(),
                i.textAlign = "center",
                i.textBaseline = "middle",
                i.fillStyle = "#888";
            var o = 6 * (i.canvas.ratio || 1);
            i.font = "normal " + o + "px Verdana,helvetica,arial,sans-serif",
                i.strokeStyle = "#FFF",
                i.lineWidth = 1,
                i.strokeText(t, n / 2 + .5, r / 2 + .5),
                i.strokeStyle = "#000",
                i.strokeText(t, n / 2 - .5, r / 2 - .5),
                i.fillText(t, n / 2, r / 2),
                i.restore()
        },
        draw: function (t, i, e, n, r, s) {
            if (this.width && this.height) {
                i = i || 1,
                    n = n || 1,
                    r = r || 1;
                var o = this.width * n,
                    h = this.height * r;
                if (s && e.shadowColor && (t.shadowColor = e.shadowColor, t.shadowBlur = (e.shadowBlur || 0) * i, t.shadowOffsetX = (e.shadowOffsetX || 0) * i, t.shadowOffsetY = (e.shadowOffsetY || 0) * i), this._jo == dh)
                    return this._6x("Loading...", t, i, o, h, e.renderColor);
                if (this._jo == ch)
                    return this._6x("Error...", t, i, o, h, e.renderColor);
                if (this._lm == uh)
                    return t.scale(n, r), void this._lq.draw(t, i, e);
                var a = this._fx(i, n, r);
                return a ? ((this.x || this.y) && t.translate(this.x * n, this.y * r), t.scale(n / a.scale, r / a.scale), void a._ln(t, e.renderColor, e.renderColorBlendMode)) : void this._ja(t, i, n, r, this.width * n, this.height * r, e)
            }
        },
        _ja: function (t, i, e, n, r, s, o) {
            if (this._lm == _h)
                return 1 != e && 1 != n && t.scale(e, n), void this._lq.draw(t, o);
            if (this._ld) {
                if (!Ns)
                    return void t.drawImage(this._ld, 0, 0, r, s);
                var e = i * r / this.width,
                    n = i * s / this.height;
                t.scale(1 / e, 1 / n),
                    t.drawImage(this._ld, 0, 0, r * e, s * n)
            }
        },
        _jj: null,
        _fx: function (t, i, e) {
            if (this._lm == _h && this._lq.cacheable === !1)
                return null;
            if (this._lm == hh || (t *= Math.max(i, e)) <= 1)
                return this._defaultCache || (this._defaultCache = this._g0(this._js || this._ld, 1)), this._defaultCache;
            var n = this._jj.maxScale || 0;
            if (t = Math.ceil(t), n >= t) {
                for (var r = t, s = this._jj[r]; !s && ++r <= n;)
                    s = this._jj[r];
                if (s)
                    return s
            }
            t % 2 && t++;
            var o = this.width * t,
                h = this.height * t;
            if (o * h > Ws.MAX_CACHE_PIXELS)
                return null;
            var a = Fi(o, h);
            return (this.x || this.y) && a.g.translate(-this.x * t, -this.y * t),
                this._ja(a.g, 1, t, t, o, h),
                this._g0(a, t)
        },
        _g0: function (t, i) {
            var e = new Nh(t, i);
            return this._jj[i] = e,
                this._jj.maxScale = i,
                e
        },
        hitTest: function (t, i, e) {
            if (this._lm == uh)
                return this._lq.hitTest.apply(this._lq, arguments);
            if (!(this._pixels || this._ld && this._ld._pixels))
                return !0;
            var n = this._pixels || this._ld._pixels;
            return n._ip(t, i, e)
        },
        _du: function () {
            this._dispatcher && this._dispatcher.onEvent(new fo(this, "image", "load", this._ld))
        },
        _mwi: function (t, i) {
            this._dispatcher && this._dispatcher.addListener(t, i)
        },
        _6j: function (t, i) {
            this._dispatcher && this._dispatcher.removeListener(t, i)
        },
        _mz2: function (t) {
            this._jj = {},
            (t || this.width * this.height > 1e5) && (this._ld = null, this._js = null)
        }
    },
        k(ye, io);
    var vh = {};
    Zo.drawImage = xe,
        Zo.registerImage = Te,
        Zo.hasImage = Oe,
        Zo.getAllImages = function () {
            var t = [];
            for (var i in vh)
                t.push(i);
            return t
        };
    var gh = function (t, i, e, n, r, s) {
        this.type = t,
            this.colors = i,
            this.positions = e,
            this.angle = n || 0,
            this.tx = r || 0,
            this.ty = s || 0
    };
    Jo.GRADIENT_TYPE_RADIAL = "r",
        Jo.GRADIENT_TYPE_LINEAR = "l",
        gh.prototype = {
            type: null,
            colors: null,
            positions: null,
            angle: null,
            tx: 0,
            ty: 0,
            position: no.CENTER_MIDDLE,
            isEmpty: function () {
                return null == this.colors || 0 == this.colors.length
            },
            _6e: function () {
                var t = this.colors.length;
                if (1 == t)
                    return [0];
                for (var i = [], e = 1 / (t - 1), n = 0; t > n; n++)
                    i.push(e * n);
                return this.positions || (this.positions = i),
                    i
            },
            generatorGradient: function (t) {
                if (null == this.colors || 0 == this.colors.length)
                    return null;
                var i,
                    e = Yi();
                if (this.type == Jo.GRADIENT_TYPE_LINEAR) {
                    var n = this.angle;
                    n > Math.PI && (n -= Math.PI);
                    var r;
                    if (n <= Math.PI / 2) {
                        var s = Math.atan2(t.height, t.width),
                            o = Math.sqrt(t.width * t.width + t.height * t.height),
                            h = s - n;
                        r = Math.cos(h) * o
                    } else {
                        var s = Math.atan2(t.width, t.height),
                            o = Math.sqrt(t.width * t.width + t.height * t.height),
                            h = s - (n - Math.PI / 2);
                        r = Math.cos(h) * o
                    }
                    var a = r / 2,
                        l = a * Math.cos(n),
                        _ = a * Math.sin(n),
                        u = t.x + t.width / 2 - l,
                        d = t.y + t.height / 2 - _,
                        f = t.x + t.width / 2 + l,
                        c = t.y + t.height / 2 + _;
                    i = e.createLinearGradient(u, d, f, c)
                } else {
                    if (!(this.type = Jo.GRADIENT_TYPE_RADIAL))
                        return null;
                    var v = ai(this.position, t.width, t.height);
                    v.x += t.x,
                        v.y += t.y,
                    this.tx && (v.x += Math.abs(this.tx) < 1 ? t.width * this.tx : this.tx),
                    this.ty && (v.y += Math.abs(this.ty) < 1 ? t.height * this.ty : this.ty);
                    var g = Js(v.x, v.y, t.x, t.y);
                    g = Math.max(g, Js(v.x, v.y, t.x, t.y + t.height)),
                        g = Math.max(g, Js(v.x, v.y, t.x + t.width, t.y + t.height)),
                        g = Math.max(g, Js(v.x, v.y, t.x + t.width, t.y)),
                        i = e.createRadialGradient(v.x, v.y, 0, v.x, v.y, g)
                }
                var E = this.colors,
                    m = this.positions;
                m && m.length == E.length || (m = this._6e());
                for (var p = 0, y = E.length; y > p; p++)
                    i.addColorStop(m[p], E[p]);
                return i
            }
        };
    var Eh = new gh(Jo.GRADIENT_TYPE_LINEAR, [V(2332033023), V(1154272460), V(1154272460), V(1442840575)], [.1, .3, .7, .9], Math.PI / 2),
        mh = new gh(Jo.GRADIENT_TYPE_LINEAR, [V(2332033023), V(1154272460), V(1154272460), V(1442840575)], [.1, .3, .7, .9], 0),
        ph = (new gh(Jo.GRADIENT_TYPE_LINEAR, [V(1154272460), V(1442840575)], [.1, .9], 0), new gh(Jo.GRADIENT_TYPE_RADIAL, [V(2298478591), V(1156509422), V(1720223880), V(1147561574)], [.1, .3, .7, .9], 0, -.3, -.3)),
        yh = [V(0), V(4294901760), V(4294967040), V(4278255360), V(4278250239), V(4278190992), V(4294901958), V(0)],
        Th = [0, .12, .28, .45, .6, .75, .8, 1],
        wh = new gh(Jo.GRADIENT_TYPE_LINEAR, yh, Th),
        Oh = new gh(Jo.GRADIENT_TYPE_LINEAR, yh, Th, Math.PI / 2),
        Ah = new gh(Jo.GRADIENT_TYPE_RADIAL, yh, Th);
    gh.LINEAR_GRADIENT_VERTICAL = Eh,
        gh.LINEAR_GRADIENT_HORIZONTAL = mh,
        gh.RADIAL_GRADIENT = ph,
        gh.RAINBOW_LINEAR_GRADIENT = wh,
        gh.RAINBOW_LINEAR_GRADIENT_VERTICAL = Oh,
        gh.RAINBOW_RADIAL_GRADIENT = Ah;
    var xh = "m",
        Lh = "l",
        bh = "q",
        Sh = "c",
        Ih = "a",
        Rh = "z";
    Jo.SEGMENT_MOVE_TO = xh,
        Jo.SEGMENT_LINE_TO = Lh,
        Jo.SEGMENT_QUAD_TO = bh,
        Jo.SEGMENT_CURVE_TO = Sh,
        Jo.SEGMENT_ARC_TO = Ih,
        Jo.SEGMENT_CLOSE = Rh;
    var Ch = function (t, i) {
        this.id = ++Ls,
            I(t) ? this.points = t : (this.type = t, this.points = i)
    };
    Ch.prototype = {
        toJSON: function () {
            var t = {
                type: this.type,
                points: this.points
            };
            return this.invalidTerminal && (t.invalidTerminal = !0),
                t
        },
        parseJSON: function (t) {
            this.type = t.type,
                this.points = t.points,
                this.invalidTerminal = t.invalidTerminal
        },
        points: null,
        type: Lh,
        clone: function () {
            return new Ch(this.type, E(this.points))
        },
        move: function (t, i) {
            if (this.points)
                for (var e = 0, n = this.points.length; n > e; e++) {
                    var r = this.points[e];
                    Zo.isNumber(r) && (this.points[e] += e % 2 == 0 ? t : i)
                }
        }
    },
        Z(Ch.prototype, {
            lastPoint: {
                get: function () {
                    return this.type == Ih ? {
                            x: this._p2x,
                            y: this._p2y
                        }
                        : {
                            x: this.points[this.points.length - 2],
                            y: this.points[this.points.length - 1]
                        }
                }
            },
            firstPoint: {
                get: function () {
                    return {
                        x: this.points[0],
                        y: this.points[1]
                    }
                }
            }
        }),
        Zo.PathSegment = Ch;
    var Dh = 0,
        Ph = function (t) {
            this.bounds = new io,
                this._fg = t || []
        };
    Ph.prototype = {
        toJSON: function () {
            var t = [];
            return this._fg.forEach(function (i) {
                t.push(i.toJSON())
            }),
                t
        },
        parseJSON: function (t) {
            var i = this._fg;
            t.forEach(function (t) {
                i.push(new Ch(t.type, t.points))
            })
        },
        clear: function () {
            this._fg.length = 0,
                this.bounds.clear(),
                this._j7 = 0,
                this._6f = !0
        },
        _dn: !0,
        _6h: function (t, i) {
            this._dn && 0 === this._fg.length && t != xh && this._fg.push(new Ch(xh, [0, 0])),
                this._fg.push(new Ch(t, i)),
                this._6f = !0
        },
        add: function (t) {
            this._fg.push(t),
                this._6f = !0
        },
        removePathSegment: function (t) {
            return t >= this._fg.length ? !1 : (this._fg.splice(t, 1), void (this._6f = !0))
        },
        moveTo: function (t, i) {
            this._6h(xh, [t, i])
        },
        lineTo: function (t, i) {
            this._6h(Lh, [t, i])
        },
        quadTo: function (t, i, e, n) {
            this._6h(bh, [t, i, e, n])
        },
        curveTo: function (t, i, e, n, r, s) {
            this._6h(Sh, [t, i, e, n, r, s])
        },
        arcTo: function (t, i, e, n, r) {
            this._6h(Ih, [t, i, e, n, r])
        },
        closePath: function () {
            this._6h(Rh)
        },
        _83: function (t, i, e, n, r) {
            if (n.selectionColor) {
                if (e == Jo.SELECTION_TYPE_SHADOW) {
                    if (!n.selectionShadowBlur)
                        return;
                    return t.shadowColor = n.selectionColor,
                        t.shadowBlur = n.selectionShadowBlur * i,
                        t.shadowOffsetX = (n.selectionShadowOffsetX || 0) * i,
                        void (t.shadowOffsetY = (n.selectionShadowOffsetY || 0) * i)
                }
                if (e == Jo.SELECTION_TYPE_BORDER) {
                    if (!n.selectionBorder)
                        return;
                    t.strokeStyle = n.selectionColor,
                        t.lineWidth = n.selectionBorder + (r.lineWidth || 0),
                        this._ln(t),
                        t.stroke()
                }
            }
        },
        _6f: !0,
        _fg: null,
        _j7: 0,
        lineCap: "butt",
        lineJoin: "round",
        draw: function (t, i, e, n, r) {
            t.lineCap = e.lineCap || this.lineCap,
                t.lineJoin = e.lineJoin || this.lineJoin,
            n && (r || (r = e), this._83(t, i, r.selectionType, r, e)),
            e.outlineStyle && (this._ln(t), t.lineWidth = e.lineWidth + 2 * (e.outline || 0), t.strokeStyle = e.outlineStyle, t.stroke()),
                t.lineWidth = 0,
                this._ln(t),
            e.fillColor && (t.fillStyle = e.renderColor || e.fillColor, t.fill()),
            e.fillGradient && (t.fillStyle = e._fillGradient || e.fillGradient, t.fill()),
            e.lineWidth && (t.lineWidth = e.lineWidth, e.lineDash && (t.lineDash = e.lineDash, t.lineDashOffset = e.lineDashOffset), t.strokeStyle = e.renderColor || e.strokeStyle, t.stroke(), t.lineDash = [])
        },
        _ln: function (t) {
            t.beginPath();
            for (var i, e, n = 0, r = this._fg.length; r > n; n++)
                i = this._fg[n], nh._ln(t, i, e), e = i
        },
        invalidate: function () {
            this._6f = !0
        },
        validate: function () {
            if (this._6f = !1, this.bounds.clear(), this._j7 = 0, 0 != this._fg.length)
                for (var t, i, e = this._fg, n = 1, r = e[0], s = r, o = e.length; o > n; n++)
                    t = e[n], t.type == xh ? s = t : (nh._5m(this.bounds, t, r, s), i = nh._5o(t, r, s), t._j7 = i, this._j7 += i), r = t
        },
        getBounds: function (t, i) {
            if (this._6f && this.validate(), i = i || new io, t) {
                var e = t / 2;
                i.set(this.bounds.x - e, this.bounds.y - e, this.bounds.width + t, this.bounds.height + t)
            } else
                i.set(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);
            return i
        },
        hitTest: function (t, i, e, n, r, s) {
            return ue.call(this, t, i, e, n, r, s)
        },
        toSegments: function () {
            return [].concat(this._fg)
        },
        generator: function (t, i, e, n, r) {
            return _e.call(this, t, i, e, n, r)
        },
        getLocation: function (t, i) {
            return de.call(this, t, i || 0)
        }
    },
        Z(Ph.prototype, {
            segments: {
                get: function () {
                    return this._fg
                },
                set: function (t) {
                    this.clear(),
                        this._fg = t
                }
            },
            length: {
                get: function () {
                    return this._6f && this.validate(),
                        this._j7
                }
            },
            _empty: {
                get: function () {
                    return 0 == this._fg.length
                }
            }
        }),
        Se.prototype = {
            _19: function (t, i) {
                var e,
                    n,
                    r,
                    s,
                    o,
                    h = t.length,
                    a = 0,
                    l = 0;
                for (o = 0; h > o; o += 4)
                    if (t[o + 3] > 0) {
                        e = (o + 4) / i / 4 | 0;
                        break
                    }
                for (o = h - 4; o >= 0; o -= 4)
                    if (t[o + 3] > 0) {
                        n = (o + 4) / i / 4 | 0;
                        break
                    }
                for (a = 0; i > a; a++) {
                    for (l = e; n > l; l++)
                        if (t[l * i * 4 + 4 * a + 3] > 0) {
                            r = a;
                            break
                        }
                    if (r >= 0)
                        break
                }
                for (a = i - 1; a >= 0; a--) {
                    for (l = e; n > l; l++)
                        if (t[l * i * 4 + 4 * a + 3] > 0) {
                            s = a;
                            break
                        }
                    if (s >= 0)
                        break
                }
                this._x = r,
                    this._y = e,
                    this._width = s - r + 1,
                    this._height = n - e + 1,
                    this._je = new io(r, e, this._width, this._height),
                    this._pixelSize = this._width * this._height,
                    this._originalPixelsWidth = i,
                    this._originalPixels = t
            },
            _fa: function (t, i) {
                return this._originalPixels[4 * (t + this._x + (this._y + i) * this._originalPixelsWidth) + 3]
            },
            _ip: function (t, i, e) {
                if (t = Math.round(t - this._x), i = Math.round(i - this._y), !e || 1 >= e)
                    return this._fa(t, i);
                e = 0 | e;
                for (var n = t, r = i; i + e > r;) {
                    for (var n = t; t + e > n;) {
                        if (this._fa(n, r))
                            return !0;
                        ++n
                    }
                    ++r
                }
                return !1
            }
        },
        Jo.BLEND_MODE_DARKEN = "darken",
        Jo.BLEND_MODE_MULTIPLY = "multiply",
        Jo.BLEND_MODE_COLOR_BURN = "color.burn",
        Jo.BLEND_MODE_LINEAR_BURN = "linear.burn",
        Jo.BLEND_MODE_LIGHTEN = "lighten",
        Jo.BLEND_MODE_SCREEN = "screen",
        Jo.BLEND_MODE_GRAY = "gray",
        Ws.BLEND_MODE = Jo.BLEND_MODE_LINEAR_BURN;
    var Nh = function (t, i, e) {
        this._js = t,
            this.scale = i || 1,
        t instanceof Image && (e = !1),
            this._iz = e
    };
    Nh.prototype = {
        scale: 1,
        _js: null,
        _jj: null,
        _iz: !0,
        _ln: function (t, i, e) {
            if (!i || this._iz === !1)
                return void t.drawImage(this._js, 0, 0);
            this._jj || (this._jj = {});
            var n = i + e,
                r = this._jj[n];
            if (r || (r = De(this._js, i, e), r || (this._iz = !1), this._jj[n] = r || this._js), r)
                if (Is)
                    try {
                        t.drawImage(r, 0, 0)
                    } catch (s) {
                    }
                else
                    t.drawImage(r, 0, 0)
        }
    };
    var zh = function (t, i, e, n, r, s, o, h, a) {
            this._lu = ke(t, i, e, n, r, s, o, h, a)
        },
        kh = {
            server: {
                draw: function (t) {
                    t.save(),
                        t.translate(0, 0),
                        t.beginPath(),
                        t.moveTo(0, 0),
                        t.lineTo(40, 0),
                        t.lineTo(40, 40),
                        t.lineTo(0, 40),
                        t.closePath(),
                        t.clip(),
                        t.translate(0, 0),
                        t.translate(0, 0),
                        t.scale(1, 1),
                        t.translate(0, 0),
                        t.strokeStyle = "rgba(0,0,0,0)",
                        t.lineCap = "butt",
                        t.lineJoin = "miter",
                        t.miterLimit = 4,
                        t.save(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.restore(),
                        t.save();
                    var i = t.createLinearGradient(6.75, 3.9033, 30.5914, 27.7447);
                    i.addColorStop(.0493, "#1C6B9D"),
                        i.addColorStop(.0689, "#186493"),
                        i.addColorStop(.0939, "#145E8B"),
                        i.addColorStop(.129, "#115B87"),
                        i.addColorStop(.2266, "#115A85"),
                        i.addColorStop(.2556, "#125C89"),
                        i.addColorStop(.2869, "#176291"),
                        i.addColorStop(.3194, "#1D6C9F"),
                        i.addColorStop(.3525, "#2479B0"),
                        i.addColorStop(.3695, "#2881BB"),
                        i.addColorStop(.5025, "#1F6FA2"),
                        i.addColorStop(.9212, "#115A86"),
                        i.addColorStop(1, "#004063"),
                        t.fillStyle = i,
                        t.beginPath(),
                        t.moveTo(25.677, 4.113),
                        t.bezierCurveTo(25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004),
                        t.bezierCurveTo(19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003),
                        t.bezierCurveTo(12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004),
                        t.bezierCurveTo(9.19, 2.897, 8.977, 2.989, 8.805, 3.094),
                        t.bezierCurveTo(8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63),
                        t.bezierCurveTo(5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05),
                        t.bezierCurveTo(4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307),
                        t.bezierCurveTo(22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575),
                        t.bezierCurveTo(24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004),
                        t.bezierCurveTo(25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004),
                        t.bezierCurveTo(25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85),
                        t.bezierCurveTo(25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253),
                        t.bezierCurveTo(25.706, 4.885, 25.749, 4.478, 25.677, 4.113),
                        t.bezierCurveTo(25.67, 4.077, 25.697, 4.217, 25.677, 4.113),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.save(),
                        t.fillStyle = "#2e8ece",
                        t.beginPath(),
                        t.moveTo(19.763, 6.645),
                        t.bezierCurveTo(20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778),
                        t.bezierCurveTo(20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999),
                        t.bezierCurveTo(21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999),
                        t.bezierCurveTo(21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372),
                        t.lineTo(21.398, 36.253),
                        t.bezierCurveTo(21.397, 36.489, 21.349, 36.713, 21.262, 36.917),
                        t.bezierCurveTo(21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458),
                        t.bezierCurveTo(20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996),
                        t.bezierCurveTo(20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949),
                        t.lineTo(4.675, 37.877),
                        t.bezierCurveTo(4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741),
                        t.bezierCurveTo(3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376),
                        t.bezierCurveTo(3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996),
                        t.bezierCurveTo(3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172),
                        t.lineTo(2.924, 8.431),
                        t.bezierCurveTo(2.923, 8.192, 2.971, 7.964, 3.057, 7.758),
                        t.bezierCurveTo(3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209),
                        t.bezierCurveTo(3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837),
                        t.bezierCurveTo(4.17, 6.749, 4.396, 6.701, 4.633, 6.7),
                        t.lineTo(19.763, 6.645),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.restore(),
                        t.save(),
                        t.fillStyle = "#efefef",
                        t.beginPath(),
                        t.arc(12.208, 26.543, 2.208, 0, 6.283185307179586, !0),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.fillStyle = "#2e8ece",
                        t.beginPath(),
                        t.arc(12.208, 26.543, 1.876, 0, 6.283185307179586, !0),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.fillStyle = "#efefef",
                        t.beginPath(),
                        t.moveTo(19.377, 17.247),
                        t.bezierCurveTo(19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998),
                        t.lineTo(5.882, 18.108999999999998),
                        t.bezierCurveTo(5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247),
                        t.lineTo(5.02, 11.144),
                        t.bezierCurveTo(5.02, 10.666, 5.406, 10.281, 5.882, 10.281),
                        t.lineTo(18.516, 10.281),
                        t.bezierCurveTo(18.993, 10.281, 19.377, 10.666, 19.377, 11.144),
                        t.lineTo(19.377, 17.247),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.save(),
                        t.fillStyle = "#2e8ece",
                        t.beginPath(),
                        t.moveTo(18.536, 13.176),
                    t.bezierCurveTo(18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794),
                    t.lineTo(6.479, 13.794),
                    t.bezierCurveTo(6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176),
                    t.lineTo(5.861, 11.84),
                    t.bezierCurveTo(5.861, 11.498, 6.137, 11.221, 6.479, 11.221),
                    t.lineTo(17.918, 11.221),
                    t.bezierCurveTo(18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84),
                    t.lineTo(18.535, 13.176),
                    t.closePath(),
                    t.fill(),
                    t.stroke(),
                    t.restore(),
                    t.save(),
                    t.fillStyle = "#2e8ece",
                    t.beginPath(),
                    t.moveTo(18.536, 16.551),
                    t.bezierCurveTo(18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997),
                    t.lineTo(6.479, 17.168999999999997),
                    t.bezierCurveTo(6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551),
                    t.lineTo(5.861, 15.215999999999998),
                    t.bezierCurveTo(5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998),
                    t.lineTo(17.918, 14.596999999999998),
                    t.bezierCurveTo(18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998),
                    t.lineTo(18.535, 16.551),
                    t.closePath(),
                    t.fill(),
                    t.stroke(),
                    t.restore(),
                    t.restore(),
                    t.restore()
                }
            },
            exchanger2: {
                draw: function (t) {
                    t.save(),
                        t.translate(0, 0),
                        t.beginPath(),
                        t.moveTo(0, 0),
                        t.lineTo(40, 0),
                        t.lineTo(40, 40),
                        t.lineTo(0, 40),
                        t.closePath(),
                        t.clip(),
                        t.translate(0, 0),
                        t.translate(0, 0),
                        t.scale(1, 1),
                        t.translate(0, 0),
                        t.strokeStyle = "rgba(0,0,0,0)",
                        t.lineCap = "butt",
                        t.lineJoin = "miter",
                        t.miterLimit = 4,
                        t.save(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.restore(),
                        t.save();
                    var i = t.createLinearGradient(.4102, 24.3613, 39.5898, 24.3613);
                    i.addColorStop(0, "#1C6B9D"),
                        i.addColorStop(.0788, "#115A85"),
                        i.addColorStop(.2046, "#135D89"),
                        i.addColorStop(.3649, "#186494"),
                        i.addColorStop(.5432, "#1F70A4"),
                        i.addColorStop(.6798, "#257AB2"),
                        i.addColorStop(.7462, "#2377AD"),
                        i.addColorStop(.8508, "#1E6DA0"),
                        i.addColorStop(.98, "#125C89"),
                        i.addColorStop(1, "#105984"),
                        t.fillStyle = i,
                        t.beginPath(),
                        t.moveTo(.41, 16.649),
                        t.bezierCurveTo(.633, 19.767, .871, 20.689, 1.094, 23.807000000000002),
                        t.bezierCurveTo(1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002),
                        t.bezierCurveTo(10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523),
                        t.bezierCurveTo(26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004),
                        t.bezierCurveTo(38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005),
                        t.bezierCurveTo(39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005),
                        t.bezierCurveTo(39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.save(),
                        t.fillStyle = "#2e8ece",
                        t.beginPath(),
                        t.moveTo(16.4, 25.185),
                        t.bezierCurveTo(12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705),
                        t.bezierCurveTo(3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999),
                        t.bezierCurveTo(1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998),
                        t.bezierCurveTo(11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998),
                        t.bezierCurveTo(22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998),
                        t.bezierCurveTo(32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998),
                        t.bezierCurveTo(40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997),
                        t.bezierCurveTo(33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996),
                        t.bezierCurveTo(23.289, 25.28, 19.824, 25.436, 16.4, 25.185),
                        t.bezierCurveTo(13.529, 24.977, 19.286, 25.396, 16.4, 25.185),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.restore(),
                        t.save(),
                        t.save(),
                        t.save(),
                        t.save(),
                        t.save(),
                        t.fillStyle = "#f7f8f8",
                        t.beginPath(),
                        t.moveTo(5.21, 21.754),
                        t.lineTo(8.188, 17.922),
                        t.lineTo(9.53, 18.75),
                        t.lineTo(15.956, 16.004),
                        t.lineTo(18.547, 17.523),
                        t.lineTo(12.074, 20.334),
                        t.lineTo(13.464, 21.204),
                        t.lineTo(5.21, 21.754),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.restore(),
                        t.restore(),
                        t.save(),
                        t.save(),
                        t.save(),
                        t.fillStyle = "#f7f8f8",
                        t.beginPath(),
                        t.moveTo(17.88, 14.61),
                        t.lineTo(9.85, 13.522),
                        t.lineTo(11.703, 12.757),
                        t.lineTo(7.436, 10.285),
                        t.lineTo(10.783, 8.942),
                        t.lineTo(15.091, 11.357),
                        t.lineTo(16.88, 10.614),
                        t.lineTo(17.88, 14.61),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.restore(),
                        t.save(),
                        t.save(),
                        t.fillStyle = "#f7f8f8",
                        t.beginPath(),
                        t.moveTo(17.88, 14.61),
                        t.lineTo(9.85, 13.522),
                        t.lineTo(11.703, 12.757),
                        t.lineTo(7.436, 10.285),
                        t.lineTo(10.783, 8.942),
                        t.lineTo(15.091, 11.357),
                        t.lineTo(16.88, 10.614),
                        t.lineTo(17.88, 14.61),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.restore(),
                        t.restore(),
                    t.save(),
                    t.save(),
                    t.save(),
                    t.fillStyle = "#f7f8f8",
                    t.beginPath(),
                    t.moveTo(23.556, 15.339),
                    t.lineTo(20.93, 13.879),
                    t.lineTo(26.953, 11.304),
                    t.lineTo(25.559, 10.567),
                    t.lineTo(33.251, 9.909),
                    t.lineTo(31.087, 13.467),
                    t.lineTo(29.619, 12.703),
                    t.lineTo(23.556, 15.339),
                    t.closePath(),
                    t.fill(),
                    t.stroke(),
                    t.restore(),
                    t.restore(),
                    t.restore(),
                    t.save(),
                    t.save(),
                    t.save(),
                    t.fillStyle = "#f7f8f8",
                    t.beginPath(),
                    t.moveTo(30.028, 23.383),
                    t.lineTo(24.821, 20.366),
                    t.lineTo(22.915, 21.227),
                    t.lineTo(21.669, 16.762),
                    t.lineTo(30.189, 17.942),
                    t.lineTo(28.33, 18.782),
                    t.lineTo(33.579, 21.725),
                    t.lineTo(30.028, 23.383),
                    t.closePath(),
                    t.fill(),
                    t.stroke(),
                    t.restore(),
                    t.restore(),
                    t.save(),
                    t.save(),
                    t.fillStyle = "#f7f8f8",
                    t.beginPath(),
                    t.moveTo(30.028, 23.383),
                    t.lineTo(24.821, 20.366),
                    t.lineTo(22.915, 21.227),
                    t.lineTo(21.669, 16.762),
                    t.lineTo(30.189, 17.942),
                    t.lineTo(28.33, 18.782),
                    t.lineTo(33.579, 21.725),
                    t.lineTo(30.028, 23.383),
                    t.closePath(),
                    t.fill(),
                    t.stroke(),
                    t.restore(),
                    t.restore(),
                    t.restore(),
                    t.restore(),
                    t.restore(),
                    t.restore()
                }
            },
            exchanger: {
                draw: function (t) {
                    t.save(),
                        t.translate(0, 0),
                        t.beginPath(),
                        t.moveTo(0, 0),
                        t.lineTo(40, 0),
                        t.lineTo(40, 40),
                        t.lineTo(0, 40),
                        t.closePath(),
                        t.clip(),
                        t.translate(0, 0),
                        t.translate(0, 0),
                        t.scale(1, 1),
                        t.translate(0, 0),
                        t.strokeStyle = "rgba(0,0,0,0)",
                        t.lineCap = "butt",
                        t.lineJoin = "miter",
                        t.miterLimit = 4,
                        t.save(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.restore(),
                        t.save();
                    var i = t.createLinearGradient(.2095, 20.7588, 39.4941, 20.7588);
                    i.addColorStop(0, "#6A6969"),
                        i.addColorStop(.0788, "#4F4C4B"),
                        i.addColorStop(.352, "#545252"),
                        i.addColorStop(.6967, "#646262"),
                        i.addColorStop(.8916, "#6F6E6F"),
                        i.addColorStop(.9557, "#4C4948"),
                        i.addColorStop(1, "#494645"),
                        t.fillStyle = i,
                        t.beginPath(),
                        t.moveTo(39.449, 12.417),
                        t.lineTo(39.384, 9.424),
                        t.bezierCurveTo(39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024),
                        t.bezierCurveTo(-.026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002),
                        t.bezierCurveTo(.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437),
                        t.bezierCurveTo(1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094),
                        t.bezierCurveTo(8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089),
                        t.bezierCurveTo(23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996),
                        t.bezierCurveTo(34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997),
                        t.bezierCurveTo(37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997),
                        t.lineTo(37.711, 30.316999999999997),
                        t.lineTo(39.281, 16.498999999999995),
                        t.bezierCurveTo(39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994),
                        t.bezierCurveTo(39.515, 14.105, 39.449, 12.417, 39.449, 12.417),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.save(),
                        t.save(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.restore(),
                        t.save();
                    var i = t.createLinearGradient(19.8052, 7.7949, 19.8052, 24.7632);
                    i.addColorStop(0, "#7D7D7D"),
                        i.addColorStop(.1455, "#808080"),
                        i.addColorStop(.2975, "#888888"),
                        i.addColorStop(.4527, "#939293"),
                        i.addColorStop(.6099, "#9E9D9D"),
                        i.addColorStop(.7687, "#A7A5A4"),
                        i.addColorStop(.9268, "#A9A6A5"),
                        i.addColorStop(.9754, "#A7A4A3"),
                        i.addColorStop(1, "#FFFFFF"),
                        t.fillStyle = i,
                        t.beginPath(),
                        t.moveTo(33.591, 24.763),
                        t.bezierCurveTo(23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003),
                        t.bezierCurveTo(3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003),
                        t.bezierCurveTo(1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004),
                        t.bezierCurveTo(4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004),
                        t.bezierCurveTo(6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004),
                        t.bezierCurveTo(16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005),
                        t.bezierCurveTo(30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004),
                        t.bezierCurveTo(36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005),
                        t.bezierCurveTo(37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005),
                        t.bezierCurveTo(39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005),
                        t.bezierCurveTo(38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005),
                        t.bezierCurveTo(37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007),
                        t.bezierCurveTo(37.151, 24.271, 35.264, 24.77, 33.591, 24.763),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.restore(),
                        t.restore(),
                        t.save(),
                        t.save(),
                        t.save(),
                        t.fillStyle = "#f7f8f8",
                        t.beginPath(),
                        t.moveTo(10.427, 19.292),
                        t.lineTo(5.735, 16.452),
                        t.lineTo(12.58, 13.8),
                        t.lineTo(12.045, 15.07),
                        t.lineTo(20.482, 15.072),
                        t.lineTo(19.667, 17.887),
                        t.lineTo(11.029, 17.851),
                        t.lineTo(10.427, 19.292),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.restore(),
                        t.save(),
                        t.save(),
                        t.fillStyle = "#f7f8f8",
                        t.beginPath(),
                        t.moveTo(13.041, 13.042),
                        t.lineTo(8.641, 10.73),
                        t.lineTo(14.82, 8.474),
                        t.lineTo(14.373, 9.537),
                        t.lineTo(22.102, 9.479),
                        t.lineTo(21.425, 11.816),
                        t.lineTo(13.54, 11.85),
                        t.lineTo(13.041, 13.042),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.restore(),
                        t.save(),
                        t.save(),
                        t.fillStyle = "#f7f8f8",
                        t.beginPath(),
                        t.moveTo(29.787, 16.049),
                        t.lineTo(29.979, 14.704),
                        t.lineTo(21.51, 14.706),
                        t.lineTo(22.214, 12.147),
                        t.lineTo(30.486, 12.116),
                        t.lineTo(30.653, 10.926),
                        t.lineTo(36.141, 13.4),
                        t.lineTo(29.787, 16.049),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.restore(),
                        t.save(),
                        t.save(),
                        t.fillStyle = "#f7f8f8",
                        t.beginPath(),
                        t.moveTo(28.775, 23.14),
                        t.lineTo(29.011, 21.49),
                        t.lineTo(19.668, 21.405),
                        t.lineTo(20.523, 18.295),
                        t.lineTo(29.613, 18.338),
                        t.lineTo(29.815, 16.898),
                        t.lineTo(35.832, 19.964),
                        t.lineTo(28.775, 23.14),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.restore(),
                        t.restore(),
                    t.restore()
                }
            },
            cloud: {
                draw: function (t) {
                    t.save(),
                        t.beginPath(),
                        t.moveTo(0, 0),
                        t.lineTo(90.75, 0),
                        t.lineTo(90.75, 62.125),
                        t.lineTo(0, 62.125),
                        t.closePath(),
                        t.clip(),
                        t.strokeStyle = "rgba(0,0,0,0)",
                        t.lineCap = "butt",
                        t.lineJoin = "miter",
                        t.miterLimit = 4,
                        t.save();
                    var i = t.createLinearGradient(44.0054, 6.4116, 44.0054, 51.3674);
                    i.addColorStop(0, "rgba(159, 160, 160, 0.7)"),
                        i.addColorStop(.9726, "#E9EAEA"),
                        t.fillStyle = i,
                        t.beginPath(),
                        t.moveTo(57.07, 20.354),
                        t.bezierCurveTo(57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358),
                        t.bezierCurveTo(54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001),
                        t.bezierCurveTo(33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003),
                        t.bezierCurveTo(18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004),
                        t.bezierCurveTo(14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49),
                        t.bezierCurveTo(29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961),
                        t.bezierCurveTo(34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995),
                        t.bezierCurveTo(43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994),
                        t.bezierCurveTo(49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999),
                        t.bezierCurveTo(66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999),
                        t.bezierCurveTo(73.986, 27.436, 66.413, 20.354, 57.07, 20.354),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.restore()
                }
            },
            node: {
                width: 60,
                height: 100,
                draw: function (t) {
                    t.save(),
                        t.translate(0, 0),
                        t.beginPath(),
                        t.moveTo(0, 0),
                        t.lineTo(40, 0),
                        t.lineTo(40, 40),
                        t.lineTo(0, 40),
                        t.closePath(),
                        t.clip(),
                        t.translate(0, 0),
                        t.translate(0, 0),
                        t.scale(1, 1),
                        t.translate(0, 0),
                        t.strokeStyle = "rgba(0,0,0,0)",
                        t.lineCap = "butt",
                        t.lineJoin = "miter",
                        t.miterLimit = 4,
                        t.save(),
                        t.fillStyle = "#9fa0a0",
                        t.beginPath(),
                        t.moveTo(13.948, 31.075),
                        t.lineTo(25.914, 31.075),
                        t.quadraticCurveTo(25.914, 31.075, 25.914, 31.075),
                        t.lineTo(25.914, 34.862),
                        t.quadraticCurveTo(25.914, 34.862, 25.914, 34.862),
                        t.lineTo(13.948, 34.862),
                        t.quadraticCurveTo(13.948, 34.862, 13.948, 34.862),
                        t.lineTo(13.948, 31.075),
                        t.quadraticCurveTo(13.948, 31.075, 13.948, 31.075),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.fillStyle = "#c9caca",
                        t.beginPath(),
                        t.moveTo(29.679, 35.972),
                        t.bezierCurveTo(29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244),
                        t.lineTo(11.456, 37.244),
                        t.bezierCurveTo(10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972),
                        t.lineTo(10.183, 36.136),
                        t.bezierCurveTo(10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863),
                        t.lineTo(28.407, 34.863),
                        t.bezierCurveTo(29.11, 34.863, 29.678, 35.431, 29.678, 36.136),
                        t.lineTo(29.678, 35.972),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.fillStyle = "#c9caca",
                        t.beginPath(),
                        t.moveTo(.196, 29.346),
                        t.bezierCurveTo(.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075),
                        t.lineTo(37.936, 31.075),
                        t.bezierCurveTo(38.891, 31.075, 39.665, 30.301, 39.665, 29.346),
                        t.lineTo(39.665, 27.174),
                        t.lineTo(.196, 27.174),
                        t.lineTo(.196, 29.346),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.fillStyle = "#3e3a39",
                        t.beginPath(),
                        t.moveTo(37.937, 3.884),
                        t.lineTo(1.926, 3.884),
                        t.bezierCurveTo(.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614),
                        t.lineTo(.19699999999999984, 27.12),
                        t.lineTo(39.666000000000004, 27.12),
                        t.lineTo(39.666000000000004, 5.615),
                        t.bezierCurveTo(39.665, 4.657, 38.892, 3.884, 37.937, 3.884),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.restore(),
                        t.save();
                    var i = t.createLinearGradient(6.9609, 2.9341, 32.9008, 28.874);
                    i.addColorStop(0, "#B2CBEA"),
                        i.addColorStop(1, "#2E8ECE"),
                        t.fillStyle = i,
                        t.beginPath(),
                        t.moveTo(35.788, 6.39),
                        t.lineTo(4.074, 6.39),
                        t.bezierCurveTo(3.315, 6.39, 2.702, 7.003, 2.702, 7.763),
                        t.lineTo(2.702, 24.616),
                        t.lineTo(37.159, 24.616),
                        t.lineTo(37.159, 7.763),
                        t.bezierCurveTo(37.159, 7.003, 36.546, 6.39, 35.788, 6.39),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.restore()
                }
            },
            group: {
                draw: function (t) {
                    t.save(),
                        t.translate(0, 0),
                        t.beginPath(),
                        t.moveTo(0, 0),
                        t.lineTo(47.75, 0),
                        t.lineTo(47.75, 40),
                        t.lineTo(0, 40),
                        t.closePath(),
                        t.clip(),
                        t.translate(0, 0),
                        t.translate(0, 0),
                        t.scale(1, 1),
                        t.translate(0, 0),
                        t.strokeStyle = "rgba(0,0,0,0)",
                        t.lineCap = "butt",
                        t.lineJoin = "miter",
                        t.miterLimit = 4,
                        t.save(),
                        t.save(),
                        t.fillStyle = "#9fa0a0",
                        t.beginPath(),
                        t.moveTo(10.447, 26.005),
                        t.lineTo(18.847, 26.005),
                        t.quadraticCurveTo(18.847, 26.005, 18.847, 26.005),
                        t.lineTo(18.847, 28.663),
                        t.quadraticCurveTo(18.847, 28.663, 18.847, 28.663),
                        t.lineTo(10.447, 28.663),
                        t.quadraticCurveTo(10.447, 28.663, 10.447, 28.663),
                        t.lineTo(10.447, 26.005),
                        t.quadraticCurveTo(10.447, 26.005, 10.447, 26.005),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.fillStyle = "#c9caca",
                        t.beginPath(),
                        t.moveTo(21.491, 29.443),
                        t.bezierCurveTo(21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338),
                        t.lineTo(8.698, 30.338),
                        t.bezierCurveTo(8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443),
                        t.lineTo(7.8020000000000005, 29.557000000000002),
                        t.bezierCurveTo(7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003),
                        t.lineTo(20.597, 28.662000000000003),
                        t.bezierCurveTo(21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002),
                        t.lineTo(21.491, 29.443),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.fillStyle = "#c9caca",
                        t.beginPath(),
                        t.moveTo(.789, 24.79),
                        t.bezierCurveTo(.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005),
                        t.lineTo(27.289, 26.005),
                        t.bezierCurveTo(27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79),
                        t.lineTo(28.504, 23.267),
                        t.lineTo(.789, 23.267),
                        t.lineTo(.789, 24.79),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.fillStyle = "#3e3a39",
                        t.beginPath(),
                        t.moveTo(27.289, 6.912),
                        t.lineTo(2.006, 6.912),
                        t.bezierCurveTo(1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126),
                        t.lineTo(.7889999999999997, 23.227),
                        t.lineTo(28.503999999999998, 23.227),
                        t.lineTo(28.503999999999998, 8.126),
                        t.bezierCurveTo(28.504, 7.455, 27.961, 6.912, 27.289, 6.912),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.restore(),
                        t.save();
                    var i = t.createLinearGradient(5.54, 6.2451, 23.7529, 24.458);
                    i.addColorStop(0, "#B2CBEA"),
                        i.addColorStop(1, "#2E8ECE"),
                        t.fillStyle = i,
                        t.beginPath(),
                        t.moveTo(25.78, 8.671),
                        t.lineTo(3.514, 8.671),
                        t.bezierCurveTo(2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635),
                        t.lineTo(2.549, 21.466),
                        t.lineTo(26.743, 21.466),
                        t.lineTo(26.743, 9.636),
                        t.bezierCurveTo(26.743, 9.102, 26.312, 8.671, 25.78, 8.671),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.restore(),
                        t.save(),
                        t.save(),
                        t.fillStyle = "#9fa0a0",
                        t.beginPath(),
                        t.moveTo(27.053, 33.602),
                        t.lineTo(36.22, 33.602),
                        t.quadraticCurveTo(36.22, 33.602, 36.22, 33.602),
                        t.lineTo(36.22, 36.501),
                        t.quadraticCurveTo(36.22, 36.501, 36.22, 36.501),
                        t.lineTo(27.053, 36.501),
                        t.quadraticCurveTo(27.053, 36.501, 27.053, 36.501),
                        t.lineTo(27.053, 33.602),
                        t.quadraticCurveTo(27.053, 33.602, 27.053, 33.602),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.fillStyle = "#c9caca",
                        t.beginPath(),
                        t.moveTo(39.104, 37.352),
                        t.bezierCurveTo(39.104, 37.891, 38.67, 38.327, 38.13, 38.327),
                        t.lineTo(25.143, 38.327),
                        t.bezierCurveTo(24.602, 38.327, 24.166, 37.891, 24.166, 37.352),
                        t.lineTo(24.166, 37.477999999999994),
                        t.bezierCurveTo(24.166, 36.937, 24.602, 36.501, 25.143, 36.501),
                        t.lineTo(38.131, 36.501),
                        t.bezierCurveTo(38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994),
                        t.lineTo(39.105, 37.352),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.fillStyle = "#c9caca",
                        t.beginPath(),
                        t.moveTo(16.514, 32.275),
                        t.bezierCurveTo(16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601),
                        t.lineTo(45.433, 33.601),
                        t.bezierCurveTo(46.166, 33.601, 46.758, 33.005, 46.758, 32.275),
                        t.lineTo(46.758, 30.607999999999997),
                        t.lineTo(16.514, 30.607999999999997),
                        t.lineTo(16.514, 32.275),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.fillStyle = "#3e3a39",
                        t.beginPath(),
                        t.moveTo(45.433, 12.763),
                        t.lineTo(17.839, 12.763),
                        t.bezierCurveTo(17.107, 12.763, 16.514, 13.356, 16.514, 14.089),
                        t.lineTo(16.514, 30.57),
                        t.lineTo(46.757999999999996, 30.57),
                        t.lineTo(46.757999999999996, 14.088),
                        t.bezierCurveTo(46.758, 13.356, 46.166, 12.763, 45.433, 12.763),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.restore(),
                        t.save(),
                        i = t.createLinearGradient(21.6973, 12.0352, 41.5743, 31.9122),
                        i.addColorStop(0, "#B2CBEA"),
                        i.addColorStop(1, "#2E8ECE"),
                        t.fillStyle = i,
                        t.beginPath(),
                        t.moveTo(43.785, 14.683),
                        t.lineTo(19.486, 14.683),
                        t.bezierCurveTo(18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735),
                        t.lineTo(18.433, 28.649),
                        t.lineTo(44.837, 28.649),
                        t.lineTo(44.837, 15.734),
                        t.bezierCurveTo(44.838, 15.153, 44.367, 14.683, 43.785, 14.683),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.restore(),
                    t.save(),
                    t.globalAlpha = .5,
                    t.beginPath(),
                    t.moveTo(23.709, 36.33),
                    t.lineTo(4.232, 36.33),
                    t.lineTo(4.232, 27.199),
                    t.lineTo(5.304, 27.199),
                    t.lineTo(5.304, 35.259),
                    t.lineTo(23.709, 35.259),
                    t.lineTo(23.709, 36.33),
                    t.closePath(),
                    t.fill(),
                    t.stroke(),
                    t.restore(),
                    t.restore()
                }
            },
            subnetwork: {
                draw: function (t) {
                    t.save(),
                        t.translate(0, 0),
                        t.beginPath(),
                        t.moveTo(0, 0),
                        t.lineTo(60.75, 0),
                        t.lineTo(60.75, 42.125),
                        t.lineTo(0, 42.125),
                        t.closePath(),
                        t.clip(),
                        t.translate(0, .26859504132231393),
                        t.scale(.6694214876033058, .6694214876033058),
                        t.translate(0, 0),
                        t.strokeStyle = "rgba(0,0,0,0)",
                        t.lineCap = "butt",
                        t.lineJoin = "miter",
                        t.miterLimit = 4,
                        t.save(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.restore(),
                        t.save();
                    var i = t.createLinearGradient(43.6724, -2.7627, 43.6724, 59.3806);
                    i.addColorStop(0, "rgba(159, 160, 160, 0.7)"),
                        i.addColorStop(.9726, "#E9EAEA"),
                        t.fillStyle = i,
                        t.beginPath(),
                        t.moveTo(61.732, 16.509),
                        t.bezierCurveTo(61.686, 16.509, 61.644, 16.515, 61.599, 16.515),
                        t.bezierCurveTo(58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006),
                        t.bezierCurveTo(29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415),
                        t.bezierCurveTo(9.09, 20.566, 2.229, 28.136, 2.229, 37.326),
                        t.bezierCurveTo(2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006),
                        t.bezierCurveTo(23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001),
                        t.bezierCurveTo(31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001),
                        t.bezierCurveTo(42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001),
                        t.bezierCurveTo(51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014),
                        t.bezierCurveTo(74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001),
                        t.bezierCurveTo(85.116, 26.298, 74.646, 16.509, 61.732, 16.509),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.save(),
                        t.fillStyle = "#9fa0a0",
                        t.beginPath(),
                        t.moveTo(34.966, 44.287),
                        t.lineTo(45.112, 44.287),
                        t.quadraticCurveTo(45.112, 44.287, 45.112, 44.287),
                        t.lineTo(45.112, 47.497),
                        t.quadraticCurveTo(45.112, 47.497, 45.112, 47.497),
                        t.lineTo(34.966, 47.497),
                        t.quadraticCurveTo(34.966, 47.497, 34.966, 47.497),
                        t.lineTo(34.966, 44.287),
                        t.quadraticCurveTo(34.966, 44.287, 34.966, 44.287),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.fillStyle = "#727171",
                        t.beginPath(),
                        t.moveTo(48.306, 48.439),
                        t.bezierCurveTo(48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52),
                        t.lineTo(32.854, 49.52),
                        t.bezierCurveTo(32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439),
                        t.lineTo(31.771, 48.578),
                        t.bezierCurveTo(31.771, 47.981, 32.253, 47.497, 32.854, 47.497),
                        t.lineTo(47.226, 47.497),
                        t.bezierCurveTo(47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578),
                        t.lineTo(48.306, 48.439),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.fillStyle = "#b5b5b6",
                        t.beginPath(),
                        t.moveTo(23.302, 42.82),
                        t.bezierCurveTo(23.302, 43.63, 23.96, 44.287, 24.772, 44.287),
                        t.lineTo(55.308, 44.287),
                        t.bezierCurveTo(56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82),
                        t.lineTo(56.775, 40.98),
                        t.lineTo(23.302, 40.98),
                        t.lineTo(23.302, 42.82),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.fillStyle = "#3e3a39",
                        t.beginPath(),
                        t.moveTo(55.307, 21.229),
                        t.lineTo(24.771, 21.229),
                        t.bezierCurveTo(23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695),
                        t.lineTo(23.301000000000002, 40.933),
                        t.lineTo(56.774, 40.933),
                        t.lineTo(56.774, 22.695),
                        t.bezierCurveTo(56.774, 21.884, 56.119, 21.229, 55.307, 21.229),
                        t.closePath(),
                        t.fill(),
                        t.stroke(),
                        t.restore(),
                        t.save(),
                        t.save(),
                        t.restore(),
                        t.save(),
                        t.restore(),
                        t.restore(),
                        t.save(),
                        i = t.createLinearGradient(29.04, 20.4219, 51.0363, 42.4181),
                        i.addColorStop(0, "#B2CBEA"),
                        i.addColorStop(1, "#2E8ECE"),
                        t.fillStyle = i,
                        t.beginPath(),
                        t.moveTo(53.485, 23.353),
                        t.lineTo(26.592, 23.353),
                        t.bezierCurveTo(25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003),
                        t.lineTo(25.427, 38.807),
                        t.lineTo(54.647, 38.807),
                        t.lineTo(54.647, 24.517000000000003),
                        t.bezierCurveTo(54.648, 23.873, 54.127, 23.353, 53.485, 23.353),
                        t.closePath(),
                    t.fill(),
                    t.stroke(),
                    t.restore(),
                    t.restore(),
                    t.restore()
                }
            }
        };
    for (var Mh in kh)
        Te("Q-" + Mh, kh[Mh]);
    var Bh = function () {
            this.$invalidateRotate = !1;
            var t = this._fi;
            t.clear();
            var i = this._87.x + this.$border / 2,
                e = this._87.y + this.$border / 2,
                n = this._87.width - this.$border,
                r = this._87.height - this.$border,
                s = He.call(this, {
                    x: i,
                    y: e
                });
            Xe(t, s.x, s.y, !0),
                s = He.call(this, {
                    x: i + n,
                    y: e
                }),
                Xe(t, s.x, s.y),
                s = He.call(this, {
                    x: i + n,
                    y: e + r
                }),
                Xe(t, s.x, s.y),
                s = He.call(this, {
                    x: i,
                    y: e + r
                }),
                Xe(t, s.x, s.y),
            this.__lyPointer && (s = He.call(this, {
                x: this._pointerX,
                y: this._pointerY
            }), Xe(t, s.x, s.y)),
            this.$border && t.grow(this.$border / 2)
        },
        Gh = 20,
        $h = {
            _hn: !1,
            _jv: null,
            _de: 0,
            _lj: -1,
            _lk: null,
            _e5: function (t) {
                this._jv || (this._jv = [], this._jo = fh),
                    this._jv.push(t),
                    this._ec(),
                    this._lc()
            },
            _lc: function () {
                if (!this._lk) {
                    var t = this;
                    this._lk = setTimeout(function i() {
                        return t._ec() !== !1 ? void (t._lk = setTimeout(i, t._g3())) : void delete t._lk
                    }, this._g3())
                }
            },
            _g3: function () {
                return Math.max(Gh, this._jv[this._lj].delay)
            },
            _ec: function () {
                return this._g5(this._lj + 1)
            },
            _g5: function (t) {
                if (this._hn)
                    t %= this._de;
                else if (t >= this._jv.length)
                    return !1;
                if (this._lj == t)
                    return !1;
                this._lj = t;
                var i = this._jv[this._lj],
                    e = i._mzache;
                return e || (i._mzache = e = Fi(this.width, this.height), e.g.putImageData(i.data, 0, 0), e._pixels = i._pixels),
                    this._ld = e,
                    this.$invalidateSize = !0,
                    this._du()
            },
            _mzd: function () {
                return this._jv ? (this._hn = !0, this._de = this._jv.length, 1 == this._de ? this._du() : void this._lc()) : void this._j1()
            },
            _lo: function () {
                this._lk && (clearTimeout(this._lk), delete this._lk)
            },
            _du: function () {
                var t = this._dispatcher.listeners;
                if (!t || !t.length)
                    return !1;
                for (var i = new fo(this, "image", "load", this._ld), e = 0, n = t.length; n > e; e++) {
                    var r = t[e];
                    r.scope._jk && r.scope._jk._ijed ? (t.splice(e, 1), e--, n--) : r.onEvent.call(r.scope, i)
                }
                return t.length > 0
            },
            _mwi: function (t, i) {
                this._dispatcher.addListener(t, i),
                this._hn && !this._lk && this._lc()
            },
            _6j: function (t, i) {
                this._dispatcher.removeListener(t, i),
                this._dispatcher._mxr() || this._lo()
            },
            _ij: function () {
                this._lo(),
                    this._dispatcher.clear()
            },
            _fx: function () {
                var t = this._ld._mxufferedImage;
                return t || (this._ld._mxufferedImage = t = new Nh(this._ld, 1)),
                    t
            }
        },
        Fh = function (t) {
            return t.reduce(function (t, i) {
                return 2 * t + i
            }, 0)
        },
        jh = function (t) {
            for (var i = [], e = 7; e >= 0; e--)
                i.push(!!(t & 1 << e));
            return i
        },
        Yh = function (t) {
            this.data = t,
                this.len = this.data.length,
                this.pos = 0,
                this.readByte = function () {
                    if (this.pos >= this.data.length)
                        throw new Error("Attempted to read past end of stream.");
                    return 255 & t.charCodeAt(this.pos++)
                },
                this.readBytes = function (t) {
                    for (var i = [], e = 0; t > e; e++)
                        i.push(this.readByte());
                    return i
                },
                this.read = function (t) {
                    for (var i = "", e = 0; t > e; e++)
                        i += String.fromCharCode(this.readByte());
                    return i
                },
                this.readUnsigned = function () {
                    var t = this.readBytes(2);
                    return (t[1] << 8) + t[0]
                }
        },
        Hh = function (t, i) {
            for (var e, n, r = 0, s = function (t) {
                for (var e = 0, n = 0; t > n; n++)
                    i.charCodeAt(r >> 3)
                    & 1 << (7 & r) && (e |= 1 << n), r++;
                return e
            }, o = [], h = 1 << t, a = h + 1, l = t + 1, _ = [], u = function () {
                _ = [],
                    l = t + 1;
                for (var i = 0; h > i; i++)
                    _[i] = [i];
                _[h] = [],
                    _[a] = null
            }; ;) if (n = e, e = s(l), e !== h) {
                if (e === a)
                    break;
                if (e < _.length)
                    n !== h && _.push(_[n].concat(_[e][0]));
                else {
                    if (e !== _.length)
                        throw new Error("Invalid LZW code.");
                    _.push(_[n].concat(_[n][0]))
                }
                o.push.apply(o, _[e]),
                _.length === 1 << l && 12 > l && l++
            } else
                u();
            return o
        },
        Uh = function (t, i) {
            i || (i = {});
            var e = function (i) {
                    for (var e = [], n = 0; i > n; n++)
                        e.push(t.readBytes(3));
                    return e
                },
                n = function () {
                    var i,
                        e;
                    e = "";
                    do
                        i = t.readByte(), e += t.read(i);
                    while (0 !== i);
                    return e
                },
                r = function () {
                    var n = {};
                    if (n.sig = t.read(3), n.ver = t.read(3), "GIF" !== n.sig)
                        throw new Error("Not a GIF file.");
                    n.width = t.readUnsigned(),
                        n.height = t.readUnsigned();
                    var r = jh(t.readByte());
                    n.gctFlag = r.shift(),
                        n.colorRes = Fh(r.splice(0, 3)),
                        n.sorted = r.shift(),
                        n.gctSize = Fh(r.splice(0, 3)),
                        n.bgColor = t.readByte(),
                        n.pixelAspectRatio = t.readByte(),
                    n.gctFlag && (n.gct = e(1 << n.gctSize + 1)),
                    i.hdr && i.hdr(n)
                },
                s = function (e) {
                    var r = function (e) {
                            var n = (t.readByte(), jh(t.readByte()));
                            e.reserved = n.splice(0, 3),
                                e.disposalMethod = Fh(n.splice(0, 3)),
                                e.userInput = n.shift(),
                                e.transparencyGiven = n.shift(),
                                e.delayTime = t.readUnsigned(),
                                e.transparencyIndex = t.readByte(),
                                e.terminator = t.readByte(),
                            i.gce && i.gce(e)
                        },
                        s = function (t) {
                            t.comment = n(),
                            i.com && i.com(t)
                        },
                        o = function (e) {
                            t.readByte();
                            e.ptHeader = t.readBytes(12),
                                e.ptData = n(),
                            i.pte && i.pte(e)
                        },
                        h = function (e) {
                            {
                                var r = function (e) {
                                        t.readByte();
                                        e.unknown = t.readByte(),
                                            e.iterations = t.readUnsigned(),
                                            e.terminator = t.readByte(),
                                        i.app && i.app.NETSCAPE && i.app.NETSCAPE(e)
                                    },
                                    s = function (t) {
                                        t.appData = n(),
                                        i.app && i.app[t.identifier] && i.app[t.identifier](t)
                                    };
                                t.readByte()
                            }
                            switch (e.identifier = t.read(8), e.authCode = t.read(3), e.identifier) {
                                case "NETSCAPE":
                                    r(e);
                                    break;
                                default:
                                    s(e)
                            }
                        },
                        a = function (t) {
                            t.data = n(),
                            i.unknown && i.unknown(t)
                        };
                    switch (e.label = t.readByte(), e.label) {
                        case 249:
                            e.extType = "gce",
                                r(e);
                            break;
                        case 254:
                            e.extType = "com",
                                s(e);
                            break;
                        case 1:
                            e.extType = "pte",
                                o(e);
                            break;
                        case 255:
                            e.extType = "app",
                                h(e);
                            break;
                        default:
                            e.extType = "unknown",
                                a(e)
                    }
                },
                o = function (r) {
                    var s = function (t, i) {
                        for (var e = new Array(t.length), n = t.length / i, r = function (n, r) {
                            var s = t.slice(r * i, (r + 1) * i);
                            e.splice.apply(e, [n * i, i].concat(s))
                        }, s = [0, 4, 2, 1], o = [8, 8, 4, 2], h = 0, a = 0; 4 > a; a++)
                            for (var l = s[a]; n > l; l += o[a])
                                r(l, h), h++;
                        return e
                    };
                    r.leftPos = t.readUnsigned(),
                        r.topPos = t.readUnsigned(),
                        r.width = t.readUnsigned(),
                        r.height = t.readUnsigned();
                    var o = jh(t.readByte());
                    r.lctFlag = o.shift(),
                        r.interlaced = o.shift(),
                        r.sorted = o.shift(),
                        r.reserved = o.splice(0, 2),
                        r.lctSize = Fh(o.splice(0, 3)),
                    r.lctFlag && (r.lct = e(1 << r.lctSize + 1)),
                        r.lzwMinCodeSize = t.readByte();
                    var h = n();
                    r.pixels = Hh(r.lzwMinCodeSize, h),
                    r.interlaced && (r.pixels = s(r.pixels, r.width)),
                    i.img && i.img(r)
                },
                h = function () {
                    var e = {};
                    switch (e.sentinel = t.readByte(), String.fromCharCode(e.sentinel)) {
                        case "!":
                            e.type = "ext",
                                s(e);
                            break;
                        case ",":
                            e.type = "img",
                                o(e);
                            break;
                        case ";":
                            e.type = "eof",
                            i.eof && i.eof(e);
                            break;
                        default:
                            throw new Error("Unknown block: 0x" + e.sentinel.toString(16))
                    }
                    "eof" !== e.type && setTimeout(h, 0)
                },
                a = function () {
                    r(),
                        setTimeout(h, 0)
                };
            a()
        },
        Wh = "";
    i.addEventListener && i.addEventListener("keydown", function (t) {
        if (t.ctrlKey && t.shiftKey && t.altKey && 73 == t.keyCode) {
            var i = Zo.name + "\nVersion - " + Zo.version + "\nPublish Date - " + Zo.publishDate + "\n" + Zo.about + "\n" + Zo.copyright + Wh;
            Zo.alert(i)
        }
    }, !1),
        Wh = "\nLicensed to: " + decodeURIComponent("IRIS%20by%20MOBIGEN%20CO.%2CLTD.");
    var qh = function (t, i, e, n) {
        this.source = t,
            this.kind = i,
            this.oldValue = n,
            this.value = e,
            this.propertyType = Jo.PROPERTY_TYPE_STYLE
    };
    k(qh, co);
    var Xh = function (t) {
        this.id = ++Ls,
            this._mz3 = {},
            this._j6 = {},
        t && (this.$name = t)
    };
    Xh.prototype = {
        _j6: null,
        getStyle: function (t) {
            return this._j6[t]
        },
        setStyle: function (t, i) {
            var e = this._j6[t];
            return e === i || e && i && e.equals && e.equals(i) ? !1 : this._mx8(t, i, new qh(this, t, i, e), this._j6)
        },
        putStyles: function (t, i) {
            for (var e in t) {
                var n = t[e];
                i ? this._j6[e] = n : this.setStyle(e, n)
            }
        },
        _$s: !0,
        invalidateVisibility: function (t) {
            this._$s = !0,
            t || (this instanceof Kh && this.hasEdge() && this.forEachEdge(function (t) {
                t._$s = !0
            }), this._i9() && this.hasChildren() && this.forEachChild(function (t) {
                t.invalidateVisibility()
            }))
        },
        onParentChanged: function () {
            this.invalidateVisibility()
        },
        _i9: function () {
            return !this._49 && this instanceof Qh
        },
        invalidate: function () {
            this.onEvent(new fo(this, "ui", "invalidate"))
        },
        _mzb: null,
        addUI: function (t, i) {
            if (this._mzb || (this._mzb = new Xs), t.id || (t.id = ++Ls), this._mzb.containsById(t.id))
                return !1;
            var e = {
                id: t.id,
                ui: t,
                bindingProperties: i
            };
            this._mzb.add(e);
            var n = new fo(this, "ui", "add", e);
            return this.onEvent(n)
        },
        removeUI: function (t) {
            if (!this._mzb)
                return !1;
            var i = this._mzb.getById(t.id);
            return i ? (this._mzb.remove(i), void this.onEvent(new fo(this, "ui", "remove", i))) : !1
        },
        toString: function () {
            return this.$name || this.id
        },
        type: "Q.Element",
        _49: !1,
        _i5: !0
    },
        k(Xh, Ao),
        U(Xh.prototype, ["uiClass", "name", "zIndex", "tooltip"]),
        Z(Xh.prototype, {
            enableSubNetwork: {
                get: function () {
                    return this._49
                },
                set: function (t) {
                    if (this._49 != t) {
                        var i = this._49;
                        this._49 = t,
                        this instanceof Kh && this._11(),
                            this.onEvent(new co(this, "enableSubNetwork", t, i))
                    }
                }
            },
            bindingUIs: {
                get: function () {
                    return this._mzb
                }
            },
            styles: {
                get: function () {
                    return this._j6
                },
                set: function (t) {
                    if (this._j6 != t) {
                        for (var i in this._j6)
                            i in t || (t[i] = e);
                        this.putStyles(t),
                            this._j6 = t
                    }
                }
            }
        });
    var Vh = function (t, i, e) {
        this.id = ++Ls,
            this._mz3 = {},
            this._j6 = {},
        e && (this.$name = e),
            this.$from = t,
            this.$to = i,
            this.connect()
    };
    Vh.prototype = {
        $uiClass: Zn,
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
            if (this._eb)
                return !1;
            if (!this.$from || !this.$to)
                return !1;
            if (this._eb = !0, this.$from == this.$to)
                return void this.$from._ib(this);
            vn(this.$to, this),
                fn(this.$from, this),
                tn(this.$from, this, this.$to);
            var t = this.fromAgent,
                i = this.toAgent;
            if (t != i) {
                var e;
                this.$from._dz && (nn(t, this, i), e = !0),
                this.$to._dz && (sn(i, this, t), e = !0),
                e && tn(t, this, i)
            }
        },
        disconnect: function () {
            if (!this._eb)
                return !1;
            if (this._eb = !1, this.$from == this.$to)
                return void this.$from._mz5(this);
            cn(this.$from, this),
                gn(this.$to, this),
                en(this.$from, this, this.$to);
            var t = this.fromAgent,
                i = this.toAgent;
            if (t != i) {
                var e;
                this.$from._dz && (rn(t, this, i), e = !0),
                this.$to._dz && (on(i, this, t), e = !0),
                e && en(t, this, i)
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
            var t = this.fromAgent,
                i = this.toAgent;
            return t == i ? this.$from._dz || this.$to._dz ? null : this.$from._47 : this.fromAgent.getEdgeBundle(this.toAgent)
        },
        _9y: null,
        hasPathSegments: function () {
            return this._9y && !this._9y.isEmpty()
        },
        isBundleEnabled: function () {
            return this.bundleEnabled && !this.hasPathSegments()
        },
        firePathChange: function (t) {
            this.onEvent(new co(this, "path.segment", t))
        },
        addPathSegment: function (t, i, e) {
            var n = new Ch(i || Lh, t);
            this._9y || (this._9y = new Xs),
                this._9y.add(n, e),
                this.firePathChange(n)
        },
        addPathSegement: function () {
            return Zo.log('change "edge.addPathSegement(...)" to "edge.addPathSegment(...)"'),
                this.addPathSegment.apply(this, arguments)
        },
        removePathSegmentByIndex: function (t) {
            if (!this._9y)
                return !1;
            var i = this._9y.getByIndex(t);
            i && (this._9y.remove(i), this.firePathChange(i))
        },
        removePathSegment: function (t) {
            return this._9y ? (this._9y.remove(t), void this.firePathChange(t)) : !1
        },
        movePathSegment: function (t, i, e) {
            if (!this._9y)
                return !1;
            if (t = t || 0, i = i || 0, Zo.isNumber(e)) {
                var n = this._9y.getByIndex(e);
                return n ? (n.move(t, i), void this.firePathChange()) : !1
            }
            c(function (e) {
                e.move(t, i)
            }),
                this.firePathChange()
        },
        move: function (t, i) {
            return this._9y ? (this._9y.forEach(function (e) {
                e.move(t, i)
            }, this), void this.firePathChange()) : !1
        },
        validateEdgeBundle: function () {
        }
    },
        k(Vh, Xh),
        Z(Vh.prototype, {
            pathSegments: {
                get: function () {
                    return this._9y
                },
                set: function (t) {
                    Zo.isArray(t) && (t = new Xs(t)),
                        this._9y = t,
                        this.firePathChange()
                }
            },
            from: {
                get: function () {
                    return this.$from
                },
                set: function (t) {
                    if (this.$from != t) {
                        var i = new co(this, "from", t, this.$from);
                        this.beforeEvent(i) !== !1 && (this.disconnect(), this.$from = t, this.connect(), this.onEvent(i))
                    }
                }
            },
            to: {
                get: function () {
                    return this.$to
                },
                set: function (t) {
                    if (this.$to != t) {
                        var i = new co(this, "to", t, this.$to);
                        this.beforeEvent(i) !== !1 && (this.disconnect(), this.$to = t, this.connect(), this.onEvent(i))
                    }
                }
            },
            fromAgent: {
                get: function () {
                    return this.$from ? this.$from._dz || this.$from : null
                }
            },
            toAgent: {
                get: function () {
                    return this.$to ? this.$to._dz || this.$to : null
                }
            }
        }),
        U(Vh.prototype, ["edgeType", {
            name: "bundleEnabled",
            value: !0
        }, "angle"]);
    var Kh = function (t, i, e) {
        this.id = ++Ls,
            this._mz3 = {},
            this._j6 = {},
        t && (this.$name = t),
            this.$image = "Q-node",
            this.$anchorPosition = no.CENTER_MIDDLE,
            this.$location = {
                x: i || 0,
                y: e || 0
            },
            this._linkedNodes = {}
    };
    Kh.prototype = {
        $uiClass: Jn,
        _dz: null,
        forEachEdge: function (t, i, e) {
            return !e && this._l1 && this._l1.forEach(t, i) === !1 ? !1 : mn(this, t, i)
        },
        forEachOutEdge: function (t, i) {
            return pn(this, t, i)
        },
        forEachInEdge: function (t, i) {
            return yn(this, t, i)
        },
        getEdges: function () {
            var t = [];
            return this.forEachEdge(function (i) {
                t.push(i)
            }),
                t
        },
        _if: null,
        _fj: null,
        _j9: null,
        _ie: null,
        _mx9: 0,
        _9m: 0,
        hasInEdge: function () {
            return null != this._if
        },
        hasOutEdge: function () {
            return null != this._fj
        },
        hasEdge: function () {
            return null != this._if || null != this._fj || this.hasLoops()
        },
        linkedWith: function (t) {
            return t.from == this || t.to == this || t.fromAgent == this || t.toAgent == this
        },
        hasEdgeWith: function (t) {
            var i = this.getEdgeBundle(t);
            return i && i.edges.length > 0
        },
        _l1: null,
        _47: null,
        hasLoops: function () {
            return this._l1 && this._l1.length > 0
        },
        _ib: function (t) {
            return this._l1 || (this._l1 = new Xs, this._47 = new El(this, this, this._l1)),
                this._47._im(t)
        },
        _mz5: function (t) {
            return this._47 ? this._47._d8(t) : void 0
        },
        getEdgeBundle: function (t) {
            return t == this ? this._47 : this._linkedNodes[t.id] || t._linkedNodes[this.id]
        },
        _6l: function () {
            return this._9h && this._9h.length
        },
        _5l: function () {
            return this._8c && this._8c.length
        },
        _9k: function () {
            return this._6l() || this._5l()
        },
        _8c: null,
        _9h: null,
        _mz6: function () {
            var t = this._dz,
                i = Qe(this);
            if (t != i) {
                var e = En(this);
                this._94(i),
                    e.forEach(function (t) {
                        var i = t.fromAgent,
                            e = t.toAgent,
                            t = t.edge,
                            n = t.$from._dz,
                            r = t.$to._dz;
                        i != e && (i && rn(i, t, e || t.$to), e && on(e, t, i || t.$from)),
                        n != r && (n && nn(n, t, r || t.$to), r && sn(r, t, n || t.$from), tn(n || t.$from, t, r || t.$to))
                    }, this)
            }
        },
        onParentChanged: function () {
            this.invalidateVisibility(),
                this._mz6()
        },
        _89: null,
        _11: function () {
            var t;
            if (this._49 ? t = null : (t = this._dz, t || this._gs !== !1 || (t = this)), this._89 == t)
                return !1;
            if (this._89 = t, this._fe && this._fe._jz.length)
                for (var i, e = this._fe._jz, n = 0, r = e.length; r > n; n++)
                    i = e[n], i instanceof Kh && i._94(t)
        },
        setLocation: function (t, i) {
            if (this.$location && this.$location.x == t && this.$location.y == i)
                return !1;
            var e = new co(this, "location", this.$location, {
                x: t,
                y: i
            });
            return this.beforeEvent(e) === !1 ? !1 : (this.$location ? (this.$location.x = t, this.$location.y = i) : this.$location = new Zs(t, i), this.onEvent(e), !0)
        },
        _do: null,
        addFollower: function (t) {
            return null == t ? !1 : t.host = this
        },
        removeFollower: function (t) {
            return this._do && this._do.contains(t) ? t.host = null : !1
        },
        hasFollowers: function () {
            return this._do && !this._do.isEmpty()
        },
        toFollowers: function () {
            return this.hasFollowers() ? this._do.toDatas() : null
        },
        clearFollowers: function () {
            if (this.hasFollowers()) {
                {
                    this.toFollowers()
                }
                c(this.toFollowers(), function (t) {
                    t.host = null
                })
            }
        },
        getFollowerIndex: function (t) {
            return this._do && this._do.contains(t) ? this._do.indexOf(t) : -1
        },
        setFollowerIndex: function (t, i) {
            return this._do && this._do.contains(t) ? void this._do.setIndex(t, i) : -1
        },
        getFollowerCount: function () {
            return this._do ? this._do.length : 0
        },
        _96: function () {
            return this._do ? this._do : (this._do = new Xs, this._do)
        },
        isFollow: function (t) {
            if (!t || !this._host)
                return !1;
            for (var i = this._host; i;) {
                if (i == t)
                    return !0;
                i = i._host
            }
            return !1
        },
        _94: function (t) {
            return t == this._dz ? !1 : (this._dz = t, this.invalidateVisibility(), void this._11())
        },
        type: "Q.Node"
    },
        k(Kh, Xh),
        Z(Kh.prototype, {
            loops: {
                get: function () {
                    return this._l1
                }
            },
            edgeCount: {
                get: function () {
                    return this._mx9 + this._9m
                }
            },
            agentNode: {
                get: function () {
                    return this._dz || this
                }
            },
            host: {
                set: function (t) {
                    if (this == t || t == this._host)
                        return !1;
                    var i = new co(this, "host", this._host, t);
                    if (!1 === this.beforeEvent(i))
                        return !1;
                    var e = null,
                        n = null,
                        r = this._host;
                    if (null != t && (e = new co(t, "follower.add", null, this), !1 === t.beforeEvent(e)))
                        return !1;
                    if (null != r && (n = new co(r, "follower.remove", null, this), !1 === r.beforeEvent(n)))
                        return !1;
                    if (this._host = t, null != t) {
                        var s = t._96();
                        s.add(this)
                    }
                    if (null != r) {
                        var s = r._96();
                        s.remove(this)
                    }
                    return this.onEvent(i),
                    null != t && t.onEvent(e),
                    null != r && r.onEvent(n),
                        !0
                },
                get: function () {
                    return this._host
                }
            }
        }),
        U(Kh.prototype, ["location", "size", "image", "rotate", "anchorPosition"]),
        Z(Kh.prototype, {
            x: {
                get: function () {
                    return this.location.x
                },
                set: function (t) {
                    t != this.location.x && (this.location = new Zs(t, this.location.y))
                }
            },
            y: {
                get: function () {
                    return this.location.y
                },
                set: function (t) {
                    t != this.location.y && (this.location = new Zs(this.location.x, t))
                }
            }
        });
    var Zh = function (t, i) {
        t instanceof Ph && (i = t, t = e),
            M(this, Zh, [t]),
            this.$path = i || new Ph,
            this.image = this.$path,
            this.anchorPosition = null,
            this.uiClass = Xr,
        Ws.SHAPENODE_STYLES || (Ws.SHAPENODE_STYLES = {}, Ws.SHAPENODE_STYLES[ea.ARROW_TO] = !1),
            this.putStyles(Ws.SHAPENODE_STYLES)
    };
    Zh.prototype = {
        $uiClass: Xr,
        type: "Q.ShapeNode",
        moveTo: function (t, i) {
            this.path.moveTo(t, i),
                this.firePathChange()
        },
        lineTo: function (t, i) {
            this.path.lineTo(t, i),
                this.firePathChange()
        },
        quadTo: function (t, i, e, n) {
            this.path.quadTo(t, i, e, n),
                this.firePathChange()
        },
        curveTo: function (t, i, e, n, r, s) {
            this.path.curveTo(t, i, e, n, r, s),
                this.firePathChange()
        },
        arcTo: function (t, i, e, n, r) {
            this.path.arcTo(t, i, e, n, r),
                this.firePathChange()
        },
        closePath: function () {
            this.path.closePath(),
                this.firePathChange()
        },
        clear: function () {
            this.path.clear(),
                this.firePathChange()
        },
        removePathSegmentByIndex: function (t) {
            this.path.removePathSegment(t) !== !1 && this.firePathChange()
        },
        firePathChange: function () {
            this.path._6f = !0,
                this.onEvent(new co(this, "path.segment"))
        }
    },
        k(Zh, Kh),
        U(Zh.prototype, ["path"]),
        Z(Zh.prototype, {
            pathSegments: {
                get: function () {
                    return this.path.segments
                },
                set: function (t) {
                    this.path.segments = t || [],
                        this.firePathChange()
                }
            },
            length: {
                get: function () {
                    return this.path.length
                }
            }
        }),
        Zo.ShapeNode = Zh;
    var Jh = {
        _jc: {},
        register: function (t, i) {
            Jh._jc[t] = i
        },
        getShape: function (t, i, n, r, s, o) {
            r === e && (r = i, s = n, i = 0, n = 0),
            r || (r = 50),
            s || (s = 50);
            var h = Jh._jc[t];
            return h ? h.generator instanceof Function ? h.generator(i, n, r, s, o) : h : void 0
        },
        getRect: function (t, i, e, n, r, s, o) {
            return Tn(o || new Ph, t, i, e, n, r, s)
        },
        getAllShapes: function (t, i, e, n, r) {
            var s = {};
            for (var o in Jh._jc) {
                var h = Jh.getShape(o, t, i, e, n, r);
                h && (s[o] = h)
            }
            return s
        },
        createRegularShape: function (t, i, e, n, r) {
            return Sn(t, i, e, n, r)
        }
    };
    Fn(),
        jn.prototype = {
            type: "Q.Bus"
        },
        k(jn, Zh),
        Zo.Bus = jn,
        Yn.prototype = {
            _h0: function (t) {
                var i,
                    e = t._jk;
                i = e ? e._fe : this.$roots;
                var n = i.indexOf(t);
                if (0 > n)
                    throw new Error("data '" + t + "' not exist in the box");
                for (; n >= 0;) {
                    if (0 == n)
                        return e instanceof Kh ? e : null;
                    n -= 1;
                    var s = i.getByIndex(n);
                    if (s = r(s))
                        return s
                }
                return null
            },
            forEachNode: function (t, i) {
                this.forEach(function (e) {
                    return e instanceof Kh && t.call(i, e) === !1 ? !1 : void 0
                })
            },
            _3x: null
        },
        k(Yn, Lo),
        Z(Yn.prototype, {
            propertyChangeDispatcher: {
                get: function () {
                    return this._$u
                }
            },
            currentSubNetwork: {
                get: function () {
                    return this._3x
                },
                set: function (t) {
                    if (t && !t.enableSubNetwork && (t = null), this._3x != t) {
                        var i = this._3x;
                        this._3x = t,
                            this._$u.onEvent(new co(this, "currentSubNetwork", t, i))
                    }
                }
            }
        }),
        Ws.GROUP_TYPE = Jo.GROUP_TYPE_RECT,
        Ws.GROUP_PADDING = 5,
        Ws.GROUP_EXPANDED = !0,
        Ws.GROUP_MIN_SIZE = {
            width: 60,
            height: 60
        };
    var Qh = function (t, i, n) {
        M(this, Qh, arguments),
        (i === e || n === e) && (this.$location.invalidateFlag = !0),
            this.$groupType = Ws.GROUP_TYPE,
            this.$padding = Ws.GROUP_PADDING,
            this.$image = kh.group,
            this.$minSize = Ws.GROUP_MIN_SIZE,
            this.expanded = Ws.GROUP_EXPANDED
    };
    Qh.prototype = {
        type: "Q.Group",
        $uiClass: Yr,
        _mw6: function () {
            return !this._gs && !this._dz
        },
        forEachOutEdge: function (t, i, e) {
            if (pn(this, t, i) === !1)
                return !1;
            if (!e && this._mw6())
                return this._8c ? this._8c.forEach(t, i) : void 0
        },
        forEachInEdge: function (t, i, e) {
            if (yn(this, t, i) === !1)
                return !1;
            if (!e && this._mw6())
                return this._9h ? this._9h.forEach(t, i) : void 0
        },
        forEachEdge: function (t, i, e) {
            if (B(this, Qh, "forEachEdge", arguments) === !1)
                return !1;
            if (!e && !e && this._mw6())
                return this._9h && this._9h.forEach(t, i) === !1 ? !1 : this._8c ? this._8c.forEach(t, i) : void 0
        },
        hasInEdge: function (t) {
            return t ? null != this._if : null != this._if || this._6l()
        },
        hasOutEdge: function (t) {
            return t ? null != this._fj : null != this._fj || this._5l()
        },
        hasEdge: function (t) {
            return t ? null != this._if || null != this._fj : null != this._if || null != this._fj || this._9k()
        }
    },
        k(Qh, Kh),
        Z(Qh.prototype, {
            expanded: {
                get: function () {
                    return this._gs
                },
                set: function (t) {
                    if (this._gs != t) {
                        var i = new co(this, "expanded", t, this._gs);
                        this.beforeEvent(i) !== !1 && (this._gs = t, this._11(), this.onEvent(i), this._dz || Hn.call(this))
                    }
                }
            }
        }),
        U(Qh.prototype, ["minSize", "groupType", "padding", "groupImage"]),
        Zo.Group = Qh,
        Un.prototype.type = "Q.Text",
        k(Un, Kh),
        Zo.Text = Un;
    var ta = function (t) {
        this._je = new io,
            this._87 = new io,
            this._fi = new io,
            this.id = ++Ls,
        t && (this.data = t)
    };
    ta.prototype = {
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
            this.$anchorPoint = ai(this.anchorPosition, this._85, this._6b)
        },
        setMeasuredBounds: function (t, i, e, n) {
            return t instanceof Object && (e = t.x, n = t.y, i = t.height, t = t.width),
                this._je.width == t && this._je.height == i && this._je.x == e && this._je.y == n ? !1 : void this._je.set(e || 0, n || 0, t || 0, i || 0)
        },
        initialize: function () {
        },
        measure: function () {
        },
        draw: function () {
        },
        _83: function (t, i, e) {
            e.selectionType == Jo.SELECTION_TYPE_SHADOW ? (t.shadowColor = e.selectionColor, t.shadowBlur = e.selectionShadowBlur * i, t.shadowOffsetX = (e.selectionShadowOffsetX || 0) * i, t.shadowOffsetY = (e.selectionShadowOffsetY || 0) * i) : this._27(t, i, e)
        },
        _27: function (t, i, e) {
            var n = e.selectionBorder || 0;
            e.selectionBackgroundColor && (t.fillStyle = e.selectionBackgroundColor, t.fillRect(this._87.x - n / 2, this._87.y - n / 2, this._87.width + n, this._87.height + n)),
                t.strokeStyle = e.selectionColor,
                t.lineWidth = n,
                t.strokeRect(this._87.x - n / 2, this._87.y - n / 2, this._87.width + n, this._87.height + n)
        },
        _jm: function (t, i, e, n) {
            if (!this._i5)
                return !1;
            if (this.syncSelection || (e = this.selected), (e && !this.syncSelectionStyles || !n) && (n = this), t.save(), 1 != this.$alpha && (t.globalAlpha = this.$alpha), t.translate(this.$x, this.$y), this.$rotatable && this.$_hostRotate && t.rotate(this.$_hostRotate), (this.offsetX || this.offsetY) && t.translate(this.offsetX, this.offsetY), this.$rotate && t.rotate(this.$rotate), this.$layoutByAnchorPoint && this._mxc && t.translate(-this._mxc.x, -this._mxc.y), this.shadowColor && (t.shadowColor = this.shadowColor, t.shadowBlur = this.shadowBlur * i, t.shadowOffsetX = this.shadowOffsetX * i, t.shadowOffsetY = this.shadowOffsetY * i), e && n.selectionType == Jo.SELECTION_TYPE_BORDER_RECT && (this._27(t, i, n), e = !1), this._$t() && this._lrShape && !this._lrShape._empty) {
                this._lrShape.validate();
                var r = {
                    lineWidth: this.$border,
                    strokeStyle: this.borderColor,
                    lineDash: this.borderLineDash,
                    lineDashOffset: this.borderLineDashOffset,
                    fillColor: this.$backgroundColor,
                    fillGradient: this._mxackgroundGradient,
                    lineCap: "butt",
                    lineJoin: "round"
                };
                this._lrShape.draw(t, i, r, e, n),
                    e = !1,
                    t.shadowColor = "rgba(0,0,0,0)"
            }
            t.beginPath(),
                this.draw(t, i, e, n),
                t.restore()
        },
        invalidateData: function () {
            this.$invalidateData = !0,
                this._1n = !0
        },
        invalidateSize: function () {
            this.$invalidateSize = !0,
                this._1n = !0
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
            return this.$invalidateData && (this.$invalidateData = !1, this.measure() !== !1 && (this.$invalidateSize = !0)),
            this.$invalidateSize && this.validateSize && this.validateSize(),
                We.call(this) ? (this.$invalidateRotate = !0, this.onBoundsChanged && this.onBoundsChanged(), !0) : this.$invalidateLocation ? (this.$invalidateLocation = !1, !0) : void 0
        },
        validate: function () {
            var t = this._i5;
            return this.$invalidateVisibility && (this.$invalidateVisibility = !1, this._i5 = this.$visible, !this._i5 || (this.$data || this.$showEmpty) && this._56() !== !1 || (this._i5 = !1)),
                this._i5 ? (this._1n = !1, this._mwq || (this.initialize(), this._mwq = !0), this.doValidate()) : t != this._i5
        },
        _i3: function (t, i) {
            return t -= this.$x,
                i -= this.$y,
                Ue.call(this, {
                    x: t,
                    y: i
                })
        },
        hitTest: function (t, i, e, n) {
            if (t -= this.$x, i -= this.$y, !this._fi.intersectsPoint(t, i, e))
                return !1;
            var r = Ue.call(this, {
                x: t,
                y: i
            });
            return t = r.x,
                i = r.y,
                !n && this._$t() && this._lrShape && this._lrShape.hitTest(t, i, e, !1, this.$border, this.$backgroundColor || this.$backgroundGradient) ? !0 : this.doHitTest(t, i, e)
        },
        doHitTest: function (t, i, e) {
            return this._je.intersectsPoint(t, i, e)
        },
        hitTestByBounds: function (t, i, e, n) {
            var r = this._i3(t, i);
            return !n && this._$t() && this._lrShape && this._lrShape.hitTest(t, i, e, !1, this.$border, this.$backgroundColor || this.$backgroundGradient) ? !0 : this._je.intersectsPoint(r.x, r.y, e)
        },
        onDataChanged: function () {
            this.$invalidateData = !0,
                this._1n = !0,
                this.$invalidateVisibility = !0
        },
        getBounds: function () {
            var t = this._fi.clone();
            return t.offset(this.x, this.y),
            this.parent && (this.parent.rotate && ki(t, this.parent.rotate, t), t.offset(this.parent.x || 0, this.parent.y || 0)),
                t
        },
        destroy: function () {
            this._ijed = !0
        },
        _dr: !1
    },
        Z(ta.prototype, {
            originalBounds: {
                get: function () {
                    return this._je
                }
            },
            data: {
                get: function () {
                    return this.$data
                },
                set: function (t) {
                    if (this.$data != t) {
                        var i = this.$data;
                        this.$data = t,
                            this.onDataChanged(t, i)
                    }
                }
            },
            parent: {
                get: function () {
                    return this._jk
                }
            },
            showOnTop: {
                get: function () {
                    return this._dr
                },
                set: function (t) {
                    t != this._dr && (this._dr = t, this._1n = !0, this._jk && this._jk._mx4 && this._jk._mx4(this))
                }
            }
        }),
        qn(ta.prototype, {
            visible: {
                value: !0,
                validateFlags: ["Visibility", "Location"]
            },
            showEmpty: {
                validateFlags: ["Visibility"]
            },
            anchorPosition: {
                value: no.CENTER_MIDDLE,
                validateFlags: ["AnchorPoint"]
            },
            position: {
                value: no.CENTER_MIDDLE,
                validateFlags: ["Location"]
            },
            offsetX: {
                value: 0,
                validateFlags: ["Location"]
            },
            offsetY: {
                value: 0,
                validateFlags: ["Location"]
            },
            layoutByAnchorPoint: {
                value: !0,
                validateFlags: ["Size", "AnchorPoint"]
            },
            padding: {
                value: 0,
                validateFlags: ["Size"]
            },
            border: {
                value: 0,
                validateFlags: ["Size"]
            },
            borderRadius: {
                value: Ws.BORDER_RADIUS
            },
            showPointer: {
                value: !1,
                validateFlags: ["Size"]
            },
            pointerX: {
                value: 0,
                validateFlags: ["Size"]
            },
            pointerY: {
                value: 0,
                validateFlags: ["Size"]
            },
            pointerWidth: {
                value: Ws.POINTER_WIDTH
            },
            backgroundColor: {
                validateFlags: ["Size"]
            },
            backgroundGradient: {
                validateFlags: ["Size", "BackgroundGradient"]
            },
            selected: {
                value: !1,
                validateFlags: ["Size"]
            },
            selectionBorder: {
                value: Ws.SELECTION_BORDER,
                validateFlags: ["Size"]
            },
            selectionShadowBlur: {
                value: Ws.SELECTION_SHADOW_BLUR,
                validateFlags: ["Size"]
            },
            selectionColor: {
                value: Ws.SELECTION_COLOR,
                validateFlags: ["Size"]
            },
            selectionType: {
                value: Ws.SELECTION_TYPE,
                validateFlags: ["Size"]
            },
            selectionShadowOffsetX: {
                value: 0,
                validateFlags: ["Size"]
            },
            selectionShadowOffsetY: {
                value: 0,
                validateFlags: ["Size"]
            },
            shadowBlur: {
                value: 0,
                validateFlags: ["Size"]
            },
            shadowColor: {
                validateFlags: ["Size"]
            },
            shadowOffsetX: {
                value: 0,
                validateFlags: ["Size"]
            },
            shadowOffsetY: {
                value: 0,
                validateFlags: ["Size"]
            },
            renderColorBlendMode: {},
            renderColor: {},
            x: {
                value: 0,
                validateFlags: ["Location"]
            },
            y: {
                value: 0,
                validateFlags: ["Location"]
            },
            rotatable: {
                value: !0,
                validateFlags: ["Rotate", "Size"]
            },
            rotate: {
                value: 0,
                validateFlags: ["Rotate", "Size"]
            },
            _hostRotate: {
                validateFlags: ["Rotate"]
            },
            lineWidth: {
                value: 0,
                validateFlags: ["Data"]
            },
            alpha: {
                value: 1
            }
        });
    var ia = [Jo.PROPERTY_TYPE_ACCESSOR, Jo.PROPERTY_TYPE_STYLE, Jo.PROPERTY_TYPE_CLIENT];
    Vn.prototype = {
        removeBinding: function (t) {
            for (var i = ia.length; --i >= 0;) {
                var e = ia[i],
                    n = this[e];
                for (var r in n) {
                    var s = n[r];
                    Array.isArray(s) ? (v(s, function (i) {
                        return i.target == t
                    }, this), s.length || delete n[r]) : s.target == t && delete n[r]
                }
            }
        },
        _2v: function (t, i, e) {
            if (!e && (e = this[i.propertyType || Jo.PROPERTY_TYPE_ACCESSOR], !e))
                return !1;
            var n = e[t];
            n ? (Array.isArray(n) || (e[t] = n = [n]), n.push(i)) : e[t] = i
        },
        _30: function (t, i, e, n, r, s) {
            t = t || Jo.PROPERTY_TYPE_ACCESSOR;
            var o = this[t];
            if (!o)
                return !1;
            var h = {
                property: i,
                propertyType: t,
                bindingProperty: n,
                target: e,
                callback: r,
                invalidateSize: s
            };
            this._2v(i, h, o)
        },
        onBindingPropertyChange: function (t, i, e, n) {
            var r = this[e || Jo.PROPERTY_TYPE_ACCESSOR];
            if (!r)
                return !1;
            var s = r[i];
            return s ? (t._1n = !0, Xn(t, s, e, n), !0) : !1
        },
        initBindingProperties: function (t, i) {
            for (var n = ia.length; --n >= 0;) {
                var r = ia[n],
                    s = this[r];
                for (var o in s) {
                    var h = s[o];
                    if (h.bindingProperty) {
                        var a = h.target;
                        if (a) {
                            if (!(a instanceof ta || (a = t[a])))
                                continue
                        } else
                            a = t;
                        var l;
                        l = i === !1 ? t.getProperty(h.property, r) : r == Jo.PROPERTY_TYPE_STYLE ? t.graph.getStyle(t.$data, h.property) : t.$data[h.property],
                        l !== e && (a[h.bindingProperty] = l)
                    }
                }
            }
        }
    };
    var ea = {};
    ea.SELECTION_COLOR = "selection.color",
        ea.SELECTION_BORDER = "selection.border",
        ea.SELECTION_SHADOW_BLUR = "selection.shadow.blur",
        ea.SELECTION_SHADOW_OFFSET_X = "selection.shadow.offset.x",
        ea.SELECTION_SHADOW_OFFSET_Y = "selection.shadow.offset.y",
        ea.SELECTION_TYPE = "selection.type",
        ea.RENDER_COLOR = "render.color",
        ea.RENDER_COLOR_BLEND_MODE = "render.color.blend.mode",
        ea.ALPHA = "alpha",
        ea.SHADOW_BLUR = "shadow.blur",
        ea.SHADOW_COLOR = "shadow.color",
        ea.SHADOW_OFFSET_X = "shadow.offset.x",
        ea.SHADOW_OFFSET_Y = "shadow.offset.y",
        ea.SHAPE_STROKE = "shape.stroke",
        ea.SHAPE_STROKE_STYLE = "shape.stroke.style",
        ea.SHAPE_LINE_DASH = "shape.line.dash",
        ea.SHAPE_LINE_DASH_OFFSET = "shape.line.dash.offset",
        ea.SHAPE_FILL_COLOR = "shape.fill.color",
        ea.SHAPE_FILL_GRADIENT = "shape.fill.gradient",
        ea.SHAPE_OUTLINE = "shape.outline",
        ea.SHAPE_OUTLINE_STYLE = "shape.outline.style",
        ea.LINE_CAP = "line.cap",
        ea.LINE_JOIN = "line.join",
        ea.LAYOUT_BY_PATH = "layout.by.path",
        ea.BACKGROUND_COLOR = "background.color",
        ea.BACKGROUND_GRADIENT = "background.gradient",
        ea.BORDER = "border.width",
        ea.BORDER_COLOR = "border.color",
        ea.BORDER_LINE_DASH = "border.line.dash",
        ea.BORDER_LINE_DASH_OFFSET = "border.line.dash.offset",
        ea.BORDER_RADIUS = "border.radius",
        ea.PADDING = "padding",
        ea.IMAGE_BACKGROUND_COLOR = "image.background.color",
        ea.IMAGE_BACKGROUND_GRADIENT = "image.background.gradient",
        ea.IMAGE_BORDER = "image.border.width",
        ea.IMAGE_BORDER_STYLE = ea.IMAGE_BORDER_COLOR = "image.border.style",
        ea.IMAGE_BORDER_LINE_DASH = "image.border.line.dash",
        ea.IMAGE_BORDER_LINE_DASH_OFFSET = "image.border.line.dash.offset",
        ea.IMAGE_RADIUS = ea.IMAGE_BORDER_RADIUS = "image.radius",
        ea.IMAGE_PADDING = "image.padding",
        ea.IMAGE_Z_INDEX = "image.z.index",
        ea.IMAGE_ADJUST = "image.adjust",
        ea.IMAGE_ALPHA = "image.alpha",
        ea.LABEL_ROTATE = "label.rotate",
        ea.LABEL_POSITION = "label.position",
        ea.LABEL_VISIBLE = "label.visible",
        ea.LABEL_ANCHOR_POSITION = "label.anchor.position",
        ea.LABEL_COLOR = "label.color",
        ea.LABEL_FONT_SIZE = "label.font.size",
        ea.LABEL_FONT_FAMILY = "label.font.family",
        ea.LABEL_FONT_STYLE = "label.font.style",
        ea.LABEL_PADDING = "label.padding",
        ea.LABEL_POINTER_WIDTH = "label.pointer.width",
        ea.LABEL_POINTER = "label.pointer",
        ea.LABEL_RADIUS = "label.radius",
        ea.LABEL_OFFSET_X = "label.offset.x",
        ea.LABEL_OFFSET_Y = "label.offset.y",
        ea.LABEL_SIZE = "label.size",
        ea.LABEL_ALIGN_POSITION = "label.align.position",
        ea.LABEL_BORDER = "label.border",
        ea.LABEL_BORDER_STYLE = "label.border.style",
        ea.LABEL_BACKGROUND_COLOR = "label.background.color",
        ea.LABEL_BACKGROUND_GRADIENT = "label.background.gradient",
        ea.LABEL_ROTATABLE = "label.rotatable",
        ea.LABEL_SHADOW_BLUR = "label.shadow.blur",
        ea.LABEL_SHADOW_COLOR = "label.shadow.color",
        ea.LABEL_SHADOW_OFFSET_X = "label.shadow.offset.x",
        ea.LABEL_SHADOW_OFFSET_Y = "label.shadow.offset.y",
        ea.LABEL_Z_INDEX = "label.z.index",
        ea.LABEL_ON_TOP = "label.on.top",
        ea.GROUP_BACKGROUND_COLOR = "group.background.color",
        ea.GROUP_BACKGROUND_GRADIENT = "group.background.gradient",
        ea.GROUP_STROKE = "group.stroke",
        ea.GROUP_STROKE_STYLE = "group.stroke.color",
        ea.GROUP_STROKE_LINE_DASH = "group.stroke.line.dash",
        ea.GROUP_STROKE_LINE_DASH_OFFSET = "group.stroke.line.dash.offset",
        ea.EDGE_BUNDLE_LABEL_ROTATE = "edge.bundle.label.rotate",
        ea.EDGE_BUNDLE_LABEL_POSITION = "edge.bundle.label.position",
        ea.EDGE_BUNDLE_LABEL_ANCHOR_POSITION = "edge.bundle.label.anchor.position",
        ea.EDGE_BUNDLE_LABEL_COLOR = "edge.bundle.label.color",
        ea.EDGE_BUNDLE_LABEL_FONT_SIZE = "edge.bundle.label.font.size",
        ea.EDGE_BUNDLE_LABEL_FONT_FAMILY = "edge.bundle.label.font.family",
        ea.EDGE_BUNDLE_LABEL_FONT_STYLE = "edge.bundle.label.font.style",
        ea.EDGE_BUNDLE_LABEL_PADDING = "edge.bundle.label.padding",
        ea.EDGE_BUNDLE_LABEL_POINTER_WIDTH = "edge.bundle.label.pointer.width",
        ea.EDGE_BUNDLE_LABEL_POINTER = "edge.bundle.label.pointer",
        ea.EDGE_BUNDLE_LABEL_RADIUS = "edge.bundle.label.radius",
        ea.EDGE_BUNDLE_LABEL_OFFSET_X = "edge.bundle.label.offset.x",
        ea.EDGE_BUNDLE_LABEL_OFFSET_Y = "edge.bundle.label.offset.y",
        ea.EDGE_BUNDLE_LABEL_BORDER = "edge.bundle.label.border",
        ea.EDGE_BUNDLE_LABEL_BORDER_STYLE = "edge.bundle.label.border.color",
        ea.EDGE_BUNDLE_LABEL_BACKGROUND_COLOR = "edge.bundle.label.background.color",
        ea.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT = "edge.bundle.label.background.gradient",
        ea.EDGE_BUNDLE_LABEL_ROTATABLE = "edge.bundle.label.rotatable",
        ea.EDGE_WIDTH = "edge.width",
        ea.EDGE_COLOR = "edge.color",
        ea.EDGE_OUTLINE = "edge.outline",
        ea.EDGE_OUTLINE_STYLE = "edge.outline.style",
        ea.EDGE_LINE_DASH = "edge.line.dash",
        ea.EDGE_LINE_DASH_OFFSET = "edge.line.dash.offset",
        ea.EDGE_FROM_OFFSET = "edge.from.offset",
    ea.EDGE_TO_OFFSET = "edge.to.offset",
    ea.EDGE_BUNDLE_GAP = "edge.bundle.gap",
    ea.EDGE_LOOPED_EXTAND = "edge.looped.extand",
    ea.EDGE_EXTEND = "edge.extend",
    ea.EDGE_CONTROL_POINT = "edge.control.point",
    ea.EDGE_SPLIT_BY_PERCENT = "edge.split.by.percent",
    ea.EDGE_SPLIT_PERCENT = "edge.split.percent",
    ea.EDGE_SPLIT_VALUE = "edge.split.value",
    ea.EDGE_CORNER = "edge.corner",
    ea.EDGE_CORNER_RADIUS = "edge.corner.radius",
    ea.EDGE_FROM_AT_EDGE = "edge.from.at.edge",
    ea.EDGE_TO_AT_EDGE = "edge.to.at.edge",
    ea.ARROW_FROM = "arrow.from",
    ea.ARROW_FROM_SIZE = "arrow.from.size",
    ea.ARROW_FROM_OFFSET = "arrow.from.offset",
    ea.ARROW_FROM_STROKE = "arrow.from.stroke",
    ea.ARROW_FROM_STROKE_STYLE = "arrow.from.stroke.style",
    ea.ARROW_FROM_OUTLINE = "arrow.from.outline",
    ea.ARROW_FROM_OUTLINE_STYLE = "arrow.from.outline.style",
    ea.ARROW_FROM_LINE_DASH = "arrow.from.line.dash",
    ea.ARROW_FROM_LINE_DASH_OFFSET = "arrow.from.line.dash.offset",
    ea.ARROW_FROM_FILL_COLOR = "arrow.from.fill.color",
    ea.ARROW_FROM_FILL_GRADIENT = "arrow.from.fill.gradient",
    ea.ARROW_FROM_LINE_CAP = "arrow.from.line.cap",
    ea.ARROW_FROM_LINE_JOIN = "arrow.from.line.join",
    ea.ARROW_TO = "arrow.to",
    ea.ARROW_TO_SIZE = "arrow.to.size",
    ea.ARROW_TO_OFFSET = "arrow.to.offset",
    ea.ARROW_TO_STROKE = "arrow.to.stroke",
    ea.ARROW_TO_STROKE_STYLE = "arrow.to.stroke.style",
    ea.ARROW_TO_OUTLINE = "arrow.to.outline",
    ea.ARROW_TO_OUTLINE_STYLE = "arrow.to.outline.style",
    ea.ARROW_TO_LINE_DASH = "arrow.to.line.dash",
    ea.ARROW_TO_LINE_DASH_OFFSET = "arrow.to.line.dash.offset",
    ea.ARROW_TO_FILL_COLOR = "arrow.to.fill.color",
    ea.ARROW_TO_FILL_GRADIENT = "arrow.to.fill.gradient",
    ea.ARROW_TO_LINE_CAP = "arrow.to.line.cap",
    ea.ARROW_TO_LINE_JOIN = "arrow.to.line.join";
    var na = new Vn,
        ra = Jo.PROPERTY_TYPE_ACCESSOR,
        sa = Jo.PROPERTY_TYPE_STYLE,
        oa = !1;
    na._30(sa, ea.SELECTION_TYPE, null, "selectionType"),
        na._30(sa, ea.SELECTION_BORDER, null, "selectionBorder"),
        na._30(sa, ea.SELECTION_SHADOW_BLUR, null, "selectionShadowBlur"),
        na._30(sa, ea.SELECTION_COLOR, null, "selectionColor"),
        na._30(sa, ea.SELECTION_SHADOW_OFFSET_X, null, "selectionShadowOffsetX"),
        na._30(sa, ea.SELECTION_SHADOW_OFFSET_Y, null, "selectionShadowOffsetY"),
        na._30(ra, "name", "label", "data"),
        na._30(sa, ea.LABEL_VISIBLE, "label", "visible"),
        na._30(sa, ea.LABEL_POSITION, "label", "position"),
        na._30(sa, ea.LABEL_ANCHOR_POSITION, "label", "anchorPosition"),
        na._30(sa, ea.LABEL_COLOR, "label", "color"),
        na._30(sa, ea.LABEL_FONT_SIZE, "label", "fontSize"),
        na._30(sa, ea.LABEL_BORDER, "label", "border"),
        na._30(sa, ea.LABEL_BORDER_STYLE, "label", "borderColor"),
        na._30(sa, ea.LABEL_BACKGROUND_COLOR, "label", "backgroundColor"),
        na._30(sa, ea.LABEL_ON_TOP, "label", "showOnTop"),
    oa || (na._30(sa, ea.SHADOW_BLUR, null, "shadowBlur"), na._30(sa, ea.SHADOW_COLOR, null, "shadowColor"), na._30(sa, ea.SHADOW_OFFSET_X, null, "shadowOffsetX"), na._30(sa, ea.SHADOW_OFFSET_Y, null, "shadowOffsetY"), na._30(sa, ea.LABEL_FONT_FAMILY, "label", "fontFamily"), na._30(sa, ea.LABEL_FONT_STYLE, "label", "fontStyle"), na._30(sa, ea.LABEL_ALIGN_POSITION, "label", "alignPosition"), na._30(sa, ea.LABEL_ROTATE, "label", "rotate"), na._30(sa, ea.LABEL_PADDING, "label", "padding"), na._30(sa, ea.LABEL_POINTER_WIDTH, "label", "pointerWidth"), na._30(sa, ea.LABEL_POINTER, "label", "showPointer"), na._30(sa, ea.LABEL_RADIUS, "label", "borderRadius"), na._30(sa, ea.LABEL_OFFSET_X, "label", "offsetX"), na._30(sa, ea.LABEL_OFFSET_Y, "label", "offsetY"), na._30(sa, ea.LABEL_ROTATABLE, "label", "rotatable"), na._30(sa, ea.LABEL_BACKGROUND_GRADIENT, "label", "backgroundGradient"), na._30(sa, ea.LABEL_SIZE, "label", "size"), na._30(sa, ea.LABEL_SHADOW_BLUR, "label", "shadowBlur"), na._30(sa, ea.LABEL_SHADOW_COLOR, "label", "shadowColor"), na._30(sa, ea.LABEL_SHADOW_OFFSET_X, "label", "shadowOffsetX"), na._30(sa, ea.LABEL_SHADOW_OFFSET_Y, "label", "shadowOffsetY"), na._30(sa, ea.LABEL_Z_INDEX, "label", "zIndex"), na._30(sa, ea.RENDER_COLOR, null, "renderColor"), na._30(sa, ea.RENDER_COLOR_BLEND_MODE, null, "renderColorBlendMode"), na._30(sa, ea.ALPHA, null, "alpha"));
    var ha = new Vn;
    ha._30(ra, "location"),
        ha._30(ra, "anchorPosition", null, "_38"),
        ha._30(ra, "rotate", null, "rotate"),
    oa || (ha._30(sa, ea.BACKGROUND_COLOR, null, "backgroundColor"), ha._30(sa, ea.BACKGROUND_GRADIENT, null, "backgroundGradient"), ha._30(sa, ea.PADDING, null, "padding"), ha._30(sa, ea.BORDER, null, "border"), ha._30(sa, ea.BORDER_RADIUS, null, "borderRadius"), ha._30(sa, ea.BORDER_COLOR, null, "borderColor"), ha._30(sa, ea.BORDER_LINE_DASH, null, "borderLineDash"), ha._30(sa, ea.BORDER_LINE_DASH_OFFSET, null, "borderLineDashOffset")),
        ha._30(ra, "image", "image", "data", "_mzi"),
        ha._30(ra, "size", "image", "size"),
        ha._30(sa, ea.SHAPE_STROKE, "image", "lineWidth"),
        ha._30(sa, ea.SHAPE_STROKE_STYLE, "image", "strokeStyle"),
        ha._30(sa, ea.SHAPE_FILL_COLOR, "image", "fillColor"),
        ha._30(sa, ea.LAYOUT_BY_PATH, "image", "layoutByPath"),
    oa || (ha._30(sa, ea.IMAGE_ADJUST, "image", "adjustType"), ha._30(sa, ea.SHAPE_OUTLINE, "image", "outline"), ha._30(sa, ea.SHAPE_OUTLINE_STYLE, "image", "outlineStyle"), ha._30(sa, ea.SHAPE_FILL_GRADIENT, "image", "fillGradient"), ha._30(sa, ea.SHAPE_LINE_DASH, "image", "lineDash"), ha._30(sa, ea.SHAPE_LINE_DASH_OFFSET, "image", "lineDashOffset"), ha._30(sa, ea.LINE_CAP, "image", "lineCap"), ha._30(sa, ea.LINE_JOIN, "image", "lineJoin"), ha._30(sa, ea.IMAGE_BACKGROUND_COLOR, "image", "backgroundColor"), ha._30(sa, ea.IMAGE_BACKGROUND_GRADIENT, "image", "backgroundGradient"), ha._30(sa, ea.IMAGE_PADDING, "image", "padding"), ha._30(sa, ea.IMAGE_BORDER, "image", "border"), ha._30(sa, ea.IMAGE_BORDER_RADIUS, "image", "borderRadius"), ha._30(sa, ea.IMAGE_BORDER_COLOR, "image", "borderColor"), ha._30(sa, ea.IMAGE_BORDER_LINE_DASH, "image", "borderLineDash"), ha._30(sa, ea.IMAGE_BORDER_LINE_DASH_OFFSET, "image", "borderLineDashOffset"), ha._30(sa, ea.IMAGE_Z_INDEX, "image", "zIndex"), ha._30(sa, ea.IMAGE_ALPHA, "image", "alpha")),
        ha._30(ra, "expanded", null, null, "checkBody"),
        ha._30(ra, "enableSubNetwork", null, null, "checkBody");
    var aa = new Vn;
    aa._30(ra, "groupType", null, null, "_5r"),
        aa._30(ra, "groupImage", null, null, "_5r"),
        aa._30(ra, "minSize", null, null, "_5r"),
        aa._30(ra, "padding", null, null, "_5r"),
        aa._30(sa, ea.GROUP_BACKGROUND_COLOR, "shape", "fillColor"),
        aa._30(sa, ea.GROUP_BACKGROUND_GRADIENT, "shape", "fillGradient"),
        aa._30(sa, ea.GROUP_STROKE, "shape", "lineWidth"),
        aa._30(sa, ea.GROUP_STROKE_STYLE, "shape", "strokeStyle"),
        aa._30(sa, ea.GROUP_STROKE_LINE_DASH, "shape", "lineDash"),
        aa._30(sa, ea.GROUP_STROKE_LINE_DASH_OFFSET, "shape", "lineDashOffset");
    var la = new Vn;
    la._30(ra, "from", "shape", null, "_4m"),
        la._30(ra, "to", "shape", null, "_4m"),
        la._30(ra, "edgeType", "shape", null, "_4m"),
        la._30(sa, ea.EDGE_WIDTH, "shape", "lineWidth"),
        la._30(sa, ea.EDGE_COLOR, "shape", "strokeStyle"),
        la._30(sa, ea.ARROW_FROM, "shape", "fromArrow"),
        la._30(sa, ea.ARROW_TO, "shape", "toArrow"),
    oa || (la._30(sa, ea.EDGE_FROM_AT_EDGE, null, "fromAtEdge", "_4m"), la._30(sa, ea.EDGE_TO_AT_EDGE, null, "toAtEdge", "_4m"), la._30(sa, ea.EDGE_OUTLINE, "shape", "outline"), la._30(sa, ea.EDGE_OUTLINE_STYLE, "shape", "outlineStyle"), la._30(sa, ea.EDGE_LINE_DASH, "shape", "lineDash"), la._30(sa, ea.EDGE_LINE_DASH_OFFSET, "shape", "lineDashOffset"), la._30(sa, ea.EDGE_CONTROL_POINT, "shape", null, "_4m"), la._30(sa, ea.EDGE_FROM_OFFSET, "shape", null, "_4m"), la._30(sa, ea.EDGE_TO_OFFSET, "shape", null, "_4m"), la._30(sa, ea.LINE_CAP, "shape", "lineCap"), la._30(sa, ea.LINE_JOIN, "shape", "lineJoin"), la._30(ra, "path.segment", null, null, "_4m", !0), la._30(ra, "angle", null, null, "_4m", !0), la._30(sa, ea.ARROW_FROM_SIZE, "shape", "fromArrowSize"), la._30(sa, ea.ARROW_FROM_OFFSET, "shape", "fromArrowOffset"), la._30(sa, ea.ARROW_FROM_STROKE, "shape", "fromArrowStroke"), la._30(sa, ea.ARROW_FROM_STROKE_STYLE, "shape", "fromArrowStrokeStyle"), la._30(sa, ea.ARROW_FROM_OUTLINE, "shape", "fromArrowOutline"), la._30(sa, ea.ARROW_FROM_OUTLINE_STYLE, "shape", "fromArrowOutlineStyle"), la._30(sa, ea.ARROW_FROM_FILL_COLOR, "shape", "fromArrowFillColor"), la._30(sa, ea.ARROW_FROM_FILL_GRADIENT, "shape", "fromArrowFillGradient"), la._30(sa, ea.ARROW_FROM_LINE_DASH, "shape", "fromArrowLineDash"), la._30(sa, ea.ARROW_FROM_LINE_DASH_OFFSET, "shape", "fromArrowLineDashOffset"), la._30(sa, ea.ARROW_FROM_LINE_JOIN, "shape", "fromArrowLineJoin"), la._30(sa, ea.ARROW_FROM_LINE_CAP, "shape", "fromArrowLineCap"), la._30(sa, ea.ARROW_TO_SIZE, "shape", "toArrowSize"), la._30(sa, ea.ARROW_TO_OFFSET, "shape", "toArrowOffset"), la._30(sa, ea.ARROW_TO_STROKE, "shape", "toArrowStroke"), la._30(sa, ea.ARROW_TO_STROKE_STYLE, "shape", "toArrowStrokeStyle"), la._30(sa, ea.ARROW_TO_OUTLINE, "shape", "toArrowOutline"), la._30(sa, ea.ARROW_TO_OUTLINE_STYLE, "shape", "toArrowOutlineStyle"), la._30(sa, ea.ARROW_TO_FILL_COLOR, "shape", "toArrowFillColor"), la._30(sa, ea.ARROW_TO_FILL_GRADIENT, "shape", "toArrowFillGradient"), la._30(sa, ea.ARROW_TO_LINE_DASH, "shape", "toArrowLineDash"), la._30(sa, ea.ARROW_TO_LINE_DASH_OFFSET, "shape", "toArrowLineDashOffset"), la._30(sa, ea.ARROW_TO_LINE_JOIN, "shape", "toArrowLineJoin"), la._30(sa, ea.ARROW_TO_LINE_CAP, "shape", "toArrowLineCap"));
    var _a = new Vn;
    _a._30(sa, ea.EDGE_BUNDLE_LABEL_COLOR, "bundleLabel", "color"),
        _a._30(sa, ea.EDGE_BUNDLE_LABEL_POSITION, "bundleLabel", "position"),
        _a._30(sa, ea.EDGE_BUNDLE_LABEL_ANCHOR_POSITION, "bundleLabel", "anchorPosition"),
        _a._30(sa, ea.EDGE_BUNDLE_LABEL_FONT_SIZE, "bundleLabel", "fontSize"),
        _a._30(sa, ea.EDGE_BUNDLE_LABEL_ROTATABLE, "bundleLabel", "rotatable"),
    oa || (_a._30(sa, ea.EDGE_BUNDLE_LABEL_ROTATE, "bundleLabel", "rotate"), _a._30(sa, ea.EDGE_BUNDLE_LABEL_FONT_FAMILY, "bundleLabel", "fontFamily"), _a._30(sa, ea.EDGE_BUNDLE_LABEL_FONT_STYLE, "bundleLabel", "fontStyle"), _a._30(sa, ea.EDGE_BUNDLE_LABEL_PADDING, "bundleLabel", "padding"), _a._30(sa, ea.EDGE_BUNDLE_LABEL_POINTER_WIDTH, "bundleLabel", "pointerWidth"), _a._30(sa, ea.EDGE_BUNDLE_LABEL_POINTER, "bundleLabel", "showPointer"), _a._30(sa, ea.EDGE_BUNDLE_LABEL_RADIUS, "bundleLabel", "borderRadius"), _a._30(sa, ea.EDGE_BUNDLE_LABEL_OFFSET_X, "bundleLabel", "offsetX"), _a._30(sa, ea.EDGE_BUNDLE_LABEL_OFFSET_Y, "bundleLabel", "offsetY"), _a._30(sa, ea.EDGE_BUNDLE_LABEL_BORDER, "bundleLabel", "border"), _a._30(sa, ea.EDGE_BUNDLE_LABEL_BORDER_STYLE, "bundleLabel", "borderColor"), _a._30(sa, ea.EDGE_BUNDLE_LABEL_BACKGROUND_COLOR, "bundleLabel", "backgroundColor"), _a._30(sa, ea.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT, "bundleLabel", "backgroundGradient"));
    var ua = new Vn;
    ua._30(ra, "location"),
        ua._30(sa, ea.BACKGROUND_COLOR, null, "backgroundColor"),
        ua._30(sa, ea.BACKGROUND_GRADIENT, null, "backgroundGradient"),
        ua._30(sa, ea.PADDING, null, "padding"),
        ua._30(sa, ea.BORDER, null, "border"),
        ua._30(sa, ea.BORDER_RADIUS, null, "borderRadius"),
        ua._30(sa, ea.BORDER_COLOR, null, "borderColor"),
        ua._30(sa, ea.BORDER_LINE_DASH, null, "borderLineDash"),
        ua._30(sa, ea.BORDER_LINE_DASH_OFFSET, null, "borderLineDashOffset"),
        ua._30(ra, "rotate", null, "rotate"),
        ua._30(ra, "path.segment", null, null, "invalidateShape"),
        ua._30(ra, "path", "image", "data"),
        ua._30(ra, "size", "image", "size"),
        ua._30(sa, ea.SHAPE_STROKE, "image", "lineWidth"),
        ua._30(sa, ea.SHAPE_STROKE_STYLE, "image", "strokeStyle"),
        ua._30(sa, ea.SHAPE_FILL_COLOR, "image", "fillColor"),
        ua._30(sa, ea.SHAPE_FILL_GRADIENT, "image", "fillGradient"),
    oa || (ua._30(sa, ea.SHAPE_OUTLINE, "image", "outline"), ua._30(sa, ea.SHAPE_OUTLINE_STYLE, "image", "outlineStyle"), ua._30(sa, ea.SHAPE_LINE_DASH, "image", "lineDash"), ua._30(sa, ea.SHAPE_LINE_DASH_OFFSET, "image", "lineDashOffset"), ua._30(sa, ea.LINE_CAP, "image", "lineCap"), ua._30(sa, ea.LINE_JOIN, "image", "lineJoin"), ua._30(sa, ea.LAYOUT_BY_PATH, "image", "layoutByPath"), ua._30(sa, ea.IMAGE_BACKGROUND_COLOR, "image", "backgroundColor"), ua._30(sa, ea.IMAGE_BACKGROUND_GRADIENT, "image", "backgroundGradient"), ua._30(sa, ea.IMAGE_PADDING, "image", "padding"), ua._30(sa, ea.IMAGE_BORDER, "image", "border"), ua._30(sa, ea.IMAGE_BORDER_RADIUS, "image", "borderRadius"), ua._30(sa, ea.IMAGE_BORDER_COLOR, "image", "borderColor"), ua._30(sa, ea.IMAGE_BORDER_LINE_DASH, "image", "borderLineDash"), ua._30(sa, ea.IMAGE_BORDER_LINE_DASH_OFFSET, "image", "borderLineDashOffset"), ua._30(sa, ea.ARROW_FROM, "image", "fromArrow"), ua._30(sa, ea.ARROW_FROM_SIZE, "image", "fromArrowSize"), ua._30(sa, ea.ARROW_FROM_OFFSET, "image", "fromArrowOffset"), ua._30(sa, ea.ARROW_FROM_STROKE, "image", "fromArrowStroke"), ua._30(sa, ea.ARROW_FROM_STROKE_STYLE, "image", "fromArrowStrokeStyle"), ua._30(sa, ea.ARROW_FROM_FILL_COLOR, "image", "fromArrowFillColor"), ua._30(sa, ea.ARROW_FROM_FILL_GRADIENT, "image", "fromArrowFillGradient"), ua._30(sa, ea.ARROW_FROM_LINE_DASH, "image", "fromArrowLineDash"), ua._30(sa, ea.ARROW_FROM_LINE_DASH_OFFSET, "image", "fromArrowLineDashOffset"), ua._30(sa, ea.ARROW_FROM_LINE_JOIN, "image", "fromArrowLineJoin"), ua._30(sa, ea.ARROW_FROM_LINE_CAP, "image", "fromArrowLineCap"), ua._30(sa, ea.ARROW_TO_SIZE, "image", "toArrowSize"), ua._30(sa, ea.ARROW_TO_OFFSET, "image", "toArrowOffset"), ua._30(sa, ea.ARROW_TO, "image", "toArrow"), ua._30(sa, ea.ARROW_TO_STROKE, "image", "toArrowStroke"), ua._30(sa, ea.ARROW_TO_STROKE_STYLE, "image", "toArrowStrokeStyle"), ua._30(sa, ea.ARROW_TO_FILL_COLOR, "image", "toArrowFillColor"), ua._30(sa, ea.ARROW_TO_FILL_GRADIENT, "image", "toArrowFillGradient"), ua._30(sa, ea.ARROW_TO_LINE_DASH, "image", "toArrowLineDash"), ua._30(sa, ea.ARROW_TO_LINE_DASH_OFFSET, "image", "toArrowLineDashOffset"), ua._30(sa, ea.ARROW_TO_LINE_JOIN, "image", "toArrowLineJoin"), ua._30(sa, ea.ARROW_TO_LINE_CAP, "image", "toArrowLineCap"));
    var da = function (t, i) {
            return t = t.zIndex,
                i = i.zIndex,
                t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? -1 : void 0)
        },
        fa = function (t, i) {
            this.uiBounds = new io,
                M(this, fa, arguments),
                this.id = this.$data.id,
                this.graph = i,
                this._fe = [],
                this._mza = new Vn
        };
    fa.prototype = {
        syncSelection: !1,
        graph: null,
        layoutByAnchorPoint: !1,
        _mza: null,
        _fe: null,
        addChild: function (t, i) {
            t._jk = this,
                i !== e ? m(this._fe, t, i) : this._fe.push(t),
            t._dr && this._mx4(t),
                this.invalidateChildrenIndex(),
                this.invalidateSize(),
                this.$invalidateChild = !0
        },
        removeChild: function (t) {
            this._mza.removeBinding(t),
                t._jk = null,
                p(this._fe, t),
            this._jt && this._jt.remove(t),
                this.invalidateSize(),
                this.$invalidateChild = !0
        },
        getProperty: function (t, i) {
            return i == Jo.PROPERTY_TYPE_STYLE ? this.graph.getStyle(this.$data, t) : i == Jo.PROPERTY_TYPE_CLIENT ? this.$data.get(t) : this.$data[t]
        },
        getStyle: function (t) {
            return this.graph.getStyle(this.$data, t)
        },
        _$x: function (t, i, e) {
            var n = this._mza.onBindingPropertyChange(this, t, i, e);
            return na.onBindingPropertyChange(this, t, i, e) || n
        },
        onPropertyChange: function (t) {
            if ("zIndex" == t.kind)
                return this.invalidateRender(), !0;
            if ("ui" == t.type) {
                if ("invalidate" == t.kind)
                    return this.invalidate(), !0;
                var i = t.value;
                return i && i.ui ? ("add" == t.kind ? this._9a(i) : "remove" == t.kind && this.removeChild(i.ui), !0) : !1
            }
            return this._$x(t.kind, t.propertyType || ra, t.value)
        },
        label: null,
        initLabel: function () {
            var t = new va;
            t.name = "label",
                this.addChild(t),
                this.label = t
        },
        initialize: function () {
            this.initLabel(),
            this.$data._mzb && this.$data._mzb.forEach(this._9a, this),
                na.initBindingProperties(this),
                this._mza.initBindingProperties(this, !1)
        },
        addBinding: function (t, i) {
            return i.property ? (i.target = t, void this._mza._2v(i.property, i)) : !1
        },
        _gf: function (t, i) {
            var e = this.$data;
            if (!e._mzb)
                return !1;
            var n = e._mzb.getById(t.id);
            if (!n || !n.bindingProperties)
                return !1;
            var r = n.bindingProperties;
            if (I(r)) {
                var s = !1;
                return c(r, function (t) {
                    return "data" == t.bindingProperty ? (s = Kn(e, i, t.property, t.propertyType), !1) : void 0
                }, this),
                    s
            }
            return "data" == r.bindingProperty ? Kn(e, i, r.property, r.propertyType) : !1
        },
        _9a: function (t) {
            var i = t.ui;
            if (i) {
                var e = t.bindingProperties;
                e && (Array.isArray(e) ? e.forEach(function (t) {
                    this.addBinding(i, t)
                }, this) : this.addBinding(i, e)),
                    this.addChild(i)
            }
        },
        validate: function () {
            return this._mwq || (this.initialize(), this._mwq = !0),
                this.doValidate()
        },
        _$d: !0,
        invalidateChildrenIndex: function () {
            this._$d = !0
        },
        doValidate: function () {
            if (this._1n && (this._1n = !1, this.validateChildren() && (this.measure(), this.$invalidateSize = !0), this._$d && (this._$d = !1, zs ? this._fe = f(this._fe, da) : this._fe.sort(da))), We.call(this) && (this.$invalidateRotate = !0), this.$invalidateRotate) {
                Bh.call(this),
                    this.uiBounds.setByRect(this._fi);
                var t = this.$selectionBorder || 0,
                    i = Math.max(this.$selectionBorder || 0, this.$shadowOffsetX || 0, this.$selectionShadowOffsetX || 0),
                    e = Math.max(this.$shadowOffsetY || 0, this.$selectionShadowOffsetY || 0),
                    n = Math.max(2 * t, this.$shadowBlur, this.$selectionShadowBlur);
                n += Ws.UI_BOUNDS_GROW || 0;
                var r = n - i,
                    s = n + i,
                    o = n - e,
                    h = n + e;
                return 0 > r && (r = 0),
                0 > s && (s = 0),
                0 > o && (o = 0),
                0 > h && (h = 0),
                    this.uiBounds.grow(o, r, h, s),
                this.onBoundsChanged && this.onBoundsChanged(),
                    this.$invalidateBounds = !0,
                    !0
            }
        },
        validateChildren: function () {
            var t = this.$invalidateChild;
            this.$invalidateChild = !1;
            var i = this._mxody,
                e = this.bodyChanged;
            i && (i.$renderColor = this.$renderColor, i.$renderColorBlendMode = this.$renderColorBlendMode, i.$shadowColor = this.$shadowColor, i.$shadowBlur = this.$shadowBlur, i.$shadowOffsetX = this.$shadowOffsetX, i.$shadowOffsetY = this.$shadowOffsetY),
                this.bodyChanged = !1,
            i && i._1n && (e = i.validate() || e, i.$x = 0, i.$y = 0, i.$invalidateRotate && Bh.call(i), t = !0);
            for (var n = 0, r = this._fe.length; r > n; n++) {
                var s = this._fe[n];
                if (s != i) {
                    var o = s._1n && s.validate();
                    (o || e) && s._i5 && Ke(s, i, this),
                    !t && o && (t = !0)
                }
            }
            return t
        },
        measure: function () {
            this._je.clear();
            for (var t, i, e = 0, n = this._fe.length; n > e; e++)
                t = this._fe[e], t._i5 && (i = t._fi, i.width <= 0 || i.height <= 0 || this._je.addRect(t.$x + i.x, t.$y + i.y, i.width, i.height))
        },
        _jt: null,
        _mx4: function (t) {
            if (!this._jt) {
                if (!t.showOnTop)
                    return;
                return this._jt = new Xs,
                    this._jt.add(t)
            }
            return t.showOnTop ? this._jt.add(t) : this._jt.remove(t)
        },
        draw: function (t, i, e) {
            for (var n, r = 0, s = this._fe.length; s > r; r++)
                n = this._fe[r], n._i5 && !n.showOnTop && n._jm(t, i, e, this)
        },
        _9c: function (t, i) {
            if (!this._i5 || !this._jt || !this._jt.length)
                return !1;
            t.save(),
                t.translate(this.$x, this.$y),
            this.$rotatable && this.$_hostRotate && t.rotate(this.$_hostRotate),
            (this.offsetX || this.offsetY) && t.translate(this.offsetX, this.offsetY),
            this.$rotate && t.rotate(this.$rotate),
            this.$layoutByAnchorPoint && this._mxc && t.translate(-this._mxc.x, -this._mxc.y),
            this.shadowColor && (t.shadowColor = this.shadowColor, t.shadowBlur = this.shadowBlur * i, t.shadowOffsetX = this.shadowOffsetX * i, t.shadowOffsetY = this.shadowOffsetY * i),
                t.beginPath();
            for (var e, n = 0, r = this._fe.length; r > n; n++)
                e = this._fe[n], e._i5 && e.showOnTop && e._jm(t, i, this.selected, this);
            t.restore()
        },
        doHitTest: function (t, i, e) {
            if (e) {
                if (!this._je.intersectsRect(t - e, i - e, 2 * e, 2 * e))
                    return !1
            } else if (!this._je.intersectsPoint(t, i))
                return !1;
            return this.hitTestChildren(t, i, e)
        },
        hitTestChildren: function (t, i, e) {
            for (var n, r = this._fe.length - 1; r >= 0; r--)
                if (n = this._fe[r], n._i5 && n.hitTest(t, i, e))
                    return n;
            return !1
        },
        destroy: function () {
            this._ijed = !0;
            for (var t, i = this._fe.length - 1; i >= 0; i--)
                t = this._fe[i], t.destroy()
        }
    },
        k(fa, ta),
        Z(fa.prototype, {
            renderColorBlendMode: {
                get: function () {
                    return this.$renderColorBlendMode
                },
                set: function (t) {
                    this.$renderColorBlendMode = t,
                        this._1n = !0,
                    this.body && (this.body.renderColorBlendMode = this.$renderColorBlendMode)
                }
            },
            renderColor: {
                get: function () {
                    return this.$renderColor
                },
                set: function (t) {
                    this.$renderColor = t,
                        this._1n = !0,
                    this.body && (this.body.renderColor = this.$renderColor)
                }
            },
            bodyBounds: {
                get: function () {
                    if (this.$invalidateBounds) {
                        this.$invalidateBounds = !1;
                        var t,
                            i = this.body;
                        t = i && i._i5 && !this._$t() ? i._fi.clone() : this._fi.clone(),
                        this.rotate && ki(t, this.rotate, t),
                            t.x += this.$x,
                            t.y += this.$y,
                            this._d6 = t
                    }
                    return this._d6
                }
            },
            bounds: {
                get: function () {
                    return new io((this.$x || 0) + this.uiBounds.x, (this.$y || 0) + this.uiBounds.y, this.uiBounds.width, this.uiBounds.height)
                }
            },
            body: {
                get: function () {
                    return this._mxody
                },
                set: function (t) {
                    t && this._mxody != t && (this._mxody = t, this.bodyChanged = !0, this.invalidateSize())
                }
            }
        }),
        Ws.UI_BOUNDS_GROW = 1;
    var ca = function () {
        M(this, ca, arguments)
    };
    ca.prototype = {
        strokeStyle: "#000",
        lineWidth: 0,
        fillColor: null,
        fillGradient: null,
        _jf: 1,
        _jh: 1,
        outline: 0,
        onDataChanged: function (t) {
            B(this, ca, "onDataChanged", arguments),
            this._ld && this._81 && this._ld._6j(this._81, this),
            t && this._mzi(t)
        },
        _mzi: function (t) {
            this._ld = we(t),
                this._ld.validate(),
            (this._ld._lm == lh || this._ld._6p()) && (this._81 || (this._81 = function () {
                this.invalidateData(),
                this._jk && this._jk.graph && (this._jk.invalidateSize(), this._jk.graph.invalidate())
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
            if (!t || t.width <= 0 || t.height <= 0 || !this.$size || !(this.size instanceof Object))
                return this._jf = 1, void (this._jh = 1);
            var i = this.size.width,
                n = this.size.height;
            if ((i === e || null === i) && (i = -1), (n === e || null === n) && (n = -1), 0 > i && 0 > n)
                return this._jf = 1, void (this._jh = 1);
            var r,
                s,
                o = t.width,
                h = t.height;
            i >= 0 && (r = i / o),
            n >= 0 && (s = n / h),
                0 > i ? r = s : 0 > n && (s = r),
                this._jf = r,
                this._jh = s
        },
        validateSize: function () {
            if (this.$invalidateScale) {
                this.$invalidateScale = !1;
                {
                    var t = this._originalBounds;
                    this._jf,
                        this._jh
                }
                this._9p(t),
                    this.setMeasuredBounds(t.width * this._jf, t.height * this._jh, t.x * this._jf, t.y * this._jh)
            }
        },
        measure: function () {
            var t = this._ld.getBounds(this.lineWidth + this.outline);
            return t ? (this.$invalidateScale = !0, void (this._originalBounds = t.clone())) : void this._je.set(0, 0, 0, 0)
        },
        onBoundsChanged: function () {
            this.$invalidateFillGradient = !0
        },
        _1t: function () {
            this.$invalidateFillGradient = !1,
                this._fillGradient = this.fillGradient ? gh.prototype.generatorGradient.call(this.$fillGradient, this._87) : null
        },
        _jx: function (t) {
            var i,
                e;
            if ("flip" == this.$adjustType)
                i = 1, e = -1;
            else {
                if ("mirror" != this.$adjustType)
                    return;
                i = -1,
                    e = 1
            }
            var n = this._je.cx,
                r = this._je.cy;
            t.translate(n, r),
                t.scale(i, e),
                t.translate(-n, -r)
        },
        draw: function (t, i, e, n) {
            if (this._jf && this._jh) {
                if (this.$invalidateFillGradient && this._1t(), t.save(), this.$adjustType && this._jx(t), this._ld._lm == uh)
                    return t.scale(this._jf, this._jh), this._ld._lq.draw(t, i, this, e, n || this), void t.restore();
                e && this._83(t, i, n),
                    this._ld.draw(t, i, this, this._jf, this._jh),
                    t.restore()
            }
        },
        doHitTest: function (t, i, e) {
            if (this._ld.hitTest) {
                if ("flip" == this.$adjustType) {
                    var n = this._je.cy;
                    i = 2 * n - i
                } else if ("mirror" == this.$adjustType) {
                    var r = this._je.cx;
                    t = 2 * r - t
                }
                t /= this._jf,
                    i /= this._jh;
                var s = (this._jf + this._jh) / 2;
                return s > 1 && (e /= s, e = 0 | e),
                    this._ld._lq instanceof Ph ? this._ld._lq.hitTest(t, i, e, !0, this.$lineWidth, this.$fillColor || this.$fillGradient) : this._ld.hitTest(t, i, e)
            }
            return !0
        },
        $invalidateScale: !0,
        $invalidateFillGradient: !0
    },
        k(ca, ta),
        qn(ca.prototype, {
            adjustType: {},
            fillColor: {},
            size: {
                validateFlags: ["Size", "Scale"]
            },
            fillGradient: {
                validateFlags: ["FillGradient"]
            }
        }),
        Z(ca.prototype, {
            originalBounds: {
                get: function () {
                    return this._originalBounds
                }
            }
        }),
        Ws.ALIGN_POSITION = no.CENTER_MIDDLE;
    var va = function () {
        M(this, va, arguments),
            this.color = Ws.LABEL_COLOR
    };
    va.prototype = {
        color: Ws.LABEL_COLOR,
        showPointer: !0,
        fontSize: null,
        fontFamily: null,
        fontStyle: null,
        _hp: null,
        alignPosition: null,
        measure: function () {
            this.font;
            var t = ji(this.$data, this.$fontSize || Ws.FONT_SIZE, this.$font);
            if (this._hp = t, this.$size) {
                var i = this.$size.width || 0,
                    e = this.$size.height || 0;
                return this.setMeasuredBounds(i > t.width ? i : t.width, e > t.height ? e : t.height)
            }
            return this.setMeasuredBounds(t.width, t.height)
        },
        doHitTest: function (t, i, e) {
            return this.$data ? Pe(t, i, e, this) : !1
        },
        draw: function (t, i, e, n) {
            e && this._83(t, i, n);
            var r = this.$fontSize || Ws.FONT_SIZE;
            if (this.$rotatable && this.$_hostRotate) {
                var s = ce(this.$_hostRotate);
                s > Vs && 3 * Vs > s && (t.translate(this._je.width / 2, this._je.height / 2), t.rotate(Math.PI), t.translate(-this._je.width / 2, -this._je.height / 2))
            }
            var o = this.alignPosition || Ws.ALIGN_POSITION,
                h = o.horizontalPosition,
                a = o.verticalPosition,
                l = r * Ws.LINE_HEIGHT,
                _ = l / 2;
            if (a != ho && this._hp.height < this._je.height) {
                var u = this._je.height - this._hp.height;
                _ += a == ao ? u / 2 : u
            }
            t.translate(0, _),
            t.font != this.$font && (t.font = this.$font),
                h == so ? (t.textAlign = "center", t.translate(this._je.width / 2, 0)) : h == oo ? (t.textAlign = "right", t.translate(this._je.width, 0)) : t.textAlign = "left",
                t.textBaseline = "middle",
                t.fillStyle = this.color;
            for (var d = 0, f = this.$data.split("\n"), c = 0, v = f.length; v > c; c++) {
                var g = f[c];
                t.fillText(g, 0, d),
                    d += l
            }
        },
        _56: function () {
            return null != this.$data || this.$size
        },
        $invalidateFont: !0
    },
        k(va, ta),
        qn(va.prototype, {
            size: {
                validateFlags: ["Data"]
            },
            fontStyle: {
                validateFlags: ["Data", "Font"]
            },
            fontSize: {
                validateFlags: ["Data", "Font"]
            },
            fontFamily: {
                validateFlags: ["Data", "Font"]
            }
        }),
        Z(va.prototype, {
            font: {
                get: function () {
                    return this.$invalidateFont && (this.$invalidateFont = !1, this.$font = (this.$fontStyle || Ws.FONT_STYLE) + " " + (this.$fontSize || Ws.FONT_SIZE) + "px " + (this.$fontFamily || Ws.FONT_FAMILY)),
                        this.$font
                }
            }
        });
    var ga = function (t) {
        t = t || new Ph,
            this.pathBounds = new io,
            M(this, ga, [t])
    };
    ga.prototype = {
        layoutByPath: !0,
        layoutByAnchorPoint: !1,
        measure: function () {
            this.$invalidateFromArrow = !0,
                this.$invalidateToArrow = !0,
                this.$data.getBounds(this.$lineWidth + this.$outline, this.pathBounds),
                this.setMeasuredBounds(this.pathBounds)
        },
        validateSize: function () {
            if (this.$invalidateFromArrow || this.$invalidateToArrow) {
                var t = this.pathBounds.clone();
                if (this.$invalidateFromArrow) {
                    this.$invalidateFromArrow = !1;
                    var i = this.validateFromArrow();
                    i && t.add(i)
                }
                if (this.$invalidateToArrow) {
                    this.$invalidateToArrow = !1;
                    var i = this.validateToArrow();
                    i && t.add(i)
                }
                this.setMeasuredBounds(t)
            }
        },
        validateFromArrow: function () {
            if (!this.$data._j7 || !this.$fromArrow)
                return void (this.$fromArrowShape = null);
            var t = this.$data,
                i = 0,
                e = 0,
                n = this.$fromArrowOffset;
            n && (isNaN(n) && (n.x || n.y) ? (i += n.x || 0, e += n.y || 0) : i += n || 0, i > 0 && 1 > i && (i *= t._j7)),
                this.fromArrowLocation = t.getLocation(i, e),
                this.fromArrowLocation.rotate = Math.PI + this.fromArrowLocation.rotate || 0,
                this.$fromArrowShape = xr(this.$fromArrow, this.$fromArrowSize);
            var r = this.$fromArrowShape.getBounds(this.fromArrowStyles.lineWidth + this.fromArrowStyles.outline);
            return this.fromArrowFillGradient instanceof Zo.Gradient ? this.fromArrowStyles._fillGradient = gh.prototype.generatorGradient.call(this.fromArrowFillGradient, r) : this.fromArrowStyles && (this.fromArrowStyles._fillGradient = null),
                Mi(r, this.fromArrowLocation.rotate, r, r.right, r.cy),
                r.offset(this.fromArrowLocation.x, this.fromArrowLocation.y),
                r
        },
        validateToArrow: function () {
            if (!this.$data._j7 || !this.$toArrow)
                return void (this.$toArrowShape = null);
            var t = this.$data,
                i = 0,
                e = 0,
                n = this.$toArrowOffset;
            n && (isNaN(n) && (n.x || n.y) ? (i += n.x || 0, e += n.y || 0) : i += n || 0),
            0 > i && i > -1 && (i *= t._j7),
                i += t._j7,
                this.toArrowLocation = t.getLocation(i, e),
                this.$toArrowShape = xr(this.$toArrow, this.$toArrowSize);
            var r = this.$toArrowShape.getBounds(this.toArrowStyles.lineWidth + this.toArrowStyles.outline);
            return this.toArrowFillGradient instanceof Zo.Gradient ? this.toArrowStyles._fillGradient = gh.prototype.generatorGradient.call(this.toArrowFillGradient, r) : this.toArrowStyles && (this.toArrowStyles._fillGradient = null),
                Mi(r, this.toArrowLocation.rotate, r, r.right, r.cy),
                r.offset(this.toArrowLocation.x, this.toArrowLocation.y),
                r
        },
        _2t: function (t) {
            var i = t ? "from" : "to",
                n = this[i + "ArrowStroke"];
            n === e && (n = this.$lineWidth);
            var r = this[i + "ArrowStrokeStyle"];
            r === e && (r = this.strokeStyle);
            var s = this[i + "ArrowStyles"];
            s || (this[i + "ArrowStyles"] = s = {}),
                s.lineWidth = n,
                s.strokeStyle = r,
                s.lineDash = this[i + "ArrowLineDash"],
                s.lineDashOffset = this[i + "ArrowLineDashOffset"],
                s.fillColor = this[i + "ArrowFillColor"],
                s.fillGradient = this[i + "ArrowFillGradient"],
                s.lineCap = this[i + "ArrowLineCap"],
                s.lineJoin = this[i + "ArrowLineJoin"],
                s.outline = this[i + "ArrowOutline"] || 0,
                s.outlineStyle = this[i + "ArrowOutlineStyle"]
        },
        doValidate: function () {
            return this.$fromArrow && this._2t(!0),
            this.$toArrow && this._2t(!1),
                B(this, ga, "doValidate")
        },
        drawArrow: function (t, i, e, n) {
            if (this.$fromArrow && this.$fromArrowShape) {
                t.save();
                var r = this.fromArrowLocation,
                    s = r.x,
                    o = r.y,
                    h = r.rotate;
                t.translate(s, o),
                h && t.rotate(h),
                    this.$fromArrowShape.draw(t, i, this.fromArrowStyles, e, n),
                    t.restore()
            }
            if (this.$toArrow && this.$toArrowShape) {
                t.save();
                var r = this.toArrowLocation,
                    s = r.x,
                    o = r.y,
                    h = r.rotate;
                t.translate(s, o),
                h && t.rotate(h),
                    this.$toArrowShape.draw(t, i, this.toArrowStyles, e, n),
                    t.restore()
            }
        },
        outlineStyle: null,
        outline: 0,
        onBoundsChanged: function () {
            this.$invalidateFillGradient = !0
        },
        _1t: function () {
            this.$invalidateFillGradient = !1,
                this._fillGradient = this.$fillGradient ? gh.prototype.generatorGradient.call(this.$fillGradient, this._87) : null
        },
        draw: function (t, i, e, n) {
            this.$invalidateFillGradient && this._1t(),
                this.$data.draw(t, i, this, e, n),
                this.drawArrow(t, i, e, n)
        },
        doHitTest: function (t, i, e) {
            if (this.$data.hitTest(t, i, e, !0, this.$lineWidth + this.$outline, this.$fillColor || this.$fillGradient))
                return !0;
            if (this.$toArrow && this.$toArrowShape) {
                var n = t - this.toArrowLocation.x,
                    r = i - this.toArrowLocation.y;
                if (this.toArrowLocation.rotate) {
                    var s = Pi(n, r, -this.toArrowLocation.rotate);
                    n = s.x,
                        r = s.y
                }
                var o = this.toArrowStyles.fillColor || this.toArrowStyles.fillGradient;
                if (this.$toArrowShape.hitTest(n, r, e, !0, this.toArrowStyles.lineWidth, o))
                    return !0
            }
            if (this.$fromArrow && this.$fromArrowShape) {
                var n = t - this.fromArrowLocation.x,
                    r = i - this.fromArrowLocation.y;
                if (this.fromArrowLocation.rotate) {
                    var s = Pi(n, r, -this.fromArrowLocation.rotate);
                    n = s.x,
                        r = s.y
                }
                var o = this.fromArrowStyles.fillColor || this.fromArrowStyles.fillGradient;
                if (this.$fromArrowShape.hitTest(n, r, e, !0, this.fromArrowStyles.lineWidth, o))
                    return !0
            }
            return !1
        },
        $fromArrowOutline: 0,
        $toArrowOutline: 0,
        $invalidateFillGradient: !0,
        $invalidateFromArrow: !0,
        $invalidateToArrow: !0
    },
        k(ga, ta),
        qn(ga.prototype, {
            fillColor: {},
            fillGradient: {
                validateFlags: ["FillGradient"]
            },
            fromArrowOffset: {
                validateFlags: ["FromArrow", "Size"]
            },
            fromArrowSize: {
                validateFlags: ["FromArrow", "Size"]
            },
            fromArrow: {
                validateFlags: ["FromArrow", "Size"]
            },
            fromArrowOutline: {
                validateFlags: ["FromArrow", "Size"]
            },
            fromArrowStroke: {
                validateFlags: ["FromArrow", "Size"]
            },
            toArrowOffset: {
                validateFlags: ["ToArrow", "Size"]
            },
            toArrowSize: {
                validateFlags: ["ToArrow", "Size"]
            },
            toArrow: {
                validateFlags: ["ToArrow", "Size"]
            },
            toArrowOutline: {
                validateFlags: ["ToArrow", "Size"]
            },
            toArrowStroke: {
                validateFlags: ["ToArrow", "Size"]
            },
            outline: {
                value: 0,
                validateFlags: ["Data"]
            }
        }),
        Z(ga.prototype, {
            length: {
                get: function () {
                    return this.data.length
                }
            }
        }),
        Zn.prototype = {
            shape: null,
            path: null,
            initialize: function () {
                B(this, Zn, "initialize"),
                    this.path = new Ph,
                    this.path._dn = !1,
                    this.shape = new ga(this.path),
                    this.addChild(this.shape, 0),
                    this._mxody = this.shape,
                    la.initBindingProperties(this)
            },
            _1q: !0,
            _65: null,
            _$t: function () {
                return !1
            },
            _45: function () {
                return !1
            },
            validatePoints: function () {
                this.shape.invalidateData();
                var t = this.$data,
                    i = this.path;
                i.clear();
                var e = t.fromAgent,
                    n = t.toAgent;
                e && n && Cr(this, t, i, e, n)
            },
            drawLoopedEdge: function (t, i, e, n) {
                zr(this, n, t)
            },
            drawEdge: function (t, i, e, n, r, s) {
                var o = this.getStyle(ea.EDGE_FROM_OFFSET),
                    h = this.getStyle(ea.EDGE_TO_OFFSET);
                if (o && (r.x += o.x || 0, r.y += o.y || 0), h && (s.x += h.x || 0, s.y += h.y || 0), n == Jo.EDGE_TYPE_ZIGZAG) {
                    var a = r.center,
                        l = s.center,
                        _ = (a.x + l.x) / 2,
                        u = (a.y + l.y) / 2,
                        d = a.x - l.x,
                        f = a.y - l.y,
                        c = Math.sqrt(d * d + f * f),
                        v = Math.atan2(f, d);
                    v += Math.PI / 6,
                        c *= .04,
                    c > 30 && (c = 30);
                    var g = Math.cos(v) * c,
                        E = Math.sin(v) * c;
                    return t.lineTo(_ - E, u + g),
                        void t.lineTo(_ + E, u - g)
                }
                var m = Nr(this, this.data, r, s, i, e, r.center, s.center);
                m && (t._fg = m)
            },
            _2h: function () {
                if (!this.$data.isBundleEnabled())
                    return null;
                var t = this.graph._8t._8x(this.$data);
                if (!t || !t.canBind(this.graph) || !t._gs)
                    return null;
                var i = t.getYOffset(this);
                return t.isPositiveOrder(this.$data) || (i = -i),
                    i
            },
            checkBundleLabel: function () {
                var t = this.getBundleLabel();
                return t ? (this.bundleLabel || this.createBundleLabel(), this.bundleLabel._i5 = !0, void (this.bundleLabel.data = t)) : void (this.bundleLabel && (this.bundleLabel._i5 = !1, this.bundleLabel.data = null))
            },
            createBundleLabel: function () {
                var t = new va;
                t.editable = !1,
                    this.bundleLabel = t,
                    this.addChild(this.bundleLabel),
                    _a.initBindingProperties(this)
            },
            getBundleLabel: function () {
                return this.graph.getBundleLabel(this.data)
            },
            doValidate: function () {
                return this._1q && (this._1q = !1, this.validatePoints()),
                    this.checkBundleLabel(),
                    B(this, Zn, "doValidate")
            },
            _4m: function () {
                this._1q = !0,
                    this.invalidateSize()
            },
            _$x: function (t, i, e) {
                var n = this._mza.onBindingPropertyChange(this, t, i, e);
                return n = na.onBindingPropertyChange(this, t, i, e) || n,
                this.bundleLabel && this.bundleLabel.$data && (n = _a.onBindingPropertyChange(this, t, i, e) || n),
                la.onBindingPropertyChange(this, t, i, e) || n
            }
        },
        k(Zn, fa),
        Zn.drawReferenceLine = function (t, i, e, n) {
            if (t.moveTo(i.x, i.y), !n || n == Jo.EDGE_TYPE_DEFAULT)
                return void t.lineTo(e.x, e.y);
            if (n == Jo.EDGE_TYPE_VERTICAL_HORIZONTAL)
                t.lineTo(i.x, e.y);
            else if (n == Jo.EDGE_TYPE_HORIZONTAL_VERTICAL)
                t.lineTo(e.x, i.y);
            else if (0 == n.indexOf(Jo.EDGE_TYPE_ORTHOGONAL)) {
                var r;
                r = n == Jo.EDGE_TYPE_ORTHOGONAL_HORIZONTAL ? !0 : n == Jo.EDGE_TYPE_ORTHOGONAL_VERTICAL ? !1 : Math.abs(i.x - e.x) > Math.abs(i.y - e.y);
                var s = (i.x + e.x) / 2,
                    o = (i.y + e.y) / 2;
                r ? (t.lineTo(s, i.y), t.lineTo(s, e.y)) : (t.lineTo(i.x, o), t.lineTo(e.x, o))
            }
            t.lineTo(e.x, e.y)
        },
        Z(Zn.prototype, {
            length: {
                get: function () {
                    return this.path ? this.path.length : 0
                }
            }
        }),
        Zn.prototype.addPoint = function (t, i, e) {
            var n = Le(this.path, t, i, e);
            if (n && n.length > 2) {
                var r = this.data,
                    s = n[n.length - 1];
                r.pathSegments = s.type == Lh ? n.splice(1, n.length - 2) : n.splice(1, n.length - 1)
            }
        },
        Jn.prototype = {
            _38: null,
            image: null,
            initialize: function () {
                B(this, Jn, "initialize"),
                    this._mwx(),
                    ha.initBindingProperties(this)
            },
            _mzi: function () {
                this.data.image ? this.image && (this.body = this.image) : this.label && (this.body = this.label)
            },
            _mwx: function () {
                this.image = new ca,
                    this.addChild(this.image, 0),
                    this._mzi()
            },
            doValidate: function () {
                this.body && (this instanceof Yr && !this.$data.groupImage && this._68() ? this.body.$layoutByAnchorPoint = !1 : (this.body.$layoutByAnchorPoint = null != this._38, this.body.anchorPosition = this._38));
                var t = this.$data.$location,
                    i = 0,
                    e = 0;
                t && (i = t.x, e = t.y);
                var n = this.$x != i || this.$y != e;
                return n && (this.$invalidateBounds = !0),
                    this.$x = i,
                    this.$y = e,
                fa.prototype.doValidate.call(this) || n
            },
            _$x: function (t, i, e) {
                var n = this._mza.onBindingPropertyChange(this, t, i, e);
                return n = na.onBindingPropertyChange(this, t, i, e) || n,
                ha.onBindingPropertyChange(this, t, i, e) || n
            }
        },
        k(Jn, fa);
    var Ea = function (t, i) {
        return t = t.$data.zIndex || 0,
            i = i.$data.zIndex || 0,
        t - i
    };
    Qn.prototype = {
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
        _4b: function (t, i) {
            for (var e = this._mzx, n = 0, r = e.length; r > n; n++)
                if (t.call(i, e[n]) === !1)
                    return !1
        },
        _eo: function (t, i) {
            this._md.forEach(t, i)
        },
        _$z: function (t, i) {
            for (var e = this._mzx, n = e.length - 1; n >= 0; n--)
                if (t.call(i, e[n]) === !1)
                    return !1
        },
        _4j: function (t, i) {
            this._md.forEachReverse(t, i)
        },
        _3j: function (t, i) {
            this._7n && this._7n._3j && this._7n._3j(t, i)
        },
        _mzc: function () {
            this._k2._43(),
                this._kz && this._kz.originAtCenter ? this._k2._eu(0, 0) : this._k2._2a = !0
        },
        _4c: function () {
            return this._$g && (this._$g = !1, this._1x()),
                this._8g
        },
        _3m: function () {
            return this._k2._12 ? !1 : (this._k2._12 = !0, void this._mzz())
        },
        _mzz: function () {
            this._6f || (this._6f = !0, w(this._fr.bind(this)))
        },
        _mws: function () {
            var t = !this._mwq || 0 == this._md.length;
            this._mwq || (this._mwq = !0, this._mzc(), this._$g = !0),
                this._mwh(t);
            var i = this._js.g;
            if (this._md.isEmpty())
                return i._la(), this._topCanvas._jm(), this._6f = !1, this._k2._jq(this, !0), void this._4c();
            if (this._k2._jq(this, this._kz.fullRefresh || this._mwo._lp), this._ja) {
                var e = this._ks;
                i.canvas.ratio && (e *= i.canvas.ratio),
                    this._ja(i, e, t)
            }
            this._mwo._la(),
                this._k2._6m(),
                this._topCanvas._jm(),
                this._6f = !1
        },
        _fr: function () {
            this._6f && (this._ijed || (this._mwq && this._kz && this._kz._$s && (this._kz._$s = !1, this._kz.forEach(function (t) {
                t.invalidateVisibility(!0)
            })), this._mws(), this._28()))
        },
        _fs: null,
        _1g: function (t, i, e, n, r) {
            if (!e || !n)
                return void this._5q();
            var s = this._mzx,
                o = this._8b;
            this._5q(),
                this._fs.length = 0;
            var h,
                a = {},
                l = this._mwo;
            r = r || l._lp;
            for (var _, u, d, f, c, v, g = this._md._jz, E = t + e, m = i + n, p = 0, y = g.length; y > p; p++)
                if (v = g[p], c = v.__oldBounds, v.__oldBounds = null, v._i5)
                    if (f = v.__jeChanged, v.__jeChanged = !1, _ = v.uiBounds, u = _.x + v.$x, d = _.y + v.$y, E > u && m > d && u + _.width > t && d + _.height > i) {
                        if (h = v.$data.zIndex, h in a || (a[h] = !0, this._fs.push(h || 0)), s.push(v), this._8b[v.id] = v, r)
                            continue;
                        c && (l._lr(c.x, c.y, c.width, c.height), r = l._lp),
                        f && (l._lr(u, d, _.width, _.height), r = l._lp)
                    } else !r && o[v.id] && c && (l._lr(c.x, c.y, c.width, c.height), r = l._lp);
                else !r && c && (l._lr(c.x, c.y, c.width, c.height), r = l._lp)
        },
        _d9: function (t) {
            var i = t.$data.__i5Changed;
            return t.$data.__i5Changed = !1,
                t._1n || t.$data._6f ? (t.$data._6f = !1, t._mwq && (t.__oldBounds = {
                    x: t.$x + t.uiBounds.x,
                    y: t.$y + t.uiBounds.y,
                    width: t.uiBounds.width,
                    height: t.uiBounds.height
                }), t.__jeChanged = t.validate(), i || t.__jeChanged) : (i && t._mwq && (t.__oldBounds = {
                    x: t.$x + t.uiBounds.x,
                    y: t.$y + t.uiBounds.y,
                    width: t.uiBounds.width,
                    height: t.uiBounds.height
                }), i)
        },
        _ja: function (t, i, e, n) {
            n = n || this._k2._76;
            var r = n.x,
                s = n.y,
                o = n.width,
                h = n.height;
            this._1g(r, s, o, h, e),
                this._4c(),
            this._fs.length && (zs ? (this._fs.sort(), this._mzx = f(this._mzx, Ea)) : this._mzx.sort(Ea));
            try {
                this._is(t, i)
            } catch (a) {
                Zo.error(a),
                this._kwFlag || (this._kwFlag = !0, this._kz.invalidate())
            }
        },
        _is: function (t, i) {
            t.save(),
                this._mwo._k1(t, this._js, this._k2),
                this._k2._mwy(t);
            for (var e, n, r = this._mzx, s = [], o = 0, h = r.length; h > o; o++)
                e = r[o], n = e.uiBounds, (this._mwo._lp || this._mwo._en(n.x + e.$x, n.y + e.$y, n.width, n.height)) && (e._jm(t, i), e._jt && e._jt.length && s.push(e));
            if (s.length)
                for (o = 0, h = s.length; h > o; o++)
                    s[o]._9c(t, i);
            t.restore()
        },
        _fw: function (t, i, e) {
            t.save(),
                t.translate(-e.x * i, -e.y * i),
                t.scale(i, i);
            var n,
                r,
                s = this._md._jz.slice();
            this._fs.length && (zs ? (this._fs.sort(), s = f(s, Ea)) : s.sort(Ea));
            for (var o = [], h = 0, a = s.length; a > h; h++)
                n = s[h], n._i5 && (r = n.uiBounds, e.intersectsRect(r.x + n.$x, r.y + n.$y, r.width, r.height) && (n._jm(t, i), n._jt && n._jt.length && o.push(n)));
            if (o.length)
                for (h = 0, a = o.length; a > h; h++)
                    o[h]._9c(t, i);
            t.restore()
        },
        _10: function () {
        },
        _1x: function () {
            for (var t, i, e = this._md._jz, n = new io, r = e.length - 1; r >= 0; r--)
                t = e[r], t._i5 && (i = t.uiBounds, n.addRect(t.$x + i.x, t.$y + i.y, i.width, i.height));
            var s = this._8g;
            this._8g = n,
            n.equals(s) || this._10(s, n)
        },
        _mwh: function () {
            for (var t, i = this._md._jz, e = i.length - 1; e >= 0; e--)
                t = i[e], this._d9(t) && !this._$g && (this._$g = !0)
        },
        _1v: function (t, i, e, n) {
            this._mwo._lp || (t && (t > 0 && this._mwo._lr(this._k2._76.x, this._k2._76.y, t / this._k2._ks, this._k2._93 / this._k2._ks), e + t < this._k2._mxx && this._mwo._lr(this._k2._76.x + (e + t) / this._k2._ks, this._k2._76.y, (this._k2._mxx - e - t) / this._k2._ks, this._k2._93 / this._k2._ks)), i && (i > 0 && this._mwo._lr(this._k2._76.x, this._k2._76.y, this._k2._mxx / this._k2._ks, i / this._k2._ks), n + i < this._k2._93 && this._mwo._lr(this._k2._76.x, this._k2._76.y + (n + i) / this._k2._ks, this._k2._mxx / this._k2._ks, (this._k2._93 - n - i) / this._k2._ks)))
        },
        _ee: function (t, i) {
            this._mzz(),
                this._k2._ee(t, i)
        },
        _mwg: function (t, i, e) {
            this._mzz(),
                this._k2._mwg(t, i, e)
        },
        _8w: function () {
        },
        _g4: function (t, i, e) {
            return this._mwq ? void (this._k2._g4(t, i, e) !== !1 && this._mzz()) : void (this._k2._ks = t)
        },
        _23: function () {
            var t = this._4c();
            if (!t.isEmpty()) {
                var i = this._k2._mxx / t.width,
                    e = this._k2._93 / t.height,
                    n = Math.min(i, e);
                return n = Math.max(this._fp, Math.min(this._g7, n)), {
                    scale: n,
                    cx: t.cx,
                    cy: t.cy
                }
            }
        },
        _k3: function (t, i, e) {
            return this._k2._k3(t, i, e) === !1 ? !1 : void this._mzz()
        },
        _in: function (t, i) {
            return this._k2._in(t, i) === !1 ? !1 : void this._mzz()
        },
        _k5: function (t, i) {
            return this._k2._k5(t, i) === !1 ? !1 : void this._mzz()
        },
        _6r: function () {
            return this._k2._6rFlag ? !1 : (this._k2._6rFlag = !0, void this._mzz())
        },
        _5q: function () {
            this._mzx.length = 0,
                this._8b = {}
        },
        _kp: function () {
            this._la()
        },
        _ij: function () {
            this._la(),
                this._ijed = !0,
                this._6f = !1,
                this._topCanvas.clear(),
                this._8p.length = 0,
            this._7n && (this._7n._ij(), delete this._7n)
        },
        _la: function () {
            this._mwq = !1,
                this._$g = !0,
                this._md.clear(),
                this._5q(),
                this._mwo._la(),
                this._mzz()
        },
        _8q: function (t, i, e, n) {
            var r = this._ks;
            return new io(this._mzq(t), this._mzn(i), e / r, n / r)
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
            var i = this._8d(t);
            return i.x = this._mzq(i.x),
                i.y = this._mzn(i.y),
                i
        },
        _gb: function (t, i) {
            return {
                x: this._e4(t),
                y: this._eh(i)
            }
        },
        _ei: function (t, i) {
            return {
                x: this._mzq(t),
                y: this._mzn(i)
            }
        },
        _8d: function (t) {
            return Ei(t, this._jsPanel)
        },
        _3t: function (t) {
            if (t.uiId !== e)
                return t.uiId ? this._md.getById(t.uiId) : null;
            var i = Math.round(Ws.SELECTION_TOLERANCE / this._k2._ks) || .1;
            this._js.ratio && (i *= this._js.ratio);
            for (var n, r = this._$f(t), s = r.x, o = r.y, h = this._mzx, a = h.length - 1; a >= 0; a--)
                if (n = h[a], n._i5 && n.hitTest(s, o, i))
                    return t.uiId = n.id, n;
            t.uiId = null
        },
        hitTest: function (t) {
            var i = this._3t(t);
            if (!i)
                return null;
            var e = Math.round(Ws.SELECTION_TOLERANCE / this._k2._ks) || 1;
            this._js.ratio && (e *= this._js.ratio);
            var n = this._$f(t),
                r = n.x,
                s = n.y,
                o = i.hitTest(r, s, e, !0);
            return o instanceof ta ? o : i
        },
        _mwv: function (t) {
            t.id !== e && (t = t.id);
            var i = this._md.getById(t);
            return i ? new io((i.$x || 0) + i.uiBounds.x, (i.$y || 0) + i.uiBounds.y, i.uiBounds.width, i.uiBounds.height) : void 0
        },
        _8p: null,
        _28: function () {
            if (!this._8p.length)
                return !1;
            var t = this._8p;
            this._8p = [],
                c(t, function (t) {
                    try {
                        t.delay ? T(t.call, t.scope, t.delay) : t.call.call(t.scope)
                    } catch (i) {
                    }
                }, this),
                this._fr()
        },
        callLater: function (t, i, e) {
            i && L(i) && (e = i, i = null);
            var n = this._8p;
            n.push({
                call: t,
                scope: i,
                delay: e
            }),
            this._6f || this._28()
        },
        _6y: function () {
            return this._jsPanel || this._5t(),
                this._jsPanel
        },
        _5t: function () {
            var t = i.createElement("div");
            t.className = Ta,
                t.tabIndex = 0,
                this._js = tr(t),
                this.ratio = this._js.ratio || 1,
                this._topCanvas = new Vr(this, t),
                this._jsPanel = t
        },
        _dy: function (t) {
            var i = this._6y();
            i.parentNode && i.parentNode.removeChild(i),
                t.appendChild(this._6y()),
                A(t, "Q-Graph")
        }
    },
        gi(".Q-Graph", "text-align: left; outline: none;-webkit-tap-highlight-color:rgba(0,0,0,0);user-select: none");
    var ma = {
            position: "absolute",
            "user-select": "none",
            outline: "none",
            "transform-origin": "0 0",
            "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
        },
        pa = "Q-Canvas";
    gi("." + pa, ma);
    var ya = {
            width: "100%",
            height: "100%",
            overflow: "hidden",
            outline: "none",
            padding: "0"
        },
        Ta = "Q-CanvasPanel";
    gi("." + Ta, ya),
        Z(Qn.prototype, {
            _76: {
                get: function () {
                    return this._k2._76
                }
            },
            _eg: {
                get: function () {
                    return this._k2._eg
                },
                set: function (t) {
                    return !t || 1 > t ? !1 : void (this._k2._eg = t)
                }
            },
            _g7: {
                get: function () {
                    return this._k2._g7
                },
                set: function (t) {
                    return !t || 1 > t ? !1 : void (this._k2._g7 = t)
                }
            },
            _fp: {
                get: function () {
                    return this._k2._fp
                },
                set: function (t) {
                    return !t || 0 >= t ? !1 : void (this._k2._fp = t)
                }
            },
            _ks: {
                get: function () {
                    return this._k2._g8()
                },
                set: function (t) {
                    this._g4(t)
                }
            },
            _mm: {
                get: function () {
                    return this._k2._lf()
                }
            },
            _mn: {
                get: function () {
                    return this._k2._lg()
                }
            }
        }),
        ir.prototype = {
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
                return this._12 = !1,
                    this._5h(this._dh._jsPanel.clientWidth, this._dh._jsPanel.clientHeight)
            },
            _5h: function (t, i) {
                return this._mxx == t && this._93 == i ? !1 : (this._mxx = t, this._93 = i, void this._dh._3j(t, i))
            },
            _eu: function (t, i, e) {
                e && (e = Math.max(this._fp, Math.min(this._g7, e)), this._ks = e),
                    this._mm = this._mxx / 2 - t * this._ks,
                    this._mn = this._93 / 2 - i * this._ks,
                    this._2a = !0
            },
            _2w: function (t, i) {
                t = t || this._mxx,
                    i = i || this._93,
                    this._76.set(-this._mm / this._ks, -this._mn / this._ks, t / this._ks, i / this._ks)
            },
            _k3: function (t, i, e) {
                return this._g4(this._5u() * t, i, e)
            },
            _k5: function (t, i) {
                return this._g4(this._5u() * this._eg, t, i)
            },
            _in: function (t, i) {
                return this._g4(this._5u() / this._eg, t, i)
            },
            _g4: function (t, i, n) {
                this._6rFlag = !1,
                    t = Math.max(this._fp, Math.min(this._g7, t));
                var r = this._5u();
                return i === e && (i = this._mxx / 2, n = this._93 / 2),
                t != r && (this._2a = !0, this._dh._8w(r, t)),
                    this._k2._g4(t / this._ks, i, n)
            },
            _5u: function () {
                return this._ks * this._k2._ks
            },
            _ee: function (t, i) {
                this._k2._ee(t, i)
            },
            _mwg: function (t, i, e) {
                var n = this._lf(),
                    r = this._lg(),
                    s = this._g8();
                return e && (e = Math.max(this._fp, Math.min(this._g7, e))),
                    t != n || i != r || e && e != s ? (e && e != s ? (e /= this._ks, this._2a = !0) : e = this._k2._ks, t -= n * e, i -= r * e, this._k2._9e(e, t, i), this._dh._32(n, r, s, arguments[0], arguments[1], arguments[2]), s != arguments[2] && this._dh._8w(s, arguments[2]), !0) : !1
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
            _jq: function (t, i) {
                this._12 && this._43(),
                Fs && Gs && (i = !0);
                var e = t._js,
                    n = e.ratio || 1,
                    r = e.clientWidth,
                    s = e.clientHeight,
                    o = this._mxx != r,
                    h = this._93 != s,
                    a = o || h;
                a && t._topCanvas._js.setSize(this._mxx, this._93);
                var l = this._mm,
                    _ = this._mn,
                    u = this._ks;
                if (this._6rFlag) {
                    this._6rFlag = !1;
                    var d = t._23();
                    d && this._eu(d.cx, d.cy, d.scale)
                }
                if (this._2a || i || a)
                    return this._2a = !1, this._ks *= this._k2._ks, this._mm = this._mm * this._k2._ks + this._k2._mm, this._mn = this._mn * this._k2._ks + this._k2._mn, this._k2._ks = 1, this._k2._mm = 0, this._k2._mn = 0, a && e.setSize(this._mxx, this._93), t._mwo._lp = !0, this._2w(this._mxx, this._93), void ((l != this._mm || _ != this._mn || u != this._ks) && (t._32(l, _, u, this._mm, this._mn, this._ks), u != this._ks && t._8w(u, this._ks)));
                var f = this._k2._mm,
                    c = this._k2._mn;
                if (f || c) {
                    this._k2._mm = 0,
                        this._k2._mn = 0,
                        this._mm += f,
                        this._mn += c,
                        this._2w(r, s);
                    var v = e.g;
                    this._ep(v, e, f * n, c * n),
                        t._1v(f, c, r, s),
                        t._32(l, _, u, this._mm, this._mn, this._ks)
                }
            },
            _ep: function (t, e, n, r) {
                var s = this._mxackCanvas;
                s || (s = this._mxackCanvas = i.createElement("canvas"), s.g = s.getContext("2d")),
                    s.width = e.width,
                    s.height = e.height,
                    s.g.drawImage(e, n, r),
                    t._la(),
                    t.drawImage(s, 0, 0)
            },
            _mwy: function (t) {
                1 != t.canvas.ratio && t.scale(t.canvas.ratio, t.canvas.ratio),
                    t.translate(this._mm, this._mn),
                    t.scale(this._ks, this._ks)
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
    var wa = function () {
        this._gm = [],
            this._je = new io
    };
    wa.prototype = {
        _gk: 20,
        _gm: null,
        _lp: !1,
        _je: null,
        _la: function () {
            this._lp = !1,
                this._gm.length = 0,
                this._je.clear()
        },
        _iv: function () {
            return this._lp || this._gm.length > 0
        },
        _lr: function (t, i, e, n) {
            this._lp || 0 >= e || 0 >= n || (this._gm.push({
                x: t,
                y: i,
                width: e,
                height: n
            }), this._je.addRect(t, i, e, n))
        },
        _gn: function (t) {
            this._lr(t.x, t.y, t.width, t.height)
        },
        _en: function (t, i, e, n) {
            if (!this._je.intersectsRect(t, i, e, n))
                return !1;
            if (Us || this._gm.length >= this._gk)
                return !0;
            for (var r, s = 0, o = this._gm.length; o > s; s++)
                if (r = this._gm[s], si(t, i, e, n, r.x, r.y, r.width, r.height))
                    return !0;
            return !1
        },
        _k1: function (t, i, e) {
            if (this._lp)
                return t.setTransform(1, 0, 0, 1, 0, 0), void (Gs && 4.3 > Hs ? (t.clearRect(0, 0, i.width, i.height), i.style.display = "none", i.offsetHeight, i.style.display = "inherit") : t.clearRect(0, 0, i.width, i.height));
            t.beginPath();
            var n,
                r,
                s,
                o,
                h = e._ks,
                a = this._gm,
                l = i.ratio || 1;
            if (Us || a.length >= this._gk)
                return n = e._e4(this._je.x) * l, r = e._eh(this._je.y) * l, s = X(n + this._je.width * h * l) - (n = q(n)), o = X(r + this._je.height * h * l) - (r = q(r)), t.clearRect(n, r, s, o), t.rect(n, r, s, o), void t.clip();
            for (var _, u = 0, d = a.length; d > u; u++)
                _ = a[u], n = e._e4(_.x) * l, r = e._eh(_.y) * l, s = X(n + _.width * h * l) - (n = q(n)), o = X(r + _.height * h * l) - (r = q(r)), t.clearRect(n, r, s, o), t.rect(n, r, s, o);
            t.clip()
        }
    };
    var Oa = {};
    Oa[ea.SELECTION_COLOR] = Ws.SELECTION_COLOR,
        Oa[ea.SELECTION_BORDER] = Ws.SELECTION_BORDER,
        Oa[ea.SELECTION_SHADOW_BLUR] = Ws.SELECTION_SHADOW_BLUR,
        Oa[ea.SELECTION_TYPE] = Jo.SELECTION_TYPE_SHADOW,
        Oa[ea.SELECTION_SHADOW_OFFSET_X] = 2,
        Oa[ea.SELECTION_SHADOW_OFFSET_Y] = 2,
        Oa[ea.LABEL_COLOR] = Ws.LABEL_COLOR,
        Oa[ea.LABEL_POSITION] = no.CENTER_BOTTOM,
        Oa[ea.LABEL_ANCHOR_POSITION] = no.CENTER_TOP,
        Oa[ea.LABEL_PADDING] = new eo(0, 2),
        Oa[ea.LABEL_POINTER_WIDTH] = 8,
        Oa[ea.LABEL_RADIUS] = 8,
        Oa[ea.LABEL_POINTER] = !0,
        Oa[ea.LABEL_BORDER] = 0,
        Oa[ea.LABEL_BORDER_STYLE] = "#000",
        Oa[ea.LABEL_ROTATABLE] = !0,
        Oa[ea.LABEL_BACKGROUND_COLOR] = null,
        Oa[ea.LABEL_BACKGROUND_GRADIENT] = null,
        Oa[ea.EDGE_COLOR] = "#555555",
        Oa[ea.EDGE_WIDTH] = 1.5,
        Oa[ea.EDGE_FROM_AT_EDGE] = !0,
        Oa[ea.EDGE_TO_AT_EDGE] = !0,
        Oa[ea.GROUP_BACKGROUND_COLOR] = V(3438210798),
        Oa[ea.GROUP_STROKE] = 1,
        Oa[ea.GROUP_STROKE_STYLE] = "#000",
        Oa[ea.ARROW_TO] = !0,
        Oa[ea.ARROW_FROM_SIZE] = Ws.ARROW_SIZE,
        Oa[ea.ARROW_TO_SIZE] = Ws.ARROW_SIZE,
        Oa[ea.EDGE_LOOPED_EXTAND] = 10,
        Oa[ea.EDGE_CORNER_RADIUS] = 8,
        Oa[ea.EDGE_CORNER] = Jo.EDGE_CORNER_ROUND,
        Oa[ea.EDGE_SPLIT_BY_PERCENT] = !0,
        Oa[ea.EDGE_EXTEND] = 20,
        Oa[ea.EDGE_SPLIT_PERCENT] = .5,
        Oa[ea.EDGE_SPLIT_VALUE] = 20,
        Oa[ea.EDGE_BUNDLE_GAP] = 20,
        Oa[ea.EDGE_BUNDLE_LABEL_ANCHOR_POSITION] = no.CENTER_BOTTOM,
        Oa[ea.EDGE_BUNDLE_LABEL_POSITION] = no.CENTER_TOP,
        Oa[ea.EDGE_BUNDLE_LABEL_COLOR] = "#075bc5",
        Oa[ea.SHAPE_STROKE] = 1,
        Oa[ea.SHAPE_STROKE_STYLE] = "#2898E0",
        Oa[ea.RENDER_COLOR_BLEND_MODE] = Ws.BLEND_MODE,
        Oa[ea.ALPHA] = 1,
        Ws.LOOKING_EDGE_ENDPOINT_TOLERANCE = 2,
        Jo.NAVIGATION_SCROLLBAR = "navigation.scrollbar",
        Jo.NAVIGATION_NONE = "navigation.none",
        Jo.NAVIGATION_BUTTON = "navigation.button",
        Ws.NAVIGATION_TYPE = Jo.NAVIGATION_SCROLLBAR;
    var Aa = function (t, e) {
        this._kz = t,
        b(e) && (e = i.getElementById(e)),
        e && e.tagName || (e = i.createElement("div")),
            M(this, Aa, [e]),
            this._kz._$u.addListener(this._15, this),
            this._kz._$b.addListener(this._1o, this),
            this._kz._1l.addListener(this._9g, this),
            this._kz._13.addListener(this._6n, this),
            this._kz._$m.addListener(this._34, this),
            this._kz._$q.addListener(this._3r, this),
            this._mwu = {},
            this._40(Ws.NAVIGATION_TYPE, !0)
    };
    Aa.prototype = {
        _$k: null,
        _3r: function (t) {
            var i = t.source,
                e = t.data;
            if (e)
                if (this._mwq) {
                    var n,
                        r;
                    if (I(e))
                        for (var s = 0, o = e.length; o > s; s++)
                            r = e[s].id, n = this._md.getById(r), n && (n.selected = i.containsById(r), n.invalidateRender());
                    else {
                        if (r = e.id, n = this._md.getById(r), !n)
                            return;
                        n.selected = i.containsById(r),
                            n.invalidateRender()
                    }
                    this._mzz()
                } else {
                    this._$k || (this._$k = {});
                    var n,
                        r;
                    if (I(e))
                        for (var s = 0, o = e.length; o > s; s++)
                            r = e[s].id, this._$k[r] = !0;
                    else
                        r = e.id, this._$k[r] = !0
                }
        },
        _kz: null,
        _mz7: function (t) {
            var i = t.uiClass;
            return i ? new i(t, this._kz) : void 0
        },
        _15: function () {
        },
        _1o: function (t) {
            if (!this._mwq)
                return !1;
            var i = t.source,
                e = t.kind;
            "enableSubNetwork" == e && this._kz.invalidateVisibility(),
                "uiClass" == e ? (this._md.removeById(i.id), this._l0(i)) : "expanded" == e && i._i9() && t.value && this._5g(i);
            var n = this._md.getById(i.id);
            n && n._mwq && n.onPropertyChange(t) && this._mzz()
        },
        _3w: function (t) {
            var i = this._kn(t);
            i && (i.invalidateData(), this._mzz())
        },
        _9g: function (t) {
            if (!this._mwq)
                return !1;
            switch (this._$g = !0, t.kind) {
                case Oo.KIND_ADD:
                    this._l0(t.data);
                    break;
                case Oo.KIND_REMOVE:
                    this._gw(t.data);
                    break;
                case Oo.KIND_CLEAR:
                    this._it(t.data)
            }
        },
        _la: function () {
            this._mwu = {},
                B(this, Aa, "_la")
        },
        _mwu: null,
        _l0: function (t) {
            var i = this._mz7(t);
            i && (this._md.add(i), this._mwq && (this._mwu[t.id] = t), this._mzz())
        },
        _gw: function (t) {
            if (Zo.isArray(t)) {
                for (var i, e = [], n = 0, r = t.length; r > n; n++)
                    i = t[n].id, e.push(i), delete this._mwu[i];
                t = e
            } else
                t = t.id, delete this._mwu[t];
            this._md.remove(t) && this._mzz()
        },
        _it: function () {
            this._la()
        },
        _6n: function (t) {
            return this._mwq ? void (t.source instanceof Kh && !this._mwu[t.source.id] && (t.oldValue && (this._3w(t.oldValue), t.oldValue.__6f = !0), t.value && (this._3w(t.value), t.value.__6f = !0), this._5g(t.source))) : !1
        },
        _34: function (t) {
            return this._mwq ? void (t.source instanceof Kh && !this._mwu[t.source.id] && this._5g(t.source)) : !1
        },
        _mwh: function (t) {
            return t ? this._$v() : void this._mwc()
        },
        _33: function (t) {
            if (t._edgeBundleInvalidateFlag) {
                var i = t.getEdgeBundle(!0);
                if (!i)
                    return t._edgeBundleInvalidateFlag = !1, void t.validateEdgeBundle();
                i._fr(this._kz),
                    i._mxj(function (t) {
                        t.validateEdgeBundle()
                    })
            }
        },
        _$v: function () {
            var t,
                i = (this._kz, this._kz.graphModel),
                e = this._md,
                n = [],
                r = 1;
            if (i.forEachByDepthFirst(function (i) {
                return i instanceof Vh ? (this._33(i), void n.push(i)) : (t = this._mz7(i), void (t && (e.add(t), t._i5 = this._dt(i, !1, !0), i.__lj = r++)))
            }, this), e.length)
                for (var s = e._jz, r = s.length - 1; r >= 0; r--)
                    t = s[r], t._i5 && this._3y(t, t.$data);
            for (var o, r = 0, h = n.length; h > r; r++)
                if (o = n[r], t = this._mz7(o))
                    if (t._i5 = this._dt(o, !0, !0), t._i5) {
                        this._3y(t, o, !0),
                            e.add(t);
                        var a = o.fromAgent,
                            l = o.toAgent,
                            _ = a.__lj || 0;
                        a != l && (_ = Math.max(_, l.__lj || 0)),
                            o.__lj = _
                    } else
                        e.add(t);
            if (n.length && e._jz.sort(function (t, i) {
                return t.$data.__lj - i.$data.__lj
            }), this._$k) {
                var u = i.selectionModel;
                for (var d in this._$k)
                    if (u.containsById(d)) {
                        var t = e.getById(d);
                        t && (t.selected = !0)
                    }
                this._$k = null
            }
        },
        _mwc: function () {
            for (var t in this._mwu) {
                var i = this._mwu[t];
                i instanceof Kh ? this._5g(i) : this._5f(i)
            }
            this._mwu = {};
            for (var e, n, r, s = this._md._jz, o = [], h = s.length - 1; h >= 0; h--)
                e = s[h], n = e.$data, r = n instanceof Vh, r && this._33(n), e._i5 = this._dt(n, r), e._i5 ? r ? o.push(e) : this._3y(e, n) && !this._$g && (this._$g = !0) : n.__i5Changed && e._mwq && (e.__oldBounds = {
                    x: e.$x + e.uiBounds.x,
                    y: e.$y + e.uiBounds.y,
                    width: e.uiBounds.width,
                    height: e.uiBounds.height
                });
            if (o.length)
                for (var h = 0, a = o.length; a > h; h++)
                    e = o[h], this._3y(e, e.$data) && !this._$g && (this._$g = !0)
        },
        _3y: function (t, i, n) {
            if (n || n === e && i instanceof Vh)
                return i.__4m && (i.__4m = !1, t._4m()), this._d9(t);
            if (i.__6f && i._i9() && (t._5r(), i.__6f = !1), this._d9(t)) {
                var r = this._4y(i);
                return r && (r.__6f = !0),
                i.hasEdge() && i.forEachEdge(function (t) {
                    t.__4m = !0
                }, this),
                    !0
            }
        },
        _2x: function (t, i) {
            var e = t.fromAgent,
                n = t.toAgent,
                r = i.getIndexById(e.id);
            if (e == n)
                return r;
            var s = i.getIndexById(n.id);
            return Math.max(r, s)
        },
        _3h: function (t, i) {
            var e = this.graphModel._h0(t);
            return e ? i.getIndexById(e.id) : 0
        },
        _5g: function (t) {
            var i = this._md,
                e = i.getById(t.id);
            if (!e)
                throw new Error("UI '" + t.name + "' not found");
            var r = this._3h(t, i),
                s = [e];
            t.hasChildren() && n(t, function (t) {
                t instanceof Kh && (e = i.getById(t.id), e && s.push(e))
            }, this),
                this._4w(i, r, s)
        },
        _5f: function (t) {
            var i = this._md.getById(t.id);
            if (i) {
                var e = this._2x(t, this._md);
                this._md.setIndexBefore(i, e)
            }
        },
        _4w: function (t, i, e) {
            function n(t) {
                r.add(t)
            }

            var r = new Xs;
            if (c(e, function (e) {
                i = t.setIndexAfter(e, i),
                    e.$data.forEachEdge(n)
            }, this), 0 != r.length) {
                r.forEach(this._5f, this)
            }
        },
        _8x: function (t) {
            return t.getEdgeBundle(!0)
        },
        _5a: function (t) {
            if (!t.isBundleEnabled())
                return !1;
            var i = t.getEdgeBundle(!0);
            i && i.reverseExpanded() !== !1 && this._mzz()
        },
        _4y: function (t) {
            var i = hn(t);
            return i && i.expanded ? i : null
        },
        _h6: function (t) {
            return hn(t)
        },
        _3d: function (t, i, e) {
            t._$s = !1;
            var n = t._i5;
            t._i5 = this._56(t, i),
            e || t._i5 == n || (t.__i5Changed = !0)
        },
        _56: function (t, i) {
            return this._3z(t, i) ? !this._kz._i5Filter || this._kz._i5Filter(t) !== !1 : !1
        },
        _dt: function (t, i, e) {
            return t._$s && this._3d(t, i, e),
                t._i5
        },
        _mw9: function (t) {
            return !this._kz._3x || this._kz._3x == jr(t)
        },
        _3z: function (t, i) {
            if (t.visible === !1)
                return !1;
            if (i === e && (i = t instanceof Vh), !i)
                return this._kz._3x != jr(t) ? !1 : !t._dz;
            var n = t.fromAgent,
                r = t.toAgent;
            if (!n || !r)
                return !1;
            if (n == r && !t.isLooped())
                return !1;
            if (t.isBundleEnabled()) {
                var s = t.getEdgeBundle(!0);
                if (s && !s._dt(t))
                    return !1
            }
            var o = this._dt(n, !1),
                h = this._dt(r, !1);
            return o && h ? !0 : !1
        },
        _7o: null,
        _7n: null,
        _40: function (t, i) {
            return i || t != this._7o ? (this._7o = t, this._7n && (this._7n._ij(), delete this._7n), t == Jo.NAVIGATION_SCROLLBAR ? void (this._7n = new qr(this, this._jsPanel)) : t == Jo.NAVIGATION_BUTTON ? void (this._7n = new Wr(this, this._jsPanel)) : void 0) : !1
        },
        _32: function (t, i, e, n, r, s) {
            this._kz._4s(new co(this._kz, "transform", {
                tx: n,
                ty: r,
                scale: s
            }, {
                tx: t,
                ty: i,
                scale: e
            })),
                this._6a()
        },
        _8w: function (t, i) {
            this._kz._4s(new co(this._kz, "scale", i, t))
        },
        _6a: function () {
            this._7n && this._7n._jq(),
                this._kz._4s(new co(this._kz, "bounds"))
        },
        _10: function (t, i) {
            this._kz._4s(new co(this._kz, "element.bounds", i, t)),
                this._6a()
        }
    },
        k(Aa, Qn),
        Z(Aa.prototype, {
            graphModel: {
                get: function () {
                    return this._kz._kzModel
                }
            }
        });
    var xa = function (i, e) {
        this._$u = new yo,
            this._$u.on(function (t) {
                "currentSubNetwork" == t.kind && this.invalidateVisibility()
            }, this),
            this._1l = new yo,
            this._1l.addListener(function (t) {
                !this.currentSubNetwork || t.kind != Oo.KIND_CLEAR && t.kind != Oo.KIND_REMOVE || this.graphModel.contains(this.currentSubNetwork) || (this.currentSubNetwork = null)
            }, this),
            this._$b = new yo,
            this._13 = new yo,
            this._$m = new yo,
            this._$q = new yo,
            this.graphModel = e || new Yn,
            this._8t = new Aa(this, i),
            this._3f = new ps(this),
            this._1i = new yo,
            this._onresize = Po(t, "resize", function () {
                this.updateViewport()
            }, !1, this),
            this._8t._jsPanel.ondrop = function (t) {
                this.ondrop(t)
            }
                .bind(this),
            this._8t._jsPanel.ondragover = function (t) {
                this.ondragover(t)
            }
                .bind(this)
    };
    xa.prototype = {
        fullRefresh: !1,
        originAtCenter: !0,
        editable: !1,
        ondragover: function (t) {
            Zo.stopEvent(t)
        },
        getDropInfo: function (t, i) {
            var e = null;
            if (i)
                try {
                    e = JSON.parse(i)
                } catch (n) {
                }
            return e
        },
        ondrop: function (t) {
            var i = t.dataTransfer;
            if (i) {
                var e = i.getData("text"),
                    n = this.getDropInfo(t, e);
                n || (n = {}, n.image = i.getData("image"), n.type = i.getData("type"), n.label = i.getData("label"), n.groupImage = i.getData("groupImage"));
                var r = this.globalToLocal(t);
                if (r = this.toLogical(r.x, r.y), !(this.dropAction instanceof Function && this.dropAction.call(this, t, r, n) === !1) && (n.image || n.label)) {
                    var s = n.image,
                        o = n.type,
                        h = n.label,
                        a = n.groupImage;
                    Zo.stopEvent(t);
                    var l;
                    if (o && "Node" != o ? "Text" == o ? l = this.createText(h, r.x, r.y) : "ShapeNode" == o ? l = this.createShapeNode(h, r.x, r.y) : "Group" == o ? (l = this.createGroup(h, r.x, r.y), a && (a = Fr(a), a && (l.groupImage = a))) : (o = J(o), o instanceof Function && o.prototype instanceof Kh && (l = new o, l.name = h, l.location = new Zs(r.x, r.y), this._kzModel.add(l))) : l = this.createNode(h, r.x, r.y), l) {
                        if (s && (s = Fr(s), s && (l.image = s)), t.shiftKey) {
                            var _ = this.getElementByMouseEvent(t);
                            (_.enableSubNetwork || _ instanceof Qh) && (l.parent = _)
                        }
                        if (n.properties)
                            for (var u in n.properties)
                                l[u] = n.properties[u];
                        if (n.clientProperties)
                            for (var u in n.clientProperties)
                                l.set(u, n.clientProperties[u]);
                        if (n.styles && l.putStyles(n.styles), this.onElementCreated(l, t, n) === !1)
                            return !1;
                        var d = new ms(this, ms.ELEMENT_CREATED, t, l);
                        return this.onInteractionEvent(d),
                            l
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
            return (t instanceof Kh || t instanceof Vh && t.hasPathSegments()) && t.movable !== !1
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
        createNode: function (t, i, e) {
            var n = new Kh(t, i, e);
            return this._kzModel.add(n),
                n
        },
        createText: function (t, i, e) {
            var n = new Un(t, i, e);
            return this._kzModel.add(n),
                n
        },
        createShapeNode: function (t, i, e, n) {
            L(i) && (n = e, e = i, i = null);
            var r = new Zh(t, i);
            return r.$location = new Zs(e, n),
                this._kzModel.add(r),
                r
        },
        createGroup: function (t, i, e) {
            var n = new Qh(t, i, e);
            return this._kzModel.add(n),
                n
        },
        createEdge: function (t, i, e) {
            if (t instanceof Kh) {
                var n = e;
                e = i,
                    i = t,
                    t = n
            }
            var r = new Vh(i, e);
            return t && (r.$name = t),
                this._kzModel.add(r),
                r
        },
        addElement: function (t, i) {
            this._kzModel.add(t),
            i && t.hasChildren() && t.forEachChild(function (t) {
                this.addElement(t, i)
            }, this)
        },
        removeElement: function (t) {
            this._kzModel.remove(t)
        },
        clear: function () {
            this._kzModel.clear()
        },
        getStyle: function (t, i) {
            var n = t._j6[i];
            return n !== e ? n : this.getDefaultStyle(i)
        },
        getDefaultStyle: function (t) {
            if (this._j6) {
                var i = this._j6[t];
                if (i !== e)
                    return i
            }
            return Oa[t]
        },
        translate: function (t, i, e) {
            return e ? this.translateTo(this.tx + t, this.ty + i, this.scale, e) : this._8t._ee(t, i)
        },
        translateTo: function (t, i, e, n) {
            if (n) {
                var r = this._5j();
                return r._li(t, i, e, n)
            }
            return this._8t._mwg(t, i, e)
        },
        centerTo: function (t, i, e, n) {
            return (!e || 0 >= e) && (e = this.scale),
                this.translateTo(this.width / 2 - t * e, this.height / 2 - i * e, e, n)
        },
        moveToCenter: function (t, i) {
            this.callLater(function () {
                var e = this.bounds;
                this.centerTo(e.cx, e.cy, t, i)
            }, this)
        },
        zoomToOverview: function (t, i) {
            return this.callLater(function () {
                var e = this._8t._23();
                e && (i && (e.scale = Math.min(e.scale, i)), this.centerTo(e.cx, e.cy, e.scale, t))
            }, this)
        },
        zoomAt: function (t, i, n, r) {
            if (r === e && (r = this.zoomAnimation === e || null === this.zoomAnimation ? Ws.ZOOM_ANIMATE : this.zoomAnimation), i === e && (i = this.width / 2), i = i || 0, n === e && (n = this.height / 2), n = n || 0, r) {
                var s = this.scale;
                return t = s * t,
                    t >= this.maxScale || t <= this.minScale ? !1 : (i = t * (this.tx - i) / s + i, n = t * (this.ty - n) / s + n, this.translateTo(i, n, t, r))
            }
            return this._8t._k3(t, i, n)
        },
        zoomOut: function (t, i, e) {
            return e ? this.zoomAt(1 / this.scaleStep, t, i, e) : this._8t._in(t, i)
        },
        zoomIn: function (t, i, e) {
            return e ? this.zoomAt(this.scaleStep, t, i, e) : this._8t._k5(t, i)
        },
        _5j: function () {
            return this._panAnimation || (this._panAnimation = new Ca(this)),
                this._panAnimation
        },
        enableInertia: !0,
        _mw7: function (t, i) {
            var e = this._5j();
            return e._gy(t || 0, i || 0)
        },
        stopAnimation: function () {
            this._panAnimation && this._panAnimation._lo()
        },
        getUI: function (t) {
            return Q(t) ? this._8t._3t(t) : this._8t._kn(t)
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
        toCanvas: function (t, i) {
            return this._8t._gb(t, i)
        },
        toLogical: function (t, i) {
            return Q(t) ? this._8t._$f(t) : this._8t._ei(t, i)
        },
        getElementByMouseEvent: function (t) {
            var i = this._8t._3t(t);
            return i ? i.$data : void 0
        },
        getElement: function (t) {
            if (Q(t)) {
                var i = this._8t._3t(t);
                return i ? i.$data : null
            }
            return this._kzModel.getById(t)
        },
        invalidate: function () {
            this._8t._mzz()
        },
        invalidateUI: function (t) {
            t.invalidate(),
                this.invalidate()
        },
        invalidateElement: function (t) {
            this._8t._3w(t)
        },
        getUIBounds: function (t) {
            return this._8t._mwv(t)
        },
        forEachVisibleUI: function (t, i) {
            return this._8t._4b(t, i)
        },
        forEachReverseVisibleUI: function (t, i) {
            return this._8t._$z(t, i)
        },
        forEachUI: function (t, i) {
            return this._8t._eo(t, i)
        },
        forEachReverseUI: function (t, i) {
            return this._8t._4j(t, i)
        },
        forEach: function (t, i) {
            return this._kzModel.forEach(t, i)
        },
        getElementByName: function (t) {
            var i;
            return this._kzModel.forEach(function (e) {
                return e.name == t ? (i = e, !1) : void 0
            }),
                i
        },
        focus: function (i) {
            if (i) {
                var e = t.scrollX || t.pageXOffset,
                    n = t.scrollY || t.pageYOffset;
                return this.canvasPanel.focus(),
                    void t.scrollTo(e, n)
            }
            this.canvasPanel.focus()
        },
        callLater: function (t, i, e) {
            this._8t.callLater(t, i, e)
        },
        exportImage: function (t, i) {
            return Jr(this, t, i)
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
            Kr(this)
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
            _n(this._kzModel, t)
        },
        sendToBottom: function (t) {
            un(this._kzModel, t)
        },
        moveElements: function (t, i, e) {
            var n = [],
                r = new Xs;
            return c(t, function (t) {
                t instanceof Kh ? n.push(t) : t instanceof Vh && r.add(t)
            }),
                this._e7(n, i, e, r)
        },
        _e7: function (t, i, e, n) {
            if (0 == i && 0 == e || 0 == t.length && 0 == n.length)
                return !1;
            if (0 != t.length) {
                var r = this._4k(t);
                n = this._4o(r, n),
                    c(r, function (t) {
                        var n = t.$location;
                        n ? t.setLocation(n.x + i, n.y + e) : t.setLocation(i, e)
                    })
            }
            return n && n.length && this._e8(n, i, e),
                !0
        },
        _e8: function (t, i, e) {
            t.forEach(function (t) {
                t.move(i, e)
            })
        },
        _4o: function (t, i) {
            return this.graphModel.forEach(function (e) {
                e instanceof Vh && this.isMovable(e) && t.contains(e.fromAgent) && t.contains(e.toAgent) && i.add(e)
            }, this),
                i
        },
        _4k: function (t) {
            var i = new Xs;
            return c(t, function (t) {
                !this.isMovable(t),
                    i.add(t),
                    an(t, i, this._movableFilter)
            }, this),
                i
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
            var t = new co(this, "viewport");
            this._4s(t)
        },
        destroy: function () {
            this._4s(new co(this, "destroy", !0, this._ijed)),
                this._ijed = !0,
                No(t, "resize", this._onresize),
                F(this, "_onresize"),
                this._3f.destroy(),
                this.graphModel = new Yn;
            var i = this.html;
            this._8t._ij(),
            i && (i.innerHTML = "")
        },
        onPropertyChange: function (t, i, e) {
            this._$u.addListener(function (n) {
                n.kind == t && i.call(e, n)
            })
        },
        removeSelection: function () {
            var t = this.selectionModel._jz;
            return t && 0 != t.length ? (t = t.slice(), this._kzModel.remove(t), t) : !1
        },
        removeSelectionByInteraction: function (t) {
            var i = this.selectionModel.datas;
            return i && 0 != i.length ? void Zo.confirm("Delete Elements - " + i.length, function () {
                var i = this.removeSelection();
                if (i) {
                    var e = new ms(this, ms.ELEMENT_REMOVED, t, i);
                    this.onInteractionEvent(e)
                }
            }, this) : !1
        },
        createShapeByInteraction: function (t, i, e, n) {
            var r = new Ph(i);
            i.length > 2 && r.closePath();
            var s = this.createShapeNode("Shape", r, e, n);
            this.onElementCreated(s, t);
            var o = new ms(this, ms.ELEMENT_CREATED, t, s);
            return this.onInteractionEvent(o),
                s
        },
        createLineByInteraction: function (t, i, e, n) {
            var r = new Ph(i),
                s = this.createShapeNode("Line", r, e, n);
            s.setStyle(Zo.Styles.SHAPE_FILL_COLOR, null),
                s.setStyle(Zo.Styles.SHAPE_FILL_GRADIENT, null),
                s.setStyle(Zo.Styles.LAYOUT_BY_PATH, !0),
                this.onElementCreated(s, t);
            var o = new ms(this, ms.ELEMENT_CREATED, t, s);
            return this.onInteractionEvent(o),
                s
        },
        createEdgeByInteraction: function (t, i, e, n) {
            var r = this.createEdge("Edge", t, i);
            if (n)
                r._9y = n;
            else {
                var s = this.edgeUIClass,
                    o = this.edgeType;
                this.interactionProperties && (s = this.interactionProperties.uiClass || s, o = this.interactionProperties.edgeType || o),
                s && (r.uiClass = s),
                o && (r.edgeType = o)
            }
            this.onElementCreated(r, e);
            var h = new ms(this, ms.ELEMENT_CREATED, e, r);
            return this.onInteractionEvent(h),
                r
        },
        onElementCreated: function (t) {
            !t.parent && this.currentSubNetwork && (t.parent = this.currentSubNetwork)
        },
        allowEmptyLabel: !1,
        startLabelEdit: function (t, i, e, n) {
            var r = this;
            e.startEdit(n.x, n.y, i.data, this.getStyle(t, ea.LABEL_FONT_SIZE), function (e) {
                return r.onLabelEdit(t, i, e, i.parent)
            })
        },
        onLabelEdit: function (t, i, e, n) {
            return e || this.allowEmptyLabel ? void ("label" == i.name ? t.name = e : n._gf(i, e) === !1 && (i.data = e, this.invalidateElement(t))) : (Zo.alert("Label Can't Empty"), !1)
        },
        setInteractionMode: function (t, i) {
            this.interactionMode = t,
                this.interactionProperties = i
        },
        upSubNetwork: function () {
            return this._3x ? this.currentSubNetwork = jr(this._3x) : !1
        },
        _$s: !1,
        invalidateVisibility: function () {
            this._$s = !0,
                this.invalidate()
        },
        getBundleLabel: function (t) {
            var i = t.getEdgeBundle(!0);
            return i && i.agentEdge == t ? "+" + i.bindableEdges.length : null
        },
        zoomAnimation: null
    },
        Z(xa.prototype, {
            center: {
                get: function () {
                    return this.toLogical(this.html.clientWidth / 2, this.html.clientHeight / 2)
                }
            },
            visibleFilter: {
                get: function () {
                    return this._i5Filter
                },
                set: function (t) {
                    this._i5Filter = t,
                        this.invalidateVisibility()
                }
            },
            topCanvas: {
                get: function () {
                    return this._8t._topCanvas
                }
            },
            propertyChangeDispatcher: {
                get: function () {
                    return this._$u
                }
            },
            listChangeDispatcher: {
                get: function () {
                    return this._1l
                }
            },
            dataPropertyChangeDispatcher: {
                get: function () {
                    return this._$b
                }
            },
            selectionChangeDispatcher: {
                get: function () {
                    return this._$q
                }
            },
            parentChangeDispatcher: {
                get: function () {
                    return this._13
                }
            },
            childIndexChangeDispatcher: {
                get: function () {
                    return this._$m
                }
            },
            interactionDispatcher: {
                get: function () {
                    return this._1i
                }
            },
            cursor: {
                set: function (t) {
                    this.canvasPanel.style.cursor = t || this._3f.defaultCursor
                },
                get: function () {
                    return this.canvasPanel.style.cursor
                }
            },
            interactionMode: {
                get: function () {
                    return this._3f._mzurrentMode
                },
                set: function (t) {
                    var i = this.interactionMode;
                    i != t && (this._3f.currentMode = t, this._4s(new co(this, "interactionMode", t, i)))
                }
            },
            scaleStep: {
                get: function () {
                    return this._8t._eg
                },
                set: function (t) {
                    this._8t._eg = t
                }
            },
            maxScale: {
                get: function () {
                    return this._8t._g7
                },
                set: function (t) {
                    this._8t._g7 = t
                }
            },
            minScale: {
                get: function () {
                    return this._8t._fp
                },
                set: function (t) {
                    this._8t._fp = t
                }
            },
            scale: {
                get: function () {
                    return this._8t._ks
                },
                set: function (t) {
                    return this._8t._ks = t
                }
            },
            tx: {
                get: function () {
                    return this._8t._mm
                }
            },
            ty: {
                get: function () {
                    return this._8t._mn
                }
            },
            styles: {
                get: function () {
                    return this._j6
                },
                set: function (t) {
                    this._j6 = t
                }
            },
            selectionModel: {
                get: function () {
                    return this._kzModel._selectionModel
                }
            },
            graphModel: {
                get: function () {
                    return this._kzModel
                },
                set: function (t) {
                    if (this._kzModel == t)
                        return !1;
                    var i = this._kzModel,
                        e = new co(this, "graphModel", i, t);
                    return this._1y(e) === !1 ? !1 : (null != i && (i.propertyChangeDispatcher.removeListener(this._$u, this), i.listChangeDispatcher.removeListener(this._1l, this), i.dataChangeDispatcher.removeListener(this._$b, this), i.parentChangeDispatcher.removeListener(this._13, this), i.childIndexChangeDispatcher.removeListener(this._$m, this), i.selectionChangeDispatcher.removeListener(this._$q, this)), this._kzModel = t, this._kzModel && (this._kzModel.propertyChangeDispatcher.addListener(this._$u, this), this._kzModel.listChangeDispatcher.addListener(this._1l, this), this._kzModel.dataChangeDispatcher.addListener(this._$b, this), this._kzModel.parentChangeDispatcher.addListener(this._13, this), this._kzModel.childIndexChangeDispatcher.addListener(this._$m, this), this._kzModel.selectionChangeDispatcher.addListener(this._$q, this)), this._8t && this._8t._kp(), void this._4s(e))
                }
            },
            count: {
                get: function () {
                    return this._kzModel.length
                }
            },
            width: {
                get: function () {
                    return this.html.clientWidth
                }
            },
            height: {
                get: function () {
                    return this.html.clientHeight
                }
            },
            viewportBounds: {
                get: function () {
                    return this._8t._76
                }
            },
            bounds: {
                get: function () {
                    return this._8t._4c()
                }
            },
            canvasPanel: {
                get: function () {
                    return this._8t._jsPanel
                }
            },
            html: {
                get: function () {
                    return this._8t._jsPanel.parentNode
                }
            },
            navigationType: {
                get: function () {
                    return this._8t._7o
                },
                set: function (t) {
                    this._8t._40(t)
                }
            },
            _3x: {
                get: function () {
                    return this._kzModel._3x
                }
            },
            currentSubNetwork: {
                get: function () {
                    return this._kzModel.currentSubNetwork
                },
                set: function (t) {
                    this._kzModel.currentSubNetwork = t
                }
            }
        }),
        Ws.GROUP_MIN_WIDTH = 60,
        Ws.GROUP_MIN_HEIGHT = 60,
        Yr.prototype = {
            initialize: function () {
                B(this, Yr, "initialize"),
                    this.checkBody()
            },
            _mwk: function () {
                this._lu = new Ph,
                    this.shape = new ca(this._lu),
                    this.shape.layoutByPath = !1,
                    this.addChild(this.shape, 0),
                    this.body = this.shape
            },
            checkBody: function () {
                return this._68() ? (this._2g = !0, this.shape ? (this.shape.visible = !0, this.body = this.shape) : (this._mwk(), aa.initBindingProperties(this)), void (this.image && (this.image.visible = !1))) : (this.image ? (this.image.visible = !0, this.body = this.image) : this._mwx(), void (this.shape && (this.shape.visible = !1)))
            },
            _68: function () {
                return this.$data._i9() && this.$data.expanded
            },
            _lu: null,
            _2g: !0,
            _5r: function () {
                this._1n = !0,
                    this._2g = !0
            },
            doValidate: function () {
                if (this._2g && this._68()) {
                    if (this._2g = !1, this.shape.invalidateData(), this.$data.groupImage) {
                        this.shape.data = this.$data.groupImage;
                        var t = this._2l();
                        return this.shape.offsetX = t.x + t.width / 2,
                            this.shape.offsetY = t.y + t.height / 2,
                            this.shape.size = {
                                width: t.width,
                                height: t.height
                            },
                            Jn.prototype.doValidate.call(this)
                    }
                    this.shape.offsetX = 0,
                        this.shape.offsetY = 0;
                    var i = this._8y(this.$data.groupType);
                    this._lu.clear(),
                        i instanceof io ? Tn(this._lu, i.x, i.y, i.width, i.height, i.rx, i.ry) : i instanceof re ? wn(this._lu, i) : i instanceof se && On(this._lu, i),
                        this._lu._6f = !0,
                        this.shape.invalidateData()
                }
                return Jn.prototype.doValidate.call(this)
            },
            _6u: function (t, i, e) {
                switch (t) {
                    case Jo.GROUP_TYPE_CIRCLE:
                        return new re(0, 0, Math.max(i, e) / 2);
                    case Jo.GROUP_TYPE_ELLIPSE:
                        return new se(0, 0, i, e);
                    default:
                        return new io(-i / 2, -e / 2, i, e)
                }
            },
            _2l: function () {
                return this._8y(null)
            },
            _8y: function (t) {
                var i = this.data,
                    e = i.padding,
                    n = i.minSize,
                    r = Ws.GROUP_MIN_WIDTH,
                    s = Ws.GROUP_MIN_HEIGHT;
                if (n && (r = n.width, s = n.height), !i.hasChildren())
                    return this._6u(t, r, s);
                var o,
                    h = this.$data._fe._jz;
                (t == Jo.GROUP_TYPE_CIRCLE || t == Jo.GROUP_TYPE_ELLIPSE) && (o = []);
                for (var a, l, _, u, d = new io, f = 0, c = h.length; c > f; f++) {
                    var v = h[f];
                    if (this.graph.isVisible(v)) {
                        var g = this.graph.getUI(v);
                        g && (a = g.$x + g._fi.x, l = g.$y + g._fi.y, _ = g._fi.width, u = g._fi.height, d.addRect(a, l, _, u), o && (o.push({
                            x: a,
                            y: l
                        }), o.push({
                            x: a + _,
                            y: l
                        }), o.push({
                            x: a + _,
                            y: l + u
                        }), o.push({
                            x: a,
                            y: l + u
                        })))
                    }
                }
                e && d.grow(e);
                var E = this.$data.$location;
                E ? E.invalidateFlag && (E.invalidateFlag = !1, E.x = d.cx, E.y = d.cy) : E = this.$data.$location = {
                    x: d.cx,
                    y: d.cy
                };
                var m,
                    p = E.x,
                    y = E.y;
                if (t == Jo.GROUP_TYPE_CIRCLE) {
                    m = oe(o),
                        m.cx -= p,
                        m.cy -= y;
                    var T = Math.max(r, s) / 2;
                    return m.r < T && (m.cx += T - m.r, m.cy += T - m.r, m.r = T),
                        m
                }
                return t == Jo.GROUP_TYPE_ELLIPSE ? (m = he(o, d), m.cx -= p, m.cy -= y, m.width < r && (m.cx += (r - m.width) / 2, m.width = r), m.height < s && (m.cy += (s - m.height) / 2, m.height = s), m) : (m = d, d.width < r && (d.width = r), d.height < s && (d.height = s), d.offset(-p, -y), m)
            },
            _$x: function (t, i, e) {
                if (!this._68())
                    return B(this, Yr, "_$x", arguments);
                var n = this._mza.onBindingPropertyChange(this, t, i, e);
                return n = na.onBindingPropertyChange(this, t, i, e) || n,
                    n = ha.onBindingPropertyChange(this, t, i, e) || n,
                aa.onBindingPropertyChange(this, t, i, e) || n
            }
        },
        k(Yr, Jn);
    var La = {
        draw: function () {
        }
    };
    Ws.NAVIGATION_IMAGE_LEFT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA09JREFUeNqcVl1Ik1EYfqebIuaQTWQK/udkdKMXIggG3XQRRBDdRBDdhDdBhRAVFUS/1FVXEt1EEBVEIIFIN0JGEEF6E+HU6VR0iDPdnKLT2fN87h2fY+aODzzfDud8ezjP9/6c49jZ2ZGhoSExxFGwHWwDh7u6ut7pguMQghR7nzX3GaL3OSgQc1zno6qqSgKBgBQUWBKnsanzhxG8DXaUlJRIQ0ODVFRUSEtLi661mQoeA886HA7x+/1SWFgo/Fxzc3O6PmwqeIWP6upqcbvd1gTFVlZWOAyBH0wEabVdrRLr6+syNTWl670ISipfwXa1yu/FX1odHR2VVCqlER7Ul/MR7OajpqZGysrKrInZ2VmJx+Mc/gEf2V8+SPAu2FpaWiq1tbXWRCKRkHA4bLe6la9gB3gml1X+An0Q+579p/0EnRpV7ow7JKanp60dAiMQe5Drj/sJ3gID/Gb8dgS/2czMjK6/3M9WLsETuawGg0G1+gm7+5mvYJFGlfnGvCMmJydlbW2Nw1/g4/9FMVvwDrsJK4EVQcRiMXt5vTgox+yCJ8FTrFHWKq1ub2/vsQr+zlfQpVbr6+szVllaLDHgx0FWswV7wLry8vKM1eXlZSOr2YKtfDQ2NmYWQqGQDl+BQVPBEW1HCt0puzHoNhXkIZOMRCKytLRkTfh8PvF4PNYQvGkqGNbsHxsbk62t3Xpvbm4Wp9OpGXDORJB4DX7d3NyUiYmJ3SwvKpKmpiZdvwx6TASJZ+DqwsKCRKNRa6KyslK8Xi+H3nSNGwlG0lG1rCeTyYx1l8uldX7BRJB4Cw5SbHx8fDfrIUZRtY4z2GciSDwF/y4uLgrtW35hm/aBI+ANU8GoRp0BYqAIBoiBAo5jl5dMBImP4BemEL+n1caRQjbr3RCtMxFU6xEmO5OeYLIz6dMNpcdUMKbW2WQ3NjZEa764uJjDTuyy20TQOsjBAVpnbyS0Z9qi7jcRJJ6wPNnS5ufnrQl7qwOumgomNOFpPd107c24A7u8aHr7GgD7eSww6jwWaF0vT9pTTS+cD9l7eYVj7+Shr41Ee6rTUJAZ3gs+p3Veh7lj4BvO6jeHvWPz6tZHy2mxfohdMw3KHqTvNZ0sQYzv2df+CTAAM91P5i8bXigAAAAASUVORK5CYII=",
        Ws.NAVIGATION_IMAGE_TOP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUCAYAAAD/Rn+7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAohJREFUeNrMVs+LUlEUPk8jNBGJXKWgBCrRZhAiCFy0HYigVdvazdQf0A+CftAPaFlNu4HZtQqGgdkOKAQRSAgRPkEUtG2ImBKj9n2Pc0XNmcb3Xj8OfN57ve/d893vnHfutYrFoixrhUJh4f+lUumEzn8Xn+yYH4uAWBjNHWBVx7tonoFo3+vaAR/IXUKzRXLBYFAIJbqlc/9GQTjnu/eAyxzHYjHJZrPOnG3b0ul0zqD7As/toH0CNffd+LHc5CDsIrAGnA0EApJOpyWRSMw80G63pdFoyGg04vAL8AYk3/8NgveBK+xEo1HJ5XISDoedieFw6LQaZun3+1KtVqXb7Zp3t0Hy8Z8imAfWgRXLsiSVSkkymRT2aQipE1oaQ82Q08bjsbRaLWk2m04f9gnYANGynwTvAlfZiUQijmpsaQwhQ8mQThtDztAzBWi9Xs9Rk63aO5B86pXgOeAWcJ5KUTEqZ1Rj6OiUoVTb1PYGfxh6boapYNSkklRU1fwIvALRz24Irrt1hC936Y3h3Y2jEpws7jVUILpMaixUc57gjGqZTMZzsoPkbz+uWq12oJqG4Gngtta3X1Tzo1yA6IHlaYGarJfP4eMrCZ7C4C1wMhQKzZQIPwuukjy0wJtSNRgMOPwGXKNEKyQXj8cln89PyFG1SqUi9XrdkOORdV1358p0Y1xjh2tybfow4aVvciAXciI3nqe2SX7NrXnV6lQN2PPj5qNn8kOoydxa45ldLpcnapLD1Adomxx8DVww6lFqNeegB/aPch90EfLjek2bXDim/H+An5vmNvMIeKk3EN9VO0TNH/NqTvl/MF9mTD6aEjJa9kbtUc0Z//Dh+LdM3v2v9lOAAQDlEZVA4N7FygAAAABJRU5ErkJggg==";
    var ba = {
            position: "absolute",
            "text-align": "center"
        },
        Sa = {
            padding: "10px",
            transition: "opacity 0.2s ease-in"
        },
        Ia = {
            position: "relative",
            display: "block"
        };
    gi(".Q-Graph-Nav img", "opacity:0.7;vertical-align:middle;"),
        gi(".Q-Graph-Nav img:hover,img.hover", "opacity:1;background-color: rgba(0, 0, 0, 0.5)"),
    Fs || (gi(".Q-Graph-Nav", "opacity:0;" + Co("transition") + ":opacity 3s cubic-bezier(0.8, 0, 0.8, 1)"), gi(".Q-Graph-Nav:hover", "opacity:1;" + Co("transition") + ":opacity 0.3s linear")),
        Wr.prototype = {
            _mzs: function (t, i) {
                return t._i5 == i ? !1 : (t._i5 = i, void (t.style.display = i ? "block" : "none"))
            },
            _3j: function (t, i) {
                var e = i / 2 - this._left._img.clientHeight / 2 + "px";
                this._left._img.style.top = e,
                    this._right._img.style.top = e,
                    this._navPane.style.width = t + "px",
                    this._navPane.style.height = i + "px"
            },
            _mwa: function (t, i, e, n) {
                this._mzs(this._top, t),
                    this._mzs(this._left, i),
                    this._mzs(this._mxottom, e),
                    this._mzs(this._right, n)
            },
            _ij: function () {
                var t = this._navPane.parentNode;
                t && t.removeChild(this._navPane)
            },
            _jq: function () {
                var t = this._dh._kz;
                if (t) {
                    var i = t.bounds;
                    if (i.isEmpty())
                        return void this._mwa(!1, !1, !1, !1);
                    var e = t.viewportBounds,
                        n = e.y > i.y + 1,
                        r = e.x > i.x + 1,
                        s = e.bottom < i.bottom - 1,
                        o = e.right < i.right - 1;
                    this._mwa(n, r, s, o)
                }
            }
        };
    var Ra = 8;
    gi(".Q-Graph-ScrollBar", "position: absolute;box-sizing: border-box;box-shadow: #FFF 0px 0px 1px; background-color: rgba(120,120,120,0.3);border-radius: 4px;margin: 1px;"),
        gi(".Q-Graph-ScrollBar:hover", "background-color: #7E7E7E;" + Co("transition") + ": background-color 0.2s linear;"),
        gi(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;"),
        gi(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;"),
        gi(".Q-Graph-ScrollBar--V.Both", "margin-bottom: 8px;"),
        gi(".Q-Graph-ScrollBar--H.Both", "margin-right: 8px;"),
    Fs || (gi(".Q-Graph-ScrollPane", "opacity:0;" + Co("transition") + ":opacity 3s cubic-bezier(0.8, 0, 0.8, 1);"), gi(".Q-Graph:hover .Q-Graph-ScrollPane", "opacity:1;" + Co("transition") + ":opacity 0.3s linear;")),
        qr.prototype = {
            _ij: function () {
                this._verticalDragSupport._ij(),
                    this._horizontalDragSupport._ij(),
                    delete this._verticalDragSupport,
                    delete this._horizontalDragSupport,
                this._lt.parentNode && this._lt.parentNode.removeChild(this._lt)
            },
            _lt: null,
            _mwm: null,
            _8u: null,
            init: function (t) {
                var e = i.createElement("div");
                e.className = "Q-Graph-ScrollPane",
                    fi(e, {
                        width: "100%",
                        height: "100%",
                        position: "relative"
                    });
                var n = i.createElement("div");
                n.className = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
                var r = i.createElement("div");
                r.className = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H",
                    e.appendChild(n),
                    e.appendChild(r),
                    t.appendChild(e),
                    this._lt = e,
                    this._8u = r,
                    this._mwm = n,
                    r.isH = !0;
                var s = this,
                    o = {
                        ondrag: function (t, i) {
                            var e = s._dh._kz;
                            if (e) {
                                var n = i.isH,
                                    r = n ? t.dx : t.dy;
                                if (r && i.scale) {
                                    var o = e.scale / i.scale;
                                    n ? e.translate(-o * r, 0) : e.translate(0, -o * r),
                                        Zo.stopEvent(t)
                                }
                            }
                        },
                        enddrag: function (t, i) {
                            var e = s._dh._kz;
                            if (e && e.enableInertia) {
                                var n = i.isH,
                                    r = n ? t.vx : t.vy;
                                if (Math.abs(r) > .1) {
                                    var o = e.scale / i.scale;
                                    r *= o,
                                        n ? e._mw7(-r, 0) : e._mw7(0, -r)
                                }
                            }
                        }
                    };
                this._verticalDragSupport = new bi(n, o),
                    this._horizontalDragSupport = new bi(r, o)
            },
            _jq: function () {
                var t = this._dh._kz;
                if (t) {
                    var i = t.bounds;
                    if (i.isEmpty())
                        return this._4v(!1), void this._4u(!1);
                    var e = t.viewportBounds,
                        n = t.width,
                        r = t.height,
                        s = t.scale,
                        o = 1 / s,
                        h = e.x > i.x + o || e.right < i.right - o,
                        a = e.y > i.y + o || e.bottom < i.bottom - o,
                        l = h && a;
                    l ? (A(this._mwm, "Both"), A(this._8u, "Both")) : (x(this._mwm, "Both"), x(this._8u, "Both")),
                        this._4v(h, e, i, l ? n - Ra : n),
                        this._4u(a, e, i, l ? r - Ra : r)
                }
            },
            _4v: function (t, i, e, n) {
                if (!t)
                    return this._8u.style.display = "none", void (this._8u.scale = 0);
                var r = Math.min(i.x, e.x),
                    s = Math.max(i.right, e.right),
                    o = s - r,
                    h = n / o;
                this._8u.scale = h,
                    this._8u.style.left = parseInt((i.x - r) * h) + "px",
                    this._8u.style.right = parseInt((s - i.right) * h) + "px",
                    this._8u.style.display = ""
            },
            _4u: function (t, i, e, n) {
                if (!t)
                    return this._mwm.style.display = "none", void (this._mwm.scale = 0);
                var r = Math.min(i.y, e.y),
                    s = Math.max(i.bottom, e.bottom),
                    o = s - r,
                    h = n / o;
                this._mwm.scale = h,
                    this._mwm.style.top = parseInt((i.y - r) * h) + "px",
                    this._mwm.style.bottom = parseInt((s - i.bottom) * h) + "px",
                    this._mwm.style.display = ""
            }
        },
        Xr.prototype = {
            shape: null,
            initialize: function () {
                B(this, Xr, "initialize"),
                    this._mwx(),
                    ua.initBindingProperties(this)
            },
            _mwx: function () {
                this.image = new ga(this.$data.path),
                    this.addChild(this.image, 0),
                    this.body = this.image
            },
            invalidateShape: function () {
                this.image.invalidateData(),
                    this.invalidateRender()
            },
            _$x: function (t, i, e) {
                var n = this._mza.onBindingPropertyChange(this, t, i, e);
                return n = na.onBindingPropertyChange(this, t, i, e) || n,
                ua.onBindingPropertyChange(this, t, i, e) || n
            },
            doValidate: function () {
                this.body && (this.body.$layoutByAnchorPoint = null != this._38, this.body.anchorPosition = this._38);
                var t = this.$data.$location,
                    i = 0,
                    e = 0;
                t && (i = t.x, e = t.y);
                var n = this.$x != i || this.$y != e;
                return n && (this.$invalidateBounds = !0),
                    this.$x = i,
                    this.$y = e,
                fa.prototype.doValidate.call(this) || n
            }
        },
        k(Xr, fa),
        Z(Xr.prototype, {
            path: {
                get: function () {
                    return this.data.path
                }
            },
            length: {
                get: function () {
                    return this.data.length
                }
            }
        }),
        Xr.prototype.addPoint = function (t, i, e) {
            var n = this._i3(t, i),
                r = this.data,
                s = Le(r.path, n.x, n.y, e);
            s && (r.pathSegments = s)
        },
        Vr.prototype = {
            _ly: function () {
                this._js.style.visibility = "visible"
            },
            _kb: function () {
                this._js.style.visibility = "hidden"
            },
            clear: function () {
                this._9j.clear(),
                    this._mzz()
            },
            contains: function (t) {
                return t instanceof Object && t.id && (t = t.id),
                    this._9j.containsById(t)
            },
            addDrawable: function (t, i) {
                if (i) {
                    var e = {
                        id: ++Ls,
                        drawable: t,
                        scope: i
                    };
                    return this._9j.add(e),
                        e
                }
                return t.id || (t.id = ++Ls),
                    this._9j.add(t),
                    t
            },
            removeDrawable: function (t) {
                return t.id ? void this._9j.remove(t) : this._9j.removeById(t)
            },
            _9j: null,
            invalidate: function () {
                this._mzz()
            },
            _mzz: function () {
                this._dh._6f || this._jm()
            },
            _jm: function () {
                vi(this._js, "transform", "");
                var t = this._dh._ks,
                    i = this.g;
                i.setTransform(1, 0, 0, 1, 0, 0),
                    i.clearRect(0, 0, this._js.width, this._js.height),
                    i.save(),
                    this._dh._k2._mwy(i);
                for (var e = this._9j._jz, n = 0, r = e.length; r > n; n++)
                    i.save(), i.beginPath(), this._fo(i, e[n], t), i.restore();
                i.restore()
            },
            _fo: function (t, i, e) {
                return i instanceof Function ? void i(t, e) : void (i.drawable instanceof Function && i.scope && i.drawable.call(i.scope, t, e))
            }
        },
        Ws.ZOOM_ANIMATE = Is ? !1 : !0;
    var Ca = function (t) {
        this._kz = t
    };
    Ws.ANIMATION_MAXTIME = 600,
        Ws.ANIMATION_TYPE = qo.easeOut,
        Ca.prototype = {
            _kz: null,
            _mw: .001,
            _ej: null,
            _mzo: function (t) {
                return t > 1 ? 1 : -1 > t ? -1 : t
            },
            _gy: function (t, i) {
                t *= .6,
                    i *= .6,
                    t = this._mzo(t),
                    i = this._mzo(i),
                    this._lo();
                var e = Math.sqrt(t * t + i * i);
                if (.01 > e)
                    return !1;
                var n = Math.min(Ws.ANIMATION_MAXTIME, e / this._mw);
                this._speedX = t,
                    this._speedY = i,
                    this._mwX = t / n,
                    this._mwY = i / n,
                    this._ej = new Vo(this._57, this, n, qo.easeOutStrong),
                    this._ej._lc()
            },
            _57: function (t, i) {
                if (0 != t) {
                    var e = this._speedX * i - .5 * this._mwX * i * i,
                        n = this._speedY * i - .5 * this._mwY * i * i;
                    this._speedX -= this._mwX * i,
                        this._speedY -= this._mwY * i,
                        this._kz.translate(e, n)
                }
            },
            _lo: function () {
                this._ej && this._ej._lo()
            },
            _ir: function (t) {
                var i = this._fromTX + (this._toTX - this._fromTX) * t,
                    e = this._fromTY + (this._toTY - this._fromTY) * t,
                    n = this._fromScale + (this._toScale - this._fromScale) * t;
                this._kz.translateTo(i, e, n)
            },
            _li: function (t, i, e, n) {
                var r = this._kz,
                    s = r.scale;
                if (0 >= e && (e = s), this._lo(), t != r.tx || i != r.ty || e != s) {
                    var o,
                        h,
                        a;
                    n instanceof Object && (o = n.duration, h = n.maxTime, a = n.animationType);
                    var l = r.tx,
                        _ = r.ty;
                    if (!o) {
                        var u = Js(t, i, l, _);
                        if (o = u / 2, e != s) {
                            var d = e > s ? e / s : s / e;
                            o = Math.max(o, 50 * d)
                        }
                    }
                    h = h || Ws.ANIMATION_MAXTIME,
                        a = a || Ws.ANIMATION_TYPE,
                        o = Math.min(h, o),
                        this._fromTX = l,
                        this._fromTY = _,
                        this._fromScale = s,
                        this._toTX = t,
                        this._toTY = i,
                        this._toScale = e,
                        this._ej = new Vo(this._ir, this, o, a),
                        this._ej._lc()
                }
            }
        },
        Ws.INTERACTION_HANDLER_SIZE_TOUCH = 8,
        Ws.INTERACTION_HANDLER_SIZE_DESKTOP = 4,
        Ws.INTERACTION_ROTATE_HANDLER_SIZE_TOUCH = 30,
        Ws.INTERACTION_ROTATE_HANDLER_SIZE_DESKTOP = 20;
    var Da = Math.PI / 4;
    Qr.prototype = {
        onElementRemoved: function (t, i) {
            this.element && (t == this.element || I(t) && y(t, this.element)) && this.destroy(i)
        },
        onClear: function (t) {
            this.element && this.destroy(t)
        },
        destroy: function () {
            delete this.element,
                this.removeDrawable()
        },
        invalidate: function () {
            this.topCanvas.invalidate()
        },
        removeDrawable: function () {
            this._fuId && (this.topCanvas.removeDrawable(this._fuId), delete this._fuId, this.invalidate())
        },
        addDrawable: function () {
            this._fuId || (this._fuId = this.topCanvas.addDrawable(this.doDraw, this).id, this.invalidate())
        },
        doDraw: function () {
        },
        escapable: !0,
        onkeydown: function (t, i) {
            this.escapable && 27 == t.keyCode && (D(t), this.destroy(i))
        }
    },
        Zo.DrawableInteraction = Qr,
        ts.prototype = {
            defaultCursor: "default",
            getInteractionInstances: function (t) {
                if (!this.interactions)
                    return null;
                for (var i = [], e = 0, n = this.interactions.length; n > e; e++) {
                    var r = this.interactions[e];
                    r instanceof Function ? i.push(new r(t)) : r instanceof Object && i.push(r)
                }
                return i
            }
        },
        is.prototype = {
            _ed: null,
            _k9: null,
            destroy: function () {
                B(this, is, "destroy", arguments),
                    delete this._k9,
                    delete this._90,
                    delete this._ed
            },
            doDraw: function (t) {
                var i = this.points;
                i && (i.forEach(function (i) {
                    this.drawPoint(t, i)
                }, this), this.isClosePath && t.closePath(), this.styleDraw(t))
            },
            styleDraw: function (t) {
                var i = es(this.graph.interactionProperties, this.getDefaultDrawStyles(this.graph));
                i.lineWidth && (t.lineWidth = i.lineWidth, i.lineCap && (t.lineCap = i.lineCap), i.lineJoin && (t.lineJoin = i.lineJoin), i.lineDash && (t.lineDash = i.lineDash, t.lineDashOffset = i.lineDashOffset || 0), t.strokeStyle = i.strokeStyle, t.stroke()),
                i.fillStyle && (t.fillStyle = i.fillStyle, t.fill())
            },
            drawPoint: function (t, i, e) {
                if (e)
                    return void t.moveTo(i.x, i.y);
                if (Zo.isArray(i)) {
                    var n = i[0],
                        r = i[1];
                    t.quadraticCurveTo(n.x, n.y, r.x, r.y)
                } else
                    t.lineTo(i.x, i.y)
            },
            setCurrentPoint: function (t) {
                this.currentPoint = t
            },
            addPoint: function (t) {
                this._k9 || (this._k9 = [], this.addDrawable()),
                    this._k9.push(t),
                    this.invalidate()
            }
        },
        Z(is.prototype, {
            currentPoint: {
                get: function () {
                    return this._90
                },
                set: function (t) {
                    this._90 = t,
                        this.invalidate()
                }
            },
            prevPoint: {
                get: function () {
                    return this._k9 && this._k9.length ? this._k9[this._k9.length - 1] : null
                }
            },
            points: {
                get: function () {
                    return this._90 && this._k9 && this._k9.length ? this._k9.concat(this._90) : void 0
                }
            }
        }),
        k(is, Qr),
        Zo.DrawPathInteraction = is,
        ns.prototype = {
            destroy: function () {
                B(this, ns, "destroy", arguments),
                    delete this._lcTime,
                    delete this.start
            },
            doDraw: function (t, i) {
                return this._k9 ? this._k9.length <= 1 ? os.prototype.doDraw.call(this, t, i) : void B(this, ns, "doDraw", arguments) : void 0
            },
            ondblclick: function (t, i) {
                this.destroy(i)
            },
            finish: function (t, i, e) {
                if (this._lcTime && Date.now() - this._lcTime < 200)
                    return void this.destroy(i);
                var n;
                this._k9 && this._k9.length >= 2 && (this._k9.shift(), n = new Xs, c(this._k9, function (t) {
                    if (Zo.isArray(t)) {
                        var i = t[0],
                            e = t[1];
                        n.add(new Ch(Jo.SEGMENT_QUAD_TO, [i.x, i.y, e.x, e.y]))
                    } else
                        n.add(new Ch(Jo.SEGMENT_LINE_TO, [t.x, t.y]))
                }, this)),
                    i.createEdgeByInteraction(this.start, e, t, n),
                    this.destroy(i)
            },
            onstart: function (t, i) {
                if (2 != t.button) {
                    var e = t.getData();
                    if (this.start) {
                        var n = e instanceof Kh && i.canLinkTo(e, this.start);
                        return n ? void this.finish(t, i, e) : void this.addPoint(this.toLogicalPoint(t))
                    }
                    var r = e instanceof Kh && i.canLinkFrom(e);
                    r && (this.start = e, this._lcTime = Date.now(), this.addPoint(this.toLogicalPoint(t)))
                }
            },
            onmousemove: function (t) {
                this.start && this.setCurrentPoint(this.toLogicalPoint(t))
            },
            toLogicalPoint: function (t) {
                return this.graph.toLogical(t)
            },
            startdrag: function (t) {
                this.start && (t.responded = !0)
            },
            ondrag: function (t) {
                this.start && this.setCurrentPoint(this.toLogicalPoint(t))
            },
            enddrag: function (t, i) {
                if (this.start) {
                    var e = t.getData(),
                        n = e instanceof Kh && i.canLinkTo(e, this.start);
                    n && this.finish(t, i, e)
                }
            },
            getDefaultDrawStyles: function () {
                return {
                    lineWidth: this.graph.getDefaultStyle(ea.EDGE_WIDTH),
                    strokeStyle: this.graph.getDefaultStyle(ea.EDGE_COLOR),
                    lineDash: this.graph.getDefaultStyle(ea.EDGE_LINE_DASH),
                    lineDashOffset: this.graph.getDefaultStyle(ea.EDGE_LINE_DASH_OFFSET),
                    lineCap: this.graph.getDefaultStyle(ea.LINE_CAP),
                    lineJoin: this.graph.getDefaultStyle(ea.LINE_JOIN)
                }
            }
        },
        k(ns, is),
        Zo.CreateEdgeInteraction = ns,
        rs.prototype = {
            getDefaultDrawStyles: function () {
                return {
                    lineWidth: this.graph.getDefaultStyle(ea.SHAPE_STROKE),
                    strokeStyle: this.graph.getDefaultStyle(ea.SHAPE_STROKE_STYLE),
                    fillStyle: this.graph.getDefaultStyle(ea.SHAPE_FILL_COLOR)
                }
            },
            finish: function (t, i) {
                if (this._k9 && this._k9.length) {
                    var e = this._k9,
                        n = 0,
                        r = 0,
                        s = 0;
                    e.forEach(function (t) {
                        return Zo.isArray(t) ? void t.forEach(function () {
                            n += t.x,
                                r += t.y,
                                s++
                        }) : (n += t.x, r += t.y, void s++)
                    }),
                        n /= s,
                        r /= s;
                    var o = [];
                    e.forEach(function (t, i) {
                        if (0 == i)
                            return void o.push(new Ch(Jo.SEGMENT_MOVE_TO, [t.x - n, t.y - r]));
                        if (Zo.isArray(t)) {
                            var e = t[0],
                                s = t[1];
                            o.push(new Ch(Jo.SEGMENT_QUAD_TO, [e.x - n, e.y - r, s.x - n, s.y - r]))
                        } else
                            o.push(new Ch(Jo.SEGMENT_LINE_TO, [t.x - n, t.y - r]))
                    }),
                        this.createElement(t, o, n, r),
                        this.destroy(i)
                }
            },
            startdrag: function (t) {
                t.responded = !0
            },
            createElement: function (t, i, e, n) {
                return this.graph.createShapeByInteraction(t, i, e, n)
            },
            onstart: function (t, i) {
                var e = i.toLogical(t);
                this._ed = e,
                    this.addPoint(e)
            },
            onmousemove: function (t, i) {
                this._ed && (this.currentPoint = i.toLogical(t))
            },
            ondblclick: function (t, i) {
                if (this._ed) {
                    if (this._k9.length < 3)
                        return void this.destroy(i);
                    delete this._k9[this._k9.length - 1],
                        this.finish(t, i)
                }
            },
            isClosePath: !0
        },
        k(rs, is),
        Zo.CreateShapeInteraction = rs,
        ss.prototype = {
            isClosePath: !1,
            createElement: function (t, i, e, n) {
                return this.graph.createLineByInteraction(t, i, e, n)
            },
            getDefaultDrawStyles: function () {
                return {
                    lineWidth: Oa[ea.SHAPE_STROKE],
                    strokeStyle: Oa[ea.SHAPE_STROKE_STYLE],
                    lineDash: this.graph.getDefaultStyle(ea.SHAPE_LINE_DASH),
                    lineDashOffset: this.graph.getDefaultStyle(ea.SHAPE_LINE_DASH_OFFSET),
                    lineCap: this.graph.getDefaultStyle(ea.LINE_CAP),
                    lineJoin: this.graph.getDefaultStyle(ea.LINE_JOIN)
                }
            }
        },
        k(ss, rs),
        Zo.CreateLineInteraction = ss,
        os.prototype = {
            destroy: function (t) {
                B(this, os, "destroy", arguments),
                    t.cursor = "",
                    this.start = null
            },
            doDraw: function (t) {
                if (this.start && this.currentPoint) {
                    var i,
                        e;
                    this.graph.interactionProperties && (i = this.graph.interactionProperties.uiClass, e = this.graph.interactionProperties.edgeType),
                        i = i || this.graph.edgeUIClass || Zo.EdgeUI,
                        e = e || this.graph.edgeType;
                    var n = i.drawReferenceLine || Zo.EdgeUI.drawReferenceLine,
                        r = this.graph.getUI(this.start);
                    r && r.bodyBounds && (r = r.bodyBounds.center, n(t, r, this.currentPoint, e), this.styleDraw(t))
                }
            },
            canLinkFrom: function (t, i) {
                return t instanceof Kh && i.canLinkFrom(t)
            },
            canLinkTo: function (t, i) {
                return t instanceof Kh && i.canLinkTo(t, this.start)
            },
            startdrag: function (t, i) {
                var e = t.getData();
                this.canLinkFrom(e, i) && (t.responded = !0, this.start = e, i.cursor = "crosshair", this.addDrawable())
            },
            ondrag: function (t, i) {
                this.start && (Zo.stopEvent(t), this.currentPoint = i.toLogical(t), this.invalidate())
            },
            enddrag: function (t, i) {
                if (this.start) {
                    this.invalidate();
                    var e = t.getData();
                    this.canLinkTo(e, i) && i.createEdgeByInteraction(this.start, e, t),
                        this.destroy(i)
                }
            },
            getDefaultDrawStyles: function () {
                return {
                    lineWidth: this.graph.getDefaultStyle(ea.EDGE_WIDTH),
                    strokeStyle: this.graph.getDefaultStyle(ea.EDGE_COLOR),
                    lineDash: this.graph.getDefaultStyle(ea.EDGE_LINE_DASH),
                    lineDashOffset: this.graph.getDefaultStyle(ea.EDGE_LINE_DASH_OFFSET),
                    lineCap: this.graph.getDefaultStyle(ea.LINE_CAP),
                    lineJoin: this.graph.getDefaultStyle(ea.LINE_JOIN)
                }
            }
        },
        k(os, is),
        Zo.CreateSimpleEdgeInteraction = os,
        Ws.LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS = !1,
        ds.prototype = {
            html: null,
            createHTML: function () {
                var t = i.createElement("textarea");
                t.className = "Q-LabelEditor",
                    t.style.position = "absolute",
                    t.style.textAlign = "center",
                    t.style.border = "solid #08E 1px",
                    t.style.padding = "5px",
                    t.style.boxShadow = "0px 0px 10px rgba(40, 85, 184, 0.75)",
                    t.style.display = "none",
                    t.style.overflow = "hidden";
                var e = this;
                return t.oninput = function (t) {
                    e.onValueChange(t)
                },
                    t.onkeydown = function (t) {
                        return 27 == t.keyCode ? void e.cancelEdit() : void 0
                    },
                    t.onkeypress = function (i) {
                        if (13 == i.keyCode || 10 == i.keyCode) {
                            if (i.preventDefault(), i.altKey || i.ctrlKey || i.shiftKey)
                                return _s(t, "\n"), void e.onValueChange(i);
                            e.stopEdit()
                        }
                    },
                    i.body.appendChild(t),
                    t
            },
            setText: function (t, i) {
                this.html.value = t || "",
                i && (this.html.style.fontSize = i),
                    us(this.html),
                    this.onSizeChange(this.html)
            },
            onSizeChange: function (t) {
                var i = (t.offsetWidth, t.offsetHeight, ls(t));
                return t.style.width = i.width + 30 + "px",
                    t.style.height = i.height + 10 + "px",
                    i
            },
            onValueChange: function (t) {
                {
                    var i = t.target;
                    this.onSizeChange(i)
                }
                i.style.left = i.x - i.offsetWidth / 2 + "px"
            },
            onClickOnWindow: function (t) {
                t.target != this.html && (Ws.LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS ? this.stopEdit() : this.cancelEdit())
            },
            startEdit: function (i, e, n, r, s) {
                this.html || (this.html = this.createHTML()),
                this.stopEditWhenClickOnWindow || (this.stopEditWhenClickOnWindow = function (t) {
                    this.onClickOnWindow(t)
                }
                    .bind(this)),
                    t.addEventListener("mousedown", this.stopEditWhenClickOnWindow, !0),
                    this.callback = s,
                    this.html.x = i,
                    this.html.y = e,
                    this.html.style.display = "block",
                    as(this.html, i, e),
                    this.setText(n, r || 10),
                    as(this.html, i, e)
            },
            isEditing: function () {
                return "none" != this.html.style.display
            },
            cancelEdit: function () {
                this.stopEdit(!0)
            },
            stopEdit: function (i) {
                if (this.isEditing()) {
                    t.removeEventListener("mousedown", this.stopEditWhenClickOnWindow);
                    var e = this.html.value;
                    if (!i && this.callback && this.callback(e) === !1)
                        return !1;
                    this.html.style.display = "none",
                        this.html.value = null,
                        this.callback = null
                }
            },
            destroy: function () {
                this.html && i.body.removeChild(this.html)
            }
        },
        Zo.LabelEditor = ds;
    var Pa = function (t) {
        this.graph = t
    };
    Pa.prototype = {
        destroy: function (t) {
            t.labelEditor && (t.labelEditor.destroy(), delete t.labelEditor)
        },
        ondblclick: function (t, i) {
            var e = t.getData();
            if (!e)
                return i.currentSubNetwork ? void i.upSubNetwork() : void (i.enableDoubleClickToOverview && i.zoomToOverview(Ws.ZOOM_ANIMATE));
            if (i.editable && i.isEditable(e)) {
                var n = i.hitTest(t);
                if (n instanceof va && n.editable !== !1) {
                    var r = i.labelEditor;
                    r || (i.labelEditor = r = new ds);
                    var s = n.getBounds();
                    return s = i.toCanvas(s.x + s.width / 2, s.y + s.height / 2),
                        s = hs(s.x, s.y, i.html),
                        void i.startLabelEdit(e, n, r, s)
                }
            }
            var o = e instanceof Qh,
                h = e instanceof Vh && e.hasEdgeBundle();
            return e._49 && (Si(t) || !o && !h) ? void (i.currentSubNetwork = e) : o ? void (e.expanded = !e.expanded) : h ? void this.graph.reverseExpanded(e) : void 0
        }
    };
    var Na = function (t) {
        this.graph = t
    };
    Na.prototype = {
        onmousedown: function (t, i) {
            i.focus(!0)
        },
        onkeydown: function (t, i) {
            if (i.editable) {
                var e = t.keyCode;
                if (8 == e || 46 == e || 127 == e)
                    return i.removeSelectionByInteraction(t), void R(t);
                if (Si(t)) {
                    if (67 == e) ;
                    else if (86 == e) ;
                    else if (90 == e) ;
                    else if (89 != e)
                        return;
                    R(t)
                }
            }
        }
    },
        Zo.EditInteraction = Na;
    var za = function (t) {
        this.graph = t
    };
    za.prototype = {
        onkeydown: function (i, e) {
            if (i.metaKey && 83 == i.keyCode) {
                var n = e.exportImage(e.scale, e.viewportBounds),
                    r = t.open(),
                    s = r.document;
                s.title = "export image - " + n.width + " x " + n.height;
                var o = s.createElement("img");
                o.src = n.data,
                    s.body.appendChild(o),
                    R(i)
            }
        }
    };
    var ka = function (t) {
        this.graph = t
    };
    ka.prototype = {
        destroy: function () {
            delete this.draggingElements,
                delete this.currentDraggingElement
        },
        _2j: function (t) {
            var i = new Xs;
            return t.selectionModel.forEach(function (e) {
                t.isMovable(e) && t.isVisible(e) && i.add(e)
            }, this),
                i
        },
        onstart: function (t, i) {
            this.currentDraggingElement && this.destroy(i)
        },
        startdrag: function (t, i) {
            if (!t.responded) {
                var e = t.getData();
                if (!e || !i.isSelected(e) || !i.isMovable(e))
                    return void this.destroy(i);
                t.responded = !0,
                    this.currentDraggingElement = e,
                    this.draggingElements = this._2j(i);
                var n = new ms(i, ms.ELEMENT_MOVE_START, t, this.currentDraggingElement, this.draggingElements.datas);
                return i.beforeInteractionEvent(n) === !1 ? void this.destroy(i) : void i.onInteractionEvent(n)
            }
        },
        ondrag: function (t, i) {
            if (this.currentDraggingElement) {
                D(t);
                var e = t.dx,
                    n = t.dy,
                    r = i.scale;
                e /= r,
                    n /= r;
                var s = new ms(i, ms.ELEMENT_MOVING, t, this.currentDraggingElement, this.draggingElements.datas);
                i.moveElements(this.draggingElements.datas, e, n),
                    i.onInteractionEvent(s)
            }
        },
        enddrag: function (t, i) {
            if (this.currentDraggingElement) {
                if (this.draggingElements && this.draggingElements.length) {
                    if (t.shiftKey) {
                        var e,
                            n = i.toLogical(t),
                            r = n.x,
                            s = n.y;
                        i.forEachReverseVisibleUI(function (t) {
                            var i = t.data;
                            if (!this.draggingElements.contains(i) && t.uiBounds.intersectsPoint(r - t.x, s - t.y) && t.hitTest(r, s, 1)) {
                                if (i instanceof Zo.Edge) {
                                    if (!i.enableSubNetwork)
                                        return;
                                    for (var n = this.draggingElements.length; n-- > 0;) {
                                        var o = this.draggingElements.get(n);
                                        if (o instanceof Zo.Node && o.linkedWith(i))
                                            return
                                    }
                                    return e = i,
                                        !1
                                }
                                return (i.enableSubNetwork || i._i9() && i.expanded) && (e = i),
                                    !1
                            }
                        }, this),
                        e && this.draggingElements.forEach(function (t) {
                            for (var i = t.parent; i;) {
                                if (this.draggingElements.contains(i))
                                    return;
                                i = i.parent
                            }
                            t.parent = e
                        }, this)
                    }
                    var o = new ms(i, ms.ELEMENT_MOVE_END, t, this.currentDraggingElement, this.draggingElements.datas);
                    i.onInteractionEvent(o)
                }
                this.destroy(i)
            }
        },
        onpinch: function (t, i) {
            this.currentDraggingElement && this.enddrag(t, i)
        },
        step: 1,
        onkeydown: function (t, i) {
            if (Si(t)) {
                var e,
                    n;
                if (37 == t.keyCode ? e = -1 : 39 == t.keyCode ? e = 1 : 38 == t.keyCode ? n = -1 : 40 == t.keyCode && (n = 1), e || n) {
                    var r = this._2j(i).datas;
                    if (0 != r.length) {
                        R(t),
                            e = e || 0,
                            n = n || 0;
                        var s = this.step / i.scale,
                            o = new ms(i, ms.ELEMENT_MOVE_END, t, null, r);
                        i.moveElements(r, e * s, n * s),
                            i.onInteractionEvent(o)
                    }
                }
            }
        }
    };
    var Ma = function (t) {
        this.graph = t
    };
    Ma.prototype = {
        onkeydown: function (t, i) {
            Si(t) || (37 == t.keyCode ? (this._66(i, 1, 0), R(t)) : 39 == t.keyCode ? (this._66(i, -1, 0), R(t)) : 38 == t.keyCode ? (this._66(i, 0, 1), R(t)) : 40 == t.keyCode && (this._66(i, 0, -1), R(t)))
        },
        _66: function (t, i, e) {
            t._mw7(i, e)
        },
        onstart: function (t, i) {
            this._lc && this.destroy(i)
        },
        _lc: !1,
        startdrag: function (t, i) {
            t.responded || (t.responded = !0, this._lc = !0, i.cursor = Fo)
        },
        ondrag: function (t, i) {
            this._lc && (D(t), i.translate(t.dx || 0, t.dy || 0))
        },
        enddrag: function (t, i) {
            if (this._lc) {
                if (i.enableInertia !== !1) {
                    var e = t.vx,
                        n = t.vy;
                    (Math.abs(e) > .1 || Math.abs(n) > .1) && i._mw7(e, n)
                }
                this.destroy(i)
            }
        },
        onpinch: function (t, i) {
            this._lc = !0;
            var e = t.dScale;
            if (e && 1 != e) {
                var n = i.globalToLocal(t.center);
                i.zoomAt(e, n.x, n.y, !1)
            }
        },
        destroy: function (t) {
            this._lc = !1,
                t.cursor = null
        }
    },
        fs.prototype = {
            _1o: function (t) {
                this.element && t.source == this.element && this.graph.callLater(function () {
                    this._jq()
                }, this)
            },
            _7: function () {
                this._lqPropertyChangeListing || (this._lqPropertyChangeListing = !0, this.graph.dataPropertyChangeDispatcher.addListener(this._1o, this))
            },
            _4: function () {
                this._lqPropertyChangeListing = !1,
                    this.graph.dataPropertyChangeDispatcher.removeListener(this._1o, this)
            },
            onElementRemoved: function (t, i) {
                this.element && (t == this.element || I(t) && y(t, this.element)) && this.destroy(i)
            },
            onClear: function (t) {
                this.element && this.destroy(t)
            },
            destroy: function () {
                this.graph.cursor = null,
                this.element && delete this.element._editting,
                    delete this.element,
                    delete this._9y,
                    delete this._90,
                    delete this._mzanEdit,
                    this._74(),
                    this._4()
            },
            _74: function () {
                this.drawLineId && (this.topCanvas.removeDrawable(this.drawLineId), delete this.drawLineId, this.topCanvas.invalidate())
            },
            _mx3: function () {
                this.drawLineId && this.topCanvas.contains(this.drawLineId) || (this.drawLineId = this.topCanvas.addDrawable(this.drawLine, this).id, this.topCanvas.invalidate())
            },
            _9y: null,
            _5z: function (t) {
                this._9y = t,
                    this.invalidate()
            },
            _e1: function (t, i, e) {
                t.beginPath(),
                    i.isControlPoint ? t.rect(i.x - this.handlerSize / e, i.y - this.handlerSize / e, this.handlerSize / e * 2, this.handlerSize / e * 2) : t.arc(i.x, i.y, this.handlerSize / e, 0, 2 * Math.PI, !1),
                    t.lineWidth = 1 / e,
                    t.lineDash = [],
                    t.strokeStyle = "#888",
                    t.fillStyle = "rgba(255, 255, 0, 0.8)",
                    t.stroke(),
                    t.fill()
            },
            _fu: function (t, i, e, n) {
                n ? t.moveTo(i, e) : t.lineTo(i, e)
            },
            drawLine: function (t, i) {
                if (this._9y && this._9y.length) {
                    t.save();
                    var e = this.element instanceof Zh;
                    e && (t.translate(this.element.x, this.element.y), this.element.rotate && t.rotate(this.element.rotate));
                    var n,
                        r = [];
                    t.beginPath();
                    {
                        this._9y.length
                    }
                    c(this._9y, function (i) {
                        if (i.type != Jo.SEGMENT_CLOSE)
                            for (var e = 0, s = i.points; e + 1 < s.length;) {
                                var o = s[e],
                                    h = s[e + 1],
                                    a = {
                                        x: o,
                                        y: h,
                                        isControlPoint: this._6z(i, e)
                                    };
                                r.push(a),
                                    this._fu(t, a.x, a.y, null == n),
                                    n = a,
                                    e += 2
                            }
                    }, this),
                        t.lineWidth = 1 / i,
                        t.lineDash = [2 / i, 3 / i],
                        t.strokeStyle = "#555",
                        t.stroke(),
                        c(r, function (e) {
                            this._e1(t, e, i)
                        }, this),
                        t.restore()
                }
            },
            invalidate: function () {
                this.topCanvas.invalidate()
            },
            _3o: function (t) {
                if (this.element != t && (this.element && this.destroy(), t && this.isEditable(t))) {
                    var i = this._5w(t, this.graph);
                    i && (this.element = t, t._editting = !0, this._mzanEdit = !0, this._5z(i), this._7(), this._mx3())
                }
            },
            _jq: function () {
                if (this.drawLineId && this.element) {
                    var t = this._5w(this.element, this.graph);
                    return t ? void this._5z(t) : void this.destroy(this.graph)
                }
            },
            _5w: function (t, i) {
                return i.isEditable(t) ? t.pathSegments || [] : void 0
            },
            _i3: function (t, i) {
                t -= this.element.x,
                    i -= this.element.y;
                var e = {
                    x: t,
                    y: i
                };
                return this.element.rotate && Lr(e, -this.element.rotate),
                    e
            },
            onclick: function (t, i) {
                if (i.editable && t.altKey && this.element) {
                    var e = this._fy(t, i);
                    if (e && e.isControlPoint)
                        return void this.element.removePathSegmentByIndex(e.index);
                    if (this.element == t.getData()) {
                        var n = i.toLogical(t),
                            r = i.getUI(this.element);
                        r.addPoint(n.x, n.y, this.handlerSize || 2)
                    }
                }
            },
            isEditable: function (t) {
                return this.graph.isEditable(t) && (t instanceof Vh || t instanceof Zh)
            },
            ondblclick: function (t, i) {
                if (!i.editable)
                    return void (this.element && this.destroy(i));
                var e = t.getData();
                return !e || e == this.element || e._editting ? void this.destroy(i) : void this._3o(e)
            },
            onstart: function (t, i) {
                if (!i.editable)
                    return void (this.element && this.destroy(i));
                if (!t.responded) {
                    if (this.element && this._fy(t, i))
                        return void (t.responded = !0);
                    var e = t.getData();
                    return e && i.isResizable(e) && e instanceof Zh ? void (this.element && e != this.element && this.destroy()) : void this._3o(e)
                }
            },
            onrelease: function () {
                this.element && (this._mzanEdit = !0)
            },
            _90: null,
            _fy: function (t, i) {
                var e = i.toLogical(t);
                this.element instanceof Zh && (e = this._i3(e.x, e.y));
                var n,
                    r = i.scale,
                    s = this.handlerSize / r,
                    o = this._9y;
                return c(o, function (t, i) {
                    for (var r = 0, h = t.points; r + 1 < h.length;) {
                        var a = h[r],
                            l = h[r + 1],
                            _ = Js(e.x, e.y, a, l);
                        if (s > _) {
                            if (n = {
                                segment: t,
                                index: i,
                                pointIndex: r
                            }, this._6z(t, r)) {
                                n.isControlPoint = !0;
                                var u = o instanceof Xs ? o.getByIndex(i + 1) : o[i + 1];
                                u && (n.nextSegment = u)
                            }
                            return !1
                        }
                        r += 2
                    }
                }, this),
                    n
            },
            _6z: function (t, i) {
                return i == t.points.length - 2
            },
            startdrag: function (t, i) {
                if (this.element && this._mzanEdit && (this._90 = this._fy(t, i), this._90)) {
                    this._74(),
                        t.responded = !0;
                    var e = new ms(i, ms.POINT_MOVE_START, t, this.element);
                    e.point = this._90,
                        i.onInteractionEvent(e)
                }
            },
            ondrag: function (t, i) {
                if (this.element && this._90) {
                    var e = t.dx,
                        n = t.dy,
                        r = i.scale;
                    if (e /= r, n /= r, this.element.rotate) {
                        var s = {
                            x: e,
                            y: n
                        };
                        Lr(s, -this.element.rotate),
                            e = s.x,
                            n = s.y
                    }
                    var o = this._90.segment;
                    if (!this._90.isControlPoint || o.type != bh && o.type != Sh)
                        o.points[this._90.pointIndex] += e, o.points[this._90.pointIndex + 1] += n;
                    else {
                        for (var h = o.points.length - 4; h < o.points.length;)
                            o.points[h] += e, o.points[h + 1] += n, h += 2;
                        !this._90.nextSegment || this._90.nextSegment.type != Sh && this._90.nextSegment.type != bh || (this._90.nextSegment.points[0] += e, this._90.nextSegment.points[1] += n)
                    }
                    this.element.firePathChange();
                    var a = new ms(i, ms.POINT_MOVING, t, this.element);
                    a.point = this._90,
                        i.onInteractionEvent(a)
                }
            },
            enddrag: function (t, i) {
                if (this.element && this._90) {
                    this._mx3(),
                        this._jq();
                    var e = new ms(i, ms.POINT_MOVE_END, t, this.element);
                    e.point = this._90,
                        i.onInteractionEvent(e)
                }
            },
            onmousemove: function (t, i) {
                this.element && (i.cursor = t.altKey && (this._fy(t, i) || this.element == t.getData()) ? "crosshair" : null)
            }
        },
        Ws.SELECTION_RECTANGLE_STROKE = 1,
        Ws.SELECTION_RECTANGLE_STROKE_COLOR = V(3724541951),
        Ws.SELECTION_RECTANGLE_FILL_COLOR = V(1430753245);
    var Ba = function (t) {
        this.graph = t,
            this.topCanvas = t._8t._topCanvas
    };
    Ba.prototype = {
        onstart: function (t, i) {
            this._lc && this.destroy(i)
        },
        startdrag: function (t, i) {
            t.responded || (t.responded = !0, this._lc = i.toLogical(t), i.cursor = "crosshair", this._1aId = this.topCanvas.addDrawable(this._1a, this).id)
        },
        ondrag: function (t, i) {
            if (this._lc) {
                D(t),
                    this._end = i.toLogical(t),
                    this.invalidate();
                var e = new ms(i, ms.SELECT_START, t, i.selectionModel);
                i.onInteractionEvent(e)
            }
        },
        enddrag: function (t, i) {
            if (this._lc) {
                this._frTimer && (clearTimeout(this._frTimer), this._frTimer = null),
                    this._fr(!0),
                    this.destroy(i);
                var e = new ms(i, ms.SELECT_END, t, i.selectionModel);
                i.onInteractionEvent(e)
            }
        },
        onpinch: function (t, i) {
            this._lc && this.enddrag(t, i)
        },
        _1a: function (t, i) {
            t.strokeStyle = Ws.SELECTION_RECTANGLE_STROKE_COLOR,
                t.fillStyle = Ws.SELECTION_RECTANGLE_FILL_COLOR,
                t.lineWidth = Ws.SELECTION_RECTANGLE_STROKE / i;
            var e = this._lc.x,
                n = this._lc.y;
            t.rect(e, n, this._end.x - e, this._end.y - n),
                t.fill(),
                t.stroke()
        },
        invalidate: function () {
            return this.invalidateFlag ? void this.topCanvas.invalidate() : (this.invalidateFlag = !0, void (this._frTimer = setTimeout(this._fr.bind(this), 100)))
        },
        _fr: function (t) {
            if (this.invalidateFlag = !1, this._frTimer = null, !this._lc || Cs && !t)
                return void this.topCanvas.invalidate();
            var i = Math.min(this._lc.x, this._end.x),
                e = Math.min(this._lc.y, this._end.y),
                n = Math.abs(this._lc.x - this._end.x),
                r = Math.abs(this._lc.y - this._end.y);
            if (!n || !r)
                return void this.graph.selectionModel.clear();
            var s,
                o = [],
                h = this.graph.scale;
            if (this.graph.forEachVisibleUI(function (t) {
                t._i5 && this.graph.isSelectable(t.$data) && (s = t._fi, (hi(i, e, n, r, s.x + t._x, s.y + t._y, s.width, s.height) || ze(i, e, n, r, t, h)) && o.push(t.$data))
            }, this), this.graph.selectionModel.set(o), this.topCanvas.invalidate(), !t) {
                var a = new ms(this.graph, ms.SELECT_BETWEEN, null, this.graph.selectionModel);
                this.graph.onInteractionEvent(a)
            }
        },
        destroy: function (t) {
            this._lc = null,
                t.cursor = null,
            this._1aId && (this.topCanvas.removeDrawable(this._1aId), delete this._1aId, this.topCanvas.invalidate())
        }
    };
    var Da = Math.PI / 4;
    cs.prototype = {
        _ey: !1,
        _f0: !1,
        _1o: function (t) {
            this.element && t.source == this.element && this.graph.callLater(function () {
                this._mw4()
            }, this)
        },
        _7: function () {
            this._lqPropertyChangeListing || (this._lqPropertyChangeListing = !0, this.graph.dataPropertyChangeDispatcher.addListener(this._1o, this))
        },
        _4: function () {
            this._lqPropertyChangeListing = !1,
                this.graph.dataPropertyChangeDispatcher.removeListener(this._1o, this)
        },
        onElementRemoved: function (t, i) {
            this.element && (t == this.element || I(t) && y(t, this.element)) && this.destroy(i)
        },
        onClear: function (t) {
            this.element && this.destroy(t)
        },
        ondblclick: function (t, i) {
            this.element && this.destroy(i)
        },
        destroy: function (t) {
            t.cursor = null,
                delete this.element,
                delete this._d6,
                delete this._mxody,
                delete this._90,
                delete this._mzanEdit,
                delete this._k9,
                delete this._rotatePoint,
                delete this._f0,
                delete this._ey,
                delete this._insets,
                this._74(),
                this._4()
        },
        _74: function () {
            this._fuId && (this.topCanvas.removeDrawable(this._fuId), delete this._fuId, this.topCanvas.invalidate())
        },
        _mx3: function () {
            this._fuId && this.topCanvas.contains(this._fuId) || (this._fuId = this.topCanvas.addDrawable(this._fu, this).id, this.topCanvas.invalidate())
        },
        _d6: null,
        _k9: null,
        _8r: function (t) {
            this._d6 = t;
            var i = this._d6.x,
                e = this._d6.y,
                n = this._d6.width,
                r = this._d6.height,
                s = this.element instanceof Qh && this.element.expanded;
            if (this._f0) {
                var o = [];
                s || (o.push({
                    x: i,
                    y: e,
                    p: no.LEFT_TOP,
                    cursor: "nwse-resize",
                    rotate: 5 * Da
                }), o.push({
                    x: i + n / 2,
                    y: e,
                    p: no.CENTER_TOP,
                    cursor: "ns-resize",
                    rotate: 6 * Da
                }), o.push({
                    x: i + n,
                    y: e,
                    p: no.RIGHT_TOP,
                    cursor: "nesw-resize",
                    rotate: 7 * Da
                }), o.push({
                    x: i,
                    y: e + r / 2,
                    p: no.LEFT_MIDDLE,
                    cursor: "ew-resize",
                    rotate: 4 * Da
                }), o.push({
                    x: i,
                    y: e + r,
                    p: no.LEFT_BOTTOM,
                    cursor: "nesw-resize",
                    rotate: 3 * Da
                })),
                    o.push({
                        x: i + n,
                        y: e + r / 2,
                        p: no.RIGHT_MIDDLE,
                        cursor: "ew-resize",
                        rotate: 0
                    }),
                    o.push({
                        x: i + n / 2,
                        y: e + r,
                        p: no.CENTER_BOTTOM,
                        cursor: "ns-resize",
                        rotate: 2 * Da
                    }),
                    o.push({
                        x: i + n,
                        y: e + r,
                        p: no.RIGHT_BOTTOM,
                        cursor: "nwse-resize",
                        rotate: Da
                    }),
                    this._k9 = o
            }
            this._rotatePoint = this._ey ? {
                    x: i + n / 2,
                    y: e,
                    cursor: jo
                }
                : null,
                this._mzz()
        },
        _e1: function (t, i, e, n) {
            t.beginPath();
            var r = (this.handlerSize - 1) / n;
            t.rect(i - r, e - r, 2 * r, 2 * r),
                t.lineWidth = 1 / n,
                t.lineDash = [],
                t.strokeStyle = "#888",
                t.fillStyle = "rgba(255, 255, 255, 0.8)",
                t.stroke(),
                t.fill()
        },
        _63: function (t, i, e, n, r, s) {
            r = r || this.handlerSize,
                s = s || "rgba(0, 255, 0, 1)",
                t.beginPath(),
                r /= n,
                t.arc(i, e, r, 0, 2 * Math.PI, !1),
                t.lineWidth = 1 / n,
                t.lineDash = [],
                t.strokeStyle = "#888",
                t.fillStyle = s,
                t.stroke(),
                t.fill()
        },
        _i3: function (t, i) {
            t -= this.element.x,
                i -= this.element.y;
            var e = {
                x: t,
                y: i
            };
            return this.element.rotate && Lr(e, -this.element.rotate),
                e
        },
        _fu: function (t, i) {
            if (this._d6) {
                if (t.save(), t.translate(this.element.x, this.element.y), this.element.rotate && t.rotate(this.element.rotate), this._rotatePoint) {
                    this._63(t, 0, 0, i, 3, "#FF0");
                    var e = this._rotatePoint.x,
                        n = this._rotatePoint.y - this._rotateHandleLength / i;
                    t.beginPath(),
                        t.moveTo(e, this._rotatePoint.y),
                        t.lineTo(e, n),
                        t.lineWidth = 1 / i,
                        t.strokeStyle = "#555",
                        t.stroke(),
                        this._63(t, e, n, i)
                }
                if (this._k9) {
                    var r = this._d6.x,
                        s = this._d6.y,
                        o = this._d6.width,
                        h = this._d6.height;
                    t.beginPath(),
                        t.rect(r, s, o, h),
                        t.lineWidth = 1 / i,
                        t.lineDash = [2 / i, 3 / i],
                        t.strokeStyle = "#555",
                        t.stroke(),
                        c(this._k9, function (e) {
                            this._e1(t, e.x, e.y, i)
                        }, this)
                }
                t.restore()
            }
        },
        _mzz: function () {
            this.topCanvas.invalidate()
        },
        _3o: function (t, i, e, n) {
            this.element = t,
                this._mx3();
            var r = i.getUI(t);
            this._mxody = r.body,
                this._f0 = e,
                this._ey = n,
                this._mw4(),
                this._7()
        },
        _mw4: function () {
            if (this._fuId) {
                var t = vs(this._mxody, this._mxody._je),
                    i = vs(this._mxody, this._mxody._87);
                this._insets = new eo(t.y - i.y, t.x - i.x, i.bottom - t.bottom, i.right - t.right),
                    this._8r(i)
            }
        },
        _mx5: function (t, i) {
            return i.isResizable(t)
        },
        _mx6: function (t, i) {
            return (!t._i9() || !t.expanded) && i.isRotatable(t)
        },
        _dk: function (t, i) {
            return t instanceof Kh && i.isEditable(t)
        },
        onstart: function (t, i) {
            if (!i.editable)
                return void (this.element && this.destroy(i));
            if (!t.responded) {
                var e = i.getUI(t),
                    n = t.getData();
                if (n != this.element) {
                    if (this.element) {
                        if (this._fy(t, i))
                            return void (t.responded = !0);
                        this.destroy(i)
                    }
                    if (n && !n._editting && this._dk(n, i)) {
                        var r = this._mx5(n, i, e),
                            s = this._mx6(n, i, e);
                        (r || s) && this._3o(n, i, r, s)
                    }
                }
            }
        },
        onrelease: function (t, i) {
            this.element && (this._mzanEdit = !0, this._mx3(), i.callLater(function () {
                this._mw4()
            }, this))
        },
        _90: null,
        _fy: function (t, i) {
            var e = i.toLogical(t);
            e = this._i3(e.x, e.y);
            var n = i.scale,
                r = this.handlerSize / n;
            if (this._rotatePoint) {
                var s = this._rotatePoint.x,
                    o = this._rotatePoint.y - this._rotateHandleLength / n;
                if (Js(e.x, e.y, s, o) < r)
                    return this._rotatePoint
            }
            if (this._k9 && this._k9.length) {
                var h;
                return c(this._k9, function (t) {
                    return Js(e.x, e.y, t.x, t.y) < r ? (h = t, !1) : void 0
                }, this),
                    h
            }
        },
        onmousemove: function (t, i) {
            if (this.element) {
                var e = this._fy(t, i);
                if (!e)
                    return void (i.cursor = null);
                if (e != this._rotatePoint && this.element.rotate) {
                    var n = e.rotate + this.element.rotate;
                    return void (i.cursor = gs(n))
                }
                i.cursor = e.cursor
            }
        },
        startdrag: function (t, i) {
            if (this.element && (this._74(), this._mzanEdit && (this._90 = this._fy(t, i), this._90))) {
                if (t.responded = !0, this._90 == this._rotatePoint)
                    return this._90.start = i.toLogical(t), void (this._90.rotate = this.element.rotate || 0);
                var e = new ms(i, ms.RESIZE_START, t, this.element);
                e.point = this._90,
                    i.onInteractionEvent(e)
            }
        },
        _7a: function (t, i, e, n, r, s) {
            var o = this._d6,
                h = o.x,
                a = o.y,
                l = o.width,
                _ = o.height;
            if (s) {
                var u = n != l;
                u ? r = n * _ / l : n = r * l / _
            }
            var d = t.path._fg,
                f = n / l,
                c = r / _,
                v = -h * f + i,
                g = -a * c + e;
            d.forEach(function (t) {
                if (t.type != Jo.SEGMENT_CLOSE) {
                    var n = t.points;
                    if (n && n.length)
                        for (var r = 0, s = n.length; s > r; r += 2) {
                            var o = n[r],
                                l = n[r + 1];
                            n[r] = (o - h) * f + i - v,
                                n[r + 1] = (l - a) * c + e - g
                        }
                }
            }),
                this._d6.set(i - v, e - g, n, r),
                t.setLocation(t.x + v, t.y + g),
                t.firePathChange()
        },
        _mw2: function (t, i, e, n, r) {
            this._d6.set(i, e, n, r),
                t.minSize = {
                    width: n,
                    height: r
                }
        },
        _4h: function (t, i, e, n, r) {
            if (this.element instanceof Qh)
                return this._mw2(this.element, t, i, e, n, r);
            if (this.element instanceof Zh)
                return this._7a(this.element, t, i, e, n, r);
            var s = this._mxody instanceof va;
            if (!s && r) {
                var o = this._d6,
                    h = this._mxody.originalBounds,
                    a = e != o.width;
                a ? n = e * h.height / h.width : e = n * h.width / h.height
            }
            var l = this.element.anchorPosition,
                _ = new to(e - this._insets.left - this._insets.right, n - this._insets.top - this._insets.bottom);
            if (_.width < 1 && (e = this._insets.left + this._insets.right + 1, _.width = 1), _.height < 1 && (n = this._insets.top + this._insets.bottom + 1, _.height = 1), s ? this.element.setStyle(ea.LABEL_SIZE, _) : this.element.size = _, l) {
                var u = ai(l, e, n),
                    d = u.x + t - (this._mxody.offsetX || 0),
                    f = u.y + i - (this._mxody.offsetY || 0);
                if (this._d6.set(t - d, i - f, e, n), this.element.rotate) {
                    var u = Lr({
                        x: d,
                        y: f
                    }, this.element.rotate);
                    d = u.x,
                        f = u.y
                }
                this.element.x += d,
                    this.element.y += f
            } else {
                var d = this._d6.x * e / this._d6.width - t,
                    f = this._d6.y * n / this._d6.height - i;
                if (this._d6.set(t + d, i + f, e, n), this.element.rotate) {
                    var u = Lr({
                        x: d,
                        y: f
                    }, this.element.rotate);
                    d = u.x,
                        f = u.y
                }
                this.element.x -= d,
                    this.element.y -= f
            }
        },
        ondrag: function (t, i) {
            if (this.element && this._90)
                if (this._90 != this._rotatePoint) {
                    var e = t.dx,
                        n = t.dy,
                        r = i.scale;
                    if (e /= r, n /= r, this.element.rotate) {
                        var s = {
                            x: e,
                            y: n
                        };
                        Lr(s, -this.element.rotate),
                            e = s.x,
                            n = s.y
                    }
                    var o = this._90.p,
                        h = this._d6,
                        a = h.x,
                        l = h.y,
                        _ = h.width,
                        u = h.height;
                    o.horizontalPosition == ro ? e >= _ ? (a += _, _ = e - _ || 1) : (a += e, _ -= e) : o.horizontalPosition == oo && (-e >= _ ? (_ = -e - _ || 1, a -= _) : _ += e),
                        o.verticalPosition == ho ? n >= u ? (l += u, u = n - u || 1) : (l += n, u -= n) : o.verticalPosition == lo && (-n >= u ? (u = -n - u || 1, l -= u) : u += n),
                        this._4h(a, l, _, u, t.shiftKey);
                    var d = new ms(i, ms.RESIZING, t, this.element);
                    d.point = this._90,
                        i.onInteractionEvent(d)
                } else {
                    var s = i.toLogical(t),
                        f = ge(s.x, s.y, this.element.x, this.element.y, this._90.start.x, this._90.start.y, !0);
                    f += this._90.rotate || 0,
                    t.shiftKey && (f = Math.round(f / Math.PI * 4) * Math.PI / 4),
                        this.element.rotate = f % (2 * Math.PI);
                    var d = new ms(i, ms.ROTATING, t, this.element)
                }
        },
        enddrag: function (t, i) {
            if (this.element && this._90 && this._90 != this._rotatePoint) {
                var e = new ms(i, ms.RESIZE_END, t, this.element);
                e.point = this._90,
                    i.onInteractionEvent(e)
            }
        }
    },
        Zo.ResizeInteraction = cs;
    var Ga = function (t) {
        this.graph = t
    };
    Ga.prototype = {
        onstart: function (t, i) {
            if (!t.responded) {
                !Fs && Is && i.focus(!0);
                var e = t.getData();
                if (e && !i.isSelectable(e) && (e = null), e && Si(t)) {
                    i.reverseSelect(e);
                    var n = new ms(i, ms.SELECT, t, i.selectionModel);
                    return void i.onInteractionEvent(n)
                }
                if (!e || !i.selectionModel.isSelected(e)) {
                    e ? (i.setSelection(e), i.sendToTop(e)) : i.setSelection(null);
                    var n = new ms(i, ms.SELECT, t, i.selectionModel);
                    i.onInteractionEvent(n)
                }
            }
        },
        onkeydown: function (t, i) {
            return 27 == t.keyCode ? void i.unSelectAll() : void (Si(t) && 65 == t.keyCode && (i.selectAll(), R(t)))
        }
    };
    var $a = 0,
        Fa = 15;
    Ws.TOOLTIP_DURATION = 3e3,
        Ws.TOOLTIP_DELAY = 1e3;
    var ja = "Q-Tooltip";
    gi("." + ja, {
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
    var Ya = function (t) {
        this.graph = t,
            this._mx0 = {}
    };
    Ya.prototype = {
        _mx0: null,
        _mx1: null,
        _mx2: function () {
            delete this._initTimer,
            this._mx0.data && (this._mx1 || (this._mx1 = i.createElement("div"), this._mx1.className = ja), this._mx1.parentNode || i.body.appendChild(this._mx1), this._d4(this.graph, this._mx0.data))
        },
        _d4: function (t, i) {
            var e = t.getTooltip(i),
                n = "text" == i.tooltipType;
            e && !n && (e = e.replace(/\n/g, "<br>")),
                n ? this._mx1.textContent = e || "" : this._mx1.innerHTML = e || "";
            var r = this._mx0.evt.pageX + $a,
                s = this._mx0.evt.pageY + Fa;
            Es(this._mx1, r, s),
            this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer),
                this._deleteTimer = setTimeout(Zo.createFunction(this, this._8s), t.tooltipDuration || Ws.TOOLTIP_DURATION)
        },
        _8s: function () {
            delete this._deleteTimer,
            this._mx1 && this._mx1.parentNode && this._mx1.parentNode.removeChild(this._mx1),
                delete this._mx1,
                this._mx0 = {}
        },
        _ex: function (t, i, e, n) {
            if (!this._mx1) {
                var r = n.tooltipDelay;
                return isNaN(r) && (r = Ws.TOOLTIP_DELAY),
                    void (this._initTimer = setTimeout(Zo.createFunction(this, this._mx2), r))
            }
            this._d4(n, t)
        },
        onstart: function (t, i) {
            this.destroy(i)
        },
        onmousemove: function (t, i) {
            if (i.enableTooltip) {
                var e = t.getData();
                if (this._mx0.evt = t, this._mx0.data != e && (this._mx0.data = e, this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer), e)) {
                    var n = i.getTooltip(e);
                    n && this._ex(e, n, t, i)
                }
            }
        },
        destroy: function () {
            this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer),
            this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer),
            this._mx1 && this._8s(),
                this._mx0 = {}
        }
    };
    var Ha = function (t) {
        this.graph = t
    };
    Ha.prototype = {
        onmousewheel: function (t, i) {
            if (i.enableWheelZoom !== !1) {
                if (i._scaling)
                    return void R(t);
                i._scaling = !0,
                    T(function () {
                        delete i._scaling
                    }, this, 100),
                Zr(i, t, t.delta > 0) !== !1 && R(t)
            }
        }
    };
    var Ua = function (t) {
        this.graph = t
    };
    Ua.prototype = {
        onclick: function (t, i) {
            Zr(i, t, !Si(t))
        }
    };
    var Wa = function (t) {
        this.graph = t
    };
    Wa.prototype = {
        onclick: function (t, i) {
            Zr(i, t, Si(t))
        }
    },
        k(ms, fo),
        ms.ELEMENT_MOVE_START = "element.move.start",
        ms.ELEMENT_MOVING = "element.moving",
        ms.ELEMENT_MOVE_END = "element.move.end",
        ms.ELEMENT_CREATED = "element.created",
        ms.ELEMENT_REMOVED = "element.removed",
        ms.POINT_MOVE_START = "point.move.start",
        ms.POINT_MOVING = "point.moving",
        ms.POINT_MOVE_END = "point.move.end",
        ms.RESIZE_START = "resize.start",
        ms.RESIZING = "resizing",
        ms.RESIZE_END = "resize.end",
        ms.ROTATING = "rotating",
        ms.ROTATE_END = "rotate.end",
        ms.EDGE_BUNDLE = "edge.bundle",
        ms.SELECT = "select",
        ms.SELECT_START = "select.start",
        ms.SELECT_BETWEEN = "select.between",
        ms.SELECT_END = "select.end",
        ms.LONG_CLICK = "long.click",
        ps.prototype = {
            _9g: function (t) {
                if (this._interactionSupport)
                    switch (t.kind) {
                        case Oo.KIND_REMOVE:
                            this._interactionSupport._4g(t.data);
                            break;
                        case Oo.KIND_CLEAR:
                            this._interactionSupport._7z(t.data)
                    }
            },
            destroy: function () {
                delete this._kz,
                    delete this._4q,
                this._interactionSupport && (this._interactionSupport._ij(), delete this._interactionSupport)
            },
            _kz: null,
            _4q: null,
            defaultMode: null,
            _h9: function (t, i, e) {
                this._4q[t] = new ts(i, e),
                t == this.currentMode && this._interactionSupport._6v(i)
            },
            addCustomInteraction: function (t) {
                this._interactionSupport._9(t)
            },
            _mj: function (t) {
                var i = this._4q[t];
                return i ? i : qa[t]
            }
        },
        Z(ps.prototype, {
            defaultCursor: {
                get: function () {
                    return this.currentInteractionMode ? this.currentInteractionMode.defaultCursor : void 0
                }
            },
            currentMode: {
                get: function () {
                    return this._mzurrentMode
                },
                set: function (t) {
                    if (this._mzurrentMode != t) {
                        {
                            this._mzurrentMode
                        }
                        this._interactionSupport || (this._interactionSupport = new Mo(this._kz)),
                            this._mzurrentMode = t,
                            this.currentInteractionMode = this._mj(this._mzurrentMode),
                            this._kz.cursor = this.defaultCursor,
                            this._interactionSupport._6v(this.currentInteractionMode ? this.currentInteractionMode.getInteractionInstances(this._kz) : [])
                    }
                }
            }
        });
    var qa = {};
    Ws.registerInteractions = function (t, i, e) {
        var n = new ts(i, e);
        qa[t] = n
    },
        Jo.INTERACTION_MODE_VIEW = "view",
        Jo.INTERACTION_MODE_DEFAULT = "default",
        Jo.INTERACTION_MODE_SELECTION = "selection",
        Jo.INTERACTION_MODE_ZOOMIN = "zoomin",
        Jo.INTERACTION_MODE_ZOOMOUT = "zoomout",
        Jo.INTERACTION_MODE_CREATE_SIMPLE_EDGE = "create.simple.edge",
        Jo.INTERACTION_MODE_CREATE_EDGE = "create.edge",
        Jo.INTERACTION_MODE_CREATE_SHAPE = "create.shape",
        Jo.INTERACTION_MODE_CREATE_LINE = "create.line",
        Ws.registerInteractions(Jo.INTERACTION_MODE_VIEW, [Ga, Ma, Ha, za, Pa, Ya]),
        Ws.registerInteractions(Jo.INTERACTION_MODE_CREATE_SIMPLE_EDGE, [Na, os, Ga, Ma, Ha, za, Ya]),
        Ws.registerInteractions(Jo.INTERACTION_MODE_CREATE_EDGE, [Na, ns, Ga, Ma, Ha, za, Ya]),
        Ws.registerInteractions(Jo.INTERACTION_MODE_CREATE_SHAPE, [Na, rs, Ga, Ma, Ha, za, Ya]),
        Ws.registerInteractions(Jo.INTERACTION_MODE_CREATE_LINE, [ss, Ga, Ma, Ha, za, Ya]),
        Ws.registerInteractions(Jo.INTERACTION_MODE_DEFAULT, [Na, cs, fs, Ga, ka, Ma, Ha, za, Pa, Ya]),
        Ws.registerInteractions(Jo.INTERACTION_MODE_SELECTION, [Na, cs, fs, Ga, ka, Ba, Ma, Ha, za, Pa, Ya]),
        Ws.registerInteractions(Jo.INTERACTION_MODE_ZOOMIN, [Ha, za, Ua], Bo),
        Ws.registerInteractions(Jo.INTERACTION_MODE_ZOOMOUT, [Ha, za, Wa], Go),
        Zo.PanInteraction = Ma,
        Zo.SelectionInteraction = Ga,
        Zo.MoveInteraction = ka,
        Zo.WheelZoomInteraction = Ha,
        Zo.DoubleClickInteraction = Pa,
        Zo.ExportInteraction = za,
        Zo.TooltipInteraction = Ya,
        Zo.RectangleSelectionInteraction = Ba,
        Zo.PointsInteraction = fs;
    var Xa = function (t) {
        this.graph = t
    };
    Zo.Layouter = Xa,
        Xa.prototype = {
            getNodeBounds: function (t) {
                return this.graph.getUIBounds(t)
            },
            isLayoutable: function (t) {
                return t.layoutable !== !1
            },
            getLayoutResult: function () {
            },
            updateLocations: function (t, i, e, n, r) {
                if (i === !0) {
                    if (this.animate || (this.animate = new Tl), e && (this.animate.duration = e), n && (this.animate.animationType = n), this.animate.locations = t, r) {
                        var s = r,
                            o = this;
                        r = function () {
                            s.call(o, t)
                        }
                    }
                    return void this.animate.start(r)
                }
                for (var h in t) {
                    var a = t[h],
                        l = a.node;
                    l.setLocation(a.x, a.y)
                }
                r && r.call(this, t)
            },
            _g1: function (t) {
                var i,
                    e,
                    n,
                    r = null;
                t && (i = t.byAnimate, r = t.callback, e = t.duration, n = t.animationType);
                var s = this.getLayoutResult(t);
                return s ? (this.updateLocations(s, i, e, n, r), s) : !1
            },
            doLayout: function (t, i) {
                return this.graph && i !== !0 ? void this.graph.callLater(function () {
                    this._g1(t)
                }, this) : this._g1(t)
            }
        };
    var Va = 11,
        Ka = 12,
        Za = 13,
        Ja = 21,
        Qa = 22,
        tl = 23;
    Jo.DIRECTION_RIGHT = Va,
        Jo.DIRECTION_LEFT = Ka,
        Jo.DIRECTION_CENTER = Za,
        Jo.DIRECTION_BOTTOM = Ja,
        Jo.DIRECTION_TOP = Qa,
        Jo.DIRECTION_MIDDLE = tl;
    var il = "even",
        el = "two.side",
        nl = "even.h",
        rl = "even.v";
    Jo.LAYOUT_TYPE_EVEN = il,
        Jo.LAYOUT_TYPE_EVEN_HORIZONTAL = nl,
        Jo.LAYOUT_TYPE_EVEN_VERTICAL = rl,
        Jo.LAYOUT_TYPE_TWO_SIDE = el,
        Zo.isHorizontalDirection = ys;
    var sl = function (t) {
        this.graph = t
    };
    sl.prototype = {
        hGap: 50,
        vGap: 50,
        parentChildrenDirection: Ja,
        layoutType: il,
        defaultSize: {
            width: 50,
            height: 60
        },
        getNodeSize: function (t) {
            if (this.graph._8t._mwq) {
                var i = this.graph.getUI(t);
                if (i)
                    return i._fi
            }
            return t.image && t.image.bounds ? {
                    width: t.image.bounds.width,
                    height: t.image.bounds.height
                }
                : this.defaultSize
        },
        _mzr: function (t, i) {
            if (this.isLayoutable(t)) {
                var e = this.getNodeSize(t),
                    n = t.id,
                    r = (t.parentChildrenDirection, i ? this._9w[i.id] : this._mxd);
                this._9w[n] = new ol(t.hGap || this.hGap, t.vGap || this.vGap, t.layoutType || this.layoutType, t.parentChildrenDirection, r, t, e.width, e.height)
            }
        },
        _9w: null,
        _mxd: null,
        _la: function () {
            this._9w = null,
                this._mxd = null
        },
        getLayoutResult: function (t) {
            var i,
                e,
                n,
                r,
                s = this.graph;
            t instanceof Object && (i = t.x, e = t.y, s = t.root || this.graph, n = t.bounds, r = t.undirected),
                this._9w = {},
                this._mxd = new ol,
                this._mxd._mc(this.hGap, this.vGap, this.parentChildrenDirection, this.layoutType);
            var o = {},
                h = Al(s, this._mzr, this, !1, r);
            return h && (this._mxd._g1(i || 0, e || 0, o), n && n.set(this._mxd.x, this._mxd.y, this._mxd.width, this._mxd.height)),
                this._la(),
                o
        },
        doLayout: function (t, i) {
            if (L(t)) {
                var e = t,
                    n = 0;
                L(i) && (n = i),
                    t = {
                        x: e,
                        y: n
                    },
                    i = !0
            }
            return B(this, sl, "doLayout", [t, i])
        }
    },
        k(sl, Xa);
    var ol = function (t, i, e, n, r, s, o, h) {
        this._m0 = t || 0,
            this._m2 = i || 0,
            this.layoutType = e,
            this.parentChildrenDirection = n,
            this.parentBounds = r,
        r && r._gd(this),
            this.node = s,
            this._em = o,
            this._mzt = h
    };
    ol.prototype = {
        _mc: function (t, i, e, n) {
            this._m0 = t,
                this._m2 = i,
                this.parentChildrenDirection = e,
                this.layoutType = n
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
            this._fe || (this._fe = []),
                this._fe.push(t)
        },
        _mzv: function (t, i, e, n) {
            var r = new io;
            return e(this._fe, function (e) {
                e._3k(t, i),
                    r.add(e),
                    n ? t += e.width + this._m0 : i += e.height + this._m2
            }, this),
                r
        },
        _8l: function (t, i, e, n, r) {
            var s,
                o = n ? this._m0 : this._m2,
                h = n ? this._m2 : this._m0,
                a = n ? "width" : "height",
                l = n ? "height" : "width",
                _ = n ? "_em" : "_mzt",
                u = n ? "_mzt" : "_em",
                d = n ? "hostDX" : "hostDY",
                f = n ? "hostDY" : "hostDX",
                v = new io,
                g = 0,
                E = 0,
                m = [],
                p = 0,
                y = 0;
            e(this._fe, function (e) {
                var r = y >= E;
                e._inheritedParentChildrenDirection = r ? n ? Ka : Qa : n ? Va : Ja,
                    e._3k(t, i),
                    r ? (m.push(e), g = Math.max(g, e[a]), E += e[l] + h) : (s || (s = []), s.push(e), p = Math.max(p, e[a]), y += e[l] + h)
            }, this),
                E -= h,
                y -= h;
            var T = Math.max(E, y),
                w = o,
                O = 0;
            this.node && (r && (w += this[_] + o, T > this[u] ? this[f] = (T - this[u]) / 2 : O = (this[u] - T) / 2), this[d] = g + w / 2 - this[_] / 2);
            var A = 0,
                x = O;
            return c(m, function (t) {
                n ? t.offset(g - t[a], x) : t.offset(x, g - t[a]),
                    x += h + t[l],
                    v.add(t)
            }, this),
                s ? (x = O, A = g + w, c(s, function (t) {
                    n ? t.offset(A, x) : t.offset(x, A),
                        x += h + t[l],
                        v.add(t)
                }, this), v) : v
        },
        offset: function (t, i) {
            this.x += t,
                this.y += i,
                this.nodeX += t,
                this.nodeY += i,
                this._7w(t, i)
        },
        _mxf: function (t, i) {
            return 2 * this.cx - t - i - t
        },
        _mxh: function (t, i) {
            return 2 * this.cy - t - i - t
        },
        _m3: function (t) {
            if (this._fe && 0 != this._fe.length) {
                if (t)
                    return this.node && (this.nodeX += this._mxf(this.nodeX, this._em)), void c(this._fe, function (t) {
                        t.offset(this._mxf(t.x, t.width), 0)
                    }, this);
                this.node && (this.nodeY += this._mxh(this.nodeY, this._mzt)),
                    c(this._fe, function (t) {
                        t.offset(0, this._mxh(t.y, t.height))
                    }, this)
            }
        },
        _7w: function (t, i) {
            this._fe && c(this._fe, function (e) {
                e.offset(t, i)
            }, this)
        },
        _3k: function (t, i) {
            return this.x = t || 0,
                this.y = i || 0,
                this._fe && 0 != this._fe.length ? void this._1m(this.x, this.y, this.layoutType) : void (this.node && (this.width = this._em, this.height = this._mzt, this.nodeX = this.x, this.nodeY = this.y))
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
            }),
            this._fe && c(this._fe, function (i) {
                i._7u(t)
            }, this)
        },
        _g1: function (t, i, e) {
            this._3k(t, i),
                this._7u(e)
        },
        _1m: function (t, i, n) {
            var r,
                s = t,
                o = i;
            !this.parentChildrenDirection && this.parentBounds && (this.parentChildrenDirection = this._inheritedParentChildrenDirection || this.parentBounds.parentChildrenDirection);
            var h = this.parentChildrenDirection,
                a = ys(h);
            if (this.node) {
                r = h == Za || h == tl;
                var l = Ts(h);
                r || (a ? t += this._em + this._m0 : i += this._mzt + this._m2)
            }
            var _,
                u = this.node && this.node.layoutReverse ? g : c;
            if (n == el)
                _ = this._8l(t, i, u, !a, r);
            else {
                var d;
                d = n == il ? !a : n == nl,
                    _ = this._mzv(t, i, u, d, r)
            }
            var f = 0,
                v = 0;
            _ && !_.isEmpty() && (f = _.width, v = _.height, this.add(_)),
            this.node && (this.nodeX = s, this.nodeY = o, this.hostDX !== e || this.hostDY !== e ? (this.nodeX += this.hostDX || 0, this.nodeY += this.hostDY || 0) : a ? this.nodeY += v / 2 - this._mzt / 2 : this.nodeX += f / 2 - this._em / 2, this.addRect(this.nodeX, this.nodeY, this._em, this._mzt), l && this._m3(a))
        },
        node: null,
        uiBounds: null
    },
        k(ol, io),
        Os.prototype = {
            layoutDatas: null,
            isMovable: function (t) {
                return !this.currentMovingNodes[t.id]
            },
            _72: !1,
            _3i: function () {
                this._72 = !0,
                    this.graph._1l.addListener(this._9b, this),
                    this.graph._1i.addListener(this._2e, this)
            },
            _1z: function () {
                this._72 = !1,
                    this.graph._1l.removeListener(this._9b, this),
                    this.graph._1i.removeListener(this._2e, this)
            },
            invalidateFlag: !0,
            invalidateLayoutDatas: function () {
                this.invalidateFlag = !0
            },
            resetLayoutDatas: function () {
                return this.invalidateFlag = !1,
                    this.layoutDatas = ws.call(this)
            },
            _2e: function (t) {
                ms.ELEMENT_MOVE_START == t.kind ? (this.currentMovingNodes = {}, t.datas.forEach(function (t) {
                    this.currentMovingNodes[t.id] = t
                }, this)) : ms.ELEMENT_MOVE_END == t.kind && (this.currentMovingNodes = {})
            },
            _9b: function () {
                this.invalidateLayoutDatas()
            },
            isRunning: function () {
                return this.timer && this.timer._f2()
            },
            getLayoutResult: function () {
                this.stop(),
                    this.resetLayoutDatas();
                for (var t = this.getMaxIterations(this.layoutDatas.nodeCount || 0, this.layoutDatas.edgeCount || 0), i = 0; t > i && this.step(!1) !== !1; i++) ;
                var e = this.layoutDatas.nodes;
                return this.onstop(),
                    e
            },
            _lv: function () {
                return !1
            },
            step: function (t) {
                if (t === !1)
                    return this._lv(this.timeStep);
                (this.invalidateFlag || !this.layoutDatas) && this.resetLayoutDatas();
                var i = this._lv(t),
                    e = this.layoutDatas.nodes;
                for (var n in e) {
                    var r = e[n],
                        s = r.node;
                    this.isMovable(s) ? s.setLocation(r.x, r.y) : (r.x = s.x, r.y = s.y, r.vx = 0, r.vy = 0)
                }
                return i
            },
            onstop: function () {
                delete this.layoutDatas
            },
            start: function (t) {
                if (this.isRunning())
                    return !1;
                this._72 || this._3i(),
                this._j5r || (this._j5r = j(this, function (t) {
                    return this.step(t)
                })),
                    this.invalidateLayoutDatas(),
                    this.timer = new Xo(this._j5r);
                var i = this;
                return this.timer._lc(function () {
                    i.onstop(),
                    t && t()
                }),
                    !0
            },
            stop: function () {
                this.timer && (this.timer._lo(), this.onstop())
            },
            getMaxIterations: function (t) {
                return Math.min(1e3, 3 * t + 10)
            },
            minEnergyFunction: function (t, i) {
                return 10 + Math.pow(t + i, 1.4)
            },
            resetGraph: function () {
                this._72 || this._3i(),
                    this.resetLayoutDatas()
            },
            destroy: function () {
                this.stop(),
                    this._1z()
            }
        },
        k(Os, Xa);
    var hl = function (t, i, e, n) {
        this.graph = t,
        L(i) && (this.radius = i),
        L(e) && (this.gap = e),
        L(n) && (this.startAngle = n)
    };
    Zo.BalloonLayouter = hl;
    var al = "proportional",
        ll = "regular",
        _l = "uniform",
        ul = "variable";
    Jo.ANGLE_SPACING_PROPORTIONAL = al,
        Jo.ANGLE_SPACING_REGULAR = ll,
        Jo.RADIUS_MODE_UNIFORM = _l,
        Jo.RADIUS_MODE_VARIABLE = ul,
        hl.prototype = {
            angleSpacing: al,
            radiusMode: ul,
            gap: 4,
            radius: 50,
            startAngle: 0,
            _9w: null,
            _mxd: null,
            _la: function () {
                this._9w = null,
                    this._mxd = null
            },
            getLayoutResult: function (t) {
                var i,
                    e = 0,
                    n = 0,
                    r = this.graph;
                t instanceof Object && (e = t.cx || 0, n = t.cy || 0, r = t.root || this.graph, i = t.bounds),
                    this._9w = {},
                    this._mxd = new cl(this);
                var s = {},
                    o = xl(r, this._mzr, this);
                return o && (this._mxd._fe && 1 == this._mxd._fe.length && (this._mxd = this._mxd._fe[0]), this._mxd._ev(!0), this._mxd._5i(e, n, this.startAngle, s, i)),
                    this._la(),
                    s
            },
            _mzr: function (t, i) {
                if (this.isLayoutable(t)) {
                    var e = i ? this._9w[i.id] : this._mxd;
                    this._9w[t.id] = new cl(this, t, e)
                }
            },
            defaultSize: 40,
            getRadius: function () {
                return this.radius
            },
            getNodeSize: function (t) {
                if (this.graph._8t._mwq) {
                    var i = this.graph.getUI(t);
                    if (i)
                        return (i._fi.width + i._fi.height) / 2
                }
                return this.defaultSize
            },
            getGap: function () {
                return this.gap
            },
            _3b: function (t, i, e) {
                return this.getNodeSize(t, i, e) + this.getGap(t, i, e)
            }
        };
    var dl = function (t) {
            var i,
                e = this._fe.length,
                n = 0,
                r = 0;
            if (c(this._fe, function (t) {
                var e = t._ev();
                1 > e && (e = 1),
                    r += e,
                e > n && (n = e, i = t)
            }, this), e > 1) {
                var s = 0,
                    o = {},
                    h = r / e / 3;
                r = 0,
                    c(this._fe, function (t) {
                        var i = t._m7;
                        h > i && (i = h),
                            o[t.id] = i,
                            r += i
                    }, this);
                var a = vl / r;
                c(this._fe, function (i, e) {
                    var n = o[i.id],
                        r = n * a;
                    0 === e && (s = t ? -r / 2 : -r),
                        i._l7 = s + r / 2,
                        i._l9 = r,
                        s += r
                }, this)
            }
            return [n, i._l9]
        },
        fl = function (t) {
            var i = this._8j,
                e = 2 * Math.PI / i,
                n = 0,
                r = t ? 0 : i > 1 ? -e / 2 : 0;
            return c(this._fe, function (t) {
                t._l7 = r % vl,
                    r += e,
                    t._l9 = e;
                var i = t._ev();
                i > n && (n = i)
            }, this),
                [n, e]
        },
        cl = function (t, i, e) {
            this.layouter = t,
            i && (this._m8 = i, this.id = i.id),
            e && (e._gd(this), e._m5 = !1, this._l5 = e._l5 + 1)
        },
        vl = 2 * Math.PI;
    cl.prototype = {
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
            this._fe || (this._fe = []),
                this._fe.push(t),
                t.parent = this
        },
        _gq: function (t) {
            if (this._l7 = (this._l7 + t) % vl, this._fe) {
                var i = this._fe.length;
                if (1 == i)
                    return void this._fe[0]._gq(this._l7);
                t = this._l7 + Math.PI,
                    c(this._fe, function (i) {
                        i._gq(t)
                    }, this)
            }
        },
        _8j: 0,
        _7c: function (t) {
            if (this._m8 && (this._gp = this.layouter._3b(this._m8, this._l5, this._m5) / 2), !this._fe)
                return null;
            this._gp;
            return this._8j = this._fe.length,
                this._8j <= 2 || this.layouter.angleSpacing == ll ? fl.call(this, t) : dl.call(this, t)
        },
        _ev: function (t) {
            var i = this._7c(t);
            if (!i)
                return this._m7 = this._gp;
            var e = i[0],
                n = i[1],
                r = this.layouter.getRadius(this._m8, this._l5);
            if (r < this._gp && (r = this._gp), this._et = r, this._gp + e > r && (r = this._gp + e), e && this._8j > 1 && n < Math.PI) {
                var s = e / Math.sin(n / 2);
                s > r && (r = s)
            }
            return this._ke = r,
                this._m7 = r + e,
            this._m8 && this._fe && this.layouter.radiusMode == ul && c(this._fe, function (t) {
                var i = t._m7;
                1 == t._8j && (i /= 2);
                var e = this._gp + i,
                    n = t._l9;
                if (n && n < Math.PI) {
                    var r = Math.sin(n / 2),
                        s = i / r;
                    s > i && (i = s)
                }
                e > i && (i = e),
                    t._d5 = i
            }, this),
            (!this._m8 || t) && this._gq(0),
                this._m7
        },
        _5i: function (t, i, e, n, r) {
            if (this._m8 && (n[this._m8.id] = {
                x: t,
                y: i,
                node: this._m8
            }, r && r.addRect(t - this._gp / 2, i - this._gp / 2, this._gp, this._gp)), this._fe) {
                if (!this._m8 && 1 == this._fe.length)
                    return void this._fe[0]._5i(t, i, e, n, r);
                e = e || 0;
                var s = this._ke,
                    o = this._et;
                c(this._fe, function (h) {
                    var a = s;
                    h._d5 && (a = Math.max(o, h._d5));
                    var l = h._l7 + e,
                        _ = t + a * Math.cos(l),
                        u = i + a * Math.sin(l);
                    h._5i(_, u, e, n, r)
                }, this)
            }
        }
    },
        k(hl, Xa);
    var gl = function () {
        M(this, gl, arguments)
    };
    k(gl, As);
    var El = function (t, i) {
        this.node1 = t,
            this.node2 = i,
            t == i ? (this.isLooped = !0, this._l4 = t._l1) : this._l4 = new Xs,
            this._8i = [],
            this._gs = Ws.EDGE_BUNDLE_EXPANDED
    };
    Ws.EDGE_BUNDLE_EXPANDED = !0,
        El.prototype = {
            node1: null,
            node2: null,
            _l4: null,
            _gs: Ws.EDGE_BUNDLE_EXPANDED,
            _8i: null,
            _gu: null,
            agentEdge: null,
            _mxj: function (t, i, e) {
                this._l4.forEach(function (n) {
                    return e && n.$from != e && n.fromAgent != e ? void 0 : t.call(i, n)
                })
            },
            _5e: 0,
            _58: 0,
            _im: function (t, i) {
                return this._l4.add(t) === !1 ? !1 : (i == this.node1 ? this._5e++ : this._58++, this._mwq ? void this._17(t) : void (this._mwq = !0))
            },
            _d8: function (t, i) {
                return this._l4.remove(t) === !1 ? !1 : (i == this.node1 ? this._5e-- : this._58--, this._17(t), void this._l4.forEach(function (t) {
                    t._edgeBundleInvalidateFlag = !0,
                        t.__4m = !0
                }, this))
            },
            _17: function (t) {
                this._mzzBindableFlag = !0,
                    this._6f = !0,
                    t._edgeBundleInvalidateFlag = !0,
                    t.__4m = !0
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
                return t && this._6f && this._fr(t),
                this._l4.length > 1 && this._8i.length > 1
            },
            _ik: function (t) {
                return this._8i.indexOf(t)
            },
            getYOffset: function (t) {
                return this._gu[t.id]
            },
            _42: function (t) {
                if (!this.canBind())
                    return void (this._gu = {});
                var i = {},
                    e = this._8i.length;
                if (!(2 > e)) {
                    var n = 0,
                        r = this._8i[0];
                    i[r.id] = 0;
                    for (var s = 1; e > s; s++) {
                        r = this._8i[s];
                        var o = t.getStyle(r, ea.EDGE_BUNDLE_GAP) || Oa[ea.EDGE_BUNDLE_GAP];
                        n += o,
                            i[r.id] = n
                    }
                    if (!this.isLooped)
                        for (var h = n / 2, s = 0; e > s; s++)
                            r = this._8i[s], i[r.id] -= h;
                    this._gu = i
                }
            },
            _mxk: function (t) {
                return this._gs == t ? !1 : (this._gs = t, this._mzz(), !0)
            },
            reverseExpanded: function () {
                return this._mxk(!this._gs)
            },
            _1c: function () {
                this._mzzBindableFlag = !1,
                    this._8i.length = 0;
                var t;
                this._l4.forEach(function (i) {
                    if (i.isBundleEnabled()) {
                        if (!this.isPositiveOrder(i))
                            return t || (t = []), void t.push(i);
                        this._8i.push(i)
                    }
                }, this),
                t && (this._8i = t.concat(this._8i))
            },
            _dt: function (t) {
                return t == this.agentEdge || !this.canBind() || this._gs
            },
            _fr: function (t) {
                this._6f = !1,
                    this._l4.forEach(function (t) {
                        t._edgeBundleInvalidateFlag = !1
                    }),
                this._mzzBindableFlag && this._1c();
                var i = this._gs,
                    e = this.canBind(),
                    n = !e || i;
                c(this._8i, function (t) {
                    t._$s = !0,
                        t._i5InBundle = n,
                    n && (t.__4m = !0)
                }, this),
                    n ? this._9t(null, t) : (this._9t(this._8i[0], t), this.agentEdge._i5InBundle = !0, this.agentEdge.__4m = !0),
                n && this._42(t)
            },
            _9t: function (t, i) {
                if (t != this.agentEdge) {
                    var e = this.agentEdge;
                    return this.agentEdge = t,
                    i && i._4s(new co(this, "agentEdge", t, e)),
                        !0
                }
            }
        },
        Z(El.prototype, {
            bindableEdges: {
                get: function () {
                    return this._8i
                }
            },
            edges: {
                get: function () {
                    return this._l4._jz
                }
            },
            length: {
                get: function () {
                    return this._l4 ? this._l4.length : 1
                }
            },
            expanded: {
                get: function () {
                    return this._gs
                },
                set: function (t) {
                    return this._gs == t ? !1 : (this._gs = t, void this._mzz())
                }
            }
        });
    var ml = function () {
            function t(t, i) {
                this.node = t,
                    this.body = i
            }

            function i() {
                this.stack = [],
                    this.popIdx = 0
            }

            var e = -1e6,
                n = .8;
            i.prototype = {
                isEmpty: function () {
                    return 0 === this.popIdx
                },
                push: function (i, e) {
                    var n = this.stack[this.popIdx];
                    n ? (n.node = i, n.body = e) : this.stack[this.popIdx] = new t(i, e),
                        ++this.popIdx
                },
                pop: function () {
                    return this.popIdx > 0 ? this.stack[--this.popIdx] : void 0
                },
                reset: function () {
                    this.popIdx = 0
                }
            };
            var r = [],
                s = new i,
                o = function () {
                    this.body = null,
                        this.quads = [],
                        this.mass = 0,
                        this.massX = 0,
                        this.massY = 0,
                        this.left = 0,
                        this.top = 0,
                        this.bottom = 0,
                        this.right = 0,
                        this.isInternal = !1
                },
                h = [],
                a = 0,
                l = function () {
                    var t;
                    return h[a] ? (t = h[a], t.quads[0] = null, t.quads[1] = null, t.quads[2] = null, t.quads[3] = null, t.body = null, t.mass = t.massX = t.massY = 0, t.left = t.right = t.top = t.bottom = 0, t.isInternal = !1) : (t = new o, h[a] = t),
                        ++a,
                        t
                },
                _ = l(),
                u = function (t, i) {
                    var e = Math.abs(t.x - i.x),
                        n = Math.abs(t.y - i.y);
                    return 1e-8 > e && 1e-8 > n
                },
                d = function (t) {
                    for (s.reset(), s.push(_, t); !s.isEmpty();) {
                        var i = s.pop(),
                            e = i.node,
                            n = i.body;
                        if (e.isInternal) {
                            var r = n.x,
                                o = n.y;
                            e.mass = e.mass + n.mass,
                                e.massX = e.massX + n.mass * r,
                                e.massY = e.massY + n.mass * o;
                            var h = 0,
                                a = e.left,
                                d = (e.right + a) / 2,
                                f = e.top,
                                c = (e.bottom + f) / 2;
                            if (r > d) {
                                h += 1;
                                var v = a;
                                a = d,
                                    d += d - v
                            }
                            if (o > c) {
                                h += 2;
                                var g = f;
                                f = c,
                                    c += c - g
                            }
                            var E = e.quads[h];
                            E || (E = l(), E.left = a, E.top = f, E.right = d, E.bottom = c, e.quads[h] = E),
                                s.push(E, n)
                        } else if (e.body) {
                            var m = e.body;
                            if (e.body = null, e.isInternal = !0, u(m, n)) {
                                if (e.right - e.left < 1e-8)
                                    return;
                                do {
                                    var p = Math.random(),
                                        y = (e.right - e.left) * p,
                                        T = (e.bottom - e.top) * p;
                                    m.x = e.left + y,
                                        m.y = e.top + T
                                } while (u(m, n))
                            }
                            s.push(e, m),
                                s.push(e, n)
                        } else
                            e.body = n
                    }
                },
                f = function (t) {
                    var i,
                        s,
                        o,
                        h,
                        a = r,
                        l = 1,
                        u = 0,
                        d = 1;
                    for (a[0] = _; l;) {
                        var f = a[u],
                            c = f.body;
                        l -= 1,
                            u += 1,
                            c && c !== t ? (s = c.x - t.x, o = c.y - t.y, h = Math.sqrt(s * s + o * o), 0 === h && (s = (Math.random() - .5) / 50, o = (Math.random() - .5) / 50, h = Math.sqrt(s * s + o * o)), i = e * c.mass * t.mass / (h * h), -1e3 > i && (i = -1e3), i /= h, t.fx = t.fx + i * s, t.fy = t.fy + i * o) : (s = f.massX / f.mass - t.x, o = f.massY / f.mass - t.y, h = Math.sqrt(s * s + o * o), 0 === h && (s = (Math.random() - .5) / 50, o = (Math.random() - .5) / 50, h = Math.sqrt(s * s + o * o)), (f.right - f.left) / h < n ? (i = e * f.mass * t.mass / (h * h), -1e3 > i && (i = -1e3), i /= h, t.fx = t.fx + i * s, t.fy = t.fy + i * o) : (f.quads[0] && (a[d] = f.quads[0], l += 1, d += 1), f.quads[1] && (a[d] = f.quads[1], l += 1, d += 1), f.quads[2] && (a[d] = f.quads[2], l += 1, d += 1), f.quads[3] && (a[d] = f.quads[3], l += 1, d += 1)))
                    }
                },
                c = function (t, i) {
                    e = i;
                    var n,
                        r = Number.MAX_VALUE,
                        s = Number.MAX_VALUE,
                        o = Number.MIN_VALUE,
                        h = Number.MIN_VALUE,
                        u = t,
                        f = u.length;
                    for (n = f; n--;) {
                        var c = u[n].x,
                            v = u[n].y;
                        r > c && (r = c),
                        c > o && (o = c),
                        s > v && (s = v),
                        v > h && (h = v)
                    }
                    var g = o - r,
                        E = h - s;
                    for (g > E ? h = s + g : o = r + E, a = 0, _ = l(), _.left = r, _.right = o, _.top = s, _.bottom = h, n = f; n--;)
                        d(u[n], _)
                };
            return {
                init: c,
                update: f
            }
        },
        pl = function (t) {
            t.fx -= t.x * this.attractive,
                t.fy -= t.y * this.attractive
        },
        yl = function (t) {
            if (0 != t.k) {
                var i = this._mzl,
                    e = t.from,
                    n = t.to,
                    r = n.x - e.x,
                    s = n.y - e.y,
                    o = r * r + s * s,
                    h = Math.sqrt(o) || .1,
                    a = (h - i) * t.k * this.elastic;
                a /= h;
                var l = a * r,
                    _ = a * s;
                n.fx -= l,
                    n.fy -= _,
                    e.fx += l,
                    e.fy += _
            }
        };
    As.prototype = {
        appendNodeInfo: function (t, i) {
            i.mass = t.layoutMass || 1,
                i.fx = 0,
                i.fy = 0,
                i.vx = 0,
                i.vy = 0
        },
        appendEdgeInfo: function (t, i) {
            i.k = t.layoutElasticity || 1
        },
        setMass: function (t, i) {
            t.layoutMass = i,
            this.layoutDatas && this.layoutDatas.nodes && (t = this.layoutDatas.nodes[t.id], t && (t.mass = i))
        },
        setElasticity: function (t, i) {
            t.layoutElasticity = i,
            this.layoutDatas && this.layoutDatas.edges && (t = this.layoutDatas.edges[t.id], t && (t.k = i))
        },
        _mzl: 50,
        _i7: .5,
        timeStep: .15,
        repulsion: 50,
        attractive: .1,
        elastic: 3,
        _mb: 1e3,
        _ki: function (t) {
            return this._mb + .3 * (t - this._mb)
        },
        _lv: function (t, i) {
            var e = (Date.now(), this.layoutDatas.nodes);
            for (var n in e) {
                var r = e[n];
                i && (r.x += Math.random() - .5, r.y += Math.random() - .5),
                    pl.call(this, r)
            }
            var s = this.layoutDatas.groups;
            if (s)
                for (var n in s) {
                    var o = s[n],
                        h = o.children,
                        a = 0,
                        l = 0;
                    h.forEach(function (t) {
                        a += t.x,
                            l += t.y
                    }),
                        a /= h.length,
                        l /= h.length;
                    var _ = 10 * this.attractive;
                    h.forEach(function (t) {
                        t.fx -= (t.x - a) * _,
                            t.fy -= (t.y - l) * _
                    })
                }
            var u = this._nbodyForce;
            u || (u = this._nbodyForce = ml()),
                u.init(this.layoutDatas.nodesArray, -this.repulsion * this.repulsion * this.repulsion);
            for (var n in e)
                u.update(e[n]);
            if (this.elastic) {
                var d = this.layoutDatas.edges;
                for (var n in d)
                    yl.call(this, d[n])
            }
            return this._m9(t)
        },
        _m9: function (t) {
            var i = this.layoutDatas.minEnergy,
                e = (this.layoutDatas.currentEnergy, this.layoutDatas.nodes),
                t = this.timeStep,
                n = 0,
                r = this._i7;
            for (var s in e) {
                var o = e[s],
                    h = o.fx / o.mass,
                    a = o.fy / o.mass,
                    l = o.vx += h * t,
                    _ = o.vy += a * t;
                o.x += l * t,
                    o.y += _ * t,
                i > n && (n += 2 * (l * l + _ * _)),
                    o.fx = 0,
                    o.fy = 0,
                    o.vx *= r,
                    o.vy *= r
            }
            return this.layoutDatas.currentEnergy = n,
            n >= i
        }
    },
        k(As, Os),
        Zo.SpringLayouter = As;
    var Tl = function (t) {
        this.locations = t
    };
    Tl.prototype = {
        oldLocations: null,
        _f3: null,
        duration: 700,
        animationType: qo.easeOutStrong,
        _71: function (t) {
            if (this._f3 = t, this.oldLocations = {}, t)
                for (var i in t) {
                    var e = t[i],
                        n = e.node;
                    this.oldLocations[i] = {
                        x: n.x,
                        y: n.y
                    }
                }
        },
        setLocation: function (t, i, e) {
            t.setLocation(i, e)
        },
        forEach: function (t, i) {
            for (var e in this.locations) {
                var n = this.oldLocations[e],
                    r = this.locations[e];
                t.call(i, n, r)
            }
        },
        _kg: function (t) {
            this.forEach(function (i, e) {
                var n = e.node,
                    r = i.x + (e.x - i.x) * t,
                    s = i.y + (e.y - i.y) * t;
                this.setLocation(n, r, s)
            }, this)
        },
        stop: function () {
            this._mwnimate && this._mwnimate._lo()
        },
        start: function (t) {
            this._mwnimate ? (this._mwnimate._lo(), this._mwnimate._j2 = this.duration, this._mwnimate._ejType = this.animationType, this._mwnimate._onfinish = this._onfinish) : this._mwnimate = new Vo(this._kg, this, this.duration, this.animationType),
                this._mwnimate._lc(t)
        }
    },
        Z(Tl.prototype, {
            locations: {
                get: function () {
                    return this._f3
                },
                set: function (t) {
                    this._f3 != t && this._71(t)
                }
            }
        });
    var wl = function (t) {
            var i = new Xs;
            return t.forEach(function (t) {
                t instanceof Kh && (t.hasInEdge() || i.add(t._dz || t))
            }),
                i
        },
        Ol = function (t, i, e, n, r, s) {
            if (i instanceof Ao)
                return t(i, e, n, r, s), i;
            if (i instanceof xa) {
                var o = new Xs;
                i._kzModel.forEach(function (t) {
                    return i.isVisible(t) ? t._i9() && t._gs && t.hasChildren() ? void (t.$location && (t.$location.invalidateFlag = !1)) : void o.add(t) : void 0
                }),
                    i = o
            }
            var i = wl(i);
            return c(i, function (i) {
                t(i, e, n, r, s)
            }),
                i
        },
        Al = function (t, i, e, n, r) {
            return Ol(Ll, t, i, e, n, r)
        },
        xl = function (t, i, e, n, r) {
            return Ol(bl, t, i, e, n, r)
        };
    Yn.prototype.forEachByTopoDepthFirstSearch = function (t, i, e, n) {
        Al(this, t, i, e, n)
    },
        Yn.prototype.forEachByTopoBreadthFirstSearch = function (t, i, e, n) {
            xl(this, t, i, e, n)
        };
    var Ll = function (t, i, e, n, r) {
            function s(t, i, e, n, r, o, h, a) {
                t._marker = o,
                n || i.call(e, t, a, h),
                    xs(t, function (a) {
                        s(a, i, e, n, r, o, h + 1, t)
                    }, a, r, o),
                n && i.call(e, t, a, h)
            }

            s(t, i, e, n, r, {}, 0)
        },
        bl = function (t, i, e, n, r) {
            function s(t, i, e, n, r, o, h) {
                var a,
                    l = t.length;
                t.forEach(function (t, s) {
                    var _ = t.v;
                    _._marker = o,
                    n || i.call(e, _, t._from, h, s, l),
                        xs(_, function (t) {
                            a || (a = []),
                                t._marker = o,
                                a.push({
                                    v: t,
                                    _from: _
                                })
                        }, _, r, o)
                }),
                a && s(a, i, e, n, r, o, h + 1),
                n && t.forEach(function (t, n) {
                    i.call(e, t.v, t._from, h, n, l)
                })
            }

            s([{
                v: t
            }
            ], i, e, n, r, {}, 0)
        };
    Zo.toColor = V,
        Zo.log = ti,
        Zo.error = ei,
        Zo.trace = ii,
        Zo.isIE = Is,
        Zo.isOpera = Ss,
        Zo.isWebkit = Ds,
        Zo.isGecko = Ps,
        Zo.isFirefox = Ns,
        Zo.isSafari = ks,
        Zo.isChrome = zs,
        Zo.isMac = Ms,
        Zo.DefaultStyles = Oa,
        Zo.Defaults = Ws,
        Zo.Styles = ea,
        Zo.Consts = Jo,
        Zo.Graphs = kh,
        Zo.Graph = xa,
        Zo.BaseUI = ta,
        Zo.ElementUI = fa,
        Zo.NodeUI = Jn,
        Zo.EdgeUI = Zn,
        Zo.LabelUI = va,
        Zo.ImageUI = ca,
        Zo.Shapes = Jh,
        Zo.Path = Ph,
        Zo.Gradient = gh,
        Zo.InteractionEvent = ms,
        Zo.Element = Xh,
        Zo.Node = Kh,
        Zo.Edge = Vh,
        Zo.GraphModel = Yn,
        Zo.EdgeBundle = El,
        Zo.TreeLayouter = sl,
        Zo.name = "Qunee for HTML5";
    Zo.version = "2.5 beta1",
        Zo.about = "Qunee - Diagramming Components for HTML5/Canvas",
        Zo.copyright = "Copyright © 2015 Qunee.com",
        Zo.css = fi;
    return Zo.IDrawable = La,
        ti = function () {
        },
        Zo.publishDate = "2/2/2016",
        Zo
}
(window, document);
