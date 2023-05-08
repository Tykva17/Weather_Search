import baseUrl from "./baseInfo";
import sendRequest from "./sendRequest";
function PopularList({ cityName, getResult }){

    const searchPopularCity = (e) => {
        let serachUrl = `${baseUrl}&q=${e.currentTarget.innerText}&lang=uk`;
        sendRequest(serachUrl)
            .then(
                data => {
                    getResult(data);
                }
            )
            .catch( data => console.error(data))
    }

    return <p className='popular_city-item w-75 btn btn-outline-dark' onClick={searchPopularCity}>{cityName}</p>;

}
export default PopularList;