const characterCount = (str) => {
  if (str.length >= 1 || str.length > 10) {
    return str.length;
  }
  throw new Error('string is less than 1 or greater than 10');
};

module.exports = { characterCount };