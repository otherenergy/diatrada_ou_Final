"use strict";
exports.id = 437;
exports.ids = [437];
exports.modules = {

/***/ 5718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Header = ({ title  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "pg-header-sipm gr-purple-light-bg to-up valign",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row justify-content-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-lg-8 col-md-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "caption text-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "fz-60",
                            children: title
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 4794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MainFooter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/footers/main-footer.json
const main_footer_namespaceObject = JSON.parse('{"FK":{"qv":"https://www.facebook.com/","km":"https://twitter.com/","ZB":"https://www.youtube.com/"},"Ok":[{"title":"Company","url":""},{"title":"Team","url":""},{"title":"Services","url":""},{"title":"Products","url":""}],"aC":[{"url":"","image":"img/blog/c3.jpg","title":"Blockchain Top Cloud Tools that help you utilize leading cloud platforms to optimize your solar energy projects."},{"url":"","image":"img/blog/c1.jpg","title":"Expert Consulting in this future changing of seasoned professionals to offers you 24/7 full consulting support."}],"Lk":"Estonia - 11314 Kesklinna linnaosa, Tallinn","Do":"admin@diatradaou.com","m7":"+34-611867387","Qz":{"u":"Diatrada OU","H":"https://www.diatradaou.com/"}}');
;// CONCATENATED MODULE: ./src/components/Footers/MainFooter/index.jsx

/* eslint-disable @next/next/no-img-element */ 


const Footer = ({ footerClass , footerBg , business , creative  })=>{
    const footerRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        if (!creative) footerRef.current.setAttribute("data-overlay-dark", "0");
    }, [
        creative
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: footerClass,
        style: {
            backgroundImage: footerBg ? "url('img/background/8.jpg')" : "url('')"
        },
        ref: footerRef,
        children: [
            footerBg ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "cal pb-80 pt-80",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-7",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cont",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "sub-title gr-green-text",
                                            children: "Stay Connected"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "fz-50",
                                            children: "Partner with us!"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "mt-5 fw-300 fz-20",
                                            children: "Let\u2019s build the next big thing together."
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-5 d-flex justify-content-end",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/diatrada-contact",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "butn butn-md butn-rounded butn-light mt-30",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text",
                                                children: "Get In Touch"
                                            })
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container pt-80 pb-80",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "clumn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo mb-30",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/landing-preview",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: `img/logo-${creative ? "dark" : "light"}.png`,
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Always be ready and prepare for changes and the advancements of tech and involved every second"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "social circle-bord mt-30",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "rest horizontal-link",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: main_footer_namespaceObject.FK.qv,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-facebook-f"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: main_footer_namespaceObject.FK.km,
                                                        className: "ms-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: main_footer_namespaceObject.FK.ZB,
                                                        className: "ms-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-youtube"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-2",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "clumn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "title fw-600 fz-20 mb-30",
                                        children: "About Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "cmp-links",
                                        children: main_footer_namespaceObject.Ok.map((link, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mb-10",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: link.url,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: link.title
                                                    })
                                                })
                                            }, idx)
                                        )
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "clumn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "title fw-600 fz-20 mb-30",
                                        children: "Office"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "address",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "adrs mb-15",
                                                children: main_footer_namespaceObject.Lk
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "eml underline mb-15",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#0",
                                                    children: main_footer_namespaceObject.Do
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "tel",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: `${business ? "gr-green-text" : creative ? "" : "gr-purple-red-text"}`,
                                                    children: main_footer_namespaceObject.m7
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "clumn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "title fw-600 fz-20 mb-30",
                                        children: "Recent Posts"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "rc-post",
                                        children: main_footer_namespaceObject.aC.map((post, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: post.url,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: `flex ${idx !== main_footer_namespaceObject.aC.length - 1 ? "mb-30" : ""}`,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "img",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: post.image,
                                                                    alt: ""
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "cont",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: "fz-16 line-height-28",
                                                                    children: post.title
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            }, idx)
                                        )
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${footerBg ? "sub-footer pb-50 pt-0 no-bord" : creative ? "sub-footer pb-50 pt-50" : "sub-footer pb-50"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "horizontal-link fz-13",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "rest",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mr-30",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Privacy policy"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mr-30",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Legal notice"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Terms of service"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "copyrights d-flex justify-content-end",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "fz-13",
                                        children: [
                                            "\xa9 2025 www.diatradaou.com is Proudly Powered by",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "underline",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: main_footer_namespaceObject.Qz.H,
                                                    rel: "noreferrer",
                                                    target: "_blank",
                                                    className: `${business ? "gr-green-text" : creative ? "" : "gr-purple-red-text"} ms-1`,
                                                    children: main_footer_namespaceObject.Qz.u
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const MainFooter = (Footer);


/***/ })

};
;