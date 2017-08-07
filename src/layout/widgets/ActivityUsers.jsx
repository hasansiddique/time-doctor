import React from 'react';

const ActivityUser = props => (
    <div className="row user">
        <span className="col-xs-1">
            <span className="user-badge" style={{background: props.color}}>
                {props.initials}
            </span>
        </span>
        <span className="col-xs-4 user-name">
            {props.name}
        </span>
        <span className="col-xs-5 user-activity">
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={props.value} aria-valuemin="0"
                     aria-valuemax="100"
                     style={{width: props.value + '%', background: '#EE352E'}}>
                </div>
            </div>
        </span>
        <span className="col-xs-2 user-value">
            {props.value}%
        </span>
    </div>
);

export default ActivityUser;
