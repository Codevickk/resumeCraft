import { Steps, Step } from 'react-step-builder';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';

import Final from './Final';

const Index = () => {
	return (
		<Steps>
			<Step title="Enter your basic information" component={FirstStep} />
			<Step title="Professional Summary" component={SecondStep} />
			<Step title="Contact information" component={ThirdStep} />
			<Step title="Your work experience" component={FourthStep} />

			<Step title="Final step" component={Final} />
		</Steps>
	);
};

export default Index;
