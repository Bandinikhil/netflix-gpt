import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import store from './utils/appStore';

function App() {
  return (
    <div className="App no-scrollbar">
      <Provider store={store}>
      <Body/>
      </Provider>
    </div>
  );
}

export default App;
