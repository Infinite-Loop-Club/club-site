import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Div>
      <Abtclub>
        <img src='./dummy.jpg' alt='logo' />
        <p>
          University College of Engg.,
          <br />
          Bharathidasan Institute of Tech.,
          <br />
          Anna University, Trichy.
          <br />
          <br />
          Trichy, 620024
        </p>
        <div>
          <h3>Behind the page</h3>
          <p>John Doe</p>
          <p>Craig Larman</p>
          <p>Liam Williams</p>
        </div>
      </Abtclub>
      <Cpyright>
        <p>Copyrights, 2021, Some Club of Anna University</p>
      </Cpyright>
    </Div>
  );
}
const Div = styled.div`
  background-color: #7524dd;
  margin: 5rem 0;
`;

const Abtclub = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 6rem 0;

  & p {
    color: white;
    font-family: 'JetBrains Mono', monospace;
  }
  & h3 {
    color: white;
    font-family: 'Gothic A1', sans-serif;
  }
`;

const Cpyright = styled.div`
  background-color: #3f3d56;
  height: 3rem;
  color: white;
  font-family: 'JetBrains Mono', monospace;
  text-align: center;
  padding-top: 3px;
`;
