import { Component, React } from 'react'
import { getReceipt } from '../../Functions/web3'

class Receipt extends Component {
  state = { txHash: null, receipt: {} }

  async componentDidMount () {
    const path = window.location.pathname
    const txnHash = path.split('/')[2]
    const { receipt } = await getReceipt(txnHash)
    this.setState({
      txHash: txnHash,
      receipt: receipt
    })
  }
  render () {
    return (
      <div>
        <h3 style={{ textAlign: 'left', margin: '50px' }}>
          Transaction {this.state.txHash}
        </h3>
        <div style={{ marginTop: '10px', padding: '10px' }}>
          {/* {this.state.receipt.map((item, i) => {
            return (
              <div>
                {' '} */}
          <p>Hash: {this.state.receipt.hash}</p>
          <br />
          <p style={{ padding: '10px' }}>Nonce: {this.state.receipt.nonce}</p>
          <br />
          <a
            href={`/transaction/${this.state.receipt.blockNumber}`}
            style={{
              padding: '10px',
              textDecoration: 'none',
              color: '#3498db'
            }}
          >
            BlockNumber: {this.state.receipt.blockNumber}
          </a>
          <br />
          <p>BlockHash: {this.state.receipt.blockHash}</p>
          <br />
          <p style={{ padding: '10px' }}>
            Transaction Index: {this.state.receipt.transactionIndex}
          </p>
          <br />
          <a
            href={`/miners/${this.state.receipt.from}`}
            style={{
              padding: '10px',
              textDecoration: 'none',
              color: '#3498db'
            }}
          >
            From: {this.state.receipt.from}
          </a>
          <br />
          <a
            href={`/miners/${this.state.receipt.to}`}
            style={{
              padding: '10px',
              marginTop: '20px',
              textDecoration: 'none',
              color: '#3498db'
            }}
          >
            To: {this.state.receipt.to}
          </a>
          <br />
          <p style={{ padding: '10px' }}>Value: {this.state.receipt.value} </p>
          <br />
          <p style={{ padding: '10px' }}>
            Gas Price: {this.state.receipt.gasPrice}
          </p>
          <br />
          <p style={{ padding: '10px' }}>Gas: {this.state.receipt.gas}</p>
          <br />
          <p style={{ padding: '10px' }}>Input: {this.state.receipt.input}</p>
          <br />
        </div>
        {/* )
          })}
        </div> */}
      </div>
    )
  }
}

export default Receipt
