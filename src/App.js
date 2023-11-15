import './App.css';
import Projects from './Projects/Projects';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Education from './pages/Education/Education';
import TeckStack from './pages/TeckStack/TeckStack';
import WorkExp from './pages/Work/WorkExp';
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './Context/ThemeContext';
import Tada from "react-reveal/Tada";
import MobileNav from './components/Mobilenav/Mobilenav';
import {  ToastContainer } from "react-toastify";




function App() {
  const [theme] = useTheme();

  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
      <Layout/>
      <div className='container'></div>
      <About/>
      <Education/>

      <TeckStack/>
      <Projects/>
      <WorkExp/>
      <Contact/>
      <ToastContainer />

      <div className="footer pb-3 ms-3">
      <Tada>

            <h4 className="text-center">Made By  Jayaprakash &copy; 2023</h4>
            </Tada>
        </div>
        </div>
        <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />

    </>
  );
}

export default App;
