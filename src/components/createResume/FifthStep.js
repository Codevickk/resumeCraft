import { Wrapper, InnerWrapper } from '../Containers';
import { H1, StepIndicator } from '../Text';
import { FormGroup } from '../Form';
import { Button } from '../Button';
import { HomeLink } from '../Misc';

import { IoCloseOutline } from 'react-icons/io5';
import { BsArrowLeft } from 'react-icons/bs';

import ReactTagInput from '@pathofdev/react-tag-input';
import '@pathofdev/react-tag-input/build/index.css';

import './tags.css';

const FifthStep = (props) => {
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
						<StepIndicator style={{ marginBottom: '4px' }}>Step 5/5</StepIndicator>
						<H1>{props.title}</H1>
					</div>

					<div className="body" style={{ marginTop: '50px' }}>
						<form>
							<FormGroup>
								<ReactTagInput
									tags={props.getState('skills', [])}
									onChange={(newTags) => props.setState('skills', newTags)}
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
									<span>
										<BsArrowLeft />{' '}
									</span>Back
								</Button>
								<Button onClick={onBTNClick}>Finish</Button>
							</div>
						</form>
					</div>
				</InnerWrapper>
			</div>
		</Wrapper>
	);
};

export default FifthStep;
