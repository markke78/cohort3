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
  }
};

export default functions;
