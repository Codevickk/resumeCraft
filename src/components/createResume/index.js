import { Steps, Step } from 'react-step-builder';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
import FifthStep from './FifthStep';

import Final from './Final';

import Layout from './Layout';

const Index = () => {
	return (
		<Steps>
			<Step title="Enter your basic information" component={FirstStep} />
			<Step title="Professional Summary" component={SecondStep} />
			<Step title="Contact information" component={ThirdStep} />
			<Step title="Your work experience" component={FourthStep} />
			<Step title="Skills" component={FifthStep} />

			<Step title="Preview your resume" component={Final} />
			<Step title="Testing" component={Layout} />
		</Steps>
	);
};

export default Index;
