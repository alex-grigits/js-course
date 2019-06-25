// # Задача 11

// С помощью цикла `for` и оператора `if` выведите на экран столбец элементов, которые больше 3-х, но меньше 10.

// Использовать встроенные методы массивов — нельзя.

// ```javascript
// const array = [2, 5, 9, 15, 0, 4];
// ```

const array = [2, 5, 9, 15, 0, 4];

function listFromInterval(array, from, to) {
    const arrayLength = array.length;
    let result = '';

    for (let i = 0; i < arrayLength; i++) {
        const element = array[i];

        if (element > from && element < to) {
            result += i !== arrayLength - 1 ? element + '\n' : element;
        }
    }

    return result;
}

let list = listFromInterval(array, 3, 10);
console.log(list);
