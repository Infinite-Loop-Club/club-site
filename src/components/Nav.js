import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../constants/theme';

export default function NavigationBar({ color }) {
	return (
		<Nav color={color}>
			<Link to='/'>Home</Link>
			<Link to='/'>Posts</Link>
			<Link to='/about-us'>About us</Link>
			<Link to='/register'>Register</Link>
		</Nav>
	);
}

const Nav = styled.div`
	color: white;
	display: flex;
	justify-content: flex-end;
	padding: 2.5rem 2rem;
	background-image: ${props =>
		props.color === 'transparent'
			? 'transparent'
			: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`};

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
			background-color: ${colors.tertiary};
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
