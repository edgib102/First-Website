$(function() {

    var handleArr = $(".btn").map(function() {
        return this;
    }).get();


    $(".input-search").on("input", function() {
        var input = $(this);
        var val = input.val();
      
        if (input.data("lastval") != val) {
          input.data("lastval", val);
      
          //your change action goes here 
          console.log(val);
          getHandle(val, handleArr);
          
        }
      
      });

      $(".input-search").on("blur", function() {
        for (const [index] of Object.entries(handleArr)) {
            userType = checkUserType($(handleArr[index]).attr('class'))
            handleArr[index].classList.remove(userType);
            // $(handleArr[index]).parent().children("img").fadeTo(0,0.5)
            $(handleArr[index]).parent().children("img").attr("src","Web Content/eth midlow.png");
            
        }
      });
      $(".input-search").on("focus", function() {
        for (const [index] of Object.entries(handleArr)) {
            userType = checkUserType($(handleArr[index]).attr('class'))
            handleArr[index].classList.add(userType); 
            // $(handleArr[index]).parent().children("img").fadeTo(0,0.75)

            $(handleArr[index]).parent().children("img").attr("src","Web Content/eth midhigh.png");            
        }
      });
});


function getHandle(text, handles){
    for (const [index] of Object.entries(handles)) {

        cx = $(handles[index]).attr('class')

        if (handles[index].innerHTML.includes(text)){

            console.log(handles[index].innerHTML);

            // checkUserType(handles[index])
            handles[index].classList.add(checkUserType(cx));
            // $(handles[index]).parent().children("img").fadeTo(0,0.75)
            $(handles[index]).parent().children("img").attr("src","Web Content/eth midhigh.png");   

        }else{
            handles[index].classList.remove(checkUserType(cx));
            // $(handles[index]).parent().children("img").fadeTo(0,0.5)
            $(handles[index]).parent().children("img").attr("src","Web Content/eth midlow.png");   
        }
    }
}

function checkUserType(x){
    if(x.includes('normalType')){
        return 'normalHover';
    }else if (x.includes('collectorType')){
        return 'collectorHover';
    }
}
