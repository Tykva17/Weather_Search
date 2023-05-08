function SearchResult({cityData}) {
    return <div className='special_card'>
        <div className='main_area m-2 info_card d-flex flex-column align-items-center p-2 shadow rounded'>
            <h1>{cityData.location.name}</h1>
            <span>{cityData.location.region}</span>
            <span>{cityData.location.country}</span>
            <img src={cityData.current.condition.icon} alt=""/>
            <p>{cityData.current.condition.text}</p>
        </div>
        <div className='area_1 m-2 info_card d-flex flex-column align-items-start p-2 shadow rounded'>
            <p>температура : <span className='info_card_val'>{cityData.current.temp_c}°C</span></p>
            <p>відчувається як : <span className='info_card_val'>{cityData.current.feelslike_c}°C</span></p>
        </div>
        <div className='area_2 m-2 info_card d-flex flex-column align-items-start p-2 shadow rounded'>
            <p>тиск : <span className='info_card_val'>{cityData.current.pressure_mb} мм</span></p>
            <p>вологість : <span className='info_card_val'>{cityData.current.humidity}%</span></p>
        </div>
        <div className='area_3 m-2 info_card d-flex flex-column align-items-start p-2 shadow rounded'>
            <p>швидкість вітру : <span className='info_card_val'>{cityData.current.wind_kph} км/г</span></p>
            <p>напрям вітру у градусах : <span className='info_card_val'>{cityData.current.wind_degree}°</span></p>
        </div>
    </div>
}

export default SearchResult;