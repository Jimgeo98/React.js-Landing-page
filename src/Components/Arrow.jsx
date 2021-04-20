import React from 'react'
import arr from '../images/arrow.png'
import styles from './Arrow.module.scss'

const Arrow = () => {

    return (
        <div className={styles.arrow}>
			<a href="#nav"><img src={arr} alt="up_arrow"></img></a>
		</div>
    )
}

export default Arrow