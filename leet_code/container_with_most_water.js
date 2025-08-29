/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max_area = 0;
    let left = 0;
    let right = height.length-1;

    while(left < right) {
        max_area = Math.max(max_area, Math.abs(left-right)*Math.min(height[left],height[right]));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max_area;
    
};

let height = [8,7,2,1];
console.log(maxArea(height));


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1