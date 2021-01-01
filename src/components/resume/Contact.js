import styled from 'styled-components';

const ContactItem = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;
// const ContactIcon = styled.span`
// 	color: ${(props) => props.theme.primary.normal};
// 	font-size: 20px;
// 	margin-right: 10px;
// `;

const ContactText = styled.span`
	font-size: 12px;
	letter-spacing: -0.03em;
	color: ${(props) => props.theme.primary.light};
	margin-bottom: 4px;
	font-weight: 500;
`;

const Contact = (props) => {
	return (
		<ContactItem>
			<ContactText>{props.text}</ContactText>
		</ContactItem>
	);
};

export default Contact;
