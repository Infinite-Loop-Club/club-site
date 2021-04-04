import styled from 'styled-components';
import { Footer, Heading } from 'components';
import TeamDetails from 'pages/about/TeamDetails';
import details from './nominees';

export default function Voting() {
	return (
		<VotingContainer>
			<Heading gradient>Choose your Candidate!</Heading>
			{details.map(v => {
				return <TeamDetails title={v.title} data={v.data} />;
			})}
			<Footer />
		</VotingContainer>
	);
}

const VotingContainer = styled.div`
	margin: 8rem auto auto;
`;
