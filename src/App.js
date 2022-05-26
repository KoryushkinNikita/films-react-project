import {useEffect, useState} from "react"
import axios from 'axios'
import Footer from './components/footer/footer'
import MainPage from './components/mainPage/mainPage'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
    return (
      <BrowserRouter>
                <MainPage/>
                <Footer/>
        </BrowserRouter>
    );
}

export default App;
