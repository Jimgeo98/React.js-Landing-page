import React from 'react'
import LightSpeed from 'react-reveal/LightSpeed';
import styles from './Email.module.css'


function Email() {
    return (
        <div className={styles.sec}>
            <LightSpeed left className={styles.speed}>
                <h2>Contact</h2>
			</LightSpeed>
            <div className={styles.mail} id="contact">
                <div className={styles.mess}>
                    <h3>Sent us e-mail from more !</h3>
                </div>
                <div className={styles.arr}>
                    <i className="fas fa-long-arrow-alt-right fa-2x"></i>
                </div>
                <div className={styles.info}>
                    <h1>info@cdmarket.gr</h1>
                </div>
            </div>
        </div>
    )
}


export default Email
