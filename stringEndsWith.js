function solution(str, ending){
    if (ending){
        let endLen = ending.length;
        let compStr = str.slice(-endLen);
        return compStr===ending;
    }
    return true
}
// let r = solution('abc', '');
// console.log(r);