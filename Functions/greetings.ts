// - Create variable named `myName` and assign your name to it
// - Create a function called `greetings()` that greets its input parameter
//     - It prints a greeting message e.g. `Greetings Peter`
//     - Handle the case when no parameters are given by printing the
//       `Please provide a name to greet` message

const myName: string = "Q-Bo";

function greetings(nameTogreet?: string): void {
  if (!nameTogreet) {
    console.log("Please provide a name to greet");
    return;
  }
  console.log(`Greetings ${nameTogreet}`);
}

greetings(myName);
