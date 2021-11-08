function getSum( a,b ){
    let arr = [a,b].sort((a,b)=> a-b);
    console.log(arr);
    let sum=0;
    for(let i = arr[0]; i<=arr[1]; i++){
        sum +=i;
    }
    return sum;
}
let r = getSum(0,1);
console.log(r);