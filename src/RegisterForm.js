import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Button, Container, Footer, NavigationBar } from './components';

export default function RegisterForm() {
	const [values, setValues] = useState({});

	const handleChange = e => {
		const { name, value } = e.target;
		setValues(old => {
			return {
				...old,
				[name]: value
			};
		});
	};

	const handleSubmit = async () => {
		if (
			JSON.stringify({}) === JSON.stringify(values) ||
			values.email === '' ||
			values.password === '' ||
			!values.email ||
			!values.password
		) {
			console.log('error');
		}
		try {
			const res = await axios.post('/api/auth/login', values);
			if (res.data.auth) {
				// setData(res.data);
			} else {
				console.log('error');
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<Nav />
			<FormContainer>
				<Box>
					<Heading>Registration</Heading>
					<Form>
						<Field>
							<label htmlFor='regno'>Register Number</label>
							<Input id='regno' onChange={handleChange} />
						</Field>
						<Field>
							<label htmlFor='name'>Name of the Student</label>
							<Input id='name' />
						</Field>
						<Field>
							<label htmlFor='email'>Email of the Student</label>
							<Input id='email' />
						</Field>
						<Field>
							<label htmlFor='phn_num'>Phone Number</label>
							<Input id='phn_num' />
						</Field>
						<Field>
							<label htmlFor='year'>Year</label>
							<Dropdown name='year' id='year'>
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
								<option value='4'>4</option>
							</Dropdown>
						</Field>
					</Form>
				</Box>
				<SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
			</FormContainer>
			<Footer />
		</>
	);
}

const Box = styled.div`
	width: 45rem;
	padding: 1rem 2rem;
	border-radius: 3%;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
`;

const Dropdown = styled.select`
	font-family: inherit;
	margin: 1.75rem auto;
	padding: 1.25rem;
	width: 25rem;
	border-radius: 5%;
	border: none;
	background-color: #f2f2f2;
	box-shadow: 1px 1px 10px rgba(117, 36, 221, 0.3);
	transition: all 0.2s;

	:focus {
		outline: none;
		box-shadow: 3px 3px 20px rgba(117, 36, 221, 0.3);
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 1rem;
`;

const FormContainer = styled(Container)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Field = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Heading = styled.p`
	margin: 1rem;
	font-size: 3rem;
	font-weight: 700;
`;

const Input = styled.input`
	font-family: inherit;
	margin: 1.75rem auto;
	padding: 1.25rem;
	width: 25rem;
	border-radius: 5%;
	border: none;
	background-color: #f2f2f2;
	box-shadow: 1px 1px 10px rgba(117, 36, 221, 0.3);
	transition: all 0.2s;

	:focus {
		outline: none;
		box-shadow: 3px 3px 20px rgba(117, 36, 221, 0.3);
	}
`;

const Nav = styled(NavigationBar)`
	padding: 2.5rem;
`;

const SubmitButton = styled(Button)`
	margin-top: 2rem;
`;
