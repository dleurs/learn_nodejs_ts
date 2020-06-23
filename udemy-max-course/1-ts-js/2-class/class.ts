class Person
{
    name: string;
    age: number;
    hasHobbies: boolean;
    constructor(name: string, age: number, hasHobbies: boolean)
    {
        this.name = name;
        this.age = age;
        this.hasHobbies = hasHobbies;
    }

    summarize(): string
    {
        var res = "Utilisateur nommé " + this.name + " qui a " + this.age;
        if (this.hasHobbies)
        {
            res += " ans a des hobbies";
        } else
        {
            res += " ans n'a pas des hobbies";
        }
        return res;
    }
    //constructor(public name: string, public middleInitial: string, public lastName: string)
}

let dimitri: Person = new Person("Dimitri", 22, true);
//console.log(dimitri.summarize()); 

class PersonArgs
{
    name: string;
    age: number;
    hasHobbies?: boolean;
}

class PersonNamed
{
    name: string;
    age: number;
    hasHobbies: boolean;
    constructor({ name, age, hasHobbies = false }: PersonArgs)
    {
        this.name = name;
        this.age = age;
        this.hasHobbies = hasHobbies;
    }

    summarize(): string
    {
        var res = "Utilisateur nommé " + this.name + " qui a " + this.age;
        if (this.hasHobbies)
        {
            res += " ans a des hobbies";
        } else
        {
            res += " ans n'a pas des hobbies";
        }
        return res;
    }
}

console.log((new PersonNamed({ name: "Pauline", age: 22 }).summarize()));


