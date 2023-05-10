# Лабораторна робота 2
## Завдання 1
Напишіть функцію add(), яка приймає будь-яку кількість параметрів у такому вигляді: 
console.log(add(2)(5)(7)(1)(6)(5)(11)()); // 37

## Завдання 2
Напишіть функцію, яка бере два рядки і повертає true, якщо вони є анаграмами одне одного. 
### Приклад використання
    console.log(isAnagram("friend", "finder")); // true
    console.log(isAnagram("hello", "bye")); // false
## Завдання 3
Напишіть функцію, яка глибоко клонує об'єкт, переданий їй параметром. 
### Приклад використання
    const person = {
    name: "Vasya",
    age: 25,
    isMarried: false,
    address: {
        city: "Lviv",
        country: "Ukraine",
    },
    hobbies: ["football", "singing", "dancing"],
    };

    console.log(
    JSON.stringify(person),
    "\nКлонований обʼєкт:\n ",
    JSON.stringify(deepClone(person))
    );
## Завдання 4
Напишіть функцію-обгортку, яка кешуватиме результат будь-якої іншої функції з довільною кількістю числових параметрів.

### Приклад використання
    const cachedAdd = cacheFunction(adder);
    console.log(cachedAdd(2, 2, 3)); // Пораховано
    console.log(cachedAdd(2, 2, 3)); // З кешу
    console.log(cachedAdd(4, 4, 4)); // Пораховано
    console.log(cachedAdd(4, 4, 4)); // З кешу

## Результат роботи
![result](/lab2/images/%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0.jpeg)