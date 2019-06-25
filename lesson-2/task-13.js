// # Задача 13

// С помощью цикла `for` и оператора `if` проверьте есть ли в массиве элемент со значением, равным 4. Если есть — выведите на экран `Есть!` и выйдите из цикла. Если нет - ничего делать не надо.

// Использовать встроенные методы массивов — нельзя.

// ```javascript
// const array = [1, 2, 5, 9, 4, 13, 4, 10];
// ```

const array = [1, 2, 5, 9, 4, 13, 4, 10];

function checkForFour(array) {
    const arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        const element = array[i];

        if (element === 4) {
            console.log('Есть!');
            break;
        }
    }
}

checkForFour(array);
