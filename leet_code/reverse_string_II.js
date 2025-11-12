/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let arr = s.split("");
    let idn = false;
    for (let i = 0; i < arr.length - 1; i += 2 * k) {

        let left = i;
        let right = Math.min(i + k - 1, arr.length - 1);

        while (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;

        }

    }
    return arr.join('');

};