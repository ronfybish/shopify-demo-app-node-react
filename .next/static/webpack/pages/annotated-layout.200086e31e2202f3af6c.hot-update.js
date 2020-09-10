webpackHotUpdate_N_E("pages/annotated-layout",{

/***/ "./pages/annotated-layout.js":
/*!***********************************!*\
  !*** ./pages/annotated-layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var AnnotatedLayout = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(AnnotatedLayout, _React$Component);

  var _super = _createSuper(AnnotatedLayout);

  function AnnotatedLayout() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnnotatedLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      discount: '10%',
      enabled: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSubmit", function () {
      _this.setState({
        discount: _this.state.discount
      });

      console.log('submission', _this.state);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChange", function (field) {
      return function (value) {
        return _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, field, value));
      };
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AnnotatedLayout, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          discount = _this$state.discount,
          enabled = _this$state.enabled;
      var contentStatus = enabled ? 'Disable' : 'Enable';
      var textStatus = enabled ? 'enabled' : 'disabled';
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Page"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"].AnnotatedSection, {
        title: "Default discount",
        description: "Add a product to Sample App, it will automatically be discounted."
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        onSubmit: this.handleSubmit
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        value: discount,
        onChange: this.handleChange('discount'),
        label: "Discount percentage",
        type: "discount"
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Stack"], {
        distribution: "trailing"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        primary: true,
        submit: true
      }, "Save")))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"].AnnotatedSection, {
        title: "Price updates",
        description: "Temporarily disable all Sample App price updates"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["SettingToggle"], {
        action: {
          content: contentStatus,
          onAction: this.handleToggle
        },
        enabled: enabled
      }, "This setting is", ' ', __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
        variation: "strong"
      }, textStatus), "."))));
    }
  }]);

  return AnnotatedLayout;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AnnotatedLayout);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5ub3RhdGVkLWxheW91dC5qcyJdLCJuYW1lcyI6WyJBbm5vdGF0ZWRMYXlvdXQiLCJkaXNjb3VudCIsImVuYWJsZWQiLCJzZXRTdGF0ZSIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImZpZWxkIiwidmFsdWUiLCJjb250ZW50U3RhdHVzIiwidGV4dFN0YXR1cyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImNvbnRlbnQiLCJvbkFjdGlvbiIsImhhbmRsZVRvZ2dsZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQWFNQSxlOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNHO0FBQ1BDLGNBQVEsRUFBRSxLQURIO0FBRVBDLGFBQU8sRUFBRTtBQUZGLEs7O3VOQTBETyxZQUFNO0FBQ3BCLFlBQUtDLFFBQUwsQ0FBYztBQUNiRixnQkFBUSxFQUFFLE1BQUtHLEtBQUwsQ0FBV0g7QUFEUixPQUFkOztBQUdBSSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLE1BQUtGLEtBQS9CO0FBQ0EsSzs7dU5BRWMsVUFBQUcsS0FBSyxFQUFJO0FBQ3ZCLGFBQU8sVUFBQUMsS0FBSztBQUFBLGVBQUksTUFBS0wsUUFBTCwrRkFBaUJJLEtBQWpCLEVBQXlCQyxLQUF6QixFQUFKO0FBQUEsT0FBWjtBQUNBLEs7Ozs7Ozs7NkJBOURRO0FBQUEsd0JBQzRCLEtBQUtKLEtBRGpDO0FBQUEsVUFDTUgsUUFETixlQUNNQSxRQUROO0FBQUEsVUFDZ0JDLE9BRGhCLGVBQ2dCQSxPQURoQjtBQUVGLFVBQU1PLGFBQWEsR0FBR1AsT0FBTyxHQUFHLFNBQUgsR0FBZSxRQUE1QztBQUNBLFVBQU1RLFVBQVUsR0FBR1IsT0FBTyxHQUFHLFNBQUgsR0FBZSxVQUF6QztBQUVOLGFBQ0MsTUFBQyxxREFBRCxRQUNDLE1BQUMsdURBQUQsUUFDQyxNQUFDLHVEQUFELENBQVEsZ0JBQVI7QUFDQyxhQUFLLEVBQUMsa0JBRFA7QUFFQyxtQkFBVyxFQUFDO0FBRmIsU0FJQyxNQUFDLHFEQUFEO0FBQU0saUJBQVM7QUFBZixTQUNDLE1BQUMscURBQUQ7QUFBTSxnQkFBUSxFQUFFLEtBQUtTO0FBQXJCLFNBQ0MsTUFBQywyREFBRCxRQUNDLE1BQUMsMERBQUQ7QUFDQyxhQUFLLEVBQUVWLFFBRFI7QUFFQyxnQkFBUSxFQUFFLEtBQUtXLFlBQUwsQ0FBa0IsVUFBbEIsQ0FGWDtBQUdDLGFBQUssRUFBQyxxQkFIUDtBQUlDLFlBQUksRUFBQztBQUpOLFFBREQsRUFPQyxNQUFDLHNEQUFEO0FBQU8sb0JBQVksRUFBQztBQUFwQixTQUNDLE1BQUMsdURBQUQ7QUFBUSxlQUFPLE1BQWY7QUFBZ0IsY0FBTTtBQUF0QixnQkFERCxDQVBELENBREQsQ0FERCxDQUpELENBREQsRUF1QkMsTUFBQyx1REFBRCxDQUFRLGdCQUFSO0FBQ0MsYUFBSyxFQUFDLGVBRFA7QUFFQyxtQkFBVyxFQUFDO0FBRmIsU0FJQyxNQUFDLDhEQUFEO0FBQ0MsY0FBTSxFQUFFO0FBQ1BDLGlCQUFPLEVBQUVKLGFBREY7QUFFUEssa0JBQVEsRUFBRSxLQUFLQztBQUZSLFNBRFQ7QUFLQyxlQUFPLEVBQUViO0FBTFYsNEJBT2lCLEdBUGpCLEVBUUMsTUFBQywwREFBRDtBQUFXLGlCQUFTLEVBQUM7QUFBckIsU0FDRVEsVUFERixDQVJELE1BSkQsQ0F2QkQsQ0FERCxDQUREO0FBOENBOzs7O0VBekQ0Qk0sNENBQUssQ0FBQ0MsUzs7QUF1RXJCakIsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYW5ub3RhdGVkLWxheW91dC4yMDAwODZlMzFlMjIwMmYzYWY2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRCdXR0b24sXHJcblx0Q2FyZCxcclxuXHRGb3JtLFxyXG5cdEZvcm1MYXlvdXQsXHJcblx0TGF5b3V0LFxyXG5cdFBhZ2UsXHJcblx0U3RhY2ssXHJcblx0U2V0dGluZ1RvZ2dsZSxcclxuXHRUZXh0RmllbGQsXHJcblx0VGV4dFN0eWxlLFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5cclxuY2xhc3MgQW5ub3RhdGVkTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRzdGF0ZSA9IHtcclxuXHRcdGRpc2NvdW50OiAnMTAlJyxcclxuXHRcdGVuYWJsZWQ6IGZhbHNlLFxyXG5cdH07XHJcblxyXG5cdHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGRpc2NvdW50LCBlbmFibGVkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRTdGF0dXMgPSBlbmFibGVkID8gJ0Rpc2FibGUnIDogJ0VuYWJsZSc7XHJcbiAgICAgICAgY29uc3QgdGV4dFN0YXR1cyA9IGVuYWJsZWQgPyAnZW5hYmxlZCcgOiAnZGlzYWJsZWQnO1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxQYWdlPlxyXG5cdFx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0XHQ8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuXHRcdFx0XHRcdFx0dGl0bGU9J0RlZmF1bHQgZGlzY291bnQnXHJcblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uPSdBZGQgYSBwcm9kdWN0IHRvIFNhbXBsZSBBcHAsIGl0IHdpbGwgYXV0b21hdGljYWxseSBiZSBkaXNjb3VudGVkLidcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PENhcmQgc2VjdGlvbmVkPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUxheW91dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtkaXNjb3VudH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rpc2NvdW50Jyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9J0Rpc2NvdW50IHBlcmNlbnRhZ2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nZGlzY291bnQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxTdGFjayBkaXN0cmlidXRpb249J3RyYWlsaW5nJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHByaW1hcnkgc3VibWl0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0U2F2ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1N0YWNrPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Gb3JtTGF5b3V0PlxyXG5cdFx0XHRcdFx0XHRcdDwvRm9ybT5cclxuXHRcdFx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdFx0PC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cclxuXHRcdFx0XHRcdDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG5cdFx0XHRcdFx0XHR0aXRsZT0nUHJpY2UgdXBkYXRlcydcclxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249J1RlbXBvcmFyaWx5IGRpc2FibGUgYWxsIFNhbXBsZSBBcHAgcHJpY2UgdXBkYXRlcydcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PFNldHRpbmdUb2dnbGVcclxuXHRcdFx0XHRcdFx0XHRhY3Rpb249e3tcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IGNvbnRlbnRTdGF0dXMsXHJcblx0XHRcdFx0XHRcdFx0XHRvbkFjdGlvbjogdGhpcy5oYW5kbGVUb2dnbGUsXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRlbmFibGVkPXtlbmFibGVkfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0VGhpcyBzZXR0aW5nIGlzeycgJ31cclxuXHRcdFx0XHRcdFx0XHQ8VGV4dFN0eWxlIHZhcmlhdGlvbj0nc3Ryb25nJz5cclxuXHRcdFx0XHRcdFx0XHRcdHt0ZXh0U3RhdHVzfVxyXG5cdFx0XHRcdFx0XHRcdDwvVGV4dFN0eWxlPlxyXG5cdFx0XHRcdFx0XHRcdC5cclxuXHRcdFx0XHRcdFx0PC9TZXR0aW5nVG9nZ2xlPlxyXG5cdFx0XHRcdFx0PC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cclxuXHRcdFx0XHQ8L0xheW91dD5cclxuXHRcdFx0PC9QYWdlPlxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRkaXNjb3VudDogdGhpcy5zdGF0ZS5kaXNjb3VudCxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2coJ3N1Ym1pc3Npb24nLCB0aGlzLnN0YXRlKTtcclxuXHR9O1xyXG5cclxuXHRoYW5kbGVDaGFuZ2UgPSBmaWVsZCA9PiB7XHJcblx0XHRyZXR1cm4gdmFsdWUgPT4gdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFubm90YXRlZExheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==