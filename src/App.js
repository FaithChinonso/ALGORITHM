import logo from "./logo.svg";
import "./App.css";

function App() {
  function sumUpToN(n) {
    let total = 0;
    for (let i = 1; 1 <= n; i++) {
      total += i;
    }
    return total;
  }
  console.log(sumUpToN(6));

  let t1 = performance.now();
  sumUpToN(1000000000);
  let t2 = performance.now();
  console.log(`Time Elapsed: ${(t1 - t2) / 1000} seconds.`);

  function addUpToN(n) {
    return (n * (n + 1)) / 2;
  }
  console.log(addUpToN(6));

  let t3 = performance.now();
  addUpToN(1000000000);
  let t4 = performance.now();
  console.log(`Time Elapsed: ${(t3 - t4) / 1000} seconds.`);

  function countUpAndDown(n) {
    console.log(" Going Up!!");
    for (let i = 0; 1 < n; i++) {
      console.log(i);
    }
    console.log("At the Top, Going Down!!");
    for (let j = n - 1; j >= 0; j--) {
      console.log(j);
    }
    console.log(" Back Down!!");
  }
  function printAllPairs(n) {
    for (var i = 0; 1 < n; i++) {
      for (var j = 0; j < n; j++) {
        console.log(i, j);
      }
    }
  }
  function addUpp(arr) {
    let total = 0;
    for (let i = 1; 1 < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  //always takes up the same space no matter the length of the array because only two variables( (total, i are numbers) and no matter how big the number gets, the space still remains the same) are defined throughout and no new variables are created due to the size of the array
  //O(1) space that means we have constant space no matter the size of your array
  function double(arr) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
      newArr.push(2 * arr[i]);
    }
    return newArr;
  }
  //O(n + 2)space means it increases with the length of the array
  return <div className="App">App</div>;
}

export default App;
