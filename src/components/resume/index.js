import styled from 'styled-components';
import { P } from '../Text';

import './bootstrap-grid.min.css';

import { RiMapPinLine, RiMailUnreadLine } from 'react-icons/ri';
import { FiGlobe } from 'react-icons/fi';
import { BsCircleFill } from 'react-icons/bs';

const ResumeContainer = styled.div`
	margin-left: auto;
	margin-right: auto;
	width: 595px;
	padding: 60px 0px;
	background: ${(props) => props.theme.gray.lightest};
`;

const InnerContainer = styled.div`
	width: 485px;
	margin-left: auto;
	margin-right: auto;
`;

const Name = styled.h2`
	font-weight: bold;
	font-size: 20px;
	letter-spacing: -0.04em;
	color: #46464b;
`;

const Role = styled(P)`
margin-top: 2px;
font-size: 14px;
letter-spacing: -0.03em;
color: ${(props) => props.theme.gray.dark}
`;

const Summary = styled(P)`
letter-spacing: -0.02em;
font-size: 16px;
color: ${(props) => props.theme.gray.darker};
margin-top: 30px;
line-height: 1.38;
font-weight: 400;
`;

const ContactItem = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 8px;
`;
const ContactIcon = styled.span`
	color: ${(props) => props.theme.primary.normal};
	font-size: 20px;
	margin-right: 10px;
`;

const ContactText = styled.span`
	font-size: 12px;
	letter-spacing: -0.03em;
	color: ${(props) => props.theme.gray.dark};
	margin-bottom: 4px;
`;

const Wrapper = styled.div`margin-top: 45px;`;

const Title = styled.h3`
	font-weight: bold;
	letter-spacing: -0.03em;
	color: ${(props) => props.theme.primary.normal};
	font-size: 12px;
	text-transform: uppercase;
	margin-bottom: 30px;
`;

const Experience = styled.div`
	margin-bottom: 45px;
	&:last-child {
		margin-bottom: 0px;
	}
`;
const ExperienceTitle = styled.h4`
	letter-spacing: -0.03em;
	color: ${(props) => props.theme.gray.dark};
	font-size: 16px;
	margin-bottom: 7px;
	font-weight: 500;
`;
const Employer = styled.span`
	font-weight: 600;
	color: ${(props) => props.theme.gray.darkest};
`;
const ExperienceDuration = styled.h6`
	font-size: 12px;
	letter-spacing: -0.03em;
	color: ${(props) => props.theme.gray.normal};
	font-weight: 500;
	margin-bottom: 20px;
`;
const ExperienceDesc = styled.p`
	font-weight: 400;
	color: ${(props) => props.theme.gray.dark};
	letter-spacing: -0.03em;
	line-height: 24px;
	font-size: 14px;
`;

const Skills = styled.ul`list-style-type: none;`;

const Skill = styled.li`
	font-size: 12px;
	letter-spacing: -0.03em;
	color: ${(props) => props.theme.gray.dark};
	font-weight: 400;
	margin-bottom: 22px;
`;

const Marker = styled.span`
	font-size: 8px;
	color: ${(props) => props.theme.gray.darker};
	margin-right: 8px;
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
							<ContactText>Oshodi, Lagos</ContactText>
						</ContactItem>
						<ContactItem>
							<ContactText>codevickk@gmail.com</ContactText>
						</ContactItem>
						<ContactItem>
							<ContactText>codevickk.dev</ContactText>
						</ContactItem>
					</div>
				</div>

				<Wrapper>
					<div className="row">
						<div className="col-7 experience">
							<Title>Experience</Title>
							<Experience>
								<ExperienceTitle>
									<Employer>Shopify - </Employer> UX engineer
								</ExperienceTitle>
								<ExperienceDuration>2018 - Present</ExperienceDuration>
								<ExperienceDesc>
									Currently consulting for remote companies, designing SaaSproducts, creating design
									systems and helping with the implementation of the front-end components.
								</ExperienceDesc>
							</Experience>

							<Experience>
								<ExperienceTitle>
									<Employer>Consultancy - </Employer> UX designer
								</ExperienceTitle>
								<ExperienceDuration>2016 - 2018</ExperienceDuration>
								<ExperienceDesc>
									Shaping the future of commerce and entrepreneurship – building and advocating for
									inclusive and thoughtful experiences for over a million merchants across the globe.
								</ExperienceDesc>
							</Experience>
						</div>

						<div className="col-4 offset-1 skills">
							<Title>Skills</Title>
							<div>
								<Skills>
									<Skill>ReactJS</Skill>
									<Skill>UI design</Skill>
								</Skills>
							</div>
						</div>
					</div>
				</Wrapper>
			</InnerContainer>
		</ResumeContainer>
	);
};

export default Resume;
