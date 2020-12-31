import styled from 'styled-components';
import { Wrapper, InnerWrapper } from '../Containers';
import { H1, P, StepIndicator } from '../Text';
// import { FormGroup, Label, Input } from '../Form';
import { Button } from '../Button';
import { HomeLink } from '../Misc';

import { IoCloseOutline } from 'react-icons/io5';
import { RiEdit2Line } from 'react-icons/ri';
import { BsArrowLeft, BsTrash } from 'react-icons/bs';

const Group = styled.div`margin-bottom: 30px;`;

const ExperienceContainer = styled.div`
	padding: 25px 20px;
	border: 1px solid ${(props) => props.theme.gray.lighter};
	border-radius: 3px;
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
`;

const AddButton = styled(Button)`
	color: ${(props) => props.theme.primary.normal};
	font-weight: 500;
	padding: 0;
	margin-top: 15px;
	margin-right: 5px;

	&:hover {
		color: ${(props) => props.theme.primary.light}
	}
`;

// const SmallFormGroup = styled(FormGroup)`
// 	margin-bottom: 0px;
// `;

// const SmallLabel = styled(Label)`
// 	font-size: 16px;
// `;
// const SmallInput = styled(Input)`
// 	padding: 14px 15px;
// `;

const FourthStep = (props) => {
	const onBTNClick = (e) => {
		e.preventDefault();
		props.next();
	};

	return (
		<Wrapper>
			<div>
				<InnerWrapper size="medium">
					<HomeLink to="/">
						<IoCloseOutline />
					</HomeLink>
					<div className="head">
						<StepIndicator style={{ marginBottom: '4px' }}>Step 3/5</StepIndicator>
						<H1>{props.title}</H1>
					</div>

					<div className="body" style={{ marginTop: '50px' }}>
						<Group>
							<ExperienceContainer>
								<ExperienceHeader>
									<ExperienceDesc>
										<JobTitle>Ux engineer</JobTitle>
										<JobDuration>2018 - Present</JobDuration>
									</ExperienceDesc>
									<ActionsContainer>
										<ActionsIcon style={{ marginRight: '25px' }}>
											<RiEdit2Line />
										</ActionsIcon>
										<ActionsIcon>
											<BsTrash />
										</ActionsIcon>
									</ActionsContainer>
								</ExperienceHeader>
							</ExperienceContainer>

							<AddButton variant="link">Add a work experience</AddButton>
						</Group>

						<div style={{ textAlign: 'right' }}>
							<Button
								variant="link"
								onClick={(e) => {
									e.preventDefault();
									props.prev();
								}}
							>
								<span>
									<BsArrowLeft />{' '}
								</span>Back
							</Button>
							<Button onClick={onBTNClick}>Next step</Button>
						</div>
					</div>
				</InnerWrapper>
			</div>
		</Wrapper>
	);
};

export default FourthStep;
