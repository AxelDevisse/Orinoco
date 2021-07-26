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

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiRequest\": () => (/* binding */ apiRequest),\n/* harmony export */   \"ajaxRequestPost\": () => (/* binding */ ajaxRequestPost),\n/* harmony export */   \"requestUrl\": () => (/* binding */ requestUrl)\n/* harmony export */ });\nvar requestUrl = \"http://localhost:3000/api/teddies/\"; // Liaison\n\nvar apiRequest = function apiRequest(param) {\n  return new Promise(function (resolve) {\n    var appel = new XMLHttpRequest();\n\n    appel.onload = function () {\n      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {\n        resolve(JSON.parse(this.responseText)); // console.log(\"Liaison API OK !\");\n      } else {\n        alert(\"Erreur du chargement de l'API...\");\n      }\n    };\n\n    appel.open(\"GET\", param); //GET pour recuperation données\n\n    appel.send();\n  });\n};\n\nvar ajaxRequestPost = function ajaxRequestPost(data, url) {\n  return new Promise(function (resolve, reject) {\n    var request = new XMLHttpRequest(); //retour de la requette si tout c'est bien passé\n\n    request.onreadystatechange = function () {\n      if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {\n        var response = JSON.parse(this.responseText);\n        resolve(response);\n      } else if (this.readyState == XMLHttpRequest.DONE && this.status != 201) {\n        reject(\"la requette:  \" + url + \" revoie une erreur: \" + this.status);\n      }\n    };\n\n    request.open(\"POST\", url);\n    request.setRequestHeader(\"Content-Type\", \"application/json\"); //Envoi au format JSON\n\n    request.send(JSON.stringify(data)); //data est un objet JS\n  });\n};\n\n\n\n//# sourceURL=webpack://front/./src/js/api.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createStructureOther)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/js/api.js\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _panier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panier.js */ \"./src/js/panier.js\");\n/* harmony import */ var _product_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.js */ \"./src/js/product.js\");\n\n\n\n\n\nif (window.location.pathname == \"/src/panier.html\") {\n  (0,_panier_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n}\n\nif (window.location.pathname == \"/src/produit.html\") {\n  (0,_product_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n} // DOM INDEX HTML\n\n\nif (window.location.pathname == \"/src/index.html\") {\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.apiRequest)(_api_js__WEBPACK_IMPORTED_MODULE_0__.requestUrl).then(function (response) {\n    createStructureIndex();\n    response.forEach(function (ours) {\n      var container = document.getElementById(\"container\");\n      var card = document.createElement(\"div\");\n      card.setAttribute(\"class\", \"card\");\n      container.appendChild(card);\n      var h3 = document.createElement(\"h1\");\n      h3.setAttribute(\"class\", \"index\");\n      h3.textContent = ours.name;\n      card.appendChild(h3);\n      var img = document.createElement(\"img\");\n      img.src = ours.imageUrl;\n      card.appendChild(img);\n      var pDescr = document.createElement(\"p\");\n      pDescr.textContent = ours.description;\n      card.appendChild(pDescr);\n      var price = document.createElement(\"p\");\n      price.setAttribute(\"class\", \"price\");\n      price.textContent = ours.price / 100 + \" €\";\n      card.appendChild(price);\n      var btn = document.createElement(\"a\");\n      btn.setAttribute('href', 'produit.html?id=' + ours._id);\n      btn.textContent = \"Voir\";\n      card.appendChild(btn);\n    });\n  });\n} // Structure is #root's header and then a container class :)\n\n\nfunction createStructureIndex() {\n  var app = document.getElementById(\"root\");\n  var header = document.createElement(\"header\");\n  header.setAttribute(\"class\", \"index\");\n  app.appendChild(header);\n  var nav = document.createElement(\"nav\");\n  var ul = document.createElement(\"ul\");\n  var li1 = document.createElement(\"li\");\n  var a1 = document.createElement(\"a\");\n  a1.href = \"index.html\";\n  a1.textContent = \"ACCUEIL\";\n  var li2 = document.createElement(\"li\");\n  var a2 = document.createElement(\"a\");\n  a2.href = \"panier.html\";\n  a2.textContent = \"MON PANIER\";\n  var logo = document.createElement(\"p\");\n  logo.textContent = \"Orinoco\";\n  ul.appendChild(logo);\n  var bContent = document.createElement(\"div\");\n  bContent.setAttribute(\"class\", \"header_content\");\n  var h2 = document.createElement(\"h2\");\n  h2.textContent = \"SOLDES D'ETE\";\n  var href = document.createElement(\"a\");\n  href.href = \"#container\";\n  href.textContent = \"J'EN PROFITE !\";\n  header.appendChild(nav);\n  nav.appendChild(ul);\n  ul.appendChild(li1);\n  li1.appendChild(a1);\n  ul.appendChild(li2);\n  li2.appendChild(a2);\n  header.appendChild(bContent);\n  bContent.appendChild(h2);\n  bContent.appendChild(href);\n  var root = document.getElementById(\"root\");\n  var container = document.createElement(\"div\");\n  container.setAttribute(\"id\", \"container\");\n  root.appendChild(container);\n}\n\nfunction createStructureOther() {\n  var app = document.getElementById(\"root\");\n  var header = document.createElement(\"header\");\n  header.setAttribute(\"class\", \"other\");\n  app.appendChild(header);\n  var nav = document.createElement(\"nav\");\n  var ul = document.createElement(\"ul\");\n  var li1 = document.createElement(\"li\");\n  var a1 = document.createElement(\"a\");\n  a1.href = \"index.html\";\n  a1.textContent = \"ACCUEIL\";\n  var li2 = document.createElement(\"li\");\n  var a2 = document.createElement(\"a\");\n  a2.href = \"panier.html\";\n  a2.textContent = \"MON PANIER\";\n  header.appendChild(nav);\n  nav.appendChild(ul);\n  ul.appendChild(li1);\n  li1.appendChild(a1);\n  ul.appendChild(li2);\n  li2.appendChild(a2);\n  var root = document.getElementById(\"root\");\n  var container = document.createElement(\"div\");\n  container.setAttribute(\"id\", \"container\");\n  root.appendChild(container);\n}\n\n//# sourceURL=webpack://front/./src/js/index.js?");

/***/ }),

/***/ "./src/js/panier.js":
/*!**************************!*\
  !*** ./src/js/panier.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPanierPage)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/js/index.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./src/js/api.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n // Page Mon panier\n\nfunction createPanierPage() {\n  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(); //header\n\n  var body = document.querySelector(\"body\");\n  body.style.textAlign = \"left\"; // Creation Div mon panier\n\n  var container = document.getElementById(\"container\");\n  container.style.display = \"block\";\n  var divPanier = document.createElement(\"div\");\n  divPanier.setAttribute(\"class\", \"panier\");\n  container.appendChild(divPanier);\n  var panierState = document.createElement(\"h1\");\n  panierState.setAttribute(\"class\", \"panierStatement\");\n  divPanier.appendChild(panierState); // On get le local storage\n\n  var items = localStorage.getItem(\"session\");\n  items = JSON.parse(items);\n  console.log(items); // Check si quelque chose dans le localStorage\n\n  if (items === null) {\n    panierState.textContent = \"Votre panier est vide !\";\n  } else {\n    // const labelChoice = [\"Prénom\",\"Nom\", \"Adresse\",\"Ville\", \"Email\"]\n    var createField = function createField(name, type, labels, required, pattern, placeholder) {\n      var label = document.createElement(\"label\");\n      var input = document.createElement(\"input\");\n      label.setAttribute(\"for\", name);\n      input.setAttribute(\"type\", type);\n      input.setAttribute(\"name\", name);\n      input.setAttribute(\"pattern\", pattern);\n      if (required) input.setAttribute(\"required\", required);\n      input.setAttribute(\"placeholder\", placeholder);\n      label.textContent = labels;\n      form.appendChild(label);\n      form.appendChild(input);\n      return input;\n    };\n\n    panierState.textContent = \"Recapitulatif de votre panier !\";\n    var ul = document.createElement(\"ul\");\n    divPanier.appendChild(ul);\n    var totalPrice = 0;\n\n    var _iterator = _createForOfIteratorHelper(items),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var allItems = _step.value;\n        var li = document.createElement(\"li\");\n        li.textContent = allItems.name + \" - \" + allItems.price / 100 + \" euros\";\n        ul.appendChild(li);\n        totalPrice += allItems.price / 100;\n      } //Affichage du montant total du panier\n\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    var panierPrice = document.createElement(\"h3\");\n    panierPrice.setAttribute(\"class\", \"total_price\");\n    divPanier.appendChild(panierPrice);\n    panierPrice.textContent = \"Montant total de votre panier : \" + totalPrice + \" euros\";\n    var btnClearStorage = document.createElement(\"button\");\n    btnClearStorage.textContent = \"Vider mon panier\";\n    divPanier.appendChild(btnClearStorage);\n    btnClearStorage.addEventListener(\"click\", function () {\n      localStorage.clear();\n    }); // Creation du formulaire\n\n    var form = document.createElement(\"form\"); // form.setAttribute(\"target\", \"#\")\n\n    container.appendChild(form);\n    var firstNameInput = createField(\"prenom\", \"text\", \"Prenom\", \"true\", \"[A-Za-z]{3,}\", \"Entrez votre pr\\xE9nom\");\n    var secondNameInput = createField(\"nom\", \"text\", \"Nom\", \"true\", \"[A-Za-z]{2,}\", \"Entrez votre nom\");\n    var adressInput = createField(\"adress\", \"text\", \"Adresse\", \"true\", \"[A-Za-z]{5,}\", \"Entrez votre adresse\");\n    var cityInput = createField(\"city\", \"text\", \"Ville\", \"true\", \"[A-Za-z]{3,}\", \"Entrez votre ville\");\n    var mailInput = createField(\"email\", \"email\", \"Email\", \"true\", \"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\", \"Entrez votre mail\");\n    var submit = document.createElement(\"input\");\n    submit.type = \"submit\";\n    submit.setAttribute(\"value\", \"Valider ma commande\");\n    submit.setAttribute(\"id\", \"submit\");\n    form.appendChild(submit);\n    form.addEventListener(\"submit\", function (event) {\n      event.preventDefault();\n      var order = {\n        contact: {\n          firstName: firstNameInput.value,\n          lastName: secondNameInput.value,\n          address: adressInput.value,\n          city: cityInput.value,\n          email: mailInput.value\n        },\n        products: items\n      };\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.ajaxRequestPost)(order, \"http://localhost:3000/api/teddies/order\").then(function (res) {\n        console.log(res);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://front/./src/js/panier.js?");

/***/ }),

/***/ "./src/js/product.js":
/*!***************************!*\
  !*** ./src/js/product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createProductPage)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/js/api.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/js/index.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar full_url = document.URL; // Get current url\n\nvar url_array = full_url.split('='); // Split the string into an array with / as separator\n\nvar currentUrlLocation = url_array[url_array.length - 1]; // Get the last part of the array (-1)\n\nfunction createProductPage() {\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.apiRequest)(\"http://localhost:3000/api/teddies/\" + currentUrlLocation).then(function (response) {\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n    createSinglePageProduct(response);\n  });\n}\n\nfunction createSinglePageProduct(response) {\n  var container = document.getElementById(\"container\");\n  var card = document.createElement(\"div\");\n  card.setAttribute(\"class\", \"content\");\n  container.appendChild(card);\n  var div1 = document.createElement(\"div\");\n  div1.setAttribute(\"class\", \"show1\");\n  var div2 = document.createElement(\"div\");\n  div2.setAttribute(\"class\", \"show2\");\n  card.appendChild(div1);\n  card.appendChild(div2);\n  var h3 = document.createElement(\"h1\");\n  h3.textContent = response.name;\n  div1.appendChild(h3);\n  var img = document.createElement(\"img\");\n  img.src = response.imageUrl;\n  div1.appendChild(img);\n  var pDescr = document.createElement(\"p\");\n  pDescr.textContent = response.description;\n  div2.appendChild(pDescr);\n  var price = document.createElement(\"p\");\n  price.setAttribute(\"class\", \"price\");\n  price.textContent = response.price / 100 + \" €\";\n  div2.appendChild(price);\n  var btnAddToCart = document.createElement(\"button\");\n  btnAddToCart.textContent = \"Ajouter au panier\";\n  div2.appendChild(btnAddToCart);\n  var select = document.createElement(\"select\");\n  div2.appendChild(select);\n  var color;\n  var colors = response.colors;\n\n  var _iterator = _createForOfIteratorHelper(colors),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      color = _step.value;\n      var colorOptions = document.createElement(\"option\");\n      select.appendChild(colorOptions);\n      colorOptions.value = color;\n      colorOptions.textContent = color;\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  btnAddToCart.addEventListener(\"click\", function () {\n    var panier = []; // Parse the serialized data back into an aray of objects\n\n    panier = JSON.parse(localStorage.getItem('session')) || []; // Push the new data (whether it be an object or anything else) onto the array\n\n    panier.push(response); // Re-serialize the array back into a string and store it in localStorage\n\n    localStorage.setItem('session', JSON.stringify(panier));\n  });\n}\n\n//# sourceURL=webpack://front/./src/js/product.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_wallpaper_1920_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/wallpaper_1920.jpg */ \"./src/images/wallpaper_1920.jpg\");\n/* harmony import */ var _dist_wallpaper_1200_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dist/wallpaper_1200.jpg */ \"./dist/wallpaper_1200.jpg\");\n/* harmony import */ var _images_wallpaper_2560_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/wallpaper_2560.jpg */ \"./src/images/wallpaper_2560.jpg\");\n/* harmony import */ var _dist_wallpaper_600_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dist/wallpaper_600.jpg */ \"./dist/wallpaper_600.jpg\");\n// Imports\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_wallpaper_1920_jpg__WEBPACK_IMPORTED_MODULE_2__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_dist_wallpaper_1200_jpg__WEBPACK_IMPORTED_MODULE_3__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_wallpaper_2560_jpg__WEBPACK_IMPORTED_MODULE_4__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_dist_wallpaper_600_jpg__WEBPACK_IMPORTED_MODULE_5__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\nhtml {\\n  scroll-behavior: smooth; }\\n\\nbody {\\n  margin: 0 auto;\\n  text-align: center;\\n  font-family: 'Dosis', sans-serif;\\n  background-color: white;\\n  height: 100vh; }\\n\\nheader {\\n  border-bottom: 4px solid #222;\\n  height: 99vh;\\n  margin: 0 auto;\\n  top: 0px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") center no-repeat;\\n  background-size: cover; }\\n  @media all and (max-width: 1200px) {\\n    header {\\n      background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n      background-size: cover; } }\\n  @media all and (min-width: 2560px) {\\n    header {\\n      background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") center no-repeat;\\n      background-size: cover; } }\\n  @media all and (max-width: 600px) {\\n    header {\\n      background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") center no-repeat;\\n      height: 50vh;\\n      border-bottom: 0px; }\\n      header .header_content {\\n        display: none; } }\\n\\nheader.other {\\n  background-image: none;\\n  height: 50px; }\\n\\n.header_content {\\n  position: absolute;\\n  position: absolute;\\n  /* postulat de départ */\\n  top: 70%;\\n  left: 50%;\\n  /* à 50%/50% du parent référent */\\n  transform: translate(-50%, -50%);\\n  color: white;\\n  font-size: 1.7em;\\n  border-radius: 5px; }\\n  .header_content a {\\n    background-color: rgba(0, 0, 0, 0.6);\\n    padding: 7px 15px;\\n    color: white;\\n    text-decoration: none; }\\n\\n#container {\\n  display: flex;\\n  justify-content: space-evenly;\\n  flex-wrap: wrap;\\n  margin: 0% 10% 5% 10%;\\n  padding-top: 10%; }\\n\\n.card {\\n  max-width: 300px;\\n  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.2);\\n  border-radius: 5px;\\n  overflow: hidden;\\n  margin: 1rem;\\n  background-color: rgba(255, 255, 255, 0.5);\\n  height: 450px; }\\n\\n.card a, .card button, .content button {\\n  display: block;\\n  margin: 0 auto;\\n  cursor: pointer;\\n  margin-bottom: 15px;\\n  line-height: 40px;\\n  border: 0px;\\n  width: 50%;\\n  height: 40px;\\n  color: black;\\n  font-size: 1.1em;\\n  font-family: \\\"Dosis\\\", sans-serif;\\n  font-weight: bold;\\n  border-radius: 5px;\\n  text-decoration: none;\\n  background-image: linear-gradient(120deg, #dd865b 0%, rgba(208, 158, 107, 0.5) 100%); }\\n\\n.bigger {\\n  height: 500px; }\\n\\nh1.index {\\n  background-image: linear-gradient(120deg, #dd865b 0%, rgba(208, 158, 107, 0.5) 100%);\\n  margin-top: 0;\\n  padding-bottom: 1rem;\\n  padding-top: 1rem;\\n  font-weight: bold;\\n  font-family: 'Dancing Script', cursive; }\\n\\nimg {\\n  max-height: 150px;\\n  border-radius: 5px; }\\n\\np {\\n  padding: 0 1rem 0 1rem; }\\n\\np.price {\\n  font-weight: bold;\\n  font-size: 1.5em;\\n  margin-top: 3px;\\n  color: black; }\\n\\nselect {\\n  text-align: center;\\n  border: 0px;\\n  margin: 0 auto;\\n  text-align: center;\\n  margin-bottom: 30px;\\n  display: block;\\n  font-size: 0.9em;\\n  padding-bottom: 5px;\\n  padding-top: 5px;\\n  color: rgba(0, 0, 0, 0.8);\\n  font-weight: bold;\\n  border-radius: 5px;\\n  text-decoration: none;\\n  background-image: linear-gradient(120deg, #dd865b 0%, rgba(208, 158, 107, 0.5) 100%); }\\n\\nnav {\\n  width: 100%;\\n  height: 70px;\\n  margin: 0 auto;\\n  background-color: white;\\n  position: fixed;\\n  border-bottom: 1px solid #222;\\n  z-index: 4; }\\n  nav ul {\\n    list-style-type: none;\\n    display: flex;\\n    padding-left: 0px;\\n    text-align: center;\\n    margin: 0 auto;\\n    width: 50%;\\n    height: 70px;\\n    align-items: center;\\n    justify-content: center; }\\n    nav ul li {\\n      text-decoration: none;\\n      border: 1px solid #222;\\n      border-radius: 5px;\\n      height: 35px;\\n      margin-left: 5%;\\n      margin-top: 5px;\\n      display: flex;\\n      justify-content: center;\\n      flex-direction: column;\\n      background-color: rgba(0, 0, 0, 0); }\\n      nav ul li a {\\n        text-decoration: none;\\n        color: black;\\n        font-size: 1em;\\n        font-weight: bold;\\n        padding: 0px 15px; }\\n\\n.name, .item_price {\\n  margin-bottom: 0px; }\\n\\n.panierStatement {\\n  text-decoration: underline; }\\n\\n.content {\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  border: 1px solid rgba(0, 0, 0, 0.2); }\\n  .content h1 {\\n    font-family: 'Dancing Script', cursive;\\n    font-size: 3em; }\\n\\n.show1 img {\\n  max-height: 300px;\\n  padding-right: 20px;\\n  padding-bottom: 30px;\\n  max-width: 100%; }\\n\\n.show1 {\\n  max-width: 50%; }\\n\\n.show2 {\\n  padding: 20% 0% 20% 0%;\\n  max-width: 50%; }\\n\\nnav p {\\n  font-family: 'Yeon Sung', cursive;\\n  font-size: 2.5em;\\n  font-weight: bold;\\n  margin: 0; }\\n\\nli {\\n  text-align: left; }\\n\\nform {\\n  display: flex;\\n  flex-direction: column;\\n  max-width: 200px; }\\n\\ninput[type=\\\"submit\\\" i] {\\n  background-color: rgba(30, 155, 51, 0.8);\\n  margin-top: 10px;\\n  padding: 7px;\\n  font-weight: bold; }\\n\\nfooter {\\n  display: flex;\\n  height: 75px;\\n  width: 100%;\\n  color: white;\\n  background-color: black;\\n  text-align: center; }\\n  footer p {\\n    margin: auto; }\\n\\n.panier {\\n  margin-bottom: 15px; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://front/./src/sass/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://front/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://front/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./dist/wallpaper_1200.jpg":
/*!*********************************!*\
  !*** ./dist/wallpaper_1200.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/wallpaper_1200.jpg\");\n\n//# sourceURL=webpack://front/./dist/wallpaper_1200.jpg?");

/***/ }),

/***/ "./dist/wallpaper_600.jpg":
/*!********************************!*\
  !*** ./dist/wallpaper_600.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/wallpaper_600.jpg\");\n\n//# sourceURL=webpack://front/./dist/wallpaper_600.jpg?");

/***/ }),

/***/ "./src/images/wallpaper_1920.jpg":
/*!***************************************!*\
  !*** ./src/images/wallpaper_1920.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/wallpaper_1920.jpg\");\n\n//# sourceURL=webpack://front/./src/images/wallpaper_1920.jpg?");

/***/ }),

/***/ "./src/images/wallpaper_2560.jpg":
/*!***************************************!*\
  !*** ./src/images/wallpaper_2560.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/wallpaper_2560.jpg\");\n\n//# sourceURL=webpack://front/./src/images/wallpaper_2560.jpg?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://front/./src/sass/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://front/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://front/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://front/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://front/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "dist";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;