(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/UserForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/UserForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var form_backend_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! form-backend-validation */ \"./node_modules/form-backend-validation/dist/index.js\");\n/* harmony import */ var form_backend_validation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(form_backend_validation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/find */ \"./node_modules/lodash/find.js\");\n/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ \"./node_modules/lodash/includes.js\");\n/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'nzUserForm',\n  props: {\n    action: String,\n    method: {\n      type: String,\n      \"default\": 'post'\n    },\n    roles: Array,\n    user: {\n      type: Object,\n      \"default\": function _default() {\n        return {\n          first_name: '',\n          last_name: '',\n          institution: '',\n          roles: [],\n          curated_taxa: []\n        };\n      }\n    },\n    redirect: String\n  },\n  data: function data() {\n    return {\n      filteredTaxa: [],\n      curatedTaxa: this.user.curated_taxa,\n      form: new form_backend_validation__WEBPACK_IMPORTED_MODULE_0___default.a({\n        first_name: this.user.first_name,\n        last_name: this.user.last_name,\n        institution: this.user.institution,\n        roles_ids: this.user.roles.map(function (role) {\n          return role.id;\n        }),\n        curated_taxa_ids: this.user.curated_taxa.map(function (taxon) {\n          return taxon.id;\n        })\n      }, {\n        resetOnSuccess: false\n      })\n    };\n  },\n  computed: {\n    isCurator: function isCurator() {\n      return lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(this.form.roles_ids, lodash_find__WEBPACK_IMPORTED_MODULE_1___default()(this.roles, {\n        name: 'curator'\n      }).id);\n    }\n  },\n  watch: {\n    curatedTaxa: function curatedTaxa(value) {\n      this.form.curated_taxa_ids = value.map(function (taxon) {\n        return taxon.id;\n      });\n    }\n  },\n  methods: {\n    onTaxonNameInput: lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(function (name) {\n      return this.fetchTaxa(name);\n    }, 500),\n    fetchTaxa: function fetchTaxa(name) {\n      var _this = this;\n\n      axios.get(route('api.taxa.index'), {\n        params: {\n          name: name,\n          page: 1,\n          per_page: 10,\n          except: this.curatedTaxa.map(function (taxon) {\n            return taxon.id;\n          })\n        }\n      }).then(function (_ref) {\n        var data = _ref.data;\n        _this.filteredTaxa = data.data;\n      });\n    },\n    submit: function submit() {\n      if (this.form.processing) return;\n      this.form[this.method.toLowerCase()](this.action).then(this.onSuccessfulSubmit)[\"catch\"](this.onFailedSubmit);\n    },\n\n    /**\n     * Handle successful form submit.\n     */\n    onSuccessfulSubmit: function onSuccessfulSubmit() {\n      var _this2 = this;\n\n      this.form.processing = true;\n      this.$buefy.toast.open({\n        message: this.trans('Saved successfully'),\n        type: 'is-success'\n      }); // We want to wait a bit before we send the user to redirect route\n      // so we can show the message that the action was successful.\n\n      setTimeout(function () {\n        _this2.form.processing = false;\n        window.location.href = _this2.redirect;\n      }, 500);\n    },\n\n    /**\n     * Handle failed form submit.\n     *\n     * @param {Error} error\n     */\n    onFailedSubmit: function onFailedSubmit(error) {\n      this.$buefy.toast.open({\n        duration: 2500,\n        message: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(error, 'response.data.message', error.message),\n        type: 'is-danger'\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZm9ybXMvVXNlckZvcm0udnVlP2Q2ZTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxvQkFEQTtBQUdBO0FBQ0Esa0JBREE7QUFFQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQUZBO0FBTUEsZ0JBTkE7QUFPQTtBQUNBLGtCQURBO0FBQUEscUNBRUE7QUFDQTtBQUNBLHdCQURBO0FBRUEsdUJBRkE7QUFHQSx5QkFIQTtBQUlBLG1CQUpBO0FBS0E7QUFMQTtBQU9BO0FBVkEsS0FQQTtBQW1CQTtBQW5CQSxHQUhBO0FBeUJBLE1BekJBLGtCQXlCQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSx5Q0FGQTtBQUdBO0FBQ0Esd0NBREE7QUFFQSxzQ0FGQTtBQUdBLDBDQUhBO0FBSUE7QUFBQTtBQUFBLFVBSkE7QUFLQTtBQUFBO0FBQUE7QUFMQSxTQU1BO0FBQ0E7QUFEQSxPQU5BO0FBSEE7QUFhQSxHQXZDQTtBQXlDQTtBQUNBLGFBREEsdUJBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBLEdBekNBO0FBK0NBO0FBQ0EsZUFEQSx1QkFDQSxLQURBLEVBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBLEdBL0NBO0FBcURBO0FBQ0E7QUFDQTtBQUNBLEtBRkEsRUFFQSxHQUZBLENBREE7QUFLQSxhQUxBLHFCQUtBLElBTEEsRUFLQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLGlCQUZBO0FBR0Esc0JBSEE7QUFJQTtBQUFBO0FBQUE7QUFKQTtBQURBLFNBT0EsSUFQQSxDQU9BO0FBQUE7QUFDQTtBQUNBLE9BVEE7QUFVQSxLQWhCQTtBQWtCQSxVQWxCQSxvQkFrQkE7QUFDQTtBQUVBLHdEQUNBLElBREEsQ0FDQSx1QkFEQSxXQUVBLG1CQUZBO0FBR0EsS0F4QkE7O0FBMEJBOzs7QUFHQSxzQkE3QkEsZ0NBNkJBO0FBQUE7O0FBQ0E7QUFFQTtBQUNBLGlEQURBO0FBRUE7QUFGQSxTQUhBLENBUUE7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFDQSxPQUpBLEVBSUEsR0FKQTtBQUtBLEtBNUNBOztBQThDQTs7Ozs7QUFLQSxrQkFuREEsMEJBbURBLEtBbkRBLEVBbURBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLGlIQUZBO0FBR0E7QUFIQTtBQUtBO0FBekRBO0FBckRBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zvcm1zL1VzZXJGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJ1c2VyLWZvcm1cIj5cbiAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8Yi1maWVsZCA6bGFiZWw9XCJ0cmFucygnbGFiZWxzLnVzZXJzLmZpcnN0X25hbWUnKVwiIGNsYXNzPVwiaXMtcmVxdWlyZWRcIj5cbiAgICAgICAgICAgIDxiLWlucHV0IHYtbW9kZWw9XCJmb3JtLmZpcnN0X25hbWVcIiAvPlxuICAgICAgICAgIDwvYi1maWVsZD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgIDxiLWZpZWxkIDpsYWJlbD1cInRyYW5zKCdsYWJlbHMudXNlcnMubGFzdF9uYW1lJylcIiBjbGFzcz1cImlzLXJlcXVpcmVkXCI+XG4gICAgICAgICAgICA8Yi1pbnB1dCB2LW1vZGVsPVwiZm9ybS5sYXN0X25hbWVcIiAvPlxuICAgICAgICAgIDwvYi1maWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGItZmllbGQgOmxhYmVsPVwidHJhbnMoJ2xhYmVscy51c2Vycy5pbnN0aXR1dGlvbicpXCI+XG4gICAgICAgIDxiLWlucHV0IHYtbW9kZWw9XCJmb3JtLmluc3RpdHV0aW9uXCIgLz5cbiAgICAgIDwvYi1maWVsZD5cblxuICAgICAgPGItZmllbGQgOmxhYmVsPVwidHJhbnMoJ2xhYmVscy51c2Vycy5yb2xlcycpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibG9ja1wiPlxuICAgICAgICAgIDxiLWNoZWNrYm94XG4gICAgICAgICAgICB2LWZvcj1cInJvbGUgaW4gcm9sZXNcIlxuICAgICAgICAgICAgOmtleT1cInJvbGUuaWRcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucm9sZXNfaWRzXCJcbiAgICAgICAgICAgIDpuYXRpdmUtdmFsdWU9XCJyb2xlLmlkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyB0cmFucygncm9sZXMuJyArIHJvbGUubmFtZSkgfX1cbiAgICAgICAgICA8L2ItY2hlY2tib3g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9iLWZpZWxkPlxuXG4gICAgICA8Yi1maWVsZCA6bGFiZWw9XCJ0cmFucygnbGFiZWxzLnVzZXJzLmN1cmF0ZWRfdGF4YScpXCIgdi1pZj1cImlzQ3VyYXRvclwiPlxuICAgICAgICA8Yi10YWdpbnB1dFxuICAgICAgICAgIHYtbW9kZWw9XCJjdXJhdGVkVGF4YVwiXG4gICAgICAgICAgOmRhdGE9XCJmaWx0ZXJlZFRheGFcIlxuICAgICAgICAgIGF1dG9jb21wbGV0ZVxuICAgICAgICAgIGZpZWxkPVwibmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHRheG9uIG5hbWVcIlxuICAgICAgICAgIEB0eXBpbmc9XCJvblRheG9uTmFtZUlucHV0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6ZGVmYXVsdD1cInByb3BzXCI+XG4gICAgICAgICAgICA8c3Bhbj57eyBwcm9wcy5vcHRpb24ubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2ItdGFnaW5wdXQ+XG4gICAgICA8L2ItZmllbGQ+XG5cbiAgICAgIDxocj5cblxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gaXMtcHJpbWFyeVwiPnt7IHRyYW5zKCdidXR0b25zLnNhdmUnKSB9fTwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEZvcm0gZnJvbSAnZm9ybS1iYWNrZW5kLXZhbGlkYXRpb24nXG5pbXBvcnQgX2ZpbmQgZnJvbSAnbG9kYXNoL2ZpbmQnXG5pbXBvcnQgX2luY2x1ZGVzIGZyb20gJ2xvZGFzaC9pbmNsdWRlcydcbmltcG9ydCBfZ2V0IGZyb20gJ2xvZGFzaC9nZXQnXG5pbXBvcnQgX2RlYm91bmNlIGZyb20gJ2xvZGFzaC9kZWJvdW5jZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbnpVc2VyRm9ybScsXG5cbiAgcHJvcHM6IHtcbiAgICBhY3Rpb246IFN0cmluZyxcbiAgICBtZXRob2Q6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdwb3N0J1xuICAgIH0sXG4gICAgcm9sZXM6IEFycmF5LFxuICAgIHVzZXI6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZmlyc3RfbmFtZTogJycsXG4gICAgICAgICAgbGFzdF9uYW1lOiAnJyxcbiAgICAgICAgICBpbnN0aXR1dGlvbjogJycsXG4gICAgICAgICAgcm9sZXM6IFtdLFxuICAgICAgICAgIGN1cmF0ZWRfdGF4YTogW10sXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHJlZGlyZWN0OiBTdHJpbmdcbiAgfSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWx0ZXJlZFRheGE6IFtdLFxuICAgICAgY3VyYXRlZFRheGE6IHRoaXMudXNlci5jdXJhdGVkX3RheGEsXG4gICAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgIGZpcnN0X25hbWU6IHRoaXMudXNlci5maXJzdF9uYW1lLFxuICAgICAgICBsYXN0X25hbWU6IHRoaXMudXNlci5sYXN0X25hbWUsXG4gICAgICAgIGluc3RpdHV0aW9uOiB0aGlzLnVzZXIuaW5zdGl0dXRpb24sXG4gICAgICAgIHJvbGVzX2lkczogdGhpcy51c2VyLnJvbGVzLm1hcChyb2xlID0+IHJvbGUuaWQpLFxuICAgICAgICBjdXJhdGVkX3RheGFfaWRzOiB0aGlzLnVzZXIuY3VyYXRlZF90YXhhLm1hcCh0YXhvbiA9PiB0YXhvbi5pZClcbiAgICAgIH0sIHtcbiAgICAgICAgcmVzZXRPblN1Y2Nlc3M6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGlzQ3VyYXRvcigpIHtcbiAgICAgIHJldHVybiBfaW5jbHVkZXModGhpcy5mb3JtLnJvbGVzX2lkcywgX2ZpbmQodGhpcy5yb2xlcywgeyBuYW1lOiAnY3VyYXRvcicgfSkuaWQpXG4gICAgfVxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgY3VyYXRlZFRheGEodmFsdWUpIHtcbiAgICAgIHRoaXMuZm9ybS5jdXJhdGVkX3RheGFfaWRzID0gdmFsdWUubWFwKHRheG9uID0+IHRheG9uLmlkKVxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgb25UYXhvbk5hbWVJbnB1dDogX2RlYm91bmNlKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5mZXRjaFRheGEobmFtZSlcbiAgICB9LCA1MDApLFxuXG4gICAgZmV0Y2hUYXhhKG5hbWUpIHtcbiAgICAgIGF4aW9zLmdldChyb3V0ZSgnYXBpLnRheGEuaW5kZXgnKSwge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgcGVyX3BhZ2U6IDEwLFxuICAgICAgICAgIGV4Y2VwdDogdGhpcy5jdXJhdGVkVGF4YS5tYXAodGF4b24gPT4gdGF4b24uaWQpXG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyZWRUYXhhID0gZGF0YS5kYXRhXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICBpZiAodGhpcy5mb3JtLnByb2Nlc3NpbmcpIHJldHVyblxuXG4gICAgICB0aGlzLmZvcm1bdGhpcy5tZXRob2QudG9Mb3dlckNhc2UoKV0odGhpcy5hY3Rpb24pXG4gICAgICAgICAgLnRoZW4odGhpcy5vblN1Y2Nlc3NmdWxTdWJtaXQpXG4gICAgICAgICAgLmNhdGNoKHRoaXMub25GYWlsZWRTdWJtaXQpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBzdWNjZXNzZnVsIGZvcm0gc3VibWl0LlxuICAgICAqL1xuICAgIG9uU3VjY2Vzc2Z1bFN1Ym1pdCgpIHtcbiAgICAgIHRoaXMuZm9ybS5wcm9jZXNzaW5nID0gdHJ1ZVxuXG4gICAgICB0aGlzLiRidWVmeS50b2FzdC5vcGVuKHtcbiAgICAgICAgICBtZXNzYWdlOiB0aGlzLnRyYW5zKCdTYXZlZCBzdWNjZXNzZnVsbHknKSxcbiAgICAgICAgICB0eXBlOiAnaXMtc3VjY2VzcydcbiAgICAgIH0pXG5cbiAgICAgIC8vIFdlIHdhbnQgdG8gd2FpdCBhIGJpdCBiZWZvcmUgd2Ugc2VuZCB0aGUgdXNlciB0byByZWRpcmVjdCByb3V0ZVxuICAgICAgLy8gc28gd2UgY2FuIHNob3cgdGhlIG1lc3NhZ2UgdGhhdCB0aGUgYWN0aW9uIHdhcyBzdWNjZXNzZnVsLlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JtLnByb2Nlc3NpbmcgPSBmYWxzZVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnJlZGlyZWN0XG4gICAgICB9LCA1MDApXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBmYWlsZWQgZm9ybSBzdWJtaXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Vycm9yfSBlcnJvclxuICAgICAqL1xuICAgIG9uRmFpbGVkU3VibWl0KGVycm9yKSB7XG4gICAgICB0aGlzLiRidWVmeS50b2FzdC5vcGVuKHtcbiAgICAgICAgZHVyYXRpb246IDI1MDAsXG4gICAgICAgIG1lc3NhZ2U6IF9nZXQoZXJyb3IsICdyZXNwb25zZS5kYXRhLm1lc3NhZ2UnLCBlcnJvci5tZXNzYWdlKSxcbiAgICAgICAgdHlwZTogJ2lzLWRhbmdlcidcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/UserForm.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/UserForm.vue?vue&type=template&id=1a12e68c&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/UserForm.vue?vue&type=template&id=1a12e68c& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"user-form\" }, [\n    _c(\n      \"form\",\n      {\n        on: {\n          submit: function($event) {\n            $event.preventDefault()\n            return _vm.submit($event)\n          }\n        }\n      },\n      [\n        _c(\"div\", { staticClass: \"columns\" }, [\n          _c(\n            \"div\",\n            { staticClass: \"column\" },\n            [\n              _c(\n                \"b-field\",\n                {\n                  staticClass: \"is-required\",\n                  attrs: { label: _vm.trans(\"labels.users.first_name\") }\n                },\n                [\n                  _c(\"b-input\", {\n                    model: {\n                      value: _vm.form.first_name,\n                      callback: function($$v) {\n                        _vm.$set(_vm.form, \"first_name\", $$v)\n                      },\n                      expression: \"form.first_name\"\n                    }\n                  })\n                ],\n                1\n              )\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            { staticClass: \"column\" },\n            [\n              _c(\n                \"b-field\",\n                {\n                  staticClass: \"is-required\",\n                  attrs: { label: _vm.trans(\"labels.users.last_name\") }\n                },\n                [\n                  _c(\"b-input\", {\n                    model: {\n                      value: _vm.form.last_name,\n                      callback: function($$v) {\n                        _vm.$set(_vm.form, \"last_name\", $$v)\n                      },\n                      expression: \"form.last_name\"\n                    }\n                  })\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"b-field\",\n          { attrs: { label: _vm.trans(\"labels.users.institution\") } },\n          [\n            _c(\"b-input\", {\n              model: {\n                value: _vm.form.institution,\n                callback: function($$v) {\n                  _vm.$set(_vm.form, \"institution\", $$v)\n                },\n                expression: \"form.institution\"\n              }\n            })\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\"b-field\", { attrs: { label: _vm.trans(\"labels.users.roles\") } }, [\n          _c(\n            \"div\",\n            { staticClass: \"block\" },\n            _vm._l(_vm.roles, function(role) {\n              return _c(\n                \"b-checkbox\",\n                {\n                  key: role.id,\n                  attrs: { \"native-value\": role.id },\n                  model: {\n                    value: _vm.form.roles_ids,\n                    callback: function($$v) {\n                      _vm.$set(_vm.form, \"roles_ids\", $$v)\n                    },\n                    expression: \"form.roles_ids\"\n                  }\n                },\n                [\n                  _vm._v(\n                    \"\\n          \" +\n                      _vm._s(_vm.trans(\"roles.\" + role.name)) +\n                      \"\\n        \"\n                  )\n                ]\n              )\n            }),\n            1\n          )\n        ]),\n        _vm._v(\" \"),\n        _vm.isCurator\n          ? _c(\n              \"b-field\",\n              { attrs: { label: _vm.trans(\"labels.users.curated_taxa\") } },\n              [\n                _c(\"b-taginput\", {\n                  attrs: {\n                    data: _vm.filteredTaxa,\n                    autocomplete: \"\",\n                    field: \"name\",\n                    placeholder: \"Type taxon name\"\n                  },\n                  on: { typing: _vm.onTaxonNameInput },\n                  scopedSlots: _vm._u(\n                    [\n                      {\n                        key: \"default\",\n                        fn: function(props) {\n                          return [\n                            _c(\"span\", [_vm._v(_vm._s(props.option.name))])\n                          ]\n                        }\n                      }\n                    ],\n                    null,\n                    false,\n                    1538493864\n                  ),\n                  model: {\n                    value: _vm.curatedTaxa,\n                    callback: function($$v) {\n                      _vm.curatedTaxa = $$v\n                    },\n                    expression: \"curatedTaxa\"\n                  }\n                })\n              ],\n              1\n            )\n          : _vm._e(),\n        _vm._v(\" \"),\n        _c(\"hr\"),\n        _vm._v(\" \"),\n        _c(\n          \"button\",\n          { staticClass: \"button is-primary\", attrs: { type: \"submit\" } },\n          [_vm._v(_vm._s(_vm.trans(\"buttons.save\")))]\n        )\n      ],\n      1\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mb3Jtcy9Vc2VyRm9ybS52dWU/YzExYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyQkFBMkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0EsYUFBYSx3QkFBd0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx3QkFBd0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVMsK0NBQStDLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUyx5Q0FBeUMsRUFBRTtBQUMzRTtBQUNBO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQkFBMEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTLGdEQUFnRCxFQUFFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLHVCQUF1QiwrQkFBK0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJDQUEyQyxpQkFBaUIsRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZm9ybXMvVXNlckZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFhMTJlNjhjJi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1c2VyLWZvcm1cIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgb246IHtcbiAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uc1wiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbHVtblwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1maWVsZFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlzLXJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogX3ZtLnRyYW5zKFwibGFiZWxzLnVzZXJzLmZpcnN0X25hbWVcIikgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZmlyc3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJmaXJzdF9uYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5maXJzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImItZmllbGRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpcy1yZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IF92bS50cmFucyhcImxhYmVscy51c2Vycy5sYXN0X25hbWVcIikgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubGFzdF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImxhc3RfbmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImItZmllbGRcIixcbiAgICAgICAgICB7IGF0dHJzOiB7IGxhYmVsOiBfdm0udHJhbnMoXCJsYWJlbHMudXNlcnMuaW5zdGl0dXRpb25cIikgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiYi1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmluc3RpdHV0aW9uLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImluc3RpdHV0aW9uXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5pbnN0aXR1dGlvblwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYi1maWVsZFwiLCB7IGF0dHJzOiB7IGxhYmVsOiBfdm0udHJhbnMoXCJsYWJlbHMudXNlcnMucm9sZXNcIikgfSB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJibG9ja1wiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnJvbGVzLCBmdW5jdGlvbihyb2xlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImItY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IHJvbGUuaWQsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm5hdGl2ZS12YWx1ZVwiOiByb2xlLmlkIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucm9sZXNfaWRzLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicm9sZXNfaWRzXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnJvbGVzX2lkc1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRyYW5zKFwicm9sZXMuXCIgKyByb2xlLm5hbWUpKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uaXNDdXJhdG9yXG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJiLWZpZWxkXCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgbGFiZWw6IF92bS50cmFucyhcImxhYmVscy51c2Vycy5jdXJhdGVkX3RheGFcIikgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJiLXRhZ2lucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5maWx0ZXJlZFRheGEsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJUeXBlIHRheG9uIG5hbWVcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IHR5cGluZzogX3ZtLm9uVGF4b25OYW1lSW5wdXQgfSxcbiAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKHByb3BzLm9wdGlvbi5uYW1lKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgMTUzODQ5Mzg2NFxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY3VyYXRlZFRheGEsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VyYXRlZFRheGEgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjdXJhdGVkVGF4YVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtcHJpbWFyeVwiLCBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSxcbiAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0udHJhbnMoXCJidXR0b25zLnNhdmVcIikpKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/UserForm.vue?vue&type=template&id=1a12e68c&\n");

/***/ }),

/***/ "./resources/js/components/forms/UserForm.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/forms/UserForm.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UserForm_vue_vue_type_template_id_1a12e68c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserForm.vue?vue&type=template&id=1a12e68c& */ \"./resources/js/components/forms/UserForm.vue?vue&type=template&id=1a12e68c&\");\n/* harmony import */ var _UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserForm.vue?vue&type=script&lang=js& */ \"./resources/js/components/forms/UserForm.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _UserForm_vue_vue_type_template_id_1a12e68c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _UserForm_vue_vue_type_template_id_1a12e68c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/components/forms/UserForm.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mb3Jtcy9Vc2VyRm9ybS52dWU/MjMwMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RjtBQUMzQjtBQUNMOzs7QUFHdkQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLG1GQUFNO0FBQ1IsRUFBRSw0RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Zvcm1zL1VzZXJGb3JtLnZ1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVXNlckZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFhMTJlNjhjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1VzZXJGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVXNlckZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9uZW5hZC9TaXRlcy9CaW9sb2dlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYTEyZTY4YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYTEyZTY4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYTEyZTY4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVXNlckZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFhMTJlNjhjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFhMTJlNjhjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9mb3Jtcy9Vc2VyRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/components/forms/UserForm.vue\n");

/***/ }),

/***/ "./resources/js/components/forms/UserForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/forms/UserForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserForm.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/UserForm.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mb3Jtcy9Vc2VyRm9ybS52dWU/NDg2MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEsd0NBQThMLENBQWdCLG9QQUFHLEVBQUMiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mb3Jtcy9Vc2VyRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlckZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/components/forms/UserForm.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/components/forms/UserForm.vue?vue&type=template&id=1a12e68c&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/forms/UserForm.vue?vue&type=template&id=1a12e68c& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_1a12e68c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserForm.vue?vue&type=template&id=1a12e68c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/UserForm.vue?vue&type=template&id=1a12e68c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_1a12e68c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_1a12e68c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mb3Jtcy9Vc2VyRm9ybS52dWU/MDRmYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mb3Jtcy9Vc2VyRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWExMmU2OGMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYTEyZTY4YyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/components/forms/UserForm.vue?vue&type=template&id=1a12e68c&\n");

/***/ })

}]);