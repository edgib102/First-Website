const ctx = document.createElement("canvas").getContext("2d");
var images = [];


$(function () {

    for (const [index] of Object.entries(data)) {
        var filePath = data[index].file;

        $(".images").append(`<div class="${index}" style="opacity:100" data-tippy-content = "${index}"></div>`)
        $(`.${index}`).append(`<img src="${filePath}" alt="">`)
    }

    $(".images img").on("click", img => getNonTransparentImage(img, img.currentTarget));  

});


    function getNonTransparentImage(elem,target) {
        if (!target.offsetParent) return;

        const isImage = /img/i.test(target.tagName),
        x = elem.pageX - target.offsetParent.offsetLeft,
        y = elem.pageY - target.offsetParent.offsetTop,
        w = ctx.canvas.width = target.width,
        h = ctx.canvas.height = target.height;
        
        var alpha;

        if(isImage){            
            ctx.drawImage(target, 0, 0, w, h);
            alpha = ctx.getImageData(x, y, 1, 1).data[3];            
        }

        if (alpha === 0){
            target.hidden = 1
            images.push(target);

            var clickedElem = document.elementFromPoint(elem.clientX, elem.clientY);
            console.log(clickedElem)
            getNonTransparentImage(elem, img.currentTarget);

        } else {
            images.forEach(el => {
                el.hidden = 0
            });

            images = []

            //do stuff
            
        }

    }





    // tippy('[data-tippy-content]', { followCursor: true });

    // $('.cryptomatte > div').on('click', function() {
    //     var elem = $(this);
    //     var elemText = $(elem).attr("data-tippy-content");
    //     var sidebar = $('.sidetext');

    //     sidebar.html(elemText + 'ypp');
        
    // });



