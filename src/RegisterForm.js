import styled from 'styled-components';
import { Button, Container, Footer, NavigationBar } from './components';

export default function RegisterForm() {
	return (
		<>
			<NavigationBar />
			<FormContainer>
				<Form>
					<Field>
						<label>Register Number</label>
						<input />
					</Field>
					<Field>
						<label>Name of the Student</label>
						<input />
					</Field>

					<Field>
						<label>Email of the Student</label>
						<input />
					</Field>

					<Field>
						<label>Phone Number</label>
						<input />
					</Field>
					<Field>
						<label>Year</label>
						<input />
					</Field>
					<SubmitButton>SUBMIT</SubmitButton>
				</Form>
			</FormContainer>
			<Footer />
		</>
	);
}

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const FormContainer = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Field = styled.div`
	display: flex;
	flex-direction: column;
`;

const SubmitButton = styled(Button)`
	margin: 2rem;
`;
