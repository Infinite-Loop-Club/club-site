import styled from 'styled-components';
import { Card, Container, Heading } from 'components';
import { man } from 'images';

export default function Members() {
	return (
		<CardContainer>
			<Heading gradient margin='huge'>
				Our core members
			</Heading>
			<CoreBox>
				<Card imgSrc={man} name='Bheem' position='Vice President' />
				<Card imgSrc={man} name='Bheem' position='President' isSpecial />
				<Card imgSrc={man} name='Bheem' position='Tech Lead' />
			</CoreBox>
		</CardContainer>
	);
}

const CardContainer = styled(Container)`
	margin: 2rem auto;
`;

const CoreBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 3rem;

	@media (max-width: 693px) {
		& > div:nth-child(even) {
			order: -1;
		}
	}

	@media (max-width: 400px) {
		flex-direction: column;
		align-items: center;
	}
`;
