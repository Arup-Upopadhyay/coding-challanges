//https://leetcode.com/problems/find-words-containing-character/description/
function findWordsContaining(words, x) {
    const result = [];
    words.forEach((word, pos) => {
        if (word.includes(x)) {
            result.push(pos);
        }
    });
    return result;
}
export default findWordsContaining;
