$(function(){

    moveDiv()
    var width;
    
    $(window).on('load resize', function() {
        moveDiv()
    });
        
})

function moveDiv(){
    width = this.innerWidth;

    if(width > 1024 && width < 1650){
        console.log(width)
        // $('.main-body--inner').append('<div class="moved-bottom"></div>');             
        $('.about-nft').appendTo('.main-body--bottom')
        $('.nft-button').appendTo('.main-body--bottom')
    }else{
        $('.about-nft').appendTo('.side-text')
        $('.nft-button').appendTo('.main-description')
    }
}