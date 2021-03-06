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

/***/ "./src/javascript/app/giphyApi.js":
/*!****************************************!*\
  !*** ./src/javascript/app/giphyApi.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const template = __webpack_require__(/*! @template/loaded-gifs.html */ \"./src/templates/loaded-gifs.html\");\n\nconst giphyImages = {\n    giphyApiKey: 'DJu5uArIKRj9StsjKwUuPPtiCVTvc6v6',\n    startingPosition: 0,\n    savedValue: '',\n    searchImages(value) {\n        let url = `https://api.giphy.com/v1/gifs/search?api_key=${this.giphyApiKey}&limit=8&q=`;\n        url = url.concat(value);\n        if(this.savedValue === value) {\n            this.startingPosition += 8; // step of uploading images\n            url = url.concat(`&offset=${this.startingPosition}`)\n        }\n        \n        fetch(url)\n            .then(response => response.json())\n            .then(content => {\n                let insertPlace = document.querySelector(\".gifs-output-place\");\n                insertPlace.innerHTML = '';\n                for(let item of content.data) {\n                    let imageContent = template({\n                        imageUrl: item.images.downsized_large.url,\n                        title: item.title,\n                        width: item.images.original.width,\n                        height: item.images.original.height,\n                        url: item.url,\n                    });\n                    insertPlace.insertAdjacentHTML('afterbegin', imageContent );\n                    this.addMoreOptionButton();\n                }\n            })\n    },\n    \n    //add option button for each image element and show it properties\n    addMoreOptionButton() {\n        let gifsMoreOptionButton = document.getElementsByClassName('gif-figure-more-info');\n                for(let i = 0; i < gifsMoreOptionButton.length; i++) {\n                    gifsMoreOptionButton[i].addEventListener('click',function () {\n                        this.offsetParent.offsetParent.firstElementChild.classList.add('show-element');\n                    });\n                }\n    }\n}\n\ndocument.getElementById(\"mainSearchButton\").addEventListener(\"click\", e => {\n    e.preventDefault();\n    let searchInputValue = document.getElementById(\"mainSearch\").value.trim();\n    giphyImages.searchImages(searchInputValue);\n    giphyImages.savedValue = searchInputValue;\n});\n\ndocument.getElementById(\"refreshButton\").addEventListener(\"click\", e => {\n    e.preventDefault();\n    giphyImages.searchImages(giphyImages.savedValue);\n});\n\n// close option menu and image element properties\ndocument.body.addEventListener('click', function(event) {\n    let gifsElement = event.target.closest(\".gif-figure-instance\");\n    let gifFigureWrapper = document.getElementsByClassName('gif-figure-wrapper');\n    if (!gifsElement) {\n        for (let item of gifFigureWrapper) {\n            item.classList.remove('show-element');\n        }\n    }\n});\n\n//# sourceURL=webpack:///./src/javascript/app/giphyApi.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _javascript_app_giphyApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../javascript/app/giphyApi */ \"./src/javascript/app/giphyApi.js\");\n/* harmony import */ var _javascript_app_giphyApi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_javascript_app_giphyApi__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/styles.scss?");

/***/ }),

/***/ "./src/templates/loaded-gifs.html":
/*!****************************************!*\
  !*** ./src/templates/loaded-gifs.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(obj){\nvar __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\nwith(obj||{}){\n__p+='<figure class=\"gif-figure-instance\">\\n    <div class=\"gif-figure-wrapper\">\\n        <span class=\"gif-size\">'+\n((__t=(width))==null?'':__t)+\n'x'+\n((__t=(height))==null?'':__t)+\n'</span>\\n        <a href=\"'+\n((__t=(url))==null?'':__t)+\n'\" class=\"gif-link-to-original\">Original</a>\\n    </div>\\n    <div class=\"gif-image-wrapper\">\\n        <img src=\"'+\n((__t=( imageUrl ))==null?'':__t)+\n'\" alt=\"'+\n((__t=( title ))==null?'':__t)+\n'\">\\n    </div>\\n    <figcaption>\\n        <div>'+\n((__t=(title))==null?'':__t)+\n'</div>\\n        <button class=\"gif-figure-more-info\">i</button>\\n    </figcaption>\\n</figure>';\n}\nreturn __p;\n};\n\n\n//# sourceURL=webpack:///./src/templates/loaded-gifs.html?");

/***/ })

/******/ });