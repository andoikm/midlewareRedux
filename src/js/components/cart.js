import React from 'react';
import {connect} from 'react-redux';
import cartIcon from '../../img/cart.png';
import Product from './product';

class Cart extends React.Component {

    getItem = () => {
        let dataReducer = this.props.store.cartReducer.cart;
        let thad = this;
        return Object.keys(dataReducer).map((key) =>
            <Product
                     key = {dataReducer[parseInt(key)].id}
                     item={dataReducer[parseInt(key)].item}
                     count={dataReducer[parseInt(key)].count}
                     changeDateType={thad.props.changeDateType}
            />

        );
    };

    render() {
        let cartCount = Object.keys(this.props.store.cartReducer.cart).length;
        return (
                <div className="rightPart left">
                    <div id="cart">
                        <img className="left" src={cartIcon} alt=""/>
                        <span className="left">{cartCount}</span>
                        <div className="clear"></div>
                    </div>
                    <div className="cartList">{this.getItem()}</div>
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
