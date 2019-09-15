class Solution {
  getRange(arr, target) {
    let first = null;
    for (let i = 0; i < arr.length; i++) {
      if (first == null && arr[i] == target) {
        first = i;
      }
      if (first != null && arr[i] != arr[first]) {
        return [first, i - 1];
      }
    }
    return -1;
  }
}

arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
x = 2;
console.log(new Solution().getRange(arr, x));
