var Web3 = require("web3");
var provider = "https://mainnet.infura.io/v3/3956a14355e64e05960416672e54b71f";
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);

// Getting the block number using Web3
web3.eth.getBlockNumber().then((result) => {
  console.log("Latest Ethereum Block is ", result);
});

// Function to get Miner address
async function miner() {
  var Web3 = require("web3");
  var provider =
    "https://mainnet.infura.io/v3/3956a14355e64e05960416672e54b71f";
  var web3Provider = new Web3.providers.HttpProvider(provider);
  var web3 = new Web3(web3Provider);

  let block = await web3.eth.getBlock(13209214);
  console.log("Miner Address : ", block.miner);
  let minerDetails = block.miner;
  return minerDetails;
}

// Function to get Number of Transactionss
async function transaction() {
  var Web3 = require("web3");
  var provider =
    "https://mainnet.infura.io/v3/3956a14355e64e05960416672e54b71f";
  var web3Provider = new Web3.providers.HttpProvider(provider);
  var web3 = new Web3(web3Provider);

  let block = await web3.eth.getBlock(13209214);
  let transactions = block.transactions;
  let numberOfTransaction = transactions.length;
  console.log("Number Of Transactions : ", numberOfTransaction);
  return numberOfTransaction;
}

// Function to get Total Difficulty of a Block
async function difficulty() {
  var Web3 = require("web3");
  var provider =
    "https://mainnet.infura.io/v3/3956a14355e64e05960416672e54b71f";
  var web3Provider = new Web3.providers.HttpProvider(provider);
  var web3 = new Web3(web3Provider);

  let block = await web3.eth.getBlock(13209214);
  const difficultyDetails = block.totalDifficulty;
  console.log("Total Difficulty : ", difficultyDetails);
  return difficultyDetails;
};


// Calling Miner Address
miner();

// Calling Number of Transactions
transaction();

// Calling Total Difficulty
difficulty();
