import * as tf from "@tensorflow/tfjs";

//our first tensor
// const dataArray = [8, 6, 7, 5, 3, 0, 9];

// const first = tf.tensor(dataArray);
// console.log(first);

// const first_again = tf.tensor1d(dataArray);

// console.log("first_again:", first_again);

// defining type

const float32 = tf.tensor([1.1, 2.2, 3.3], null, "float32");

// console.log(float32);

//We specify here that this type is int32, but what happens if we don't specify? What do you think it will be?

const int32 = tf.tensor([1, 2, 3], null, "int32");
//console.log(int32);

//notice this is an inferred type
const boolean = tf.tensor([true, false, false], null);
//console.log(boolean);

// Guess what this will return
// Bc we specify, the Boolean values are ti 0 for false and 1 for true. So the variable data would look like[1, 0, 0]
const guess = tf.tensor([true, false, false], null, "int32");
//console.log(guess);

//What do you think about this one?
//Did you guess error? Nope. It's a float32 bc the input values get converted to corresponding Float 32, whilch looks like [1, 1.3445566, 0]
const last_one = tf.tensor([1, 1.3445566, false]);
// console.log(last_one);

//Let's do some application

const newArray = tf.tensor1d([8, 9, 0, 7, 7, 5]);

try {
  const nope = tf.tensor1d([[1], [2]]);
} catch (e) {
  console.log("That's a negative");
}
console.log("Rank:", newArray.rank);
console.log("size:", newArray.size);
console.log("dtype:", newArray.dtype);
