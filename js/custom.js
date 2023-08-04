$(function () {

    const swiper = new Swiper('.main_slide', {
        loop: true,
        effect: 'fade',
        slidesPerView: 1,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + 0 + (index + 1) + '</span>';
            }
        },
    });

    $('.visual .arrow .left').on('click', function () {
        swiper.slidePrev();
    });
    $('.visual .arrow .right').on('click', function () {
        swiper.slideNext();
    });

    const swiper2 = new Swiper('.story_slide', {
        loop: true,
        effect: 'fade',
        slidesPerView: 1,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        on: {
            slideChangeTransitionStart: function () {
                let idx = this.realIndex;
                $('.story_list ul li').eq(idx).addClass('active').siblings().removeClass('active');
            },
        },
    });

    $('.story_list ul li').on('click', function () {
        let idx = $(this).index();
        swiper2.slideToLoop(idx);
    });

    $('.story .arrow .left').on('click', function () {
        swiper2.slidePrev();
    });
    $('.story .arrow .right').on('click', function () {
        swiper2.slideNext();
    });

    $(window).on('scroll', function () {
        let scrollTop = $(window).scrollTop();
        scrollTop > 0 ? $('.header').addClass('fixed') : $('.header').removeClass('fixed');
    });

    $('.mobile_menu').on('click', function () {
        $(this).toggleClass('active');
        $('.header').toggleClass('mobile_open');
        $('body').toggleClass('body_fixed');
    });

    $(window).on('resize', function () {
        $('.mobile_menu').removeClass('active');
        $('.header').removeClass('mobile_open');
        $('body').removeClass('body_fixed');
    });

});