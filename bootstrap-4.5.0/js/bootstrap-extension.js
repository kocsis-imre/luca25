/********************************************************
 * Copyright (c) 2018-2020 Peter Joiner — AKK IT, Inc. *
 ********************************************************/
$(document).ready(run);

function run() {
    const SCROLL_TIME = 1000;
    const MENU_HEIGHT = $(".navbar").first().innerHeight() + parseInt($(".navbar").first().css("margin-top")) + parseInt($(".navbar").first().css("margin-bottom")) - 1;
    const TOTOP_BGCOLOR = $("#toTop").css("background-color");
    const TOTOP_COLOR = $("#toTop").css("color");
    const SELECT_FORM_ITEM_COLOR = "#495057";
    var wb_img_count = 0;

    /* ----------
     *  parallax
     * ---------- */

    $(".parallax").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-img-src")+ ")");
    });

    parallaxScroll();
    $(window).on("scroll", parallaxScroll);
    $(window).on("resize", parallaxScroll);

    function parallaxScroll() {
        $(".parallax").each(function() {
            if ($(this).attr("data-speed") < 0 || $(this).attr("data-speed") > 1) {
                $(this).attr("data-speed", 0);
            }
            var posY = -$(this).attr("data-speed") * ($(window).scrollTop() - $(this).prop("originPosY"));
            $(this).prop("originPosY", $(this).offset().top).css({
                "background-position-y": posY
            });
        });
    }

    /* ----------------------------
     *  input file change to image
     * ---------------------------- */

    $(".image-for-input").each(function () {
        $(this).hide();
        $(this).siblings("img").on("click", function () {
            $(this).siblings("input").click();
        });
    });

    $("[type=file]").on("change", function () {
        var id = $(this).attr("id");
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $("#" + id).siblings("img").attr("src", e.target.result);
            };
            reader.readAsDataURL(this.files[0]);
        }
    });

    /* ------------------------------
     *  select form item placeholder
     * ------------------------------ */

    $("select").each(function() {
        if ($(this).attr("required") === "required" && $(this).val() === "") {
            $(this).children().first().attr({
                "disabled": "disabled",
                "selected": "selected"
            }).hide();

            $(this).css("color", "#aaa").children().not($(this).children().first()).css("color", SELECT_FORM_ITEM_COLOR);
        }
    });

    $("select").on("change", function() {
        $(this).css("color", SELECT_FORM_ITEM_COLOR);
    });

    /* --------------
     *  be-formcheck
     * -------------- */
    $(".be-formcheck").attr({
        "onsubmit": "return formCheck(this)",
        "novalidate": "novalidate"
    });

    $(".be-formcheck input, .be-formcheck textarea, .be-formcheck select").not('input[type="hidden"]').each(function(i, tag) {
        $(tag).parent().prop("tagName").toLowerCase() === "div" ? $(tag).before('<div class="form-error">') : $(tag).parent().before('<div class="form-error">');
        if ($(tag).attr("required") === "required" && $(tag).attr("placeholder")) {
            $(tag).attr("placeholder", $(tag).attr("placeholder") + "*");
        }
        if ($(tag).attr("required") === "required" && $(tag).prop("tagName").toLowerCase() === "select" && $(tag).val() === null) {
            $(tag).children().first().html($(tag).children().first().html() + "*");
        }
    });

    $(".form-error").hide();

    /* --------------
     *  be-accordion
     * -------------- */

    $(document).ready(function () {
        $(".be-accordion").each(function () {
            var currentAccordion = $(this);
            currentAccordion.children(".card").wrap("<div>");
            currentAccordion.children().css("padding-left", 20).children(".card").children(".card-header").children().css("width", "100%").children("a").css("cursor", "pointer").each(function () {
                $(this).parent().parent().siblings().hasClass("show") ? $(this).parent().parent().parent().parent().css("border-left", "solid 3px " + $(this).parent().parent().parent().css("color")) : $(this).parent().parent().parent().parent().css("border-left", "solid 3px transparent");
                var marker = $(this).parent().parent().siblings().hasClass("show") ? "−" : "+";
                $(this).append("<span>" + marker + "</span>");
                $(this).children("span").css({"display": "block", "float": "right"});
            });
            currentAccordion.children().children(".card").children(".card-header").children().children("a").on("click", function () {
                currentAccordion.children().css("border-left", "solid 3px transparent");
                currentAccordion.children().children(".card").children(".card-header").children().children("a").children("span").html("+");
                $(this).parent().parent().siblings().hasClass("show") ? $(this).parent().parent().parent().parent().css("border-left", "solid 3px tansparent") : $(this).parent().parent().parent().parent().css("border-left", "solid 3px " + $(this).parent().parent().parent().css("color"));
                $(this).parent().parent().siblings().hasClass("show") ? $(this).children().html("+") : $(this).children().html("−");
            });
        });
    });

    /* ---------
     *  rolling
     * --------- */

    $(".rolling").click(menuClick);

    function menuClick(event) {
        event.preventDefault();
        var id = $(this).attr("href");
        $("html, body").animate({"scrollTop": $(id).offset().top - MENU_HEIGHT}, SCROLL_TIME);
        $(".navbar .collapse").collapse('hide');
    }

    /* -------
     *  toTop
     * ------- */

    $("#toTop").append('<div>');
    $("#toTop div").css({
        "border-left": "solid 8px " + TOTOP_BGCOLOR,
        "border-right": "solid 8px " + TOTOP_BGCOLOR,
        "border-bottom": "solid 15px " + TOTOP_COLOR,
        "width": 0
    });
    $("#toTop").css({
        "background-color": TOTOP_BGCOLOR,
        "padding": "13px",
        "position": "fixed",
        "right": "50px",
        "bottom": "50px",
        "cursor": "pointer",
        "display": "none",
        "z-index": 30000
    });

    toTopSetup();
    $(window).scroll(toTopSetup);
    $(window).resize(toTopSetup);
    $("#toTop").click(gotoTop);

    function toTopSetup() {
        $(window).scrollTop() > 100 ? $("#toTop").fadeIn() : $("#toTop").fadeOut();
    }

    function gotoTop() {
        $("html, body").animate({"scrollTop": 0}, SCROLL_TIME);
    }

    /* ------------
     *  hover-zoom
     * ------------ */

    $('.hover-zoom img').css({
        'float': 'left',
        'transition': 'all 0.5s'
    });
    $('head').append('<style>.hover-zoom img:hover {transform: scale(1.2)}');
    $('.hover-zoom img').wrap('<div class="hover-zoom-box">');
    $('.hover-zoom-box').css('overflow', 'hidden');

    /* --------------
     *  Alpha Slider
     * -------------- */

    var imagesLoaded = setInterval(function () {
        const carouselImages = $("#alpha-slider img");
        if (carouselImages.length > 0 && typeof carouselImages.first().get(0).naturalWidth !== typeof undefined && carouselImages.first().get(0).naturalWidth !== false) {
            clearInterval(imagesLoaded);
            const carousel = $("#alpha-slider");
            const carouselImagesNaturalWidth = carouselImages.first().get(0).naturalWidth;
            const carouselImagesNaturalHeight = carouselImages.first().get(0).naturalHeight;
            const zoomAuto = $(".zoom-auto img");
            const carouselCaptions = $("#alpha-slider .alpha-slider-caption");
            const dataInterval = typeof carousel.attr("data-interval") !== 'undefined' ? carousel.attr("data-interval") : 5000;

            var aktCarouselImage = 0;
            var aktCarouselZIndex = 20000;
            var carouselClickEnabled = true;
            var carouselTimer = setTimeout(carouselValt, dataInterval);

            carouselImages.css({
                "position": "absolute",
                "left": 0,
                "width": "100%",
                "z-index": aktCarouselZIndex
            });

            carouselCaptions.css({
                "position": "absolute",
                "width": "60%",
                "margin": "0 20%",
                "z-index": aktCarouselZIndex - 100
            });

            // indikátor gombok
            for (i = 0; i < carouselImages.length; i++) {
                carousel.append('<div class="carouselIndicator-item">');
                $("#alpha-slider div").last().prop("azon", i);
            }
            $("#alpha-slider .carouselIndicator-item").wrapAll('<div id="carouselIndicator">');

            var carouselIndicator = $("#carouselIndicator");
            var carouselIndicatorItems = $("#carouselIndicator .carouselIndicator-item");

            carouselIndicator.css({
                "position": "relative",
                "float": "left",
                "z-index": aktCarouselZIndex + 70000
            });

            carouselIndicatorItems.css({
                "width": 16,
                "height": 16,
                "background-color": "black",
                "float": "left",
                "margin": "0 10px",
                "border-radius": "50%",
                "cursor": "pointer"
            });

            carouselIndicatorItems.first().css({
                "background-color": "white"
            });

            // arrows
            carousel.append('<div id="carouselLeftBtn">');
            carousel.append('<div id="carouselRightBtn">');
            var carouselLeftBtn = $("#carouselLeftBtn");
            var carouselRightBtn = $("#carouselRightBtn");

            $("#carouselLeftBtn, #carouselRightBtn").css({
                "cursor": "pointer",
                "position": "relative",
                "width": 0,
                "border-top": "solid 10px transparent",
                "border-bottom": "solid 10px transparent",
                "z-index": aktCarouselZIndex + 70000
            });

            carouselLeftBtn.css({
                "border-right": "solid 18px black"
            });

            carouselRightBtn.css({
                "border-left": "solid 18px black"
            });

            carouselImages.not(carouselImages.first()).css("opacity", 0); // csak az első kép látszódik
            carouselCaptions.first().css("z-index", aktCarouselZIndex + 1);

            var carouselTimerZoom = setInterval(function () {
                var prevCarouselImage = aktCarouselImage > 0 ? aktCarouselImage - 1 : carouselImages.length - 1;
                zoomAuto.each(function () {
                    if ($(this).attr("src") === carouselImages.eq(aktCarouselImage).attr("src") || $(this).attr("src") === carouselImages.eq(prevCarouselImage).attr("src")) {
                        $(this).css({
                            "width": "+=0.01%",
                            "margin-left": "-=0.005%"
                        });
                    }
                });
            }, 2);

            carousel.css({
                "overflow": "hidden",
                "position": "relative",
                "display": "block"
            });

            atmeretez();
            $(window).on("resize", atmeretez);

            carouselLeftBtn.on("click", function () {
                if (carouselClickEnabled) {
                    aktCarouselImage -= 2;
                    carouselValt();
                }
            });

            carouselRightBtn.on("click", function () {
                if (carouselClickEnabled) {
                    carouselValt();
                }
            });

            carouselIndicatorItems.on("click", function () {
                if (carouselClickEnabled && $(this).prop("azon") !== aktCarouselImage) {
                    aktCarouselImage = $(this).prop("azon") - 1;
                    carouselValt();
                }
            });

            function atmeretez() {
                var resizeTimer;
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function () {
                    carousel.css("height", carousel.width() * carouselImagesNaturalHeight / carouselImagesNaturalWidth);
                    carouselCaptions.each(function () {
                        $(this).css("margin-top", (parseInt(carousel.css("height")) - parseInt($(this).css("height"))) / 2);
                    });
                    carouselLeftBtn.css({
                        "left": 20,
                        "top": (parseInt(carousel.css("height")) - parseInt(carouselLeftBtn.css("height"))) / 2
                    });
                    carouselRightBtn.css({
                        "left": parseInt(carousel.css("width")) - 40,
                        "top": (parseInt(carousel.css("height")) - parseInt(carouselRightBtn.css("height"))) / 2 - 20
                    });
                    carouselIndicator.css({
                        "left": (parseInt(carousel.css("width")) - parseInt(carouselIndicator.css("width"))) / 2,
                        "top": parseInt(carousel.css("height")) - 40
                    });
                }, 10);
            }

            function carouselValt() {
                carouselClickEnabled = false;
                clearTimeout(carouselTimer);
                carouselImages.stop(true).clearQueue();
                aktCarouselImage++;
                aktCarouselZIndex += 2;
                if (aktCarouselImage === carouselImages.length) {
                    aktCarouselImage = 0;
                } else
                if (aktCarouselImage < 0) {
                    aktCarouselImage = carouselImages.length - 1;
                }
                carouselIndicatorItems.css("background-color", "black");
                carouselIndicatorItems.eq(aktCarouselImage).css("background-color", "white");
                carouselImages.eq(aktCarouselImage).css({
                    "opacity": 0,
                    "z-index": aktCarouselZIndex,
                    "width": "100%",
                    "margin-left": 0,
                    "margin-top": 0
                });
                carouselImages.eq(aktCarouselImage).animate({
                    "opacity": 1
                }, 2000, function () {
                    carouselClickEnabled = true;
                    carouselCaptions.eq(aktCarouselImage).css({
                        "top": -(parseInt(carousel.css("height")) - parseInt(carouselCaptions.eq(aktCarouselImage).css("height"))) / 2 - parseInt(carouselCaptions.eq(aktCarouselImage).css("height")),
                        "z-index": aktCarouselZIndex + 1
                    }).animate({"top": 0}, 1000);
                }).delay(dataInterval - 2000).queue(carouselValt);
            }
        }
    }, 10);

    /* ----------
     *  Whitebox
     * ---------- */

    $(".wb-link").on("click", function (e) {
        e.preventDefault();
        var wb_linkId = $(this);
        $("body").css("overflow", "hidden");
        $("body script").first().before('<div class="wb-bg">');
        $(".wb-bg").animate({
            "opacity": 1
        }, 1000, function () {
            var wb_sizes = [];
            var wb_thumbnail2_width = 0;

            $(".wb-bg").after('<a class="text-white display-5">&times;</a>');
            $(".wb-bg+a").after('<div class="container"><div class="wb-container">');
            $('.wb-container').append('<img id="wb-lg-img" src="' + $(wb_linkId).attr("href") + '" alt="">');
            var i = 0;

            var wb_timer0 = setInterval(function () {
                if ($("#wb-lg-img").width() > 0) {
                    clearInterval(wb_timer0);
                    $('.wb-container').append('<p id="wb-info" class="text-left">');
                    $('.wb-container').append('<div class="wb-thumbnail1">');
                    $('.wb-thumbnail1').append('<div class="wb-thumbnail2">');
                    var groupId = $(wb_linkId).attr("data-whitebox");
                    $('.wb-thumbnail2').html($(groupId).html());
                    // find the clicked picture
                    while (i < $(".wb-thumbnail2 img").length && $(".wb-thumbnail2 img").eq(i).parent().attr("href") !== $(wb_linkId).attr("href")) {
                        i++;
                    }
                    $(".wb-thumbnail2 img").eq(i).css("border", "solid 5px black");
                    var wb_timer = setInterval(function () {
                        var allImagesLoaded = true;
                        $(".wb-thumbnail2 img").each(function () {
                            if ($(this).width() === 0) {
                                allImagesLoaded = false;
                            }
                        });
                        if (allImagesLoaded) {
                            clearInterval(wb_timer);
                            wb_setup();
                            wb_resize();
                        }
                    }, 10);
                }
            });

            function wb_setup() {
                wb_img_count = 0;
                $(".wb-thumbnail2 img").each(function () {
                    wb_sizes[wb_sizes.length] = wb_thumbnail2_width;
                    wb_thumbnail2_width += $(this).width() + 10;
                    wb_img_count++;
                });
                $(".wb-thumbnail2").css("width", wb_thumbnail2_width + 25);
                $("#wb-lg-img").css({
                    "border": "solid 10px white"
                });
                $("#wb-info").css({
                    "background-color": "white",
                    "border": "solid 10px white",
                    "border-top": "none"
                });
                $("#wb-info").html('<div class="col text-truncate px-0">' + (i + 1) + '/' + wb_img_count + ' <span class="font-weight-bold">' + $(".wb-thumbnail2 img").eq(i).attr("title") + '</span></div>');

                $("#wb-info").animate({"opacity": 1}, 500);
                $("#wb-lg-img").animate({"opacity": 1}, 500);
                $(".wb-thumbnail1").animate({"opacity": 1}, 500, function () {
                    $(".wb-thumbnail1").animate({"scrollLeft": wb_sizes[i] - $(".container").width() / 2 + $(".wb-thumbnail2 img").eq(i).width() / 2}, 1000);
                });

                $(".wb-thumbnail2 a").on("click", function (e) {
                    e.preventDefault();
                    var link = $(this);
                    // find the clicked picture
                    var i = 0;
                    while (i < $(".wb-thumbnail2 img").length && $(".wb-thumbnail2 img").eq(i).parent().attr("href") !== $(this).attr("href")) {
                        i++;
                    }
                    $(".wb-thumbnail1").animate({"scrollLeft": wb_sizes[i] - $(".container").width() / 2 + $(".wb-thumbnail2 img").eq(i).width() / 2}, 1000);
                    $("#wb-info").animate({"opacity": 0}, 500);
                    $("#wb-lg-img").animate({"opacity": 0}, 500, function () {
                        var tmp_image = $(this);
                        $(tmp_image).attr("src", "");
                        $(tmp_image).attr("src", $(link).attr("href"));

                        var wb_timer = setInterval(function () {
                            if (tmp_image.width() > 0) {
                                clearInterval(wb_timer);
                                $(tmp_image).animate({"opacity": 1}, 500);
                                $("#wb-info").html('<div class="col text-truncate px-0">' + (i + 1) + '/' + wb_img_count + ' <span class="font-weight-bold">' + $(".wb-thumbnail2 img").eq(i).attr("title") + '</span></div>');
                                $("#wb-info").css("max-width", $("#wb-lg-img").width() + 20);
                                $("#wb-info").animate({"opacity": 1}, 500);
                            }
                        });

                    });
                    $(".wb-thumbnail2 img").css("border", "solid 5px white");
                    $(this).children().css("border", "solid 5px black");
                });

            }

            $(window).on("resize", wb_resize);

            function wb_resize() {
                $(".wb-container").css("width", $(".container").width());
                if (wb_thumbnail2_width < $(".container").width()) {
                    $(".wb-thumbnail1").css({
                        "width": wb_thumbnail2_width + 25,
                        "left": ($(".wb-bg").width() - $(".wb-thumbnail1").width()) / 2
                    });
                } else {
                    $(".wb-thumbnail1").css({
                        "width": $(".container").width()
                    });
                }
                $("#wb-lg-img").css({
                    "max-width": $(".container").width(),
                    "max-height": $(window).innerHeight() - 250
                });
                $("#wb-info").css({
                    "max-width": $("#wb-lg-img").width() + 20,
                    "margin": "auto"
                });
            }

            $(".wb-bg, .wb-bg+a").on("click", function () {
                var wb_container_parent = $(".wb-container").parent();
                $(".wb-bg+a").remove();
                $(".wb-container, .wb-bg").animate({
                    "opacity": 0
                }, 1000, function () {
                    $(this).remove();
                });
                $(wb_container_parent).remove();
                $("body").css("overflow", "auto");
            });
        });
    });

    /* -----------------
     *  Off Canvas Menu
     * ----------------- */

    $(".offcanvas-main").css({
        "position": "relative"
    }).parent().css({
        "overflow-x": "hidden"
    });

    $(".offcanvas-container, .offcanvas-container-fixed").css({
        "float": "left"
    });

    $(".offcanvas-menu").css({
        "position": "fixed",
        "height": "100%",
        "z-index": 10000
    });

    setOffCanvasMenu();
    $(window).on("resize", setOffCanvasMenu);
    $(".offcanvas-menu .rolling").on("click", function () {
        $(".offcanvas-main").stop().animate({"left": 0}, 500);
        $(".offcanvas-menu").stop().animate({"right": -offcanvas_menu_width}, 500);
    });

    $(".offcanvas-toggler").css({
        "background-color": "transparent",
        "border": "solid 1px transparent",
        "outline": "none"
    }).on("click", function () {
        if (parseInt($(".offcanvas-menu").css("right")) < 0) {
            if ($(".offcanvas-container").length === 1) {
                $(".offcanvas-main").stop().animate({"left": -offcanvas_menu_width}, 500);
            }
            $(".offcanvas-menu").stop().animate({"right": 0}, 500);
        } else {
            if ($(".offcanvas-container").length === 1) {
                $(".offcanvas-main").stop().animate({"left": 0}, 500);
            }
            $(".offcanvas-menu").stop().animate({"right": -offcanvas_menu_width}, 500);
        }
    });

    function setOffCanvasMenu() {
        $(".offcanvas-main, .offcanvas-container, .offcanvas-container-fixed").css({
            "width": $(window).width()
        });
        offcanvas_menu_width = $(window).width() < 751 ? $(window).width() : $(".offcanvas-menu").width();
        $(".offcanvas-main").css("left", 0);
        $(".offcanvas-menu").css({
            "width": offcanvas_menu_width,
            "right": -offcanvas_menu_width,
            "display": "block"
        });
    }

}

const MAILFORMAT = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function formCheck(form) {
    formError = false;
    $('.be-formcheck input, .be-formcheck textarea, .be-formcheck select').not('input[type="hidden"], input[type="radio"], input[type="submit"], input[type="image"], input[type="button"], input[type="reset"]').css("border-color", "black");
    $('.be-formcheck[name="'+form.name+'"] input, .be-formcheck[name="'+form.name+'"] textarea, .be-formcheck[name="'+form.name+'"] select').not('input[type="hidden"], input[type="radio"], input[type="submit"], input[type="image"], input[type="button"], input[type="reset"]').each(function(i, tag) {
        if ($(tag).attr("type") === "email") {
            if ($(tag).val() !== "" && !$(tag).val().match(MAILFORMAT)) {
                $(tag).css("border-color", $(".form-error").css("color")).siblings().filter(".form-error").html($('.be-formcheck[name="'+form.name+'"]').attr("data-msg-invalid")).slideDown();
                formError = true;
            } else
            if ($(tag).attr("required") === "required" && $(tag).val() === "") {
                $(tag).css("border-color", $(".form-error").css("color")).siblings().filter(".form-error").html($('.be-formcheck[name="'+form.name+'"]').attr("data-msg-empty")).slideDown();
                formError = true;
            } else {
                $(tag).siblings().filter(".form-error").slideUp().empty();
            }
        } else
        if ($(tag).attr("type") === "number" || $(tag).attr("type") === "range") {
            if ($(tag).val() !== "" && parseFloat($(tag).val()) < parseFloat($(tag).attr("min")) || parseFloat($(tag).val()) > parseFloat($(tag).attr("max"))) {
                $(tag).css("border-color", $(".form-error").css("color")).siblings().filter(".form-error").html($('.be-formcheck[name="'+form.name+'"]').attr("data-msg-invalid")).slideDown();
                formError = true;
            } else
            if ($(tag).attr("required") === "required" && $(tag).val() === "") {
                $(tag).css("border-color", $(".form-error").css("color")).siblings().filter(".form-error").html($('.be-formcheck[name="'+form.name+'"]').attr("data-msg-empty")).slideDown();
                formError = true;
            } else {
                $(tag).siblings().filter(".form-error").slideUp().empty();
            }
        } else
        if ($(tag).attr("type") === "date" || $(tag).attr("type") === "time") {
            if ($(tag).val() !== "" && $(tag).val() < $(tag).attr("min") || $(tag).val() > $(tag).attr("max")) {
                $(tag).css("border-color", $(".form-error").css("color")).siblings().filter(".form-error").html($('.be-formcheck[name="'+form.name+'"]').attr("data-msg-invalid")).slideDown();
                formError = true;
            } else
            if ($(tag).attr("required") === "required" && $(tag).val() === "") {
                $(tag).css("border-color", $(".form-error").css("color")).siblings().filter(".form-error").html($('.be-formcheck[name="'+form.name+'"]').attr("data-msg-empty")).slideDown();
                formError = true;
            } else {
                $(tag).siblings().filter(".form-error").slideUp().empty();
            }
        } else
        if ($(tag).attr("type") === "checkbox") {
            if ($(tag).attr("required") === "required" && !$(tag).prop("checked")) {
                $(tag).css("border-color", $(".form-error").css("color")).siblings().filter(".form-error").html($('.be-formcheck[name="'+form.name+'"]').attr("data-msg-empty")).slideDown();
                formError = true;
            } else {
                $(tag).siblings().filter(".form-error").slideUp().empty();
            }
        } else {
            if ($(tag).attr("required") === "required" && ($(tag).val() === "" || $(tag).val() === null)) {
                $(tag).css("border-color", $(".form-error").css("color")).siblings().filter(".form-error").html($('.be-formcheck[name="'+form.name+'"]').attr("data-msg-empty")).slideDown();
                formError = true;
            } else {
                $(tag).siblings().filter(".form-error").slideUp().empty();
            }
        }
    });
    if (formError) {
        return false;
    }
}
