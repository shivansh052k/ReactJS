import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Text.css';
import Journeytabbar from './Journeytabbar';

const Joinbar = () => {
    return (
        <>
        <div className="row crow">
                    <div className="col-md-10 cobox">
                        <h1 className="text2">Our Journey</h1>
                    </div>
         </div>
        <Journeytabbar />
        
        </>
    );
};

export default Joinbar;