function threeSum(nums: number[]): number[][] {
  const len = nums.length;
  let result = [];
  let left = 0;
  let right = 0;
  nums.sort((a, b) => a - b);
  for (var i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    left = i + 1;
    right = len - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return result;
}

export default threeSum;
