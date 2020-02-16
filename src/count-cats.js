module.exports = function countCats(matrix) {
  var res=0;
  for (let i=0;i<matrix.length;i++){
    for (let j=0; j<matrix[i].length;j++){
      if (matrix[i][j]==="^^"){
        res++;
      }
    }
  }
  return res;
  // remove line with error and write your code here
};
