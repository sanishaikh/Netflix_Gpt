
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utils/appStore';

function App() {
  return (
  <Provide store={appStore}><Body /> </Provider>
  );
}

export default App;
