import React from 'react';
import styled from 'styled-components';
import code from './svg/Code Development _Isometric  1.svg';
import Button from './components/Button';

export default function Home() {
  return (
    <Header>
      <Nav>
        <a href='#someLink'>Home</a>
        <a href='#someLink'>Posts</a>
        <a href='#someLink'>About us</a>
        <a href='#someLink'>Contact us</a>
      </Nav>
      <Clubbox>
        <Clubdesc>
          <h1>Some Club</h1>
          <span>of Anna University Trichy</span>
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
  background-image: linear-gradient(90deg, #7524dd, #bf59c0);
`;

const Nav = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & a {
    font-family: 'JetBrains Mono', monospace;
    text-decoration: none;
    color: white;
    margin: 2rem;
  }
`;

const Clubbox = styled.div`
  display: flex;
  margin-top: 3rem;
  color: white;

  & h1 {
    font-family: 'Gothic A1', sans-serif;
    font-size: 4rem;
    margin-bottom: -1.5rem;
  }
  & span {
    font-size: 1.3rem;
  }

  p {
    margin: 2rem 0;
  }

  & img {
    width: 50%;
  }
`;

const Clubdesc = styled.div`
  position: relative;
  margin: 5rem 5rem;
`;
