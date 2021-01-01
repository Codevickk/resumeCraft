import styled from 'styled-components';
import { Fragment } from 'react';
import { P } from '../../Text';
import { BsTrash } from 'react-icons/bs';

import { getYear } from '../../../utils/date';

const ExperienceContainer = styled.div`
	padding: 25px 20px;
	border: 1px solid ${(props) => props.theme.gray.lighter};
	border-radius: 3px;
	margin-bottom: 10px;
`;

const ExperienceHeader = styled.div`
	display: flex;
	align-items: center;
`;

const ExperienceDesc = styled.div``;

const JobTitle = styled(P)`
    color: ${(props) => props.theme.gray.darkest};
    font-weight: 500;
    margin-bottom: 3px;
`;

const JobDuration = styled(P)`
font-size: 16px;
`;

const ActionsContainer = styled.div`margin-left: auto;`;

const ActionsIcon = styled.span`
	font-size: 20px;
	color: ${(props) => props.theme.gray.light};
	cursor: pointer;

	transition: color .3s linear;

	&:hover {
		color: ${(props) => props.theme.gray.normal};
	}
`;

const Experience = (props) => {
	//function to delete this experience itslef
	const handleDelete = (index) => {
		const newArr = props.getState('experiences', []);
		newArr.splice(index, 1);
		props.setState('experiences', newArr);
	};

	const { title, startDate, endDate } = props.experience;

	return (
		<Fragment>
			<ExperienceContainer>
				<ExperienceHeader>
					<ExperienceDesc>
						<JobTitle>{title}</JobTitle>
						<JobDuration>
							{getYear(startDate)} - {Date.parse(endDate) ? getYear(endDate) : endDate}
						</JobDuration>
					</ExperienceDesc>
					<ActionsContainer>
						{/* <ActionsIcon>
							<RiEdit2Line />
						</ActionsIcon> */}
						<ActionsIcon onClick={() => handleDelete(props.id)}>
							<BsTrash />
						</ActionsIcon>
					</ActionsContainer>
				</ExperienceHeader>
			</ExperienceContainer>
		</Fragment>
	);
};

export default Experience;
