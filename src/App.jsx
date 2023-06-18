import { BrowserRouter } from "react-router-dom";

import { 
  About , 
  Contact , 
  Experience , 
  Feedbacks , 
  Hero , 
  CanvasLoader, 
  Navbar , 
  Tech ,
  Works } from './components';


const App = () => {
 

  return (
    <>
      3D Developer Portfolio
      <BrowserRouter>
        <div className="relative z-0 bg-primary ">

          <div className="bg-hero-pattern bg-cover vg-no-repeat bg-center">
            <Navbar/>

          </div>
        </div>
      
      </BrowserRouter>
    </>
  )
}

export default App
