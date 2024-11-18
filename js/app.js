(function(window, document, $, undefined) {
    "use strict";
    var slipfitInit = {
        i: function(e) {
            slipfitInit.s();
            slipfitInit.methods();
        },
        s: function(e) {
            (this._window = $(window)),
            (this._document = $(document)),
            (this._body = $("body")),
            (this._html = $("html"));
        },
        methods: function(e) {
            slipfitInit.w();
            slipfitInit.hidepreloader();
            slipfitInit.formValidation();
            slipfitInit.contactForm();
            slipfitInit.slipfitBackToTop();
            slipfitInit.intializeSlick();
            slipfitInit.salActivation();
            slipfitInit.magnificPopupActivation();
            slipfitInit.countdownInit(".countdown", "2025/12/01");
            slipfitInit.filtersCollapse();
            slipfitInit.billingFields();
            slipfitInit.productFilter();
        },
        w: function(e) {
            this._window.on("load", slipfitInit.l).on("scroll", slipfitInit.res);
        },
        hidepreloader: function() {
            setTimeout(function() {
                $('#ctn-preloader').addClass('loaded');
                $('body').removeClass('no-scroll-y');

                if ($('#ctn-preloader').hasClass('loaded')) {
                    $('#preloader').delay(1000).queue(function() {
                        $(this).remove();
                    });
                }
            }, 3000);
        },

        formValidation: function() {
            if ($(".contact-form").length) {
                $(".contact-form").validate();
            }
        },

        contactForm: function() {
            $(".slipfit-contact-form").on("submit", function(e) {
                e.preventDefault();
                var _self = $(this);
                var _selector = _self.closest("input,textarea");
                _self.closest("div").find("input,textarea").removeAttr("style");
                _self.find(".error-msg").remove();
                _self
                    .closest("div")
                    .find('button[type="submit"]')
                    .attr("disabled", "disabled");
                var data = $(this).serialize();
                $.ajax({
                    url: "./assets/mail/contact.php",
                    type: "post",
                    dataType: "json",
                    data: data,
                    success: function(data) {
                        _self.find('button[type="submit"]').removeAttr("disabled");
                        if (data.success) {
                            document.getElementById("message").innerHTML =
                                "Email Sent Successfully";
                        } else {
                            document.getElementById("message").innerHTML =
                                "There is an error";
                        }
                        $("#message").slideDown("slow");
                        setTimeout(function() {
                            $("#message").slideUp("hide");
                        }, 3000);
                    },
                });
            });
        },

        slipfitBackToTop: function() {
            var btn = $("#backto-top");
            $(window).on("scroll", function() {
                if ($(window).scrollTop() > 300) {
                    btn.addClass("show");
                } else {
                    btn.removeClass("show");
                }
            });
            btn.on("click", function(e) {
                e.preventDefault();
                $("html, body").animate({
                        scrollTop: 0,
                    },
                    "300"
                );
            });
        },

        salActivation: function() {
            sal({
                threshold: 0.1,
                once: true,
            });
        },
        intializeSlick: function(e) {
            if ($(".testimonial-slider").length) {
                $(".testimonial-slider").slick({
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 2000,
                    responsive: [{
                            breakpoint: 991,
                            settings: {
                                arrows: false,
                                slidesToShow: 2,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: false,
                                slidesToShow: 1,
                            },
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                arrows: false,
                                slidesToShow: 1,
                            },
                        },
                    ],
                });
            }
            if ($(".product-slider").length) {
                $(".product-slider").slick({
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 2000,
                    responsive: [{
                            breakpoint: 1200,
                            settings: {
                                arrows: false,
                                slidesToShow: 2,
                            },
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                arrows: false,
                                slidesToShow: 1,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: false,
                                slidesToShow: 1,
                            },
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                arrows: false,
                                slidesToShow: 1,
                            },
                        },
                    ],
                });
            }
            if ($(".partiner-slider").length) {
                $(".partiner-slider").slick({
                    infinite: true,
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    responsive: [{
                            breakpoint: 768,
                            settings: {
                                arrows: false,
                                slidesToShow: 2,
                            },
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                arrows: false,
                                slidesToShow: 2,
                            },
                        },
                    ],
                });
            }
            if ($(".preview-slider").length) {
                $(".preview-slider").slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: ".preview-slider-nav",
                });
            }
            if ($(".preview-slider-nav").length) {
                $(".preview-slider-nav").slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    asNavFor: ".preview-slider",
                    dots: false,
                    arrows: true,
                    centerMode: false,
                    focusOnSelect: true,
                    responsive: [{
                            breakpoint: 990,
                            settings: {
                                arrows: false,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: false,
                                slidesToShow: 2,
                            },
                        },
                    ],
                });
            }
        },

        magnificPopupActivation: function() {
            var imagepreview = $(".preview");
            if (imagepreview.length) {
                imagepreview.magnificPopup({
                    disableOn: 300,
                    type: "image",
                    mainClass: "mfp-fade",
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false,
                });
            }

            var promotion = $(".promotion");
            if (promotion.length) {
                $.magnificPopup.open({
                    items: {
                        src: ".promotion"
                    },
                    type: "inline",
                });
            }
        },

        countdownInit: function(countdownSelector, countdownTime) {
            var eventCounter = $(countdownSelector);
            if (eventCounter.length) {
                eventCounter.countdown(countdownTime, function(e) {
                    $(this).html(
                        e.strftime(
                            " <li>%D<small>d</small></li>\
                            <li>%H<small>h</small></li>\
                            <li>%M<small>m</small></li>\
                            <li>%S<small>s</small></li>"
                        )
                    );
                });
            }
        },
        filtersCollapse: function() {
            var filters = $(".filters-trigger");
            if (filters.length) {
                filters.on('click', function() {
                    if ($('.filters-collapse-mobile').is(":visible")) {
                        $('.filters-collapse-mobile').hide('slow');
                    } else {
                        $('.filters-collapse-mobile').show('slow');
                    }
                });
            }
        },
        billingFields: function() {
            var filters = $('input[name="same_billing"]');
            if (filters.length) {
                filters.on('change', function() {
                    if ($('input[name="same_billing"]').is(":checked")) {
                        $('.billing-details').hide('slow');
                    } else {
                        $('.billing-details').show('slow');
                    }
                });
            }
        },
        productFilter: function() {
            var filters = $('.modify-all');
            if (filters.length) {
                filters.on('change', function() {
                    if ($('.modify-all').is(":checked")) {
                        $('input[name="product[]"]').prop('checked', true);
                    } else {
                        $('input[name="product[]"]').prop('checked', false);
                    }
                });
            }

            var filters = $('.filters');
            if (filters.length) {
                $('.filters input').on('change', function() {
                    filters.submit();
                });
            }
        }
    };
    slipfitInit.i();
})(window, document, jQuery);