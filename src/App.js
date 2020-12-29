import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import theme from './theme';

// Components
import Home from './components/Home';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Switch>
					<Route path="/" component={Home} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
};

export default App;
