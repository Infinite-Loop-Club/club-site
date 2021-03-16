import styled from 'styled-components';

import { Footer, NavigationBar } from './components';
import Card from './components/Card';
import man from './images/man.png';
import H1 from './components/H1';

export default function About() {
	return (
		<>
			<section>
				<NavigationBar></NavigationBar>
				<TitleContainer>
					<H1>About Us</H1>
				</TitleContainer>
				<TeamContainer>
					<h2>Management Team :</h2>
					<InnerContainer>
						<Card imgSrc={man} name='man' position='Vice President' />
						<Card imgSrc={man} name='man' position='President' />
						<Card imgSrc={man} name='man' position='Tech Lead' />
					</InnerContainer>
				</TeamContainer>
				<TeamContainer>
					<h2>Technical Team :</h2>
					<InnerContainer>
						<Card imgSrc={man} name='man' position='Vice President' />
						<Card imgSrc={man} name='man' position='President' />
						<Card imgSrc={man} name='man' position='Tech Lead' />
					</InnerContainer>
				</TeamContainer>
				<TeamContainer>
					<h2>Staff Team :</h2>
					<InnerContainer>
						<Card imgSrc={man} name='man' position='Vice President' />
						<Card imgSrc={man} name='man' position='President' />
						<Card imgSrc={man} name='man' position='Tech Lead' />
					</InnerContainer>
				</TeamContainer>
				<TeamContainer>
					<h2>External Affairs Team :</h2>
					<InnerContainer>
						<Card imgSrc={man} name='man' position='Vice President' />
						<Card imgSrc={man} name='man' position='President' />
						<Card imgSrc={man} name='man' position='Tech Lead' />
					</InnerContainer>
				</TeamContainer>
				<TeamContainer>
					<h2>Teaching Team :</h2>
					<InnerContainer>
						<Card imgSrc={man} name='man' position='Vice President' />
						<Card imgSrc={man} name='man' position='President' />
						<Card imgSrc={man} name='man' position='Tech Lead' />
					</InnerContainer>
				</TeamContainer>
			</section>
			<Footer />
		</>
	);
}

const TitleContainer = styled.div`
	text-align: center;
`;

const TeamContainer = styled.div`
	padding: 1em;
	h2 {
		font-size: 2.5rem;
		font-family: inherit;
	}
`;

const InnerContainer = styled.div`
	padding: 1em 0;
	display: flex;
	gap: 1em;
	flex-wrap: wrap;
	justify-content: space-around;
`;
