let haystack = "sadbutsad1";
let needle = "sad";

// let haystack = "leetcode";
// let needle = "leeto";

var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    let tempNeedle = haystack.slice(i, i + needle.length);
    if (needle == tempNeedle) {
      return i;
    }
  }
  return -1;
};

console.log(strStr(haystack, needle));
