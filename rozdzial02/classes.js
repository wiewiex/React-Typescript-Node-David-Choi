var Person = /** @class */ (function () {
    function Person(msg) {
        this.msg = msg;
    }
    Person.prototype.speak = function () {
        this.msg = "mówię: " + this.msg;
        console.log(this.msg);
    };
    return Person;
}());
var tom = new Person("cześć jestem Tom");
// tom.msg = "cześć";
tom.speak();
