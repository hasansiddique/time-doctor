import React, {Component} from 'react';

class DurationDropDown extends Component {
    toggleDuration(monthly) {
        const {activity} = this.props;

        let duration = '';
        if (monthly && activity) {
            duration = 'Last Month'
        } else if (monthly && !activity) {
            duration = 'Monthly';
        } else if (!monthly && activity) {
            duration = 'Last Seven Days'
        } else if (!monthly && !activity) {
            duration = 'Weekly';
        }

        this.props.toggleDurationMenu(duration);
    }

    render() {
        const _this = this;
        const {activity} = this.props;

        return (
            <div className="drop-down-menu">
                <div className="menu-item"
                     onClick={_this.toggleDuration.bind(_this, true)}>
                    {activity ? 'Last Month' : 'Monthly'}
                </div>
                <div className="menu-item"
                     onClick={_this.toggleDuration.bind(_this, false)}>
                    {activity ? 'Last Seven Days' : 'Weekly'}
                </div>
            </div>
        );
    }
}

export default DurationDropDown;
