import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;

const Button = styled.button`
    font-size: 1.4rem;
    margin: 1.5rem 0 1.5rem 5rem;
    background-color: rgb(20, 56, 97);
    color: #cccccc;
    border: 1px solid #cccccc;
    border-radius: 7px;
`;



export default function AccountBalance(props) {
    
    
        const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
        let content = null;
        let btnHelicopterMoney = null;
        if ( props.showBalance ) {
            content = <>Balance ${props.amount}</>;
        btnHelicopterMoney = <Button onClick = {props.handleHelicopter}>Add Helicopter Money</Button>;
        }
        return (
            <Section>
             {content} 
             <Button onClick={props.handleBalanceVisibilityChange}>{buttonText}</Button>
             {btnHelicopterMoney}  
            </Section>
        );
    }

  