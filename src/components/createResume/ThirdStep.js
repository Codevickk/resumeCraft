import { Wrapper, InnerWrapper } from '../Containers';
import { H1, StepIndicator } from '../Text';
import { FormGroup, Label, Input } from '../Form';
import { Button } from '../Button';
import { HomeLink } from '../Misc';

import { IoCloseOutline } from 'react-icons/io5';
import { BsArrowLeft } from 'react-icons/bs';

const SecondStep = (props) => {
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
						<form>
							<FormGroup>
								<Label>City</Label>
								<Input
									type="text"
									name="city"
									id="city"
									placeholder="Enter your city"
									value={props.getState('city')}
									onChange={props.handleChange}
								/>
							</FormGroup>

							<FormGroup>
								<Label>State</Label>
								<Input
									type="text"
									name="state"
									id="state"
									placeholder="Enter your state"
									value={props.getState('state')}
									onChange={props.handleChange}
								/>
							</FormGroup>

							<FormGroup>
								<Label>Email</Label>
								<Input
									type="email"
									name="email"
									id="email"
									placeholder="Enter your email"
									value={props.getState('email')}
									onChange={props.handleChange}
								/>
							</FormGroup>

							<FormGroup>
								<Label>Website</Label>
								<Input
									type="url"
									name="website"
									id="website"
									placeholder="Enter your website"
									value={props.getState('website')}
									onChange={props.handleChange}
								/>
							</FormGroup>

							<div style={{ textAlign: 'right' }}>
								<Button
									variant="link"
									onClick={(e) => {
										e.preventDefault();
										props.prev();
									}}
								>
									<span><BsArrowLeft /> </span>Back
								</Button>
								<Button onClick={onBTNClick}>Next step</Button>
							</div>
						</form>
					</div>
				</InnerWrapper>
			</div>
		</Wrapper>
	);
};

export default SecondStep;
