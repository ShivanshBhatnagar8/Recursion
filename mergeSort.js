function mergeSort(arr) {
  if (arr.length === 1) {
    console.log(arr);
    return arr;
  }

  const mid = arr.length / 2;
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid, arr.length);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;

  const result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i++]);
  }
  while (j < arr2.length) {
    result.push(arr2[j++]);
  }
  console.log(result);
  return result;
}

mergeSort([6, 4, 2, 1, 5, 3]);
