//https://leetcode.com/problems/count-items-matching-a-rule/

function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  const result = items.filter((item) => {
    const Key = (): number => {
      let result = -1;
      if (ruleKey === "type") result = 0;
      if (ruleKey === "color") result = 1;
      if (ruleKey === "name") result = 2;

      return result;
    };
    return item[Key()] === ruleValue ? true : false;
  });
  return result.length;
}

export default countMatches;
