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
})(demo_interfaces || (demo_interfaces = {}));
