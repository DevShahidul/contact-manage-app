import { Route, Routes } from 'react-router-dom';
import { AddContact, Contacts, Header } from './components';
import Provider from './context';
import { About, NotFound } from './pages';
import './style/main.css';
function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/'>
            <Route index element={<Contacts />} />
            <Route path='about' element={<About />} />
            <Route path='add-contact' element={<AddContact />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}
export default App;
