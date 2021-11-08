function printerError(s) {
    let regexp= /[n-z]/ig;
    let len = s.match(regexp).length;
    if(s.match(regexp).length === 0){
        return `0/${s.length}`
    } else{
        return `${len}/${s.length}`;
    }
}
let r = printerError('FSHGDFGH');
console.log(r);