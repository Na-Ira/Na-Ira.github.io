const irynainit = (function () {
  "use strict";
  // variable
  let body = document.querySelector("body");
  let header = document.getElementById("wrap-header");
  let wrapload = document.querySelector(".loading");
  let glass = document.querySelector(".glasseffect");
  let GL = document.querySelectorAll(".gl");
  let menubar = document.querySelector(".menu-bar");
  let closemenu = document.querySelector(".wrap-close");
  let mobilenav = document.querySelector(".mobile-navwrap");
  let mobilelink = document.querySelectorAll(".navigation-listmobile li a");
  // glass effect on desktop this will not work on firefox
  let glassx = true;
  // glass effect on mobile this will not work on firefox
  let glassonmobile = true;
  //detect mobile device
  let isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };
  // loader page
  const loadder = function (e) {
    setTimeout(() => {
      fadeOut(wrapload);
    }, 1000);
  };
  // titlt image
  const tiltinit = function (e) {
    VanillaTilt.init(GL, {
      max: 10,
      speed: 400,
    });
  };
  //fade in effect
  const fadeIn = function (el) {
    el.classList.add("show");
    el.classList.remove("hide");
  };
  //fade out effect
  const fadeOut = function (el) {
    el.classList.add("hide");
    el.classList.remove("show");
  };

  // click button menu burger
  const buttonclick = function (e) {
    // menu mobile toggle
    menubar.addEventListener(
      "click",
      function (e) {
        //your handler here
        this.style.display = "none";
        mobilenav.style.display = "block";
        mobilenav.classList.remove("closemenu");
        mobilenav.classList.add("showmenu");
        closemenu.style.display = "block";
        body.classList.add("fixed");
        e.preventDefault();
      },
      false
    );
    //close menu
    closemenu.addEventListener(
      "click",
      function (e) {
        this.style.display = "none";
        mobilenav.classList.remove("showmenu");
        mobilenav.classList.add("closemenu");
        body.classList.remove("fixed");
        menubar.style.display = "block";
        e.preventDefault();
      },
      false
    );
    // mobile link navigation
    for (let i = 0; i < mobilelink.length; i++) {
      mobilelink[i].addEventListener(
        "click",
        function (e) {
          closemenu.style.display = "none";
          mobilenav.classList.remove("showmenu");
          mobilenav.classList.add("closemenu");
          body.classList.remove("fixed");
          menubar.style.display = "block";
        },
        false
      );
    }
  };
  //binds event ----------------------------
  const bindEvents = function (e) {
    // window onbuffer
    window.onbeforeunload = function (e) {
      // force scroll to top when refresh page
      window.scrollTo(0, 0);
    };
    // window load
    window.addEventListener("load", (e) => {
      //load animation page
      loadder();
    });
    // document load
    window.addEventListener("DOMContentLoaded", (e) => {
      // menu
      buttonclick();
      // scroll spy
      new bootstrap.ScrollSpy(document.body, {
        target: "*",
        offset: 1,
      });
      //init if not on mobile
      if (!isMobile.any()) {
        tiltinit();
      }
      // GLightbox
      GLightbox();

      // Initiate Pure Counter
      new PureCounter();

    });
    window.addEventListener("scroll", (e) => {
      if (window.pageYOffset > 10) {
        header.classList.add("fixi");
      } else {
        header.classList.remove("fixi");
      }
    });
    window.addEventListener("activate.bs.scrollspy", (e) => {
      // let links = navlinks.classList.contains('active');
      let index = document.querySelector("nav a.active").getAttribute("href");
      if (index == "#home") {
        fadeOut(glass);
      }
      if (isMobile.any()) {
        if (glassonmobile) {
          // comment this line if dont want any glass blur effect
          if (index == "#home") {
            fadeOut(glass);
          } else {
            fadeIn(glass);
          }
        }
      }
      if (!isMobile.any()) {
        if (glassx) {
          // comment this line if dont want any glass blur effect
          if (index == "#home" || index == "#contact-section") {
            fadeOut(glass);
          } else {
            fadeIn(glass);
          }
        }
      }
    });
  };
  // init - initilizes elements and events
  const Init = function (e) {
    bindEvents();
  };
  return {
    Init: Init,
  };
})();

//initilizing app
irynainit.Init();
