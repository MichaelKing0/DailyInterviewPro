class Solution {
  isValid(s) {
    let parentheses = {
      '(': ')',
      '{': '}',
      '[': ']',
    }

    let closeStack = [];

    for (let i = 0; i < s.length; i++) {
      // If this item is a closing parentheses
      if (Object.values(parentheses).indexOf(s[i]) !== -1) {
        // If it's not the last on the stack it's not valid
        if (s[i] != closeStack.pop()) {
          return false;
        }
      } else {
        // This is an open parentheses so add it's closing one
        // onto the stack
        closeStack.push(parentheses[s[i]]);
      }
    }

    if (closeStack.length > 0) {
      // there's unclosed parentheses
      return false;
    }

    return true;
  }
}

s = "()(){(())"
console.log(new Solution().isValid(s));
s = ""
console.log(new Solution().isValid(s));
s = "([{}])()"
console.log(new Solution().isValid(s));
