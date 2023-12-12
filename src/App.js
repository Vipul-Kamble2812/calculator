import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import Calci from './components/Calci';
import Footer from './components/Footer';

function App() {
  return (
  <div className='text-info'>
    <NavBar/>
    <Calci/>
    <Footer/>
  </div>
  );
}

export default App;
