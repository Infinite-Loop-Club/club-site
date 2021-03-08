import styled from 'styled-components';
import Container from './components/Container';
import Fbox from './Fbox';
import job from './svg/Job Interview _Isometric 1.svg';
import TeamB from './svg/Team building _Two Color 1.svg';
import TeamM from './svg/Team meeting_Monochromatic 1.svg';
import Web from './svg/Web Developer_Monochromatic 1.svg';

export default function Paget() {
  return (
    <Container>
      <H1>What do we do?</H1>
      <InnerContainer>
        <Fbox
          title='Build a community'
          imgSrc={TeamM}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text."
        ></Fbox>

        <Fbox
          title='Team building'
          imgSrc={TeamB}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text."
        ></Fbox>

        <Fbox
          title='Learn new things'
          imgSrc={Web}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text."
        ></Fbox>

        <Fbox
          title='Create opportunities'
          imgSrc={job}
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text."
        ></Fbox>
      </InnerContainer>
    </Container>
  );
}

const H1 = styled.h1`
  background: -webkit-linear-gradient(45deg, #7524dd, #bf59c0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-bottom: 4rem;
`;

const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 6rem;
`;
