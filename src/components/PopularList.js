import baseUrl from "./baseInfo";

function PopularList({ cityName, sendRequest, getResult }){

    const handleClickPC = (e) => {
        let serachUrl = `${baseUrl}&q=${e.currentTarget.innerText}&lang=uk`;
        sendRequest(serachUrl)
            .then(
                data => {
                    getResult(data);
                }
            )
            .catch( data => console.log(data))
    }

    return <p className='popular_city-item w-75 btn btn-outline-dark' onClick={handleClickPC}>{cityName}</p>;

}

export default PopularList;