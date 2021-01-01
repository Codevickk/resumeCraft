import styled from 'styled-components';
import { getYear } from '../../utils/date';

const ExperienceContainer = styled.div`
	margin-bottom: 35px;
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
	margin-bottom: 18px;
`;
const ExperienceDesc = styled.p`
	font-weight: 400;
	color: ${(props) => props.theme.gray.dark};
	letter-spacing: -0.03em;
	line-height: 24px;
	font-size: 14px;
`;

const Experience = (props) => {
	const { experience } = props;

	// function to render experience endDate
	const renderEndDate = () => {
		if (experience.endDate) {
			return Date.parse(experience.endDate) ? getYear(experience.endDate) : experience.endDate;
		} else {
			return 'endDate';
		}
	};

	return (
		<ExperienceContainer>
			<ExperienceTitle>
				<Employer>{experience.employer || 'Employer'} -</Employer> {experience.title || 'Job title'}
			</ExperienceTitle>
			<ExperienceDuration>
				{experience.startDate ? getYear(experience.startDate) : 'startDate'} - {renderEndDate()}
			</ExperienceDuration>
			<ExperienceDesc>{experience.description || 'The job description goes here'}</ExperienceDesc>
		</ExperienceContainer>
	);
};

export default Experience;
