// Exercise-1

let company=[
    {
      names:"Tata",
      year:1985,
      end:2021,
      category:"retail"
    },
    {
      names:"Tisco",
      year:1999,
      end:2019,
      category:" non-retail"
    },
    {
      names:"capecomorin",
      year:2021,
      end:2050,
      category:"retail"
    },
   ]
//    Exercise 1: In index.js print the name of each company using forEach

   company.forEach((data)=>console.log(data.names))

//    Exercise 2: In index.js print the name of each company that started after 1987

   let recentcompany=company.filter((data)=>{
    return data.year>1987
    });
   recentcompany.forEach(element=>console.log(element.names));


   // exercise 3 is in index.html

//    Exercise 4: In index.js sort the companies based on their end date in asceding orde

   let endyear=company.map(data=>data);;
   endyear.sort((a,b)=>a.end-b.end)
   endyear.forEach(element=>console.log(element.names))

// Exercise 5: In index.js sort the ages array in desceding order

let ages=[23,10,30,45,19,15]

ages.sort((a,b) =>b-a);

console.log(ages)

// Exercise 6: In index.js print the sum if you add all the ages using reduce

let age=[23,10,30,45,19,15]

let summ= age.reduce((a,b) => a+b);

 console.log(summ)

// Exercise 7: In index.js make an new object that has the properties of name and
// category same as the companies[0] and a method print that prints out the name, use
// object destructuring and ES6 JS

let company=[
   {
     names:"Tata",
     year:1985,
     end:2021,
     category:"retail"
   },
   {
     names:"Tisco",
     year:1999,
     end:2019,
     category:" non-retail"
   },
   {
     names:"capecomorin",
     year:2021,
     end:2050,
     category:"retail"
   },
  ]

let [x,y,z]=company;
console.log(x.names);
console.log(y)


// Exercise 8: In index.js create a funcion that takes an unkown number of arguments
// that are numbers and return their sum;

let numbers=[]
let sums=(...numbers)=>{
    let total=0
  for (let num of numbers) {
   total+=num
  }
  return total;
}
console.log(sums(2,7,8,9))

// Exercise 9: In index.js make a function that takes an unkown number of arguments of
// any type and adds them in an array and returns the array, if the argument is an array
// it should add it's values to the array that will be returned by the function

let array=[6,"8","gkj"];
let ab=["kk",1,"l"]
let array1=(...arr)=> {
 return [...arr,...array] };
 console.log(array1("jhfj",56,...ab))


// Exercise 10:index.js distructure the property street in a variable named street from
// the object person

let person={
   name:"jasmine",
   street:"paloor",
   
}
let {name,street}= person;
console.log(street);



// Exercise 11: In index.js write a function that everytime you call it, it returns a number
// that increments starting from 0

let totals=0

let num=()=>{
   console.log(totals++)
};
num();
num();
num();
num();

// Exercise 12: In index.js create a function that distructures the query parameters of a
// url and adds them in an object as key value pairs and then returns the object


// Part 2 :


// Exercise 1: In index.js create a function called sum that takes 2 arguments type
// numbers and returns their sum. If you do not provide the second argument then it will
// use the value of the first plus 1


let sum=(a, b=a+1)=> a+b;

console.log(sum(2,4))

console.log(sum(2))

console.log(sum(6))


// Exercise 2: In index.js create a constructor that returns an instance even if you do not
// add the keyword new




// Exercise 3: In index.js Write a JavaScript program to compare two objects to
// determine if the first one contains equivalent property values to the second one


let company1= {
    name: 'tata',
    year:  1999
    
 };
 let company2 = {
    name: 'tata',
    year: 1999

 };
 
 console.log(JSON.stringify(company1)===JSON.stringify(company2)); 

//  Exercise 4: In index.js Write a JavaScript program to filter out the specified values
// from a specified array. Return the original array without the filtered values

   
let arrays=[2,3,4,5,6,7,89,90]
let total=arrays.map(data=>data)
   
let total1= total.filter((data)=>{
    return data%2==0})
console.log(total1);
console.log(arrays)

// Exercise 5: In index.js write a programm that check if a value is null or undefined and
// returns a string saying what it is

let valuecheck=(a)=>{
    a==null||undefined?console.log(`value is null or undefined`):console.log(`${typeof(a)}`)
  }
  valuecheck();
  valuecheck("gjg");

//   Exercise 6: Write a JavaScript program to target a given value in a nested JSON
// object, based on the given key

let resume={
   name:"jasmine",
   personal_details:{
       age:23,
       phone:1267890999
   }
}    
const {name,personal_details:{age,phone}}=resume;
console.log(age)


//   part-3

// Exercise 1: In index.js Loop and print the properties of person;

   let person={
      name:"jasmine",
      place:"paloor"
   }
   for(let property in  person){
      console.log( `${person[property]}`)
   }

// Exercise 2: Create a function that you provide an even number and it creates a multi
// dimensional Array. Example if I give 2 I should get; const array = [ [1, 2], [1, 2] ]; Then
// print that last index of the last array.

// Exercise 3: Write a console statement that prints a warning of 'please update your
// browser'?

console.warn("please update your browser")

// Exercise 4: Write a console statement that prints an error of 'invalid password'?

console.error("invalid password")

// Exercise 5: Write a console statement that prints the properties of an element p

console.info("When you use the <p> tag in your JavaScript code, you're tell the interpreter that you want to add a paragraph to the page.")


// Exercise 6: Write a try catch statement that prints out an error. In both cases it will
// also print out finally

try {
   console.log(a+b)
} catch (err) {
   console.log(err)
} finally {
console.log("error is determined")
}

// Exercise 7: Write a switch statement that check and prints out which day do we have,
// ex Thursday

let day;
switch (new Date().getDay()) {
case 0:
    day = "Sunday";
    break;
case 1:
    day = "Monday";
    break;
case 2:
    day = "Tuesday";
    break;
case 3:
    day = "Wednesday";
    break;
case 4:
    day = "Thursday";
    break;
case 5:
    day = "Friday";
    break;
case  6:
    day = "Saturday";
}
console.log(day)

// Exercise 8: Write 5 different ways to check if an object is empty

// Exercise 9: Write 4 different ways to find a value in an Array, write your own smart
// examples

let array=[45,88,09,26,38]
let filter=array.filter(data=>data%2==0);
console.log(filter)
let include=array.includes(88)
console.log(include)
 let find=array.find(data=>data==45)
console.log(find)
let findindex=array.indexOf(38)
console.log(findindex)


// Part 4 :
// Exercise 1: Create a function that takes an array as an argument and removes all
// duplicates;

let array = ['A', 'B', 'A', 'C', 'B'];

let uniqueitem = array.filter((c, index) => {
    return array.indexOf(c) === index;
});

console.log(uniqueitem);

// Exercise 2: Create a function that takes 3 arguments. The first is an array, the
// seconds is a value and the third is a string. According to the string it will add that
// values or remove a value from the begging of the array, or add that value or remove
// a value from the end of the array.

let  createfunction=(array,string,value)=>{
   if(string=="add"){
       console.log([value,...array])
   }else if(string="remove"){
           array.pop()
       }
 console.log(array)
   };
createfunction([14,24,365],"add",1);
createfunction([14,23,35],"remove",35)


// Exercise 3: Create a function that takes in an array filters everything besides
// numbers and then make it fail so you can debug it.


// Exercise 4: Do the filter Exercise.

       
let Num=[21,1,56,36,5,8,10,56,]
let even=Num.filter(n=>n%2==0)
console.log("even number",even)



// Part 5 :
// Exercise 1: Concat nums1 into nums2, then clone it into nums3 and find the max and
// the min number;
      let num1=[11,33,55];
      let num2=[38,90,47];
      let concad=[...num1,...num2];
      let num3=concad.map(value=>value)
      console.log(num3)
      console.log(Math.max(...num3))
      console.log(Math.min(...num3))


// Exercise 2: Sum the total score of all the fishermen. Also get the average score and
// print the names of those that have a score higher then 100

let fishermen=[
   {
     name:"abc",
     score:90
   },
   {
     name:"def",
     score:290,
   },
   {
     name:"ghi",
     score:49
   }
 ]
 let sum=0
 fishermen.forEach((data)=>sum+=data.score);
 console.log(sum)
 console.log("average",sum/fishermen.length);
  let maxscore=fishermen.filter(data=> data.score>100)
  maxscore.forEach(data=>console.log(data.name))


// Exercise 3: Write a regular expression that finds all numbers in a string.


let string="1abcd@123ashg25"
console.log(string.replace(/\D/g,''));

// Exercise 4: Write a function that checks if scores are all positive numbers and an
// other function if there is a value that is not a number


let scores=[6,7,-9,"ygjg"]
let positive=scores.map((data)=>{data<0? console.log(`there is negative number`):""});

let type=()=>{for(let num of scores){
  typeof(num)!='number'?console.log(`${num} is not a number`):""}}
 type(scores)



// Exercise 5: Write a function that takes 2 arguments and checks if both are positive if
// one is positive and if both are negative.

let checkvalue=(a,b)=>{a>0 && b>0?console.log(`Both are positive`) : a<0 && b<0? console.log(`Both are negative `) : console.log(`one is positive`)}
                  
                  
checkvalue(4,8);
 checkvalue(-4,8);
 checkvalue(-4,-8);
