import styled from 'styled-components';

export const FormGroup = styled.div`margin-bottom: 40px;`;

export const Label = styled.label`
	display: block;
	font-size: 18px;
	color: ${(props) => props.theme.gray.normal};
	font-weight: 500;
	letter-spacing: -0.02em;
	margin-bottom: 7px;
`;

export const Input = styled.input`
	padding: 18px 15px;
	font-size: 18px;
	color: ${(props) => props.theme.gray.darker};
	border: 2px solid ${(props) => props.theme.gray.lighter};
	border-radius: 3px;
	display: block;
	width: 100%;
	font-weight: 500;
	letter-spacing: -0.02em;

	&::placeholder {
		color: ${(props) => props.theme.gray.light};
	}

	&:focus {
		border-color: ${(props) => props.theme.primary.lightest};
		outline: 0;
		box-shadow: 0 0 5px 0.2rem rgba(127, 89, 232, 0.25);
	}
`;

export const TextArea = styled.textarea`
	padding: 18px 15px;
	font-size: 18px;
	color: ${(props) => props.theme.gray.darker};
	border: 2px solid ${(props) => props.theme.gray.lighter};
	border-radius: 3px;
	display: block;
	width: 100%;
	font-weight: 500;
	letter-spacing: -0.02em;

	&::placeholder {
		color: ${(props) => props.theme.gray.light};
	}

	&:focus {
		border-color: ${(props) => props.theme.primary.lightest};
		outline: 0;
		box-shadow: 0 0 5px 0.2rem rgba(127, 89, 232, 0.25);
	}
`;
