const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //console.log(sampleActivity);
  if (!sampleActivity) {return false;}
  if ((typeof sampleActivity) !== 'string') {return false;}
  if (isNaN(parseFloat(sampleActivity))) {return false;}
  sampleActivity=parseFloat(sampleActivity);
  if (+sampleActivity>MODERN_ACTIVITY) {return false;}
  if (+sampleActivity<=0) {return false;}
  var res=Math.ceil((Math.log2(MODERN_ACTIVITY)-Math.log2(sampleActivity))*5730*1.000214);
  //console.log(res)
  return res; 
  // remove line with error and write your code here
};
