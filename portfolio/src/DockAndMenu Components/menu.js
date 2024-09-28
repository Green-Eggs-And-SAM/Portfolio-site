import "./dock.scss";
import Clock from "../Components/Clock";
import Date from "../Components/TodaysDate";
import wifi from "../Assets/icons/wifi.png";

function Menu() {
    return (
        <>
            <div className="menu-bar">
                <div className="left">
                    {/* <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1010px-Apple_logo_white.svg.png"
                        className="apple-logo"
                        alt=""
                    /> */}
                    <span className="menus active">Contact Me</span>
                    <span className="menus">LinkedIn</span>
                    <span className="menus">GitHub</span>
                    <span className="menus">Dark Mode</span>
                </div>
                <div className="right">
                    {/* <div className="menu-ico">
                        <img
                            src="https://freepngimg.com/download/united_states/76187-sound-information-united-business-states-address-email.png"
                            alt=""
                            className="vol"
                        />
                    </div>
                    <div className="menu-ico">
                        <i className="fab fa-bluetooth-b"></i>
                    </div>
                    */}
                    {/* <div className="menu-ico">
                        <i className="fas fa-battery-half"></i>
                    </div>

                    <div className="menu-ico">
                        <i className="fas fa-wifi"></i>
                    </div> */}
                    <div className="menu-ico">
                        <img
                            src="https://eshop.macsales.com/blog/wp-content/uploads/2021/03/control-center-icon.png"
                            alt=""
                            className="control-center"
                        />
                    </div>
                    <div className="menu-ico">
                        <img src={wifi} alt="" className="wifi" />
                    </div>

                    <div className="menu-time">
                        <Date /> <Clock />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;
