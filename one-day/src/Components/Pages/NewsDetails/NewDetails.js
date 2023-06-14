import React from 'react';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';

const NewDetails = () => {
    let location = useLocation()
    ///use locationun isi js de windovs.locationla eyni isi gorur
    /// path name verir  bize lazim olan urldeki melumatlari verir.. !!!!
    let parms = useParams()
    ///// use params ise bize dinamik olan datalarimizi verir queryparamslari veriri mens ?pages=3& ve  s...

    let useSerachParams = useSearchParams()
    console.log(location)
    return (
        <div>
            <Link to='/news'>News</Link>
            this is  NewDetails pages

        </div>
    )
}

export default NewDetails