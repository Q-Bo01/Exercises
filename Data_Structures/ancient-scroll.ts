// The ancient script is scrambled!
// Your job is to decode the "encryptedMessage" by using the "decoder" object
// Assemble the fragments into the "decodedText" variable

function decipherMessage() {
  let decodedText = "";
  const encryptedMessage: number[] = [
    5, 13, 14, 13, 8, 13, 42, 13, 6, 13, 99, 13,
  ];

  const decoder: Record<number, string> = {
    8: "hidden deep within the ruins.",
    99: "Revealing secrets of the past.",
    42: "Unlock the mystery,",
    14: "Legends speak of an artifact,",
    5: "Ancient scholars say: ",
    13: "\n",
    6: "only the worthy shall find it.",
  };

  for (let i = 0; i < encryptedMessage.length; i++) {
    decodedText += decoder[encryptedMessage[i]];
  }

  console.log(decodedText);
}

decipherMessage();
