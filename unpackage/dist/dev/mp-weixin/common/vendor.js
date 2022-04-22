(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

function getLocale() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return wx.getSystemInfoSync().language || 'zh-Hans';
}

function setLocale(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale,
  setLocale: setLocale,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"贪吃蛇","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var messages = {};

var locale;

{
  locale = wx.getSystemInfoSync().language;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this2 = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this2.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale$1 = i18n.setLocale;
var getLocale$1 = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, wx.getSystemInfoSync().language || 'zh-Hans');

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 2 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou'){//百度、快手 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' &&
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    // NOTE 此处将 != 修改为 !==。涉及地方太多恐怕测试不到，如果出现数据对比问题，将其修改回来。
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"贪吃蛇","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"贪吃蛇","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"贪吃蛇","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"贪吃蛇","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }

  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      (this.$scope['_triggerEvent'] || this.$scope['triggerEvent'])
        .call(this.$scope, event, {
          __args__: toArray(arguments, 1)
        })
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value)
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value)
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 4 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 5 */
/*!*************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/pages.json ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/*!*************************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/static/images/worm.png ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphODIzMjkyYi01YjNjLTQyMzYtYTVmZS1iNDI2ZjhmYzkzNWUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjQ1ODU5QUVBRTg3MTFFQzkzRDVDNTU5NkVENEM4QjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjQ1ODU5QURBRTg3MTFFQzkzRDVDNTU5NkVENEM4QjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4M2VlMDg0Ni1lNzk1LTRmM2EtOTYxYy00ODRkMjg5MzJhZjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6YTgyMzI5MmItNWIzYy00MjM2LWE1ZmUtYjQyNmY4ZmM5MzVlIi8+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"

/***/ }),
/* 19 */
/*!*******************************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/static/images/snake_body.png ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphODIzMjkyYi01YjNjLTQyMzYtYTVmZS1iNDI2ZjhmYzkzNWUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkFGNjdFRkFBRTg3MTFFQzkzRDVDNTU5NkVENEM4QjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkFGNjdFRjlBRTg3MTFFQzkzRDVDNTU5NkVENEM4QjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4M2VlMDg0Ni1lNzk1LTRmM2EtOTYxYy00ODRkMjg5MzJhZjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6YTgyMzI5MmItNWIzYy00MjM2LWE1ZmUtYjQyNmY4ZmM5MzVlIi8+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"

/***/ }),
/* 20 */
/*!*******************************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/static/images/snake_head.png ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphODIzMjkyYi01YjNjLTQyMzYtYTVmZS1iNDI2ZjhmYzkzNWUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEJEREI4QTFBRTg3MTFFQzkzRDVDNTU5NkVENEM4QjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEJEREI4QTBBRTg3MTFFQzkzRDVDNTU5NkVENEM4QjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4M2VlMDg0Ni1lNzk1LTRmM2EtOTYxYy00ODRkMjg5MzJhZjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6YTgyMzI5MmItNWIzYy00MjM2LWE1ZmUtYjQyNmY4ZmM5MzVlIi8+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"

/***/ }),
/* 21 */
/*!*******************************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/static/images/snake_tail.png ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphODIzMjkyYi01YjNjLTQyMzYtYTVmZS1iNDI2ZjhmYzkzNWUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkFGNjdFRkVBRTg3MTFFQzkzRDVDNTU5NkVENEM4QjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkFGNjdFRkRBRTg3MTFFQzkzRDVDNTU5NkVENEM4QjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4M2VlMDg0Ni1lNzk1LTRmM2EtOTYxYy00ODRkMjg5MzJhZjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6YTgyMzI5MmItNWIzYy00MjM2LWE1ZmUtYjQyNmY4ZmM5MzVlIi8+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"

/***/ }),
/* 22 */
/*!****************************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/static/images/pollute.png ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphODIzMjkyYi01YjNjLTQyMzYtYTVmZS1iNDI2ZjhmYzkzNWUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEJEREI4QTlBRTg3MTFFQzkzRDVDNTU5NkVENEM4QjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEJEREI4QThBRTg3MTFFQzkzRDVDNTU5NkVENEM4QjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4M2VlMDg0Ni1lNzk1LTRmM2EtOTYxYy00ODRkMjg5MzJhZjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6YTgyMzI5MmItNWIzYy00MjM2LWE1ZmUtYjQyNmY4ZmM5MzVlIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5+nLXAAAKvdJREFUeNqkfdt240iSZHgEKGXVzP9/yH7VnjNvu9PVlSIifN3M3AMgM7uyazZbpQYpiQQMfjW/0P73f/2vFv+8Xf90vOrhcjzjzbx+aq8HenQ7br0OzPA7+8WtvTzcT7bba7bby9rbr7n7Pkc9bvqOs3M9tnySv8A39H0u/C++eR3ix3Y7IbP2F/+OF6Q2HPnlARkwWq/PtxtY+rVh+LVel7euy7ug3KDEGfkNsPsJbsj62/1wv14TJ6Xn9DLL8YLLN6J62/j/vm8QQSkgu07WjefvQrD+5i/wOl4E6g2mxcvWM8sTBa/v++Lj4fBLcOwmU/FvvIpI5zu9SJC/yGa/wd0t5bnk0VNkXK8RMOkSceB5UBLX6x0kTXwxPuoL+CzetA3lv/PveJcm3aDJ0518ZjoO4smTZzFf7/lWK4LicUZdouF52SdPe7V83m662W9y2uuWzkuLS/8JhK4Mt37fTaKzGgXLp0O68RBYd39FKn5lmQkySFnnXdDNEPz44S+E67iQgrx4wqSv0wWZncRoEsp5aetlf0ZdcOel9tu9GkRww9q3PbmJ4d1yGa9BoibgjCrIP1y9xykFNCtUyShQ1NC1DKbVDWBByuJfvkq+udnoZa46hIu30IWXDMYv8TruqncJVEjTSVEKmJ6tPfmjwi7V8K5JBVbq42E+riu37u9ybj+4gsIX1zh4Qnpm4KVgEAKaAfngz0KQDHYi/hGjc+LJQAo2Fv9kFvNu4CZ2/HR0F3jx84G3gNDSdclwUYzfHdCPYC3CIUTwndIUMH13QPbF49PtKaHzy1due3xYXl5YzuGGay45AoiWiPhNAXvZqYSVyMYPBrWYoK+4mkHVO2SJiAMN+rQmdAKwuWx6x0Onc4w/o0mXzsWLDihhaKcd8cpHYjMgqlAGKviL8ZIneJOvI+1UChS/ns2eDpi+AFb7aobvlLUnvqcmGgVQHkXiQMjijU1XOwhfQeb9FhnUSVi3ra3SOEEWfx6/7wde3x4eSIWiBSySGH9AwKB9PHec0YyTmnOGenWYs4DN8BI9UAmlC93tbeQJWPzqGPhDvJs8qpcy/trAezk+ShMQ+dPtT4rVP3n8XahRsiR6WxPlrbrEAZDFyblE6eFpFQ3KJX14tfTlCo1gmcB1qPCBi2yftFMH0LHQxwNSFhidT1t9TQr9NJsrcArFiAOfM3AKlWtSL+P9CJgCHY9X6O1yqwOyRg2kKzU5j8ty/QysrYBPIvXlhVGzP7z9k8fx/Tuf4e+kmW/l40e5ii1KUElIe4qJ8Ta/WfR7MCEllb2L7weADmmKG7bCYMXrHEIQqNFG2RqhQdBB3js7A8HZ4bfhB8M8lRo6fM4YNmY7BnTZjvKPoasMH+I7pd7M/N+SLCjUIhZflKk/3P4IsFbL7wEZLJd9lRqe/mKtFTEcVD3jgYRlEDXLmHCD5fegQfdXPpT6a/IPD/MP72G2Pt0f8aO1HpCO9Vjx02l+hj6FoW/9NIMHWryPYfhhyuEKIFQhoPQMAXq7maEAqPNHDq96xdd/rYmHlbWSPZKdCr0DRv83IHP7h7d/UL5kxd4CiFa2ZpQSKYAQapKvNzvZy1WPZhVV+bZuRx180qj/1nDbABzwgrV6wJbBNPX4awdq8NshYmHmHR7bERisUL5OAxBqePi237itxmijw/DFry5Fvv+GJh6Z/dEDtmfpYABEmOy/3f4P1fBPT2NPGbzynu3IZMI7bc0gfJK4kYEVoLmlSjCpaTJk6Us8qW44+PDAqP8BdNpjtQDrc7UHnp/HmqOd5rO3Mw5WB1g2oJILX4u2Ksx9vMeA/0MwYTSnIY+w7gt4wYdk4qVw412w3gIuquFslsIVutZg0f8gTASr/WPBeP1Jc/Ys1+mvKfEoCR+F3YVgOfC7N1zXSWSeRkChgPSD8OrhHz4soIkvD038aP4RmujrW5izMFgwagEWzH9Y+9Yzam4II6hcC/FV2HaEFT1c6gwDGMYulHcs3NMOQwpdXcxahhD9a5uVgajDDNEqZcRAy9X+m9bqDz6p6MHbS5DVKqdROqL4qN8iUvOLbLBKYtYNa8tYkGbLjVLp4Q1D11Kg3L8CrBUmLJ5Z31cYIP8WYhXGKISohyYCO0ajYcfDH1LGQ5Yj4B9h+07EXYhSptxiaC9xYtiUNmt5Jmx3AsRe88YjM+TJeJ3BOkMEuD/7k07wnxk64BeWv/AT7SU9xEuvSo4TL28vkd5rVvzmfUokXTHaA/fPn82/ln9bxAtg+Sfl64RkxbusMGQhIj2Eayj+AdbhQSGhg3bdaCRpl+LWRQAx4VvD2k0GXMwzndJt/gMzdLf7R+au7YqzIEFUxiaMFGGdlL47/fIjLXVDx9bN2XniUrds6QSY9fsL2yUvvuD8487PuKzFDAfZYDw3l/49qZUHJWhEaBf+sSsLMp0DkDq8MzqDJad4d3hQf8LVIl7rYGoU8csqZOZTgn6zWYnXkYwV88FUsQnzZIq8yhJsClB/6M1/4mZv9jtzDUEjFApHN9981ItLzd9eUlX89MQTyHi+4pIn82WA5jLQNEIMuKydBIvxOHJR5IAOg+V0iXAlRhNvSDbjVUITj7gXPW5qvEhXoMxAK3NpXqe9ytfxQuYtOLsMJk4deJJGXiSSvUNTUmMMhTdGhUT94OKxVuK1UWtbxCJ9o0w6Q0bABMGKiwqhmhMARdQJCYvEEBesAHMxWmHW2PFXBzAIpQwsprmoBmO+M+AO1xcjiHAm4THWQPQQ1o15Eo3YFQ4WfHmhR0rb3RjdGC67MLpgymvur3ZHZmj4tke2RNkyJuJDp/n37ls2E0Q9jxDRiRdlJPBCiBAWKr6HlQkUphBcOmPcTZA1xBcEAtUQB90BleiY8dXDS1gANJg0H8OeROrs69kRuyEVwPkFZhH9mhVtVgzE1srjX1lrhdSyjDc2+7rCROouX5b/e/mFLWiD/MEqsGCGPc25w04rnwUCgdexkLfEFT1m/AIgO+L7xEFI2SEoPUkoeFCwDwaAdBzyw/AdmVGPR8DwKzC09jwDrwXj1dvR14nUEeDCb5/xHpQfUTW9YErbdVz5SlJINM4j6SRSCJQIutZK0a/vF6tJWU+6l0Yqrl8qKJTxunH3mAyXx4QorRSoFDHJF7TvAf1H/BmGfEC4zmPi4QNaMxFq6fcN9nUxqO1wdQaWgcTF4oWB6oO4WuACmWrreYRD8Efoc6DWe2AXTmICykWWtXd5pheexgFWFjrgrV1csHiCgewXNi1uYPpBT0tEGtd3SFUKCLi2rxzEpq9t5oCUkXgRj2K+v2+ZjZNfZP5gtgcxil8egGwRtTn05UqkZ6e+gK4YfG+8Jd+ZWZ8RKhn2iQAVlOGzj0D/jOPDz7mOuAMRRBwIUpEgDc/Ex+6lKWUZRyOjYqPo4ANJvz8QEzKVXRHWI+NCeLtSstIUpiC8ubPLrFcKTaR0DAsjyWJ85ClclCwdO9m+0DiopJTugb+CYg4EojO82MhfTlaHFhEJTvxG2HbCVNQf6SzZkdDHSYBPqNv8mv3o/YzzGZEGUDaPpPdDxuA2V+axaYdCQZPGpWgo13+4fTCP/UCoFREgDKnCI3d5q8VkgjWUW1VrhyRX8FmqiUybwtUpMrjfuPibiC2ho4cBjVPQnBKQYFFvJkj9NZUVVW2tQxU7w9EsDNKfpNaQIqKNXIziQ6y+wpZLscnbh+oco1MVGIMFUt1lORIvSZbeL7KwCEcf1ME4jsw+vr4xgDgbme4VYRerJyIjSxBa5cxXyr7LsfuobZGBOxsAGlluitWSmV+CrDf5QVcSA8WEsV9yiHxmwm7jwl0uKGumCEnIqpM1hrD2TL2MflDnsaCMOJVA6hmZ+WMyREHIC7ECNT8oVLym0UuuGgiUzDBAg8D4fTaLLOw3Q/j+1exPW99oq3iWkaRCj2Cw1jY6t7DkEiQY9k5vSWe31Y0H9HT0cdeLUOJKPSE7QIeosVQRAOGWr16Gj3/SkuFjyEC5UnIgitT7UnEibHtI2dDzEEsDYx9CEKIAvnWc9KU+T9ki0msHBXN5kiMKHcSKTKpJmPtHpPgWeLVvyHvmf5a1+jOucAKmNWW2LxPTC6jN2FYpS2EXAfWtZWnFd/bbBb3qN1tDW94PSRO/Ju7r8qyJ8Q06YznFQ4wfu3wFKPel+HKnp6b6PXRjtPOJEGEuf/r6COyegRdC+qMMu2XuzXuyxDQdmb7GX56GFD8CkLBW36iVJ6PkyTvMQGkhWaOK65k0zFUNsYpIdkras/1AYhIHYVjzWGFnvUIqYCOgdRvW7ZjfZU9wDBFSZI5gMpy9pz7S0OACIdoTmpgWq91oo+Y082EI2zwRkz1He4QsoMCxoKWGbJt6zL4A5Kshu0dV5VKs1gcoU1kr/4IfJC1GW/NYK15/MQNy3vDmZVMrEyI5pRd0pQtdDoFaXDY7MVI2Vz0I+XxPa9UG46S7H8hQlkI8/CrWhnyVsQzxIYzLs7w1e8qdwgFnGHW2iD5CGZ8TDi2MfJxfhBHhAwEvHi64ULI+WYl1xlktS1ggtB/8vihQJ4TL+QjBYVzJV4QngRdTWSA4M4BQjGu3gvnwdJRqPEjjnQa7AvdFJqAsGq9ZMWobnr4rD5oQdIaWt4L2zh+u3pgrZLaL90+jYKpJIF0gtzFhewCThRCgNMQ0FJEH3iq0Z7jvbh1j6GBpWRRk2IMVOhgslTAZYTM+QhwIsKiJS3GECtlFIRSVbQo1vaV+jfR6LqcmPeJPBTUj7QSolR+gURM55TtnIJXoayOgUNszg0uy2vw919+26wqQW8YQJ68CGkNGg9wQYrWkB0lJJz8om6WXYlK1DpbIQ7J+F3MgDtmnQuovB5fEN0Ck2rMnSpRK3oS+ljSrotC01hKrtgOOVuefrMMtoPcNn6j91PHMP8QF3AgQ25BlV8yPVO5mlWyrVQhrFjlAOTSaYsLlpCHyJm3pdUqWkpWKKEmFgVo7yRt5FsOlSgx2CNPTkx0W5cLsx66cO0OKOUqacLBWhhrutwrr3Wal0+x3adqEovvPeoOueMUuRuRnBcCNqOgJt/LzFI5Qw5H5XOW/iVTdUSvJ4s3qJFsXwlH4Zr4aM1CYZ2StQzRuixAsrxZxSjHILqayGIUm38/vQ/LFUrFSv77rOhcjmA/tsuXbNt1h8tfeux8p2zdi2O4CqAjD9d4LOeQkcZhOi5SHi5Yty3tT5wKLHCPZCTyGIj183ZqRYLxksHc3B19q6b9VLVRJPyC74g2Yio+Il8hcaVZe/73rMYXuVZouSP71v806/fSnKWv7zQgUGyLk67ahcUH20rBm+/+Lz/LN0rhn18JR5PG3lr0Y3SRiV8OjVyXyVAdDpoSiSxv0nj7c1NAB+onCSznviYnbvWmlZO1mnl7aVpv/NWRVSPV785BotmI9mzyEi1kVwwDvr9rQbr0yOyoMei+yXlUpplOH6tt5k+ETSYzDFfUMVtq0ZK5myzLq7vDbNPGtoTYNE001KK2fCMv2XD+B6ZdI3UXs7ThP9N6fasVRqbaAYH2g8uAsyz/KNvitsskXOq6Knu4qm1NBN6Y80IRVsQJM5CffDc1RjtLewYKjKFx/aR9eliavLFmZJCHSyzBfV6Ag8ELK776/av7t/+ef78wsZQymalrVMdlGsnrSw12R2eaJ7XhpYOQZK5KBWj0kvEYDxBKoWnlUNJvOjDTLri5xMxGEKX/Si1VhorRSVEFiWLfe1Br6Y+OdvQdMl/urh38DrG3jLZNJvATjcGSZ4Ag91VkdOMa7bValsFfq3Yvn9MSPYeJX92OBGflwlN6O3h6LvS7WrkRPZiNtQ/E4k+IJv6zotnpKfRUPmUlw1SxUprXm7V+4OrsiQ/9bSAnllyaG5Wnvrdr5IEmWwPEUbez++Vtrt9/9jvVMvlQ7Gd0H2wXi/n8GXivcrX309kTAaSpEMWemt1uKtUl79Oq4UWmLfcQj4xwJl+RETWX3a6dOWv+FoPx93fxprJHt8WmOSX+Ryk988yuDheVvjeqK9Gd26JDeRyrV6cniISPy6k32W6O+xHsxGGV7Dm9ePEQLwrJN5GTDgyVi67LIl1Owy32/ugH7nyC1K5pXG17fiakKhCgFdWcnENuh2RLUth4efg1rsPjtmaGv1K6mzkQSMo0UOLS84TUXmulIDxBhJggymXAOfDgR9Cl9QtIKt8Mm7J4FCloqOKLysjeztUGr/67mEr+U4O+arSrIy8MozFGCbujy+rSsX4vLOGTjf5iw8OzJL23C1TKXW9kFzHDkAAoMnRabwvTrLGXQULPsyaqBOvir8o9iFWn2yc7hJWi6Dd0cIFsN60s326p8XdTBi0vNc7X2t22W1eSCXQ2JxhiVrYCsMzKq1ExG/hpv1vGClFuVeeXUwEUBKfQgglYkr8wrXQiwiA1/w8pL6q8WAEUq2CdTCF4yeBC+K6giWLBseEG0O5JtA/01JNkvo1OrrEfVigWr+/9Qvu52ml4PJp4mtmvUw3p2BDOayL6pY7d/M21mNk7/DxZ5ekakqFlEoHCwInzOST5rMUjX95ndy2x7oTmiODJ7PtXXT/hhtJDl4y6y+EnVZ3gSqjx0i4lH7xVXsI56ZcE3Bs12hPa3YaIGsnuMOohrpljJVvbRSa8mcd1VpLAjz4eq1yA5nY5/saiCSOqcaDGYZz99znOu0yb+gQOCBKL5LoRnrKn2FkWmuHa6P0ohjBdZ46XGoNm7uIxOcUfwN6iz8UJ0G041N+bUvZq/vIrEnhNdSyntr7uM33FaCq8Ykiv848wRg0DWGcOIHl03kT4yhfnQxSlYX6zeoS0TdYKGZhWwiEBqPtf84sFib/4JPP1Jv0fQSE1kgExaU99Nikz63VR6NDDmiCvY/ApTxqJ716mV/evK2a+Wqbierqts8KzDc7SrJ435bztHxZrZs6xKmVGCKNqoS0vK9nTizo+OC6lsUtG4UEhRO88DkpRI9flnh0jFwVd8X2jIA7E1AzKl7HfJIudIQzkVtS/Gp7OpAZ1hX6eRGLRenahpsI0eWJY+YxLqRsgyxxo78Z6q+hQ3pBjkF5m2vYw+smiOXg65QkZJcUM6W0UUnJp1uyY8+0F6yWSwZFnOEKXVz8kZj2c/zwUdfIYw9fUdwK2n+XOiXyeOT9ggFx90wirzxRhBdDkH8mvT2P2avK/uV2ePOrvJgF/vi1pFtoJpmjMssWx6Sk4ZXkXlaNLdqDuQK5eL/yu8ipkUEQF2VCVrsFqjp3z1HLRbyTdZpjsy8CtpJHLQYY9gac4nTNUJ4WohSgtpIEs7aKxAFwrwCoxwbO0Jk9Q4ByIujHFBzw5EX2pMT4raUmmM7GDqHStaw5mYaSon+1LLL0vQdrs46oLyJNBN93Zj2P0X4bs6HTmKAtU7MfvUKeIIR2dlOdatBoUr7aYa5rwekYov6F0cnA14sfJxPlFe8y80ZLLplAA9T9isE8KDhBEsvUYWB5Ps9CRLA5Ndc0nqHJAYxA3ojL16tSuhyxMdEdmgU45ZPRXkUNgzYdWyCqmlB2G+lWl7/xkF/5LlFBGY3dSB1/hAD1dXhNXoCplaI/llPpvkH+0L/dZix/jsxMswCvPkdAe+HH2rwquqZPZ9+FdTLRYF2sW2iqyV8sBvRatNG9c0J+on8cJIxOkXJWIrU6bDVdv12cTVxTv0YSoGnL5zcM47L81Jjx3z/yzmSkLZLI2gcSIFdcX4F2o42HIVGQkGEHSqveiJ3a2snkMa9ZQsHnQ6QciXBj5CDQkKho+yUf70jkpPaGJDk7SY5c5QEf348HVUewpVFrmgqQhYmY+xQscORdeYR88xUrwq7iE7NRrGMJsazSKlD5k9YCCGSB5ItI3JaELUWauxvh/1Med2rnAh0JkdvAIclA221ec8Nbq51MyYQQvAuosVAlEhtaCMUJwJUUITDVj9ZJAj4kLt5/tqYePR9d1pbZbvqfCkaE0t+ddM5i46rK0KVk3L41qFQO2bXpOYzsEIshhxDwZaEjJdzOlBRtp4zV7tTvaeZmcdn8lTRupIsOgBEfYdfVLWJkcUVyWM/Zp0aBxjUMZi+QU11GwVAi62BVjTuEBoQloumC373iFfz85BEBpZtWn0i/JE2BkvRkttq/I78zJSWfVXwb+vLJRiap29e/HszMiIDFOfKIOfCKXBh4UbOiiOk8BpqoS5iWfP0a2043tqAKcJvEiejD7iC2YrfPIUP8nkYZGR8d2uXOSfZwejyRhLsqB9agw+mYGeCBQaptXYyfp0e8J6hA5CBuDYEDXA/x8gTLtsrybZ2K6okOKqKtypuJbN31n7Jqm0dLHipBWukeRFG7LyjLj1J8V4sJWAKSdrK9n37v5eNSRMCOnGCQkaARaUGG1sgRRiPpr8Tf/W4oq08EdlbfRZc6OmHlgXqYoJSAaMMOQcUjBKlnPWZymJIV/GpJsnbTnql80uFA5TZrpXDlwZjGUCuLIRicMC/BO1zdN2cDqJ0SEa9U5U7g50V6XgHKEJnX3wqtF0s5f9IlRlKh1mBfgd/B7cxnEOPIwfPXmNn1BueMXjZSDl2D5rb7/wZFrUsZ8TFjKBnFeBcIUauo5psAY7XbPMU5sGIALoukbjT7Zgu5r1lt9aqjJWdJKoqzoc9UVhN0ooUZhLCjLgTXH1M2cFwvY2mBsY+t6qOfiabyA/NRlYEayQrBCoo43QvtBCgxp2NUCMqcJyM383tXeKhrXVLAenodgzEUBqAh3gxek+qOEXSiMDjY6EJEeA19od3+R2oJ4YVFvKydilR0naRUjFgWWa0G9F89Fm3TMj8GQLDbiwX4GN8D0DbeaKg4wFu6Rc1NgOKFdF6oApwBoBVqhhP/r4GmG3ws70L7MNE+m3tutS/sPQwAvjvfEiMQzJetb+gi8ghayQaXYWIWzljhC7jUJ3VhYjyuXNZby4EFJ1+o5eMlWuM63vlJTRimd1iFEZwzdw+IO3I5K6E735sMQRxxxKtxnDZWA7rFofUgdhrULjRn+OCkGp3hoednq/03K8vt0WyaQa/lDONFWbdlHb73PBlmPST410IvzFaA1z4pG15DaTN86AhxObcOxL13NkYmSeRLRcNUxvqoBKZrSshGypJw5iN1IPXRbOaXcWR+FqgEdI5cTH5kfhyqGDT0rWE+4vtBnWPQItRvChjJCDbw3m5bPqN7d1AUcypuo4zHEmy2YwGbOzLJfw0sBrPPkkJYQ4DWNIGG4QuzqyTYtBwKilBpYZX69S5mAcqxx11xRpOPokXyUjopx6qWMxCayFAWgFceHL2LK+mw81Oah6izw/351hFMAawAvKiOOw4egDtECwY0cDh62p/uhG4niL9arGAKyMahtnzcRTpCMxVfFDRDVrzqE6IcUtCtBQMAVwh0MVncHMOeLtyTmEGpJLvsBYAiDJ4NKoS5xVRyRSWxm3ITPLWhBLuUOxu3ExDekn0mK7TK8dGmS2s3XAlet1GqxBm9UZl/a4tZ3xo53EaPEaP1q2KDyqyigvkiVqRWz4a4Yp1dWwAyEOZ1KUEOMbRhGXabjcZtaJuQkn8BIp19T5lMzKovgMYgRzwcejegoytugVXleoobb/jGFz2dWy/GWRdi7SDlFP18gwG/hs14mki7gB8IOwG52BQqCWIWjHTA+/UrhwS87bOqxKLQ4TtRN3aKATlWKluVAynwojNHhIHezP3OCDHHdlklO7EYwNhji/MMJ4cCxFd32RrUOXVof7HGwKmNnJVTRThlqEjP3+K4lKf999kmTT1dyt2ow8ICxoU6Vrt3XIICrCMg49ATi6NM07Q5BPS3Mcdvkby/qTy33U5zJQGBMfj1s22P86uC/Jq1mare+UmWpxwEtn3xe7gpkKm0J2Nq92vBEpdtZ38SJoZ4VMMf9EAsuG5eX9dZTFrQpdZTFpDvpVnbi1x2hRFNkKOLau8lKvQemrbaK8odnMoLQvEv0TcsJQsGMgEct2DEjB4FAH18t4rtRQc540x8JoKJdjuqIVbei9ZNg02TcyVVPGjfVqstEoiOZCBlkHOHy07YI+ZUENrU+IBJWAdbW3vm7R2kWd3bDHcCnb6F6FLE1hOqcqiNZQ+739j9YdzBks/eQxg3gqK8cpMLlO7eEIGUI8tZ4dnsOtnWrY1aZASRjclwBK74BYn0wwWCz1VEYtwVBhvvm9eczTVEDpHDXDrqHdoUI//yrcDxLrUVmzcjz2ytfg0lUiX72AuUJ9WaW9x69aLVUkUifQ6lfbhpV2S2ehhhbWHTnZmTwypPFpuS0lqU1a2yfnTdbVMnj0ilXEv4XlgsocHQP4iF2maMjqKPRso1+7LHEtmNveADI+s3oFlAbJFQgsUiDUdk5KlSWnjfRb62jqGRV2ICm9FrmoUHX13N864D3D4pS1nrHiRTZIsjjemzYLblfxEgigdPEaFtQY/fO2I2sqsGO3cs8ufs40DA7awdOS7OGUnrqysvF9Vg/zbQdJzUUXgbAynlqaB5mmYkjn4DbfG6gBQLZws/Vc5VS2rvRUgp0J71a7IpzbrcC66y8ubl9bi3IdVLvFLgSIAVeaLUo8IyZZq5OmiivWYOBRW7hNjDdKFj0Je3NZUECgNnIFDx0LC+0tCwdi9twvYm2zbdLlpI+nq3rj2aVGlzg8m5Rh0zzDcGcGQ6rRejWWVHvea/Nss1v/aPLV1WfTb42ldq0IraBoiWKv6HdSymYNcT60wynMPNZuZByumIPbNhC8rx06sHGj07TTyQO+iSqaBncIzqzW8Ir+3G+7Em8DdKnmS/mIiUCUS0o2jUTNVP/Swps3tpAt+Ytx68ftt4Wbty6a3QR8OQarIZ2XhvHkkSFKCBcidkdQyjSwPIdjeQxiNGxLYQiJ2Ntg7z8wrZoJ32jVzM3cVrOgK3siI3FhST8n2NjbUmtma2y8ZlA2dZF7XaxVoLZyRkQrcprGQMbU4CS7txhd6myA7vDNDfpmnkUl9BsOL8vwNojJv+69JaJnq5Ovi6VhAJEhe285Qd1WroLkdx6IzqsdIIaEvchq4MU0dsDZM2LKmZvqUE/1yOrCta33ZnX9qoXmspBpOccgmocFFSXLuF2o2PjekpFzT9eOh/a+zebWafxjLcJzGnvz+76zThmpkq/T5A17rRoDcCFTn3CFqO+hk8M0xes3BiIbcEWD0+PXflVNVXBTXg6KjKb85Vpz/Lp1OeNEVxCemwQH6RhWAxaXCuQmR0fzZY7127UXoBpTd4trTX1mg4hVonZ97c0Lxab4bjlVcs6oSrHomWVUGXjL9NG0bg7QTA4pqr43pRogiv2THHxGSbuB2djd3bNX1o4F8wYRW8Z9Ny23VbA7KYt2CdAFWa0YIZVGBeR+K2u1kJANipMQdW7BqfDJ76bKb0NwRf+U5GpELKUo9bzbHnyslla/YBLTwOMhEsLEKE7LZtzc0HftH82VRlSCkKtj2+dq+d6bRRkKHZZ5zcEoadCtDXXYXr2ofm3ouQSNXQ5IuRZ5jq4WTV4hSiLaPkbvsaPG/e5+37h9tbHVuIQVFWtFK2xO+wVUS2ZdNANjUSAl8npWcYB/bJQjseRJC+++xZXu/OqDz8bNXt3HB1kBzYxqbyFHwjiXvXTpVVy3+7YVt5w7U/rYEzIZ55XkFXc1qbOqrxw6v/Hbfk057cUl1W62v1q1nlXX+p75IRCZPCdMEigyM1TDs1+RxECmguhh7kklqykc28M9VMO3na+bWpQlxSJMeVCP2B/U7QfZytGqRH+VnNyvEIhaCQUkR5RF3X6tUc3xHJ7MjfHacVEp4y5tsGGxkBqWA8xWipqN/uL5aIRP2vWQo5PFrq2DWd2pgGun20vdUFXH8te9hnRqVwNuUoKWq5C1FxS9cZEOHFwn92H2uYyj1PadK2Umf3ndthyViOr0WR5Tx652gfdDHVg8JcQnGUTL9GVarCUmMt7qxe2iHbjOQbsmzfzay1wJDRk5/qJ8H3mYQgrhVYlY7dusBt+MZP11JuCdhrfjvdOkhJ98N/ujuBYDAD2afTT7pKB9aiPhUgt7TZDfQkVLajOrwrJRxE1MnGeBR4GYeEf+Sdd60ZabEnstXbRrkWmukR2lhytbn5G1RCD9bDtQQEHweYNJTrDtyRhK1vv2frsM4isXcrz14+eSa7lqxvH24Vi/940LRL5ZfCHePbUCEH8xbgteuc/S5KZ2kRPOZOTPqpl9oePPctpzsZSOPzmqd2xgE07JiSPZ7bXQGvQh92RlSUTp6wKfZyVzizsAnyNzQLq/W7hQYO30yWrrZ7Pbdsf2su3V7mDZbeIJBRRDvffByWCuwLTPZr8zM+AOTs9ggXZ65m4NG22bm7gI9PNU9QAvmR+uAEF8UHDWUFGYWonNwFx5O7AEF/Xfg1tmejmZwZqtEoyjpAAQLG3IIm1hbAztA3EDyxNik2WnKG7ZO7FhYpdvXr42RB/lbcdLpvA66HRvd8mlRxw64OgBhAvFIg7uVP5nnAKuTyNwRbGt2iCvHeL0u6eG8rNj0gY2T9A2HdgnoW1kcTw+uEqStlKmE31TA2DDYg5+KQ5ZtGMTJHr/al28wjDIFLsCKWJaNpnhaLH7lkjJOscFHSwSHbUk+lEbaccF2fHT1CHncg6u4h1Y3Qjte1IkTttUQNtbkZ7X3vM0W8OyhkrRYuSJaMTbXpMtTW/jYKXiwS64D656/OTqzQ/I1zoSICyHPOAgOurIOBhiWx2LQvU8Ox/ZjXaoNqHVrb2rdGWq7e/Z8twZtdcUc28s9hI7lzgTLy3STt083hdB2svK0Fx6NLkhalaNWq09g5HXJ9e/Pq3o04q/87MimjY1zqU2t7gALr1hmjCa1o7TGD3a0bmFA5uWfH7Cfs2AACJG//uwiCYHniECaifWftJz9e8UKOeKdUcDcicjqsyZb8YhAMttNUIOzz8oE/T16Af55MEHgNEybH6sxJtk3Vf9zex+hatctFmB9KcmgS1bFXh5+Poz1LPYxc3A7ghbm1JXEsBdU0Gr5WIEfg6FS9q1qZtWEgr40dZjdS46jyvpXIc2uALtcaBUGKJDO+Yosob9Hj4Ok0Pq7WbCiRqgedZq1JW1qHS1oRnhuH4zLHaCqbH2GyH7Bsgud9zt1Rve9/eya0gfIYG89lHTbNrXrMXl4SUhVuSAvmq8dffR9M3eVZuJgoml9eKsVqur3bTLlo+haCvwCgu1HrYe3JDzgerWeEz8NGB6OJqqcJ+5ER8LqKHL/cE29pzrs15dSrjUP1GyTC50beJQa8Joi3+39rv5f1ocRM7s30rWHqWkKlj8xGb1nOl0bTp2mI9s1Kx9iRAuRFslVlLD0y/x3CvAdmS/kqnv2nFFOjZHSjGY39OTHaMf86RP5L7uEO3RPiZKxx2SxQ4FSiGT1PAGYdoPKKl28Ynm5WZEmmoIJhIa7CFiM1PNkynqhmQVUv9BsH6nfAVkh97dtqIcP+8X79n3VnvJLUME4dWhle27QbJOS8Js+qWGbetgsS6rdrfN3GTVi6cHAozL5eBCoeaDo3UdksX13Y0xFxi2/hmXj21p+NAUyBGy+w68MMYVZo5wN/oEK0PB+/qVVQkaGcsVrXAjDQr4O5H6D2v/ATX0b7JfbAUZudve3yXrRRNTHHLzSs1nZaD4oCH7ptZuNm2JVPT3zwTzC6zKtRW/m5qrceegRoOCOFxDISE+ARmosAc9wGN0JvBwi4OeFpXR2h3/7KGDAXkfudeRYQcWWwVM9g0EMfKzZ3WZ0VC4BPCT+wR+I1K/9y1ZILAOAdq2jT/+ahjB8hMo9nB/loYHebJHy2bvqUaf1w+2qJDtXnf3qlaJmc8PjqjPvsCNGIC9H5zrGZG51qj+gx4C3bK0Ps5tttrMvXAwvhh7dcsknzv27Q8akO9YxgdC/SRpe+aH2qRj+WiSI8jXb0KKkihzNurk6DqPv5q3vrlIt9uHAaDgYdlXczZf1w6W6xOt9geBvDakazNVywls2wEG7NhQobCJyEZmgkZGMtKDfo5rajsHMhBtuRwf924N1otJwDVGrcLLQ/v+xPJ4dKGzSMypjYpvDorPJxX2G/H6RkEL7D4UxJSneveGP1XGUVOkRfBmIKeFuGIz5r301H4M3DSx5btlRr5iZVg4NEawWwYJB+NVslyaLDVVOBlKcRt3toEQ4Wy8IYfTTw4uPABTY7SMSHD27GA4b5+MZ1ewnnjRD+K6hNSDSI2LaDx+Pc9/fVRVDpyyFm/Xx9G56tL28ul0bx9cqOmBKaOeAxDaPJjkAxNkdaLVtF+1mo6lT+rQoz0Pb1pbpz4XvBbX3T5hzpqWyTzZcffZOWOU5Kf56yfecYcmnKbQkfapULgX3dZnnR2/3n9w/7Q5t72h9fbRh3aNFt0/mnA71iy/a2tLxiCp36z1Z2PfbfnO0qKSrH31a0y592xStN0C13J/4Z7g6rmEP3fU5sZ2CvL5ukZqR9dcjwKZOhI75dI+LqT+dejwr9dR7ZJe7qW+QWMvKyyuRSj7ob1SsopX+60ziBWm/BQvt9pou6fYVIrp+Vda7ZTEquX6wiaMJhsqH10OOrtiVrtcULvZGe0nfzfnRGqzOP2XYNkPaeObuPkPCypuUw2+txZ6u39EaM1Z9KtLQltN0DqQt8D3QGTfkzM72K2BpaJYtlvVh9W5EkBtpp4ac3+h0k1TRr0+621cH+sm7NL8m70Vc/+fAAMAzE8GxVab0X4AAAAASUVORK5CYII="

/***/ }),
/* 23 */
/*!***************************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/static/images/worm_4.png ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphODIzMjkyYi01YjNjLTQyMzYtYTVmZS1iNDI2ZjhmYzkzNWUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0FEMUIwMzdBRTg3MTFFQzkzRDVDNTU5NkVENEM4QjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0FEMUIwMzZBRTg3MTFFQzkzRDVDNTU5NkVENEM4QjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4M2VlMDg0Ni1lNzk1LTRmM2EtOTYxYy00ODRkMjg5MzJhZjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6YTgyMzI5MmItNWIzYy00MjM2LWE1ZmUtYjQyNmY4ZmM5MzVlIi8+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"

/***/ }),
/* 24 */
/*!***************************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/static/audio/explode.mp3 ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/audio/explode.mp3";

/***/ }),
/* 25 */
/*!***********************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/static/audio/eat.mp3 ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU3LjE0LjEwMAAAAAAAAAAAAAAA//PgAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAUAAAq2wAYGBgYJCQkJCQwMDAwMDw8PDw8SUlJSUlVVVVVVWFhYWFhbW1tbW15eXl5eYaGhoaGkpKSkpKenp6enqqqqqqqtra2trbDw8PDw8/Pz8/P29vb29vn5+fn5/Pz8/Pz//////8AAAAATGF2YzU3LjE1AAAAAAAAAAAAAAAAJAAAAAAAAAAAKts5a4AJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//PgZAAAAAGkAAAAAAAAA0gAAAAATEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//PiZAAAAAGkAAAAAAAAA0gAAAAATEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/z4GQAFqhqAACveAAAAANIAUAAADWrTXMy8HMywEkjWQW8NRA5QxLiOzQvVRNbdXc0sTVTLSE0MB0VkyYTPzPPPlM3EmswwxhjLmOuM942oyXA7DDYGWMYIQQODhMDkEMwOQHx4AdvjBQEKMfwmwzjTETIdA7MfAzwz8kEDOWKGMNQYEy2zpzQTRNNHU/s0qjcDICC3MwdJ81i1sTUJOPMS8i40GFODWwWmNUJDI0TyuTE9E6MxpII1XFg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hpawHFkJIXGCQsxAFMpP5K8DCS+xVEgZKXuIAaAwIAlzkd0WC1yCFHgSDFwRQGhoECgYHSQVEXdVkU3R+sg0MTAy0K2mdsT/8+JkvDZWCwxib9okAAADSAAAAAALXIhLPasgGTtUsBQJQ1WxcJd5RtaiVyVLWGXpWoTVmL2UBUeYurlKpnbbooozLPTpYE3dri9k5mtr9QTNu/jBn1bE4CPyerTG/RVbogLAxUuakYgTLWoIkex4KYMQIwYsGTpCoRDcvyXWUXT4L1Fzk00oUUkJqcjNmGraZq/SmLWGhNdWk19fq5X8e9rsBNjb13l4u+01rTRWuJ1KqtMauoE5b2ydQFpC/mGvQ/jzMNbI87LWRO+3rXW7OGrllTpvIy5VV74oqZ43cZMraoYJAk5nDcRgzAWiMvRRWU8jzqCs+a+pawJTtThlqaTJ1ctaWSuFgylNTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVCrRv6CDExHDRLAUhWuawpjpEJaa6/YypkoawBqbuv6oamIPCBxS0wIGCWBa4zoZ0IZgQha9ChSanm2opiLvK15nKwyNoqAgGQDQ4JzjgLGcC//PgZFEoygrYBmcPLgAAA0gAAAAAPWH6+rE2hJ1FtG8IqH0J0LuTw00MV6sY1wklOqEsqTqLaSIgJQmAf6cV7A3rhfTKkVbQqlCX4upRGEUZuH+nFOuEmfB7H+oEujUKLaSIoShMxFqRTrhMpg+TNNxD0otKE5jdMI9kmuG9qXKSPUzjON9DEelUKNEnxgnqeiTUjevLlJHyeqIUaw0qlDj9SSSX15ram1dJE9j2RacVbg5K1PLltam1uYVMiTuM0gJMDTQhLpU6jlRS6XK6bVMfpvFCVRVF3ORC1haUKeXLa3MLEpT+N0mRASAkwOdCFW0KpOt0KCxMKuP0vxMSNECLucijVC2qVdBVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"

/***/ }),
/* 26 */
/*!***********************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/static/audio/bgm.mp3 ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/audio/bgm.mp3";

/***/ }),
/* 27 */
/*!*************************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/static/audio/click.mp3 ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:audio/mpeg;base64,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ZrsJynSvjdISyEqE2MpfIKdTlBTponS6P4nSEqYtxOidKJciSiGp8L0FSXk3hNhxLSdQ5DlFdOmioaMSdQ1lUxBiFLRfRNWktqti4fPt1t/WtcQn0iuZpU6hrK3Icy4fK5XM106hsdOoay0fK5mjQlcro0FWvdBI08YMBNQoCYCAiSZmakSLYoY+Uf//7jaFmkSJpVCi20IpJYEQacIgSDTVkIVFJ0AoGTwWAEGjoItISXFkTVod8YxzylHPJaWqkuoRShjSyJFSJE1cYxy0IKlg7ER5YKiUNFg6oGlgqr/+e+sFSwcBo8Cp1ZKp6skVDX4lKhpMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ=="

/***/ }),
/* 28 */
/*!*************************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/static/audio/clock.mp3 ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/audio/clock.mp3";

/***/ }),
/* 29 */
/*!***********************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/static/audio/die.mp3 ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:audio/mpeg;base64,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NNbrzTW/+abNNNN8dGpFh44dAFABFwig9ElDjxFB6NlNNnP1bOf/////9Dt////U3zjv+ccdOOOzh4bNCO+FkdFyOCn/CUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/44JkAAAAAaQAAAAAAAADSAAAAABMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map