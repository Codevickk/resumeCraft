import styled from 'styled-components';

const SkillContainer = styled.li`
	font-size: 12px;
	letter-spacing: -0.03em;
	color: ${(props) => props.theme.gray.dark};
	font-weight: 400;
	margin-bottom: 22px;
`;

const Marker = styled.span`
	height: 8px;
	width: 8px;
	border-radius: 50%;
	background: ${(props) => props.theme.gray.darker};
	margin-right: 8px;
	display: inline-block;
`;

const Skill = (prop) => {
	return (
		<SkillContainer>
			<Marker />
			{prop.skill}
		</SkillContainer>
	);
};

export default Skill;
