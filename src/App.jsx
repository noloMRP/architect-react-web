import Header from "./Components/Header"
import Certifications from "./Components/Pages/Certification"
import Contacts from "./Components/Pages/Contacts"
import Main from "./Components/Pages/Main"
import Projects from "./Components/Pages/Projects"
import { BrowserRouter, Routes, Route} from 'react-router-dom'

// decide which page to show
export default function App(){

  return (
    <>
      <Header />
      <div className="container">
        
        {/* define the routes and list each one with a path and what it leads to(element) */}
        <Routes>
          <Route path='/main' element={<Main />} />
          <Route path='/certifications' element={<Certifications />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </div>
      
    </>  
  )
}