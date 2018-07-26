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

/***/ "./src/javascripts/home-animation.js":
/*!*******************************************!*\
  !*** ./src/javascripts/home-animation.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var homepage = document.getElementById('home');
  var container = document.querySelector('.home-container');
  var headline = document.querySelector('.home-headline');
  var subheadline = document.querySelector('.home-subheadline');
  var illustration = document.querySelector('.home-illustration');
  var action = document.querySelector('.home-action');
  var homepageHeight = homepage.offsetHeight;
  var containerHeight = container.offsetHeight;

  // const animateHomepage = () => {
  //   homepage.classList.remove('full-screen');
  //   const bottom = homepageHeight * 0.2;
  //   const step = bottom / 50;
  //   let i = 0;

  //   const timer = setInterval(() => {
  //     i += step;
  //     homepage.style.height = `${homepageHeight - i}px`;
  //     if (i >= bottom) {
  //       clearInterval(timer);
  //     }
  //   }, 1);

  //   setTimeout(() => {
  //     let j = 0;
  //     const timer2 = setInterval(() => {
  //       j += step;
  //       homepage.style.height = `${(homepageHeight * 0.8) + j}px`;
  //       if (j >= bottom) {
  //         clearInterval(timer2);
  //       }
  //     }, 1);
  //   }, 1000);
  // };

  var animateHomepage = function animateHomepage() {
    homepage.classList.remove('full-screen');
    var bottom = containerHeight * 0.25;
    var step = bottom / 50;
    var i = 0;
    container.style.height = containerHeight - i + 'px';

    var timer = setInterval(function () {
      i += step;
      container.style.height = containerHeight - i + 'px';
      if (i >= bottom) {
        clearInterval(timer);
      }
    }, 1.5);
  };

  var animateAction = function animateAction() {
    var i = 100;
    var j = 0;
    var timer = setInterval(function () {
      i -= 2;
      j = (Math.abs(i - 100) / 100).toFixed(1);
      action.style.top = i + 'px';
      action.style.opacity = '' + j;
      if (i === 0) {
        clearInterval(timer);
      }
    }, 10);
    setTimeout(function () {
      animateHomepage();
    }, 500);
  };

  var animateSubheadline = function animateSubheadline() {
    var i = 3000;
    var j = 0;
    var timer = setInterval(function () {
      i -= 20;
      j += 0.0067;
      subheadline.style.left = i + 'px';
      subheadline.style.opacity = '' + j.toFixed(1);
      if (i === 0) {
        clearInterval(timer);
      }
    }, 7);
    setTimeout(animateAction, 2000);
  };

  var animateIllustration = function animateIllustration() {
    var i = 0;
    var timer = setInterval(function () {
      i += 1;
      illustration.style.opacity = '' + (i / 50).toFixed(1);
      if (i === 50) {
        clearInterval(timer);
      }
    }, 20);
    setTimeout(animateSubheadline, 500);
  };

  var animateHeadline = function animateHeadline() {
    var i = 0;
    var timer1 = setInterval(function () {
      i += 1;
      headline.style.opacity = '' + (i / 50).toFixed(1);
      if (i === 50) {
        clearInterval(timer1);
      }
    }, 20);

    setTimeout(function () {
      var j = 0.4;
      var timer2 = setInterval(function () {
        j -= 0.005;
        headline.style.marginTop = containerHeight * j + 'px';
        if (j < 0.01) {
          clearInterval(timer2);
        }
      }, 12);
    }, 1000);

    setTimeout(animateIllustration, 1000 + 960);
  };

  if (!/Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // device is a desktop
    animateHeadline();
    window.addEventListener('orientationchange', function () {
      homepage.style.height = '100%';
      homepage.style.minHeight = '100%';
    });
  } else {
    headline.style.opacity = '1';
    headline.style.marginTop = '0';
    illustration.style.opacity = '1';
    subheadline.style.left = '0';
    subheadline.style.opacity = '1';
    action.style.top = '0';
    action.style.opacity = '1';
  }
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
  var topbarLinks = document.querySelectorAll('.topbar-link');
  var facebookLink = document.querySelector('.home-facebook-link');
  var instagramLink = document.querySelector('.home-instagram-link');
  var whatsAppLink = document.querySelector('.home-whatsapp-link');
  var mailLink = document.querySelector('.home-mail-link');
  var linkedinLink = document.querySelector('.home-linkedin-link');
  var topbarMailIcon = document.getElementById('topbar-mail-icon');
  var topbarFacebookIcon = document.getElementById('topbar-facebook-icon');
  var topbarInstagramIcon = document.getElementById('topbar-instagram-icon');
  var topbarLinkedinIcon = document.getElementById('topbar-linkedin-icon');

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Desktop devices
    facebookLink.setAttribute('href', 'https://www.facebook.com/henyadesign/');
    instagramLink.setAttribute('href', 'https://www.instagram.com/henya_design/');
    mailLink.setAttribute('href', '#contact');

    /* eslint-disable no-return-assign, no-param-reassign */
    topbarLinks.forEach(function (link) {
      link.addEventListener('mouseover', function () {
        link.style.color = '#CB74C0';
      });
    });
    topbarLinks.forEach(function (link) {
      link.addEventListener('mouseleave', function () {
        link.style.color = '#FFF';
      });
    });

    mailLink.addEventListener('mouseover', function () {
      topbarMailIcon.style.color = '#CB74C0';
    });
    mailLink.addEventListener('mouseleave', function () {
      topbarMailIcon.style.color = '#FFF';
    });

    facebookLink.addEventListener('mouseover', function () {
      topbarFacebookIcon.style.color = '#CB74C0';
    });
    facebookLink.addEventListener('mouseleave', function () {
      topbarFacebookIcon.style.color = '#FFF';
    });

    instagramLink.addEventListener('mouseover', function () {
      topbarInstagramIcon.style.color = '#CB74C0';
    });
    instagramLink.addEventListener('mouseleave', function () {
      topbarInstagramIcon.style.color = '#FFF';
    });

    linkedinLink.addEventListener('mouseover', function () {
      topbarLinkedinIcon.style.color = '#CB74C0';
    });
    linkedinLink.addEventListener('mouseleave', function () {
      topbarLinkedinIcon.style.color = '#FFF';
    });
  }

  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    // IOS devices
    facebookLink.setAttribute('href', 'fb://page?id=2036302739931258');
  }

  if (/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // mobile phones only
    whatsAppLink.style.display = 'block';
  }
};

/***/ }),

/***/ "./src/javascripts/home.js":
/*!*********************************!*\
  !*** ./src/javascripts/home.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var subheadlines = document.querySelectorAll('.home-subheadline h2, .home-action h2');
  if (/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // device is a mobile phone
    /* eslint-disable no-return-assign, no-param-reassign */
    subheadlines.forEach(function (h2) {
      return h2.style.fontSize = '6.4vmin';
    });
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


var _home = __webpack_require__(/*! ./home */ "./src/javascripts/home.js");

var _home2 = _interopRequireDefault(_home);

var _homeAnimation = __webpack_require__(/*! ./home-animation */ "./src/javascripts/home-animation.js");

var _homeAnimation2 = _interopRequireDefault(_homeAnimation);

var _topbar = __webpack_require__(/*! ./topbar */ "./src/javascripts/topbar.js");

var _topbar2 = _interopRequireDefault(_topbar);

var _navbar = __webpack_require__(/*! ./navbar */ "./src/javascripts/navbar.js");

var _navbar2 = _interopRequireDefault(_navbar);

var _mobileMenu = __webpack_require__(/*! ./mobile-menu */ "./src/javascripts/mobile-menu.js");

var _mobileMenu2 = _interopRequireDefault(_mobileMenu);

var _homeSocialLinks = __webpack_require__(/*! ./home-social-links */ "./src/javascripts/home-social-links.js");

var _homeSocialLinks2 = _interopRequireDefault(_homeSocialLinks);

var _services = __webpack_require__(/*! ./services */ "./src/javascripts/services.js");

var _services2 = _interopRequireDefault(_services);

var _carousel = __webpack_require__(/*! ./carousel */ "./src/javascripts/carousel.js");

var _carousel2 = _interopRequireDefault(_carousel);

var _toggleFullScreen = __webpack_require__(/*! ./toggleFullScreen */ "./src/javascripts/toggleFullScreen.js");

var _toggleFullScreen2 = _interopRequireDefault(_toggleFullScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _home2.default)();
(0, _homeAnimation2.default)();
(0, _topbar2.default)();
(0, _navbar2.default)();
(0, _mobileMenu2.default)();
(0, _homeSocialLinks2.default)();
(0, _services2.default)();
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

/***/ "./src/javascripts/navbar.js":
/*!***********************************!*\
  !*** ./src/javascripts/navbar.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var menuButton = document.querySelector('.btn-menu');
  var ticker = document.querySelector('.hidden-menu-ticker');

  if (/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // device is a mobile phone
    if (screen.width >= 768) {
      menuButton.style.top = 'calc(15.5vh / 3)';
    }
  }

  ticker.addEventListener('change', function () {
    if (ticker.checked) {
      menuButton.style.top = 0;
    } else if (/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // device is a mobile phone
      if (screen.width >= 768) {
        menuButton.style.top = 'calc(15.5vh / 3)';
      }
      menuButton.style.top = '6vmin';
    } else {
      // device is a tablet
      menuButton.style.top = 'calc((15.5vh / 3) + 4.5vh)';
    }
  });
};

/***/ }),

/***/ "./src/javascripts/services.js":
/*!*************************************!*\
  !*** ./src/javascripts/services.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var serviceWrappers = document.querySelectorAll('.service-wrapper');

  serviceWrappers.forEach(function (wrapper) {
    var width = wrapper.offsetWidth;
    wrapper.style.height = width + 'px';
    window.addEventListener('orientationchange', function () {
      if (window.screen.height > window.screen.width) {
        // orientation is portrait
        console.log('p');
        wrapper.style.width = window.screen.width * 0.425 + 'px';
      } else if (window.screen.height < window.screen.width) {
        // orientation is landscape
        console.log('l');
        wrapper.style.width = window.screen.width * 0.275 + 'px';
      }
      wrapper.style.height = wrapper.offsetWidth + 'px';
    });
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
  var topbar = document.getElementById('home-topbar');
  var navbar = document.getElementById('home-navbar');
  if (/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // device is a mobile phone
    topbar.style.display = 'none';
    navbar.style.height = '20%';
  }

  var topbarContacts = document.querySelectorAll('.topbar-contact-text');
  [].concat(_toConsumableArray(topbarContacts)).forEach(function (contact) {
    // Сheck if the device is a desktop
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // device is a desktop
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