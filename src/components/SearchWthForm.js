import baseUrl from './baseInfo';
import { useState } from "react";
import sendRequest from "./sendRequest";

function SearchWthForm({ getResult, getError }){

    const [searchCity, setSearchSity] = useState('');
    let serachUrl = `${baseUrl}&q=${searchCity}&lang=uk`;
    const handleSearchSubmit = () => {
        sendRequest(serachUrl)
            .then(
                data => {
                    getResult(data);
                }
            )
            .catch( data => {
                getError(data)
            })
    }

    const handleSearch = (e) => {
        setSearchSity(e.currentTarget.value)
    }

    return <div className='row d-flex justify-content-center container'>
        <div className='input-group w-75'>
            <input className='form-control col-6'  type="text"
                   value={searchCity}
                   onChange={handleSearch}/>
            <button className='btn text-uppercase btn-outline-dark col-3' onClick={handleSearchSubmit}>search</button>
        </div>
    </div>
}

export default SearchWthForm