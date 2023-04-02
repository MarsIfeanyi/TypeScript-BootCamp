/**
 *
 *FUNCTION TYPE AND CALLBACK

 Function type defines the parameters and the return type of a function
 */
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
} //Hint: cb = callback function
printResult(add(5, 12));
// CReating function type
var combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
// let someValue: undefined;
addAndHandle(10, 20, function (result) {
    console.log(result);
});
