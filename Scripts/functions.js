var demo_functions;
(function (demo_functions) {
    var squaresimple = function (h, w) {
        return h * w;
    };
    var squarearrow = function (h, w) { return h * w; };
    var helloarrow;
    helloarrow = function (name) {
        console.log('Hello ' + (name || 'unknown Person'));
    };
    helloarrow();
    helloarrow('Nag');
    var squarearrowopt;
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };
    squarearrowopt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    console.log(squarearrowopt(rectA));
    console.log(squarearrowopt(rectB));
})(demo_functions || (demo_functions = {}));
