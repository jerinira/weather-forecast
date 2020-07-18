import React from 'react';
import './Navbar.css'

const Navbar = (props) => {
    return (
        <div className="nav-container">
            <div className="row d-flex justify-content-center">
                <form className="region d-flex justify-content-center" >
                    <input type="text" className="regioninput" placeholder="Select your city" onChange={(e) => { props.changeRegion(e.target.value) }} />
                    <button class="btn btn-outline-secondary my-2 my-sm-0" onClick={(e) => { props.changeLocation(e) }}>Search</button>
                </form>

            </div>
        </div>
    );
};

export default Navbar;