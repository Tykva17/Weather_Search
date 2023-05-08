import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo.png';
import SearchWthForm from "./components/SearchWthForm";
import SearchResult from "./components/SearchResult";
import {useState} from "react";
import PopularList from "./components/PopularList";
import NoneResult from "./components/NoneResult";

function App() {
    let cityDataLocalStorage = JSON.parse(localStorage.getItem('popularList')) || [];
    const [showResult, setShowResult] = useState(false);
    const [cityData, setCityData] = useState([]);
    const [popularCityData, setPopularCityData] = useState(cityDataLocalStorage);

    function addToPopularList(cityName){
        if(popularCityData.indexOf(cityName) === -1){
            popularCityData.push(cityName);
            setPopularCityData(popularCityData);
            localStorage.setItem('popularList', JSON.stringify(popularCityData));
        }
    }

    function getResult(data){
        addToPopularList(data.location.name)
        setCityData(data);
        setShowResult(true)
    }

    function getError(){
        setShowResult(false);
    }

    return (
        <div className="App">
            <div className="header nav-wrapper">
                <SearchWthForm getResult={getResult} getError={getError}/>
            </div>
            <div className='p-4'>
                {
                    (showResult) ?  <SearchResult cityData={cityData}/> :  <NoneResult />
                }
            </div>
            <div className="popular_city">
                <div className='m-4'>
                    <img className='logo' src={logo} alt="logo"/>
                </div>
                <h3>History</h3>
                {

                    popularCityData.map(function(e,index){
                        return <PopularList className='popular_city-item' key={index} getResult={getResult} cityName={e} />
                    })
                }
            </div>
        </div>
    );
}
export default App;