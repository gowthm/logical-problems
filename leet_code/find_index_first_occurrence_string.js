let haystack = "sadbutsad1";
let needle = "sad";

// let haystack = "leetcode";
// let needle = "leeto";

let listIndex = []


var strStr = function(haystack, needle) {

let listIndex = []
for (let i=0; i<haystack.length; i++) {
    if (haystack[i] == needle[0]) {
        let tempNeedle = haystack.slice(i, i+needle.length);
        if (needle == tempNeedle) {
            listIndex.push(i);
        }
    }
}
return listIndex.length == 0 ? -1 : listIndex[0];
    
};

console.log(strStr(haystack,needle))
