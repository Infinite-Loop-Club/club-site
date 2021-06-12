import styled from 'styled-components';
import { Card, Container, Heading } from 'components';

export default function Members() {
	return (
		<Container>
			<Heading gradient margin='huge'>
				Our core members
			</Heading>
			<CoreBox>
				<Card
					imgSrc='https://drive.google.com/uc?export=view&id=18uB2tXYtCFhBp-Kjreu118pjDx9TJQPm'
					name='Mugundhan B'
					position='Vice President'
				/>
				<Card
					imgSrc='https://drive.google.com/uc?export=view&id=1RVv4aHkOSPClM2uZPcQVuuvwKn1mHYxT'
					name='Kiruthika R'
					position='President'
					isSpecial
				/>
				<Card
					imgSrc='https://drive.google.com/uc?export=view&id=1qad0POI19F_zVjWrb60nHVvmusBv5kPK'
					name='Thirumurugan M'
					position='Secretary'
				/>
			</CoreBox>
		</Container>
	);
}

const CoreBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 3rem;

	@media only screen and (max-width: 1000px) {
		& > div:nth-child(even) {
			order: -1;
		}
	}

	@media only screen and (max-width: 600px) {
		flex-direction: column;
		align-items: center;
	}
`;
