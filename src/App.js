import {useState} from "react"
import Footer from './components/footer/footer'
import MainPage from './components/mainPage/mainPage'
import Header from './components/header/header'
import { BrowserRouter } from 'react-router-dom';

function App() {
    const [searchKey, setSearchKey] = useState();

    return (
      <BrowserRouter>
                <Header onKeyPress={(event) => {
                  event.preventDefault()
                  setSearchKey(event.target.search.value)}
                }/>
                <MainPage value={searchKey}/>
                <Footer/>
        </BrowserRouter>
    );
}

export default App;
