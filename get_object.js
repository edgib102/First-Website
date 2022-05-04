
$(function () {

    

    for (const [index] of Object.entries(data)) {

        x =$(".collaborator-list").append(`<li id="x${index}"><button id="${index}" class="btn ${data[index].userType}">${data[index].username}</button></li>`)
        // if ($(#index).attr("class"))
        // getType($(index).attr("class"))
        if(data[index].userType.includes("collectorType")){
            // $(x).children()
            $("#x" + index).append(`<img class="eth-logo"src="Web Content/eth midlow.png">`)
            console.log($("#" + index))
        }
        // console.log(x)
        

    
    }
    
    $(".btn").hover(function(){
        userType = $(this).attr('class')
        UserClass = getType(userType)
        // document.body.style.setProperty('--hoverColor', color)
        $(this).addClass(UserClass);
        $(this).parent().children("img").attr("src","Web Content/eth midhigh.png");
        // $(".eth-logo").css("opacity","100%")
    })

    $(".btn").mouseleave(function(){
        $(this).removeClass(UserClass);
        $(this).parent().children("img").attr("src","Web Content/eth midlow.png");
        // $(".eth-logo").css("opacity","50%")
    })

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
    $(".object-description-text").html(description); //https://twitter.com/${replace('@',handle)}
    $(".object-handle-text").html(`Suggested by <a class="link Raleway-Med-Dark" href="https://twitter.com/${handle.replace('@','')}">${handle}</a>`);
    console.log(`https://twitter.com/${handle.replace('@','')}`)
    $(".pfp").attr('src', pfp)

}

function getType(x){
    if(x.includes("normalType")){
        return 'normalHover';
    }else if (x.includes("collectorType")){
        return 'collectorHover';
    }
}