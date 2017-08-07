import React, {Component} from 'react';
import ActivityUser from './ActivityUsers';
import MenuDropdown from './../dropdowns/MenuDropdown';
import DurationDropdown from './../dropdowns/DurationDropdown';
import threeDot from './../../three-dot.png';
import durationIcon from './../../nest-menu-icon.png';

class ActivityWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenu: false,
            isDays: false,
            duration: 'Last Seven Days'
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
                    Keyboard & Mouse Activity

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
                            activity={true}
                            toggleDurationMenu={_this.toggleDurationMenu.bind(_this)}/>
                    )}
                </div>

                <div className="widget-content">
                    <ActivityUser
                        color={'#F65161'}
                        initials={'RM'}
                        name={'Raju Mazumder'}
                        value={13}/>

                    <ActivityUser
                        color={'#EE352E'}
                        initials={'KB'}
                        name={'Khurram Butt'}
                        value={13}/>

                    <ActivityUser
                        color={'#5A68C6'}
                        initials={'EM'}
                        name={'Eslam Mahmoud'}
                        value={16}/>

                    <ActivityUser
                        color={'#FCB941'}
                        initials={'ES'}
                        name={'Evgeny Stashevsky'}
                        value={19}/>

                    <ActivityUser
                        color={'#36C398'}
                        initials={'NO'}
                        name={'Nataliya Oleynyk'}
                        value={25}/>
                </div>

                <div className="widget-footer">
                    <span className="bottom-users">
                        <span className="bottom-badge" style={{background: '#F65161'}}>
                            MJ
                        </span>
                        <span className="bottom-badge" style={{background: '#00D2ED'}}>
                            DM
                        </span>
                        <span className="bottom-badge" style={{background: '#36C398'}}>
                            MI
                        </span>
                    </span>
                    <span className="more-text">+900 more</span>
                    <span className="label label-default lowest">lowest</span>
                </div>
            </div>
        );
    }
}

export default ActivityWidget;
