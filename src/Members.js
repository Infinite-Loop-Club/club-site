import styled from 'styled-components';
import { Container } from './components';

import Card from './components/Card';
import Bheem from './svg/Bheem.jpg';

export default function Members() {
	return (
		<Container>
			<Head>Our core members</Head>
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
	justify-content: center;
	& > div {
		&:not(:last-child) {
			margin-right: 4rem;
		}
	}
`;

const Head = styled.h1`
	background: -webkit-linear-gradient(45deg, #7524dd, #bf59c0);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	text-align: center;
	margin-bottom: 3rem;
`;
