$(function (){

    $(document).on('click', '.nft-button', function(){      
        window.alert("Unfortunately, I haven't started the mint yet. Come back to this once I do!");
    });

    // #(document).read

    $('.collectors').slick({
        speed: 600,
        prevArrow: false,
        nextArrow: $('.slideshow-button')
    });

    // $('.slideshow-button').click(function(){
    //     $(this).prev().slick('slickNext');
    // });

    lastHeight = Math.max($(".collector").height());

    $('#last-collector').css("height", lastHeight + "px")

    // ye
    

});