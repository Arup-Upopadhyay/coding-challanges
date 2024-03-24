//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
const removeDuplicates = (nums) => {
    let length = nums.length;
    if (length > 0) {
        let uniqueIndex = 0;
        for (let pos = uniqueIndex + 1; pos < length; pos++) {
            if (nums[uniqueIndex] !== nums[pos]) {
                uniqueIndex++;
                nums[uniqueIndex] = nums[pos];
            }
        }
        length = uniqueIndex + 1;
    }
    return length;
};
export default removeDuplicates;
