import React from 'react';
import {connect} from 'react-redux';
import {filterByDate} from '../actions/actionInitialData';

class Filters extends React.Component {
   constructor(props){
       super(props);
       this.currentDate = false;
       this.sortBy = false;
   }

  changeDateType = (date) => new Date(date).toDateString();

  filterDate = () => (
    (this.props.store.filterDateReducer.date || []).map((item)=>(
        <option key={item} value={item} >{this.changeDateType(item)}</option>
    ))
  );


  filterBy = ()=> {
      this.props.dispatch(filterByDate({
          byDate : this.currentDate.value,
          sortBy : this.sortBy.value
      }));
  };

  render() {
    return (
            <div className="leftPart left filterBlock">
                <div className="filterRow">
                    <p><label>Select Date</label></p>
                    <select
                        onChange={this.filterBy}
                        ref={el=> this.currentDate = el}
                    >
                        {this.filterDate(this.filterBy)}
                    </select>
                </div>
                <div className="filterRow">
                    <p><label>Sort by</label></p>
                    <select
                        onChange={this.filterBy}
                        ref={el => this.sortBy = el}
                    >
                        <option value="userId">USER ID</option>
                        <option value="id">ID</option>
                        <option value="ts">DATE</option>
                    </select>
                </div>

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
