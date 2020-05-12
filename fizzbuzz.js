var output = [];
var n = 1;

function fizzBuzz() {
    n++;
    if (n % 3 === 0){
      output.push("Fizz");
    } else {
      output.push(n);
    }
    console.log(output);
}
