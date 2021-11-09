function wave(str) {
    function capitalizeLetter(str, x) {
        let newStr = '';
        let numOfSpace = 0;
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) === ' ') {
                numOfSpace++;
            }
            if (i === (x + numOfSpace)) {
                newStr += str[i].toUpperCase();
            } else {
                newStr += str[i];
            }

        }
        return newStr;
    }
    if (str) {
        let len = str.match(/\w+/ig).join('').length;
        console.log(len);
        let arr = Array.from({
            length: len
        }, (v, k) => {
            return v = capitalizeLetter(str, k);
        })
        return arr;
    }
    return [];
}
// let r = wave("two words");
// console.log(r);


