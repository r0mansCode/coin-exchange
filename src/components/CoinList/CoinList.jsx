import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  margin: 50px auto 200px auto;
  display: inline-block;
  font-size: 1.4rem;
`;

export default function CoinList(props) {
    
        return (
            <Table className="table table-primary table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
                <th>Balance</th>
                <th>Actions</th>
              </tr>
            </thead>
          <tbody>
            {
              props.coinData.map( ({key, name, ticker, price, balance}) => 
                <Coin key={key} 
                      handleRefresh={props.handleRefresh}
                      handleTransaction={props.handleTransaction}
                      name={name} 
                      tickerId={key}
                      ticker={ticker}
                      showBalance={props.showBalance}
                      balance={balance} 
                      price={price} />
                )
            }
          </tbody>
          </Table>
        )
    }

