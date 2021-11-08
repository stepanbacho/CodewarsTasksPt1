function towerBuilder(nFloors) {
    let arr= [];
    numSpace = nFloors - 1;
    numStar = 1;
    for (let index = 0; index < nFloors; index++) {
        let str = '';
        
        for (let i = 0; i < numSpace; i++) {
            str += ' ';
        }
        for (let j = 0; j < numStar; j++) {
            str += '*';
        }
        for (let z = 0; z < numSpace; z++) {
            str += ' '  
        }
        numStar+=2;
        numSpace--;
        arr.push(str);
    }
    return arr;
}
// let r = towerBuilder(5);
// console.log(r);