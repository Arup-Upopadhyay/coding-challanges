function shuffle(nums, n) {
    let result = [];
    for (let arrFirst = 0, arrSecond = n; arrSecond < nums.length; arrFirst++, arrSecond++) {
        result.push(nums[arrFirst]);
        result.push(nums[arrSecond]);
    }
    return result;
}
;
export default shuffle;
