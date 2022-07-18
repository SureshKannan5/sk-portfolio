import './App.scss';
import {BrowserRouter } from 'react-router-dom';
import Mainrouter from './Mainrouter';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Mainrouter/>
    </BrowserRouter>
  );
}

export default App;
