// 7.3 Прототип и конструктор объекта
// Задание 1.

const object = {
    name: "Anna",
    age: 18,
    city: "Piter",
    phone: 911
  }
  
  function showOwnKeys(obj){
  
  for (let key in obj) {
  
      if (obj.hasOwnProperty(key)) {
          console.log(`Ключ - ${key}, Значение - ${obj[key]}`); 
      }   
   }
  }
  
  showOwnKeys(object)
  