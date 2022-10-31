import './App.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Home from './components/Home';
function App() {

  return (
    <div className="App">
    <Home/>
    <About/>
    <Portfolio/>
    <ContactForm/>
    </div>
  );
}

export default App;
