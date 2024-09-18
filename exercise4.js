// programming question: longest word in string

// write a function findLongestWord that take a string as a input and return the longest word in the string. if there are multiple longrest word , return the first encountered one

// constrains:
// the input string may container alphabetic characters, digits , spaces and punctuation
//the string is non empty
// the input string may contain multiple words separted by comma;

// note:
//if the input string is empty or contains only white space, the function should return a false
//the function should ignore leading or trainling white space when determine the longest word

function findLongestWord(str) {
  if (str.trim().length === 0) {
    return "provide a stirng";
  }
  const stringSplit = str.split(" ");
  let longestWord = stringSplit[0];
  for (const char of stringSplit) {
    if (char.length > longestWord.length) {
      longestWord = char;
    }
  }

  return longestWord;
}

const result = findLongestWord("the biggest string");

// console.log(result);

{
  // another way to find the longest word from string

  function findLongestWord(str) {
    if (str.trim().length === 0) {
      return "provide a stirng";
    }

    let words = str.split(" ");
    // words.sort((a,b) => a.length - b.length);
    // words.sort((a, b) => b.length - a.length);
    // console.log(words);

    // // return words.at(-1)
    // return words[0];

    return words.reduce(
      (accumulator, currentword) =>
        currentword.length > accumulator.length ? currentword : accumulator,
      ""
    );
  }

  const result = findLongestWord("the biggest string");

  // console.log(result);
}

{
  // programming qustion: hashtag generator

  // you are required to generate generatehash function that generates hashtag from give string. The hashtag should be constructed as follows

  // the string should be converted to a hashtag format, where each word is capitalized and concatenate together with no spaces

  // if the length of the input string more than 280 character or if the input string is empty or contains only whitespace , function should return false

  function generateHash(str) {
    if (str.length > 280 || str.trim().length === 0) {
      return false;
    }
    const stringSplit = str.split(" ");
    let newString = "";
    for (const word of stringSplit) {
      newString += word[0].toUpperCase() + word.slice(1);
    }

    return "#" + newString;
  }

  const result = generateHash("my name is rudra");
  // console.log(result);
}

{
  // another way to generate hashtag using map

  function generateHash(str) {
    if (str.length > 280 || str.trim().length === 0) {
      return false;
    }
    const stringSplit = str.split(" ");
    const capitalized = stringSplit.map(
      (currElem) =>
        // currElem.replace(currElem[0], currElem[0].toUpperCase())
        currElem.charAt(0).toUpperCase() + currElem.slice(1)
    );

    return `#${capitalized.join("")}`;
  }

  const result = generateHash("my name is rudra");
  // console.log(result);
}

{
  // interview Question: count occurances of character.

  // task
  // write a function called countChar called two parameter. a string and a charcter to count. The function should return the number of occurances appears in string

  function countChar(word, char) {
    const charSplit = word.split("");
    // console.log(charSplit);
    let count = 0;
    for (const singlechar of charSplit) {
      if (singlechar.toLowerCase().includes(char.toLowerCase())) {
        count++;
      }
    }
    return count;
  }

  const result = countChar("missIssipi", "I");
  // console.log(result);
}

{
  // another way to find character occurances using reduce method. whenever it comes to get single value, its better to go with reduce method.

  const countChar = (word, char) => {
    const totalCount = word.split("").reduce((accum, currChar) => {
      if (currChar.toLowerCase() === char.toLowerCase()) {
        accum++;
      }
      return accum;
    }, 0);
    return totalCount;
  };

  const result = countChar("missIssipi", "I");
  // console.log(result);
}

{
  // InterView question:
  // write a function that check triangle type that takes three parameters representing the length of the sides of a triangle. The function should return a string indicating the type of triangle. equilateral, isosceles, scalene

  // if all three sides are equal length, its equilateral
  // if only two side are equal length, its isoceles
  // if only one side are equal length, its scalene

  function checkTriangleType(first, second, third) {
    if (first === second && second === third) return "equilateral";
    if (first === second || second === third || first === third)
      return "isosceles";
    return "scalene";
  }
  const result = checkTriangleType(3, 4, 5);
  // console.log(result);
}

