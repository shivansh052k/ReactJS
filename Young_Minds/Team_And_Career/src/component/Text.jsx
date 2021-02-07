import React from 'react';
import './Text.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import './font/css/font-awesome.css';




const Text = () => {
    return (
        <>
            <div className="container-fluid cbox">
                <div className="row crow1">
                    <div className="col-md-4 cobox">
                        <h1 id="text1">Our Team & Careers</h1>
                        
                        
                    </div>
                    <div className="col-md-5 arrow">
                        <a href="#" >
                        <i class="fa fa-angle-left fa-3x ar" href="#"></i>
                        </a>
                        <a href="#" >
                        <i class="fa fa-angle-right fa-3x" href="#" ></i>
                        </a>
                    </div>
                    <div className="col-md-2 cobox" id="dropdown">
                   
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    Support
                            </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">EXPLORE</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">COMMUNITY</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>

                        </div>


                    </div>
                    <div className="row crow1">
                        <div className="col-md-10 cobox">
                            <h1 className="text2">Enhanced Learning Experience</h1>
                        </div>
                        
                    </div>
                    <div className="row crow1">
                        <div className="col-md-12 cobox">
                            <h5 id="text3">Discover the platform that gives you the freedom to track and manage your learning experience efficiently & effectively then ever before.</h5>
                        </div>

                    </div>
                </div>


        </>
    );
}
export default Text;