$(function () {
    'use strict';


    function accordion() {
        $('.accordion .accordion__item').on('click', function () {
            console.log('123')
            const timeAnim = 400;
            $('.accordion .accordion__item').removeClass('active').css({'pointer-events': 'auto'});
            $(this).addClass("active").css({'pointer-events': 'none'});
            $('.accordion .accordion__header').next().slideUp(timeAnim)
            $(this).find('.accordion__header').next().slideDown(timeAnim)

            $('.accordeon-img').removeClass("active");
            let id = $(this).data('id')
            $('#' + id + '-img').addClass('active')
        })
    }

    accordion()

    function left_accordion() {
        $('.left-accordion .left-accordion__item').on('click', function () {
            console.log('123')
            const timeAnim = 400;
            $('.left-accordion .left-accordion__item').removeClass('active').css({'pointer-events': 'auto'});
            $(this).addClass("active").css({'pointer-events': 'none'});
            $('.left-accordion .left-accordion__header').next().slideUp(timeAnim)
            $(this).find('.left-accordion__header').next().slideDown(timeAnim)

            $('.left-accordeon-img').removeClass("active");
            let id = $(this).data('id')
            $('#' + id + '-img-left').addClass('active')
        })
    }

    left_accordion()


    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }

    let options = {
        threshold: [0.25] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('section');

    for (let elm of elements) {

        observer.observe(elm);
        console.log(elm)
    }
})