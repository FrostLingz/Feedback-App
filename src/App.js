import React, { useState } from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import { FeedbackProvider } from "./context/FeedbackContext"
import { FaUnderline } from "react-icons/fa"

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route 
              exact path = "/" 
              element = {
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <div className='feedback-stats'>
                    <h3><a className="href" href="/about" style={{color: "white"}}>About</a></h3>
                    <h3 align="right">@FrostLingz</h3>
                  </div>   
                </>
            }>
            </Route>
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          
        </div>
      </Router>
    </FeedbackProvider>
    
  )
}

export default App