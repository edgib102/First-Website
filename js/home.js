
$(document).ready(function() {

    
    $('.carousel').slick({
        speed: 600,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
    });

    $('.gallery-button').click(function(){
        window.location.href = "gallery.html";
    });

});