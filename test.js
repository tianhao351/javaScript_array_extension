Array.prototype.sayHi = function(){
    console.log("Hi")
}

Object.defineProperty(Array.prototype, "sayHi", {
    enumerable:false,
    // value:function(){
    //     console.log("Hi")
    // }
});
var arr = new Array(1,2,3);

// console.log(arr.__proto__)
arr.sayHi()

for (var x in arr) {
    console.log(x,arr[x])
}

// for (var x in arr) {
//     if(typeof arr[x] !== 'function'){
//         console.log(x,arr[x])
//     }
// }



for (var x in arr) {
    console.log(x,arr[x])
}