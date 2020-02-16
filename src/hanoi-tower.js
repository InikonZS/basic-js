module.exports = function calculateHanoi( disksNumber, turnsSpeed) {
    var num=(Math.pow(2,disksNumber)-1);
    return {turns:num, seconds:num/(turnsSpeed/3600)}
    // deep equal in float requires to find strict seq of math ops
    // for example num/(turnsSpeed)*3600 or (3600*num)/(turnsSpeed) are math equal
    // but dont work, its diffs in smallest digit
    // remove line with error and write your code here
}