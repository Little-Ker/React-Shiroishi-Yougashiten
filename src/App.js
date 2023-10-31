import React from 'react'
import {
  BrowserRouter as Router, Route, Routes 
} from 'react-router-dom'
import './App.css'
// import Navbar from 'component/navbar/Navbar'
import ViewA from 'view/ViewA'
import ViewB from 'view/ViewB'
import MainView from 'view/mainView/MainView'
 
const RouterPage = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainView/>} />
      <Route exact path="main" element={<MainView/>} />

      <Route path="*" element={<MainView/>} />
    </Routes>
  )
}
 
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <RouterPage />
      </Router>
    </div>
  )
}
 
export default App