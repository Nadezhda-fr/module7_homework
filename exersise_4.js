// 7.4 ООП в JS
// Задание 4.
// Не очень поняла, что сделать, поэтому сделала побольше, чтоб попасть -_-

function ElectrAppliances(name){
    this.country = 'Китай',
    this.name = name
  }
  
  ElectrAppliances.prototype.getTurn = function(turn) {
    if (turn === 'on') {
    console.log(`Прибор ${this.name} включён!`)
    } else {
      console.log(`Прибор ${this.name} выключен!`)
    }
  }  
  
  
  ElectrAppliances.prototype.getPower = function(power){
    console.log(`Мощность прибора ${this.name} - ${power} W`)
  }
  
  function BulbElectrAppliances(bulb, name){
    this.bulb = bulb,
    this.name = name
  }
  
  function LargeElectrAppliances(color, name){
    this.color = color,
    this.name = name
  }
  
  function HotElectrAppliances(form, name){
    this.form = form,
    this.name = name
  }
  
  LargeElectrAppliances.prototype = new ElectrAppliances();
  BulbElectrAppliances.prototype = new ElectrAppliances();
  HotElectrAppliances.prototype = new ElectrAppliances();
  
  
  LargeElectrAppliances.prototype.getLarge = function(size){
    console.log(`Размер прибора ${this.name} - ${size}`)
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
  