import React from 'react';
import styled from 'styled-components';

export default function Card(props) {
  return (
    <Div>
      <img src={props.imgSrc} alt='props.Name'></img>
      <h2>{props.Name}</h2>
      <h3>{props.position}</h3>
    </Div>
  );
}

const Div = styled.div`
  height: 550px;
  width: 440px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  & img {
    height: 346px;
    width: 341px;
    border-radius: 250px;
    margin-top: 3rem;
  }

  & h2 {
    font-family: 'Gothic A1', sans-serif;
    background: -webkit-linear-gradient(45deg, #7524dd, #bf59c0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & h3 {
    font-family: 'JetBrains Mono', monospace;
  }
`;
