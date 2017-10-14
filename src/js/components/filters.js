import React from 'react';
import {connect} from 'react-redux';

class Filters extends React.Component {
  

  getItem = () => (
     this.props.store.dataReducer.data.map((val)=> (
            <div key={val.id} className="col-4">
                <div className="blockStyle">
                    <h6>{val.title}</h6>
                    <div className="flex">
                        <span>userId : {val.userId}</span>
                        <span>postId : {val.id}</span>
                        <span>Date : {val.ts}</span>
                    </div>
                    <div className="textBox">{val.body}</div>
                </div>
            </div>
        ))
   );
  render() {
    return (
        <div>
            <div>{this.getItem()}</div>
        </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (obj) => dispatch(obj)
    };
};
const mapStateToProps = (state) => {
    return {
        store : state
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
