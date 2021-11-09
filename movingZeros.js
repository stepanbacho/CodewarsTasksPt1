var moveZeros = function (arr) {
    let newArr = arr.filter(elem=>(elem!==0));
    let zeros = arr.filter(elem=> elem === 0);
    zeros.forEach(elem=>newArr.push(elem));  
    return newArr;
}
// let r = moveZeros([1,2,0,1,0,1,0,3,0,1, "a", false, null, undefined])
// console.log(r);