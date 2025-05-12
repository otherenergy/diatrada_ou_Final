"use strict";
exports.id = 901;
exports.ids = [901];
exports.modules = {

/***/ 7985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Creative_Blog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/creative/blogs.json
const blogs_namespaceObject = JSON.parse('[{"poster":"img/blog/2.jpg","tag":"Trending","author":"Diatrada Group","date":"2025","title":"Innovation & Efficiency."},{"poster":"img/blog/3.jpg","tag":"Trending","author":"Diatrada Group","date":"2025","title":"Robust Legal Structure Top Cloud Platforms."},{"poster":"img/blog/1.jpg","tag":"Trending","author":"Diatrada Group","date":"2025","title":"Solar Energy Project."}]');
;// CONCATENATED MODULE: ./src/components/Creative/Blog/index.jsx

/* eslint-disable @next/next/no-img-element */ 

const Blog = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "blog-grid section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "simple-head text-center mb-80",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    children: "Latest News"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Our Latest Insides"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: blogs_namespaceObject.map((blog, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item box-shadow",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "img",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: blog.poster,
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "tags",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#0",
                                                    children: blog.tag
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "cont",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "info",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "author",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: blog.author
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "date opacity-7",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: blog.date
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "title",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: blog.title
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/diatrada-services",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "butn butn-inline butn-gr mt-20 opacity-9",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text",
                                                            children: "Continue Reading"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "underline-gr aqua-bg"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, index)
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const Creative_Blog = (Blog);


/***/ }),

/***/ 1635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Creative_CallAction)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/common/parallaxie.js
function parallaxie(selector) {
    let elementBg = document.querySelector(selector);
    let image = elementBg.getAttribute("data-background");
    let position = elementBg.getBoundingClientRect().top * 0.55;
    elementBg.style.backgroundImage = `url("${image}")`;
    elementBg.style.backgroundSize = "cover";
    elementBg.style.backgroundRepeat = "no-repeat";
    elementBg.style.backgroundAttachment = "fixed";
    elementBg.style.backgroundPosition = `center ${position}px`;
    window.onscroll = ()=>{
        let elements = document.querySelectorAll(".parallaxie[data-background]");
        elements.forEach((element)=>{
            position = element.getBoundingClientRect().top * 0.55;
            element.style.backgroundPosition = `center ${position}px`;
        });
    };
};

;// CONCATENATED MODULE: ./src/components/Creative/CallAction/index.jsx




const CallAction = ()=>{
    (0,external_react_.useEffect)(()=>{
        new parallaxie(".clasic-action.bg-img.parallaxie");
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "clasic-action section-padding bg-img parallaxie",
        "data-background": "img/background/17.jpg",
        "data-overlay-dark": "5",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Get creative solutions."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Everyone is a potential creator."
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 valign",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "d-flex justify-content-end full-width",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/diatrada-contact",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "butn butn-lg butn-icon-anim butn-flora butn-rounded",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "valign icon-left anim-one",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "icon fz-12 fas fa-chevron-right"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text text-anim-one text-u ls2 fz-12 fw-500",
                                                children: "Get In Touch"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "valign icon-right anim-one zindex-2",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "icon fz-12 fas fa-chevron-right"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Creative_CallAction = (CallAction);


/***/ }),

/***/ 1211:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8028);
/* harmony import */ var _data_creative_clients_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3437);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__]);
swiper_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable @next/next/no-img-element */ 


const Clients = ({ pt  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: `clients-carsouel section-padding ${pt ? "pt-0" : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "line-head",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        children: "42 Clients trust our privacy and discretion in their projects with our help"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
                    id: "content-carousel-container-unq-4",
                    className: "swiper-container",
                    spaceBetween: 0,
                    slidesPerView: 5,
                    loop: true,
                    speed: 1000,
                    breakpoints: {
                        0: {
                            slidesPerView: 3
                        },
                        1024: {
                            slidesPerView: 5
                        }
                    },
                    children: _data_creative_clients_json__WEBPACK_IMPORTED_MODULE_3__.map((client, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "img",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: client.image,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Split__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#0",
                                                className: "link",
                                                "data-splitting": true,
                                                children: client.text
                                            })
                                        })
                                    ]
                                })
                            })
                        }, index)
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clients);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Creative_Services)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/creative/services.json
const services_namespaceObject = JSON.parse('[{"icon":"pe-7s-news-paper","title":"Expert Guidance","solidColor":"#dbdeff","color":"blue","details":"We understand that every project is unique. Our team works closely with you to create customized strategies that meet your specific requirements."},{"icon":"pe-7s-news-paper","title":"Tailored Solutions","solidColor":"#dbdeff","color":"blue","details":"Stay ahead in the rapidly evolving world of blockchain and cryptocurrencies with our expert support and innovative approaches."},{"icon":"pe-7s-news-paper","title":"Industry Leaders","solidColor":"#dbdeff","color":"blue","details":"From specific issues to large-scale project development, we provide end-to-end solutions aligned with your vision and market trends."},{"icon":"pe-7s-news-paper","title":"Affordable Investment","solidColor":"#dbdeff","color":"blue","details":"We make cryptocurrency mining a profitable and affordable venture with a low entry threshold, opening the doors to new investors."}]');
;// CONCATENATED MODULE: ./src/components/Creative/Services/index.jsx


const Services = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "services section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "simple-head text-center mb-80",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    children: "Best Services"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Comprehensive Support"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: services_namespaceObject.map((service, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item-box flex bg-gray-light mb-30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "icon-bord-shad revers",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: service.icon
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "bg-gray-light"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "cont ml-30",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "mb-10 fw-600",
                                                children: service.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: service.details
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, index)
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const Creative_Services = (Services);


/***/ }),

/***/ 5155:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var _data_creative_testimonials_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4143);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

/* eslint-disable @next/next/no-img-element */ 








swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_3__.EffectFade
]);
const Testimonials = ()=>{
    const { 0: load , 1: setLoad  } = useState(true);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const paginationRef = useRef(null);
    useEffect(()=>{
        setTimeout(()=>setLoad(false)
        );
        setTimeout(()=>{
            thumbParallaxUp();
            removeSlashFromPagination();
        });
    }, []);
    return /*#__PURE__*/ _jsx("section", {
        className: "testimonials",
        children: /*#__PURE__*/ _jsx("div", {
            className: "position-re",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-lg-6 no-padding to-up",
                                children: !load ? /*#__PURE__*/ _jsx(Swiper, {
                                    className: "swiper-container swiper-img",
                                    speed: 800,
                                    spaceBetween: 0,
                                    slidesPerView: 1,
                                    loop: true,
                                    effect: "fade",
                                    navigation: {
                                        prevEl: navigationPrevRef.current,
                                        nextEl: navigationNextRef.current
                                    },
                                    pagination: {
                                        type: "fraction",
                                        clickable: true,
                                        el: paginationRef.current
                                    },
                                    onBeforeInit: (swiper)=>{
                                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                                        swiper.params.navigation.nextEl = navigationNextRef.current;
                                        swiper.params.pagination.el = paginationRef.current;
                                    },
                                    onSwiper: (swiper)=>{
                                        setTimeout(()=>{
                                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                                            swiper.params.navigation.nextEl = navigationNextRef.current;
                                            swiper.params.pagination.el = paginationRef.current;
                                            swiper.navigation.destroy();
                                            swiper.navigation.init();
                                            swiper.navigation.update();
                                            swiper.pagination.destroy();
                                            swiper.pagination.init();
                                            swiper.pagination.update();
                                        });
                                    },
                                    children: testimonialsData.images.map((image, index)=>/*#__PURE__*/ _jsx(SwiperSlide, {
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": ".3s",
                                                children: /*#__PURE__*/ _jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ _jsx("img", {
                                                        className: "thumparallax",
                                                        src: image,
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        }, index)
                                    )
                                }) : null
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-lg-6 no-padding valign bg-gray-light to-down",
                                children: !load ? /*#__PURE__*/ _jsx(Swiper, {
                                    className: "swiper-container swiper-content",
                                    speed: 800,
                                    spaceBetween: 0,
                                    slidesPerView: 1,
                                    loop: true,
                                    navigation: {
                                        prevEl: navigationPrevRef.current,
                                        nextEl: navigationNextRef.current
                                    },
                                    pagination: {
                                        type: "fraction",
                                        clickable: true,
                                        el: paginationRef.current
                                    },
                                    onBeforeInit: (swiper)=>{
                                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                                        swiper.params.navigation.nextEl = navigationNextRef.current;
                                        swiper.params.pagination.el = paginationRef.current;
                                    },
                                    onSwiper: (swiper)=>{
                                        setTimeout(()=>{
                                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                                            swiper.params.navigation.nextEl = navigationNextRef.current;
                                            swiper.params.pagination.el = paginationRef.current;
                                            swiper.navigation.destroy();
                                            swiper.navigation.init();
                                            swiper.navigation.update();
                                            swiper.pagination.destroy();
                                            swiper.pagination.init();
                                            swiper.pagination.update();
                                        });
                                    },
                                    children: testimonialsData.testimonials.map((testimonial, index)=>/*#__PURE__*/ _jsx(SwiperSlide, {
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": ".6s",
                                                children: /*#__PURE__*/ _jsxs("div", {
                                                    className: "content text-center",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "quote-icon",
                                                            children: /*#__PURE__*/ _jsx("img", {
                                                                src: "img/icons/quote.svg",
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            children: testimonial.comment
                                                        }),
                                                        /*#__PURE__*/ _jsx("h6", {
                                                            children: testimonial.author
                                                        })
                                                    ]
                                                })
                                            })
                                        }, index)
                                    )
                                }) : null
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "controls",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "swiper-button-next swiper-nav-ctrl next-ctrl",
                                ref: navigationNextRef,
                                children: /*#__PURE__*/ _jsx("i", {
                                    className: "fas fa-caret-up"
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "swiper-button-prev swiper-nav-ctrl prev-ctrl",
                                ref: navigationPrevRef,
                                children: /*#__PURE__*/ _jsx("i", {
                                    className: "fas fa-caret-down"
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "swiper-pagination",
                                ref: paginationRef
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonials)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Split extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    target = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    split = ()=>{
        if (this.target.current) {
            Splitting({
                target: this.target.current
            });
        }
    };
    componentDidMount = this.split;
    componentDidUpdate = this.split;
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: this.target,
            children: this.props.children
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Split);


/***/ }),

/***/ 3437:
/***/ ((module) => {

module.exports = JSON.parse('[{"image":"img/brands/01-brands.svg","text":"www.diatradaou.com"},{"image":"img/brands/02-brands.svg","text":"www.diatradaou.com"},{"image":"img/brands/03-brands.svg","text":"www.diatradaou.com"},{"image":"img/brands/04-brands.svg","text":"www.diatradaou.com"},{"image":"img/brands/05-brands.svg","text":"www.diatradaou.com"},{"image":"img/brands/06-brands.svg","text":"www.diatradaou.com"}]');

/***/ }),

/***/ 4143:
/***/ ((module) => {

module.exports = {};

/***/ })

};
;