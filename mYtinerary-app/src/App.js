import React, {Component} from 'react';
import Member from "./components/Member"

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="home">
                    <div className="logo-title">
                        <img src="./pictures/MYtineraryLogo.png"></img>
                        <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
                    </div>
                    <div className="start">
                        <h2>Start browsing</h2>
                        <img src="./pictures/circled-right-2.png"></img>

                    </div>
                    <div className="user-profile">
                        <p>Want to build your own MYtinerary?</p>
                        <div className="login-account">
                            <a href="#">Log in</a>
                            <a href="#">Create Account</a>
                        </div>

                    </div>
                    <div className="logo-home">
                        <img src="./pictures/homeIcon.png"></img>
                    </div>

                </div>
            </div>

        );
    }
}

export default App;
