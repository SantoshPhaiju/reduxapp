// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Shop from './components/Shop';

function App() {
  return (
    <>
    <Router >
    <Navbar />
     <p className='text-purple-800 text-3xl font-mono font-medium my-4 mx-auto text-center'>State bank of Santosh and the Company</p>
     <Shop/>
     </Router>
    </>
  );
}

export default App;
