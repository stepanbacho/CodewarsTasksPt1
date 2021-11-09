function formatDuration (seconds) {
    if (seconds === 0) {
        return 'now';
    }
    let s = 0;let m = 0;let h = 0;let d = 0;let y = 0;
    while (seconds > 0){
        if (seconds>=1 && seconds<60){
            s +=1;
            seconds -=1;
        } else if(seconds>=60 && seconds<3600){
            m+=1;
            seconds-=60;
        } else if(seconds>=3600 && seconds<86400){
            h+=1;
            seconds-=3600;
        } else if(seconds>=86400 && seconds<31536000){
            d +=1;
            seconds -=86400;
        }  else if(seconds>=31536000) {
            y+=1;
            seconds-=31536000;
        }
    }
    
    function getYears(){
        return (y ? y +" year" + (y===1 ? '': 's'):'');
    }
    function getDays(){
        return (d? d + ' day' + (d===1? '': 's'):'');
    }
    function getHours(){
        return (h? h + ' hour' + (h===1? '': 's'):'');
    }
    function getMinures() {
        return (m? m + ' minute' + (m===1? '': 's'):'');
    }
    function getSeconds(){
        return (s ? (((seconds > 60) ? ' and ' + s + " second" : +s + " second") + (s === 1 ? '' : 's')) : '');
    }
    let arr = [getYears(),getDays(), getHours(), getMinures(), getSeconds()];
    
    let stringArr = arr.filter(item => item !== '') 
    return stringArr.length === 1 ? stringArr.toString() : stringArr.slice(0, stringArr.length-1).join(', ') + ' and '+ stringArr.slice(-1);

}
// console.log(formatDuration(60));
