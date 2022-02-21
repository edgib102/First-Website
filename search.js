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
            handleArr[index].classList.remove("selected"); 
        }
      });
      $(".input-search").on("focus", function() {
        for (const [index] of Object.entries(handleArr)) {
            handleArr[index].classList.add("selected"); 
        }
      });
});


function getHandle(text, handles){
    for (const [index] of Object.entries(handles)) {

        if (handles[index].innerHTML.includes(text)){

            console.log(handles[index].innerHTML);
            handles[index].classList.add("selected");

        }else{
            handles[index].classList.remove("selected"); 
        }
    }


}