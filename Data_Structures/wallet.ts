type Wallet = {
  ownerName: string;
  walletId: number;
  balance: number;
};

const wallets: Wallet[] = [
  { ownerName: "Alice", walletId: 1001, balance: 1500.75 },
  { ownerName: "Bob", walletId: 1002, balance: 3200.5 },
  { ownerName: "Charlie", walletId: 1003, balance: 785.25 },
];

// Create a function that returns the owner's name and balance of a wallet from the list
// getWalletInfo(wallets, 1001);
// should return: ['Alice', 1500.75]
// If there's no wallet with that ID, then return null

function getWalletInfo(
  walletList: Wallet[],
  id: number
): [string, number] | null {
  for (const wallet of walletList) {
    if (wallet.walletId === id) {
      return [wallet.ownerName, wallet.balance];
    }
  }
  return null;
}

console.log(getWalletInfo(wallets, 1001));

// Create a function that transfers funds between wallets
// It should have four parameters:
//  - the list of wallets
//  - from walletId
//  - to walletId
//  - amount of money to transfer
//
// Print "Wallet <walletId> not found" to the console if any wallet IDs don't exist
// (replace <walletId> with the missing ID)
//
// The function should modify the original `wallets` array directly
//
// Calling transferFunds(wallets, 1002, 1003, 200.0); should update the wallets to:
//
// [
//   { ownerName: 'Alice', walletId: 1001, balance: 1500.75 },
//   { ownerName: 'Bob', walletId: 1002, balance: 3000.5 },
//   { ownerName: 'Charlie', walletId: 1003, balance: 985.25 }
// ]

function transferFunds(
  walletList: Wallet[],
  senderId: number,
  receiverId: number,
  amount: number
): void {
  const sender = walletList.find((wallet) => wallet.walletId === senderId);
  const receiver = walletList.find((wallet) => wallet.walletId === receiverId);

  if (!sender) {
    console.log(`Wallet ID ${senderId} not found!`);
    return;
  }
  if (!receiver) {
    console.log(`Wallet ID ${receiverId} not found!`);
    return;
  }

  if (sender.balance > amount) {
    sender.balance -= amount;
    receiver.balance += amount;
  } else {
    console.log("Insufficient funds!");
  }
}

transferFunds(wallets, 1002, 1003, 200.0);
console.log(wallets);
