
//класс в совр js6
class Animal {
    constructor (type, voice, name){
      this.type = type,
      this.voice = voice,
      this.name = name
    }
    letVoice = function(){
    console.log(
        `${this.name} говорит ${this.voice}! ${this.type} очень милый.`
      );
  }
  }
  //const animal = new Animal("кот", "мяу", "Мурзик")
  //animal.letVoice()
  
  // Script 3
  // Унаследуйте от класса, который вы написали в задание 2,
  // новые классы Cat и Dog. Добейтесь того, что в конструктор
  // этих классов было бы достаточно передать только кличку животного.
  // Добавьте несколько методов в классы (действия, характерные животному)
  class Cat extends Animal {
    constructor (name){
      let type = "KOT";
      let voice1 = "HRU";
      super(type, voice1, name )
    }
    catWash = function(){
      console.log(
        `${this.name} умывается.`
      );
    }
  }
  const cat = new Cat("Luna")
  cat.letVoice()
  cat.catWash()