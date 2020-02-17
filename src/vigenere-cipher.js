class VigenereCipheringMachine {
    constructor (type){
        this.type=type;
    }
    encrypt(message, key) {
        
        return this.crypt(message,key,true);
       // throw 'Not implemented';
        // remove line with error and write your code here
    }

    decrypt(encryptedMessage, key) {
        return this.crypt(encryptedMessage,key,false);
        //throw 'Not implemented';
        // remove line with error and write your code here
    }

    crypt(m, k, un){
        if (!m||!k){throw Error}
        //if (this.type===false){m.split("").reverse().join("");}
        var alf=[];
        for (let i=0;i<26;i++){
            alf.push(i+65);
        }
        alf=String.fromCharCode(...alf);
        
        //console.log(m);
        var kr="";
        var mr="";
        while (kr.length<m.length){kr+=k}
        kr=kr.toUpperCase();
        var j=-1;
        for (let i=0;i<m.length;i++){
            let ind;
            if (alf.indexOf(m[i].toUpperCase())!=-1){
                j++;
            }
            if (un==true){
                ind=alf.indexOf(kr[j])+alf.indexOf(m[i].toUpperCase());
                ind=ind%26;
            }
            else{
                ind=-alf.indexOf(kr[j])+alf.indexOf(m[i].toUpperCase());
                if (ind<0){ind=26+ind;}
                //ind=ind%26;
            }
            //if (ind<0){ind=26+ind;}
            if (alf.indexOf(m[i].toUpperCase())!=-1){
                //if (m[i].toUpperCase()==m[i]) {mr+=alf[ind];} else {mr+=(""+alf[ind]).toLowerCase();}
                mr+=alf[ind];
            } else {
                mr+=m[i];
            }
        }
        //console.log(mr);
        if (this.type===false){mr=mr.split("").reverse().join("");}
        return mr;
    }
    
}

module.exports = VigenereCipheringMachine;
