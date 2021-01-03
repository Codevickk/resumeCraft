import styled from 'styled-components';
import breakpoints from '../breakpoints';

export const H1 = styled.h1`
	font-size: 26px;
	color: ${(props) => props.theme.gray.darkest};
	letter-spacing: -0.04em;
	font-weight: bold;
`;

export const H2 = styled.h2`
	font-size: 24px;
	color: ${(props) => props.theme.gray.darkest};
	letter-spacing: -0.04em;
	font-weight: bold;
`;

export const P = styled.p`
	color: ${(props) => props.theme.gray.normal};
	font-weight: 400;
	letter-spacing: -0.5px;
	line-height: 26px;
	font-size: 16px;

	@media only screen and ${breakpoints.device.tablet} {
		font-size: 18px;
	}
`;

// text to Show the current step in creating a resume
export const StepIndicator = styled.p`
	color: ${(props) => props.theme.gray.normal};
	font-weight: 500;
	letter-spacing: -0.02em;
	font-size: 16px;
`;
