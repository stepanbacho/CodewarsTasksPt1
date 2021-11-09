var maxSequence = function(arr){
    let currentSum = 0;
    let sum = 0;
    if (arr.length === 0) {
        return 0;
    }
    arr.forEach(elem => {
        currentSum = Math.max(elem, currentSum + elem);
        sum = Math.max(sum, currentSum);
    });
        
    return sum;
}
// let r = maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// console.log(r);