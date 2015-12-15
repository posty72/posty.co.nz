(function() {


  loadImagesOnPage();
  window.onscroll = loadImagesOnPage;
  

  var navToggle = document.querySelector('#nav-toggle'),
    nav = document.querySelector('nav')

  navToggle.onclick = function(evt){
    // console.log(nav.classList.contains('open'));

    document.body.parentNode.classList.toggle('nav-open');
    this.classList.toggle('open');
    nav.classList.toggle('open');
  }

})();

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
        imageList[i].src = '/assets/images/placeholder.gif';
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