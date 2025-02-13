// - Create a function called `params`
//   which logs to the console the input parameters in separate lines
//   (can have multiple number of arguments)
// Example calls:
// - params('Peter', 'Jane');
// - params(3, 4, 5);
// - params();

function params(...params: any): void {
  console.log(params.join(" \n"));
}

params("Peter", "Jane");
