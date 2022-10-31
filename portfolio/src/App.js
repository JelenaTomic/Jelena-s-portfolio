import './App.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';


function App() {

  return (
    <div className="App">
    <Home/>
    <Nav/>
    <About/>
    <Portfolio/>
    <ContactForm/>
    </div>
  );
}

export default App;
