var __create = Object.create
var __defProp = Object.defineProperty
var __getOwnPropDesc = Object.getOwnPropertyDescriptor
var __getOwnPropNames = Object.getOwnPropertyNames
var __getProtoOf = Object.getPrototypeOf,
  __hasOwnProp = Object.prototype.hasOwnProperty
var __require = ((x) =>
  typeof require < 'u'
    ? require
    : typeof Proxy < 'u'
    ? new Proxy(x, {get: (a, b) => (typeof require < 'u' ? require : a)[b]})
    : x)(function (x) {
  if (typeof require < 'u') return require.apply(this, arguments)
  throw new Error('Dynamic require of "' + x + '" is not supported')
})
var __esm = (fn, res) =>
  function () {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])((fn = 0))), res
  }
var __commonJS = (cb, mod) =>
  function () {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])((mod = {exports: {}}).exports, mod),
      mod.exports
    )
  }
var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: !0})
  },
  __copyProps = (to, from, except, desc) => {
    if ((from && typeof from == 'object') || typeof from == 'function')
      for (let key of __getOwnPropNames(from))
        !__hasOwnProp.call(to, key) &&
          key !== except &&
          __defProp(to, key, {
            get: () => from[key],
            enumerable:
              !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
          })
    return to
  }
var __toESM = (mod, isNodeMode, target) => (
    (target = mod != null ? __create(__getProtoOf(mod)) : {}),
    __copyProps(
      isNodeMode || !mod || !mod.__esModule
        ? __defProp(target, 'default', {value: mod, enumerable: !0})
        : target,
      mod
    )
  ),
  __toCommonJS = (mod) =>
    __copyProps(__defProp({}, '__esModule', {value: !0}), mod)
var __create2 = Object.create,
  __defProp2 = Object.defineProperty,
  __getOwnPropDesc2 = Object.getOwnPropertyDescriptor,
  __getOwnPropNames2 = Object.getOwnPropertyNames,
  __getProtoOf2 = Object.getPrototypeOf,
  __hasOwnProp2 = Object.prototype.hasOwnProperty,
  __commonJS2 = (cb, mod) =>
    function () {
      return (
        mod ||
          (0, cb[__getOwnPropNames2(cb)[0]])(
            (mod = {exports: {}}).exports,
            mod
          ),
        mod.exports
      )
    },
  __copyProps2 = (to, from, except, desc) => {
    if ((from && typeof from == 'object') || typeof from == 'function')
      for (let key of __getOwnPropNames2(from))
        !__hasOwnProp2.call(to, key) &&
          key !== except &&
          __defProp2(to, key, {
            get: () => from[key],
            enumerable:
              !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
          })
    return to
  },
  __toESM2 = (mod, isNodeMode, target) => (
    (target = mod != null ? __create2(__getProtoOf2(mod)) : {}),
    __copyProps2(
      isNodeMode || !mod || !mod.__esModule
        ? __defProp2(target, 'default', {value: mod, enumerable: !0})
        : target,
      mod
    )
  )
export {
  __require,
  __esm,
  __commonJS,
  __export,
  __toESM,
  __toCommonJS,
  __commonJS2,
  __toESM2,
}
