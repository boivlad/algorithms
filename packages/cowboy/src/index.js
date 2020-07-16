module.exports.cowboy = (n, l) => {
  const sortL = selectionSort(l);
  const even = [];
  const odd = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      even.push(sortL[i]);
    } else {
      odd.unshift(sortL[i]);
    }
  }
  return [...even, ...odd];
}
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
  }
  return arr;
};
module.exports.discomfort = (arr) => {
  let disc = 0;
  for(let i = 0; i < arr.length-1; i++) {
    disc = Math.abs(arr[i]-arr[i+1]) > disc ? Math.abs(arr[i]-arr[i+1]): disc;
  }
  return disc;
}
