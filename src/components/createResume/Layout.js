import styled from 'styled-components';
import { Wrapper, InnerWrapper } from '../Containers';
import { H1, StepIndicator } from '../Text';
import { FormGroup, Label, Input } from '../Form';
import { Button } from '../Button';
import { HomeLink } from '../Misc';

import { IoCloseOutline } from 'react-icons/io5';

const Body = styled.div`margin-top: 50px;`;

const Layout = (props) => {
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
						<StepIndicator style={{ marginBottom: '4px' }}>Step 1/5</StepIndicator>
						<H1>{props.title}</H1>
					</div>

					<Body>
						<form>
							<FormGroup>
								<Label>First name</Label>
								<Input
									type="text"
									name="firstName"
									id="firstName"
									placeholder="Enter your first name"
									value={props.getState('firstName')}
									onChange={props.handleChange}
								/>
							</FormGroup>

							<FormGroup>
								<Label>Last name</Label>
								<Input
									type="text"
									name="lastName"
									id="lastName"
									placeholder="Enter your last name"
									value={props.getState('lastName')}
									onChange={props.handleChange}
								/>
							</FormGroup>

							<FormGroup>
								<Label>Job title</Label>
								<Input
									type="text"
									name="job"
									id="job"
									placeholder="Enter your job title"
									value={props.getState('job')}
									onChange={props.handleChange}
								/>
							</FormGroup>

							<Button style={{ display: 'block', marginLeft: 'auto' }} onClick={onBTNClick}>
								Next step
							</Button>
						</form>
					</Body>
				</InnerWrapper>
			</div>
		</Wrapper>
	);
};

export default Layout;
