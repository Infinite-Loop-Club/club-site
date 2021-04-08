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
				<Card
					imgSrc='https://drive.google.com/uc?export=view&id=15NoSJaPEm5kKkHgj7Sfeic6wZfGQ9ll-'
					name='Mugundhan B'
					position='Vice President'
				/>
				<Card
					imgSrc='https://drive.google.com/uc?export=view&id=1mtIe1U88UpBuV8WpW9IqHeeJ0YeWqhH1'
					name='Kiruthika R'
					position='President'
					isSpecial
				/>
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

	@media (max-width: 1000px) {
		& > div:nth-child(even) {
			order: -1;
		}
	}

	@media (max-width: 600px) {
		flex-direction: column;
		align-items: center;
	}
`;
