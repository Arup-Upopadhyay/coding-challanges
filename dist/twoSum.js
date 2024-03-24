const twoSum = function (nums, target) {
    const hashMap = new Map();
    for (let pos = 0; pos < nums.length; pos++) {
        const compliment = target - nums[pos];
        if (hashMap.get(compliment) != undefined) {
            return [pos, Number(hashMap.get(compliment))];
        }
        hashMap.set(nums[pos], pos);
    }
    return [-1, -1];
};
export default twoSum;
