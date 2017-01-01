var demo_primitive;
(function (demo_primitive) {
    var data;
    var info;
    var dosomething = function (arg) {
        return arg;
    };
    //primitives
    var age = 21;
    var score = 34.56;
    var rating = 99.99;
    var hasData = true;
    var isReady = true;
    var isBald = function () { return 'yes'; };
    var hasHair = !!isBald();
    // string array
    var firstName = 'Nag';
    var lastName = 'kar';
    function getArrayLength(x) {
        var len = x.length;
        return len;
    }
    var names = ['Nag', 'Dat', 'Sri', 'Ven'];
    var firstPerson = names[0];
    console.log(getArrayLength(names));
    //null examples
    var casiosales = null;
    var keyboard = null;
    var ordedate = null;
    //undefined
    var quantity;
    var company;
    console.log("undefined examples");
    console.log(quantity);
    console.log(company);
})(demo_primitive || (demo_primitive = {}));
