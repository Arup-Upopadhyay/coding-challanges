//https://leetcode.com/problems/remove-element/description/
function removeElement(nums, val) {
    nums = nums.sort((a, b) => a - b);
    let index = -1;
    do {
        index = nums.indexOf(val);
        if (index !== -1)
            nums.splice(index, 1);
    } while (index !== -1);
    return nums.length;
}
export default removeElement;
