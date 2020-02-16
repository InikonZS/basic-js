module.exports = class DepthCalculator {
    calculateDepth(arr,va) {
        if (va==undefined) {va=1;}
        var ve=va;
        for (let i=0;i<arr.length;i++){
            if (Array.isArray(arr[i])){
                let vs=this.calculateDepth(arr[i],va+1);
                ve=vs>ve?vs:ve;
            }
        }
        return ve;
        // remove line with error and write your code here
    }

};