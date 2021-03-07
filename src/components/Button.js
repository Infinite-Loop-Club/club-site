import styled from 'styled-components';

export default function Button() {
  return <Btn>REGISTER</Btn>;
}

const Btn = styled.button`
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.6rem;
  padding: 1rem 2rem;
  background-color: #3aceb2;
  color: white;
  outline: none;
  border: none;
  text-transform: uppercase;
  border-radius: 2rem;
  cursor: pointer;
`;
