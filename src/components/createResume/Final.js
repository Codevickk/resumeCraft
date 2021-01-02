import styled from 'styled-components';
import { Wrapper, InnerWrapper } from '../Containers';
import { H1 } from '../Text';
import { Button } from '../Button';
import { HomeLink } from '../Misc';
import { IoCloseOutline } from 'react-icons/io5';
import { BsArrowLeft } from 'react-icons/bs';

import Resume from '../resume';

// import html2canvas from 'html2canvas';
// import { jsPDF } from 'jspdf';

import { PDFExport } from '@progress/kendo-react-pdf';

const Body = styled.div`margin-top: 50px;`;

// const Circle = styled.div`
// 	width: 47px;
// 	height: 47px;
// 	border-radius: 50%;
// 	display: inline-block;
// 	margin-right: 20px;
// `;

// const PurpleCircle = styled(Circle)`
// 	background: ${(props) => props.theme.primary.normal}
// `;

// const BlueCircle = styled(Circle)`
// 	background: #1E64F1;
// `;

// const GreenCircle = styled(Circle)`
// 	background: #5DD57E;
// `;

// const RedCircle = styled(Circle)`
// 	background: #DF2935;
// `;

const ToolsContainer = styled.div`display: flex;`;
const ActionsContainer = styled.div``;

const ResumeWrapper = styled.div`
	margin-top: 30px;
	// border: 2px solid #f2eeff;
	overflow-x: auto;
	background: ${props => props.theme.gray.lightest}
`;

const Final = (props) => {
	let resume = null;
	const downloadDocument = () => {
		resume.save();
	};
	return (
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
						{/* <div>
							<PurpleCircle />
							<BlueCircle />
							<GreenCircle />
							<RedCircle />
						</div> */}

						<ActionsContainer>
							<Button
								variant="link"
								onClick={(e) => {
									e.preventDefault();
									props.prev();
								}}
							>
								<BsArrowLeft /> Back
							</Button>
							<Button onClick={downloadDocument}>Download as PDF</Button>
						</ActionsContainer>
					</ToolsContainer>

					<ResumeWrapper>
						<PDFExport fileName="my_resume.pdf" title="" subject="" keywords="" ref={(r) => (resume = r)}>
							<Resume resume={props.state} />
						</PDFExport>
					</ResumeWrapper>
				</Body>
			</InnerWrapper>
		</Wrapper>
	);
};

export default Final;
