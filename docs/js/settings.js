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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/settings.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _trello_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trello-util */ \"./src/trello-util.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst t = TrelloPowerUp.iframe();\n\nfunction onAuthenticate() {\n    t.popup({\n        type: 'confirm',\n        title: 'Title',\n        mouseEvent: event,\n        message: 'message',\n        confirmText: 'Authorize',\n        onConfirm: () => {\n            Trello.authorize({\n                type: \"popup\",\n                name: \"name\",\n                expiration: \"never\",\n                success: () => {\n                    Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"setToken\"])(t, Trello.token());\n                },\n                error: () => { },\n            });\n        },\n    });\n}\n;\nt.render(function () {\n    return __awaiter(this, void 0, void 0, function* () {\n        t.sizeTo(document.getElementById('wrapper'));\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2V0dGluZ3MudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3NldHRpbmdzLnRzP2MxNWYiXSwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBjb25zdCBUcmVsbG9Qb3dlclVwOiBhbnk7XG5jb25zdCB0ID0gVHJlbGxvUG93ZXJVcC5pZnJhbWUoKTtcbmRlY2xhcmUgY29uc3QgVHJlbGxvOiBhbnk7XG5cbmltcG9ydCB7IHNldFRva2VuIH0gZnJvbSAnLi90cmVsbG8tdXRpbCc7XG5cbmZ1bmN0aW9uIG9uQXV0aGVudGljYXRlKCkge1xuICB0LnBvcHVwKHtcbiAgICB0eXBlOiAnY29uZmlybScsXG4gICAgdGl0bGU6ICdUaXRsZScsXG4gICAgbW91c2VFdmVudDogZXZlbnQsXG4gICAgbWVzc2FnZTogJ21lc3NhZ2UnLFxuICAgIGNvbmZpcm1UZXh0OiAnQXV0aG9yaXplJyxcbiAgICBvbkNvbmZpcm06ICgpID0+IHtcbiAgICAgIFRyZWxsby5hdXRob3JpemUoe1xuICAgICAgICB0eXBlOiBcInBvcHVwXCIsXG4gICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICBleHBpcmF0aW9uOiBcIm5ldmVyXCIsXG4gICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICBzZXRUb2tlbih0LCBUcmVsbG8udG9rZW4oKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoKSA9PiB7IH0sXG4gICAgICB9KTtcbiAgICB9LFxuICB9KTtcbn07XG5cbnQucmVuZGVyKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgdC5zaXplVG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXInKSk7XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7O0FBQ0E7QUFDQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/settings.ts\n");

/***/ }),

/***/ "./src/trello-util.ts":
/*!****************************!*\
  !*** ./src/trello-util.ts ***!
  \****************************/
/*! exports provided: getToken, setToken, getFoo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getToken\", function() { return getToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setToken\", function() { return setToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFoo\", function() { return getFoo; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst key = '';\nconst getToken = (t) => t.get('member', 'private', 'authToken');\nconst setToken = (t, token) => t.set('member', 'private', 'authToken', token);\nconst getFoo = (t) => __awaiter(void 0, void 0, void 0, function* () {\n    const { card: cardId } = t.getContext();\n    const token = yield getToken(t);\n    const url = `https://api.trello.com/1/cards/${cardId}/actions?filter=updateCard:idList,createCard&key=${key}&token=${token}`;\n    return axios.get(url).then(response => response.data).catch((e) => {\n        if (e && e.response && e.response.status && e.response.status === 401) {\n            // Token no longer valid, delete\n            setToken(t, undefined);\n        }\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHJlbGxvLXV0aWwudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3RyZWxsby11dGlsLnRzP2JhYjciXSwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBjb25zdCBheGlvczogYW55O1xuXG5jb25zdCBrZXkgPSAnJztcblxuZXhwb3J0IGNvbnN0IGdldFRva2VuID0gKHQpOiBQcm9taXNlPHN0cmluZyB8IHZvaWQ+ID0+IHQuZ2V0KCdtZW1iZXInLCAncHJpdmF0ZScsICdhdXRoVG9rZW4nKTtcbmV4cG9ydCBjb25zdCBzZXRUb2tlbiA9ICh0LCB0b2tlbik6IFByb21pc2U8dm9pZD4gPT4gdC5zZXQoJ21lbWJlcicsICdwcml2YXRlJywgJ2F1dGhUb2tlbicsIHRva2VuKTtcblxuZXhwb3J0IGNvbnN0IGdldEZvbyA9IGFzeW5jICh0KTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgICBjb25zdCB7IGNhcmQ6IGNhcmRJZCB9ID0gdC5nZXRDb250ZXh0KCk7XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih0KTtcblxuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS50cmVsbG8uY29tLzEvY2FyZHMvJHtjYXJkSWR9L2FjdGlvbnM/ZmlsdGVyPXVwZGF0ZUNhcmQ6aWRMaXN0LGNyZWF0ZUNhcmQma2V5PSR7a2V5fSZ0b2tlbj0ke3Rva2VufWA7XG4gICAgcmV0dXJuIGF4aW9zLmdldCh1cmwpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUgJiYgZS5yZXNwb25zZSAmJiBlLnJlc3BvbnNlLnN0YXR1cyAmJiBlLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAvLyBUb2tlbiBubyBsb25nZXIgdmFsaWQsIGRlbGV0ZVxuICAgICAgICAgICAgc2V0VG9rZW4odCwgdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/trello-util.ts\n");

/***/ })

/******/ });