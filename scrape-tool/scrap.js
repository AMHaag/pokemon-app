let example = ['a','b','c'];

example.prototype.myUcase = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
}; 

console.log(example.myUcase)