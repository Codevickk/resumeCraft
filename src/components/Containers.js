import styled from 'styled-components';
import breakpoints from '../breakpoints';

export const Wrapper = styled.main`
	background: ${(props) => props.theme.gray.lightest};
	min-height: 100vh;
	padding: 100px 10px;

	@media only screen and ${breakpoints.device.tablet} {
		padding: 100px 0px;
	}
`;

export const InnerWrapper = styled.div`
	background: white;
	margin-right: auto;
	margin-left: auto;
	box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
	border-radius: 5px;
	width: 100%;
	padding: 55px 20px;
	position: relative;

	@media only screen and ${breakpoints.device.tablet} {
		padding: 60px 40px;
		width: 600px;
	}
	@media only screen and ${breakpoints.device.laptop} {
		padding: 60px 50px;
		width: ${(props) => {
			if (props.size === 'medium') {
				return '754px';
			}
			return '946px';
		}};
	}
`;
