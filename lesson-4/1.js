/**
 * Задача 1.
 *
 * Создайте объект `person` у которого будет одно свойство `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */

const person = {};

// Решение
Object.defineProperty(person, 'salary', {
    get: function() {
        let currentDate = new Date();
        let currentDay = currentDate.getDate();
        let lastDateInMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0
        );
        let lastDay = lastDateInMonth.getDate();

        return lastDay - currentDay > 20 ? 'good salary' : 'bad salary';
    }
});

person.salary; // good salary
console.log(person.salary);

exports.person = person;
