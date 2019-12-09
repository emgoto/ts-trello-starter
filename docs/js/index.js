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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.Promise = TrelloPowerUp.Promise;\nTrelloPowerUp.initialize({\n    // Button in top right corner of board\n    'board-buttons': function (t) {\n        return [{\n                text: 'Text',\n                callback: () => t.modal({\n                    url: './settings.html',\n                    height: 360,\n                    fullscreen: false,\n                    title: 'Title'\n                }),\n                condition: 'edit'\n            }];\n    },\n    // Badges on front of card\n    'card-badges': function (t) {\n        return [];\n    },\n    // Badges on back of card\n    'card-detail-badges': function (t) {\n        return [];\n    },\n}, {\n    appKey: '',\n    appName: ''\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LnRzP2M2YWUiXSwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBjb25zdCBUcmVsbG9Qb3dlclVwOiBhbnk7XG5cbndpbmRvdy5Qcm9taXNlID0gVHJlbGxvUG93ZXJVcC5Qcm9taXNlO1xuXG5UcmVsbG9Qb3dlclVwLmluaXRpYWxpemUoe1xuICAvLyBCdXR0b24gaW4gdG9wIHJpZ2h0IGNvcm5lciBvZiBib2FyZFxuICAnYm9hcmQtYnV0dG9ucyc6IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0ZXh0OiAnVGV4dCcsXG4gICAgICBjYWxsYmFjazogKCk6IHZvaWQgPT4gdC5tb2RhbCh7XG4gICAgICAgIHVybDogJy4vc2V0dGluZ3MuaHRtbCcsXG4gICAgICAgIGhlaWdodDogMzYwLFxuICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgICAgdGl0bGU6ICdUaXRsZSdcbiAgICAgIH0pLFxuICAgICAgY29uZGl0aW9uOiAnZWRpdCdcbiAgICB9XTtcbiAgfSxcbiAgLy8gQmFkZ2VzIG9uIGZyb250IG9mIGNhcmRcbiAgJ2NhcmQtYmFkZ2VzJzogZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gW11cbiAgfSxcbiAgLy8gQmFkZ2VzIG9uIGJhY2sgb2YgY2FyZFxuICAnY2FyZC1kZXRhaWwtYmFkZ2VzJzogZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gW107XG4gIH0sXG59LFxuICB7XG4gICAgYXBwS2V5OiAnJyxcbiAgICBhcHBOYW1lOiAnJ1xuICB9KTtcbiJdLCJtYXBwaW5ncyI6IkFBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ });