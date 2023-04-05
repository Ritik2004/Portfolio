import './App.scss';
import {Routes, Route, useLocation} from 'react-router-dom'
import {Particles} from "react-particles";
import {loadFull} from "tsparticles"

import Home from './containers/home/index.jsx'
import About from './containers/about/index.jsx'
import Resume from './containers/resume/index.jsx'
import Skills from './containers/skills/index.jsx'
import Portfolio from './containers/portfolio/index.jsx'
import Contact from './containers/contact/index.jsx'
import Navbar from './components/navBar/index.jsx';
import particles from './utils.js/particles'

function App() {


  const location = useLocation();
  console.log(location)

 const handleInit = async (main)=>{
   await loadFull(main)
 }
   
 const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className='App'>
    {/* particles js */}
    {
      renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit}/>
    
      )
    }
    {/* navbar */}
    <Navbar/>

    {/* main page content */}
    <div className='App__main-page-content'> 
    <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route index path='/about' element={<About/>}/>
      <Route index path='/resume' element={<Resume/>}/>
      <Route index path='/skills' element={<Skills/>}/>
      <Route index path='/portfolio' element={<Portfolio/>}/>
      <Route index path='/contact' element={<Contact/>}/>
    </Routes>
    </div>
    </div>
  );
}

export default App;


