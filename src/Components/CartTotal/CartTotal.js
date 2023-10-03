import React from "react";
import styles from './CartTotal.module.css';

export default function CartTotal(props){
    return(
        <main>
            <div className={styles.container}>
                <h1>Cart Total</h1>
                <table style={{width:'100%'}}>
                    <tbody>
                        <tr className={styles.myTrow}>
                            <th style={{padding: '10px'}}>SUBTOTAL</th>
                            <td>{props.bill}</td>
                        </tr>
                        <tr className={styles.myTrow}>
                            <th style={{padding: '10px'}}>SHIPPING</th>
                            <td>Enter your shipping address to see</td>
                        </tr>
                        <tr className={styles.myTrow}>
                            <th style={{padding: '10px'}}>TOTAL</th>
                            <td>$ {props.bill}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className={styles.myChecoutButton}>PROCEED TO CHECKOUT</button>
        </main>
    );
}