import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Footer, Heading } from 'components';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { PuffLoader } from 'react-spinners';

import TeamDetails from 'pages/about/TeamDetails';
import details from './nominees';
import { colors } from 'constants/theme';

export default function Voting() {
	const [vote, setVote] = useState({
		president: '',
		vicePresident: '',
		secretary: '',
		youthRepresentative: ''
	});

	const location = useLocation();
	const history = useHistory();

	const handleClick = (key, value) => {
		setVote(old => {
			return { ...old, [key]: value };
		});
	};

	const handleSubmit = async () => {
		try {
			toast(
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<PuffLoader color={colors.primary} loading={true} size={40} />
					<p style={{ marginLeft: '1rem' }}>Loading...</p>
				</div>,
				{
					autoClose: false,
					closeButton: false,
					closeOnClick: false,
					draggable: false
				}
			);
			const { data } = await axios.post('/vote/make', {
				token: location.state.token,
				...vote
			});
			if (data.done) {
				toast.dismiss();
				history.replace({
					...location,
					state: {
						done: true
					}
				});
			}
		} catch (err) {
			toast.dismiss();
			if (err.response) {
				// Request made and server responded
				toast.error(
					err.response.data
						? err.response.data.message
							? err.response.data.message
							: 'Please try again later !'
						: 'Please try again later !'
				);
				if (
					err.response.data &&
					err.response.data.message === 'Request timed out, please try again later'
				) {
					setTimeout(() => {
						history.push('/voting/login');
					}, 3000);
				}
			}
			console.log(err);
		}
	};

	useEffect(() => {
		if (!location.state) {
			history.push('/voting/login');
		} else if (location.state.done) {
			history.push({
				pathname: '/voting/success',
				state: {
					done: true
				}
			});
		} else if (!location.state.token) {
			history.push('/voting/login');
		}
	}, [location, history]);

	return (
		<VotingContainer>
			<Heading gradient>Choose your Candidate!</Heading>
			{details.map(({ title, data }, index) => {
				return (
					<TeamDetails
						key={index}
						title={title}
						data={data}
						handleClick={handleClick}
						vote={vote}
					/>
				);
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
			<ToastContainer
				position='bottom-center'
				autoClose={5000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
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
