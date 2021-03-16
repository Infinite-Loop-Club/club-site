import styled from 'styled-components';
import { colors } from '../constants/theme';

export default function H1({ children, ...props }) {
	return <Heading {...props}>{children}</Heading>;
}

const Heading = styled.h1`
	background-image: linear-gradient(90deg, ${colors.primary} 20%, ${colors.secondary} 100%);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	text-align: center;
	padding: 0.5em;
	font-size: 4rem;
	font-family: inherit;
`;
