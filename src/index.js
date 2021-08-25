import * as tf from "@tensorflow/tfjs";

// const a = tf.tensor([0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 3]);
// // console.log(a);

// const b = tf.tensor([0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 3], "int32");
// // console.log(b);

// // convert to int
// const nope = tf.tensor([4], null, "float32");
// //console.log(nope)
// const yep = nope.asType("int32");
// //console.log(yep);
// console.log(tf.memory().numTensors);
// console.log(tf.memory().numBytes);
//***
//CLEANUP SECTION
//***

//Start at 0 tensors

// console.log("start", tf.memory().numTensors);

// let keeper, chaser, seeker, beater;

// //create tensors inside a tidy

// tf.tidy(() => {
//   keeper = tf.tensor([1, 2, 3]);
//   chaser = tf.tensor([1, 2, 3]);
//   seeker = tf.tensor([1, 2, 3]);
//   beater = tf.tensor([1, 2, 3]);
//   console.log("inside tidy", tf.memory().numTensors);

//   // let's protect one
//   tf.keep(keeper);
//   return chaser;
// });

// // Two down
// console.log("after tidy", tf.memory().numTensors);

// keeper.dispose();
//  chaser.dispose();
//  //You can also do it this way
// //tf.dispose(chaser);
// //how many now?
// console.log("END", tf.memory().numTensors);
// ***
// TENSORS COME HOME
// ***

// const tensorArray = [];
// for (let i = 0; i < 10; i++) {
//   tensorArray.push(tf.tensor([i, i, i]));
//   //   console.log(tensorArray);
// }

// // console.log(tensorArray[4]);
// tf.print(tensorArray[4]);

// tf.dispose(tensorArray[4]);
// // console.log(tensorArray);
// console.log("END", tf.memory().numTensors);

// ***
// RETRIEVING TENSOR DATA
// ***

// const one = tf.tensor([1, 2, 3]);
// const two = tf.tensor([13.23]);
// const three = tf.tensor([
//   [1, 2, 3],
//   [1, 2, 3],
// ]);
// //console.log("ArraySync", three.arraySync());
// console.log("dataSync", three.dataSync());

// ***
// TENSORS AND MATHEMATICS 60
// ***
const mat1 = [
  [1, 23, 83],
  [33, 12, 5],
  [7, 23, 61],
];

const mat2 = [
  [91, 82, 13],
  [15, 23, 62],
  [25, 66, 63],
];

tf.matMul(mat1, mat2).print();

//answer:
[
  [2511, 6089, 6668],
  [3308, 3312, 1488],
  [2507, 5129, 5360],
];
