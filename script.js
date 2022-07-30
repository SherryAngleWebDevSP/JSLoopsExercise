// Exercise 1: Ignore Even

//for (let i = 1; i <= 99; i +=2) {
// console.log(i);
//}

// More Implementations
//for (let i = 0; i < 100; i++) {
//  if (i % 2 == 0) {
//    continue;
//  } else {
//    console.log(i);
//  }
//}
//for (let i = 1; i < 100; i++) {
//  if (i % 2 !== 0) {
//    console.log(i);
//  }
//}

//let i = 1;

//while (i < 100) {
//  if (i % 2 !== 0) {
//   console.log(i);
    
// }

//  i++;
//}
//let x = 1;

//do {
//  if (x % 2 !== 0) {
//    console.log(x);
//  }

//  x++
//} 
//while (x < 100);

//Exercise 2: FIZZBUZZ

//for (let i = 1; i <= 100; i++) {
//  if (i % 15 == 0) {
//    console.log(i, "FIZZBUZZ");
//  } else if (i % 5 == 0) {
//    console.log(i, "BUZZ");
//  } else if (i % 3 == 0) {
//    console.log(i, "FIZZ");
//  }
//}

//Exercise 3: Repeat with While and Do/While

let i = 1;

while (i <= 100) {
  let output = "";

  if (i % 3 == 0) {
  output += "FIZZ";
  } 
  if (i % 5 == 0) {
   output += "BUZZ";
  }

  console.log('${i} ${output}');

}