{
    // 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
  
    function fiveAndGreaterOnly(arr) {
      return arr.filter((number) => number >= 5);
    }
  
    //test
    //   console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
  }
  
  {
    // 2) Given an array of numbers, return a new array that only includes the even numbers.
    function evensOnly(arr) {
      return arr.filter((number) => number % 2 === 0);
    }
  
    //test
    //   console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
  }
  
  {
    // 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
  
    function fiveCharactersOrFewerOnly(arr) {
      return arr.filter((string) => string.length <= 5);
    }
  
    //test
    //   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
  }
  
  {
    // 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
  
    function peopleWhoBelongToTheIlluminati(arr) {
      return arr.filter((member) => member.member === false);
    }
  
    //   test
    // console.log(peopleWhoBelongToTheIlluminati([
    //     { name: "Angelina Jolie", member: true },
    //     { name: "Eric Jones", member: false },
    //     { name: "Paris Hilton", member: true },
    //     { name: "Kayne West", member: false },
    //     { name: "Bob Ziroll", member: true }
    // ]));
  
    // [{ name: 'Angelina Jolie', member: true },
    // { name: 'Paris Hilton', member: true },
    // { name: 'Bob Ziroll', member: true }]
  }
  
  {
    // 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
    function ofAge(arr) {
      return arr.filter((certified) => certified.age >= 18);
    }
  
    //   console.log(ofAge([
    //       { name: "Angelina Jolie", age: 80 },
    //       { name: "Eric Jones", age: 2 },
    //       { name: "Paris Hilton", age: 5 },
    //       { name: "Kayne West", age: 16 },
    //       { name: "Bob Ziroll", age: 100 }
    //   ]));
  
    //test
  
    //[ { name: 'Angelina Jolie', age: 80 },
    //  { name: 'Bob Ziroll', age: 100 } ]
  }
  
  {
    6; // Square the value of every element in the array. Presume that you will only get numbers in the input array.
  
    function square(numbers) {
      //    return numbers.map(number => number * number)
      return numbers.map((number) => Math.pow(number, 2));
    }
  
    const result = square([1, 2, 3, 4, 5]);
    // console.log(result)
  }
  
  {
    //7.  Sum of every positive element
  
    // If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
  
    function test(numbers) {
      return numbers
        .filter((number) => number > 0)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
  
    const result = test([1, -4, 12, 0, -3, 29, -150]);
    // console.log(result)
  }
  
  {
    8; // Get name initials
    // The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
  
    const input = "George Raymond Richard Martin";
  
    function getInitialName(inputString) {
      return inputString.split(" ").map((word) => word[0]);
    }
  
    const result = getInitialName(input);
    // console.log(result)
  }
  
  {
    // 9.  Age difference from the youngest and oldest
  
    // Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
  
    const input = [
      {
        name: "John",
        age: 13,
      },
      {
        name: "Mark",
        age: 56,
      },
      {
        name: "Rachel",
        age: 45,
      },
      {
        name: "Nate",
        age: 67,
      },
      {
        name: "Jennifer",
        age: 65,
      },
    ];
  
    const test = input.map((element) => {
      return element.age;
    });
  
    // console.log(test);
  
    // const check = [Math.min(...test), Math.max(...test), Math.max(...test) - Math.min(...test)]
    // console.log(check) // result : [13, 67, 54];
  
    // const check = [Math.max(...test)]
    // console.log(check)
  }
  
  {
    // 10.  // Numeronyms
    // Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e
    // const input = "Every developer likes to mix kubernetes and javascript";
    // const makeNumeronym = (word) => {
    //     return word[0] + (word.length - 2) + word[word.length - 1]
    // }
    // const test = input.split(" ").map(word => {
    //     if (word.length >= 4) {
    //         return makeNumeronym(word)
    //     }
    //     return word
    // }).join(" ")
    // another way
    // const test = input.split(" ").map(word => {
    //     if (word.length >= 4) {
    //         return word[0] + (word.length - 2) + word[word.length - 1]
    //     }
    //     return word;
    // }).join(" ")
    // console.log(test)
  }
  
  {
    // 11.  Count elements in array of arrays
    const input = [
      ["a", "b", "c"],
      ["c", "d", "f"],
      ["d", "f", "g"],
    ];
  
    const test = input.flat().reduce((accumulator, currentValue) => {
      if (accumulator[currentValue]) {
        accumulator[currentValue] += 1;
      } else {
        accumulator[currentValue] = 1;
      }
      return accumulator;
    }, {});
    // console.log(test)
  }
  
  {
    // 12. High performing students
    // You are given an array of objects representing a group of students, each with a name and an array of test scores. Your task is to use map, filter, and reduce to calculate the average test score for each student, and then return an array of objects containing only the students who have an average score above 90.
    const students = [
      { name: "Alice", scores: [90, 85, 92] },
      { name: "Bob", scores: [75, 80, 85] },
      { name: "Charlie", scores: [90, 95, 85] },
      { name: "Jack", scores: [100, 100, 100] },
    ];
  
    const studentAverage = students.map((student) => {
      const sum = student.scores.reduce((acc, score) => acc + score, 0);
      // console.log(sum)
      return { name: student.name, average: sum / student.scores.length };
    });
  
    //   console.log(studentAverage)
  
    const highestScorer = studentAverage.filter(
      (getHigest) => getHigest.average > 90
    );
    //   console.log(highestScorer)
  }
  
  {
    const arr = ["mon", "tues", ["wed", "thurs", ["fri", "sat"]], "sun"];
    //   console.log(arr.flat(2))
  }
  
  {
    //13. You are given an array of objects representing a collection of products, each with a name, price, and category. Your task is to use map, filter, and reduce to calculate the average price of products in each category, and then return an array of objects containing only the categories that have an average price above 50.
  
    const products = [
      { name: "Product 1", price: 20, category: "Electronics" },
      { name: "Product 2", price: 30, category: "Clothes" },
      { name: "Product 3", price: 40, category: "Electronics" },
      { name: "Product 4", price: 50, category: "Clothes" },
      { name: "Product 5", price: 60, category: "Clothes" },
      { name: "Product 6", price: 70, category: "Electronics" },
      { name: "Product 7", price: 80, category: "Clothes" },
      { name: "Product 8", price: 90, category: "Electronics" },
    ];
  
  const totalPrice =  products
      .map((product) => product.price)
      .reduce((acc, currentValue) => {
        let sumOfPrice = acc + currentValue;
      //   reduce method expect return statement
  
        // return {catagory: products.catagory, average: sumOfPrice/ products.price.length}
       
      }, 0);
   
  
  
      //    let sumOfPrice = products.map(product => {
      //     return product.price
      //    })
  
     
  
    // let average = totalPrice/ products.price.length
    // console.log(average)
    // return { catagory: products.name, average: sumOfPrice / products }
  
    // let getTheValue = products
    // console.log(sumOfPrice)
  
    // const test =products.map(product => product.price).reduce((acc, current) => acc + current, 0)
  
    // console.log(test)
  }

  {
    // Q. What would be the output of following code?

    (function () {
      var arrayNumb = [2, 8, 15, 16, 23, 42];
      arrayNumb.sort();
      // console.log(arrayNumb);
    })();
  }

  {
    // Q. What would be the output of following code?
    (function () {
      var list = ["foo", "bar", "john"];
      // console.log(list.splice(1));
      // console.log(list.splice(1, 2));
      // console.log(list);
    })();
  }

  {
    // Q. What would be the output of following code?

    // slice method does not change the original array

    // The entire code is wrapped inside an immediately invoked function expression (IIFE). This means the function is executed immediately after it's defined, creating a local scope for the variables and preventing them from polluting the global scope.

    (function () {
      var list = ["foo", "bar", "john", "ritz"];
      // console.log(list.slice(1));
      // console.log(list.slice(1, 3));
      // console.log(list.slice());
      // console.log(list.slice(2, 2));
      // console.log(list);
    })();
  }

  {
   

  }