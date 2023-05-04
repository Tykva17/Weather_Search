import search from '../img/magnifying-glass-solid.svg';

function NoneResult(){

    return <div className='card container p-4 d-flex flex-column align-items-center'>
                <div className='w-25'>
                    <img src={search} alt="search"/>
                </div>
                <div>
                    <h3>
                        Enter valid city for search
                    </h3>
                </div>
            </div>


}

export default NoneResult;