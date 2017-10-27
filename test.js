Object.defineProperty(Array.prototype, "sayHi", {
    enumerable:false,
    value:function(){
        console.log("Hi")
    }
});
var arr = new Array(1,2,3);
arr.sayHi()

for (var x in arr) {
    console.log(x,arr[x])
}
