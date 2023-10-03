import React from "react";
import styles from './Error.module.css';

export default function Error(){
    return(
        <main>
            <div className={styles.container}>
                <h1>ERROR 404. INVALID ROUTE!!</h1>
            </div>
        </main>
    );
}