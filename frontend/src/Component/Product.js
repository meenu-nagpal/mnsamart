import React, { useEffect ,useState} from 'react'
import { NavLink,Link } from 'react-router-dom'
import { addToCart, increaseCTR, setLoginVisibility} from '../Actions/TodoActions';
import { shopingcart} from '../Actions/TodoActions';

import { useSelector ,useDispatch } from 'react-redux';
import Cart from './Cart';
import Login from './Login';


export default function Product(props) {


    var cart = useSelector(state =>state.shopingtocart);

var r=[...cart]


    const [id,setId] = useState([])
    const [image, setImages] = useState([])
    const [imageone,  setImagesOne] = useState([])
    const [imagetwo, setImagesSec] = useState([])
    const [imagethree,  setImagesThree] = useState([])
    const [imagefour, setImagesFour] = useState([])
    const [price,  setPrice] = useState([])
    const [discount,   setDiscount] = useState([])
    const [store, setStore] = useState([])
    
const [storesec, setStoreSec] = useState([])
const [storethree,setStoreThree] = useState([])


const [data, setdata] = useState([])



    const dispatch = useDispatch()




    const selectedproduct = useSelector(state => state.selectedproduct);
console.log(selectedproduct)
     var h={...selectedproduct};

       h.product_id =selectedproduct._id
       console.log(h)
delete h._id
console.log(h)

h.qtys=98



console.log(cart)



useEffect(() => {
        // setId(l._id)
        // console.log(h.images)
        setImages(h.images.mainimage)
        // setImagesOne(l.imagessec.multipleimage[0])
        // setImagesSec(l.imagessec.multipleimage[1])
        // setImagesThree(l.imagessec.multipleimage[2])
        // setImagesFour(l.imagessec.multipleimage[3])
    //     setDiscount(l.discount)
    //     setPrice(l.price)
    // setStore(l.store)
    // setStoreSec(l.storesec)
    // setStoreThree(l.storethree)
    // var p_ids = [];


    

}, [])





var loggedInUser = useSelector(state =>state.loggedInUser);
console.log(loggedInUser)





function doAction2()
{
    if(loggedInUser)
    {
        var isAvailable = false; 
        cart.forEach((pr)=>{
            if(pr.product_id == h.product_id)
                       {
                           isAvailable=true;
                       }
        })
        if(isAvailable)
         {
                alert("id can not be duplicate");
        }
         else
         {
             alert("aftercheck")
             dispatch(addToCart(h))
        
             dispatch(increaseCTR());
        } 
        
    }
    else{
        alert("please login First");
        dispatch(setLoginVisibility(true));
    }



}




    let margin={
        paddingTop:"100px"
    }

    useEffect(() => {
        var $ = window.$;
        var jQuery = window.jQuery;
        var noUiSlider =window.noUiSlider;
        var addthis = window.addthis;
 
         (function(e) {
            "use strict";
            var t = {
                initialised: !1,
                mobile: !1,
                init: function() {
                 var akashdemo = (  this.initialised || (this.initialised = !0, this.checkMobile(), this.stickyHeader(), this.headerSearchToggle(), this.mMenuIcons(), this.mMenuToggle(), this.mobileMenu(), this.scrollToTop(), this.quantityInputs(), this.countTo(), this.tooltip(), this.popover(), this.changePassToggle(), this.changeBillToggle(), this.catAccordion(), this.ajaxLoadProduct(), this.toggleFilter(), this.toggleSidebar(), this.productTabSroll(), this.scrollToElement(), this.loginPopup(), this.modalView(), this.productManage(), this.ratingTooltip(), this.windowClick(), this.popupMenu(), this.topNotice(), this.ratingForm(), this.parallax(), this.sideMenu(), e.fn.superfish && this.menuInit(), e.fn.owlCarousel && this.owlCarousels(), "object" == typeof noUiSlider && this.filterSlider(), e.fn.themeSticky && this.stickySidebar(), e.fn.magnificPopup && this.lightBox(), e.fn.Morphext && this.wordRotate(), e.fn.isotope && this.isotopes(), e.fn.elevateZoom && this.zoomImage()))
                },
                checkMobile: function() {
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? this.mobile = !0 : this.mobile = !1
                },
                menuInit: function() {
                    var akashdemo = ( e(".menu:not(.menu-vertical)").superfish({
                        popUpSelector: "ul, .megamenu",
                        hoverClass: "show",
                        delay: 0,
                        speed: 80,
                        speedOut: 80,
                        autoArrows: !0
                    }), e(".menu.menu-vertical").superfish({
                        popUpSelector: "ul, .megamenu",
                        hoverClass: "show",
                        delay: 0,
                        speed: 200,
                        speedOut: 200,
                        autoArrows: !0,
                        animation: {
                            left: "100%",
                            opacity: "show"
                        },
                        animationOut: {
                            left: "90%",
                            opacity: "hide"
                        }
                    }));
                    var t = function() {
                        e(".menu:not(.menu-vertical) .megamenu-fixed-width").each(function() {
                            var t = e(this),
                                i = t.parent().offset().left - 15,
                                o = t.outerWidth(),
                                n = e(window).width() - 45 - i - o;
                            n < 0 ? t.css("left", n + "px") : t.css("left", "-15px")
                        })
                    };
                    var akashdemo = (   t(), e.fn.smartresize ? e(window).smartresize(t) : e(window).on("resize", t)
                                    )
                },
                stickyHeader: function() {
                    var t = !1,
                        i = null,
                        o = null,
                        n = function(t, i) {
                     var akashdemo=(       t.hasClass("fixed") && (t.removeClass("fixed"), t.css("top", ""), i.changes && i.changes.forEach(function(e) {
                        var akashdemo=(        e.removeClass && t.find(e.item).addClass(e.removeClass), e.addClass && t.find(e.item).removeClass(e.addClass))
                            }), i.move && i.move.forEach(function(i) {
                                if (i.clone) t.find(i.item).hide();
                                else {
                                    var o = 0;
                                    t.find(i.item).each(function() {
                                        e('.sticky-placeholder[data-sticky-placeholder="' + (i.indexStart + ++o) + '"]').replaceWith(e(this))
                                    })
                                }
                            }), t.parent().css("min-height", "")))
                        },
                        s = function() {
                            if (992 > e(window).width()) t && i.each(function(t) {
                                n(e(this), o[t])
                            });
                            else {
                                t || function() {
                                    var n = 0;
                             var akashdemo=(       o = [], i = e(".sticky-header").each(function() {
                                        var t = e(this),
                                            i = t.data("sticky-options"),
                                            s = {};
                               var akashdemo=(         i && (s = JSON.parse(i.replace(/'/g, '"').replace(";", ""))), s.move && s.move.forEach(function(t) {
                                    var akashdemo=(        t.clone || (t.indexStart = n, n += e(t.item).length)
                                 )  }), s.height = t.outerHeight(), s.offset = t.offset().top, s.paddingTop = parseInt(t.css("padding-top")), o.push(s), t.wrap('<div class="sticky-wrapper"></div>')
                               )  }), t = !0
                              ) }();
                                var s = e(window).scrollTop(),
                                    a = 0;
                                i.each(function(i) {
                                    var r = e(this),
                                        c = o[i];
                                        var akashdemo=(     s + a >= c.offset + c.paddingTop ? (r.hasClass("fixed") || function(t, i, o) {
                                            var akashdemo=(   t.hasClass("fixed") || (t.parent().css("min-height", i.height), i.move && i.move.forEach(function(o) {
                                            if (o.clone) t.find(o.item).show();
                                            else {
                                                var n = t.find(i.moveTo),
                                                    s = 0;
                                                e(o.item).each(function() {
                                                    var t = e(this);
                                                    var akashdemo=(       t.wrap('<div class="sticky-placeholder" style="width:' + t.outerWidth() + "px;height:" + t.outerHeight() + "px;margin:" + t.css("margin") + ';" data-sticky-placeholder="' + (o.indexStart + ++s) + '"></div>'), "end" == o.position ? t.appendTo(n) : t.prependTo(n)
                                                 ) })
                                            }
                                        }), i.changes && i.changes.forEach(function(e) {
                                            var akashdemo=(        e.removeClass && t.find(e.item).removeClass(e.removeClass), e.addClass && t.find(e.item).addClass(e.addClass)
                                      )  }), t.addClass("fixed").css("top", -i.height).animate({
                                            top: o
                                        }))
                                         ) }(r, c, a), a += r.outerHeight()) : !r.hasClass("fixed") && t || n(r, c)
                                 ) })
                            }
                        };
                        var akashdemo=(  setTimeout(s, 500), e(window).smartresize(s), e(window).on("scroll", s)
             ) },
                headerSearchToggle: function() {
                    e(".header-search").length && e("body").on("click", ".header-search", function(e) {
                        e.stopPropagation()
                    }).on("click", ".search-toggle", function(t) {
                        var i = e(this).closest(".header-search");
                        var akashdemo=(       i.toggleClass("show"), e(".header-search-wrapper").toggleClass("show"), i.hasClass("show") && i.find("input.form-control").focus(), t.preventDefault()
                  )  }).on("click", function(t) {
                    var akashdemo=(     e(".header-search").removeClass("show"), e(".header-search-wrapper").removeClass("show"), e("body").removeClass("is-search-active")
                   ) });
                    var t = function() {
                        e(".header-search").each(function() {
                            var t = e(this);
                            t.find(".header-search-wrapper").css(e(window).width() < 576 ? {
                                left: 15 - t.offset().left + "px",
                                right: 15 + t.offset().left + t.width() - e(window).width() + "px"
                            } : {
                                left: "",
                                right: ""
                            })
                        })
                    };
                    var akashdemo=(  t(), e.fn.smartresize ? e(window).smartresize(t) : e(window).on("resize", t)
                     ) },
                mMenuToggle: function() {
                    var akashdemo=(  e(".mobile-menu-toggler").on("click", function(t) {
                        var akashdemo=(     e("body").toggleClass("mmenu-active"), e(this).toggleClass("active"), t.preventDefault()
                   ) }), e(".menu-toggler").on("click", function(t) {
                    var akashdemo=(      e(window).width() >= 992 ? e(".main-dropdown-menu").toggleClass("show") : e("body").toggleClass("mmenu-active"), t.preventDefault()
                   ) }), e(".mobile-menu-overlay, .mobile-menu-close").on("click", function(t) {
                    var akashdemo=(   e("body").removeClass("mmenu-active"), e(".menu-toggler").removeClass("active"), t.preventDefault()
                    ) })
                     ) },
                mMenuIcons: function() {
                    var akashdemo=(  e(".mobile-menu").find("li").each(function() {
                        var t = e(this);
                        t.find("ul").length && e("<span/>", {
                            class: "mmenu-btn"
                        }).appendTo(t.children("a"))
                    })
                     ) },
                mobileMenu: function() {
                    var akashdemo=(  e(".mmenu-btn").on("click", function(t) {
                        var i = e(this).closest("li"),
                            o = i.find("ul").eq(0);
                            var akashdemo=(      i.hasClass("open") ? o.slideUp(300, function() {
                            i.removeClass("open")
                        }) : o.slideDown(300, function() {
                            i.addClass("open")
                        }), t.stopPropagation(), t.preventDefault()
                     ) })
                     ) },
                owlCarousels: function() {
                    var t = {
                            loop: !0,
                            margin: 0,
                            responsiveClass: !0,
                            nav: !1,
                            navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
                            dots: !0,
                            autoplay: !0,
                            autoplayTimeout: 15e3,
                            items: 1
                        },
                        i = function(i, o) {
                            var n;
                            var akashdemo=(      n = o ? e.extend(!0, {}, t, o) : t, i.hasClass("nav-thin") && (n.navText = ['<i class="icon-left-open-big">', '<i class="icon-right-open-big">']));
                            var s = i.data("owl-options");
                            var akashdemo=(       "string" == typeof s && (s = JSON.parse(s.replace(/'/g, '"').replace(";", "")), n = e.extend(!0, {}, n, s)), i.owlCarousel(n)
                             ) },
                        o = {
                            ".home-slider": {
                                lazyLoad: !0,
                                autoplay: !1,
                                dots: !1,
                                nav: !0,
                                autoplayTimeout: 12e3,
                                animateOut: "fadeOut",
                                navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
                                loop: !0
                            },
                            ".testimonials-carousel": {
                                lazyLoad: !0,
                                autoHeight: !0,
                                responsive: {
                                    992: {
                                        items: 2
                                    }
                                }
                            },
                            ".featured-products": {
                                loop: !1,
                                margin: 30,
                                autoplay: !1,
                                responsive: {
                                    0: {
                                        items: 2
                                    },
                                    700: {
                                        items: 3,
                                        margin: 15
                                    },
                                    1200: {
                                        items: 4
                                    }
                                }
                            },
                            ".cats-slider": {
                                loop: !1,
                                margin: 20,
                                autoplay: !1,
                                nav: !0,
                                dots: !1,
                                items: 2,
                                responsive: {
                                    576: {
                                        items: 3
                                    },
                                    992: {
                                        items: 4
                                    },
                                    1200: {
                                        items: 5
                                    },
                                    1400: {
                                        items: 6
                                    }
                                }
                            },
                            ".products-slider": {
                                loop: !1,
                                margin: 20,
                                autoplay: !1,
                                dots: !0,
                                items: 2,
                                responsive: {
                                    576: {
                                        items: 3
                                    },
                                    992: {
                                        items: 4
                                    }
                                }
                            },
                            ".categories-slider": {
                                loop: !1,
                                margin: 20,
                                autoplay: !1,
                                nav: !0,
                                dots: !1,
                                items: 2,
                                responsive: {
                                    576: {
                                        items: 3
                                    },
                                    992: {
                                        items: 5
                                    }
                                }
                            },
                            ".quantity-inputs": {
                                items: 2,
                                margin: 20,
                                dots: !1,
                                nav: !0,
                                responsive: {
                                    992: {
                                        items: 4
                                    },
                                    768: {
                                        items: 3
                                    }
                                },
                                onInitialized: function() {
                                    this.$element.find(".horizontal-quantity").val(1)
                                }
                            },
                            ".banners-slider": {
                                dots: !0,
                                loop: !1,
                                margin: 20,
                                responsive: {
                                    576: {
                                        items: 2
                                    },
                                    992: {
                                        items: 3
                                    }
                                }
                            },
                            ".brands-slider": {
                                loop: !1,
                                margin: 20,
                                autoHeight: !0,
                                autoplay: !1,
                                dots: !1,
                                items: 2,
                                responsive: {
                                    576: {
                                        items: 4
                                    },
                                    768: {
                                        items: 6
                                    }
                                }
                            },
                            ".widget-featured-products": {
                                lazyLoad: !0,
                                nav: !0,
                                navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
                                dots: !1,
                                autoHeight: !0
                            },
                            ".entry-slider": {
                                margin: 2,
                                lazyLoad: !0
                            },
                            ".related-posts-carousel": {
                                loop: !1,
                                margin: 30,
                                autoplay: !1,
                                responsive: {
                                    480: {
                                        items: 2
                                    },
                                    1200: {
                                        items: 3
                                    }
                                }
                            },
                            ".boxed-slider": {
                                lazyLoad: !0,
                                autoplayTimeout: 2e4,
                                animateOut: "fadeOut",
                                dots: !1
                            },
                            ".about-slider": {
                                margin: 2,
                                lazyLoad: !0
                            },
                            ".product-single-default .product-single-carousel": {
                                nav: !0,
                                dotsContainer: "#carousel-custom-dots",
                                autoplay: !1,
                                onInitialized: function() {
                                    var t = this.$element;
                                    e.fn.elevateZoom && t.find("img").each(function() {
                                        var t = e(this),
                                            i = {
                                                responsive: !0,
                                                zoomWindowFadeIn: 350,
                                                zoomWindowFadeOut: 200,
                                                borderSize: 0,
                                                zoomContainer: t.parent(),
                                                zoomType: "inner",
                                                cursor: "grab"
                                            };
                                        t.elevateZoom(i)
                                    })
                                }
                            },
                            ".product-single-extended .product-single-carousel": {
                                dots: !1,
                                autoplay: !1,
                                center: !0,
                                items: 1,
                                responsive: {
                                    768: {
                                        items: 3
                                    }
                                }
                            }
                        };
                        var akashdemo=(      Object.keys(o).forEach(function(t) {
                        e(t).each(function() {
                            i(e(this), o[t])
                        })
                    }), e(".owl-carousel").each(function() {
                        e(this).data("owl.carousel") || i(e(this), i)
                    }), e(".home-slider").on("loaded.owl.lazy", function(t) {
                        var akashdemo=(         e(t.element).closest(".home-slide").addClass("loaded"), e(t.element).closest(".home-slider").addClass("loaded")
                  )  }), e(".boxed-slider").on("loaded.owl.lazy", function(t) {
                        e(t.element).closest(".category-slide").addClass("loaded")
                    }), e(".about-slider").on("loaded.owl.lazy", function(t) {
                        e(t.element).closest("div").addClass("loaded")
                    }), e("#carousel-custom-dots .owl-dot").click(function() {
                        e(".product-single-carousel").trigger("to.owl.carousel", [e(this).index(), 300])
                    })
                         ) },
                filterSlider: function() {
                    var t = document.getElementById("price-slider");
                    var akashdemo=(      null != t && (noUiSlider.create(t, {
                        start: [200, 700],
                        connect: !0,
                        step: 100,
                        margin: 100,
                        range: {
                            min: 0,
                            max: 1e3
                        }
                    }), t.noUiSlider.on("update", function(t, i) {
                        t = t.map(function(e) {
                            return "$" + e
                        });
                        e("#filter-price-range").text(t.join(" - "))
                    }))
                     ) },
                stickySidebar: function() {
                    var t = 10;
                    var akashdemo=(    e(".header .sticky-header").each(function() {
                        t += e(this).height()
                    }), e(".sidebar-wrapper, .sticky-slider").themeSticky({
                        autoInit: !0,
                        minWidth: 991,
                        containerSelector: ".row, .container",
                        paddingOffsetBottom: 10,
                        paddingOffsetTop: t
                    })
                     ) },
                countTo: function() {
                    e.fn.countTo ? e.fn.waypoint ? e(".count").waypoint(function() {
                        e(this.element).countTo()
                    }, {
                        offset: "90%",
                        triggerOnce: !0
                    }) : e(".count").countTo() : e(".count").each(function() {
                        var t = e(this),
                            i = t.data("to");
                        t.text(i)
                    })
                },
                tooltip: function() {
                    e.fn.tooltip && e('[data-toggle="tooltip"]').tooltip({
                        trigger: "hover focus"
                    })
                },
                popover: function() {
                    e.fn.popover && e('[data-toggle="popover"]').popover({
                        trigger: "focus"
                    })
                },
                changePassToggle: function() {
                    e("#change-pass-checkbox").on("change", function() {
                        e("#account-chage-pass").toggleClass("show")
                    })
                },
                changeBillToggle: function() {
                    e("#change-bill-address").on("change", function() {
                        var akashdemo= (         e("#checkout-shipping-address").toggleClass("show"), e("#new-checkout-address").toggleClass("show")
                        )    })
                },
                catAccordion: function() {
                    e(".catAccordion").on("shown.bs.collapse", function(t) {
                        var i = e(t.target).closest("li");
                        i.hasClass("open") || i.addClass("open")
                    }).on("hidden.bs.collapse", function(t) {
                        var i = e(t.target).closest("li");
                        i.hasClass("open") && i.removeClass("open")
                    })
                },
                scrollBtnAppear: function() {
                    e(window).scrollTop() >= 400 ? e("#scroll-top").addClass("fixed") : e("#scroll-top").removeClass("fixed")
                },
                scrollToTop: function() {
                    e("#scroll-top").on("click", function(t) {
                        var akashdemo=(         e("html, body").animate({
                            scrollTop: 0
                        }, 1200), t.preventDefault()
                     ) })
                },
                newsletterPopup: function() {
                    e.magnificPopup.open({
                        items: {
                            src: "#newsletter-popup-form"
                        },
                        type: "inline",
                        mainClass: "mfp-newsletter",
                        removalDelay: 350,
                        callbacks: {
                            open: function() {
                                if (e(".sticky-header.fixed").css("margin-right")) {
                                    var t = Number(e(".sticky-header.fixed").css("margin-right").slice(0, -2)) + 17 + "px";
                                    var akashdemo=(                e(".sticky-header.fixed").css("margin-right", t), e(".sticky-header.fixed-nav").css("margin-right", t), e("#scroll-top").css("margin-right", t)
                                     ) }
                            },
                            afterClose: function() {
                                if (e(".sticky-header.fixed").css("margin-right")) {
                                    var t = Number(e(".sticky-header.fixed").css("margin-right").slice(0, -2)) - 17 + "px";
                                    var akashdemo=(                e(".sticky-header.fixed").css("margin-right", t), e(".sticky-header.fixed-nav").css("margin-right", t), e("#scroll-top").css("margin-right", t)
                                      )  }
                            }
                        }
                    })
                },
                lightBox: function() {
                    document.getElementById("newsletter-popup-form") && setTimeout(function() {
                        var i = e.magnificPopup.instance;
                        var akashdemo=(      i.isOpen ? (i.close(), setTimeout(function() {
                            t.newsletterPopup()
                        }, 360)) : t.newsletterPopup()
                    )}, 1e4);
                    var i = [],
                        o = e(0 === e(".product-single-carousel .owl-item:not(.cloned) img").length ? ".product-single-gallery img" : ".product-single-carousel .owl-item:not(.cloned) img");
                        var akashdemo=(    o.each(function() {
                        i.push({
                            src: e(this).attr("data-zoom-image")
                        })
                    }), e(".prod-full-screen").click(function(t) {
                        var n;
                        var akashdemo=(      n = t.currentTarget.closest(".product-slider-container") ? (e(".product-single-carousel").data("owl.carousel").current() + o.length - Math.ceil(o.length / 2)) % o.length : e(t.currentTarget).closest(".product-item").index(), e.magnificPopup.open({
                            items: i,
                            navigateByImgClick: !0,
                            type: "image",
                            gallery: {
                                enabled: !0
                            }
                        }, n)
                  )  }), e("body").on("click", "a.btn-quickview", function(i) {
                    var akashdemo=(        i.preventDefault(), t.ajaxLoading());
                        var o = e(this).attr("href");
                        setTimeout(function() {
                            e.magnificPopup.open({
                                type: "ajax",
                                mainClass: "mfp-ajax-product",
                                tLoading: "",
                                preloader: !1,
                                removalDelay: 350,
                                items: {
                                    src: o
                                },
                                callbacks: {
                                    open: function() {
                                        if (e(".sticky-header.fixed").css("margin-right")) {
                                            var t = Number(e(".sticky-header.fixed").css("margin-right").slice(0, -2)) + 17 + "px";
                                            var akashdemo=(            e(".sticky-header.fixed").css("margin-right", t), e(".sticky-header.fixed-nav").css("margin-right", t), e("#scroll-top").css("margin-right", t)
                                             ) }
                                    },
                                    ajaxContentAdded: function() {
                                        var akashdemo=(          t.owlCarousels(), t.quantityInputs(), "undefined" != typeof addthis ? addthis.layers.refresh() : e.getScript("https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b927288a03dbde6")
                                          )  },
                                    beforeClose: function() {
                                        e(".ajax-overlay").remove()
                                    },
                                    afterClose: function() {
                                        if (e(".sticky-header.fixed").css("margin-right")) {
                                            var t = Number(e(".sticky-header.fixed").css("margin-right").slice(0, -2)) - 17 + "px";
                                            var akashdemo=(        e(".sticky-header.fixed").css("margin-right", t), e(".sticky-header.fixed-nav").css("margin-right", t), e("#scroll-top").css("margin-right", t)
                                              )  }
                                    }
                                },
                                ajax: {
                                    tError: ""
                                }
                            })
                        }, 500)
                    })
                          )  },
                productTabSroll: function() {
                    e(".rating-link").on("click", function(t) {
                        if (e(".product-single-tabs").length) e("#product-tab-reviews").tab("show");
                        else {
                            if (!e(".product-single-collapse").length) return;
                            e("#product-reviews-content").collapse("show")
                        }
                        var akashdemo=(     e("#product-reviews-content").length && setTimeout(function() {
                            var t = e("#product-reviews-content").offset().top - 60;
                            e("html, body").stop().animate({
                                scrollTop: t
                            }, 800)
                        }, 250), t.preventDefault()
                     ) })
                },
                quantityInputs: function() {
                    var akashdemo=(     e.fn.TouchSpin && (e(".vertical-quantity").TouchSpin({
                        verticalbuttons: !0,
                        verticalup: "",
                        verticaldown: "",
                        verticalupclass: "icon-up-dir",
                        verticaldownclass: "icon-down-dir",
                        buttondown_class: "btn btn-outline",
                        buttonup_class: "btn btn-outline",
                        initval: 1,
                        min: 1
                    }), e(".horizontal-quantity").TouchSpin({
                        verticalbuttons: !1,
                        buttonup_txt: "",
                        buttondown_txt: "",
                        buttondown_class: "btn btn-outline btn-down-icon",
                        buttonup_class: "btn btn-outline btn-up-icon",
                        initval: 1,
                        min: 1
                    }))
                     ) },
                ajaxLoading: function() {
                    e("body").append("<div class='ajax-overlay'><i class='porto-loading-icon'></i></div>")
                },
                wordRotate: function() {
                    e(".word-rotater").each(function() {
                        e(this).Morphext({
                            animation: "bounceIn",
                            separator: ",",
                            speed: 2e3
                        })
                    })
                },
                ajaxLoadProduct: function() {
                    var t = 0;
                    i.click(function(o) {
                        var akashdemo=(         o.preventDefault(), e(this).text("Loading ..."), e.ajax({
                            url: "ajax/category-ajax-products.html",
                            success: function(o) {
                                var n = e(".product-ajax-grid"),
                                    s = n.find(".product-default").parent().attr("class"),
                                    a = e(o);
                                    var akashdemo=(       a.find(".product-default").each(function() {
                                    e(this).parent().attr("class", s)
                                }), setTimeout(function() {
                                    var akashdemo=(         a.hide().appendTo(n).fadeIn(), i.text("Load More"), ++t >= 2 && i.hide()
                                  )  }, 350)
                                     ) },
                            failure: function() {
                                i.text("Sorry something went wrong.")
                            }
                        })
                     ) })
                },
                toggleFilter: function() {
                    var akashdemo=(    e(".filter-toggle a").click(function(t) {
                        var akashdemo=(        t.preventDefault(), e(".filter-toggle").toggleClass("opened"), e("main").toggleClass("sidebar-opened")
                   ) }), e(".sidebar-overlay").click(function(t) {
                        var akashdemo=(        e(".filter-toggle").removeClass("opened"), e("main").removeClass("sidebar-opened")
                   ) }), e(".sort-menu-trigger").click(function(t) {
                    var akashdemo=(    t.preventDefault(), e(".select-custom").removeClass("opened"), e(t.target).closest(".select-custom").toggleClass("opened")
                   )})
                
                    )},
                toggleSidebar: function() {
                    e(".sidebar-toggle").click(function() {
                        e("main").toggleClass("sidebar-opened")
                    })
                },
                scrollToElement: function() {
                    e('.scrolling-box a[href^="#"]').on("click", function(t) {
                        var i = e(this.getAttribute("href"));
                        var akashdemo=(         i.length && (t.preventDefault(), e("html, body").stop().animate({
                            scrollTop: i.offset().top - 90
                        }, 700))
                     ) })
                },
                loginPopup: function() {
                    e(".login-link").click(function(i) {
                        var akashdemo=(        i.preventDefault(), t.ajaxLoading());
                        setTimeout(function() {
                            e.magnificPopup.open({
                                type: "ajax",
                                mainClass: "login-popup",
                                tLoading: "",
                                preloader: !1,
                                removalDelay: 350,
                                items: {
                                    src: "ajax/login-popup.html"
                                },
                                callbacks: {
                                    open: function() {
                                        if (e(".sticky-header.fixed").css("margin-right")) {
                                            var t = Number(e(".sticky-header.fixed").css("margin-right").slice(0, -2)) + 17 + "px";
                                            var akashdemo=(             e(".sticky-header.fixed").css("margin-right", t), e(".sticky-header.fixed-nav").css("margin-right", t), e("#scroll-top").css("margin-right", t)
                                              )  }
                                    },
                                    beforeClose: function() {
                                        e(".ajax-overlay").remove()
                                    },
                                    afterClose: function() {
                                        if (e(".sticky-header.fixed").css("margin-right")) {
                                            var t = Number(e(".sticky-header.fixed").css("margin-right").slice(0, -2)) - 17 + "px";
                                            var akashdemo=(          e(".sticky-header.fixed").css("margin-right", t), e(".sticky-header.fixed-nav").css("margin-right", t), e("#scroll-top").css("margin-right", t)
                                              )  }
                                    }
                                },
                                ajax: {
                                    tError: ""
                                }
                            })
                        }, 1500)
                    })
                },
                modalView: function() {
                    var akashdemo=(      e("body").on("click", ".btn-add-cart", function(t) {
                        if (e(".add-cart-box #productImage").attr("src", e(this).parents(".product-default").find("figure img").attr("src")), e(".add-cart-box #productTitle").text(e(this).parents(".product-default").find(".product-title").text()), e(".sticky-header.fixed").css("margin-right")) {
                            var i = Number(e(".sticky-header.fixed").css("margin-right").slice(0, -2)) + 17 + "px";
                            var akashdemo=(      e(".sticky-header.fixed").css("margin-right", i), e(".sticky-header.fixed-nav").css("margin-right", i), e("#scroll-top").css("margin-right", i)
                               )   }
                    }), e(".modal#addCartModal").on("hidden.bs.modal", function(t) {
                        if (e(".sticky-header.fixed").css("margin-right")) {
                            var i = Number(e(".sticky-header.fixed").css("margin-right").slice(0, -2)) - 17 + "px";
                            var akashdemo=(       e(".sticky-header.fixed").css("margin-right", i), e(".sticky-header.fixed-nav").css("margin-right", i), e("#scroll-top").css("margin-right", i)
                              )  }
                    })
                     ) },
                productManage: function() {
                    e(".product-select").click(function(t) {
                        var akashdemo=(        e(this).parents(".product-default").find("figure img").attr("src", e(this).data("src")), e(this).addClass("checked").siblings().removeClass("checked")
                     ) })
                },
                ratingTooltip: function() {
                    e("body").on("mouseenter touchstart", ".product-ratings", function(t) {
                        var i = e(this).find(".ratings").width() / e(this).width() * 5;
                        e(this).find(".tooltiptext").text(i ? i.toFixed(2) : i)
                    })
                },
                windowClick: function() {
                    e(document).click(function(t) {
                        e(t.target).closest(".toolbox-item.select-custom").length || e(".select-custom").removeClass("opened")
                    })
                },
                popupMenu: function() {
                    if (!(e(".popup-menu").length <= 0)) {
                        var t = e(".popup-menu-ul"),
                            i = t.parent().width() - t.children().width();
                            var akashdemo=(      i >= 0 && t.css("margin-right", "-" + i + "px"), t.css("margin-top", i + "px"), e(".popup-menu-toggler").on("click", function(t) {
                                var akashdemo=(         t.preventDefault(), e(this).siblings(".popup-menu").addClass("open"), e(document).on("keydown.popup-menu", function(t) {
                                    var akashdemo=(                     27 == t.which && (e(".popup-menu").removeClass("open"), e(document).off("keydown.popup-menu"))
                       
                                         )         })
                       ) }), e("body").on("click", ".popup-menu-close", function(t) {
                        var akashdemo=(        e(".popup-menu").removeClass("open"), e(document).off("keydown.popup-menu"), t.preventDefault()
                      )  }), e("body").on("click", ".popup-menu a", function(t) {
                            var i = e(this).siblings("ul");
                            var akashdemo=(        i.length && i.toggleClass("open"), t.preventDefault()
                       ) })
                              )  }
                },
                topNotice: function() {
                    e(".top-notice .mfp-close").length && e("body").on("click", ".top-notice .mfp-close", function() {
                        e(this).height();
                        e(this).closest(".top-notice").fadeOut(function() {
                            e(this).addClass("closed")
                        })
                    })
                },
                ratingForm: function() {
                    e("body").on("click", ".rating-form .rating-stars > a", function(t) {
                        var i = e(this);
                        var akashdemo=(           i.addClass("active").siblings().removeClass("active"), i.parent().addClass("selected"), i.closest(".rating-form").find("select").val(i.text()), t.preventDefault()
                       )   })
                },
                parallax: function() {
                    var i = e("[data-parallax]"),
                        o = {
                            speed: 1.5,
                            horizontalPosition: "50%",
                            offset: 0,
                            enableOnMobile: !0
                        };
                    i.length && i.each(function() {
                        var i = e(this),
                            n = i.data("parallax");
                        n && (n = JSON.parse(n.replace(/'/g, '"').replace(";", "")));
                        var s, a, r, c, l = e.extend(!0, {}, o, n),
                            d = e(window);
                        c = e('<div class="parallax-background"></div>');
                        var u = i.data("image-src") ? "url(" + i.data("image-src") + ")" : i.css("background-image");
                        if (c.css({
                                "background-image": u,
                                "background-size": "cover",
                                "background-position": "50% 0%",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: 100 * l.speed + "%"
                            }), i.prepend(c), i.css({
                                position: "relative",
                                overflow: "hidden"
                            }), !t.mobile || l.enableOnMobile) {
                            var p = function() {
                                var akashdemo=(              s = i.offset(), a = -(d.scrollTop() - (s.top - 100)) / (l.speed + 2), r = a < 0 ? Math.abs(a) : -Math.abs(a), c.css({
                                    transform: "translate3d(0, " + (r - 50 + l.offset) + "px, 0)",
                                    "background-position-x": l.horizontalPosition
                                })
                                 ) };
                                 var akashdemo=(       e(window).on("scroll resize", p), p()
                                  ) } else i.addClass("parallax-disabled")
                    })
                },
                isotopes: function() {
                    var t = {
                        itemsSelector: ".grid-item",
                        masonry: {
                            columnWidth: ".grid-col-sizer"
                        },
                        percentPosition: !0,
                        sortBy: "original-order",
                        getSortData: {
                            "md-order": "[data-md-order] parseInt"
                        },
                        sortReorder: !1
                    };
                    e(".grid").each(function() {
                        var i = e(this),
                            o = i.data("grid-options");
                        o && (o = JSON.parse(o.replace(/'/g, '"').replace(";", "")));
                        var n = e.extend(!0, {}, t, o),
                            s = i.isotope(n);
                        if (n.sortReorder) {
                            var a = function() {
                                var t = e(window).width();
                                s.isotope({
                                    sortBy: t < 768 && t > 400 ? "md-order" : "original-order"
                                })
                            };
                            e.fn.smartresize ? e(window).smartresize(a) : e(window).on("resize", a)
                        }
                    })
                },
                zoomImage: function() {
                    e(".product-single-grid .product-single-gallery img").each(function() {
                        var t = e(this),
                            i = {
                                responsive: !0,
                                zoomWindowFadeIn: 350,
                                zoomWindowFadeOut: 200,
                                borderSize: 0,
                                zoomContainer: t.parent(),
                                zoomType: "inner",
                                cursor: "grab"
                            };
                        t.elevateZoom(i)
                    })
                },
                sideMenu: function() {
                    e(".side-menu").length && e("body").on("click", ".side-menu-toggle", function(t) {
                        var akashdemo=(       e(this).siblings("ul").slideToggle("fast"), e(this).parent().toggleClass("show"), t.stopPropagation()
                      )  })
                }
            };
            e("body").prepend('<div class="loading-overlay"><div class="bounce-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>');
            var i = e(".loadmore");
            var akashdemo=(     jQuery(document).ready(function() {
                t.init()
            }), e(window).on("load", function() {
                var akashdemo=(          e("body").addClass("loaded"), t.scrollBtnAppear()
           ) }), e(window).on("scroll", function() {
                t.scrollBtnAppear()
            })
          ) })($);


        return () => {
            
        }
    }, [])

    return (
        <div>
            
    <div class="page-wrapper" style={margin}>
     
             <main class="main ">
            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item"><a href="#">Electronics</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Headsets</li>
                    </ol>
                </div>
                {/* <!-- End .container --> */}
            </nav>
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 main-content">
                        <div class="product-single-container product-single-default">
                            <div class="row">
                                <div class="col-lg-7 col-md-6 product-single-gallery">
                                    <div class="product-slider-container">
                                        <div class="product-single-carousel owl-carousel owl-theme">
                                            <div class="product-item">

                                                <img class="product-single-image" src={`http://localhost:9000/${image}`} data-zoom-image="assets/images/products/zoom/product-1-big.jpg" />
                                            </div>
                                            <div class="product-item">
                                                <img class="product-single-image" src="assets/images/products/zoom/product-2.jpg" data-zoom-image="assets/images/products/zoom/product-2-big.jpg" />
                                            </div>
                                            <div class="product-item">
                                                <img class="product-single-image" src="assets/images/products/zoom/product-3.jpg" data-zoom-image="assets/images/products/zoom/product-3-big.jpg" />
                                            </div>
                                            <div class="product-item">
                                                <img class="product-single-image" src="assets/images/products/zoom/product-4.jpg" data-zoom-image="assets/images/products/zoom/product-4-big.jpg" />
                                            </div>
                                        </div>

                                        {/* <!-- End .product-single-carousel --> */}
                                        <span class="prod-full-screen">
											<i class="icon-plus"></i>
										</span>
                                    </div>
                                    <div class="prod-thumbnail owl-dots" id='carousel-custom-dots'>
                                        <div class="owl-dot">
                                            <img src="assets/images/products/zoom/product-1.jpg" />
                                        </div>
                                        <div class="owl-dot">
                                            <img src="assets/images/products/zoom/product-2.jpg" />
                                        </div>
                                        <div class="owl-dot">
                                            <img src="assets/images/products/zoom/product-3.jpg" />
                                        </div>
                                        <div class="owl-dot">
                                            <img src="assets/images/products/zoom/product-4.jpg" />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End .col-lg-7 --> */}

                                <div class="col-lg-5 col-md-6 product-single-details">
                                    <h1 class="product-title">Silver Porto Headset</h1>

                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style={{width:"60%"}}></span>
                                            {/* <!-- End .ratings --> */}
                                        </div>
                                        {/* <!-- End .product-ratings --> */}

                                        <a href="#" class="rating-link">( 6 Reviews )</a>
                                    </div>
                                    {/* <!-- End .ratings-container --> */}

                                    <hr class="short-divider" /> 

                                    <div class="price-box">
                                        <span class="old-price">$81.00</span>
                                        <span class="product-price">$101.00</span>
                                    </div>
                                    {/* <!-- End .price-box --> */}

                                    <div class="product-desc">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>
                                    </div>
                                    {/* <!-- End .product-desc --> */}

                                    <ul class="single-info-list">
                                        <li>AVAILABILITY: <strong>AVAILABLE</strong></li>
                                        <li>SKU: <strong>123456789</strong></li>
                                    </ul>

                                    <div class="product-filters-container">
                                        <div class="product-single-filter">
                                            <label>Colors:</label>
                                            <ul class="config-swatch-list">
                                                <li class="active">
                                                    <a href="#" style={{backgroundColor: "#0188cc;"}}></a>
                                                </li>
                                                <li>
                                                    <a href="#" style={{backgroundColor:" #ab6e6e;"}}></a>
                                                </li>
                                                <li>
                                                    <a href="#" style={{backgroundColor:" #ddb577;"}}></a>
                                                </li>
                                                <li>
                                                    <a href="#" style={{backgroundColor: "#6085a5;"}}></a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <!-- End .product-single-filter --> */}
                                    </div>
                                    {/* <!-- End .product-filters-container --> */}

                                    <hr class="divider" />

                                    <div class="product-action">
                                        <div class="product-single-qty">
                                            <input class="horizontal-quantity form-control" type="text" />
                                        </div>
                                        {/* <!-- End .product-single-qty --> */}
                                    

                                        {/* <NavLink to ="/cart"  title="Buy"><button class=" btn-dark add-cart"  onClick={add}>Buy Now</button></NavLink> */}
                                        <Link to ="/cart"  title="Buy"><button class=" btn-dark add-cart" onClick={()=>{doAction2()}} >Buy Now</button></Link>

                                    {/* <button class=" btn-dark add-cart" title="Add to Cart" onClick={()=>{doAction2();add()}}>Add to Cart</button> */}
                                    <button class=" btn-dark add-cart" title="Add to Cart" onClick={()=>{doAction2()}}>Add to Cart</button>
{/* { showResults ? <Login/> : null } */}
                                      
                                        {/* <NavLink to ="/cart" class="btn btn-dark add-cart" title="Add to Cart">Add to Cart</NavLink> */}
                                    </div>
                                    {/* <!-- End .product-action --> */}

                                    <hr class="divider mb-1" />

                                    <div class="product-single-share">
                                        <label class="sr-only">Share:</label>

                                        <div class="social-icons mr-2">
                                            <a href="#" class="social-icon social-facebook icon-facebook" target="_blank" title="Facebook"></a>
                                            <a href="#" class="social-icon social-twitter icon-twitter" target="_blank" title="Twitter"></a>
                                            <a href="#" class="social-icon social-linkedin fab fa-linkedin-in" target="_blank" title="Linkedin"></a>
                                            <a href="#" class="social-icon social-gplus fab fa-google-plus-g" target="_blank" title="Google +"></a>
                                            <a href="#" class="social-icon social-mail icon-mail-alt" target="_blank" title="Mail"></a>
                                        </div>
                                        {/* <!-- End .social-icons --> */}

                                        <a href="#" class="add-wishlist" title="Add to Wishlist">Add to Wishlist</a>
                                    </div>
                                    {/* <!-- End .product single-share --> */}
                                </div>
                                {/* <!-- End .product-single-details --> */}
                            </div>
                            {/* <!-- End .row --> */}
                        </div>
                        {/* <!-- End .product-single-container --> */}

                        <div class="product-single-tabs">
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="product-tab-desc" data-toggle="tab" href="#product-desc-content" role="tab" aria-controls="product-desc-content" aria-selected="true">Description</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="product-tab-more-info" data-toggle="tab" href="#product-more-info-content" role="tab" aria-controls="product-more-info-content" aria-selected="false">More Info</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="product-tab-tags" data-toggle="tab" href="#product-tags-content" role="tab" aria-controls="product-tags-content" aria-selected="false">Tags</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="product-tab-reviews" data-toggle="tab" href="#product-reviews-content" role="tab" aria-controls="product-reviews-content" aria-selected="false">Reviews (3)</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="product-desc-content" role="tabpanel" aria-labelledby="product-tab-desc">
                                    <div class="product-desc-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                                        <ul>
                                            <li><i class="fa fa-check-circle"></i>Any Product types that You want - Simple, Configurable</li>
                                            <li><i class="fa fa-check-circle"></i>Downloadable/Digital Products, Virtual Products</li>
                                            <li><i class="fa fa-check-circle"></i>Inventory Management with Backordered items</li>
                                        </ul>
                                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br />quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                    </div>
                                    {/* <!-- End .product-desc-content --> */}
                                </div>
                                {/* <!-- End .tab-pane --> */}

                                <div class="tab-pane fade fade" id="product-more-info-content" role="tabpanel" aria-labelledby="product-tab-more-info">
                                    <div class="product-desc-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                                    </div>
                                    {/* <!-- End .product-desc-content --> */}
                                </div>
                                {/* <!-- End .tab-pane --> */}

                                <div class="tab-pane fade" id="product-tags-content" role="tabpanel" aria-labelledby="product-tab-tags">
                                    <div class="product-tags-content">
                                        <form action="#">
                                            <h4>Add Your Tags:</h4>
                                            <div class="form-group">
                                                <input type="text" class="form-control form-control-sm" required />
                                                <input type="submit" class="btn btn-dark" value="Add Tags" />
                                            </div>
                                            {/* <!-- End .form-group --> */}
                                        </form>
                                        <p class="note">Use spaces to separate tags. Use single quotes (') for phrases.</p>
                                    </div>
                                    {/* <!-- End .product-tags-content --> */}
                                </div>
                                {/* <!-- End .tab-pane --> */}

                                <div class="tab-pane fade" id="product-reviews-content" role="tabpanel" aria-labelledby="product-tab-reviews">
                                    <div class="product-reviews-content">
                                        <div class="row">
                                            <div class="col-xl-7">
                                                <h2 class="reviews-title">3 reviews for Silver Porto Headset</h2>

                                                <ol class="comment-list">
                                                    <li class="comment-container">
                                                        <div class="comment-avatar">
                                                            <img src="assets/images/avatar/avatar1.jpg" width="65" height="65" alt="avatar" />
                                                        </div>
                                                        {/* <!-- End .comment-avatar--> */}

                                                        <div class="comment-box">
                                                            <div class="ratings-container">
                                                                <div class="product-ratings">
                                                                    <span class="ratings" style={{width:"80%"}}></span>
                                                                    {/* <!-- End .ratings --> */}
                                                                </div>
                                                                {/* <!-- End .product-ratings --> */}
                                                            </div>
                                                            {/* <!-- End .ratings-container --> */}

                                                            <div class="comment-info mb-1">
                                                                <h4 class="avatar-name">John Doe</h4> - <span class="comment-date">Novemeber 15, 2019</span>
                                                            </div>
                                                            {/* <!-- End .comment-info --> */}

                                                            <div class="comment-text">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                                    nisi ut aliquip.</p>
                                                            </div>
                                                            {/* <!-- End .comment-text --> */}
                                                        </div>
                                                        {/* <!-- End .comment-box --> */}
                                                    </li>
                                                    {/* <!-- comment-container --> */}

                                                    <li class="comment-container">
                                                        <div class="comment-avatar">
                                                            <img src="assets/images/avatar/avatar2.jpg" width="65" height="65" alt="avatar" />
                                                        </div>
                                                        {/* <!-- End .comment-avatar--> */}

                                                        <div class="comment-box">
                                                            <div class="ratings-container">
                                                                <div class="product-ratings">
                                                                    <span class="ratings" style={{width:"80%"}}></span>
                                                                    {/* <!-- End .ratings --> */}
                                                                </div>
                                                                {/* <!-- End .product-ratings --> */}
                                                            </div>
                                                            {/* <!-- End .ratings-container --> */}

                                                            <div class="comment-info mb-1">
                                                                <h4 class="avatar-name">John Doe</h4> - <span class="comment-date">Novemeber 15, 2019</span>
                                                            </div>
                                                            {/* <!-- End .comment-info --> */}

                                                            <div class="comment-text">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                                    nisi ut aliquip.</p>
                                                            </div>
                                                            {/* <!-- End .comment-text --> */}
                                                        </div>
                                                        {/* <!-- End .comment-box --> */}
                                                    </li>
                                                    {/* <!-- comment-container --> */}

                                                    <li class="comment-container">
                                                        <div class="comment-avatar">
                                                            <img src="assets/images/avatar/avatar3.jpg" width="65" height="65" alt="avatar" />
                                                        </div>
                                                        {/* <!-- End .comment-avatar--> */}

                                                        <div class="comment-box">
                                                            <div class="ratings-container">
                                                                <div class="product-ratings">
                                                                    <span class="ratings" style={{width:"80%"}}></span>
                                                                    {/* <!-- End .ratings --> */}
                                                                </div>
                                                                {/* <!-- End .product-ratings --> */}
                                                            </div>
                                                            {/* <!-- End .ratings-container --> */}

                                                            <div class="comment-info mb-1">
                                                                <h4 class="avatar-name">John Doe</h4> - <span class="comment-date">Novemeber 15, 2019</span>
                                                            </div>
                                                            {/* <!-- End .comment-info --> */}

                                                            <div class="comment-text">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                                    nisi ut aliquip.</p>
                                                            </div>
                                                            {/* <!-- End .comment-text --> */}
                                                        </div>
                                                        {/* <!-- End .comment-box --> */}
                                                    </li>
                                                    {/* <!-- comment-container --> */}
                                                </ol>
                                                {/* <!-- End .comment-list --> */}
                                            </div>

                                            <div class="col-xl-5">
                                                <div class="add-product-review">
                                                    <form action="#" class="comment-form m-0">
                                                        <h3 class="review-title">Add a Review</h3>

                                                        <div class="rating-form">
                                                            <label for="rating">Your rating</label>
                                                            <span class="rating-stars">
																<a class="star-1" href="#">1</a>
																<a class="star-2" href="#">2</a>
																<a class="star-3" href="#">3</a>
																<a class="star-4" href="#">4</a>
																<a class="star-5" href="#">5</a>
															</span>

                                                            <select name="rating" id="rating" required="" style={{display: "none;"}}>
																<option value="">Rate…</option>
																<option value="5">Perfect</option>
																<option value="4">Good</option>
																<option value="3">Average</option>
																<option value="2">Not that bad</option>
																<option value="1">Very poor</option>
															</select>
                                                        </div>

                                                        <div class="form-group">
                                                            <label>Your Review</label>
                                                            <textarea cols="5" rows="6" class="form-control form-control-sm"></textarea>
                                                        </div>
                                                        {/* <!-- End .form-group --> */}


                                                        <div class="row">
                                                            <div class="col-md-6 col-xl-12">
                                                                <div class="form-group">
                                                                    <label>Your Name</label>
                                                                    <input type="text" class="form-control form-control-sm" required />
                                                                </div>
                                                                {/* <!-- End .form-group --> */}
                                                            </div>

                                                            <div class="col-md-6 col-xl-12">
                                                                <div class="form-group">
                                                                    <label>Your E-mail</label>
                                                                    <input type="text" class="form-control form-control-sm" required />
                                                                </div>
                                                                {/* <!-- End .form-group --> */}
                                                            </div>
                                                        </div>

                                                        <input type="submit" class="btn btn-dark ls-n-15" value="Submit" />
                                                    </form>
                                                </div>
                                                {/* <!-- End .add-product-review --> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End .product-reviews-content --> */}
                                </div>
                                {/* <!-- End .tab-pane --> */}
                            </div>
                            {/* <!-- End .tab-content --> */}
                        </div>
                        {/* <!-- End .product-single-tabs --> */}
                    </div>
                    {/* <!-- End .main-content --> */}

                    <div class="sidebar-overlay"></div>
                    <div class="sidebar-toggle"><i class="fas fa-sliders-h"></i></div>
                    <aside class="sidebar-product col-lg-3 mobile-sidebar">
                        <div class="sidebar-wrapper">
                            <div class="widget widget-info">
                                <ul>
                                    <li>
                                        <i class="icon-shipping"></i>
                                        <h4>FREE<br />SHIPPING</h4>
                                    </li>
                                    <li>
                                        <i class="icon-us-dollar"></i>
                                        <h4>100% MONEY<br />BACK GUARANTEE</h4>
                                    </li>
                                    <li>
                                        <i class="icon-online-support"></i>
                                        <h4>ONLINE<br />SUPPORT 24/7</h4>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- End .widget --> */}

                            <div class="widget">
                                <a href="#">
									<img src="assets/images/banners/banner-sidebar.jpg" class="w-100" alt="Banner Desc" />
								</a>
                            </div>
                            {/* <!-- End .widget --> */}

                            <div class="widget widget-featured">
                                <h3 class="widget-title">Featured</h3>

                                <div class="widget-body">
                                    <div class="owl-carousel widget-featured-products">
                                        <div class="featured-col">
                                            <div class="product-default left-details product-widget">
                                                <figure>
                                                    <a href="product.html">
														<img src="assets/images/products/product-1.jpg" />
													</a>
                                                </figure>
                                                <div class="product-details">
                                                    <h5 class="product-title">
                                                        <a href="product.html">Product Short Name</a>
                                                    </h5>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style={{width:"100%"}}></span>
                                                            {/* <!-- End .ratings --> */}
                                                            <span class="tooltiptext tooltip-top"></span>
                                                        </div>
                                                        {/* <!-- End .product-ratings --> */}
                                                    </div>
                                                    {/* <!-- End .ratings-container --> */}
                                                    <div class="price-box">
                                                        <span class="product-price">$49.00</span>
                                                    </div>
                                                    {/* <!-- End .price-box --> */}
                                                </div>
                                                {/* <!-- End .product-details --> */}
                                            </div>
                                            <div class="product-default left-details product-widget">
                                                <figure>
                                                    <a href="product.html">
														<img src="assets/images/products/product-2.jpg" />
													</a>
                                                </figure>
                                                <div class="product-details">
                                                    <h5 class="product-title">
                                                        <a href="product.html">Product Short Name</a>
                                                    </h5>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style={{width:"100%"}}></span>
                                                            {/* <!-- End .ratings --> */}
                                                            <span class="tooltiptext tooltip-top"></span>
                                                        </div>
                                                        {/* <!-- End .product-ratings --> */}
                                                    </div>
                                                    {/* <!-- End .ratings-container --> */}
                                                    <div class="price-box">
                                                        <span class="product-price">$49.00</span>
                                                    </div>
                                                    {/* <!-- End .price-box --> */}
                                                </div>
                                                {/* <!-- End .product-details --> */}
                                            </div>
                                            <div class="product-default left-details product-widget">
                                                <figure>
                                                    <a href="product.html">
														<img src="assets/images/products/product-3.jpg" />
													</a>
                                                </figure>
                                                <div class="product-details">
                                                    <h5 class="product-title">
                                                        <a href="product.html">Product Short Name</a>
                                                    </h5>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style={{width:"100%"}}></span>
                                                            {/* <!-- End .ratings --> */}
                                                            <span class="tooltiptext tooltip-top"></span>
                                                        </div>
                                                        {/* <!-- End .product-ratings --> */}
                                                    </div>
                                                    {/* <!-- End .ratings-container --> */}
                                                    <div class="price-box">
                                                        <span class="product-price">$49.00</span>
                                                    </div>
                                                    {/* <!-- End .price-box --> */}
                                                </div>
                                                {/* <!-- End .product-details --> */}
                                            </div>
                                        </div>
                                        {/* <!-- End .featured-col --> */}

                                        <div class="featured-col">
                                            <div class="product-default left-details product-widget">
                                                <figure>
                                                    <a href="product.html">
														<img src="assets/images/products/product-4.jpg" />
													</a>
                                                </figure>
                                                <div class="product-details">
                                                    <h5 class="product-title">
                                                        <a href="product.html">Product Short Name</a>
                                                    </h5>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style={{width:"100%"}}></span>
                                                            {/* <!-- End .ratings --> */}
                                                            <span class="tooltiptext tooltip-top"></span>
                                                        </div>
                                                        {/* <!-- End .product-ratings --> */}
                                                    </div>
                                                    {/* <!-- End .ratings-container --> */}
                                                    <div class="price-box">
                                                        <span class="product-price">$49.00</span>
                                                    </div>
                                                    {/* <!-- End .price-box --> */}
                                                </div>
                                                {/* <!-- End .product-details --> */}
                                            </div>
                                            <div class="product-default left-details product-widget">
                                                <figure>
                                                    <a href="product.html">
														<img src="assets/images/products/product-5.jpg" />
													</a>
                                                </figure>
                                                <div class="product-details">
                                                    <h5 class="product-title">
                                                        <a href="product.html">Product Short Name</a>
                                                    </h5>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style={{width:"100%"}}></span>
                                                            {/* <!-- End .ratings --> */}
                                                            <span class="tooltiptext tooltip-top"></span>
                                                        </div>
                                                        {/* <!-- End .product-ratings --> */}
                                                    </div>
                                                    {/* <!-- End .ratings-container --> */}
                                                    <div class="price-box">
                                                        <span class="product-price">$49.00</span>
                                                    </div>
                                                    {/* <!-- End .price-box --> */}
                                                </div>
                                                {/* <!-- End .product-details --> */}
                                            </div>
                                            <div class="product-default left-details product-widget">
                                                <figure>
                                                    <a href="product.html">
														<img src="assets/images/products/product-6.jpg" />
													</a>
                                                </figure>
                                                <div class="product-details">
                                                    <h5 class="product-title">
                                                        <a href="product.html">Product Short Name</a>
                                                    </h5>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style={{width:"100%"}}></span>
                                                            {/* <!-- End .ratings --> */}
                                                            <span class="tooltiptext tooltip-top"></span>
                                                        </div>
                                                        {/* <!-- End .product-ratings --> */}
                                                    </div>
                                                    {/* <!-- End .ratings-container --> */}
                                                    <div class="price-box">
                                                        <span class="product-price">$49.00</span>
                                                    </div>
                                                    {/* <!-- End .price-box --> */}
                                                </div>
                                                {/* <!-- End .product-details --> */}
                                            </div>
                                        </div>
                                        {/* <!-- End .featured-col --> */}
                                    </div>
                                    {/* <!-- End .widget-featured-slider --> */}
                                </div>
                                {/* <!-- End .widget-body --> */}
                            </div>
                            {/* <!-- End .widget --> */}
                        </div>
                    </aside>
                    {/* <!-- End .col-lg-3 --> */}
                </div>
                {/* <!-- End .row --> */}
            </div>
            {/* <!-- End .container --> */}

            <div class="products-section">
                <div class="container">
                    <h2>Related Products</h2>

                    <div class="products-slider owl-carousel owl-theme dots-top">
                        <div class="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="product.html">
									<img src="assets/images/products/product-1.jpg" />
								</a>
                                <div class="label-group">
                                    <span class="product-label label-sale">-20%</span>
                                </div>
                                <div class="btn-icon-group">
                                    <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-shopping-cart"></i></button>
                                </div>
                                <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick View</a>
                            </figure>
                            <div class="product-details">
                                <div class="category-wrap">
                                    <div class="category-list">
                                        <a href="category.html" class="product-category">category</a>
                                    </div>
                                </div>
                                <h3 class="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style={{width:"100%"}}></span>
                                        {/* <!-- End .ratings --> */}
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    {/* <!-- End .product-ratings --> */}
                                </div>
                                {/* <!-- End .ratings-container --> */}
                                <div class="price-box">
                                    <span class="old-price">$59.00</span>
                                    <span class="product-price">$49.00</span>
                                </div>
                                {/* <!-- End .price-box --> */}
                            </div>
                            {/* <!-- End .product-details --> */}
                        </div>
                        <div class="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="product.html">
									<img src="assets/images/products/product-2.jpg" />
								</a>
                                <div class="btn-icon-group">
                                    <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-shopping-cart"></i></button>
                                </div>
                                <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick View</a>
                            </figure>
                            <div class="product-details">
                                <div class="category-wrap">
                                    <div class="category-list">
                                        <a href="category.html" class="product-category">category</a>
                                    </div>
                                </div>
                                <h3 class="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style={{width:"100%"}}></span>
                                        {/* <!-- End .ratings --> */}
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    {/* <!-- End .product-ratings --> */}
                                </div>
                                {/* <!-- End .ratings-container --> */}
                                <div class="price-box">
                                    <span class="old-price">$59.00</span>
                                    <span class="product-price">$49.00</span>
                                </div>
                                {/* <!-- End .price-box --> */}
                            </div>
                            {/* <!-- End .product-details --> */}
                        </div>
                        <div class="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="product.html">
									<img src="assets/images/products/product-3.jpg" />
								</a>
                                <div class="btn-icon-group">
                                    <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-shopping-cart"></i></button>
                                </div>
                                <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick View</a>
                            </figure>
                            <div class="product-details">
                                <div class="category-wrap">
                                    <div class="category-list">
                                        <a href="category.html" class="product-category">category</a>
                                    </div>
                                </div>
                                <h3 class="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style={{width:"100%"}}></span>
                                        {/* <!-- End .ratings --> */}
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    {/* <!-- End .product-ratings --> */}
                                </div>
                                {/* <!-- End .ratings-container --> */}
                                <div class="price-box">
                                    <span class="old-price">$59.00</span>
                                    <span class="product-price">$49.00</span>
                                </div>
                                {/* <!-- End .price-box --> */}
                            </div>
                            {/* <!-- End .product-details --> */}
                        </div>
                        <div class="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="product.html">
									<img src="assets/images/products/product-4.jpg" /> 
								</a>
                                <div class="label-group">
                                    <span class="product-label label-hot">HOT</span>
                                </div>
                                <div class="btn-icon-group">
                                    <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-shopping-cart"></i></button>
                                </div>
                                <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick View</a>
                            </figure>
                            <div class="product-details">
                                <div class="category-wrap">
                                    <div class="category-list">
                                        <a href="category.html" class="product-category">category</a>
                                    </div>
                                </div>
                                <h3 class="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style={{width:"100%"}}></span>
                                        {/* <!-- End .ratings --> */}
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    {/* <!-- End .product-ratings --> */}
                                </div>
                                {/* <!-- End .ratings-container --> */}
                                <div class="price-box">
                                    <span class="old-price">$59.00</span>
                                    <span class="product-price">$49.00</span>
                                </div>
                                {/* <!-- End .price-box --> */}
                            </div>
                            {/* <!-- End .product-details --> */}
                        </div>
                        <div class="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="product.html">
									<img src="assets/images/products/product-5.jpg" />
								</a>
                                <div class="label-group">
                                    <span class="product-label label-hot">HOT</span>
                                </div>
                                <div class="btn-icon-group">
                                    <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-shopping-cart"></i></button>
                                </div>
                                <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick View</a>
                            </figure>
                            <div class="product-details">
                                <div class="category-wrap">
                                    <div class="category-list">
                                        <a href="category.html" class="product-category">category</a>
                                    </div>
                                </div>
                                <h3 class="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style={{width:"100%"}}></span>
                                        {/* <!-- End .ratings --> */}
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    {/* <!-- End .product-ratings --> */}
                                </div>
                                {/* <!-- End .ratings-container --> */}
                                <div class="price-box">
                                    <span class="old-price">$59.00</span>
                                    <span class="product-price">$49.00</span>
                                </div>
                                {/* <!-- End .price-box --> */}
                            </div>
                            {/* <!-- End .product-details --> */}
                        </div>
                        <div class="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="product.html">
									<img src="assets/images/products/product-6.jpg" />
								</a>
                                <div class="label-group">
                                    <span class="product-label label-sale">-30%</span>
                                </div>
                                <div class="btn-icon-group">
                                    <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-shopping-cart"></i></button>
                                </div>
                                <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick View</a>
                            </figure>
                            <div class="product-details">
                                <div class="category-wrap">
                                    <div class="category-list">
                                        <a href="category.html" class="product-category">category</a>
                                    </div>
                                </div>
                                <h3 class="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style={{width:"100%"}}></span>
                                        {/* <!-- End .ratings --> */}
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    {/* <!-- End .product-ratings --> */}
                                </div>
                                {/* <!-- End .ratings-container --> */}
                                <div class="price-box">
                                    <span class="old-price">$59.00</span>
                                    <span class="product-price">$49.00</span>
                                </div>
                                {/* <!-- End .price-box --> */}
                            </div>
                            {/* <!-- End .product-details --> */}
                        </div>
                        <div class="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="product.html">
									<img src="assets/images/products/product-1.jpg" />
								</a>
                                <div class="label-group">
                                    <span class="product-label label-sale">-20%</span>
                                </div>
                                <div class="btn-icon-group">
                                    <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-shopping-cart"></i></button>
                                </div>
                                <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick View</a>
                            </figure>
                            <div class="product-details">
                                <div class="category-wrap">
                                    <div class="category-list">
                                        <a href="category.html" class="product-category">category</a>
                                    </div>
                                </div>
                                <h3 class="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h3>
                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" style={{width:"100%"}}></span>
                                        {/* <!-- End .ratings --> */}
                                        <span class="tooltiptext tooltip-top"></span>
                                    </div>
                                    {/* <!-- End .product-ratings --> */}
                                </div>
                                {/* <!-- End .ratings-container --> */}
                                <div class="price-box">
                                    <span class="old-price">$59.00</span>
                                    <span class="product-price">$49.00</span>
                                </div>
                                {/* <!-- End .price-box --> */}
                            </div>
                            {/* <!-- End .product-details --> */}
                        </div>
                    </div>
                    {/* <!-- End .products-slider --> */}
                </div>
                {/* <!-- End .container --> */}
            </div>
            {/* <!-- End .products-section --> */}
        </main>
        {/* <!-- End .main --> */}
        </div>
        </div>

    
    )
}
