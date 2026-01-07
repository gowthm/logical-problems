# Time and Space Complexity

Time and space complexity are used to describe how efficient an algorithm is, as the input size `n` grows.

---

## 1. Time Complexity

Time complexity measures **how the running time grows** with input size.

We usually express it using **Big-O notation**, which gives an upper bound.

### Common Time Complexities

#### **O(1) – Constant Time**
Running time does not depend on `n`.

**Examples:**
- Accessing an element by index in an array
- Hash table lookup (average case)
- Pushing/popping from a stack

```js
// Accessing an element by index
let x = arr[5]; // O(1)

// Hash map lookup
let value = map.get(key); // O(1)
```

---

#### **O(log n) – Logarithmic Time**
Running time grows logarithmically with input size. Common in divide-and-conquer algorithms.

**Examples:**
- Binary search
- Balanced binary search tree operations
- Finding an element in a sorted array

```js
// Binary search
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
} // O(log n)
```

---

#### **O(n) – Linear Time**
Running time grows linearly with input size.

**Examples:**
- Iterating through an array
- Linear search
- Finding min/max in an unsorted array

```js
// Linear search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
} // O(n)

// Sum of array elements
function sum(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
} // O(n)
```

---

#### **O(n log n) – Linearithmic Time**
Common in efficient sorting algorithms.

**Examples:**
- Merge sort
- Quick sort (average case)
- Heap sort

```js
// Merge sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
} // O(n log n)
```

---

#### **O(n²) – Quadratic Time**
Running time grows quadratically. Common with nested loops.

**Examples:**
- Bubble sort
- Selection sort
- Insertion sort
- Checking all pairs in an array

```js
// Bubble sort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
} // O(n²)

// Finding all pairs
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
} // O(n²)
```

---

#### **O(2^n) – Exponential Time**
Running time doubles with each additional input element. Very inefficient for large inputs.

**Examples:**
- Recursive Fibonacci (naive approach)
- Generating all subsets of a set
- Solving the Tower of Hanoi

```js
// Naive recursive Fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
} // O(2^n)

// Generate all subsets
function subsets(arr) {
  if (arr.length === 0) return [[]];
  const first = arr[0];
  const rest = subsets(arr.slice(1));
  return rest.concat(rest.map(subset => [first, ...subset]));
} // O(2^n)
```

---

#### **O(n!) – Factorial Time**
Extremely inefficient. Running time grows factorially.

**Examples:**
- Generating all permutations
- Solving the traveling salesman problem (brute force)

```js
// Generate all permutations
function permutations(arr) {
  if (arr.length === 0) return [[]];
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const perms = permutations(rest);
    for (let perm of perms) {
      result.push([arr[i], ...perm]);
    }
  }
  return result;
} // O(n!)
```

---

## 2. Space Complexity

Space complexity measures **how much memory** an algorithm uses as input size grows.

### Common Space Complexities

#### **O(1) – Constant Space**
Uses a fixed amount of memory regardless of input size.

```js
// Swap two numbers
function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
} // O(1) space
```

---

#### **O(n) – Linear Space**
Memory usage grows linearly with input size.

```js
// Creating a copy of an array
function copyArray(arr) {
  return [...arr];
} // O(n) space

// Hash map to store frequencies
function countFrequency(arr) {
  const freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
} // O(n) space
```

---

#### **O(log n) – Logarithmic Space**
Common in recursive algorithms with divide-and-conquer.

```js
// Binary search (recursive)
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, right);
  return binarySearchRecursive(arr, target, left, mid - 1);
} // O(log n) space due to recursion stack
```

---

## 3. Complexity Analysis Tips

### How to Analyze Time Complexity

1. **Identify the basic operations** – What operations are repeated?
2. **Count the iterations** – How many times do loops run?
3. **Consider nested loops** – Multiply complexities of nested loops
4. **Ignore constants** – O(2n) → O(n), O(n + 100) → O(n)
5. **Focus on dominant term** – O(n² + n) → O(n²)

### Common Patterns

| Pattern | Time Complexity |
|---------|----------------|
| Single loop | O(n) |
| Nested loops (2 levels) | O(n²) |
| Nested loops (3 levels) | O(n³) |
| Divide and conquer | O(log n) or O(n log n) |
| Recursive with branching | O(2^n) or O(n!) |

### Best, Average, and Worst Case

- **Best case** – Minimum time/space needed (optimistic)
- **Average case** – Expected time/space for typical input
- **Worst case** – Maximum time/space needed (pessimistic)

**Example: Quick Sort**
- Best/Average: O(n log n)
- Worst: O(n²) (when pivot is always smallest/largest)

---

## 4. Optimization Strategies

### Time Optimization
- Use hash maps for O(1) lookups instead of arrays O(n)
- Use binary search on sorted data instead of linear search
- Avoid nested loops when possible
- Use dynamic programming to avoid redundant calculations
- Choose appropriate data structures (heap, tree, etc.)

### Space Optimization
- Use iterative solutions instead of recursive when possible
- Reuse variables instead of creating new ones
- Use in-place algorithms when you can modify input
- Consider space-time tradeoffs

---

## 5. Quick Reference

### Complexity Ranking (Best to Worst)
```
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n) < O(n!)
```

### Common Data Structure Operations

| Data Structure | Access | Search | Insert | Delete | Space |
|---------------|--------|--------|--------|--------|-------|
| Array | O(1) | O(n) | O(n) | O(n) | O(n) |
| Linked List | O(n) | O(n) | O(1) | O(1) | O(n) |
| Hash Table | - | O(1)* | O(1)* | O(1)* | O(n) |
| Binary Search Tree | O(log n)* | O(log n)* | O(log n)* | O(log n)* | O(n) |
| Heap | - | O(n) | O(log n) | O(log n) | O(n) |

*Average case; worst case may differ

---

## 6. Practice Problems

To master complexity analysis:

1. Analyze the time and space complexity of your solutions
2. Try to optimize O(n²) solutions to O(n) or O(n log n)
3. Identify when to use different data structures
4. Practice recognizing common patterns
5. Consider trade-offs between time and space

---

**Remember:** The goal is to write code that is both **correct** and **efficient**. Always analyze complexity to ensure your solution scales well with larger inputs!