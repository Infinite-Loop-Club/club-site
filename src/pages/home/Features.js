import styled from 'styled-components';
import { Container } from '../../components';
import Feature from './FeatureItem';

import job from '../../images/Job Interview _Isometric 1.svg';
import TeamB from '../../images/Team building _Two Color 1.svg';
import TeamM from '../../images/Team meeting_Monochromatic 1.svg';
import Web from '../../images/Web Developer_Monochromatic 1.svg';

export default function Paget() {
	return (
		<Container>
			<H1>What do we do?</H1>
			<InnerContainer>
				<Feature
					title='Build a community'
					imgSrc={TeamM}
					para='This is a community in which we share our interests in common, grow friendship bond so that everyone would feel comfortable in exploring and exposing themselves without any hesitation.'
				></Feature>

				<Feature
					title='Team building'
					imgSrc={TeamB}
					para="We let you all unfurl your wings by working together, enabling you to understand how to take everyone's ideas in a team as well as cheering an inactive member to shed their fear and mingle with all."
				></Feature>

				<Feature
					title='Learn new things'
					imgSrc={Web}
					para="We all know life's all about learning and experiencing, here we keep you engaged in knowing new things which includes all fields ranging from art to tech."
				></Feature>

				<Feature
					title='Create opportunities'
					imgSrc={job}
					para="There's a saying, 'If opportunity doesn't knock your door, build one'. That's what we students gonna do, support and guide you to make an attempt to every single opportunity either it be hackathon or any other technical competitions."
				></Feature>
			</InnerContainer>
		</Container>
	);
}

const H1 = styled.h1`
	background: -webkit-linear-gradient(45deg, #7524dd, #bf59c0);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	text-align: center;
	margin-bottom: 4rem;
`;

const InnerContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 6rem;
`;
