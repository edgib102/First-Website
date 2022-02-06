$(function () {

    tippy('[data-tippy-content]', { followCursor: true });

    $('.cryptomatte > div').on('click', function() {
        var elem = $(this);
        var elemText = $(elem).attr("data-tippy-content");
        var sidebar = $('.sidetext');

        sidebar.html(elemText);
        
    });

    $.getJSON('data.json', function(data){
        console.log(data.object-data)
    })

});


