import React from 'react';
import styled from 'styled-components';
import code from './svg/Code Development _Isometric  1.svg';
import Button from './components/Button';

export default function Home() {
  return (
    <Header>
      <Nav>
        <a href=''>Home</a>
        <a href=''>Posts</a>
        <a href=''>About us</a>
        <a href=''>Contact us</a>
      </Nav>
      <Clubbox>
        <Clubdesc>
          <h1>Some Club</h1>
          <span>of Anna University Trichy</span>
          <br></br>
          <br></br>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text.
          </p>

          <Button />
        </Clubdesc>
        <img src={code} alt='Code development'></img>
      </Clubbox>
    </Header>
  );
}

const Header = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(90deg, #7524dd, #bf59c0);
`;

const Nav = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & a {
    text-decoration: none;
    color: white;
    margin: 2rem;
    font-family: 'Gothic A1', sans-serif;
  }
`;

const Clubbox = styled.div`
  display: flex;
  margin-top: 3rem;

  & h1 {
    font-family: 'Gothic A1', sans-serif;
    color: white;
    font-size: 4rem;
    margin-bottom: 0.5rem;
  }
  & span {
    color: white;
    font-family: 'JetBrains Mono', Monospace;
    font-size: 14px;
  }
  & p {
    color: white;
    font-family: 'JetBrains Mono', Monospace;
    font-size: 18px;
  }

  & img {
    width: 50%;
  }
`;

const Clubdesc = styled.div`
  position: relative;
  margin: 5rem 5rem;
`;
