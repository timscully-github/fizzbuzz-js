var output = [];
var n = 1;

function fizzBuzz() {
    n++;
    if (n % 5 === 0){
      output.push("Buzz");
    } else if (n % 3 === 0){
      output.push("Fizz");
    } else {
      output.push(n);
    }
    console.log(output);
}
