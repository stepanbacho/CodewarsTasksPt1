function spinWords(string){
    let strArr = string.split(' ');
    for (let i = 0; i < strArr.length; i++) {
        if(strArr[i].length>4){
            strArr[i] =  strArr[i].split('').reverse().join('');
        }
    }
    return strArr.join(' ');
}
// let r = spinWords('This is another test');
// console.log(r);