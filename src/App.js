import './App.css';
import About from './Components/About/About';
import Projects from './Components/About/Projects';
import Header from './Components/Header/Header';
import Fab from './Components/SmallComp/Fab';
import Footer from './Components/Footer';
import FlipButton from './Components/SmallComp/FlipButton';
import Skills from './Components/Skills';



function App() {
  return (<>

     <Header></Header>
     <Skills></Skills>
     <Projects></Projects>
     <About></About>
     {/* <Fab></Fab> */}
     <Footer></Footer>

  </>
  );
}

export default App;
