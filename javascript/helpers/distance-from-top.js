function distanceFromTop(el) {
    let distance = 0;
    while (el) {
        distance += (el.offsetTop);
        el = el.offsetParent;
    }

    return distance;
}
