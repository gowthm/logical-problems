/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    let points = new Set();
    let x = 0, y = 0;
    points.add(`${x}, ${y}`)
    for (let direction of path) {
        if (direction == 'N') y++;
        else if (direction == 'S') y--;
        else if (direction == 'E') x++;
        else if (direction == 'W') x--;
        const isAlreadyVisit = `${x}, ${y}`;
        if (points.has(isAlreadyVisit)) return true;
        points.add(isAlreadyVisit);
    }
    return false;
};

let path = "NES"
console.log(isPathCrossing(path))

// Input: path = "NES"
// Output: false
// Explanation: Notice that the path doesn't cross any point more than once.


// Input: path = "NESWW"
// Output: true
// Explanation: Notice that the path visits the origin twice.