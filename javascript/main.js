// Josh Post - 2016



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

  return loadImagesOnPage;

})();




/* Opens or closes the navigation menu  */
// - HTML sits in navigation.html
// - CSS sits in navigation.scss
// This provides a way for users to open 
// and close the navigation menu. 

var navToggle = (function(navToggle){

  navToggle.addEventListener('onclick', toggleNav);

  function toggleNav(){
    return document.body.parentNode.classList.toggle('nav-open');
  }

  return toggleNav;

})(document.querySelector('#nav-toggle'));




/* Return to top button */
// - HTML sits in navigation.html
// - CSS sits in navigation.scss
// This provides a button that appears when the user 
// has scrolled one screen down. The button animates in, 
// and the arrow slowly rotates to indicate the users 
// position on page.

var returnToTop = (function(returnTopEl) {
  if(!returnTopEl) return;

  window.addEventListener('scroll', function() {
    setReturnTopRotation(returnTopEl);
    setReturnTopOpacity(returnTopEl);
  });

  returnTopEl.onmouseup = scrollToTop;

  function setReturnTopOpacity(el){
    return el.style.opacity = Math.min((window.scrollY / window.innerHeight), 1);
  }

  function setReturnTopRotation(el) {
    return el.style.transform = 'rotate(' + (((window.scrollY / ((Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)) - window.innerHeight)) * 100) * 0.9) + 'deg)';
  }

  function scrollToTop() {
    var scrollInterval = setInterval(function() {
      if (window.scrollY !== 0) {
        window.scrollBy(0, (-window.scrollY / (125 / 15)));
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }

  return scrollToTop;

})(document.getElementById('top'));



/* Global functions */

function distanceFromTop(element) {
  var distance = 0;
  while (element) {
    distance += (element.offsetTop);
    element = element.offsetParent;
  }
  return distance;
}
