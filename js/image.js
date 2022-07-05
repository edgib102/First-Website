  // Canvas and images
  const ctx = document.createElement("canvas").getContext("2d");
  var images = [];

  // Ready functions
  $(function () {
      for (const [index] of Object.entries(data)) {

          $(".main-images").append(`<img src="${data[index].file}" class="selector-images" id="${index}" name="" >`);
        }

      //tippy('[data-tippy-content]', { followCursor: false, trigger: 'click' });

      // Add click to each image
      $(".main-images img").on("click", img => getNonTransparentImage(img, img.currentTarget));

  })


  function getNonTransparentImage(elem, target) {
      if (!target.offsetParent) return;

      // Get click coordinates
      const isImage = /img/i.test(target.tagName),
          x = elem.pageX - target.offsetParent.offsetLeft,
          y = elem.pageY - target.offsetParent.offsetTop,
          w = ctx.canvas.width = target.width,
          h = ctx.canvas.height = target.height;

      // Draw image to canvas and read Alpha channel value
      var alpha;
      if (isImage) {
          ctx.drawImage(target, 0, 0, w, h);
          // Returns RGBA values
          // https://developer.mozilla.org/en-US/docs/Web/API/ImageData/ImageData
          alpha = ctx.getImageData(x, y, 1, 1).data[3];
      }


      /* 
      * If the clicked pixel's alpha is 0
      * then hide the image and push it to image stack.
      */

      
      if (alpha === 0) {
          //Hide image  
              
          target.hidden = 1
          // Push to images array       
          images.push(target);


          // recursive function  
          // Get element at clicked position
          var clickedElem = document.elementFromPoint(elem.clientX, elem.clientY);
          return getNonTransparentImage(elem, clickedElem);
        } else {

          // Else, we have clicked on non tranparent part of the image
          // So find image in the list and set it to visible
          images.forEach(el => {
              el.hidden = 0
          });

          // Reset images
          images = [];
          
          var id = $(target).attr('id');

            if(typeof data[id].username == 'undefined'){
                console.log('none')
                return;
            }

          setCurrentObejct(data[id].objectName, data[id].description, data[id].url, data[id].username, data[id].pfpFile);

          
      }
    }