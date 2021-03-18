import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Button, Container, Footer } from '../components';
import { colors } from '../constants/theme';

export default function RegisterForm() {
	const [values, setValues] = useState({
		name: '',
		registerNumber: '',
		email: '',
		phoneNumber: '',
		year: '',
		gender: ''
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
			console.log(err.response); // {status = HTTP STATUS CODE, data: Defined data {message, error}}
		}
	};

	return (
		<>
			<FormContainer>
				<Rect1 />
				<MiddleRect />
				<Rect2 />
				<Rect3 />
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
						<Field style={{ marginBottom: '1rem' }}>
							<label htmlFor='gender'>Gender</label>
							<RadioContainer>
								<RadioGroup>
									<input type='radio' class='radio__group-input' id='small' name='size' />
									<label for='small' class='radio__group-label'>
										<span class='radio__group-button'></span>
										Male
									</label>
								</RadioGroup>
								<RadioGroup>
									<input type='radio' class='radio__group-input' id='large' name='size' />
									<label for='large' class='radio__group-label'>
										<span class='radio__group-button'></span>
										Female
									</label>
								</RadioGroup>
							</RadioContainer>
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
						<Field>
							<label htmlFor='dept'>Department</label>
							<Dropdown name='dept' onChange={handleChange} id='dept'>
								<option value='CSE' selected>
									CSE
								</option>
								<option value='IT'>IT</option>
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

const Rect1 = styled.div`
	position: absolute;
	top: 45%;
	left: -6rem;
	background-color: ${colors.tertiary};
	width: 20rem;
	height: 4rem;
	transform: skew(0deg, -15deg);

	
`;

const MiddleRect = styled.div`
	position: absolute;
	top: 48.4%;
	left: -6rem;
	background-color: #0048aa;
	width: 20rem;
	height: 2rem;
	transform: skew(0deg, -15deg);
`;

const Rect2 = styled.div`
	position: absolute;
	top: 48%;
	left: -6rem;
	background-color: #0295dd;
	width: 27.5rem;
	height: 4rem;
	transform: skew(0deg, -15deg);
`;

const Rect3 = styled.div`
	position: absolute;
	top: 20%;
	right: -4.3%;
	background-color: #0295dd;
	width: 27.5rem;
	height: 4rem;
	transform: skew(0deg, -15deg);
`;

const RadioGroup = styled.div`
	width: 49%;
	display: flex;
	flex-direction: row;
	margin: 0.75rem;

	.radio__group {
		&-input {
			display: none;
		}

		&-label {
			font-size: 1.6rem;
			cursor: pointer;
			position: relative;
			padding-left: 4.5rem;
		}

		&-button {
			height: 2.5rem;
			width: 2.5rem;
			border: 5px solid ${colors.tertiary};
			border-radius: 50%;
			display: inline-block;
			position: absolute;
			left: 0;
			top: 0;

			&::after {
				content: '';
				display: block;
				height: 0.85rem;
				width: 0.85rem;
				border-radius: 50%;
				position: absolute;
				top: 50%;
				left: 50%;
				-webkit-transform: translate(-50%, -50%);
				transform: translate(-50%, -50%);
				background-color: ${colors.tertiary};
				opacity: 0;
				-webkit-transition: opacity 0.2s;
				transition: opacity 0.2s;
			}
		}
	}

	.radio__group-input:checked ~ .radio__group-label .radio__group-button::after {
		opacity: 1;
	}
`;

const RadioContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const Box = styled.div`
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
		color: ${colors.primary};
		border: 2px solid ${colors.primary};
		box-shadow: 3px 3px 20px rgba(117, 36, 221, 0.3);
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem;
`;

const FormContainer = styled.div`
	margin: 8rem 0;
	position: relative;
	overflow-x: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Field = styled.div`
	width: 80%;
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
	background-color: ${colors.grey};
	box-shadow: 1px 1px 10px rgba(117, 36, 221, 0.3);
	transition: all 0.2s;

	:focus {
		outline: none;
		color: ${colors.primary};
		border: 2px solid ${colors.primary};
		box-shadow: 3px 3px 20px rgba(117, 36, 221, 0.3);
	}
`;

const SubmitButton = styled(Button)`
	margin-top: 2rem;
`;
