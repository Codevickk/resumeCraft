import styled from 'styled-components';
import { P } from '../Text';

import './bootstrap-grid.min.css';

import Experience from './Experience';
import Skill from './Skill';
import Contact from './Contact';

const ResumeContainer = styled.div`
	margin-left: auto;
	margin-right: auto;
	width: 595px;
	padding: 60px 0px;
	border: 2px solid #f2eeff;
	background: white
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

const Wrapper = styled.div`margin-top: 45px;`;

const Title = styled.h3`
	font-weight: bold;
	letter-spacing: -0.03em;
	color: ${(props) => props.theme.primary.normal};
	font-size: 12px;
	text-transform: uppercase;
	margin-bottom: 30px;
`;

const Skills = styled.ul`list-style-type: none;`;

const NoContent = styled.div`color: ${(props) => props.theme.gray.normal};`;

const Resume = (props) => {
	const resume = props.resume;
	console.log(resume);
	return (
		<ResumeContainer>
			<InnerContainer>
				<div className="header row">
					<div className="col-7 basic-info">
						<Name>
							{resume.firstName || ' firstName'} {resume.lastName || 'lastName'}
						</Name>
						<Role>{resume.job || 'Enter your job title'}</Role>
						<Summary>
							{resume.summary ||
								'Enter a powerful summary to describe your overall experience and skills.'}
						</Summary>
					</div>

					<div className="col-4 offset-1 contact-info" style={{ marginTop: '5px' }}>
						<Contact 
							text={`${resume.city || 'City'}, ${resume.state || 'State'}`}
						/>
						<Contact text={resume.email || 'Your email'} />
						{resume.website ? <Contact text={resume.website} /> : null}
					</div>
				</div>

				<Wrapper>
					<div className="row">
						<div className="col-7 experiences">
							<Title>Experience</Title>
							{resume.experiences ? (
								resume.experiences.map((experience) => {
									return <Experience experience={experience} />;
								})
							) : (
								<NoContent>You haven't added any experience yet</NoContent>
							)}
						</div>

						<div className="col-4 offset-1 skills">
							<Title>Skills</Title>
							<div>
								<Skills>
									{resume.skills ? (
										resume.skills.map((skill) => <Skill skill={skill} />)
									) : (
										<NoContent>You haven't added any skill yet</NoContent>
									)}
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
