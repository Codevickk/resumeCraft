import { InnerWrapper, Wrapper } from '../Containers';
import { P } from '../Text';
import styled from 'styled-components';

import logo from '../../images/logo.svg';
import documentIcon from '../../images/document.svg';
import { FiPlus } from 'react-icons/fi';

const ContentWrapper = styled.div`text-align: center;`;

const AddLink = styled.button `
	background : ${props => props.theme.primary.normal};
	padding: 10px 15px;
	font-size: 30px;
	border-radius: 50%;
	border: none;
	color: white;
	margin-top: 35px;
	box-shadow: 0px 8px 40px rgba(95, 48, 226, 0.1);
`

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
						You haven’t created any resume yet, you can create one by clicking the button below.
					</P>
					<AddLink>
						<FiPlus />
					</AddLink>
				</ContentWrapper>
                
			</InnerWrapper>
		</Wrapper>
	);
};

export default Home;
