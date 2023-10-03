import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import styles from './ProductCard.module.css';

export default function ProductCard(props){
    const navigate = useNavigate();
    
    const handleAddToCart = async () => {
        try {
            await axios.post('http://localhost:8000/addProductToCart',{
                imgurl: props.srcLink,
                productName: props.productName,
                category: props.category,
                price: props.price, 
                quantity: 1,
                email: props.email,
            });
            props.setCartCount(props.cartCount + 1);
        } catch(err) {
            console.log('error in adding product to cart',err);
        }   
    }

    const handleHeadingOnClick = (id) => {
        navigate(`/productdetails/${id}`);
    }

    return(
        <main>
            <div className={styles.product}>
                <img className={styles.imageContainer} src={props.srcLink} alt="Product" height={"450"} width={"250"} />
                <button className={styles.myButton} onClick={handleAddToCart}>Add to Cart</button>
                <h3 onClick={() => handleHeadingOnClick(props.id)}>{props.productName}</h3>
                <p style={{textAlign:'center', color:'blue', fontWeight: 'bold'}}>{props.category}</p>
                <p className={styles.myPara}>${props.price}</p>
            </div>
        </main>
    );
}
