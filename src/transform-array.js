const seq=["--discard-next", "--discard-prev", "--double-next", "--double-prev"];
module.exports = function transform(arr) {
    if (!arr) {throw Error;}
    if (!Array.isArray(arr)) {throw Error;}
    var res=[];
    //console.log(arr);
    for (let i=0;i<arr.length;i++){
        let si=seq.indexOf(arr[i]);
        switch (si){
            case 0: i+=1; break; 
            case 1: res.pop(); break; 
            case 2: ((arr.length>(i+1))&&(seq.indexOf(arr[i+1])==-1)) ? res.push(arr[i+1]):false;  break; 
            case 3: (((i)>0)&&(seq.indexOf(arr[i-1])==-1)) ? res.push(arr[i-1]):false;  break;
            case -1: res.push(arr[i]); break;
        }
    }
    //console.log(res);
    return res;
    
    // remove line with error and write your code here
};
