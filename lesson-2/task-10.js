// # Задача 10

// Отсортируйте массив по возрастанию.

// Использовать встроенные методы массивов — нельзя.

// ```javascript
// const arr = [6, 5, 4, 3, 2, 1];
// // [1,2,3,4,5,6]
// ```

const arr = [6, 5, 4, 3, 2, 1];
const arr2 = [10, 23, 6, 5, 4, 30, 2, 11];

function sortAsc(array) {
    const lastIndex = array.length - 1;

    for (let i = 0; i < lastIndex; i++) {
        let lastUnsortedIndex = lastIndex - i;
        for (let j = 0; j < lastUnsortedIndex; j++) {
            if (array[j] > array[j + 1]) {
                let maxInPair = array[j];
                array[j] = array[j + 1];
                array[j + 1] = maxInPair;
            }
        }
    }

    return array;
}

let sortedArray = sortAsc(arr);

console.log(sortedArray);
