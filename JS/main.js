//mass in kg and height in meters
//mark= 5'9", 180lbs, 1.75m, 81.6kg
//john= 6'3", 1.91m, 170lbs, 77.11kg


var heightMark = 1.75;
var massMark = 81.6;
var bmiMark = massMark / (heightMark * heightMark);

var heightJohn = 1.60;
var massJohn = 82;
var bmiJohn = massJohn / (heightJohn * heightJohn);

var compareBMI = bmiMark > bmiJohn;
console.log("Mark's BMI:" + bmiMark + "\nJohn's BMI:" + bmiJohn);

if (bmiMark > bmiJohn) {
    console.log("Mark's BMI is higher than John's BMI");
} else {
    console.log("John's BMI is higher than Mark's BMI");
}




var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}


//ternary operator (aka conditional operator)
//    condition ? if block : else block;

age >= 18 ? console.log(firstName + ' drinks beer')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);



//switch statement

var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.'); 
        break;
    case 'driver':
        console.log(firstName + ' drives kids  to school.'); 
        break;
    case 'designer':
        console.log(firstName + ' designs kids clothes.');
        break;
    default:
        console.log(firstName + ' does something else.'); 
}

/* 
var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
} 

=== 

*/

age = 57;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}


/* 
Truthy and Falsy values:
falsy values: undefined, null, 0, '', NaN 
(all will be considered false when evaluated in a boolean condition)
and truthy are just Not falsy and would be evaluated true in a else/if
 */
 var height;
 //height=0;
 if (height || height === 0) {
     console.log('var is defined');
 } else {
     console.log('var is Undefined');
 }



 //Equality operators
 x=23;
 //x='23';
if (x === '23') {
    console.log('The NON strict eqaulity operator ==  DOES type coercion');
} else {
    console.log('The STRICT equality opertatory === does NOT do type coercion');
}




var avgJohn = (34 + 45 + 66) / 3;
var avgMike = (34 + 45 + 67) / 3;
var avgMary = (34 + 45 + 69) / 3;
console.log(' John:' + avgJohn + ' Mike:' + avgMike + ' Mary:' + avgMary);

if (avgJohn > avgMike && avgJohn > avgMary) {
    console.log("John is the winner");
} else if (avgMary > avgJohn && avgMary > avgMike) {
    console.log("Mary is the winner");
} else if (avgMike > avgMary && avgMike > avgJohn) {
    console.log("Mike is the winner");
} else {
    console.log("There must be a tie!...or an error :( ")
}




// functions

function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageSam = calculateAge(1985);
console.log(ageSam);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 50 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years');
    } else {
        console.log(firstName + ' IS ALREADY RETIRED!!!');
    }
    
}

yearsUntilRetirement(1985, 'Sam');
yearsUntilRetirement(1955, 'Jess');
yearsUntilRetirement(1995, 'Tim');

//function declaration
function whatDoYouDo(job, firstName) {

}
// function expression
var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
        case 'instructor':
            return firstName + ' teaches kids how to code.'; 
        case 'driver':
            return firstName + ' teaches kids how to drive.';
        case 'designer':
            return firstName + ' teaches kids how to deisgn.';
        default:
            return firstName + ' teaches kids something else.'; 
    }
}


console.log(whatDoYouDo('instructor', 'John'));
console.log(whatDoYouDo('driver', 'Adam'));
console.log(whatDoYouDo('diver', 'Smith'));

//expressions return something while 
//statements dont return anything on their own, like loops, conditionals and declarations



// ARRAYS
//initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948); //uncommon way to create an array

console.log(names[0]);
console.log(names);
console.log(names.length);

//muatate array
names[1] = 'Sam';
names[names.length] = 'Mary';
console.log(names);

//different data types
var jon = ['jon', 'smith', 1990, 'teacher', false];

jon.push('blue');//adds to back of array
jon.unshift('Mr.');//adds to front of array
console.log(jon);

jon.pop();//removes from the back
jon.shift();//removes from the front
console.log(jon);

console.log(jon.indexOf(1990));
console.log(jon.indexOf(13));

var isDesigner = jon.indexOf('designer') === -1 ?
'Jon is not a designer' : 'Jon is a designer';
console.log(isDesigner);

jon.push('designer');
var isDesigner = jon.indexOf('designer') === -1 ?
'Jon is not a designer' : 'Jon is a designer';
console.log(isDesigner);


//challenge 3
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15
    } else {
        percentage = .1
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
var finalValues = [bills[0] = tips[0],
                    bills[1] = tips[1],
                    bills[2] = tips[2]];



//objects and properties

//object literal syntax
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        return 2019 - this.birthYear;
    }
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

john.age = john.calcAge()
console.log(john.age);


//new obj syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1987;
jane['lastname'] = 'Smith';


console.log(jane);




//

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2019 - this.birthYear;
    }
};

john.calcAge();//adds age prop and calcs and adds value
console.log(john);






//challenge 4

var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Smith',
    mass: 72,
    height: 1.75,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}


john.calcBMI();
mark.calcBMI();
if (john.bmi > mark.bmi) {
    console.log(john.fullName + ' has the higher BMI ' + john.bmi);
} else if (mark.bmi > john.bmi) { 
    console.log(mark.fullName + ' has the higher BMI ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}

console.log(john, mark);

/*can also do it this way as calcBMI() returns BMI.
you don't need calcBMI for the elseif as the BMI
was already returned when it was called in the if statement*/
if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has the higher BMI ' + john.bmi);
} else if (mark.bmi > john.bmi) { 
    console.log(mark.fullName + ' has the higher BMI ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}








//loops and iteration

for (var i = 1; i <= 20; i +=2) {
    console.log(i);
}


var john = ['John', 'smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//while loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}


//continue and break statements

var john = ['John', 'smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;  //will skip over non strings
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;  //will stop exec once it encounters a non string
    console.log(john[i]);
}


// looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}






//execution context and stacks
/*
var name = 'John';

function first() {
    var a = 'Hello ';
    second();
    var x = a + name;
    return x + z;
}

function second() {
    var b = 'hi ';
    third();
    var z = b + name;
    return z;
}

function third() {
    var c = 'Hey ';
    var z = c + name;
    return z;
}

console.log(first());
*/



//hoisting and scope
calculateAge(1956); //can 'hoist' or call a func declaration before declaring it
function calculateAge(year) {
    console.log(2016 - year);
}

//retirement(1956); //can NOT hoist with function expressions, only declarations
var retirement = function(year) {
    console.log(65 - (2016-year));
}
//retirement(1956);

console.log(age);//calling a var before it's define results in an 'undefined'
var age = 23;

function foo() {
    console.log(age); //undefined
    var age = 65;
    console.log(age); //will call the age var in the func scope
}
foo();
console.log(age);//will call the global age var




//this keyword

console.log(this); //keyword points at global obj, window obj is default  in the browser


function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);//will still point to window obj
}
calculateAge(1985)

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calcAge: function() {
        console.log(this); //this refers to the obj that called the method, ie John
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction () {
            console.log(this); //this will point back to the default window obj 
                                //as it is in a func of an obj, not in the john obj directly
                          
        }
        innerFunction();
    }
}
john.calcAge();



var mike = {
    name: 'mike',
    yearOfBirth: 1986
};

mike.calcAge = john.calcAge; //method BORROWING    
//this demos that the "this" keyword is only asssigned a value after the method is called
mike.calcAge();



//BIG O and runtime
const nemo = ['nemo'];
var everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'darla'];
const large = new Array(100).fill('nemo');

function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo');
        }
    }
    let t1 = performance.now();
    console.log('call to find nemo took ' + (t1-t0) + ' millisecs')
}
findNemo(large);
//this is linear or O(n) --> n is just a letter signifying amount of inputs, could be x or whatever

var everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'darla'];
function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        console.log('running')
        if (array[i] === 'nemo') {
            console.log('Found Nemo');
            break //makes loops above more efficient by stopping when it finds nemo instead of continuing to run the length of the array
        }
    }
}
findNemo(everyone);

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; //O(1) or constant
  a = 50 + 3;//O(1)

  for (let i = 0; i < input.length; i++) {//O(n) or linear or O(inputs)
    anotherFunction();//O(n)
    let stranger = true;//O(n)
    a++;//O(n)
  }
  return a;//O(1)
}
// 3 constants and 4 loops or n+n+n+n = 4n
// Big O notation = BIG O(3 + 4n)  === O(n)



//Log all pairs of array //common interview q
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

logAllPairsOfArray(boxes)
//BIG O = O(n^2) or quadratic



//es6

//arrow funcs
var years = [1990, 1980, 1970, 1960, 1950]
//simplest form
let ages6 = years.map(el => 2016 - el);
console.log(ages6);
//two or more inputs
ages6 = years.map((el, index) => `Age element ${index +1}: ${2016 -el}.`);
console.log(ages6);
//two or more lines of code
ages6 = years.map((el, index) => {
    var now = new
    Date().getFullYear();
    const age = now - el;
    return `Age element ${index +1}: ${age}.`
});
console.log(ages6);


// from this:
var test1 = [1,2,3,4].filter(function (value) {return value % 2 === 0});
// to this:
var test2 = [1,2,3,4].filter(value => value % 2 === 0);
console.log(test1, test2);
console.log(test1 + test2);
