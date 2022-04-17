(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!**********************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/main.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 14));\n\n\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7OztBQUduQixzRTtBQUNBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7QUFDQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7QUFDQSxJQUFNQyxHQUFHLEdBQUcsSUFBSUwsWUFBSjtBQUNMRyxZQURLLEVBQVo7O0FBR0FFLEdBQUcsQ0FBQ0MsTUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxuQXBwLm1wVHlwZSA9ICdhcHAnXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICAuLi5BcHBcbn0pXG5hcHAuJG1vdW50KClcblxuXG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/pages.json ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!************************************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/pages/index/index.vue?mpType=page ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************************************************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhangshuaining/Documents/code/开源/snake_eat_worm/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      ref: "body",
      staticClass: _vm._$s(0, "sc", "content"),
      attrs: { _i: 0 },
      on: {
        keyup: [
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "left", 37, $event.key, [
                "Left",
                "ArrowLeft"
              ])
            ) {
              return null
            }
            if ("button" in $event && $event.button !== 0) {
              return null
            }
            return _vm.bindLeft($event)
          },
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "right", 39, $event.key, [
                "Right",
                "ArrowRight"
              ])
            ) {
              return null
            }
            if ("button" in $event && $event.button !== 2) {
              return null
            }
            return _vm.bindRight($event)
          },
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "down", 40, $event.key, [
                "Down",
                "ArrowDown"
              ])
            ) {
              return null
            }
            return _vm.bindDown($event)
          },
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])
            ) {
              return null
            }
            return _vm.bindUp($event)
          }
        ],
        touchstart: _vm.handleTouchStart,
        touchmove: _vm.handleTouchMove
      }
    },
    [
      _c("view", [_vm._v(_vm._$s(1, "t0-0", _vm._s(_vm.snakes.length)))]),
      _c(
        "view",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm._$s(2, "v-show", _vm.boom),
              expression: "_$s(2,'v-show',boom)"
            }
          ],
          staticClass: _vm._$s(2, "sc", "boom-countdown"),
          attrs: { _i: 2 }
        },
        [
          _c(
            "text",
            { staticClass: _vm._$s(3, "sc", "num"), attrs: { _i: 3 } },
            [_vm._v(_vm._$s(3, "t0-0", _vm._s(_vm.boomCount)))]
          ),
          _c("text", { staticClass: _vm._$s(4, "sc", "tip"), attrs: { _i: 4 } })
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(5, "sc", "game-field"), attrs: { _i: 5 } },
        _vm._l(_vm._$s(6, "f", { forItems: _vm.blocks }), function(
          x,
          i,
          $20,
          $30
        ) {
          return _c("view", {
            key: _vm._$s(6, "f", { forIndex: $20, key: i }),
            staticClass: _vm._$s("6-" + $30, "sc", "block"),
            style: _vm._$s(
              "6-" + $30,
              "s",
              "background-image: " +
                _vm.bg(x, i) +
                ";transform: rotate(" +
                _vm.calcRotate(x, i) +
                "deg)"
            ),
            attrs: { _i: "6-" + $30 }
          })
        }),
        0
      ),
      _c(
        "view",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm._$s(7, "v-show", !_vm.started || _vm.ended),
              expression: "_$s(7,'v-show',!started || ended)"
            }
          ],
          staticClass: _vm._$s(7, "sc", "game-board-wrap"),
          attrs: { _i: 7 }
        },
        [
          _c(
            "view",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm._$s(8, "v-show", !_vm.started),
                  expression: "_$s(8,'v-show',!started)"
                }
              ],
              staticClass: _vm._$s(8, "sc", "game-board"),
              attrs: { _i: 8 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(9, "sc", "title"),
                attrs: { _i: 9 }
              }),
              _c(
                "radio-group",
                { attrs: { _i: 10 }, on: { change: _vm.bindLevelChange } },
                [
                  _c(
                    "label",
                    {
                      staticClass: _vm._$s(11, "sc", "label"),
                      attrs: { _i: 11 }
                    },
                    [
                      _c("radio", {
                        attrs: {
                          checked: _vm._$s(12, "a-checked", _vm.level == 1),
                          _i: 12
                        }
                      }),
                      _c("text")
                    ]
                  ),
                  _c(
                    "label",
                    {
                      staticClass: _vm._$s(14, "sc", "label"),
                      attrs: { _i: 14 }
                    },
                    [
                      _c("radio", {
                        attrs: {
                          checked: _vm._$s(15, "a-checked", _vm.level == 2),
                          _i: 15
                        }
                      }),
                      _c("text")
                    ]
                  ),
                  _c(
                    "label",
                    {
                      staticClass: _vm._$s(17, "sc", "label"),
                      attrs: { _i: 17 }
                    },
                    [
                      _c("radio", {
                        attrs: {
                          checked: _vm._$s(18, "a-checked", _vm.level == 3),
                          _i: 18
                        }
                      }),
                      _c("text")
                    ]
                  ),
                  _c(
                    "label",
                    {
                      staticClass: _vm._$s(20, "sc", "label"),
                      attrs: { _i: 20 }
                    },
                    [
                      _c("radio", {
                        attrs: {
                          checked: _vm._$s(21, "a-checked", _vm.level == 4),
                          _i: 21
                        }
                      }),
                      _c("text")
                    ]
                  )
                ]
              ),
              _c("button", { attrs: { _i: 23 }, on: { click: _vm.start } })
            ]
          ),
          _c(
            "view",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm._$s(24, "v-show", _vm.ended),
                  expression: "_$s(24,'v-show',ended)"
                }
              ],
              staticClass: _vm._$s(24, "sc", "settle-board"),
              attrs: { _i: 24 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(25, "sc", "title"),
                attrs: { _i: 25 }
              }),
              _c(
                "view",
                { staticClass: _vm._$s(26, "sc", "result"), attrs: { _i: 26 } },
                [_vm._v(_vm._$s(26, "t0-0", _vm._s(_vm.snakes.length)))]
              ),
              _c(
                "view",
                { staticClass: _vm._$s(27, "sc", "btns"), attrs: { _i: 27 } },
                [
                  _c("button", {
                    attrs: { _i: 28 },
                    on: { click: _vm.reStart }
                  }),
                  _c("button", { attrs: { _i: 29 }, on: { click: _vm.rePick } })
                ]
              )
            ]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!************************************************************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTR1QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhangshuaining/Documents/code/开源/snake_eat_worm/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _worm = _interopRequireDefault(__webpack_require__(/*! ../../static/images/worm.png */ 7));\nvar _snake_body = _interopRequireDefault(__webpack_require__(/*! ../../static/images/snake_body.png */ 8));\nvar _snake_head = _interopRequireDefault(__webpack_require__(/*! ../../static/images/snake_head.png */ 9));\nvar _snake_tail = _interopRequireDefault(__webpack_require__(/*! ../../static/images/snake_tail.png */ 10));\nvar _pollute = _interopRequireDefault(__webpack_require__(/*! ../../static/images/pollute.png */ 11));\nvar _worm_ = _interopRequireDefault(__webpack_require__(/*! ../../static/images/worm_4.png */ 12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { blocks: [], worms: [], snakes: [0, 1, 2, 3], direction: \"right\", timer: null, level: 1, // 游戏难度\n      boom: false, // 是否生成会爆炸的虫子\n      boomCount: 10, pollutes: [], started: false, // 游戏开始了\n      ended: false, // 游戏结束了\n      lastX: 0, lastY: 0 };}, onLoad: function onLoad() {var _this = this;this.initGame(); // 绑定键盘事件\n    document.onkeydown = function (e) {switch (e.keyCode) {// 获取当前按下键盘键的编码\n        case 8: // 按下退格键\n          _this.rePick();break;case 13: // 按下回车键\n          _this.reStart();break;case 37: // 按下左箭头键\n          _this.bindLeft();break;case 39: // 按下右箭头键\n          _this.bindRight();break;case 38: // 按下上箭头键\n          if (!_this.started) {_this.level--;} else {_this.bindUp();}break;case 40: // 按下下箭头键\n          if (!_this.started) {_this.level++;} else {_this.bindDown();}break;}};}, watch: { boomCount: function boomCount(val) {if (val === 0) {// 超过爆炸时间还没吃到,则将虫子格子变成被污染的土地,并且重置爆炸状态,同时生成一只新的虫子:\n        var boomWorm = this.worms.pop();\n        this.pollutes.push(boomWorm);\n        this.blocks[boomWorm] = 3; // 被污染的地方我们用3表示\n        this.boom = false;\n        this.worms.push(this.createWorm());\n      }\n    } },\n\n  methods: {\n    initGame: function initGame() {\n      this.blocks = new Array(100).fill(0);\n      this.worms = [Math.floor(Math.random() * 96) + 4];\n      this.snakes = [0, 1, 2, 3];\n      this.pollutes = [];\n      this.direction = \"right\";\n      this.timer = null;\n      this.boomTimer = null;\n      this.paint();\n    },\n    handleTouchStart: function handleTouchStart(e) {\n      // 手指开始位置\n      this.lastX = e.touches[0].pageX;\n      this.lastY = e.touches[0].pageY;\n    },\n    handleTouchMove: function handleTouchMove(e) {\n      var lastX = e.touches[0].pageX; // 移动的x轴坐标\n      var lastY = e.touches[0].pageY; // 移动的y轴坐标\n\n      var touchX = lastX - this.lastX;\n      var touchY = lastY - this.lastY;\n      if (Math.abs(touchX) > Math.abs(touchY)) {\n        if (touchX < 0) {\n          this.direction = 'left';\n        } else if (touchX > 0) {\n          this.direction = 'right';\n        }\n      } else {\n        if (touchY < 0) {\n          this.direction = 'up';\n        } else if (touchY > 0) {\n          this.direction = 'down';\n        }\n      }\n      this.lastX = lastX;\n      this.lastY = lastY;\n\n    },\n    // 难度选择\n    bindLevelChange: function bindLevelChange(e) {\n      this.level = e.detail.value;\n    },\n    rePick: function rePick() {\n      this.started = false;\n      this.ended = false;\n    },\n    start: function start() {var _this2 = this;\n      this.started = true;\n      this.initGame();\n      this.timer = setInterval(function () {\n        _this2.toWards(_this2.direction);\n      }, 1000 / this.level);\n    },\n    reStart: function reStart() {\n      this.ended = false;\n      if (this.timer) {\n        clearInterval(this.timer);\n      }\n      this.start();\n    },\n    paint: function paint() {var _this3 = this;\n      this.worms.forEach(function (x) {\n        _this3.blocks[x] = 1;\n      });\n      this.snakes.forEach(function (x) {\n        _this3.blocks[x] = 2;\n      });\n      this.$forceUpdate();\n    },\n    bg: function bg(type, index) {\n      var bg = \"\";\n      switch (type) {\n        case 0: // 地板\n          bg = \"unset\";\n          break;\n        case 1: // 虫子\n          if (this.boom) {\n            bg = \"url(\".concat(_worm_.default, \")\");\n          } else {\n            bg = \"url(\".concat(_worm.default, \")\");\n          }\n          break;\n        case 2: // 蛇\n          var head = this.snakes[this.snakes.length - 1];\n          var tail = this.snakes[0];\n          if (index === head) {\n            bg = \"url(\".concat(_snake_head.default, \")\");\n          } else if (index === tail) {\n            bg = \"url(\".concat(_snake_tail.default, \")\");\n          } else {\n            bg = \"url(\".concat(_snake_body.default, \")\");\n          }\n          break;\n        case 3: // 污染的地块\n          bg = \"url(\".concat(_pollute.default, \")\");\n          break;}\n\n      return bg;\n    },\n    calcRotate: function calcRotate(type, index) {\n      var rotate = 0;\n      switch (type) {\n        case 0: // 地板\n          rotate = 0;\n          break;\n        case 1: // 虫子\n          rotate = 0;\n          break;\n        case 2: // 蛇\n          var length = this.snakes.length;\n          var head = this.snakes[length - 1];\n          var tail = this.snakes[0];\n          var tailPre = this.snakes[1];\n          var bodyPre = this.snakes[this.snakes.indexOf(index) + 1];\n          if (index === head) {\n            if (this.direction === \"right\") {\n              rotate = 90;\n            } else if (this.direction === \"down\") {\n              rotate = 180;\n            } else if (this.direction === \"left\") {\n              rotate = 270;\n            } else {\n              rotate = 0;\n            }\n          } else if (index === tail) {\n            if (tailPre - 1 === tail) {\n              // 向右走的\n              rotate = 90;\n            } else if (tailPre - 10 === tail) {\n              // 向下走的\n              rotate = 180;\n            } else if (tailPre + 1 === tail) {\n              // 向左走的\n              rotate = 270;\n            } else {\n              // 向上走的\n              rotate = 0;\n            }\n          } else {\n            if (bodyPre - 1 === index) {\n              // 向右走的\n              rotate = 90;\n            } else if (bodyPre - 10 === index) {\n              // 向下走的\n              rotate = 180;\n            } else if (bodyPre + 1 === index) {\n              // 向左走的\n              rotate = 270;\n            } else {\n              // 向上走的\n              rotate = 0;\n            }\n          }\n          break;}\n\n      return rotate;\n    },\n    toWards: function toWards(direction) {\n      if (this.snakes.length === 100) {\n        clearInterval(this.timer);\n        return;\n      }\n      var head = this.snakes[this.snakes.length - 1];\n      var tail = this.snakes[0];\n      var next;\n      switch (direction) {\n        case \"up\":\n          next = head - 10;\n          break;\n        case \"down\":\n          next = head + 10;\n          break;\n        case \"left\":\n          next = head - 1;\n          break;\n        case \"right\":\n          next = head + 1;\n          break;}\n\n      var gameover = this.checkGame(direction, next);\n      if (gameover) {\n        this.ended = true;\n        clearInterval(this.timer);\n        clearInterval(this.boomTimer);\n      } else {\n        // 游戏没结束\n        this.snakes.push(next);\n        var nextType = this.blocks[next];\n        this.blocks[next] = 2;\n        // 如果是空白格\n        if (nextType === 0) {\n          this.snakes.shift();\n        } else {\n          // 如果是虫子格\n          this.worms = this.worms.filter(function (x) {return x !== next;});\n          var nextWorm = this.createWorm();\n          this.worms.push(nextWorm);\n        }\n        this.blocks[tail] = 0;\n        this.paint();\n      }\n    },\n    // 生成下一只虫子\n    createWorm: function createWorm() {var _this4 = this;\n      this.boom = false;\n      var blocks = Array.from({\n        length: 100 },\n      function (v, k) {return k;});\n      // 在不是蛇和被污染的地方生成虫子\n      var restBlocks = blocks.filter(function (x) {return _this4.snakes.indexOf(x) < 0 && _this4.pollutes.indexOf(x) < 0;});\n      var worm = restBlocks[Math.floor(Math.random() * restBlocks.length)];\n      // 根据游戏难度,概率产出会爆炸的虫子:\n      this.boom = Math.random() / this.level < 0.05;\n      // 生成了新虫子说明吃到了那个爆炸的虫子，重置下爆炸\n      if (this.boom) {\n        this.boomCount = 10;\n        this.boomTimer && clearInterval(this.boomTimer);\n        this.boomTimer = setInterval(function () {\n          _this4.boomCount--;\n        }, 1000);\n      } else {\n        clearInterval(this.boomTimer);\n      }\n      return worm;\n    },\n    bindUp: function bindUp() {\n      if (this.direction === \"down\") return;\n      this.direction = \"up\";\n    },\n    bindDown: function bindDown() {\n      if (this.direction === \"up\") return;\n      this.direction = \"down\";\n    },\n    bindLeft: function bindLeft() {\n      if (this.direction === \"right\") return;\n      this.direction = \"left\";\n    },\n    bindRight: function bindRight() {\n      if (this.direction === \"left\") return;\n      this.direction = \"right\";\n    },\n    checkGame: function checkGame(direction, next) {\n      var gameover = false;\n      var isSnake = this.snakes.indexOf(next) > -1;\n      var isPollute = this.pollutes.indexOf(next) > -1;\n      // 撞到蛇和被污染的地块游戏结束\n      if (isSnake || isPollute) {\n        gameover = true;\n      }\n      // 撞到边界游戏结束\n      switch (direction) {\n        case \"up\":\n          if (next < 0) {\n            gameover = true;\n          }\n          break;\n        case \"down\":\n          if (next >= 100) {\n            gameover = true;\n          }\n          break;\n        case \"left\":\n          if (next % 10 === 9) {\n            gameover = true;\n          }\n          break;\n        case \"right\":\n          if (next % 10 === 0) {\n            gameover = true;\n          }\n          break;}\n\n      return gameover;\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQ0EsRUFDQSxJQURBLGtCQUNBLENBQ0EsU0FDQSxVQURBLEVBRUEsU0FGQSxFQUdBLG9CQUhBLEVBSUEsa0JBSkEsRUFLQSxXQUxBLEVBTUEsUUFOQSxFQU1BO0FBQ0EsaUJBUEEsRUFPQTtBQUNBLG1CQVJBLEVBU0EsWUFUQSxFQVVBLGNBVkEsRUFVQTtBQUNBLGtCQVhBLEVBV0E7QUFDQSxjQVpBLEVBYUEsUUFiQSxHQWVBLENBakJBLEVBa0JBLE1BbEJBLG9CQWtCQSxrQkFDQSxnQkFEQSxDQUVBO0FBQ0EsdUNBQ0E7QUFDQTtBQUNBLHlCQUNBLE1BQ0E7QUFDQSwwQkFDQSxNQUNBO0FBQ0EsMkJBQ0EsTUFDQTtBQUNBLDRCQUNBLE1BQ0E7QUFDQSwrQkFDQSxjQUNBLENBRkEsTUFFQSxDQUNBLGVBQ0EsQ0FDQSxNQUNBO0FBQ0EsK0JBQ0EsY0FDQSxDQUZBLE1BRUEsQ0FDQSxpQkFDQSxDQUNBLE1BMUJBLENBNEJBLENBN0JBLENBOEJBLENBbkRBLEVBb0RBLFNBQ0EsU0FEQSxxQkFDQSxHQURBLEVBQ0EsQ0FDQSxnQkFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FKQSxDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FWQSxFQXBEQTs7QUFnRUE7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBVkE7QUFXQSxvQkFYQSw0QkFXQSxDQVhBLEVBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWZBO0FBZ0JBLG1CQWhCQSwyQkFnQkEsQ0FoQkEsRUFnQkE7QUFDQSxxQ0FEQSxDQUNBO0FBQ0EscUNBRkEsQ0FFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLE9BTkEsTUFNQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBdENBO0FBdUNBO0FBQ0EsbUJBeENBLDJCQXdDQSxDQXhDQSxFQXdDQTtBQUNBO0FBQ0EsS0ExQ0E7QUEyQ0EsVUEzQ0Esb0JBMkNBO0FBQ0E7QUFDQTtBQUNBLEtBOUNBO0FBK0NBLFNBL0NBLG1CQStDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLGlCQUZBO0FBR0EsS0FyREE7QUFzREEsV0F0REEscUJBc0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBNURBO0FBNkRBLFNBN0RBLG1CQTZEQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBLEtBckVBO0FBc0VBLE1BdEVBLGNBc0VBLElBdEVBLEVBc0VBLEtBdEVBLEVBc0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkF4QkE7O0FBMEJBO0FBQ0EsS0FuR0E7QUFvR0EsY0FwR0Esc0JBb0dBLElBcEdBLEVBb0dBLEtBcEdBLEVBb0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBRkEsTUFFQTtBQUNBO0FBQ0EsYUFGQSxNQUVBO0FBQ0E7QUFDQSxhQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsV0FWQSxNQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBLGFBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQSxhQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQWRBLE1BY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsYUFIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBLGFBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBcERBOztBQXNEQTtBQUNBLEtBN0pBO0FBOEpBLFdBOUpBLG1CQThKQSxTQTlKQSxFQThKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBWkE7O0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBMU1BO0FBMk1BO0FBQ0EsY0E1TUEsd0JBNE1BO0FBQ0E7QUFDQTtBQUNBLG1CQURBO0FBRUEsaUNBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxFQUVBLElBRkE7QUFHQSxPQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWpPQTtBQWtPQSxVQWxPQSxvQkFrT0E7QUFDQTtBQUNBO0FBQ0EsS0FyT0E7QUFzT0EsWUF0T0Esc0JBc09BO0FBQ0E7QUFDQTtBQUNBLEtBek9BO0FBME9BLFlBMU9BLHNCQTBPQTtBQUNBO0FBQ0E7QUFDQSxLQTdPQTtBQThPQSxhQTlPQSx1QkE4T0E7QUFDQTtBQUNBO0FBQ0EsS0FqUEE7QUFrUEEsYUFsUEEscUJBa1BBLFNBbFBBLEVBa1BBLElBbFBBLEVBa1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFwQkE7O0FBc0JBO0FBQ0EsS0FsUkEsRUFoRUEsRSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IHJlZj1cImJvZHlcIiBjbGFzcz1cImNvbnRlbnRcIiBAa2V5dXAubGVmdD1cImJpbmRMZWZ0XCIgQGtleXVwLnJpZ2h0PVwiYmluZFJpZ2h0XCIgQGtleXVwLmRvd249XCJiaW5kRG93blwiXHJcblx0XHRAa2V5dXAudXA9XCJiaW5kVXBcIiBAdG91Y2hzdGFydD1cImhhbmRsZVRvdWNoU3RhcnRcIiBAdG91Y2htb3ZlPVwiaGFuZGxlVG91Y2hNb3ZlXCI+XHJcblx0XHQ8dmlldz7om4fom4fnm67liY3vvJp7e3NuYWtlcy5sZW5ndGh9feexs+mVvzwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYm9vbS1jb3VudGRvd25cIiB2LXNob3c9XCJib29tXCI+XHJcblx0XHRcdOiZq+iZq+i/mOaciTx0ZXh0IGNsYXNzPVwibnVtXCI+e3tib29tQ291bnR9fTwvdGV4dD7np5LniIbngrjvvIE8dGV4dCBjbGFzcz1cInRpcFwiPu+8iOivt+WcqOeIhueCuOWJjeWQg+aOieWug++8iTwvdGV4dD5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZ2FtZS1maWVsZFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJsb2NrXCIgOnN0eWxlPVwiYGJhY2tncm91bmQtaW1hZ2U6ICR7YmcoeCwgaSl9O3RyYW5zZm9ybTogcm90YXRlKCR7Y2FsY1JvdGF0ZShcclxuICAgICAgICAgIHgsXHJcbiAgICAgICAgICBpXHJcbiAgICAgICAgKX1kZWcpYFwiIHYtZm9yPVwiKHgsIGkpIGluIGJsb2Nrc1wiIDprZXk9XCJpXCI+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IHYtc2hvdz1cIiFzdGFydGVkIHx8IGVuZGVkXCIgY2xhc3M9XCJnYW1lLWJvYXJkLXdyYXBcIj5cclxuXHRcdFx0PHZpZXcgdi1zaG93PVwiIXN0YXJ0ZWRcIiBjbGFzcz1cImdhbWUtYm9hcmRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+6YCJ5oup5ri45oiP6Zq+5bqmPC92aWV3PlxyXG5cdFx0XHRcdDxyYWRpby1ncm91cCBuYW1lPVwicmFkaW9cIiBAY2hhbmdlPVwiYmluZExldmVsQ2hhbmdlXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHQ8cmFkaW8gdmFsdWU9XCIxXCIgOmNoZWNrZWQ9XCJsZXZlbD09MVwiIC8+PHRleHQ+566A5Y2V5qih5byPPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdDxyYWRpbyB2YWx1ZT1cIjJcIiA6Y2hlY2tlZD1cImxldmVsPT0yXCIgLz48dGV4dD7mraPluLjmqKHlvI88L3RleHQ+XHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwibGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0PHJhZGlvIHZhbHVlPVwiM1wiIDpjaGVja2VkPVwibGV2ZWw9PTNcIiAvPjx0ZXh0PuWbsOmavuaooeW8jzwvdGV4dD5cclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHQ8cmFkaW8gdmFsdWU9XCI0XCIgOmNoZWNrZWQ9XCJsZXZlbD09NFwiIC8+PHRleHQ+5Zyw54ux5qih5byPPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHQ8L3JhZGlvLWdyb3VwPlxyXG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJzdGFydFwiPuW8gOWni+a4uOaIjzwvYnV0dG9uPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IHYtc2hvdz1cImVuZGVkXCIgY2xhc3M9XCJzZXR0bGUtYm9hcmRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+5ri45oiP57uT5p2fPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVzdWx0XCI+5oKo55qE6JuH6JuH6L6+5Yiw5LqGe3tzbmFrZXMubGVuZ3RofX3nsbM8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJidG5zXCI+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwicmVTdGFydFwiPuWGjeasoeaMkeaImDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHBsYWluIEBjbGljaz1cInJlUGlja1wiPumHjemAiemavuW6pjwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgd29ybSBmcm9tIFwiLi4vLi4vc3RhdGljL2ltYWdlcy93b3JtLnBuZ1wiO1xyXG5cdGltcG9ydCBzbmFrZUJvZHkgZnJvbSBcIi4uLy4uL3N0YXRpYy9pbWFnZXMvc25ha2VfYm9keS5wbmdcIjtcclxuXHRpbXBvcnQgc25ha2VIZWFkIGZyb20gXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3NuYWtlX2hlYWQucG5nXCI7XHJcblx0aW1wb3J0IHNuYWtlVGFpbCBmcm9tIFwiLi4vLi4vc3RhdGljL2ltYWdlcy9zbmFrZV90YWlsLnBuZ1wiO1xyXG5cdGltcG9ydCBwb2xsdXRlQmxvY2sgZnJvbSBcIi4uLy4uL3N0YXRpYy9pbWFnZXMvcG9sbHV0ZS5wbmdcIjtcclxuXHRpbXBvcnQgd29ybUJvb20gZnJvbSBcIi4uLy4uL3N0YXRpYy9pbWFnZXMvd29ybV80LnBuZ1wiO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0YmxvY2tzOiBbXSxcclxuXHRcdFx0XHR3b3JtczogW10sXHJcblx0XHRcdFx0c25ha2VzOiBbMCwgMSwgMiwgM10sXHJcblx0XHRcdFx0ZGlyZWN0aW9uOiBcInJpZ2h0XCIsXHJcblx0XHRcdFx0dGltZXI6IG51bGwsXHJcblx0XHRcdFx0bGV2ZWw6IDEsIC8vIOa4uOaIj+mavuW6plxyXG5cdFx0XHRcdGJvb206IGZhbHNlLCAvLyDmmK/lkKbnlJ/miJDkvJrniIbngrjnmoTomavlrZBcclxuXHRcdFx0XHRib29tQ291bnQ6IDEwLFxyXG5cdFx0XHRcdHBvbGx1dGVzOiBbXSxcclxuXHRcdFx0XHRzdGFydGVkOiBmYWxzZSwgLy8g5ri45oiP5byA5aeL5LqGXHJcblx0XHRcdFx0ZW5kZWQ6IGZhbHNlLCAvLyDmuLjmiI/nu5PmnZ/kuoZcclxuXHRcdFx0XHRsYXN0WDogMCxcclxuXHRcdFx0XHRsYXN0WTogMCxcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdHRoaXMuaW5pdEdhbWUoKTtcclxuXHRcdFx0Ly8g57uR5a6a6ZSu55uY5LqL5Lu2XHJcblx0XHRcdGRvY3VtZW50Lm9ua2V5ZG93biA9IChlKSA9PiB7XHJcblx0XHRcdFx0c3dpdGNoIChlLmtleUNvZGUpIHsgLy8g6I635Y+W5b2T5YmN5oyJ5LiL6ZSu55uY6ZSu55qE57yW56CBXHJcblx0XHRcdFx0XHRjYXNlIDg6IC8vIOaMieS4i+mAgOagvOmUrlxyXG5cdFx0XHRcdFx0XHR0aGlzLnJlUGljaygpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgMTM6IC8vIOaMieS4i+Wbnui9pumUrlxyXG5cdFx0XHRcdFx0XHR0aGlzLnJlU3RhcnQoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIDM3OiAvLyDmjInkuIvlt6bnrq3lpLTplK5cclxuXHRcdFx0XHRcdFx0dGhpcy5iaW5kTGVmdCgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgMzk6IC8vIOaMieS4i+WPs+eureWktOmUrlxyXG5cdFx0XHRcdFx0XHR0aGlzLmJpbmRSaWdodCgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgMzg6IC8vIOaMieS4i+S4iueureWktOmUrlxyXG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMuc3RhcnRlZCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMubGV2ZWwtLTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmJpbmRVcCgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSA0MDogLy8g5oyJ5LiL5LiL566t5aS06ZSuXHJcblx0XHRcdFx0XHRcdGlmICghdGhpcy5zdGFydGVkKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5sZXZlbCsrO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuYmluZERvd24oKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHRib29tQ291bnQodmFsKSB7XHJcblx0XHRcdFx0aWYgKHZhbCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0Ly8g6LaF6L+H54iG54K45pe26Ze06L+Y5rKh5ZCD5YiwLOWImeWwhuiZq+WtkOagvOWtkOWPmOaIkOiiq+axoeafk+eahOWcn+WcsCzlubbkuJTph43nva7niIbngrjnirbmgIEs5ZCM5pe255Sf5oiQ5LiA5Y+q5paw55qE6Jmr5a2QOlxyXG5cdFx0XHRcdFx0Y29uc3QgYm9vbVdvcm0gPSB0aGlzLndvcm1zLnBvcCgpO1xyXG5cdFx0XHRcdFx0dGhpcy5wb2xsdXRlcy5wdXNoKGJvb21Xb3JtKTtcclxuXHRcdFx0XHRcdHRoaXMuYmxvY2tzW2Jvb21Xb3JtXSA9IDM7IC8vIOiiq+axoeafk+eahOWcsOaWueaIkeS7rOeUqDPooajnpLpcclxuXHRcdFx0XHRcdHRoaXMuYm9vbSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy53b3Jtcy5wdXNoKHRoaXMuY3JlYXRlV29ybSgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGluaXRHYW1lKCkge1xyXG5cdFx0XHRcdHRoaXMuYmxvY2tzID0gbmV3IEFycmF5KDEwMCkuZmlsbCgwKTtcclxuXHRcdFx0XHR0aGlzLndvcm1zID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk2KSArIDRdO1xyXG5cdFx0XHRcdHRoaXMuc25ha2VzID0gWzAsIDEsIDIsIDNdO1xyXG5cdFx0XHRcdHRoaXMucG9sbHV0ZXMgPSBbXTtcclxuXHRcdFx0XHR0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcclxuXHRcdFx0XHR0aGlzLnRpbWVyID0gbnVsbDtcclxuXHRcdFx0XHR0aGlzLmJvb21UaW1lciA9IG51bGw7XHJcblx0XHRcdFx0dGhpcy5wYWludCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRoYW5kbGVUb3VjaFN0YXJ0KGUpIHtcclxuXHRcdFx0XHQvLyDmiYvmjIflvIDlp4vkvY3nva5cclxuXHRcdFx0XHR0aGlzLmxhc3RYID0gZS50b3VjaGVzWzBdLnBhZ2VYO1xyXG5cdFx0XHRcdHRoaXMubGFzdFkgPSBlLnRvdWNoZXNbMF0ucGFnZVk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGhhbmRsZVRvdWNoTW92ZShlKSB7XHJcblx0XHRcdFx0bGV0IGxhc3RYID0gZS50b3VjaGVzWzBdLnBhZ2VYOyAvLyDnp7vliqjnmoR46L205Z2Q5qCHXHJcblx0XHRcdFx0bGV0IGxhc3RZID0gZS50b3VjaGVzWzBdLnBhZ2VZOyAvLyDnp7vliqjnmoR56L205Z2Q5qCHXHJcblxyXG5cdFx0XHRcdGxldCB0b3VjaFggPSBsYXN0WCAtIHRoaXMubGFzdFg7XHJcblx0XHRcdFx0bGV0IHRvdWNoWSA9IGxhc3RZIC0gdGhpcy5sYXN0WVxyXG5cdFx0XHRcdGlmIChNYXRoLmFicyh0b3VjaFgpID4gTWF0aC5hYnModG91Y2hZKSkge1xyXG5cdFx0XHRcdFx0aWYgKHRvdWNoWCA8IDApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaXJlY3Rpb24gPSAnbGVmdCdcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAodG91Y2hYID4gMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRpcmVjdGlvbiA9ICdyaWdodCdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKHRvdWNoWSA8IDApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaXJlY3Rpb24gPSAndXAnXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRvdWNoWSA+IDApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaXJlY3Rpb24gPSAnZG93bidcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5sYXN0WCA9IGxhc3RYO1xyXG5cdFx0XHRcdHRoaXMubGFzdFkgPSBsYXN0WVxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6Zq+5bqm6YCJ5oupXHJcblx0XHRcdGJpbmRMZXZlbENoYW5nZShlKSB7XHJcblx0XHRcdFx0dGhpcy5sZXZlbCA9IGUuZGV0YWlsLnZhbHVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRyZVBpY2soKSB7XHJcblx0XHRcdFx0dGhpcy5zdGFydGVkID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5lbmRlZCA9IGZhbHNlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdGFydCgpIHtcclxuXHRcdFx0XHR0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuaW5pdEdhbWUoKTtcclxuXHRcdFx0XHR0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy50b1dhcmRzKHRoaXMuZGlyZWN0aW9uKTtcclxuXHRcdFx0XHR9LCAxMDAwIC8gdGhpcy5sZXZlbCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJlU3RhcnQoKSB7XHJcblx0XHRcdFx0dGhpcy5lbmRlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGlmICh0aGlzLnRpbWVyKSB7XHJcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnN0YXJ0KCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHBhaW50KCkge1xyXG5cdFx0XHRcdHRoaXMud29ybXMuZm9yRWFjaCgoeCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5ibG9ja3NbeF0gPSAxO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMuc25ha2VzLmZvckVhY2goKHgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuYmxvY2tzW3hdID0gMjtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGlzLiRmb3JjZVVwZGF0ZSgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRiZyh0eXBlLCBpbmRleCkge1xyXG5cdFx0XHRcdGxldCBiZyA9IFwiXCI7XHJcblx0XHRcdFx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRcdFx0XHRjYXNlIDA6IC8vIOWcsOadv1xyXG5cdFx0XHRcdFx0XHRiZyA9IFwidW5zZXRcIjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIDE6IC8vIOiZq+WtkFxyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5ib29tKSB7XHJcblx0XHRcdFx0XHRcdFx0YmcgPSBgdXJsKCR7d29ybUJvb219KWA7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0YmcgPSBgdXJsKCR7d29ybX0pYDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgMjogLy8g6JuHXHJcblx0XHRcdFx0XHRcdGxldCBoZWFkID0gdGhpcy5zbmFrZXNbdGhpcy5zbmFrZXMubGVuZ3RoIC0gMV07XHJcblx0XHRcdFx0XHRcdGxldCB0YWlsID0gdGhpcy5zbmFrZXNbMF07XHJcblx0XHRcdFx0XHRcdGlmIChpbmRleCA9PT0gaGVhZCkge1xyXG5cdFx0XHRcdFx0XHRcdGJnID0gYHVybCgke3NuYWtlSGVhZH0pYDtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChpbmRleCA9PT0gdGFpbCkge1xyXG5cdFx0XHRcdFx0XHRcdGJnID0gYHVybCgke3NuYWtlVGFpbH0pYDtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRiZyA9IGB1cmwoJHtzbmFrZUJvZHl9KWA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIDM6IC8vIOaxoeafk+eahOWcsOWdl1xyXG5cdFx0XHRcdFx0XHRiZyA9IGB1cmwoJHtwb2xsdXRlQmxvY2t9KWA7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gYmc7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNhbGNSb3RhdGUodHlwZSwgaW5kZXgpIHtcclxuXHRcdFx0XHRsZXQgcm90YXRlID0gMDtcclxuXHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgMDogLy8g5Zyw5p2/XHJcblx0XHRcdFx0XHRcdHJvdGF0ZSA9IDA7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAxOiAvLyDomavlrZBcclxuXHRcdFx0XHRcdFx0cm90YXRlID0gMDtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIDI6IC8vIOibh1xyXG5cdFx0XHRcdFx0XHRsZXQgbGVuZ3RoID0gdGhpcy5zbmFrZXMubGVuZ3RoO1xyXG5cdFx0XHRcdFx0XHRsZXQgaGVhZCA9IHRoaXMuc25ha2VzW2xlbmd0aCAtIDFdO1xyXG5cdFx0XHRcdFx0XHRsZXQgdGFpbCA9IHRoaXMuc25ha2VzWzBdO1xyXG5cdFx0XHRcdFx0XHRsZXQgdGFpbFByZSA9IHRoaXMuc25ha2VzWzFdO1xyXG5cdFx0XHRcdFx0XHRsZXQgYm9keVByZSA9IHRoaXMuc25ha2VzW3RoaXMuc25ha2VzLmluZGV4T2YoaW5kZXgpICsgMV07XHJcblx0XHRcdFx0XHRcdGlmIChpbmRleCA9PT0gaGVhZCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyb3RhdGUgPSA5MDtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcImRvd25cIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0cm90YXRlID0gMTgwO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyb3RhdGUgPSAyNzA7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJvdGF0ZSA9IDA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09PSB0YWlsKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRhaWxQcmUgLSAxID09PSB0YWlsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyDlkJHlj7PotbDnmoRcclxuXHRcdFx0XHRcdFx0XHRcdHJvdGF0ZSA9IDkwO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGFpbFByZSAtIDEwID09PSB0YWlsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyDlkJHkuIvotbDnmoRcclxuXHRcdFx0XHRcdFx0XHRcdHJvdGF0ZSA9IDE4MDtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRhaWxQcmUgKyAxID09PSB0YWlsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyDlkJHlt6botbDnmoRcclxuXHRcdFx0XHRcdFx0XHRcdHJvdGF0ZSA9IDI3MDtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8g5ZCR5LiK6LWw55qEXHJcblx0XHRcdFx0XHRcdFx0XHRyb3RhdGUgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoYm9keVByZSAtIDEgPT09IGluZGV4KSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyDlkJHlj7PotbDnmoRcclxuXHRcdFx0XHRcdFx0XHRcdHJvdGF0ZSA9IDkwO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoYm9keVByZSAtIDEwID09PSBpbmRleCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8g5ZCR5LiL6LWw55qEXHJcblx0XHRcdFx0XHRcdFx0XHRyb3RhdGUgPSAxODA7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChib2R5UHJlICsgMSA9PT0gaW5kZXgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIOWQkeW3pui1sOeahFxyXG5cdFx0XHRcdFx0XHRcdFx0cm90YXRlID0gMjcwO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyDlkJHkuIrotbDnmoRcclxuXHRcdFx0XHRcdFx0XHRcdHJvdGF0ZSA9IDA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gcm90YXRlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b1dhcmRzKGRpcmVjdGlvbikge1xyXG5cdFx0XHRcdGlmICh0aGlzLnNuYWtlcy5sZW5ndGggPT09IDEwMCkge1xyXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGhlYWQgPSB0aGlzLnNuYWtlc1t0aGlzLnNuYWtlcy5sZW5ndGggLSAxXTtcclxuXHRcdFx0XHRsZXQgdGFpbCA9IHRoaXMuc25ha2VzWzBdO1xyXG5cdFx0XHRcdGxldCBuZXh0O1xyXG5cdFx0XHRcdHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcblx0XHRcdFx0XHRjYXNlIFwidXBcIjpcclxuXHRcdFx0XHRcdFx0bmV4dCA9IGhlYWQgLSAxMDtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwiZG93blwiOlxyXG5cdFx0XHRcdFx0XHRuZXh0ID0gaGVhZCArIDEwO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCJsZWZ0XCI6XHJcblx0XHRcdFx0XHRcdG5leHQgPSBoZWFkIC0gMTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwicmlnaHRcIjpcclxuXHRcdFx0XHRcdFx0bmV4dCA9IGhlYWQgKyAxO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGdhbWVvdmVyID0gdGhpcy5jaGVja0dhbWUoZGlyZWN0aW9uLCBuZXh0KTtcclxuXHRcdFx0XHRpZiAoZ2FtZW92ZXIpIHtcclxuXHRcdFx0XHRcdHRoaXMuZW5kZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5ib29tVGltZXIpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyDmuLjmiI/msqHnu5PmnZ9cclxuXHRcdFx0XHRcdHRoaXMuc25ha2VzLnB1c2gobmV4dCk7XHJcblx0XHRcdFx0XHRsZXQgbmV4dFR5cGUgPSB0aGlzLmJsb2Nrc1tuZXh0XTtcclxuXHRcdFx0XHRcdHRoaXMuYmxvY2tzW25leHRdID0gMjtcclxuXHRcdFx0XHRcdC8vIOWmguaenOaYr+epuueZveagvFxyXG5cdFx0XHRcdFx0aWYgKG5leHRUeXBlID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc25ha2VzLnNoaWZ0KCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQvLyDlpoLmnpzmmK/omavlrZDmoLxcclxuXHRcdFx0XHRcdFx0dGhpcy53b3JtcyA9IHRoaXMud29ybXMuZmlsdGVyKCh4KSA9PiB4ICE9PSBuZXh0KTtcclxuXHRcdFx0XHRcdFx0bGV0IG5leHRXb3JtID0gdGhpcy5jcmVhdGVXb3JtKCk7XHJcblx0XHRcdFx0XHRcdHRoaXMud29ybXMucHVzaChuZXh0V29ybSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLmJsb2Nrc1t0YWlsXSA9IDA7XHJcblx0XHRcdFx0XHR0aGlzLnBhaW50KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDnlJ/miJDkuIvkuIDlj6romavlrZBcclxuXHRcdFx0Y3JlYXRlV29ybSgpIHtcclxuXHRcdFx0XHR0aGlzLmJvb20gPSBmYWxzZTtcclxuXHRcdFx0XHRsZXQgYmxvY2tzID0gQXJyYXkuZnJvbSh7XHJcblx0XHRcdFx0XHRsZW5ndGg6IDEwMFxyXG5cdFx0XHRcdH0sICh2LCBrKSA9PiBrKTtcclxuXHRcdFx0XHQvLyDlnKjkuI3mmK/om4flkozooqvmsaHmn5PnmoTlnLDmlrnnlJ/miJDomavlrZBcclxuXHRcdFx0XHRsZXQgcmVzdEJsb2NrcyA9IGJsb2Nrcy5maWx0ZXIoeCA9PiB0aGlzLnNuYWtlcy5pbmRleE9mKHgpIDwgMCAmJiB0aGlzLnBvbGx1dGVzLmluZGV4T2YoeCkgPCAwKTtcclxuXHRcdFx0XHRsZXQgd29ybSA9IHJlc3RCbG9ja3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVzdEJsb2Nrcy5sZW5ndGgpXTtcclxuXHRcdFx0XHQvLyDmoLnmja7muLjmiI/pmr7luqYs5qaC546H5Lqn5Ye65Lya54iG54K455qE6Jmr5a2QOlxyXG5cdFx0XHRcdHRoaXMuYm9vbSA9IE1hdGgucmFuZG9tKCkgLyB0aGlzLmxldmVsIDwgMC4wNTtcclxuXHRcdFx0XHQvLyDnlJ/miJDkuobmlrDomavlrZDor7TmmI7lkIPliLDkuobpgqPkuKrniIbngrjnmoTomavlrZDvvIzph43nva7kuIvniIbngrhcclxuXHRcdFx0XHRpZiAodGhpcy5ib29tKSB7XHJcblx0XHRcdFx0XHR0aGlzLmJvb21Db3VudCA9IDEwO1xyXG5cdFx0XHRcdFx0dGhpcy5ib29tVGltZXIgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLmJvb21UaW1lcik7XHJcblx0XHRcdFx0XHR0aGlzLmJvb21UaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5ib29tQ291bnQtLTtcclxuXHRcdFx0XHRcdH0sIDEwMDApXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5ib29tVGltZXIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gd29ybTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YmluZFVwKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLmRpcmVjdGlvbiA9IFwidXBcIjtcclxuXHRcdFx0fSxcclxuXHRcdFx0YmluZERvd24oKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZGlyZWN0aW9uID09PSBcInVwXCIpIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLmRpcmVjdGlvbiA9IFwiZG93blwiO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRiaW5kTGVmdCgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwicmlnaHRcIikgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuZGlyZWN0aW9uID0gXCJsZWZ0XCI7XHJcblx0XHRcdH0sXHJcblx0XHRcdGJpbmRSaWdodCgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwibGVmdFwiKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNoZWNrR2FtZShkaXJlY3Rpb24sIG5leHQpIHtcclxuXHRcdFx0XHRsZXQgZ2FtZW92ZXIgPSBmYWxzZTtcclxuXHRcdFx0XHRsZXQgaXNTbmFrZSA9IHRoaXMuc25ha2VzLmluZGV4T2YobmV4dCkgPiAtMTtcclxuXHRcdFx0XHRsZXQgaXNQb2xsdXRlID0gdGhpcy5wb2xsdXRlcy5pbmRleE9mKG5leHQpID4gLTE7XHJcblx0XHRcdFx0Ly8g5pKe5Yiw6JuH5ZKM6KKr5rGh5p+T55qE5Zyw5Z2X5ri45oiP57uT5p2fXHJcblx0XHRcdFx0aWYgKGlzU25ha2UgfHwgaXNQb2xsdXRlKSB7XHJcblx0XHRcdFx0XHRnYW1lb3ZlciA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIOaSnuWIsOi+ueeVjOa4uOaIj+e7k+adn1xyXG5cdFx0XHRcdHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcblx0XHRcdFx0XHRjYXNlIFwidXBcIjpcclxuXHRcdFx0XHRcdFx0aWYgKG5leHQgPCAwKSB7XHJcblx0XHRcdFx0XHRcdFx0Z2FtZW92ZXIgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcImRvd25cIjpcclxuXHRcdFx0XHRcdFx0aWYgKG5leHQgPj0gMTAwKSB7XHJcblx0XHRcdFx0XHRcdFx0Z2FtZW92ZXIgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcImxlZnRcIjpcclxuXHRcdFx0XHRcdFx0aWYgKG5leHQgJSAxMCA9PT0gOSkge1xyXG5cdFx0XHRcdFx0XHRcdGdhbWVvdmVyID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCJyaWdodFwiOlxyXG5cdFx0XHRcdFx0XHRpZiAobmV4dCAlIDEwID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0Z2FtZW92ZXIgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZ2FtZW92ZXI7XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC5jb250ZW50IHtcclxuXHRcdGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHVweCk7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDMwdXB4IDA7XHJcblx0fVxyXG5cclxuXHQuZ2FtZS1maWVsZCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0bWFyZ2luLXRvcDogMTAwdXB4O1xyXG5cdH1cclxuXHJcblx0LmJsb2NrIHtcclxuXHRcdHdpZHRoOiAxMHZ3O1xyXG5cdFx0aGVpZ2h0OiAxMHZ3O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDIzNSwgMTc4KTtcclxuXHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR9XHJcblxyXG5cdC5mbGV4IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdH1cclxuXHJcblx0LmFjdGlvbi1maWVsZCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5nYW1lLWJvYXJkLXdyYXAge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMHZoO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0ei1pbmRleDogOTk5O1xyXG5cdH1cclxuXHJcblx0LmdhbWUtYm9hcmQge1xyXG5cdFx0d2lkdGg6IDYwMHVweDtcclxuXHRcdGhlaWdodDogNjAwdXB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiA1MCU7XHJcblx0XHRsZWZ0OiA1MCU7XHJcblx0XHRtYXJnaW4tdG9wOiAtMzAwdXB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IC0zMDB1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMzB1cHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuc2V0dGxlLWJvYXJkIHtcclxuXHRcdHdpZHRoOiA2MDB1cHg7XHJcblx0XHRoZWlnaHQ6IDQwMHVweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogNTAlO1xyXG5cdFx0bGVmdDogNTAlO1xyXG5cdFx0bWFyZ2luLXRvcDogLTMwMHVweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAtMzAwdXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDMwdXB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogNTB1cHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdG1hcmdpbi10b3A6IDQwdXB4O1xyXG5cdH1cclxuXHJcblx0LmxhYmVsIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0bWFyZ2luOiAzMHVweDtcclxuXHR9XHJcblxyXG5cdC5yZXN1bHQge1xyXG5cdFx0bWFyZ2luOiA0MHVweCAwO1xyXG5cdH1cclxuXHJcblx0LmJ0bnMge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHdpZHRoOiA1MDB1cHg7XHJcblx0fVxyXG5cclxuXHQuYm9vbS1jb3VudGRvd24ge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR0b3A6IDYwdXB4O1xyXG5cdH1cclxuXHJcblx0Lm51bSB7XHJcblx0XHRmb250LXNpemU6IDYwdXB4O1xyXG5cdFx0Y29sb3I6ICMwMDdBRkY7XHJcblx0fVxyXG5cclxuXHQudGlwIHtcclxuXHRcdGZvbnQtc2l6ZTogMjB1cHg7XHJcblx0XHRjb2xvcjogI2Y4YjYyYTtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*************************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/static/images/worm.png ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/images/worm.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL3N0YXRpYy9pbWFnZXMvd29ybS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*******************************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/static/images/snake_body.png ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/images/snake_body.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL3N0YXRpYy9pbWFnZXMvc25ha2VfYm9keS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*******************************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/static/images/snake_head.png ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/images/snake_head.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL3N0YXRpYy9pbWFnZXMvc25ha2VfaGVhZC5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*******************************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/static/images/snake_tail.png ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/images/snake_tail.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaW1hZ2VzL3NuYWtlX3RhaWwucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!****************************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/static/images/pollute.png ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/images/pollute.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaW1hZ2VzL3BvbGx1dGUucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!***************************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/static/images/worm_4.png ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/images/worm_4.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaW1hZ2VzL3dvcm1fNC5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
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
/* 14 */
/*!**********************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/App.vue ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 15);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDNk07QUFDN00sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!***********************************************************************************************!*\
  !*** /Users/zhangshuaining/Documents/code/开源/snake_eat_worm/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 16);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVzQixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhangshuaining/Documents/code/开源/snake_eat_worm/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 17)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 18 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })
],[[0,"app-config"]]]);