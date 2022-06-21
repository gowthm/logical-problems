let s = [{id:1},{id:2},{id:3},{id:1},{id:2},{id:5},{id:4},{id:3}];

// main function

function removeDuplicate(s) {
  s.filter(function(item, index, arr) {
    arr.filter((i, k) => {
      if(item.id == i.id && index != k) {
        s.splice(k, 1)
      }
      
    })
  })
  return s
}

// result

console.log(removeDuplicate(s))