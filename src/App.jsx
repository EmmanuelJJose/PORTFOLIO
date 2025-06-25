import Navbar from "./components/Navbar";
import E from './pages/E'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./pages/Hero";
import CursorGlow from "./components/Cursorglow";

function App() {
  return (
    
      <>
        <Navbar />
        <Hero />
        <E/>
        <CursorGlow />
      </>
      
  );
}

export default App;