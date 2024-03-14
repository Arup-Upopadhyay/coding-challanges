//https://leetcode.com/problems/remove-outermost-parentheses/
function removeOuterParentheses(s) {
    const pransArr = [];
    let output = "";
    for (let i = 0, start = 0, end = 0; i < s.length; i++) {
        if (s[i] === "(") {
            pransArr.push(s[i]);
        }
        else if (s[i] === ")") {
            pransArr.pop();
        }
        if (pransArr.length === 0 && i <= s.length - 1) {
            end = i;
            let str = s.substring(start + 1, end);
            output = output + str;
            start = end + 1;
        }
    }
    return output;
}
export default removeOuterParentheses;
