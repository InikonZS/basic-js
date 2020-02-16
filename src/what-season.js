module.exports = function getSeason(date) {
  var p = new Date(950, 2, 21, 12, 21, 17, 2);
  if (!date) {return 'Unable to determine the time of year!'};
 // console.log(typeof date);
  if (date.getMonth!=p.getMonth) {throw Error};
 // console.log(date.getMonth());
//var res = ["winter","spring","summer","autumn","winter"][Math.ceil((date.getMonth()+1)/3+0.01)-1];
var res = ["winter","spring","summer","autumn"][Math.floor((date.getMonth()+1)%12/3)];
 // console.log(res);
  return res;
  // remove line with error and write your code here
};
