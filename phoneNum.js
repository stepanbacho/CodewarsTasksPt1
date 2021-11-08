function createPhoneNumber(x){
    let a = x.slice(0,3).join('');
    let b = x.slice(3,6).join('');
    let c = x.slice(6).join('');
    return `(${a}) ${b}-${c}`
}
// let r =createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// console.log(r);