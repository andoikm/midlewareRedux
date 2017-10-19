import React from 'react';
import {connect} from 'react-redux';
import cartIcon from '../../img/cart.png';

class Cart extends React.Component {
    constructor(props){
        super(props);
    }

    getItem = () => {
        let {store} = this.props;
        let obj =

        return store.cartReducer.cart.map((item)=><h1>item.count</h1>);
    };

    render() {
        return (
                <div className="rightPart left">
                    <div id="cart"><img src={cartIcon} alt=""/></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
