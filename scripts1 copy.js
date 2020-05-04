// Script 1
// Задание: Перепишите класс в классическом виде.
/*
const AnimalPrototype = {
  letVoice() {
    console.log(
      `${this.name} говорит ${this.voice}! ${this.type} очень милый.`
    );
  }
};
function Animal(type, voice, name) {
  return {
    type,
    name,
    voice,
    __proto__: AnimalPrototype
  };
}
const animal = Animal("кот", "мяу", "Мурзик");
animal.letVoice();*/

//Класс в класическом виде
/*function Animal(type, voice, name) {
    this.type = type,
    this.voice = voice,
    this.name = name
}

Animal.prototype.letVoice = function(){
  console.log(
      `${this.name} говорит ${this.voice}! ${this.type} очень милый.`
    );
}

const animal =  new Animal("кот", "мяу", "Мурзик");
animal.letVoice();*/

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
  const animal = new Animal("кот", "мяу", "Мурзик")
  animal.letVoice()