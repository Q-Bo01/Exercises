// We are going to represent a toolbox with an array of strings.
// Create an array with the following values:
//   hammer, screwdriver, wrench, pliers, tape measure
// Assign the type string[] to the array
// Create a bit of code that prints out the answers to the following questions
// by printing out "yes" or "no"
//   - do we have a wrench in the toolbox?
//   - do we have a drill in the toolbox?

// Expected output:
//
// yes
// no

function toolbox() {
  const toolBox: string[] = [
    "hammer",
    "screwdriver",
    "wrench",
    "pliers",
    "tape measure",
  ];

  if (toolBox.includes("wrench")) {
    console.log("yes");
  } else {
    console.log("no");
  }

  if (toolBox.includes("drill")) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

toolbox();
