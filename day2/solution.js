class Solution {
  lengthOfLongestSubstring(s) {
    let longestSubstring = 0;
    let charactersUsed = [];
    let currentSubstringLength = 0;
    
    for (let i = 0; i < s.length; i++) {
      if (charactersUsed.indexOf(s[i]) === -1) {
        charactersUsed.push(s[i]);
        currentSubstringLength++;
      } else {
        if (currentSubstringLength > longestSubstring) {
          longestSubstring = currentSubstringLength;
        }
        charactersUsed = [];
        currentSubstringLength = 0;
      }
    }

    return longestSubstring;
  }
}

console.log(new Solution().lengthOfLongestSubstring('abrkaabcdefghijjxxx'));
