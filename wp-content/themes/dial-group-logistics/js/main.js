"use strict";

new WOW().init();
"use strict";

;

(function () {
  if (document.getElementById('map')) {
    var init = function init() {
      if (!myMap) {
        myMap = new ymaps.Map('map', {
          center: currentCoord,
          zoom: 17
        });
        myPlacemark = new ymaps.Placemark(currentCoord);
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
      } else {
        myMap.setCenter(currentCoord);
        myPlacemark.geometry.setCoordinates(currentCoord);
      }
    };

    ymaps.ready(init);
    var myMap,
        myPlacemark,
        officeCoord = [55.747495, 37.811375],
        warehouseCoord = [55.067998, 37.888905],
        currentCoord = officeCoord;

    if (document.querySelector('.map__title--office')) {
      var officeMap = document.querySelector('.map__title--office');
      var warehouseMap = document.querySelector('.map__title--warehouse');
      officeMap.addEventListener('click', function () {
        officeMap.classList.add('map__title--active');
        warehouseMap.classList.remove('map__title--active');
        currentCoord = officeCoord;
        init();
      });
      warehouseMap.addEventListener('click', function () {
        warehouseMap.classList.add('map__title--active');
        officeMap.classList.remove('map__title--active');
        currentCoord = warehouseCoord;
        init();
      });
    }
  }
})();
"use strict";

;

(function () {
  var hamburger = document.getElementById('menu__button');
  var body = document.getElementsByTagName('body')[0];
  var menuLinks = document.querySelectorAll('.nav__link');
  var nav = document.querySelector('.nav');
  var screenWidth = window.screen.availWidth;
  hamburger.addEventListener('click', mobileMenu);

  function mobileMenuLinkClick() {
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenuHide();
      });
    });
  }

  mobileMenuLinkClick();

  function mobileMenu() {
    window.addEventListener('resize', function () {
      screenWidth = window.screen.availWidth;
      mobileMenuHide();
    });

    if (!hamburger.classList.contains('active')) {
      hamburger.classList.add('active');
      nav.classList.add('nav--open');
      body.classList.add('no-scroll');
    } else {
      mobileMenuHide();
    }
  }

  function mobileMenuHide() {
    hamburger.classList.remove('active');
    nav.classList.remove('nav--open');
    body.classList.remove('no-scroll');
  }

  window.addEventListener('resize', function () {
    screenWidth = window.screen.availWidth;

    if (screenWidth > 1024) {
      mobileMenuHide();
    }
  });
})();
"use strict";

;

(function () {
  if (document.querySelector('.btn--contacts')) {
    var modalShow = function modalShow() {
      overlay.classList.add('overlay--active');
      modalCall.classList.add('popup--active');
      body.classList.add('no-scroll');
      html.classList.add('html-overflow');
    };

    var modalHide = function modalHide() {
      overlay.classList.remove('overlay--active');
      modalCall.classList.remove('popup--active');
      body.classList.remove('no-scroll');
      html.classList.remove('html-overflow');
    };

    var btnCall = document.querySelector('.btn--contacts');
    var modalClose = document.querySelector('.popup .popup__close');
    var body = document.getElementsByTagName('body')[0];
    var html = body.parentNode;
    var overlay = document.querySelector('.overlay');
    var modalCall = document.querySelector('.popup');
    btnCall.addEventListener('click', modalShow);
    modalClose.addEventListener('click', modalHide);
  }

  if (document.querySelector('.btn--under-slider')) {
    var _modalShow = function _modalShow() {
      _overlay.classList.add('overlay--active');

      _modalCall.classList.add('popup--active');

      _body.classList.add('no-scroll');

      _html.classList.add('html-overflow');
    };

    var _modalHide = function _modalHide() {
      _overlay.classList.remove('overlay--active');

      _modalCall.classList.remove('popup--active');

      _body.classList.remove('no-scroll');

      _html.classList.remove('html-overflow');
    };

    var _btnCall = document.querySelector('.btn--under-slider');

    var _modalClose = document.querySelector('.popup .popup__close');

    var _body = document.getElementsByTagName('body')[0];
    var _html = _body.parentNode;

    var _overlay = document.querySelector('.overlay');

    var _modalCall = document.querySelector('.popup');

    _btnCall.addEventListener('click', _modalShow);

    _modalClose.addEventListener('click', _modalHide);
  }
})();
"use strict";

;

(function () {
  if (document.querySelector('.popup--documents')) {
    var modalShow = function modalShow() {
      overlay.classList.add('overlay--active');
      modalDocuments.classList.add('popup--documents-active');
      body.classList.add('no-scroll');
      html.classList.add('html-overflow');
    };

    var modalHide = function modalHide() {
      overlay.classList.remove('overlay--active');
      modalDocuments.classList.remove('popup--documents-active');
      body.classList.remove('no-scroll');
      html.classList.remove('html-overflow');
    };

    var btnCall = document.querySelector('.btn--documents');
    var modalClose = document.querySelector('.popup__close');
    var body = document.getElementsByTagName('body')[0];
    var html = body.parentNode;
    var overlay = document.querySelector('.overlay');
    var modalDocuments = document.querySelector('.popup--documents');
    btnCall.addEventListener('click', modalShow);
    modalClose.addEventListener('click', modalHide);
  }
})();
"use strict";

;

(function () {
  if (document.querySelector('.user__login')) {
    var modalLoginShow = function modalLoginShow() {
      overlay.classList.add('overlay--active');
      modalLogin.classList.add('popup--login-active');
      body.classList.add('no-scroll');
      html.classList.add('html-overflow');
    };

    var modalLoginHide = function modalLoginHide() {
      overlay.classList.remove('overlay--active');
      modalLogin.classList.remove('popup--login-active');
      body.classList.remove('no-scroll');
      html.classList.remove('html-overflow');
    };

    var modalLogin = document.querySelector('.popup--login');
    var btnLogin = document.querySelector('.user__login');
    var body = document.getElementsByTagName('body')[0];
    var modalClose = document.querySelector('.popup--login .popup__close');
    var html = body.parentNode;
    var overlay = document.querySelector('.overlay');
    btnLogin.addEventListener('click', modalLoginShow);
    modalClose.addEventListener('click', modalLoginHide);
  }
})();
"use strict";

;

(function () {
  if (document.querySelector('.user__registration')) {
    var modalLoginShow = function modalLoginShow() {
      overlay.classList.add('overlay--active');
      modalLogin.classList.add('popup--registration-active');
      body.classList.add('no-scroll');
      html.classList.add('html-overflow');
    };

    var modalLoginHide = function modalLoginHide() {
      overlay.classList.remove('overlay--active');
      modalLogin.classList.remove('popup--registration-active');
      body.classList.remove('no-scroll');
      html.classList.remove('html-overflow');
    };

    var modalLogin = document.querySelector('.popup--registration');
    var btnLogin = document.querySelector('.user__registration');
    var body = document.getElementsByTagName('body')[0];
    var modalClose = document.querySelector('.popup--registration .popup__close');
    var html = body.parentNode;
    var overlay = document.querySelector('.overlay');
    btnLogin.addEventListener('click', modalLoginShow);
    modalClose.addEventListener('click', modalLoginHide);
  }
})();
"use strict";

;

(function () {
  if (document.getElementById('modal__input-phone')) {
    //Функция маски инпута
    var setMask = function setMask(event) {
      //Задаем в переменную нажатую клавишу
      var pressedKey; //Условие, проверяющее нажатую клавишу

      event.keyCode && pressedKey === event.keyCode; //Задаем в переменную позицию в инпуте, с которой будет доступен ввод цифр

      var numberPos = this.selectionStart; //Устанавливаем возможность ввода цифр с третьей позиции       

      if (numberPos < 3) {
        event.preventDefault();
      } //Задаем внешний вид маски инпута


      var maskType = '+7 (___) ___-__-__',
          i = 0,
          //Проверка и замена value инпута по буквенно
      replaceValue = maskType.replace(/\D/g, ''),
          prevValue = this.value.replace(/\D/g, ''),
          currentValue = maskType.replace(/[_\d]/g, function (a) {
        return i < prevValue.length ? prevValue.charAt(i++) || replaceValue.charAt(i) : a;
      }); //Защита от стирания первых двух цифр (+7)            

      i = currentValue.indexOf('_');

      if (i != -1) {
        i < 5 && (i = 3);
        currentValue = currentValue.slice(0, i);
      } //Регулярное выражение для проверки value инпута        


      var reg = maskType.substr(0, this.value.length).replace(/_+/g, function (a) {
        return '\\d{1,' + a.length + '}';
      }).replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$'); //Проверка содержимого инпута на регулярное выражение, длинну и нажимаемые клавиши

      if (!reg.test(this.value) || this.value.length < 5 || pressedKey > 47 && pressedKey < 58) {
        this.value = currentValue;
      } else if (event.type === 'blur' && this.value.length < 5) {
        this.value = '';
      } // Устанавливаем курсор в конец строки в инпуте, если при нажатии кнопки он стоит не в конце


      input.setSelectionRange(input.value.length, input.value.length);
    }; //Запуск функции setMask через обработчик событий


    //Задаем инпут
    var input = document.getElementById('modal__input-phone');
    input.addEventListener('input', setMask, false);
    input.addEventListener('focus', setMask, false);
    input.addEventListener('blur', setMask, false);
    input.addEventListener('keydown', setMask, false);
  }
})();
"use strict";

;

(function () {
  if (document.querySelector('.text-open') || document.querySelector('.text-header-open')) {
    var readMore = document.querySelectorAll('.read-more');
    var textHeader = document.querySelector('.text-header-open');
    var textBody = document.querySelectorAll('.text-open');
    console.log(textHeader);
    readMore[0].addEventListener('click', function () {
      textHeader.classList.toggle('text-header-open--active');
    });
    readMore.forEach(function (link, i) {
      link.addEventListener('click', function () {
        if (i > 0) {
          textBody[i - 1].classList.toggle('text-open--active');
        }
      });
    });
  }

  if (document.querySelector('.read-more-long')) {
    var readMoreLong = document.querySelectorAll('.read-more-long');
    var textBodyLong = document.querySelectorAll('.text-open-long');
    readMoreLong.forEach(function (link, i) {
      link.addEventListener('click', function () {
        textBodyLong[i].classList.toggle('text-open-long--active');
      });
    });
  }
})();
"use strict";

;

(function () {
  function tamingselect() {
    if (!document.getElementById && !document.createTextNode) {
      return;
    } // Classes for the link and the visible dropdown


    var ts_selectclass = 'turnintodropdown'; // class to identify selects

    var ts_listclass = 'turnintoselect'; // class to identify ULs

    var ts_boxclass = 'dropcontainer'; // parent element

    var ts_triggeron = 'activetrigger'; // class for the active trigger link

    var ts_triggeroff = 'trigger'; // class for the inactive trigger link

    var ts_dropdownclosed = 'dropdownhidden'; // closed dropdown

    var ts_dropdownopen = 'dropdownvisible'; // open dropdown

    /*
    	Turn all selects into DOM dropdowns
    */

    var count = 0;
    var toreplace = new Array();
    var sels = document.getElementsByTagName('select');

    for (var i = 0; i < sels.length; i++) {
      if (ts_check(sels[i], ts_selectclass)) {
        var hiddenfield = document.createElement('input');
        hiddenfield.name = sels[i].name;
        hiddenfield.type = 'hidden';
        hiddenfield.id = sels[i].id;
        hiddenfield.value = sels[i].options[0].value;
        sels[i].parentNode.insertBefore(hiddenfield, sels[i]);
        var trigger = document.createElement('a');
        ts_addclass(trigger, ts_triggeroff);
        trigger.href = '#';

        trigger.onclick = function () {
          ts_swapclass(this, ts_triggeroff, ts_triggeron);
          ts_swapclass(this.parentNode.getElementsByTagName('ul')[0], ts_dropdownclosed, ts_dropdownopen);
          return false;
        };

        trigger.appendChild(document.createTextNode(sels[i].options[0].text));
        sels[i].parentNode.insertBefore(trigger, sels[i]);
        var replaceUL = document.createElement('ul');

        for (var j = 0; j < sels[i].getElementsByTagName('option').length; j++) {
          var newli = document.createElement('li');
          var newa = document.createElement('a');
          newli.v = sels[i].getElementsByTagName('option')[j].value;
          newli.elm = hiddenfield;
          newli.istrigger = trigger;
          newa.href = '#';
          newa.appendChild(document.createTextNode(sels[i].getElementsByTagName('option')[j].text));

          newli.onclick = function () {
            this.elm.value = this.v;
            ts_swapclass(this.istrigger, ts_triggeron, ts_triggeroff);
            ts_swapclass(this.parentNode, ts_dropdownopen, ts_dropdownclosed);
            this.istrigger.firstChild.nodeValue = this.firstChild.firstChild.nodeValue;
            return false;
          };

          newli.appendChild(newa);
          replaceUL.appendChild(newli);
        }

        ts_addclass(replaceUL, ts_dropdownclosed);
        var div = document.createElement('div');
        div.appendChild(replaceUL);
        ts_addclass(div, ts_boxclass);
        sels[i].parentNode.insertBefore(div, sels[i]);
        toreplace[count] = sels[i];
        count++;
      }
    }
    /*
    	Turn all ULs with the class defined above into dropdown navigations
    */


    var uls = document.getElementsByTagName('ul');

    for (var i = 0; i < uls.length; i++) {
      if (ts_check(uls[i], ts_listclass)) {
        var newform = document.createElement('form');
        var newselect = document.createElement('select');

        for (j = 0; j < uls[i].getElementsByTagName('a').length; j++) {
          var newopt = document.createElement('option');
          newopt.value = uls[i].getElementsByTagName('a')[j].href;
          newopt.appendChild(document.createTextNode(uls[i].getElementsByTagName('a')[j].innerHTML));
          newselect.appendChild(newopt);
        }

        newselect.onchange = function () {
          window.location = this.options[this.selectedIndex].value;
        };

        newform.appendChild(newselect);
        uls[i].parentNode.insertBefore(newform, uls[i]);
        toreplace[count] = uls[i];
        count++;
      }
    }

    for (i = 0; i < count; i++) {
      toreplace[i].parentNode.removeChild(toreplace[i]);
    }

    function ts_check(o, c) {
      return new RegExp('\\b' + c + '\\b').test(o.className);
    }

    function ts_swapclass(o, c1, c2) {
      var cn = o.className;
      o.className = !ts_check(o, c1) ? cn.replace(c2, c1) : cn.replace(c1, c2);
    }

    function ts_addclass(o, c) {
      if (!ts_check(o, c)) {
        o.className += o.className == '' ? c : ' ' + c;
      }
    }
  }

  window.onload = function () {
    tamingselect(); // add more functions if necessary
  };
})();
"use strict";

;

(function () {
  if (document.querySelector('.about-slider')) {
    var swiperMain = new Swiper('.about-slider', {
      slidesPerView: 1,
      loop: true,
      loopedSlides: 1,
      navigation: {
        nextEl: '.swiper-button-next--about',
        prevEl: '.swiper-button-prev--about'
      }
    });
  }
})();
"use strict";

;

(function () {
  if (document.querySelector('.cargo-transportation-slider')) {
    var swiperMain = new Swiper('.cargo-transportation-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      loopedSlides: 1,
      centeredSlides: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 20
        }
      }
    });
  }
})();
"use strict";

;

(function () {
  if (document.querySelector('.main-page-slider')) {
    var swiperMain = new Swiper('.main-page-slider', {
      slidesPerView: 1,
      loop: true,
      loopedSlides: 1,
      // autoHeight: true,
      navigation: {
        nextEl: '.swiper-button-next--main-page',
        prevEl: '.swiper-button-prev--main-page'
      }
    });
  }
})();
"use strict";

;

(function () {
  if (document.querySelector('.video__wrap')) {
    var videoToggle = function videoToggle() {
      if (video.paused) {
        video.play();
        videoPlayToggle.style.display = 'none';
      } else {
        video.pause();
        videoPlayToggle.style.display = 'block';
      }
    };

    var videoBlock = document.querySelector('.video__wrap');
    var videoPlayToggle = document.querySelector('.video-bg--toggle');
    var video = document.querySelector('.video');
    videoBlock.addEventListener('click', videoToggle);
  }
})();
"use strict";

;

(function () {
  if (document.querySelector('.warehouse-slider')) {
    var swiperWarehouse = new Swiper('.warehouse-slider', {
      slidesPerView: 1,
      loop: true,
      loopedSlides: 1,
      navigation: {
        nextEl: '.swiper-button-next--warehouse',
        prevEl: '.swiper-button-prev--warehouse'
      }
    });
  }
})();
"use strict";

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
        l,
        d = function d() {
      clearTimeout(l);
      l = setTimeout(n, 100);
    },
        m = function m() {},
        t = function t() {
      window.addEventListener("resize", d, !1);
      window.addEventListener("orientationchange", d, !1);

      if (window.MutationObserver) {
        var k = new MutationObserver(d);
        k.observe(document.documentElement, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });

        m = function m() {
          try {
            k.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d, !1);
          } catch (v) {}
        };
      } else document.documentElement.addEventListener("DOMSubtreeModified", d, !1), m = function m() {
        document.documentElement.removeEventListener("DOMSubtreeModified", d, !1);
        window.removeEventListener("resize", d, !1);
        window.removeEventListener("orientationchange", d, !1);
      };
    },
        u = function u(k) {
      function e(a) {
        if (void 0 !== a.protocol) var c = a;else c = document.createElement("a"), c.href = a;
        return c.protocol.replace(/:/g, "") + c.host;
      }

      if (window.XMLHttpRequest) {
        var d = new XMLHttpRequest();
        var m = e(location);
        k = e(k);
        d = void 0 === d.withCredentials && "" !== k && k !== m ? XDomainRequest || void 0 : XMLHttpRequest;
      }

      return d;
    };

    var n = function n() {
      function d() {
        --q;
        0 === q && (m(), t());
      }

      function l(a) {
        return function () {
          !0 !== e[a.base] && (a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash), a.useEl.hasAttribute("href") && a.useEl.setAttribute("href", "#" + a.hash));
        };
      }

      function p(a) {
        return function () {
          var c = document.body,
              b = document.createElement("x");
          a.onload = null;
          b.innerHTML = a.responseText;
          if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden", "true"), b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild);
          d();
        };
      }

      function n(a) {
        return function () {
          a.onerror = null;
          a.ontimeout = null;
          d();
        };
      }

      var a,
          c,
          q = 0;
      m();
      var f = document.getElementsByTagName("use");

      for (c = 0; c < f.length; c += 1) {
        try {
          var g = f[c].getBoundingClientRect();
        } catch (w) {
          g = !1;
        }

        var h = (a = f[c].getAttribute("href") || f[c].getAttributeNS("http://www.w3.org/1999/xlink", "href") || f[c].getAttribute("xlink:href")) && a.split ? a.split("#") : ["", ""];
        var b = h[0];
        h = h[1];
        var r = g && 0 === g.left && 0 === g.right && 0 === g.top && 0 === g.bottom;
        g && 0 === g.width && 0 === g.height && !r ? (f[c].hasAttribute("href") && f[c].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), b.length && (a = e[b], !0 !== a && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0), void 0 === a && (h = u(b), void 0 !== h && (a = new h(), e[b] = a, a.onload = p(a), a.onerror = n(a), a.ontimeout = n(a), a.open("GET", b), a.send(), q += 1)))) : r ? b.length && e[b] && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0) : void 0 === e[b] ? e[b] = !0 : e[b].onload && (e[b].abort(), delete e[b].onload, e[b] = !0);
      }

      f = "";
      q += 1;
      d();
    };

    var p = function p() {
      window.removeEventListener("load", p, !1);
      l = setTimeout(n, 0);
    };

    "complete" !== document.readyState ? window.addEventListener("load", p, !1) : p();
  }
})();