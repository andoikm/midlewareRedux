import React from 'react';
import {connect} from 'react-redux';
import {filterData} from '../actions/actionInitialData'

class Filters extends React.Component {
   constructor(props){
       super(props);
       this.currentDate = false;
   }

  changeDateType = (date) => new Date(date).toDateString();

  filterDate = () => (
    (this.props.store.filterDateReducer.date || []).map((item)=>(
        <option key={item} value={item} >{this.changeDateType(item)}</option>
    ))
  );


  filterByDate = ( )=> {
      // console.log(this.currentDate.value);
      // this.props.store.dispatch(
      //
      // )
  };





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
    console.log(this.props.store);
    return (
        <div>
            <div className="leftPart left">
                <select
                    onChange={this.filterByDate}
                    ref={el=> this.currentDate = el}
                >
                    {this.filterDate()}
                    </select>
            </div>
            <div className="center left">{this.getItem()}</div>
            <div className="rightPart left"></div>
            <div className="clear"></div>
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
