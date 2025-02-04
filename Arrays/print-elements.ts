//Create an array of numbers
//Write a function that prints out every element of an array
// each on a separate line

let arr: number[] = [1, 2, 3, 4, 5];

function printElements(): void {
  arr.forEach((element) => {
    console.log(element);
  });
}

printElements();
