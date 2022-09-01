// Задание 2.

const string = 'phone';

const object = {
    name: "Anna",
    age: 18,
    city: "Piter",
    phone: 911
  }

function showProperty(str, obj) {
  console.log(obj.hasOwnProperty(str))
}

showProperty(string, object)