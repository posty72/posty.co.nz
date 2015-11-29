---
layout: page
permalink: /error/
script: | 
  (function(){ 
    var c = document.getElementById('countdown'), 
      num = 0;
    setInterval(function(){
      num = Number(c.innerHTML);
      if(num > 0) {
        c.innerHTML = num -1;
      } else {
        window.location = '/';
      }
    }, 1000);
  })();
---

#Something went wrong! Oh no!

Returning you to the homepage in <i id="countdown">5</i>...
