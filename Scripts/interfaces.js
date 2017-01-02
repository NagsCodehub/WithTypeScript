var demo_interfaces;
(function (demo_interfaces) {
    var squarebasic = function (num) { return num * num; };
    var squareit;
    var p = {
        // favoriteMovie:'LOTR',
        name: "Nag",
        age: 40,
        kids: 1,
        calcPets: function () { return this.kids * 2; },
        makeYounger: function (years) { this.age -= years; },
        greet: function (msg) { return msg + ',' + this.name; }
    };
    var pets = p.calcPets();
    console.log(pets);
    p.makeYounger(15);
    var newage = p.age;
    console.log(newage);
    var msg = p.greet('Hello New Year');
    console.log(msg);
    function sessionEvaluator() {
        var ratings = [];
        var addRating = function (rating) {
            if (rating === void 0) { rating = 5; }
            ratings.push(rating);
        };
        var calcRating = function () {
            var sum = 0;
            ratings.forEach(function (score) {
                sum += score;
            });
            return sum / ratings.length;
        };
        return {
            addRating: addRating,
            calcRating: calcRating
        };
    }
    var s = sessionEvaluator();
    s.addRating(4);
    s.addRating(5);
    s.addRating(7);
    console.log(s.calcRating());
})(demo_interfaces || (demo_interfaces = {}));
