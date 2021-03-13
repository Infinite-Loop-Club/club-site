import styled from 'styled-components';

export default function Button({ children, ...props }) {
	return <Btn {...props}>{children}</Btn>;
}

const Btn = styled.button`
	&,
	&:link {
		font-family: 'JetBrains Mono', monospace;
		font-size: 1.6rem;
		padding: 1rem 2rem;
		background-color: #3aceb2;
		color: #000;
		box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.3);
		outline: none;
		border: none;
		text-transform: uppercase;
		border-radius: 2rem;
		cursor: pointer;
		transition: all 0.3s;
	}

	&:hover {
		box-shadow: 0 0.4rem 1.1rem rgba(0, 0, 0, 0.3);
	}

	&:active {
		box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.3);
	}
`;
