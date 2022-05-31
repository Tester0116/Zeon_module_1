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

/***/ "./js/Scroll/animateScroll.js":
/*!************************************!*\
  !*** ./js/Scroll/animateScroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animateScroll\": () => (/* binding */ animateScroll)\n/* harmony export */ });\n// animateScroll.js\r\n\r\nconst pow = Math.pow\r\n\r\nconst easeOutQuart = (x) => 1 - pow(1 - x, 4)\r\n\r\nconst animateScroll = ({\r\n  targetPosition,\r\n  initialPosition,\r\n  duration,\r\n}) => {\r\n  let start\r\n  let position\r\n  let animationFrame\r\n\r\n  const requestAnimationFrame = window.requestAnimationFrame\r\n  const cancelAnimationFrame = window.cancelAnimationFrame\r\n\r\n  const maxAvailableScroll =\r\n    document.documentElement.scrollHeight -\r\n    document.documentElement.clientHeight\r\n\r\n  const amountOfPixelsToScroll = initialPosition - targetPosition\r\n\r\n  function step(timestamp) {\r\n    if (start === undefined) start = timestamp\r\n\r\n    const elapsed = timestamp - start\r\n\r\n    const relativeProgress = elapsed / duration\r\n\r\n    const easedProgress = easeOutQuart(relativeProgress)\r\n\r\n    position =\r\n      initialPosition - amountOfPixelsToScroll * Math.min(easedProgress, 1)\r\n\r\n    window.scrollTo(0, position)\r\n\r\n    if (\r\n      initialPosition !== maxAvailableScroll &&\r\n      window.scrollY === maxAvailableScroll\r\n    ) {\r\n      cancelAnimationFrame(animationFrame)\r\n      return\r\n    }\r\n\r\n    if (elapsed < duration) animationFrame = requestAnimationFrame(step)\r\n  }\r\n\r\n  animationFrame = requestAnimationFrame(step)\r\n}\r\n\n\n//# sourceURL=webpack:///./js/Scroll/animateScroll.js?");

/***/ }),

/***/ "./js/Scroll/index.js":
/*!****************************!*\
  !*** ./js/Scroll/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrollToElement\": () => (/* binding */ scrollToElement)\n/* harmony export */ });\n/* harmony import */ var _animateScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animateScroll.js */ \"./js/Scroll/animateScroll.js\");\n\r\n\r\nconst logError = () => console.error(`Invalid element!`)\r\n\r\nconst getElementPosition = (element) => element.offsetTop\r\n\r\nconst scrollToElement = ({ id, ref = null, duration = 3000 }) => {\r\n  const initialPosition = window.scrollY\r\n\r\n  if (id) {\r\n    const element = document.getElementById(id)\r\n\r\n    if (!element) {\r\n      logError()\r\n      return\r\n    }\r\n\r\n    (0,_animateScroll_js__WEBPACK_IMPORTED_MODULE_0__.animateScroll)({\r\n      targetPosition: getElementPosition(element),\r\n      initialPosition,\r\n      duration,\r\n    })\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/Scroll/index.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.json */ \"./js/config.json\");\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.js */ \"./js/timer.js\");\n/* harmony import */ var _Scroll_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Scroll/index.js */ \"./js/Scroll/index.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_timer_js__WEBPACK_IMPORTED_MODULE_1__.initializeTimer)(_config_json__WEBPACK_IMPORTED_MODULE_0__.timerEndDate) // starting timer\r\n\r\n// adding listener for get app button\r\nconst appLinks = document.querySelectorAll('.get-app_link')\r\n\r\nappLinks.forEach((app) => (app.href = _config_json__WEBPACK_IMPORTED_MODULE_0__.appStoreLink))\r\n\r\n// $$$$$ BURGER MENU START $$$$$\r\nconst menu = document.getElementById('js-burger-menu__icon')\r\nconst menuClose = document.querySelectorAll('.js-burger-menu__icon-close')\r\n\r\nmenuClose.forEach((el) =>\r\n  el.addEventListener('click', () => {\r\n    menu.classList.toggle('active')\r\n    document.body.classList.toggle('scroll-none')\r\n  })\r\n)\r\n\r\nmenu.addEventListener('click', () => {\r\n  menu.classList.toggle('active')\r\n  document.body.classList.toggle('scroll-none')\r\n})\r\n// $$$$$ BURGER MENU END $$$$$\r\n\r\n// $$$$$ DARK MODE START $$$$$\r\nconst light = document.getElementById('dark-mode_change-light')\r\nconst lightIcon = document.getElementById('light-icon')\r\nconst dark = document.getElementById('dark-mode_change-dark')\r\nconst darkIcon = document.getElementById('dark-icon')\r\nconst darkText = document.getElementById('dark-mode_text')\r\nconst html = document.querySelector('html')\r\n\r\nhtml.dataset.theme = 'theme-dark'\r\nlight.addEventListener('click', () => {\r\n  html.dataset.theme = 'theme-light'\r\n  lightIcon.style.fill = '#FF9209'\r\n  lightIcon.nextElementSibling.style.color = '#FF9209'\r\n  darkText.textContent = 'Light mode'\r\n\r\n  darkIcon.style.fill = '#000'\r\n  darkIcon.nextElementSibling.style.color = '#000'\r\n})\r\n\r\n// --- dark toggle\r\ndark.addEventListener('click', () => {\r\n  html.dataset.theme = 'theme-dark'\r\n  lightIcon.style.fill = '#fff'\r\n  lightIcon.nextElementSibling.style.color = '#FFF'\r\n\r\n  darkText.textContent = 'Dark mode'\r\n  darkIcon.nextElementSibling.style.color = '#FF9209'\r\n  darkIcon.style.fill = '#FF9209'\r\n})\r\n// $$$$$ DARK MODE END $$$$$\r\n\r\n// $$$$$ PRIICING START $$$$$\r\nconst price_name = document.querySelectorAll('.price_name')\r\nconst price_price = document.querySelectorAll('.price_price')\r\nconst price_text = document.querySelectorAll('.price_text')\r\nconst price_value = document.querySelectorAll('.price_value')\r\n\r\n// setting name from json\r\nprice_name.forEach((item, index) => (item.textContent = _config_json__WEBPACK_IMPORTED_MODULE_0__.plans[index].name))\r\n\r\nprice_price.forEach((item, index) => {\r\n  item.textContent = '$' + _config_json__WEBPACK_IMPORTED_MODULE_0__.plans[index].price // setting price from json\r\n  price_value.value = _config_json__WEBPACK_IMPORTED_MODULE_0__.plans[index].name // setting value for modal active plan\r\n})\r\n\r\n// setting text from json\r\nprice_text.forEach((item, index) => (item.textContent = _config_json__WEBPACK_IMPORTED_MODULE_0__.plans[index].text))\r\n// $$$$$ PRIICING END $$$$$\r\n\r\n// $$$$$ TESTMONIALS START $$$$$\r\nconst testimonialsName = document.querySelectorAll('.testimonials-name')\r\nconst testimonialsText = document.querySelectorAll('.testimonials-text')\r\nconst testimonialsJob = document.querySelectorAll('.testimonials-job')\r\n\r\n// setting name from json\r\ntestimonialsName.forEach(\r\n  (item, index) => (item.textContent = _config_json__WEBPACK_IMPORTED_MODULE_0__.testimonials[index].name)\r\n)\r\n\r\n// setting text from json\r\ntestimonialsText.forEach(\r\n  (item, index) => (item.textContent = _config_json__WEBPACK_IMPORTED_MODULE_0__.testimonials[index].text)\r\n)\r\n\r\n// setting job from json\r\ntestimonialsJob.forEach(\r\n  (item, index) => (item.textContent = _config_json__WEBPACK_IMPORTED_MODULE_0__.testimonials[index].job)\r\n)\r\n// $$$$$ PRIICING END $$$$$\r\n\r\n// $$$$$ MODAL START $$$$$\r\n\r\nconst modal = document.getElementById('modal') // Get the modal\r\n\r\nconst btn = document.querySelectorAll('.buy-now') // open modal button\r\n\r\n// When the user clicks on the button =>\r\nconst radioInputs = document.getElementsByName('radio-inputs')\r\nconst radio = document.querySelectorAll('.modal-block__plan')\r\n\r\nlet activeRadioLabels = ''\r\nconst setActiveRadio = (element) => {\r\n  radioInputs.forEach((a) => {\r\n    activeRadioLabels = a.nextElementSibling.textContent\r\n    if (a.dataset.radio == element.dataset.btnRadio) {\r\n      a.checked = true\r\n    }\r\n  })\r\n}\r\n\r\nconst openModal = (element) => {\r\n  setActiveRadio(element)\r\n\r\n  modal.style.display = 'flex'\r\n  document.body.style.overflow = 'hidden'\r\n}\r\nconst closeModal = () => (modal.style.display = 'none')\r\n\r\ndocument.querySelector('.close-icon').addEventListener('click', closeModal)\r\n\r\nbtn.forEach((item) => item.addEventListener('click', () => openModal(item)))\r\n\r\n// When the user clicks anywhere outside of the modal, close it\r\nwindow.onclick = (event) => {\r\n  if (event.target == modal) modal.style.display = 'none'\r\n}\r\n\r\n// adding action for send button\r\nconst sendBtn = document.querySelector('.modal-block__send-btn')\r\nconst form = document.getElementById('form')\r\nconst userName = document.querySelector('.user-name')\r\nconst email = document.querySelector('.email')\r\nconst loading = document.querySelector('.loading-block')\r\nconst checkboxes = document.querySelectorAll('.input-checkboxes')\r\nconst checkboxesName = document.querySelectorAll('.input-checkboxes__name')\r\nconst checkboxesError = document.querySelector('.checkbox')\r\n\r\nradio.forEach((item) =>\r\n  item.addEventListener('click', () => (activeRadioLabels = item.textContent))\r\n)\r\n\r\nconst activeCheckboxesText = () => {\r\n  let texts = []\r\n  checkboxes.forEach((checkbox, index) => {\r\n    if (checkbox.checked === true) {\r\n      texts.push(checkboxesName[index].textContent)\r\n    }\r\n  })\r\n  return texts\r\n}\r\n\r\nconst sendToBack = (e) => {\r\n  e.preventDefault()\r\n  const formData = validateInputs()\r\n  if (formData) {\r\n    loading.classList.toggle('dn')\r\n    setTimeout(() => loading.classList.toggle('dn'), 2000)\r\n    return console.log(formData)\r\n  }\r\n}\r\n\r\nconst validateInputs = () => {\r\n  const userNameValue = userName.value.trim()\r\n  const emailValue = email.value.trim()\r\n  const checkboxText = activeCheckboxesText()\r\n  // check up for name\r\n  if (userNameValue === '') setError(userName, 'required field')\r\n  else if (userNameValue.length < 3)\r\n    setError(userName, 'should be more then 3 symbols')\r\n  else setSuccess(userName)\r\n\r\n  // check up for email\r\n  if (emailValue === '') setError(email, 'required field')\r\n  else if (!isValidEmail(emailValue)) setError(email, 'Provide a valid email')\r\n  else setSuccess(email)\r\n\r\n  // check up for checkboxes\r\n  if (checkboxText.length === 0)\r\n    return setError(checkboxesError, 'required field')\r\n  else setSuccess(checkboxesError)\r\n\r\n  return {\r\n    name: userNameValue,\r\n    email: emailValue,\r\n    plan: activeRadioLabels.trim(),\r\n    social: checkboxText,\r\n  }\r\n}\r\n\r\nconst setSuccess = (element) => {\r\n  const inputParent = element.parentElement\r\n  const errorDisplay = inputParent.querySelector('.error')\r\n  const errorInput = inputParent.querySelector('.modal-block__inputs')\r\n\r\n  errorDisplay.textContent = ''\r\n  inputParent.classList.remove('error')\r\n  if (errorInput !== null) errorInput.style.background = '#f2f2f2'\r\n}\r\n\r\nconst setError = (element, message) => {\r\n  const inputParent = element.parentElement\r\n  const errorDisplay = inputParent.querySelector('.error')\r\n  const errorInput = inputParent.querySelector('.modal-block__inputs')\r\n\r\n  errorDisplay.textContent = message\r\n  inputParent.classList.add('error')\r\n  if (errorInput !== null) errorInput.style.background = '#ffeeee'\r\n}\r\n\r\nconst isValidEmail = (email) => {\r\n  const re =\r\n    /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/\r\n  return re.test(String(email).toLowerCase())\r\n}\r\n\r\nform.addEventListener('submit', sendToBack)\r\nsendBtn.addEventListener('click', sendToBack)\r\nuserName.addEventListener('input', validateInputs)\r\nemail.addEventListener('input', validateInputs)\r\ncheckboxes.forEach((checkbox) =>\r\n  checkbox.addEventListener('input', validateInputs)\r\n)\r\n\r\n// $$$$$ MODAL END $$$$$\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/timer.js":
/*!*********************!*\
  !*** ./js/timer.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeTimer\": () => (/* binding */ initializeTimer)\n/* harmony export */ });\nconst isValid = (date) => {\r\n  const [d, m, y, h] = date.split(' ').join('.').split('.')\r\n  if (d > 31 || d < 0) return false // valid date\r\n  if (m > 12 || m < 0) return false // valid month\r\n  if (y.length > 4 || y.length < 4) return false // valid year\r\n}\r\n\r\nconst parseDate = (dateString) => {\r\n  const isValidDate = isValid(dateString)\r\n  if (isValidDate === false) return false\r\n\r\n  let totalTime = []\r\n  const [d, m, y, h] = dateString.split(' ').join('.').split('.')\r\n\r\n  totalTime.push(y, m, d, h)\r\n\r\n  return totalTime\r\n}\r\n\r\nconst getTimeRemaining = (endtime) => {\r\n  const vd = parseDate(endtime)\r\n  const t = Date.parse(vd) - new Date()\r\n  const seconds = Math.floor((t / 1000) % 60)\r\n  const minutes = Math.floor((t / 1000 / 60) % 60)\r\n  const hours = Math.floor((t / (1000 * 60 * 60)) % 24)\r\n  const days = Math.floor(t / (1000 * 60 * 60 * 24))\r\n  return {\r\n    total: t,\r\n    days: days,\r\n    hours: hours,\r\n    minutes: minutes,\r\n    seconds: seconds,\r\n  }\r\n}\r\n\r\nconst initializeTimer = (endtime) => {\r\n  const timer = document.getElementById('timer')\r\n  const daysSpan = timer.querySelector('.days')\r\n  const hoursSpan = timer.querySelector('.hours')\r\n  const minutesSpan = timer.querySelector('.minutes')\r\n  const secondsSpan = timer.querySelector('.seconds')\r\n\r\n  const updateTimer = () => {\r\n    const t = getTimeRemaining(endtime)\r\n    let timeinterval = setInterval(updateTimer, 1000)\r\n\r\n    if (t.total <= 0 || parseDate(endtime) === false) {\r\n      document.getElementById('timer-block').className = 'hidden'\r\n      clearInterval(timeinterval)\r\n      return true\r\n    }\r\n    daysSpan.textContent = t.days\r\n    hoursSpan.textContent = ('0' + t.hours).slice(-2)\r\n    minutesSpan.textContent = ('0' + t.minutes).slice(-2)\r\n    secondsSpan.textContent = ('0' + t.seconds).slice(-2)\r\n  }\r\n  updateTimer()\r\n}\r\n\n\n//# sourceURL=webpack:///./js/timer.js?");

/***/ }),

/***/ "./js/config.json":
/*!************************!*\
  !*** ./js/config.json ***!
  \************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"plans\":[{\"name\":\"standart\",\"price\":9,\"text\":\"Monthly\"},{\"name\":\"premium\",\"price\":99,\"text\":\"Annually\"},{\"name\":\"lifetime\",\"price\":149,\"text\":\"up front\"}],\"timerEndDate\":\"05.06.2022 17:27\",\"testimonials\":[{\"name\":\"Pam Beesly\",\"text\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus.\",\"job\":\"Top Manager Happy Co\"},{\"name\":\"Max Henry\",\"text\":\"Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam. Aenean porta neque eget consequat fringilla.\",\"job\":\"Top Manager Happy Co\"},{\"name\":\"Ann Schrute\",\"text\":\"Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus.\",\"job\":\"CEO and CoFounder\"}],\"appStoreLink\":\"https://example.com\"}');\n\n//# sourceURL=webpack:///./js/config.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;