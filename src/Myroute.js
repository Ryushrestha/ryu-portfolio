import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { GlobalStyle } from './Globalstyle'
import Homepage from './page/Homepage'

const Myroute = () => {
  return (
    <Router>
        <GlobalStyle/>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
        </Routes>
    </Router>
  )
}

export default Myroute