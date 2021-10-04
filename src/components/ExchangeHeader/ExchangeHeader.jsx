import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Img = styled.img`
    height: 8rem;
    pointer-events: none;
`;

const Header = styled.header`
    background-color: #282c34;
    min-height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: (10px + 2vmin);
    color: white;
`;

const H1 = styled.h1`
  font-size: 4rem;
`;  


export default class ExchangeHeader extends Component {
    render() {
        return (
               <Header>
                <Img src={logo} alt="React logo" />
                <H1>
                Coin exchange
                </H1>
                </Header> 
        )
    }
}
