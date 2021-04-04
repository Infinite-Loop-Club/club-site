import { Button } from 'components';
import { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import OtpInput from 'react-otp-input';
import { useHistory } from 'react-router';

export default function Login() {
	const [otp, setOtp] = useState(false);
	const [otpValue, setOtpValue] = useState('');
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

	const handleSubmit = e => {
		otp ? history.push({ pathname: '/voting' }) : setOtp(true);
		e.preventDefault();
	};

	return (
		<LoginContainer>
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
									<h2>Enter the Verification Code</h2>
									<Otp
										value={otpValue}
										onChange={handleChange}
										numInputs={6}
										separator={<span>-</span>}
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

							{/* disabled={isLoading} */}
							<SubmitButton type='submit'>{otp ? 'Submit' : 'Send OTP'}</SubmitButton>
						</LoginForm>
					)}
				</Formik>
			</Box>
		</LoginContainer>
	);
}

const Otp = styled(OtpInput)`
	margin: 1rem auto 0rem;

	& > input {
		width: 3rem !important;
		height: 3rem;
		margin: 0 1rem;
		font-size: 2rem;
		border-radius: 4px;
		border: 1px solid rgba(0, 0, 0, 0.3);
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

	@media screen and (max-width: 640px) {
		min-width: 100%;
		padding: 2rem 0.5rem;
		box-shadow: none;
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
	align-items: center;
	justify-content: center;
	height: 100vh;
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
	margin-top: 3rem;

	@media (max-width: 700px) {
		margin-top: 0rem;
	}
`;
