import styled from 'styled-components';
import { colors, fonts } from '../constants/theme';

export default function Button({ children, ...props }) {
	return <Btn {...props}>{children}</Btn>;
}

const Btn = styled.button`
	&,
	&:link {
		font-family: ${fonts.monospace};
		font-size: 1.6rem;
		padding: 1rem 2rem;
		background-color: ${colors.black};
		color: ${colors.white};
		box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.3);
		outline: none;
		border: none;
		text-transform: uppercase;
		border-radius: 2rem;
		cursor: pointer;
		transition: all 0.3s;
	}

	&::after {
		content: '';
		display: inline-block;
		width: 100%;
		height: 100%;
		border-radius: 100px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		transition: all 0.4s;
	}

	&:hover {
		box-shadow: 0 0.4rem 1.1rem rgba(255, 255, 255, 0.9);
		transform: translateY(-0.3em);
	}

	&:active {
		box-shadow: 0 0.2rem 0.6rem rgba(255, 255, 255, 0.3);
	}
`;
