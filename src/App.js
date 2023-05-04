import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo.png';
import SearchWthForm from "./components/SearchWthForm";
import SearchResult from "./components/SearchResult";
import {useState} from "react";
import PopularList from "./components/PopularList";
import NoneResult from "./components/NoneResult";



function App() {
    let cityDataLS = JSON.parse(localStorage.getItem('popularList')) ? JSON.parse(localStorage.getItem('popularList')) : [];
    const [showResult, setShowResult] = useState(false);
    const [cityData, setCityData] = useState([]);
    const [popCityData, setPopCityData] = useState(cityDataLS);


    function sendRequest(url){
        return fetch(url).then(response => {
            return response.json()
        })
    }

    function addToPopularList(cityName){
        setPopCityData(JSON.parse(localStorage.getItem('popularList')));
        let arrCity = popCityData;
        console.log(arrCity);
        if(arrCity.indexOf(cityName) === -1){
            arrCity.push(cityName);
            setPopCityData(arrCity);
            localStorage.setItem('popularList', JSON.stringify(popCityData));
        }
    }

    function getResult(data){
        addToPopularList(data.location.name)
        setCityData(data);
        if(showResult !== true){
            setShowResult(!showResult);
        }
    }

    function getError(data){
        setShowResult(false);
    }


  return (
    <div className="App">

        <div className="header nav-wrapper">
            <SearchWthForm sendRequest={sendRequest} getResult={getResult} getError={getError}/>
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

                popCityData.map(function(e,index){
                    console.log(e);
                    return <PopularList className='popular_city-item' key={index} sendRequest={sendRequest} getResult={getResult} cityName={e} />
                })
            }
        </div>


    </div>
  );
}

export default App;
