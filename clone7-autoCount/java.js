function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

setTimeout(() => {
    animateValue("value", 0, 2000, 4000);
    animateValue("value1", 0, 100, 4000);
    animateValue("value2", 0, 300, 4000);
}, 500);
