import React, { Component } from 'react'
import { allTransactions } from '../../Functions/web3'
// import web3 from 'web3'
// const provider = 'https://mainnet.infura.io/v3/3956a14355e64e05960416672e54b71f'
// const web3Provider = new web3.providers.HttpProvider(provider)
// const Web3 = new web3(web3Provider)

class Txn extends Component {
  state = { txns: [], blockNumber: null }
  getTransactions = async () => {
    const path = window.location.pathname
    const blockNum = path.split('/')[2]
    const resp = await allTransactions(blockNum)
    this.setState({
      txns: resp,
      blockNumber: blockNum
    })
  }

  componentDidMount () {
    this.getTransactions()
  }
  render () {
    return (
      <div>
        <h1 className='head'>
          Block Transactions for #{this.state.blockNumber}
        </h1>
        <div className='txns'>
          {this.state.txns.map((item, i) => {
            return (
              <div>
                <ul>
                  <li key={i}>
                    {i} :
                    <a
                      style={{ textDecoration: 'none', color: '#3498db' }}
                      href={`/reciept/${item}`}
                    >
                      {item}
                    </a>
                  </li>
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Txn
