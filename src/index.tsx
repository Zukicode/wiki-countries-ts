import ReactDOM from 'react-dom/client';

//Style
import 'assets/styles/global.scss';

//Components
import { App } from './components/App/App';

//Redux
import { Provider } from 'react-redux';
import { store } from 'store/store';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);
