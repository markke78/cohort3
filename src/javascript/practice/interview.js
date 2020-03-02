const functions = {
  reverse: strs => {
    return strs.split("").reduce((reversed, char) => {
      return (reversed = char + reversed);
    }, "");
  },

  palindrome: strs => {
    const reversed = strs
      .split("")
      .reverse()
      .join("");

    return strs === reversed;
  },

  palindrome1: strs => {
    strs.split("").every((char, i) => {
      return char === str[str.length - i - 1];
    });
  },

  reverseInt: n => {
    return (
      parseInt(
        n
          .toString()
          .split("")
          .reverse()
          .join("")
      ) * Math.sign(n)
    );
  },

  maxChar: str => {
    const charMap = {};
    let max = 0;
    let maxChar = "";

    for (let char of str) {
      if (charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
    for (let char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }
  },

  fizzBuzz: n => {
    let myArray = [];
    for (let b of n) {
      if (b % 3 === 0 && b % 5 === 0) {
        myArray.push("fizzBuzz");
      } else if (b % 3 === 0) {
        myArray.push("fizz");
      } else if (b % 5 === 0) {
        myArray.push("Buzz");
      } else myArray.push(b);
    }
    return myArray;
  },

  chunk: (array, size) => {
    const chunked = [];

    for (let element of array) {
      const last = chunked[chunked.length - 1];
      console.log(last);
      if (!last || last.length === size) {
        chunked.push([element]);
        console.log(chunked);
      } else {
        last.push(element);
        console.log(last);
      }
    }

    return chunked;
  }
};

export default functions;
