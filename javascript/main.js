(function(){

  var imageList = document.getElementsByTagName('img');

  _.each(imageList, function(i, t){
    i.src = i.getAttribute('data-src');
    console.log(t);

  });


})();