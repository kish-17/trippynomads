import React from 'react'
import Navbar from './Components/Navbar'
import Scrolltop from './Components/Scrolltop'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Rec from './Components/Rec'
import Testi from './Components/Testi'
import Footers from './Components/Footers'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>

      <Scrolltop />
      <Navbar />
      <Routes>
          <Route path="/" element={<Hero />}>
          </Route>
          <Route path="/Services" element={<Services />}>
          </Route>
        </Routes>
    
     
     
      {/* <Rec />
      <Testi />
      <Footers /> */}
    </Router>
  )
}
