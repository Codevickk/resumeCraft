import styled from 'styled-components';
import { Wrapper, InnerWrapper } from '../Containers';
import { H1 } from '../Text';
import { Button } from '../Button';
import { HomeLink } from '../Misc';
import { IoCloseOutline } from 'react-icons/io5';
import { BsArrowLeft } from 'react-icons/bs';

import Resume from '../resume';

const Body = styled.div`margin-top: 50px;`;

const Circle = styled.div`
	width: 47px;
	height: 47px;
	border-radius: 50%;
	display: inline-block;
	margin-right: 20px;
`;

const PurpleCircle = styled(Circle)`
	background: ${(props) => props.theme.primary.normal}
`;

const BlueCircle = styled(Circle)`
	background: #1E64F1;
`;

const GreenCircle = styled(Circle)`
	background: #5DD57E;
`;

const RedCircle = styled(Circle)`
	background: #DF2935;
`;

const ToolsContainer = styled.div`display: flex;`;
const ActionsContainer = styled.div``;

const ResumeWrapper = styled.div`
	margin-top: 30px;
	border: 2px solid #f2eeff;
	overflow-x: auto;
`;

const Final = (props) => {
	console.log(props.state);
	return (
		// <div>
		// 	firstName: {props.state.firstName} <br />
		// 	lastName: {props.state.lastName} <br />
		// 	job: {props.state.job} <br />
		// 	summary: {props.state.summary} <br />
		// 	city: {props.state.city} <br />
		// 	state: {props.state.state} <br />
		// 	email: {props.state.email} <br />
		// 	website: {props.state.website} <br />
		// 	skills: {(props.state.skills || []).map((skill) => `${skill} `)}
		// 	experiences: {(props.state.experiences || []).map((experience) => console.log(experience))}
		// </div>
		<Wrapper>
			<InnerWrapper>
				<HomeLink to="/">
					<IoCloseOutline />
				</HomeLink>
				<div className="head">
					<H1>{props.title}</H1>
				</div>

				<Body>
					<ToolsContainer>
						<div>
							<PurpleCircle />
							<BlueCircle />
							<GreenCircle />
							<RedCircle />
						</div>

						<ActionsContainer style={{ marginLeft: 'auto' }}>
							<Button
								variant="link"
								onClick={(e) => {
									e.preventDefault();
									props.prev();
								}}
							>
								<BsArrowLeft /> Back
							</Button>
							<Button>Download as PDF</Button>
						</ActionsContainer>
					</ToolsContainer>

					<ResumeWrapper>
						<Resume />
					</ResumeWrapper>
				</Body>
			</InnerWrapper>
		</Wrapper>
	);
};

export default Final;
