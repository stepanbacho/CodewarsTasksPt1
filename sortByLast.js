function last(x){
    let arr = [];
    arr = x.split(' ').sort((a,b)=>{ 
        if(a[a.length-1]<b[b.length-1]){
            return -1;
        } else if (a[a.length-1]>b[b.length-1]) {
            return 1;
        } else{
            return 0;
        }
    })
    return arr;
}
// const r = last('take me to semynak');
// console.log(r);