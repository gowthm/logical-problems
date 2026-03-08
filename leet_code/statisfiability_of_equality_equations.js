/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {

    let parent = new Array(26).fill(0).map((_, i) => i);

    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x])
        }
        return parent[x];
    }

    function union(x, y) {
        parent[find(x)] = find(y)

    }

    // Step 1 handle '=' 

    for (let equation of equations) {
        if (equation[1] === '=') {
            let a = equation.charCodeAt(0) - 97;
            let b = equation.charCodeAt(3) - 97;
            union(a, b)
        }
    }

    // Step 2 handle '!'
    for (let equation of equations) {
        if (equation[1] === '!') {
            let a = equation.charCodeAt(0) - 97;
            let b = equation.charCodeAt(3) - 97;
            if (find(a) == find(b)) {
                return false;
            }
        }
    }
    return true;
};

let equations = ["a==b", "b!=a"];
console.log(equationsPossible(equations));


// Example 1:

// Input: equations = ["a==b","b!=a"]
// Output: false
// Explanation: If we assign say, a = 1 and b = 1, then the first equation is satisfied, but not the second.
// There is no way to assign the variables to satisfy both equations.

// Example 2:

// Input: equations = ["b==a","a==b"]
// Output: true
// Explanation: We could assign a = 1 and b = 1 to satisfy both equations.