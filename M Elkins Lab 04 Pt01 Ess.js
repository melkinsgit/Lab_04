/**
 * Created by Margaret on 2/3/2016.
 */

// Below except where noted is from Clara's file


//Acts as our class definition - define a constructor
var Squirrel = function(n) {
    this.name = n;
    this.nuts = 0;
};

//Add a method to the Squirrel class
Squirrel.prototype.sayHello = function() {
    console.log("Hello!");
};

//Add another method
Squirrel.prototype.faveFood = function(){
    console.log(this.name + " likes nuts");
};

//And another method
Squirrel.prototype.addNutsToStore = function(newNuts) {
    this.nuts += newNuts; // note that you have to use this, when CREATING A METHOD
};
// no getters, no setters

var fluffy = new Squirrel("Fluffy");

//Call some squirrel methods for fluffy - I commented out to clean up output
//fluffy.sayHello();
//fluffy.addNutsToStore(10);
//fluffy.faveFood();
//fluffy.addNutsToStore(15);

//console.log(fluffy.nuts);

var squeaky = new Squirrel("Squeaky");

//squeaky.faveFood();
//squeaky.sayHello();
//Can you call addNutsToStore for this Squirrel?



//Adding properties to one Squirrel only
squeaky.tree = "Oak Tree";

//console.log("Squeaky's tree is : "+ squeaky.tree);   // "Oak Tree"
//Fluffy doesn't have a tree
//console.log("Fluffy's tree is : "+ fluffy.tree);   // "undefined"

//Add a jump method only for fluffy
//fluffy.jump = function() {
//    console.log(this.name + " is jumping!");
//};
//
//fluffy.jump();   //This works

// squeaky.jump();  //Calling this results in an error - squeaky doesn't have a jump method


/* I coded this for an emxample in class */
var pooky = new Squirrel ("Pooky");

//pooky.sayHello();
pooky.addNutsToStore(3);
pooky.addNutsToStore(12);
pooky.addNutsToStore(40);
//console.log(pooky.nuts);
//pooky.faveFood();

/* this is the end of what I coded in class */

/* BEGINNING OF LAB 04 CONTENT */

// add the method jump to the Squirrel class prototype
Squirrel.prototype.jump  = function () {
    console.log(this.name + " is jumping!");  // this methods outputs a statement saying the squirrel is jumping
}

// test of jump for pooky

//pooky.jump();

var squirrels = [fluffy, squeaky, pooky];  // create an array of Squirrel objects previously instantiated

for (var sqrl in squirrels){  // loop through the array iwth sqrl as the index value

    // access the name property of a given Squirrel object in the array
    console.log("The current squirrel is called " + squirrels[sqrl].name + ".");

    // call the jump method from the object Squirrel[index sqrl]
    squirrels[sqrl].jump();

}
