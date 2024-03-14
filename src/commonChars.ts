//https://leetcode.com/problems/find-common-characters/description/

function commonChars(words: string[]): string[] {
  let dups = words[0].split("");

  words.forEach((word, index, arr) => {
    dups = dups.filter((char) => {
      const pos = word.indexOf(char);
      return pos >= 0 ? ((word = word.replace(char, "")), true) : false;
    });
  });
  return dups;
}

module.exports = commonChars;
