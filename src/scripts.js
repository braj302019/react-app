window.onerror = function (message, source, line, col, error) {
    var errors = document.getElementById('errors');
    var text = error ? error.stack || error : message + ' (at ' + source + ':' + line + ':' + col + ')';
    errors.textContent += text + '\n';
    errors.style.display = '';
};
console.error = (function (old) {
    return function error() {
        var errors = document.getElementById('errors');
        errors.textContent += Array.prototype.slice.call(arguments).join(' ') + '\n';
        errors.style.display = '';
        old.apply(this, arguments);
    }
})(console.error);