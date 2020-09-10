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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5ub3RhdGVkLWxheW91dC5qcyJdLCJuYW1lcyI6WyJBbm5vdGF0ZWRMYXlvdXQiLCJkaXNjb3VudCIsImVuYWJsZWQiLCJzZXRTdGF0ZSIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImZpZWxkIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFhTUEsZTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDRztBQUNEQyxjQUFRLEVBQUUsS0FEVDtBQUVEQyxhQUFPLEVBQUU7QUFGUixLOzt1TkFzQ08sWUFBTTtBQUNwQixZQUFLQyxRQUFMLENBQWM7QUFDYkYsZ0JBQVEsRUFBRSxNQUFLRyxLQUFMLENBQVdIO0FBRFIsT0FBZDs7QUFHQUksYUFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQixNQUFLRixLQUEvQjtBQUNBLEs7O3VOQUVjLFVBQUFHLEtBQUssRUFBSTtBQUN2QixhQUFPLFVBQUFDLEtBQUs7QUFBQSxlQUFJLE1BQUtMLFFBQUwsK0ZBQWlCSSxLQUFqQixFQUF5QkMsS0FBekIsRUFBSjtBQUFBLE9BQVo7QUFDQSxLOzs7Ozs7OzZCQTFDUTtBQUFBLFVBQ0FQLFFBREEsR0FDYSxLQUFLRyxLQURsQixDQUNBSCxRQURBO0FBR1IsYUFDQyxNQUFDLHFEQUFELFFBQ0MsTUFBQyx1REFBRCxRQUNDLE1BQUMsdURBQUQsQ0FBUSxnQkFBUjtBQUNDLGFBQUssRUFBQyxrQkFEUDtBQUVDLG1CQUFXLEVBQUM7QUFGYixTQUlDLE1BQUMscURBQUQ7QUFBTSxpQkFBUztBQUFmLFNBQ0MsTUFBQyxxREFBRDtBQUFNLGdCQUFRLEVBQUUsS0FBS1E7QUFBckIsU0FDQyxNQUFDLDJEQUFELFFBQ0MsTUFBQywwREFBRDtBQUNDLGFBQUssRUFBRVIsUUFEUjtBQUVDLGdCQUFRLEVBQUUsS0FBS1MsWUFBTCxDQUFrQixVQUFsQixDQUZYO0FBR0MsYUFBSyxFQUFDLHFCQUhQO0FBSUMsWUFBSSxFQUFDO0FBSk4sUUFERCxFQU9DLE1BQUMsc0RBQUQ7QUFBTyxvQkFBWSxFQUFDO0FBQXBCLFNBQ0MsTUFBQyx1REFBRDtBQUFRLGVBQU8sTUFBZjtBQUFnQixjQUFNO0FBQXRCLGdCQURELENBUEQsQ0FERCxDQURELENBSkQsQ0FERCxDQURELENBREQ7QUE0QkE7Ozs7RUFyQzRCQyw0Q0FBSyxDQUFDQyxTOztBQW1EckJaLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fubm90YXRlZC1sYXlvdXQuNDYyYjdlNzQyYTAxOThkZDM3YTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0QnV0dG9uLFxyXG5cdENhcmQsXHJcblx0Rm9ybSxcclxuXHRGb3JtTGF5b3V0LFxyXG5cdExheW91dCxcclxuXHRQYWdlLFxyXG4gICAgU3RhY2ssXHJcbiAgICBTZXR0aW5nVG9nZ2xlLFxyXG4gICAgVGV4dEZpZWxkLFxyXG4gICAgVGV4dFN0eWxlLFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5cclxuY2xhc3MgQW5ub3RhdGVkTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRzdGF0ZSA9IHtcclxuICAgICAgICBkaXNjb3VudDogJzEwJScsXHJcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcblx0fTtcclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBkaXNjb3VudCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8UGFnZT5cclxuXHRcdFx0XHQ8TGF5b3V0PlxyXG5cdFx0XHRcdFx0PExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXHJcblx0XHRcdFx0XHRcdHRpdGxlPSdEZWZhdWx0IGRpc2NvdW50J1xyXG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbj0nQWRkIGEgcHJvZHVjdCB0byBTYW1wbGUgQXBwLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgZGlzY291bnRlZC4nXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxDYXJkIHNlY3Rpb25lZD5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1MYXlvdXQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17ZGlzY291bnR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdkaXNjb3VudCcpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdEaXNjb3VudCBwZXJjZW50YWdlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2Rpc2NvdW50J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8U3RhY2sgZGlzdHJpYnV0aW9uPSd0cmFpbGluZyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBwcmltYXJ5IHN1Ym1pdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNhdmVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9TdGFjaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvRm9ybUxheW91dD5cclxuXHRcdFx0XHRcdFx0XHQ8L0Zvcm0+XHJcblx0XHRcdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0XHRcdDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcblx0XHRcdFx0PC9MYXlvdXQ+XHJcblx0XHRcdDwvUGFnZT5cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0ZGlzY291bnQ6IHRoaXMuc3RhdGUuZGlzY291bnQsXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKCdzdWJtaXNzaW9uJywgdGhpcy5zdGF0ZSk7XHJcblx0fTtcclxuXHJcblx0aGFuZGxlQ2hhbmdlID0gZmllbGQgPT4ge1xyXG5cdFx0cmV0dXJuIHZhbHVlID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KTtcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbm5vdGF0ZWRMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=