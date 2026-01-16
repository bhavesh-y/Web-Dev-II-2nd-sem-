// // simple funtion 

// function sample(){
//     console.log("sample")
// }
// sample()

// function sample(a){
//     console.log(a,"sample")
// }
// sample(5)







// Arrow funtion 

// const sample=() => console.log("sample")
// sample()

// const sample=() => "sample"
// console.log(sample())

// const sample=(a,b) =>a+b;
// console.log(sample(5,10))

// const sample=(a,b) => {
//     return a+b;
// }
// console.log(sample(5,9))









// callback funtions- in this funtion if we pass a funtion as an 
//                    argument inside another funtion 
//                 then we call it callback funtion 

// function sample(){
//     console.log("sample");
// }
// sample()

// function demo(){
//     console.log("demo");
// }
// demo()
// sample(demo())
// sample(demo)



function sample(callback){
    console.log("sample");
    callback();
}

function demo(){
    console.log("demo");
}
sample(demo);