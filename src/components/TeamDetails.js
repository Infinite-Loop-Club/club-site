import styled from 'styled-components';

import { AboutCard } from '.';
import { man1 } from '../images';

export default function TeamDetails({ teamName }) {
	return (
		<>
			<h2>{teamName}</h2>
			<TeamContainer>
				<AboutCard imgSrc={man1} />
				<AboutCard imgSrc={man1} />
				<AboutCard imgSrc={man1} />
			</TeamContainer>
		</>
	);
}

const TeamContainer = styled.div`
	padding: 1em;
	display: flex;
	flex-direction: column;
	h2 {
		font-size: 2.5rem;
		font-family: inherit;
	}
`;
