function digPow(n, p){
    let mult = 0;
    let nArr = n.toString().split('');
    for (let i = 0; i < nArr.length; i++) {
        let m = Math.pow(nArr[i], p+i);
        mult +=m;
    }
    if(mult%n ===0){
        let k = mult/n;
        return k;
    }
    return -1;
}
// let r = digPow(46288, 3);
// console.log(r);