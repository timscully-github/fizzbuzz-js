var output = [];
var n = 1;

function fizzBuzz() {
    output.push(n);
    n++;
    if (n % 3 === 0){
      output.push("Fizz");
    }    
    console.log(output);
}
