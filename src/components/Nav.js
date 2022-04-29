//The navigation bar of the at the Top of the page 
//It is going to be Static No Need for the state management 
const Nav = () => {
    return(
        // The main nav container
        <div className="Navbar">
            {/* This container Is going to hold the nav */}
            <div className="Navbar_Container">
                {/* This is the Logo and the Link to the same page */}
                <a className="Navbar_Logo" href="/">Color Flipper</a>
                <div className="Navbar_Option_Button">
                    {/* This Button Is going to switch the colors from
                     names to codes */}
                    <button>Simple</button>
                    <button>Hex</button>
                </div>
            </div>
        </div>
    )
};

export default Nav;