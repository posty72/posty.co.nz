
/* Opens or closes the navigation menu  */
// - HTML sits in navigation.html
// - CSS sits in navigation.scss
// This provides a way for users to open 
// and close the navigation menu. 
var navToggle = (function(navBtn){

  navBtn.addEventListener('click', toggleNav);

  function toggleNav(){
    return document.body.parentNode.classList.toggle('nav-open');
  }

  return toggleNav;

})(document.querySelector('#nav-toggle'));