import styled from 'styled-components';
import { Card, Container, Heading } from '../../components';

import Bheem from '../../images/man.png';

export default function Members() {
	return (
		<Container>
			<Heading>Our core members</Heading>
			<CoreBox>
				<Card imgSrc={Bheem} name='Bheem' position='Vice President' />
				<Card imgSrc={Bheem} name='Bheem' position='President' isSpecial />
				<Card imgSrc={Bheem} name='Bheem' position='Tech Lead' />
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
