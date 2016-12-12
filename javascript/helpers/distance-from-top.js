function distanceFromTop(el) {
  var distance = 0;
  while (el) {
    distance += (el.offsetTop);
    el = el.offsetParent;
  }
  return distance;
}