// let arr = [2,4,34,53,24,76,37,34,74]
// let psh = arr.push(93)
// console.log(psh)











// let arr = [1,53,34,64,34,64,635,45,63,86]
// let pp = arr.pop()
// console.log(pp)
// console.log(arr)














// let arr = [1,53,34,64,34,64,635,45,63,86]
// let pp = arr.shift()
// console.log(pp)
// console.log(arr)

















// let arr = [1,53,34,64,34,64,635,45,63,86]
// let pp = arr.unshift(12)
// console.log(pp)
// console.log(arr)














// QUES - reverse the array using push and pop method

// let arr = [1,2,3,4,5,6]
// let emptyarr = []
// let p1 = arr.pop()
// let p2 = arr.pop()
// let p3 = arr.pop()
// let p4 = arr.pop()
// let p5 = arr.pop()
// let p6 = arr.pop()

// let pu1 = arr.push(6)
// let pu2 = arr.push(5)
// let pu3 = arr.push(4)
// let pu4 = arr.push(3)
// let pu5 = arr.push(2)
// let pu6 = arr.push(1)

// console.log(arr)

// i = 5
// while (i>=0){
//     pp = arr.pop()
//     emptyarr.push(pp)
//     i--
// }
// console.log(emptyarr)



// while (arr.length>0){
//     emptyarr.push(arr.pop())
// }
// console.log(emptyarr)






// ques - remove all negative number from array 
// let arr = [5,-3,16,-11,-7,8]
// let res = []

// while (arr.length>0){
//     let val = arr.shift();
//     if (val>0){
//         res.push(val);
//     }
// }
// console.log(res)





// ques - check if array palindrome or not

function palindrome(){
let arr = [1,2,3,2,1]
let original = []; //1,2,3,2,1
let reverse=[]  //1,2,3,2,1

//Copy all the elements of given array to an original array

for(let i=0;i<arr.length;i++){
    original.push(arr[i]);
    // console.log(original);
}

//Reverse the given array
               
while(arr.length>0){
    reverse.push(arr.pop())
}
for(i=0;i<original.length;i++){
    if(original[i] !== reverse[i]){
        return"Not a palindrome"
    }
}
        return"Not a palindrome";
}
console.log(palindrome());