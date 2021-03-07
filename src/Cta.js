import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';

export default function Cta() {
  return (
    <Div>
      <div className='container'>
        <h1>Join Today</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text.
        </p>
        <Button />
      </div>
    </Div>
  );
}

const Div = styled.div`
  background-image: linear-gradient(90deg, #bf59c0, #7524dd);
  text-align: center;

  & h1 {
    color: white;
    font-family: 'Gothic A1', sans-serif;
    font-size: 4rem;
    margin-bottom: 4rem;
  }

  & p {
    color: white;
    font-family: 'JetBrains Mono', monospace;
    line-height: 2;
  }
  .container {
    max-width: 85rem;
    margin: 8rem auto;
    padding: 4rem;
  }
`;
