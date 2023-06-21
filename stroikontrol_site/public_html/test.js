$(function (){
    'use strict';





    function accordion(){
        $('.accordion .accordion__item').on('click', function (){
            console.log('123')
            const timeAnim = 400;
            $('.accordion .accordion__item').removeClass('active').css({'pointer-events':'auto'});
            $(this).addClass("active").css({'pointer-events':'none'});
            $('.accordion .accordion__header').next().slideUp(timeAnim)
            $(this).find('.accordion__header').next().slideDown(timeAnim)

            $('.accordeon-img').removeClass("active");
            let id = $(this).data('id')
            $('#'+ id + '-img').addClass('active')
        })
    }
    accordion()
})