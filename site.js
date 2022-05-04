$(function (){

    $(document).on('click', '.nft-button', function(){      
        window.alert("Unfortunately, I haven't started the mint yet. Come back to this once I do!");
    });

    $(document).ready(function(){
        $('.collectors').slick({
            speed: 600,
            prevArrow: ''
        });
    });

    lastHeight = Math.max($(".collector").height());

    $('#last-collector').css("height", lastHeight + "px")

});