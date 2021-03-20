import styled from 'styled-components';
import { Card, Container, Heading } from '../../components';

import { man } from '../../images';

export default function Members() {
	return (
		<Container>
			<Heading gradient margin='huge'>
				Our core members
			</Heading>
			<CoreBox>
				<Card imgSrc={man} name='Bheem' position='Vice President' />
				<Card imgSrc={man} name='Bheem' position='President' isSpecial />
				<Card imgSrc={man} name='Bheem' position='Tech Lead' />
			</CoreBox>
		</Container>
	);
}

const CoreBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 3rem;

	@media (max-width: 800px) {
		& > div:nth-child(even) {
			order: -1;
			width: 100%;
		}
	}
`;
