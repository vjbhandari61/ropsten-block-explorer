import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Miner from '../App/miner'
import Transaction from '../App/transaction'
import Txn from '../App/txn'
import Home from '../App/home'
import Reciept from '../App/receipt'

class MyRouts extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/miners/:address' component={Miner} />
            <Route exact path='/txn/:blockNum' component={Txn} />
            <Route
              exact
              path='/transaction/:blockNum'
              component={Transaction}
            />
            <Route
              exact
              path={'/reciept/:transactionHash'}
              component={Reciept}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
export default MyRouts
