import styled from 'styled-components';
import { Button, Container } from '../../components';
import { colors } from '../../constants/theme';

export default function Cta() {
	return (
		<Div>
			<Container>
				<h1>Join Today</h1>
				<p>
					What are you waiting for? Register now and we're sure you would cherish the entire journey
					with us.
				</p>
				<Button>Register</Button>
			</Container>
		</Div>
	);
}

const Div = styled.div`
	background-image: linear-gradient(90deg, ${colors.secondary}, ${colors.primary});
	text-align: center;
	padding: 0.5rem 0;
	color: ${colors.white};

	& p {
		margin: 1rem 0 3.5rem 0;
	}
`;
