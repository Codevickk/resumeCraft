import { InnerWrapper, Wrapper } from '../Containers';
import { Link } from 'react-router-dom';
import { P } from '../Text';
import styled from 'styled-components';

import logo from '../../images/logo.svg';
import documentIcon from '../../images/document.svg';
import { FiPlus } from 'react-icons/fi';

const ContentWrapper = styled.div`text-align: center;`;

const AddLink = styled(Link)`
	background : ${(props) => props.theme.primary.normal};
	display: inline-block;
	padding: 10px 15px;
	font-size: 30px;
	border-radius: 50%;
	border: none;
	color: white;
	margin-top: 40px;
	box-shadow: 0px 8px 40px rgba(95, 48, 226, 0.1);
	transition: background linear .3s;

	&:hover {
		background: ${(props) => props.theme.primary.light}
	}
`;

const Home = () => {
	return (
		<Wrapper>
			<InnerWrapper>
				<div>
					<img src={logo} alt="logo" />
				</div>
				<ContentWrapper>
					<img src={documentIcon} alt="document" style={{ marginTop: '60px' }} />
					<P style={{ marginTop: '40px', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
						This is a tool that helps you to create a resume that you can download in PDF format, you can
						get started by clicking the button below.
					</P>
					<AddLink to="/create">
						<FiPlus />
					</AddLink>
				</ContentWrapper>
			</InnerWrapper>
		</Wrapper>
	);
};

export default Home;
