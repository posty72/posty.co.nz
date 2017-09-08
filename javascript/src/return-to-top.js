



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

  returnTopEl.addEventListener('mousedown', scrollToTop);
  returnTopEl.addEventListener('touchstart', scrollToTop);

  function setReturnTopOpacity(el){
    return el.style.opacity = Math.min((window.scrollY / window.innerHeight), 1);
  }

  function setReturnTopRotation(el) {
    return el.style.transform = 'rotate(' + ((window.scrollY / ((Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)) - window.innerHeight)) * 90) + 'deg)';
  }

  function scrollToTop() {

    var s = -window.scrollY,
    time = 400,
    a = setInterval(function(){
      if (window.scrollY > 0) {
        window.scrollBy(0, (s / 15));
      } else {
        clearInterval(a);
      }
    }, 15);

  }

  return scrollToTop;

})(document.getElementById('top'));