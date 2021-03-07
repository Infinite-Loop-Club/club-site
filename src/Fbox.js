import styled from 'styled-components';

export default function Fbox(props) {
  return (
    <Container>
      <img alt='feat-img' src={props.imgSrc}></img>
      <div>
        <h3>{props.title}</h3>
        <p>{props.para}</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;
  place-items: center;

  &:nth-child(even) {
    img {
      grid-column: -1/-2;
      justify-self: flex-start;
    }

    div {
      grid-column: 1/2;
      grid-row: 1/2;
      text-align: right;
    }
  }

  & img {
    display: block;
    max-height: 25rem;
    justify-self: flex-end;
  }

  div {
    & h3 {
      font-family: 'Gothic A1', sans-serif;
      font-size: 2rem;
      margin-bottom: 1.2rem;
    }

    & p {
      font-family: 'JetBrains Mono', monospace;
      line-height: 2;
    }
  }
`;
