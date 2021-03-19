import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useFormik } from 'formik';

import { Button, Footer } from '../../components';
import { colors } from '../../constants/theme';
import male1 from '../../images/male-1.png';
import male2 from '../../images/male-2.png';
import male3 from '../../images/male-3.png';
import female1 from '../../images/female-1.png';
import female2 from '../../images/female-2.png';
import female3 from '../../images/female-3.png';
import { initialValues } from './initialValues';
import validationSchema from './validationSchema';

export default function RegisterForm() {
	const [male, setMale] = useState(false);
	const [female, setFemale] = useState(false);
	const [index, setIndex] = useState(0);
	const [values, setValues] = useState({
		name: '',
		registerNumber: '',
		email: '',
		phoneNumber: '',
		year: '',
		gender: '',
		dept: '',
		avatar: ''
	});

	const Avatars = {
		male: [male1, male2, male3],
		female: [female1, female2, female3]
	};

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: async event => {
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
		}
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

	const handleGender = e => {
		if (e.target.value === 'male') {
			setMale(true);
			setFemale(false);
		} else {
			setMale(false);
			setFemale(true);
		}
	};

	useEffect(() => {
		// hit the server to wake it up
		axios.get('/');
	}, []);

	return (
		<>
			<FormContainer>
				<h1>Registration</h1>
				<Form onSubmit={formik.handleSubmit}>
					<Box>
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
									<input
										type='radio'
										className='radio__group-input'
										id='male'
										name='gender'
										value='male'
										onClick={handleGender}
										onChange={handleChange}
									/>
									<label htmlFor='male' className='radio__group-label'>
										<span className='radio__group-button'></span>
										Male
									</label>
								</RadioGroup>
								<RadioGroup>
									<input
										type='radio'
										className='radio__group-input'
										id='female'
										name='gender'
										value='female'
										onClick={handleGender}
										onChange={handleChange}
									/>
									<label htmlFor='female' className='radio__group-label'>
										<span className='radio__group-button'></span>
										<p>Female</p>
									</label>
								</RadioGroup>
							</RadioContainer>
						</Field>
						<Field>
							{male ? (
								<>
									<label htmlFor='avatar'>Select your Avatar</label>
									<AvatarContainer>
										{Avatars.male.map((value, i) => {
											return (
												<Avatar
													key={i}
													src={value}
													alt='male'
													onClick={() => setIndex(i)}
													active={index === i}
												/>
											);
										})}
									</AvatarContainer>
								</>
							) : female ? (
								<>
									<label htmlFor='avatar'>Select your Avatar</label>
									<AvatarContainer>
										{Avatars.female.map((value, i) => {
											return (
												<Avatar
													key={i}
													src={value}
													alt='female'
													onClick={() => setIndex(i)}
													active={index === i}
												/>
											);
										})}
									</AvatarContainer>
								</>
							) : null}
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
								<option value='1' selected>
									1
								</option>
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
					</Box>
					<SubmitButton type='submit'>Submit</SubmitButton>
				</Form>
				<Rect3 />
				<Rect1 />
				<Rect2 />
				<MiddleRect />
			</FormContainer>
			<Footer />
		</>
	);
}
const Avatar = styled.img`
	width: 10rem;
	margin-right: 2rem;
	border-radius: 50%;
	background-image: ${props =>
		props.active
			? `linear-gradient(to right bottom, ${colors.primary}, ${colors.secondary})`
			: 'none'};

	&:hover {
		background-image: linear-gradient(to right bottom, ${colors.primary}, ${colors.secondary});
		cursor: pointer;
	}

	@media (max-width: 600px) {
		width: 8rem;
	}

	@media (max-width: 500px) {
		width: 6rem;
	}

	@media (max-width: 400px) {
		width: 5rem;
	}
`;

const AvatarContainer = styled.div`
	margin: 1rem 1rem 3rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const Box = styled.div`
	position: relative;
	min-width: 60rem;
	padding: 3rem 4rem;
	background-color: ${colors.white};
	border-radius: 3%;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);

	@media (max-width: 700px) {
		min-width: 100%;
		box-shadow: none;
	}
`;

const Dropdown = styled.select`
	width: 100%;
	font: inherit;
	font-size: 1.4rem;
	margin: 0.5rem auto 3rem auto;
	padding: 0.7rem 1.25rem;
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
	position: relative;
	margin: 4rem 0;
	padding: 4rem 0;
	overflow-x: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	z-index: 2;
`;

const Field = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Input = styled.input`
	width: 100%;
	font: inherit;
	font-size: 1.4rem;
	margin: 0.5rem auto 3rem auto;
	padding: 0.7rem 1.25rem;
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
const MiddleRect = styled.div`
	position: absolute;
	top: 48.2%;
	left: -6rem;
	background-color: #0048aa;
	width: 20rem;
	height: 1rem;
	transform: skew(0deg, -15deg);
	z-index: -1;

	@media (max-width: 1000px) {
		width: 16rem;
	}

	@media (max-width: 700px) {
		display: none;
	}
`;

const RadioContainer = styled.div`
	display: flex;
	flex-direction: row;

	@media (max-width: 400px) {
		flex-direction: column;
	}
`;

const SubmitButton = styled(Button)`
	margin-top: 2rem;
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

			display: flex;
			align-items: center;
			justify-content: center;
		}

		&-button {
			height: 2.5rem;
			width: 2.5rem;
			border: 5px solid ${colors.tertiary};
			border-radius: 50%;
			display: inline-block;
			position: relative;
			margin-right: 2rem;

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

const Rect1 = styled.div`
	position: absolute;
	top: 45%;
	left: -6rem;
	background-color: ${colors.tertiary};
	width: 20rem;
	height: 4rem;
	transform: skew(0deg, -15deg);
	z-index: -1;

	@media (max-width: 1000px) {
		width: 16rem;
	}

	@media (max-width: 700px) {
		display: none;
	}
`;

const Rect2 = styled.div`
	position: absolute;
	top: 48%;
	left: -6rem;
	background-color: #0295dd;
	width: 27.5rem;
	height: 4rem;
	transform: skew(0deg, -15deg);
	z-index: -1;

	@media (max-width: 1000px) {
		width: 20rem;
		top: 48.4%;
	}

	@media (max-width: 700px) {
		display: none;
	}
`;

const Rect3 = styled.div`
	position: absolute;
	top: 20%;
	right: -4.3%;
	background-color: ${colors.primary};
	width: 27.5rem;
	height: 4rem;
	transform: skew(0deg, -15deg);
	z-index: -1;

	@media (max-width: 1000px) {
		width: 20rem;
		top: 25.3%;
	}

	@media (max-width: 700px) {
		display: none;
	}
`;
