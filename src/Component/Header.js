import React, { Component } from 'react';



class Header extends Component {
    render() {
        return (
        <div className="headPar">
            <div class="wrapper">
            <div className="header">
                <div className="title">
                        Хайлт Test2
                </div>
                <div className="search_box">
                        <input type="text" id="search_input" placeholder="Fliter Table Using Names" />
                </div>

            </div>
            </div>
        </div>
        );
    }
}

export default Header;