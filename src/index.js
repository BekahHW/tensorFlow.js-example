import * as tf from "@tensorflow/tfjs";

//our first tensor
const dataArray = [8, 6, 7, 5, 3, 0, 9];

const first = tf.tensor(dataArray);
console.log(first);

const first_again = tf.tensor1d(dataArray);

console.log("first_again:", first_again);
