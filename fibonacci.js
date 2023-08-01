//Fibonacci with normal loop

function fibonacci(n) {
  let arr = [0, 1];
  for (let i = 0; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr;
}

fibonacci(8);

//Fibonacci with recursion

function fibonacciRecursion(n) {
  if (n < 2) {
    return [0, 1];
  }
  let arr = fibonacciRecursion(n - 1);
  arr.push(arr[n - 1] + arr[n - 2]);
  return arr;
}
fibonacciRecursion(8);
