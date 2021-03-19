import styled from 'styled-components';
import { Container, Heading } from '../../components';
import Feature from './FeatureItem';

import meeting from '../../images/Team meeting.svg';
import team from '../../images/Project team.svg';
import developer from '../../images/Developer activity.svg';
import interview from '../../images/Job Interview.svg';

export default function Paget() {
	return (
		<Container>
			<Heading>What do we do?</Heading>
			<InnerContainer>
				<Feature
					title='Build a community'
					imgSrc={meeting}
					para='This is a community in which we share our interests in common, grow friendship bond so that everyone would feel comfortable in exploring and exposing themselves without any hesitation.'
				></Feature>

				<Feature
					title='Team building'
					imgSrc={team}
					para="We let you all unfurl your wings by working together, enabling you to understand how to take everyone's ideas in a team as well as cheering an inactive member to shed their fear and mingle with all."
				></Feature>

				<Feature
					title='Learn new things'
					imgSrc={developer}
					para="We all know life's all about learning and experiencing, here we keep you engaged in knowing new things which includes all fields ranging from art to tech."
				></Feature>

				<Feature
					title='Create opportunities'
					imgSrc={interview}
					para="There's a saying, 'If opportunity doesn't knock your door, build one'. That's what we students gonna do, support and guide you to make an attempt to every single opportunity either it be hackathon or any other technical competitions."
				></Feature>
			</InnerContainer>
		</Container>
	);
}

const InnerContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 8rem;
	margin: 3rem auto 8rem auto;

	max-width: 100rem;
`;
