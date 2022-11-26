import React, { Fragment } from 'react'
import classes from './Cart.module.css'
import Modal from './Modal'

const Cart = props => {
    const cartItems = (<ul className={classes['cart-items']}>{[
        { id: 'c1', name: 'Chicken DumBiryani', amount: 20, price: 99.99 }].map((item) =>
            (<li>{item.name}</li>))}</ul>);
    
            return (
        <Fragment>
            <Modal onClose = {props.onClose}>
                {cartItems}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>300</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.onClose}>
                        Close
                    </button>
                    <button className={classes.button}>
                        Order
                    </button>
                </div>
            </Modal>
        </Fragment>
    );
};

export default Cart