import * as tf from "@tensorflow/tfjs";

// what we had
// const checkySmalls = tf.tensor([
//   [[1], [0], [1], [0]],
//   [[0], [1], [0], [1]],
//   [[1], [0], [1], [0]],
// ]);

//what we can make it a 2d type
// const checkySmalls = tf.tensor([
//   [1, 0, 1, 0],
//   [0, 1, 0, 1],
//   [1, 0, 1, 0],
// ]);
// console.log(checkySmalls);

//zeros
// const image = tf.zeros([768, 1024, 1]);

// fill
// const fill = tf.fill([2, 2], 4).print();

// console.log(fill);
// const lil = tf.tensor([
//   [[1], [0]],
//   [[0], [1]],
// ]);

// lil.tile([100, 100, 1]).print();

//*
//*
// TENSOR TO IMAGE
//*
//*
const lil = tf.tensor([
  [[1], [0]],
  [[0], [1]],
]);

const bigMess = lil.tile([100, 100, 1]);
//tf.randomUniform([400, 400, 3]);

const myCanvas = document.getElementById("random");
tf.browser.toPixels(bigMess, myCanvas).then(() => {
  bigMess.dispose();
  console.log("Make sure we cleaned up", tf.memory().numTensors);
});
