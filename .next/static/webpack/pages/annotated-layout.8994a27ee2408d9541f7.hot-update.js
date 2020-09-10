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
      discount: '10%'
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
      var discount = this.state.discount;
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
      }, "Save"))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5ub3RhdGVkLWxheW91dC5qcyJdLCJuYW1lcyI6WyJBbm5vdGF0ZWRMYXlvdXQiLCJkaXNjb3VudCIsInNldFN0YXRlIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZmllbGQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQVlNQSxlOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNHO0FBQ1BDLGNBQVEsRUFBRTtBQURILEs7O3VOQXFDTyxZQUFNO0FBQ3BCLFlBQUtDLFFBQUwsQ0FBYztBQUNiRCxnQkFBUSxFQUFFLE1BQUtFLEtBQUwsQ0FBV0Y7QUFEUixPQUFkOztBQUdBRyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLE1BQUtGLEtBQS9CO0FBQ0EsSzs7dU5BRWMsVUFBQUcsS0FBSyxFQUFJO0FBQ3ZCLGFBQU8sVUFBQUMsS0FBSztBQUFBLGVBQUksTUFBS0wsUUFBTCwrRkFBaUJJLEtBQWpCLEVBQXlCQyxLQUF6QixFQUFKO0FBQUEsT0FBWjtBQUNBLEs7Ozs7Ozs7NkJBMUNRO0FBQUEsVUFDQU4sUUFEQSxHQUNhLEtBQUtFLEtBRGxCLENBQ0FGLFFBREE7QUFHUixhQUNDLE1BQUMscURBQUQsUUFDQyxNQUFDLHVEQUFELFFBQ0MsTUFBQyx1REFBRCxDQUFRLGdCQUFSO0FBQ0MsYUFBSyxFQUFDLGtCQURQO0FBRUMsbUJBQVcsRUFBQztBQUZiLFNBSUMsTUFBQyxxREFBRDtBQUFNLGlCQUFTO0FBQWYsU0FDQyxNQUFDLHFEQUFEO0FBQU0sZ0JBQVEsRUFBRSxLQUFLTztBQUFyQixTQUNDLE1BQUMsMkRBQUQsUUFDQyxNQUFDLDBEQUFEO0FBQ0MsYUFBSyxFQUFFUCxRQURSO0FBRUMsZ0JBQVEsRUFBRSxLQUFLUSxZQUFMLENBQWtCLFVBQWxCLENBRlg7QUFHQyxhQUFLLEVBQUMscUJBSFA7QUFJQyxZQUFJLEVBQUM7QUFKTixRQURELEVBT0MsTUFBQyxzREFBRDtBQUFPLG9CQUFZLEVBQUM7QUFBcEIsU0FDQyxNQUFDLHVEQUFEO0FBQVEsZUFBTyxNQUFmO0FBQWdCLGNBQU07QUFBdEIsZ0JBREQsQ0FQRCxDQURELENBREQsQ0FKRCxDQURELENBREQsQ0FERDtBQTRCQTs7OztFQXBDNEJDLDRDQUFLLENBQUNDLFM7O0FBa0RyQlgsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYW5ub3RhdGVkLWxheW91dC44OTk0YTI3ZWUyNDA4ZDk1NDFmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRCdXR0b24sXHJcblx0Q2FyZCxcclxuXHRGb3JtLFxyXG5cdEZvcm1MYXlvdXQsXHJcblx0TGF5b3V0LFxyXG5cdFBhZ2UsXHJcblx0U3RhY2ssXHJcbiAgICBUZXh0RmllbGQsXHJcbiAgICBUZXh0U3R5bGUsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcblxyXG5jbGFzcyBBbm5vdGF0ZWRMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdHN0YXRlID0ge1xyXG5cdFx0ZGlzY291bnQ6ICcxMCUnLFxyXG5cdH07XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgZGlzY291bnQgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFBhZ2U+XHJcblx0XHRcdFx0PExheW91dD5cclxuXHRcdFx0XHRcdDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG5cdFx0XHRcdFx0XHR0aXRsZT0nRGVmYXVsdCBkaXNjb3VudCdcclxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249J0FkZCBhIHByb2R1Y3QgdG8gU2FtcGxlIEFwcCwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGRpc2NvdW50ZWQuJ1xyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZCBzZWN0aW9uZWQ+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtTGF5b3V0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2Rpc2NvdW50fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnZGlzY291bnQnKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nRGlzY291bnQgcGVyY2VudGFnZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdkaXNjb3VudCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFN0YWNrIGRpc3RyaWJ1dGlvbj0ndHJhaWxpbmcnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gcHJpbWFyeSBzdWJtaXQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTYXZlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvU3RhY2s+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1MYXlvdXQ+XHJcblx0XHRcdFx0XHRcdFx0PC9Gb3JtPlxyXG5cdFx0XHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdFx0XHQ8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG5cdFx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0XHQ8L1BhZ2U+XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdGRpc2NvdW50OiB0aGlzLnN0YXRlLmRpc2NvdW50LFxyXG5cdFx0fSk7XHJcblx0XHRjb25zb2xlLmxvZygnc3VibWlzc2lvbicsIHRoaXMuc3RhdGUpO1xyXG5cdH07XHJcblxyXG5cdGhhbmRsZUNoYW5nZSA9IGZpZWxkID0+IHtcclxuXHRcdHJldHVybiB2YWx1ZSA9PiB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogdmFsdWUgfSk7XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5ub3RhdGVkTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9