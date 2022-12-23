"use strict";
(self["webpackChunkbelajar_webpack_code"] = self["webpackChunkbelajar_webpack_code"] || []).push([[858],{

/***/ 66:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var mahasiswa = [{
  nama: "Aditya Gustian",
  email: "adityagustian11@gmail.com",
  jurusan: "Teknik Elektronika"
}, {
  nama: "Bayu Ari Saputra",
  email: "bayuari@gmail.com",
  jurusan: "Teknik informatika"
}, {
  nama: "Arif Mulia Rahman",
  email: "arifmuliarahman@gmail.com",
  jurusan: "Teknik Mesin"
}];

// const mhs = mahasiswa.find(mahasiswa => {
//   return mahasiswa.nama == "Aditya Gustian"
// })

var mhs = lodash__WEBPACK_IMPORTED_MODULE_0___default().find(mahasiswa, {
  nama: 'Bayu Ari Saputra'
});
console.log(mhs);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(66));
/******/ }
]);