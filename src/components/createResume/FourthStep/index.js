import { useState } from 'react';
import styled from 'styled-components';
import { Wrapper, InnerWrapper } from '../../Containers';
import { H1, StepIndicator } from '../../Text';
// import { FormGroup, Label, Input } from '../Form';
import { Button } from '../../Button';
import { HomeLink } from '../../Misc';

import { IoCloseOutline } from 'react-icons/io5';
import { BsArrowLeft } from 'react-icons/bs';

import Experience from './Experience';
import ExperienceModal from './ExperienceModal';

const Group = styled.div`margin-bottom: 30px;`;

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

const FourthStep = (props) => {
	const [ modalOpen, setModalOpen ] = useState(false);

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

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
						<StepIndicator style={{ marginBottom: '4px' }}>Step 4/5</StepIndicator>
						<H1>{props.title}</H1>
					</div>

					<div className="body" style={{ marginTop: '50px' }}>
						<Group>
							{props.getState('experiences', []).map((experience, index) => {
								return (
									<Experience
										key={index}
										id={index}
										experience={experience}
										getState={props.getState}
										setState={props.setState}
									/>
								);
							})}

							<ExperienceModal
								open={modalOpen}
								onClose={closeModal}
								getState={props.getState}
								setState={props.setState}
							/>

							<AddButton variant="link" onClick={openModal}>
								Add a work experience
							</AddButton>
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
