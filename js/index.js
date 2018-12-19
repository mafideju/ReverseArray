const reverseArray = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    let tempVar = arr[i];
    let tempArr = arr[arr.length - 1 - i];
    // console.log('1', tempVar)
    arr[i] = tempArr;
    console.log('tempArr', tempArr)
    // console.log('2', tempVar)
    tempArr = tempVar;
    // console.log('3', tempVar)
  }
  console.log('arr', arr)
  return arr;
}

console.log(reverseArray(['Uno', 'Dos', 'Tres']))