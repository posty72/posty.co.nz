(function() {


  // Load images after the fact
  var imageList = document.getElementsByTagName('img');
  for (var i = 0, k = imageList.length; i < k; i++) {
    if (imageList[i].src.length <= 0) {
      imageList[i].src = imageList[i].getAttribute('data-src');
    }
  }

  var navToggle = document.querySelector('#nav-toggle'),
    nav = document.querySelector('nav')

  navToggle.onclick = function(evt){
    console.log(nav.classList.contains('open'));

    document.body.parentNode.classList.toggle('nav-open');
    this.classList.toggle('open');
    nav.classList.toggle('open');
  }

})();
