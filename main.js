//1 Вивести в консоль значення в діапазоні [0-10] за допомогою циклу for
for (let i = 0; i <= 10; i++) {
    console.log(`Діапазон 0-10 : ${i}`);
}


//2 Вивести в консоль значення в діапазоні [10-0] за допомогою циклу while
let i = 10;
while (i >= 0) {
    console.log(`Діапазон 10-0 : ${i}`);
    i--;
}


//3 Вивести в консоль значення в діапазоні [20-50] за допомогою циклу do while
let i1 = 20;
do {
    console.log(`Діапазон 20-50 : ${i1}`);
    i1++;
} while (i1 <= 50);


//4 Вивести в консоль всі парні значення в діапазоні [0-100] за допомогою циклу for
for (let i = 2; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(`Парні в діапазоні 0-100 : ${i}`);
    }
}


//5 Заповнити масив arr 10 рандомними значеннями в діапазоні [0-100]
let arr = [];
for (let i = 0; i <= 10; i++) {
    arr.push(Math.floor(Math.random() * 100));
}
console.log(arr);


//6 За допомогою циклу порахувати суму значень масиву arr
let sum = 0;
for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i];
}
console.log(`Сума елементів масиву - ${sum}`);


//7 До кожного зі значень додати символ '$’ та вивести в консоль
let arr1 = [];
for (let i = 0; i < arr.length; i++) {
    let dolar = arr[i] + ' $';
    arr1.push(dolar);
}
console.log(arr1);


//8 Порахувати суму всіх парних елементів
let sum1 = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        sum1 += arr[i];
    }
}
console.log(`Cума парних елементів масиву - ${sum1}`);


//9 Вивести елементи масиву в прямому і зворотньому порядку
for (let i = 0; i <= arr.length - 1; i++) {
    console.log(`Прямий - ${arr[i]}`);
}
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(`Зворотній - ${arr[i]}`);
}


//10 Кожен елемент масиву збільшити у 2 рази та вивести в консоль
let arr3 = [];
for (let i = 0; i < arr.length; i++) {
    let two = arr[i] * 2;
    arr3.push(two);
}
console.log(arr3);



///Додаткове завдання

//1 Створити просту послідовність Фібоначчі(10 елементів). Коли сума двох
// перших чисел дорівнює наступному другому числу, а друге стає першим і
// їхня сума (1 2 3 5 8 13 21 ....) (1+2=3; 2+3=5; 3+5=8; 8+13=21; 13+21=?)
let one = 0;
let two = 1;
for (let i = 0; i < 12; i++) {
    let fibanachi = one + two;
    one = two;
    two = fibanachi;
    console.log(`Фібоначчі - ${fibanachi}`);
}


//3 За допомогою циклу for виведіть такий масив:
let array = [];
let x = '';
for (let i = 0; i < 5; i++) {
    x = x + 'x';
    array.push(x);
}
console.log(array);


//4 За допомогою циклу for виведіть такий масив:
let array1 = [];
for (let i = 1; i <= 9; i++) {
    let number = '';
    for (let j = 1; j <= i; j++) {
        number = number + i;
    }
    array1.push(number);
}
console.log(array1);


//2 Вивести таку піраміду на сторінку, не в консоль за допомогою циклів for:
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}