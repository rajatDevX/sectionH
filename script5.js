// const arr1=[1,2,3,4,5];
// console.log(typeof arr1);
// console.log(arr1[0]);
// console.log(arr1[1]);
// const a=89;
// arr1[0]=45;
// console.log(arr1);
// console.log(typeof a);
// console.log(arr1.length);
// arr1.push(78);
// console.log(arr1);
// let b=arr1.pop();
// console.log(b);
// arr1.unshift(32);
// console.log(arr1);
// let e=arr1.shift();
// console.log(arr1);
// console.log(e);

const arr1=["Rohit","Anshul","Vishal"];
// arr1.splice(index,deletCount,element1,element2,---------);
arr1.splice(1,0,"Shivam");
console.log(arr1);

let d=arr1.includes("krishna");
console.log(d);


let e=arr1.slice(0,2);
console.log(e);

let f=arr1.indexOf("vishal");
console.log(f);
  function checkNumber(num){
    if(num>10){
        console.log(`number is greater than 10`)
    }
    else{
        console.log(`number is less than 10`);
    }
  }
  checkNumber(45);


  for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
  }


