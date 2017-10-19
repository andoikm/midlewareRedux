import React from 'react';
import {connect} from 'react-redux';
import Filters from './filters';
import Cart from './cart';
import Product from './product';
class Home extends React.Component {

    constructor(props){
        super(props);
        this.currentDate = false;
        const store = this.props.store;
        this.state = {
            count : 0
        };
    }

    changeDateType = (date) => new Date(date).toDateString();

    sortBy = (sortType) => {
        debugger;
    };


    getItem = () => {
        let dataReducer = this.props.store.dataReducer;
        let filterData = (this.props.store.filterDateReducer) ? this.props.store.filterDateReducer.filter : false ;

        return dataReducer.data
            .filter((item) => {
                if(Object.keys(filterData).length) {
                    if(filterData.byDate){
                        return item.ts == filterData.byDate;
                    }
                }else{
                    return true;
                }
            })
            .sort(function (a, b) {
              return filterData.sortBy ? a[filterData.sortBy] - b[filterData.sortBy] : 0
            })
            .map((item , key) =>
                <Product key = {key}
                    item={item}
                    changeDateType={this.changeDateType}
                />
            );

    };
    render() {
        return (
            <div>
                <Filters/>
                <div className="center left">{this.getItem()}</div>
                <Cart/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
