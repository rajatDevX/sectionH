// primitive and non primitive data types

// primitive data types
// 1. number
// 2. string
// 3. boolean
// 4. undefined
// 5. null

// non primrive(reference type) data type
// 1. array
// 2. object

const a=56;
// a=78;
// console.log(a);

const arr1=[12,34,56];
// arr1= some address
arr1[0]=1;
console.log(arr1);
// object datatype in javaScript
const studentName="kisan";
const studentAge=22;
const studentBranch="cse";

const student={
    name:"Arjun",
    age:20,
    branch:"cse"
};
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.branch);
console.log(student["name"]);

// two special cases to access properties using square brackets
// case-1
const student1={
    "full name":"Arun",
    age:22
}
console.log(student1["full name"]);
// console.log(student.full name);
// case-2
const field="age";
console.log(student1[field]);

// update values of objects
student1.age=24;
console.log(student1);

// adding new values
student1.branch="cse";
console.log(student1);

// deleting existing values
delete student1.branch;
console.log(student1);

// accessing a property which does not exist in the object
console.log(student1.address);
// undefined
// console.log(student1.address.city);
//undefined.city
// optional chaining for safe access without error
console.log(student1.address?.city);
//undefined
const student2={
    name:"Ajay",
    age:21,
    address:{
        city:"Mathura",
        state:"up"
    },
    subjects:["html","css","js"],
    greet:function(){
        console.log(`Hello world!!!!`)
    },
    learn(){
        console.log(`I am learning javaScript`);
    }

};

console.log(student2.address.city);

