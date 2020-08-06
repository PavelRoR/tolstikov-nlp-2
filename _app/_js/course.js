//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend owl.carousel.min.js
//@prepros-prepend popup.js
//@prepros-prepend flipclock.min.js

$(document).ready(function () {
    /* Якорь */
    $("a[href='#prices']").click(function (h) {
        h.preventDefault();
        var f = $(this).attr("href"),
            g = $(f).offset().top;
        $("body,html").animate({
            scrollTop: g
        }, 1500)
    });
    // $('.button-up').fancybox();
    $('.button-up').magnificPopup({
        type: 'inline',
        midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        mainClass: 'mfp-fade'
    });
    $('.master-class-title').click(function () {
        $('.master-class-title').removeClass('active');;
        $('.master-class-container').slideUp(500);
        $(this).addClass('active').next().slideDown(500);
    });
    $('#video-revs, #text-revs').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["←", "→"],
        dots: false
    });
    $('.text-rev-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });
    $('.cert-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });
    /* Таймер */
    $(function () {
        var clock;
        var dates = new Array(
            new Date("August 6, 2020 00:00 UTC+3"),
            new Date("August 7, 2020 00:00 UTC+3"),
            new Date("August 8, 2020 00:00 UTC+3")
        );

        var currentDate = new Date();

        var sale1 = {
            name: $('#sale-1'),
            saleText: new Array('1 000р.')
        };
        var sale2 = {
            name: $('#sale-2'),
            saleText: new Array('2 000р.')
        };
        var sale3 = {
            name: $('#sale-3'),
            saleText: new Array('2 000р.')
        };
        var today1 = {
            name: $('#today-1'),
            todayText: new Array('12 900р.')
        };
        var today2 = {
            name: $('#today-2'),
            todayText: new Array('27 900р.')
        };
        var today3 = {
            name: $('#today-3'),
            todayText: new Array('35 900р.')
        };
        var link1 = {
            name: $('#link-1'),
            linkText: new Array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=313&clean=true&lg=ru', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=314&clean=true&lg=ru')
        };
        var link2 = {
            name: $('#link-2'),
            linkText: new Array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=316&clean=true&lg=ru', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=317&clean=true&lg=ru')
        };
        var link3 = {
            name: $('#link-3'),
            linkText: new Array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=319&clean=true&lg=ru', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=320&clean=true&lg=ru')
        };

        var prepLink = {
            name: $('#prepayment-link'),
            linkText: new Array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=323&clean=true&lg=ru', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=324&clean=true&lg=ru')
        };

        if (currentDate < dates[0]) {
            var futureDate = dates[0];
            var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
            clock = $('.clock').FlipClock(diff, {
                clockFace: 'HourlyCounter',
                countdown: true,
                language: 'ru',
                callbacks: {
                    stop: function () {
                        // sale1.name.text(sale1.saleText[0]);
                        // sale2.name.text(sale2.saleText[0]);
                        // sale3.name.text(sale3.saleText[0]);
                        // today1.name.text(today1.todayText[0]);
                        // today2.name.text(today2.todayText[0]);
                        // today3.name.text(today3.todayText[0]);
                        // link1.name.attr('href', link1.linkText[0]);
                        // link2.name.attr('href', link2.linkText[0]);
                        // link3.name.attr('href', link3.linkText[0]);
                        // prepLink.name.attr('href', prepLink.linkText[0]);
                    }
                }
            });
        } else if ((currentDate >= dates[0]) && (currentDate < dates[1])) {
            var futureDate = dates[1];
            var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
            clock = $('.clock').FlipClock(diff, {
                clockFace: 'HourlyCounter',
                countdown: true,
                language: 'ru',
                callbacks: {
                    stop: function () {
                        // $('.timer,  .cost-sale, .cost-today').remove();
                        // $('.cost-full span').addClass('unbroken');
                        // link1.name.attr('href', link1.linkText[1]);
                        // link2.name.attr('href', link2.linkText[1]);
                        // link3.name.attr('href', link3.linkText[1]);
                        // prepLink.name.attr('href', prepLink.linkText[1]);
                    }
                }
            });
        } else {
            var futureDate = dates[2];
            var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
            clock = $('.clock').FlipClock(diff, {
                clockFace: 'HourlyCounter',
                countdown: true,
                language: 'ru',
                callbacks: {
                    stop: function () {
                        // $('.prepayment, .timer,  .cost-sale, .cost-today').remove();
                        // $('.cost-full span').addClass('unbroken');
                    }
                }
            });
        }
    });
    /* Видео */
    $(".video-wrapper-rev img").click(function () {
        var a = $(this).parent().attr("data-youtube");
        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&modestbranding=1&mute=1&showinfo=0&rel=0" allowfullscreen></iframe>')
    });
    $(function () {
        $('#video-revs .owl-prev, #video-revs .owl-next').click(function () {
            $('.video-wrapper-rev iframe').each(function () {
                var l = $(this).parent().attr('data-img');
                $(this).parent().html('<img src="' + l + '" alt="Видео отзыв">');
            });
            $(".video-wrapper-rev img").click(function () {
                var a = $(this).parent().attr("data-youtube");
                $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?modestbrandig=1&mute=1&showinfo=0&rel=0&autoplay=1" allowfullscreen></iframe>');
            });
        });
    })
    $('#video-revs .owl-next').click(function () {
        $(this).parent().parent().removeClass('toLeft');
    })
    /*Конец документа*/
});