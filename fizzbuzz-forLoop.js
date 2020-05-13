var output = [];


function fizzBuzz() {

    for(var n = 1; n < 101; n++){

        if (n % 15 === 0){
          output.push("FizzBuzz");
        } else if (n % 5 === 0){
          output.push("Buzz");
        } else if (n % 3 === 0){
          output.push("Fizz");
        } else {
          output.push(n);
        }

    }
    console.log(output);
}

fizzBuzz();
