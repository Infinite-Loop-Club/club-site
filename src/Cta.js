import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import Container from './components/Container';

export default function Cta() {
  return (
    <Div>
      <Container>
        <h1>Join Today</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text.
        </p>
        <Button />
      </Container>
    </Div>
  );
}

const Div = styled.div`
  background-image: linear-gradient(90deg, #bf59c0, #7524dd);
  text-align: center;
  padding: 0.5rem 0;
  color: white;

  & p {
    margin: 1rem 0 3.5rem 0;
  }
`;
