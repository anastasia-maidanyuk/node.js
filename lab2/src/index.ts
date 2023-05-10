// завдання 1
type AddFunction = (n?: number) => number | AddFunction;

const add: AddFunction = (n?: number) => {
  const addNext: AddFunction = (next?: number) => {
    if (next === undefined) {
      return n || 0;
    }
    return add((n || 0) + next);
  };
  return addNext;
};

//@ts-ignore
console.log("Завдання 1: \n" + add(2)(5)(7)(1)(6)(5)(11)()); // 37

// завдання 2
function isAnagram(str1: string, str2: string): boolean {
  // Перетворюємо обидва рядки на масив символів і сортуємо його
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  // Порівнюємо відсортовані рядки
  return sortedStr1 === sortedStr2;
}

console.log("Завдання 2:\n", isAnagram("friend", "finder")); // true
console.log(isAnagram("hello", "bye")); // false

// завдання 3
function deepClone<T>(obj: T): T {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    const newArray = [];
    for (const element of obj) {
      newArray.push(deepClone(element));
    }
    return newArray as unknown as T;
  }

  const newObj = {} as T;
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }

  return newObj;
}

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
  "Завдання 3:\n",
  JSON.stringify(person),
  "\nКлонований обʼєкт:\n ",
  JSON.stringify(deepClone(person))
);

// завдання 4
function cacheFunction(
  fn: (...args: number[]) => number
): (...args: number[]) => number {
  const cache = new Map<string, number>();

  return function (...args: number[]) {
    const key = args.join(",");

    if (cache.has(key)) {
      console.log(`Result for [${args}] from cache`);
      return cache.get(key) as number;
    }

    const result = fn(...args);
    cache.set(key, result);
    console.log(`Result for [${args}] calculated`);

    return result;
  };
}

function adder(a: number, b: number, c: number): number {
  return a + b + c;
}

const cachedAdd = cacheFunction(adder);
console.log(cachedAdd(2, 2, 3));
console.log(cachedAdd(2, 2, 3));
console.log(cachedAdd(4, 4, 4));
console.log(cachedAdd(4, 4, 4));
