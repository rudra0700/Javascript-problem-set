{
  // 1. What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?

  // console.log(typeof bar === 'object')
  // console.log((bar !== null) && (typeof bar === 'object'))
  var bar = [1, 2, 3];
  // var bar = [1, 2, 3]

  // const  bar = () =>{
  //     return null
  // }

  // console.log(typeof bar === 'object') // return false
  // console.log(typeof bar === 'function') // return true
  // console.log(typeof null) // object

  // console.log((bar !== null) && (typeof bar === 'object') || (typeof bar === 'function'))
  // console.log(
  //   bar !== null &&
  //     typeof bar === "object" &&
  //     toString.call(bar) === "[object Array]"
  // );

  // console.log((bar !== null) && (bar.constructor === 'Object'))
  // console.log(Array.isArray(bar))
}

{
  var str = {
    name: "rudra",
    profession: "programmer",
  };

  // console.log(Object.getOwnPropertyNames(str));
  // var str = "hi";
  // console.log(Object.getOwnPropertyNames(str));
  // console.log(Object.values(str));

  // let strPrimitive = "hello";
  // console.log(strPrimitive.toUpperCase());
}

{
  var str = {
    name: "rudra",
    profession: "programmer",
  };

  // console.log(toString.call(str));
}
{
  // Write a JavaScript code to reverse the array colors without using the reverse method.

  const colors = ["red", "blue", "green", "yellow", "orange"];
  let reverseArr = [];
  for (const color of colors) {
    reverseArr.unshift(color);
  }
  // console.log(reverseArr);
}

{
  // Write a JavaScript code to get the even numbers from an array using any looping technique.

  const numbers = [12, 98, 5, 41, 23, 78, 46];

  let i = 0;
  let newArr = [];

  while (i < numbers.length) {
    if (numbers[i] % 2 === 0) {
      newArr.push(numbers[i]);
    }
    i++;
  }
  // console.log(newArr);
}

{
  // Use a for...of loop to concatenate all the elements of an array into a single string.

  var numbers = ["Tom", "Tim", "Tin", "Tik"];
  let result = "";
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  // console.log(result);
}

{
  const array = ["Hello", "world", "!"];
  const result = array.join("");
  // console.log(result); // Output: "Helloworld!"
}

{
  const array = ["Hello", "world", "!"];
  const result = array.reduce((acc, current) => acc + current, "");
  // console.log(result); // Output: "Helloworld!"
}

{
  const array = ["Hello", "world", "!"];
  const result = array.toString().replace(/,/g, "");
  // console.log(result); // Output: "Helloworld!"
}

{
  // Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

  const statement = "I am a hard working person";

  let result = statement.split(" ").reverse().join(" ");
  // console.log(result);
}

{
  const statement = "I am a hard working person";
  let result = "";
  const words = statement.split(" ");
  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i] + " ";
  }
  console.log(result.trim());
}

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}
const myHeight = inchToFeet(75);
console.log(myHeight);

{
  function inchToFeet(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = `${feetNumber} feet ${inchRemaining} inch`;
    return result;
  }

  const myHeight = inchToFeet(75);
  console.log(myHeight);
}

{
  function mileToKm(mile) {
    const kilo = mile * 1.60934;
    return kilo;
  }
  const sevenKilo = mileToKm(7);
  console.log(sevenKilo);
}

{
  // The year will be leap year if that year divisible by 4

  function isLeapYear(year) {
    if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  }

  const isLipi = isLeapYear(1900);
  console.log(isLipi);
}

{
  // the year is not divisible by 100 and divisible by 4 is a leap year
  //   And the year is divisible by 400 is a leap year also

  function isLeapYear(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
      return true;
    } else if (year % 100 === 0 && year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }

  const isLeap = isLeapYear(2100);
  const isLeap2 = isLeapYear(2400);
  const isLeap3 = isLeapYear(1900);
  const isLeap4 = isLeapYear(2052);
  console.log(isLeap, isLeap2, isLeap3, isLeap4);
}

{
  // find the average of Odd number
  function oddAverage(numbers) {
    let oddNumbers = [];
    let sumOfOddNumbers = 0;
    let oddAverage = 0;
    for (const number of numbers) {
      if (number % 2 === 1) {
        oddNumbers.push(number);
      }
    }
    for (const oddNumber of oddNumbers) {
      sumOfOddNumbers += oddNumber;
    }
    oddAverage = sumOfOddNumbers / oddNumbers.length;
    return oddAverage;
  }
  const oddArr = [42, 13, 58, 65, 81, 96, 7, 105];
  const result = oddAverage(oddArr);
  console.log(result);
}

{
  // remove duplicate Array
  function noDuplicat(array) {
    let uniqueArray = [];
    for (const item of array) {
      if (uniqueArray.includes(item) === false) {
        uniqueArray.push(item);
      }
    }
    return uniqueArray;
  }

  const result = noDuplicat([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]);
  console.log(result);
}

{
  //     You are given an array of numbers. Count how many times the a number is repeated in the array.

  // sample-input: numbers = [5,6,11,12,98, 5]

  // find: 5

  // output: 2

  // sample-input:

  // numbers = [5,6,11,12,98, 5]

  // find: 25

  // output: 0

  const numbers = [5, 6, 11, 12, 98, 5];
  function occurences(numbers, target) {
    let count = 0;
    for (const number of numbers) {
      if (number === target) {
        count++;
      } else {
        count;
      }
    }
    return count;
  }

  const result = occurences(numbers, 25);
  // console.log(result);
}

{
  // find the longest word
  const sample = "I am learning Programming to become a programmer";
  function longestWord(str) {
    strArr = str.split(" ");
    let longest = "";
    for (const word of strArr) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest;
  }
  const result = longestWord(sample);
  // console.log(result);
}

{
  function countVowels(str) {
    const vowel = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (const char of str.toLowerCase()) {
      if (vowel.includes(char)) {
        count++;
      }
    }
    return count;
  }

  const result = countVowels("bangladeshi");
  // console.log(result);
}
