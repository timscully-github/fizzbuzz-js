var output = [];
var n = 1;

function fizzBuzz() {

    while(n <= 100){

        if (n % 15 === 0){
          output.push("FizzBuzz");
        } else if (n % 5 === 0){
          output.push("Buzz");
        } else if (n % 3 === 0){
          output.push("Fizz");
        } else {
          output.push(n);
        }
        n++;

    }
    console.log(output);
}

fizzBuzz();
