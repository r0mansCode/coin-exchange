import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
    font-size: 2rem;
    text-align: center;
    padding: 1.5rem 0 1.5rem 5rem;
`;

const Balance = styled.div`
    min-width: 250px;
    margin: 0.5rem 0 0 2.5rem;
    font-size: 1.5rem;
    vertical-align: left;
    text-align: left;
    `;

const Button = styled.button`
    margin: 1.8px;
    `;

const BalanceToggleButton = styled(Button)`
    width: 150px;
`;

var formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export default function AccountBalance(props) {
    
    
        const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
        let content = '\u00A0';
        if (props.showBalance) {
            content = <>{ formatter.format(props.amount) }</>
        }
        const buttonClass = 'btn ' + (props.showBalance ? 'btn-warning' : 'btn-info');
        return (
            <>
                <Balance>{content}</Balance>
                <Section> 
                <BalanceToggleButton 
                    onClick={props.handleBalanceVisibilityChange}
                        className={buttonClass}>
                    {buttonText}
                </BalanceToggleButton>
                <Button className="btn btn-success"
                        onClick={props.handleBrrrr}>
                    <i className="fas fa-helicopter"></i>
                </Button>
                </Section>
                </>
            );
    }

  