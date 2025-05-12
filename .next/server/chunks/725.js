"use strict";
exports.id = 725;
exports.ids = [725];
exports.modules = {

/***/ 9408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const FixedSearch = ()=>{
    const toggleSearch = ()=>{
        document.querySelector(".search-icon").classList.toggle("active");
        document.querySelector(".search-area").classList.toggle("search-on");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed-search",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "search-area",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "search-icon cursor-pointer",
                    onClick: toggleSearch,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "pe-7s-search serch-icon"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "pe-7s-close close-icon"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "search-form",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                        action: "contact.php",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    name: "search",
                                    placeholder: "Enter Your Keywords"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "pe-7s-search"
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FixedSearch);


/***/ }),

/***/ 1874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const StickyBar = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const sticky_bar = document.querySelector(".sticky-bar");
        if (window.pageYOffset > 600) {
            sticky_bar.classList.add("active");
        } else {
            sticky_bar.classList.remove("active");
        }
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 600) {
                sticky_bar.classList.add("active");
            } else {
                sticky_bar.classList.remove("active");
            }
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "sticky-bar",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "left-bar",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/diatrada-contact",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "contact-butn",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Contact Us"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "icon ml-10",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "far fa-comment"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "right-bar",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "social-text fz-13",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text",
                            children: "Follow Us"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#0",
                            children: "Fa."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            children: "/"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#0",
                            children: "Tw."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            children: "/"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#0",
                            children: "Be."
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StickyBar);


/***/ }),

/***/ 3693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ main_light)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Navbars/MainNavbar/index.jsx

/* eslint-disable @next/next/no-img-element */ 
const Navbar = ({ navbarRef , theme , logoTheme , logoTitle  })=>{
    const dropdownHover = (e)=>{
        const dropdownItem = e.target.tagName === "SPAN" ? e.target.parentElement : e.target;
        const dropdownMenu = dropdownItem.querySelector(".dropdown-menu");
        if (dropdownMenu) dropdownMenu.classList.add("show");
    };
    const dropdownLeave = ()=>{
        const openedDropdown = document.querySelector(".navbar .dropdown-menu.show");
        if (openedDropdown) openedDropdown.classList.remove("show");
    };
    const sideDropdownHover = (e)=>{
        const dropdownItem = e.target.tagName === "SPAN" ? e.target.parentElement : e.target;
        const dropdownSide = dropdownItem.querySelector(".dropdown-side");
        if (dropdownSide) dropdownSide.classList.add("show");
    };
    const sideDropdownLeave = ()=>{
        const openedSideDropdown = document.querySelector(".navbar .dropdown-side.show");
        if (openedSideDropdown) openedSideDropdown.classList.remove("show");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: `navbar navbar-expand-lg ${theme}`,
        ref: navbarRef,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    className: "navbar-brand",
                    href: "/",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "logo",
                        children: [
                            logoTheme === "dark" && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "img/logo-dark.png",
                                alt: ""
                            }),
                            logoTheme === "light" && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "img/logo-light.png",
                                alt: ""
                            }),
                            logoTitle === "logotitle" && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "img/logo-title.png",
                                alt: "",
                                className: "logotitle"
                            }),
                            !logoTheme && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "img/logo-dark.png",
                                alt: ""
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fas fa-bars"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarSupportedContent",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "navbar-nav",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item dropdown",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "nav-link dropdown-toggle",
                                        role: "button",
                                        "aria-expanded": "false",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/diatrada",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Home"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item dropdown",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "nav-link dropdown-toggle",
                                        role: "button",
                                        "aria-expanded": "false",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/diatrada-about",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "About"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item dropdown",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "nav-link dropdown-toggle",
                                        role: "button",
                                        "aria-expanded": "false",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/diatrada-services",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Services"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item dropdown",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "nav-link dropdown-toggle",
                                        role: "button",
                                        "aria-expanded": "false",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/diatrada-contact",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Contact"
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "social",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "rest",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-facebook-f"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-dribbble"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const MainNavbar = (Navbar);

;// CONCATENATED MODULE: ./src/layouts/main-light.jsx

/* eslint-disable @next/next/no-css-tags */ 


const MainLayout = ({ children , defaultTheme , defaultLogoTheme , defaultLogoTitle  })=>{
    const { 0: theme  } = (0,external_react_.useState)("light");
    const { 0: logoTheme , 1: setLogoTheme  } = (0,external_react_.useState)("light");
    const { 0: logoTitle , 1: setLogoTitle  } = (0,external_react_.useState)("logotitle");
    const navbarRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        var navbar = navbarRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
            setLogoTheme("dark");
            setLogoTitle("logotitle");
        } else {
            navbar.classList.remove("nav-scroll");
            setLogoTheme("light");
            setLogoTitle("logotitle");
        }
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
                setLogoTheme("dark");
                setLogoTitle("logotitle");
            } else {
                navbar.classList.remove("nav-scroll");
                setLogoTheme("light");
                setLogoTitle("logotitle");
            }
        });
    }, [
        navbarRef
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/plugins.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/style.css"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MainNavbar, {
                navbarRef: navbarRef,
                theme: defaultTheme ? defaultTheme : theme,
                logoTheme: defaultLogoTheme ? defaultLogoTheme : logoTheme,
                logoTitle: defaultLogoTitle ? defaultLogoTitle : logoTitle
            }),
            children
        ]
    });
};
/* harmony default export */ const main_light = (MainLayout);


/***/ })

};
;