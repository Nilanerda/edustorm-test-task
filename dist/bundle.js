/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./node_modules/normalize.css/normalize.css?");

/***/ }),

/***/ "./src/javascript/app/app.js":
/*!***********************************!*\
  !*** ./src/javascript/app/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let gifsMoreOptionButton = document.getElementsByClassName('gif-figure-more-info');\nfor(let i = 0; i < gifsMoreOptionButton.length; i++) {\n    gifsMoreOptionButton[i].addEventListener('click',function () {\n        this.offsetParent.offsetParent.firstElementChild.classList.add('show-element');\n    });\n}\n\ndocument.body.addEventListener('click', function(event) {\n    let gifsElement = event.target.closest(\".gif-figure-instance\");\n    let gifFigureWrapper = document.getElementsByClassName('gif-figure-wrapper');\n    if (!gifsElement) {\n        for (let item of gifFigureWrapper) {\n            item.classList.remove('show-element');\n        }\n    }\n});\n\n//# sourceURL=webpack:///./src/javascript/app/app.js?");

/***/ }),

/***/ "./src/javascript/app/giphyApi.js":
/*!****************************************!*\
  !*** ./src/javascript/app/giphyApi.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const giphyApiKey = 'DJu5uArIKRj9StsjKwUuPPtiCVTvc6v6';\ndocument.addEventListener(\"DOMContentLoaded\", init);\nfunction init() {\n    document.getElementById(\"mainSearchButton\").addEventListener(\"click\", e => {\n        e.preventDefault();\n        let url = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&limit=8&q=`;\n        let searchInputValue = document.getElementById(\"mainSearch\").value.trim();\n        url = url.concat(searchInputValue);\n        fetch(url)\n            .then(response => response.json())\n            .then(content => {\n                console.log(content.data);\n                console.log(\"META\", content.meta);\n                let out = document.querySelector(\".gifs-output-place\");\n                out.innerHTML = '';\n                for(let item of content.data) {\n                    let fig = document.createElement(\"figure\");\n                    let img = document.createElement(\"img\");\n                    let fc = document.createElement(\"figcaption\");\n                    img.src = item.images.downsized.url;\n                    img.alt = item.title;\n                    fc.textContent = item.title;\n                    fig.appendChild(img);\n                    fig.appendChild(fc);\n                    out.insertAdjacentElement(\"afterbegin\", fig);\n                }\n                document.querySelector(\"#mainSearch\").value = \"\";\n            })\n    });\n}\n\n//# sourceURL=webpack:///./src/javascript/app/giphyApi.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _javascript_app_giphyApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../javascript/app/giphyApi */ \"./src/javascript/app/giphyApi.js\");\n/* harmony import */ var _javascript_app_giphyApi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_javascript_app_giphyApi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_app_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.js */ \"./src/javascript/app/app.js\");\n/* harmony import */ var _app_app_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_app_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/styles.scss?");

/***/ })

/******/ });