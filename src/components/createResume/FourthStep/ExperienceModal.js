import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { FormGroup, Label, Input, TextArea } from '../../Form';
import { Button } from '../../Button';
import { H2 } from '../../Text';

import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import './modal.css';

const ModalContent = styled.div`margin-top: 35px;`;

const Row = styled.div`display: flex;`;

const SmallFormGroup = styled(FormGroup)`
	margin-bottom: 30px;
`;

const SmallLabel = styled(Label)`
	font-size: 16px;
`;
const SmallInput = styled(Input)`
	padding: 14px 15px;
`;

const ExperienceModal = (props) => {
	const [ formState, setFormState ] = useState({
		title: '',
		employer: '',
		startDate: null,
		endDate: null,
		description: '',
		current: false
	});

	const handleChange = (e) => {
		if (e.target.type === 'checkbox') {
			setFormState({
				...formState,
				[e.target.name]: e.target.checked
			});
		} else {
			setFormState({
				...formState,
				[e.target.name]: e.target.value
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { title, employer, startDate, endDate, description } = formState;

		props.setState('experiences', [
			...props.getState('experiences', []),
			{
				title,
				employer,
				startDate,
				endDate,
				description
			}
		]);

		// close the modal
		props.onClose();

		// Reset the form
		setFormState({
			title: '',
			employer: '',
			startDate: null,
			endDate: null,
			description: '',
			current: false
		});
	};

	useEffect(
		() => {
			if (formState.current) {
				setFormState({
					...formState,
					endDate: 'Present'
				});
			}
		},
		[ formState.current ]
	);

	return (
		<Modal open={props.open} onClose={props.onClose} closeOnOverlayClick={false} center>
			<H2>Work experience</H2>
			<ModalContent>
				<form onSubmit={handleSubmit}>
					<Row>
						<SmallFormGroup style={{ marginRight: '20px', flex: 1 }}>
							<SmallLabel>Job title</SmallLabel>
							<SmallInput
								type="text"
								placeholder="Job title"
								name="title"
								value={formState.title}
								onChange={handleChange}
							/>
						</SmallFormGroup>

						<SmallFormGroup style={{ flex: 1 }}>
							<SmallLabel>Employer</SmallLabel>
							<SmallInput
								placeholder="Enter the employer name"
								name="employer"
								value={formState.employer}
								onChange={handleChange}
							/>
						</SmallFormGroup>
					</Row>

					<Row>
						<SmallFormGroup style={{ marginRight: '20px', flex: 1 }}>
							<SmallLabel>Start date</SmallLabel>
							<SmallInput
								type="date"
								placeholder="Start date"
								name="startDate"
								value={formState.startDate}
								onChange={handleChange}
							/>
						</SmallFormGroup>

						<SmallFormGroup style={{ flex: 1 }}>
							<SmallLabel>End date</SmallLabel>
							<SmallInput
								type={formState.current ? 'text' : 'date'}
								placeholder="End date"
								name="endDate"
								value={formState.endDate}
								onChange={handleChange}
								disabled={formState.current}
							/>
						</SmallFormGroup>
					</Row>

					<SmallFormGroup>
						<SmallLabel>
							I currently work here{' '}
							<input
								name="current"
								type="checkbox"
								checked={formState.current}
								onChange={handleChange}
							/>{' '}
						</SmallLabel>
					</SmallFormGroup>

					<SmallFormGroup>
						<SmallLabel>Job description</SmallLabel>
						<TextArea
							rows="5"
							placeholder="Description of what you did at the job"
							name="description"
							value={formState.description}
							onChange={handleChange}
						/>
					</SmallFormGroup>

					<div style={{ textAlign: 'right' }}>
						<Button>Submit</Button>
					</div>
				</form>
			</ModalContent>
		</Modal>
	);
};

export default ExperienceModal;
