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

{
  // Find the friend with the smallest name.
  const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];

  function smallestName(height) {
    let smallestName = height[0];
    for (const smallest of height) {
      if (smallest.length < smallestName.length) {
        smallestName = smallest;
      }
    }
    return smallestName;
  }

  const result = smallestName(heights2);
  //   console.log(result);
}

{
  // Your task is to calculate the total budget required to buy electronics:

  // Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

  function totalBudget(laptopQuantity, tabletQuantity, mobileQuantity) {
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    const perLaptopPrice = laptop * laptopQuantity;
    const perTabletPrice = tablet * tabletQuantity;
    const perMobilePrice = mobile * mobileQuantity;

    const total = perLaptopPrice + perTabletPrice + perMobilePrice;
    return total;
  }

  const result = totalBudget(0, 0, 3);
  //   console.log(result);
}

{
  // You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

  const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
  ];

  function getAverage(phones) {
    let totalPrice = 0;
    for (const phone of phones) {
      const price = phone.price;
      totalPrice = totalPrice + price;
    }
    const average = totalPrice / phones.length;
    return parseFloat(average.toFixed(2));
  }

  const result = getAverage(phones);
  //   console.log(result);
}

{
  // For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
}

{
  const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
  ];

  function calculateTotalMonthlySalary(employees) {
    let totalMonthlySalary = 0;

    for (const employee of employees) {
      const yearlyIncrement = employee.experience * employee.increment;
      const currentYearlySalary = employee.starting + yearlyIncrement;

      const monthlySalary = currentYearlySalary / 12;

      totalMonthlySalary += monthlySalary;
    }

    return totalMonthlySalary;
  }

  const totalSalary = calculateTotalMonthlySalary(employees);
  console.log(
    "Total monthly salary to be provided by the company:",
    totalSalary
  );
}

{
  const friends = [
    "solaiman",
    "bishal",
    "bishal",
    "momen",
    "jahid",
    "shuvo",
    "shuvo",
  ];

  function removeDuplicate(friends) {
    let uniqueArray = [];
    let duplicateValue = [];
    for (const friend of friends) {
      if (uniqueArray.includes(friend) === false) {
        uniqueArray.push(friend);
      } else {
        duplicateValue.push(friend);
      }
    }
    return [uniqueArray, duplicateValue];
  }

  const test = removeDuplicate(friends);
  // console.log(test);
}

{
  // get average marks
  const myMarks = {
    bangla: 65,
    english: 80,
    math: 33,
    history: 65,
    geography: 80,
  };

  function getAverage(marks) {
    let total = 0;
    let avg = 0;
    for (const mark in marks) {
      total += marks[mark];
    }

    let keys = Object.keys(myMarks);
    return (avg += total / keys.length);
  }

  const result = getAverage(myMarks);
  // console.log(result);
}

{
  // get average marks another way
  const myMarks = {
    bangla: 65,
    english: 80,
    math: 33,
    history: 65,
    geography: 80,
  };

  function getAverage(marks) {
    let total = 0;
    let subject = [];
    for (const mark in marks) {
      total += marks[mark];
      subject.push(mark);
    }

    const avg = total / subject.length;
    return avg;
  }

  const result = getAverage(myMarks);
  console.log(result);
}
{
  // vowel check
  const text = "Lets code our carrier with our programming hero";

  function checkVowel(text) {
    let result = "";
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < text.length; i++) {
      if (vowels.includes(text[i])) {
        result += text[i];
        count++;
      }
    }
    return `${result}, total vowel is ${count}`;
  }

  const result = checkVowel(text);
  console.log(result);
}

{
  const text = "Lets code our carrier with our programming hero";
  const vowels = "aeiouAEIOU"; // Include both lowercase and uppercase vowels

  let vowelCount = 0;

  for (let char of text) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  console.log(`Number of vowels: ${vowelCount}`);
}

{
  // checkVowel

  function countVowels(str) {
    let count = 0;
    const vowels = ["a", "e", "i", "o", "u"];

    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }

    return count;
  }

  // Example usage
  let inputString = "Hello World";
  console.log(countVowels(inputString)); // Output: 3
}

{
  // make calculator functionality

  function add(num1, num2) {
    return num1 + num2;
  }
  function subtract(num1, num2) {
    return num1 - num2;
  }
  function multiply(num1, num2) {
    return num1 * num2;
  }
  function division(num1, num2) {
    return num1 / num2;
  }

  function calculate(a, b, operation) {
    if (operation === "add") {
      const result = add(a, b);
      return result;
    } else if (operation === "subtract") {
      const result = subtract(a, b);
      return result;
    } else if (operation === "multiply") {
      const result = multiply(a, b);
      return result;
    } else if (operation === "division") {
      const result = division(a, b);
      return result;
    } else {
      return `only add, subtract, multiply and division operation allowed`;
    }
  }

  const test = calculate(5, 7, "subtract");
  console.log(test);
}
{
  // find the cheapest phone
  const phones = [
    { name: "samsung", price: 16000, camera: "12mp", color: "black" },
    { name: "xiaomi", price: 20000, camera: "16mp", color: "black" },
    { name: "oppo", price: 30000, camera: "20mp", color: "black" },
    { name: "nokia", price: 38000, camera: "25mp", color: "black" },
    { name: "sony", price: 50000, camera: "30mp", color: "black" },
    { name: "iphone", price: 100000, camera: "50mp", color: "black" },
  ];

  function chepestPhone(phones) {
    let min = phones[0];
    for (const phone of phones) {
      if (phone.price < min.price) {
        min = phone;
      }
    }
    return min;
  }

  const chepest = chepestPhone(phones);
  console.log("cheapet phone price is : ", chepest);
}

{
  // one layer discount price
  function discountedPrice(quantity) {
    let total = 0;
    if (quantity <= 100) {
      return (total += quantity * 100);
    } else if (quantity <= 200) {
      return (total += quantity * 90);
    } else {
      return (total += quantity * 70);
    }
  }

  const result = discountedPrice(201);
  console.log(result);
}

{
  // multiLayer discount price
  function multiLayerDiscount(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    let total = 0;
    if (quantity <= 100) {
      return (total += quantity * first100Price);
    } else if (quantity <= 200) {
      const first100Total = 100 * first100Price;
      const remainingQuantity = quantity - 100;
      const remainingTotal = remainingQuantity * second100Price;
      return (total += first100Total + remainingTotal);
    } else {
      const first100Total = 100 * first100Price;
      const second100Total = 100 * second100Price;
      const remainingQuantity = quantity - 200;
      const remainingTotal = remainingQuantity * above200Price;
      return (total += first100Total + second100Total + remainingTotal);
    }
  }

  const result = multiLayerDiscount(300);
  console.log(result);
}

{
  //  product price with quantity
  const products = [
    { name: "shampoo", price: 500, quantity: 2 },
    { name: "comb", price: 600, quantity: 1 },
    { name: "shirt", price: 700, quantity: 3 },
    { name: "pant", price: 800, quantity: 4 },
    { name: "belt", price: 900, quantity: 2 },
  ];

  function totalPrice(products) {
    let total = 0;
    for (const product of products) {
      const productCost = product.price * product.quantity;
      total += productCost;
    }

    return total;
  }

  const result = totalPrice(products);
  console.log("total price is : ", result);
}

{
  // total wood quantity
  function totalWoodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
  }

  const result = totalWoodQuantity(0, 0, 1);
  console.log(result);
}


{
  function calculateMoney(input) {
    const ticketPrice = 120;
    const gateManFee = 500;
    const stuffFee = 400;

    if (input <= 0) {
      return "please provide positive number";
    }
    const remainingMoney = input * ticketPrice - (gateManFee + stuffFee);
    return remainingMoney;
  }

  const result = calculateMoney();
  // console.log(result);
}

{
  function checkName(name) {
    if (typeof name !== "string") {
      return "Invalid Name";
    }
    //  const lastLetter = name.slice(-1);
    const lastLetter = name[name.length - 1];
    let result = false;
    const goodNameChar = ["a", "y", "i", "e", "o", "u", "w"];
    for (const char of goodNameChar) {
      if (char === lastLetter) {
        result = true;
      }
    }
    return result ? "Good Name" : "Bad Name";
  }

  const result = checkName("rudrav");
  // console.log(result);
}

{
  function checkName(name) {
    if (typeof name !== "string") {
      return "Invalid Name";
    }
    //  const lastLetter = name.slice(-1);
    const lastLetter = name[name.length - 1];
    const goodNameChar = ["a", "y", "i", "e", "o", "u", "w"];

    for (const char of goodNameChar) {
      if (char === lastLetter) {
        return "Good Name";
      } else {
        return "Bad Name";
      }
    }
  }

  const result = checkName("rudra");
  // console.log(result);
}

{
  function checkName(name) {
    if (typeof name !== "string") {
      return "Invalid Name";
    }
    //  const lastLetter = name.slice(-1);
    const lastLetter = name[name.length - 1];
    const goodNameChar = ["a", "y", "i", "e", "o", "u", "w"];

    let result = goodNameChar.includes(lastLetter);
    return result ? "Good Name" : "Bad Name";
  }

  const result = checkName("rudrav");
  // console.log(result);
}

{
  // delete invalid virus
  function deleteInvalid(array) {
    if (!Array.isArray(array)) {
      return "invalid array";
    }
    let numberArray = [];
    for (const element of array) {
      if (typeof element === "number" && isNaN(element) === false) {
        numberArray.push(element);
      }
    }

    return numberArray;
  }

  const test = deleteInvalid({ num: [1, 2, 3] });
  console.log(test);
}

{
  // make password for kolimuddin
  function password(obj) {
    if (
      obj.name === undefined ||
      obj.birthYear === undefined ||
      obj.siteName === undefined ||
      obj.birthYear.toString().length !== 4
    ) {
      return "invalid";
    }
    let capitalFirstChar =
      obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    let password = capitalFirstChar + "#" + obj.name + "@" + obj.birthYear;
    return password;
  }

  const test = password(2);
  // console.log(test);
}

{
  function monthlySavings(array, livingCost) {
    if (!Array.isArray(array) || typeof livingCost !== "number") {
      return "invalid input";
    }
    let totalPayment = 0;
    for (const payment of array) {
      if (payment >= 3000) {
        let tax = payment * 0.2;
        totalPayment = totalPayment + payment - tax;
      } else {
        totalPayment += payment;
      }
    }

    let savings = totalPayment - livingCost;
    return savings >= 0 ? savings : "earn more";
  }

  const result = monthlySavings([900, 2700, 3400], 10000);
  console.log(result);
}

