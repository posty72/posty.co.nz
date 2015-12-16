var imageLoad = (function() {


  //loadImagesOnPage();
  window.onload = loadImagesOnPage;
  window.onscroll = loadImagesOnPage;

  var scrollControl = false,
    winPos = 0,
    imageList;

  function loadImagesOnPage(){
    if(!scrollControl) {
      scrollControl = true;
      winPos = window.innerHeight + document.body.scrollTop;

      // Load images after the fact
      imageList = document.getElementsByTagName('img');
      for (var i = 0, k = imageList.length; i < k; i++) {
        var newSrc = imageList[i].getAttribute('data-src');
        if(imageList[i].src !== newSrc && distanceFromTop(imageList[i]) <= winPos) {
          imageList[i].src = newSrc || imageList[i].src;
        } else if(!imageList[i].src) {
          imageList[i].src = '/assets/images/Optomised/placeholder.gif';
        }
      }

      setTimeout(function(){ scrollControl = false; }, 400);
    }
  }

  function distanceFromTop(element) {
      var distance = 0;
      while(element) {
          distance += (element.offsetTop);
          element = element.offsetParent;
      }
      return distance;
  }

  return loadImagesOnPage;

})();



var navToggle = (function(navToggle){

  function toggleNav(){
    document.body.parentNode.classList.toggle('nav-open');
  }

  navToggle.onclick = toggleNav;

  return toggleNav;

})(document.querySelector('#nav-toggle'))
