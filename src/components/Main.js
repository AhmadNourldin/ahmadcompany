//This is the Main section of the App
const Main = () => {
    return(
        //The Root container of the Main
        <div className="Main">
            {/* The Base Container of the Main Section */}
            <div className="Main_Container">
                <div className="Main_BackgroundColorName">
                    Background Color :&nbsp;
                    <span className="Main_ColorName">#F1f5f8</span>
                </div>
                {/* This Button Is going to change the background-color
                And the Name of the Background in the Main_BackgroundColorName */}
                <button className="Main_Button">CLICK ME</button>
            </div>
        </div>
    )
};

export default Main;