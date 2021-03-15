import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Button, Container, Footer, NavigationBar } from './components';

export default function RegisterForm() {
	const [values, setValues] = useState({
		name: '',
		registerNumber: '',
		email: '',
		phoneNumber: '',
		year: ''
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setValues(old => {
			return {
				...old,
				[name]: value
			};
		});
	};

	useEffect(() => {
		// hit the server to wake it up
		axios.get('/');
	}, []);

	const handleSubmit = async event => {
		event.preventDefault();
		console.log(values);
		try {
			await axios.post('/user/new', values);

			// registration successful - handle
			window.open('/', '_self');
		} catch (err) {
			// handle the error properly
			console.error(err);
		}
	};

	return (
		<>
			<Nav />
			<FormContainer>
				<h1>Registration</h1>
				<Box>
					<Form>
						<Field>
							<label htmlFor='regno'>Register Number</label>
							<Input id='regno' name='registerNumber' onChange={handleChange} required />
						</Field>
						<Field>
							<label htmlFor='name'>Name of the Student</label>
							<Input id='name' name='name' onChange={handleChange} required />
						</Field>
						<Field>
							<label htmlFor='email'>Email of the Student</label>
							<Input id='email' name='email' onChange={handleChange} required />
						</Field>
						<Field>
							<label htmlFor='phn_num'>Phone Number</label>
							<Input id='phn_num' name='phoneNumber' onChange={handleChange} required />
						</Field>
						<Field>
							<label htmlFor='year'>Year</label>
							<Dropdown name='year' onChange={handleChange} id='year'>
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
	min-width: 45rem;
	max-width: 50rem;
	padding: 3rem 4rem;
	border-radius: 3%;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
`;

const Dropdown = styled.select`
	font: inherit;
	font-size: 1.4rem;
	margin: 0.5rem auto 3rem auto;
	padding: 0.7rem 1.25rem;
	width: 30rem;
	border-radius: 0.5rem;
	border: 2px solid transparent;
	background-color: #f2f2f2;
	box-shadow: 1px 1px 10px rgba(117, 36, 221, 0.3);
	transition: all 0.2s;

	:focus {
		outline: none;
		color: #7524dd;
		border: 2px solid #7524dd;
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

const Input = styled.input`
	font: inherit;
	font-size: 1.4rem;
	margin: 0.5rem auto 3rem auto;
	padding: 0.7rem 1.25rem;
	width: 30rem;
	border-radius: 0.5rem;
	border: 2px solid transparent;
	background-color: #f2f2f2;
	box-shadow: 1px 1px 10px rgba(117, 36, 221, 0.3);
	transition: all 0.2s;

	:focus {
		outline: none;
		color: #7524dd;
		border: 2px solid #7524dd;
		box-shadow: 3px 3px 20px rgba(117, 36, 221, 0.3);
	}
`;

const Nav = styled(NavigationBar)`
	padding: 2.5rem;
`;

const SubmitButton = styled(Button)`
	margin-top: 2rem;
`;
