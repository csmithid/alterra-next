module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/cole.smith/Markforged/alterra-next/pages/about.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => __jsx(\"div\", {\n  className: \"text-gray-700 text-sm flex flex-col items-center\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 2,\n    columnNumber: 3\n  }\n}, __jsx(\"div\", {\n  className: \"flex flex-row items-center justify-center gap-8 p-8 mb-12 rounded-lg bg-gray-200 max-w-sm\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }\n}, __jsx(\"img\", {\n  src: \"https://via.placeholder.com/100\",\n  className: \"rounded-full hidden sm:block\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 7\n  }\n}), __jsx(\"div\", {\n  className: \"flex-col\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 7\n  }\n}, __jsx(\"p\", {\n  className: \"font-bold mb-2\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }\n}, \"Jeff Smith\"), __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }\n}, \"636 Arrowhead Drive\"), __jsx(\"p\", {\n  className: \"mb-2\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }\n}, \"Earlysville, VA 22936\"), __jsx(\"a\", {\n  href: \"tel:434-981-9136\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 9\n  }\n}, \"+1 434 981 9136\"))), __jsx(\"div\", {\n  className: \"max-w-lg\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }\n}, __jsx(\"p\", {\n  className: \"mb-4\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 7\n  }\n}, \"Alterra is a full-service Agency Construction Management firm which specializes in complex, multi-million-dollar residences that require meticulous attention to architectural detail and finishes. Jeff Smith, the founder and principal of Alterra, is a seasoned professional who has been actively involved in the construction industry in Central Virginia for over 30 years.\"), __jsx(\"p\", {\n  className: \"mb-4\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 7\n  }\n}, \"Jeff serves as the owner\\u2019s representative, and thus is committed to representing the best interests of his clients. He serves as a member of the project team (owner, architect, construction manager) and, with the design team, leads the process from pre-design through construction, including contracts, overall budgeting and scheduling. In this capacity, Jeff has earned a reputation for being a collaborative, creative problem-solver, who routinely completes projects on time and on budget.\"), __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 7\n  }\n}, \"Recent Alterra projects include a $12 million, 16,000-square-foot European country manor home in Cismont, Virginia, as well as the development of RiverBluff, a conservation community of 22 homes in the Woolen Mills neighborhood of Charlottesville. Jeff was also a team member in the development of a $33 million resort complex for Ashley House in Keswick, Virginia, which included a 48-room luxury inn and a golf course designed by Arnold Palmer. Jeff graduated with a B.S. in Architecture from the University of Virginia in 1980.\"))));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFlLHFFQUNiO0FBQUssV0FBUyxFQUFDLGtEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQywyRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFDRSxLQUFHLEVBQUMsaUNBRE47QUFFRSxXQUFTLEVBQUMsOEJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBS0U7QUFBSyxXQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBRyxXQUFTLEVBQUMsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsRUFHRTtBQUFHLFdBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSEYsRUFJRTtBQUFHLE1BQUksRUFBQyxrQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLENBTEYsQ0FERixFQWFFO0FBQUssV0FBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUcsV0FBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5WEFERixFQVNFO0FBQUcsV0FBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzZkFURixFQWtCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdoQkFsQkYsQ0FiRixDQURGIiwiZmlsZSI6Ii4vcGFnZXMvYWJvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtOCBwLTggbWItMTIgcm91bmRlZC1sZyBiZy1ncmF5LTIwMCBtYXgtdy1zbVwiPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAwXCJcbiAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGhpZGRlbiBzbTpibG9ja1wiXG4gICAgICA+PC9pbWc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29sXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtYi0yXCI+SmVmZiBTbWl0aDwvcD5cbiAgICAgICAgPHA+NjM2IEFycm93aGVhZCBEcml2ZTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMlwiPkVhcmx5c3ZpbGxlLCBWQSAyMjkzNjwvcD5cbiAgICAgICAgPGEgaHJlZj1cInRlbDo0MzQtOTgxLTkxMzZcIj4rMSA0MzQgOTgxIDkxMzY8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LWxnXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgIEFsdGVycmEgaXMgYSBmdWxsLXNlcnZpY2UgQWdlbmN5IENvbnN0cnVjdGlvbiBNYW5hZ2VtZW50IGZpcm0gd2hpY2hcbiAgICAgICAgc3BlY2lhbGl6ZXMgaW4gY29tcGxleCwgbXVsdGktbWlsbGlvbi1kb2xsYXIgcmVzaWRlbmNlcyB0aGF0IHJlcXVpcmVcbiAgICAgICAgbWV0aWN1bG91cyBhdHRlbnRpb24gdG8gYXJjaGl0ZWN0dXJhbCBkZXRhaWwgYW5kIGZpbmlzaGVzLiBKZWZmIFNtaXRoLFxuICAgICAgICB0aGUgZm91bmRlciBhbmQgcHJpbmNpcGFsIG9mIEFsdGVycmEsIGlzIGEgc2Vhc29uZWQgcHJvZmVzc2lvbmFsIHdobyBoYXNcbiAgICAgICAgYmVlbiBhY3RpdmVseSBpbnZvbHZlZCBpbiB0aGUgY29uc3RydWN0aW9uIGluZHVzdHJ5IGluIENlbnRyYWwgVmlyZ2luaWFcbiAgICAgICAgZm9yIG92ZXIgMzAgeWVhcnMuXG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgIEplZmYgc2VydmVzIGFzIHRoZSBvd25lcuKAmXMgcmVwcmVzZW50YXRpdmUsIGFuZCB0aHVzIGlzIGNvbW1pdHRlZCB0b1xuICAgICAgICByZXByZXNlbnRpbmcgdGhlIGJlc3QgaW50ZXJlc3RzIG9mIGhpcyBjbGllbnRzLiBIZSBzZXJ2ZXMgYXMgYSBtZW1iZXIgb2ZcbiAgICAgICAgdGhlIHByb2plY3QgdGVhbSAob3duZXIsIGFyY2hpdGVjdCwgY29uc3RydWN0aW9uIG1hbmFnZXIpIGFuZCwgd2l0aCB0aGVcbiAgICAgICAgZGVzaWduIHRlYW0sIGxlYWRzIHRoZSBwcm9jZXNzIGZyb20gcHJlLWRlc2lnbiB0aHJvdWdoIGNvbnN0cnVjdGlvbixcbiAgICAgICAgaW5jbHVkaW5nIGNvbnRyYWN0cywgb3ZlcmFsbCBidWRnZXRpbmcgYW5kIHNjaGVkdWxpbmcuIEluIHRoaXMgY2FwYWNpdHksXG4gICAgICAgIEplZmYgaGFzIGVhcm5lZCBhIHJlcHV0YXRpb24gZm9yIGJlaW5nIGEgY29sbGFib3JhdGl2ZSwgY3JlYXRpdmVcbiAgICAgICAgcHJvYmxlbS1zb2x2ZXIsIHdobyByb3V0aW5lbHkgY29tcGxldGVzIHByb2plY3RzIG9uIHRpbWUgYW5kIG9uIGJ1ZGdldC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBSZWNlbnQgQWx0ZXJyYSBwcm9qZWN0cyBpbmNsdWRlIGEgJDEyIG1pbGxpb24sIDE2LDAwMC1zcXVhcmUtZm9vdFxuICAgICAgICBFdXJvcGVhbiBjb3VudHJ5IG1hbm9yIGhvbWUgaW4gQ2lzbW9udCwgVmlyZ2luaWEsIGFzIHdlbGwgYXMgdGhlXG4gICAgICAgIGRldmVsb3BtZW50IG9mIFJpdmVyQmx1ZmYsIGEgY29uc2VydmF0aW9uIGNvbW11bml0eSBvZiAyMiBob21lcyBpbiB0aGVcbiAgICAgICAgV29vbGVuIE1pbGxzIG5laWdoYm9yaG9vZCBvZiBDaGFybG90dGVzdmlsbGUuIEplZmYgd2FzIGFsc28gYSB0ZWFtXG4gICAgICAgIG1lbWJlciBpbiB0aGUgZGV2ZWxvcG1lbnQgb2YgYSAkMzMgbWlsbGlvbiByZXNvcnQgY29tcGxleCBmb3IgQXNobGV5XG4gICAgICAgIEhvdXNlIGluIEtlc3dpY2ssIFZpcmdpbmlhLCB3aGljaCBpbmNsdWRlZCBhIDQ4LXJvb20gbHV4dXJ5IGlubiBhbmQgYVxuICAgICAgICBnb2xmIGNvdXJzZSBkZXNpZ25lZCBieSBBcm5vbGQgUGFsbWVyLiBKZWZmIGdyYWR1YXRlZCB3aXRoIGEgQi5TLiBpblxuICAgICAgICBBcmNoaXRlY3R1cmUgZnJvbSB0aGUgVW5pdmVyc2l0eSBvZiBWaXJnaW5pYSBpbiAxOTgwLlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });