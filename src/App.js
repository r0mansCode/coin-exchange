import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance'
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  background-color: darkblue;
  color: #cccccc;
`;

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.5,
        price: 9999.99
      },
      {
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 32.0,
        price: 299.99
      },
      {
        name: 'Ripple',
        ticker: 'XRP',
        balance: 1000,
        price: 0.2
      },
      {
        name: 'Tether',
        ticker: 'USDT',
        balance: 0,
        price: 1.0
      },
      {
        name: 'Cardano',
        ticker: 'ADA',
        balance: 500,
        price: 2.1
      }
    ]
  }

  handleBalanceVisibilityChange = () => {
    this.setState( function(oldState) {
      return {
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });
  }
  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map( function ( {ticker, name, price, balance} ) {
      let newPrice= price;
        if ( valueChangeTicker === ticker) {
          const randomPercentage = 0.995 + Math.random() * 0.01;
          newPrice = newPrice * randomPercentage;
        }
        return {
          ticker,
          name,
          price: newPrice,
          balance
        }
    });

    this.setState({ coinData: newCoinData });
  }

  render() {
    return (
      <Div>
          <ExchangeHeader/>
          <AccountBalance 
          amount={this.state.balance} 
          showBalance = {this.state.showBalance}
          handleBalanceVisibilityChange={this.handleBalanceVisibilityChange} />
          <CoinList
           coinData={this.state.coinData}
           showBalance = {this.state.showBalance} 
           handleRefresh={this.handleRefresh} />
      </Div>
    );
  }

 
}

export default App;
