import React from 'react'
import styled from 'styled-components'

const Button = ({ text }) => {
    return (
        <SButton>
            {text}
        </SButton>
    )
}

export default Button

export const SButton = styled.button`
    width: 80px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    border: none;
    background-color: #1b77f0;
    border-radius: 5px;
    padding: 10px;
    font-size: 15px;
`;