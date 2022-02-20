const web3 = require('web3')
const provider = 'https://mainnet.infura.io/v3/3956a14355e64e05960416672e54b71f'
const web3Provider = new web3.providers.HttpProvider(provider)
const blockChain = new web3(web3Provider)

export async function allDetails (blockNumber) {
  let blockDetails = await blockChain.eth.getBlock(blockNumber)
  let miner, tranx, difficulty
  if (blockDetails.miner) {
    miner = blockDetails.miner
    tranx = blockDetails.transactions.length
    difficulty = blockDetails.totalDifficulty
  }

  return { blockNumber, miner, tranx, difficulty }
}

export async function allTransactions (blockNum) {
  const transactions = await blockChain.eth.getBlock(blockNum)
  console.log('transactions', transactions.transactions)
  return transactions.transactions
}

export async function minerDetails (address) {
  let minerBalance = await blockChain.eth.getBalance(address)
  minerBalance = await web3.utils.fromWei(minerBalance, 'ether')

  return { minerBalance }
}

export async function getReceipt (hash) {
  let receipt = await blockChain.eth.getTransaction(hash)
  return { receipt }
}

export async function blockData (blockNum) {
  let block = await blockChain.eth.getBlock(blockNum)

  return { block }
}
