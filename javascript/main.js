(function() {

  var imageList = document.getElementsByTagName('img');

  for (var i = 0, k = imageList.length; i < k; i++) {
    if (imageList[i].src.length <= 0) {
      imageList[i].src = imageList[i].getAttribute('data-src');
    }
  }

})();
