import styled from 'styled-components';

import { Card, Heading, Footer, Container, AboutCard } from '../components';
import { man, man1 } from '../images';

export default function About() {
	return (
		<>
			<Container>
				<Heading gradient margin='huge'>
					About Us
				</Heading>
				<TeamContainer>
					<Card imgSrc={man} name='man' position='Vice President' />
					<AboutCard imgSrc={man1} />
				</TeamContainer>
			</Container>
			<Footer />
		</>
	);
}

const TeamContainer = styled.div`
	padding: 1em;
	display: flex;
	flex-direction: row;
	h2 {
		font-size: 2.5rem;
		font-family: inherit;
	}
`;
