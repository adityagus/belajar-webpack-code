"use strict";
(self["webpackChunkbelajar_webpack_code"] = self["webpackChunkbelajar_webpack_code"] || []).push([[179],{

/***/ 926:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(486);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// CONCATENATED MODULE: ./src/app/utils/cekInputValid.js
var cekInputValid = function cekInputValid() {
  for (var _len = arguments.length, angka = new Array(_len), _key = 0; _key < _len; _key++) {
    angka[_key] = arguments[_key];
  }
  return angka.every(function (num) {
    return typeof num === 'number' && !isNaN(num);
  });
};
;// CONCATENATED MODULE: ./src/app/utils/parseInput.js
var parseInput = function parseInput() {
  for (var _len = arguments.length, input = new Array(_len), _key = 0; _key < _len; _key++) {
    input[_key] = arguments[_key];
  }
  return input.map(function (str) {
    return parseInt(str);
  });
};
;// CONCATENATED MODULE: ./src/app/app.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var run = function run(alertService, calculatorService, jokesService) {
  alertService.sembunyikanError();
  calculatorService.onClick(function () {
    alertService.sembunyikanError();
    var input = calculatorService.getInput();
    var angka = parseInput.apply(void 0, _toConsumableArray(input));
    if (cekInputValid.apply(void 0, _toConsumableArray(angka))) {
      var _angka = _slicedToArray(angka, 2),
        angka1 = _angka[0],
        angka2 = _angka[1];
      calculatorService.setResult(angka1, angka2);
    } else {
      calculatorService.setResult('');
      alertService.tampilkanErrorPenjumlahan(input, angka);
    }
  });
  jokesService.onClick(function () {
    fetch('https://candaan-api.vercel.app/api/text/random').then(function (response) {
      return response.json();
    }).then(function (data) {
      jokesService.setModal(data.data);
    });
  });
};
;// CONCATENATED MODULE: ./src/app/alert.service.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var AlertService = /*#__PURE__*/_createClass(function AlertService() {
  var _this = this;
  _classCallCheck(this, AlertService);
  _defineProperty(this, "tampilkanErrorPenjumlahan", function (input, angka) {
    var hasil = input.reduce(function (pesan, nilai, index) {
      if (cekInputValid(angka[index])) {
        return pesan + '';
      } else {
        return pesan + "".concat(nilai, " itu bukan angka! ");
      }
    }, 'Silahkan masukkan angka yang benar: ');
    _this.error.classList.remove('d-none');
    _this.error.innerText = hasil;
  });
  _defineProperty(this, "sembunyikanError", function () {
    return _this.error.classList.add('d-none');
  });
  this.error = document.querySelector('#error');
});
;// CONCATENATED MODULE: ./src/app/calculator.service.js
function calculator_service_typeof(obj) { "@babel/helpers - typeof"; return calculator_service_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, calculator_service_typeof(obj); }
function calculator_service_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function calculator_service_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, calculator_service_toPropertyKey(descriptor.key), descriptor); } }
function calculator_service_createClass(Constructor, protoProps, staticProps) { if (protoProps) calculator_service_defineProperties(Constructor.prototype, protoProps); if (staticProps) calculator_service_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function calculator_service_toPropertyKey(arg) { var key = calculator_service_toPrimitive(arg, "string"); return calculator_service_typeof(key) === "symbol" ? key : String(key); }
function calculator_service_toPrimitive(input, hint) { if (calculator_service_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (calculator_service_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CalculatorService = /*#__PURE__*/function () {
  function CalculatorService() {
    calculator_service_classCallCheck(this, CalculatorService);
    this.operand1 = document.querySelector('#operand1');
    this.operand2 = document.querySelector('#operand2');
    this.tombolTambah = document.querySelector('#tombol-tambah');
    this.hasil = document.querySelector('#hasil');
  }
  calculator_service_createClass(CalculatorService, [{
    key: "getInput",
    value: function getInput() {
      return [this.operand1.value, this.operand2.value];
    }
  }, {
    key: "setResult",
    value: function setResult(angka1, angka2) {
      this.hasil.innerText = angka1 + angka2;
    }
  }, {
    key: "onClick",
    value: function onClick(cb) {
      this.tombolTambah.addEventListener('click', cb);
    }
  }]);
  return CalculatorService;
}();
;// CONCATENATED MODULE: ./src/app/jokes.service.js
function jokes_service_typeof(obj) { "@babel/helpers - typeof"; return jokes_service_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, jokes_service_typeof(obj); }
function jokes_service_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function jokes_service_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, jokes_service_toPropertyKey(descriptor.key), descriptor); } }
function jokes_service_createClass(Constructor, protoProps, staticProps) { if (protoProps) jokes_service_defineProperties(Constructor.prototype, protoProps); if (staticProps) jokes_service_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function jokes_service_toPropertyKey(arg) { var key = jokes_service_toPrimitive(arg, "string"); return jokes_service_typeof(key) === "symbol" ? key : String(key); }
function jokes_service_toPrimitive(input, hint) { if (jokes_service_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (jokes_service_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var JokesService = /*#__PURE__*/function () {
  function JokesService() {
    jokes_service_classCallCheck(this, JokesService);
    this.tombolJokes = document.querySelector('#jokes-receh');
    this.modalBody = document.querySelector('.modal-body');
  }
  jokes_service_createClass(JokesService, [{
    key: "setModal",
    value: function setModal(str) {
      this.modalBody.innerHTML = str;
    }
  }, {
    key: "onClick",
    value: function onClick(cb) {
      this.tombolJokes.addEventListener('click', cb);
    }
  }]);
  return JokesService;
}();
;// CONCATENATED MODULE: ./src/index.js






var alertService = new AlertService();
var calculatorService = new CalculatorService();
var jokesService = new JokesService();
run(alertService, calculatorService, jokesService);
console.log(lodash_default().toUpper("Hello from index.js"));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(926));
/******/ }
]);