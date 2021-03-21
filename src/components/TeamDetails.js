import styled from 'styled-components';

import { AboutCard, Container } from '.';
import { man1 } from '../images';

export default function TeamDetails({ teamName, img }) {
	return (
		<Container>
			<Teamname>{teamName}</Teamname>
			<TeamContainer>
				<AboutCard imgSrc={man1} />
				<AboutCard imgSrc={man1} />
				<AboutCard imgSrc={man1} />
			</TeamContainer>
		</Container>
	);
}

const TeamContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin: 0 1rem;

	@media (max-width: 950px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 400px) {
		margin: 0;
	}
`;

const Teamname = styled.h2`
	font-size: 2.5rem;

	@media (max-width: 600px) {
		font-size: 2rem;
	}
`;
