$(function () {


    
    for (const [index] of Object.entries(data)) {
        var filePath = data[index].file;

        $(".images").append(`<div class="${index}" style="opacity:100" data-tippy-content = "${index}"></div>`)
        $(`.${index}`).append(`<img src="${filePath}" alt="">`)
    }














    tippy('[data-tippy-content]', { followCursor: true });

    $('.cryptomatte > div').on('click', function() {
        var elem = $(this);
        var elemText = $(elem).attr("data-tippy-content");
        var sidebar = $('.sidetext');

        sidebar.html(elemText + 'ypp');
        
    });
});


