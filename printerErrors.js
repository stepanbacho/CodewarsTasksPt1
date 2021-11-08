function printerError(s) {
    let regexp= /[n-z]/ig;
    if(s.match(regexp) == null){
        return `0/${s.length}`
    } else{
    let len = s.match(regexp).length;
        return `${len}/${s.length}`;
    }
}
// let r = printerError('FSHGDFGH');
// console.log(r);