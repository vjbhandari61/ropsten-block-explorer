import { React, Component } from 'react'
import './Home.css'
import { allDetails } from '../../Functions/web3'
import web3 from 'web3'
const provider = 'https://mainnet.infura.io/v3/3956a14355e64e05960416672e54b71f'
const web3Provider = new web3.providers.HttpProvider(provider)
const Web3 = new web3(web3Provider)

let data = new Array(9)
let resp

class Home extends Component {
  state = {
    myArr: [],
    currentVal: null
  }
  ethBlock = async () => {
    let blockNumber = await Web3.eth.getBlockNumber()
    resp = await allDetails(blockNumber)
    try {
      if (
        resp.miner &&
        resp.tranx &&
        resp.blockNumber !== this.state.currentVal
      ) {
        if (!data.length) {
          data.push(resp)
          this.setState({
            myArr: data,
            currentVal: resp.blockNumber
          })
        } else {
          data.unshift(resp)
          if (data.length === 10) {
            data.pop()
          }
          this.setState({
            myArr: data,
            currentVal: resp.blockNumber
          })
        }
      }
    } catch (err) {
      console.log('err', err)
    }
  }

  componentDidMount () {
    setInterval(() => {
      this.ethBlock()
    }, 5000)
  }

  render () {
    return (
      <div>
        <div className='main'>
          <h2>BlockChain Information</h2>
          <p>Details about Blockchain Blocks</p>
        </div>

        <div className='container'>
          <div id='mainTable'>
            <ul>
              <li>Block Number</li>
              <li>Miner Address</li>
              <li>Transactions</li>
              <li>Total Difficulty</li>
            </ul>
          </div>
          <div>
            {data.map((item, i) => {
              return (
                <ul key={i}>
                  <li className='links'>
                    <a
                      key={i}
                      href={`/transaction/${item.blockNumber}`}
                      className='link'
                    >
                      {item.blockNumber}
                    </a>
                  </li>

                  <li className='links'>
                    <a key={i} href={`/miners/${item.miner}`} className='link'>
                      {item.miner}
                    </a>
                  </li>

                  <li className='links'>
                    <a
                      key={i}
                      href={`/txn/${item.blockNumber}`}
                      className='link'
                    >
                      {item.tranx}
                    </a>
                  </li>

                  <li className='links'>
                    <a className='link' href='#'>
                      {item.difficulty}
                    </a>
                  </li>
                </ul>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
