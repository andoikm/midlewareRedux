import React, { Component } from 'react';
import {connect} from 'react-redux';
import cartIcon from '../../img/cart.png';
import {AddToCart} from '../actions/actionInitialData';
import {deleteProductFromCart} from '../actions/actionInitialData';
class Product extends Component {
    constructor(props) {
        super(props);
        this.state={
            count : this.props.count || 0
        };
    }

    prodCount = (e) => {
        let count = parseInt(e.target.value);
        if(count >= 0){
            this.setState({
                count,
            });
        } else {
            this.setState({
                count : 0
            });
        }
    };

    productCount = (e) => {
        let { count } = this.state;
        if (e.target.innerHTML === '+'){
             count++;
        } else if(count){
             count--;
        }
        this.setState({
            count,
        });
    };

    deleteProduct = (key) => {
        this.props.dispatch(deleteProductFromCart(key))
    };

    addCart = () => {
        this.props.dispatch(AddToCart({
            id : this.props.item.id,
            count : this.state.count,
            item : this.props.item
        }));
    };

    render() {
        const {item} = this.props;
        return(
            <div key={item.id} className="col-4">
                { this.props.deleteBtn > 0 &&
                    <span
                        className="deleteBtn"
                        onClick={this.deleteProduct.bind(this,this.props.deleteBtn )}>x
                    </span>
                }
                <div className="blockStyle">
                    <h6>{item.title}</h6>
                    <div className="flex">
                        <span>userId : {item.userId}</span>
                        <span>postId : {item.id}</span>
                        <span>Date : {this.props.changeDateType(item.ts)}</span>
                    </div>
                    <div className="textBox">{item.body}</div>
                    <div className="btnGroup">
                        <span className="minus"  onClick = {this.productCount}>-</span>
                        <span className="count"><input onChange={this.prodCount} className="coutNumber" type="text" value={this.state.count}/></span>
                        <span className="plus" onClick = {this.productCount} >+</span>
                        <span className="addToCard" onClick={this.addCart}>
                      <img src={cartIcon} alt=""/>
                  </span>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
