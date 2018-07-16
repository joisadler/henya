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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascripts/carousel.js":
/*!*************************************!*\
  !*** ./src/javascripts/carousel.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function () {
  console.log('hello!'); // eslint-disable-line
  var carousel = document.getElementById('carousel');
  // const carouselWrapper = document.querySelector('.carousel-wrapper');
  var gallery = document.getElementById('gallery');
  var galleryItems = gallery.querySelectorAll('.gallery-item');
  var images = [].concat(_toConsumableArray(gallery.querySelectorAll('img')));
  // const image = images[0];
  var prevButton = carousel.querySelector('.prev');
  var nextButton = carousel.querySelector('.next');
  var currentImageNumber = Math.floor((1 + galleryItems.length) / 2);
  var vw = document.documentElement.clientWidth / 100;
  var galleryWidth = 90 * vw;
  var position = galleryWidth * (currentImageNumber - 1);
  gallery.style.marginLeft = '-' + position + 'px';

  window.addEventListener('resize', function () {
    vw = document.documentElement.clientWidth / 100;
    galleryWidth = 90 * vw;
    position = galleryWidth * (currentImageNumber - 1);
    gallery.style.marginLeft = '-' + position + 'px';
  }, true);

  [].concat(_toConsumableArray(galleryItems)).forEach(function (item) {
    item.style.width = '90vw'; // eslint-disable-line
  });

  var moveRight = function moveRight() {
    if (currentImageNumber === galleryItems.length) {
      currentImageNumber = 0;
    }
    if (currentImageNumber < galleryItems.length) {
      currentImageNumber += 1;
    }
    position = galleryWidth * (currentImageNumber - 1);
    gallery.style.marginLeft = '-' + position + 'px';
  };

  var moveLeft = function moveLeft() {
    if (currentImageNumber === 1) {
      currentImageNumber = galleryItems.length + 1;
    }
    if (currentImageNumber > 1) {
      currentImageNumber -= 1;
    }
    position = galleryWidth * (currentImageNumber - 1);
    gallery.style.marginLeft = '-' + position + 'px';
  };

  prevButton.addEventListener('click', moveLeft, true);
  nextButton.addEventListener('click', moveRight, true);

  images.forEach(function (i) {
    i.addEventListener('click', function (e) {
      var img = e.target;
      if (img.requestFullscreen) {
        img.requestFullscreen();
      } else if (img.mozRequestFullScreen) {
        img.mozRequestFullScreen();
      } else if (img.webkitRequestFullScreen) {
        img.webkitRequestFullScreen();
      }
      img.addEventListener('click', function () {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      });
    });
  });
};

/***/ }),

/***/ "./src/javascripts/home-social-links.js":
/*!**********************************************!*\
  !*** ./src/javascripts/home-social-links.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var fbLink = document.querySelector('.home-facebook-link');
  var instaLink = document.querySelector('.home-instagram-link');
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // on desktop
    fbLink.setAttribute('href', 'https://www.facebook.com/henyadesign/');
    instaLink.setAttribute('href', 'https://www.instagram.com/henya_design/');
  }
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    // on IOS
    fbLink.setAttribute('href', 'fb://page?id=2036302739931258');
  }
};

/***/ }),

/***/ "./src/javascripts/index.js":
/*!**********************************!*\
  !*** ./src/javascripts/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _topbar = __webpack_require__(/*! ./topbar */ "./src/javascripts/topbar.js");

var _topbar2 = _interopRequireDefault(_topbar);

var _mobileMenu = __webpack_require__(/*! ./mobile-menu */ "./src/javascripts/mobile-menu.js");

var _mobileMenu2 = _interopRequireDefault(_mobileMenu);

var _homeSocialLinks = __webpack_require__(/*! ./home-social-links */ "./src/javascripts/home-social-links.js");

var _homeSocialLinks2 = _interopRequireDefault(_homeSocialLinks);

var _carousel = __webpack_require__(/*! ./carousel */ "./src/javascripts/carousel.js");

var _carousel2 = _interopRequireDefault(_carousel);

var _toggleFullScreen = __webpack_require__(/*! ./toggleFullScreen */ "./src/javascripts/toggleFullScreen.js");

var _toggleFullScreen2 = _interopRequireDefault(_toggleFullScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _topbar2.default)();
(0, _mobileMenu2.default)();
(0, _homeSocialLinks2.default)();
(0, _carousel2.default)();
(0, _toggleFullScreen2.default)();

/***/ }),

/***/ "./src/javascripts/mobile-menu.js":
/*!****************************************!*\
  !*** ./src/javascripts/mobile-menu.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  document.body.addEventListener('click', function (event) {
    var target = event.target;
    var ticker = document.getElementById('hidden-menu-ticker');
    var label = document.querySelector('.btn-menu');
    var span1 = document.querySelector('.first');
    var span2 = document.querySelector('.second');
    var span3 = document.querySelector('.third');
    var menuIsOpened = ticker.checked;

    function closeMenu() {
      ticker.checked = false;
    }

    if (menuIsOpened && target !== ticker && target !== label && target !== span1 && target !== span2 && target !== span3) {
      closeMenu();
    }
  });
};

/***/ }),

/***/ "./src/javascripts/toggleFullScreen.js":
/*!*********************************************!*\
  !*** ./src/javascripts/toggleFullScreen.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var doc = window.document;
  var docEl = doc.documentElement;
  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
};

/***/ }),

/***/ "./src/javascripts/topbar.js":
/*!***********************************!*\
  !*** ./src/javascripts/topbar.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function () {
  var topbarContacts = document.querySelectorAll('.topbar-contact-text');
  [].concat(_toConsumableArray(topbarContacts)).forEach(function (contact) {
    // Сheck if the device is a desktop
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      contact.style.pointerEvents = 'none'; // eslint-disable-line no-param-reassign
    }
  });
};

/***/ }),

/***/ "./src/stylesheets/main.scss":
/*!***********************************!*\
  !*** ./src/stylesheets/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************************************!*\
  !*** multi ./src/javascripts/index.js ./src/stylesheets/main.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/javascripts/index.js */"./src/javascripts/index.js");
module.exports = __webpack_require__(/*! ./src/stylesheets/main.scss */"./src/stylesheets/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map