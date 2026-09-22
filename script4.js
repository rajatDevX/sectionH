let name1="Shubham"
function greet(){
    console.log(`this will print after 4 second`);
}

// let greet1=function(){
//     console.log(`this will print after 5 second`);
// }
// // arrow function
// let greet2=()=>{
//     console.log(`this will print after 7 second`);
// }
// let greet3=(name1,university,branch)=>{
//     console.log(`Hi ${name1} here studying from ${university} university in ${branch} branch`);
// }

// console.log(`this will print instantly`);
// setTimeout(greet,4000);
// setTimeout(greet1,5000);
// setTimeout(greet2,7000);

// setTimeout((name1)=>{
//     console.log(`this will print ${name1} after 8 seconds`)
// },8000,"arun");
// setTimeout(greet3,9000,"Arjun","GLA","cse");
setInterval(greet,3000);
let count=5;
let id=setInterval(()=>{
    console.log(count);
    if(count==-10){
      clearInterval(id)
    }
    count--;

},1000);
