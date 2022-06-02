import React from 'react';
import { SInput } from './styles';

const Input = ({ label, value, onChange, inputType="text", el="" }) => {

    return (
        <SInput>
            {el}
            <label>{label}</label>
            <input type={inputType} value={value} onChange={onChange} />
        </SInput>
    )
}

export default Input