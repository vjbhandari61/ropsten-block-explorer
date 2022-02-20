import { React, Component } from 'react'
import { blockData } from '../../Functions/web3'

class Transaction extends Component {
  state = { blockDetails: {} }
  async componentDidMount () {
    let blockNum = window.location.pathname
    blockNum = blockNum.split('/')[2]
    const { block } = await blockData(blockNum)
    this.setState({
      blockDetails: block
    })
  }
  render () {
    return (
      <div>
        <h3 style={{ padding: '10px', marginTop: '20px' }}>
          Block #{this.state.blockDetails.number}
        </h3>

        <p style={{ padding: '10px', marginTop: '20px' }}>
          Block Number: {this.state.blockDetails.number}
        </p>
        <p style={{ padding: '10px', marginTop: '20px' }}>
          Block Hash: {this.state.blockDetails.hash}
        </p>
        <p style={{ padding: '10px', marginTop: '20px' }}>
          Parent Hash: {this.state.blockDetails.parentHash}
        </p>
        <p style={{ padding: '10px', marginTop: '20px' }}>
          Nonce: {this.state.blockDetails.nonce}
        </p>
        <a
          href={`/miners/${this.state.blockDetails.miner}`}
          style={{ padding: '10px', marginTop: '20px' }}
        >
          Miner: {this.state.blockDetails.miner}
        </a>
        <p style={{ padding: '10px', marginTop: '20px' }}>
          Difficulty: {this.state.blockDetails.difficulty}
        </p>
        <p style={{ padding: '10px', marginTop: '20px' }}>
          Total Difficulty: {this.state.blockDetails.totalDifficulty}
        </p>
        <p style={{ padding: '10px', marginTop: '20px' }}>
          Size: {this.state.blockDetails.size}
        </p>
        <p style={{ padding: '10px', marginTop: '20px' }}>
          Time Stamp: {this.state.blockDetails.timestamp}
        </p>
      </div>
    )
  }
}

export default Transaction
