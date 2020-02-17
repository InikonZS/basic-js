module.exports = function repeater(str, options) {
    var res="";
    var addi="";
    if (options.addition===undefined) {options.addition=""}
    if (options.additionSeparator===undefined) {options.additionSeparator="|"}
    if (options.separator===undefined) {options.separator="+"}
    for (let i=0;i<options.additionRepeatTimes-1;i++){
        addi+=options.addition+options.additionSeparator;
    }
    addi+=options.addition;
    str=str+addi;
    for (let i=0;i<options.repeatTimes-1;i++){
        res+=str+options.separator;
    }
    res+=str;
    return res;
    //агусик покакунькал
/*repeatTimes
separator
addition
additionRepeatTimes
additionSeparator*/
    // remove line with error and write your code here
};
  