import styled from 'styled-components';
import { colors } from '../constants/theme';

export default styled.h1`
	background-image: linear-gradient(90deg, ${colors.primary} 20%, ${colors.secondary} 100%);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	line-height: 1.2em;
	text-align: center;
	padding: 0.5em;
`;
