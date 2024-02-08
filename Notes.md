Classes and Objects...
var let and const
Hoisting

Main 4 pillars for Java
Encapsulation:  protecting
inheritance: copying the properties from the parent...
polymorphism: 
abstraction: Hiding the Implementation details from the user...

//Classes and Objects:
 
What is Class
Is a collection/blueprint of properties, objects, etc..
//prototype..(Planning/blueprint)

What  is Object: 
An Object is a real time entity...

Syntax:

class classname{
    
}
var objectname = new classname();

Ex:
class car 
{
  constructor(name,color){
    this.name = name
    this.color = color
  }
  If we didn't give "this." the name will get assinged to another name value instead of showing as a key value pair.
  To create like a key value pair we used this. keyword.
}
var c1 = new Car("BMW","red");
It is called as specific object because in normal key value pair objects we can store anything but this object will be specific to that class only.
new is a keyword.
it will helps u to create the fresh Objects.

Constructor:

C- reference to objects
To store value inside objects.

this:
this is nothing but keyword.
It is a temproary reference to freshly creaeted objects.
this.name = name; To differentiate key and value
Above line is same as Key = Value

var c1 = new Car("BMW", "black")
console.log(c1);

var c2 = new Car("Audit", {color:"pale"},"petrol");

console.log(c2);

c2.color = "red"
console.log(c2);

Question:
//Create a class of type Bike
//Which takes the following as the properties....
//name, color, mileage, speed
//Based on the Above class, Create The necessary Objects...

class Bike{
  constructor(name,color,mileage,speed){
      this.name = name;
      this.color = color;
      this.mileage = mileage;
      this.speed = speed;
  }
}

var Bikeobj = new Bike("MT","Gray","100","10");
var Bikeobj2 = new Bike("R15","Red","200","20");
Console.log("Bike", Bikeobj + Bikeobj2);

//Function:

If you write a function inside the class then, it is called as method..

class Bike{
  constructor(name,color,mileage,speed){
      this.name = name;
      this.color = color;
      this.mileage = mileage;
      this.speed = speed;
  }
  //Method
  print_name(res){
    return `The name of the Bike is ${this.name} and called by ${res}`
  }
}

var Bikeobj = new Bike("MT","Gray","100","10");
var Bikeobj2 = new Bike("R15","Red","200","20");
Console.log("Bike", Bikeobj + Bikeobj2);
console.log(b1.print_name("b1"));
//we can't call print_name directly so we need to 
use bike obj b1 only we can call.

**Scoping var let and const**
// var is called glboal scope.
// let and const is called local scope.

**Hoisting**
I'm trying to access a variable before I declare it.
There comes scoping:
let and const - From ES6.