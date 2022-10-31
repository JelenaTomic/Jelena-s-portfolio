import './App.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
    <Home/>
    <Nav/>
    <About/>
    <Portfolio/>
    <ContactForm/>
    <Footer/>
    </div>
  );
}

export default App;
