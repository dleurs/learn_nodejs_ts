var Person = /** @class */ (function () {
    function Person(name, age, hasHobbies) {
        this.name = name;
        this.age = age;
        this.hasHobbies = hasHobbies;
    }
    Person.prototype.summarize = function () {
        var res = "Utilisateur nommé " + this.name + " qui a " + this.age;
        if (this.hasHobbies) {
            res += " ans a des hobbies";
        }
        else {
            res += " ans n'a pas des hobbies";
        }
        return res;
    };
    return Person;
}());
var dimitri = new Person("Dimitri", 22, true);
//console.log(dimitri.summarize()); 
var PersonArgs = /** @class */ (function () {
    function PersonArgs() {
    }
    return PersonArgs;
}());
var PersonNamed = /** @class */ (function () {
    function PersonNamed(_a) {
        var name = _a.name, age = _a.age, _b = _a.hasHobbies, hasHobbies = _b === void 0 ? false : _b;
        this.name = name;
        this.age = age;
        this.hasHobbies = hasHobbies;
    }
    PersonNamed.prototype.summarize = function () {
        var res = "Utilisateur nommé " + this.name + " qui a " + this.age;
        if (this.hasHobbies) {
            res += " ans a des hobbies";
        }
        else {
            res += " ans n'a pas des hobbies";
        }
        return res;
    };
    return PersonNamed;
}());
console.log((new PersonNamed({ name: "Pauline", age: 22 }).summarize()));
