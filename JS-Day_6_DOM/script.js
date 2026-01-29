
// let user = {
//     full_name : "bhavesh",
//     mobileno : 1234567890,
//     address : {
//         city : "gurugram",
//         state : "haryana"
//     },
//     favColor : ["blue","green","red"],
//     demo: function(){
//         return "demo hello"
//     }
// };


// console.log(user.full_name,user.favColor[1],user.demo(),user.address.state)

// object methods

// console.log(Object.keys(user))



// console.log(Object.values(user))



// console.log(Object.entries(user))





const car = {
    make : "mahindra",
    model : "THAR"
};

Object.seal(car);  // in seal we cannot change new key and value pair but we can update  or change the existing pair



Object.freeze(car); // in freeze we cannot update,add or change the pair 




car.model ="XUV700";
car.color = "black";
console.log(car)
