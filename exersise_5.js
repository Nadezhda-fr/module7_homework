// 7.5 ООП в ES6
// Задание 5.

class ElectrAppliances {
    constructor(name) {
      this.country = 'Китай';
      this.name = name;
    }
    
    getTurn(turn) {
      if (turn === 'on') {
    console.log(`Прибор ${this.name} включён!`)
      } else {
      console.log(`Прибор ${this.name} выключен!`)
      }
    }//getTurn
    
    getPower(power) {
      console.log(`Мощность прибора ${this.name} - ${power} W`)
    }
  } //class
  
  class BulbElectrAppliances extends ElectrAppliances {
    constructor(bulb, name) {
      super(name);
      this.bulb = bulb;
    }
  }
    
  class LargeElectrAppliances extends ElectrAppliances {
    constructor(color, name) {
      super(name);
      this.color = color;
    }
    
    getLarge(size){
      console.log(`Размер прибора ${this.name} - ${size}`)
    }
  }
  
  class HotElectrAppliances extends ElectrAppliances {
    constructor(form, name) {
      super(name);
      this.form = form;
    }
  }
  
  const deskLamp = new BulbElectrAppliances('яркая', 'Настольная лампа');
  const computer = new LargeElectrAppliances('серый', 'Очень крутой компьютер');
  const iron = new HotElectrAppliances('треугольный', 'Горячий утюг');
  
  console.log(`Имя прибора - ${deskLamp.name}, Страна - ${deskLamp.country}. Лампочка - ${deskLamp.bulb}`)
  deskLamp.getTurn('on')
  deskLamp.getPower(60)
  
  console.log(`Имя прибора - ${computer.name}, Страна - ${computer.country}. Цвет - ${computer.color}`)
    
    computer.getTurn('on')
    computer.getPower(500)
    computer.getLarge ('большой')
    
    console.log(`Имя прибора - ${iron.name}, Страна - ${iron.country}. Форма - ${iron.form}`)
    
    iron.getTurn('off')
    iron.getPower(0)
    
    