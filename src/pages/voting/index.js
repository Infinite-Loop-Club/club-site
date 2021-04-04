import { useState } from 'react';
import styled from 'styled-components';
import { Button, Footer, Heading } from 'components';
import TeamDetails from 'pages/about/TeamDetails';
import details from './nominees';

export default function Voting() {
	const [vote, setVote] = useState({
		president: '',
		vicePresident: '',
		secretary: '',
		youthRepresentative: ''
	});

	const handleClick = (key, value) => {
		setVote(old => {
			return { ...old, [key]: value };
		});
	};

	const handleSubmit = () => {
		console.log(vote);
	};

	return (
		<VotingContainer>
			<Heading gradient>Choose your Candidate!</Heading>
			{details.map(({ title, data }) => {
				return <TeamDetails title={title} data={data} handleClick={handleClick} vote={vote} />;
			})}
			<ButtonContainer>
				<SubmitButton
					disabled={
						vote.president === '' ||
						vote.vicePresident === '' ||
						vote.secretary === '' ||
						vote.youthRepresentative === ''
					}
					type='submit'
					onClick={handleSubmit}
				>
					Submit
				</SubmitButton>
			</ButtonContainer>
			<Footer />
		</VotingContainer>
	);
}

const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SubmitButton = styled(Button)`
	margin-top: 2rem;
`;

const VotingContainer = styled.div`
	margin: 8rem auto auto;
`;
