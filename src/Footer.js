import styled from 'styled-components';

export default function Footer() {
	return (
		<Div>
			<AboutClub>
				<img src='./dummy.jpg' alt='logo' />
				<p>
					University College of Engg.,
					<br />
					Bharathidasan Institute of Tech.,
					<br />
					Anna University, Trichy.
					<br />
					<br />
					Trichy, 620024
				</p>
				<div>
					<h3>Behind the page</h3>
					<p>John Doe</p>
					<p>Craig Larman</p>
					<p>Liam Williams</p>
				</div>
			</AboutClub>
			<Copyright>Copyrights, 2021, Some Club of Anna University</Copyright>
		</Div>
	);
}
const Div = styled.div`
	background-color: #7524dd;
	margin-top: 5rem;
`;

const AboutClub = styled.div`
	padding: 6rem 0;
	color: #fff;
	max-width: 120rem;
	margin: auto;
	display: flex;
	justify-content: space-around;
`;

const Copyright = styled.div`
	background-color: #3f3d56;
	padding: 1.8rem;
	color: white;
	text-align: center;
`;
