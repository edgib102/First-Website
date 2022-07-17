
$(document).ready(function() {
    // slides = 3;
    slides = slidesCheck();

    $(window).on('load resize', function() {
        width = this.innerWidth;
        slides = slidesCheck();
        $('.carousel').slick({
            speed: 600,
            infinite: true,
            slidesToShow: slides,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500
        });
    });
    
    // $('.carousel').slick({
    //     speed: 600,
    //     infinite: true,
    //     slidesToShow: slides,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1500
    // });

    $('.gallery-button').click(function(){
        window.location.href = "gallery.html";
    });

});

function slidesCheck(){
    width = this.innerWidth;
    if(width > 240 && width < 1040){
        return 1;
    }else{
        return 3;
    }
}