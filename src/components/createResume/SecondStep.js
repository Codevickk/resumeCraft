import { Wrapper, InnerWrapper } from '../Containers';
import { H1, StepIndicator } from '../Text';
import { FormGroup, Label, TextArea } from '../Form';
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
						<StepIndicator style={{ marginBottom: '4px' }}>Step 2/5</StepIndicator>
						<H1>{props.title}</H1>
					</div>

					<div className="body" style={{ marginTop: '50px' }}>
						<form>
							<FormGroup>
								<Label>Include 2-3 clear sentences about your overall experience</Label>
								<TextArea
									rows="8"
									name="summary"
									id="summary"
									value={props.getState('summary')}
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
									<BsArrowLeft /> Back
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
