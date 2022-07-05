$(document).ready(function() {

    $(".gallery-button").click(function() {

        if($(this).attr("id") == 'still') {
            $("html, body").animate({scrollTop: $(".stills").offset().top}, "slow");
        }
        else if($(this).id = 'anim') {
            $("html, body").animate({scrollTop: $(".animations").offset().top}, "slow");
        }
    });
});