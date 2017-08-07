import React from 'react';

const MobileUser = props => (
    <div className="row mobile-user">
        <div className={"col-xs-1 color " + (props.color)}>&nbsp;</div>
        <div className="col-xs-5 name">
            <div>{props.name}</div>
            <div className="time">{props.time}</div>
        </div>
    </div>
);

export default MobileUser;
