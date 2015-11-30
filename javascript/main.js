(function() {

  var imageList = document.getElementsByTagName('img');

  _.each(imageList, function(i, t) {
    console.log(i.src);
    if(i.src.length <= 0) {
      i.src = i.getAttribute('data-src');
    }
  });


})();

