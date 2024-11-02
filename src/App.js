import Navbar from './components/navbar/Navbar'
import Form from './components/form/Form'
import Footer from './components/footer/Footer';
import About from './components/about/About'
import Services from './components/services/Services'
import Home from './components/home/Home';
import Projects from './components/projects/projects'
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Services/>
      <Form/>
      <Footer/>
      
    </div>
  );
}

export default App;
