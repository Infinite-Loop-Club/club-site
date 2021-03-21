import styled from 'styled-components';

import { Container } from '../../components';
import { man1 } from '../../images';
import AboutCard from './AboutCard';

export default function TeamDetails({ teamName, img }) {
	return (
		<Container>
			<Teamname>{teamName}</Teamname>
			<TeamContainer>
				<AboutCard imgSrc={man1} github='/' linkedin='/' mail='/' twitter='/' portfolio='/' />
				<AboutCard imgSrc={man1} github='/' mail='/' twitter='/' portfolio='/' />
				<AboutCard imgSrc={man1} linkedin='/' mail='/' twitter='/' />
			</TeamContainer>
		</Container>
	);
}

const TeamContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin: 0 1rem;

	@media (max-width: 1100px) {
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
