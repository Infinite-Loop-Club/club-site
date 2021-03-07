import React from 'react';
import styled from 'styled-components';

import Card from './components/Card';
import Bheem from './svg/Bheem.jpg';

export default function Members() {
  return (
    <div>
      <Head>Our core members</Head>
      <Corebox>
        <Card imgSrc={Bheem} Name='Bheem' position='Vice President'></Card>

        <Card imgSrc={Bheem} Name='Bheem' position='Vice President'></Card>

        <Card imgSrc={Bheem} Name='Bheem' position='Vice President'></Card>
      </Corebox>
    </div>
  );
}

const Corebox = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Head = styled.h1`
  background: -webkit-linear-gradient(45deg, #7524dd, #bf59c0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 5rem 2rem;
  font-weight: 700;
  font-size: 50px;
`;
