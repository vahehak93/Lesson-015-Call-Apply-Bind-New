Function.prototype.fakeBind = function(_contetxt){
  const args = Array.from(arguments).slice(1);
  const self = this;
  return function(){
      return self.fakeBind(_contetxt, ...args) 
  }
}
const add = (a, b) => a + b;
console.log(add.fakeBind(5, 10, 15)())