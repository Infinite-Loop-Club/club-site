import styled from 'styled-components';

export default function H1({ children, ...props }) {
	return <Heading {...props}>{children}</Heading>;
}

const Heading = styled.h1`
	background-image: linear-gradient(90deg, rgba(117, 36, 221, 1) 20%, rgba(191, 89, 192, 1) 100%);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	text-align: center;
	padding: 0.5em;
	font-size: 4rem;
	font-family: inherit;
`;
