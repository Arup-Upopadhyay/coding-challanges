//https://leetcode.com/problems/jewels-and-stones/description/
function numJewelsInStones(jewels, stones) {
    return stones.split("").reduce((count, char) => {
        return jewels.includes(char) ? count + 1 : count;
    }, 0);
}
export default numJewelsInStones;
