import React from 'react';
import styled from 'styled-components';


export default function Button() {
    return (
        <div>
            <Btn>REGISTER</Btn>
        </div>
    )
}

const Btn=styled.button`
    margin-top:20px;
    width:120px;
    height:40px;
    font-size:16px;
    background-color:#3ACEB2;
    color:white;
    outline:none;
    border:none;
    border-radius:20px;
    cursor:pointer;
`;
