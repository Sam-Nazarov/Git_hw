// TODO: Объект object
//тип данных для хранения коллекций значений или более сложных сущностей

const object = {}

//создаем объект
const student = {
    name: 'Olga',
    age: 18,
    1: 1,
    'full name': 'Jsonovna',
    hobbies: ['guitar', 'sing' ],
    child: {
        name: 'John',
        age: 18
    }
}

console.log(student['full name'])
console.log(student.name)

//добавляем элементы в объект
student.city = 'New Yourk'
student['newCity'] = 'New Yourk2'

console.log(student)

//удаляем элементы из объекта
delete student.city
delete student['newCity']


//TODO: методы объектов
//1 получить массив объектов ключей
const arrayOfKey = Object.keys(student) //все ключи
const arrayOfValues = Object.values(student) // все значения
const arrayOfValuesAndKeys = Object.entries(student) // всё из массива

//TODO: funtion




