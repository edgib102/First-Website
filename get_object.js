
$(function () {
   
    for (const [index] of Object.entries(data)) {

        $(".collaborator-list").append(`<li><button id="${index}" class="btn">${data[index].username}</button></li>`)
        
    
    }
    $(document).on('click', '.btn', function(){
        id = $(this).attr('id');

        $("html, body").animate({ scrollTop: 0 }, "slow");  

        $("html, body").promise().done(function(){
            setTimeout(() => {
                setCurrentObejct(data[id].objectName, data[id].description, data[id].url, data[id].username, data[id].pfpFile);                 
            }, 150);
           
        });

    });
})

function buttonClick() {
    console.log('clicked')
}

function setCurrentObejct(title, description, url, handle, pfp){
    console.log(title);
    $(".object-title-text").html(title);
    $(".object-description-text").html(description);
    $(".object-handle-text").html(`Suggested by <a class="link Raleway-Med-Dark" href="${url}">${handle}</a>`);
    $(".pfp").attr('src', pfp)

}