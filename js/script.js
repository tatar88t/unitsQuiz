console.log('buba')

$(document).ready(function() {

   

    $('.header__menu-block-link_left').on('click', function(e) {
        e.preventDefault();
        $('.overlay').fadeIn('slow');
        $('.modal').fadeIn('slow');
        $("body").css('overflow', 'hidden')
    })

    $('.overlay').on("click", function(e) {
        
        $('.overlay').fadeOut('slow');
        $('.modal').fadeOut('slow');
        
        $("body").css('overflow', '');

        
    })



})