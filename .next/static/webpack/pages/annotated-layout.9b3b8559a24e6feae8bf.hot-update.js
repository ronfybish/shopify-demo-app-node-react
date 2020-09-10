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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5ub3RhdGVkLWxheW91dC5qcyJdLCJuYW1lcyI6WyJBbm5vdGF0ZWRMYXlvdXQiLCJkaXNjb3VudCIsImVuYWJsZWQiLCJzZXRTdGF0ZSIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImZpZWxkIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJjb250ZW50IiwiY29udGVudFN0YXR1cyIsIm9uQWN0aW9uIiwiaGFuZGxlVG9nZ2xlIiwidGV4dFN0YXR1cyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQWFNQSxlOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNHO0FBQ0RDLGNBQVEsRUFBRSxLQURUO0FBRURDLGFBQU8sRUFBRTtBQUZSLEs7O3VOQXFETyxZQUFNO0FBQ3BCLFlBQUtDLFFBQUwsQ0FBYztBQUNiRixnQkFBUSxFQUFFLE1BQUtHLEtBQUwsQ0FBV0g7QUFEUixPQUFkOztBQUdBSSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLE1BQUtGLEtBQS9CO0FBQ0EsSzs7dU5BRWMsVUFBQUcsS0FBSyxFQUFJO0FBQ3ZCLGFBQU8sVUFBQUMsS0FBSztBQUFBLGVBQUksTUFBS0wsUUFBTCwrRkFBaUJJLEtBQWpCLEVBQXlCQyxLQUF6QixFQUFKO0FBQUEsT0FBWjtBQUNBLEs7Ozs7Ozs7NkJBekRRO0FBQUEsVUFDQVAsUUFEQSxHQUNhLEtBQUtHLEtBRGxCLENBQ0FILFFBREE7QUFHUixhQUNDLE1BQUMscURBQUQsUUFDQyxNQUFDLHVEQUFELFFBQ0MsTUFBQyx1REFBRCxDQUFRLGdCQUFSO0FBQ0MsYUFBSyxFQUFDLGtCQURQO0FBRUMsbUJBQVcsRUFBQztBQUZiLFNBSUMsTUFBQyxxREFBRDtBQUFNLGlCQUFTO0FBQWYsU0FDQyxNQUFDLHFEQUFEO0FBQU0sZ0JBQVEsRUFBRSxLQUFLUTtBQUFyQixTQUNDLE1BQUMsMkRBQUQsUUFDQyxNQUFDLDBEQUFEO0FBQ0MsYUFBSyxFQUFFUixRQURSO0FBRUMsZ0JBQVEsRUFBRSxLQUFLUyxZQUFMLENBQWtCLFVBQWxCLENBRlg7QUFHQyxhQUFLLEVBQUMscUJBSFA7QUFJQyxZQUFJLEVBQUM7QUFKTixRQURELEVBT0MsTUFBQyxzREFBRDtBQUFPLG9CQUFZLEVBQUM7QUFBcEIsU0FDQyxNQUFDLHVEQUFEO0FBQVEsZUFBTyxNQUFmO0FBQWdCLGNBQU07QUFBdEIsZ0JBREQsQ0FQRCxDQURELENBREQsQ0FKRCxDQURELEVBdUJnQixNQUFDLHVEQUFELENBQVEsZ0JBQVI7QUFDUixhQUFLLEVBQUMsZUFERTtBQUVSLG1CQUFXLEVBQUM7QUFGSixTQUlSLE1BQUMsOERBQUQ7QUFDRSxjQUFNLEVBQUU7QUFDTkMsaUJBQU8sRUFBRUMsYUFESDtBQUVOQyxrQkFBUSxFQUFFLEtBQUtDO0FBRlQsU0FEVjtBQUtFLGVBQU8sRUFBRVo7QUFMWCw0QkFPa0IsR0FQbEIsRUFRRSxNQUFDLDBEQUFEO0FBQVcsaUJBQVMsRUFBQztBQUFyQixTQUErQmEsVUFBL0IsQ0FSRixNQUpRLENBdkJoQixDQURELENBREQ7QUEyQ0E7Ozs7RUFwRDRCQyw0Q0FBSyxDQUFDQyxTOztBQWtFckJqQiw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hbm5vdGF0ZWQtbGF5b3V0LjliM2I4NTU5YTI0ZTZmZWFlOGJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdEJ1dHRvbixcclxuXHRDYXJkLFxyXG5cdEZvcm0sXHJcblx0Rm9ybUxheW91dCxcclxuXHRMYXlvdXQsXHJcblx0UGFnZSxcclxuICAgIFN0YWNrLFxyXG4gICAgU2V0dGluZ1RvZ2dsZSxcclxuICAgIFRleHRGaWVsZCxcclxuICAgIFRleHRTdHlsZSxcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuXHJcbmNsYXNzIEFubm90YXRlZExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0c3RhdGUgPSB7XHJcbiAgICAgICAgZGlzY291bnQ6ICcxMCUnLFxyXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG5cdH07XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgZGlzY291bnQgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFBhZ2U+XHJcblx0XHRcdFx0PExheW91dD5cclxuXHRcdFx0XHRcdDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG5cdFx0XHRcdFx0XHR0aXRsZT0nRGVmYXVsdCBkaXNjb3VudCdcclxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249J0FkZCBhIHByb2R1Y3QgdG8gU2FtcGxlIEFwcCwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGRpc2NvdW50ZWQuJ1xyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZCBzZWN0aW9uZWQ+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtTGF5b3V0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2Rpc2NvdW50fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnZGlzY291bnQnKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nRGlzY291bnQgcGVyY2VudGFnZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdkaXNjb3VudCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFN0YWNrIGRpc3RyaWJ1dGlvbj0ndHJhaWxpbmcnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gcHJpbWFyeSBzdWJtaXQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTYXZlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvU3RhY2s+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1MYXlvdXQ+XHJcblx0XHRcdFx0XHRcdFx0PC9Gb3JtPlxyXG5cdFx0XHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdFx0XHQ8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICB0aXRsZT1cIlByaWNlIHVwZGF0ZXNcIlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRlbXBvcmFyaWx5IGRpc2FibGUgYWxsIFNhbXBsZSBBcHAgcHJpY2UgdXBkYXRlc1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nVG9nZ2xlXHJcbiAgICAgICAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50U3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgb25BY3Rpb246IHRoaXMuaGFuZGxlVG9nZ2xlLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZW5hYmxlZD17ZW5hYmxlZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFRoaXMgc2V0dGluZyBpc3snICd9XHJcbiAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj57dGV4dFN0YXR1c308L1RleHRTdHlsZT4uXHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1RvZ2dsZT5cclxuICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcblx0XHRcdFx0PC9MYXlvdXQ+XHJcblx0XHRcdDwvUGFnZT5cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0ZGlzY291bnQ6IHRoaXMuc3RhdGUuZGlzY291bnQsXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKCdzdWJtaXNzaW9uJywgdGhpcy5zdGF0ZSk7XHJcblx0fTtcclxuXHJcblx0aGFuZGxlQ2hhbmdlID0gZmllbGQgPT4ge1xyXG5cdFx0cmV0dXJuIHZhbHVlID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KTtcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbm5vdGF0ZWRMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=