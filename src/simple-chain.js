const chainMaker = {
  getLength() {
    if (this.data==undefined) {this.data=[];}
    return this.data.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    if (arguments.length==0){value="";}
    //console.log(this.data);
    if (this.data==undefined) {this.data=[];}
    this.data.push(value+'');
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    //console.log("rm"+position);
    if (+position!=position){this.data=undefined; throw Error}
   // if (this.data[position]==undefined){this.data=undefined; throw Error}
    if ((position<1)||(position>this.data.length)) {this.data=undefined; throw Error;}
    if (this.data==undefined) {this.data=[];}
    //console.log(this.data);
    var dt=[];
    //var ps=this.data.indexOf(position);
    //if (ps==-1) {throw Error}
    for (let i=0;i<this.data.length;i++){
      if ((position-1)!=i){
        dt.push(this.data[i]);
      }
    }
    this.data=dt.concat([]);
    
    return this;
    // remove line with error and write your code here
  },
  reverseChain() {
    if (this.data==undefined) {this.data=[];}
    this.data.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    var res="( "+this.data.join(" )~~( ")+" )";
    this.data=undefined;
    //console.log(res);
    return res;
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
