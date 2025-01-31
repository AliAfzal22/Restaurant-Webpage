/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Contact.js":
/*!************************!*\
  !*** ./src/Contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n    const content = document.getElementById(\"content\");\n\n    // Clear content in case it's being reloaded\n    content.innerHTML = \"\";\n\n    // Create and append \"Contact\" section\n    const contactSection = document.createElement(\"section\");\n    contactSection.id = \"contact\";\n    contactSection.innerHTML = `\n        <h2>Contact Us</h2>\n        <p>Address: 123 Main Street, Food City</p>\n        <p>Phone: (123) 456-7890</p>\n        <p>Email: contact@deliciousbites.com</p>\n        <p>Opening Hours: 10 AM - 10 PM (Mon-Sun)</p>\n    `;\n    content.appendChild(contactSection);\n}\n\n//# sourceURL=webpack:///./src/Contact.js?");

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\n    const content = document.getElementById(\"content\");\n\n    // Clear content in case it's being reloaded\n    content.innerHTML = \"\";\n\n    // Create and append \"About Us\" section\n    const homeSection = document.createElement(\"section\");\n    homeSection.id = \"home\";\n    homeSection.innerHTML = `\n        <h2>About Us</h2>\n        <p>We serve delicious food made with fresh ingredients. Come and experience the best dining in town!</p>\n    `;\n    content.appendChild(homeSection); \n}\n\n//# sourceURL=webpack:///./src/Home.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n    const content = document.getElementById(\"content\");\n\n    // Clear content in case it's being reloaded\n    content.innerHTML = \"\";\n\n    // Create and append \"Menu\" section\n    const menuSection = document.createElement(\"section\");\n    menuSection.id = \"menu\";\n    menuSection.innerHTML = `\n        <h2>Our Menu</h2>\n        <ul>\n            <li>Grilled Chicken - $12.99</li>\n            <li>Spaghetti Carbonara - $10.99</li>\n            <li>Vegetarian Pizza - $9.99</li>\n            <li>Cheeseburger - $8.99</li>\n            <li>Chocolate Cake - $5.99</li>\n        </ul>\n    `;\n    content.appendChild(menuSection);\n}\n\n//# sourceURL=webpack:///./src/Menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.js */ \"./src/Home.js\");\n/* harmony import */ var _Menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.js */ \"./src/Menu.js\");\n/* harmony import */ var _Contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact.js */ \"./src/Contact.js\");\n\n\n\n\nfunction setupTabs() {\n    document.getElementById(\"home-tab\").addEventListener(\"click\", _Home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome);\n    document.getElementById(\"menu-tab\").addEventListener(\"click\", _Menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu);\n    document.getElementById(\"contact-tab\").addEventListener(\"click\", _Contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContact);\n\n    // Load Home by default\n    (0,_Home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n}\n\n// Run the setup function after the page loads\nsetupTabs();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;