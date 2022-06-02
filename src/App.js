import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import React,{ useEffect ,useState,createContext} from 'react'
import './App.css';
import Movie from './components/Movie';
import Info from './components/Info';
import Home from './Home/data';
export const dataContext=createContext('')
function App() {

  return (
    <dataContext.Provider value={'123'}>
      <BrowserRouter>
       <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
				<Route path="/info" element={<Info />} />
			</Routes>
    </div>
    </BrowserRouter>
    </dataContext.Provider>
  );
}

export default App;
