
import './App.css';
import "./assets/font/Futura\ Light.otf";
import "./assets/font/FuturaLT-Condensed.ttf";
import "./assets/font/FuturaLT-Heavy.ttf";
import "./assets/font/FuturaLT-ExtraBold.ttf";
import "./assets/font/FuturaLT-Light.ttf";
import "./assets/font/FuturaLT-Oblique.ttf";
import "./assets/font/FuturaLT.ttf";
import Navbar from './component/Navbar/Navbar';
import Banner from './component/Banner/Banner';
import ThirdSection from './component/ThirdSection';
import FourthSection from './component/FourthSection';
import FifthSection from './component/FifthSection';
import SixthSection from './component/SixthSection';


function App() {
  return (
    <div className="App">
  <Navbar/>
  <Banner/>
  <ThirdSection/>
  <FourthSection/>
  <FifthSection/>
  <SixthSection/>
    </div>
  );
}

export default App;
