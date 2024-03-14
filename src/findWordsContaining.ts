//https://leetcode.com/problems/find-words-containing-character/description/

function findWordsContaining(words: string[], x: string): number[] {
  const result: number[] = [];
  words.forEach((word, pos) => {
    if (word.includes(x)) {
      result.push(pos);
    }
  });
  return result;
}

export default findWordsContaining;
