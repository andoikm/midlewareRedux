import React from 'react';
import {connect} from 'react-redux';
import Filters from './filters';
class Home extends React.Component {
    render() {
        return (
            <div>
                <Filters/>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(Home);
