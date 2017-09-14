/* eslint-disable */

(function() {
    var numSteps = 20.0;
    var boxElements;

    window.addEventListener('load', function() {
        boxElements = document.querySelectorAll('.thumbnail');

        createObserver();
    }, false);

    function createObserver() {
        var options = {
            rootMargin: '0px',
            threshold: 0
        };

        var observer = new IntersectionObserver(handleIntersect, options);
        boxElements.forEach(function(boxElement){
            observer.observe(boxElement);
        });
    }

    function handleIntersect(entries) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > 0) {
                var thumbnail = entry.target;
                var image = thumbnail.querySelector('.thumbnail-image');

                thumbnail.classList.add('is-loaded');

                image.srcset = image.dataset.srcset;
                image.sizes = image.dataset.sizes;
                image.src = image.dataset.src;
            }
        });
    }
}());
