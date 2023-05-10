// завдання 1
function add(num) {
  let sum = num;
  function addNext(nextNum) {
    if (nextNum === undefined) {
      return sum;
    }
    sum += nextNum;
    return addNext;
  }
  return addNext;
}

console.log("Завдання 1:" + add(2)(5)(7)(1)(6)(5)(12)()); // 38

// завдання 2
function areAnagrams(str1, str2) {
  // переводимо рядки в нижній регістр та видаляємо пробіли
  str1 = str1.toLowerCase().replace(/\s/g, "");
  str2 = str2.toLowerCase().replace(/\s/g, "");

  // перевіряємо чи мають рядки однакову довжину
  if (str1.length !== str2.length) {
    return false;
  }

  // перетворюємо рядки на масиви символів та сортуємо їх
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  // порівнюємо відсортовані масиви
  return sortedStr1 === sortedStr2;
}

console.log("Завдання 2:\n", areAnagrams("кіт", "тік")); // true
console.log(areAnagrams("кіт", "тик")); // false

// завдання 3
function deepClone(obj) {
  // перевіряємо, чи переданий параметр є об'єктом або масивом
  if (typeof obj === "object" && obj !== null) {
    // створюємо новий об'єкт або масив
    const clone = Array.isArray(obj) ? [] : {};
    // рекурсивно клонуємо кожен ключ об'єкта або елемент масиву
    for (let key in obj) {
      clone[key] = deepClone(obj[key]);
    }
    return clone;
  } else {
    // якщо параметр не є об'єктом або масивом, повертаємо його ж самого
    return obj;
  }
}

const obj = {
  name: "Vasya",
  age: 25,
  height: 185,
  weight: 80,
  isMarried: false,
  occupation: "Programmer",
  friends: ["Petya", "Kolya", "Olya"],
  parents: {
    mom: "Olga",
    dad: "Vitaliy",
  },
};

console.log("Завдання 3:\n" + JSON.stringify(obj) + "\nКлонований обʼєкт: \n" + JSON.stringify(deepClone(obj)) + "\nЗавдання 4:");

// завдання 4
function cache(func) {
    const results = {};
    return function() {
      const args = Array.prototype.slice.call(arguments).toString();
      if (results[args]) {
        console.log(results[args] + " from cache");
        return results[args];
      } else {
        const result = func.apply(this, arguments);
        results[args] = result;
        console.log(result + " calculated");
        return result;
      }
    }
  }
  
  const calc = (a, b, c) => a+b+c;
  const cachedCalc = cache(calc);
  cachedCalc(2,2,3); // 7 calculated
  cachedCalc(5,8,1); // 14 calculated
  cachedCalc(2,2,3); // 7 from cache
  