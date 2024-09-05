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