import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import RootNavigation from './src/navigation/rootNavigation';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

export default App;
