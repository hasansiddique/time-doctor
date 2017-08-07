import React, {Component} from 'react';

class MenuDropDown extends Component {
    toggleMenu() {
        this.props.toggleMenu();
    }

    render() {
        const _this = this;

        return (
            <div className="drop-down-menu">
                <div className="menu-item" onClick={_this.toggleMenu.bind(_this)}>
                    Edit Widget
                </div>
                <div className="menu-item" onClick={_this.toggleMenu.bind(_this)}>
                    Delete Widget
                </div>
            </div>
        );
    }
}

export default MenuDropDown;
