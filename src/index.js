
exports.min = function min (array) {
    const initialValue = 0;
        array.sort(function (a, b) {
            return a - b;
        }, initialValue);
        return array[0];
}

exports.max = function max (array) {
    array.sort(function (a, b) {
        return b - a;
    });
    return array[0];
}

exports.avg = function avg (array) {
    let sum = 0;
    const initialValue = 0;
    array.reduce(function (a, b){
        sum =  a + b;
    }, initialValue);
    return sum / array.length;
}
