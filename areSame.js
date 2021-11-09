function comp(array1, array2) {
    if(array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b); 
    array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
}
// let r = comp([121, 144, 19, 161, 19, 144, 19, 11],[11*11, 121*121, 144*144, 19*19, 161*161, 18*19, 144*144, 19*19])
// console.log(r);