(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FieldObservationApproval.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FieldObservationApproval.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'nzFieldObservationApproval',\n  props: {\n    approveUrl: String,\n    markAsUnidentifiableUrl: String,\n    redirectUrl: {\n      type: String,\n      required: true\n    },\n    fieldObservation: {\n      type: Object,\n      required: true\n    }\n  },\n  data: function data() {\n    return {\n      approving: false,\n      markingAsUnidentifiable: false\n    };\n  },\n  computed: {\n    busy: function busy() {\n      return this.approving || this.markingAsUnidentifiable;\n    }\n  },\n  methods: {\n    confirmApprove: function confirmApprove() {\n      this.$buefy.dialog.confirm({\n        message: this.trans('You are about to approve this field observation'),\n        confirmText: this.trans('buttons.approve'),\n        cancelText: this.trans('buttons.cancel'),\n        type: 'is-primary',\n        onConfirm: this.approve.bind(this)\n      });\n    },\n    approve: function approve() {\n      this.approving = true;\n      axios.post(this.approveUrl, {\n        field_observation_ids: [this.fieldObservation.id]\n      }).then(this.successfullyApproved)[\"catch\"](this.failedToApprove);\n    },\n    successfullyApproved: function successfullyApproved() {\n      var _this = this;\n\n      this.$buefy.toast.open({\n        message: this.trans('Observation has been approved'),\n        type: 'is-success'\n      });\n      setTimeout(function () {\n        _this.approving = false;\n        window.location.href = _this.redirectUrl;\n      }, 1000);\n    },\n    failedToApprove: function failedToApprove(error) {\n      this.approving = false;\n      this.$buefy.toast.open({\n        message: this.trans('Observation cannot be approved'),\n        type: 'is-danger',\n        duration: 5000\n      });\n    },\n    confirmMarkingAsUnidentifiable: function confirmMarkingAsUnidentifiable() {\n      var _this2 = this;\n\n      var dialog = this.$buefy.dialog.prompt({\n        message: this.trans('You are about to mark observation as unidentifiable. What\\'s the reason?'),\n        confirmText: this.trans('buttons.mark_unidentifiable'),\n        cancelText: this.trans('buttons.cancel'),\n        type: 'is-warning',\n        inputAttrs: {\n          placeholder: this.trans('Reason'),\n          required: true,\n          maxlength: 255\n        },\n        onConfirm: this.markAsUnidentifiable.bind(this)\n      });\n      dialog.$nextTick(function () {\n        _this2.validateReason(dialog);\n      });\n    },\n    markAsUnidentifiable: function markAsUnidentifiable(reason) {\n      this.markingAsUnidentifiable = true;\n      axios.post(this.markAsUnidentifiableUrl, {\n        field_observation_ids: [this.fieldObservation.id],\n        reason: reason\n      }).then(this.successfullyMarkedAsUnidentifiable)[\"catch\"](this.failedToMarkAsUnidentifiable);\n    },\n    successfullyMarkedAsUnidentifiable: function successfullyMarkedAsUnidentifiable() {\n      var _this3 = this;\n\n      this.$buefy.toast.open({\n        message: this.trans('Observation has been marked as unidentifiable'),\n        type: 'is-success'\n      });\n      setTimeout(function () {\n        _this3.markingAsUnidentifiable = false;\n        window.location.href = _this3.redirectUrl;\n      }, 1000);\n    },\n    failedToMarkAsUnidentifiable: function failedToMarkAsUnidentifiable(error) {\n      this.markingAsUnidentifiable = false;\n      this.$buefy.toast.open({\n        message: this.trans('This observation cannot be marked as unidentifiable'),\n        type: 'is-danger',\n        duration: 5000\n      });\n    },\n    validateReason: function validateReason(dialog) {\n      var _this4 = this;\n\n      dialog.$refs.input.addEventListener('invalid', function (e) {\n        e.target.setCustomValidity('');\n\n        if (!e.target.validity.valid) {\n          e.target.setCustomValidity(_this4.trans('This field is required and can contain max 255 chars.'));\n        }\n      });\n      dialog.$refs.input.addEventListener('input', function (e) {\n        dialog.validationMessage = null;\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGRPYnNlcnZhdGlvbkFwcHJvdmFsLnZ1ZT85Zjk2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBLG9DQURBO0FBR0E7QUFDQSxzQkFEQTtBQUVBLG1DQUZBO0FBSUE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FKQTtBQVNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBO0FBVEEsR0FIQTtBQWtCQSxNQWxCQSxrQkFrQkE7QUFDQTtBQUNBLHNCQURBO0FBRUE7QUFGQTtBQUlBLEdBdkJBO0FBeUJBO0FBQ0EsUUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFIQSxHQXpCQTtBQStCQTtBQUNBLGtCQURBLDRCQUNBO0FBQ0E7QUFDQSw4RUFEQTtBQUVBLGtEQUZBO0FBR0EsZ0RBSEE7QUFJQSwwQkFKQTtBQUtBO0FBTEE7QUFPQSxLQVRBO0FBV0EsV0FYQSxxQkFXQTtBQUNBO0FBRUE7QUFDQTtBQURBLFNBRUEsSUFGQSxDQUVBLHlCQUZBLFdBRUEsb0JBRkE7QUFHQSxLQWpCQTtBQW1CQSx3QkFuQkEsa0NBbUJBO0FBQUE7O0FBQ0E7QUFDQSw0REFEQTtBQUVBO0FBRkE7QUFLQTtBQUNBO0FBRUE7QUFDQSxPQUpBLEVBSUEsSUFKQTtBQUtBLEtBOUJBO0FBZ0NBLG1CQWhDQSwyQkFnQ0EsS0FoQ0EsRUFnQ0E7QUFDQTtBQUVBO0FBQ0EsNkRBREE7QUFFQSx5QkFGQTtBQUdBO0FBSEE7QUFLQSxLQXhDQTtBQTBDQSxrQ0ExQ0EsNENBMENBO0FBQUE7O0FBQ0E7QUFDQSx1R0FEQTtBQUVBLDhEQUZBO0FBR0EsZ0RBSEE7QUFJQSwwQkFKQTtBQUtBO0FBQ0EsMkNBREE7QUFFQSx3QkFGQTtBQUdBO0FBSEEsU0FMQTtBQVVBO0FBVkE7QUFhQTtBQUNBO0FBQ0EsT0FGQTtBQUdBLEtBM0RBO0FBNkRBLHdCQTdEQSxnQ0E2REEsTUE3REEsRUE2REE7QUFDQTtBQUVBO0FBQ0EseURBREE7QUFFQTtBQUZBLFNBR0EsSUFIQSxDQUdBLHVDQUhBLFdBSUEsaUNBSkE7QUFLQSxLQXJFQTtBQXVFQSxzQ0F2RUEsZ0RBdUVBO0FBQUE7O0FBQ0E7QUFDQSw0RUFEQTtBQUVBO0FBRkE7QUFLQTtBQUNBO0FBRUE7QUFDQSxPQUpBLEVBSUEsSUFKQTtBQUtBLEtBbEZBO0FBb0ZBLGdDQXBGQSx3Q0FvRkEsS0FwRkEsRUFvRkE7QUFDQTtBQUNBO0FBQ0Esa0ZBREE7QUFFQSx5QkFGQTtBQUdBO0FBSEE7QUFLQSxLQTNGQTtBQTZGQSxrQkE3RkEsMEJBNkZBLE1BN0ZBLEVBNkZBO0FBQUE7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQU5BO0FBUUE7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQXpHQTtBQS9CQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZE9ic2VydmF0aW9uQXBwcm92YWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImxldmVsLXJpZ2h0XCI+XG4gICAgPGRpdiBjbGFzcz1cImxldmVsLWl0ZW1cIiB2LWlmPVwiYXBwcm92ZVVybFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3M9XCJidXR0b25cIlxuICAgICAgICA6Y2xhc3M9XCJ7J2lzLWxvYWRpbmcnOiBhcHByb3Zpbmd9XCJcbiAgICAgICAgQGNsaWNrPVwiY29uZmlybUFwcHJvdmVcIlxuICAgICAgICA6ZGlzYWJsZWQ9XCJidXN5XCJcbiAgICAgID5cbiAgICAgICAgPGItaWNvbiBpY29uPVwiY2hlY2tcIiBjbGFzcz1cImhhcy10ZXh0LXN1Y2Nlc3NcIiAvPlxuXG4gICAgICAgIDxzcGFuPnt7IHRyYW5zKCdidXR0b25zLmFwcHJvdmUnKSB9fTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImxldmVsLWl0ZW1cIiB2LWlmPVwibWFya0FzVW5pZGVudGlmaWFibGVVcmxcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzPVwiYnV0dG9uXCJcbiAgICAgICAgOmNsYXNzPVwieydpcy1sb2FkaW5nJzogbWFya2luZ0FzVW5pZGVudGlmaWFibGV9XCJcbiAgICAgICAgQGNsaWNrPVwiY29uZmlybU1hcmtpbmdBc1VuaWRlbnRpZmlhYmxlXCJcbiAgICAgICAgOmRpc2FibGVkPVwiYnVzeVwiXG4gICAgICA+XG4gICAgICAgIDxiLWljb24gaWNvbj1cInRpbWVzXCIgY2xhc3M9XCJoYXMtdGV4dC1kYW5nZXJcIiAvPlxuXG4gICAgICAgIDxzcGFuPnt7IHRyYW5zKCdidXR0b25zLnVuaWRlbnRpZmlhYmxlJykgfX08L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbnpGaWVsZE9ic2VydmF0aW9uQXBwcm92YWwnLFxuXG4gIHByb3BzOiB7XG4gICAgYXBwcm92ZVVybDogU3RyaW5nLFxuICAgIG1hcmtBc1VuaWRlbnRpZmlhYmxlVXJsOiBTdHJpbmcsXG5cbiAgICByZWRpcmVjdFVybDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuXG4gICAgZmllbGRPYnNlcnZhdGlvbjoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXBwcm92aW5nOiBmYWxzZSxcbiAgICAgIG1hcmtpbmdBc1VuaWRlbnRpZmlhYmxlOiBmYWxzZVxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGJ1c3koKSB7XG4gICAgICByZXR1cm4gdGhpcy5hcHByb3ZpbmcgfHwgdGhpcy5tYXJraW5nQXNVbmlkZW50aWZpYWJsZVxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY29uZmlybUFwcHJvdmUoKSB7XG4gICAgICB0aGlzLiRidWVmeS5kaWFsb2cuY29uZmlybSh7XG4gICAgICAgIG1lc3NhZ2U6IHRoaXMudHJhbnMoJ1lvdSBhcmUgYWJvdXQgdG8gYXBwcm92ZSB0aGlzIGZpZWxkIG9ic2VydmF0aW9uJyksXG4gICAgICAgIGNvbmZpcm1UZXh0OiB0aGlzLnRyYW5zKCdidXR0b25zLmFwcHJvdmUnKSxcbiAgICAgICAgY2FuY2VsVGV4dDogdGhpcy50cmFucygnYnV0dG9ucy5jYW5jZWwnKSxcbiAgICAgICAgdHlwZTogJ2lzLXByaW1hcnknLFxuICAgICAgICBvbkNvbmZpcm06IHRoaXMuYXBwcm92ZS5iaW5kKHRoaXMpXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBhcHByb3ZlKCkge1xuICAgICAgdGhpcy5hcHByb3ZpbmcgPSB0cnVlO1xuXG4gICAgICBheGlvcy5wb3N0KHRoaXMuYXBwcm92ZVVybCwge1xuICAgICAgICBmaWVsZF9vYnNlcnZhdGlvbl9pZHM6IFt0aGlzLmZpZWxkT2JzZXJ2YXRpb24uaWRdXG4gICAgICB9KS50aGVuKHRoaXMuc3VjY2Vzc2Z1bGx5QXBwcm92ZWQpLmNhdGNoKHRoaXMuZmFpbGVkVG9BcHByb3ZlKVxuICAgIH0sXG5cbiAgICBzdWNjZXNzZnVsbHlBcHByb3ZlZCgpIHtcbiAgICAgIHRoaXMuJGJ1ZWZ5LnRvYXN0Lm9wZW4oe1xuICAgICAgICBtZXNzYWdlOiB0aGlzLnRyYW5zKCdPYnNlcnZhdGlvbiBoYXMgYmVlbiBhcHByb3ZlZCcpLFxuICAgICAgICB0eXBlOiAnaXMtc3VjY2VzcydcbiAgICAgIH0pO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hcHByb3ZpbmcgPSBmYWxzZTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucmVkaXJlY3RVcmxcbiAgICAgIH0sIDEwMDApXG4gICAgfSxcblxuICAgIGZhaWxlZFRvQXBwcm92ZShlcnJvcikge1xuICAgICAgdGhpcy5hcHByb3ZpbmcgPSBmYWxzZVxuXG4gICAgICB0aGlzLiRidWVmeS50b2FzdC5vcGVuKHtcbiAgICAgICAgbWVzc2FnZTogdGhpcy50cmFucygnT2JzZXJ2YXRpb24gY2Fubm90IGJlIGFwcHJvdmVkJyksXG4gICAgICAgIHR5cGU6ICdpcy1kYW5nZXInLFxuICAgICAgICBkdXJhdGlvbjogNTAwMFxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgY29uZmlybU1hcmtpbmdBc1VuaWRlbnRpZmlhYmxlKCkge1xuICAgICAgY29uc3QgZGlhbG9nID0gdGhpcy4kYnVlZnkuZGlhbG9nLnByb21wdCh7XG4gICAgICAgIG1lc3NhZ2U6IHRoaXMudHJhbnMoJ1lvdSBhcmUgYWJvdXQgdG8gbWFyayBvYnNlcnZhdGlvbiBhcyB1bmlkZW50aWZpYWJsZS4gV2hhdFxcJ3MgdGhlIHJlYXNvbj8nKSxcbiAgICAgICAgY29uZmlybVRleHQ6IHRoaXMudHJhbnMoJ2J1dHRvbnMubWFya191bmlkZW50aWZpYWJsZScpLFxuICAgICAgICBjYW5jZWxUZXh0OiB0aGlzLnRyYW5zKCdidXR0b25zLmNhbmNlbCcpLFxuICAgICAgICB0eXBlOiAnaXMtd2FybmluZycsXG4gICAgICAgIGlucHV0QXR0cnM6IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnRyYW5zKCdSZWFzb24nKSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgbWF4bGVuZ3RoOiAyNTVcbiAgICAgICAgfSxcbiAgICAgICAgb25Db25maXJtOiB0aGlzLm1hcmtBc1VuaWRlbnRpZmlhYmxlLmJpbmQodGhpcylcbiAgICAgIH0pXG5cbiAgICAgIGRpYWxvZy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICB0aGlzLnZhbGlkYXRlUmVhc29uKGRpYWxvZyk7XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBtYXJrQXNVbmlkZW50aWZpYWJsZShyZWFzb24pIHtcbiAgICAgIHRoaXMubWFya2luZ0FzVW5pZGVudGlmaWFibGUgPSB0cnVlXG5cbiAgICAgIGF4aW9zLnBvc3QodGhpcy5tYXJrQXNVbmlkZW50aWZpYWJsZVVybCwge1xuICAgICAgICBmaWVsZF9vYnNlcnZhdGlvbl9pZHM6IFt0aGlzLmZpZWxkT2JzZXJ2YXRpb24uaWRdLFxuICAgICAgICByZWFzb25cbiAgICAgIH0pLnRoZW4odGhpcy5zdWNjZXNzZnVsbHlNYXJrZWRBc1VuaWRlbnRpZmlhYmxlKVxuICAgICAgLmNhdGNoKHRoaXMuZmFpbGVkVG9NYXJrQXNVbmlkZW50aWZpYWJsZSlcbiAgICB9LFxuXG4gICAgc3VjY2Vzc2Z1bGx5TWFya2VkQXNVbmlkZW50aWZpYWJsZSgpIHtcbiAgICAgIHRoaXMuJGJ1ZWZ5LnRvYXN0Lm9wZW4oe1xuICAgICAgICBtZXNzYWdlOiB0aGlzLnRyYW5zKCdPYnNlcnZhdGlvbiBoYXMgYmVlbiBtYXJrZWQgYXMgdW5pZGVudGlmaWFibGUnKSxcbiAgICAgICAgdHlwZTogJ2lzLXN1Y2Nlc3MnXG4gICAgICB9KVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5tYXJraW5nQXNVbmlkZW50aWZpYWJsZSA9IGZhbHNlXG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnJlZGlyZWN0VXJsXG4gICAgICB9LCAxMDAwKVxuICAgIH0sXG5cbiAgICBmYWlsZWRUb01hcmtBc1VuaWRlbnRpZmlhYmxlKGVycm9yKSB7XG4gICAgICB0aGlzLm1hcmtpbmdBc1VuaWRlbnRpZmlhYmxlID0gZmFsc2VcbiAgICAgIHRoaXMuJGJ1ZWZ5LnRvYXN0Lm9wZW4oe1xuICAgICAgICBtZXNzYWdlOiB0aGlzLnRyYW5zKCdUaGlzIG9ic2VydmF0aW9uIGNhbm5vdCBiZSBtYXJrZWQgYXMgdW5pZGVudGlmaWFibGUnKSxcbiAgICAgICAgdHlwZTogJ2lzLWRhbmdlcicsXG4gICAgICAgIGR1cmF0aW9uOiA1MDAwXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICB2YWxpZGF0ZVJlYXNvbihkaWFsb2cpIHtcbiAgICAgIGRpYWxvZy4kcmVmcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnZhbGlkJywgKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpXG5cbiAgICAgICAgaWYgKCFlLnRhcmdldC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgIGUudGFyZ2V0LnNldEN1c3RvbVZhbGlkaXR5KHRoaXMudHJhbnMoJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQgYW5kIGNhbiBjb250YWluIG1heCAyNTUgY2hhcnMuJykpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBkaWFsb2cuJHJlZnMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICBkaWFsb2cudmFsaWRhdGlvbk1lc3NhZ2UgPSBudWxsXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FieldObservationApproval.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FieldObservationApproval.vue?vue&type=template&id=47aea420&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FieldObservationApproval.vue?vue&type=template&id=47aea420& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"level-right\" }, [\n    _vm.approveUrl\n      ? _c(\"div\", { staticClass: \"level-item\" }, [\n          _c(\n            \"button\",\n            {\n              staticClass: \"button\",\n              class: { \"is-loading\": _vm.approving },\n              attrs: { type: \"button\", disabled: _vm.busy },\n              on: { click: _vm.confirmApprove }\n            },\n            [\n              _c(\"b-icon\", {\n                staticClass: \"has-text-success\",\n                attrs: { icon: \"check\" }\n              }),\n              _vm._v(\" \"),\n              _c(\"span\", [_vm._v(_vm._s(_vm.trans(\"buttons.approve\")))])\n            ],\n            1\n          )\n        ])\n      : _vm._e(),\n    _vm._v(\" \"),\n    _vm.markAsUnidentifiableUrl\n      ? _c(\"div\", { staticClass: \"level-item\" }, [\n          _c(\n            \"button\",\n            {\n              staticClass: \"button\",\n              class: { \"is-loading\": _vm.markingAsUnidentifiable },\n              attrs: { type: \"button\", disabled: _vm.busy },\n              on: { click: _vm.confirmMarkingAsUnidentifiable }\n            },\n            [\n              _c(\"b-icon\", {\n                staticClass: \"has-text-danger\",\n                attrs: { icon: \"times\" }\n              }),\n              _vm._v(\" \"),\n              _c(\"span\", [_vm._v(_vm._s(_vm.trans(\"buttons.unidentifiable\")))])\n            ],\n            1\n          )\n        ])\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZE9ic2VydmF0aW9uQXBwcm92YWwudnVlPzMzOGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkJBQTZCO0FBQ2pEO0FBQ0EsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4QkFBOEI7QUFDcEQsc0JBQXNCLHFDQUFxQztBQUMzRCxtQkFBbUI7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0Q0FBNEM7QUFDbEUsc0JBQXNCLHFDQUFxQztBQUMzRCxtQkFBbUI7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZE9ic2VydmF0aW9uQXBwcm92YWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3YWVhNDIwJi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1yaWdodFwiIH0sIFtcbiAgICBfdm0uYXBwcm92ZVVybFxuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1sb2FkaW5nXCI6IF92bS5hcHByb3ZpbmcgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgZGlzYWJsZWQ6IF92bS5idXN5IH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY29uZmlybUFwcHJvdmUgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJiLWljb25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhhcy10ZXh0LXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImNoZWNrXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS50cmFucyhcImJ1dHRvbnMuYXBwcm92ZVwiKSkpXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5tYXJrQXNVbmlkZW50aWZpYWJsZVVybFxuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1sb2FkaW5nXCI6IF92bS5tYXJraW5nQXNVbmlkZW50aWZpYWJsZSB9LFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCBkaXNhYmxlZDogX3ZtLmJ1c3kgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jb25maXJtTWFya2luZ0FzVW5pZGVudGlmaWFibGUgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJiLWljb25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhhcy10ZXh0LWRhbmdlclwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwidGltZXNcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnRyYW5zKFwiYnV0dG9ucy51bmlkZW50aWZpYWJsZVwiKSkpXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FieldObservationApproval.vue?vue&type=template&id=47aea420&\n");

/***/ }),

/***/ "./resources/js/components/FieldObservationApproval.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/FieldObservationApproval.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FieldObservationApproval_vue_vue_type_template_id_47aea420___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FieldObservationApproval.vue?vue&type=template&id=47aea420& */ \"./resources/js/components/FieldObservationApproval.vue?vue&type=template&id=47aea420&\");\n/* harmony import */ var _FieldObservationApproval_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldObservationApproval.vue?vue&type=script&lang=js& */ \"./resources/js/components/FieldObservationApproval.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _FieldObservationApproval_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _FieldObservationApproval_vue_vue_type_template_id_47aea420___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _FieldObservationApproval_vue_vue_type_template_id_47aea420___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/components/FieldObservationApproval.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZE9ic2VydmF0aW9uQXBwcm92YWwudnVlPzJhN2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUc7QUFDM0I7QUFDTDs7O0FBR3ZFO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDhGQUFNO0FBQ1IsRUFBRSxtR0FBTTtBQUNSLEVBQUUsNEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0YiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZE9ic2VydmF0aW9uQXBwcm92YWwudnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GaWVsZE9ic2VydmF0aW9uQXBwcm92YWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3YWVhNDIwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpZWxkT2JzZXJ2YXRpb25BcHByb3ZhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkT2JzZXJ2YXRpb25BcHByb3ZhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL25lbmFkL1NpdGVzL0Jpb2xvZ2VyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ3YWVhNDIwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ3YWVhNDIwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ3YWVhNDIwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWVsZE9ic2VydmF0aW9uQXBwcm92YWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3YWVhNDIwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ3YWVhNDIwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZE9ic2VydmF0aW9uQXBwcm92YWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/components/FieldObservationApproval.vue\n");

/***/ }),

/***/ "./resources/js/components/FieldObservationApproval.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/FieldObservationApproval.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldObservationApproval_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FieldObservationApproval.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FieldObservationApproval.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldObservationApproval_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZE9ic2VydmF0aW9uQXBwcm92YWwudnVlPzcyNzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBLHdDQUF3TSxDQUFnQixvUUFBRyxFQUFDIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGRPYnNlcnZhdGlvbkFwcHJvdmFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkT2JzZXJ2YXRpb25BcHByb3ZhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGRPYnNlcnZhdGlvbkFwcHJvdmFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/components/FieldObservationApproval.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/components/FieldObservationApproval.vue?vue&type=template&id=47aea420&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/FieldObservationApproval.vue?vue&type=template&id=47aea420& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldObservationApproval_vue_vue_type_template_id_47aea420___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FieldObservationApproval.vue?vue&type=template&id=47aea420& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FieldObservationApproval.vue?vue&type=template&id=47aea420&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldObservationApproval_vue_vue_type_template_id_47aea420___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldObservationApproval_vue_vue_type_template_id_47aea420___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZE9ic2VydmF0aW9uQXBwcm92YWwudnVlPzRlYzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGRPYnNlcnZhdGlvbkFwcHJvdmFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00N2FlYTQyMCYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGRPYnNlcnZhdGlvbkFwcHJvdmFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00N2FlYTQyMCZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/components/FieldObservationApproval.vue?vue&type=template&id=47aea420&\n");

/***/ })

}]);