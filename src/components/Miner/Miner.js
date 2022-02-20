import { Component, React } from 'react'
import { minerDetails } from '../../Functions/web3'
import './Miner.css'

class Miner extends Component {
  state = { address: null, balance: null }
  async componentDidMount () {
    const path = window.location.pathname
    const address = path.split('/')[2]
    const { minerBalance } = await minerDetails(address)
    this.setState({
      address: address,
      balance: minerBalance
    })

    console.log('address', address)
  }
  render () {
    return (
      <div className='main'>
        <h1 className='header'>Miner Details</h1>

        <h3 className='list'>Miner Address : {this.state.address}</h3>
        <h3 className='list'>
          Address Balance : {this.state.balance}
          {' ETH'}
        </h3>
      </div>
    )
  }
}

export default Miner
