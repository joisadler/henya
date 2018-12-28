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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascripts/about.js":
/*!**********************************!*\
  !*** ./src/javascripts/about.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {};

/***/ }),

/***/ "./src/javascripts/faq.js":
/*!********************************!*\
  !*** ./src/javascripts/faq.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var faqCircles = document.querySelectorAll('.faq-circle');

  /* eslint-disable no-param-reassign */
  faqCircles.forEach(function (circle) {
    var questionContainer = circle.parentElement;

    questionContainer.addEventListener('click', function (event) {
      if (!circle.parentElement.classList.contains('faq-action-container')) {
        var question = event.currentTarget;
        var answer = question.nextElementSibling;
        var circleIsRotated = circle.style.transform === 'rotate(90deg)';

        if (circleIsRotated) {
          circle.style.transform = 'rotate(0deg)';
          if (answer) answer.style.display = 'none';
        } else {
          circle.style.transform = 'rotate(90deg)';
          if (answer) answer.style.display = 'flex';
        }
      }
    });
  });

  var moreQuestions = document.getElementById('more-questions');
  moreQuestions.firstElementChild.firstElementChild.style.transform = 'rotate(90deg)';
  var hiddenQuestions = document.querySelectorAll('.hidden-question');
  moreQuestions.addEventListener('click', function () {
    hiddenQuestions.forEach(function (q) {
      q.style.display = 'flex';
      moreQuestions.style.display = 'none';
      var hideQuestions = document.getElementById('hide-questions');
      hideQuestions.style.display = 'flex';
    });
  });

  var hideQuestions = document.getElementById('hide-questions');
  hideQuestions.firstElementChild.firstElementChild.style.transform = 'rotate(270deg)';
  hideQuestions.style.display = 'none';
  hideQuestions.addEventListener('click', function () {
    hiddenQuestions.forEach(function (q) {
      q.style.display = 'none';
      moreQuestions.style.display = 'flex';
      hideQuestions.style.display = 'none';
    });
    var answers = document.querySelectorAll('.answer-container');
    answers.forEach(function (a) {
      if (a.style.display === 'flex') {
        a.style.display = 'none';
        a.previousElementSibling.firstElementChild.style.transform = 'rotate(0deg)';
      }
    });
  });

  var faqHeaders = document.querySelectorAll(['.question-container', '.faq-action-container']);
  faqHeaders.forEach(function (header) {
    header.addEventListener('mouseover', function (e) {
      var h = e.currentTarget;
      var circle = h.firstElementChild;
      circle.style.boxShadow = '0 0 1vw #FFF';
    });
    header.addEventListener('mouseout', function (e) {
      var h = e.currentTarget;
      var circle = h.firstElementChild;
      circle.style.boxShadow = 'none';
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
  var containerHeight = container.offsetHeight;

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
  var socialLinks = document.querySelectorAll('.home-social-link');
  var facebookLink = document.querySelector('.home-facebook-link');
  var instagramLink = document.querySelector('.home-instagram-link');
  var whatsAppLink = document.querySelector('.home-whatsapp-link');
  var mailLink = document.querySelector('.home-mail-link');
  var linkedinLink = document.querySelector('.home-linkedin-link');
  var topbarMailIcon = document.getElementById('topbar-mail-icon');
  var topbarFacebookIcon = document.getElementById('topbar-facebook-icon');
  var topbarInstagramIcon = document.getElementById('topbar-instagram-icon');
  var topbarLinkedinIcon = document.getElementById('topbar-linkedin-icon');

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Mobile devices
    facebookLink.addEventListener('click', function () {
      setTimeout(function () {
        window.location = 'https://www.facebook.com/henyadesign/';
      }, 25);
      window.location = 'fb://page/2036302739931258';
    });
    instagramLink.addEventListener('click', function () {
      setTimeout(function () {
        window.location = 'https://www.instagram.com/henya_design/';
      }, 25);
      window.location = 'instagram://user?username=henya_design';
    });
  }

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

  socialLinks.forEach(function (link) {
    link.addEventListener('mouseover', function () {
      link.style.boxShadow = '0 0 1vw white';
    });
    link.addEventListener('mouseleave', function () {
      link.style.boxShadow = 'none';
    });
  });

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

exports.default = function () {};

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

var _portfolio = __webpack_require__(/*! ./portfolio */ "./src/javascripts/portfolio.js");

var _portfolio2 = _interopRequireDefault(_portfolio);

var _toggleFullScreen = __webpack_require__(/*! ./toggleFullScreen */ "./src/javascripts/toggleFullScreen.js");

var _toggleFullScreen2 = _interopRequireDefault(_toggleFullScreen);

var _about = __webpack_require__(/*! ./about */ "./src/javascripts/about.js");

var _about2 = _interopRequireDefault(_about);

var _testimonials = __webpack_require__(/*! ./testimonials */ "./src/javascripts/testimonials.js");

var _testimonials2 = _interopRequireDefault(_testimonials);

var _faq = __webpack_require__(/*! ./faq */ "./src/javascripts/faq.js");

var _faq2 = _interopRequireDefault(_faq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _home2.default)();
(0, _homeAnimation2.default)();
(0, _topbar2.default)();
(0, _navbar2.default)();
(0, _mobileMenu2.default)();
(0, _homeSocialLinks2.default)();
(0, _services2.default)();
(0, _portfolio2.default)();
(0, _toggleFullScreen2.default)();
(0, _about2.default)();
(0, _testimonials2.default)();
(0, _faq2.default)();

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

/***/ "./src/javascripts/portfolio.js":
/*!**************************************!*\
  !*** ./src/javascripts/portfolio.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function () {
  var portfolio = document.getElementById('portfolio');
  var slider = document.querySelector('.slider');
  var portfolioImages = [].concat(_toConsumableArray(document.querySelectorAll('.portfolio-image')));
  var portfolioImagesUrls = portfolioImages.map(function (i) {
    return i.src;
  });
  var prevButton = portfolio.querySelector('.prev');
  var nextButton = portfolio.querySelector('.next');
  var prevFullScreenButton = slider.querySelector('.slider > .prev');
  var nextFullScreenButton = slider.querySelector('.slider > .next');
  var position = 0;

  var moveRight = function moveRight() {
    position += 1;
    if (position === portfolioImagesUrls.length) position = 0;
    slider.style.backgroundImage = 'url(' + portfolioImagesUrls[position] + ')';
  };

  var moveLeft = function moveLeft() {
    position -= 1;
    if (position < 0) position = portfolioImagesUrls.length - 1;
    slider.style.backgroundImage = 'url(' + portfolioImagesUrls[position] + ')';
  };

  slider.style.backgroundImage = 'url(' + portfolioImagesUrls[position] + ')';

  prevButton.addEventListener('click', moveLeft);
  nextButton.addEventListener('click', moveRight);

  prevFullScreenButton.addEventListener('click', function (e) {
    e.stopPropagation();
    moveLeft();
  });
  nextFullScreenButton.addEventListener('click', function (e) {
    e.stopPropagation();
    moveRight();
  });

  if (typeof document.isFullscreen === 'undefined') {
    document.isFullscreen = function () {
      return !(document.fullScreenElement !== undefined && document.fullScreenElement === null || document.msFullscreenElement !== undefined && document.msFullscreenElement === null || document.mozFullScreen !== undefined && !document.mozFullScreen || document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen);
    };
  }

  if (!/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.addEventListener('keydown', function (event) {
      if (document.isFullscreen()) {
        var key = event.key;
        switch (key) {
          case 'ArrowLeft':
            moveLeft();
            break;
          case 'ArrowRight':
            moveRight();
            break;
          case 'ArrowUp':
            moveLeft();
            break;
          case 'ArrowDown':
            moveRight();
            break;
          case 'Escape':
            if (document.cancelFullScreen) {
              document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
              document.webkitCancelFullScreen();
            }
            break;
          default:
            break;
        }
      }
    });
  }

  slider.addEventListener('click', function (e) {
    var s = e.target;
    if (s.requestFullscreen) {
      s.requestFullscreen();
    } else if (s.mozRequestFullScreen) {
      s.mozRequestFullScreen();
    } else if (s.webkitRequestFullScreen) {
      s.webkitRequestFullScreen();
    }
    slider.addEventListener('click', function () {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    });
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
  var vw = window.screen.width / 100;
  var wrapper5 = serviceWrappers[4];
  var wrapper6 = serviceWrappers[5];
  var wrapper7 = serviceWrappers[6];
  var wrapper8 = serviceWrappers[7];

  /* eslint-disable no-param-reassign */
  serviceWrappers.forEach(function (wrapper) {
    var width = wrapper.offsetWidth;
    wrapper.style.height = width + 'px';
  });

  window.addEventListener('resize', function () {
    setTimeout(function () {
      var container = document.querySelector('.services-container');
      var containerWidth = container.offsetWidth;
      if (window.screen.height >= window.screen.width) {
        // portrait
        if (window.screen.width < 768) {
          // mobile portrait
          serviceWrappers.forEach(function (wrapper) {
            wrapper.style.width = containerWidth * 0.5 - 2.5 * vw + 'px';
            wrapper.style.height = wrapper.offsetWidth + 'px';
            wrapper5.style.marginBottom = '5vw';
            wrapper6.style.marginBottom = '5vw';
            wrapper7.style.marginLeft = '0';
            wrapper8.style.marginRight = '0';
            wrapper7.style.marginBottom = '0';
            wrapper8.style.marginBottom = '0';
          });
        } else if (window.screen.width < 1280) {
          // tablet portrait
          serviceWrappers.forEach(function (wrapper) {
            wrapper.style.width = containerWidth * 0.33 - 3.3 * vw + 'px';
            wrapper.style.height = wrapper.offsetWidth + 'px';
            wrapper7.style.marginLeft = '17.5%';
            wrapper8.style.marginRight = '17.5%';
            wrapper5.style.marginBottom = '5vw';
            wrapper6.style.marginBottom = '5vw';
            wrapper7.style.marginBottom = '0';
            wrapper8.style.marginBottom = '0';
          });
        }
      }
      if (window.screen.height < window.screen.width) {
        // landscape
        if (window.screen.width < 768) {
          // mobile landscape
          serviceWrappers.forEach(function (wrapper) {
            wrapper.style.width = containerWidth * 0.33 - 3.3 * vw + 'px';
            wrapper.style.height = wrapper.offsetWidth + 'px';
            wrapper7.style.marginLeft = '17.5%';
            wrapper8.style.marginRight = '17.5%';
            wrapper5.style.marginBottom = '5vw';
            wrapper6.style.marginBottom = '5vw';
            wrapper7.style.marginBottom = '0';
            wrapper8.style.marginBottom = '0';
          });
        } else if (window.screen.width < 1280) {
          // tablet landscape
          serviceWrappers.forEach(function (wrapper) {
            wrapper.style.width = containerWidth * 0.25 - 3.75 * vw + 'px';
            wrapper.style.height = wrapper.offsetWidth + 'px';
            wrapper7.style.marginLeft = '0';
            wrapper8.style.marginRight = '0';
            wrapper5.style.marginBottom = '0';
            wrapper6.style.marginBottom = '0';
            wrapper7.style.marginBottom = '0';
            wrapper8.style.marginBottom = '0';
          });
        } else if (window.screen.width >= 1280) {
          // big tablet landscape
          serviceWrappers.forEach(function (wrapper) {
            wrapper.style.width = containerWidth * 0.25 - 3.75 * vw + 'px';
            wrapper.style.height = wrapper.offsetWidth + 'px';
            wrapper7.style.marginLeft = '0';
            wrapper8.style.marginRight = '0';
            wrapper5.style.marginBottom = '0';
            wrapper6.style.marginBottom = '0';
            wrapper7.style.marginBottom = '0';
            wrapper8.style.marginBottom = '0';
          });
        }
      }
    }, 200);
  });
};

/***/ }),

/***/ "./src/javascripts/testimonials.js":
/*!*****************************************!*\
  !*** ./src/javascripts/testimonials.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var testimonialImages = document.querySelectorAll('.testimonial-image');
  /* eslint-disable no-param-reassign */
  testimonialImages.forEach(function (i) {
    var width = i.offsetWidth;
    i.style.height = width + 'px';
  });
  window.addEventListener('resize', function () {
    setTimeout(function () {
      testimonialImages.forEach(function (i) {
        var width = i.offsetWidth;
        i.style.height = width + 'px';
      });
    }, 200);
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