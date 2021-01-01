import styled from 'styled-components';
import { P } from '../Text';

import './bootstrap-grid.min.css';

import { RiMapPinLine, RiMailUnreadLine } from 'react-icons/ri';
import { FiGlobe } from 'react-icons/fi';

const ResumeContainer = styled.div`
	width: 900px;
	padding: 84px 0px;
	background: ${(props) => props.theme.gray.lightest};
`;

const InnerContainer = styled.div`
	width: 750px;
	margin-left: auto;
	margin-right: auto;
`;

const Name = styled.h2`
	font-weight: bold;
	font-size: 22px;
	letter-spacing: -0.04em;
	color: #46464b;
`;

const Role = styled(P)`
margin-top: 2px;
font-size: 16px;
letter-spacing: -0.03em;
color: ${(props) => props.theme.gray.dark}
`;

const Summary = styled(P)`
letter-spacing: -0.02em;
font-size: 20px;
color: ${(props) => props.theme.gray.darker};
margin-top: 50px;
line-height: 1.38;
font-weight: 400;
`;

const ContactItem = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 18px;
`;
const ContactIcon = styled.span`
	color: ${(props) => props.theme.primary.normal};
	font-size: 30px;
	margin-right: 10px;
`;

const ContactText = styled.span`
	font-size: 16px;
	letter-spacing: -0.03em;
	color: ${(props) => props.theme.gray.dark};
	margin-bottom: 4px;
`;

const Resume = () => {
	return (
		<ResumeContainer>
			<InnerContainer>
				<div className="header row">
					<div className="col-7 basic-info">
						<Name>Adeniji Victor</Name>
						<Role>UX designer and frontend engineer</Role>
						<Summary>
							I am a disciplined and hardworking engineer who seeks to bridge the gap between design and
							development.
						</Summary>
					</div>
					<div className="col-4 offset-1 contact-info" style={{ marginTop: '5px' }}>
						<ContactItem>
							<ContactIcon>
								<RiMapPinLine />
							</ContactIcon>
							<ContactText>Oshodi, Lagos</ContactText>
						</ContactItem>
						<ContactItem>
							<ContactIcon>
								<RiMailUnreadLine />
							</ContactIcon>
							<ContactText>codevickk@gmail.com</ContactText>
						</ContactItem>
						<ContactItem>
							<ContactIcon>
								<FiGlobe />
							</ContactIcon>
							<ContactText>codevickk.dev</ContactText>
						</ContactItem>
					</div>
				</div>
			</InnerContainer>
		</ResumeContainer>
	);
};

export default Resume;
