import styled from 'styled-components';

export default function NavigationBar() {
	return (
		<Nav>
			<a href='#someLink'>Home</a>
			<a href='#someLink'>Posts</a>
			<a href='#someLink'>About us</a>
			<a href='#someLink'>Contact us</a>
		</Nav>
	);
}

const Nav = styled.div`
	color: white;
	display: flex;
	justify-content: flex-end;
	padding: 2.5rem 0;
	margin-bottom: -4rem;

	& a {
		display: inline-flex;
		text-decoration: none;
		position: relative;

		&:not(:last-child) {
			margin-right: 4rem;
		}

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%) scaleX(0);
			width: 4rem;
			height: 0.3rem;
			border-radius: 0.3rem;
			background-color: #3aceb2;
			opacity: 0;
			transition: all 0.3s;
		}

		&:hover {
			&::after {
				transform: translateX(-50%) scaleX(1);
				opacity: 1;
			}
		}
	}
`;
