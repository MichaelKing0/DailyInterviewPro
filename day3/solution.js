class Solution {
  longestPalindrome(s) {
    let longestPalindrome = '';
    
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j < s.length; j++) {
        let word = s.slice(i, j);

        if (word == word.split("").reverse().join("") && word.length > longestPalindrome.length) {
          longestPalindrome = word;
        }
      }
    }

    return longestPalindrome;
  }
}

s = "tracecars";
console.log(new Solution().longestPalindrome(s));
