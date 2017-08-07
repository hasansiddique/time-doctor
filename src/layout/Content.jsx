import React, {Component} from 'react';
import UsersWidget from './widgets/UsersWidget';
import ActivityWidget from './widgets/ActivityWidget';

class Content extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <ActivityWidget/>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <UsersWidget/>
                </div>
            </div>
        );
    }
}

export default Content;
