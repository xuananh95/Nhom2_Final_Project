import React from 'react';
import styled from 'styled-components'

const Input = ({ label, value, onChange, inputType="text" }) => {

    return (
        <SInput>
            <label>{label}</label>
            <input type={inputType} value={value} onChange={onChange} />
        </SInput>
    )
}

export default Input

const SInput = styled.div`
    margin: 5px 0;
    label {
        color: black;
    }
    input{ 
        border: none;
        background-color: #4ca3f5;
        color: white;
        outline: none;
        padding: 15px;
        border-radius: 5px;
        width: 100%;
        margin: 5px;
    }
`;