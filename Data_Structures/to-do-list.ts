// Add "Todos:" to the beginning of the todoText
// Add " - Clean the house" to the end of the todoText
// Add " - Vacuum the living room" to the end of the todoText applying an extra 3-space indentation

// Expected output:

// Todos:
//  - Buy groceries
//  - Clean the house
//     - Vacuum the living room

function toDo() {
  let todoText =
    "- Buy groceries\n- Clean the house\n   - Vacuum the living room";
  console.log("Todos:\n" + todoText);
}

toDo();
