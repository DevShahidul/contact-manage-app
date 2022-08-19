import { Contacts } from './components';
import Provider from './context';
import './style/main.css';
function App() {
  return (
    <Provider>
      <div className="App">
        <Contacts />
      </div>
    </Provider>
  );
}
export default App;
