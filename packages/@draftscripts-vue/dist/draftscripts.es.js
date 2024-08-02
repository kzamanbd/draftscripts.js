(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/icon?family=Material+Icons";@import"https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css";:root{--blue: #026cd1;--bs-primary: var(--blue);--black: #000000;--white: #ffffff;--ice-white: #fbfcfe;--bluish-white: #e2edfa;--border-color: #e2edfa;--red: #df2a43;--bs-danger: var(--red);--redish-white: #f5bec6;--yellow: #fcc428;--yellowish-white: #fff7e3;--green: #2cda94;--greenish-white: #d2fccc;--gray: #526471;--text-red: #df2a43;--text-black: #36454f;--text-label: #36454f}.dialog__box{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999}.dialog__overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#0000004d;z-index:9998}.dialog__container{width:400px;min-height:250px;padding:1.5rem;background-color:#fff;border-radius:6px;box-shadow:0 1px 3px #0000001a,0 1px 2px #0000000f;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;gap:2rem;position:relative}.loading__bar{width:100%;height:4px;background-color:var(--blue);position:absolute;top:0;left:0;border-radius:6px 6px 0 0}.dialog__container.dialog__progress{justify-content:center}.dialog__icon{width:4.5rem;height:4.5rem;position:relative;color:var(--blue);background-color:var(--bluish-white);border-radius:50%;display:flex;justify-content:center;align-items:center;margin:auto}.dialog__icon .material-icons{font-size:3rem}.dialog__progress .dialog__icon{background:none;box-shadow:none}.dialog__progress .dialog__btn-group{display:none}.dialog__success .dialog__icon{color:var(--green);background-color:var(--greenish-white)}.dialog__error .dialog__icon{color:var(--red);background-color:var(--redish-white)}.dialog__warning .dialog__icon{color:var(--yellow);background-color:var(--yellowish-white)}.dialog__content{align-self:stretch;min-height:8rem;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}.dialog__title{align-self:stretch;color:#27272a;font-size:1.125rem;font-weight:600;margin:5px auto;text-align:center}.dialog__message{align-self:stretch;color:#27272a;font-size:.875rem;font-weight:400;text-align:center}.dialog__btn-group{align-self:stretch;display:flex;justify-content:center;align-items:flex-start;gap:1rem}.dialog__btn{min-width:130px;border-radius:.5rem;padding:.375rem 0;display:flex;justify-content:center;align-items:center;gap:.75rem;cursor:pointer;font-size:var(--font14);font-weight:600;line-height:1.8;color:#fff}.dialog__btn.confirm{color:#fff;background-color:var(--blue);border:1px solid var(--blue);background-position:center;transition:background .8s}.dialog__btn.success{background-color:var(--green);border:1px solid var(--green)}.dialog__btn.warning{background-color:var(--yellow);border:1px solid var(--yellow)}.dialog__btn.error{border:1px solid var(--red);color:var(--red);background:#fff}.dialog__btn.error:hover{color:var(--red);border:1px solid var(--red);background-color:#fff3f3}.progress__icon{display:flex;align-items:center;justify-content:center;font-size:3rem;background-color:var(--bluish-white);width:65px;height:65px;border-radius:100px}.dialog__loader{animation:spin 1s linear infinite;border:5px solid var(--white);border-top:5px solid var(--blue);border-radius:50%;height:45px;width:45px}@keyframes scaleIn{0%{transform:scale(.7);opacity:0}45%{transform:scale(1.05);opacity:1}80%{transform:scale(.95)}to{transform:scale(1);opacity:1}}@keyframes scaleOut{0%{transform:scale(1);opacity:1}to{transform:scale(.5);opacity:0}}@keyframes spin{to{border-top-color:var(--blue);transform:rotate(360deg)}}.scale-enter-active{animation:scaleIn .4s ease-out forwards}.scale-leave-active{animation:scaleOut .2s ease-out forwards}.tip-tap-button[data-v-0a9b024a]{overflow:visible;padding:0;margin:0;border-style:none;width:1.5rem;height:1.5rem;font-size:.875rem;line-height:1.25rem;text-align:center;text-transform:none;overflow-wrap:break-word;background-color:transparent;background-repeat:no-repeat;cursor:pointer}.tip-tap-icon[data-v-0a9b024a]{padding:0;margin:0;font-size:.875rem;font-style:normal;line-height:1.25rem;text-align:center;overflow-wrap:break-word;background-repeat:no-repeat;cursor:pointer}.tip-tap-divider[data-v-36e02fe0]{padding:0;margin-top:0;margin-bottom:0;margin-right:.5rem;margin-left:.5rem;width:1px;height:1.25rem;font-size:.875rem;letter-spacing:0;line-height:1.25rem;overflow-wrap:break-word;background-repeat:no-repeat}.dropdown-menu{background:var(--white);border:1px solid var(--gray-1);border-radius:.7rem;box-shadow:var(--shadow);display:flex;flex-direction:column;gap:.1rem;overflow:auto;padding:.4rem;position:relative}.dropdown-menu button{align-items:center;background-color:transparent;display:flex;gap:.25rem;text-align:left;width:100%}.dropdown-menu button:hover,.dropdown-menu button:hover.is-selected{background-color:var(--gray-3)}.dropdown-menu button.is-selected{background-color:var(--gray-2)}:root{--white: #fff;--black: #2e2b29;--black-contrast: #110f0e;--gray-1: rgba(61, 37, 20, .05);--gray-2: rgba(61, 37, 20, .08);--gray-3: rgba(61, 37, 20, .12);--gray-4: rgba(53, 38, 28, .3);--gray-5: rgba(28, 25, 23, .6);--green: #22c55e;--purple: #6a00f5;--purple-contrast: #5800cc;--purple-light: rgba(88, 5, 255, .05);--yellow-contrast: #facc15;--yellow: rgba(250, 204, 21, .4);--yellow-light: #fffae5;--red: #ff5c33;--red-light: #ffebe5}button,input,select,textarea{background:var(--gray-2);border-radius:.5rem;border:none;color:var(--black);font-family:inherit;font-size:.875rem;font-weight:500;line-height:1.15;margin:none;padding:.375rem .625rem;transition:all .2s cubic-bezier(.65,.05,.36,1)}.character-count{align-items:center;color:var(--gray-5);display:flex;font-size:.75rem;gap:.5rem;margin:.5rem 0}.character-count svg{color:var(--purple)}p.is-editor-empty:first-child:before{color:var(--gray-4);content:attr(data-placeholder);float:left;height:0;pointer-events:none}.is-empty:before{color:var(--gray-4);content:attr(data-placeholder);float:left;height:0;pointer-events:none}.tiptap-editor{overflow:auto;position:relative;padding:.25rem;margin:0;border-bottom-right-radius:.375rem;border-bottom-left-radius:.375rem;border-width:1px;border-style:solid;border-color:var(--border-color);font-size:.75rem;letter-spacing:0;line-height:1.25rem;overflow-wrap:break-word;background-repeat:no-repeat;max-height:240px}.tiptap-editor .tiptap:focus-visible{outline:2px solid var(--blue);outline-offset:2px}.tiptap-code-mode{border-bottom-right-radius:.375rem;border-bottom-left-radius:.375rem;border-width:1px;border-style:solid;width:100%;font-size:.75rem;letter-spacing:0;line-height:1.25rem}.tiptap-editor-toolbar1{display:flex;padding:.5rem;margin-top:.25rem;flex-wrap:wrap;flex:none;align-items:center;border-top-left-radius:.375rem;border-top-right-radius:.375rem;border-top-width:1px;border-style:solid;border-color:var(--border-color);font-size:1.25rem;letter-spacing:0;line-height:1.25rem;overflow-wrap:break-word;background-repeat:no-repeat}.tiptap-editor-toolbar2{display:flex;padding:.5rem;margin-left:0;margin-right:0;margin-bottom:0;flex-wrap:wrap;flex:none;align-items:center;border-top-width:1px;border-style:solid;border-color:var(--border-color);font-size:1.25rem;letter-spacing:0;line-height:1.25rem;overflow-wrap:break-word;background-repeat:no-repeat}.app-tip-tap-error{border:1px solid #e5484d;border-radius:3px}.ProseMirror{min-height:120px;padding:5px 10px;background-color:#f5f8fa}.ProseMirror p{margin:1em 0}.ProseMirror a{text-decoration:underline;color:#3451b2}.ProseMirror h1{font-size:2.25rem;line-height:2.5rem}.ProseMirror h2{font-size:1.875rem;line-height:2.25rem}.ProseMirror h3{font-size:1.5rem;line-height:2rem}.ProseMirror h4{font-size:1.25rem;line-height:1.75rem}.ProseMirror ul{display:block;list-style-type:disc;padding-left:.8rem}.ProseMirror ul li{display:list-item}.ProseMirror ol{display:block;list-style:decimal;padding-left:.8rem}.ProseMirror table{border-collapse:collapse;table-layout:fixed;width:100%;margin:0;overflow:hidden}.ProseMirror table td,.ProseMirror table th{min-width:1em;border:2px solid #363a3f;padding:3px 5px;vertical-align:top;box-sizing:border-box;position:relative}.ProseMirror table th>*{margin-bottom:0}.ProseMirror th{font-weight:700;text-align:left;background-color:#18191b}.ProseMirror .selectedCell:after{z-index:2;position:absolute;content:"";left:0;right:0;top:0;bottom:0;background:#c8c8ff66;pointer-events:none}.ProseMirror .column-resize-handle{position:absolute;right:-2px;top:0;bottom:-2px;width:4px;background-color:#212225;pointer-events:none}.ProseMirror p{margin:0}.tableWrapper{padding:1rem 0;overflow-x:auto}.resize-cursor{cursor:ew-resize;cursor:col-resize}.tiptap .mention{background-color:#5805ff0d;border-radius:.4rem;-webkit-box-decoration-break:clone;box-decoration-break:clone;color:#6a00f5;padding:.1rem .3rem}')),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { defineComponent as qt, ref as ct, computed as _c, openBlock as ge, createElementBlock as ke, Fragment as Uc, createCommentVNode as Hn, createVNode as R, Transition as Mf, withCtx as Ef, createElementVNode as De, normalizeClass as _n, toDisplayString as on, createApp as Of, onMounted as tl, onBeforeUnmount as $r, h as tr, getCurrentInstance as Af, watchEffect as Nf, nextTick as Df, unref as $, shallowRef as Rf, markRaw as Kc, reactive as If, render as Wl, customRef as Lf, renderList as Pf, watch as Bf, withModifiers as V, createBlock as Hf, withDirectives as Fo, vShow as Vo, vModelText as zf, createTextVNode as $f } from "vue";
const Ff = {
  key: 0,
  class: "dialog__overlay"
}, Vf = { class: "dialog__content" }, jf = { class: "dialog__icon" }, Wf = {
  key: 0,
  class: "progress__icon"
}, _f = /* @__PURE__ */ De("span", { class: "dialog__loader" }, null, -1), Uf = [
  _f
], Kf = {
  key: 1,
  class: "material-icons"
}, qf = { class: "dialog__title" }, Jf = { class: "dialog__message" }, Gf = { class: "dialog__btn-group" }, qc = /* @__PURE__ */ qt({
  __name: "AlertDialog",
  props: {
    customClasses: {
      type: Object,
      default: () => ({})
    }
  },
  setup(n, { expose: e }) {
    const t = ct({
      title: "Operation Successful",
      type: "success",
      message: "",
      okText: "OK",
      iconClass: "check_circle",
      showOkBtn: !0,
      showCancelBtn: !1,
      allowOutsideClick: !0,
      autoHideDelay: 2e3,
      resolve: () => {
      },
      reject: () => {
      }
    }), r = ct(!1), i = ct(!1);
    let o = null;
    const s = () => {
      r.value = !1, i.value = !1, t.value.type === "confirm" ? t.value.reject(!1) : t.value.resolve(!0);
    }, l = (g) => {
      t.value.allowOutsideClick && !g.target.closest(".dialog__container") && s();
    }, a = () => {
      t.value.resolve(!0), r.value = !1;
    }, c = (g) => {
      const y = {
        title: "Success",
        type: "success",
        okText: "OK",
        iconClass: "check_circle",
        showOkBtn: !0,
        showCancelBtn: !1,
        allowOutsideClick: !0
      }, w = {
        success: {
          title: "Success"
        },
        error: {
          title: "An error occurred",
          iconClass: "error"
        },
        warning: {
          title: "Warning",
          iconClass: "error"
        },
        confirm: {
          title: "Are You Sure?",
          okText: "YES",
          showCancelBtn: !0,
          iconClass: "help"
        },
        progress: {
          title: "Please wait...",
          showCancelBtn: !1,
          showOkBtn: !1,
          allowOutsideClick: !1,
          iconClass: "loading"
        }
      }[g.type] || {};
      return {
        ...y,
        ...w,
        ...g
      };
    }, u = (g) => {
      o && clearTimeout(o), t.value.type !== "confirm" && (o = setTimeout(() => {
        r.value && !i.value && s();
      }, g));
    }, d = () => {
      i.value = !0, o && clearTimeout(o);
    }, f = () => {
      i.value = !1, u(t.value.autoHideDelay);
    }, h = (g, { autoHideDelay: y = 2e3, ...v } = {
      type: "success",
      loading: !1,
      resolve: () => {
      },
      reject: () => {
      }
    }) => (r.value = !0, v.loading ? new Promise((w) => {
      t.value = {
        message: g,
        // @ts-ignore
        resolve: w,
        autoHideDelay: y,
        ...c(v)
      }, w(s);
    }) : new Promise((w, k) => {
      t.value = {
        // @ts-ignore
        reject: k,
        // @ts-ignore
        resolve: w,
        message: g,
        autoHideDelay: y,
        ...c(v)
      }, u(y);
    })), p = _c(() => ["dialog__container", `dialog__${t.value.type}`]);
    return e({ openDialog: h }), (g, y) => (ge(), ke(Uc, null, [
      r.value ? (ge(), ke("div", Ff)) : Hn("", !0),
      R(Mf, { name: "scale" }, {
        default: Ef(() => [
          r.value ? (ge(), ke("div", {
            key: 0,
            class: "dialog__box",
            onClick: l
          }, [
            De("div", {
              class: _n(p.value),
              onMouseenter: d,
              onMouseleave: f
            }, [
              De("div", Vf, [
                De("div", jf, [
                  t.value.loading ? (ge(), ke("div", Wf, Uf)) : (ge(), ke("span", Kf, on(t.value.iconClass), 1))
                ]),
                De("div", qf, on(t.value.title), 1),
                De("div", Jf, on(t.value.message), 1)
              ]),
              De("div", Gf, [
                t.value.showCancelBtn ? (ge(), ke("button", {
                  key: 0,
                  class: "dialog__btn error",
                  onClick: s
                }, " CANCEL ")) : Hn("", !0),
                t.value.showOkBtn ? (ge(), ke("button", {
                  key: 1,
                  class: _n([t.value.type, "dialog__btn"]),
                  onClick: a
                }, on(t.value.okText), 3)) : Hn("", !0)
              ])
            ], 34)
          ])) : Hn("", !0)
        ]),
        _: 1
      })
    ], 64));
  }
}), Yf = {
  install(n, e) {
    const t = Of(qc, e), r = document.createElement("div");
    document.body.appendChild(r);
    const i = t.mount(r);
    n.provide("openDialog", i.openDialog), n.config.globalProperties.$openDialog = i.openDialog, n.config.globalProperties.$alert = i.openDialog;
  }
};
function me(n) {
  this.content = n;
}
me.prototype = {
  constructor: me,
  find: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === n) return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(n) {
    var e = this.find(n);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(n, e, t) {
    var r = t && t != n ? this.remove(t) : this, i = r.find(n), o = r.content.slice();
    return i == -1 ? o.push(t || n, e) : (o[i + 1] = e, t && (o[i] = t)), new me(o);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(n) {
    var e = this.find(n);
    if (e == -1) return this;
    var t = this.content.slice();
    return t.splice(e, 2), new me(t);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(n, e) {
    return new me([n, e].concat(this.remove(n).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(n, e) {
    var t = this.remove(n).content.slice();
    return t.push(n, e), new me(t);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(n, e, t) {
    var r = this.remove(e), i = r.content.slice(), o = r.find(n);
    return i.splice(o == -1 ? i.length : o, 0, e, t), new me(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      n(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(n) {
    return n = me.from(n), n.size ? new me(n.content.concat(this.subtract(n).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(n) {
    return n = me.from(n), n.size ? new me(this.subtract(n).content.concat(n.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(n) {
    var e = this;
    n = me.from(n);
    for (var t = 0; t < n.content.length; t += 2)
      e = e.remove(n.content[t]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var n = {};
    return this.forEach(function(e, t) {
      n[e] = t;
    }), n;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
me.from = function(n) {
  if (n instanceof me) return n;
  var e = [];
  if (n) for (var t in n) e.push(t, n[t]);
  return new me(e);
};
function Jc(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), o = e.child(r);
    if (i == o) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(o))
      return t;
    if (i.isText && i.text != o.text) {
      for (let s = 0; i.text[s] == o.text[s]; s++)
        t++;
      return t;
    }
    if (i.content.size || o.content.size) {
      let s = Jc(i.content, o.content, t + 1);
      if (s != null)
        return s;
    }
    t += i.nodeSize;
  }
}
function Gc(n, e, t, r) {
  for (let i = n.childCount, o = e.childCount; ; ) {
    if (i == 0 || o == 0)
      return i == o ? null : { a: t, b: r };
    let s = n.child(--i), l = e.child(--o), a = s.nodeSize;
    if (s == l) {
      t -= a, r -= a;
      continue;
    }
    if (!s.sameMarkup(l))
      return { a: t, b: r };
    if (s.isText && s.text != l.text) {
      let c = 0, u = Math.min(s.text.length, l.text.length);
      for (; c < u && s.text[s.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, r--;
      return { a: t, b: r };
    }
    if (s.content.size || l.content.size) {
      let c = Gc(s.content, l.content, t - 1, r - 1);
      if (c)
        return c;
    }
    t -= a, r -= a;
  }
}
class S {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, r, i = 0, o) {
    for (let s = 0, l = 0; l < t; s++) {
      let a = this.content[s], c = l + a.nodeSize;
      if (c > e && r(a, i + l, o || null, s) !== !1 && a.content.size) {
        let u = l + 1;
        a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, t - u), r, i + u);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, r, i) {
    let o = "", s = !0;
    return this.nodesBetween(e, t, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (s ? s = !1 : o += r), o += c;
    }, 0), o;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), o = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), o = 1); o < e.content.length; o++)
      i.push(e.content[o]);
    return new S(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let o = 0, s = 0; s < t; o++) {
        let l = this.content[o], a = s + l.nodeSize;
        a > e && ((s < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - s), Math.min(l.text.length, t - s)) : l = l.cut(Math.max(0, e - s - 1), Math.min(l.content.size, t - s - 1))), r.push(l), i += l.nodeSize), s = a;
      }
    return new S(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? S.empty : e == 0 && t == this.content.length ? this : new S(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), o = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new S(i, o);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new S([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new S(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return Jc(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return Gc(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e, t = -1) {
    if (e == 0)
      return ni(0, e);
    if (e == this.size)
      return ni(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, i = 0; ; r++) {
      let o = this.child(r), s = i + o.nodeSize;
      if (s >= e)
        return s == e || t > 0 ? ni(r + 1, s) : ni(r, i);
      i = s;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return S.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new S(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return S.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      r += o.nodeSize, i && o.isText && e[i - 1].sameMarkup(o) ? (t || (t = e.slice(0, i)), t[t.length - 1] = o.withText(t[t.length - 1].text + o.text)) : t && t.push(o);
    }
    return new S(t || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return S.empty;
    if (e instanceof S)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new S([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
S.empty = new S([], 0);
const jo = { index: 0, offset: 0 };
function ni(n, e) {
  return jo.index = n, jo.offset = e, jo;
}
function Oi(n, e) {
  if (n === e)
    return !0;
  if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(n);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (n.length != e.length)
      return !1;
    for (let r = 0; r < n.length; r++)
      if (!Oi(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !Oi(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
let Y = class ys {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, r = !1;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      if (this.eq(o))
        return e;
      if (this.type.excludes(o.type))
        t || (t = e.slice(0, i));
      else {
        if (o.type.excludes(this.type))
          return e;
        !r && o.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(o);
      }
    }
    return t || (t = e.slice()), r || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && Oi(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[t.type];
    if (!r)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    let i = r.create(t.attrs);
    return r.checkAttrs(i.attrs), i;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(t[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return ys.none;
    if (e instanceof ys)
      return [e];
    let t = e.slice();
    return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
};
Y.none = [];
class Ai extends Error {
}
class M {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let r = Xc(this.content, e + this.openStart, t);
    return r && new M(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new M(Yc(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return M.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new M(S.fromJSON(e, t.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let o = e.firstChild; o && !o.isLeaf && (t || !o.type.spec.isolating); o = o.firstChild)
      r++;
    for (let o = e.lastChild; o && !o.isLeaf && (t || !o.type.spec.isolating); o = o.lastChild)
      i++;
    return new M(e, r, i);
  }
}
M.empty = new M(S.empty, 0, 0);
function Yc(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), o = n.maybeChild(r), { index: s, offset: l } = n.findIndex(t);
  if (i == e || o.isText) {
    if (l != t && !n.child(s).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != s)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, o.copy(Yc(o.content, e - i - 1, t - i - 1)));
}
function Xc(n, e, t, r) {
  let { index: i, offset: o } = n.findIndex(e), s = n.maybeChild(i);
  if (o == e || s.isText)
    return n.cut(0, e).append(t).append(n.cut(e));
  let l = Xc(s.content, e - o - 1, t);
  return l && n.replaceChild(i, s.copy(l));
}
function Xf(n, e, t) {
  if (t.openStart > n.depth)
    throw new Ai("Inserted content deeper than insertion position");
  if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new Ai("Inconsistent open depths");
  return Qc(n, e, t, 0);
}
function Qc(n, e, t, r) {
  let i = n.index(r), o = n.node(r);
  if (i == e.index(r) && r < n.depth - t.openStart) {
    let s = Qc(n, e, t, r + 1);
    return o.copy(o.content.replaceChild(i, s));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
      let s = n.parent, l = s.content;
      return un(s, l.cut(0, n.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: s, end: l } = Qf(t, n);
      return un(o, eu(n, s, l, e, r));
    }
  else return un(o, Ni(n, e, r));
}
function Zc(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new Ai("Cannot join " + e.type.name + " onto " + n.type.name);
}
function bs(n, e, t) {
  let r = n.node(t);
  return Zc(r, e.node(t)), r;
}
function cn(n, e) {
  let t = e.length - 1;
  t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function pr(n, e, t, r) {
  let i = (e || n).node(t), o = 0, s = e ? e.index(t) : i.childCount;
  n && (o = n.index(t), n.depth > t ? o++ : n.textOffset && (cn(n.nodeAfter, r), o++));
  for (let l = o; l < s; l++)
    cn(i.child(l), r);
  e && e.depth == t && e.textOffset && cn(e.nodeBefore, r);
}
function un(n, e) {
  return n.type.checkContent(e), n.copy(e);
}
function eu(n, e, t, r, i) {
  let o = n.depth > i && bs(n, e, i + 1), s = r.depth > i && bs(t, r, i + 1), l = [];
  return pr(null, n, i, l), o && s && e.index(i) == t.index(i) ? (Zc(o, s), cn(un(o, eu(n, e, t, r, i + 1)), l)) : (o && cn(un(o, Ni(n, e, i + 1)), l), pr(e, t, i, l), s && cn(un(s, Ni(t, r, i + 1)), l)), pr(r, null, i, l), new S(l);
}
function Ni(n, e, t) {
  let r = [];
  if (pr(null, n, t, r), n.depth > t) {
    let i = bs(n, e, t + 1);
    cn(un(i, Ni(n, e, t + 1)), r);
  }
  return pr(e, null, t, r), new S(r);
}
function Qf(n, e) {
  let t = e.depth - n.openStart, i = e.node(t).copy(n.content);
  for (let o = t - 1; o >= 0; o--)
    i = e.node(o).copy(S.from(i));
  return {
    start: i.resolveNoCache(n.openStart + t),
    end: i.resolveNoCache(i.content.size - n.openEnd - t)
  };
}
class Sr {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.path = t, this.parentOffset = r, this.depth = t.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(t);
    return r ? e.child(t).cut(r) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let r = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let o = 0; o < e; o++)
      i += r.child(o).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return Y.none;
    if (this.textOffset)
      return e.child(t).marks;
    let r = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!r) {
      let l = r;
      r = i, i = l;
    }
    let o = r.marks;
    for (var s = 0; s < o.length; s++)
      o[s].type.spec.inclusive === !1 && (!i || !o[s].isInSet(i.marks)) && (o = o[s--].removeFromSet(o));
    return o;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let r = t.marks, i = e.parent.maybeChild(e.index());
    for (var o = 0; o < r.length; o++)
      r[o].type.spec.inclusive === !1 && (!i || !r[o].isInSet(i.marks)) && (r = r[o--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!t || t(this.node(r))))
        return new Di(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let r = [], i = 0, o = t;
    for (let s = e; ; ) {
      let { index: l, offset: a } = s.content.findIndex(o), c = o - a;
      if (r.push(s, l, i + a), !c || (s = s.child(l), s.isText))
        break;
      o = c - 1, i += a + 1;
    }
    return new Sr(t, r, o);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    let r = _l.get(e);
    if (r)
      for (let o = 0; o < r.elts.length; o++) {
        let s = r.elts[o];
        if (s.pos == t)
          return s;
      }
    else
      _l.set(e, r = new Zf());
    let i = r.elts[r.i] = Sr.resolve(e, t);
    return r.i = (r.i + 1) % eh, i;
  }
}
class Zf {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const eh = 12, _l = /* @__PURE__ */ new WeakMap();
class Di {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const th = /* @__PURE__ */ Object.create(null);
let dn = class vs {
  /**
  @internal
  */
  constructor(e, t, r, i = Y.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = r || S.empty;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, t, r, i = 0) {
    this.content.nodesBetween(e, t, r, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.
  */
  textBetween(e, t, r, i) {
    return this.content.textBetween(e, t, r, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, t, r) {
    return this.type == e && Oi(this.attrs, t || e.defaultAttrs || th) && Y.sameSet(this.marks, r || Y.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new vs(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new vs(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, t = this.content.size, r = !1) {
    if (e == t)
      return M.empty;
    let i = this.resolve(e), o = this.resolve(t), s = r ? 0 : i.sharedDepth(t), l = i.start(s), c = i.node(s).content.cut(i.pos - l, o.pos - l);
    return new M(c, i.depth - s, o.depth - s);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, t, r) {
    return Xf(this.resolve(e), this.resolve(t), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: r, offset: i } = t.content.findIndex(e);
      if (t = t.maybeChild(r), !t)
        return null;
      if (i == e || t.isText)
        return t;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: t, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(t), index: t, offset: r };
    let i = this.content.child(t - 1);
    return { node: i, index: t - 1, offset: r - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return Sr.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return Sr.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, r) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (o) => (r.isInSet(o.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), tu(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, t, r = S.empty, i = 0, o = r.childCount) {
    let s = this.contentMatchAt(e).matchFragment(r, i, o), l = s && s.matchFragment(this.content, t);
    if (!l || !l.validEnd)
      return !1;
    for (let a = i; a < o; a++)
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let o = this.contentMatchAt(e).matchType(r), s = o && o.matchFragment(this.content, t);
    return s ? s.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = Y.none;
    for (let t = 0; t < this.marks.length; t++) {
      let r = this.marks[t];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!Y.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, r);
    }
    let i = S.fromJSON(e, t.content), o = e.nodeType(t.type).create(t.attrs, i, r);
    return o.type.checkAttrs(o.attrs), o;
  }
};
dn.prototype.text = void 0;
class Ri extends dn {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    if (super(e, t, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : tu(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new Ri(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new Ri(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function tu(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    e = n[t].type.name + "(" + e + ")";
  return e;
}
class gn {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, t) {
    let r = new nh(e, t);
    if (r.next == null)
      return gn.empty;
    let i = nu(r);
    r.next && r.err("Unexpected trailing text");
    let o = ch(ah(i));
    return uh(o, r), o;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, t = 0, r = e.childCount) {
    let i = this;
    for (let o = t; i && o < r; o++)
      i = i.matchType(e.child(o).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[t].type == e.next[r].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, t = !1, r = 0) {
    let i = [this];
    function o(s, l) {
      let a = s.matchFragment(e, r);
      if (a && (!t || a.validEnd))
        return S.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < s.next.length; c++) {
        let { type: u, next: d } = s.next[c];
        if (!(u.isText || u.hasRequiredAttrs()) && i.indexOf(d) == -1) {
          i.push(d);
          let f = o(d, l.concat(u));
          if (f)
            return f;
        }
      }
      return null;
    }
    return o(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), o = i.match;
      if (o.matchType(e)) {
        let s = [];
        for (let l = i; l.type; l = l.via)
          s.push(l.type);
        return s.reverse();
      }
      for (let s = 0; s < o.next.length; s++) {
        let { type: l, next: a } = o.next[s];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!i.type || a.validEnd) && (r.push({ match: l.contentMatch, type: l, via: i }), t[l.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function t(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && t(r.next[i].next);
    }
    return t(this), e.map((r, i) => {
      let o = i + (r.validEnd ? "*" : " ") + " ";
      for (let s = 0; s < r.next.length; s++)
        o += (s ? ", " : "") + r.next[s].type.name + "->" + e.indexOf(r.next[s].next);
      return o;
    }).join(`
`);
  }
}
gn.empty = new gn(!0);
class nh {
  constructor(e, t) {
    this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function nu(n) {
  let e = [];
  do
    e.push(rh(n));
  while (n.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function rh(n) {
  let e = [];
  do
    e.push(ih(n));
  while (n.next && n.next != ")" && n.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function ih(n) {
  let e = lh(n);
  for (; ; )
    if (n.eat("+"))
      e = { type: "plus", expr: e };
    else if (n.eat("*"))
      e = { type: "star", expr: e };
    else if (n.eat("?"))
      e = { type: "opt", expr: e };
    else if (n.eat("{"))
      e = oh(n, e);
    else
      break;
  return e;
}
function Ul(n) {
  /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
  let e = Number(n.next);
  return n.pos++, e;
}
function oh(n, e) {
  let t = Ul(n), r = t;
  return n.eat(",") && (n.next != "}" ? r = Ul(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: r, expr: e };
}
function sh(n, e) {
  let t = n.nodeTypes, r = t[e];
  if (r)
    return [r];
  let i = [];
  for (let o in t) {
    let s = t[o];
    s.groups.indexOf(e) > -1 && i.push(s);
  }
  return i.length == 0 && n.err("No node type or group '" + e + "' found"), i;
}
function lh(n) {
  if (n.eat("(")) {
    let e = nu(n);
    return n.eat(")") || n.err("Missing closing paren"), e;
  } else if (/\W/.test(n.next))
    n.err("Unexpected token '" + n.next + "'");
  else {
    let e = sh(n, n.next).map((t) => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t }));
    return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function ah(n) {
  let e = [[]];
  return i(o(n, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function r(s, l, a) {
    let c = { term: a, to: l };
    return e[s].push(c), c;
  }
  function i(s, l) {
    s.forEach((a) => a.to = l);
  }
  function o(s, l) {
    if (s.type == "choice")
      return s.exprs.reduce((a, c) => a.concat(o(c, l)), []);
    if (s.type == "seq")
      for (let a = 0; ; a++) {
        let c = o(s.exprs[a], l);
        if (a == s.exprs.length - 1)
          return c;
        i(c, l = t());
      }
    else if (s.type == "star") {
      let a = t();
      return r(l, a), i(o(s.expr, a), a), [r(a)];
    } else if (s.type == "plus") {
      let a = t();
      return i(o(s.expr, l), a), i(o(s.expr, a), a), [r(a)];
    } else {
      if (s.type == "opt")
        return [r(l)].concat(o(s.expr, l));
      if (s.type == "range") {
        let a = l;
        for (let c = 0; c < s.min; c++) {
          let u = t();
          i(o(s.expr, a), u), a = u;
        }
        if (s.max == -1)
          i(o(s.expr, a), a);
        else
          for (let c = s.min; c < s.max; c++) {
            let u = t();
            r(a, u), i(o(s.expr, a), u), a = u;
          }
        return [r(a)];
      } else {
        if (s.type == "name")
          return [r(l, void 0, s.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function ru(n, e) {
  return e - n;
}
function Kl(n, e) {
  let t = [];
  return r(e), t.sort(ru);
  function r(i) {
    let o = n[i];
    if (o.length == 1 && !o[0].term)
      return r(o[0].to);
    t.push(i);
    for (let s = 0; s < o.length; s++) {
      let { term: l, to: a } = o[s];
      !l && t.indexOf(a) == -1 && r(a);
    }
  }
}
function ch(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(Kl(n, 0));
  function t(r) {
    let i = [];
    r.forEach((s) => {
      n[s].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let u = 0; u < i.length; u++)
          i[u][0] == l && (c = i[u][1]);
        Kl(n, a).forEach((u) => {
          c || i.push([l, c = []]), c.indexOf(u) == -1 && c.push(u);
        });
      });
    });
    let o = e[r.join(",")] = new gn(r.indexOf(n.length - 1) > -1);
    for (let s = 0; s < i.length; s++) {
      let l = i[s][1].sort(ru);
      o.next.push({ type: i[s][0], next: e[l.join(",")] || t(l) });
    }
    return o;
  }
}
function uh(n, e) {
  for (let t = 0, r = [n]; t < r.length; t++) {
    let i = r[t], o = !i.validEnd, s = [];
    for (let l = 0; l < i.next.length; l++) {
      let { type: a, next: c } = i.next[l];
      s.push(a.name), o && !(a.isText || a.hasRequiredAttrs()) && (o = !1), r.indexOf(c) == -1 && r.push(c);
    }
    o && e.err("Only non-generatable nodes (" + s.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function iu(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let r = n[t];
    if (!r.hasDefault)
      return null;
    e[t] = r.default;
  }
  return e;
}
function ou(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r in n) {
    let i = e && e[r];
    if (i === void 0) {
      let o = n[r];
      if (o.hasDefault)
        i = o.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    t[r] = i;
  }
  return t;
}
function su(n, e, t, r) {
  for (let i in e)
    if (!(i in n))
      throw new RangeError(`Unsupported attribute ${i} for ${t} of type ${i}`);
  for (let i in n) {
    let o = n[i];
    o.validate && o.validate(e[i]);
  }
}
function lu(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      t[r] = new fh(n, r, e[r]);
  return t;
}
let ql = class au {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.name = e, this.schema = t, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = lu(e, r.attrs), this.defaultAttrs = iu(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == gn.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : ou(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, t, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new dn(this, this.computeAttrs(e), S.from(t), Y.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, t, r) {
    return t = S.from(t), this.checkContent(t), new dn(this, this.computeAttrs(e), t, Y.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, t, r) {
    if (e = this.computeAttrs(e), t = S.from(t), t.size) {
      let s = this.contentMatch.fillBefore(t);
      if (!s)
        return null;
      t = s.append(t);
    }
    let i = this.contentMatch.matchFragment(t), o = i && i.fillBefore(S.empty, !0);
    return o ? new dn(this, e, t.append(o), Y.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(e) {
    su(this.attrs, e, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let t;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? t && t.push(e[r]) : t || (t = e.slice(0, r));
    return t ? t.length ? t : Y.none : e;
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((o, s) => r[o] = new au(o, t, s));
    let i = t.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let o in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
function dh(n, e, t) {
  let r = t.split("|");
  return (i) => {
    let o = i === null ? "null" : typeof i;
    if (r.indexOf(o) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${n}, got ${o}`);
  };
}
class fh {
  constructor(e, t, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? dh(e, t, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class ko {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    this.name = e, this.rank = t, this.schema = r, this.spec = i, this.attrs = lu(e, i.attrs), this.excluded = null;
    let o = iu(this.attrs);
    this.instance = o ? new Y(this, o) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new Y(this, ou(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((o, s) => r[o] = new ko(o, i++, t, s)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  /**
  @internal
  */
  checkAttrs(e) {
    su(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class cu {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let i in e)
      t[i] = e[i];
    t.nodes = me.from(e.nodes), t.marks = me.from(e.marks || {}), this.nodes = ql.compile(this.spec.nodes, this), this.marks = ko.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let o = this.nodes[i], s = o.spec.content || "", l = o.spec.marks;
      if (o.contentMatch = r[s] || (r[s] = gn.parse(s, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!o.isInline || !o.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = o;
      }
      o.markSet = l == "_" ? null : l ? Jl(this, l.split(" ")) : l == "" || !o.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let o = this.marks[i], s = o.spec.excludes;
      o.excluded = s == null ? [o] : s == "" ? [] : Jl(this, s.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, t = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof ql) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, r, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, t) {
    let r = this.nodes.text;
    return new Ri(r, r.defaultAttrs, e, Y.setFrom(t));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  /**
  Deserialize a node from its JSON representation. This method is
  bound.
  */
  nodeFromJSON(e) {
    return dn.fromJSON(this, e);
  }
  /**
  Deserialize a mark from its JSON representation. This method is
  bound.
  */
  markFromJSON(e) {
    return Y.fromJSON(this, e);
  }
  /**
  @internal
  */
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function Jl(n, e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], o = n.marks[i], s = o;
    if (o)
      t.push(o);
    else
      for (let l in n.marks) {
        let a = n.marks[l];
        (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && t.push(s = a);
      }
    if (!s)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return t;
}
function hh(n) {
  return n.tag != null;
}
function ph(n) {
  return n.style != null;
}
class jt {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    t.forEach((i) => {
      if (hh(i))
        this.tags.push(i);
      else if (ph(i)) {
        let o = /[^=]*/.exec(i.style)[0];
        r.indexOf(o) < 0 && r.push(o), this.styles.push(i);
      }
    }), this.normalizeLists = !this.tags.some((i) => {
      if (!/^(ul|ol)\b/.test(i.tag) || !i.node)
        return !1;
      let o = e.nodes[i.node];
      return o.contentMatch.matchType(o);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, t = {}) {
    let r = new Yl(this, t, !1);
    return r.addAll(e, t.from, t.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, t = {}) {
    let r = new Yl(this, t, !0);
    return r.addAll(e, t.from, t.to), M.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let o = this.tags[i];
      if (yh(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || t.matchesContext(o.context))) {
        if (o.getAttrs) {
          let s = o.getAttrs(e);
          if (s === !1)
            continue;
          o.attrs = s || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, t, r, i) {
    for (let o = i ? this.styles.indexOf(i) + 1 : 0; o < this.styles.length; o++) {
      let s = this.styles[o], l = s.style;
      if (!(l.indexOf(e) != 0 || s.context && !r.matchesContext(s.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
        if (s.getAttrs) {
          let a = s.getAttrs(t);
          if (a === !1)
            continue;
          s.attrs = a || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let t = [];
    function r(i) {
      let o = i.priority == null ? 50 : i.priority, s = 0;
      for (; s < t.length; s++) {
        let l = t[s];
        if ((l.priority == null ? 50 : l.priority) < o)
          break;
      }
      t.splice(s, 0, i);
    }
    for (let i in e.marks) {
      let o = e.marks[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = Xl(s)), s.mark || s.ignore || s.clearMark || (s.mark = i);
      });
    }
    for (let i in e.nodes) {
      let o = e.nodes[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = Xl(s)), s.node || s.ignore || s.mark || (s.node = i);
      });
    }
    return t;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.ParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new jt(e, jt.schemaRules(e)));
  }
}
const uu = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, mh = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, du = { ol: !0, ul: !0 }, Ii = 1, Li = 2, mr = 4;
function Gl(n, e, t) {
  return e != null ? (e ? Ii : 0) | (e === "full" ? Li : 0) : n && n.whitespace == "pre" ? Ii | Li : t & ~mr;
}
class ri {
  constructor(e, t, r, i, o, s, l) {
    this.type = e, this.attrs = t, this.marks = r, this.pendingMarks = i, this.solid = o, this.options = l, this.content = [], this.activeMarks = Y.none, this.stashMarks = [], this.match = s || (l & mr ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(S.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & Ii)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let o = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = o.withText(o.text.slice(0, o.text.length - i[0].length));
      }
    }
    let t = S.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(S.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  popFromStashMark(e) {
    for (let t = this.stashMarks.length - 1; t >= 0; t--)
      if (e.eq(this.stashMarks[t]))
        return this.stashMarks.splice(t, 1)[0];
  }
  applyPending(e) {
    for (let t = 0, r = this.pendingMarks; t < r.length; t++) {
      let i = r[t];
      (this.type ? this.type.allowsMarkType(i.type) : bh(i.type, e)) && !i.isInSet(this.activeMarks) && (this.activeMarks = i.addToSet(this.activeMarks), this.pendingMarks = i.removeFromSet(this.pendingMarks));
    }
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !uu.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Yl {
  constructor(e, t, r) {
    this.parser = e, this.options = t, this.isOpen = r, this.open = 0;
    let i = t.topNode, o, s = Gl(null, t.preserveWhitespace, 0) | (r ? mr : 0);
    i ? o = new ri(i.type, i.attrs, Y.none, Y.none, !0, t.topMatch || i.type.contentMatch, s) : r ? o = new ri(null, null, Y.none, Y.none, !0, null, s) : o = new ri(e.schema.topNodeType, null, Y.none, Y.none, !0, null, s), this.nodes = [o], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e) {
    e.nodeType == 3 ? this.addTextNode(e) : e.nodeType == 1 && this.addElement(e);
  }
  withStyleRules(e, t) {
    let r = e.style;
    if (!r || !r.length)
      return t();
    let i = this.readStyles(e.style);
    if (!i)
      return;
    let [o, s] = i, l = this.top;
    for (let a = 0; a < s.length; a++)
      this.removePendingMark(s[a], l);
    for (let a = 0; a < o.length; a++)
      this.addPendingMark(o[a]);
    t();
    for (let a = 0; a < o.length; a++)
      this.removePendingMark(o[a], l);
    for (let a = 0; a < s.length; a++)
      this.addPendingMark(s[a]);
  }
  addTextNode(e) {
    let t = e.nodeValue, r = this.top;
    if (r.options & Li || r.inlineContext(e) || /[^ \t\r\n\u000c]/.test(t)) {
      if (r.options & Ii)
        r.options & Li ? t = t.replace(/\r\n?/g, `
`) : t = t.replace(/\r?\n|\r/g, " ");
      else if (t = t.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(t) && this.open == this.nodes.length - 1) {
        let i = r.content[r.content.length - 1], o = e.previousSibling;
        (!i || o && o.nodeName == "BR" || i.isText && /[ \t\r\n\u000c]$/.test(i.text)) && (t = t.slice(1));
      }
      t && this.insertNode(this.parser.schema.text(t)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t) {
    let r = e.nodeName.toLowerCase(), i;
    du.hasOwnProperty(r) && this.parser.normalizeLists && gh(e);
    let o = this.options.ruleFromNode && this.options.ruleFromNode(e) || (i = this.parser.matchTag(e, this, t));
    if (o ? o.ignore : mh.hasOwnProperty(r))
      this.findInside(e), this.ignoreFallback(e);
    else if (!o || o.skip || o.closeParent) {
      o && o.closeParent ? this.open = Math.max(0, this.open - 1) : o && o.skip.nodeType && (e = o.skip);
      let s, l = this.top, a = this.needsBlock;
      if (uu.hasOwnProperty(r))
        l.content.length && l.content[0].isInline && this.open && (this.open--, l = this.top), s = !0, l.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e);
        return;
      }
      o && o.skip ? this.addAll(e) : this.withStyleRules(e, () => this.addAll(e)), s && this.sync(l), this.needsBlock = a;
    } else
      this.withStyleRules(e, () => {
        this.addElementByRule(e, o, o.consuming === !1 ? i : void 0);
      });
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`));
  }
  // Called for ignored nodes
  ignoreFallback(e) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"));
  }
  // Run any style parser associated with the node's styles. Either
  // return an array of marks, or null to indicate some of the styles
  // had a rule with `ignore` set.
  readStyles(e) {
    let t = Y.none, r = Y.none;
    if (e.length)
      for (let i = 0; i < this.parser.matchedStyles.length; i++) {
        let o = this.parser.matchedStyles[i], s = e.getPropertyValue(o);
        if (s)
          for (let l = void 0; ; ) {
            let a = this.parser.matchStyle(o, s, this, l);
            if (!a)
              break;
            if (a.ignore)
              return null;
            if (a.clearMark ? this.top.pendingMarks.concat(this.top.activeMarks).forEach((c) => {
              a.clearMark(c) && (r = c.addToSet(r));
            }) : t = this.parser.schema.marks[a.mark].create(a.attrs).addToSet(t), a.consuming === !1)
              l = a;
            else
              break;
          }
      }
    return [t, r];
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, t, r) {
    let i, o, s;
    t.node ? (o = this.parser.schema.nodes[t.node], o.isLeaf ? this.insertNode(o.create(t.attrs)) || this.leafFallback(e) : i = this.enter(o, t.attrs || null, t.preserveWhitespace)) : (s = this.parser.schema.marks[t.mark].create(t.attrs), this.addPendingMark(s));
    let l = this.top;
    if (o && o.isLeaf)
      this.findInside(e);
    else if (r)
      this.addElement(e, r);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a));
    else {
      let a = e;
      typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a);
    }
    i && this.sync(l) && this.open--, s && this.removePendingMark(s, l);
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, r) {
    let i = t || 0;
    for (let o = t ? e.childNodes[t] : e.firstChild, s = r == null ? null : e.childNodes[r]; o != s; o = o.nextSibling, ++i)
      this.findAtPoint(e, i), this.addDOM(o);
    this.findAtPoint(e, i);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e) {
    let t, r;
    for (let i = this.open; i >= 0; i--) {
      let o = this.nodes[i], s = o.findWrapping(e);
      if (s && (!t || t.length > s.length) && (t = s, r = o, !s.length) || o.solid)
        break;
    }
    if (!t)
      return !1;
    this.sync(r);
    for (let i = 0; i < t.length; i++)
      this.enterInner(t[i], null, !1);
    return !0;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let t = this.textblockFromContext();
      t && this.enterInner(t);
    }
    if (this.findPlace(e)) {
      this.closeExtra();
      let t = this.top;
      t.applyPending(e.type), t.match && (t.match = t.match.matchType(e.type));
      let r = t.activeMarks;
      for (let i = 0; i < e.marks.length; i++)
        (!t.type || t.type.allowsMarkType(e.marks[i].type)) && (r = e.marks[i].addToSet(r));
      return t.content.push(e.mark(r)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, r) {
    let i = this.findPlace(e.create(t));
    return i && this.enterInner(e, t, !0, r), i;
  }
  // Open a node of the given type
  enterInner(e, t = null, r = !1, i) {
    this.closeExtra();
    let o = this.top;
    o.applyPending(e), o.match = o.match && o.match.matchType(e);
    let s = Gl(e, i, o.options);
    o.options & mr && o.content.length == 0 && (s |= mr), this.nodes.push(new ri(e, t, o.activeMarks, o.pendingMarks, r, null, s)), this.open++;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen);
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--)
      if (this.nodes[t] == e)
        return this.open = t, !0;
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let r = this.nodes[t].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == t && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, r) {
    if (e != t && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), o = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), s = (l, a) => {
      for (; l >= 0; l--) {
        let c = t[l];
        if (c == "") {
          if (l == t.length - 1 || l == 0)
            continue;
          for (; a >= o; a--)
            if (s(l - 1, a))
              return !0;
          return !1;
        } else {
          let u = a > 0 || a == 0 && i ? this.nodes[a].type : r && a >= o ? r.node(a - o).type : null;
          if (!u || u.name != c && u.groups.indexOf(c) == -1)
            return !1;
          a--;
        }
      }
      return !0;
    };
    return s(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let r = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let t in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[t];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
  addPendingMark(e) {
    let t = vh(e, this.top.pendingMarks);
    t && this.top.stashMarks.push(t), this.top.pendingMarks = e.addToSet(this.top.pendingMarks);
  }
  removePendingMark(e, t) {
    for (let r = this.open; r >= 0; r--) {
      let i = this.nodes[r];
      if (i.pendingMarks.lastIndexOf(e) > -1)
        i.pendingMarks = e.removeFromSet(i.pendingMarks);
      else {
        i.activeMarks = e.removeFromSet(i.activeMarks);
        let s = i.popFromStashMark(e);
        s && i.type && i.type.allowsMarkType(s.type) && (i.activeMarks = s.addToSet(i.activeMarks));
      }
      if (i == t)
        break;
    }
  }
}
function gh(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && du.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
  }
}
function yh(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function Xl(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function bh(n, e) {
  let t = e.schema.nodes;
  for (let r in t) {
    let i = t[r];
    if (!i.allowsMarkType(n))
      continue;
    let o = [], s = (l) => {
      o.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: u } = l.edge(a);
        if (c == e || o.indexOf(u) < 0 && s(u))
          return !0;
      }
    };
    if (s(i.contentMatch))
      return !0;
  }
}
function vh(n, e) {
  for (let t = 0; t < e.length; t++)
    if (n.eq(e[t]))
      return e[t];
}
class Cn {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, t) {
    this.nodes = e, this.marks = t;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, t = {}, r) {
    r || (r = Wo(t).createDocumentFragment());
    let i = r, o = [];
    return e.forEach((s) => {
      if (o.length || s.marks.length) {
        let l = 0, a = 0;
        for (; l < o.length && a < s.marks.length; ) {
          let c = s.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(o[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < o.length; )
          i = o.pop()[1];
        for (; a < s.marks.length; ) {
          let c = s.marks[a++], u = this.serializeMark(c, s.isInline, t);
          u && (o.push([c, i]), i.appendChild(u.dom), i = u.contentDOM || u.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(s, t));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, t) {
    let { dom: r, contentDOM: i } = vi(Wo(t), this.nodes[e.type.name](e), null, e.attrs);
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, i);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, t = {}) {
    let r = this.serializeNodeInner(e, t);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let o = this.serializeMark(e.marks[i], e.isInline, t);
      o && ((o.contentDOM || o.dom).appendChild(r), r = o.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, t, r = {}) {
    let i = this.marks[e.type.name];
    return i && vi(Wo(r), i(e, t), null, e.attrs);
  }
  static renderSpec(e, t, r = null, i) {
    return vi(e, t, r, i);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new Cn(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let t = Ql(e.nodes);
    return t.text || (t.text = (r) => r.text), t;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return Ql(e.marks);
  }
}
function Ql(n) {
  let e = {};
  for (let t in n) {
    let r = n[t].spec.toDOM;
    r && (e[t] = r);
  }
  return e;
}
function Wo(n) {
  return n.document || window.document;
}
const Zl = /* @__PURE__ */ new WeakMap();
function wh(n) {
  let e = Zl.get(n);
  return e === void 0 && Zl.set(n, e = kh(n)), e;
}
function kh(n) {
  let e = null;
  function t(r) {
    if (r && typeof r == "object")
      if (Array.isArray(r))
        if (typeof r[0] == "string")
          e || (e = []), e.push(r);
        else
          for (let i = 0; i < r.length; i++)
            t(r[i]);
      else
        for (let i in r)
          t(r[i]);
  }
  return t(n), e;
}
function vi(n, e, t, r) {
  if (typeof e == "string")
    return { dom: n.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let i = e[0], o;
  if (typeof i != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (o = wh(r)) && o.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let s = i.indexOf(" ");
  s > 0 && (t = i.slice(0, s), i = i.slice(s + 1));
  let l, a = t ? n.createElementNS(t, i) : n.createElement(i), c = e[1], u = 1;
  if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
    u = 2;
    for (let d in c)
      if (c[d] != null) {
        let f = d.indexOf(" ");
        f > 0 ? a.setAttributeNS(d.slice(0, f), d.slice(f + 1), c[d]) : a.setAttribute(d, c[d]);
      }
  }
  for (let d = u; d < e.length; d++) {
    let f = e[d];
    if (f === 0) {
      if (d < e.length - 1 || d > u)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: a, contentDOM: a };
    } else {
      let { dom: h, contentDOM: p } = vi(n, f, t, r);
      if (a.appendChild(h), p) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = p;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const fu = 65535, hu = Math.pow(2, 16);
function Ch(n, e) {
  return n + e * hu;
}
function ea(n) {
  return n & fu;
}
function xh(n) {
  return (n - (n & fu)) / hu;
}
const pu = 1, mu = 2, wi = 4, gu = 8;
class ws {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.delInfo = t, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & gu) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (pu | wi)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (mu | wi)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & wi) > 0;
  }
}
class He {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && He.empty)
      return He.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, r = ea(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + t + xh(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0, o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + o], u = this.ranges[l + s], d = a + c;
      if (e <= d) {
        let f = c ? e == a ? -1 : e == d ? 1 : t : t, h = a + i + (f < 0 ? 0 : u);
        if (r)
          return h;
        let p = e == (t < 0 ? a : d) ? null : Ch(l / 3, e - a), g = e == a ? mu : e == d ? pu : wi;
        return (t < 0 ? e != a : e != d) && (g |= gu), new ws(h, g, p);
      }
      i += u - c;
    }
    return r ? e + i : new ws(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let r = 0, i = ea(t), o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + o], u = a + c;
      if (e <= u && l == i * 3)
        return !0;
      r += this.ranges[l + s] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, o = 0; i < this.ranges.length; i += 3) {
      let s = this.ranges[i], l = s - (this.inverted ? o : 0), a = s + (this.inverted ? 0 : o), c = this.ranges[i + t], u = this.ranges[i + r];
      e(l, l + c, a, a + u), o += u - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new He(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? He.empty : new He(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
He.empty = new He([]);
class Fn {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e = [], t, r = 0, i = e.length) {
    this.maps = e, this.mirror = t, this.from = r, this.to = i;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, t = this.maps.length) {
    return new Fn(this.maps, this.mirror, e, t);
  }
  /**
  @internal
  */
  copy() {
    return new Fn(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, t) {
    this.to = this.maps.push(e), t != null && this.setMirror(this.maps.length - 1, t);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let t = 0, r = this.maps.length; t < e.maps.length; t++) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t], i != null && i < t ? r + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++)
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, t) {
    this.mirror || (this.mirror = []), this.mirror.push(e, t);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, r = this.maps.length + e.maps.length; t >= 0; t--) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t].invert(), i != null && i > t ? r - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new Fn();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let r = this.from; r < this.to; r++)
      e = this.maps[r].map(e, t);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0;
    for (let o = this.from; o < this.to; o++) {
      let s = this.maps[o], l = s.mapResult(e, t);
      if (l.recover != null) {
        let a = this.getMirror(o);
        if (a != null && a > o && a < this.to) {
          o = a, e = this.maps[a].recover(l.recover);
          continue;
        }
      }
      i |= l.delInfo, e = l.pos;
    }
    return r ? e : new ws(e, i, null);
  }
}
const _o = /* @__PURE__ */ Object.create(null);
class Te {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return He.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = _o[t.stepType];
    if (!r)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in _o)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return _o[e] = t, t.prototype.jsonID = e, t;
  }
}
class le {
  /**
  @internal
  */
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new le(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new le(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, r, i) {
    try {
      return le.ok(e.replace(t, r, i));
    } catch (o) {
      if (o instanceof Ai)
        return le.fail(o.message);
      throw o;
    }
  }
}
function nl(n, e, t) {
  let r = [];
  for (let i = 0; i < n.childCount; i++) {
    let o = n.child(i);
    o.content.size && (o = o.copy(nl(o.content, e, o))), o.isInline && (o = e(o, t, i)), r.push(o);
  }
  return S.fromArray(r);
}
class $t extends Te {
  /**
  Create a mark step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), o = new M(nl(t.content, (s, l) => !s.isAtom || !l.type.allowsMarkType(this.mark.type) ? s : s.mark(this.mark.addToSet(s.marks)), i), t.openStart, t.openEnd);
    return le.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new ut(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new $t(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof $t && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new $t(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new $t(t.from, t.to, e.markFromJSON(t.mark));
  }
}
Te.jsonID("addMark", $t);
class ut extends Te {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new M(nl(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return le.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new $t(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new ut(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof ut && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new ut(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new ut(t.from, t.to, e.markFromJSON(t.mark));
  }
}
Te.jsonID("removeMark", ut);
class Ft extends Te {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return le.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return le.fromReplace(e, this.pos, this.pos + 1, new M(S.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(r))
            return new Ft(this.pos, t.marks[i]);
        return new Ft(this.pos, this.mark);
      }
    }
    return new Un(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Ft(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new Ft(t.pos, e.markFromJSON(t.mark));
  }
}
Te.jsonID("addNodeMark", Ft);
class Un extends Te {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return le.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return le.fromReplace(e, this.pos, this.pos + 1, new M(S.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new Ft(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Un(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new Un(t.pos, e.markFromJSON(t.mark));
  }
}
Te.jsonID("removeNodeMark", Un);
class ue extends Te {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, r, i = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && ks(e, this.from, this.to) ? le.fail("Structure replace would overwrite content") : le.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new He([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new ue(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new ue(t.pos, Math.max(t.pos, r.pos), this.slice);
  }
  merge(e) {
    if (!(e instanceof ue) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? M.empty : new M(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new ue(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? M.empty : new M(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new ue(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new ue(t.from, t.to, M.fromJSON(e, t.slice), !!t.structure);
  }
}
Te.jsonID("replace", ue);
class de extends Te {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, r, i, o, s, l = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = o, this.insert = s, this.structure = l;
  }
  apply(e) {
    if (this.structure && (ks(e, this.from, this.gapFrom) || ks(e, this.gapTo, this.to)))
      return le.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return le.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? le.fromReplace(e, this.from, this.to, r) : le.fail("Content does not fit in gap");
  }
  getMap() {
    return new He([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new de(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1), o = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || i < t.pos || o > r.pos ? null : new de(t.pos, r.pos, i, o, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new de(t.from, t.to, t.gapFrom, t.gapTo, M.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
Te.jsonID("replaceAround", de);
function ks(n, e, t) {
  let r = n.resolve(e), i = t - e, o = r.depth;
  for (; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
    o--, i--;
  if (i > 0) {
    let s = r.node(o).maybeChild(r.indexAfter(o));
    for (; i > 0; ) {
      if (!s || s.isLeaf)
        return !0;
      s = s.firstChild, i--;
    }
  }
  return !1;
}
function Sh(n, e, t, r) {
  let i = [], o = [], s, l;
  n.doc.nodesBetween(e, t, (a, c, u) => {
    if (!a.isInline)
      return;
    let d = a.marks;
    if (!r.isInSet(d) && u.type.allowsMarkType(r.type)) {
      let f = Math.max(c, e), h = Math.min(c + a.nodeSize, t), p = r.addToSet(d);
      for (let g = 0; g < d.length; g++)
        d[g].isInSet(p) || (s && s.to == f && s.mark.eq(d[g]) ? s.to = h : i.push(s = new ut(f, h, d[g])));
      l && l.to == f ? l.to = h : o.push(l = new $t(f, h, r));
    }
  }), i.forEach((a) => n.step(a)), o.forEach((a) => n.step(a));
}
function Th(n, e, t, r) {
  let i = [], o = 0;
  n.doc.nodesBetween(e, t, (s, l) => {
    if (!s.isInline)
      return;
    o++;
    let a = null;
    if (r instanceof ko) {
      let c = s.marks, u;
      for (; u = r.isInSet(c); )
        (a || (a = [])).push(u), c = u.removeFromSet(c);
    } else r ? r.isInSet(s.marks) && (a = [r]) : a = s.marks;
    if (a && a.length) {
      let c = Math.min(l + s.nodeSize, t);
      for (let u = 0; u < a.length; u++) {
        let d = a[u], f;
        for (let h = 0; h < i.length; h++) {
          let p = i[h];
          p.step == o - 1 && d.eq(i[h].style) && (f = p);
        }
        f ? (f.to = c, f.step = o) : i.push({ style: d, from: Math.max(l, e), to: c, step: o });
      }
    }
  }), i.forEach((s) => n.step(new ut(s.from, s.to, s.style)));
}
function yu(n, e, t, r = t.contentMatch, i = !0) {
  let o = n.doc.nodeAt(e), s = [], l = e + 1;
  for (let a = 0; a < o.childCount; a++) {
    let c = o.child(a), u = l + c.nodeSize, d = r.matchType(c.type);
    if (!d)
      s.push(new ue(l, u, M.empty));
    else {
      r = d;
      for (let f = 0; f < c.marks.length; f++)
        t.allowsMarkType(c.marks[f].type) || n.step(new ut(l, u, c.marks[f]));
      if (i && c.isText && t.whitespace != "pre") {
        let f, h = /\r?\n|\r/g, p;
        for (; f = h.exec(c.text); )
          p || (p = new M(S.from(t.schema.text(" ", t.allowedMarks(c.marks))), 0, 0)), s.push(new ue(l + f.index, l + f.index + f[0].length, p));
      }
    }
    l = u;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(S.empty, !0);
    n.replace(l, l, new M(a, 0, 0));
  }
  for (let a = s.length - 1; a >= 0; a--)
    n.step(s[a]);
}
function Mh(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function nr(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth; ; --r) {
    let i = n.$from.node(r), o = n.$from.index(r), s = n.$to.indexAfter(r);
    if (r < n.depth && i.canReplace(o, s, t))
      return r;
    if (r == 0 || i.type.spec.isolating || !Mh(i, o, s))
      break;
  }
  return null;
}
function Eh(n, e, t) {
  let { $from: r, $to: i, depth: o } = e, s = r.before(o + 1), l = i.after(o + 1), a = s, c = l, u = S.empty, d = 0;
  for (let p = o, g = !1; p > t; p--)
    g || r.index(p) > 0 ? (g = !0, u = S.from(r.node(p).copy(u)), d++) : a--;
  let f = S.empty, h = 0;
  for (let p = o, g = !1; p > t; p--)
    g || i.after(p + 1) < i.end(p) ? (g = !0, f = S.from(i.node(p).copy(f)), h++) : c++;
  n.step(new de(a, c, s, l, new M(u.append(f), d, h), u.size - d, !0));
}
function rl(n, e, t = null, r = n) {
  let i = Oh(n, e), o = i && Ah(r, e);
  return o ? i.map(ta).concat({ type: e, attrs: t }).concat(o.map(ta)) : null;
}
function ta(n) {
  return { type: n, attrs: null };
}
function Oh(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, o = t.contentMatchAt(r).findWrapping(e);
  if (!o)
    return null;
  let s = o.length ? o[0] : e;
  return t.canReplaceWith(r, i, s) ? o : null;
}
function Ah(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, o = t.child(r), s = e.contentMatch.findWrapping(o.type);
  if (!s)
    return null;
  let a = (s.length ? s[s.length - 1] : e).contentMatch;
  for (let c = r; a && c < i; c++)
    a = a.matchType(t.child(c).type);
  return !a || !a.validEnd ? null : s;
}
function Nh(n, e, t) {
  let r = S.empty;
  for (let s = t.length - 1; s >= 0; s--) {
    if (r.size) {
      let l = t[s].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = S.from(t[s].type.create(t[s].attrs, r));
  }
  let i = e.start, o = e.end;
  n.step(new de(i, o, i, o, new M(r, 0, 0), t.length, !0));
}
function Dh(n, e, t, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let o = n.steps.length;
  n.doc.nodesBetween(e, t, (s, l) => {
    if (s.isTextblock && !s.hasMarkup(r, i) && Lh(n.doc, n.mapping.slice(o).map(l), r)) {
      let a = null;
      if (r.schema.linebreakReplacement) {
        let f = r.whitespace == "pre", h = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        f && !h ? a = !1 : !f && h && (a = !0);
      }
      a === !1 && Ih(n, s, l, o), yu(n, n.mapping.slice(o).map(l, 1), r, void 0, a === null);
      let c = n.mapping.slice(o), u = c.map(l, 1), d = c.map(l + s.nodeSize, 1);
      return n.step(new de(u, d, u + 1, d - 1, new M(S.from(r.create(i, null, s.marks)), 0, 0), 1, !0)), a === !0 && Rh(n, s, l, o), !1;
    }
  });
}
function Rh(n, e, t, r) {
  e.forEach((i, o) => {
    if (i.isText) {
      let s, l = /\r?\n|\r/g;
      for (; s = l.exec(i.text); ) {
        let a = n.mapping.slice(r).map(t + 1 + o + s.index);
        n.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function Ih(n, e, t, r) {
  e.forEach((i, o) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let s = n.mapping.slice(r).map(t + 1 + o);
      n.replaceWith(s, s + 1, e.type.schema.text(`
`));
    }
  });
}
function Lh(n, e, t) {
  let r = n.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, t);
}
function Ph(n, e, t, r, i) {
  let o = n.doc.nodeAt(e);
  if (!o)
    throw new RangeError("No node at given position");
  t || (t = o.type);
  let s = t.create(r, null, i || o.marks);
  if (o.isLeaf)
    return n.replaceWith(e, e + o.nodeSize, s);
  if (!t.validContent(o.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new de(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new M(S.from(s), 0, 0), 1, !0));
}
function Vn(n, e, t = 1, r) {
  let i = n.resolve(e), o = i.depth - t, s = r && r[r.length - 1] || i.parent;
  if (o < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !s.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, u = t - 2; c > o; c--, u--) {
    let d = i.node(c), f = i.index(c);
    if (d.type.spec.isolating)
      return !1;
    let h = d.content.cutByIndex(f, d.childCount), p = r && r[u + 1];
    p && (h = h.replaceChild(0, p.type.create(p.attrs)));
    let g = r && r[u] || d;
    if (!d.canReplace(f + 1, d.childCount) || !g.type.validContent(h))
      return !1;
  }
  let l = i.indexAfter(o), a = r && r[0];
  return i.node(o).canReplaceWith(l, l, a ? a.type : i.node(o + 1).type);
}
function Bh(n, e, t = 1, r) {
  let i = n.doc.resolve(e), o = S.empty, s = S.empty;
  for (let l = i.depth, a = i.depth - t, c = t - 1; l > a; l--, c--) {
    o = S.from(i.node(l).copy(o));
    let u = r && r[c];
    s = S.from(u ? u.type.create(u.attrs, s) : i.node(l).copy(s));
  }
  n.step(new ue(e, e, new M(o.append(s), t, t), !0));
}
function Jt(n, e) {
  let t = n.resolve(e), r = t.index();
  return bu(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function bu(n, e) {
  return !!(n && e && !n.isLeaf && n.canAppend(e));
}
function Co(n, e, t = -1) {
  let r = n.resolve(e);
  for (let i = r.depth; ; i--) {
    let o, s, l = r.index(i);
    if (i == r.depth ? (o = r.nodeBefore, s = r.nodeAfter) : t > 0 ? (o = r.node(i + 1), l++, s = r.node(i).maybeChild(l)) : (o = r.node(i).maybeChild(l - 1), s = r.node(i + 1)), o && !o.isTextblock && bu(o, s) && r.node(i).canReplace(l, l + 1))
      return e;
    if (i == 0)
      break;
    e = t < 0 ? r.before(i) : r.after(i);
  }
}
function Hh(n, e, t) {
  let r = new ue(e - t, e + t, M.empty, !0);
  n.step(r);
}
function zh(n, e, t) {
  let r = n.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), t))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.index(i);
      if (r.node(i).canReplaceWith(o, o, t))
        return r.before(i + 1);
      if (o > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.indexAfter(i);
      if (r.node(i).canReplaceWith(o, o, t))
        return r.after(i + 1);
      if (o < r.node(i).childCount)
        return null;
    }
  return null;
}
function vu(n, e, t) {
  let r = n.resolve(e);
  if (!t.content.size)
    return e;
  let i = t.content;
  for (let o = 0; o < t.openStart; o++)
    i = i.firstChild.content;
  for (let o = 1; o <= (t.openStart == 0 && t.size ? 2 : 1); o++)
    for (let s = r.depth; s >= 0; s--) {
      let l = s == r.depth ? 0 : r.pos <= (r.start(s + 1) + r.end(s + 1)) / 2 ? -1 : 1, a = r.index(s) + (l > 0 ? 1 : 0), c = r.node(s), u = !1;
      if (o == 1)
        u = c.canReplace(a, a, i);
      else {
        let d = c.contentMatchAt(a).findWrapping(i.firstChild.type);
        u = d && c.canReplaceWith(a, a, d[0]);
      }
      if (u)
        return l == 0 ? r.pos : l < 0 ? r.before(s + 1) : r.after(s + 1);
    }
  return null;
}
function xo(n, e, t = e, r = M.empty) {
  if (e == t && !r.size)
    return null;
  let i = n.resolve(e), o = n.resolve(t);
  return wu(i, o, r) ? new ue(e, t, r) : new $h(i, o, r).fit();
}
function wu(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class $h {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = S.empty;
    for (let i = 0; i <= e.depth; i++) {
      let o = e.node(i);
      this.frontier.push({
        type: o.type,
        match: o.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = S.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let o = this.placed, s = r.depth, l = i.depth;
    for (; s && l && o.childCount == 1; )
      o = o.firstChild.content, s--, l--;
    let a = new M(o, s, l);
    return e > -1 ? new de(r.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || r.pos != this.$to.pos ? new ue(r.pos, i.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let o = t.firstChild;
      if (t.childCount > 1 && (i = 0), o.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      t = o.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, o = null;
        r ? (o = Uo(this.unplaced.content, r - 1).firstChild, i = o.content) : i = this.unplaced.content;
        let s = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], u, d = null;
          if (t == 1 && (s ? c.matchType(s.type) || (d = c.fillBefore(S.from(s), !1)) : o && a.compatibleContent(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, inject: d };
          if (t == 2 && s && (u = c.findWrapping(s.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, wrap: u };
          if (o && c.matchType(o.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = Uo(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new M(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = Uo(e, t);
    if (i.childCount <= 1 && t > 0) {
      let o = e.size - t <= t + i.size;
      this.unplaced = new M(dr(e, t - 1, 1), t - 1, o ? t - 1 : r);
    } else
      this.unplaced = new M(dr(e, t, 1), t, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: o }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (o)
      for (let g = 0; g < o.length; g++)
        this.openFrontierNode(o[g]);
    let s = this.unplaced, l = r ? r.content : s.content, a = s.openStart - e, c = 0, u = [], { match: d, type: f } = this.frontier[t];
    if (i) {
      for (let g = 0; g < i.childCount; g++)
        u.push(i.child(g));
      d = d.matchFragment(i);
    }
    let h = l.size + e - (s.content.size - s.openEnd);
    for (; c < l.childCount; ) {
      let g = l.child(c), y = d.matchType(g.type);
      if (!y)
        break;
      c++, (c > 1 || a == 0 || g.content.size) && (d = y, u.push(ku(g.mark(f.allowedMarks(g.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let p = c == l.childCount;
    p || (h = -1), this.placed = fr(this.placed, t, S.from(u)), this.frontier[t].match = d, p && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let g = 0, y = l; g < h; g++) {
      let v = y.lastChild;
      this.frontier.push({ type: v.type, match: v.contentMatchAt(v.childCount) }), y = v.content;
    }
    this.unplaced = p ? e == 0 ? M.empty : new M(dr(s.content, e - 1, 1), e - 1, h < 0 ? s.openEnd : e - 1) : new M(dr(s.content, e, c), s.openStart, s.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !Ko(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
      let { match: r, type: i } = this.frontier[t], o = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), s = Ko(e, t, i, r, o);
      if (s) {
        for (let l = t - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l], u = Ko(e, l, c, a, !0);
          if (!u || u.childCount)
            continue e;
        }
        return { depth: t, fit: s, move: o ? e.doc.resolve(e.after(t + 1)) : e };
      }
    }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = fr(this.placed, t.depth, t.fit)), e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), o = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, o);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = fr(this.placed, this.depth, S.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(S.empty, !0);
    t.childCount && (this.placed = fr(this.placed, this.frontier.length, t));
  }
}
function dr(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(dr(n.firstChild.content, e - 1, t)));
}
function fr(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(fr(n.lastChild.content, e - 1, t)));
}
function Uo(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function ku(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, ku(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(S.empty, !0)))), n.copy(r);
}
function Ko(n, e, t, r, i) {
  let o = n.node(e), s = i ? n.indexAfter(e) : n.index(e);
  if (s == o.childCount && !t.compatibleContent(o.type))
    return null;
  let l = r.fillBefore(o.content, !0, s);
  return l && !Fh(t, o.content, s) ? l : null;
}
function Fh(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function Vh(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function jh(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t);
  let i = n.doc.resolve(e), o = n.doc.resolve(t);
  if (wu(i, o, r))
    return n.step(new ue(e, t, r));
  let s = xu(i, n.doc.resolve(t));
  s[s.length - 1] == 0 && s.pop();
  let l = -(i.depth + 1);
  s.unshift(l);
  for (let f = i.depth, h = i.pos - 1; f > 0; f--, h--) {
    let p = i.node(f).type.spec;
    if (p.defining || p.definingAsContext || p.isolating)
      break;
    s.indexOf(f) > -1 ? l = f : i.before(f) == h && s.splice(1, 0, -f);
  }
  let a = s.indexOf(l), c = [], u = r.openStart;
  for (let f = r.content, h = 0; ; h++) {
    let p = f.firstChild;
    if (c.push(p), h == r.openStart)
      break;
    f = p.content;
  }
  for (let f = u - 1; f >= 0; f--) {
    let h = c[f], p = Vh(h.type);
    if (p && !h.sameMarkup(i.node(Math.abs(l) - 1)))
      u = f;
    else if (p || !h.type.isTextblock)
      break;
  }
  for (let f = r.openStart; f >= 0; f--) {
    let h = (f + u + 1) % (r.openStart + 1), p = c[h];
    if (p)
      for (let g = 0; g < s.length; g++) {
        let y = s[(g + a) % s.length], v = !0;
        y < 0 && (v = !1, y = -y);
        let w = i.node(y - 1), k = i.index(y - 1);
        if (w.canReplaceWith(k, k, p.type, p.marks))
          return n.replace(i.before(y), v ? o.after(y) : t, new M(Cu(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let d = n.steps.length;
  for (let f = s.length - 1; f >= 0 && (n.replace(e, t, r), !(n.steps.length > d)); f--) {
    let h = s[f];
    h < 0 || (e = i.before(h), t = o.after(h));
  }
}
function Cu(n, e, t, r, i) {
  if (e < t) {
    let o = n.firstChild;
    n = n.replaceChild(0, o.copy(Cu(o.content, e + 1, t, r, o)));
  }
  if (e > r) {
    let o = i.contentMatchAt(0), s = o.fillBefore(n).append(n);
    n = s.append(o.matchFragment(s).fillBefore(S.empty, !0));
  }
  return n;
}
function Wh(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let i = zh(n.doc, e, r.type);
    i != null && (e = t = i);
  }
  n.replaceRange(e, t, new M(S.from(r), 0, 0));
}
function _h(n, e, t) {
  let r = n.doc.resolve(e), i = n.doc.resolve(t), o = xu(r, i);
  for (let s = 0; s < o.length; s++) {
    let l = o[s], a = s == o.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return n.delete(r.start(l), i.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1))))
      return n.delete(r.before(l), i.after(l));
  }
  for (let s = 1; s <= r.depth && s <= i.depth; s++)
    if (e - r.start(s) == r.depth - s && t > r.end(s) && i.end(s) - t != i.depth - s)
      return n.delete(r.before(s), t);
  n.delete(e, t);
}
function xu(n, e) {
  let t = [], r = Math.min(n.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let o = n.start(i);
    if (o < n.pos - (n.depth - i) || e.end(i) > e.pos + (e.depth - i) || n.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (o == e.start(i) || i == n.depth && i == e.depth && n.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == o - 1) && t.push(i);
  }
  return t;
}
class jn extends Te {
  /**
  Construct an attribute step.
  */
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return le.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in t.attrs)
      r[o] = t.attrs[o];
    r[this.attr] = this.value;
    let i = t.type.create(r, null, t.marks);
    return le.fromReplace(e, this.pos, this.pos + 1, new M(S.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return He.empty;
  }
  invert(e) {
    return new jn(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new jn(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new jn(t.pos, t.attr, t.value);
  }
}
Te.jsonID("attr", jn);
class Tr extends Te {
  /**
  Construct an attribute step.
  */
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      t[i] = e.attrs[i];
    t[this.attr] = this.value;
    let r = e.type.create(t, e.content, e.marks);
    return le.ok(r);
  }
  getMap() {
    return He.empty;
  }
  invert(e) {
    return new Tr(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new Tr(t.attr, t.value);
  }
}
Te.jsonID("docAttr", Tr);
let Kn = class extends Error {
};
Kn = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
Kn.prototype = Object.create(Error.prototype);
Kn.prototype.constructor = Kn;
Kn.prototype.name = "TransformError";
class il {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new Fn();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed)
      throw new Kn(t.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let t = e.apply(this.doc);
    return t.failed || this.addStep(e, t.doc), t;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, t = e, r = M.empty) {
    let i = xo(this.doc, e, t, r);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, t, r) {
    return this.replace(e, t, new M(S.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, t) {
    return this.replace(e, t, M.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, t, r) {
    return jh(this, e, t, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, t, r) {
    return Wh(this, e, t, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, t) {
    return _h(this, e, t), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, t) {
    return Eh(this, e, t), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, t = 1) {
    return Hh(this, e, t), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, t) {
    return Nh(this, e, t), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, t = e, r, i = null) {
    return Dh(this, e, t, r, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, t, r = null, i) {
    return Ph(this, e, t, r, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, t, r) {
    return this.step(new jn(e, t, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, t) {
    return this.step(new Tr(e, t)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, t) {
    return this.step(new Ft(e, t)), this;
  }
  /**
  Remove a mark (or a mark of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, t) {
    if (!(t instanceof Y)) {
      let r = this.doc.nodeAt(e);
      if (!r)
        throw new RangeError("No node at position " + e);
      if (t = t.isInSet(r.marks), !t)
        return this;
    }
    return this.step(new Un(e, t)), this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split.
  */
  split(e, t = 1, r) {
    return Bh(this, e, t, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, t, r) {
    return Sh(this, e, t, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, t, r) {
    return Th(this, e, t, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, t, r) {
    return yu(this, e, t, r), this;
  }
}
const qo = /* @__PURE__ */ Object.create(null);
class L {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, t, r) {
    this.$anchor = e, this.$head = t, this.ranges = r || [new Su(e.min(t), e.max(t))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let t = 0; t < e.length; t++)
      if (e[t].$from.pos != e[t].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, t = M.empty) {
    let r = t.content.lastChild, i = null;
    for (let l = 0; l < t.openEnd; l++)
      i = r, r = r.lastChild;
    let o = e.steps.length, s = this.ranges;
    for (let l = 0; l < s.length; l++) {
      let { $from: a, $to: c } = s[l], u = e.mapping.slice(o);
      e.replaceRange(u.map(a.pos), u.map(c.pos), l ? M.empty : t), l == 0 && ia(e, o, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, t) {
    let r = e.steps.length, i = this.ranges;
    for (let o = 0; o < i.length; o++) {
      let { $from: s, $to: l } = i[o], a = e.mapping.slice(r), c = a.map(s.pos), u = a.map(l.pos);
      o ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, t), ia(e, r, t.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, t, r = !1) {
    let i = e.parent.inlineContent ? new I(e) : In(e.node(0), e.parent, e.pos, e.index(), t, r);
    if (i)
      return i;
    for (let o = e.depth - 1; o >= 0; o--) {
      let s = t < 0 ? In(e.node(0), e.node(o), e.before(o + 1), e.index(o), t, r) : In(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, t, r);
      if (s)
        return s;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new et(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return In(e, e, 0, 0, 1) || new et(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return In(e, e, e.content.size, e.childCount, -1) || new et(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = qo[t.type];
    if (!r)
      throw new RangeError(`No selection type ${t.type} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, t) {
    if (e in qo)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return qo[e] = t, t.prototype.jsonID = e, t;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return I.between(this.$anchor, this.$head).getBookmark();
  }
}
L.prototype.visible = !0;
class Su {
  /**
  Create a range.
  */
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let na = !1;
function ra(n) {
  !na && !n.parent.inlineContent && (na = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class I extends L {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, t = e) {
    ra(e), ra(t), super(e, t);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    if (!r.parent.inlineContent)
      return L.near(r);
    let i = e.resolve(t.map(this.anchor));
    return new I(i.parent.inlineContent ? i : r, r);
  }
  replace(e, t = M.empty) {
    if (super.replace(e, t), t == M.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof I && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new So(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new I(e.resolve(t.anchor), e.resolve(t.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, t, r = t) {
    let i = e.resolve(t);
    return new this(i, r == t ? i : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, t, r) {
    let i = e.pos - t.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let o = L.findFrom(t, r, !0) || L.findFrom(t, -r, !0);
      if (o)
        t = o.$head;
      else
        return L.near(t, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (L.findFrom(e, -r, !0) || L.findFrom(e, r, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new I(e, t);
  }
}
L.jsonID("text", I);
class So {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new So(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return I.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class D extends L {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let t = e.nodeAfter, r = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, r), this.node = t;
  }
  map(e, t) {
    let { deleted: r, pos: i } = t.mapResult(this.anchor), o = e.resolve(i);
    return r ? L.near(o) : new D(o);
  }
  content() {
    return new M(S.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof D && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new ol(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new D(e.resolve(t.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, t) {
    return new D(e.resolve(t));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
D.prototype.visible = !1;
L.jsonID("node", D);
class ol {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: r } = e.mapResult(this.anchor);
    return t ? new So(r, r) : new ol(r);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), r = t.nodeAfter;
    return r && D.isSelectable(r) ? new D(t) : L.near(t);
  }
}
class et extends L {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = M.empty) {
    if (t == M.empty) {
      e.delete(0, e.doc.content.size);
      let r = L.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new et(e);
  }
  map(e) {
    return new et(e);
  }
  eq(e) {
    return e instanceof et;
  }
  getBookmark() {
    return Uh;
  }
}
L.jsonID("all", et);
const Uh = {
  map() {
    return this;
  },
  resolve(n) {
    return new et(n);
  }
};
function In(n, e, t, r, i, o = !1) {
  if (e.inlineContent)
    return I.create(n, t);
  for (let s = r - (i > 0 ? 0 : 1); i > 0 ? s < e.childCount : s >= 0; s += i) {
    let l = e.child(s);
    if (l.isAtom) {
      if (!o && D.isSelectable(l))
        return D.create(n, t - (i < 0 ? l.nodeSize : 0));
    } else {
      let a = In(n, l, t + i, i < 0 ? l.childCount : 0, i, o);
      if (a)
        return a;
    }
    t += l.nodeSize * i;
  }
  return null;
}
function ia(n, e, t) {
  let r = n.steps.length - 1;
  if (r < e)
    return;
  let i = n.steps[r];
  if (!(i instanceof ue || i instanceof de))
    return;
  let o = n.mapping.maps[r], s;
  o.forEach((l, a, c, u) => {
    s == null && (s = u);
  }), n.setSelection(L.near(n.doc.resolve(s), t));
}
const oa = 1, ii = 2, sa = 4;
class Kh extends il {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | oa) & ~ii, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & oa) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= ii, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return Y.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & ii) > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    super.addStep(e, t), this.updated = this.updated & ~ii, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, t = !0) {
    let r = this.selection;
    return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || Y.none))), r.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, t, r) {
    let i = this.doc.type.schema;
    if (t == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = t), r = r ?? t, !e)
        return this.deleteRange(t, r);
      let o = this.storedMarks;
      if (!o) {
        let s = this.doc.resolve(t);
        o = r == t ? s.marks() : s.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(t, r, i.text(e, o)), this.selection.empty || this.setSelection(L.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, t) {
    return this.meta[typeof e == "string" ? e : e.key] = t, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= sa, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & sa) > 0;
  }
}
function la(n, e) {
  return !e || !n ? n : n.bind(e);
}
class hr {
  constructor(e, t, r) {
    this.name = e, this.init = la(t.init, r), this.apply = la(t.apply, r);
  }
}
const qh = [
  new hr("doc", {
    init(n) {
      return n.doc || n.schema.topNodeType.createAndFill();
    },
    apply(n) {
      return n.doc;
    }
  }),
  new hr("selection", {
    init(n, e) {
      return n.selection || L.atStart(e.doc);
    },
    apply(n) {
      return n.selection;
    }
  }),
  new hr("storedMarks", {
    init(n) {
      return n.storedMarks || null;
    },
    apply(n, e, t, r) {
      return r.selection.$cursor ? n.storedMarks : null;
    }
  }),
  new hr("scrollToSelection", {
    init() {
      return 0;
    },
    apply(n, e) {
      return n.scrolledIntoView ? e + 1 : e;
    }
  })
];
class Jo {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = qh.slice(), t && t.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new hr(r.key, r.spec.state, r));
    });
  }
}
class zn {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, t = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != t) {
        let i = this.config.plugins[r];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let t = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let o = !1;
      for (let s = 0; s < this.config.plugins.length; s++) {
        let l = this.config.plugins[s];
        if (l.spec.appendTransaction) {
          let a = i ? i[s].n : 0, c = i ? i[s].state : this, u = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, c, r);
          if (u && r.filterTransaction(u, s)) {
            if (u.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let d = 0; d < this.config.plugins.length; d++)
                i.push(d < s ? { state: r, n: t.length } : { state: this, n: 0 });
            }
            t.push(u), r = r.applyInner(u), o = !0;
          }
          i && (i[s] = { state: r, n: t.length });
        }
      }
      if (!o)
        return { state: r, transactions: t };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let t = new zn(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let o = r[i];
      t[o.name] = o.apply(e, this[o.name], this, t);
    }
    return t;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new Kh(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let t = new Jo(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new zn(t);
    for (let i = 0; i < t.fields.length; i++)
      r[t.fields[i].name] = t.fields[i].init(e, r);
    return r;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let t = new Jo(this.schema, e.plugins), r = t.fields, i = new zn(t);
    for (let o = 0; o < r.length; o++) {
      let s = r[o].name;
      i[s] = this.hasOwnProperty(s) ? this[s] : r[o].init(e, i);
    }
    return i;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (t.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], o = i.spec.state;
        o && o.toJSON && (t[r] = o.toJSON.call(i, this[i.key]));
      }
    return t;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, t, r) {
    if (!t)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new Jo(e.schema, e.plugins), o = new zn(i);
    return i.fields.forEach((s) => {
      if (s.name == "doc")
        o.doc = dn.fromJSON(e.schema, t.doc);
      else if (s.name == "selection")
        o.selection = L.fromJSON(o.doc, t.selection);
      else if (s.name == "storedMarks")
        t.storedMarks && (o.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let l in r) {
            let a = r[l], c = a.spec.state;
            if (a.key == s.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
              o[s.name] = c.fromJSON.call(a, e, t[l], o);
              return;
            }
          }
        o[s.name] = s.init(e, o);
      }
    }), o;
  }
}
function Tu(n, e, t) {
  for (let r in n) {
    let i = n[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = Tu(i, e, {})), t[r] = i;
  }
  return t;
}
class se {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Tu(e.props, this, this.props), this.key = e.key ? e.key.key : Mu("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Go = /* @__PURE__ */ Object.create(null);
function Mu(n) {
  return n in Go ? n + "$" + ++Go[n] : (Go[n] = 0, n + "$");
}
class ae {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = Mu(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const ye = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, Mr = function(n) {
  let e = n.assignedSlot || n.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let Cs = null;
const St = function(n, e, t) {
  let r = Cs || (Cs = document.createRange());
  return r.setEnd(n, t ?? n.nodeValue.length), r.setStart(n, e || 0), r;
}, Jh = function() {
  Cs = null;
}, yn = function(n, e, t, r) {
  return t && (aa(n, e, t, r, -1) || aa(n, e, t, r, 1));
}, Gh = /^(img|br|input|textarea|hr)$/i;
function aa(n, e, t, r, i) {
  for (; ; ) {
    if (n == t && e == r)
      return !0;
    if (e == (i < 0 ? 0 : at(n))) {
      let o = n.parentNode;
      if (!o || o.nodeType != 1 || Fr(n) || Gh.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = ye(n) + (i < 0 ? 0 : 1), n = o;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (i < 0 ? -1 : 0)], n.contentEditable == "false")
        return !1;
      e = i < 0 ? at(n) : 0;
    } else
      return !1;
  }
}
function at(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function Yh(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e)
      return n;
    if (n.nodeType == 1 && e > 0) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e - 1], e = at(n);
    } else if (n.parentNode && !Fr(n))
      e = ye(n), n = n.parentNode;
    else
      return null;
  }
}
function Xh(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e < n.nodeValue.length)
      return n;
    if (n.nodeType == 1 && e < n.childNodes.length) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e], e = 0;
    } else if (n.parentNode && !Fr(n))
      e = ye(n) + 1, n = n.parentNode;
    else
      return null;
  }
}
function Qh(n, e, t) {
  for (let r = e == 0, i = e == at(n); r || i; ) {
    if (n == t)
      return !0;
    let o = ye(n);
    if (n = n.parentNode, !n)
      return !1;
    r = r && o == 0, i = i && o == at(n);
  }
}
function Fr(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const To = function(n) {
  return n.focusNode && yn(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function nn(n, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
function Zh(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function ep(n, e, t) {
  if (n.caretPositionFromPoint)
    try {
      let r = n.caretPositionFromPoint(e, t);
      if (r)
        return { node: r.offsetNode, offset: r.offset };
    } catch {
    }
  if (n.caretRangeFromPoint) {
    let r = n.caretRangeFromPoint(e, t);
    if (r)
      return { node: r.startContainer, offset: r.startOffset };
  }
}
const ft = typeof navigator < "u" ? navigator : null, ca = typeof document < "u" ? document : null, Gt = ft && ft.userAgent || "", xs = /Edge\/(\d+)/.exec(Gt), Eu = /MSIE \d/.exec(Gt), Ss = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Gt), Ie = !!(Eu || Ss || xs), Wt = Eu ? document.documentMode : Ss ? +Ss[1] : xs ? +xs[1] : 0, tt = !Ie && /gecko\/(\d+)/i.test(Gt);
tt && +(/Firefox\/(\d+)/.exec(Gt) || [0, 0])[1];
const Ts = !Ie && /Chrome\/(\d+)/.exec(Gt), Ce = !!Ts, Ou = Ts ? +Ts[1] : 0, Ee = !Ie && !!ft && /Apple Computer/.test(ft.vendor), qn = Ee && (/Mobile\/\w+/.test(Gt) || !!ft && ft.maxTouchPoints > 2), We = qn || (ft ? /Mac/.test(ft.platform) : !1), tp = ft ? /Win/.test(ft.platform) : !1, Qe = /Android \d/.test(Gt), Vr = !!ca && "webkitFontSmoothing" in ca.documentElement.style, np = Vr ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function rp(n) {
  let e = n.defaultView && n.defaultView.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: n.documentElement.clientWidth,
    top: 0,
    bottom: n.documentElement.clientHeight
  };
}
function kt(n, e) {
  return typeof n == "number" ? n : n[e];
}
function ip(n) {
  let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, r = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * r
  };
}
function ua(n, e, t) {
  let r = n.someProp("scrollThreshold") || 0, i = n.someProp("scrollMargin") || 5, o = n.dom.ownerDocument;
  for (let s = t || n.dom; s; s = Mr(s)) {
    if (s.nodeType != 1)
      continue;
    let l = s, a = l == o.body, c = a ? rp(o) : ip(l), u = 0, d = 0;
    if (e.top < c.top + kt(r, "top") ? d = -(c.top - e.top + kt(i, "top")) : e.bottom > c.bottom - kt(r, "bottom") && (d = e.bottom - e.top > c.bottom - c.top ? e.top + kt(i, "top") - c.top : e.bottom - c.bottom + kt(i, "bottom")), e.left < c.left + kt(r, "left") ? u = -(c.left - e.left + kt(i, "left")) : e.right > c.right - kt(r, "right") && (u = e.right - c.right + kt(i, "right")), u || d)
      if (a)
        o.defaultView.scrollBy(u, d);
      else {
        let f = l.scrollLeft, h = l.scrollTop;
        d && (l.scrollTop += d), u && (l.scrollLeft += u);
        let p = l.scrollLeft - f, g = l.scrollTop - h;
        e = { left: e.left - p, top: e.top - g, right: e.right - p, bottom: e.bottom - g };
      }
    if (a || /^(fixed|sticky)$/.test(getComputedStyle(s).position))
      break;
  }
}
function op(n) {
  let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), r, i;
  for (let o = (e.left + e.right) / 2, s = t + 1; s < Math.min(innerHeight, e.bottom); s += 5) {
    let l = n.root.elementFromPoint(o, s);
    if (!l || l == n.dom || !n.dom.contains(l))
      continue;
    let a = l.getBoundingClientRect();
    if (a.top >= t - 20) {
      r = l, i = a.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: Au(n.dom) };
}
function Au(n) {
  let e = [], t = n.ownerDocument;
  for (let r = n; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), n != t); r = Mr(r))
    ;
  return e;
}
function sp({ refDOM: n, refTop: e, stack: t }) {
  let r = n ? n.getBoundingClientRect().top : 0;
  Nu(t, r == 0 ? 0 : r - e);
}
function Nu(n, e) {
  for (let t = 0; t < n.length; t++) {
    let { dom: r, top: i, left: o } = n[t];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != o && (r.scrollLeft = o);
  }
}
let An = null;
function lp(n) {
  if (n.setActive)
    return n.setActive();
  if (An)
    return n.focus(An);
  let e = Au(n);
  n.focus(An == null ? {
    get preventScroll() {
      return An = { preventScroll: !0 }, !0;
    }
  } : void 0), An || (An = !1, Nu(e, 0));
}
function Du(n, e) {
  let t, r = 2e8, i, o = 0, s = e.top, l = e.top, a, c;
  for (let u = n.firstChild, d = 0; u; u = u.nextSibling, d++) {
    let f;
    if (u.nodeType == 1)
      f = u.getClientRects();
    else if (u.nodeType == 3)
      f = St(u).getClientRects();
    else
      continue;
    for (let h = 0; h < f.length; h++) {
      let p = f[h];
      if (p.top <= s && p.bottom >= l) {
        s = Math.max(p.bottom, s), l = Math.min(p.top, l);
        let g = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
        if (g < r) {
          t = u, r = g, i = g && t.nodeType == 3 ? {
            left: p.right < e.left ? p.right : p.left,
            top: e.top
          } : e, u.nodeType == 1 && g && (o = d + (e.left >= (p.left + p.right) / 2 ? 1 : 0));
          continue;
        }
      } else p.top > e.top && !a && p.left <= e.left && p.right >= e.left && (a = u, c = { left: Math.max(p.left, Math.min(p.right, e.left)), top: p.top });
      !t && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom) && (o = d + 1);
    }
  }
  return !t && a && (t = a, i = c, r = 0), t && t.nodeType == 3 ? ap(t, i) : !t || r && t.nodeType == 1 ? { node: n, offset: o } : Du(t, i);
}
function ap(n, e) {
  let t = n.nodeValue.length, r = document.createRange();
  for (let i = 0; i < t; i++) {
    r.setEnd(n, i + 1), r.setStart(n, i);
    let o = Rt(r, 1);
    if (o.top != o.bottom && sl(e, o))
      return { node: n, offset: i + (e.left >= (o.left + o.right) / 2 ? 1 : 0) };
  }
  return { node: n, offset: 0 };
}
function sl(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function cp(n, e) {
  let t = n.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function up(n, e, t) {
  let { node: r, offset: i } = Du(e, t), o = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let s = r.getBoundingClientRect();
    o = s.left != s.right && t.left > (s.left + s.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(r, i, o);
}
function dp(n, e, t, r) {
  let i = -1;
  for (let o = e, s = !1; o != n.dom; ) {
    let l = n.docView.nearestDesc(o, !0);
    if (!l)
      return null;
    if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM)) {
      let a = l.dom.getBoundingClientRect();
      if (l.node.isBlock && l.parent && (!s && a.left > r.left || a.top > r.top ? i = l.posBefore : (!s && a.right < r.left || a.bottom < r.top) && (i = l.posAfter), s = !0), !l.contentDOM && i < 0 && !l.node.isText)
        return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
    }
    o = l.dom.parentNode;
  }
  return i > -1 ? i : n.docView.posFromDOM(e, t, -1);
}
function Ru(n, e, t) {
  let r = n.childNodes.length;
  if (r && t.top < t.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), o = i; ; ) {
      let s = n.childNodes[o];
      if (s.nodeType == 1) {
        let l = s.getClientRects();
        for (let a = 0; a < l.length; a++) {
          let c = l[a];
          if (sl(e, c))
            return Ru(s, e, c);
        }
      }
      if ((o = (o + 1) % r) == i)
        break;
    }
  return n;
}
function fp(n, e) {
  let t = n.dom.ownerDocument, r, i = 0, o = ep(t, e.left, e.top);
  o && ({ node: r, offset: i } = o);
  let s = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), l;
  if (!s || !n.dom.contains(s.nodeType != 1 ? s.parentNode : s)) {
    let c = n.dom.getBoundingClientRect();
    if (!sl(e, c) || (s = Ru(n.dom, e, c), !s))
      return null;
  }
  if (Ee)
    for (let c = s; r && c; c = Mr(c))
      c.draggable && (r = void 0);
  if (s = cp(s, e), r) {
    if (tt && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let u = r.childNodes[i], d;
      u.nodeName == "IMG" && (d = u.getBoundingClientRect()).right <= e.left && d.bottom > e.top && i++;
    }
    let c;
    Vr && i && r.nodeType == 1 && (c = r.childNodes[i - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && i--, r == n.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = n.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (l = dp(n, r, i, e));
  }
  l == null && (l = up(n, s, e));
  let a = n.docView.nearestDesc(s, !0);
  return { pos: l, inside: a ? a.posAtStart - a.border : -1 };
}
function da(n) {
  return n.top < n.bottom || n.left < n.right;
}
function Rt(n, e) {
  let t = n.getClientRects();
  if (t.length) {
    let r = t[e < 0 ? 0 : t.length - 1];
    if (da(r))
      return r;
  }
  return Array.prototype.find.call(t, da) || n.getBoundingClientRect();
}
const hp = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function Iu(n, e, t) {
  let { node: r, offset: i, atom: o } = n.docView.domFromPos(e, t < 0 ? -1 : 1), s = Vr || tt;
  if (r.nodeType == 3)
    if (s && (hp.test(r.nodeValue) || (t < 0 ? !i : i == r.nodeValue.length))) {
      let a = Rt(St(r, i, i), t);
      if (tt && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let c = Rt(St(r, i - 1, i - 1), -1);
        if (c.top == a.top) {
          let u = Rt(St(r, i, i + 1), -1);
          if (u.top != a.top)
            return cr(u, u.left < c.left);
        }
      }
      return a;
    } else {
      let a = i, c = i, u = t < 0 ? 1 : -1;
      return t < 0 && !i ? (c++, u = -1) : t >= 0 && i == r.nodeValue.length ? (a--, u = 1) : t < 0 ? a-- : c++, cr(Rt(St(r, a, c), u), u < 0);
    }
  if (!n.state.doc.resolve(e - (o || 0)).parent.inlineContent) {
    if (o == null && i && (t < 0 || i == at(r))) {
      let a = r.childNodes[i - 1];
      if (a.nodeType == 1)
        return Yo(a.getBoundingClientRect(), !1);
    }
    if (o == null && i < at(r)) {
      let a = r.childNodes[i];
      if (a.nodeType == 1)
        return Yo(a.getBoundingClientRect(), !0);
    }
    return Yo(r.getBoundingClientRect(), t >= 0);
  }
  if (o == null && i && (t < 0 || i == at(r))) {
    let a = r.childNodes[i - 1], c = a.nodeType == 3 ? St(a, at(a) - (s ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (c)
      return cr(Rt(c, 1), !1);
  }
  if (o == null && i < at(r)) {
    let a = r.childNodes[i];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let c = a ? a.nodeType == 3 ? St(a, 0, s ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (c)
      return cr(Rt(c, -1), !0);
  }
  return cr(Rt(r.nodeType == 3 ? St(r) : r, -t), t >= 0);
}
function cr(n, e) {
  if (n.width == 0)
    return n;
  let t = e ? n.left : n.right;
  return { top: n.top, bottom: n.bottom, left: t, right: t };
}
function Yo(n, e) {
  if (n.height == 0)
    return n;
  let t = e ? n.top : n.bottom;
  return { top: t, bottom: t, left: n.left, right: n.right };
}
function Lu(n, e, t) {
  let r = n.state, i = n.root.activeElement;
  r != e && n.updateState(e), i != n.dom && n.focus();
  try {
    return t();
  } finally {
    r != e && n.updateState(r), i != n.dom && i && i.focus();
  }
}
function pp(n, e, t) {
  let r = e.selection, i = t == "up" ? r.$from : r.$to;
  return Lu(n, e, () => {
    let { node: o } = n.docView.domFromPos(i.pos, t == "up" ? -1 : 1);
    for (; ; ) {
      let l = n.docView.nearestDesc(o, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        o = l.contentDOM || l.dom;
        break;
      }
      o = l.dom.parentNode;
    }
    let s = Iu(n, i.pos, 1);
    for (let l = o.firstChild; l; l = l.nextSibling) {
      let a;
      if (l.nodeType == 1)
        a = l.getClientRects();
      else if (l.nodeType == 3)
        a = St(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < a.length; c++) {
        let u = a[c];
        if (u.bottom > u.top + 1 && (t == "up" ? s.top - u.top > (u.bottom - s.top) * 2 : u.bottom - s.bottom > (s.bottom - u.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const mp = /[\u0590-\u08ac]/;
function gp(n, e, t) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, o = !i, s = i == r.parent.content.size, l = n.domSelection();
  return !mp.test(r.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? o : s : Lu(n, e, () => {
    let { focusNode: a, focusOffset: c, anchorNode: u, anchorOffset: d } = n.domSelectionRange(), f = l.caretBidiLevel;
    l.modify("move", t, "character");
    let h = r.depth ? n.docView.domAfterPos(r.before()) : n.dom, { focusNode: p, focusOffset: g } = n.domSelectionRange(), y = p && !h.contains(p.nodeType == 1 ? p : p.parentNode) || a == p && c == g;
    try {
      l.collapse(u, d), a && (a != u || c != d) && l.extend && l.extend(a, c);
    } catch {
    }
    return f != null && (l.caretBidiLevel = f), y;
  });
}
let fa = null, ha = null, pa = !1;
function yp(n, e, t) {
  return fa == e && ha == t ? pa : (fa = e, ha = t, pa = t == "up" || t == "down" ? pp(n, e, t) : gp(n, e, t));
}
const Ue = 0, ma = 1, sn = 2, ht = 3;
class jr {
  constructor(e, t, r, i) {
    this.parent = e, this.children = t, this.dom = r, this.contentDOM = i, this.dirty = Ue, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, t, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let t = 0; t < this.children.length; t++)
      e += this.children[t].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let t = 0, r = this.posAtStart; ; t++) {
      let i = this.children[t];
      if (i == e)
        return r;
      r += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, t, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[t - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.previousSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.previousSibling;
        return o ? this.posBeforeChild(s) + s.size : this.posAtStart;
      } else {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[t];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.nextSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.nextSibling;
        return o ? this.posBeforeChild(s) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = t > ye(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (t == 0)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !1;
            break;
          }
          if (o.previousSibling)
            break;
        }
      if (i == null && t == e.childNodes.length)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !0;
            break;
          }
          if (o.nextSibling)
            break;
        }
    }
    return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, t = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let o = this.getDesc(i), s;
      if (o && (!t || o.node))
        if (r && (s = o.nodeDOM) && !(s.nodeType == 1 ? s.contains(e.nodeType == 1 ? e : e.parentNode) : s == e))
          r = !1;
        else
          return o;
    }
  }
  getDesc(e) {
    let t = e.pmViewDesc;
    for (let r = t; r; r = r.parent)
      if (r == this)
        return t;
  }
  posFromDOM(e, t, r) {
    for (let i = e; i; i = i.parentNode) {
      let o = this.getDesc(i);
      if (o)
        return o.localPosFromDOM(e, t, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let t = 0, r = 0; t < this.children.length; t++) {
      let i = this.children[t], o = r + i.size;
      if (r == e && o != r) {
        for (; !i.border && i.children.length; )
          i = i.children[0];
        return i;
      }
      if (e < o)
        return i.descAt(e - r - i.border);
      r = o;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let o = 0; r < this.children.length; r++) {
      let s = this.children[r], l = o + s.size;
      if (l > e || s instanceof Bu) {
        i = e - o;
        break;
      }
      o = l;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, t);
    for (let o; r && !(o = this.children[r - 1]).size && o instanceof Pu && o.side >= 0; r--)
      ;
    if (t <= 0) {
      let o, s = !0;
      for (; o = r ? this.children[r - 1] : null, !(!o || o.dom.parentNode == this.contentDOM); r--, s = !1)
        ;
      return o && t && s && !o.border && !o.domAtom ? o.domFromPos(o.size, t) : { node: this.contentDOM, offset: o ? ye(o.dom) + 1 : 0 };
    } else {
      let o, s = !0;
      for (; o = r < this.children.length ? this.children[r] : null, !(!o || o.dom.parentNode == this.contentDOM); r++, s = !1)
        ;
      return o && s && !o.border && !o.domAtom ? o.domFromPos(0, t) : { node: this.contentDOM, offset: o ? ye(o.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, t, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, o = -1;
    for (let s = r, l = 0; ; l++) {
      let a = this.children[l], c = s + a.size;
      if (i == -1 && e <= c) {
        let u = s + a.border;
        if (e >= u && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, t, u);
        e = s;
        for (let d = l; d > 0; d--) {
          let f = this.children[d - 1];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(1)) {
            i = ye(f.dom) + 1;
            break;
          }
          e -= f.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (c > t || l == this.children.length - 1)) {
        t = c;
        for (let u = l + 1; u < this.children.length; u++) {
          let d = this.children[u];
          if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(-1)) {
            o = ye(d.dom);
            break;
          }
          t += d.size;
        }
        o == -1 && (o = this.contentDOM.childNodes.length);
        break;
      }
      s = c;
    }
    return { node: this.contentDOM, from: e, to: t, fromOffset: i, toOffset: o };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let t = this.children[e < 0 ? 0 : this.children.length - 1];
    return t.size == 0 || t.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: t, offset: r } = this.domFromPos(e, 0);
    if (t.nodeType != 1 || r == t.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return t.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, t, r, i = !1) {
    let o = Math.min(e, t), s = Math.max(e, t);
    for (let f = 0, h = 0; f < this.children.length; f++) {
      let p = this.children[f], g = h + p.size;
      if (o > h && s < g)
        return p.setSelection(e - h - p.border, t - h - p.border, r, i);
      h = g;
    }
    let l = this.domFromPos(e, e ? -1 : 1), a = t == e ? l : this.domFromPos(t, t ? -1 : 1), c = r.getSelection(), u = !1;
    if ((tt || Ee) && e == t) {
      let { node: f, offset: h } = l;
      if (f.nodeType == 3) {
        if (u = !!(h && f.nodeValue[h - 1] == `
`), u && h == f.nodeValue.length)
          for (let p = f, g; p; p = p.parentNode) {
            if (g = p.nextSibling) {
              g.nodeName == "BR" && (l = a = { node: g.parentNode, offset: ye(g) + 1 });
              break;
            }
            let y = p.pmViewDesc;
            if (y && y.node && y.node.isBlock)
              break;
          }
      } else {
        let p = f.childNodes[h - 1];
        u = p && (p.nodeName == "BR" || p.contentEditable == "false");
      }
    }
    if (tt && c.focusNode && c.focusNode != a.node && c.focusNode.nodeType == 1) {
      let f = c.focusNode.childNodes[c.focusOffset];
      f && f.contentEditable == "false" && (i = !0);
    }
    if (!(i || u && Ee) && yn(l.node, l.offset, c.anchorNode, c.anchorOffset) && yn(a.node, a.offset, c.focusNode, c.focusOffset))
      return;
    let d = !1;
    if ((c.extend || e == t) && !u) {
      c.collapse(l.node, l.offset);
      try {
        e != t && c.extend(a.node, a.offset), d = !0;
      } catch {
      }
    }
    if (!d) {
      if (e > t) {
        let h = l;
        l = a, a = h;
      }
      let f = document.createRange();
      f.setEnd(a.node, a.offset), f.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(f);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, t) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let o = this.children[i], s = r + o.size;
      if (r == s ? e <= s && t >= r : e < s && t > r) {
        let l = r + o.border, a = s - o.border;
        if (e >= l && t <= a) {
          this.dirty = e == r || t == s ? sn : ma, e == l && t == a && (o.contentLost || o.dom.parentNode != this.contentDOM) ? o.dirty = ht : o.markDirty(e - l, t - l);
          return;
        } else
          o.dirty = o.dom == o.contentDOM && o.dom.parentNode == this.contentDOM && !o.children.length ? sn : ht;
      }
      r = s;
    }
    this.dirty = sn;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let r = e == 1 ? sn : ma;
      t.dirty < r && (t.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
  isText(e) {
    return !1;
  }
}
class Pu extends jr {
  constructor(e, t, r, i) {
    let o, s = t.type.toDOM;
    if (typeof s == "function" && (s = s(r, () => {
      if (!o)
        return i;
      if (o.parent)
        return o.parent.posBeforeChild(o);
    })), !t.type.spec.raw) {
      if (s.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(s), s = l;
      }
      s.contentEditable = "false", s.classList.add("ProseMirror-widget");
    }
    super(e, [], s, null), this.widget = t, this.widget = t, o = this;
  }
  matchesWidget(e) {
    return this.dirty == Ue && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let t = this.widget.spec.stopEvent;
    return t ? t(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get side() {
    return this.widget.type.side;
  }
}
class bp extends jr {
  constructor(e, t, r, i) {
    super(e, [], t, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, t) {
    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class bn extends jr {
  constructor(e, t, r, i) {
    super(e, [], r, i), this.mark = t;
  }
  static create(e, t, r, i) {
    let o = i.nodeViews[t.type.name], s = o && o(t, i, r);
    return (!s || !s.dom) && (s = Cn.renderSpec(document, t.type.spec.toDOM(t, r), null, t.attrs)), new bn(e, t, s.dom, s.contentDOM || s.dom);
  }
  parseRule() {
    return this.dirty & ht || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != ht && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != Ue) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = Ue;
    }
  }
  slice(e, t, r) {
    let i = bn.create(this.parent, this.mark, !0, r), o = this.children, s = this.size;
    t < s && (o = Os(o, t, s, r)), e > 0 && (o = Os(o, 0, e, r));
    for (let l = 0; l < o.length; l++)
      o[l].parent = i;
    return i.children = o, i;
  }
}
class _t extends jr {
  constructor(e, t, r, i, o, s, l, a, c) {
    super(e, [], o, s), this.node = t, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = l;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, t, r, i, o, s) {
    let l = o.nodeViews[t.type.name], a, c = l && l(t, o, () => {
      if (!a)
        return s;
      if (a.parent)
        return a.parent.posBeforeChild(a);
    }, r, i), u = c && c.dom, d = c && c.contentDOM;
    if (t.isText) {
      if (!u)
        u = document.createTextNode(t.text);
      else if (u.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else u || ({ dom: u, contentDOM: d } = Cn.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs));
    !d && !t.isText && u.nodeName != "BR" && (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), t.type.spec.draggable && (u.draggable = !0));
    let f = u;
    return u = $u(u, r, t), c ? a = new vp(e, t, r, i, u, d || null, f, c, o, s + 1) : t.isText ? new Mo(e, t, r, i, u, f, o) : new _t(e, t, r, i, u, d || null, f, o, s + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let t = this.children.length - 1; t >= 0; t--) {
        let r = this.children[t];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => S.empty);
    }
    return e;
  }
  matchesNode(e, t, r) {
    return this.dirty == Ue && e.eq(this.node) && Es(t, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, t) {
    let r = this.node.inlineContent, i = t, o = e.composing ? this.localCompositionInfo(e, t) : null, s = o && o.pos > -1 ? o : null, l = o && o.pos < 0, a = new kp(this, s && s.node, e);
    Sp(this.node, this.innerDeco, (c, u, d) => {
      c.spec.marks ? a.syncToMarks(c.spec.marks, r, e) : c.type.side >= 0 && !d && a.syncToMarks(u == this.node.childCount ? Y.none : this.node.child(u).marks, r, e), a.placeWidget(c, e, i);
    }, (c, u, d, f) => {
      a.syncToMarks(c.marks, r, e);
      let h;
      a.findNodeMatch(c, u, d, f) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (h = a.findIndexWithChild(o.node)) > -1 && a.updateNodeAt(c, u, d, h, e) || a.updateNextNode(c, u, d, e, f, i) || a.addNode(c, u, d, e, i), i += c.nodeSize;
    }), a.syncToMarks([], r, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == sn) && (s && this.protectLocalComposition(e, s), Hu(this.contentDOM, this.children, e), qn && Tp(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof I) || r < t || i > t + this.node.content.size)
      return null;
    let o = e.input.compositionNode;
    if (!o || !this.dom.contains(o.parentNode))
      return null;
    if (this.node.inlineContent) {
      let s = o.nodeValue, l = Mp(this.node.content, s, r - t, i - t);
      return l < 0 ? null : { node: o, pos: l, text: s };
    } else
      return { node: o, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: t, pos: r, text: i }) {
    if (this.getDesc(t))
      return;
    let o = t;
    for (; o.parentNode != this.contentDOM; o = o.parentNode) {
      for (; o.previousSibling; )
        o.parentNode.removeChild(o.previousSibling);
      for (; o.nextSibling; )
        o.parentNode.removeChild(o.nextSibling);
      o.pmViewDesc && (o.pmViewDesc = void 0);
    }
    let s = new bp(this, o, t, i);
    e.input.compositionNodes.push(s), this.children = Os(this.children, r, r + i.length, e, s);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, t, r, i) {
    return this.dirty == ht || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, i), !0);
  }
  updateInner(e, t, r, i) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = Ue;
  }
  updateOuterDeco(e) {
    if (Es(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = zu(this.dom, this.nodeDOM, Ms(this.outerDeco, this.node, t), Ms(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable"));
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function ga(n, e, t, r, i) {
  $u(r, e, n);
  let o = new _t(void 0, n, e, t, r, r, r, i, 0);
  return o.contentDOM && o.updateChildren(i, 0), o;
}
class Mo extends _t {
  constructor(e, t, r, i, o, s, l) {
    super(e, t, r, i, o, null, s, l, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, t, r, i) {
    return this.dirty == ht || this.dirty != Ue && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != Ue || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = Ue, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let t = this.nodeDOM; t; t = t.parentNode)
      if (t == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, t, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, t, r) {
    let i = this.node.cut(e, t), o = document.createTextNode(i.text);
    return new Mo(this.parent, i, this.outerDeco, this.innerDeco, o, o, r);
  }
  markDirty(e, t) {
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = ht);
  }
  get domAtom() {
    return !1;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class Bu extends jr {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == Ue && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class vp extends _t {
  constructor(e, t, r, i, o, s, l, a, c, u) {
    super(e, t, r, i, o, s, l, c, u), this.spec = a;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, t, r, i) {
    if (this.dirty == ht)
      return !1;
    if (this.spec.update) {
      let o = this.spec.update(e, t, r);
      return o && this.updateInner(e, t, r, i), o;
    } else return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, t, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, t, r) : super.setSelection(e, t, r, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function Hu(n, e, t) {
  let r = n.firstChild, i = !1;
  for (let o = 0; o < e.length; o++) {
    let s = e[o], l = s.dom;
    if (l.parentNode == n) {
      for (; l != r; )
        r = ya(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, n.insertBefore(l, r);
    if (s instanceof bn) {
      let a = r ? r.previousSibling : n.lastChild;
      Hu(s.contentDOM, s.children, t), r = a ? a.nextSibling : n.firstChild;
    }
  }
  for (; r; )
    r = ya(r), i = !0;
  i && t.trackWrites == n && (t.trackWrites = null);
}
const gr = function(n) {
  n && (this.nodeName = n);
};
gr.prototype = /* @__PURE__ */ Object.create(null);
const ln = [new gr()];
function Ms(n, e, t) {
  if (n.length == 0)
    return ln;
  let r = t ? ln[0] : new gr(), i = [r];
  for (let o = 0; o < n.length; o++) {
    let s = n[o].type.attrs;
    if (s) {
      s.nodeName && i.push(r = new gr(s.nodeName));
      for (let l in s) {
        let a = s[l];
        a != null && (t && i.length == 1 && i.push(r = new gr(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a));
      }
    }
  }
  return i;
}
function zu(n, e, t, r) {
  if (t == ln && r == ln)
    return e;
  let i = e;
  for (let o = 0; o < r.length; o++) {
    let s = r[o], l = t[o];
    if (o) {
      let a;
      l && l.nodeName == s.nodeName && i != n && (a = i.parentNode) && a.nodeName.toLowerCase() == s.nodeName || (a = document.createElement(s.nodeName), a.pmIsDeco = !0, a.appendChild(i), l = ln[0]), i = a;
    }
    wp(i, l || ln[0], s);
  }
  return i;
}
function wp(n, e, t) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r);
  for (let r in t)
    r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]);
  if (e.class != t.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let o = 0; o < r.length; o++)
      i.indexOf(r[o]) == -1 && n.classList.remove(r[o]);
    for (let o = 0; o < i.length; o++)
      r.indexOf(i[o]) == -1 && n.classList.add(i[o]);
    n.classList.length == 0 && n.removeAttribute("class");
  }
  if (e.style != t.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        n.style.removeProperty(i[1]);
    }
    t.style && (n.style.cssText += t.style);
  }
}
function $u(n, e, t) {
  return zu(n, n, ln, Ms(e, t, n.nodeType != 1));
}
function Es(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].type.eq(e[t].type))
      return !1;
  return !0;
}
function ya(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class kp {
  constructor(e, t, r) {
    this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = Cp(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, t) {
    if (e != t) {
      for (let r = e; r < t; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, t - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, t, r) {
    let i = 0, o = this.stack.length >> 1, s = Math.min(o, e.length);
    for (; i < s && (i == o - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
      i++;
    for (; i < o; )
      this.destroyRest(), this.top.dirty = Ue, this.index = this.stack.pop(), this.top = this.stack.pop(), o--;
    for (; o < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let l = -1;
      for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
        let c = this.top.children[a];
        if (c.matchesMark(e[o]) && !this.isLocked(c.dom)) {
          l = a;
          break;
        }
      }
      if (l > -1)
        l > this.index && (this.changed = !0, this.destroyBetween(this.index, l)), this.top = this.top.children[this.index];
      else {
        let a = bn.create(this.top, e[o], t, r);
        this.top.children.splice(this.index, 0, a), this.top = a, this.changed = !0;
      }
      this.index = 0, o++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, t, r, i) {
    let o = -1, s;
    if (i >= this.preMatch.index && (s = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && s.matchesNode(e, t, r))
      o = this.top.children.indexOf(s, this.index);
    else
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let c = this.top.children[l];
        if (c.matchesNode(e, t, r) && !this.preMatch.matched.has(c)) {
          o = l;
          break;
        }
      }
    return o < 0 ? !1 : (this.destroyBetween(this.index, o), this.index++, !0);
  }
  updateNodeAt(e, t, r, i, o) {
    let s = this.top.children[i];
    return s.dirty == ht && s.dom == s.contentDOM && (s.dirty = sn), s.update(e, t, r, o) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let t = e.parentNode;
      if (!t)
        return -1;
      if (t == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = t;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, t, r, i, o, s) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let a = this.top.children[l];
      if (a instanceof _t) {
        let c = this.preMatch.matched.get(a);
        if (c != null && c != o)
          return !1;
        let u = a.dom, d, f = this.isLocked(u) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != ht && Es(t, a.outerDeco));
        if (!f && a.update(e, t, r, i))
          return this.destroyBetween(this.index, l), a.dom != u && (this.changed = !0), this.index++, !0;
        if (!f && (d = this.recreateWrapper(a, e, t, r, i, s)))
          return this.top.children[this.index] = d, d.contentDOM && (d.dirty = sn, d.updateChildren(i, s + 1), d.dirty = Ue), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, t, r, i, o, s) {
    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content))
      return null;
    let l = _t.create(this.top, t, r, i, o, s);
    if (l.contentDOM) {
      l.children = e.children, e.children = [];
      for (let a of l.children)
        a.parent = l;
    }
    return e.destroy(), l;
  }
  // Insert the node as a newly created node desc.
  addNode(e, t, r, i, o) {
    let s = _t.create(this.top, e, t, r, i, o);
    s.contentDOM && s.updateChildren(i, o + 1), this.top.children.splice(this.index++, 0, s), this.changed = !0;
  }
  placeWidget(e, t, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let o = new Pu(this.top, e, t, r);
      this.top.children.splice(this.index++, 0, o), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], t = this.top;
    for (; e instanceof bn; )
      t = e, e = t.children[t.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof Mo) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((Ee || Ce) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new Bu(this.top, [], r, null);
      t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function Cp(n, e) {
  let t = e, r = t.children.length, i = n.childCount, o = /* @__PURE__ */ new Map(), s = [];
  e: for (; i > 0; ) {
    let l;
    for (; ; )
      if (r) {
        let c = t.children[r - 1];
        if (c instanceof bn)
          t = c, r = c.children.length;
        else {
          l = c, r--;
          break;
        }
      } else {
        if (t == e)
          break e;
        r = t.parent.children.indexOf(t), t = t.parent;
      }
    let a = l.node;
    if (a) {
      if (a != n.child(i - 1))
        break;
      --i, o.set(l, i), s.push(l);
    }
  }
  return { index: i, matched: o, matches: s.reverse() };
}
function xp(n, e) {
  return n.type.side - e.type.side;
}
function Sp(n, e, t, r) {
  let i = e.locals(n), o = 0;
  if (i.length == 0) {
    for (let c = 0; c < n.childCount; c++) {
      let u = n.child(c);
      r(u, i, e.forChild(o, u), c), o += u.nodeSize;
    }
    return;
  }
  let s = 0, l = [], a = null;
  for (let c = 0; ; ) {
    let u, d;
    for (; s < i.length && i[s].to == o; ) {
      let y = i[s++];
      y.widget && (u ? (d || (d = [u])).push(y) : u = y);
    }
    if (u)
      if (d) {
        d.sort(xp);
        for (let y = 0; y < d.length; y++)
          t(d[y], c, !!a);
      } else
        t(u, c, !!a);
    let f, h;
    if (a)
      h = -1, f = a, a = null;
    else if (c < n.childCount)
      h = c, f = n.child(c++);
    else
      break;
    for (let y = 0; y < l.length; y++)
      l[y].to <= o && l.splice(y--, 1);
    for (; s < i.length && i[s].from <= o && i[s].to > o; )
      l.push(i[s++]);
    let p = o + f.nodeSize;
    if (f.isText) {
      let y = p;
      s < i.length && i[s].from < y && (y = i[s].from);
      for (let v = 0; v < l.length; v++)
        l[v].to < y && (y = l[v].to);
      y < p && (a = f.cut(y - o), f = f.cut(0, y - o), p = y, h = -1);
    } else
      for (; s < i.length && i[s].to < p; )
        s++;
    let g = f.isInline && !f.isLeaf ? l.filter((y) => !y.inline) : l.slice();
    r(f, g, e.forChild(o, f), h), o = p;
  }
}
function Tp(n) {
  if (n.nodeName == "UL" || n.nodeName == "OL") {
    let e = n.style.cssText;
    n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
  }
}
function Mp(n, e, t, r) {
  for (let i = 0, o = 0; i < n.childCount && o <= r; ) {
    let s = n.child(i++), l = o;
    if (o += s.nodeSize, !s.isText)
      continue;
    let a = s.text;
    for (; i < n.childCount; ) {
      let c = n.child(i++);
      if (o += c.nodeSize, !c.isText)
        break;
      a += c.text;
    }
    if (o >= t) {
      if (o >= r && a.slice(r - e.length - l, r - l) == e)
        return r - e.length;
      let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
      if (c >= 0 && c + e.length + l >= t)
        return l + c;
      if (t == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e)
        return r;
    }
  }
  return -1;
}
function Os(n, e, t, r, i) {
  let o = [];
  for (let s = 0, l = 0; s < n.length; s++) {
    let a = n[s], c = l, u = l += a.size;
    c >= t || u <= e ? o.push(a) : (c < e && o.push(a.slice(0, e - c, r)), i && (o.push(i), i = void 0), u > t && o.push(a.slice(t - c, a.size, r)));
  }
  return o;
}
function ll(n, e = null) {
  let t = n.domSelectionRange(), r = n.state.doc;
  if (!t.focusNode)
    return null;
  let i = n.docView.nearestDesc(t.focusNode), o = i && i.size == 0, s = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (s < 0)
    return null;
  let l = r.resolve(s), a, c;
  if (To(t)) {
    for (a = l; i && !i.node; )
      i = i.parent;
    let u = i.node;
    if (i && u.isAtom && D.isSelectable(u) && i.parent && !(u.isInline && Qh(t.focusNode, t.focusOffset, i.dom))) {
      let d = i.posBefore;
      c = new D(s == d ? l : r.resolve(d));
    }
  } else {
    let u = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (u < 0)
      return null;
    a = r.resolve(u);
  }
  if (!c) {
    let u = e == "pointer" || n.state.selection.head < l.pos && !o ? 1 : -1;
    c = al(n, a, l, u);
  }
  return c;
}
function Fu(n) {
  return n.editable ? n.hasFocus() : ju(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function Et(n, e = !1) {
  let t = n.state.selection;
  if (Vu(n, t), !!Fu(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && Ce) {
      let r = n.domSelectionRange(), i = n.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && yn(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      Op(n);
    else {
      let { anchor: r, head: i } = t, o, s;
      ba && !(t instanceof I) && (t.$from.parent.inlineContent || (o = va(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (s = va(n, t.to))), n.docView.setSelection(r, i, n.root, e), ba && (o && wa(o), s && wa(s)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Ep(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const ba = Ee || Ce && Ou < 63;
function va(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0), i = r < t.childNodes.length ? t.childNodes[r] : null, o = r ? t.childNodes[r - 1] : null;
  if (Ee && i && i.contentEditable == "false")
    return Xo(i);
  if ((!i || i.contentEditable == "false") && (!o || o.contentEditable == "false")) {
    if (i)
      return Xo(i);
    if (o)
      return Xo(o);
  }
}
function Xo(n) {
  return n.contentEditable = "true", Ee && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function wa(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function Ep(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), r = t.anchorNode, i = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!Fu(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function Op(n) {
  let e = n.domSelection(), t = document.createRange(), r = n.cursorWrapper.dom, i = r.nodeName == "IMG";
  i ? t.setEnd(r.parentNode, ye(r) + 1) : t.setEnd(r, 0), t.collapse(!1), e.removeAllRanges(), e.addRange(t), !i && !n.state.selection.visible && Ie && Wt <= 11 && (r.disabled = !0, r.disabled = !1);
}
function Vu(n, e) {
  if (e instanceof D) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && (ka(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    ka(n);
}
function ka(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function al(n, e, t, r) {
  return n.someProp("createSelectionBetween", (i) => i(n, e, t)) || I.between(e, t, r);
}
function Ca(n) {
  return n.editable && !n.hasFocus() ? !1 : ju(n);
}
function ju(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function Ap(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
  return yn(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function As(n, e) {
  let { $anchor: t, $head: r } = n.selection, i = e > 0 ? t.max(r) : t.min(r), o = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return o && L.findFrom(o, e);
}
function It(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function xa(n, e, t) {
  let r = n.state.selection;
  if (r instanceof I)
    if (t.indexOf("s") > -1) {
      let { $head: i } = r, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
      if (!o || o.isText || !o.isLeaf)
        return !1;
      let s = n.state.doc.resolve(i.pos + o.nodeSize * (e < 0 ? -1 : 1));
      return It(n, new I(r.$anchor, s));
    } else if (r.empty) {
      if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let i = As(n.state, e);
        return i && i instanceof D ? It(n, i) : !1;
      } else if (!(We && t.indexOf("m") > -1)) {
        let i = r.$head, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, s;
        if (!o || o.isText)
          return !1;
        let l = e < 0 ? i.pos - o.nodeSize : i.pos;
        return o.isAtom || (s = n.docView.descAt(l)) && !s.contentDOM ? D.isSelectable(o) ? It(n, new D(e < 0 ? n.state.doc.resolve(i.pos - o.nodeSize) : i)) : Vr ? It(n, new I(n.state.doc.resolve(e < 0 ? l : l + o.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof D && r.node.isInline)
      return It(n, new I(e > 0 ? r.$to : r.$from));
    {
      let i = As(n.state, e);
      return i ? It(n, i) : !1;
    }
  }
}
function Pi(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function yr(n, e) {
  let t = n.pmViewDesc;
  return t && t.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR");
}
function Nn(n, e) {
  return e < 0 ? Np(n) : Dp(n);
}
function Np(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i, o, s = !1;
  for (tt && t.nodeType == 1 && r < Pi(t) && yr(t.childNodes[r], -1) && (s = !0); ; )
    if (r > 0) {
      if (t.nodeType != 1)
        break;
      {
        let l = t.childNodes[r - 1];
        if (yr(l, -1))
          i = t, o = --r;
        else if (l.nodeType == 3)
          t = l, r = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (Wu(t))
        break;
      {
        let l = t.previousSibling;
        for (; l && yr(l, -1); )
          i = t.parentNode, o = ye(l), l = l.previousSibling;
        if (l)
          t = l, r = Pi(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = 0;
        }
      }
    }
  s ? Ns(n, t, r) : i && Ns(n, i, o);
}
function Dp(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i = Pi(t), o, s;
  for (; ; )
    if (r < i) {
      if (t.nodeType != 1)
        break;
      let l = t.childNodes[r];
      if (yr(l, 1))
        o = t, s = ++r;
      else
        break;
    } else {
      if (Wu(t))
        break;
      {
        let l = t.nextSibling;
        for (; l && yr(l, 1); )
          o = l.parentNode, s = ye(l) + 1, l = l.nextSibling;
        if (l)
          t = l, r = 0, i = Pi(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = i = 0;
        }
      }
    }
  o && Ns(n, o, s);
}
function Wu(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function Rp(n, e) {
  for (; n && e == n.childNodes.length && !Fr(n); )
    e = ye(n) + 1, n = n.parentNode;
  for (; n && e < n.childNodes.length; ) {
    let t = n.childNodes[e];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = 0;
  }
}
function Ip(n, e) {
  for (; n && !e && !Fr(n); )
    e = ye(n), n = n.parentNode;
  for (; n && e; ) {
    let t = n.childNodes[e - 1];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = n.childNodes.length;
  }
}
function Ns(n, e, t) {
  if (e.nodeType != 3) {
    let o, s;
    (s = Rp(e, t)) ? (e = s, t = 0) : (o = Ip(e, t)) && (e = o, t = o.nodeValue.length);
  }
  let r = n.domSelection();
  if (To(r)) {
    let o = document.createRange();
    o.setEnd(e, t), o.setStart(e, t), r.removeAllRanges(), r.addRange(o);
  } else r.extend && r.extend(e, t);
  n.domObserver.setCurSelection();
  let { state: i } = n;
  setTimeout(() => {
    n.state == i && Et(n);
  }, 50);
}
function Sa(n, e) {
  let t = n.state.doc.resolve(e);
  if (!(Ce || tp) && t.parent.inlineContent) {
    let i = n.coordsAtPos(e);
    if (e > t.start()) {
      let o = n.coordsAtPos(e - 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left < i.left ? "ltr" : "rtl";
    }
    if (e < t.end()) {
      let o = n.coordsAtPos(e + 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
}
function Ta(n, e, t) {
  let r = n.state.selection;
  if (r instanceof I && !r.empty || t.indexOf("s") > -1 || We && t.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: o } = r;
  if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let s = As(n.state, e);
    if (s && s instanceof D)
      return It(n, s);
  }
  if (!i.parent.inlineContent) {
    let s = e < 0 ? i : o, l = r instanceof et ? L.near(s, e) : L.findFrom(s, e);
    return l ? It(n, l) : !1;
  }
  return !1;
}
function Ma(n, e) {
  if (!(n.state.selection instanceof I))
    return !0;
  let { $head: t, $anchor: r, empty: i } = n.state.selection;
  if (!t.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let o = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (o && !o.isText) {
    let s = n.state.tr;
    return e < 0 ? s.delete(t.pos - o.nodeSize, t.pos) : s.delete(t.pos, t.pos + o.nodeSize), n.dispatch(s), !0;
  }
  return !1;
}
function Ea(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function Lp(n) {
  if (!Ee || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    Ea(n, r, "true"), setTimeout(() => Ea(n, r, "false"), 20);
  }
  return !1;
}
function Pp(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function Bp(n, e) {
  let t = e.keyCode, r = Pp(e);
  if (t == 8 || We && t == 72 && r == "c")
    return Ma(n, -1) || Nn(n, -1);
  if (t == 46 && !e.shiftKey || We && t == 68 && r == "c")
    return Ma(n, 1) || Nn(n, 1);
  if (t == 13 || t == 27)
    return !0;
  if (t == 37 || We && t == 66 && r == "c") {
    let i = t == 37 ? Sa(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return xa(n, i, r) || Nn(n, i);
  } else if (t == 39 || We && t == 70 && r == "c") {
    let i = t == 39 ? Sa(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return xa(n, i, r) || Nn(n, i);
  } else {
    if (t == 38 || We && t == 80 && r == "c")
      return Ta(n, -1, r) || Nn(n, -1);
    if (t == 40 || We && t == 78 && r == "c")
      return Lp(n) || Ta(n, 1, r) || Nn(n, 1);
    if (r == (We ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
      return !0;
  }
  return !1;
}
function _u(n, e) {
  n.someProp("transformCopied", (h) => {
    e = h(e, n);
  });
  let t = [], { content: r, openStart: i, openEnd: o } = e;
  for (; i > 1 && o > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, o--;
    let h = r.firstChild;
    t.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let s = n.someProp("clipboardSerializer") || Cn.fromSchema(n.state.schema), l = Yu(), a = l.createElement("div");
  a.appendChild(s.serializeFragment(r, { document: l }));
  let c = a.firstChild, u, d = 0;
  for (; c && c.nodeType == 1 && (u = Gu[c.nodeName.toLowerCase()]); ) {
    for (let h = u.length - 1; h >= 0; h--) {
      let p = l.createElement(u[h]);
      for (; a.firstChild; )
        p.appendChild(a.firstChild);
      a.appendChild(p), d++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${o}${d ? ` -${d}` : ""} ${JSON.stringify(t)}`);
  let f = n.someProp("clipboardTextSerializer", (h) => h(e, n)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: f, slice: e };
}
function Uu(n, e, t, r, i) {
  let o = i.parent.type.spec.code, s, l;
  if (!t && !e)
    return null;
  let a = e && (r || o || !t);
  if (a) {
    if (n.someProp("transformPastedText", (f) => {
      e = f(e, o || r, n);
    }), o)
      return e ? new M(S.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : M.empty;
    let d = n.someProp("clipboardTextParser", (f) => f(e, i, r, n));
    if (d)
      l = d;
    else {
      let f = i.marks(), { schema: h } = n.state, p = Cn.fromSchema(h);
      s = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((g) => {
        let y = s.appendChild(document.createElement("p"));
        g && y.appendChild(p.serializeNode(h.text(g, f)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (d) => {
      t = d(t, n);
    }), s = $p(t), Vr && Fp(s);
  let c = s && s.querySelector("[data-pm-slice]"), u = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (u && u[3])
    for (let d = +u[3]; d > 0; d--) {
      let f = s.firstChild;
      for (; f && f.nodeType != 1; )
        f = f.nextSibling;
      if (!f)
        break;
      s = f;
    }
  if (l || (l = (n.someProp("clipboardParser") || n.someProp("domParser") || jt.fromSchema(n.state.schema)).parseSlice(s, {
    preserveWhitespace: !!(a || u),
    context: i,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !Hp.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), u)
    l = Vp(Oa(l, +u[1], +u[2]), u[4]);
  else if (l = M.maxOpen(zp(l.content, i), !0), l.openStart || l.openEnd) {
    let d = 0, f = 0;
    for (let h = l.content.firstChild; d < l.openStart && !h.type.spec.isolating; d++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; f < l.openEnd && !h.type.spec.isolating; f++, h = h.lastChild)
      ;
    l = Oa(l, d, f);
  }
  return n.someProp("transformPasted", (d) => {
    l = d(l, n);
  }), l;
}
const Hp = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function zp(n, e) {
  if (n.childCount < 2)
    return n;
  for (let t = e.depth; t >= 0; t--) {
    let i = e.node(t).contentMatchAt(e.index(t)), o, s = [];
    if (n.forEach((l) => {
      if (!s)
        return;
      let a = i.findWrapping(l.type), c;
      if (!a)
        return s = null;
      if (c = s.length && o.length && qu(a, o, l, s[s.length - 1], 0))
        s[s.length - 1] = c;
      else {
        s.length && (s[s.length - 1] = Ju(s[s.length - 1], o.length));
        let u = Ku(l, a);
        s.push(u), i = i.matchType(u.type), o = a;
      }
    }), s)
      return S.from(s);
  }
  return n;
}
function Ku(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--)
    n = e[r].create(null, S.from(n));
  return n;
}
function qu(n, e, t, r, i) {
  if (i < n.length && i < e.length && n[i] == e[i]) {
    let o = qu(n, e, t, r.lastChild, i + 1);
    if (o)
      return r.copy(r.content.replaceChild(r.childCount - 1, o));
    if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1]))
      return r.copy(r.content.append(S.from(Ku(t, n, i + 1))));
  }
}
function Ju(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, Ju(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(S.empty, !0);
  return n.copy(t.append(r));
}
function Ds(n, e, t, r, i, o) {
  let s = e < 0 ? n.firstChild : n.lastChild, l = s.content;
  return n.childCount > 1 && (o = 0), i < r - 1 && (l = Ds(l, e, t, r, i + 1, o)), i >= t && (l = e < 0 ? s.contentMatchAt(0).fillBefore(l, o <= i).append(l) : l.append(s.contentMatchAt(s.childCount).fillBefore(S.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, s.copy(l));
}
function Oa(n, e, t) {
  return e < n.openStart && (n = new M(Ds(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new M(Ds(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const Gu = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let Aa = null;
function Yu() {
  return Aa || (Aa = document.implementation.createHTMLDocument("title"));
}
function $p(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = Yu().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), i;
  if ((i = r && Gu[r[1].toLowerCase()]) && (n = i.map((o) => "<" + o + ">").join("") + n + i.map((o) => "</" + o + ">").reverse().join("")), t.innerHTML = n, i)
    for (let o = 0; o < i.length; o++)
      t = t.querySelector(i[o]) || t;
  return t;
}
function Fp(n) {
  let e = n.querySelectorAll(Ce ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
  }
}
function Vp(n, e) {
  if (!n.size)
    return n;
  let t = n.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return n;
  }
  let { content: i, openStart: o, openEnd: s } = n;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = t.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    i = S.from(a.create(r[l + 1], i)), o++, s++;
  }
  return new M(i, o, s);
}
const Oe = {}, Ae = {}, jp = { touchstart: !0, touchmove: !0 };
class Wp {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "" }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastAndroidDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function _p(n) {
  for (let e in Oe) {
    let t = Oe[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = (r) => {
      Kp(n, r) && !cl(n, r) && (n.editable || !(r.type in Ae)) && t(n, r);
    }, jp[e] ? { passive: !0 } : void 0);
  }
  Ee && n.dom.addEventListener("input", () => null), Rs(n);
}
function Vt(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function Up(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers)
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function Rs(n) {
  n.someProp("handleDOMEvents", (e) => {
    for (let t in e)
      n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = (r) => cl(n, r));
  });
}
function cl(n, e) {
  return n.someProp("handleDOMEvents", (t) => {
    let r = t[e.type];
    return r ? r(n, e) || e.defaultPrevented : !1;
  });
}
function Kp(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != n.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function qp(n, e) {
  !cl(n, e) && Oe[e.type] && (n.editable || !(e.type in Ae)) && Oe[e.type](n, e);
}
Ae.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !Qu(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(Qe && Ce && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), qn && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (i) => i(n, nn(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else n.someProp("handleKeyDown", (r) => r(n, t)) || Bp(n, t) ? t.preventDefault() : Vt(n, "key");
};
Ae.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
Ae.keypress = (n, e) => {
  let t = e;
  if (Qu(n, t) || !t.charCode || t.ctrlKey && !t.altKey || We && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (i) => i(n, t))) {
    t.preventDefault();
    return;
  }
  let r = n.state.selection;
  if (!(r instanceof I) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(t.charCode);
    !/[\r\n]/.test(i) && !n.someProp("handleTextInput", (o) => o(n, r.$from.pos, r.$to.pos, i)) && n.dispatch(n.state.tr.insertText(i).scrollIntoView()), t.preventDefault();
  }
};
function Eo(n) {
  return { left: n.clientX, top: n.clientY };
}
function Jp(n, e) {
  let t = e.x - n.clientX, r = e.y - n.clientY;
  return t * t + r * r < 100;
}
function ul(n, e, t, r, i) {
  if (r == -1)
    return !1;
  let o = n.state.doc.resolve(r);
  for (let s = o.depth + 1; s > 0; s--)
    if (n.someProp(e, (l) => s > o.depth ? l(n, t, o.nodeAfter, o.before(s), i, !0) : l(n, t, o.node(s), o.before(s), i, !1)))
      return !0;
  return !1;
}
function Wn(n, e, t) {
  n.focused || n.focus();
  let r = n.state.tr.setSelection(e);
  r.setMeta("pointer", !0), n.dispatch(r);
}
function Gp(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), r = t.nodeAfter;
  return r && r.isAtom && D.isSelectable(r) ? (Wn(n, new D(t)), !0) : !1;
}
function Yp(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.selection, r, i;
  t instanceof D && (r = t.node);
  let o = n.state.doc.resolve(e);
  for (let s = o.depth + 1; s > 0; s--) {
    let l = s > o.depth ? o.nodeAfter : o.node(s);
    if (D.isSelectable(l)) {
      r && t.$from.depth > 0 && s >= t.$from.depth && o.before(t.$from.depth + 1) == t.$from.pos ? i = o.before(t.$from.depth) : i = o.before(s);
      break;
    }
  }
  return i != null ? (Wn(n, D.create(n.state.doc, i)), !0) : !1;
}
function Xp(n, e, t, r, i) {
  return ul(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (o) => o(n, e, r)) || (i ? Yp(n, t) : Gp(n, t));
}
function Qp(n, e, t, r) {
  return ul(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (i) => i(n, e, r));
}
function Zp(n, e, t, r) {
  return ul(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (i) => i(n, e, r)) || em(n, t, r);
}
function em(n, e, t) {
  if (t.button != 0)
    return !1;
  let r = n.state.doc;
  if (e == -1)
    return r.inlineContent ? (Wn(n, I.create(r, 0, r.content.size)), !0) : !1;
  let i = r.resolve(e);
  for (let o = i.depth + 1; o > 0; o--) {
    let s = o > i.depth ? i.nodeAfter : i.node(o), l = i.before(o);
    if (s.inlineContent)
      Wn(n, I.create(r, l + 1, l + 1 + s.content.size));
    else if (D.isSelectable(s))
      Wn(n, D.create(r, l));
    else
      continue;
    return !0;
  }
}
function dl(n) {
  return Bi(n);
}
const Xu = We ? "metaKey" : "ctrlKey";
Oe.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = dl(n), i = Date.now(), o = "singleClick";
  i - n.input.lastClick.time < 500 && Jp(t, n.input.lastClick) && !t[Xu] && (n.input.lastClick.type == "singleClick" ? o = "doubleClick" : n.input.lastClick.type == "doubleClick" && (o = "tripleClick")), n.input.lastClick = { time: i, x: t.clientX, y: t.clientY, type: o };
  let s = n.posAtCoords(Eo(t));
  s && (o == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new tm(n, s, t, !!r)) : (o == "doubleClick" ? Qp : Zp)(n, s.pos, s.inside, t) ? t.preventDefault() : Vt(n, "pointer"));
};
class tm {
  constructor(e, t, r, i) {
    this.view = e, this.pos = t, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[Xu], this.allowDefault = r.shiftKey;
    let o, s;
    if (t.inside > -1)
      o = e.state.doc.nodeAt(t.inside), s = t.inside;
    else {
      let u = e.state.doc.resolve(t.pos);
      o = u.parent, s = u.depth ? u.before() : 0;
    }
    const l = i ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a && a.dom.nodeType == 1 ? a.dom : null;
    let { selection: c } = e.state;
    (r.button == 0 && o.type.spec.draggable && o.type.spec.selectable !== !1 || c instanceof D && c.from <= s && c.to > s) && (this.mightDrag = {
      node: o,
      pos: s,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && tt && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), Vt(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Et(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(Eo(e))), this.updateAllowDefault(e), this.allowDefault || !t ? Vt(this.view, "pointer") : Xp(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    Ee && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    Ce && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (Wn(this.view, L.near(this.view.state.doc.resolve(t.pos))), e.preventDefault()) : Vt(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), Vt(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
Oe.touchstart = (n) => {
  n.input.lastTouch = Date.now(), dl(n), Vt(n, "pointer");
};
Oe.touchmove = (n) => {
  n.input.lastTouch = Date.now(), Vt(n, "pointer");
};
Oe.contextmenu = (n) => dl(n);
function Qu(n, e) {
  return n.composing ? !0 : Ee && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const nm = Qe ? 5e3 : -1;
Ae.compositionstart = Ae.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$from;
    if (e.selection.empty && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      n.markCursor = n.state.storedMarks || t.marks(), Bi(n, !0), n.markCursor = null;
    else if (Bi(n), tt && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let r = n.domSelectionRange();
      for (let i = r.focusNode, o = r.focusOffset; i && i.nodeType == 1 && o != 0; ) {
        let s = o < 0 ? i.lastChild : i.childNodes[o - 1];
        if (!s)
          break;
        if (s.nodeType == 3) {
          n.domSelection().collapse(s, s.nodeValue.length);
          break;
        } else
          i = s, o = -1;
      }
    }
    n.input.composing = !0;
  }
  Zu(n, nm);
};
Ae.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0, n.input.compositionNode = null, n.input.compositionPendingChanges && Promise.resolve().then(() => n.domObserver.flush()), n.input.compositionID++, Zu(n, 20));
};
function Zu(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => Bi(n), e));
}
function ed(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = im()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function rm(n) {
  let e = n.domSelectionRange();
  if (!e.focusNode)
    return null;
  let t = Yh(e.focusNode, e.focusOffset), r = Xh(e.focusNode, e.focusOffset);
  if (t && r && t != r) {
    let i = r.pmViewDesc, o = n.domObserver.lastChangedTextNode;
    if (t == o || r == o)
      return o;
    if (!i || !i.isText(r.nodeValue))
      return r;
    if (n.input.compositionNode == r) {
      let s = t.pmViewDesc;
      if (!(!s || !s.isText(t.nodeValue)))
        return r;
    }
  }
  return t || r;
}
function im() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function Bi(n, e = !1) {
  if (!(Qe && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), ed(n), e || n.docView && n.docView.dirty) {
      let t = ll(n);
      return t && !t.eq(n.state.selection) ? n.dispatch(n.state.tr.setSelection(t)) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function om(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const Er = Ie && Wt < 15 || qn && np < 604;
Oe.copy = Ae.cut = (n, e) => {
  let t = e, r = n.state.selection, i = t.type == "cut";
  if (r.empty)
    return;
  let o = Er ? null : t.clipboardData, s = r.content(), { dom: l, text: a } = _u(n, s);
  o ? (t.preventDefault(), o.clearData(), o.setData("text/html", l.innerHTML), o.setData("text/plain", a)) : om(n, l), i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function sm(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function lm(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = n.input.shiftKey && n.input.lastKeyCode != 45;
  setTimeout(() => {
    n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? Or(n, r.value, null, i, e) : Or(n, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function Or(n, e, t, r, i) {
  let o = Uu(n, e, t, r, n.state.selection.$from);
  if (n.someProp("handlePaste", (a) => a(n, i, o || M.empty)))
    return !0;
  if (!o)
    return !1;
  let s = sm(o), l = s ? n.state.tr.replaceSelectionWith(s, r) : n.state.tr.replaceSelection(o);
  return n.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function td(n) {
  let e = n.getData("text/plain") || n.getData("Text");
  if (e)
    return e;
  let t = n.getData("text/uri-list");
  return t ? t.replace(/\r?\n/g, " ") : "";
}
Ae.paste = (n, e) => {
  let t = e;
  if (n.composing && !Qe)
    return;
  let r = Er ? null : t.clipboardData, i = n.input.shiftKey && n.input.lastKeyCode != 45;
  r && Or(n, td(r), r.getData("text/html"), i, t) ? t.preventDefault() : lm(n, t);
};
class nd {
  constructor(e, t, r) {
    this.slice = e, this.move = t, this.node = r;
  }
}
const rd = We ? "altKey" : "ctrlKey";
Oe.dragstart = (n, e) => {
  let t = e, r = n.input.mouseDown;
  if (r && r.done(), !t.dataTransfer)
    return;
  let i = n.state.selection, o = i.empty ? null : n.posAtCoords(Eo(t)), s;
  if (!(o && o.pos >= i.from && o.pos <= (i instanceof D ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      s = D.create(n.state.doc, r.mightDrag.pos);
    else if (t.target && t.target.nodeType == 1) {
      let d = n.docView.nearestDesc(t.target, !0);
      d && d.node.type.spec.draggable && d != n.docView && (s = D.create(n.state.doc, d.posBefore));
    }
  }
  let l = (s || n.state.selection).content(), { dom: a, text: c, slice: u } = _u(n, l);
  (!t.dataTransfer.files.length || !Ce || Ou > 120) && t.dataTransfer.clearData(), t.dataTransfer.setData(Er ? "Text" : "text/html", a.innerHTML), t.dataTransfer.effectAllowed = "copyMove", Er || t.dataTransfer.setData("text/plain", c), n.dragging = new nd(u, !t[rd], s);
};
Oe.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
Ae.dragover = Ae.dragenter = (n, e) => e.preventDefault();
Ae.drop = (n, e) => {
  let t = e, r = n.dragging;
  if (n.dragging = null, !t.dataTransfer)
    return;
  let i = n.posAtCoords(Eo(t));
  if (!i)
    return;
  let o = n.state.doc.resolve(i.pos), s = r && r.slice;
  s ? n.someProp("transformPasted", (p) => {
    s = p(s, n);
  }) : s = Uu(n, td(t.dataTransfer), Er ? null : t.dataTransfer.getData("text/html"), !1, o);
  let l = !!(r && !t[rd]);
  if (n.someProp("handleDrop", (p) => p(n, t, s || M.empty, l))) {
    t.preventDefault();
    return;
  }
  if (!s)
    return;
  t.preventDefault();
  let a = s ? vu(n.state.doc, o.pos, s) : o.pos;
  a == null && (a = o.pos);
  let c = n.state.tr;
  if (l) {
    let { node: p } = r;
    p ? p.replace(c) : c.deleteSelection();
  }
  let u = c.mapping.map(a), d = s.openStart == 0 && s.openEnd == 0 && s.content.childCount == 1, f = c.doc;
  if (d ? c.replaceRangeWith(u, u, s.content.firstChild) : c.replaceRange(u, u, s), c.doc.eq(f))
    return;
  let h = c.doc.resolve(u);
  if (d && D.isSelectable(s.content.firstChild) && h.nodeAfter && h.nodeAfter.sameMarkup(s.content.firstChild))
    c.setSelection(new D(h));
  else {
    let p = c.mapping.map(a);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((g, y, v, w) => p = w), c.setSelection(al(n, h, c.doc.resolve(p)));
  }
  n.focus(), n.dispatch(c.setMeta("uiEvent", "drop"));
};
Oe.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && Et(n);
  }, 20));
};
Oe.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
Oe.beforeinput = (n, e) => {
  if (Ce && Qe && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let { domChangeCount: r } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (o) => o(n, nn(8, "Backspace")))))
        return;
      let { $cursor: i } = n.state.selection;
      i && i.pos > 0 && n.dispatch(n.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let n in Ae)
  Oe[n] = Ae[n];
function Ar(n, e) {
  if (n == e)
    return !0;
  for (let t in n)
    if (n[t] !== e[t])
      return !1;
  for (let t in e)
    if (!(t in n))
      return !1;
  return !0;
}
class Hi {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || fn, this.side = this.spec.side || 0;
  }
  map(e, t, r, i) {
    let { pos: o, deleted: s } = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
    return s ? null : new xe(o - r, o - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof Hi && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Ar(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class Ut {
  constructor(e, t) {
    this.attrs = e, this.spec = t || fn;
  }
  map(e, t, r, i) {
    let o = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r, s = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return o >= s ? null : new xe(o, s, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof Ut && Ar(this.attrs, e.attrs) && Ar(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof Ut;
  }
  destroy() {
  }
}
class fl {
  constructor(e, t) {
    this.attrs = e, this.spec = t || fn;
  }
  map(e, t, r, i) {
    let o = e.mapResult(t.from + i, 1);
    if (o.deleted)
      return null;
    let s = e.mapResult(t.to + i, -1);
    return s.deleted || s.pos <= o.pos ? null : new xe(o.pos - r, s.pos - r, this);
  }
  valid(e, t) {
    let { index: r, offset: i } = e.content.findIndex(t.from), o;
    return i == t.from && !(o = e.child(r)).isText && i + o.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof fl && Ar(this.attrs, e.attrs) && Ar(this.spec, e.spec);
  }
  destroy() {
  }
}
class xe {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.from = e, this.to = t, this.type = r;
  }
  /**
  @internal
  */
  copy(e, t) {
    return new xe(e, t, this.type);
  }
  /**
  @internal
  */
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  /**
  @internal
  */
  map(e, t, r) {
    return this.type.map(e, this, t, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, t, r) {
    return new xe(e, e, new Hi(t, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, t, r, i) {
    return new xe(e, t, new Ut(r, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, t, r, i) {
    return new xe(e, t, new fl(r, i));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof Ut;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof Hi;
  }
}
const Ln = [], fn = {};
class ee {
  /**
  @internal
  */
  constructor(e, t) {
    this.local = e.length ? e : Ln, this.children = t.length ? t : Ln;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, t) {
    return t.length ? zi(t, e, 0, fn) : we;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, t, r) {
    let i = [];
    return this.findInner(e ?? 0, t ?? 1e9, i, 0, r), i;
  }
  findInner(e, t, r, i, o) {
    for (let s = 0; s < this.local.length; s++) {
      let l = this.local[s];
      l.from <= t && l.to >= e && (!o || o(l.spec)) && r.push(l.copy(l.from + i, l.to + i));
    }
    for (let s = 0; s < this.children.length; s += 3)
      if (this.children[s] < t && this.children[s + 1] > e) {
        let l = this.children[s] + 1;
        this.children[s + 2].findInner(e - l, t - l, r, i + l, o);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, t, r) {
    return this == we || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || fn);
  }
  /**
  @internal
  */
  mapInner(e, t, r, i, o) {
    let s;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, i);
      a && a.type.valid(t, a) ? (s || (s = [])).push(a) : o.onRemove && o.onRemove(this.local[l].spec);
    }
    return this.children.length ? am(this.children, s || [], e, t, r, i, o) : s ? new ee(s.sort(hn), Ln) : we;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, t) {
    return t.length ? this == we ? ee.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, r) {
    let i, o = 0;
    e.forEach((l, a) => {
      let c = a + r, u;
      if (u = od(t, l, c)) {
        for (i || (i = this.children.slice()); o < i.length && i[o] < a; )
          o += 3;
        i[o] == a ? i[o + 2] = i[o + 2].addInner(l, u, c + 1) : i.splice(o, 0, a, a + l.nodeSize, zi(u, l, c + 1, fn)), o += 3;
      }
    });
    let s = id(o ? sd(t) : t, -r);
    for (let l = 0; l < s.length; l++)
      s[l].type.valid(e, s[l]) || s.splice(l--, 1);
    return new ee(s.length ? this.local.concat(s).sort(hn) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == we ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let r = this.children, i = this.local;
    for (let o = 0; o < r.length; o += 3) {
      let s, l = r[o] + t, a = r[o + 1] + t;
      for (let u = 0, d; u < e.length; u++)
        (d = e[u]) && d.from > l && d.to < a && (e[u] = null, (s || (s = [])).push(d));
      if (!s)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[o + 2].removeInner(s, l + 1);
      c != we ? r[o + 2] = c : (r.splice(o, 3), o -= 3);
    }
    if (i.length) {
      for (let o = 0, s; o < e.length; o++)
        if (s = e[o])
          for (let l = 0; l < i.length; l++)
            i[l].eq(s, t) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new ee(i, r) : we;
  }
  forChild(e, t) {
    if (this == we)
      return this;
    if (t.isLeaf)
      return ee.empty;
    let r, i;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let o = e + 1, s = o + t.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < s && a.to > o && a.type instanceof Ut) {
        let c = Math.max(o, a.from) - o, u = Math.min(s, a.to) - o;
        c < u && (i || (i = [])).push(a.copy(c, u));
      }
    }
    if (i) {
      let l = new ee(i.sort(hn), Ln);
      return r ? new Bt([l, r]) : l;
    }
    return r || we;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof ee) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let t = 0; t < this.local.length; t++)
      if (!this.local[t].eq(e.local[t]))
        return !1;
    for (let t = 0; t < this.children.length; t += 3)
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return hl(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == we)
      return Ln;
    if (e.inlineContent || !this.local.some(Ut.is))
      return this.local;
    let t = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof Ut || t.push(this.local[r]);
    return t;
  }
}
ee.empty = new ee([], []);
ee.removeOverlap = hl;
const we = ee.empty;
class Bt {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map((i) => i.map(e, t, fn));
    return Bt.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return ee.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].forChild(e, t);
      o != we && (o instanceof Bt ? r = r.concat(o.members) : r.push(o));
    }
    return Bt.from(r);
  }
  eq(e) {
    if (!(e instanceof Bt) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].localsInner(e);
      if (o.length)
        if (!t)
          t = o;
        else {
          r && (t = t.slice(), r = !1);
          for (let s = 0; s < o.length; s++)
            t.push(o[s]);
        }
    }
    return t ? hl(r ? t : t.sort(hn)) : Ln;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return we;
      case 1:
        return e[0];
      default:
        return new Bt(e.every((t) => t instanceof ee) ? e : e.reduce((t, r) => t.concat(r instanceof ee ? r : r.members), []));
    }
  }
}
function am(n, e, t, r, i, o, s) {
  let l = n.slice();
  for (let c = 0, u = o; c < t.maps.length; c++) {
    let d = 0;
    t.maps[c].forEach((f, h, p, g) => {
      let y = g - p - (h - f);
      for (let v = 0; v < l.length; v += 3) {
        let w = l[v + 1];
        if (w < 0 || f > w + u - d)
          continue;
        let k = l[v] + u - d;
        h >= k ? l[v + 1] = f <= k ? -2 : -1 : f >= u && y && (l[v] += y, l[v + 1] += y);
      }
      d += y;
    }), u = t.maps[c].map(u, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let u = t.map(n[c] + o), d = u - i;
      if (d < 0 || d >= r.content.size) {
        a = !0;
        continue;
      }
      let f = t.map(n[c + 1] + o, -1), h = f - i, { index: p, offset: g } = r.content.findIndex(d), y = r.maybeChild(p);
      if (y && g == d && g + y.nodeSize == h) {
        let v = l[c + 2].mapInner(t, y, u + 1, n[c] + o + 1, s);
        v != we ? (l[c] = d, l[c + 1] = h, l[c + 2] = v) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = cm(l, n, e, t, i, o, s), u = zi(c, r, 0, s);
    e = u.local;
    for (let d = 0; d < l.length; d += 3)
      l[d + 1] < 0 && (l.splice(d, 3), d -= 3);
    for (let d = 0, f = 0; d < u.children.length; d += 3) {
      let h = u.children[d];
      for (; f < l.length && l[f] < h; )
        f += 3;
      l.splice(f, 0, u.children[d], u.children[d + 1], u.children[d + 2]);
    }
  }
  return new ee(e.sort(hn), l);
}
function id(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    t.push(new xe(i.from + e, i.to + e, i.type));
  }
  return t;
}
function cm(n, e, t, r, i, o, s) {
  function l(a, c) {
    for (let u = 0; u < a.local.length; u++) {
      let d = a.local[u].map(r, i, c);
      d ? t.push(d) : s.onRemove && s.onRemove(a.local[u].spec);
    }
    for (let u = 0; u < a.children.length; u += 3)
      l(a.children[u + 2], a.children[u] + c + 1);
  }
  for (let a = 0; a < n.length; a += 3)
    n[a + 1] == -1 && l(n[a + 2], e[a] + o + 1);
  return t;
}
function od(n, e, t) {
  if (e.isLeaf)
    return null;
  let r = t + e.nodeSize, i = null;
  for (let o = 0, s; o < n.length; o++)
    (s = n[o]) && s.from > t && s.to < r && ((i || (i = [])).push(s), n[o] = null);
  return i;
}
function sd(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    n[t] != null && e.push(n[t]);
  return e;
}
function zi(n, e, t, r) {
  let i = [], o = !1;
  e.forEach((l, a) => {
    let c = od(n, l, a + t);
    if (c) {
      o = !0;
      let u = zi(c, l, t + a + 1, r);
      u != we && i.push(a, a + l.nodeSize, u);
    }
  });
  let s = id(o ? sd(n) : n, -t).sort(hn);
  for (let l = 0; l < s.length; l++)
    s[l].type.valid(e, s[l]) || (r.onRemove && r.onRemove(s[l].spec), s.splice(l--, 1));
  return s.length || i.length ? new ee(s, i) : we;
}
function hn(n, e) {
  return n.from - e.from || n.to - e.to;
}
function hl(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t];
    if (r.from != r.to)
      for (let i = t + 1; i < e.length; i++) {
        let o = e[i];
        if (o.from == r.from) {
          o.to != r.to && (e == n && (e = n.slice()), e[i] = o.copy(o.from, r.to), Na(e, i + 1, o.copy(r.to, o.to)));
          continue;
        } else {
          o.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, o.from), Na(e, i, r.copy(o.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function Na(n, e, t) {
  for (; e < n.length && hn(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
function Qo(n) {
  let e = [];
  return n.someProp("decorations", (t) => {
    let r = t(n.state);
    r && r != we && e.push(r);
  }), n.cursorWrapper && e.push(ee.create(n.state.doc, [n.cursorWrapper.deco])), Bt.from(e);
}
const um = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, dm = Ie && Wt <= 11;
class fm {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class hm {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new fm(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      Ie && Wt <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), dm && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, um)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let t = 0; t < e.length; t++)
          this.queue.push(e[t]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (Ca(this.view)) {
      if (this.suppressingSelectionUpdates)
        return Et(this.view);
      if (Ie && Wt <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && yn(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let t = /* @__PURE__ */ new Set(), r;
    for (let o = e.focusNode; o; o = Mr(o))
      t.add(o);
    for (let o = e.anchorNode; o; o = Mr(o))
      if (t.has(o)) {
        r = o;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && Ca(e) && !this.ignoreSelectionChange(r), o = -1, s = -1, l = !1, a = [];
    if (e.editable)
      for (let u = 0; u < t.length; u++) {
        let d = this.registerMutation(t[u], a);
        d && (o = o < 0 ? d.from : Math.min(d.from, o), s = s < 0 ? d.to : Math.max(d.to, s), d.typeOver && (l = !0));
      }
    if (tt && a.length) {
      let u = a.filter((d) => d.nodeName == "BR");
      if (u.length == 2) {
        let [d, f] = u;
        d.parentNode && d.parentNode.parentNode == f.parentNode ? f.remove() : d.remove();
      } else {
        let { focusNode: d } = this.currentSelection;
        for (let f of u) {
          let h = f.parentNode;
          h && h.nodeName == "LI" && (!d || gm(e, d) != h) && f.remove();
        }
      }
    }
    let c = null;
    o < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && To(r) && (c = ll(e)) && c.eq(L.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, Et(e), this.currentSelection.set(r), e.scrollToSelection()) : (o > -1 || i) && (o > -1 && (e.docView.markDirty(o, s), pm(e)), this.handleDOMChange(o, s, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || Et(e), this.currentSelection.set(r));
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let u = 0; u < e.addedNodes.length; u++) {
        let d = e.addedNodes[u];
        t.push(d), d.nodeType == 3 && (this.lastChangedTextNode = d);
      }
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, o = e.nextSibling;
      if (Ie && Wt <= 11 && e.addedNodes.length)
        for (let u = 0; u < e.addedNodes.length; u++) {
          let { previousSibling: d, nextSibling: f } = e.addedNodes[u];
          (!d || Array.prototype.indexOf.call(e.addedNodes, d) < 0) && (i = d), (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (o = f);
        }
      let s = i && i.parentNode == e.target ? ye(i) + 1 : 0, l = r.localPosFromDOM(e.target, s, -1), a = o && o.parentNode == e.target ? ye(o) : e.target.childNodes.length, c = r.localPosFromDOM(e.target, a, 1);
      return { from: l, to: c };
    } else return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : (this.lastChangedTextNode = e.target, {
      from: r.posAtStart,
      to: r.posAtEnd,
      // An event was generated for a text change that didn't change
      // any text. Mark the dom change to fall back to assuming the
      // selection was typed over with an identical value if it can't
      // find another change.
      typeOver: e.target.nodeValue == e.oldValue
    });
  }
}
let Da = /* @__PURE__ */ new WeakMap(), Ra = !1;
function pm(n) {
  if (!Da.has(n) && (Da.set(n, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
    if (n.requiresGeckoHackNode = tt, Ra)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), Ra = !0;
  }
}
function Ia(n, e) {
  let t = e.startContainer, r = e.startOffset, i = e.endContainer, o = e.endOffset, s = n.domAtPos(n.state.selection.anchor);
  return yn(s.node, s.offset, i, o) && ([t, r, i, o] = [i, o, t, r]), { anchorNode: t, anchorOffset: r, focusNode: i, focusOffset: o };
}
function mm(n, e) {
  if (e.getComposedRanges) {
    let i = e.getComposedRanges(n.root)[0];
    if (i)
      return Ia(n, i);
  }
  let t;
  function r(i) {
    i.preventDefault(), i.stopImmediatePropagation(), t = i.getTargetRanges()[0];
  }
  return n.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", r, !0), t ? Ia(n, t) : null;
}
function gm(n, e) {
  for (let t = e.parentNode; t && t != n.dom; t = t.parentNode) {
    let r = n.docView.nearestDesc(t, !0);
    if (r && r.node.isBlock)
      return t;
  }
  return null;
}
function ym(n, e, t) {
  let { node: r, fromOffset: i, toOffset: o, from: s, to: l } = n.docView.parseRange(e, t), a = n.domSelectionRange(), c, u = a.anchorNode;
  if (u && n.dom.contains(u.nodeType == 1 ? u : u.parentNode) && (c = [{ node: u, offset: a.anchorOffset }], To(a) || c.push({ node: a.focusNode, offset: a.focusOffset })), Ce && n.input.lastKeyCode === 8)
    for (let y = o; y > i; y--) {
      let v = r.childNodes[y - 1], w = v.pmViewDesc;
      if (v.nodeName == "BR" && !w) {
        o = y;
        break;
      }
      if (!w || w.size)
        break;
    }
  let d = n.state.doc, f = n.someProp("domParser") || jt.fromSchema(n.state.schema), h = d.resolve(s), p = null, g = f.parse(r, {
    topNode: h.parent,
    topMatch: h.parent.contentMatchAt(h.index()),
    topOpen: !0,
    from: i,
    to: o,
    preserveWhitespace: h.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: c,
    ruleFromNode: bm,
    context: h
  });
  if (c && c[0].pos != null) {
    let y = c[0].pos, v = c[1] && c[1].pos;
    v == null && (v = y), p = { anchor: y + s, head: v + s };
  }
  return { doc: g, sel: p, from: s, to: l };
}
function bm(n) {
  let e = n.pmViewDesc;
  if (e)
    return e.parseRule();
  if (n.nodeName == "BR" && n.parentNode) {
    if (Ee && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (n.parentNode.lastChild == n || Ee && /^(tr|table)$/i.test(n.parentNode.nodeName))
      return { ignore: !0 };
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const vm = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function wm(n, e, t, r, i) {
  let o = n.input.compositionPendingChanges || (n.composing ? n.input.compositionID : 0);
  if (n.input.compositionPendingChanges = 0, e < 0) {
    let E = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, B = ll(n, E);
    if (B && !n.state.selection.eq(B)) {
      if (Ce && Qe && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", (K) => K(n, nn(13, "Enter"))))
        return;
      let _ = n.state.tr.setSelection(B);
      E == "pointer" ? _.setMeta("pointer", !0) : E == "key" && _.scrollIntoView(), o && _.setMeta("composition", o), n.dispatch(_);
    }
    return;
  }
  let s = n.state.doc.resolve(e), l = s.sharedDepth(t);
  e = s.before(l + 1), t = n.state.doc.resolve(t).after(l + 1);
  let a = n.state.selection, c = ym(n, e, t), u = n.state.doc, d = u.slice(c.from, c.to), f, h;
  n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (f = n.state.selection.to, h = "end") : (f = n.state.selection.from, h = "start"), n.input.lastKeyCode = null;
  let p = xm(d.content, c.doc.content, c.from, f, h);
  if ((qn && n.input.lastIOSEnter > Date.now() - 225 || Qe) && i.some((E) => E.nodeType == 1 && !vm.test(E.nodeName)) && (!p || p.endA >= p.endB) && n.someProp("handleKeyDown", (E) => E(n, nn(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!p)
    if (r && a instanceof I && !a.empty && a.$head.sameParent(a.$anchor) && !n.composing && !(c.sel && c.sel.anchor != c.sel.head))
      p = { start: a.from, endA: a.to, endB: a.to };
    else {
      if (c.sel) {
        let E = La(n, n.state.doc, c.sel);
        if (E && !E.eq(n.state.selection)) {
          let B = n.state.tr.setSelection(E);
          o && B.setMeta("composition", o), n.dispatch(B);
        }
      }
      return;
    }
  n.input.domChangeCount++, n.state.selection.from < n.state.selection.to && p.start == p.endB && n.state.selection instanceof I && (p.start > n.state.selection.from && p.start <= n.state.selection.from + 2 && n.state.selection.from >= c.from ? p.start = n.state.selection.from : p.endA < n.state.selection.to && p.endA >= n.state.selection.to - 2 && n.state.selection.to <= c.to && (p.endB += n.state.selection.to - p.endA, p.endA = n.state.selection.to)), Ie && Wt <= 11 && p.endB == p.start + 1 && p.endA == p.start && p.start > c.from && c.doc.textBetween(p.start - c.from - 1, p.start - c.from + 1) == "  " && (p.start--, p.endA--, p.endB--);
  let g = c.doc.resolveNoCache(p.start - c.from), y = c.doc.resolveNoCache(p.endB - c.from), v = u.resolve(p.start), w = g.sameParent(y) && g.parent.inlineContent && v.end() >= p.endA, k;
  if ((qn && n.input.lastIOSEnter > Date.now() - 225 && (!w || i.some((E) => E.nodeName == "DIV" || E.nodeName == "P")) || !w && g.pos < c.doc.content.size && !g.sameParent(y) && (k = L.findFrom(c.doc.resolve(g.pos + 1), 1, !0)) && k.head == y.pos) && n.someProp("handleKeyDown", (E) => E(n, nn(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > p.start && Cm(u, p.start, p.endA, g, y) && n.someProp("handleKeyDown", (E) => E(n, nn(8, "Backspace")))) {
    Qe && Ce && n.domObserver.suppressSelectionUpdates();
    return;
  }
  Ce && Qe && p.endB == p.start && (n.input.lastAndroidDelete = Date.now()), Qe && !w && g.start() != y.start() && y.parentOffset == 0 && g.depth == y.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == p.endA && (p.endB -= 2, y = c.doc.resolveNoCache(p.endB - c.from), setTimeout(() => {
    n.someProp("handleKeyDown", function(E) {
      return E(n, nn(13, "Enter"));
    });
  }, 20));
  let m = p.start, C = p.endA, b, O, H;
  if (w) {
    if (g.pos == y.pos)
      Ie && Wt <= 11 && g.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => Et(n), 20)), b = n.state.tr.delete(m, C), O = u.resolve(p.start).marksAcross(u.resolve(p.endA));
    else if (
      // Adding or removing a mark
      p.endA == p.endB && (H = km(g.parent.content.cut(g.parentOffset, y.parentOffset), v.parent.content.cut(v.parentOffset, p.endA - v.start())))
    )
      b = n.state.tr, H.type == "add" ? b.addMark(m, C, H.mark) : b.removeMark(m, C, H.mark);
    else if (g.parent.child(g.index()).isText && g.index() == y.index() - (y.textOffset ? 0 : 1)) {
      let E = g.parent.textBetween(g.parentOffset, y.parentOffset);
      if (n.someProp("handleTextInput", (B) => B(n, m, C, E)))
        return;
      b = n.state.tr.insertText(E, m, C);
    }
  }
  if (b || (b = n.state.tr.replace(m, C, c.doc.slice(p.start - c.from, p.endB - c.from))), c.sel) {
    let E = La(n, b.doc, c.sel);
    E && !(Ce && Qe && n.composing && E.empty && (p.start != p.endB || n.input.lastAndroidDelete < Date.now() - 100) && (E.head == m || E.head == b.mapping.map(C) - 1) || Ie && E.empty && E.head == m) && b.setSelection(E);
  }
  O && b.ensureMarks(O), o && b.setMeta("composition", o), n.dispatch(b.scrollIntoView());
}
function La(n, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : al(n, e.resolve(t.anchor), e.resolve(t.head));
}
function km(n, e) {
  let t = n.firstChild.marks, r = e.firstChild.marks, i = t, o = r, s, l, a;
  for (let u = 0; u < r.length; u++)
    i = r[u].removeFromSet(i);
  for (let u = 0; u < t.length; u++)
    o = t[u].removeFromSet(o);
  if (i.length == 1 && o.length == 0)
    l = i[0], s = "add", a = (u) => u.mark(l.addToSet(u.marks));
  else if (i.length == 0 && o.length == 1)
    l = o[0], s = "remove", a = (u) => u.mark(l.removeFromSet(u.marks));
  else
    return null;
  let c = [];
  for (let u = 0; u < e.childCount; u++)
    c.push(a(e.child(u)));
  if (S.from(c).eq(n))
    return { mark: l, type: s };
}
function Cm(n, e, t, r, i) {
  if (
    // The content must have shrunk
    t - e <= i.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
    Zo(r, !0, !1) < i.pos
  )
    return !1;
  let o = n.resolve(e);
  if (!r.parent.isTextblock) {
    let l = o.nodeAfter;
    return l != null && t == e + l.nodeSize;
  }
  if (o.parentOffset < o.parent.content.size || !o.parent.isTextblock)
    return !1;
  let s = n.resolve(Zo(o, !0, !0));
  return !s.parent.isTextblock || s.pos > t || Zo(s, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(s.parent.content);
}
function Zo(n, e, t) {
  let r = n.depth, i = e ? n.end() : n.pos;
  for (; r > 0 && (e || n.indexAfter(r) == n.node(r).childCount); )
    r--, i++, e = !1;
  if (t) {
    let o = n.node(r).maybeChild(n.indexAfter(r));
    for (; o && !o.isLeaf; )
      o = o.firstChild, i++;
  }
  return i;
}
function xm(n, e, t, r, i) {
  let o = n.findDiffStart(e, t);
  if (o == null)
    return null;
  let { a: s, b: l } = n.findDiffEnd(e, t + n.size, t + e.size);
  if (i == "end") {
    let a = Math.max(0, o - Math.min(s, l));
    r -= s + a - o;
  }
  if (s < o && n.size < e.size) {
    let a = r <= o && r >= s ? o - r : 0;
    o -= a, o && o < e.size && Pa(e.textBetween(o - 1, o + 1)) && (o += a ? 1 : -1), l = o + (l - s), s = o;
  } else if (l < o) {
    let a = r <= o && r >= l ? o - r : 0;
    o -= a, o && o < n.size && Pa(n.textBetween(o - 1, o + 1)) && (o += a ? 1 : -1), s = o + (s - l), l = o;
  }
  return { start: o, endA: s, endB: l };
}
function Pa(n) {
  if (n.length != 2)
    return !1;
  let e = n.charCodeAt(0), t = n.charCodeAt(1);
  return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319;
}
class Sm {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new Wp(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(Fa), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = za(this), Ha(this), this.nodeViews = $a(this), this.docView = ga(this.state.doc, Ba(this), Qo(this), this.dom, this), this.domObserver = new hm(this, (r, i, o, s) => wm(this, r, i, o, s)), this.domObserver.start(), _p(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let t in e)
        this._props[t] = e[t];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && Rs(this);
    let t = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(Fa), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let t = {};
    for (let r in this._props)
      t[r] = this._props[r];
    t.state = this.state;
    for (let r in e)
      t[r] = e[r];
    this.update(t);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    var r;
    let i = this.state, o = !1, s = !1;
    e.storedMarks && this.composing && (ed(this), s = !0), this.state = e;
    let l = i.plugins != e.plugins || this._props.plugins != t.plugins;
    if (l || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let h = $a(this);
      Mm(h, this.nodeViews) && (this.nodeViews = h, o = !0);
    }
    (l || t.handleDOMEvents != this._props.handleDOMEvents) && Rs(this), this.editable = za(this), Ha(this);
    let a = Qo(this), c = Ba(this), u = i.plugins != e.plugins && !i.doc.eq(e.doc) ? "reset" : e.scrollToSelection > i.scrollToSelection ? "to selection" : "preserve", d = o || !this.docView.matchesNode(e.doc, c, a);
    (d || !e.selection.eq(i.selection)) && (s = !0);
    let f = u == "preserve" && s && this.dom.style.overflowAnchor == null && op(this);
    if (s) {
      this.domObserver.stop();
      let h = d && (Ie || Ce) && !this.composing && !i.selection.empty && !e.selection.empty && Tm(i.selection, e.selection);
      if (d) {
        let p = Ce ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = rm(this)), (o || !this.docView.update(e.doc, c, a, this)) && (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = ga(e.doc, c, a, this.dom, this)), p && !this.trackWrites && (h = !0);
      }
      h || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && Ap(this)) ? Et(this, h) : (Vu(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(i), !((r = this.dragging) === null || r === void 0) && r.node && !i.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, i), u == "reset" ? this.dom.scrollTop = 0 : u == "to selection" ? this.scrollToSelection() : f && sp(f);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!this.someProp("handleScrollToSelection", (t) => t(this))) if (this.state.selection instanceof D) {
      let t = this.docView.domAfterPos(this.state.selection.from);
      t.nodeType == 1 && ua(this, t.getBoundingClientRect(), e);
    } else
      ua(this, this.coordsAtPos(this.state.selection.head, 1), e);
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let t = 0; t < this.directPlugins.length; t++) {
        let r = this.directPlugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let t = 0; t < this.state.plugins.length; t++) {
        let r = this.state.plugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let t = 0; t < this.pluginViews.length; t++) {
        let r = this.pluginViews[t];
        r.update && r.update(this, e);
      }
  }
  updateDraggedNode(e, t) {
    let r = e.node, i = -1;
    if (this.state.doc.nodeAt(r.from) == r.node)
      i = r.from;
    else {
      let o = r.from + (this.state.doc.content.size - t.doc.content.size);
      (o > 0 && this.state.doc.nodeAt(o)) == r.node && (i = o);
    }
    this.dragging = new nd(e.slice, e.move, i < 0 ? void 0 : D.create(this.state.doc, i));
  }
  someProp(e, t) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = t ? t(r) : r))
      return i;
    for (let s = 0; s < this.directPlugins.length; s++) {
      let l = this.directPlugins[s].props[e];
      if (l != null && (i = t ? t(l) : l))
        return i;
    }
    let o = this.state.plugins;
    if (o)
      for (let s = 0; s < o.length; s++) {
        let l = o[s].props[e];
        if (l != null && (i = t ? t(l) : l))
          return i;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (Ie) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && lp(this.dom), Et(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let t = this.dom.parentNode; t; t = t.parentNode)
        if (t.nodeType == 9 || t.nodeType == 11 && t.host)
          return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t;
    }
    return e || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return fp(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, t = 1) {
    return Iu(this, e, t);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    return t ? t.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, t, r = -1) {
    let i = this.docView.posFromDOM(e, t, r);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, t) {
    return yp(this, t || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, t) {
    return Or(this, "", e, !1, t || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, t) {
    return Or(this, e, null, !0, t || new ClipboardEvent("paste"));
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (Up(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], Qo(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, Jh());
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return qp(this, e);
  }
  /**
  Dispatch a transaction. Will call
  [`dispatchTransaction`](https://prosemirror.net/docs/ref/#view.DirectEditorProps.dispatchTransaction)
  when given, and otherwise defaults to applying the transaction to
  the current state and calling
  [`updateState`](https://prosemirror.net/docs/ref/#view.EditorView.updateState) with the result.
  This method is bound to the view instance, so that it can be
  easily passed around.
  */
  dispatch(e) {
    let t = this._props.dispatchTransaction;
    t ? t.call(this, e) : this.updateState(this.state.apply(e));
  }
  /**
  @internal
  */
  domSelectionRange() {
    let e = this.domSelection();
    return Ee && this.root.nodeType === 11 && Zh(this.dom.ownerDocument) == this.dom && mm(this, e) || e;
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
function Ba(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(n.editable), n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t)
      for (let r in t)
        r == "class" ? e.class += " " + t[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
  }), e.translate || (e.translate = "no"), [xe.node(0, n.state.doc.content.size, e)];
}
function Ha(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: xe.widget(n.state.selection.head, e, { raw: !0, marks: n.markCursor }) };
  } else
    n.cursorWrapper = null;
}
function za(n) {
  return !n.someProp("editable", (e) => e(n.state) === !1);
}
function Tm(n, e) {
  let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
  return n.$anchor.start(t) != e.$anchor.start(t);
}
function $a(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return n.someProp("nodeViews", t), n.someProp("markViews", t), e;
}
function Mm(n, e) {
  let t = 0, r = 0;
  for (let i in n) {
    if (n[i] != e[i])
      return !0;
    t++;
  }
  for (let i in e)
    r++;
  return t != r;
}
function Fa(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var Kt = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, $i = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Em = typeof navigator < "u" && /Mac/.test(navigator.platform), Om = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var be = 0; be < 10; be++) Kt[48 + be] = Kt[96 + be] = String(be);
for (var be = 1; be <= 24; be++) Kt[be + 111] = "F" + be;
for (var be = 65; be <= 90; be++)
  Kt[be] = String.fromCharCode(be + 32), $i[be] = String.fromCharCode(be);
for (var es in Kt) $i.hasOwnProperty(es) || ($i[es] = Kt[es]);
function Am(n) {
  var e = Em && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || Om && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? $i : Kt)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const Nm = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function Dm(n) {
  let e = n.split(/-(?!$)/), t = e[e.length - 1];
  t == "Space" && (t = " ");
  let r, i, o, s;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      s = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      o = !0;
    else if (/^mod$/i.test(a))
      Nm ? s = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (t = "Alt-" + t), i && (t = "Ctrl-" + t), s && (t = "Meta-" + t), o && (t = "Shift-" + t), t;
}
function Rm(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n)
    e[Dm(t)] = n[t];
  return e;
}
function ts(n, e, t = !0) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t && e.shiftKey && (n = "Shift-" + n), n;
}
function Im(n) {
  return new se({ props: { handleKeyDown: pl(n) } });
}
function pl(n) {
  let e = Rm(n);
  return function(t, r) {
    let i = Am(r), o, s = e[ts(i, r)];
    if (s && s(t.state, t.dispatch, t))
      return !0;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let l = e[ts(i, r, !1)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
      if ((r.shiftKey || r.altKey || r.metaKey || i.charCodeAt(0) > 127) && (o = Kt[r.keyCode]) && o != i) {
        let l = e[ts(o, r)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
    }
    return !1;
  };
}
const Lm = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0);
function ld(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t;
}
const Pm = (n, e, t) => {
  let r = ld(n, t);
  if (!r)
    return !1;
  let i = ml(r);
  if (!i) {
    let s = r.blockRange(), l = s && nr(s);
    return l == null ? !1 : (e && e(n.tr.lift(s, l).scrollIntoView()), !0);
  }
  let o = i.nodeBefore;
  if (dd(n, i, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (Jn(o, "end") || D.isSelectable(o)))
    for (let s = r.depth; ; s--) {
      let l = xo(n.doc, r.before(s), r.after(s), M.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = n.tr.step(l);
          a.setSelection(Jn(o, "end") ? L.findFrom(a.doc.resolve(a.mapping.map(i.pos, -1)), -1) : D.create(a.doc, i.pos - o.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (s == 1 || r.node(s - 1).childCount > 1)
        break;
    }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos - o.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, Bm = (n, e, t) => {
  let r = ld(n, t);
  if (!r)
    return !1;
  let i = ml(r);
  return i ? ad(n, i, e) : !1;
}, Hm = (n, e, t) => {
  let r = cd(n, t);
  if (!r)
    return !1;
  let i = gl(r);
  return i ? ad(n, i, e) : !1;
};
function ad(n, e, t) {
  let r = e.nodeBefore, i = r, o = e.pos - 1;
  for (; !i.isTextblock; o--) {
    if (i.type.spec.isolating)
      return !1;
    let u = i.lastChild;
    if (!u)
      return !1;
    i = u;
  }
  let s = e.nodeAfter, l = s, a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating)
      return !1;
    let u = l.firstChild;
    if (!u)
      return !1;
    l = u;
  }
  let c = xo(n.doc, o, a, M.empty);
  if (!c || c.from != o || c instanceof ue && c.slice.size >= a - o)
    return !1;
  if (t) {
    let u = n.tr.step(c);
    u.setSelection(I.create(u.doc, o)), t(u.scrollIntoView());
  }
  return !0;
}
function Jn(n, e, t = !1) {
  for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (t && r.childCount != 1)
      return !1;
  }
  return !1;
}
const zm = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0)
      return !1;
    o = ml(r);
  }
  let s = o && o.nodeBefore;
  return !s || !D.isSelectable(s) ? !1 : (e && e(n.tr.setSelection(D.create(n.doc, o.pos - s.nodeSize)).scrollIntoView()), !0);
};
function ml(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0)
        return n.doc.resolve(n.before(e + 1));
      if (n.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function cd(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t;
}
const $m = (n, e, t) => {
  let r = cd(n, t);
  if (!r)
    return !1;
  let i = gl(r);
  if (!i)
    return !1;
  let o = i.nodeAfter;
  if (dd(n, i, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (Jn(o, "start") || D.isSelectable(o))) {
    let s = xo(n.doc, r.before(), r.after(), M.empty);
    if (s && s.slice.size < s.to - s.from) {
      if (e) {
        let l = n.tr.step(s);
        l.setSelection(Jn(o, "start") ? L.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : D.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos, i.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, Fm = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size)
      return !1;
    o = gl(r);
  }
  let s = o && o.nodeAfter;
  return !s || !D.isSelectable(s) ? !1 : (e && e(n.tr.setSelection(D.create(n.doc, o.pos)).scrollIntoView()), !0);
};
function gl(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      let t = n.node(e);
      if (n.index(e) + 1 < t.childCount)
        return n.doc.resolve(n.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const Vm = (n, e) => {
  let t = n.selection, r = t instanceof D, i;
  if (r) {
    if (t.node.isTextblock || !Jt(n.doc, t.from))
      return !1;
    i = t.from;
  } else if (i = Co(n.doc, t.from, -1), i == null)
    return !1;
  if (e) {
    let o = n.tr.join(i);
    r && o.setSelection(D.create(o.doc, i - n.doc.resolve(i).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, jm = (n, e) => {
  let t = n.selection, r;
  if (t instanceof D) {
    if (t.node.isTextblock || !Jt(n.doc, t.to))
      return !1;
    r = t.to;
  } else if (r = Co(n.doc, t.to, 1), r == null)
    return !1;
  return e && e(n.tr.join(r).scrollIntoView()), !0;
}, Wm = (n, e) => {
  let { $from: t, $to: r } = n.selection, i = t.blockRange(r), o = i && nr(i);
  return o == null ? !1 : (e && e(n.tr.lift(i, o).scrollIntoView()), !0);
}, _m = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  return !t.parent.type.spec.code || !t.sameParent(r) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
};
function ud(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const Um = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  if (!t.parent.type.spec.code || !t.sameParent(r))
    return !1;
  let i = t.node(-1), o = t.indexAfter(-1), s = ud(i.contentMatchAt(o));
  if (!s || !i.canReplaceWith(o, o, s))
    return !1;
  if (e) {
    let l = t.after(), a = n.tr.replaceWith(l, l, s.createAndFill());
    a.setSelection(L.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, Km = (n, e) => {
  let t = n.selection, { $from: r, $to: i } = t;
  if (t instanceof et || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let o = ud(i.parent.contentMatchAt(i.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let s = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, l = n.tr.insert(s, o.createAndFill());
    l.setSelection(I.create(l.doc, s + 1)), e(l.scrollIntoView());
  }
  return !0;
}, qm = (n, e) => {
  let { $cursor: t } = n.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let o = t.before();
    if (Vn(n.doc, o))
      return e && e(n.tr.split(o).scrollIntoView()), !0;
  }
  let r = t.blockRange(), i = r && nr(r);
  return i == null ? !1 : (e && e(n.tr.lift(r, i).scrollIntoView()), !0);
}, Jm = (n, e) => {
  let { $from: t, to: r } = n.selection, i, o = t.sharedDepth(r);
  return o == 0 ? !1 : (i = t.before(o), e && e(n.tr.setSelection(D.create(n.doc, i))), !0);
};
function Gm(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, o = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(o - 1, o) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(i.isTextblock || Jt(n.doc, e.pos)) ? !1 : (t && t(n.tr.clearIncompatible(e.pos, r.type, r.contentMatchAt(r.childCount)).join(e.pos).scrollIntoView()), !0);
}
function dd(n, e, t, r) {
  let i = e.nodeBefore, o = e.nodeAfter, s, l, a = i.type.spec.isolating || o.type.spec.isolating;
  if (!a && Gm(n, e, t))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (s = (l = i.contentMatchAt(i.childCount)).findWrapping(o.type)) && l.matchType(s[0] || o.type).validEnd) {
    if (t) {
      let h = e.pos + o.nodeSize, p = S.empty;
      for (let v = s.length - 1; v >= 0; v--)
        p = S.from(s[v].create(null, p));
      p = S.from(i.copy(p));
      let g = n.tr.step(new de(e.pos - 1, h, e.pos, h, new M(p, 1, 0), s.length, !0)), y = h + 2 * s.length;
      Jt(g.doc, y) && g.join(y), t(g.scrollIntoView());
    }
    return !0;
  }
  let u = o.type.spec.isolating || r > 0 && a ? null : L.findFrom(e, 1), d = u && u.$from.blockRange(u.$to), f = d && nr(d);
  if (f != null && f >= e.depth)
    return t && t(n.tr.lift(d, f).scrollIntoView()), !0;
  if (c && Jn(o, "start", !0) && Jn(i, "end")) {
    let h = i, p = [];
    for (; p.push(h), !h.isTextblock; )
      h = h.lastChild;
    let g = o, y = 1;
    for (; !g.isTextblock; g = g.firstChild)
      y++;
    if (h.canReplace(h.childCount, h.childCount, g.content)) {
      if (t) {
        let v = S.empty;
        for (let k = p.length - 1; k >= 0; k--)
          v = S.from(p[k].copy(v));
        let w = n.tr.step(new de(e.pos - p.length, e.pos + o.nodeSize, e.pos + y, e.pos + o.nodeSize - y, new M(v, p.length, 0), 0, !0));
        t(w.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function fd(n) {
  return function(e, t) {
    let r = e.selection, i = n < 0 ? r.$from : r.$to, o = i.depth;
    for (; i.node(o).isInline; ) {
      if (!o)
        return !1;
      o--;
    }
    return i.node(o).isTextblock ? (t && t(e.tr.setSelection(I.create(e.doc, n < 0 ? i.start(o) : i.end(o)))), !0) : !1;
  };
}
const Ym = fd(-1), Xm = fd(1);
function Qm(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: o } = t.selection, s = i.blockRange(o), l = s && rl(s, n, e);
    return l ? (r && r(t.tr.wrap(s, l).scrollIntoView()), !0) : !1;
  };
}
function Va(n, e = null) {
  return function(t, r) {
    let i = !1;
    for (let o = 0; o < t.selection.ranges.length && !i; o++) {
      let { $from: { pos: s }, $to: { pos: l } } = t.selection.ranges[o];
      t.doc.nodesBetween(s, l, (a, c) => {
        if (i)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(n, e)))
          if (a.type == n)
            i = !0;
          else {
            let u = t.doc.resolve(c), d = u.index();
            i = u.parent.canReplaceWith(d, d + 1, n);
          }
      });
    }
    if (!i)
      return !1;
    if (r) {
      let o = t.tr;
      for (let s = 0; s < t.selection.ranges.length; s++) {
        let { $from: { pos: l }, $to: { pos: a } } = t.selection.ranges[s];
        o.setBlockType(l, a, n, e);
      }
      r(o.scrollIntoView());
    }
    return !0;
  };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function Zm(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: o } = t.selection, s = i.blockRange(o), l = !1, a = s;
    if (!s)
      return !1;
    if (s.depth >= 2 && i.node(s.depth - 1).type.compatibleContent(n) && s.startIndex == 0) {
      if (i.index(s.depth - 1) == 0)
        return !1;
      let u = t.doc.resolve(s.start - 2);
      a = new Di(u, u, s.depth), s.endIndex < s.parent.childCount && (s = new Di(i, t.doc.resolve(o.end(s.depth)), s.depth)), l = !0;
    }
    let c = rl(a, n, e, s);
    return c ? (r && r(eg(t.tr, s, c, l, n).scrollIntoView()), !0) : !1;
  };
}
function eg(n, e, t, r, i) {
  let o = S.empty;
  for (let u = t.length - 1; u >= 0; u--)
    o = S.from(t[u].type.create(t[u].attrs, o));
  n.step(new de(e.start - (r ? 2 : 0), e.end, e.start, e.end, new M(o, 0, 0), t.length, !0));
  let s = 0;
  for (let u = 0; u < t.length; u++)
    t[u].type == i && (s = u + 1);
  let l = t.length - s, a = e.start + t.length - (r ? 2 : 0), c = e.parent;
  for (let u = e.startIndex, d = e.endIndex, f = !0; u < d; u++, f = !1)
    !f && Vn(n.doc, a, l) && (n.split(a, l), a += 2 * l), a += c.child(u).nodeSize;
  return n;
}
function tg(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (s) => s.childCount > 0 && s.firstChild.type == n);
    return o ? t ? r.node(o.depth - 1).type == n ? ng(e, t, n, o) : rg(e, t, o) : !0 : !1;
  };
}
function ng(n, e, t, r) {
  let i = n.tr, o = r.end, s = r.$to.end(r.depth);
  o < s && (i.step(new de(o - 1, s, o, s, new M(S.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new Di(i.doc.resolve(r.$from.pos), i.doc.resolve(s), r.depth));
  const l = nr(r);
  if (l == null)
    return !1;
  i.lift(r, l);
  let a = i.mapping.map(o, -1) - 1;
  return Jt(i.doc, a) && i.join(a), e(i.scrollIntoView()), !0;
}
function rg(n, e, t) {
  let r = n.tr, i = t.parent;
  for (let h = t.end, p = t.endIndex - 1, g = t.startIndex; p > g; p--)
    h -= i.child(p).nodeSize, r.delete(h - 1, h + 1);
  let o = r.doc.resolve(t.start), s = o.nodeAfter;
  if (r.mapping.map(t.end) != t.start + o.nodeAfter.nodeSize)
    return !1;
  let l = t.startIndex == 0, a = t.endIndex == i.childCount, c = o.node(-1), u = o.index(-1);
  if (!c.canReplace(u + (l ? 0 : 1), u + 1, s.content.append(a ? S.empty : S.from(i))))
    return !1;
  let d = o.pos, f = d + s.nodeSize;
  return r.step(new de(d - (l ? 1 : 0), f + (a ? 1 : 0), d + 1, f - 1, new M((l ? S.empty : S.from(i.copy(S.empty))).append(a ? S.empty : S.from(i.copy(S.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function ig(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (c) => c.childCount > 0 && c.firstChild.type == n);
    if (!o)
      return !1;
    let s = o.startIndex;
    if (s == 0)
      return !1;
    let l = o.parent, a = l.child(s - 1);
    if (a.type != n)
      return !1;
    if (t) {
      let c = a.lastChild && a.lastChild.type == l.type, u = S.from(c ? n.create() : null), d = new M(S.from(n.create(null, S.from(l.type.create(null, u)))), c ? 3 : 1, 0), f = o.start, h = o.end;
      t(e.tr.step(new de(f - (c ? 3 : 1), h, f, h, d, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function Oo(n) {
  const { state: e, transaction: t } = n;
  let { selection: r } = t, { doc: i } = t, { storedMarks: o } = t;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return o;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = t.selection, i = t.doc, o = t.storedMarks, t;
    }
  };
}
class Ao {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: t, state: r } = this, { view: i } = t, { tr: o } = r, s = this.buildProps(o);
    return Object.fromEntries(Object.entries(e).map(([l, a]) => [l, (...u) => {
      const d = a(...u)(s);
      return !o.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(o), d;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, t = !0) {
    const { rawCommands: r, editor: i, state: o } = this, { view: s } = i, l = [], a = !!e, c = e || o.tr, u = () => (!a && t && !c.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(c), l.every((f) => f === !0)), d = {
      ...Object.fromEntries(Object.entries(r).map(([f, h]) => [f, (...g) => {
        const y = this.buildProps(c, t), v = h(...g)(y);
        return l.push(v), d;
      }])),
      run: u
    };
    return d;
  }
  createCan(e) {
    const { rawCommands: t, state: r } = this, i = !1, o = e || r.tr, s = this.buildProps(o, i);
    return {
      ...Object.fromEntries(Object.entries(t).map(([a, c]) => [a, (...u) => c(...u)({ ...s, dispatch: void 0 })])),
      chain: () => this.createChain(o, i)
    };
  }
  buildProps(e, t = !0) {
    const { rawCommands: r, editor: i, state: o } = this, { view: s } = i, l = {
      tr: e,
      editor: i,
      view: s,
      state: Oo({
        state: o,
        transaction: e
      }),
      dispatch: t ? () => {
      } : void 0,
      chain: () => this.createChain(e, t),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([a, c]) => [a, (...u) => c(...u)(l)]));
      }
    };
    return l;
  }
}
class og {
  constructor() {
    this.callbacks = {};
  }
  on(e, t) {
    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
  }
  emit(e, ...t) {
    const r = this.callbacks[e];
    return r && r.forEach((i) => i.apply(this, t)), this;
  }
  off(e, t) {
    const r = this.callbacks[e];
    return r && (t ? this.callbacks[e] = r.filter((i) => i !== t) : delete this.callbacks[e]), this;
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function A(n, e, t) {
  return n.config[e] === void 0 && n.parent ? A(n.parent, e, t) : typeof n.config[e] == "function" ? n.config[e].bind({
    ...t,
    parent: n.parent ? A(n.parent, e, t) : null
  }) : n.config[e];
}
function No(n) {
  const e = n.filter((i) => i.type === "extension"), t = n.filter((i) => i.type === "node"), r = n.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: r
  };
}
function hd(n) {
  const e = [], { nodeExtensions: t, markExtensions: r } = No(n), i = [...t, ...r], o = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return n.forEach((s) => {
    const l = {
      name: s.name,
      options: s.options,
      storage: s.storage,
      extensions: i
    }, a = A(s, "addGlobalAttributes", l);
    if (!a)
      return;
    a().forEach((u) => {
      u.types.forEach((d) => {
        Object.entries(u.attributes).forEach(([f, h]) => {
          e.push({
            type: d,
            name: f,
            attribute: {
              ...o,
              ...h
            }
          });
        });
      });
    });
  }), i.forEach((s) => {
    const l = {
      name: s.name,
      options: s.options,
      storage: s.storage
    }, a = A(s, "addAttributes", l);
    if (!a)
      return;
    const c = a();
    Object.entries(c).forEach(([u, d]) => {
      const f = {
        ...o,
        ...d
      };
      typeof (f == null ? void 0 : f.default) == "function" && (f.default = f.default()), f != null && f.isRequired && (f == null ? void 0 : f.default) === void 0 && delete f.default, e.push({
        type: s.name,
        name: u,
        attribute: f
      });
    });
  }), e;
}
function he(n, e) {
  if (typeof n == "string") {
    if (!e.nodes[n])
      throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return e.nodes[n];
  }
  return n;
}
function U(...n) {
  return n.filter((e) => !!e).reduce((e, t) => {
    const r = { ...e };
    return Object.entries(t).forEach(([i, o]) => {
      if (!r[i]) {
        r[i] = o;
        return;
      }
      if (i === "class") {
        const l = o ? o.split(" ") : [], a = r[i] ? r[i].split(" ") : [], c = l.filter((u) => !a.includes(u));
        r[i] = [...a, ...c].join(" ");
      } else i === "style" ? r[i] = [r[i], o].join("; ") : r[i] = o;
    }), r;
  }, {});
}
function Is(n, e) {
  return e.filter((t) => t.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : {
    [t.name]: n.attrs[t.name]
  }).reduce((t, r) => U(t, r), {});
}
function pd(n) {
  return typeof n == "function";
}
function F(n, e = void 0, ...t) {
  return pd(n) ? e ? n.bind(e)(...t) : n(...t) : n;
}
function sg(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function lg(n) {
  return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n;
}
function ja(n, e) {
  return "style" in n ? n : {
    ...n,
    getAttrs: (t) => {
      const r = n.getAttrs ? n.getAttrs(t) : n.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((o, s) => {
        const l = s.attribute.parseHTML ? s.attribute.parseHTML(t) : lg(t.getAttribute(s.name));
        return l == null ? o : {
          ...o,
          [s.name]: l
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function Wa(n) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(n).filter(([e, t]) => e === "attrs" && sg(t) ? !1 : t != null)
  );
}
function ag(n, e) {
  var t;
  const r = hd(n), { nodeExtensions: i, markExtensions: o } = No(n), s = (t = i.find((c) => A(c, "topNode"))) === null || t === void 0 ? void 0 : t.name, l = Object.fromEntries(i.map((c) => {
    const u = r.filter((v) => v.type === c.name), d = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, f = n.reduce((v, w) => {
      const k = A(w, "extendNodeSchema", d);
      return {
        ...v,
        ...k ? k(c) : {}
      };
    }, {}), h = Wa({
      ...f,
      content: F(A(c, "content", d)),
      marks: F(A(c, "marks", d)),
      group: F(A(c, "group", d)),
      inline: F(A(c, "inline", d)),
      atom: F(A(c, "atom", d)),
      selectable: F(A(c, "selectable", d)),
      draggable: F(A(c, "draggable", d)),
      code: F(A(c, "code", d)),
      whitespace: F(A(c, "whitespace", d)),
      defining: F(A(c, "defining", d)),
      isolating: F(A(c, "isolating", d)),
      attrs: Object.fromEntries(u.map((v) => {
        var w;
        return [v.name, { default: (w = v == null ? void 0 : v.attribute) === null || w === void 0 ? void 0 : w.default }];
      }))
    }), p = F(A(c, "parseHTML", d));
    p && (h.parseDOM = p.map((v) => ja(v, u)));
    const g = A(c, "renderHTML", d);
    g && (h.toDOM = (v) => g({
      node: v,
      HTMLAttributes: Is(v, u)
    }));
    const y = A(c, "renderText", d);
    return y && (h.toText = y), [c.name, h];
  })), a = Object.fromEntries(o.map((c) => {
    const u = r.filter((y) => y.type === c.name), d = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, f = n.reduce((y, v) => {
      const w = A(v, "extendMarkSchema", d);
      return {
        ...y,
        ...w ? w(c) : {}
      };
    }, {}), h = Wa({
      ...f,
      inclusive: F(A(c, "inclusive", d)),
      excludes: F(A(c, "excludes", d)),
      group: F(A(c, "group", d)),
      spanning: F(A(c, "spanning", d)),
      code: F(A(c, "code", d)),
      attrs: Object.fromEntries(u.map((y) => {
        var v;
        return [y.name, { default: (v = y == null ? void 0 : y.attribute) === null || v === void 0 ? void 0 : v.default }];
      }))
    }), p = F(A(c, "parseHTML", d));
    p && (h.parseDOM = p.map((y) => ja(y, u)));
    const g = A(c, "renderHTML", d);
    return g && (h.toDOM = (y) => g({
      mark: y,
      HTMLAttributes: Is(y, u)
    })), [c.name, h];
  }));
  return new cu({
    topNode: s,
    nodes: l,
    marks: a
  });
}
function ns(n, e) {
  return e.nodes[n] || e.marks[n] || null;
}
function _a(n, e) {
  return Array.isArray(e) ? e.some((t) => (typeof t == "string" ? t : t.name) === n.name) : e;
}
const cg = (n, e = 500) => {
  let t = "";
  const r = n.parentOffset;
  return n.parent.nodesBetween(Math.max(0, r - e), r, (i, o, s, l) => {
    var a, c;
    const u = ((c = (a = i.type.spec).toText) === null || c === void 0 ? void 0 : c.call(a, {
      node: i,
      pos: o,
      parent: s,
      index: l
    })) || i.textContent || "%leaf%";
    t += i.isAtom && !i.isText ? u : u.slice(0, Math.max(0, r - o));
  }), t;
};
function yl(n) {
  return Object.prototype.toString.call(n) === "[object RegExp]";
}
class Do {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const ug = (n, e) => {
  if (yl(e))
    return e.exec(n);
  const t = e(n);
  if (!t)
    return null;
  const r = [t.text];
  return r.index = t.index, r.input = n, r.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(t.replaceWith)), r;
};
function oi(n) {
  var e;
  const { editor: t, from: r, to: i, text: o, rules: s, plugin: l } = n, { view: a } = t;
  if (a.composing)
    return !1;
  const c = a.state.doc.resolve(r);
  if (
    // check for code node
    c.parent.type.spec.code || !((e = c.nodeBefore || c.nodeAfter) === null || e === void 0) && e.marks.find((f) => f.type.spec.code)
  )
    return !1;
  let u = !1;
  const d = cg(c) + o;
  return s.forEach((f) => {
    if (u)
      return;
    const h = ug(d, f.find);
    if (!h)
      return;
    const p = a.state.tr, g = Oo({
      state: a.state,
      transaction: p
    }), y = {
      from: r - (h[0].length - o.length),
      to: i
    }, { commands: v, chain: w, can: k } = new Ao({
      editor: t,
      state: g
    });
    f.handler({
      state: g,
      range: y,
      match: h,
      commands: v,
      chain: w,
      can: k
    }) === null || !p.steps.length || (p.setMeta(l, {
      transform: p,
      from: r,
      to: i,
      text: o
    }), a.dispatch(p), u = !0);
  }), u;
}
function dg(n) {
  const { editor: e, rules: t } = n, r = new se({
    state: {
      init() {
        return null;
      },
      apply(i, o) {
        const s = i.getMeta(r);
        if (s)
          return s;
        const l = i.getMeta("applyInputRules");
        return !!l && setTimeout(() => {
          const { from: c, text: u } = l, d = c + u.length;
          oi({
            editor: e,
            from: c,
            to: d,
            text: u,
            rules: t,
            plugin: r
          });
        }), i.selectionSet || i.docChanged ? null : o;
      }
    },
    props: {
      handleTextInput(i, o, s, l) {
        return oi({
          editor: e,
          from: o,
          to: s,
          text: l,
          rules: t,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: o } = i.state.selection;
          o && oi({
            editor: e,
            from: o.pos,
            to: o.pos,
            text: "",
            rules: t,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(i, o) {
        if (o.key !== "Enter")
          return !1;
        const { $cursor: s } = i.state.selection;
        return s ? oi({
          editor: e,
          from: s.pos,
          to: s.pos,
          text: `
`,
          rules: t,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
function fg(n) {
  return typeof n == "number";
}
class md {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const hg = (n, e, t) => {
  if (yl(e))
    return [...n.matchAll(e)];
  const r = e(n, t);
  return r ? r.map((i) => {
    const o = [i.text];
    return o.index = i.index, o.input = n, o.data = i.data, i.replaceWith && (i.text.includes(i.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), o.push(i.replaceWith)), o;
  }) : [];
};
function pg(n) {
  const { editor: e, state: t, from: r, to: i, rule: o, pasteEvent: s, dropEvent: l } = n, { commands: a, chain: c, can: u } = new Ao({
    editor: e,
    state: t
  }), d = [];
  return t.doc.nodesBetween(r, i, (h, p) => {
    if (!h.isTextblock || h.type.spec.code)
      return;
    const g = Math.max(r, p), y = Math.min(i, p + h.content.size), v = h.textBetween(g - p, y - p, void 0, "￼");
    hg(v, o.find, s).forEach((k) => {
      if (k.index === void 0)
        return;
      const m = g + k.index + 1, C = m + k[0].length, b = {
        from: t.tr.mapping.map(m),
        to: t.tr.mapping.map(C)
      }, O = o.handler({
        state: t,
        range: b,
        match: k,
        commands: a,
        chain: c,
        can: u,
        pasteEvent: s,
        dropEvent: l
      });
      d.push(O);
    });
  }), d.every((h) => h !== null);
}
const mg = (n) => {
  var e;
  const t = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (e = t.clipboardData) === null || e === void 0 || e.setData("text/html", n), t;
};
function gg(n) {
  const { editor: e, rules: t } = n;
  let r = null, i = !1, o = !1, s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  const a = ({ state: u, from: d, to: f, rule: h, pasteEvt: p }) => {
    const g = u.tr, y = Oo({
      state: u,
      transaction: g
    });
    if (!(!pg({
      editor: e,
      state: y,
      from: Math.max(d - 1, 0),
      to: f.b - 1,
      rule: h,
      pasteEvent: p,
      dropEvent: l
    }) || !g.steps.length))
      return l = typeof DragEvent < "u" ? new DragEvent("drop") : null, s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, g;
  };
  return t.map((u) => new se({
    // we register a global drag handler to track the current drag source element
    view(d) {
      const f = (h) => {
        var p;
        r = !((p = d.dom.parentElement) === null || p === void 0) && p.contains(h.target) ? d.dom.parentElement : null;
      };
      return window.addEventListener("dragstart", f), {
        destroy() {
          window.removeEventListener("dragstart", f);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (d, f) => (o = r === d.dom.parentElement, l = f, !1),
        paste: (d, f) => {
          var h;
          const p = (h = f.clipboardData) === null || h === void 0 ? void 0 : h.getData("text/html");
          return s = f, i = !!(p != null && p.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (d, f, h) => {
      const p = d[0], g = p.getMeta("uiEvent") === "paste" && !i, y = p.getMeta("uiEvent") === "drop" && !o, v = p.getMeta("applyPasteRules"), w = !!v;
      if (!g && !y && !w)
        return;
      if (w) {
        const { from: C, text: b } = v, O = C + b.length, H = mg(b);
        return a({
          rule: u,
          state: h,
          from: C,
          to: { b: O },
          pasteEvt: H
        });
      }
      const k = f.doc.content.findDiffStart(h.doc.content), m = f.doc.content.findDiffEnd(h.doc.content);
      if (!(!fg(k) || !m || k === m.b))
        return a({
          rule: u,
          state: h,
          from: k,
          to: m,
          pasteEvt: s
        });
    }
  }));
}
function yg(n) {
  const e = n.filter((t, r) => n.indexOf(t) !== r);
  return [...new Set(e)];
}
class $n {
  constructor(e, t) {
    this.splittableMarks = [], this.editor = t, this.extensions = $n.resolve(e), this.schema = ag(this.extensions, t), this.setupExtensions();
  }
  /**
   * Returns a flattened and sorted extension list while
   * also checking for duplicated extensions and warns the user.
   * @param extensions An array of Tiptap extensions
   * @returns An flattened and sorted array of Tiptap extensions
   */
  static resolve(e) {
    const t = $n.sort($n.flatten(e)), r = yg(t.map((i) => i.name));
    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((i) => `'${i}'`).join(", ")}]. This can lead to issues.`), t;
  }
  /**
   * Create a flattened array of extensions by traversing the `addExtensions` field.
   * @param extensions An array of Tiptap extensions
   * @returns A flattened array of Tiptap extensions
   */
  static flatten(e) {
    return e.map((t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage
      }, i = A(t, "addExtensions", r);
      return i ? [t, ...this.flatten(i())] : t;
    }).flat(10);
  }
  /**
   * Sort extensions by priority.
   * @param extensions An array of Tiptap extensions
   * @returns A sorted array of Tiptap extensions by priority
   */
  static sort(e) {
    return e.sort((r, i) => {
      const o = A(r, "priority") || 100, s = A(i, "priority") || 100;
      return o > s ? -1 : o < s ? 1 : 0;
    });
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((e, t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage,
        editor: this.editor,
        type: ns(t.name, this.schema)
      }, i = A(t, "addCommands", r);
      return i ? {
        ...e,
        ...i()
      } : e;
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor: e } = this, t = $n.sort([...this.extensions].reverse()), r = [], i = [], o = t.map((s) => {
      const l = {
        name: s.name,
        options: s.options,
        storage: s.storage,
        editor: e,
        type: ns(s.name, this.schema)
      }, a = [], c = A(s, "addKeyboardShortcuts", l);
      let u = {};
      if (s.type === "mark" && A(s, "exitable", l) && (u.ArrowRight = () => qe.handleExit({ editor: e, mark: s })), c) {
        const g = Object.fromEntries(Object.entries(c()).map(([y, v]) => [y, () => v({ editor: e })]));
        u = { ...u, ...g };
      }
      const d = Im(u);
      a.push(d);
      const f = A(s, "addInputRules", l);
      _a(s, e.options.enableInputRules) && f && r.push(...f());
      const h = A(s, "addPasteRules", l);
      _a(s, e.options.enablePasteRules) && h && i.push(...h());
      const p = A(s, "addProseMirrorPlugins", l);
      if (p) {
        const g = p();
        a.push(...g);
      }
      return a;
    }).flat();
    return [
      dg({
        editor: e,
        rules: r
      }),
      ...gg({
        editor: e,
        rules: i
      }),
      ...o
    ];
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return hd(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor: e } = this, { nodeExtensions: t } = No(this.extensions);
    return Object.fromEntries(t.filter((r) => !!A(r, "addNodeView")).map((r) => {
      const i = this.attributes.filter((a) => a.type === r.name), o = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: e,
        type: he(r.name, this.schema)
      }, s = A(r, "addNodeView", o);
      if (!s)
        return [];
      const l = (a, c, u, d) => {
        const f = Is(a, i);
        return s()({
          editor: e,
          node: a,
          getPos: u,
          decorations: d,
          HTMLAttributes: f,
          extension: r
        });
      };
      return [r.name, l];
    }));
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    this.extensions.forEach((e) => {
      var t;
      this.editor.extensionStorage[e.name] = e.storage;
      const r = {
        name: e.name,
        options: e.options,
        storage: e.storage,
        editor: this.editor,
        type: ns(e.name, this.schema)
      };
      e.type === "mark" && (!((t = F(A(e, "keepOnSplit", r))) !== null && t !== void 0) || t) && this.splittableMarks.push(e.name);
      const i = A(e, "onBeforeCreate", r), o = A(e, "onCreate", r), s = A(e, "onUpdate", r), l = A(e, "onSelectionUpdate", r), a = A(e, "onTransaction", r), c = A(e, "onFocus", r), u = A(e, "onBlur", r), d = A(e, "onDestroy", r);
      i && this.editor.on("beforeCreate", i), o && this.editor.on("create", o), s && this.editor.on("update", s), l && this.editor.on("selectionUpdate", l), a && this.editor.on("transaction", a), c && this.editor.on("focus", c), u && this.editor.on("blur", u), d && this.editor.on("destroy", d);
    });
  }
}
function bg(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function si(n) {
  return bg(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function Ro(n, e) {
  const t = { ...n };
  return si(n) && si(e) && Object.keys(e).forEach((r) => {
    si(e[r]) && si(n[r]) ? t[r] = Ro(n[r], e[r]) : t[r] = e[r];
  }), t;
}
class pe {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = F(A(this, "addOptions", {
      name: this.name
    }))), this.storage = F(A(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new pe(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => Ro(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new pe({ ...this.config, ...e });
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = F(A(t, "addOptions", {
      name: t.name
    })), t.storage = F(A(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function gd(n, e, t) {
  const { from: r, to: i } = e, { blockSeparator: o = `

`, textSerializers: s = {} } = t || {};
  let l = "";
  return n.nodesBetween(r, i, (a, c, u, d) => {
    var f;
    a.isBlock && c > r && (l += o);
    const h = s == null ? void 0 : s[a.type.name];
    if (h)
      return u && (l += h({
        node: a,
        pos: c,
        parent: u,
        index: d,
        range: e
      })), !1;
    a.isText && (l += (f = a == null ? void 0 : a.text) === null || f === void 0 ? void 0 : f.slice(Math.max(r, c) - c, i - c));
  }), l;
}
function yd(n) {
  return Object.fromEntries(Object.entries(n.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
const vg = pe.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new se({
        key: new ae("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: n } = this, { state: e, schema: t } = n, { doc: r, selection: i } = e, { ranges: o } = i, s = Math.min(...o.map((u) => u.$from.pos)), l = Math.max(...o.map((u) => u.$to.pos)), a = yd(t);
            return gd(r, { from: s, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), wg = () => ({ editor: n, view: e }) => (requestAnimationFrame(() => {
  var t;
  n.isDestroyed || (e.dom.blur(), (t = window == null ? void 0 : window.getSelection()) === null || t === void 0 || t.removeAllRanges());
}), !0), kg = (n = !1) => ({ commands: e }) => e.setContent("", n), Cg = () => ({ state: n, tr: e, dispatch: t }) => {
  const { selection: r } = e, { ranges: i } = r;
  return t && i.forEach(({ $from: o, $to: s }) => {
    n.doc.nodesBetween(o.pos, s.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: u } = e, d = c.resolve(u.map(a)), f = c.resolve(u.map(a + l.nodeSize)), h = d.blockRange(f);
      if (!h)
        return;
      const p = nr(h);
      if (l.type.isTextblock) {
        const { defaultType: g } = d.parent.contentMatchAt(d.index());
        e.setNodeMarkup(h.start, g);
      }
      (p || p === 0) && e.lift(h, p);
    });
  }), !0;
}, xg = (n) => (e) => n(e), Sg = () => ({ state: n, dispatch: e }) => Km(n, e), Tg = (n, e) => ({ editor: t, tr: r }) => {
  const { state: i } = t, o = i.doc.slice(n.from, n.to);
  r.deleteRange(n.from, n.to);
  const s = r.mapping.map(e);
  return r.insert(s, o.content), r.setSelection(new I(r.doc.resolve(s - 1))), !0;
}, Mg = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, r = t.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const i = n.selection.$anchor;
  for (let o = i.depth; o > 0; o -= 1)
    if (i.node(o).type === r.type) {
      if (e) {
        const l = i.before(o), a = i.after(o);
        n.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Eg = (n) => ({ tr: e, state: t, dispatch: r }) => {
  const i = he(n, t.schema), o = e.selection.$anchor;
  for (let s = o.depth; s > 0; s -= 1)
    if (o.node(s).type === i) {
      if (r) {
        const a = o.before(s), c = o.after(s);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Og = (n) => ({ tr: e, dispatch: t }) => {
  const { from: r, to: i } = n;
  return t && e.delete(r, i), !0;
}, Ag = () => ({ state: n, dispatch: e }) => Lm(n, e), Ng = () => ({ commands: n }) => n.keyboardShortcut("Enter"), Dg = () => ({ state: n, dispatch: e }) => Um(n, e);
function Fi(n, e, t = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => t.strict ? e[i] === n[i] : yl(e[i]) ? e[i].test(n[i]) : e[i] === n[i]) : !0;
}
function Ls(n, e, t = {}) {
  return n.find((r) => r.type === e && Fi(r.attrs, t));
}
function Rg(n, e, t = {}) {
  return !!Ls(n, e, t);
}
function bl(n, e, t = {}) {
  if (!n || !e)
    return;
  let r = n.parent.childAfter(n.parentOffset);
  if (n.parentOffset === r.offset && r.offset !== 0 && (r = n.parent.childBefore(n.parentOffset)), !r.node)
    return;
  const i = Ls([...r.node.marks], e, t);
  if (!i)
    return;
  let o = r.index, s = n.start() + r.offset, l = o + 1, a = s + r.node.nodeSize;
  for (Ls([...r.node.marks], e, t); o > 0 && i.isInSet(n.parent.child(o - 1).marks); )
    o -= 1, s -= n.parent.child(o).nodeSize;
  for (; l < n.parent.childCount && Rg([...n.parent.child(l).marks], e, t); )
    a += n.parent.child(l).nodeSize, l += 1;
  return {
    from: s,
    to: a
  };
}
function Yt(n, e) {
  if (typeof n == "string") {
    if (!e.marks[n])
      throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return e.marks[n];
  }
  return n;
}
const Ig = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const o = Yt(n, r.schema), { doc: s, selection: l } = t, { $from: a, from: c, to: u } = l;
  if (i) {
    const d = bl(a, o, e);
    if (d && d.from <= c && d.to >= u) {
      const f = I.create(s, d.from, d.to);
      t.setSelection(f);
    }
  }
  return !0;
}, Lg = (n) => (e) => {
  const t = typeof n == "function" ? n(e) : n;
  for (let r = 0; r < t.length; r += 1)
    if (t[r](e))
      return !0;
  return !1;
};
function vl(n) {
  return n instanceof I;
}
function Mt(n = 0, e = 0, t = 0) {
  return Math.min(Math.max(n, e), t);
}
function bd(n, e = null) {
  if (!e)
    return null;
  const t = L.atStart(n), r = L.atEnd(n);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return r;
  const i = t.from, o = r.to;
  return e === "all" ? I.create(n, Mt(0, i, o), Mt(n.content.size, i, o)) : I.create(n, Mt(e, i, o), Mt(e, i, o));
}
function wl() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const Pg = (n = null, e = {}) => ({ editor: t, view: r, tr: i, dispatch: o }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const s = () => {
    wl() && r.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (r.focus(), e != null && e.scrollIntoView && t.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && n === null || n === !1)
    return !0;
  if (o && n === null && !vl(t.state.selection))
    return s(), !0;
  const l = bd(i.doc, n) || t.state.selection, a = t.state.selection.eq(l);
  return o && (a || i.setSelection(l), a && i.storedMarks && i.setStoredMarks(i.storedMarks), s()), !0;
}, Bg = (n, e) => (t) => n.every((r, i) => e(r, { ...t, index: i })), Hg = (n, e) => ({ tr: t, commands: r }) => r.insertContentAt({ from: t.selection.from, to: t.selection.to }, n, e), vd = (n) => {
  const e = n.childNodes;
  for (let t = e.length - 1; t >= 0; t -= 1) {
    const r = e[t];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? n.removeChild(r) : r.nodeType === 1 && vd(r);
  }
  return n;
};
function li(n) {
  const e = `<body>${n}</body>`, t = new window.DOMParser().parseFromString(e, "text/html").body;
  return vd(t);
}
function Vi(n, e, t) {
  t = {
    slice: !0,
    parseOptions: {},
    ...t
  };
  const r = typeof n == "object" && n !== null, i = typeof n == "string";
  if (r)
    try {
      return Array.isArray(n) && n.length > 0 ? S.fromArray(n.map((s) => e.nodeFromJSON(s))) : e.nodeFromJSON(n);
    } catch (o) {
      if (t.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: o });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", o), Vi("", e, t);
    }
  if (i) {
    if (t.errorOnInvalidContent) {
      let s = !1, l = "";
      const a = new cu({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (c) => (s = !0, l = typeof c == "string" ? c : c.outerHTML, null)
              }
            ]
          }
        })
      });
      if (t.slice ? jt.fromSchema(a).parseSlice(li(n), t.parseOptions) : jt.fromSchema(a).parse(li(n), t.parseOptions), t.errorOnInvalidContent && s)
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${l}`) });
    }
    const o = jt.fromSchema(e);
    return t.slice ? o.parseSlice(li(n), t.parseOptions).content : o.parse(li(n), t.parseOptions);
  }
  return Vi("", e, t);
}
function zg(n, e, t) {
  const r = n.steps.length - 1;
  if (r < e)
    return;
  const i = n.steps[r];
  if (!(i instanceof ue || i instanceof de))
    return;
  const o = n.mapping.maps[r];
  let s = 0;
  o.forEach((l, a, c, u) => {
    s === 0 && (s = u);
  }), n.setSelection(L.near(n.doc.resolve(s), t));
}
const $g = (n) => !("type" in n), Fg = (n, e, t) => ({ tr: r, dispatch: i, editor: o }) => {
  var s;
  if (i) {
    t = {
      parseOptions: {},
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...t
    };
    let l;
    try {
      l = Vi(e, o.schema, {
        parseOptions: {
          preserveWhitespace: "full",
          ...t.parseOptions
        },
        errorOnInvalidContent: (s = t.errorOnInvalidContent) !== null && s !== void 0 ? s : o.options.enableContentCheck
      });
    } catch (p) {
      return o.emit("contentError", {
        editor: o,
        error: p,
        disableCollaboration: () => {
          console.error("[tiptap error]: Unable to disable collaboration at this point in time");
        }
      }), !1;
    }
    let { from: a, to: c } = typeof n == "number" ? { from: n, to: n } : { from: n.from, to: n.to }, u = !0, d = !0;
    if (($g(l) ? l : [l]).forEach((p) => {
      p.check(), u = u ? p.isText && p.marks.length === 0 : !1, d = d ? p.isBlock : !1;
    }), a === c && d) {
      const { parent: p } = r.doc.resolve(a);
      p.isTextblock && !p.type.spec.code && !p.childCount && (a -= 1, c += 1);
    }
    let h;
    u ? (Array.isArray(e) ? h = e.map((p) => p.text || "").join("") : typeof e == "object" && e && e.text ? h = e.text : h = e, r.insertText(h, a, c)) : (h = l, r.replaceWith(a, c, h)), t.updateSelection && zg(r, r.steps.length - 1, -1), t.applyInputRules && r.setMeta("applyInputRules", { from: a, text: h }), t.applyPasteRules && r.setMeta("applyPasteRules", { from: a, text: h });
  }
  return !0;
}, Vg = () => ({ state: n, dispatch: e }) => Vm(n, e), jg = () => ({ state: n, dispatch: e }) => jm(n, e), Wg = () => ({ state: n, dispatch: e }) => Pm(n, e), _g = () => ({ state: n, dispatch: e }) => $m(n, e), Ug = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Co(n.doc, n.selection.$from.pos, -1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, Kg = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Co(n.doc, n.selection.$from.pos, 1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, qg = () => ({ state: n, dispatch: e }) => Bm(n, e), Jg = () => ({ state: n, dispatch: e }) => Hm(n, e);
function wd() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function Gg(n) {
  const e = n.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let r, i, o, s;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      s = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      o = !0;
    else if (/^mod$/i.test(a))
      wl() || wd() ? s = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), s && (t = `Meta-${t}`), o && (t = `Shift-${t}`), t;
}
const Yg = (n) => ({ editor: e, view: t, tr: r, dispatch: i }) => {
  const o = Gg(n).split(/-(?!$)/), s = o.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: s === "Space" ? " " : s,
    altKey: o.includes("Alt"),
    ctrlKey: o.includes("Ctrl"),
    metaKey: o.includes("Meta"),
    shiftKey: o.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (c) => c(t, l));
  });
  return a == null || a.steps.forEach((c) => {
    const u = c.map(r.mapping);
    u && i && r.maybeStep(u);
  }), !0;
};
function Nr(n, e, t = {}) {
  const { from: r, to: i, empty: o } = n.selection, s = e ? he(e, n.schema) : null, l = [];
  n.doc.nodesBetween(r, i, (d, f) => {
    if (d.isText)
      return;
    const h = Math.max(r, f), p = Math.min(i, f + d.nodeSize);
    l.push({
      node: d,
      from: h,
      to: p
    });
  });
  const a = i - r, c = l.filter((d) => s ? s.name === d.node.type.name : !0).filter((d) => Fi(d.node.attrs, t, { strict: !1 }));
  return o ? !!c.length : c.reduce((d, f) => d + f.to - f.from, 0) >= a;
}
const Xg = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = he(n, t.schema);
  return Nr(t, i, e) ? Wm(t, r) : !1;
}, Qg = () => ({ state: n, dispatch: e }) => qm(n, e), Zg = (n) => ({ state: e, dispatch: t }) => {
  const r = he(n, e.schema);
  return tg(r)(e, t);
}, ey = () => ({ state: n, dispatch: e }) => _m(n, e);
function Io(n, e) {
  return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null;
}
function Ua(n, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(n).reduce((r, i) => (t.includes(i) || (r[i] = n[i]), r), {});
}
const ty = (n, e) => ({ tr: t, state: r, dispatch: i }) => {
  let o = null, s = null;
  const l = Io(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (o = he(n, r.schema)), l === "mark" && (s = Yt(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    r.doc.nodesBetween(a.$from.pos, a.$to.pos, (c, u) => {
      o && o === c.type && t.setNodeMarkup(u, void 0, Ua(c.attrs, e)), s && c.marks.length && c.marks.forEach((d) => {
        s === d.type && t.addMark(u, u + c.nodeSize, s.create(Ua(d.attrs, e)));
      });
    });
  }), !0) : !1;
}, ny = () => ({ tr: n, dispatch: e }) => (e && n.scrollIntoView(), !0), ry = () => ({ tr: n, commands: e }) => e.setTextSelection({
  from: 0,
  to: n.doc.content.size
}), iy = () => ({ state: n, dispatch: e }) => zm(n, e), oy = () => ({ state: n, dispatch: e }) => Fm(n, e), sy = () => ({ state: n, dispatch: e }) => Jm(n, e), ly = () => ({ state: n, dispatch: e }) => Xm(n, e), ay = () => ({ state: n, dispatch: e }) => Ym(n, e);
function Ps(n, e, t = {}, r = {}) {
  return Vi(n, e, {
    slice: !1,
    parseOptions: t,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
const cy = (n, e = !1, t = {}, r = {}) => ({ editor: i, tr: o, dispatch: s, commands: l }) => {
  var a, c;
  const { doc: u } = o;
  if (t.preserveWhitespace !== "full") {
    const d = Ps(n, i.schema, t, {
      errorOnInvalidContent: (a = r.errorOnInvalidContent) !== null && a !== void 0 ? a : i.options.enableContentCheck
    });
    return s && o.replaceWith(0, u.content.size, d).setMeta("preventUpdate", !e), !0;
  }
  return s && o.setMeta("preventUpdate", !e), l.insertContentAt({ from: 0, to: u.content.size }, n, {
    parseOptions: t,
    errorOnInvalidContent: (c = r.errorOnInvalidContent) !== null && c !== void 0 ? c : i.options.enableContentCheck
  });
};
function Lo(n, e) {
  const t = Yt(e, n.schema), { from: r, to: i, empty: o } = n.selection, s = [];
  o ? (n.storedMarks && s.push(...n.storedMarks), s.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, i, (a) => {
    s.push(...a.marks);
  });
  const l = s.find((a) => a.type.name === t.name);
  return l ? { ...l.attrs } : {};
}
function uy(n, e) {
  const t = new il(n);
  return e.forEach((r) => {
    r.steps.forEach((i) => {
      t.step(i);
    });
  }), t;
}
function dy(n) {
  for (let e = 0; e < n.edgeCount; e += 1) {
    const { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function fy(n, e, t) {
  const r = [];
  return n.nodesBetween(e.from, e.to, (i, o) => {
    t(i) && r.push({
      node: i,
      pos: o
    });
  }), r;
}
function kd(n, e) {
  for (let t = n.depth; t > 0; t -= 1) {
    const r = n.node(t);
    if (e(r))
      return {
        pos: t > 0 ? n.before(t) : 0,
        start: n.start(t),
        depth: t,
        node: r
      };
  }
}
function kl(n) {
  return (e) => kd(e.$from, n);
}
function hy(n, e) {
  const t = Cn.fromSchema(e).serializeFragment(n), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(t), i.innerHTML;
}
function py(n, e) {
  const t = {
    from: 0,
    to: n.content.size
  };
  return gd(n, t, e);
}
function my(n, e) {
  const t = he(e, n.schema), { from: r, to: i } = n.selection, o = [];
  n.doc.nodesBetween(r, i, (l) => {
    o.push(l);
  });
  const s = o.reverse().find((l) => l.type.name === t.name);
  return s ? { ...s.attrs } : {};
}
function Cd(n, e) {
  const t = Io(typeof e == "string" ? e : e.name, n.schema);
  return t === "node" ? my(n, e) : t === "mark" ? Lo(n, e) : {};
}
function gy(n, e = JSON.stringify) {
  const t = {};
  return n.filter((r) => {
    const i = e(r);
    return Object.prototype.hasOwnProperty.call(t, i) ? !1 : t[i] = !0;
  });
}
function yy(n) {
  const e = gy(n);
  return e.length === 1 ? e : e.filter((t, r) => !e.filter((o, s) => s !== r).some((o) => t.oldRange.from >= o.oldRange.from && t.oldRange.to <= o.oldRange.to && t.newRange.from >= o.newRange.from && t.newRange.to <= o.newRange.to));
}
function by(n) {
  const { mapping: e, steps: t } = n, r = [];
  return e.maps.forEach((i, o) => {
    const s = [];
    if (i.ranges.length)
      i.forEach((l, a) => {
        s.push({ from: l, to: a });
      });
    else {
      const { from: l, to: a } = t[o];
      if (l === void 0 || a === void 0)
        return;
      s.push({ from: l, to: a });
    }
    s.forEach(({ from: l, to: a }) => {
      const c = e.slice(o).map(l, -1), u = e.slice(o).map(a), d = e.invert().map(c, -1), f = e.invert().map(u);
      r.push({
        oldRange: {
          from: d,
          to: f
        },
        newRange: {
          from: c,
          to: u
        }
      });
    });
  }), yy(r);
}
function Cl(n, e, t) {
  const r = [];
  return n === e ? t.resolve(n).marks().forEach((i) => {
    const o = t.resolve(n - 1), s = bl(o, i.type);
    s && r.push({
      mark: i,
      ...s
    });
  }) : t.nodesBetween(n, e, (i, o) => {
    !i || (i == null ? void 0 : i.nodeSize) === void 0 || r.push(...i.marks.map((s) => ({
      from: o,
      to: o + i.nodeSize,
      mark: s
    })));
  }), r;
}
function ki(n, e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => {
    const i = n.find((o) => o.type === e && o.name === r);
    return i ? i.attribute.keepOnSplit : !1;
  }));
}
function Bs(n, e, t = {}) {
  const { empty: r, ranges: i } = n.selection, o = e ? Yt(e, n.schema) : null;
  if (r)
    return !!(n.storedMarks || n.selection.$from.marks()).filter((d) => o ? o.name === d.type.name : !0).find((d) => Fi(d.attrs, t, { strict: !1 }));
  let s = 0;
  const l = [];
  if (i.forEach(({ $from: d, $to: f }) => {
    const h = d.pos, p = f.pos;
    n.doc.nodesBetween(h, p, (g, y) => {
      if (!g.isText && !g.marks.length)
        return;
      const v = Math.max(h, y), w = Math.min(p, y + g.nodeSize), k = w - v;
      s += k, l.push(...g.marks.map((m) => ({
        mark: m,
        from: v,
        to: w
      })));
    });
  }), s === 0)
    return !1;
  const a = l.filter((d) => o ? o.name === d.mark.type.name : !0).filter((d) => Fi(d.mark.attrs, t, { strict: !1 })).reduce((d, f) => d + f.to - f.from, 0), c = l.filter((d) => o ? d.mark.type !== o && d.mark.type.excludes(o) : !0).reduce((d, f) => d + f.to - f.from, 0);
  return (a > 0 ? a + c : a) >= s;
}
function vy(n, e, t = {}) {
  if (!e)
    return Nr(n, null, t) || Bs(n, null, t);
  const r = Io(e, n.schema);
  return r === "node" ? Nr(n, e, t) : r === "mark" ? Bs(n, e, t) : !1;
}
function Ka(n, e) {
  const { nodeExtensions: t } = No(e), r = t.find((s) => s.name === n);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = F(A(r, "group", i));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function xl(n, { checkChildren: e } = { checkChildren: !0 }) {
  if (n.isText)
    return !n.text;
  if (n.content.childCount === 0)
    return !0;
  if (n.isLeaf)
    return !1;
  if (e) {
    let t = !0;
    return n.content.forEach((r) => {
      t !== !1 && (xl(r) || (t = !1));
    }), t;
  }
  return !1;
}
function xd(n) {
  return n instanceof D;
}
function Sd(n, e, t) {
  const i = n.state.doc.content.size, o = Mt(e, 0, i), s = Mt(t, 0, i), l = n.coordsAtPos(o), a = n.coordsAtPos(s, -1), c = Math.min(l.top, a.top), u = Math.max(l.bottom, a.bottom), d = Math.min(l.left, a.left), f = Math.max(l.right, a.right), h = f - d, p = u - c, v = {
    top: c,
    bottom: u,
    left: d,
    right: f,
    width: h,
    height: p,
    x: d,
    y: c
  };
  return {
    ...v,
    toJSON: () => v
  };
}
function wy(n, e, t) {
  var r;
  const { selection: i } = e;
  let o = null;
  if (vl(i) && (o = i.$cursor), o) {
    const l = (r = n.storedMarks) !== null && r !== void 0 ? r : o.marks();
    return !!t.isInSet(l) || !l.some((a) => a.type.excludes(t));
  }
  const { ranges: s } = i;
  return s.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(t) : !1;
    return n.doc.nodesBetween(l.pos, a.pos, (u, d, f) => {
      if (c)
        return !1;
      if (u.isInline) {
        const h = !f || f.type.allowsMarkType(t), p = !!t.isInSet(u.marks) || !u.marks.some((g) => g.type.excludes(t));
        c = h && p;
      }
      return !c;
    }), c;
  });
}
const ky = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const { selection: o } = t, { empty: s, ranges: l } = o, a = Yt(n, r.schema);
  if (i)
    if (s) {
      const c = Lo(r, a);
      t.addStoredMark(a.create({
        ...c,
        ...e
      }));
    } else
      l.forEach((c) => {
        const u = c.$from.pos, d = c.$to.pos;
        r.doc.nodesBetween(u, d, (f, h) => {
          const p = Math.max(h, u), g = Math.min(h + f.nodeSize, d);
          f.marks.find((v) => v.type === a) ? f.marks.forEach((v) => {
            a === v.type && t.addMark(p, g, a.create({
              ...v.attrs,
              ...e
            }));
          }) : t.addMark(p, g, a.create(e));
        });
      });
  return wy(r, t, a);
}, Cy = (n, e) => ({ tr: t }) => (t.setMeta(n, e), !0), xy = (n, e = {}) => ({ state: t, dispatch: r, chain: i }) => {
  const o = he(n, t.schema);
  return o.isTextblock ? i().command(({ commands: s }) => Va(o, e)(t) ? !0 : s.clearNodes()).command(({ state: s }) => Va(o, e)(s, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, Sy = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, i = Mt(n, 0, r.content.size), o = D.create(r, i);
    e.setSelection(o);
  }
  return !0;
}, Ty = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, { from: i, to: o } = typeof n == "number" ? { from: n, to: n } : n, s = I.atStart(r).from, l = I.atEnd(r).to, a = Mt(i, s, l), c = Mt(o, s, l), u = I.create(r, a, c);
    e.setSelection(u);
  }
  return !0;
}, My = (n) => ({ state: e, dispatch: t }) => {
  const r = he(n, e.schema);
  return ig(r)(e, t);
};
function qa(n, e) {
  const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
  if (t) {
    const r = t.filter((i) => e == null ? void 0 : e.includes(i.type.name));
    n.tr.ensureMarks(r);
  }
}
const Ey = ({ keepMarks: n = !0 } = {}) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  const { selection: o, doc: s } = e, { $from: l, $to: a } = o, c = i.extensionManager.attributes, u = ki(c, l.node().type.name, l.node().attrs);
  if (o instanceof D && o.node.isBlock)
    return !l.parentOffset || !Vn(s, l.pos) ? !1 : (r && (n && qa(t, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const d = a.parentOffset === a.parent.content.size, f = l.depth === 0 ? void 0 : dy(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let h = d && f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0, p = Vn(e.doc, e.mapping.map(l.pos), 1, h);
  if (!h && !p && Vn(e.doc, e.mapping.map(l.pos), 1, f ? [{ type: f }] : void 0) && (p = !0, h = f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0), r) {
    if (p && (o instanceof I && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, h), f && !d && !l.parentOffset && l.parent.type !== f)) {
      const g = e.mapping.map(l.before()), y = e.doc.resolve(g);
      l.node(-1).canReplaceWith(y.index(), y.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f);
    }
    n && qa(t, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return p;
}, Oy = (n) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  var o;
  const s = he(n, t.schema), { $from: l, $to: a } = t.selection, c = t.selection.node;
  if (c && c.isBlock || l.depth < 2 || !l.sameParent(a))
    return !1;
  const u = l.node(-1);
  if (u.type !== s)
    return !1;
  const d = i.extensionManager.attributes;
  if (l.parent.content.size === 0 && l.node(-1).childCount === l.indexAfter(-1)) {
    if (l.depth === 2 || l.node(-3).type !== s || l.index(-2) !== l.node(-2).childCount - 1)
      return !1;
    if (r) {
      let y = S.empty;
      const v = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
      for (let O = l.depth - v; O >= l.depth - 3; O -= 1)
        y = S.from(l.node(O).copy(y));
      const w = l.indexAfter(-1) < l.node(-2).childCount ? 1 : l.indexAfter(-2) < l.node(-3).childCount ? 2 : 3, k = ki(d, l.node().type.name, l.node().attrs), m = ((o = s.contentMatch.defaultType) === null || o === void 0 ? void 0 : o.createAndFill(k)) || void 0;
      y = y.append(S.from(s.createAndFill(null, m) || void 0));
      const C = l.before(l.depth - (v - 1));
      e.replace(C, l.after(-w), new M(y, 4 - v, 0));
      let b = -1;
      e.doc.nodesBetween(C, e.doc.content.size, (O, H) => {
        if (b > -1)
          return !1;
        O.isTextblock && O.content.size === 0 && (b = H + 1);
      }), b > -1 && e.setSelection(I.near(e.doc.resolve(b))), e.scrollIntoView();
    }
    return !0;
  }
  const f = a.pos === l.end() ? u.contentMatchAt(0).defaultType : null, h = ki(d, u.type.name, u.attrs), p = ki(d, l.node().type.name, l.node().attrs);
  e.delete(l.pos, a.pos);
  const g = f ? [
    { type: s, attrs: h },
    { type: f, attrs: p }
  ] : [{ type: s, attrs: h }];
  if (!Vn(e.doc, l.pos, 2))
    return !1;
  if (r) {
    const { selection: y, storedMarks: v } = t, { splittableMarks: w } = i.extensionManager, k = v || y.$to.parentOffset && y.$from.marks();
    if (e.split(l.pos, 2, g).scrollIntoView(), !k || !r)
      return !0;
    const m = k.filter((C) => w.includes(C.type.name));
    e.ensureMarks(m);
  }
  return !0;
}, rs = (n, e) => {
  const t = kl((s) => s.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && Jt(n.doc, t.pos) && n.join(t.pos), !0;
}, is = (n, e) => {
  const t = kl((s) => s.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(t.start).after(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && Jt(n.doc, r) && n.join(r), !0;
}, Ay = (n, e, t, r = {}) => ({ editor: i, tr: o, state: s, dispatch: l, chain: a, commands: c, can: u }) => {
  const { extensions: d, splittableMarks: f } = i.extensionManager, h = he(n, s.schema), p = he(e, s.schema), { selection: g, storedMarks: y } = s, { $from: v, $to: w } = g, k = v.blockRange(w), m = y || g.$to.parentOffset && g.$from.marks();
  if (!k)
    return !1;
  const C = kl((b) => Ka(b.type.name, d))(g);
  if (k.depth >= 1 && C && k.depth - C.depth <= 1) {
    if (C.node.type === h)
      return c.liftListItem(p);
    if (Ka(C.node.type.name, d) && h.validContent(C.node.content) && l)
      return a().command(() => (o.setNodeMarkup(C.pos, h), !0)).command(() => rs(o, h)).command(() => is(o, h)).run();
  }
  return !t || !m || !l ? a().command(() => u().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => rs(o, h)).command(() => is(o, h)).run() : a().command(() => {
    const b = u().wrapInList(h, r), O = m.filter((H) => f.includes(H.type.name));
    return o.ensureMarks(O), b ? !0 : c.clearNodes();
  }).wrapInList(h, r).command(() => rs(o, h)).command(() => is(o, h)).run();
}, Ny = (n, e = {}, t = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: o = !1 } = t, s = Yt(n, r.schema);
  return Bs(r, s, e) ? i.unsetMark(s, { extendEmptyMarkRange: o }) : i.setMark(s, e);
}, Dy = (n, e, t = {}) => ({ state: r, commands: i }) => {
  const o = he(n, r.schema), s = he(e, r.schema);
  return Nr(r, o, t) ? i.setNode(s) : i.setNode(o, t);
}, Ry = (n, e = {}) => ({ state: t, commands: r }) => {
  const i = he(n, t.schema);
  return Nr(t, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, Iy = () => ({ state: n, dispatch: e }) => {
  const t = n.plugins;
  for (let r = 0; r < t.length; r += 1) {
    const i = t[r];
    let o;
    if (i.spec.isInputRules && (o = i.getState(n))) {
      if (e) {
        const s = n.tr, l = o.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          s.step(l.steps[a].invert(l.docs[a]));
        if (o.text) {
          const a = s.doc.resolve(o.from).marks();
          s.replaceWith(o.from, o.to, n.schema.text(o.text, a));
        } else
          s.delete(o.from, o.to);
      }
      return !0;
    }
  }
  return !1;
}, Ly = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, { empty: r, ranges: i } = t;
  return r || e && i.forEach((o) => {
    n.removeMark(o.$from.pos, o.$to.pos);
  }), !0;
}, Py = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  var o;
  const { extendEmptyMarkRange: s = !1 } = e, { selection: l } = t, a = Yt(n, r.schema), { $from: c, empty: u, ranges: d } = l;
  if (!i)
    return !0;
  if (u && s) {
    let { from: f, to: h } = l;
    const p = (o = c.marks().find((y) => y.type === a)) === null || o === void 0 ? void 0 : o.attrs, g = bl(c, a, p);
    g && (f = g.from, h = g.to), t.removeMark(f, h, a);
  } else
    d.forEach((f) => {
      t.removeMark(f.$from.pos, f.$to.pos, a);
    });
  return t.removeStoredMark(a), !0;
}, By = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  let o = null, s = null;
  const l = Io(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (o = he(n, r.schema)), l === "mark" && (s = Yt(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    const c = a.$from.pos, u = a.$to.pos;
    r.doc.nodesBetween(c, u, (d, f) => {
      o && o === d.type && t.setNodeMarkup(f, void 0, {
        ...d.attrs,
        ...e
      }), s && d.marks.length && d.marks.forEach((h) => {
        if (s === h.type) {
          const p = Math.max(f, c), g = Math.min(f + d.nodeSize, u);
          t.addMark(p, g, s.create({
            ...h.attrs,
            ...e
          }));
        }
      });
    });
  }), !0) : !1;
}, Hy = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = he(n, t.schema);
  return Qm(i, e)(t, r);
}, zy = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = he(n, t.schema);
  return Zm(i, e)(t, r);
};
var $y = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: wg,
  clearContent: kg,
  clearNodes: Cg,
  command: xg,
  createParagraphNear: Sg,
  cut: Tg,
  deleteCurrentNode: Mg,
  deleteNode: Eg,
  deleteRange: Og,
  deleteSelection: Ag,
  enter: Ng,
  exitCode: Dg,
  extendMarkRange: Ig,
  first: Lg,
  focus: Pg,
  forEach: Bg,
  insertContent: Hg,
  insertContentAt: Fg,
  joinBackward: Wg,
  joinDown: jg,
  joinForward: _g,
  joinItemBackward: Ug,
  joinItemForward: Kg,
  joinTextblockBackward: qg,
  joinTextblockForward: Jg,
  joinUp: Vg,
  keyboardShortcut: Yg,
  lift: Xg,
  liftEmptyBlock: Qg,
  liftListItem: Zg,
  newlineInCode: ey,
  resetAttributes: ty,
  scrollIntoView: ny,
  selectAll: ry,
  selectNodeBackward: iy,
  selectNodeForward: oy,
  selectParentNode: sy,
  selectTextblockEnd: ly,
  selectTextblockStart: ay,
  setContent: cy,
  setMark: ky,
  setMeta: Cy,
  setNode: xy,
  setNodeSelection: Sy,
  setTextSelection: Ty,
  sinkListItem: My,
  splitBlock: Ey,
  splitListItem: Oy,
  toggleList: Ay,
  toggleMark: Ny,
  toggleNode: Dy,
  toggleWrap: Ry,
  undoInputRule: Iy,
  unsetAllMarks: Ly,
  unsetMark: Py,
  updateAttributes: By,
  wrapIn: Hy,
  wrapInList: zy
});
const Fy = pe.create({
  name: "commands",
  addCommands() {
    return {
      ...$y
    };
  }
}), Vy = pe.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new se({
        key: new ae("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), jy = pe.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      new se({
        key: new ae("focusEvents"),
        props: {
          handleDOMEvents: {
            focus: (e, t) => {
              n.isFocused = !0;
              const r = n.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, t) => {
              n.isFocused = !1;
              const r = n.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), Wy = pe.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const n = () => this.editor.commands.first(({ commands: s }) => [
      () => s.undoInputRule(),
      // maybe convert first text block node to default node
      () => s.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: u, $anchor: d } = a, { pos: f, parent: h } = d, p = d.parent.isTextblock && f > 0 ? l.doc.resolve(f - 1) : d, g = p.parent.type.spec.isolating, y = d.pos - d.parentOffset, v = g && p.parent.childCount === 1 ? y === d.pos : L.atStart(c).from === f;
        return !u || !h.type.isTextblock || h.textContent.length || !v || v && d.parent.type.name === "paragraph" ? !1 : s.clearNodes();
      }),
      () => s.deleteSelection(),
      () => s.joinBackward(),
      () => s.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: s }) => [
      () => s.deleteSelection(),
      () => s.deleteCurrentNode(),
      () => s.joinForward(),
      () => s.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: s }) => [
        () => s.newlineInCode(),
        () => s.createParagraphNear(),
        () => s.liftEmptyBlock(),
        () => s.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: n,
      "Mod-Backspace": n,
      "Shift-Backspace": n,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...r
    }, o = {
      ...r,
      "Ctrl-h": n,
      "Alt-Backspace": n,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return wl() || wd() ? o : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new se({
        key: new ae("clearDocument"),
        appendTransaction: (n, e, t) => {
          if (!(n.some((p) => p.docChanged) && !e.doc.eq(t.doc)))
            return;
          const { empty: i, from: o, to: s } = e.selection, l = L.atStart(e.doc).from, a = L.atEnd(e.doc).to;
          if (i || !(o === l && s === a) || !(t.doc.textBetween(0, t.doc.content.size, " ", " ").length === 0))
            return;
          const d = t.tr, f = Oo({
            state: t,
            transaction: d
          }), { commands: h } = new Ao({
            editor: this.editor,
            state: f
          });
          if (h.clearNodes(), !!d.steps.length)
            return d;
        }
      })
    ];
  }
}), _y = pe.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new se({
        key: new ae("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
class rn {
  get name() {
    return this.node.type.name;
  }
  constructor(e, t, r = !1, i = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = e, this.editor = t, this.currentNode = i;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var e;
    return (e = this.actualDepth) !== null && e !== void 0 ? e : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(e) {
    let t = this.from, r = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      t = this.from + 1, r = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: t, to: r }, e);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0)
      return null;
    const e = this.resolvedPos.start(this.resolvedPos.depth - 1), t = this.resolvedPos.doc.resolve(e);
    return new rn(t, this.editor);
  }
  get before() {
    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new rn(e, this.editor);
  }
  get after() {
    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new rn(e, this.editor);
  }
  get children() {
    const e = [];
    return this.node.content.forEach((t, r) => {
      const i = t.isBlock && !t.isTextblock, o = this.pos + r + 1, s = this.resolvedPos.doc.resolve(o);
      if (!i && s.depth <= this.depth)
        return;
      const l = new rn(s, this.editor, i, i ? t : null);
      i && (l.actualDepth = this.depth + 1), e.push(new rn(s, this.editor, i, i ? t : null));
    }), e;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const e = this.children;
    return e[e.length - 1] || null;
  }
  closest(e, t = {}) {
    let r = null, i = this.parent;
    for (; i && !r; ) {
      if (i.node.type.name === e)
        if (Object.keys(t).length > 0) {
          const o = i.node.attrs, s = Object.keys(t);
          for (let l = 0; l < s.length; l += 1) {
            const a = s[l];
            if (o[a] !== t[a])
              break;
          }
        } else
          r = i;
      i = i.parent;
    }
    return r;
  }
  querySelector(e, t = {}) {
    return this.querySelectorAll(e, t, !0)[0] || null;
  }
  querySelectorAll(e, t = {}, r = !1) {
    let i = [];
    if (!this.children || this.children.length === 0)
      return i;
    const o = Object.keys(t);
    return this.children.forEach((s) => {
      r && i.length > 0 || (s.node.type.name === e && o.every((a) => t[a] === s.node.attrs[a]) && i.push(s), !(r && i.length > 0) && (i = i.concat(s.querySelectorAll(e, t, r))));
    }), i;
  }
  setAttribute(e) {
    const t = this.editor.state.selection;
    this.editor.chain().setTextSelection(this.from).updateAttributes(this.node.type.name, e).setTextSelection(t.from).run();
  }
}
const Uy = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 1px !important;
  height: 1px !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function Ky(n, e, t) {
  const r = document.querySelector("style[data-tiptap-style]");
  if (r !== null)
    return r;
  const i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.setAttribute("data-tiptap-style", ""), i.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(i), i;
}
let qy = class extends og {
  constructor(e = {}) {
    super(), this.isFocused = !1, this.extensionStorage = {}, this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      enableContentCheck: !1,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({ error: t }) => {
        throw t;
      }
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("contentError", this.options.onContentError), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }));
    }, 0);
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && document && (this.css = Ky(Uy, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(e, t = !0) {
    this.setOptions({ editable: e }), t && this.emit("update", { editor: this, transaction: this.state.tr });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.view.state;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   */
  registerPlugin(e, t) {
    const r = pd(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], i = this.state.reconfigure({ plugins: r });
    this.view.updateState(i);
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKey The plugins name
   */
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const t = typeof e == "string" ? `${e}$` : e.key, r = this.state.reconfigure({
      // @ts-ignore
      plugins: this.state.plugins.filter((i) => !i.key.startsWith(t))
    });
    this.view.updateState(r);
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var e, t;
    const i = [...this.options.enableCoreExtensions ? [
      Vy,
      vg.configure({
        blockSeparator: (t = (e = this.options.coreExtensionOptions) === null || e === void 0 ? void 0 : e.clipboardTextSerializer) === null || t === void 0 ? void 0 : t.blockSeparator
      }),
      Fy,
      jy,
      Wy,
      _y
    ] : [], ...this.options.extensions].filter((o) => ["extension", "node", "mark"].includes(o == null ? void 0 : o.type));
    this.extensionManager = new $n(i, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new Ao({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView() {
    let e;
    try {
      e = Ps(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
    } catch (o) {
      if (!(o instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(o.message))
        throw o;
      this.emit("contentError", {
        editor: this,
        error: o,
        disableCollaboration: () => {
          this.options.extensions = this.options.extensions.filter((s) => s.name !== "collaboration"), this.createExtensionManager();
        }
      }), e = Ps(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
    }
    const t = bd(e, this.options.autofocus);
    this.view = new Sm(this.options.element, {
      ...this.options.editorProps,
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: zn.create({
        doc: e,
        selection: t || void 0
      })
    });
    const r = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(r), this.createNodeViews(), this.prependClass();
    const i = this.view.dom;
    i.editor = this;
  }
  /**
   * Creates all node views.
   */
  createNodeViews() {
    this.view.isDestroyed || this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const t = this.capturedTransaction;
    return this.capturedTransaction = null, t;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((s) => {
        var l;
        return (l = this.capturedTransaction) === null || l === void 0 ? void 0 : l.step(s);
      });
      return;
    }
    const t = this.state.apply(e), r = !this.state.selection.eq(t.selection);
    this.emit("beforeTransaction", {
      editor: this,
      transaction: e,
      nextState: t
    }), this.view.updateState(t), this.emit("transaction", {
      editor: this,
      transaction: e
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const i = e.getMeta("focus"), o = e.getMeta("blur");
    i && this.emit("focus", {
      editor: this,
      event: i.event,
      transaction: e
    }), o && this.emit("blur", {
      editor: this,
      event: o.event,
      transaction: e
    }), !(!e.docChanged || e.getMeta("preventUpdate")) && this.emit("update", {
      editor: this,
      transaction: e
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(e) {
    return Cd(this.state, e);
  }
  isActive(e, t) {
    const r = typeof e == "string" ? e : null, i = typeof e == "string" ? t : e;
    return vy(this.state, r, i);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return hy(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: t = `

`, textSerializers: r = {} } = e || {};
    return py(this.state.doc, {
      blockSeparator: t,
      textSerializers: {
        ...yd(this.schema),
        ...r
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return xl(this.state.doc);
  }
  /**
   * Get the number of characters for the current document.
   *
   * @deprecated
   */
  getCharacterCount() {
    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    this.emit("destroy"), this.view && this.view.destroy(), this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var e;
    return !(!((e = this.view) === null || e === void 0) && e.docView);
  }
  $node(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelector(e, t)) || null;
  }
  $nodes(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelectorAll(e, t)) || null;
  }
  $pos(e) {
    const t = this.state.doc.resolve(e);
    return new rn(t, this);
  }
  get $doc() {
    return this.$pos(0);
  }
};
function Gn(n) {
  return new Do({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = F(n.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: o } = e, s = r[r.length - 1], l = r[0];
      if (s) {
        const a = l.search(/\S/), c = t.from + l.indexOf(s), u = c + s.length;
        if (Cl(t.from, t.to, e.doc).filter((h) => h.mark.type.excluded.find((g) => g === n.type && g !== h.mark.type)).filter((h) => h.to > c).length)
          return null;
        u < t.to && o.delete(u, t.to), c > t.from && o.delete(t.from + a, c);
        const f = t.from + a + s.length;
        o.addMark(t.from + a, f, n.type.create(i || {})), o.removeStoredMark(n.type);
      }
    }
  });
}
function Td(n) {
  return new Do({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = F(n.getAttributes, void 0, r) || {}, { tr: o } = e, s = t.from;
      let l = t.to;
      const a = n.type.create(i);
      if (r[1]) {
        const c = r[0].lastIndexOf(r[1]);
        let u = s + c;
        u > l ? u = l : l = u + r[1].length;
        const d = r[0][r[0].length - 1];
        o.insertText(d, s + r[0].length - 1), o.replaceWith(u, l, a);
      } else if (r[0]) {
        const c = n.type.isInline ? s : s - 1;
        o.insert(c, n.type.create(i)).delete(o.mapping.map(s), o.mapping.map(l));
      }
      o.scrollIntoView();
    }
  });
}
function Hs(n) {
  return new Do({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = e.doc.resolve(t.from), o = F(n.getAttributes, void 0, r) || {};
      if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), n.type))
        return null;
      e.tr.delete(t.from, t.to).setBlockType(t.from, t.from, n.type, o);
    }
  });
}
function Dr(n) {
  return new Do({
    find: n.find,
    handler: ({ state: e, range: t, match: r, chain: i }) => {
      const o = F(n.getAttributes, void 0, r) || {}, s = e.tr.delete(t.from, t.to), a = s.doc.resolve(t.from).blockRange(), c = a && rl(a, n.type, o);
      if (!c)
        return null;
      if (s.wrap(a, c), n.keepMarks && n.editor) {
        const { selection: d, storedMarks: f } = e, { splittableMarks: h } = n.editor.extensionManager, p = f || d.$to.parentOffset && d.$from.marks();
        if (p) {
          const g = p.filter((y) => h.includes(y.type.name));
          s.ensureMarks(g);
        }
      }
      if (n.keepAttributes) {
        const d = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList";
        i().updateAttributes(d, o).run();
      }
      const u = s.doc.resolve(t.from - 1).nodeBefore;
      u && u.type === n.type && Jt(s.doc, t.from - 1) && (!n.joinPredicate || n.joinPredicate(r, u)) && s.join(t.from - 1);
    }
  });
}
class qe {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = F(A(this, "addOptions", {
      name: this.name
    }))), this.storage = F(A(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new qe(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => Ro(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new qe(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = F(A(t, "addOptions", {
      name: t.name
    })), t.storage = F(A(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  static handleExit({ editor: e, mark: t }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const s = i.marks();
      if (!!!s.find((c) => (c == null ? void 0 : c.type.name) === t.name))
        return !1;
      const a = s.find((c) => (c == null ? void 0 : c.type.name) === t.name);
      return a && r.removeStoredMark(a), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
}
class re {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = F(A(this, "addOptions", {
      name: this.name
    }))), this.storage = F(A(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new re(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => Ro(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new re(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = F(A(t, "addOptions", {
      name: t.name
    })), t.storage = F(A(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function vn(n) {
  return new md({
    find: n.find,
    handler: ({ state: e, range: t, match: r, pasteEvent: i }) => {
      const o = F(n.getAttributes, void 0, r, i);
      if (o === !1 || o === null)
        return null;
      const { tr: s } = e, l = r[r.length - 1], a = r[0];
      let c = t.to;
      if (l) {
        const u = a.search(/\S/), d = t.from + a.indexOf(l), f = d + l.length;
        if (Cl(t.from, t.to, e.doc).filter((p) => p.mark.type.excluded.find((y) => y === n.type && y !== p.mark.type)).filter((p) => p.to > d).length)
          return null;
        f < t.to && s.delete(f, t.to), d > t.from && s.delete(t.from + u, d), c = t.from + u + l.length, s.addMark(t.from + u, c, n.type.create(o || {})), s.removeStoredMark(n.type);
      }
    }
  });
}
function Jy(n) {
  return n.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Gy(n) {
  return new md({
    find: n.find,
    handler({ match: e, chain: t, range: r, pasteEvent: i }) {
      const o = F(n.getAttributes, void 0, e, i);
      if (o === !1 || o === null)
        return null;
      e.input && t().deleteRange(r).insertContentAt(r.from, {
        type: n.type.name,
        attrs: o
      });
    }
  });
}
const Yy = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, Xy = re.create({
  name: "image",
  addOptions() {
    return {
      inline: !1,
      allowBase64: !1,
      HTMLAttributes: {}
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["img", U(this.options.HTMLAttributes, n)];
  },
  addCommands() {
    return {
      setImage: (n) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: n
      })
    };
  },
  addInputRules() {
    return [
      Td({
        find: Yy,
        type: this.type,
        getAttributes: (n) => {
          const [, , e, t, r] = n;
          return { src: t, alt: e, title: r };
        }
      })
    ];
  }
}), Qy = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4vianca6w0s2x0a2z0ure5ba0by2idu3namex3narepublic11d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0cast4mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dabur3d1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0ardian6cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster6d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2tura4vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9dnavy5lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0a1b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp2w2ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4finity6ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", Zy = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Yn = (n, e) => {
  for (const t in e)
    n[t] = e[t];
  return n;
}, zs = "numeric", $s = "ascii", Fs = "alpha", Ci = "asciinumeric", ai = "alphanumeric", Vs = "domain", Md = "emoji", e0 = "scheme", t0 = "slashscheme", Ja = "whitespace";
function n0(n, e) {
  return n in e || (e[n] = []), e[n];
}
function an(n, e, t) {
  e[zs] && (e[Ci] = !0, e[ai] = !0), e[$s] && (e[Ci] = !0, e[Fs] = !0), e[Ci] && (e[ai] = !0), e[Fs] && (e[ai] = !0), e[ai] && (e[Vs] = !0), e[Md] && (e[Vs] = !0);
  for (const r in e) {
    const i = n0(r, t);
    i.indexOf(n) < 0 && i.push(n);
  }
}
function r0(n, e) {
  const t = {};
  for (const r in e)
    e[r].indexOf(n) >= 0 && (t[r] = !0);
  return t;
}
function Re(n) {
  n === void 0 && (n = null), this.j = {}, this.jr = [], this.jd = null, this.t = n;
}
Re.groups = {};
Re.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(n) {
    const e = this, t = e.j[n];
    if (t)
      return t;
    for (let r = 0; r < e.jr.length; r++) {
      const i = e.jr[r][0], o = e.jr[r][1];
      if (o && i.test(n))
        return o;
    }
    return e.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(n, e) {
    return e === void 0 && (e = !1), e ? n in this.j : !!this.go(n);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(n, e, t, r) {
    for (let i = 0; i < n.length; i++)
      this.tt(n[i], e, t, r);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(n, e, t, r) {
    r = r || Re.groups;
    let i;
    return e && e.j ? i = e : (i = new Re(e), t && r && an(e, t, r)), this.jr.push([n, i]), i;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(n, e, t, r) {
    let i = this;
    const o = n.length;
    if (!o)
      return i;
    for (let s = 0; s < o - 1; s++)
      i = i.tt(n[s]);
    return i.tt(n[o - 1], e, t, r);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(n, e, t, r) {
    r = r || Re.groups;
    const i = this;
    if (e && e.j)
      return i.j[n] = e, e;
    const o = e;
    let s, l = i.go(n);
    if (l ? (s = new Re(), Yn(s.j, l.j), s.jr.push.apply(s.jr, l.jr), s.jd = l.jd, s.t = l.t) : s = new Re(), o) {
      if (r)
        if (s.t && typeof s.t == "string") {
          const a = Yn(r0(s.t, r), t);
          an(o, a, r);
        } else t && an(o, t, r);
      s.t = o;
    }
    return i.j[n] = s, s;
  }
};
const z = (n, e, t, r, i) => n.ta(e, t, r, i), Ve = (n, e, t, r, i) => n.tr(e, t, r, i), Ga = (n, e, t, r, i) => n.ts(e, t, r, i), T = (n, e, t, r, i) => n.tt(e, t, r, i), Ct = "WORD", js = "UWORD", Rr = "LOCALHOST", Ws = "TLD", _s = "UTLD", xi = "SCHEME", Pn = "SLASH_SCHEME", Sl = "NUM", Ed = "WS", Tl = "NL", br = "OPENBRACE", vr = "CLOSEBRACE", ji = "OPENBRACKET", Wi = "CLOSEBRACKET", _i = "OPENPAREN", Ui = "CLOSEPAREN", Ki = "OPENANGLEBRACKET", qi = "CLOSEANGLEBRACKET", Ji = "FULLWIDTHLEFTPAREN", Gi = "FULLWIDTHRIGHTPAREN", Yi = "LEFTCORNERBRACKET", Xi = "RIGHTCORNERBRACKET", Qi = "LEFTWHITECORNERBRACKET", Zi = "RIGHTWHITECORNERBRACKET", eo = "FULLWIDTHLESSTHAN", to = "FULLWIDTHGREATERTHAN", no = "AMPERSAND", ro = "APOSTROPHE", io = "ASTERISK", Lt = "AT", oo = "BACKSLASH", so = "BACKTICK", lo = "CARET", Ht = "COLON", Ml = "COMMA", ao = "DOLLAR", rt = "DOT", co = "EQUALS", El = "EXCLAMATION", it = "HYPHEN", uo = "PERCENT", fo = "PIPE", ho = "PLUS", po = "POUND", mo = "QUERY", Ol = "QUOTE", Al = "SEMI", ot = "SLASH", wr = "TILDE", go = "UNDERSCORE", Od = "EMOJI", yo = "SYM";
var Ad = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WORD: Ct,
  UWORD: js,
  LOCALHOST: Rr,
  TLD: Ws,
  UTLD: _s,
  SCHEME: xi,
  SLASH_SCHEME: Pn,
  NUM: Sl,
  WS: Ed,
  NL: Tl,
  OPENBRACE: br,
  CLOSEBRACE: vr,
  OPENBRACKET: ji,
  CLOSEBRACKET: Wi,
  OPENPAREN: _i,
  CLOSEPAREN: Ui,
  OPENANGLEBRACKET: Ki,
  CLOSEANGLEBRACKET: qi,
  FULLWIDTHLEFTPAREN: Ji,
  FULLWIDTHRIGHTPAREN: Gi,
  LEFTCORNERBRACKET: Yi,
  RIGHTCORNERBRACKET: Xi,
  LEFTWHITECORNERBRACKET: Qi,
  RIGHTWHITECORNERBRACKET: Zi,
  FULLWIDTHLESSTHAN: eo,
  FULLWIDTHGREATERTHAN: to,
  AMPERSAND: no,
  APOSTROPHE: ro,
  ASTERISK: io,
  AT: Lt,
  BACKSLASH: oo,
  BACKTICK: so,
  CARET: lo,
  COLON: Ht,
  COMMA: Ml,
  DOLLAR: ao,
  DOT: rt,
  EQUALS: co,
  EXCLAMATION: El,
  HYPHEN: it,
  PERCENT: uo,
  PIPE: fo,
  PLUS: ho,
  POUND: po,
  QUERY: mo,
  QUOTE: Ol,
  SEMI: Al,
  SLASH: ot,
  TILDE: wr,
  UNDERSCORE: go,
  EMOJI: Od,
  SYM: yo
});
const Dn = /[a-z]/, ss = new RegExp("\\p{L}", "u"), ls = new RegExp("\\p{Emoji}", "u"), as = /\d/, Ya = /\s/, Xa = `
`, i0 = "️", o0 = "‍";
let ci = null, ui = null;
function s0(n) {
  n === void 0 && (n = []);
  const e = {};
  Re.groups = e;
  const t = new Re();
  ci == null && (ci = Qa(Qy)), ui == null && (ui = Qa(Zy)), T(t, "'", ro), T(t, "{", br), T(t, "}", vr), T(t, "[", ji), T(t, "]", Wi), T(t, "(", _i), T(t, ")", Ui), T(t, "<", Ki), T(t, ">", qi), T(t, "（", Ji), T(t, "）", Gi), T(t, "「", Yi), T(t, "」", Xi), T(t, "『", Qi), T(t, "』", Zi), T(t, "＜", eo), T(t, "＞", to), T(t, "&", no), T(t, "*", io), T(t, "@", Lt), T(t, "`", so), T(t, "^", lo), T(t, ":", Ht), T(t, ",", Ml), T(t, "$", ao), T(t, ".", rt), T(t, "=", co), T(t, "!", El), T(t, "-", it), T(t, "%", uo), T(t, "|", fo), T(t, "+", ho), T(t, "#", po), T(t, "?", mo), T(t, '"', Ol), T(t, "/", ot), T(t, ";", Al), T(t, "~", wr), T(t, "_", go), T(t, "\\", oo);
  const r = Ve(t, as, Sl, {
    [zs]: !0
  });
  Ve(r, as, r);
  const i = Ve(t, Dn, Ct, {
    [$s]: !0
  });
  Ve(i, Dn, i);
  const o = Ve(t, ss, js, {
    [Fs]: !0
  });
  Ve(o, Dn), Ve(o, ss, o);
  const s = Ve(t, Ya, Ed, {
    [Ja]: !0
  });
  T(t, Xa, Tl, {
    [Ja]: !0
  }), T(s, Xa), Ve(s, Ya, s);
  const l = Ve(t, ls, Od, {
    [Md]: !0
  });
  Ve(l, ls, l), T(l, i0, l);
  const a = T(l, o0);
  Ve(a, ls, l);
  const c = [[Dn, i]], u = [[Dn, null], [ss, o]];
  for (let d = 0; d < ci.length; d++)
    Dt(t, ci[d], Ws, Ct, c);
  for (let d = 0; d < ui.length; d++)
    Dt(t, ui[d], _s, js, u);
  an(Ws, {
    tld: !0,
    ascii: !0
  }, e), an(_s, {
    utld: !0,
    alpha: !0
  }, e), Dt(t, "file", xi, Ct, c), Dt(t, "mailto", xi, Ct, c), Dt(t, "http", Pn, Ct, c), Dt(t, "https", Pn, Ct, c), Dt(t, "ftp", Pn, Ct, c), Dt(t, "ftps", Pn, Ct, c), an(xi, {
    scheme: !0,
    ascii: !0
  }, e), an(Pn, {
    slashscheme: !0,
    ascii: !0
  }, e), n = n.sort((d, f) => d[0] > f[0] ? 1 : -1);
  for (let d = 0; d < n.length; d++) {
    const f = n[d][0], p = n[d][1] ? {
      [e0]: !0
    } : {
      [t0]: !0
    };
    f.indexOf("-") >= 0 ? p[Vs] = !0 : Dn.test(f) ? as.test(f) ? p[Ci] = !0 : p[$s] = !0 : p[zs] = !0, Ga(t, f, f, p);
  }
  return Ga(t, "localhost", Rr, {
    ascii: !0
  }), t.jd = new Re(yo), {
    start: t,
    tokens: Yn({
      groups: e
    }, Ad)
  };
}
function l0(n, e) {
  const t = a0(e.replace(/[A-Z]/g, (l) => l.toLowerCase())), r = t.length, i = [];
  let o = 0, s = 0;
  for (; s < r; ) {
    let l = n, a = null, c = 0, u = null, d = -1, f = -1;
    for (; s < r && (a = l.go(t[s])); )
      l = a, l.accepts() ? (d = 0, f = 0, u = l) : d >= 0 && (d += t[s].length, f++), c += t[s].length, o += t[s].length, s++;
    o -= d, s -= f, c -= d, i.push({
      t: u.t,
      // token type/name
      v: e.slice(o - c, o),
      // string value
      s: o - c,
      // start index
      e: o
      // end index (excluding)
    });
  }
  return i;
}
function a0(n) {
  const e = [], t = n.length;
  let r = 0;
  for (; r < t; ) {
    let i = n.charCodeAt(r), o, s = i < 55296 || i > 56319 || r + 1 === t || (o = n.charCodeAt(r + 1)) < 56320 || o > 57343 ? n[r] : n.slice(r, r + 2);
    e.push(s), r += s.length;
  }
  return e;
}
function Dt(n, e, t, r, i) {
  let o;
  const s = e.length;
  for (let l = 0; l < s - 1; l++) {
    const a = e[l];
    n.j[a] ? o = n.j[a] : (o = new Re(r), o.jr = i.slice(), n.j[a] = o), n = o;
  }
  return o = new Re(t), o.jr = i.slice(), n.j[e[s - 1]] = o, o;
}
function Qa(n) {
  const e = [], t = [];
  let r = 0, i = "0123456789";
  for (; r < n.length; ) {
    let o = 0;
    for (; i.indexOf(n[r + o]) >= 0; )
      o++;
    if (o > 0) {
      e.push(t.join(""));
      for (let s = parseInt(n.substring(r, r + o), 10); s > 0; s--)
        t.pop();
      r += o;
    } else
      t.push(n[r]), r++;
  }
  return e;
}
const Ir = {
  defaultProtocol: "http",
  events: null,
  format: Za,
  formatHref: Za,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function Nl(n, e) {
  e === void 0 && (e = null);
  let t = Yn({}, Ir);
  n && (t = Yn(t, n instanceof Nl ? n.o : n));
  const r = t.ignoreTags, i = [];
  for (let o = 0; o < r.length; o++)
    i.push(r[o].toUpperCase());
  this.o = t, e && (this.defaultRender = e), this.ignoreTags = i;
}
Nl.prototype = {
  o: Ir,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(n) {
    return n;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(n) {
    return this.get("validate", n.toString(), n);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(n, e, t) {
    const r = e != null;
    let i = this.o[n];
    return i && (typeof i == "object" ? (i = t.t in i ? i[t.t] : Ir[n], typeof i == "function" && r && (i = i(e, t))) : typeof i == "function" && r && (i = i(e, t.t, t)), i);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(n, e, t) {
    let r = this.o[n];
    return typeof r == "function" && e != null && (r = r(e, t.t, t)), r;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(n) {
    const e = n.render(this);
    return (this.get("render", null, n) || this.defaultRender)(e, n.t, n);
  }
};
function Za(n) {
  return n;
}
function Nd(n, e) {
  this.t = "token", this.v = n, this.tk = e;
}
Nd.prototype = {
  isLink: !1,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
  */
  toHref(n) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(n) {
    const e = this.toString(), t = n.get("truncate", e, this), r = n.get("format", e, this);
    return t && r.length > t ? r.substring(0, t) + "…" : r;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(n) {
    return n.get("formatHref", this.toHref(n.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(n) {
    return n === void 0 && (n = Ir.defaultProtocol), {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(n) {
    return {
      type: this.t,
      value: this.toFormattedString(n),
      isLink: this.isLink,
      href: this.toFormattedHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(n) {
    return n.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(n) {
    const e = this, t = this.toHref(n.get("defaultProtocol")), r = n.get("formatHref", t, this), i = n.get("tagName", t, e), o = this.toFormattedString(n), s = {}, l = n.get("className", t, e), a = n.get("target", t, e), c = n.get("rel", t, e), u = n.getObj("attributes", t, e), d = n.getObj("events", t, e);
    return s.href = r, l && (s.class = l), a && (s.target = a), c && (s.rel = c), u && Yn(s, u), {
      tagName: i,
      attributes: s,
      content: o,
      eventListeners: d
    };
  }
};
function Po(n, e) {
  class t extends Nd {
    constructor(i, o) {
      super(i, o), this.t = n;
    }
  }
  for (const r in e)
    t.prototype[r] = e[r];
  return t.t = n, t;
}
const ec = Po("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), tc = Po("text"), c0 = Po("nl"), di = Po("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(n) {
    return n === void 0 && (n = Ir.defaultProtocol), this.hasProtocol() ? this.v : `${n}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const n = this.tk;
    return n.length >= 2 && n[0].t !== Rr && n[1].t === Ht;
  }
}), je = (n) => new Re(n);
function u0(n) {
  let {
    groups: e
  } = n;
  const t = e.domain.concat([no, io, Lt, oo, so, lo, ao, co, it, Sl, uo, fo, ho, po, ot, yo, wr, go]), r = [ro, Ht, Ml, rt, El, mo, Ol, Al, Ki, qi, br, vr, Wi, ji, _i, Ui, Ji, Gi, Yi, Xi, Qi, Zi, eo, to], i = [no, ro, io, oo, so, lo, ao, co, it, br, vr, uo, fo, ho, po, mo, ot, yo, wr, go], o = je(), s = T(o, wr);
  z(s, i, s), z(s, e.domain, s);
  const l = je(), a = je(), c = je();
  z(o, e.domain, l), z(o, e.scheme, a), z(o, e.slashscheme, c), z(l, i, s), z(l, e.domain, l);
  const u = T(l, Lt);
  T(s, Lt, u), T(a, Lt, u), T(c, Lt, u);
  const d = T(s, rt);
  z(d, i, s), z(d, e.domain, s);
  const f = je();
  z(u, e.domain, f), z(f, e.domain, f);
  const h = T(f, rt);
  z(h, e.domain, f);
  const p = je(ec);
  z(h, e.tld, p), z(h, e.utld, p), T(u, Rr, p);
  const g = T(f, it);
  z(g, e.domain, f), z(p, e.domain, f), T(p, rt, h), T(p, it, g);
  const y = T(p, Ht);
  z(y, e.numeric, ec);
  const v = T(l, it), w = T(l, rt);
  z(v, e.domain, l), z(w, i, s), z(w, e.domain, l);
  const k = je(di);
  z(w, e.tld, k), z(w, e.utld, k), z(k, e.domain, l), z(k, i, s), T(k, rt, w), T(k, it, v), T(k, Lt, u);
  const m = T(k, Ht), C = je(di);
  z(m, e.numeric, C);
  const b = je(di), O = je();
  z(b, t, b), z(b, r, O), z(O, t, b), z(O, r, O), T(k, ot, b), T(C, ot, b);
  const H = T(a, Ht), E = T(c, Ht), B = T(E, ot), _ = T(B, ot);
  z(a, e.domain, l), T(a, rt, w), T(a, it, v), z(c, e.domain, l), T(c, rt, w), T(c, it, v), z(H, e.domain, b), T(H, ot, b), z(_, e.domain, b), z(_, t, b), T(_, ot, b);
  const K = [
    [br, vr],
    // {}
    [ji, Wi],
    // []
    [_i, Ui],
    // ()
    [Ki, qi],
    // <>
    [Ji, Gi],
    // （）
    [Yi, Xi],
    // 「」
    [Qi, Zi],
    // 『』
    [eo, to]
    // ＜＞
  ];
  for (let q = 0; q < K.length; q++) {
    const [ce, te] = K[q], Q = T(b, ce);
    T(O, ce, Q), T(Q, te, b);
    const X = je(di);
    z(Q, t, X);
    const J = je();
    z(Q, r), z(X, t, X), z(X, r, J), z(J, t, X), z(J, r, J), T(X, te, b), T(J, te, b);
  }
  return T(o, Rr, k), T(o, Tl, c0), {
    start: o,
    tokens: Ad
  };
}
function d0(n, e, t) {
  let r = t.length, i = 0, o = [], s = [];
  for (; i < r; ) {
    let l = n, a = null, c = null, u = 0, d = null, f = -1;
    for (; i < r && !(a = l.go(t[i].t)); )
      s.push(t[i++]);
    for (; i < r && (c = a || l.go(t[i].t)); )
      a = null, l = c, l.accepts() ? (f = 0, d = l) : f >= 0 && f++, i++, u++;
    if (f < 0)
      i -= u, i < r && (s.push(t[i]), i++);
    else {
      s.length > 0 && (o.push(cs(tc, e, s)), s = []), i -= f, u -= f;
      const h = d.t, p = t.slice(i - u, i);
      o.push(cs(h, e, p));
    }
  }
  return s.length > 0 && o.push(cs(tc, e, s)), o;
}
function cs(n, e, t) {
  const r = t[0].s, i = t[t.length - 1].e, o = e.slice(r, i);
  return new n(o, t);
}
const f0 = typeof console < "u" && console && console.warn || (() => {
}), h0 = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", ne = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function p0() {
  Re.groups = {}, ne.scanner = null, ne.parser = null, ne.tokenQueue = [], ne.pluginQueue = [], ne.customSchemes = [], ne.initialized = !1;
}
function nc(n, e) {
  if (e === void 0 && (e = !1), ne.initialized && f0(`linkifyjs: already initialized - will not register custom scheme "${n}" ${h0}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(n))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  ne.customSchemes.push([n, e]);
}
function m0() {
  ne.scanner = s0(ne.customSchemes);
  for (let n = 0; n < ne.tokenQueue.length; n++)
    ne.tokenQueue[n][1]({
      scanner: ne.scanner
    });
  ne.parser = u0(ne.scanner.tokens);
  for (let n = 0; n < ne.pluginQueue.length; n++)
    ne.pluginQueue[n][1]({
      scanner: ne.scanner,
      parser: ne.parser
    });
  ne.initialized = !0;
}
function Dd(n) {
  return ne.initialized || m0(), d0(ne.parser.start, n, l0(ne.scanner.start, n));
}
function Rd(n, e, t) {
  if (e === void 0 && (e = null), t === void 0 && (t = null), e && typeof e == "object") {
    if (t)
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    t = e, e = null;
  }
  const r = new Nl(t), i = Dd(n), o = [];
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    l.isLink && (!e || l.t === e) && r.check(l) && o.push(l.toFormattedObject(r));
  }
  return o;
}
function g0(n) {
  return n.length === 1 ? n[0].isLink : n.length === 3 && n[1].isLink ? ["()", "[]"].includes(n[0].value + n[2].value) : !1;
}
function y0(n) {
  return new se({
    key: new ae("autolink"),
    appendTransaction: (e, t, r) => {
      const i = e.some((c) => c.docChanged) && !t.doc.eq(r.doc), o = e.some((c) => c.getMeta("preventAutolink"));
      if (!i || o)
        return;
      const { tr: s } = r, l = uy(t.doc, [...e]);
      if (by(l).forEach(({ newRange: c }) => {
        const u = fy(r.doc, c, (h) => h.isTextblock);
        let d, f;
        if (u.length > 1 ? (d = u[0], f = r.doc.textBetween(d.pos, d.pos + d.node.nodeSize, void 0, " ")) : u.length && r.doc.textBetween(c.from, c.to, " ", " ").endsWith(" ") && (d = u[0], f = r.doc.textBetween(d.pos, c.to, void 0, " ")), d && f) {
          const h = f.split(" ").filter((v) => v !== "");
          if (h.length <= 0)
            return !1;
          const p = h[h.length - 1], g = d.pos + f.lastIndexOf(p);
          if (!p)
            return !1;
          const y = Dd(p).map((v) => v.toObject(n.defaultProtocol));
          if (!g0(y))
            return !1;
          y.filter((v) => v.isLink).map((v) => ({
            ...v,
            from: g + v.start + 1,
            to: g + v.end + 1
          })).filter((v) => r.schema.marks.code ? !r.doc.rangeHasMark(v.from, v.to, r.schema.marks.code) : !0).filter((v) => n.validate(v.value)).forEach((v) => {
            Cl(v.from, v.to, r.doc).some((w) => w.mark.type === n.type) || s.addMark(v.from, v.to, n.type.create({
              href: v.href
            }));
          });
        }
      }), !!s.steps.length)
        return s;
    }
  });
}
function b0(n) {
  return new se({
    key: new ae("handleClickLink"),
    props: {
      handleClick: (e, t, r) => {
        var i, o;
        if (r.button !== 0 || !e.editable)
          return !1;
        let s = r.target;
        const l = [];
        for (; s.nodeName !== "DIV"; )
          l.push(s), s = s.parentNode;
        if (!l.find((f) => f.nodeName === "A"))
          return !1;
        const a = Cd(e.state, n.type.name), c = r.target, u = (i = c == null ? void 0 : c.href) !== null && i !== void 0 ? i : a.href, d = (o = c == null ? void 0 : c.target) !== null && o !== void 0 ? o : a.target;
        return c && u ? (window.open(u, d), !0) : !1;
      }
    }
  });
}
function v0(n) {
  return new se({
    key: new ae("handlePasteLink"),
    props: {
      handlePaste: (e, t, r) => {
        const { state: i } = e, { selection: o } = i, { empty: s } = o;
        if (s)
          return !1;
        let l = "";
        r.content.forEach((c) => {
          l += c.textContent;
        });
        const a = Rd(l, { defaultProtocol: n.defaultProtocol }).find((c) => c.isLink && c.value === l);
        return !l || !a ? !1 : (n.editor.commands.setMark(n.type, {
          href: a.href
        }), !0);
      }
    }
  });
}
const w0 = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g, k0 = /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i;
function rc(n) {
  return !n || n.replace(w0, "").match(k0);
}
const C0 = qe.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.protocols.forEach((n) => {
      if (typeof n == "string") {
        nc(n);
        return;
      }
      nc(n.scheme, n.optionalSlashes);
    });
  },
  onDestroy() {
    p0();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: !0,
      linkOnPaste: !0,
      autolink: !0,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      validate: (n) => !!n
    };
  },
  addAttributes() {
    return {
      href: {
        default: null
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      }
    };
  },
  parseHTML() {
    return [{
      tag: "a[href]",
      getAttrs: (n) => {
        const e = n.getAttribute("href");
        return !e || !rc(e) ? !1 : { href: e };
      }
    }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return rc(n.href) ? ["a", U(this.options.HTMLAttributes, n), 0] : ["a", U(this.options.HTMLAttributes, { ...n, href: "" }), 0];
  },
  addCommands() {
    return {
      setLink: (n) => ({ chain: e }) => e().setMark(this.name, n).setMeta("preventAutolink", !0).run(),
      toggleLink: (n) => ({ chain: e }) => e().toggleMark(this.name, n, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run(),
      unsetLink: () => ({ chain: n }) => n().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      vn({
        find: (n) => {
          const e = [];
          if (n) {
            const { validate: t } = this.options, r = Rd(n).filter((i) => i.isLink && t(i.value));
            r.length && r.forEach((i) => e.push({
              text: i.value,
              data: {
                href: i.href
              },
              index: i.start
            }));
          }
          return e;
        },
        type: this.type,
        getAttributes: (n) => {
          var e;
          return {
            href: (e = n.data) === null || e === void 0 ? void 0 : e.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const n = [];
    return this.options.autolink && n.push(y0({
      type: this.type,
      defaultProtocol: this.options.defaultProtocol,
      validate: this.options.validate
    })), this.options.openOnClick === !0 && n.push(b0({
      type: this.type
    })), this.options.linkOnPaste && n.push(v0({
      editor: this.editor,
      defaultProtocol: this.options.defaultProtocol,
      type: this.type
    })), n;
  }
});
var Us, Ks;
if (typeof WeakMap < "u") {
  let n = /* @__PURE__ */ new WeakMap();
  Us = (e) => n.get(e), Ks = (e, t) => (n.set(e, t), t);
} else {
  const n = [];
  let t = 0;
  Us = (r) => {
    for (let i = 0; i < n.length; i += 2)
      if (n[i] == r)
        return n[i + 1];
  }, Ks = (r, i) => (t == 10 && (t = 0), n[t++] = r, n[t++] = i);
}
var oe = class {
  constructor(n, e, t, r) {
    this.width = n, this.height = e, this.map = t, this.problems = r;
  }
  // Find the dimensions of the cell at the given position.
  findCell(n) {
    for (let e = 0; e < this.map.length; e++) {
      const t = this.map[e];
      if (t != n)
        continue;
      const r = e % this.width, i = e / this.width | 0;
      let o = r + 1, s = i + 1;
      for (let l = 1; o < this.width && this.map[e + l] == t; l++)
        o++;
      for (let l = 1; s < this.height && this.map[e + this.width * l] == t; l++)
        s++;
      return { left: r, top: i, right: o, bottom: s };
    }
    throw new RangeError(`No cell with offset ${n} found`);
  }
  // Find the left side of the cell at the given position.
  colCount(n) {
    for (let e = 0; e < this.map.length; e++)
      if (this.map[e] == n)
        return e % this.width;
    throw new RangeError(`No cell with offset ${n} found`);
  }
  // Find the next cell in the given direction, starting from the cell
  // at `pos`, if any.
  nextCell(n, e, t) {
    const { left: r, right: i, top: o, bottom: s } = this.findCell(n);
    return e == "horiz" ? (t < 0 ? r == 0 : i == this.width) ? null : this.map[o * this.width + (t < 0 ? r - 1 : i)] : (t < 0 ? o == 0 : s == this.height) ? null : this.map[r + this.width * (t < 0 ? o - 1 : s)];
  }
  // Get the rectangle spanning the two given cells.
  rectBetween(n, e) {
    const {
      left: t,
      right: r,
      top: i,
      bottom: o
    } = this.findCell(n), {
      left: s,
      right: l,
      top: a,
      bottom: c
    } = this.findCell(e);
    return {
      left: Math.min(t, s),
      top: Math.min(i, a),
      right: Math.max(r, l),
      bottom: Math.max(o, c)
    };
  }
  // Return the position of all cells that have the top left corner in
  // the given rectangle.
  cellsInRect(n) {
    const e = [], t = {};
    for (let r = n.top; r < n.bottom; r++)
      for (let i = n.left; i < n.right; i++) {
        const o = r * this.width + i, s = this.map[o];
        t[s] || (t[s] = !0, !(i == n.left && i && this.map[o - 1] == s || r == n.top && r && this.map[o - this.width] == s) && e.push(s));
      }
    return e;
  }
  // Return the position at which the cell at the given row and column
  // starts, or would start, if a cell started there.
  positionAt(n, e, t) {
    for (let r = 0, i = 0; ; r++) {
      const o = i + t.child(r).nodeSize;
      if (r == n) {
        let s = e + n * this.width;
        const l = (n + 1) * this.width;
        for (; s < l && this.map[s] < i; )
          s++;
        return s == l ? o - 1 : this.map[s];
      }
      i = o;
    }
  }
  // Find the table map for the given table node.
  static get(n) {
    return Us(n) || Ks(n, x0(n));
  }
};
function x0(n) {
  if (n.type.spec.tableRole != "table")
    throw new RangeError("Not a table node: " + n.type.name);
  const e = S0(n), t = n.childCount, r = [];
  let i = 0, o = null;
  const s = [];
  for (let c = 0, u = e * t; c < u; c++)
    r[c] = 0;
  for (let c = 0, u = 0; c < t; c++) {
    const d = n.child(c);
    u++;
    for (let p = 0; ; p++) {
      for (; i < r.length && r[i] != 0; )
        i++;
      if (p == d.childCount)
        break;
      const g = d.child(p), { colspan: y, rowspan: v, colwidth: w } = g.attrs;
      for (let k = 0; k < v; k++) {
        if (k + c >= t) {
          (o || (o = [])).push({
            type: "overlong_rowspan",
            pos: u,
            n: v - k
          });
          break;
        }
        const m = i + k * e;
        for (let C = 0; C < y; C++) {
          r[m + C] == 0 ? r[m + C] = u : (o || (o = [])).push({
            type: "collision",
            row: c,
            pos: u,
            n: y - C
          });
          const b = w && w[C];
          if (b) {
            const O = (m + C) % e * 2, H = s[O];
            H == null || H != b && s[O + 1] == 1 ? (s[O] = b, s[O + 1] = 1) : H == b && s[O + 1]++;
          }
        }
      }
      i += y, u += g.nodeSize;
    }
    const f = (c + 1) * e;
    let h = 0;
    for (; i < f; )
      r[i++] == 0 && h++;
    h && (o || (o = [])).push({ type: "missing", row: c, n: h }), u++;
  }
  const l = new oe(e, t, r, o);
  let a = !1;
  for (let c = 0; !a && c < s.length; c += 2)
    s[c] != null && s[c + 1] < t && (a = !0);
  return a && T0(l, s, n), l;
}
function S0(n) {
  let e = -1, t = !1;
  for (let r = 0; r < n.childCount; r++) {
    const i = n.child(r);
    let o = 0;
    if (t)
      for (let s = 0; s < r; s++) {
        const l = n.child(s);
        for (let a = 0; a < l.childCount; a++) {
          const c = l.child(a);
          s + c.attrs.rowspan > r && (o += c.attrs.colspan);
        }
      }
    for (let s = 0; s < i.childCount; s++) {
      const l = i.child(s);
      o += l.attrs.colspan, l.attrs.rowspan > 1 && (t = !0);
    }
    e == -1 ? e = o : e != o && (e = Math.max(e, o));
  }
  return e;
}
function T0(n, e, t) {
  n.problems || (n.problems = []);
  const r = {};
  for (let i = 0; i < n.map.length; i++) {
    const o = n.map[i];
    if (r[o])
      continue;
    r[o] = !0;
    const s = t.nodeAt(o);
    if (!s)
      throw new RangeError(`No cell with offset ${o} found`);
    let l = null;
    const a = s.attrs;
    for (let c = 0; c < a.colspan; c++) {
      const u = (i + c) % n.width, d = e[u * 2];
      d != null && (!a.colwidth || a.colwidth[c] != d) && ((l || (l = M0(a)))[c] = d);
    }
    l && n.problems.unshift({
      type: "colwidth mismatch",
      pos: o,
      colwidth: l
    });
  }
}
function M0(n) {
  if (n.colwidth)
    return n.colwidth.slice();
  const e = [];
  for (let t = 0; t < n.colspan; t++)
    e.push(0);
  return e;
}
function Se(n) {
  let e = n.cached.tableNodeTypes;
  if (!e) {
    e = n.cached.tableNodeTypes = {};
    for (const t in n.nodes) {
      const r = n.nodes[t], i = r.spec.tableRole;
      i && (e[i] = r);
    }
  }
  return e;
}
var zt = new ae("selectingCells");
function rr(n) {
  for (let e = n.depth - 1; e > 0; e--)
    if (n.node(e).type.spec.tableRole == "row")
      return n.node(0).resolve(n.before(e + 1));
  return null;
}
function E0(n) {
  for (let e = n.depth; e > 0; e--) {
    const t = n.node(e).type.spec.tableRole;
    if (t === "cell" || t === "header_cell")
      return n.node(e);
  }
  return null;
}
function nt(n) {
  const e = n.selection.$head;
  for (let t = e.depth; t > 0; t--)
    if (e.node(t).type.spec.tableRole == "row")
      return !0;
  return !1;
}
function Bo(n) {
  const e = n.selection;
  if ("$anchorCell" in e && e.$anchorCell)
    return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell")
    return e.$anchor;
  const t = rr(e.$head) || O0(e.$head);
  if (t)
    return t;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function O0(n) {
  for (let e = n.nodeAfter, t = n.pos; e; e = e.firstChild, t++) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell")
      return n.doc.resolve(t);
  }
  for (let e = n.nodeBefore, t = n.pos; e; e = e.lastChild, t--) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell")
      return n.doc.resolve(t - e.nodeSize);
  }
}
function qs(n) {
  return n.parent.type.spec.tableRole == "row" && !!n.nodeAfter;
}
function A0(n) {
  return n.node(0).resolve(n.pos + n.nodeAfter.nodeSize);
}
function Dl(n, e) {
  return n.depth == e.depth && n.pos >= e.start(-1) && n.pos <= e.end(-1);
}
function Id(n, e, t) {
  const r = n.node(-1), i = oe.get(r), o = n.start(-1), s = i.nextCell(n.pos - o, e, t);
  return s == null ? null : n.node(0).resolve(o + s);
}
function wn(n, e, t = 1) {
  const r = { ...n, colspan: n.colspan - t };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, t), r.colwidth.some((i) => i > 0) || (r.colwidth = null)), r;
}
function Ld(n, e, t = 1) {
  const r = { ...n, colspan: n.colspan + t };
  if (r.colwidth) {
    r.colwidth = r.colwidth.slice();
    for (let i = 0; i < t; i++)
      r.colwidth.splice(e, 0, 0);
  }
  return r;
}
function N0(n, e, t) {
  const r = Se(e.type.schema).header_cell;
  for (let i = 0; i < n.height; i++)
    if (e.nodeAt(n.map[t + i * n.width]).type != r)
      return !1;
  return !0;
}
var Z = class xt extends L {
  // A table selection is identified by its anchor and head cells. The
  // positions given to this constructor should point _before_ two
  // cells in the same table. They may be the same, to select a single
  // cell.
  constructor(e, t = e) {
    const r = e.node(-1), i = oe.get(r), o = e.start(-1), s = i.rectBetween(
      e.pos - o,
      t.pos - o
    ), l = e.node(0), a = i.cellsInRect(s).filter((u) => u != t.pos - o);
    a.unshift(t.pos - o);
    const c = a.map((u) => {
      const d = r.nodeAt(u);
      if (!d)
        throw RangeError(`No cell with offset ${u} found`);
      const f = o + u + 1;
      return new Su(
        l.resolve(f),
        l.resolve(f + d.content.size)
      );
    });
    super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = t;
  }
  map(e, t) {
    const r = e.resolve(t.map(this.$anchorCell.pos)), i = e.resolve(t.map(this.$headCell.pos));
    if (qs(r) && qs(i) && Dl(r, i)) {
      const o = this.$anchorCell.node(-1) != r.node(-1);
      return o && this.isRowSelection() ? xt.rowSelection(r, i) : o && this.isColSelection() ? xt.colSelection(r, i) : new xt(r, i);
    }
    return I.between(r, i);
  }
  // Returns a rectangular slice of table rows containing the selected
  // cells.
  content() {
    const e = this.$anchorCell.node(-1), t = oe.get(e), r = this.$anchorCell.start(-1), i = t.rectBetween(
      this.$anchorCell.pos - r,
      this.$headCell.pos - r
    ), o = {}, s = [];
    for (let a = i.top; a < i.bottom; a++) {
      const c = [];
      for (let u = a * t.width + i.left, d = i.left; d < i.right; d++, u++) {
        const f = t.map[u];
        if (o[f])
          continue;
        o[f] = !0;
        const h = t.findCell(f);
        let p = e.nodeAt(f);
        if (!p)
          throw RangeError(`No cell with offset ${f} found`);
        const g = i.left - h.left, y = h.right - i.right;
        if (g > 0 || y > 0) {
          let v = p.attrs;
          if (g > 0 && (v = wn(v, 0, g)), y > 0 && (v = wn(
            v,
            v.colspan - y,
            y
          )), h.left < i.left) {
            if (p = p.type.createAndFill(v), !p)
              throw RangeError(
                `Could not create cell with attrs ${JSON.stringify(v)}`
              );
          } else
            p = p.type.create(v, p.content);
        }
        if (h.top < i.top || h.bottom > i.bottom) {
          const v = {
            ...p.attrs,
            rowspan: Math.min(h.bottom, i.bottom) - Math.max(h.top, i.top)
          };
          h.top < i.top ? p = p.type.createAndFill(v) : p = p.type.create(v, p.content);
        }
        c.push(p);
      }
      s.push(e.child(a).copy(S.from(c)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? e : s;
    return new M(S.from(l), 1, 1);
  }
  replace(e, t = M.empty) {
    const r = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      const { $from: l, $to: a } = i[s], c = e.mapping.slice(r);
      e.replace(
        c.map(l.pos),
        c.map(a.pos),
        s ? M.empty : t
      );
    }
    const o = L.findFrom(
      e.doc.resolve(e.mapping.slice(r).map(this.to)),
      -1
    );
    o && e.setSelection(o);
  }
  replaceWith(e, t) {
    this.replace(e, new M(S.from(t), 0, 0));
  }
  forEachCell(e) {
    const t = this.$anchorCell.node(-1), r = oe.get(t), i = this.$anchorCell.start(-1), o = r.cellsInRect(
      r.rectBetween(
        this.$anchorCell.pos - i,
        this.$headCell.pos - i
      )
    );
    for (let s = 0; s < o.length; s++)
      e(t.nodeAt(o[s]), i + o[s]);
  }
  // True if this selection goes all the way from the top to the
  // bottom of the table.
  isColSelection() {
    const e = this.$anchorCell.index(-1), t = this.$headCell.index(-1);
    if (Math.min(e, t) > 0)
      return !1;
    const r = e + this.$anchorCell.nodeAfter.attrs.rowspan, i = t + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(r, i) == this.$headCell.node(-1).childCount;
  }
  // Returns the smallest column selection that covers the given anchor
  // and head cell.
  static colSelection(e, t = e) {
    const r = e.node(-1), i = oe.get(r), o = e.start(-1), s = i.findCell(e.pos - o), l = i.findCell(t.pos - o), a = e.node(0);
    return s.top <= l.top ? (s.top > 0 && (e = a.resolve(o + i.map[s.left])), l.bottom < i.height && (t = a.resolve(
      o + i.map[i.width * (i.height - 1) + l.right - 1]
    ))) : (l.top > 0 && (t = a.resolve(o + i.map[l.left])), s.bottom < i.height && (e = a.resolve(
      o + i.map[i.width * (i.height - 1) + s.right - 1]
    ))), new xt(e, t);
  }
  // True if this selection goes all the way from the left to the
  // right of the table.
  isRowSelection() {
    const e = this.$anchorCell.node(-1), t = oe.get(e), r = this.$anchorCell.start(-1), i = t.colCount(this.$anchorCell.pos - r), o = t.colCount(this.$headCell.pos - r);
    if (Math.min(i, o) > 0)
      return !1;
    const s = i + this.$anchorCell.nodeAfter.attrs.colspan, l = o + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(s, l) == t.width;
  }
  eq(e) {
    return e instanceof xt && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  // Returns the smallest row selection that covers the given anchor
  // and head cell.
  static rowSelection(e, t = e) {
    const r = e.node(-1), i = oe.get(r), o = e.start(-1), s = i.findCell(e.pos - o), l = i.findCell(t.pos - o), a = e.node(0);
    return s.left <= l.left ? (s.left > 0 && (e = a.resolve(
      o + i.map[s.top * i.width]
    )), l.right < i.width && (t = a.resolve(
      o + i.map[i.width * (l.top + 1) - 1]
    ))) : (l.left > 0 && (t = a.resolve(o + i.map[l.top * i.width])), s.right < i.width && (e = a.resolve(
      o + i.map[i.width * (s.top + 1) - 1]
    ))), new xt(e, t);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, t) {
    return new xt(e.resolve(t.anchor), e.resolve(t.head));
  }
  static create(e, t, r = t) {
    return new xt(e.resolve(t), e.resolve(r));
  }
  getBookmark() {
    return new D0(this.$anchorCell.pos, this.$headCell.pos);
  }
};
Z.prototype.visible = !1;
L.jsonID("cell", Z);
var D0 = class Pd {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new Pd(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const t = e.resolve(this.anchor), r = e.resolve(this.head);
    return t.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && t.index() < t.parent.childCount && r.index() < r.parent.childCount && Dl(t, r) ? new Z(t, r) : L.near(r, 1);
  }
};
function R0(n) {
  if (!(n.selection instanceof Z))
    return null;
  const e = [];
  return n.selection.forEachCell((t, r) => {
    e.push(
      xe.node(r, r + t.nodeSize, { class: "selectedCell" })
    );
  }), ee.create(n.doc, e);
}
function I0({ $from: n, $to: e }) {
  if (n.pos == e.pos || n.pos < n.pos - 6)
    return !1;
  let t = n.pos, r = e.pos, i = n.depth;
  for (; i >= 0 && !(n.after(i + 1) < n.end(i)); i--, t++)
    ;
  for (let o = e.depth; o >= 0 && !(e.before(o + 1) > e.start(o)); o--, r--)
    ;
  return t == r && /row|table/.test(n.node(i).type.spec.tableRole);
}
function L0({ $from: n, $to: e }) {
  let t, r;
  for (let i = n.depth; i > 0; i--) {
    const o = n.node(i);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      t = o;
      break;
    }
  }
  for (let i = e.depth; i > 0; i--) {
    const o = e.node(i);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      r = o;
      break;
    }
  }
  return t !== r && e.parentOffset === 0;
}
function P0(n, e, t) {
  const r = (e || n).selection, i = (e || n).doc;
  let o, s;
  if (r instanceof D && (s = r.node.type.spec.tableRole)) {
    if (s == "cell" || s == "header_cell")
      o = Z.create(i, r.from);
    else if (s == "row") {
      const l = i.resolve(r.from + 1);
      o = Z.rowSelection(l, l);
    } else if (!t) {
      const l = oe.get(r.node), a = r.from + 1, c = a + l.map[l.width * l.height - 1];
      o = Z.create(i, a + 1, c);
    }
  } else r instanceof I && I0(r) ? o = I.create(i, r.from) : r instanceof I && L0(r) && (o = I.create(i, r.$from.start(), r.$from.end()));
  return o && (e || (e = n.tr)).setSelection(o), e;
}
var B0 = new ae("fix-tables");
function Bd(n, e, t, r) {
  const i = n.childCount, o = e.childCount;
  e:
    for (let s = 0, l = 0; s < o; s++) {
      const a = e.child(s);
      for (let c = l, u = Math.min(i, s + 3); c < u; c++)
        if (n.child(c) == a) {
          l = c + 1, t += a.nodeSize;
          continue e;
        }
      r(a, t), l < i && n.child(l).sameMarkup(a) ? Bd(n.child(l), a, t + 1, r) : a.nodesBetween(0, a.content.size, r, t + 1), t += a.nodeSize;
    }
}
function Hd(n, e) {
  let t;
  const r = (i, o) => {
    i.type.spec.tableRole == "table" && (t = H0(n, i, o, t));
  };
  return e ? e.doc != n.doc && Bd(e.doc, n.doc, 0, r) : n.doc.descendants(r), t;
}
function H0(n, e, t, r) {
  const i = oe.get(e);
  if (!i.problems)
    return r;
  r || (r = n.tr);
  const o = [];
  for (let a = 0; a < i.height; a++)
    o.push(0);
  for (let a = 0; a < i.problems.length; a++) {
    const c = i.problems[a];
    if (c.type == "collision") {
      const u = e.nodeAt(c.pos);
      if (!u)
        continue;
      const d = u.attrs;
      for (let f = 0; f < d.rowspan; f++)
        o[c.row + f] += c.n;
      r.setNodeMarkup(
        r.mapping.map(t + 1 + c.pos),
        null,
        wn(d, d.colspan - c.n, c.n)
      );
    } else if (c.type == "missing")
      o[c.row] += c.n;
    else if (c.type == "overlong_rowspan") {
      const u = e.nodeAt(c.pos);
      if (!u)
        continue;
      r.setNodeMarkup(r.mapping.map(t + 1 + c.pos), null, {
        ...u.attrs,
        rowspan: u.attrs.rowspan - c.n
      });
    } else if (c.type == "colwidth mismatch") {
      const u = e.nodeAt(c.pos);
      if (!u)
        continue;
      r.setNodeMarkup(r.mapping.map(t + 1 + c.pos), null, {
        ...u.attrs,
        colwidth: c.colwidth
      });
    }
  }
  let s, l;
  for (let a = 0; a < o.length; a++)
    o[a] && (s == null && (s = a), l = a);
  for (let a = 0, c = t + 1; a < i.height; a++) {
    const u = e.child(a), d = c + u.nodeSize, f = o[a];
    if (f > 0) {
      let h = "cell";
      u.firstChild && (h = u.firstChild.type.spec.tableRole);
      const p = [];
      for (let y = 0; y < f; y++) {
        const v = Se(n.schema)[h].createAndFill();
        v && p.push(v);
      }
      const g = (a == 0 || s == a - 1) && l == a ? c + 1 : d - 1;
      r.insert(r.mapping.map(g), p);
    }
    c = d;
  }
  return r.setMeta(B0, { fixTables: !0 });
}
function z0(n) {
  if (!n.size)
    return null;
  let { content: e, openStart: t, openEnd: r } = n;
  for (; e.childCount == 1 && (t > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    t--, r--, e = e.child(0).content;
  const i = e.child(0), o = i.type.spec.tableRole, s = i.type.schema, l = [];
  if (o == "row")
    for (let a = 0; a < e.childCount; a++) {
      let c = e.child(a).content;
      const u = a ? 0 : Math.max(0, t - 1), d = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
      (u || d) && (c = Js(
        Se(s).row,
        new M(c, u, d)
      ).content), l.push(c);
    }
  else if (o == "cell" || o == "header_cell")
    l.push(
      t || r ? Js(
        Se(s).row,
        new M(e, t, r)
      ).content : e
    );
  else
    return null;
  return $0(s, l);
}
function $0(n, e) {
  const t = [];
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    for (let s = o.childCount - 1; s >= 0; s--) {
      const { rowspan: l, colspan: a } = o.child(s).attrs;
      for (let c = i; c < i + l; c++)
        t[c] = (t[c] || 0) + a;
    }
  }
  let r = 0;
  for (let i = 0; i < t.length; i++)
    r = Math.max(r, t[i]);
  for (let i = 0; i < t.length; i++)
    if (i >= e.length && e.push(S.empty), t[i] < r) {
      const o = Se(n).cell.createAndFill(), s = [];
      for (let l = t[i]; l < r; l++)
        s.push(o);
      e[i] = e[i].append(S.from(s));
    }
  return { height: e.length, width: r, rows: e };
}
function Js(n, e) {
  const t = n.createAndFill();
  return new il(t).replace(0, t.content.size, e).doc;
}
function F0({ width: n, height: e, rows: t }, r, i) {
  if (n != r) {
    const o = [], s = [];
    for (let l = 0; l < t.length; l++) {
      const a = t[l], c = [];
      for (let u = o[l] || 0, d = 0; u < r; d++) {
        let f = a.child(d % a.childCount);
        u + f.attrs.colspan > r && (f = f.type.createChecked(
          wn(
            f.attrs,
            f.attrs.colspan,
            u + f.attrs.colspan - r
          ),
          f.content
        )), c.push(f), u += f.attrs.colspan;
        for (let h = 1; h < f.attrs.rowspan; h++)
          o[l + h] = (o[l + h] || 0) + f.attrs.colspan;
      }
      s.push(S.from(c));
    }
    t = s, n = r;
  }
  if (e != i) {
    const o = [];
    for (let s = 0, l = 0; s < i; s++, l++) {
      const a = [], c = t[l % e];
      for (let u = 0; u < c.childCount; u++) {
        let d = c.child(u);
        s + d.attrs.rowspan > i && (d = d.type.create(
          {
            ...d.attrs,
            rowspan: Math.max(1, i - d.attrs.rowspan)
          },
          d.content
        )), a.push(d);
      }
      o.push(S.from(a));
    }
    t = o, e = i;
  }
  return { width: n, height: e, rows: t };
}
function V0(n, e, t, r, i, o, s) {
  const l = n.doc.type.schema, a = Se(l);
  let c, u;
  if (i > e.width)
    for (let d = 0, f = 0; d < e.height; d++) {
      const h = t.child(d);
      f += h.nodeSize;
      const p = [];
      let g;
      h.lastChild == null || h.lastChild.type == a.cell ? g = c || (c = a.cell.createAndFill()) : g = u || (u = a.header_cell.createAndFill());
      for (let y = e.width; y < i; y++)
        p.push(g);
      n.insert(n.mapping.slice(s).map(f - 1 + r), p);
    }
  if (o > e.height) {
    const d = [];
    for (let p = 0, g = (e.height - 1) * e.width; p < Math.max(e.width, i); p++) {
      const y = p >= e.width ? !1 : t.nodeAt(e.map[g + p]).type == a.header_cell;
      d.push(
        y ? u || (u = a.header_cell.createAndFill()) : c || (c = a.cell.createAndFill())
      );
    }
    const f = a.row.create(null, S.from(d)), h = [];
    for (let p = e.height; p < o; p++)
      h.push(f);
    n.insert(n.mapping.slice(s).map(r + t.nodeSize - 2), h);
  }
  return !!(c || u);
}
function ic(n, e, t, r, i, o, s, l) {
  if (s == 0 || s == e.height)
    return !1;
  let a = !1;
  for (let c = i; c < o; c++) {
    const u = s * e.width + c, d = e.map[u];
    if (e.map[u - e.width] == d) {
      a = !0;
      const f = t.nodeAt(d), { top: h, left: p } = e.findCell(d);
      n.setNodeMarkup(n.mapping.slice(l).map(d + r), null, {
        ...f.attrs,
        rowspan: s - h
      }), n.insert(
        n.mapping.slice(l).map(e.positionAt(s, p, t)),
        f.type.createAndFill({
          ...f.attrs,
          rowspan: h + f.attrs.rowspan - s
        })
      ), c += f.attrs.colspan - 1;
    }
  }
  return a;
}
function oc(n, e, t, r, i, o, s, l) {
  if (s == 0 || s == e.width)
    return !1;
  let a = !1;
  for (let c = i; c < o; c++) {
    const u = c * e.width + s, d = e.map[u];
    if (e.map[u - 1] == d) {
      a = !0;
      const f = t.nodeAt(d), h = e.colCount(d), p = n.mapping.slice(l).map(d + r);
      n.setNodeMarkup(
        p,
        null,
        wn(
          f.attrs,
          s - h,
          f.attrs.colspan - (s - h)
        )
      ), n.insert(
        p + f.nodeSize,
        f.type.createAndFill(
          wn(f.attrs, 0, s - h)
        )
      ), c += f.attrs.rowspan - 1;
    }
  }
  return a;
}
function sc(n, e, t, r, i) {
  let o = t ? n.doc.nodeAt(t - 1) : n.doc;
  if (!o)
    throw new Error("No table found");
  let s = oe.get(o);
  const { top: l, left: a } = r, c = a + i.width, u = l + i.height, d = n.tr;
  let f = 0;
  function h() {
    if (o = t ? d.doc.nodeAt(t - 1) : d.doc, !o)
      throw new Error("No table found");
    s = oe.get(o), f = d.mapping.maps.length;
  }
  V0(d, s, o, t, c, u, f) && h(), ic(d, s, o, t, a, c, l, f) && h(), ic(d, s, o, t, a, c, u, f) && h(), oc(d, s, o, t, l, u, a, f) && h(), oc(d, s, o, t, l, u, c, f) && h();
  for (let p = l; p < u; p++) {
    const g = s.positionAt(p, a, o), y = s.positionAt(p, c, o);
    d.replace(
      d.mapping.slice(f).map(g + t),
      d.mapping.slice(f).map(y + t),
      new M(i.rows[p - l], 0, 0)
    );
  }
  h(), d.setSelection(
    new Z(
      d.doc.resolve(t + s.positionAt(l, a, o)),
      d.doc.resolve(t + s.positionAt(u - 1, c - 1, o))
    )
  ), e(d);
}
var j0 = pl({
  ArrowLeft: fi("horiz", -1),
  ArrowRight: fi("horiz", 1),
  ArrowUp: fi("vert", -1),
  ArrowDown: fi("vert", 1),
  "Shift-ArrowLeft": hi("horiz", -1),
  "Shift-ArrowRight": hi("horiz", 1),
  "Shift-ArrowUp": hi("vert", -1),
  "Shift-ArrowDown": hi("vert", 1),
  Backspace: pi,
  "Mod-Backspace": pi,
  Delete: pi,
  "Mod-Delete": pi
});
function Si(n, e, t) {
  return t.eq(n.selection) ? !1 : (e && e(n.tr.setSelection(t).scrollIntoView()), !0);
}
function fi(n, e) {
  return (t, r, i) => {
    if (!i)
      return !1;
    const o = t.selection;
    if (o instanceof Z)
      return Si(
        t,
        r,
        L.near(o.$headCell, e)
      );
    if (n != "horiz" && !o.empty)
      return !1;
    const s = zd(i, n, e);
    if (s == null)
      return !1;
    if (n == "horiz")
      return Si(
        t,
        r,
        L.near(t.doc.resolve(o.head + e), e)
      );
    {
      const l = t.doc.resolve(s), a = Id(l, n, e);
      let c;
      return a ? c = L.near(a, 1) : e < 0 ? c = L.near(t.doc.resolve(l.before(-1)), -1) : c = L.near(t.doc.resolve(l.after(-1)), 1), Si(t, r, c);
    }
  };
}
function hi(n, e) {
  return (t, r, i) => {
    if (!i)
      return !1;
    const o = t.selection;
    let s;
    if (o instanceof Z)
      s = o;
    else {
      const a = zd(i, n, e);
      if (a == null)
        return !1;
      s = new Z(t.doc.resolve(a));
    }
    const l = Id(s.$headCell, n, e);
    return l ? Si(
      t,
      r,
      new Z(s.$anchorCell, l)
    ) : !1;
  };
}
function pi(n, e) {
  const t = n.selection;
  if (!(t instanceof Z))
    return !1;
  if (e) {
    const r = n.tr, i = Se(n.schema).cell.createAndFill().content;
    t.forEachCell((o, s) => {
      o.content.eq(i) || r.replace(
        r.mapping.map(s + 1),
        r.mapping.map(s + o.nodeSize - 1),
        new M(i, 0, 0)
      );
    }), r.docChanged && e(r);
  }
  return !0;
}
function W0(n, e) {
  const t = n.state.doc, r = rr(t.resolve(e));
  return r ? (n.dispatch(n.state.tr.setSelection(new Z(r))), !0) : !1;
}
function _0(n, e, t) {
  if (!nt(n.state))
    return !1;
  let r = z0(t);
  const i = n.state.selection;
  if (i instanceof Z) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [
        S.from(
          Js(Se(n.state.schema).cell, t)
        )
      ]
    });
    const o = i.$anchorCell.node(-1), s = i.$anchorCell.start(-1), l = oe.get(o).rectBetween(
      i.$anchorCell.pos - s,
      i.$headCell.pos - s
    );
    return r = F0(r, l.right - l.left, l.bottom - l.top), sc(n.state, n.dispatch, s, l, r), !0;
  } else if (r) {
    const o = Bo(n.state), s = o.start(-1);
    return sc(
      n.state,
      n.dispatch,
      s,
      oe.get(o.node(-1)).findCell(o.pos - s),
      r
    ), !0;
  } else
    return !1;
}
function U0(n, e) {
  var t;
  if (e.ctrlKey || e.metaKey)
    return;
  const r = lc(n, e.target);
  let i;
  if (e.shiftKey && n.state.selection instanceof Z)
    o(n.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (i = rr(n.state.selection.$anchor)) != null && ((t = us(n, e)) == null ? void 0 : t.pos) != i.pos)
    o(i, e), e.preventDefault();
  else if (!r)
    return;
  function o(a, c) {
    let u = us(n, c);
    const d = zt.getState(n.state) == null;
    if (!u || !Dl(a, u))
      if (d)
        u = a;
      else
        return;
    const f = new Z(a, u);
    if (d || !n.state.selection.eq(f)) {
      const h = n.state.tr.setSelection(f);
      d && h.setMeta(zt, a.pos), n.dispatch(h);
    }
  }
  function s() {
    n.root.removeEventListener("mouseup", s), n.root.removeEventListener("dragstart", s), n.root.removeEventListener("mousemove", l), zt.getState(n.state) != null && n.dispatch(n.state.tr.setMeta(zt, -1));
  }
  function l(a) {
    const c = a, u = zt.getState(n.state);
    let d;
    if (u != null)
      d = n.state.doc.resolve(u);
    else if (lc(n, c.target) != r && (d = us(n, e), !d))
      return s();
    d && o(d, c);
  }
  n.root.addEventListener("mouseup", s), n.root.addEventListener("dragstart", s), n.root.addEventListener("mousemove", l);
}
function zd(n, e, t) {
  if (!(n.state.selection instanceof I))
    return null;
  const { $head: r } = n.state.selection;
  for (let i = r.depth - 1; i >= 0; i--) {
    const o = r.node(i);
    if ((t < 0 ? r.index(i) : r.indexAfter(i)) != (t < 0 ? 0 : o.childCount))
      return null;
    if (o.type.spec.tableRole == "cell" || o.type.spec.tableRole == "header_cell") {
      const l = r.before(i), a = e == "vert" ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
      return n.endOfTextblock(a) ? l : null;
    }
  }
  return null;
}
function lc(n, e) {
  for (; e && e != n.dom; e = e.parentNode)
    if (e.nodeName == "TD" || e.nodeName == "TH")
      return e;
  return null;
}
function us(n, e) {
  const t = n.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  return t && t ? rr(n.state.doc.resolve(t.pos)) : null;
}
var K0 = class {
  constructor(e, t) {
    this.node = e, this.cellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Gs(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, Gs(e, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function Gs(n, e, t, r, i, o) {
  var s;
  let l = 0, a = !0, c = e.firstChild;
  const u = n.firstChild;
  if (u) {
    for (let d = 0, f = 0; d < u.childCount; d++) {
      const { colspan: h, colwidth: p } = u.child(d).attrs;
      for (let g = 0; g < h; g++, f++) {
        const y = i == f ? o : p && p[g], v = y ? y + "px" : "";
        l += y || r, y || (a = !1), c ? (c.style.width != v && (c.style.width = v), c = c.nextSibling) : e.appendChild(document.createElement("col")).style.width = v;
      }
    }
    for (; c; ) {
      const d = c.nextSibling;
      (s = c.parentNode) == null || s.removeChild(c), c = d;
    }
    a ? (t.style.width = l + "px", t.style.minWidth = "") : (t.style.width = "", t.style.minWidth = l + "px");
  }
}
var _e = new ae(
  "tableColumnResizing"
);
function q0({
  handleWidth: n = 5,
  cellMinWidth: e = 25,
  View: t = K0,
  lastColumnResizable: r = !0
} = {}) {
  const i = new se({
    key: _e,
    state: {
      init(o, s) {
        var l, a;
        const c = (a = (l = i.spec) == null ? void 0 : l.props) == null ? void 0 : a.nodeViews, u = Se(s.schema).table.name;
        return t && c && (c[u] = (d, f) => new t(d, e, f)), new J0(-1, !1);
      },
      apply(o, s) {
        return s.apply(o);
      }
    },
    props: {
      attributes: (o) => {
        const s = _e.getState(o);
        return s && s.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (o, s) => {
          G0(
            o,
            s,
            n,
            e,
            r
          );
        },
        mouseleave: (o) => {
          Y0(o);
        },
        mousedown: (o, s) => {
          X0(o, s, e);
        }
      },
      decorations: (o) => {
        const s = _e.getState(o);
        if (s && s.activeHandle > -1)
          return rb(o, s.activeHandle);
      },
      nodeViews: {}
    }
  });
  return i;
}
var J0 = class Ti {
  constructor(e, t) {
    this.activeHandle = e, this.dragging = t;
  }
  apply(e) {
    const t = this, r = e.getMeta(_e);
    if (r && r.setHandle != null)
      return new Ti(r.setHandle, !1);
    if (r && r.setDragging !== void 0)
      return new Ti(t.activeHandle, r.setDragging);
    if (t.activeHandle > -1 && e.docChanged) {
      let i = e.mapping.map(t.activeHandle, -1);
      return qs(e.doc.resolve(i)) || (i = -1), new Ti(i, t.dragging);
    }
    return t;
  }
};
function G0(n, e, t, r, i) {
  const o = _e.getState(n.state);
  if (o && !o.dragging) {
    const s = Z0(e.target);
    let l = -1;
    if (s) {
      const { left: a, right: c } = s.getBoundingClientRect();
      e.clientX - a <= t ? l = ac(n, e, "left", t) : c - e.clientX <= t && (l = ac(n, e, "right", t));
    }
    if (l != o.activeHandle) {
      if (!i && l !== -1) {
        const a = n.state.doc.resolve(l), c = a.node(-1), u = oe.get(c), d = a.start(-1);
        if (u.colCount(a.pos - d) + a.nodeAfter.attrs.colspan - 1 == u.width - 1)
          return;
      }
      $d(n, l);
    }
  }
}
function Y0(n) {
  const e = _e.getState(n.state);
  e && e.activeHandle > -1 && !e.dragging && $d(n, -1);
}
function X0(n, e, t) {
  var r;
  const i = (r = n.dom.ownerDocument.defaultView) != null ? r : window, o = _e.getState(n.state);
  if (!o || o.activeHandle == -1 || o.dragging)
    return !1;
  const s = n.state.doc.nodeAt(o.activeHandle), l = Q0(n, o.activeHandle, s.attrs);
  n.dispatch(
    n.state.tr.setMeta(_e, {
      setDragging: { startX: e.clientX, startWidth: l }
    })
  );
  function a(u) {
    i.removeEventListener("mouseup", a), i.removeEventListener("mousemove", c);
    const d = _e.getState(n.state);
    d != null && d.dragging && (eb(
      n,
      d.activeHandle,
      cc(d.dragging, u, t)
    ), n.dispatch(
      n.state.tr.setMeta(_e, { setDragging: null })
    ));
  }
  function c(u) {
    if (!u.which)
      return a(u);
    const d = _e.getState(n.state);
    if (d && d.dragging) {
      const f = cc(d.dragging, u, t);
      tb(n, d.activeHandle, f, t);
    }
  }
  return i.addEventListener("mouseup", a), i.addEventListener("mousemove", c), e.preventDefault(), !0;
}
function Q0(n, e, { colspan: t, colwidth: r }) {
  const i = r && r[r.length - 1];
  if (i)
    return i;
  const o = n.domAtPos(e);
  let l = o.node.childNodes[o.offset].offsetWidth, a = t;
  if (r)
    for (let c = 0; c < t; c++)
      r[c] && (l -= r[c], a--);
  return l / a;
}
function Z0(n) {
  for (; n && n.nodeName != "TD" && n.nodeName != "TH"; )
    n = n.classList && n.classList.contains("ProseMirror") ? null : n.parentNode;
  return n;
}
function ac(n, e, t, r) {
  const i = t == "right" ? -r : r, o = n.posAtCoords({
    left: e.clientX + i,
    top: e.clientY
  });
  if (!o)
    return -1;
  const { pos: s } = o, l = rr(n.state.doc.resolve(s));
  if (!l)
    return -1;
  if (t == "right")
    return l.pos;
  const a = oe.get(l.node(-1)), c = l.start(-1), u = a.map.indexOf(l.pos - c);
  return u % a.width == 0 ? -1 : c + a.map[u - 1];
}
function cc(n, e, t) {
  const r = e.clientX - n.startX;
  return Math.max(t, n.startWidth + r);
}
function $d(n, e) {
  n.dispatch(
    n.state.tr.setMeta(_e, { setHandle: e })
  );
}
function eb(n, e, t) {
  const r = n.state.doc.resolve(e), i = r.node(-1), o = oe.get(i), s = r.start(-1), l = o.colCount(r.pos - s) + r.nodeAfter.attrs.colspan - 1, a = n.state.tr;
  for (let c = 0; c < o.height; c++) {
    const u = c * o.width + l;
    if (c && o.map[u] == o.map[u - o.width])
      continue;
    const d = o.map[u], f = i.nodeAt(d).attrs, h = f.colspan == 1 ? 0 : l - o.colCount(d);
    if (f.colwidth && f.colwidth[h] == t)
      continue;
    const p = f.colwidth ? f.colwidth.slice() : nb(f.colspan);
    p[h] = t, a.setNodeMarkup(s + d, null, { ...f, colwidth: p });
  }
  a.docChanged && n.dispatch(a);
}
function tb(n, e, t, r) {
  const i = n.state.doc.resolve(e), o = i.node(-1), s = i.start(-1), l = oe.get(o).colCount(i.pos - s) + i.nodeAfter.attrs.colspan - 1;
  let a = n.domAtPos(i.start(-1)).node;
  for (; a && a.nodeName != "TABLE"; )
    a = a.parentNode;
  a && Gs(
    o,
    a.firstChild,
    a,
    r,
    l,
    t
  );
}
function nb(n) {
  return Array(n).fill(0);
}
function rb(n, e) {
  const t = [], r = n.doc.resolve(e), i = r.node(-1);
  if (!i)
    return ee.empty;
  const o = oe.get(i), s = r.start(-1), l = o.colCount(r.pos - s) + r.nodeAfter.attrs.colspan - 1;
  for (let a = 0; a < o.height; a++) {
    const c = l + a * o.width;
    if ((l == o.width - 1 || o.map[c] != o.map[c + 1]) && (a == 0 || o.map[c] != o.map[c - o.width])) {
      const u = o.map[c], d = s + u + i.nodeAt(u).nodeSize - 1, f = document.createElement("div");
      f.className = "column-resize-handle", t.push(xe.widget(d, f));
    }
  }
  return ee.create(n.doc, t);
}
function mt(n) {
  const e = n.selection, t = Bo(n), r = t.node(-1), i = t.start(-1), o = oe.get(r);
  return { ...e instanceof Z ? o.rectBetween(
    e.$anchorCell.pos - i,
    e.$headCell.pos - i
  ) : o.findCell(t.pos - i), tableStart: i, map: o, table: r };
}
function Fd(n, { map: e, tableStart: t, table: r }, i) {
  let o = i > 0 ? -1 : 0;
  N0(e, r, i + o) && (o = i == 0 || i == e.width ? null : 0);
  for (let s = 0; s < e.height; s++) {
    const l = s * e.width + i;
    if (i > 0 && i < e.width && e.map[l - 1] == e.map[l]) {
      const a = e.map[l], c = r.nodeAt(a);
      n.setNodeMarkup(
        n.mapping.map(t + a),
        null,
        Ld(c.attrs, i - e.colCount(a))
      ), s += c.attrs.rowspan - 1;
    } else {
      const a = o == null ? Se(r.type.schema).cell : r.nodeAt(e.map[l + o]).type, c = e.positionAt(s, i, r);
      n.insert(n.mapping.map(t + c), a.createAndFill());
    }
  }
  return n;
}
function ib(n, e) {
  if (!nt(n))
    return !1;
  if (e) {
    const t = mt(n);
    e(Fd(n.tr, t, t.left));
  }
  return !0;
}
function ob(n, e) {
  if (!nt(n))
    return !1;
  if (e) {
    const t = mt(n);
    e(Fd(n.tr, t, t.right));
  }
  return !0;
}
function sb(n, { map: e, table: t, tableStart: r }, i) {
  const o = n.mapping.maps.length;
  for (let s = 0; s < e.height; ) {
    const l = s * e.width + i, a = e.map[l], c = t.nodeAt(a), u = c.attrs;
    if (i > 0 && e.map[l - 1] == a || i < e.width - 1 && e.map[l + 1] == a)
      n.setNodeMarkup(
        n.mapping.slice(o).map(r + a),
        null,
        wn(u, i - e.colCount(a))
      );
    else {
      const d = n.mapping.slice(o).map(r + a);
      n.delete(d, d + c.nodeSize);
    }
    s += u.rowspan;
  }
}
function lb(n, e) {
  if (!nt(n))
    return !1;
  if (e) {
    const t = mt(n), r = n.tr;
    if (t.left == 0 && t.right == t.map.width)
      return !1;
    for (let i = t.right - 1; sb(r, t, i), i != t.left; i--) {
      const o = t.tableStart ? r.doc.nodeAt(t.tableStart - 1) : r.doc;
      if (!o)
        throw RangeError("No table found");
      t.table = o, t.map = oe.get(o);
    }
    e(r);
  }
  return !0;
}
function ab(n, e, t) {
  var r;
  const i = Se(e.type.schema).header_cell;
  for (let o = 0; o < n.width; o++)
    if (((r = e.nodeAt(n.map[o + t * n.width])) == null ? void 0 : r.type) != i)
      return !1;
  return !0;
}
function Vd(n, { map: e, tableStart: t, table: r }, i) {
  var o;
  let s = t;
  for (let c = 0; c < i; c++)
    s += r.child(c).nodeSize;
  const l = [];
  let a = i > 0 ? -1 : 0;
  ab(e, r, i + a) && (a = i == 0 || i == e.height ? null : 0);
  for (let c = 0, u = e.width * i; c < e.width; c++, u++)
    if (i > 0 && i < e.height && e.map[u] == e.map[u - e.width]) {
      const d = e.map[u], f = r.nodeAt(d).attrs;
      n.setNodeMarkup(t + d, null, {
        ...f,
        rowspan: f.rowspan + 1
      }), c += f.colspan - 1;
    } else {
      const d = a == null ? Se(r.type.schema).cell : (o = r.nodeAt(e.map[u + a * e.width])) == null ? void 0 : o.type, f = d == null ? void 0 : d.createAndFill();
      f && l.push(f);
    }
  return n.insert(s, Se(r.type.schema).row.create(null, l)), n;
}
function cb(n, e) {
  if (!nt(n))
    return !1;
  if (e) {
    const t = mt(n);
    e(Vd(n.tr, t, t.top));
  }
  return !0;
}
function ub(n, e) {
  if (!nt(n))
    return !1;
  if (e) {
    const t = mt(n);
    e(Vd(n.tr, t, t.bottom));
  }
  return !0;
}
function db(n, { map: e, table: t, tableStart: r }, i) {
  let o = 0;
  for (let c = 0; c < i; c++)
    o += t.child(c).nodeSize;
  const s = o + t.child(i).nodeSize, l = n.mapping.maps.length;
  n.delete(o + r, s + r);
  const a = /* @__PURE__ */ new Set();
  for (let c = 0, u = i * e.width; c < e.width; c++, u++) {
    const d = e.map[u];
    if (!a.has(d)) {
      if (a.add(d), i > 0 && d == e.map[u - e.width]) {
        const f = t.nodeAt(d).attrs;
        n.setNodeMarkup(n.mapping.slice(l).map(d + r), null, {
          ...f,
          rowspan: f.rowspan - 1
        }), c += f.colspan - 1;
      } else if (i < e.height && d == e.map[u + e.width]) {
        const f = t.nodeAt(d), h = f.attrs, p = f.type.create(
          { ...h, rowspan: f.attrs.rowspan - 1 },
          f.content
        ), g = e.positionAt(i + 1, c, t);
        n.insert(n.mapping.slice(l).map(r + g), p), c += h.colspan - 1;
      }
    }
  }
}
function fb(n, e) {
  if (!nt(n))
    return !1;
  if (e) {
    const t = mt(n), r = n.tr;
    if (t.top == 0 && t.bottom == t.map.height)
      return !1;
    for (let i = t.bottom - 1; db(r, t, i), i != t.top; i--) {
      const o = t.tableStart ? r.doc.nodeAt(t.tableStart - 1) : r.doc;
      if (!o)
        throw RangeError("No table found");
      t.table = o, t.map = oe.get(t.table);
    }
    e(r);
  }
  return !0;
}
function uc(n) {
  const e = n.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function hb({ width: n, height: e, map: t }, r) {
  let i = r.top * n + r.left, o = i, s = (r.bottom - 1) * n + r.left, l = i + (r.right - r.left - 1);
  for (let a = r.top; a < r.bottom; a++) {
    if (r.left > 0 && t[o] == t[o - 1] || r.right < n && t[l] == t[l + 1])
      return !0;
    o += n, l += n;
  }
  for (let a = r.left; a < r.right; a++) {
    if (r.top > 0 && t[i] == t[i - n] || r.bottom < e && t[s] == t[s + n])
      return !0;
    i++, s++;
  }
  return !1;
}
function dc(n, e) {
  const t = n.selection;
  if (!(t instanceof Z) || t.$anchorCell.pos == t.$headCell.pos)
    return !1;
  const r = mt(n), { map: i } = r;
  if (hb(i, r))
    return !1;
  if (e) {
    const o = n.tr, s = {};
    let l = S.empty, a, c;
    for (let u = r.top; u < r.bottom; u++)
      for (let d = r.left; d < r.right; d++) {
        const f = i.map[u * i.width + d], h = r.table.nodeAt(f);
        if (!(s[f] || !h))
          if (s[f] = !0, a == null)
            a = f, c = h;
          else {
            uc(h) || (l = l.append(h.content));
            const p = o.mapping.map(f + r.tableStart);
            o.delete(p, p + h.nodeSize);
          }
      }
    if (a == null || c == null)
      return !0;
    if (o.setNodeMarkup(a + r.tableStart, null, {
      ...Ld(
        c.attrs,
        c.attrs.colspan,
        r.right - r.left - c.attrs.colspan
      ),
      rowspan: r.bottom - r.top
    }), l.size) {
      const u = a + 1 + c.content.size, d = uc(c) ? a + 1 : u;
      o.replaceWith(d + r.tableStart, u + r.tableStart, l);
    }
    o.setSelection(
      new Z(o.doc.resolve(a + r.tableStart))
    ), e(o);
  }
  return !0;
}
function fc(n, e) {
  const t = Se(n.schema);
  return pb(({ node: r }) => t[r.type.spec.tableRole])(n, e);
}
function pb(n) {
  return (e, t) => {
    var r;
    const i = e.selection;
    let o, s;
    if (i instanceof Z) {
      if (i.$anchorCell.pos != i.$headCell.pos)
        return !1;
      o = i.$anchorCell.nodeAfter, s = i.$anchorCell.pos;
    } else {
      if (o = E0(i.$from), !o)
        return !1;
      s = (r = rr(i.$from)) == null ? void 0 : r.pos;
    }
    if (o == null || s == null || o.attrs.colspan == 1 && o.attrs.rowspan == 1)
      return !1;
    if (t) {
      let l = o.attrs;
      const a = [], c = l.colwidth;
      l.rowspan > 1 && (l = { ...l, rowspan: 1 }), l.colspan > 1 && (l = { ...l, colspan: 1 });
      const u = mt(e), d = e.tr;
      for (let h = 0; h < u.right - u.left; h++)
        a.push(
          c ? {
            ...l,
            colwidth: c && c[h] ? [c[h]] : null
          } : l
        );
      let f;
      for (let h = u.top; h < u.bottom; h++) {
        let p = u.map.positionAt(h, u.left, u.table);
        h == u.top && (p += o.nodeSize);
        for (let g = u.left, y = 0; g < u.right; g++, y++)
          g == u.left && h == u.top || d.insert(
            f = d.mapping.map(p + u.tableStart, 1),
            n({ node: o, row: h, col: g }).createAndFill(a[y])
          );
      }
      d.setNodeMarkup(
        s,
        n({ node: o, row: u.top, col: u.left }),
        a[0]
      ), i instanceof Z && d.setSelection(
        new Z(
          d.doc.resolve(i.$anchorCell.pos),
          f ? d.doc.resolve(f) : void 0
        )
      ), t(d);
    }
    return !0;
  };
}
function mb(n, e) {
  return function(t, r) {
    if (!nt(t))
      return !1;
    const i = Bo(t);
    if (i.nodeAfter.attrs[n] === e)
      return !1;
    if (r) {
      const o = t.tr;
      t.selection instanceof Z ? t.selection.forEachCell((s, l) => {
        s.attrs[n] !== e && o.setNodeMarkup(l, null, {
          ...s.attrs,
          [n]: e
        });
      }) : o.setNodeMarkup(i.pos, null, {
        ...i.nodeAfter.attrs,
        [n]: e
      }), r(o);
    }
    return !0;
  };
}
function gb(n) {
  return function(e, t) {
    if (!nt(e))
      return !1;
    if (t) {
      const r = Se(e.schema), i = mt(e), o = e.tr, s = i.map.cellsInRect(
        n == "column" ? {
          left: i.left,
          top: 0,
          right: i.right,
          bottom: i.map.height
        } : n == "row" ? {
          left: 0,
          top: i.top,
          right: i.map.width,
          bottom: i.bottom
        } : i
      ), l = s.map((a) => i.table.nodeAt(a));
      for (let a = 0; a < s.length; a++)
        l[a].type == r.header_cell && o.setNodeMarkup(
          i.tableStart + s[a],
          r.cell,
          l[a].attrs
        );
      if (o.steps.length == 0)
        for (let a = 0; a < s.length; a++)
          o.setNodeMarkup(
            i.tableStart + s[a],
            r.header_cell,
            l[a].attrs
          );
      t(o);
    }
    return !0;
  };
}
function hc(n, e, t) {
  const r = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: n == "row" ? e.map.width : 1,
    bottom: n == "column" ? e.map.height : 1
  });
  for (let i = 0; i < r.length; i++) {
    const o = e.table.nodeAt(r[i]);
    if (o && o.type !== t.header_cell)
      return !1;
  }
  return !0;
}
function Lr(n, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? gb(n) : function(t, r) {
    if (!nt(t))
      return !1;
    if (r) {
      const i = Se(t.schema), o = mt(t), s = t.tr, l = hc("row", o, i), a = hc(
        "column",
        o,
        i
      ), u = (n === "column" ? l : n === "row" ? a : !1) ? 1 : 0, d = n == "column" ? {
        left: 0,
        top: u,
        right: 1,
        bottom: o.map.height
      } : n == "row" ? {
        left: u,
        top: 0,
        right: o.map.width,
        bottom: 1
      } : o, f = n == "column" ? a ? i.cell : i.header_cell : n == "row" ? l ? i.cell : i.header_cell : i.cell;
      o.map.cellsInRect(d).forEach((h) => {
        const p = h + o.tableStart, g = s.doc.nodeAt(p);
        g && s.setNodeMarkup(p, f, g.attrs);
      }), r(s);
    }
    return !0;
  };
}
Lr("row", {
  useDeprecatedLogic: !0
});
Lr("column", {
  useDeprecatedLogic: !0
});
var yb = Lr("cell", {
  useDeprecatedLogic: !0
});
function bb(n, e) {
  if (e < 0) {
    const t = n.nodeBefore;
    if (t)
      return n.pos - t.nodeSize;
    for (let r = n.index(-1) - 1, i = n.before(); r >= 0; r--) {
      const o = n.node(-1).child(r), s = o.lastChild;
      if (s)
        return i - 1 - s.nodeSize;
      i -= o.nodeSize;
    }
  } else {
    if (n.index() < n.parent.childCount - 1)
      return n.pos + n.nodeAfter.nodeSize;
    const t = n.node(-1);
    for (let r = n.indexAfter(-1), i = n.after(); r < t.childCount; r++) {
      const o = t.child(r);
      if (o.childCount)
        return i + 1;
      i += o.nodeSize;
    }
  }
  return null;
}
function pc(n) {
  return function(e, t) {
    if (!nt(e))
      return !1;
    const r = bb(Bo(e), n);
    if (r == null)
      return !1;
    if (t) {
      const i = e.doc.resolve(r);
      t(
        e.tr.setSelection(I.between(i, A0(i))).scrollIntoView()
      );
    }
    return !0;
  };
}
function vb(n, e) {
  const t = n.selection.$anchor;
  for (let r = t.depth; r > 0; r--)
    if (t.node(r).type.spec.tableRole == "table")
      return e && e(
        n.tr.delete(t.before(r), t.after(r)).scrollIntoView()
      ), !0;
  return !1;
}
function wb({
  allowTableNodeSelection: n = !1
} = {}) {
  return new se({
    key: zt,
    // This piece of state is used to remember when a mouse-drag
    // cell-selection is happening, so that it can continue even as
    // transactions (which might move its anchor cell) come in.
    state: {
      init() {
        return null;
      },
      apply(e, t) {
        const r = e.getMeta(zt);
        if (r != null)
          return r == -1 ? null : r;
        if (t == null || !e.docChanged)
          return t;
        const { deleted: i, pos: o } = e.mapping.mapResult(t);
        return i ? null : o;
      }
    },
    props: {
      decorations: R0,
      handleDOMEvents: {
        mousedown: U0
      },
      createSelectionBetween(e) {
        return zt.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: W0,
      handleKeyDown: j0,
      handlePaste: _0
    },
    appendTransaction(e, t, r) {
      return P0(
        r,
        Hd(r, t),
        n
      );
    }
  });
}
function mc(n, e, t, r, i, o) {
  let s = 0, l = !0, a = e.firstChild;
  const c = n.firstChild;
  for (let u = 0, d = 0; u < c.childCount; u += 1) {
    const { colspan: f, colwidth: h } = c.child(u).attrs;
    for (let p = 0; p < f; p += 1, d += 1) {
      const g = i === d ? o : h && h[p], y = g ? `${g}px` : "";
      s += g || r, g || (l = !1), a ? (a.style.width !== y && (a.style.width = y), a = a.nextSibling) : e.appendChild(document.createElement("col")).style.width = y;
    }
  }
  for (; a; ) {
    const u = a.nextSibling;
    a.parentNode.removeChild(a), a = u;
  }
  l ? (t.style.width = `${s}px`, t.style.minWidth = "") : (t.style.width = "", t.style.minWidth = `${s}px`);
}
class kb {
  constructor(e, t) {
    this.node = e, this.cellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.colgroup = this.table.appendChild(document.createElement("colgroup")), mc(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type !== this.node.type ? !1 : (this.node = e, mc(e, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type === "attributes" && (e.target === this.table || this.colgroup.contains(e.target));
  }
}
function Cb(n, e, t, r) {
  let i = 0, o = !0;
  const s = [], l = n.firstChild;
  if (!l)
    return {};
  for (let d = 0, f = 0; d < l.childCount; d += 1) {
    const { colspan: h, colwidth: p } = l.child(d).attrs;
    for (let g = 0; g < h; g += 1, f += 1) {
      const y = t === f ? r : p && p[g], v = y ? `${y}px` : "";
      i += y || e, y || (o = !1), s.push(["col", v ? { style: `width: ${v}` } : {}]);
    }
  }
  const a = o ? `${i}px` : "", c = o ? "" : `${i}px`;
  return { colgroup: ["colgroup", {}, ...s], tableWidth: a, tableMinWidth: c };
}
function gc(n, e) {
  return n.createAndFill();
}
function xb(n) {
  if (n.cached.tableNodeTypes)
    return n.cached.tableNodeTypes;
  const e = {};
  return Object.keys(n.nodes).forEach((t) => {
    const r = n.nodes[t];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), n.cached.tableNodeTypes = e, e;
}
function Sb(n, e, t, r, i) {
  const o = xb(n), s = [], l = [];
  for (let c = 0; c < t; c += 1) {
    const u = gc(o.cell);
    if (u && l.push(u), r) {
      const d = gc(o.header_cell);
      d && s.push(d);
    }
  }
  const a = [];
  for (let c = 0; c < e; c += 1)
    a.push(o.row.createChecked(null, r && c === 0 ? s : l));
  return o.table.createChecked(null, a);
}
function Tb(n) {
  return n instanceof Z;
}
const mi = ({ editor: n }) => {
  const { selection: e } = n.state;
  if (!Tb(e))
    return !1;
  let t = 0;
  const r = kd(e.ranges[0].$from, (o) => o.type.name === "table");
  return r == null || r.node.descendants((o) => {
    if (o.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(o.type.name) && (t += 1);
  }), t === e.ranges.length ? (n.commands.deleteTable(), !0) : !1;
}, Mb = re.create({
  name: "table",
  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: !1,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: kb,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1
    };
  },
  content: "tableRow+",
  tableRole: "table",
  isolating: !0,
  group: "block",
  parseHTML() {
    return [{ tag: "table" }];
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    const { colgroup: t, tableWidth: r, tableMinWidth: i } = Cb(n, this.options.cellMinWidth);
    return [
      "table",
      U(this.options.HTMLAttributes, e, {
        style: r ? `width: ${r}` : `min-width: ${i}`
      }),
      t,
      ["tbody", 0]
    ];
  },
  addCommands() {
    return {
      insertTable: ({ rows: n = 3, cols: e = 3, withHeaderRow: t = !0 } = {}) => ({ tr: r, dispatch: i, editor: o }) => {
        const s = Sb(o.schema, n, e, t);
        if (i) {
          const l = r.selection.from + 1;
          r.replaceSelectionWith(s).scrollIntoView().setSelection(I.near(r.doc.resolve(l)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: n, dispatch: e }) => ib(n, e),
      addColumnAfter: () => ({ state: n, dispatch: e }) => ob(n, e),
      deleteColumn: () => ({ state: n, dispatch: e }) => lb(n, e),
      addRowBefore: () => ({ state: n, dispatch: e }) => cb(n, e),
      addRowAfter: () => ({ state: n, dispatch: e }) => ub(n, e),
      deleteRow: () => ({ state: n, dispatch: e }) => fb(n, e),
      deleteTable: () => ({ state: n, dispatch: e }) => vb(n, e),
      mergeCells: () => ({ state: n, dispatch: e }) => dc(n, e),
      splitCell: () => ({ state: n, dispatch: e }) => fc(n, e),
      toggleHeaderColumn: () => ({ state: n, dispatch: e }) => Lr("column")(n, e),
      toggleHeaderRow: () => ({ state: n, dispatch: e }) => Lr("row")(n, e),
      toggleHeaderCell: () => ({ state: n, dispatch: e }) => yb(n, e),
      mergeOrSplit: () => ({ state: n, dispatch: e }) => dc(n, e) ? !0 : fc(n, e),
      setCellAttribute: (n, e) => ({ state: t, dispatch: r }) => mb(n, e)(t, r),
      goToNextCell: () => ({ state: n, dispatch: e }) => pc(1)(n, e),
      goToPreviousCell: () => ({ state: n, dispatch: e }) => pc(-1)(n, e),
      fixTables: () => ({ state: n, dispatch: e }) => (e && Hd(n), !0),
      setCellSelection: (n) => ({ tr: e, dispatch: t }) => {
        if (t) {
          const r = Z.create(e.doc, n.anchorCell, n.headCell);
          e.setSelection(r);
        }
        return !0;
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
      "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
      Backspace: mi,
      "Mod-Backspace": mi,
      Delete: mi,
      "Mod-Delete": mi
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        q0({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      wb({
        allowTableNodeSelection: this.options.allowTableNodeSelection
      })
    ];
  },
  extendNodeSchema(n) {
    const e = {
      name: n.name,
      options: n.options,
      storage: n.storage
    };
    return {
      tableRole: F(A(n, "tableRole", e))
    };
  }
}), Eb = re.create({
  name: "tableCell",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (n) => {
          const e = n.getAttribute("colwidth");
          return e ? [parseInt(e, 10)] : null;
        }
      }
    };
  },
  tableRole: "cell",
  isolating: !0,
  parseHTML() {
    return [
      { tag: "td" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["td", U(this.options.HTMLAttributes, n), 0];
  }
}), Ob = re.create({
  name: "tableHeader",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (n) => {
          const e = n.getAttribute("colwidth");
          return e ? [parseInt(e, 10)] : null;
        }
      }
    };
  },
  tableRole: "header_cell",
  isolating: !0,
  parseHTML() {
    return [
      { tag: "th" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["th", U(this.options.HTMLAttributes, n), 0];
  }
}), Ab = re.create({
  name: "tableRow",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [
      { tag: "tr" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["tr", U(this.options.HTMLAttributes, n), 0];
  }
}), Nb = qe.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "u"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n) => n.includes("underline") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["u", U(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setUnderline: () => ({ commands: n }) => n.setMark(this.name),
      toggleUnderline: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetUnderline: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
}), Db = /^(https?:\/\/)?(www\.|music\.)?(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(?!channel\/)(?!@)(.+)?$/, Rb = /^(https?:\/\/)?(www\.|music\.)?(youtube\.com|youtu\.be)\/(?!channel\/)(?!@)(.+)?$/g, jd = (n) => n.match(Db), yc = (n) => n ? "https://www.youtube-nocookie.com/embed/" : "https://www.youtube.com/embed/", Ib = (n) => {
  const { url: e, allowFullscreen: t, autoplay: r, ccLanguage: i, ccLoadPolicy: o, controls: s, disableKBcontrols: l, enableIFrameApi: a, endTime: c, interfaceLanguage: u, ivLoadPolicy: d, loop: f, modestBranding: h, nocookie: p, origin: g, playlist: y, progressBarColor: v, startAt: w } = n;
  if (!jd(e))
    return null;
  if (e.includes("/embed/"))
    return e;
  if (e.includes("youtu.be")) {
    const O = e.split("/").pop();
    return O ? `${yc(p)}${O}` : null;
  }
  const m = /(?:v=|shorts\/)([-\w]+)/gm.exec(e);
  if (!m || !m[1])
    return null;
  let C = `${yc(p)}${m[1]}`;
  const b = [];
  return t === !1 && b.push("fs=0"), r && b.push("autoplay=1"), i && b.push(`cc_lang_pref=${i}`), o && b.push("cc_load_policy=1"), s || b.push("controls=0"), l && b.push("disablekb=1"), a && b.push("enablejsapi=1"), c && b.push(`end=${c}`), u && b.push(`hl=${u}`), d && b.push(`iv_load_policy=${d}`), f && b.push("loop=1"), h && b.push("modestbranding=1"), g && b.push(`origin=${g}`), y && b.push(`playlist=${y}`), w && b.push(`start=${w}`), v && b.push(`color=${v}`), b.length && (C += `?${b.join("&")}`), C;
}, Lb = re.create({
  name: "youtube",
  addOptions() {
    return {
      addPasteHandler: !0,
      allowFullscreen: !0,
      autoplay: !1,
      ccLanguage: void 0,
      ccLoadPolicy: void 0,
      controls: !0,
      disableKBcontrols: !1,
      enableIFrameApi: !1,
      endTime: 0,
      height: 480,
      interfaceLanguage: void 0,
      ivLoadPolicy: 0,
      loop: !1,
      modestBranding: !1,
      HTMLAttributes: {},
      inline: !1,
      nocookie: !1,
      origin: "",
      playlist: "",
      progressBarColor: void 0,
      width: 640
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      start: {
        default: 0
      },
      width: {
        default: this.options.width
      },
      height: {
        default: this.options.height
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-youtube-video] iframe"
      }
    ];
  },
  addCommands() {
    return {
      setYoutubeVideo: (n) => ({ commands: e }) => jd(n.src) ? e.insertContent({
        type: this.name,
        attrs: n
      }) : !1
    };
  },
  addPasteRules() {
    return this.options.addPasteHandler ? [
      Gy({
        find: Rb,
        type: this.type,
        getAttributes: (n) => ({ src: n.input })
      })
    ] : [];
  },
  renderHTML({ HTMLAttributes: n }) {
    const e = Ib({
      url: n.src,
      allowFullscreen: this.options.allowFullscreen,
      autoplay: this.options.autoplay,
      ccLanguage: this.options.ccLanguage,
      ccLoadPolicy: this.options.ccLoadPolicy,
      controls: this.options.controls,
      disableKBcontrols: this.options.disableKBcontrols,
      enableIFrameApi: this.options.enableIFrameApi,
      endTime: this.options.endTime,
      interfaceLanguage: this.options.interfaceLanguage,
      ivLoadPolicy: this.options.ivLoadPolicy,
      loop: this.options.loop,
      modestBranding: this.options.modestBranding,
      nocookie: this.options.nocookie,
      origin: this.options.origin,
      playlist: this.options.playlist,
      progressBarColor: this.options.progressBarColor,
      startAt: n.start || 0
    });
    return n.src = e, [
      "div",
      { "data-youtube-video": "" },
      [
        "iframe",
        U(this.options.HTMLAttributes, {
          width: this.options.width,
          height: this.options.height,
          allowfullscreen: this.options.allowFullscreen,
          autoplay: this.options.autoplay,
          ccLanguage: this.options.ccLanguage,
          ccLoadPolicy: this.options.ccLoadPolicy,
          disableKBcontrols: this.options.disableKBcontrols,
          enableIFrameApi: this.options.enableIFrameApi,
          endTime: this.options.endTime,
          interfaceLanguage: this.options.interfaceLanguage,
          ivLoadPolicy: this.options.ivLoadPolicy,
          loop: this.options.loop,
          modestBranding: this.options.modestBranding,
          origin: this.options.origin,
          playlist: this.options.playlist,
          progressBarColor: this.options.progressBarColor
        }, n)
      ]
    ];
  }
}), Wd = re.create({
  name: "doc",
  topNode: !0,
  content: "block+"
});
function Pb(n) {
  var e;
  const { char: t, allowSpaces: r, allowedPrefixes: i, startOfLine: o, $position: s } = n, l = Jy(t), a = new RegExp(`\\s${l}$`), c = o ? "^" : "", u = r ? new RegExp(`${c}${l}.*?(?=\\s${l}|$)`, "gm") : new RegExp(`${c}(?:^)?${l}[^\\s${l}]*`, "gm"), d = ((e = s.nodeBefore) === null || e === void 0 ? void 0 : e.isText) && s.nodeBefore.text;
  if (!d)
    return null;
  const f = s.pos - d.length, h = Array.from(d.matchAll(u)).pop();
  if (!h || h.input === void 0 || h.index === void 0)
    return null;
  const p = h.input.slice(Math.max(0, h.index - 1), h.index), g = new RegExp(`^[${i == null ? void 0 : i.join("")}\0]?$`).test(p);
  if (i !== null && !g)
    return null;
  const y = f + h.index;
  let v = y + h[0].length;
  return r && a.test(d.slice(v - 1, v + 1)) && (h[0] += " ", v += 1), y < s.pos && v >= s.pos ? {
    range: {
      from: y,
      to: v
    },
    query: h[0].slice(t.length),
    text: h[0]
  } : null;
}
const Bb = new ae("suggestion");
function Hb({ pluginKey: n = Bb, editor: e, char: t = "@", allowSpaces: r = !1, allowedPrefixes: i = [" "], startOfLine: o = !1, decorationTag: s = "span", decorationClass: l = "suggestion", command: a = () => null, items: c = () => [], render: u = () => ({}), allow: d = () => !0, findSuggestionMatch: f = Pb }) {
  let h;
  const p = u == null ? void 0 : u(), g = new se({
    key: n,
    view() {
      return {
        update: async (y, v) => {
          var w, k, m, C, b, O, H;
          const E = (w = this.key) === null || w === void 0 ? void 0 : w.getState(v), B = (k = this.key) === null || k === void 0 ? void 0 : k.getState(y.state), _ = E.active && B.active && E.range.from !== B.range.from, K = !E.active && B.active, q = E.active && !B.active, ce = !K && !q && E.query !== B.query, te = K, Q = ce || _, X = q;
          if (!te && !Q && !X)
            return;
          const J = X && !te ? E : B, Be = y.dom.querySelector(`[data-decoration-id="${J.decorationId}"]`);
          h = {
            editor: e,
            range: J.range,
            query: J.query,
            text: J.text,
            items: [],
            command: (ve) => a({
              editor: e,
              range: J.range,
              props: ve
            }),
            decorationNode: Be,
            // virtual node for popper.js or tippy.js
            // this can be used for building popups without a DOM node
            clientRect: Be ? () => {
              var ve;
              const { decorationId: gt } = (ve = this.key) === null || ve === void 0 ? void 0 : ve.getState(e.state), Ne = y.dom.querySelector(`[data-decoration-id="${gt}"]`);
              return (Ne == null ? void 0 : Ne.getBoundingClientRect()) || null;
            } : null
          }, te && ((m = p == null ? void 0 : p.onBeforeStart) === null || m === void 0 || m.call(p, h)), Q && ((C = p == null ? void 0 : p.onBeforeUpdate) === null || C === void 0 || C.call(p, h)), (Q || te) && (h.items = await c({
            editor: e,
            query: J.query
          })), X && ((b = p == null ? void 0 : p.onExit) === null || b === void 0 || b.call(p, h)), Q && ((O = p == null ? void 0 : p.onUpdate) === null || O === void 0 || O.call(p, h)), te && ((H = p == null ? void 0 : p.onStart) === null || H === void 0 || H.call(p, h));
        },
        destroy: () => {
          var y;
          h && ((y = p == null ? void 0 : p.onExit) === null || y === void 0 || y.call(p, h));
        }
      };
    },
    state: {
      // Initialize the plugin's internal state.
      init() {
        return {
          active: !1,
          range: {
            from: 0,
            to: 0
          },
          query: null,
          text: null,
          composing: !1
        };
      },
      // Apply changes to the plugin state from a view transaction.
      apply(y, v, w, k) {
        const { isEditable: m } = e, { composing: C } = e.view, { selection: b } = y, { empty: O, from: H } = b, E = { ...v };
        if (E.composing = C, m && (O || e.view.composing)) {
          (H < v.range.from || H > v.range.to) && !C && !v.composing && (E.active = !1);
          const B = f({
            char: t,
            allowSpaces: r,
            allowedPrefixes: i,
            startOfLine: o,
            $position: b.$from
          }), _ = `id_${Math.floor(Math.random() * 4294967295)}`;
          B && d({
            editor: e,
            state: k,
            range: B.range,
            isActive: v.active
          }) ? (E.active = !0, E.decorationId = v.decorationId ? v.decorationId : _, E.range = B.range, E.query = B.query, E.text = B.text) : E.active = !1;
        } else
          E.active = !1;
        return E.active || (E.decorationId = null, E.range = { from: 0, to: 0 }, E.query = null, E.text = null), E;
      }
    },
    props: {
      // Call the keydown hook if suggestion is active.
      handleKeyDown(y, v) {
        var w;
        const { active: k, range: m } = g.getState(y.state);
        return k && ((w = p == null ? void 0 : p.onKeyDown) === null || w === void 0 ? void 0 : w.call(p, { view: y, event: v, range: m })) || !1;
      },
      // Setup decorator on the currently active suggestion.
      decorations(y) {
        const { active: v, range: w, decorationId: k } = g.getState(y);
        return v ? ee.create(y.doc, [
          xe.inline(w.from, w.to, {
            nodeName: s,
            class: l,
            "data-decoration-id": k
          })
        ]) : null;
      }
    }
  });
  return g;
}
const zb = new ae("mention"), $b = re.create({
  name: "mention",
  addOptions() {
    return {
      HTMLAttributes: {},
      renderText({ options: n, node: e }) {
        var t;
        return `${n.suggestion.char}${(t = e.attrs.label) !== null && t !== void 0 ? t : e.attrs.id}`;
      },
      deleteTriggerWithBackspace: !1,
      renderHTML({ options: n, node: e }) {
        var t;
        return [
          "span",
          U(this.HTMLAttributes, n.HTMLAttributes),
          `${n.suggestion.char}${(t = e.attrs.label) !== null && t !== void 0 ? t : e.attrs.id}`
        ];
      },
      suggestion: {
        char: "@",
        pluginKey: zb,
        command: ({ editor: n, range: e, props: t }) => {
          var r, i;
          const o = n.view.state.selection.$to.nodeAfter;
          ((r = o == null ? void 0 : o.text) === null || r === void 0 ? void 0 : r.startsWith(" ")) && (e.to += 1), n.chain().focus().insertContentAt(e, [
            {
              type: this.name,
              attrs: t
            },
            {
              type: "text",
              text: " "
            }
          ]).run(), (i = window.getSelection()) === null || i === void 0 || i.collapseToEnd();
        },
        allow: ({ state: n, range: e }) => {
          const t = n.doc.resolve(e.from), r = n.schema.nodes[this.name];
          return !!t.parent.type.contentMatch.matchType(r);
        }
      }
    };
  },
  group: "inline",
  inline: !0,
  selectable: !1,
  atom: !0,
  addAttributes() {
    return {
      id: {
        default: null,
        parseHTML: (n) => n.getAttribute("data-id"),
        renderHTML: (n) => n.id ? {
          "data-id": n.id
        } : {}
      },
      label: {
        default: null,
        parseHTML: (n) => n.getAttribute("data-label"),
        renderHTML: (n) => n.label ? {
          "data-label": n.label
        } : {}
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: `span[data-type="${this.name}"]`
      }
    ];
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    if (this.options.renderLabel !== void 0)
      return console.warn("renderLabel is deprecated use renderText and renderHTML instead"), [
        "span",
        U({ "data-type": this.name }, this.options.HTMLAttributes, e),
        this.options.renderLabel({
          options: this.options,
          node: n
        })
      ];
    const t = { ...this.options };
    t.HTMLAttributes = U({ "data-type": this.name }, this.options.HTMLAttributes, e);
    const r = this.options.renderHTML({
      options: t,
      node: n
    });
    return typeof r == "string" ? [
      "span",
      U({ "data-type": this.name }, this.options.HTMLAttributes, e),
      r
    ] : r;
  },
  renderText({ node: n }) {
    return this.options.renderLabel !== void 0 ? (console.warn("renderLabel is deprecated use renderText and renderHTML instead"), this.options.renderLabel({
      options: this.options,
      node: n
    })) : this.options.renderText({
      options: this.options,
      node: n
    });
  },
  addKeyboardShortcuts() {
    return {
      Backspace: () => this.editor.commands.command(({ tr: n, state: e }) => {
        let t = !1;
        const { selection: r } = e, { empty: i, anchor: o } = r;
        return i ? (e.doc.nodesBetween(o - 1, o, (s, l) => {
          if (s.type.name === this.name)
            return t = !0, n.insertText(this.options.deleteTriggerWithBackspace ? "" : this.options.suggestion.char || "", l, l + s.nodeSize), !1;
        }), t) : !1;
      })
    };
  },
  addProseMirrorPlugins() {
    return [
      Hb({
        editor: this.editor,
        ...this.options.suggestion
      })
    ];
  }
}), Fb = pe.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      mode: "textSize"
    };
  },
  addStorage() {
    return {
      characters: () => 0,
      words: () => 0
    };
  },
  onBeforeCreate() {
    this.storage.characters = (n) => {
      const e = (n == null ? void 0 : n.node) || this.editor.state.doc;
      return ((n == null ? void 0 : n.mode) || this.options.mode) === "textSize" ? e.textBetween(0, e.content.size, void 0, " ").length : e.nodeSize;
    }, this.storage.words = (n) => {
      const e = (n == null ? void 0 : n.node) || this.editor.state.doc;
      return e.textBetween(0, e.content.size, " ", " ").split(" ").filter((i) => i !== "").length;
    };
  },
  addProseMirrorPlugins() {
    return [
      new se({
        key: new ae("characterCount"),
        filterTransaction: (n, e) => {
          const t = this.options.limit;
          if (!n.docChanged || t === 0 || t === null || t === void 0)
            return !0;
          const r = this.storage.characters({ node: e.doc }), i = this.storage.characters({ node: n.doc });
          if (i <= t || r > t && i > t && i <= r)
            return !0;
          if (r > t && i > t && i > r || !n.getMeta("paste"))
            return !1;
          const s = n.selection.$head.pos, l = i - t, a = s - l, c = s;
          return n.deleteRange(a, c), !(this.storage.characters({ node: n.doc }) > t);
        }
      })
    ];
  }
}), _d = re.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["p", U(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: n }) => n.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), Vb = pe.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    return [
      new se({
        key: new ae("placeholder"),
        props: {
          decorations: ({ doc: n, selection: e }) => {
            const t = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: r } = e, i = [];
            if (!t)
              return null;
            const o = this.editor.isEmpty;
            return n.descendants((s, l) => {
              const a = r >= l && r <= l + s.nodeSize, c = !s.isLeaf && xl(s);
              if ((a || !this.options.showOnlyCurrent) && c) {
                const u = [this.options.emptyNodeClass];
                o && u.push(this.options.emptyEditorClass);
                const d = xe.node(l, l + s.nodeSize, {
                  class: u.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: s,
                    pos: l,
                    hasAnchor: a
                  }) : this.options.placeholder
                });
                i.push(d);
              }
              return this.options.includeChildren;
            }), ee.create(n, i);
          }
        }
      })
    ];
  }
}), Ud = re.create({
  name: "text",
  group: "inline"
}), jb = /^\s*>\s$/, Wb = re.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [
      { tag: "blockquote" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["blockquote", U(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: n }) => n.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: n }) => n.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: n }) => n.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      Dr({
        find: jb,
        type: this.type
      })
    ];
  }
}), _b = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, Ub = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, Kb = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, qb = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, Jb = qe.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (n) => n.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight",
        getAttrs: (n) => /^(bold(er)?|[5-9]\d{2,})$/.test(n) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["strong", U(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: n }) => n.setMark(this.name),
      toggleBold: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetBold: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      Gn({
        find: _b,
        type: this.type
      }),
      Gn({
        find: Kb,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      vn({
        find: Ub,
        type: this.type
      }),
      vn({
        find: qb,
        type: this.type
      })
    ];
  }
}), Gb = re.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", U(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), bc = qe.create({
  name: "textStyle",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (n) => n.hasAttribute("style") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["span", U(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ state: n, commands: e }) => {
        const t = Lo(n, this.type);
        return Object.entries(t).some(([, i]) => !!i) ? !0 : e.unsetMark(this.name);
      }
    };
  }
}), vc = /^\s*([-+*])\s$/, Yb = re.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["ul", U(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Gb.name, this.editor.getAttributes(bc.name)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let n = Dr({
      find: vc,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = Dr({
      find: vc,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(bc.name),
      editor: this.editor
    })), [
      n
    ];
  }
}), Xb = /(?:^|\s)(`(?!\s+`)((?:[^`]+))`(?!\s+`))$/, Qb = /(?:^|\s)(`(?!\s+`)((?:[^`]+))`(?!\s+`))/g, Zb = qe.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [
      { tag: "code" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["code", U(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setCode: () => ({ commands: n }) => n.setMark(this.name),
      toggleCode: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetCode: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      Gn({
        find: Xb,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      vn({
        find: Qb,
        type: this.type
      })
    ];
  }
}), ev = /^```([a-z]+)?[\s\n]$/, tv = /^~~~([a-z]+)?[\s\n]$/, nv = re.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: !0,
  defining: !0,
  addAttributes() {
    return {
      language: {
        default: null,
        parseHTML: (n) => {
          var e;
          const { languageClassPrefix: t } = this.options, o = [...((e = n.firstElementChild) === null || e === void 0 ? void 0 : e.classList) || []].filter((s) => s.startsWith(t)).map((s) => s.replace(t, ""))[0];
          return o || null;
        },
        rendered: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [
      "pre",
      U(this.options.HTMLAttributes, e),
      [
        "code",
        {
          class: n.attrs.language ? this.options.languageClassPrefix + n.attrs.language : null
        },
        0
      ]
    ];
  },
  addCommands() {
    return {
      setCodeBlock: (n) => ({ commands: e }) => e.setNode(this.name, n),
      toggleCodeBlock: (n) => ({ commands: e }) => e.toggleNode(this.name, "paragraph", n)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const { empty: n, $anchor: e } = this.editor.state.selection, t = e.pos === 1;
        return !n || e.parent.type.name !== this.name ? !1 : t || !e.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
      },
      // exit node on triple enter
      Enter: ({ editor: n }) => {
        if (!this.options.exitOnTripleEnter)
          return !1;
        const { state: e } = n, { selection: t } = e, { $from: r, empty: i } = t;
        if (!i || r.parent.type !== this.type)
          return !1;
        const o = r.parentOffset === r.parent.nodeSize - 2, s = r.parent.textContent.endsWith(`

`);
        return !o || !s ? !1 : n.chain().command(({ tr: l }) => (l.delete(r.pos - 2, r.pos), !0)).exitCode().run();
      },
      // exit node on arrow down
      ArrowDown: ({ editor: n }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: e } = n, { selection: t, doc: r } = e, { $from: i, empty: o } = t;
        if (!o || i.parent.type !== this.type || !(i.parentOffset === i.parent.nodeSize - 2))
          return !1;
        const l = i.after();
        return l === void 0 ? !1 : r.nodeAt(l) ? n.commands.command(({ tr: c }) => (c.setSelection(L.near(r.resolve(l))), !0)) : n.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      Hs({
        find: ev,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      }),
      Hs({
        find: tv,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      // this plugin creates a code block for pasted content from VS Code
      // we can also detect the copied code language
      new se({
        key: new ae("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (n, e) => {
            if (!e.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const t = e.clipboardData.getData("text/plain"), r = e.clipboardData.getData("vscode-editor-data"), i = r ? JSON.parse(r) : void 0, o = i == null ? void 0 : i.mode;
            if (!t || !o)
              return !1;
            const { tr: s, schema: l } = n.state, a = l.text(t.replace(/\r\n?/g, `
`));
            return s.replaceSelectionWith(this.type.create({ language: o }, a)), s.selection.$from.parent.type !== this.type && s.setSelection(I.near(s.doc.resolve(Math.max(0, s.selection.from - 2)))), s.setMeta("paste", !0), n.dispatch(s), !0;
          }
        }
      })
    ];
  }
});
function rv(n = {}) {
  return new se({
    view(e) {
      return new iv(e, n);
    }
  });
}
class iv {
  constructor(e, t) {
    var r;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = t.width) !== null && r !== void 0 ? r : 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((i) => {
      let o = (s) => {
        this[i](s);
      };
      return e.dom.addEventListener(i, o), { name: i, handler: o };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: t }) => this.editorView.dom.removeEventListener(e, t));
  }
  update(e, t) {
    this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), t = !e.parent.inlineContent, r;
    if (t) {
      let l = e.nodeBefore, a = e.nodeAfter;
      if (l || a) {
        let c = this.editorView.nodeDOM(this.cursorPos - (l ? l.nodeSize : 0));
        if (c) {
          let u = c.getBoundingClientRect(), d = l ? u.bottom : u.top;
          l && a && (d = (d + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2), r = { left: u.left, right: u.right, top: d - this.width / 2, bottom: d + this.width / 2 };
        }
      }
    }
    if (!r) {
      let l = this.editorView.coordsAtPos(this.cursorPos);
      r = { left: l.left - this.width / 2, right: l.left + this.width / 2, top: l.top, bottom: l.bottom };
    }
    let i = this.editorView.dom.offsetParent;
    this.element || (this.element = i.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
    let o, s;
    if (!i || i == document.body && getComputedStyle(i).position == "static")
      o = -pageXOffset, s = -pageYOffset;
    else {
      let l = i.getBoundingClientRect();
      o = l.left - i.scrollLeft, s = l.top - i.scrollTop;
    }
    this.element.style.left = r.left - o + "px", this.element.style.top = r.top - s + "px", this.element.style.width = r.right - r.left + "px", this.element.style.height = r.bottom - r.top + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let t = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), r = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), i = r && r.type.spec.disableDropCursor, o = typeof i == "function" ? i(this.editorView, t, e) : i;
    if (t && !o) {
      let s = t.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = vu(this.editorView.state.doc, s, this.editorView.dragging.slice);
        l != null && (s = l);
      }
      this.setCursor(s), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    (e.target == this.editorView.dom || !this.editorView.dom.contains(e.relatedTarget)) && this.setCursor(null);
  }
}
const ov = pe.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      rv(this.options)
    ];
  }
});
class ie extends L {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    return ie.valid(r) ? new ie(r) : L.near(r);
  }
  content() {
    return M.empty;
  }
  eq(e) {
    return e instanceof ie && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new ie(e.resolve(t.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new Rl(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let t = e.parent;
    if (t.isTextblock || !sv(e) || !lv(e))
      return !1;
    let r = t.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let i = t.contentMatchAt(e.index()).defaultType;
    return i && i.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, t, r = !1) {
    e: for (; ; ) {
      if (!r && ie.valid(e))
        return e;
      let i = e.pos, o = null;
      for (let s = e.depth; ; s--) {
        let l = e.node(s);
        if (t > 0 ? e.indexAfter(s) < l.childCount : e.index(s) > 0) {
          o = l.child(t > 0 ? e.indexAfter(s) : e.index(s) - 1);
          break;
        } else if (s == 0)
          return null;
        i += t;
        let a = e.doc.resolve(i);
        if (ie.valid(a))
          return a;
      }
      for (; ; ) {
        let s = t > 0 ? o.firstChild : o.lastChild;
        if (!s) {
          if (o.isAtom && !o.isText && !D.isSelectable(o)) {
            e = e.doc.resolve(i + o.nodeSize * t), r = !1;
            continue e;
          }
          break;
        }
        o = s, i += t;
        let l = e.doc.resolve(i);
        if (ie.valid(l))
          return l;
      }
      return null;
    }
  }
}
ie.prototype.visible = !1;
ie.findFrom = ie.findGapCursorFrom;
L.jsonID("gapcursor", ie);
class Rl {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new Rl(e.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    return ie.valid(t) ? new ie(t) : L.near(t);
  }
}
function sv(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.index(e), r = n.node(e);
    if (t == 0) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t - 1); ; i = i.lastChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function lv(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.indexAfter(e), r = n.node(e);
    if (t == r.childCount) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t); ; i = i.firstChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function av() {
  return new se({
    props: {
      decorations: fv,
      createSelectionBetween(n, e, t) {
        return e.pos == t.pos && ie.valid(t) ? new ie(t) : null;
      },
      handleClick: uv,
      handleKeyDown: cv,
      handleDOMEvents: { beforeinput: dv }
    }
  });
}
const cv = pl({
  ArrowLeft: gi("horiz", -1),
  ArrowRight: gi("horiz", 1),
  ArrowUp: gi("vert", -1),
  ArrowDown: gi("vert", 1)
});
function gi(n, e) {
  const t = n == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, i, o) {
    let s = r.selection, l = e > 0 ? s.$to : s.$from, a = s.empty;
    if (s instanceof I) {
      if (!o.endOfTextblock(t) || l.depth == 0)
        return !1;
      a = !1, l = r.doc.resolve(e > 0 ? l.after() : l.before());
    }
    let c = ie.findGapCursorFrom(l, e, a);
    return c ? (i && i(r.tr.setSelection(new ie(c))), !0) : !1;
  };
}
function uv(n, e, t) {
  if (!n || !n.editable)
    return !1;
  let r = n.state.doc.resolve(e);
  if (!ie.valid(r))
    return !1;
  let i = n.posAtCoords({ left: t.clientX, top: t.clientY });
  return i && i.inside > -1 && D.isSelectable(n.state.doc.nodeAt(i.inside)) ? !1 : (n.dispatch(n.state.tr.setSelection(new ie(r))), !0);
}
function dv(n, e) {
  if (e.inputType != "insertCompositionText" || !(n.state.selection instanceof ie))
    return !1;
  let { $from: t } = n.state.selection, r = t.parent.contentMatchAt(t.index()).findWrapping(n.state.schema.nodes.text);
  if (!r)
    return !1;
  let i = S.empty;
  for (let s = r.length - 1; s >= 0; s--)
    i = S.from(r[s].createAndFill(null, i));
  let o = n.state.tr.replace(t.pos, t.pos, new M(i, 0, 0));
  return o.setSelection(I.near(o.doc.resolve(t.pos + 1))), n.dispatch(o), !1;
}
function fv(n) {
  if (!(n.selection instanceof ie))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", ee.create(n.doc, [xe.widget(n.selection.head, e, { key: "gapcursor" })]);
}
const hv = pe.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      av()
    ];
  },
  extendNodeSchema(n) {
    var e;
    const t = {
      name: n.name,
      options: n.options,
      storage: n.storage
    };
    return {
      allowGapCursor: (e = F(A(n, "allowGapCursor", t))) !== null && e !== void 0 ? e : null
    };
  }
}), pv = re.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  parseHTML() {
    return [
      { tag: "br" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["br", U(this.options.HTMLAttributes, n)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: n, chain: e, state: t, editor: r }) => n.first([
        () => n.exitCode(),
        () => n.command(() => {
          const { selection: i, storedMarks: o } = t;
          if (i.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: s } = this.options, { splittableMarks: l } = r.extensionManager, a = o || i.$to.parentOffset && i.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: c, dispatch: u }) => {
            if (u && a && s) {
              const d = a.filter((f) => l.includes(f.type.name));
              c.ensureMarks(d);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), mv = re.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((n) => ({
      tag: `h${n}`,
      attrs: { level: n }
    }));
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(n.attrs.level) ? n.attrs.level : this.options.levels[0]}`, U(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.setNode(this.name, n) : !1,
      toggleHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.toggleNode(this.name, "paragraph", n) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((n, e) => ({
      ...n,
      [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((n) => Hs({
      find: new RegExp(`^(#{1,${n}})\\s$`),
      type: this.type,
      getAttributes: {
        level: n
      }
    }));
  }
});
var bo = 200, fe = function() {
};
fe.prototype.append = function(e) {
  return e.length ? (e = fe.from(e), !this.length && e || e.length < bo && this.leafAppend(e) || this.length < bo && e.leafPrepend(this) || this.appendInner(e)) : this;
};
fe.prototype.prepend = function(e) {
  return e.length ? fe.from(e).append(this) : this;
};
fe.prototype.appendInner = function(e) {
  return new gv(this, e);
};
fe.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? fe.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
fe.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
fe.prototype.forEach = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length), t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0);
};
fe.prototype.map = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(o, s) {
    return i.push(e(o, s));
  }, t, r), i;
};
fe.from = function(e) {
  return e instanceof fe ? e : e && e.length ? new Kd(e) : fe.empty;
};
var Kd = /* @__PURE__ */ function(n) {
  function e(r) {
    n.call(this), this.values = r;
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, o) {
    return i == 0 && o == this.length ? this : new e(this.values.slice(i, o));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, o, s, l) {
    for (var a = o; a < s; a++)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, o, s, l) {
    for (var a = o - 1; a >= s; a--)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= bo)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= bo)
      return new e(i.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
}(fe);
fe.empty = new Kd([]);
var gv = /* @__PURE__ */ function(n) {
  function e(t, r) {
    n.call(this), this.left = t, this.right = r, this.length = t.length + r.length, this.depth = Math.max(t.depth, r.depth) + 1;
  }
  return n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, o, s) {
    var l = this.left.length;
    if (i < l && this.left.forEachInner(r, i, Math.min(o, l), s) === !1 || o > l && this.right.forEachInner(r, Math.max(i - l, 0), Math.min(this.length, o) - l, s + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, o, s) {
    var l = this.left.length;
    if (i > l && this.right.forEachInvertedInner(r, i - l, Math.max(o, l) - l, s + l) === !1 || o < l && this.left.forEachInvertedInner(r, Math.min(i, l), o, s) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var o = this.left.length;
    return i <= o ? this.left.slice(r, i) : r >= o ? this.right.slice(r - o, i - o) : this.left.slice(r, o).append(this.right.slice(0, i - o));
  }, e.prototype.leafAppend = function(r) {
    var i = this.right.leafAppend(r);
    if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function(r) {
    var i = this.left.leafPrepend(r);
    if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
}(fe);
const yv = 500;
class Ze {
  constructor(e, t) {
    this.items = e, this.eventCount = t;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, t) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let i, o;
    t && (i = this.remapping(r, this.items.length), o = i.maps.length);
    let s = e.tr, l, a, c = [], u = [];
    return this.items.forEach((d, f) => {
      if (!d.step) {
        i || (i = this.remapping(r, f + 1), o = i.maps.length), o--, u.push(d);
        return;
      }
      if (i) {
        u.push(new st(d.map));
        let h = d.step.map(i.slice(o)), p;
        h && s.maybeStep(h).doc && (p = s.mapping.maps[s.mapping.maps.length - 1], c.push(new st(p, void 0, void 0, c.length + u.length))), o--, p && i.appendMap(p, o);
      } else
        s.maybeStep(d.step);
      if (d.selection)
        return l = i ? d.selection.map(i.slice(o)) : d.selection, a = new Ze(this.items.slice(0, r).append(u.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: s, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, t, r, i) {
    let o = [], s = this.eventCount, l = this.items, a = !i && l.length ? l.get(l.length - 1) : null;
    for (let u = 0; u < e.steps.length; u++) {
      let d = e.steps[u].invert(e.docs[u]), f = new st(e.mapping.maps[u], d, t), h;
      (h = a && a.merge(f)) && (f = h, u ? o.pop() : l = l.slice(0, l.length - 1)), o.push(f), t && (s++, t = void 0), i || (a = f);
    }
    let c = s - r.depth;
    return c > vv && (l = bv(l, c), s -= c), new Ze(l.append(o), s);
  }
  remapping(e, t) {
    let r = new Fn();
    return this.items.forEach((i, o) => {
      let s = i.mirrorOffset != null && o - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, s);
    }, e, t), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new Ze(this.items.append(e.map((t) => new st(t))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - t), o = e.mapping, s = e.steps.length, l = this.eventCount;
    this.items.forEach((f) => {
      f.selection && l--;
    }, i);
    let a = t;
    this.items.forEach((f) => {
      let h = o.getMirror(--a);
      if (h == null)
        return;
      s = Math.min(s, h);
      let p = o.maps[h];
      if (f.step) {
        let g = e.steps[h].invert(e.docs[h]), y = f.selection && f.selection.map(o.slice(a + 1, h));
        y && l++, r.push(new st(p, g, y));
      } else
        r.push(new st(p));
    }, i);
    let c = [];
    for (let f = t; f < s; f++)
      c.push(new st(o.maps[f]));
    let u = this.items.slice(0, i).append(c).append(r), d = new Ze(u, l);
    return d.emptyItemCount() > yv && (d = d.compress(this.items.length - r.length)), d;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let t = this.remapping(0, e), r = t.maps.length, i = [], o = 0;
    return this.items.forEach((s, l) => {
      if (l >= e)
        i.push(s), s.selection && o++;
      else if (s.step) {
        let a = s.step.map(t.slice(r)), c = a && a.getMap();
        if (r--, c && t.appendMap(c, r), a) {
          let u = s.selection && s.selection.map(t.slice(r));
          u && o++;
          let d = new st(c.invert(), a, u), f, h = i.length - 1;
          (f = i.length && i[h].merge(d)) ? i[h] = f : i.push(d);
        }
      } else s.map && r--;
    }, this.items.length, 0), new Ze(fe.from(i.reverse()), o);
  }
}
Ze.empty = new Ze(fe.empty, 0);
function bv(n, e) {
  let t;
  return n.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return t = i, !1;
  }), n.slice(t);
}
class st {
  constructor(e, t, r, i) {
    this.map = e, this.step = t, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new st(t.getMap().invert(), t, this.selection);
    }
  }
}
class Pt {
  constructor(e, t, r, i, o) {
    this.done = e, this.undone = t, this.prevRanges = r, this.prevTime = i, this.prevComposition = o;
  }
}
const vv = 20;
function wv(n, e, t, r) {
  let i = t.getMeta(pn), o;
  if (i)
    return i.historyState;
  t.getMeta(xv) && (n = new Pt(n.done, n.undone, null, 0, -1));
  let s = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return n;
  if (s && s.getMeta(pn))
    return s.getMeta(pn).redo ? new Pt(n.done.addTransform(t, void 0, r, Mi(e)), n.undone, wc(t.mapping.maps), n.prevTime, n.prevComposition) : new Pt(n.done, n.undone.addTransform(t, void 0, r, Mi(e)), null, n.prevTime, n.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(s && s.getMeta("addToHistory") === !1)) {
    let l = t.getMeta("composition"), a = n.prevTime == 0 || !s && n.prevComposition != l && (n.prevTime < (t.time || 0) - r.newGroupDelay || !kv(t, n.prevRanges)), c = s ? ds(n.prevRanges, t.mapping) : wc(t.mapping.maps);
    return new Pt(n.done.addTransform(t, a ? e.selection.getBookmark() : void 0, r, Mi(e)), Ze.empty, c, t.time, l ?? n.prevComposition);
  } else return (o = t.getMeta("rebased")) ? new Pt(n.done.rebased(t, o), n.undone.rebased(t, o), ds(n.prevRanges, t.mapping), n.prevTime, n.prevComposition) : new Pt(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), ds(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
}
function kv(n, e) {
  if (!e)
    return !1;
  if (!n.docChanged)
    return !0;
  let t = !1;
  return n.mapping.maps[0].forEach((r, i) => {
    for (let o = 0; o < e.length; o += 2)
      r <= e[o + 1] && i >= e[o] && (t = !0);
  }), t;
}
function wc(n) {
  let e = [];
  for (let t = n.length - 1; t >= 0 && e.length == 0; t--)
    n[t].forEach((r, i, o, s) => e.push(o, s));
  return e;
}
function ds(n, e) {
  if (!n)
    return null;
  let t = [];
  for (let r = 0; r < n.length; r += 2) {
    let i = e.map(n[r], 1), o = e.map(n[r + 1], -1);
    i <= o && t.push(i, o);
  }
  return t;
}
function Cv(n, e, t) {
  let r = Mi(e), i = pn.get(e).spec.config, o = (t ? n.undone : n.done).popEvent(e, r);
  if (!o)
    return null;
  let s = o.selection.resolve(o.transform.doc), l = (t ? n.done : n.undone).addTransform(o.transform, e.selection.getBookmark(), i, r), a = new Pt(t ? l : o.remaining, t ? o.remaining : l, null, 0, -1);
  return o.transform.setSelection(s).setMeta(pn, { redo: t, historyState: a });
}
let fs = !1, kc = null;
function Mi(n) {
  let e = n.plugins;
  if (kc != e) {
    fs = !1, kc = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        fs = !0;
        break;
      }
  }
  return fs;
}
const pn = new ae("history"), xv = new ae("closeHistory");
function Sv(n = {}) {
  return n = {
    depth: n.depth || 100,
    newGroupDelay: n.newGroupDelay || 500
  }, new se({
    key: pn,
    state: {
      init() {
        return new Pt(Ze.empty, Ze.empty, null, 0, -1);
      },
      apply(e, t, r) {
        return wv(t, r, e, n);
      }
    },
    config: n,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let r = t.inputType, i = r == "historyUndo" ? Jd : r == "historyRedo" ? Gd : null;
          return i ? (t.preventDefault(), i(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
function qd(n, e) {
  return (t, r) => {
    let i = pn.getState(t);
    if (!i || (n ? i.undone : i.done).eventCount == 0)
      return !1;
    if (r) {
      let o = Cv(i, t, n);
      o && r(e ? o.scrollIntoView() : o);
    }
    return !0;
  };
}
const Jd = qd(!1, !0), Gd = qd(!0, !0), Tv = pe.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: n, dispatch: e }) => Jd(n, e),
      redo: () => ({ state: n, dispatch: e }) => Gd(n, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      Sv(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), Mv = re.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["hr", U(this.options.HTMLAttributes, n)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: n, state: e }) => {
        const { selection: t } = e, { $from: r, $to: i } = t, o = n();
        return r.parentOffset === 0 ? o.insertContentAt({
          from: Math.max(r.pos - 1, 0),
          to: i.pos
        }, {
          type: this.name
        }) : xd(t) ? o.insertContentAt(i.pos, {
          type: this.name
        }) : o.insertContent({ type: this.name }), o.command(({ tr: s, dispatch: l }) => {
          var a;
          if (l) {
            const { $to: c } = s.selection, u = c.end();
            if (c.nodeAfter)
              c.nodeAfter.isTextblock ? s.setSelection(I.create(s.doc, c.pos + 1)) : c.nodeAfter.isBlock ? s.setSelection(D.create(s.doc, c.pos)) : s.setSelection(I.create(s.doc, c.pos));
            else {
              const d = (a = c.parent.type.contentMatch.defaultType) === null || a === void 0 ? void 0 : a.create();
              d && (s.insert(u, d), s.setSelection(I.create(s.doc, u + 1)));
            }
            s.scrollIntoView();
          }
          return !0;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      Td({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), Ev = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, Ov = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, Av = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, Nv = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, Dv = qe.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (n) => n.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["em", U(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: n }) => n.setMark(this.name),
      toggleItalic: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetItalic: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      Gn({
        find: Ev,
        type: this.type
      }),
      Gn({
        find: Av,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      vn({
        find: Ov,
        type: this.type
      }),
      vn({
        find: Nv,
        type: this.type
      })
    ];
  }
}), Rv = re.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", U(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), Iv = re.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", U(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), Cc = qe.create({
  name: "textStyle",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (n) => n.hasAttribute("style") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["span", U(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ state: n, commands: e }) => {
        const t = Lo(n, this.type);
        return Object.entries(t).some(([, i]) => !!i) ? !0 : e.unsetMark(this.name);
      }
    };
  }
}), xc = /^(\d+)\.\s$/, Lv = re.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (n) => n.hasAttribute("start") ? parseInt(n.getAttribute("start") || "", 10) : 1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    const { start: e, ...t } = n;
    return e === 1 ? ["ol", U(this.options.HTMLAttributes, t), 0] : ["ol", U(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Iv.name, this.editor.getAttributes(Cc.name)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let n = Dr({
      find: xc,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = Dr({
      find: xc,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(Cc.name) }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
      editor: this.editor
    })), [
      n
    ];
  }
}), Pv = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, Bv = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, Hv = qe.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n) => n.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["s", U(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: n }) => n.setMark(this.name),
      toggleStrike: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetStrike: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      Gn({
        find: Pv,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      vn({
        find: Bv,
        type: this.type
      })
    ];
  }
}), zv = pe.create({
  name: "starterKit",
  addExtensions() {
    var n, e, t, r, i, o, s, l, a, c, u, d, f, h, p, g, y, v;
    const w = [];
    return this.options.bold !== !1 && w.push(Jb.configure((n = this.options) === null || n === void 0 ? void 0 : n.bold)), this.options.blockquote !== !1 && w.push(Wb.configure((e = this.options) === null || e === void 0 ? void 0 : e.blockquote)), this.options.bulletList !== !1 && w.push(Yb.configure((t = this.options) === null || t === void 0 ? void 0 : t.bulletList)), this.options.code !== !1 && w.push(Zb.configure((r = this.options) === null || r === void 0 ? void 0 : r.code)), this.options.codeBlock !== !1 && w.push(nv.configure((i = this.options) === null || i === void 0 ? void 0 : i.codeBlock)), this.options.document !== !1 && w.push(Wd.configure((o = this.options) === null || o === void 0 ? void 0 : o.document)), this.options.dropcursor !== !1 && w.push(ov.configure((s = this.options) === null || s === void 0 ? void 0 : s.dropcursor)), this.options.gapcursor !== !1 && w.push(hv.configure((l = this.options) === null || l === void 0 ? void 0 : l.gapcursor)), this.options.hardBreak !== !1 && w.push(pv.configure((a = this.options) === null || a === void 0 ? void 0 : a.hardBreak)), this.options.heading !== !1 && w.push(mv.configure((c = this.options) === null || c === void 0 ? void 0 : c.heading)), this.options.history !== !1 && w.push(Tv.configure((u = this.options) === null || u === void 0 ? void 0 : u.history)), this.options.horizontalRule !== !1 && w.push(Mv.configure((d = this.options) === null || d === void 0 ? void 0 : d.horizontalRule)), this.options.italic !== !1 && w.push(Dv.configure((f = this.options) === null || f === void 0 ? void 0 : f.italic)), this.options.listItem !== !1 && w.push(Rv.configure((h = this.options) === null || h === void 0 ? void 0 : h.listItem)), this.options.orderedList !== !1 && w.push(Lv.configure((p = this.options) === null || p === void 0 ? void 0 : p.orderedList)), this.options.paragraph !== !1 && w.push(_d.configure((g = this.options) === null || g === void 0 ? void 0 : g.paragraph)), this.options.strike !== !1 && w.push(Hv.configure((y = this.options) === null || y === void 0 ? void 0 : y.strike)), this.options.text !== !1 && w.push(Ud.configure((v = this.options) === null || v === void 0 ? void 0 : v.text)), w;
  }
});
var Le = "top", Je = "bottom", Ge = "right", Pe = "left", Il = "auto", Wr = [Le, Je, Ge, Pe], Xn = "start", Pr = "end", $v = "clippingParents", Yd = "viewport", ur = "popper", Fv = "reference", Sc = /* @__PURE__ */ Wr.reduce(function(n, e) {
  return n.concat([e + "-" + Xn, e + "-" + Pr]);
}, []), Xd = /* @__PURE__ */ [].concat(Wr, [Il]).reduce(function(n, e) {
  return n.concat([e, e + "-" + Xn, e + "-" + Pr]);
}, []), Vv = "beforeRead", jv = "read", Wv = "afterRead", _v = "beforeMain", Uv = "main", Kv = "afterMain", qv = "beforeWrite", Jv = "write", Gv = "afterWrite", Yv = [Vv, jv, Wv, _v, Uv, Kv, qv, Jv, Gv];
function pt(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function $e(n) {
  if (n == null)
    return window;
  if (n.toString() !== "[object Window]") {
    var e = n.ownerDocument;
    return e && e.defaultView || window;
  }
  return n;
}
function kn(n) {
  var e = $e(n).Element;
  return n instanceof e || n instanceof Element;
}
function Ke(n) {
  var e = $e(n).HTMLElement;
  return n instanceof e || n instanceof HTMLElement;
}
function Ll(n) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = $e(n).ShadowRoot;
  return n instanceof e || n instanceof ShadowRoot;
}
function Xv(n) {
  var e = n.state;
  Object.keys(e.elements).forEach(function(t) {
    var r = e.styles[t] || {}, i = e.attributes[t] || {}, o = e.elements[t];
    !Ke(o) || !pt(o) || (Object.assign(o.style, r), Object.keys(i).forEach(function(s) {
      var l = i[s];
      l === !1 ? o.removeAttribute(s) : o.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function Qv(n) {
  var e = n.state, t = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var i = e.elements[r], o = e.attributes[r] || {}, s = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : t[r]), l = s.reduce(function(a, c) {
        return a[c] = "", a;
      }, {});
      !Ke(i) || !pt(i) || (Object.assign(i.style, l), Object.keys(o).forEach(function(a) {
        i.removeAttribute(a);
      }));
    });
  };
}
const Qd = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Xv,
  effect: Qv,
  requires: ["computeStyles"]
};
function dt(n) {
  return n.split("-")[0];
}
var mn = Math.max, vo = Math.min, Qn = Math.round;
function Ys() {
  var n = navigator.userAgentData;
  return n != null && n.brands && Array.isArray(n.brands) ? n.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function Zd() {
  return !/^((?!chrome|android).)*safari/i.test(Ys());
}
function Zn(n, e, t) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  var r = n.getBoundingClientRect(), i = 1, o = 1;
  e && Ke(n) && (i = n.offsetWidth > 0 && Qn(r.width) / n.offsetWidth || 1, o = n.offsetHeight > 0 && Qn(r.height) / n.offsetHeight || 1);
  var s = kn(n) ? $e(n) : window, l = s.visualViewport, a = !Zd() && t, c = (r.left + (a && l ? l.offsetLeft : 0)) / i, u = (r.top + (a && l ? l.offsetTop : 0)) / o, d = r.width / i, f = r.height / o;
  return {
    width: d,
    height: f,
    top: u,
    right: c + d,
    bottom: u + f,
    left: c,
    x: c,
    y: u
  };
}
function Pl(n) {
  var e = Zn(n), t = n.offsetWidth, r = n.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: n.offsetLeft,
    y: n.offsetTop,
    width: t,
    height: r
  };
}
function ef(n, e) {
  var t = e.getRootNode && e.getRootNode();
  if (n.contains(e))
    return !0;
  if (t && Ll(t)) {
    var r = e;
    do {
      if (r && n.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Ot(n) {
  return $e(n).getComputedStyle(n);
}
function Zv(n) {
  return ["table", "td", "th"].indexOf(pt(n)) >= 0;
}
function Xt(n) {
  return ((kn(n) ? n.ownerDocument : (
    // $FlowFixMe[prop-missing]
    n.document
  )) || window.document).documentElement;
}
function Ho(n) {
  return pt(n) === "html" ? n : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    n.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    n.parentNode || // DOM Element detected
    (Ll(n) ? n.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Xt(n)
  );
}
function Tc(n) {
  return !Ke(n) || // https://github.com/popperjs/popper-core/issues/837
  Ot(n).position === "fixed" ? null : n.offsetParent;
}
function e1(n) {
  var e = /firefox/i.test(Ys()), t = /Trident/i.test(Ys());
  if (t && Ke(n)) {
    var r = Ot(n);
    if (r.position === "fixed")
      return null;
  }
  var i = Ho(n);
  for (Ll(i) && (i = i.host); Ke(i) && ["html", "body"].indexOf(pt(i)) < 0; ) {
    var o = Ot(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || e && o.willChange === "filter" || e && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function _r(n) {
  for (var e = $e(n), t = Tc(n); t && Zv(t) && Ot(t).position === "static"; )
    t = Tc(t);
  return t && (pt(t) === "html" || pt(t) === "body" && Ot(t).position === "static") ? e : t || e1(n) || e;
}
function Bl(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function kr(n, e, t) {
  return mn(n, vo(e, t));
}
function t1(n, e, t) {
  var r = kr(n, e, t);
  return r > t ? t : r;
}
function tf() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function nf(n) {
  return Object.assign({}, tf(), n);
}
function rf(n, e) {
  return e.reduce(function(t, r) {
    return t[r] = n, t;
  }, {});
}
var n1 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, {
    placement: t.placement
  })) : e, nf(typeof e != "number" ? e : rf(e, Wr));
};
function r1(n) {
  var e, t = n.state, r = n.name, i = n.options, o = t.elements.arrow, s = t.modifiersData.popperOffsets, l = dt(t.placement), a = Bl(l), c = [Pe, Ge].indexOf(l) >= 0, u = c ? "height" : "width";
  if (!(!o || !s)) {
    var d = n1(i.padding, t), f = Pl(o), h = a === "y" ? Le : Pe, p = a === "y" ? Je : Ge, g = t.rects.reference[u] + t.rects.reference[a] - s[a] - t.rects.popper[u], y = s[a] - t.rects.reference[a], v = _r(o), w = v ? a === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, k = g / 2 - y / 2, m = d[h], C = w - f[u] - d[p], b = w / 2 - f[u] / 2 + k, O = kr(m, b, C), H = a;
    t.modifiersData[r] = (e = {}, e[H] = O, e.centerOffset = O - b, e);
  }
}
function i1(n) {
  var e = n.state, t = n.options, r = t.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || ef(e.elements.popper, i) && (e.elements.arrow = i));
}
const o1 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: r1,
  effect: i1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function er(n) {
  return n.split("-")[1];
}
var s1 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function l1(n, e) {
  var t = n.x, r = n.y, i = e.devicePixelRatio || 1;
  return {
    x: Qn(t * i) / i || 0,
    y: Qn(r * i) / i || 0
  };
}
function Mc(n) {
  var e, t = n.popper, r = n.popperRect, i = n.placement, o = n.variation, s = n.offsets, l = n.position, a = n.gpuAcceleration, c = n.adaptive, u = n.roundOffsets, d = n.isFixed, f = s.x, h = f === void 0 ? 0 : f, p = s.y, g = p === void 0 ? 0 : p, y = typeof u == "function" ? u({
    x: h,
    y: g
  }) : {
    x: h,
    y: g
  };
  h = y.x, g = y.y;
  var v = s.hasOwnProperty("x"), w = s.hasOwnProperty("y"), k = Pe, m = Le, C = window;
  if (c) {
    var b = _r(t), O = "clientHeight", H = "clientWidth";
    if (b === $e(t) && (b = Xt(t), Ot(b).position !== "static" && l === "absolute" && (O = "scrollHeight", H = "scrollWidth")), b = b, i === Le || (i === Pe || i === Ge) && o === Pr) {
      m = Je;
      var E = d && b === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        b[O]
      );
      g -= E - r.height, g *= a ? 1 : -1;
    }
    if (i === Pe || (i === Le || i === Je) && o === Pr) {
      k = Ge;
      var B = d && b === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        b[H]
      );
      h -= B - r.width, h *= a ? 1 : -1;
    }
  }
  var _ = Object.assign({
    position: l
  }, c && s1), K = u === !0 ? l1({
    x: h,
    y: g
  }, $e(t)) : {
    x: h,
    y: g
  };
  if (h = K.x, g = K.y, a) {
    var q;
    return Object.assign({}, _, (q = {}, q[m] = w ? "0" : "", q[k] = v ? "0" : "", q.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + g + "px)" : "translate3d(" + h + "px, " + g + "px, 0)", q));
  }
  return Object.assign({}, _, (e = {}, e[m] = w ? g + "px" : "", e[k] = v ? h + "px" : "", e.transform = "", e));
}
function a1(n) {
  var e = n.state, t = n.options, r = t.gpuAcceleration, i = r === void 0 ? !0 : r, o = t.adaptive, s = o === void 0 ? !0 : o, l = t.roundOffsets, a = l === void 0 ? !0 : l, c = {
    placement: dt(e.placement),
    variation: er(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Mc(Object.assign({}, c, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Mc(Object.assign({}, c, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const c1 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: a1,
  data: {}
};
var yi = {
  passive: !0
};
function u1(n) {
  var e = n.state, t = n.instance, r = n.options, i = r.scroll, o = i === void 0 ? !0 : i, s = r.resize, l = s === void 0 ? !0 : s, a = $e(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && c.forEach(function(u) {
    u.addEventListener("scroll", t.update, yi);
  }), l && a.addEventListener("resize", t.update, yi), function() {
    o && c.forEach(function(u) {
      u.removeEventListener("scroll", t.update, yi);
    }), l && a.removeEventListener("resize", t.update, yi);
  };
}
const d1 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: u1,
  data: {}
};
var f1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ei(n) {
  return n.replace(/left|right|bottom|top/g, function(e) {
    return f1[e];
  });
}
var h1 = {
  start: "end",
  end: "start"
};
function Ec(n) {
  return n.replace(/start|end/g, function(e) {
    return h1[e];
  });
}
function Hl(n) {
  var e = $e(n), t = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: r
  };
}
function zl(n) {
  return Zn(Xt(n)).left + Hl(n).scrollLeft;
}
function p1(n, e) {
  var t = $e(n), r = Xt(n), i = t.visualViewport, o = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (i) {
    o = i.width, s = i.height;
    var c = Zd();
    (c || !c && e === "fixed") && (l = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: l + zl(n),
    y: a
  };
}
function m1(n) {
  var e, t = Xt(n), r = Hl(n), i = (e = n.ownerDocument) == null ? void 0 : e.body, o = mn(t.scrollWidth, t.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = mn(t.scrollHeight, t.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + zl(n), a = -r.scrollTop;
  return Ot(i || t).direction === "rtl" && (l += mn(t.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: s,
    x: l,
    y: a
  };
}
function $l(n) {
  var e = Ot(n), t = e.overflow, r = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + i + r);
}
function of(n) {
  return ["html", "body", "#document"].indexOf(pt(n)) >= 0 ? n.ownerDocument.body : Ke(n) && $l(n) ? n : of(Ho(n));
}
function Cr(n, e) {
  var t;
  e === void 0 && (e = []);
  var r = of(n), i = r === ((t = n.ownerDocument) == null ? void 0 : t.body), o = $e(r), s = i ? [o].concat(o.visualViewport || [], $l(r) ? r : []) : r, l = e.concat(s);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Cr(Ho(s)))
  );
}
function Xs(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  });
}
function g1(n, e) {
  var t = Zn(n, !1, e === "fixed");
  return t.top = t.top + n.clientTop, t.left = t.left + n.clientLeft, t.bottom = t.top + n.clientHeight, t.right = t.left + n.clientWidth, t.width = n.clientWidth, t.height = n.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Oc(n, e, t) {
  return e === Yd ? Xs(p1(n, t)) : kn(e) ? g1(e, t) : Xs(m1(Xt(n)));
}
function y1(n) {
  var e = Cr(Ho(n)), t = ["absolute", "fixed"].indexOf(Ot(n).position) >= 0, r = t && Ke(n) ? _r(n) : n;
  return kn(r) ? e.filter(function(i) {
    return kn(i) && ef(i, r) && pt(i) !== "body";
  }) : [];
}
function b1(n, e, t, r) {
  var i = e === "clippingParents" ? y1(n) : [].concat(e), o = [].concat(i, [t]), s = o[0], l = o.reduce(function(a, c) {
    var u = Oc(n, c, r);
    return a.top = mn(u.top, a.top), a.right = vo(u.right, a.right), a.bottom = vo(u.bottom, a.bottom), a.left = mn(u.left, a.left), a;
  }, Oc(n, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function sf(n) {
  var e = n.reference, t = n.element, r = n.placement, i = r ? dt(r) : null, o = r ? er(r) : null, s = e.x + e.width / 2 - t.width / 2, l = e.y + e.height / 2 - t.height / 2, a;
  switch (i) {
    case Le:
      a = {
        x: s,
        y: e.y - t.height
      };
      break;
    case Je:
      a = {
        x: s,
        y: e.y + e.height
      };
      break;
    case Ge:
      a = {
        x: e.x + e.width,
        y: l
      };
      break;
    case Pe:
      a = {
        x: e.x - t.width,
        y: l
      };
      break;
    default:
      a = {
        x: e.x,
        y: e.y
      };
  }
  var c = i ? Bl(i) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (o) {
      case Xn:
        a[c] = a[c] - (e[u] / 2 - t[u] / 2);
        break;
      case Pr:
        a[c] = a[c] + (e[u] / 2 - t[u] / 2);
        break;
    }
  }
  return a;
}
function Br(n, e) {
  e === void 0 && (e = {});
  var t = e, r = t.placement, i = r === void 0 ? n.placement : r, o = t.strategy, s = o === void 0 ? n.strategy : o, l = t.boundary, a = l === void 0 ? $v : l, c = t.rootBoundary, u = c === void 0 ? Yd : c, d = t.elementContext, f = d === void 0 ? ur : d, h = t.altBoundary, p = h === void 0 ? !1 : h, g = t.padding, y = g === void 0 ? 0 : g, v = nf(typeof y != "number" ? y : rf(y, Wr)), w = f === ur ? Fv : ur, k = n.rects.popper, m = n.elements[p ? w : f], C = b1(kn(m) ? m : m.contextElement || Xt(n.elements.popper), a, u, s), b = Zn(n.elements.reference), O = sf({
    reference: b,
    element: k,
    strategy: "absolute",
    placement: i
  }), H = Xs(Object.assign({}, k, O)), E = f === ur ? H : b, B = {
    top: C.top - E.top + v.top,
    bottom: E.bottom - C.bottom + v.bottom,
    left: C.left - E.left + v.left,
    right: E.right - C.right + v.right
  }, _ = n.modifiersData.offset;
  if (f === ur && _) {
    var K = _[i];
    Object.keys(B).forEach(function(q) {
      var ce = [Ge, Je].indexOf(q) >= 0 ? 1 : -1, te = [Le, Je].indexOf(q) >= 0 ? "y" : "x";
      B[q] += K[te] * ce;
    });
  }
  return B;
}
function v1(n, e) {
  e === void 0 && (e = {});
  var t = e, r = t.placement, i = t.boundary, o = t.rootBoundary, s = t.padding, l = t.flipVariations, a = t.allowedAutoPlacements, c = a === void 0 ? Xd : a, u = er(r), d = u ? l ? Sc : Sc.filter(function(p) {
    return er(p) === u;
  }) : Wr, f = d.filter(function(p) {
    return c.indexOf(p) >= 0;
  });
  f.length === 0 && (f = d);
  var h = f.reduce(function(p, g) {
    return p[g] = Br(n, {
      placement: g,
      boundary: i,
      rootBoundary: o,
      padding: s
    })[dt(g)], p;
  }, {});
  return Object.keys(h).sort(function(p, g) {
    return h[p] - h[g];
  });
}
function w1(n) {
  if (dt(n) === Il)
    return [];
  var e = Ei(n);
  return [Ec(n), e, Ec(e)];
}
function k1(n) {
  var e = n.state, t = n.options, r = n.name;
  if (!e.modifiersData[r]._skip) {
    for (var i = t.mainAxis, o = i === void 0 ? !0 : i, s = t.altAxis, l = s === void 0 ? !0 : s, a = t.fallbackPlacements, c = t.padding, u = t.boundary, d = t.rootBoundary, f = t.altBoundary, h = t.flipVariations, p = h === void 0 ? !0 : h, g = t.allowedAutoPlacements, y = e.options.placement, v = dt(y), w = v === y, k = a || (w || !p ? [Ei(y)] : w1(y)), m = [y].concat(k).reduce(function(yt, Ye) {
      return yt.concat(dt(Ye) === Il ? v1(e, {
        placement: Ye,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: p,
        allowedAutoPlacements: g
      }) : Ye);
    }, []), C = e.rects.reference, b = e.rects.popper, O = /* @__PURE__ */ new Map(), H = !0, E = m[0], B = 0; B < m.length; B++) {
      var _ = m[B], K = dt(_), q = er(_) === Xn, ce = [Le, Je].indexOf(K) >= 0, te = ce ? "width" : "height", Q = Br(e, {
        placement: _,
        boundary: u,
        rootBoundary: d,
        altBoundary: f,
        padding: c
      }), X = ce ? q ? Ge : Pe : q ? Je : Le;
      C[te] > b[te] && (X = Ei(X));
      var J = Ei(X), Be = [];
      if (o && Be.push(Q[K] <= 0), l && Be.push(Q[X] <= 0, Q[J] <= 0), Be.every(function(yt) {
        return yt;
      })) {
        E = _, H = !1;
        break;
      }
      O.set(_, Be);
    }
    if (H)
      for (var ve = p ? 3 : 1, gt = function(Ye) {
        var bt = m.find(function(Sn) {
          var vt = O.get(Sn);
          if (vt)
            return vt.slice(0, Ye).every(function(Tn) {
              return Tn;
            });
        });
        if (bt)
          return E = bt, "break";
      }, Ne = ve; Ne > 0; Ne--) {
        var Qt = gt(Ne);
        if (Qt === "break") break;
      }
    e.placement !== E && (e.modifiersData[r]._skip = !0, e.placement = E, e.reset = !0);
  }
}
const C1 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: k1,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ac(n, e, t) {
  return t === void 0 && (t = {
    x: 0,
    y: 0
  }), {
    top: n.top - e.height - t.y,
    right: n.right - e.width + t.x,
    bottom: n.bottom - e.height + t.y,
    left: n.left - e.width - t.x
  };
}
function Nc(n) {
  return [Le, Ge, Je, Pe].some(function(e) {
    return n[e] >= 0;
  });
}
function x1(n) {
  var e = n.state, t = n.name, r = e.rects.reference, i = e.rects.popper, o = e.modifiersData.preventOverflow, s = Br(e, {
    elementContext: "reference"
  }), l = Br(e, {
    altBoundary: !0
  }), a = Ac(s, r), c = Ac(l, i, o), u = Nc(a), d = Nc(c);
  e.modifiersData[t] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: d
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": d
  });
}
const S1 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: x1
};
function T1(n, e, t) {
  var r = dt(n), i = [Pe, Le].indexOf(r) >= 0 ? -1 : 1, o = typeof t == "function" ? t(Object.assign({}, e, {
    placement: n
  })) : t, s = o[0], l = o[1];
  return s = s || 0, l = (l || 0) * i, [Pe, Ge].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function M1(n) {
  var e = n.state, t = n.options, r = n.name, i = t.offset, o = i === void 0 ? [0, 0] : i, s = Xd.reduce(function(u, d) {
    return u[d] = T1(d, e.rects, o), u;
  }, {}), l = s[e.placement], a = l.x, c = l.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += a, e.modifiersData.popperOffsets.y += c), e.modifiersData[r] = s;
}
const E1 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: M1
};
function O1(n) {
  var e = n.state, t = n.name;
  e.modifiersData[t] = sf({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const A1 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: O1,
  data: {}
};
function N1(n) {
  return n === "x" ? "y" : "x";
}
function D1(n) {
  var e = n.state, t = n.options, r = n.name, i = t.mainAxis, o = i === void 0 ? !0 : i, s = t.altAxis, l = s === void 0 ? !1 : s, a = t.boundary, c = t.rootBoundary, u = t.altBoundary, d = t.padding, f = t.tether, h = f === void 0 ? !0 : f, p = t.tetherOffset, g = p === void 0 ? 0 : p, y = Br(e, {
    boundary: a,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), v = dt(e.placement), w = er(e.placement), k = !w, m = Bl(v), C = N1(m), b = e.modifiersData.popperOffsets, O = e.rects.reference, H = e.rects.popper, E = typeof g == "function" ? g(Object.assign({}, e.rects, {
    placement: e.placement
  })) : g, B = typeof E == "number" ? {
    mainAxis: E,
    altAxis: E
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, E), _ = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, K = {
    x: 0,
    y: 0
  };
  if (b) {
    if (o) {
      var q, ce = m === "y" ? Le : Pe, te = m === "y" ? Je : Ge, Q = m === "y" ? "height" : "width", X = b[m], J = X + y[ce], Be = X - y[te], ve = h ? -H[Q] / 2 : 0, gt = w === Xn ? O[Q] : H[Q], Ne = w === Xn ? -H[Q] : -O[Q], Qt = e.elements.arrow, yt = h && Qt ? Pl(Qt) : {
        width: 0,
        height: 0
      }, Ye = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : tf(), bt = Ye[ce], Sn = Ye[te], vt = kr(0, O[Q], yt[Q]), Tn = k ? O[Q] / 2 - ve - vt - bt - B.mainAxis : gt - vt - bt - B.mainAxis, At = k ? -O[Q] / 2 + ve + vt + Sn + B.mainAxis : Ne + vt + Sn + B.mainAxis, Mn = e.elements.arrow && _r(e.elements.arrow), Ur = Mn ? m === "y" ? Mn.clientTop || 0 : Mn.clientLeft || 0 : 0, ir = (q = _ == null ? void 0 : _[m]) != null ? q : 0, Kr = X + Tn - ir - Ur, qr = X + At - ir, or = kr(h ? vo(J, Kr) : J, X, h ? mn(Be, qr) : Be);
      b[m] = or, K[m] = or - X;
    }
    if (l) {
      var sr, Jr = m === "x" ? Le : Pe, Gr = m === "x" ? Je : Ge, wt = b[C], Nt = C === "y" ? "height" : "width", lr = wt + y[Jr], Zt = wt - y[Gr], ar = [Le, Pe].indexOf(v) !== -1, Yr = (sr = _ == null ? void 0 : _[C]) != null ? sr : 0, Xr = ar ? lr : wt - O[Nt] - H[Nt] - Yr + B.altAxis, Qr = ar ? wt + O[Nt] + H[Nt] - Yr - B.altAxis : Zt, Zr = h && ar ? t1(Xr, wt, Qr) : kr(h ? Xr : lr, wt, h ? Qr : Zt);
      b[C] = Zr, K[C] = Zr - wt;
    }
    e.modifiersData[r] = K;
  }
}
const R1 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: D1,
  requiresIfExists: ["offset"]
};
function I1(n) {
  return {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  };
}
function L1(n) {
  return n === $e(n) || !Ke(n) ? Hl(n) : I1(n);
}
function P1(n) {
  var e = n.getBoundingClientRect(), t = Qn(e.width) / n.offsetWidth || 1, r = Qn(e.height) / n.offsetHeight || 1;
  return t !== 1 || r !== 1;
}
function B1(n, e, t) {
  t === void 0 && (t = !1);
  var r = Ke(e), i = Ke(e) && P1(e), o = Xt(e), s = Zn(n, i, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !t) && ((pt(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  $l(o)) && (l = L1(e)), Ke(e) ? (a = Zn(e, !0), a.x += e.clientLeft, a.y += e.clientTop) : o && (a.x = zl(o))), {
    x: s.left + l.scrollLeft - a.x,
    y: s.top + l.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function H1(n) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), r = [];
  n.forEach(function(o) {
    e.set(o.name, o);
  });
  function i(o) {
    t.add(o.name);
    var s = [].concat(o.requires || [], o.requiresIfExists || []);
    s.forEach(function(l) {
      if (!t.has(l)) {
        var a = e.get(l);
        a && i(a);
      }
    }), r.push(o);
  }
  return n.forEach(function(o) {
    t.has(o.name) || i(o);
  }), r;
}
function z1(n) {
  var e = H1(n);
  return Yv.reduce(function(t, r) {
    return t.concat(e.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function $1(n) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(n());
      });
    })), e;
  };
}
function F1(n) {
  var e = n.reduce(function(t, r) {
    var i = t[r.name];
    return t[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
var Dc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Rc() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function V1(n) {
  n === void 0 && (n = {});
  var e = n, t = e.defaultModifiers, r = t === void 0 ? [] : t, i = e.defaultOptions, o = i === void 0 ? Dc : i;
  return function(l, a, c) {
    c === void 0 && (c = o);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Dc, o),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, h = {
      state: u,
      setOptions: function(v) {
        var w = typeof v == "function" ? v(u.options) : v;
        g(), u.options = Object.assign({}, o, u.options, w), u.scrollParents = {
          reference: kn(l) ? Cr(l) : l.contextElement ? Cr(l.contextElement) : [],
          popper: Cr(a)
        };
        var k = z1(F1([].concat(r, u.options.modifiers)));
        return u.orderedModifiers = k.filter(function(m) {
          return m.enabled;
        }), p(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var v = u.elements, w = v.reference, k = v.popper;
          if (Rc(w, k)) {
            u.rects = {
              reference: B1(w, _r(k), u.options.strategy === "fixed"),
              popper: Pl(k)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(B) {
              return u.modifiersData[B.name] = Object.assign({}, B.data);
            });
            for (var m = 0; m < u.orderedModifiers.length; m++) {
              if (u.reset === !0) {
                u.reset = !1, m = -1;
                continue;
              }
              var C = u.orderedModifiers[m], b = C.fn, O = C.options, H = O === void 0 ? {} : O, E = C.name;
              typeof b == "function" && (u = b({
                state: u,
                options: H,
                name: E,
                instance: h
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: $1(function() {
        return new Promise(function(y) {
          h.forceUpdate(), y(u);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!Rc(l, a))
      return h;
    h.setOptions(c).then(function(y) {
      !f && c.onFirstUpdate && c.onFirstUpdate(y);
    });
    function p() {
      u.orderedModifiers.forEach(function(y) {
        var v = y.name, w = y.options, k = w === void 0 ? {} : w, m = y.effect;
        if (typeof m == "function") {
          var C = m({
            state: u,
            name: v,
            instance: h,
            options: k
          }), b = function() {
          };
          d.push(C || b);
        }
      });
    }
    function g() {
      d.forEach(function(y) {
        return y();
      }), d = [];
    }
    return h;
  };
}
var j1 = [d1, A1, c1, Qd, E1, C1, R1, o1, S1], W1 = /* @__PURE__ */ V1({
  defaultModifiers: j1
}), _1 = "tippy-box", lf = "tippy-content", U1 = "tippy-backdrop", af = "tippy-arrow", cf = "tippy-svg-arrow", tn = {
  passive: !0,
  capture: !0
}, uf = function() {
  return document.body;
};
function K1(n, e) {
  return {}.hasOwnProperty.call(n, e);
}
function hs(n, e, t) {
  if (Array.isArray(n)) {
    var r = n[e];
    return r ?? (Array.isArray(t) ? t[e] : t);
  }
  return n;
}
function Fl(n, e) {
  var t = {}.toString.call(n);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
function df(n, e) {
  return typeof n == "function" ? n.apply(void 0, e) : n;
}
function Ic(n, e) {
  if (e === 0)
    return n;
  var t;
  return function(r) {
    clearTimeout(t), t = setTimeout(function() {
      n(r);
    }, e);
  };
}
function q1(n, e) {
  var t = Object.assign({}, n);
  return e.forEach(function(r) {
    delete t[r];
  }), t;
}
function J1(n) {
  return n.split(/\s+/).filter(Boolean);
}
function Bn(n) {
  return [].concat(n);
}
function Lc(n, e) {
  n.indexOf(e) === -1 && n.push(e);
}
function G1(n) {
  return n.filter(function(e, t) {
    return n.indexOf(e) === t;
  });
}
function Y1(n) {
  return n.split("-")[0];
}
function wo(n) {
  return [].slice.call(n);
}
function Pc(n) {
  return Object.keys(n).reduce(function(e, t) {
    return n[t] !== void 0 && (e[t] = n[t]), e;
  }, {});
}
function xr() {
  return document.createElement("div");
}
function Hr(n) {
  return ["Element", "Fragment"].some(function(e) {
    return Fl(n, e);
  });
}
function X1(n) {
  return Fl(n, "NodeList");
}
function Q1(n) {
  return Fl(n, "MouseEvent");
}
function Z1(n) {
  return !!(n && n._tippy && n._tippy.reference === n);
}
function ew(n) {
  return Hr(n) ? [n] : X1(n) ? wo(n) : Array.isArray(n) ? n : wo(document.querySelectorAll(n));
}
function ps(n, e) {
  n.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
function Bc(n, e) {
  n.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
function tw(n) {
  var e, t = Bn(n), r = t[0];
  return r != null && (e = r.ownerDocument) != null && e.body ? r.ownerDocument : document;
}
function nw(n, e) {
  var t = e.clientX, r = e.clientY;
  return n.every(function(i) {
    var o = i.popperRect, s = i.popperState, l = i.props, a = l.interactiveBorder, c = Y1(s.placement), u = s.modifiersData.offset;
    if (!u)
      return !0;
    var d = c === "bottom" ? u.top.y : 0, f = c === "top" ? u.bottom.y : 0, h = c === "right" ? u.left.x : 0, p = c === "left" ? u.right.x : 0, g = o.top - r + d > a, y = r - o.bottom - f > a, v = o.left - t + h > a, w = t - o.right - p > a;
    return g || y || v || w;
  });
}
function ms(n, e, t) {
  var r = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(i) {
    n[r](i, t);
  });
}
function Hc(n, e) {
  for (var t = e; t; ) {
    var r;
    if (n.contains(t))
      return !0;
    t = t.getRootNode == null || (r = t.getRootNode()) == null ? void 0 : r.host;
  }
  return !1;
}
var lt = {
  isTouch: !1
}, zc = 0;
function rw() {
  lt.isTouch || (lt.isTouch = !0, window.performance && document.addEventListener("mousemove", ff));
}
function ff() {
  var n = performance.now();
  n - zc < 20 && (lt.isTouch = !1, document.removeEventListener("mousemove", ff)), zc = n;
}
function iw() {
  var n = document.activeElement;
  if (Z1(n)) {
    var e = n._tippy;
    n.blur && !e.state.isVisible && n.blur();
  }
}
function ow() {
  document.addEventListener("touchstart", rw, tn), window.addEventListener("blur", iw);
}
var sw = typeof window < "u" && typeof document < "u", lw = sw ? (
  // @ts-ignore
  !!window.msCrypto
) : !1;
function Rn(n) {
  var e = n === "destroy" ? "n already-" : " ";
  return [n + "() was called on a" + e + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
function $c(n) {
  var e = /[ \t]{2,}/g, t = /^[ \t]*/gm;
  return n.replace(e, " ").replace(t, "").trim();
}
function aw(n) {
  return $c(`
  %ctippy.js

  %c` + $c(n) + `

  %c👷‍ This is a development-only message. It will be removed in production.
  `);
}
function hf(n) {
  return [
    aw(n),
    // title
    "color: #00C584; font-size: 1.3em; font-weight: bold;",
    // message
    "line-height: 1.5",
    // footer
    "color: #a6a095;"
  ];
}
var zr;
process.env.NODE_ENV !== "production" && cw();
function cw() {
  zr = /* @__PURE__ */ new Set();
}
function Tt(n, e) {
  if (n && !zr.has(e)) {
    var t;
    zr.add(e), (t = console).warn.apply(t, hf(e));
  }
}
function Qs(n, e) {
  if (n && !zr.has(e)) {
    var t;
    zr.add(e), (t = console).error.apply(t, hf(e));
  }
}
function uw(n) {
  var e = !n, t = Object.prototype.toString.call(n) === "[object Object]" && !n.addEventListener;
  Qs(e, ["tippy() was passed", "`" + String(n) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" ")), Qs(t, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
var pf = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, dw = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, ze = Object.assign({
  appendTo: uf,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: !0,
  ignoreAttributes: !1,
  interactive: !1,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function() {
  },
  onBeforeUpdate: function() {
  },
  onCreate: function() {
  },
  onDestroy: function() {
  },
  onHidden: function() {
  },
  onHide: function() {
  },
  onMount: function() {
  },
  onShow: function() {
  },
  onShown: function() {
  },
  onTrigger: function() {
  },
  onUntrigger: function() {
  },
  onClickOutside: function() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: !1,
  touch: !0,
  trigger: "mouseenter focus",
  triggerTarget: null
}, pf, dw), fw = Object.keys(ze), hw = function(e) {
  process.env.NODE_ENV !== "production" && gf(e, []);
  var t = Object.keys(e);
  t.forEach(function(r) {
    ze[r] = e[r];
  });
};
function mf(n) {
  var e = n.plugins || [], t = e.reduce(function(r, i) {
    var o = i.name, s = i.defaultValue;
    if (o) {
      var l;
      r[o] = n[o] !== void 0 ? n[o] : (l = ze[o]) != null ? l : s;
    }
    return r;
  }, {});
  return Object.assign({}, n, t);
}
function pw(n, e) {
  var t = e ? Object.keys(mf(Object.assign({}, ze, {
    plugins: e
  }))) : fw, r = t.reduce(function(i, o) {
    var s = (n.getAttribute("data-tippy-" + o) || "").trim();
    if (!s)
      return i;
    if (o === "content")
      i[o] = s;
    else
      try {
        i[o] = JSON.parse(s);
      } catch {
        i[o] = s;
      }
    return i;
  }, {});
  return r;
}
function Fc(n, e) {
  var t = Object.assign({}, e, {
    content: df(e.content, [n])
  }, e.ignoreAttributes ? {} : pw(n, e.plugins));
  return t.aria = Object.assign({}, ze.aria, t.aria), t.aria = {
    expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded,
    content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content
  }, t;
}
function gf(n, e) {
  n === void 0 && (n = {}), e === void 0 && (e = []);
  var t = Object.keys(n);
  t.forEach(function(r) {
    var i = q1(ze, Object.keys(pf)), o = !K1(i, r);
    o && (o = e.filter(function(s) {
      return s.name === r;
    }).length === 0), Tt(o, ["`" + r + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", `

`, `All props: https://atomiks.github.io/tippyjs/v6/all-props/
`, "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
var mw = function() {
  return "innerHTML";
};
function Zs(n, e) {
  n[mw()] = e;
}
function Vc(n) {
  var e = xr();
  return n === !0 ? e.className = af : (e.className = cf, Hr(n) ? e.appendChild(n) : Zs(e, n)), e;
}
function jc(n, e) {
  Hr(e.content) ? (Zs(n, ""), n.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? Zs(n, e.content) : n.textContent = e.content);
}
function el(n) {
  var e = n.firstElementChild, t = wo(e.children);
  return {
    box: e,
    content: t.find(function(r) {
      return r.classList.contains(lf);
    }),
    arrow: t.find(function(r) {
      return r.classList.contains(af) || r.classList.contains(cf);
    }),
    backdrop: t.find(function(r) {
      return r.classList.contains(U1);
    })
  };
}
function yf(n) {
  var e = xr(), t = xr();
  t.className = _1, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var r = xr();
  r.className = lf, r.setAttribute("data-state", "hidden"), jc(r, n.props), e.appendChild(t), t.appendChild(r), i(n.props, n.props);
  function i(o, s) {
    var l = el(e), a = l.box, c = l.content, u = l.arrow;
    s.theme ? a.setAttribute("data-theme", s.theme) : a.removeAttribute("data-theme"), typeof s.animation == "string" ? a.setAttribute("data-animation", s.animation) : a.removeAttribute("data-animation"), s.inertia ? a.setAttribute("data-inertia", "") : a.removeAttribute("data-inertia"), a.style.maxWidth = typeof s.maxWidth == "number" ? s.maxWidth + "px" : s.maxWidth, s.role ? a.setAttribute("role", s.role) : a.removeAttribute("role"), (o.content !== s.content || o.allowHTML !== s.allowHTML) && jc(c, n.props), s.arrow ? u ? o.arrow !== s.arrow && (a.removeChild(u), a.appendChild(Vc(s.arrow))) : a.appendChild(Vc(s.arrow)) : u && a.removeChild(u);
  }
  return {
    popper: e,
    onUpdate: i
  };
}
yf.$$tippy = !0;
var gw = 1, bi = [], gs = [];
function yw(n, e) {
  var t = Fc(n, Object.assign({}, ze, mf(Pc(e)))), r, i, o, s = !1, l = !1, a = !1, c = !1, u, d, f, h = [], p = Ic(Kr, t.interactiveDebounce), g, y = gw++, v = null, w = G1(t.plugins), k = {
    // Is the instance currently enabled?
    isEnabled: !0,
    // Is the tippy currently showing and not transitioning out?
    isVisible: !1,
    // Has the instance been destroyed?
    isDestroyed: !1,
    // Is the tippy currently mounted to the DOM?
    isMounted: !1,
    // Has the tippy finished transitioning in?
    isShown: !1
  }, m = {
    // properties
    id: y,
    reference: n,
    popper: xr(),
    popperInstance: v,
    props: t,
    state: k,
    plugins: w,
    // methods
    clearDelayTimeouts: Xr,
    setProps: Qr,
    setContent: Zr,
    show: wf,
    hide: kf,
    hideWithInteractivity: Cf,
    enable: ar,
    disable: Yr,
    unmount: xf,
    destroy: Sf
  };
  if (!t.render)
    return process.env.NODE_ENV !== "production" && Qs(!0, "render() function has not been supplied."), m;
  var C = t.render(m), b = C.popper, O = C.onUpdate;
  b.setAttribute("data-tippy-root", ""), b.id = "tippy-" + m.id, m.popper = b, n._tippy = m, b._tippy = m;
  var H = w.map(function(x) {
    return x.fn(m);
  }), E = n.hasAttribute("aria-expanded");
  return Mn(), ve(), X(), J("onCreate", [m]), t.showOnCreate && lr(), b.addEventListener("mouseenter", function() {
    m.props.interactive && m.state.isVisible && m.clearDelayTimeouts();
  }), b.addEventListener("mouseleave", function() {
    m.props.interactive && m.props.trigger.indexOf("mouseenter") >= 0 && ce().addEventListener("mousemove", p);
  }), m;
  function B() {
    var x = m.props.touch;
    return Array.isArray(x) ? x : [x, 0];
  }
  function _() {
    return B()[0] === "hold";
  }
  function K() {
    var x;
    return !!((x = m.props.render) != null && x.$$tippy);
  }
  function q() {
    return g || n;
  }
  function ce() {
    var x = q().parentNode;
    return x ? tw(x) : document;
  }
  function te() {
    return el(b);
  }
  function Q(x) {
    return m.state.isMounted && !m.state.isVisible || lt.isTouch || u && u.type === "focus" ? 0 : hs(m.props.delay, x ? 0 : 1, ze.delay);
  }
  function X(x) {
    x === void 0 && (x = !1), b.style.pointerEvents = m.props.interactive && !x ? "" : "none", b.style.zIndex = "" + m.props.zIndex;
  }
  function J(x, N, P) {
    if (P === void 0 && (P = !0), H.forEach(function(W) {
      W[x] && W[x].apply(W, N);
    }), P) {
      var G;
      (G = m.props)[x].apply(G, N);
    }
  }
  function Be() {
    var x = m.props.aria;
    if (x.content) {
      var N = "aria-" + x.content, P = b.id, G = Bn(m.props.triggerTarget || n);
      G.forEach(function(W) {
        var Me = W.getAttribute(N);
        if (m.state.isVisible)
          W.setAttribute(N, Me ? Me + " " + P : P);
        else {
          var Fe = Me && Me.replace(P, "").trim();
          Fe ? W.setAttribute(N, Fe) : W.removeAttribute(N);
        }
      });
    }
  }
  function ve() {
    if (!(E || !m.props.aria.expanded)) {
      var x = Bn(m.props.triggerTarget || n);
      x.forEach(function(N) {
        m.props.interactive ? N.setAttribute("aria-expanded", m.state.isVisible && N === q() ? "true" : "false") : N.removeAttribute("aria-expanded");
      });
    }
  }
  function gt() {
    ce().removeEventListener("mousemove", p), bi = bi.filter(function(x) {
      return x !== p;
    });
  }
  function Ne(x) {
    if (!(lt.isTouch && (a || x.type === "mousedown"))) {
      var N = x.composedPath && x.composedPath()[0] || x.target;
      if (!(m.props.interactive && Hc(b, N))) {
        if (Bn(m.props.triggerTarget || n).some(function(P) {
          return Hc(P, N);
        })) {
          if (lt.isTouch || m.state.isVisible && m.props.trigger.indexOf("click") >= 0)
            return;
        } else
          J("onClickOutside", [m, x]);
        m.props.hideOnClick === !0 && (m.clearDelayTimeouts(), m.hide(), l = !0, setTimeout(function() {
          l = !1;
        }), m.state.isMounted || bt());
      }
    }
  }
  function Qt() {
    a = !0;
  }
  function yt() {
    a = !1;
  }
  function Ye() {
    var x = ce();
    x.addEventListener("mousedown", Ne, !0), x.addEventListener("touchend", Ne, tn), x.addEventListener("touchstart", yt, tn), x.addEventListener("touchmove", Qt, tn);
  }
  function bt() {
    var x = ce();
    x.removeEventListener("mousedown", Ne, !0), x.removeEventListener("touchend", Ne, tn), x.removeEventListener("touchstart", yt, tn), x.removeEventListener("touchmove", Qt, tn);
  }
  function Sn(x, N) {
    Tn(x, function() {
      !m.state.isVisible && b.parentNode && b.parentNode.contains(b) && N();
    });
  }
  function vt(x, N) {
    Tn(x, N);
  }
  function Tn(x, N) {
    var P = te().box;
    function G(W) {
      W.target === P && (ms(P, "remove", G), N());
    }
    if (x === 0)
      return N();
    ms(P, "remove", d), ms(P, "add", G), d = G;
  }
  function At(x, N, P) {
    P === void 0 && (P = !1);
    var G = Bn(m.props.triggerTarget || n);
    G.forEach(function(W) {
      W.addEventListener(x, N, P), h.push({
        node: W,
        eventType: x,
        handler: N,
        options: P
      });
    });
  }
  function Mn() {
    _() && (At("touchstart", ir, {
      passive: !0
    }), At("touchend", qr, {
      passive: !0
    })), J1(m.props.trigger).forEach(function(x) {
      if (x !== "manual")
        switch (At(x, ir), x) {
          case "mouseenter":
            At("mouseleave", qr);
            break;
          case "focus":
            At(lw ? "focusout" : "blur", or);
            break;
          case "focusin":
            At("focusout", or);
            break;
        }
    });
  }
  function Ur() {
    h.forEach(function(x) {
      var N = x.node, P = x.eventType, G = x.handler, W = x.options;
      N.removeEventListener(P, G, W);
    }), h = [];
  }
  function ir(x) {
    var N, P = !1;
    if (!(!m.state.isEnabled || sr(x) || l)) {
      var G = ((N = u) == null ? void 0 : N.type) === "focus";
      u = x, g = x.currentTarget, ve(), !m.state.isVisible && Q1(x) && bi.forEach(function(W) {
        return W(x);
      }), x.type === "click" && (m.props.trigger.indexOf("mouseenter") < 0 || s) && m.props.hideOnClick !== !1 && m.state.isVisible ? P = !0 : lr(x), x.type === "click" && (s = !P), P && !G && Zt(x);
    }
  }
  function Kr(x) {
    var N = x.target, P = q().contains(N) || b.contains(N);
    if (!(x.type === "mousemove" && P)) {
      var G = Nt().concat(b).map(function(W) {
        var Me, Fe = W._tippy, En = (Me = Fe.popperInstance) == null ? void 0 : Me.state;
        return En ? {
          popperRect: W.getBoundingClientRect(),
          popperState: En,
          props: t
        } : null;
      }).filter(Boolean);
      nw(G, x) && (gt(), Zt(x));
    }
  }
  function qr(x) {
    var N = sr(x) || m.props.trigger.indexOf("click") >= 0 && s;
    if (!N) {
      if (m.props.interactive) {
        m.hideWithInteractivity(x);
        return;
      }
      Zt(x);
    }
  }
  function or(x) {
    m.props.trigger.indexOf("focusin") < 0 && x.target !== q() || m.props.interactive && x.relatedTarget && b.contains(x.relatedTarget) || Zt(x);
  }
  function sr(x) {
    return lt.isTouch ? _() !== x.type.indexOf("touch") >= 0 : !1;
  }
  function Jr() {
    Gr();
    var x = m.props, N = x.popperOptions, P = x.placement, G = x.offset, W = x.getReferenceClientRect, Me = x.moveTransition, Fe = K() ? el(b).arrow : null, En = W ? {
      getBoundingClientRect: W,
      contextElement: W.contextElement || q()
    } : n, jl = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(ei) {
        var On = ei.state;
        if (K()) {
          var Tf = te(), $o = Tf.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(ti) {
            ti === "placement" ? $o.setAttribute("data-placement", On.placement) : On.attributes.popper["data-popper-" + ti] ? $o.setAttribute("data-" + ti, "") : $o.removeAttribute("data-" + ti);
          }), On.attributes.popper = {};
        }
      }
    }, en = [{
      name: "offset",
      options: {
        offset: G
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !Me
      }
    }, jl];
    K() && Fe && en.push({
      name: "arrow",
      options: {
        element: Fe,
        padding: 3
      }
    }), en.push.apply(en, (N == null ? void 0 : N.modifiers) || []), m.popperInstance = W1(En, b, Object.assign({}, N, {
      placement: P,
      onFirstUpdate: f,
      modifiers: en
    }));
  }
  function Gr() {
    m.popperInstance && (m.popperInstance.destroy(), m.popperInstance = null);
  }
  function wt() {
    var x = m.props.appendTo, N, P = q();
    m.props.interactive && x === uf || x === "parent" ? N = P.parentNode : N = df(x, [P]), N.contains(b) || N.appendChild(b), m.state.isMounted = !0, Jr(), process.env.NODE_ENV !== "production" && Tt(m.props.interactive && x === ze.appendTo && P.nextElementSibling !== b, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", `

`, "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", `

`, "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", `

`, "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
  }
  function Nt() {
    return wo(b.querySelectorAll("[data-tippy-root]"));
  }
  function lr(x) {
    m.clearDelayTimeouts(), x && J("onTrigger", [m, x]), Ye();
    var N = Q(!0), P = B(), G = P[0], W = P[1];
    lt.isTouch && G === "hold" && W && (N = W), N ? r = setTimeout(function() {
      m.show();
    }, N) : m.show();
  }
  function Zt(x) {
    if (m.clearDelayTimeouts(), J("onUntrigger", [m, x]), !m.state.isVisible) {
      bt();
      return;
    }
    if (!(m.props.trigger.indexOf("mouseenter") >= 0 && m.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(x.type) >= 0 && s)) {
      var N = Q(!1);
      N ? i = setTimeout(function() {
        m.state.isVisible && m.hide();
      }, N) : o = requestAnimationFrame(function() {
        m.hide();
      });
    }
  }
  function ar() {
    m.state.isEnabled = !0;
  }
  function Yr() {
    m.hide(), m.state.isEnabled = !1;
  }
  function Xr() {
    clearTimeout(r), clearTimeout(i), cancelAnimationFrame(o);
  }
  function Qr(x) {
    if (process.env.NODE_ENV !== "production" && Tt(m.state.isDestroyed, Rn("setProps")), !m.state.isDestroyed) {
      J("onBeforeUpdate", [m, x]), Ur();
      var N = m.props, P = Fc(n, Object.assign({}, N, Pc(x), {
        ignoreAttributes: !0
      }));
      m.props = P, Mn(), N.interactiveDebounce !== P.interactiveDebounce && (gt(), p = Ic(Kr, P.interactiveDebounce)), N.triggerTarget && !P.triggerTarget ? Bn(N.triggerTarget).forEach(function(G) {
        G.removeAttribute("aria-expanded");
      }) : P.triggerTarget && n.removeAttribute("aria-expanded"), ve(), X(), O && O(N, P), m.popperInstance && (Jr(), Nt().forEach(function(G) {
        requestAnimationFrame(G._tippy.popperInstance.forceUpdate);
      })), J("onAfterUpdate", [m, x]);
    }
  }
  function Zr(x) {
    m.setProps({
      content: x
    });
  }
  function wf() {
    process.env.NODE_ENV !== "production" && Tt(m.state.isDestroyed, Rn("show"));
    var x = m.state.isVisible, N = m.state.isDestroyed, P = !m.state.isEnabled, G = lt.isTouch && !m.props.touch, W = hs(m.props.duration, 0, ze.duration);
    if (!(x || N || P || G) && !q().hasAttribute("disabled") && (J("onShow", [m], !1), m.props.onShow(m) !== !1)) {
      if (m.state.isVisible = !0, K() && (b.style.visibility = "visible"), X(), Ye(), m.state.isMounted || (b.style.transition = "none"), K()) {
        var Me = te(), Fe = Me.box, En = Me.content;
        ps([Fe, En], 0);
      }
      f = function() {
        var en;
        if (!(!m.state.isVisible || c)) {
          if (c = !0, b.offsetHeight, b.style.transition = m.props.moveTransition, K() && m.props.animation) {
            var zo = te(), ei = zo.box, On = zo.content;
            ps([ei, On], W), Bc([ei, On], "visible");
          }
          Be(), ve(), Lc(gs, m), (en = m.popperInstance) == null || en.forceUpdate(), J("onMount", [m]), m.props.animation && K() && vt(W, function() {
            m.state.isShown = !0, J("onShown", [m]);
          });
        }
      }, wt();
    }
  }
  function kf() {
    process.env.NODE_ENV !== "production" && Tt(m.state.isDestroyed, Rn("hide"));
    var x = !m.state.isVisible, N = m.state.isDestroyed, P = !m.state.isEnabled, G = hs(m.props.duration, 1, ze.duration);
    if (!(x || N || P) && (J("onHide", [m], !1), m.props.onHide(m) !== !1)) {
      if (m.state.isVisible = !1, m.state.isShown = !1, c = !1, s = !1, K() && (b.style.visibility = "hidden"), gt(), bt(), X(!0), K()) {
        var W = te(), Me = W.box, Fe = W.content;
        m.props.animation && (ps([Me, Fe], G), Bc([Me, Fe], "hidden"));
      }
      Be(), ve(), m.props.animation ? K() && Sn(G, m.unmount) : m.unmount();
    }
  }
  function Cf(x) {
    process.env.NODE_ENV !== "production" && Tt(m.state.isDestroyed, Rn("hideWithInteractivity")), ce().addEventListener("mousemove", p), Lc(bi, p), p(x);
  }
  function xf() {
    process.env.NODE_ENV !== "production" && Tt(m.state.isDestroyed, Rn("unmount")), m.state.isVisible && m.hide(), m.state.isMounted && (Gr(), Nt().forEach(function(x) {
      x._tippy.unmount();
    }), b.parentNode && b.parentNode.removeChild(b), gs = gs.filter(function(x) {
      return x !== m;
    }), m.state.isMounted = !1, J("onHidden", [m]));
  }
  function Sf() {
    process.env.NODE_ENV !== "production" && Tt(m.state.isDestroyed, Rn("destroy")), !m.state.isDestroyed && (m.clearDelayTimeouts(), m.unmount(), Ur(), delete n._tippy, m.state.isDestroyed = !0, J("onDestroy", [m]));
  }
}
function xn(n, e) {
  e === void 0 && (e = {});
  var t = ze.plugins.concat(e.plugins || []);
  process.env.NODE_ENV !== "production" && (uw(n), gf(e, t)), ow();
  var r = Object.assign({}, e, {
    plugins: t
  }), i = ew(n);
  if (process.env.NODE_ENV !== "production") {
    var o = Hr(r.content), s = i.length > 1;
    Tt(o && s, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", `

`, "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", `

`, `1) content: element.innerHTML
`, "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var l = i.reduce(function(a, c) {
    var u = c && yw(c, r);
    return u && a.push(u), a;
  }, []);
  return Hr(n) ? l[0] : l;
}
xn.defaultProps = ze;
xn.setDefaultProps = hw;
xn.currentInput = lt;
Object.assign({}, Qd, {
  effect: function(e) {
    var t = e.state, r = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow);
  }
});
xn.setDefaultProps({
  render: yf
});
class bw {
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, updateDelay: o = 250, shouldShow: s }) {
    this.preventHide = !1, this.shouldShow = ({ view: l, state: a, from: c, to: u }) => {
      const { doc: d, selection: f } = a, { empty: h } = f, p = !d.textBetween(c, u).length && vl(a.selection), g = this.element.contains(document.activeElement);
      return !(!(l.hasFocus() || g) || h || p || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.dragstartHandler = () => {
      this.hide();
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: l }) => {
      var a;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      l != null && l.relatedTarget && (!((a = this.element.parentNode) === null || a === void 0) && a.contains(l.relatedTarget)) || this.hide();
    }, this.tippyBlurHandler = (l) => {
      this.blurHandler({ event: l });
    }, this.handleDebouncedUpdate = (l, a) => {
      const c = !(a != null && a.selection.eq(l.state.selection)), u = !(a != null && a.doc.eq(l.state.doc));
      !c && !u || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(l, c, u, a);
      }, this.updateDelay));
    }, this.updateHandler = (l, a, c, u) => {
      var d, f, h;
      const { state: p, composing: g } = l, { selection: y } = p;
      if (g || !a && !c)
        return;
      this.createTooltip();
      const { ranges: w } = y, k = Math.min(...w.map((b) => b.$from.pos)), m = Math.max(...w.map((b) => b.$to.pos));
      if (!((d = this.shouldShow) === null || d === void 0 ? void 0 : d.call(this, {
        editor: this.editor,
        view: l,
        state: p,
        oldState: u,
        from: k,
        to: m
      }))) {
        this.hide();
        return;
      }
      (f = this.tippy) === null || f === void 0 || f.setProps({
        getReferenceClientRect: ((h = this.tippyOptions) === null || h === void 0 ? void 0 : h.getReferenceClientRect) || (() => {
          if (xd(p.selection)) {
            let b = l.nodeDOM(k);
            const O = b.dataset.nodeViewWrapper ? b : b.querySelector("[data-node-view-wrapper]");
            if (O && (b = O.firstChild), b)
              return b.getBoundingClientRect();
          }
          return Sd(l, k, m);
        })
      }), this.show();
    }, this.editor = e, this.element = t, this.view = r, this.updateDelay = o, s && (this.shouldShow = s), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, t = !!e.parentElement;
    this.tippy || !t || (this.tippy = xn(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "top",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, t) {
    const { state: r } = e, i = r.selection.from !== r.selection.to;
    if (this.updateDelay > 0 && i) {
      this.handleDebouncedUpdate(e, t);
      return;
    }
    const o = !(t != null && t.selection.eq(e.state.selection)), s = !(t != null && t.doc.eq(e.state.doc));
    this.updateHandler(e, o, s, t);
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, t;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (t = this.tippy) === null || t === void 0 || t.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const bf = (n) => new se({
  key: typeof n.pluginKey == "string" ? new ae(n.pluginKey) : n.pluginKey,
  view: (e) => new bw({ view: e, ...n })
});
pe.create({
  name: "bubbleMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "bubbleMenu",
      updateDelay: void 0,
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      bf({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        updateDelay: this.options.updateDelay,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
class vw {
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, shouldShow: o }) {
    this.preventHide = !1, this.shouldShow = ({ view: s, state: l }) => {
      const { selection: a } = l, { $anchor: c, empty: u } = a, d = c.depth === 1, f = c.parent.isTextblock && !c.parent.type.spec.code && !c.parent.textContent;
      return !(!s.hasFocus() || !u || !d || !f || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: s }) => {
      var l;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      s != null && s.relatedTarget && (!((l = this.element.parentNode) === null || l === void 0) && l.contains(s.relatedTarget)) || this.hide();
    }, this.tippyBlurHandler = (s) => {
      this.blurHandler({ event: s });
    }, this.editor = e, this.element = t, this.view = r, o && (this.shouldShow = o), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, t = !!e.parentElement;
    this.tippy || !t || (this.tippy = xn(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "right",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, t) {
    var r, i, o;
    const { state: s } = e, { doc: l, selection: a } = s, { from: c, to: u } = a;
    if (t && t.doc.eq(l) && t.selection.eq(a))
      return;
    if (this.createTooltip(), !((r = this.shouldShow) === null || r === void 0 ? void 0 : r.call(this, {
      editor: this.editor,
      view: e,
      state: s,
      oldState: t
    }))) {
      this.hide();
      return;
    }
    (i = this.tippy) === null || i === void 0 || i.setProps({
      getReferenceClientRect: ((o = this.tippyOptions) === null || o === void 0 ? void 0 : o.getReferenceClientRect) || (() => Sd(e, c, u))
    }), this.show();
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, t;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (t = this.tippy) === null || t === void 0 || t.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const vf = (n) => new se({
  key: typeof n.pluginKey == "string" ? new ae(n.pluginKey) : n.pluginKey,
  view: (e) => new vw({ view: e, ...n })
});
pe.create({
  name: "floatingMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "floatingMenu",
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      vf({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
qt({
  name: "BubbleMenu",
  props: {
    pluginKey: {
      type: [String, Object],
      default: "bubbleMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    updateDelay: {
      type: Number,
      default: void 0
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(n, { slots: e }) {
    const t = ct(null);
    return tl(() => {
      const { updateDelay: r, editor: i, pluginKey: o, shouldShow: s, tippyOptions: l } = n;
      i.registerPlugin(bf({
        updateDelay: r,
        editor: i,
        element: t.value,
        pluginKey: o,
        shouldShow: s,
        tippyOptions: l
      }));
    }), $r(() => {
      const { pluginKey: r, editor: i } = n;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return tr("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
function Wc(n) {
  return Lf((e, t) => ({
    get() {
      return e(), n;
    },
    set(r) {
      n = r, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          t();
        });
      });
    }
  }));
}
class ww extends qy {
  constructor(e = {}) {
    return super(e), this.contentComponent = null, this.appContext = null, this.reactiveState = Wc(this.view.state), this.reactiveExtensionStorage = Wc(this.extensionStorage), this.on("beforeTransaction", ({ nextState: t }) => {
      this.reactiveState.value = t, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), Kc(this);
  }
  get state() {
    return this.reactiveState ? this.reactiveState.value : this.view.state;
  }
  get storage() {
    return this.reactiveExtensionStorage ? this.reactiveExtensionStorage.value : super.storage;
  }
  /**
   * Register a ProseMirror plugin.
   */
  registerPlugin(e, t) {
    super.registerPlugin(e, t), this.reactiveState.value = this.view.state;
  }
  /**
   * Unregister a ProseMirror plugin.
   */
  unregisterPlugin(e) {
    super.unregisterPlugin(e), this.reactiveState.value = this.view.state;
  }
}
const kw = qt({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(n) {
    const e = ct(), t = Af();
    return Nf(() => {
      const r = n.editor;
      r && r.options.element && e.value && Df(() => {
        if (!e.value || !r.options.element.firstChild)
          return;
        const i = $(e.value);
        e.value.append(...r.options.element.childNodes), r.contentComponent = t.ctx._, t && (r.appContext = {
          ...t.appContext,
          // Vue internally uses prototype chain to forward/shadow injects across the entire component chain
          // so don't use object spread operator or 'Object.assign' and just set `provides` as is on editor's appContext
          // @ts-expect-error forward instance's 'provides' into appContext
          provides: t.provides
        }), r.setOptions({
          element: i
        }), r.createNodeViews();
      });
    }), $r(() => {
      const r = n.editor;
      if (!r || (r.isDestroyed || r.view.setProps({
        nodeViews: {}
      }), r.contentComponent = null, r.appContext = null, !r.options.element.firstChild))
        return;
      const i = document.createElement("div");
      i.append(...r.options.element.childNodes), r.setOptions({
        element: i
      });
    }), { rootEl: e };
  },
  render() {
    return tr("div", {
      ref: (n) => {
        this.rootEl = n;
      }
    });
  }
});
qt({
  name: "FloatingMenu",
  props: {
    pluginKey: {
      // TODO: TypeScript breaks :(
      // type: [String, Object as PropType<Exclude<FloatingMenuPluginProps['pluginKey'], string>>],
      type: null,
      default: "floatingMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(n, { slots: e }) {
    const t = ct(null);
    return tl(() => {
      const { pluginKey: r, editor: i, tippyOptions: o, shouldShow: s } = n;
      i.registerPlugin(vf({
        pluginKey: r,
        editor: i,
        element: t.value,
        tippyOptions: o,
        shouldShow: s
      }));
    }), $r(() => {
      const { pluginKey: r, editor: i } = n;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return tr("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
qt({
  name: "NodeViewContent",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  render() {
    return tr(this.as, {
      style: {
        whiteSpace: "pre-wrap"
      },
      "data-node-view-content": ""
    });
  }
});
qt({
  name: "NodeViewWrapper",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  inject: ["onDragStart", "decorationClasses"],
  render() {
    var n, e;
    return tr(this.as, {
      // @ts-ignore
      class: this.decorationClasses,
      style: {
        whiteSpace: "normal"
      },
      "data-node-view-wrapper": "",
      // @ts-ignore (https://github.com/vuejs/vue-next/issues/3031)
      onDragstart: this.onDragStart
    }, (e = (n = this.$slots).default) === null || e === void 0 ? void 0 : e.call(n));
  }
});
const Cw = (n = {}) => {
  const e = Rf();
  return tl(() => {
    e.value = new ww(n);
  }), $r(() => {
    var t;
    (t = e.value) === null || t === void 0 || t.destroy();
  }), e;
};
class xw {
  constructor(e, { props: t = {}, editor: r }) {
    this.editor = r, this.component = Kc(e), this.el = document.createElement("div"), this.props = If(t), this.renderedComponent = this.renderComponent();
  }
  get element() {
    return this.renderedComponent.el;
  }
  get ref() {
    var e, t, r, i;
    return !((t = (e = this.renderedComponent.vNode) === null || e === void 0 ? void 0 : e.component) === null || t === void 0) && t.exposed ? this.renderedComponent.vNode.component.exposed : (i = (r = this.renderedComponent.vNode) === null || r === void 0 ? void 0 : r.component) === null || i === void 0 ? void 0 : i.proxy;
  }
  renderComponent() {
    let e = tr(this.component, this.props);
    return this.editor.appContext && (e.appContext = this.editor.appContext), typeof document < "u" && this.el && Wl(e, this.el), { vNode: e, destroy: () => {
      this.el && Wl(null, this.el), this.el = null, e = null;
    }, el: this.el ? this.el.firstElementChild : null };
  }
  updateProps(e = {}) {
    Object.entries(e).forEach(([t, r]) => {
      this.props[t] = r;
    }), this.renderComponent();
  }
  destroy() {
    this.renderedComponent.destroy();
  }
}
const Sw = ["title"], Tw = /* @__PURE__ */ qt({
  __name: "TipTapButton",
  props: {
    title: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    }
  },
  setup(n) {
    return (e, t) => (ge(), ke("button", {
      title: n.title,
      class: "tip-tap-button"
    }, [
      De("i", {
        class: _n(["tip-tap-icon", n.icon])
      }, null, 2)
    ], 8, Sw));
  }
}), Vl = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, j = /* @__PURE__ */ Vl(Tw, [["__scopeId", "data-v-0a9b024a"]]), Mw = {}, Ew = { class: "tip-tap-divider" };
function Ow(n, e) {
  return ge(), ke("div", Ew);
}
const Xe = /* @__PURE__ */ Vl(Mw, [["render", Ow], ["__scopeId", "data-v-36e02fe0"]]), Aw = pe.create({
  name: "fileUpload",
  addOptions: {
    // @ts-ignore
    allowedFileTypes: "image/*",
    maximumFileSize: 5,
    // Default to 5 MB
    onBeforeUpload: null,
    onUploadCompleted: null,
    onError: null,
    fileUploadUrl: null
  },
  addCommands() {
    const n = (e) => this.options.allowedFileTypes.split(",").some((r) => e.includes(r.replace("*", "")));
    return {
      uploadFile: () => ({ editor: e }) => {
        const t = document.createElement("input");
        return t.type = "file", t.accept = this.options.allowedFileTypes, t.onchange = async () => {
          var o;
          const r = (o = t.files) == null ? void 0 : o[0], i = this.options.maximumFileSize * 1024 * 1024;
          if (r && r.size <= i && n(r.type)) {
            const s = new FormData();
            s.append("file", r);
            const l = { formData: s };
            this.options.onBeforeUpload && this.options.onBeforeUpload(l);
            try {
              const a = await fetch(this.options.fileUploadUrl, {
                method: "POST",
                body: s
              });
              if (!a.ok)
                throw new Error(`Upload failed: ${a.statusText}`);
              const c = await a.json();
              this.options.onUploadCompleted(
                {
                  target: {
                    response: JSON.stringify(c)
                  }
                },
                e
              );
            } catch (a) {
              this.options.onError && this.options.onError(a.message);
            }
          } else
            this.options.onError ? this.options.onError(
              "File is too large or not an allowed file type"
            ) : alert("File is too large or not an allowed file type");
        }, t.click(), !0;
      }
    };
  }
}), Nw = {
  props: {
    items: {
      type: Array,
      required: !0
    },
    command: {
      type: Function,
      required: !0
    }
  },
  data() {
    return {
      selectedIndex: 0
    };
  },
  watch: {
    items() {
      this.selectedIndex = 0;
    }
  },
  methods: {
    onKeyDown({ event: n }) {
      return n.key === "ArrowUp" ? (this.upHandler(), !0) : n.key === "ArrowDown" ? (this.downHandler(), !0) : n.key === "Enter" ? (this.enterHandler(), !0) : !1;
    },
    upHandler() {
      this.selectedIndex = (this.selectedIndex + this.items.length - 1) % this.items.length;
    },
    downHandler() {
      this.selectedIndex = (this.selectedIndex + 1) % this.items.length;
    },
    enterHandler() {
      this.selectItem(this.selectedIndex);
    },
    selectItem(n) {
      const e = this.items[n];
      e && this.command({ id: e });
    }
  }
}, Dw = { class: "dropdown-menu" }, Rw = ["onClick"], Iw = {
  key: 1,
  class: "item"
};
function Lw(n, e, t, r, i, o) {
  return ge(), ke("div", Dw, [
    t.items.length ? (ge(!0), ke(Uc, { key: 0 }, Pf(t.items, (s, l) => (ge(), ke("button", {
      class: _n({ "is-selected": l === i.selectedIndex }),
      key: l,
      onClick: (a) => o.selectItem(l)
    }, on(s), 11, Rw))), 128)) : (ge(), ke("div", Iw, "No result"))
  ]);
}
const Pw = /* @__PURE__ */ Vl(Nw, [["render", Lw]]), Bw = {
  items: ({ query: n }) => [
    "Lea Thompson",
    "Cyndi Lauper",
    "Tom Cruise",
    "Madonna",
    "Jerry Hall",
    "Joan Collins",
    "Winona Ryder",
    "Christina Applegate",
    "Alyssa Milano",
    "Molly Ringwald",
    "Ally Sheedy",
    "Debbie Harry",
    "Olivia Newton-John",
    "Elton John",
    "Michael J. Fox",
    "Axl Rose",
    "Emilio Estevez",
    "Ralph Macchio",
    "Rob Lowe",
    "Jennifer Grey",
    "Mickey Rourke",
    "John Cusack",
    "Matthew Broderick",
    "Justine Bateman",
    "Lisa Bonet"
  ].filter((e) => e.toLowerCase().startsWith(n.toLowerCase())).slice(0, 5),
  render: () => {
    let n, e;
    return {
      onStart: (t) => {
        n = new xw(Pw, {
          // using vue 2:
          // parent: this,
          // propsData: props,
          props: t,
          editor: t.editor
        }), t.clientRect && (e = xn("body", {
          getReferenceClientRect: t.clientRect,
          appendTo: () => document.body,
          content: n.element,
          showOnCreate: !0,
          interactive: !0,
          trigger: "manual",
          placement: "bottom-start"
        }));
      },
      onUpdate(t) {
        n.updateProps(t), t.clientRect && e[0].setProps({
          getReferenceClientRect: t.clientRect
        });
      },
      onKeyDown(t) {
        var r;
        return t.event.key === "Escape" ? (e[0].hide(), !0) : (r = n.ref) == null ? void 0 : r.onKeyDown(t);
      },
      onExit() {
        e[0].destroy(), n.destroy();
      }
    };
  }
}, Hw = { class: "tiptap-editor-toolbar2" }, zw = ["id"], $w = {
  height: "20",
  width: "20",
  viewBox: "0 0 20 20"
}, Fw = /* @__PURE__ */ De("circle", {
  r: "10",
  cx: "10",
  cy: "10",
  fill: "#e9ecef"
}, null, -1), Vw = ["stroke-dasharray"], jw = /* @__PURE__ */ De("circle", {
  r: "6",
  cx: "10",
  cy: "10",
  fill: "white"
}, null, -1), Ww = /* @__PURE__ */ qt({
  __name: "TipTapEditor",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    editorId: {
      type: String,
      default: ""
    },
    editorClass: {
      type: [String, Boolean],
      default: ""
    },
    fileUploadUrl: {
      type: [String, Boolean],
      default: !1
    },
    allowedFileTypes: {
      type: String,
      default: "image/*"
    },
    isLimited: {
      type: Boolean,
      default: !0
    },
    characters: {
      type: Number,
      default: 250
    },
    placeholder: {
      type: String,
      default: "Enter your text here"
    }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = ct(!1), i = ct(""), o = () => {
      a("update:modelValue", i.value);
    }, s = () => {
      var k, m;
      r.value = !r.value, r.value ? i.value = ((k = h.value) == null ? void 0 : k.getHTML()) || "" : ((m = h.value) == null || m.commands.setContent(i.value), a("update:modelValue", i.value));
    }, l = () => {
      var k;
      (k = h.value) == null || k.chain().focus().uploadFile().run();
    }, a = e, c = ct(!1), u = (k) => {
      k.formData.append("_token", localStorage.getItem("_token"));
    }, d = (k, m) => {
      const C = JSON.parse(k.target.response);
      m.chain().setImage({
        src: C.fileUrl,
        alt: C.readableName,
        title: C.readableName
      }).run();
    }, f = (k) => {
      console.error(k);
    }, h = Cw({
      content: t.modelValue,
      extensions: [
        zv,
        Nb,
        $b.configure({
          HTMLAttributes: {
            class: "mention"
          },
          suggestion: Bw
        }),
        Ud,
        Wd,
        _d,
        Fb.configure({
          limit: 250
        }),
        Vb.configure({
          placeholder: ({ node: k }) => k.type.name === "heading" ? "What’s the title?" : t.placeholder
        }),
        C0.configure({
          openOnClick: !1
        }),
        Xy.configure({
          inline: !1
        }),
        Lb.configure({
          controls: !1
        }),
        Mb.configure({
          resizable: !0
        }),
        Ab,
        Ob,
        Eb,
        Aw.configure({
          allowedFileTypes: t.allowedFileTypes,
          maximumFileSize: 5,
          onBeforeUpload: u,
          onUploadCompleted: d,
          onError: f,
          fileUploadUrl: t.fileUploadUrl
        })
      ],
      onUpdate: ({ editor: k }) => {
        a("update:modelValue", k.getHTML());
      }
    });
    Bf(
      () => t.modelValue,
      (k) => {
        var m, C;
        k !== ((m = h.value) == null ? void 0 : m.getHTML()) && ((C = h.value) == null || C.commands.setContent(k));
      }
    ), $r(() => {
      var k;
      (k = h.value) == null || k.destroy();
    });
    const p = () => {
      c.value = !c.value;
    }, g = () => {
      var C, b, O;
      const k = (C = h.value) == null ? void 0 : C.getAttributes("link").href, m = window.prompt("URL", k);
      if (m !== null) {
        if (m === "") {
          (b = h.value) == null || b.chain().focus().extendMarkRange("link").unsetLink().run();
          return;
        }
        (O = h.value) == null || O.chain().focus().extendMarkRange("link").setLink({ href: m }).run();
      }
    }, y = () => {
      var m;
      const k = prompt("Enter YouTube URL");
      k && ((m = h.value) == null || m.commands.setYoutubeVideo({
        src: k,
        width: 640,
        height: 480
      }));
    }, v = ct(t.characters), w = _c(() => {
      var k;
      return Math.round(100 / v.value * ((k = h.value) == null ? void 0 : k.storage.characterCount.characters())) || 0;
    });
    return (k, m) => (ge(), ke("div", null, [
      De("div", {
        class: _n(["tiptap-editor-toolbar1", n.editorClass])
      }, [
        R(j, {
          title: "Bold",
          icon: "ri-bold",
          onClick: m[0] || (m[0] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.toggleBold();
          }, ["prevent"]))
        }),
        R(j, {
          title: "Italic",
          icon: "ri-italic",
          onClick: m[1] || (m[1] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.toggleItalic();
          }, ["prevent"]))
        }),
        R(j, {
          title: "Underline",
          icon: "ri-underline",
          onClick: m[2] || (m[2] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.toggleUnderline();
          }, ["prevent"]))
        }),
        R(j, {
          title: "Strikethrough",
          icon: "ri-strikethrough",
          onClick: m[3] || (m[3] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.toggleStrike();
          }, ["prevent"]))
        }),
        R(Xe),
        R(j, {
          title: "Heading 1",
          icon: "ri-h-1",
          onClick: m[4] || (m[4] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.toggleHeading({ level: 1 });
          }, ["prevent"]))
        }),
        R(j, {
          title: "Heading 2",
          icon: "ri-h-2",
          onClick: m[5] || (m[5] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.toggleHeading({ level: 2 });
          }, ["prevent"]))
        }),
        R(j, {
          title: "Heading 3",
          icon: "ri-h-3",
          onClick: m[6] || (m[6] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.toggleHeading({ level: 3 });
          }, ["prevent"]))
        }),
        R(j, {
          title: "Heading 4",
          icon: "ri-h-4",
          onClick: m[7] || (m[7] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.toggleHeading({ level: 4 });
          }, ["prevent"]))
        }),
        R(j, {
          title: "Paragraph",
          icon: "ri-paragraph",
          onClick: m[8] || (m[8] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.setParagraph();
          }, ["prevent"]))
        }),
        R(j, {
          title: "List",
          icon: "ri-list-unordered",
          onClick: m[9] || (m[9] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.toggleBulletList();
          }, ["prevent"]))
        }),
        R(j, {
          title: "Ordered Link",
          icon: "ri-list-ordered",
          onClick: m[10] || (m[10] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.toggleOrderedList();
          }, ["prevent"]))
        }),
        R(j, {
          title: "Add Link",
          icon: "ri-link-m",
          onClick: V(g, ["prevent"])
        }),
        R(j, {
          title: "Remove Link",
          icon: "ri-link-unlink-m",
          onClick: m[11] || (m[11] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.unsetLink();
          }, ["prevent"]))
        }),
        R(Xe),
        R(j, {
          title: "Line Break",
          icon: "ri-text-wrap",
          onClick: m[12] || (m[12] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.setHardBreak();
          }, ["prevent"]))
        }),
        R(j, {
          title: "Horizontal Rule",
          icon: "ri-separator",
          onClick: m[13] || (m[13] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.setHorizontalRule();
          }, ["prevent"]))
        }),
        R(j, {
          title: "Clear Format",
          icon: "ri-format-clear",
          onClick: m[14] || (m[14] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.clearNodes();
          }, ["prevent"]))
        }),
        R(Xe),
        n.fileUploadUrl ? (ge(), Hf(j, {
          key: 0,
          title: "Add Image",
          icon: "ri-image-add-line",
          onClick: V(l, ["prevent"])
        })) : Hn("", !0),
        R(j, {
          title: "Add Video",
          icon: "ri-youtube-line",
          onClick: V(y, ["prevent"])
        }),
        R(Xe),
        R(j, {
          title: "Table",
          icon: "ri-table-line",
          onClick: V(p, ["prevent"])
        }),
        R(Xe),
        R(j, {
          title: "Undo",
          icon: "ri-arrow-go-back-line",
          onClick: m[15] || (m[15] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.undo();
          }, ["prevent"]))
        }),
        R(j, {
          title: "Redo",
          icon: "ri-arrow-go-forward-line",
          onClick: m[16] || (m[16] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.redo();
          }, ["prevent"]))
        }),
        R(Xe),
        R(j, {
          title: "Code View",
          icon: "ri-code-box-line",
          onClick: V(s, ["prevent"])
        })
      ], 2),
      Fo(De("div", Hw, [
        R(j, {
          title: "Insert Table",
          icon: "ri-table-2",
          onClick: m[17] || (m[17] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.insertTable({
              rows: 3,
              cols: 3,
              withHeaderRow: !0
            });
          }, ["prevent"]))
        }),
        R(Xe),
        R(j, {
          title: "Add Column Before",
          icon: "ri-layout-3-line",
          onClick: m[18] || (m[18] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.addColumnBefore();
          }, ["prevent"]))
        }),
        R(j, {
          title: "Add Column After",
          icon: "ri-layout-6-line",
          onClick: m[19] || (m[19] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.addColumnAfter();
          }, ["prevent"]))
        }),
        R(j, {
          title: "Delete Column",
          icon: "ri-delete-column",
          onClick: m[20] || (m[20] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.deleteColumn();
          }, ["prevent"]))
        }),
        R(Xe),
        R(j, {
          title: "Add Row Before",
          icon: "ri-insert-row-top",
          onClick: m[21] || (m[21] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.addRowBefore();
          }, ["prevent"]))
        }),
        R(j, {
          title: "Add Row After",
          icon: "ri-insert-row-bottom",
          onClick: m[22] || (m[22] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.addRowAfter();
          }, ["prevent"]))
        }),
        R(j, {
          title: "Delete Row",
          icon: "ri-delete-row",
          onClick: m[23] || (m[23] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.deleteRow();
          }, ["prevent"]))
        }),
        R(Xe),
        R(j, {
          title: "Merge Cells",
          icon: "ri-merge-cells-horizontal",
          onClick: m[24] || (m[24] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.mergeCells();
          }, ["prevent"]))
        }),
        R(j, {
          title: "Split Cell",
          icon: "ri-split-cells-horizontal",
          onClick: m[25] || (m[25] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.splitCell();
          }, ["prevent"]))
        }),
        R(j, {
          title: "Alternate Column Header",
          icon: "ri-archive-drawer-line",
          onClick: m[26] || (m[26] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.toggleHeaderColumn();
          }, ["prevent"]))
        }),
        R(j, {
          title: "Alternate Row Header",
          icon: "ri-archive-drawer-fill",
          onClick: m[27] || (m[27] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.toggleHeaderRow();
          }, ["prevent"]))
        }),
        R(j, {
          title: "Alternate Cell Header",
          icon: "ri-split-cells-vertical",
          onClick: m[28] || (m[28] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.toggleHeaderCell();
          }, ["prevent"]))
        }),
        R(j, {
          title: "Merge or Split",
          icon: "ri-merge-cells-vertical",
          onClick: m[29] || (m[29] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.mergeOrSplit();
          }, ["prevent"]))
        }),
        R(Xe),
        R(j, {
          title: "Go to Next Cell",
          icon: "ri-arrow-right-s-line",
          onClick: m[30] || (m[30] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.chain().focus().goToNextCell().run();
          }, ["prevent"]))
        }),
        R(j, {
          title: "Go to Previous Cell",
          icon: "ri-arrow-left-s-line",
          onClick: m[31] || (m[31] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.chain().focus().goToPreviousCell().run();
          }, ["prevent"]))
        }),
        R(Xe),
        R(j, {
          title: "Fix Table",
          icon: "ri-settings-line",
          onClick: m[32] || (m[32] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.fixTables();
          }, ["prevent"]))
        }),
        R(j, {
          title: "Delete Table",
          icon: "ri-delete-bin-2-line",
          onClick: m[33] || (m[33] = V((C) => {
            var b;
            return (b = $(h)) == null ? void 0 : b.commands.deleteTable();
          }, ["prevent"]))
        })
      ], 512), [
        [Vo, c.value]
      ]),
      Fo(R($(kw), {
        editor: $(h),
        class: "tiptap-editor"
      }, null, 8, ["editor"]), [
        [Vo, !r.value]
      ]),
      Fo(De("textarea", {
        id: n.editorId,
        "onUpdate:modelValue": m[34] || (m[34] = (C) => i.value = C),
        class: "tiptap-code-mode",
        onInput: o
      }, `\r
        `, 40, zw), [
        [Vo, r.value],
        [zf, i.value]
      ]),
      $(h) && n.isLimited ? (ge(), ke("div", {
        key: 0,
        class: _n({
          "character-count": !0,
          "character-count--warning": $(h).storage.characterCount.characters() === v.value
        })
      }, [
        (ge(), ke("svg", $w, [
          Fw,
          De("circle", {
            r: "5",
            cx: "10",
            cy: "10",
            fill: "transparent",
            stroke: "currentColor",
            "stroke-width": "10",
            "stroke-dasharray": `calc(${w.value} * 31.4 / 100) 31.4`,
            transform: "rotate(-90) translate(-20)"
          }, null, 8, Vw),
          jw
        ])),
        $f(" " + on($(h).storage.characterCount.characters()) + " / " + on(v.value) + " characters ", 1)
      ], 2)) : Hn("", !0)
    ]));
  }
}), qw = {
  install(n, e) {
    n.component("AlertDialog", qc), n.component("TipTapEditor", Ww), n.use(Yf, e);
  }
};
export {
  qc as AlertDialog,
  qw as DialogPlugin,
  Ww as TipTapEditor
};
