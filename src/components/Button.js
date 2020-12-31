import styled from 'styled-components';

export const Button = styled.button`
	border: none;
	background: ${(props) => (props.variant === 'link' ? 'none' : props.theme.primary.normal)};
	padding: 14px 25px;
	border-radius: 3px;
	color: ${(props) => (props.variant === 'link' ? props.theme.gray.normal : 'white')};
	font-size: 18px;
	font-weight: 500;
	letter-spacing: -0.02em;
	box-shadow: ${(props) => (props.variant === 'link' ? 'none' : ' 0px 8px 40px rgba(95, 48, 226, 0.1)')};
	cursor: pointer;
	transition: all .3s linear;

	&:hover {
		background: ${(props) => (props.variant === 'link' ? 'initial' : props.theme.primary.dark)};
	}
`;
