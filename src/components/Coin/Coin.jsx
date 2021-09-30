import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
  border-bottom: 1px solid #cccccc;
  width: 25vh;
`;

 
const Button = styled.button`
    font-size: 1rem;
    margin: 0 1.5rem 0 1.5rem;
    background-color: rgb(20, 56, 97);
    color: #cccccc;
    border: 1px solid #cccccc;
    border-radius: 7px;
`;

export default function Coin(props) {

  const handleClick = (event) => {
  //Prevent the degault action of submitting the form (refreshing the page)
  event.preventDefault();

  props.handleRefresh(props.tickerId);

}

        return (
            <tr>
              <Td>{props.name}</Td>
              <Td>{props.ticker}</Td>
              <Td>${props.price}</Td>
              {props.showBalance ? <Td>{props.balance}</Td> : null}
              <Td>
                <form action="#" method="POST">
                <Button onClick={handleClick}>Refresh</Button>
                </form>
              </Td>
            </tr>
          );
        }

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}
