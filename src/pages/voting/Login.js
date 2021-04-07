<<<<<<< HEAD
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import OtpInput from 'react-otp-input';
import { ToastContainer, toast } from 'react-toastify';

import { Button, Heading, LoadingToast } from 'components';
import { LoadingToastOptions } from 'components/LoadingToast';
=======
import { Button } from 'components';
import { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import OtpInput from 'react-otp-input';
import { useHistory } from 'react-router';
>>>>>>> e712dae... Login page designed

export default function Login() {
	const [otp, setOtp] = useState(false);
	const [otpValue, setOtpValue] = useState('');
<<<<<<< HEAD
	const [userID, setUserID] = useState('');
=======
>>>>>>> e712dae... Login page designed
	const history = useHistory();

	const initialValues = {
		registerNumber: ''
	};

	const validationSchema = Yup.object({
		registerNumber: Yup.number()
			.min(810000000000, 'Invalid Register Number')
			.max(810025999999, 'Invalid Register Number')
			.required('Required')
	});

	const handleChange = e => {
		setOtpValue(e);
	};

<<<<<<< HEAD
	const handleSubmit = async value => {
		try {
			toast(LoadingToast, LoadingToastOptions);
			const { data } = await axios.post('/vote/sendOtp', {
				registerNumber: value.registerNumber
			});
			toast.dismiss();
			if (data.done) {
				setUserID(data.userID);
				setOtp(true);
				toast.success('✔ Check your email ', {
					position: 'bottom-center',
					autoClose: 5000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined
				});
			}
		} catch (err) {
			toast.dismiss();
			if (err.response) {
				// Request made and server responded
				const { message } = err.response?.data;
				toast.error(message ?? 'Please try again later!');
			}
			console.log(err);
		}
	};

	const handleOTPSubmit = async () => {
		try {
			toast(LoadingToast, LoadingToastOptions);
			const { data } = await axios.post('/vote/verifyOtp', {
				userID,
				otp: otpValue
			});
			if (data.done) {
				history.push({
					pathname: '/vote',
					state: {
						token: data.token
					}
				});
			}
		} catch (err) {
			toast.dismiss();
			if (err.response) {
				// Request made and server responded
				const { message } = err.response?.data;
				toast.error(message ?? 'Please try again later!');
			}
			console.log(err);
		}
=======
	const handleSubmit = e => {
		otp ? history.push({ pathname: '/voting' }) : setOtp(true);
		e.preventDefault();
>>>>>>> e712dae... Login page designed
	};

	return (
		<LoginContainer>
<<<<<<< HEAD
			<Heading style={{ color: 'white', marginBottom: '1rem' }}>
				Board of Directors Election 2021
			</Heading>
=======
>>>>>>> e712dae... Login page designed
			<Box>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({ errors, touched }) => (
						<LoginForm>
							{otp ? (
								<>
<<<<<<< HEAD
									<OtpTitle>Enter the Verification Code</OtpTitle>
=======
									<h2>Enter the Verification Code</h2>
>>>>>>> e712dae... Login page designed
									<Otp
										value={otpValue}
										onChange={handleChange}
										numInputs={6}
										separator={<span>-</span>}
<<<<<<< HEAD
										isInputNum={true}
=======
>>>>>>> e712dae... Login page designed
									/>
								</>
							) : (
								<FieldContainer>
									<label htmlFor='registerNumber'>Register Number</label>
									<Input id='registerNumber' name='registerNumber' />
									{errors.registerNumber && touched.registerNumber ? (
										<Error>{errors.registerNumber}</Error>
									) : null}
								</FieldContainer>
							)}
<<<<<<< HEAD
							{!otp ? (
								<SubmitButton type='submit'>Send OTP</SubmitButton>
							) : (
								<SubmitButton
									type='button'
									disabled={otpValue.length !== 6}
									onClick={handleOTPSubmit}
								>
									Submit
								</SubmitButton>
							)}
=======

							{/* disabled={isLoading} */}
							<SubmitButton type='submit'>{otp ? 'Submit' : 'Send OTP'}</SubmitButton>
>>>>>>> e712dae... Login page designed
						</LoginForm>
					)}
				</Formik>
			</Box>
<<<<<<< HEAD
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
=======
>>>>>>> e712dae... Login page designed
		</LoginContainer>
	);
}

<<<<<<< HEAD
const OtpTitle = styled.h2`
	@media screen and (max-width: 450px) {
		font-size: 1.7rem;
	}
`;

=======
>>>>>>> e712dae... Login page designed
const Otp = styled(OtpInput)`
	margin: 1rem auto 0rem;

	& > input {
		width: 3rem !important;
		height: 3rem;
		margin: 0 1rem;
		font-size: 2rem;
		border-radius: 4px;
		border: 1px solid rgba(0, 0, 0, 0.3);
<<<<<<< HEAD
		box-shadow: ${props => `1px 1px 10px ${props.theme.primary}50`};

		@media screen and (max-width: 400px) {
			width: 2rem !important;
			height: 2rem;
		}
	}

	@media screen and (max-width: 400px) {
		margin: 1rem auto 1rem;
=======
>>>>>>> e712dae... Login page designed
	}
`;

const Box = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 40rem;
	padding: 3rem 4rem;
	background-color: ${props => props.theme.white};
	border-radius: 3%;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);

<<<<<<< HEAD
	@media screen and (max-width: 450px) {
		min-width: 90%;
		padding: 2rem 0.5rem;
=======
	@media screen and (max-width: 640px) {
		min-width: 100%;
		padding: 2rem 0.5rem;
		box-shadow: none;
>>>>>>> e712dae... Login page designed
	}
`;

const Error = styled.p`
	color: ${props => props.theme.tomato};
	font-size: 1.3rem;
`;

const FieldContainer = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Input = styled(Field)`
	font: inherit;
	font-size: 1.4rem;
	margin: 1rem 0;
	height: 3.2em;
	padding: 0.7rem 1.25rem;
	border-radius: 0.5rem;
	border: 2px solid transparent;
	box-shadow: ${props => `1px 1px 10px ${props.theme.primary}50`};
	transition: all 0.2s;

	:focus {
		outline: none;
		color: ${props => props.theme.primary};
		border: 2px solid ${props => props.theme.primary};
		box-shadow: ${props => `3px 3px 20px ${props.theme.primary}50`};
	}
`;

const LoginContainer = styled.div`
	display: flex;
<<<<<<< HEAD
	padding: 2em;
	align-items: center;
	flex-direction: column;
	gap: 2em;
	justify-content: center;
	min-height: 100vh;
=======
	align-items: center;
	justify-content: center;
	height: 100vh;
>>>>>>> e712dae... Login page designed
	background-image: linear-gradient(25deg, rgba(2, 130, 251, 1) 40%, rgba(2, 239, 81, 1) 100%);
`;

const LoginForm = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

const SubmitButton = styled(Button)`
	width: 50%;
<<<<<<< HEAD
	margin-top: 2rem;
=======
	margin-top: 3rem;

	@media (max-width: 700px) {
		margin-top: 0rem;
	}
>>>>>>> e712dae... Login page designed
`;
