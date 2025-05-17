// // let n=5;
// let userInput = prompt("Please enter an integer:");
// let n = parseInt(userInput);
// let pattern =""
// for(let i=1;i<=n;i++){
//     for(let j=n;j>=i;j--){
//         pattern+=" "
//     }
//     for(j=1;j<i;j++){
//         pattern+="*"
//     }
//     for(j=1;j<=i;j++){
//         pattern+="*"
//     }
//     pattern += "\n";
// }
// console.log(pattern)

function invertedMountain(n) {
    let pattern =""
    for(let i=1;i<=n;i++){
      for(let j=n;j>=i;j--)
      {
        pattern += "*"
      }
      if (i < n) {
        pattern += "\n";
    }
    }
  return pattern
    
  }
  
  // You just need to implement the invertedMountain function
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const n = parseInt(input.trim(), 10);  // Get the number input
    const result = invertedMountain(n);  // Call our function
    process.stdout.write(result);  // Output the result
  });
  