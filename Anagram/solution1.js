function AnagramChecker(first, second) {
  if (first.length !== second.length) {
    return false
  }

  const check = {}

  for (let i = 0; i < first.length; i++) {
    let letter = first[i]
    check[letter] ? check[letter] += 1 : check[letter] = 1;
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    
    if (!check[letter]) {
      return false;
    } else {
      check[letter] -= 1;
    }
  } 

  return true;
}

console.log(AnagramChecker('ana', 'naa'))