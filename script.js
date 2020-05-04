/*class Person {
    constructor(name,family) {
      this.name = name,
      this.family = family
     }

     static create(...args) {
       return new Person(...args)
     }
}
const person = Person.create('Sergey', 'kuzminykh')
console.log(person)*/

class Dot {
    constructor(x,y) {
        this.x = x
        this.y = y
        //return this
    }
}
class Point extends Dot {  //class point унаследован от dot
    constructor (x, y, color) {
        super(x,y) //обращ к конструкт род класса - обяз  надо вызыв
    //ссылается на родительский класс
    }
}
//идентично
Point.prototype._proto_ = Dot.prototype
//если какое то свойство не найдено в класск оно будет искаться в прототипе
class SmartArray extends Array {
    get first () {
        return this[0]
    }
    set first(value) {
        this[0] = value
    }
    toggle(value){
        if (this.includes(value)) {
            const index = this.indexOf(value)
            this.splice(index,1)
        }
        else {
            this.push(value)
        }
    }
}
const x = new SmartArray(0,1,2,3,4,5)
console.log(x)
x.toggle('яблоко')
console.log(x)
x.toggle('яблоко')
//Черная магия JS делать нельзя, так js могут дописать
Array.prototype.toggle = function toggle(value) {...}

interface PersonInterface {
    name: String,
    family: String
}
class Person extends PersonInterface {}

