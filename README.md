# Lesson 015| Call, Apply, Bind, New

> Bellow is the Github link for all done homeworks.

[Homeworks 15 - Lesson 015 | This, new](https://github.com/vahehak93/Lesson-015-Call-Apply-Bind-New.git)

---

> Tasks 

***Task 1***\
 fakeBind

 ```javascript
Function.prototype.fakeBind = function(_contetxt){
  const args = Array.from(arguments).slice(1);
  const self = this;
  return function(){
      return self.fakeBind(_contetxt, ...args) 
  }
}
const add = (a, b) => a + b;
console.log(add.fakeBind(5, 10, 15)())
```
