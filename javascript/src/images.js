/* Load larger images */
// This will load larger images on the 
// page when they appear on the screen 
// as the user scrolls. If the image is 
// not yet on the screen, a placeholder 
// image will be used instead.

var imageLoad = (function() {
  var scrollControl = false,
    winPos = 0,
    imageList;

  //loadImagesOnPage();
  window.addEventListener('load', loadImagesOnPage);
  window.addEventListener('scroll', loadImagesOnPage);

  function loadImagesOnPage(){
    if(!scrollControl) {
      scrollControl = true;
      winPos = (window.innerHeight) + document.body.scrollTop;

      // Load images after the fact
      // imageList = document.querySelector('[data-srcset]');

      // for (var i = 0, k = imageList.length; i < k; i++) {
      //   var newSrc = imageList[i].getAttribute('data-src');
      //   if(imageList[i].srcset !== newSrc && distanceFromTop(imageList[i]) <= winPos) {
      //     imageList[i].srcset = newSrc || imageList[i].src;
      //   } else if(!imageList[i].srcset) {
      //     imageList[i].srcset = '/assets/images/Optomised/placeholder.gif';
      //   }
      // }

      imageList = document.querySelectorAll('textarea.picture');
 
      for (var i = 0, k = imageList.length; i < k; i++) {
        if(distanceFromTop(imageList[i]) <= winPos) {
          imageList[i].parentNode.innerHTML = imageList[i].value;
        }
      }

      setTimeout(function(){ scrollControl = false; }, 400);
    }
  }

  return loadImagesOnPage;
})();