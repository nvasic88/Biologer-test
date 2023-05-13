"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_RegistrationForm_js"],{

/***/ "./resources/js/components/forms/RegistrationForm.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/forms/RegistrationForm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'nzRegistrationForm',\n  props: {\n    initPasswordError: String\n  },\n  data: function data() {\n    return {\n      password: '',\n      passwordWasOnceInvalid: !!this.initPasswordError,\n      passwordIsInvalid: !!this.initPasswordError,\n      passwordError: this.initPasswordError\n    };\n  },\n  computed: {\n    shouldBeDisabled: function shouldBeDisabled() {\n      return this.passwordIsInvalid;\n    }\n  },\n  methods: {\n    validatePassword: function validatePassword() {\n      return this.password.length < 8;\n    },\n    checkPassword: function checkPassword() {\n      this.passwordIsInvalid = this.validatePassword();\n      if (this.passwordIsInvalid) {\n        this.passwordWasOnceInvalid = true;\n      }\n      this.passwordError = this.passwordIsInvalid ? this.trans('validation.min.string', {\n        attribute: this.trans('labels.register.password'),\n        min: 8\n      }) : '';\n    },\n    checkIfFixedPassword: function checkIfFixedPassword() {\n      if (this.passwordWasOnceInvalid) {\n        this.checkPassword();\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mb3Jtcy9SZWdpc3RyYXRpb25Gb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZTtFQUNiQSxJQUFJLEVBQUUsb0JBQW9CO0VBRTFCQyxLQUFLLEVBQUU7SUFDTEMsaUJBQWlCLEVBQUVDO0VBQ3JCLENBQUM7RUFFREMsSUFBSSxrQkFBRztJQUNMLE9BQU87TUFDTEMsUUFBUSxFQUFFLEVBQUU7TUFDWkMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQ0osaUJBQWlCO01BQ2hESyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDTCxpQkFBaUI7TUFDM0NNLGFBQWEsRUFBRSxJQUFJLENBQUNOO0lBQ3RCLENBQUM7RUFDSCxDQUFDO0VBRURPLFFBQVEsRUFBRTtJQUNSQyxnQkFBZ0IsOEJBQUc7TUFDakIsT0FBTyxJQUFJLENBQUNILGlCQUFpQjtJQUMvQjtFQUNGLENBQUM7RUFFREksT0FBTyxFQUFFO0lBQ1BDLGdCQUFnQiw4QkFBRztNQUNqQixPQUFPLElBQUksQ0FBQ1AsUUFBUSxDQUFDUSxNQUFNLEdBQUcsQ0FBQztJQUNqQyxDQUFDO0lBRURDLGFBQWEsMkJBQUc7TUFDZCxJQUFJLENBQUNQLGlCQUFpQixHQUFHLElBQUksQ0FBQ0ssZ0JBQWdCLEVBQUU7TUFFaEQsSUFBSSxJQUFJLENBQUNMLGlCQUFpQixFQUFFO1FBQzFCLElBQUksQ0FBQ0Qsc0JBQXNCLEdBQUcsSUFBSTtNQUNwQztNQUVBLElBQUksQ0FBQ0UsYUFBYSxHQUFHLElBQUksQ0FBQ0QsaUJBQWlCLEdBQ3ZDLElBQUksQ0FBQ1EsS0FBSyxDQUFDLHVCQUF1QixFQUFFO1FBQ3BDQyxTQUFTLEVBQUUsSUFBSSxDQUFDRCxLQUFLLENBQUMsMEJBQTBCLENBQUM7UUFDakRFLEdBQUcsRUFBRTtNQUNQLENBQUMsQ0FBQyxHQUNBLEVBQUU7SUFDUixDQUFDO0lBRURDLG9CQUFvQixrQ0FBRztNQUNyQixJQUFJLElBQUksQ0FBQ1osc0JBQXNCLEVBQUU7UUFDL0IsSUFBSSxDQUFDUSxhQUFhLEVBQUU7TUFDdEI7SUFDRjtFQUNGO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zvcm1zL1JlZ2lzdHJhdGlvbkZvcm0uanM/MDVkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ256UmVnaXN0cmF0aW9uRm9ybScsXHJcblxyXG4gIHByb3BzOiB7XHJcbiAgICBpbml0UGFzc3dvcmRFcnJvcjogU3RyaW5nLFxyXG4gIH0sXHJcblxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgIHBhc3N3b3JkV2FzT25jZUludmFsaWQ6ICEhdGhpcy5pbml0UGFzc3dvcmRFcnJvcixcclxuICAgICAgcGFzc3dvcmRJc0ludmFsaWQ6ICEhdGhpcy5pbml0UGFzc3dvcmRFcnJvcixcclxuICAgICAgcGFzc3dvcmRFcnJvcjogdGhpcy5pbml0UGFzc3dvcmRFcnJvcixcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBjb21wdXRlZDoge1xyXG4gICAgc2hvdWxkQmVEaXNhYmxlZCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucGFzc3dvcmRJc0ludmFsaWRcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICB2YWxpZGF0ZVBhc3N3b3JkKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wYXNzd29yZC5sZW5ndGggPCA4XHJcbiAgICB9LFxyXG5cclxuICAgIGNoZWNrUGFzc3dvcmQoKSB7XHJcbiAgICAgIHRoaXMucGFzc3dvcmRJc0ludmFsaWQgPSB0aGlzLnZhbGlkYXRlUGFzc3dvcmQoKVxyXG5cclxuICAgICAgaWYgKHRoaXMucGFzc3dvcmRJc0ludmFsaWQpIHtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkV2FzT25jZUludmFsaWQgPSB0cnVlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucGFzc3dvcmRFcnJvciA9IHRoaXMucGFzc3dvcmRJc0ludmFsaWRcclxuICAgICAgICA/IHRoaXMudHJhbnMoJ3ZhbGlkYXRpb24ubWluLnN0cmluZycsIHtcclxuICAgICAgICAgIGF0dHJpYnV0ZTogdGhpcy50cmFucygnbGFiZWxzLnJlZ2lzdGVyLnBhc3N3b3JkJyksXHJcbiAgICAgICAgICBtaW46IDhcclxuICAgICAgICB9KVxyXG4gICAgICAgIDogJydcclxuICAgIH0sXHJcblxyXG4gICAgY2hlY2tJZkZpeGVkUGFzc3dvcmQoKSB7XHJcbiAgICAgIGlmICh0aGlzLnBhc3N3b3JkV2FzT25jZUludmFsaWQpIHtcclxuICAgICAgICB0aGlzLmNoZWNrUGFzc3dvcmQoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJuYW1lIiwicHJvcHMiLCJpbml0UGFzc3dvcmRFcnJvciIsIlN0cmluZyIsImRhdGEiLCJwYXNzd29yZCIsInBhc3N3b3JkV2FzT25jZUludmFsaWQiLCJwYXNzd29yZElzSW52YWxpZCIsInBhc3N3b3JkRXJyb3IiLCJjb21wdXRlZCIsInNob3VsZEJlRGlzYWJsZWQiLCJtZXRob2RzIiwidmFsaWRhdGVQYXNzd29yZCIsImxlbmd0aCIsImNoZWNrUGFzc3dvcmQiLCJ0cmFucyIsImF0dHJpYnV0ZSIsIm1pbiIsImNoZWNrSWZGaXhlZFBhc3N3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/components/forms/RegistrationForm.js\n");

/***/ })

}]);