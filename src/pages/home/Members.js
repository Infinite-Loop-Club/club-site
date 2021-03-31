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
				<Card imgSrc={man} name='Member1' position='Vice President' />
				<Card imgSrc={man} name='Member2' position='President' isSpecial />
				<Card imgSrc={man} name='Member3' position='Tech Lead' />
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

	@media (max-width: 800px) {
		& > div:nth-child(even) {
			order: -1;
		}
	}

	@media (max-width: 600px) {
		flex-direction: column;
		align-items: center;
	}
`;
