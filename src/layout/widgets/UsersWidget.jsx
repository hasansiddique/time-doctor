import React, {Component} from 'react';
import HighCharts from '../../HighCharts/HighCharts';
import MobileUser from './MobileUsers';
import MenuDropdown from './../dropdowns/MenuDropdown';
import DurationDropdown from './../dropdowns/DurationDropdown';
import threeDot from './../../three-dot.png';
import durationIcon from './../../nest-menu-icon.png';

class UsersWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenu: false,
            isDays: false,
            duration: 'Weekly'
        };
    }

    toggleMenu() {
        const _this = this;
        this.setState({
            isMenu: !_this.state.isMenu,
            isDays: false
        });
    }

    toggleDurationMenu(duration) {
        const _this = this;
        this.setState({
            isMenu: false,
            duration: duration,
            isDays: !_this.state.isDays
        });
    }

    render() {
        const _this = this;
        const {isMenu, isDays, duration} = this.state;

        return (
            <div className="widget">
                <div className="widget-header">
                    Highest percentage of Mobile Time Users

                    <span className="widget-menu">
                        <a href="javascript:void(0)" onClick={_this.toggleDurationMenu.bind(_this, duration)}>
                            <span className="menu-text">{duration}</span>
                            <img className="days-icons" src={durationIcon} alt="Menu" height={10}/>
                        </a>
                        <a href="javascript:void(0)" onClick={_this.toggleMenu.bind(_this)}>
                            <img src={threeDot} alt="Menu" height={18}/>
                        </a>
                    </span>

                    {isMenu && (
                        <MenuDropdown
                            toggleMenu={_this.toggleMenu.bind(_this)}/>
                    )}

                    {isDays && (
                        <DurationDropdown
                            activity={false}
                            toggleDurationMenu={_this.toggleDurationMenu.bind(_this)}/>
                    )}
                </div>

                <div className="row widget-content widget-content-user">
                    <div className="col-sm-5">
                        <MobileUser
                            name={'Elle Javier - Quingco'}
                            time={'9h 20m'}
                            color={"elle"}/>

                        <MobileUser
                            name={'Lester Douglas'}
                            time={'1h 25m'}
                            color={"lester"}/>

                        <MobileUser
                            name={'Dmitry Shytsko'}
                            time={'30m'}
                            color={"dmitry"}/>
                    </div>
                    <div className="col-sm-7">
                        <HighCharts/>
                    </div>
                </div>

                <div className="widget-footer">
                    <span className="bottom-users">
                        <span className="bottom-badge" style={{background: '#FFB200'}}>
                            TY
                        </span>
                        <span className="bottom-badge" style={{background: '#5A68C6'}}>
                            NO
                        </span>
                    </span>
                    <span className="label label-default lowest">highest</span>
                </div>
            </div>
        );
    }
}

export default UsersWidget;
