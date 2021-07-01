import React, { useEffect ,useState} from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector ,useDispatch } from 'react-redux';
import axios from 'axios';
import { deleteTodo} from '../Actions/TodoActions';

// import _ from 'underscore';




export default function Cart() {



const [deletresponse, setdeletedresponse] = useState([])



const dispatch = useDispatch()





    const z = useSelector(state =>state.shopingtocart);

console.log(z)



var h=[...z]
console.log(h)

var y=h.map((l)=>{return (
    // console.log(l._id)

    <tbody >
    <tr class="product-row">
        <td class="product-col">
            <figure class="product-image-container">
                <a href="product.html" class="product-image">
                    <img src={`http://localhost:9000/${l.images.mainimage}`} alt="product" />
                </a>
            </figure>
            <h2 class="product-title">
                <a href="product.html">Running Sneakers</a>
            </h2>
        </td>
        <td>$17.90</td>
        <td>
            <input class="vertical-quantity form-control" type="text" />
        </td>
        {/* <td><div class="input-group  bootstrap-touchspin bootstrap-touchspin-injected">
            <input class="vertical-quantity form-control" type="text" />
        <span class="input-group-btn-vertical">
            <button class="btn btn-outline bootstrap-touchspin-up icon-up-dir" type="button">
                </button>
                <button class="btn btn-outline bootstrap-touchspin-down icon-down-dir" type="button">
                    </button>
                    </span>
                    </div></td> */}
      
        <td>$17.90</td>
    </tr>
    <tr class="product-action-row">
        <td colspan="4" class="clearfix">
            <div class="float-left">
                <a href="#" class="btn-move">Move to Wishlist</a>
            </div>
            {/* <!-- End .float-left --> */}

            <div class="float-right">
                <a  title="Edit product" class="btn-edit"><span class="sr-only">Edit</span><i class="icon-pencil"></i></a>
                <button title="Remove product" class="btn-remove icon-cancel" onClick={()=>{delt(l._id,"delet")}}><span class="sr-only"  >Remove</span></button>
            </div>
            {/* <!-- End .float-right --> */}
        </td>
    </tr>

</tbody>

)
})




function delt (id,action){
    alert("delt function")
    console.log(id)

if(action==="delet"){
    axios.get('http://localhost:9000/delete-shopingcart1?id='+id).then(
        (res) => {
            console.log(res.data.msg)
console.log(res.data.dlt)
            // axios.get('http://localhost:9000/delete-shopingcart1').then(
            //     (res) => {
            //         console.log(res.data.msg)
            //         setdeletedresponse(res.data.msg)
            //     }
            // )

        }
    )
}
dispatch(deleteTodo(id))


}




// console.log(deletresponse)





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
            

        <main class="main" style={margin}>
            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Men</a></li>
                        <li class="breadcrumb-item"><a href="#">Accessories</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Classic Crew Neck Sweatshirt</li>
                    </ol>
                </div>
                {/* <!-- End .container --> */}
            </nav>

            <div class="page-header">
                <div class="container">
                    <h1>Shopping Cart</h1>
                </div>
                {/* <!-- End .container --> */}
            </div>
            {/* <!-- End .page-header --> */}

            <div class="container">
                <div class="row row-sparse">
                    <div class="col-lg-8 padding-right-lg">
                        <div class="cart-table-container">
                            <table class="table table-cart">
                                <thead>
                                    <tr>
                                        <th class="product-col">Product</th>
                                        <th class="price-col">Price</th>
                                        <th class="qty-col">Qty</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                {/* <tbody> */}
                                 {y}
                                {/* </tbody> */}

                                <tfoot>
                                    <tr>
                                        <td colspan="4" class="clearfix">
                                            <div class="float-left">
                                                <a href="category.html" class="btn btn-outline-secondary">Continue Shopping</a>
                                            </div>
                                            {/* <!-- End .float-left --> */}

                                            <div class="float-right">
                                                <a href="#" class="btn btn-outline-secondary btn-clear-cart">Clear Shopping Cart</a>
                                                <a href="#" class="btn btn-outline-secondary btn-update-cart">Update Shopping Cart</a>
                                            </div>
                                            {/* <!-- End .float-right --> */}
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        {/* <!-- End .cart-table-container --> */}

                        <div class="cart-discount">
                            <h4>Apply Discount Code</h4>
                            <form action="#">
                                <div class="input-group">
                                    <input type="text" class="form-control form-control-sm" placeholder="Enter discount code" required />
                                    <div class="input-group-append">
                                        <button class="btn btn-sm btn-primary" type="submit">Apply Discount</button>
                                    </div>
                                </div>
                                {/* <!-- End .input-group --> */}
                            </form>
                        </div>
                        {/* <!-- End .cart-discount --> */}
                    </div>
                    {/* <!-- End .col-lg-8 --> */}

                    <div class="col-lg-4">
                        <div class="cart-summary">
                            <h3>Summary</h3>

                            <h4>
                                <a data-toggle="collapse" href="#total-estimate-section" class="collapsed" role="button" aria-expanded="false" aria-controls="total-estimate-section">Estimate Shipping and Tax</a>
                            </h4>

                            <div class="collapse" id="total-estimate-section">
                                <form action="#">
                                    <div class="form-group form-group-sm">
                                        <label>Country</label>
                                        <div class="select-custom">
                                            <select class="form-control form-control-sm">
												<option value="USA">United States</option>
												<option value="Turkey">Turkey</option>
												<option value="China">China</option>
												<option value="Germany">Germany</option>
											</select>
                                        </div>
                                        {/* <!-- End .select-custom --> */}
                                    </div>
                                    {/* <!-- End .form-group --> */}

                                    <div class="form-group form-group-sm">
                                        <label>State/Province</label>
                                        <div class="select-custom">
                                            <select class="form-control form-control-sm">
												<option value="CA">California</option>
												<option value="TX">Texas</option>
											</select>
                                        </div>
                                        {/* <!-- End .select-custom --> */}
                                    </div>
                                    {/* <!-- End .form-group --> */}

                                    <div class="form-group form-group-sm">
                                        <label>Zip/Postal Code</label>
                                        <input type="text" class="form-control form-control-sm" />
                                    </div>
                                    {/* <!-- End .form-group --> */}

                                    <div class="form-group form-group-custom-control">
                                        <label>Flat Way</label>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="flat-rate" />
                                            <label class="custom-control-label" for="flat-rate">Fixed $5.00</label>
                                        </div>
                                        {/* <!-- End .custom-checkbox --> */}
                                    </div>
                                    {/* <!-- End .form-group --> */}

                                    <div class="form-group form-group-custom-control">
                                        <label>Best Rate</label>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="best-rate" />
                                            <label class="custom-control-label" for="best-rate">Table Rate $15.00</label>
                                        </div>
                                        {/* <!-- End .custom-checkbox --> */}
                                    </div>
                                    {/* <!-- End .form-group --> */}
                                </form>
                            </div>
                            {/* <!-- End #total-estimate-section --> */}

                            <table class="table table-totals">
                                <tbody>
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>$17.90</td>
                                    </tr>

                                    <tr>
                                        <td>Tax</td>
                                        <td>$0.00</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>Order Total</td>
                                        <td>$17.90</td>
                                    </tr>
                                </tfoot>
                            </table>

                            <div class="checkout-methods">
                                <NavLink  to ="/checkout"class="btn btn-block btn-sm btn-primary">Go to Checkout</NavLink>
                                <a href="#" class="btn btn-link btn-block">Check Out with Multiple Addresses</a>
                            </div>
                            {/* <!-- End .checkout-methods --> */}
                        </div>
                        {/* <!-- End .cart-summary --> */}
                    </div>
                    {/* <!-- End .col-lg-4 --> */}
                </div>
                {/* <!-- End .row --> */}
            </div>
            {/* <!-- End .container --> */}

            <div class="mb-6"></div>
            {/* <!-- margin --> */}
        </main>
        </div>
    )
}
