import React, {Component} from 'react';
import headerLogo from './../time-doctor-logo.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNavItem: 'dashboard'
        };
    }

    handleNavItemClick(selectedItem) {
        this.setState({selectedNavItem: selectedItem});
    }

    render() {
        const _this = this;
        const {selectedNavItem} = this.state;

        return (
            <div className="header">
                <nav className="navbar navbar-default navbar-fixed-top top-bar">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a href="javascript:void(0)" className="navbar-brand">
                                <img src={headerLogo} alt="Time Doctor" height={50}/>
                            </a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className={"dropdown " + (selectedNavItem === 'dashboard' ? "active" : "")}>
                                <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown"
                                   onClick={_this.handleNavItemClick.bind(_this, 'dashboard')}>
                                    Dashboard
                                    <span className="caret"></span>
                                </a>
                            </li>
                            <li className={(selectedNavItem === 'editTime' ? "active" : "")}>
                                <a href="javascript:void(0)" onClick={_this.handleNavItemClick.bind(_this, 'editTime')}>
                                    Edit Time
                                </a>
                            </li>
                            <li className={(selectedNavItem === 'screenshots' ? "active" : "")}>
                                <a href="javascript:void(0)"
                                   onClick={_this.handleNavItemClick.bind(_this, 'screenshots')}>
                                    Screenshots
                                </a>
                            </li>
                            <li className={"dropdown " + (selectedNavItem === 'reports' ? "active" : "")}>
                                <a href="javascript:void(0)" onClick={_this.handleNavItemClick.bind(_this, 'reports')}>
                                    Reports
                                    <span className="caret"></span>
                                </a>
                            </li>
                            <li className={"dropdown " + (selectedNavItem === 'payments' ? "active" : "")}>
                                <a href="javascript:void(0)" onClick={_this.handleNavItemClick.bind(_this, 'payments')}>
                                    Payments
                                    <span className="caret"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="company-dashboard">
                    Company Dashboard
                </div>
            </div>
        );
    }
}

export default Header;
