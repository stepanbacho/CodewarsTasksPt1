function arrayDiff(a, b) {
    let arr = [];
    a.map(function(i){
        if(!b.includes(i)){
            arr.push(i);
        }
    })

    return arr;  
}
// let r = arrayDiff([1,8,2], []);
// console.log(r);