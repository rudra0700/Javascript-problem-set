{
  //1.  From two arrays combine objects based on shared key

  const users = [
    { id: 1, name: "sumit" },
    { id: 2, name: "nayem" },
    { id: 3, name: "mks" },
  ];

  const userDetails = [
    { userId: 1, email: "sumit@gmail.com" },
    { userId: 2, email: "nayem@gmail.com" },
    { userId: 3, email: "mks@gmail.com" },
  ];

  const combineObjects = users.reduce((acc, user) => {
    // find method return undefined if not found any match. it returns the first value passes the test provided by callback fucntion
    const findUserDetails = userDetails.find((d) => d.userId === user.id);
    if (findUserDetails) acc.push({ ...user, email: findUserDetails.email });
    // findUserDetails ? acc.push({ ...user, email: findUserDetails.email }) : acc.push({ ...user });

    return acc;
  }, []);

  // console.log(combineObjects)
}

{
  // 2.  partition even and odd numbers from an array
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      // console.log(`even no : ${numbers[i]}`);
    } else {
      // console.log(`odd number : ${numbers[i]}`);
    }
  }
}

{
  //3.  partition even and odd numbers from array
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let oddNumbers = [];
  let evenNumbers = [];
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      evenNumbers.push(number);
      return evenNumbers;
    } else {
      oddNumbers.push(number);
      return oddNumbers;
    }
  });

  // console.log(oddNumbers);
  // console.log(evenNumbers);
}

{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let oddNumbers = [];
  let evenNumbers = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
  });

  // console.log(oddNumbers);
  // console.log(evenNumbers);
}

{
  //4.  partition even and odd numbers from array using reduce method
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const partitioned = numbers.reduce(
    (acc, current) => {
      if (current % 2 === 0) {
        acc.even.push(current);
      } else {
        acc.odd.push(current);
      }
      return acc;
    },
    { even: [], odd: [] }
  );

  // console.log(partitioned)
}

{
  // 4.  partition even and odd numbers from array
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const partitioned = numbers.reduce(
    (acc, current) => {
      acc[current % 2 === 0 ? "even" : "odd"].push(current);
      return acc;
    },
    { even: [], odd: [] }
  );

  // console.log(partitioned)
}

{
  // 5.  partition even and odd numbers from array

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const partitioned = numbers.reduce(
    (acc, current) => {
      if (current % 2 === 0) {
        acc["even"].push(current);
      } else {
        acc["odd"].push(current);
      }
      return acc;
    },
    { even: [], odd: [] }
  );

  // console.log(partitioned)
}

{
  //  6. Make an array from array of arrays
  const arrays = [
    ["a", "b", "c"],
    ["d", "e"],
    ["f", "g"],
  ];
  // const test2 = arrays.flat()
  // console.log(test2)

  const test = arrays.reduce((acc, array) => {
    // console.log(array);
    return acc.concat(array);
  }, []);

  // console.log(test)
}

{
  //. 7 count frequency of each element in an array
  const names = ["sumit", "mks", "nayem", "sumit", "nayem", "sumit"];

  const test = names.reduce((acc, name) => {
    if (acc[name]) {
      acc[name] += 1;
    } else {
      acc[name] = 1;
    }

    return acc;
  }, {});

  // console.log(test)
}

{
  //. 8 count frequency of each element in an array
  const names = ["sumit", "mks", "nayem", "sumit", "nayem", "sumit"];

  const test = names.reduce((acc, name) => {
    const existingName = acc.find((item) => item.name === name);
    if (existingName) {
      existingName.count += 1;
    } else {
      acc.push({ name: name, count: 1 });
    }
    return acc;
  }, []);

  // console.log(test);
}

{
  //. 9 count frequency of each element in an array
  const names = ["sumit", "mks", "nayem", "sumit", "nayem", "sumit"];
  const test = names.reduce((acc, name) => {
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});

  // console.log(test)
}

{
  const acc = {
    "even-number": 56,
    odd: 78,
  };

  const { odd: evenNumber } = acc;
  // console.log(evenNumber);
  //    The syntax { "even-number": evenNumber } is using a feature called "destructuring with renaming" where the property "even-number" is being renamed to evenNumber during the destructuring process.
}

{
  const arr = [1, 2, 3];
  const arr2 = [...arr]; //copy of arr
  // console.log(arr2)
}

{
  // 10 . Find the lowest number from an array with built in function
  const numbers = [4, 2, 8, 1, 5];
  const lowestNumber = Math.min(numbers);
  //   console.log(lowestNumber); // Output will be 1
}

{
  // 11 . Find the lowest number from an array

  const numbers = [4, 2, 8, 1, 5];
  let lowestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < lowestNumber) {
      lowestNumber = numbers[i];
    }
  }
  //   console.log(lowestNumber);
}

{
  // 12 . Find the higest number from an array

  const numbers = [4, 2, 8, 1, 5];
  let highestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highestNumber) {
      highestNumber = numbers[i];
    }
  }
  //   console.log(highestNumber);
}

{
  //13. What will the code below output to the console and why?
  (function () {
    var a = (b = 3);
  })();

  // console.log("a defined? " + (typeof a !== "undefined"));
  // console.log("b defined? " + (typeof b !== "undefined"));
}
var b = 3;
var a = b;
a = 10;
// console.log(a);
// console.log(b);

{
  // 14.find even number from array, then make this array Element double and check the length of the updated array
  // let arr = [20, 22, 41, 53, 62, 71, 84, 19, 10];
  // let evenNumber = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % 2 === 0) {
  //     evenNumber.push(arr[i]);
  //   }
  // }
  //  for(let i = 0; i < evenNumber.length; i++){
  //     evenNumber[i] = evenNumber[i] * 2
  //  }
  //  let count = 0

  //  for(let i = 0; i < evenNumber.length; i++){
  //     count++
  //  }
  //  console.log(count);

  let arr = [20, 22, 41, 53, 62, 71, 84, 19, 10];
  let evenNumber = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
      evenNumber.push(arr[i]) * 2;
    }
  }

  // console.log(evenNumber);
  // console.log(count);
}

// problem set with variables

{
  // Q. 15. Predict the output of the following JavaScript code? its about post increment
  var g = 0;
  g = 1 && g++;
  // console.log(g);
}

{
  // Q. 16. What would be the output of following code?
  // console.log(employeeId);
  // var employeeId = "19000"; // it will return undefined becaus of hoisting
}

{
  // Q.17. Predict the output of the following JavaScript code?
  var a = 1.2;
  // console.log(typeof a); //ans : number
}

{
  // Q.18. Predict the output of the following JS code?
  const a = {
    msg: "hi",
  };

  const b = a;
  b.msg = "hello";
  // console.log(a);
  // console.log(b);
}

{
  // Q.19.  What is the output?
  //  let text = "hello"
  //  let text = "hello world"
  //  console.log(text);  // ans : SyntaxError: Identifier 'text' has already been declared
}

{
  // Q.20. What is the output?
  // const text = "Hi";
  // text = "Hello";
  // console.log(text); // assignment to constant variable
}

{
  // Q.21. What is the output?
  // console.log('The value of num is: ' + num); // ReferenceError: num is not defined
}

{
  // Q.21. What is the output?
  // console.log(num);
  const num = 10; // cannot access before initialization
}

{
  // Q.22. What is the output?

  function first() {
    return false;
  }

  function second() {
    return "second function";
  }

  const message = first() && second();
  // console.log(message);
}

{
  // Q.23. What is the output?

  var num = 8;
  var num = 10;

  // console.log(num); // with the "var" keyword we can declare multiple variable with the same name. Then its hold the latest value but cannot do this with const or let keyword because they are blocked scope
}

{
  // Q. 24 What is the output?
  (() => {
    let x = (y = 10);
  })();

  // console.log(typeof x); // undefined
  // console.log(typeof y); // number

  // let x = y = 10 is shorhand for
  y = 10;
  let x = y;
  // Since let is block scope defined inside IIFE , so we cant access x varible outside
}

{
  // Q. 25 What is the output?
  const name = "Swarna";
  age = 21;

  // console.log(delete name);
  // console.log(delete age);
  // The delete operator returns a boolean value: true on a successful deletion, else it'll return false. However, variables declared with the var, const or let keyword cannot be deleted using the delete operator.
}
{
  // Q. 26 What is the output?

  const name = "Akhil Sunder";
  // console.log(name.padStart(13));
  // console.log(name.padStart(2));

  //   With the padStart method, we can add padding to the beginning of a string. The value passed to this method is the total length of the string together with the padding. The string "Akhil Sunder" has a length of 12. name.padStart(13) inserts 1 space at the start of the string, because 12 + 1 is 13.

  // If the argument passed to the padStart method is smaller than the length of the array, no padding will be added.
}

{
  // Q. 27 What is the output?
  // console.log(String.raw`Hello\nworld`);
}

{
  // Q. 28 What is the output?

  const { name: myName } = { name: "Anusha Kapadia" };

  // console.log(name); // Reference error: name is not defined
  //This is called renaming during destructuring.  So, myName is a new variable that will hold the value of the name property.
}

{
  // Q. 30 What is the output?
  const name = "Anima Nagarajan";

  // console.log(name()); //TypeError : name is not a function
}

{
  // Q. 31 What is the output?
  const num = 10;
  // console.log(Num); //ReferenceError: Num is not defined
}

// problem set with operators

{
  // Q. 32 What is the output?
  // console.log(isNaN(true));
  //   true: This is a Boolean value.
  // In JavaScript, true represents a boolean value which is logically true.
  // Now, when you pass true to the isNaN function:
  // JavaScript implicitly converts true to a number before performing the check.
  // Since true is treated as 1 when converted to a number, the function isNaN checks if 1 is Not-a-Number.
  // isNaN(1) returns false because 1 is a valid number, not NaN.
}

{
  // Q. 33 What is the output?
  // console.log(0.1 + 0.2 === 0.3);
}

{
  // Q.34 Predict the output of the following JavaScript code?
  // console.log(false == "0");
  // console.log(false === "0");
  // The == operator performs type coercion before comparing the values. Type coercion means that JavaScript will attempt to convert the operands to the same type before making the comparison.
}

{
  // Q.35 Predict the output of the following JavaScript code?
  // console.log(0.1 + 0.2);
  // console.log(0.1 + 0.2 == 0.3);
}

{
  // Q.36 Predict the output of the following JavaScript code?

  var x;
  if (x) {
    let x = 4;
    console.log(x);
  }
  // console.log(x);
}

{
  // Q.37 Predict the output of the following JavaScript code?
  const num1 = 2;
  const num2 = 5;
  const res = num1 ** num2;
  // console.log(res);
}

{
  // Q.38. Predict the output of the following JavaScript code?
  let number = 0;
  // console.log(number++);
  // console.log(++number);
  // console.log(number);

  // The important thing to note here is the difference between the pre-increment (++number) and post-increment (number++) operators. In pre-increment, the value is incremented before it's used in the expression, whereas in post-increment, the value is used first and then incremented.
}

{
  // Q.39. Predict the output of the following JavaScript code?
  let num = 10;

  const increaseNumber = () => num++;
  const increasePassedNumber = (number) => number++;

  const num1 = increaseNumber();
  const num2 = increasePassedNumber(num1);

  // console.log(num1);
  // console.log(num2);
}

{
  // Q.40. Predict the output of the following JavaScript code?

  +true;
  !"Mala Pall";

  // The unary plus tries to convert an operand to a number. true is 1, and false is 0.
  // The string 'Mala Pall' is a truthy value. What we're actually asking, is "is this truthy value falsy?". This returns false.

  // console.log(+true); //ans : 1
}

{
  // Q.41. Predict the output of the following JavaScript code?
  let a = 3;
  let b = new Number(3);
  let c = 3;

  // console.log(a == b); //true
  // console.log(a === b); //false
  // console.log(b === c); //false
}

{
  // Q.42. Which of these values are falsy?

  0;
  new Number(0);
  ("");
  (" ");
  new Boolean(false);
  undefined;
  // There are only six falsy values

  // undefined
  // null
  // NaN
  // 0
  // '' (empty string)
  // false
}

{
  // Q. 43. What is the output?
  // console.log(typeof typeof 1); //string
}

{
  // Q. 44. What is the output?

  !!null;
  !!"";
  !!1;

  //   null is falsy. !null returns true. !true returns false.
  // "" is falsy. !"" returns true. !true returns false.
  // 1 is truthy. !1 returns false. !false returns true.
}

{
  // Q.45 What is the value of output?
  const one = false || {} || null;
  const two = null || false || "";
  const three = [] || 0 || true;

  // console.log(one, two, three);
}

{
  // Q.46 What is the value of output?
  const output = `${[] && "Im"}possible!
    You should${"" && `n't`} see a therapist after so much JavaScript lol`;

  // console.log(output);
  //   [] is a truthy value. With the && operator, the right-hand value will be returned if the left-hand value is a truthy value. In this case, the left-hand value [] is a truthy value, so "Im' gets returned.

  // "" is a falsy value. If the left-hand value is falsy, nothing gets returned. n\'t doesn't get returned
}

{
  // Q.47 What is the output?
  // console.log(`${((x) => x)("I love")} to program`);
}

{
  // Q.48 What is the output?
  //   if(2 == true)
  // if(2 == false) // SyntaxError: Unexpected end of input
}

{
  // Q.49. What is the output?

  const length = 4;
  const numbers = [];

  for (var i = 0; i < length; i++);

  {
    numbers.push(i + 1);
  }

  // console.log(numbers);
}

// #Numbers

{
  // Q.50. What is the output?

  const num = parseInt("7*6", 10);
  // console.log(num);
}

{
  // Q.51. What is the output?
  // console.log(Number(2) === Number(2));
  // console.log(Boolean(false) === Boolean(false));
  // console.log(Symbol("foo") === Symbol("foo"));
}

// #Strings
{
  // Q.52. What is the output?
  // console.log(1 + -"1" + 2);
}

{
  // Q.53. What is the output?
  var result;
  for (var i = 5; i > 0; i--) {
    result = result + i;
  }
  // console.log(result); // it will return NAaN. because result initiallized as undefined so undefined + number = NaN
}

{
  // Q.54. What is the output?
  // console.log(+"Hello");
}

{
  // Q.55. What is the output?

  var foo = 10 + "20";
  // console.log(foo);
}

{
  // Q.56. What is the output?

  var foo2 = 1 + 2 + "3";
  // console.log(foo2);
}

{
  // Q.57. What is the output?
  const test = "i'am a lasanga hog";
  // console.log(test.split("").reverse().join(""));
  // "i'm a lasagna hog".split("").reverse().join("");
}

{
  // Q.58. What is the output?

  var strA = "hi there";
  var strB = strA;
  strB = "bye there!";
  // console.log(strA);

  // The output will 'hi there' because we're dealing with strings here. Strings are passed by value, that is, copied.
}

{
  // Q.59. What is the output?

  let a = "7" + 3 + 2;
  let b = 7 + 3 + "2";

  // console.log(a, b);
}

// #Arrays

{
  // Q.50. What is the output?
  // console.log( [1, [2, [3, [4, [5, 6]]]]][1][1][1][1][1]); // ans 6
  // console.log( typeof [1, [2, [3, [4, [5, 6]]]]][0]); //ans :  number
}

{
  // Q.51. What is the output?
  console.log([..."Inika"]);
  // A string is an iterable. The spread operator maps every character of an iterable to one element.it will return an array
}

{
  // Q.***. What is the output?
  const numbers = [1, 2, 3, 4, 5];
  const [y, ...z] = numbers;

  let arr = z;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  // console.log(newArr);
}

{
  // Q.51. What is the output?
  const numbers = [1, 2, 3, 4, 5];
  const [y] = numbers;
  // console.log(y);

  // We can unpack values from arrays or properties from objects through destructuring
}

{
  // Q.52. What is the output?
  const list = [1 + 2, 1 * 2, 1 / 2];
  // console.log(list);
}

{
  // Q.53. What is the output?
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  // console.log([].concat(arr1, arr2));

  const test = [
    [0, 1],
    [2, 3],
  ].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2]
  );

  // console.log(test);
}

{
  // Q.54. What is the output?
  const numbers = [1, 2, 3];
  numbers[10] = 11;
  // console.log(numbers);
}

{
  // Q.55. What is the output?
  // console.log(3 * "5"); //ans 15
}

{
  // Q.56. What is the output?
  var foo = [];
  foo.push(1);
  foo.push(2);
  // console.log(foo.length);
}

{
  // Q.57. What is the output?
  // (function () {
  //   var greet = "Hello World";
  //   var toGreet = [].filter.call(greet, function (element, index) {
  //     return index > 5;
  //   });
  //   console.log(toGreet);
  // })();
}

{
  //58.  Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result
  function myFunction(a) {
    // return a.slice(3);
  }
}

{
  // 59. Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.
  function myFunction(a, n) {
    if (n <= 0) {
      // console.log("need positive number");
      return undefined;
    }
    return a[n - 1];
  }

  const test = myFunction("example", 0);
  // console.log(test);
}

{
  //60.  Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result
  function myFunction(str) {
    return str.slice(-3);
  }
}

{
  // 61. find the last charater of a string
  const test2 = "rudra";
  // console.log(test2[test2.length - 1]);
}

{
  // 62. get the first characer using slice method
  const test = "rudra";
  // console.log(test.slice(0, 1));
}

{
  //63.  Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result
  function extractLastThreeCharacters(str) {
    if (str.length < 3) {
      // If the string has less than 3 characters, return the whole string
      return str;
    } else {
      // Extract the last three characters using string manipulation
      return str.substring(str.length - 3);
    }
  }
}

{
  // ** how substring works behind the scene

  function customSubstring(str, startIndex, endIndex) {
    // If endIndex is not provided, set it to the length of the string
    endIndex = endIndex || str.length;

    // If startIndex is greater than endIndex, swap them
    if (startIndex > endIndex) {
      const temp = startIndex;
      startIndex = endIndex;
      endIndex = temp;
    }

    // Initialize an empty string to store the result
    let result = "";

    // Loop through the characters of the string
    for (let i = startIndex; i < endIndex; i++) {
      // Append each character to the result string
      result += str[i];
    }

    // Return the result string
    return result;
  }

  // Example usage:
  // console.log(customSubstring("Hello", 1)); // Outputs: "ello"
  // console.log(customSubstring("World", 1, 4)); // Outputs: "orl"
}

{
  //64.  Write a function that takes a string as argument. Extract the first 3 characters from the string. Return the result
  function myFunction(str) {
    if (str.length < 3) {
      return str;
    }
    // return str.slice(0, 3);
  }
}

{
  const obj = {
    value: 34,
    arrowFunction: () => {
      console.log(this.value);
    },
  };

  obj.arrowFunction();
}

{
  function friendsLength(friends) {
    let newFriends = [];
    for (const friend of friends) {
      if (friend.length % 2 === 0) {
        // console.log(friend);
        newFriends.push(friend);
      }
    }
    return newFriends;
  }

  // const test = friendsLength(["unmesh", "durjoy", "pronoy", "opyd"]);
  // console.log(test);
}

{
  function doSomeCalculation(numbers) {
    let squreElements = [];
    let sum = 0;
    let average = 0;
    for (const number of numbers) {
      squreElements.push(number ** 2);
    }
    for (const sumOfElement of squreElements) {
      sum += sumOfElement;
      average = sum / squreElements.length;
    }
    return parseFloat(average.toFixed(2));
  }

  // const test = doSomeCalculation([2, 3, 4, 5, 6, 7, 9]);
  // console.log(test);
}

{
  function doSomeCalculation(numbers) {
    const squreElements = numbers.map((number) => number ** 2);
    const sumOfSqureElement = squreElements.reduce((acc, num) => acc + num, 0);
    const average = sumOfSqureElement / squreElements.length;
    return parseFloat(average.toFixed(2));
  }

  // const test = doSomeCalculation([2, 3, 4, 5, 6, 7, 9]);
  // console.log(test);
}

{
  function test(arr1, arr2) {
    let newArr = [];
    newArr.push(...arr1, ...arr2);
    const maximum = Math.max(...newArr);
    return maximum;
  }

  const finalTest = test([1, 2, 3], [4, 5, 6]);
  // console.log(finalTest);
}

{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const results = [];

  for (let i = 0; i < numbers.length; i++) {
    const evenNumbers = numbers.filter((num) => num % 2 === 0);
    const someGreaterThanFive = evenNumbers.some((num) => num > 5);

    results.push({
      number: numbers[i],
      isEven: evenNumbers.includes(numbers[i]),
      someGreaterThanFive: someGreaterThanFive,
    });
  }

  //   console.log(results);
}

{
  let cars = [
    { id: 1, name: "Toyota", model: "zx4", origin: "japan" },
    { id: 2, name: "tata", model: "zx5", origin: "india" },
    { id: 3, name: "ferrari", model: "zx6", origin: "usa" },
    { id: 4, name: "Tesla", model: "zx7", origin: "usa" },
  ];

  let cars2 = [
    { id: 2, name: "Toyota", model: "zx4", origin: "japan" },
    { id: 4, name: "Tesla", model: "zx7", origin: "usa" },
  ];

  const test = cars.filter((car) => {
    return cars2.some((car2) => car2.id === car.id);
  });
  //   console.log(test);
}

{
  let numbers = new Set([10, 20, 20, 30, 40, 50]);
  // console.log(numbers);

  const iterator = numbers.values();
  const firstValue = iterator.next().value;
  // console.log(iterator);
  // console.log(firstValue);
}

{
  let lalit = { name: "Lalit Ranganathan" },
    jayesh = { name: "Jayesh Ray" },
    sarvesh = { name: "Sarvesh Tripathi" };

  let userRoles = new Map([
    [lalit, "admin"],
    [jayesh, "editor"],
    [sarvesh, "subscriber"],
  ]);

  for (const user of userRoles.keys()) {
    // console.log(user.name);
  }
}
