const twoSum = function (nums: number[], target: number): number[] {
  const hashMap = new Map<number, number>();

  for (let pos = 0; pos < nums.length; pos++) {
    const compliment: number = target - nums[pos];

    if (hashMap.get(compliment) != undefined) {
      return [pos, Number(hashMap.get(compliment))];
    }
    hashMap.set(nums[pos], pos);
  }
  return [-1, -1];
};

export default twoSum;
