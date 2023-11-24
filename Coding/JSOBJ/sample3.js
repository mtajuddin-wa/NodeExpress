window.onload = function () {
    var input = document.querySelector('input');
    var def = document.getElementById('default');
    var deb = document.getElementById('debounce');


    

    input.addEventListener('input', (e) => {
        var val = e.target.value;
        var prev = e.target.value;
        def.textContent = prev;
        updatedDebText(val);
    });

    updatedDebText = debounce((text) => {
        deb.textContent = text;
    }, 1500);
}



function debounce(fn, delay) {
    let timeOut;
    return (...args) => {
        if (timeOut) {
            clearTimeout(timeOut);
        }
        timeOut = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}
