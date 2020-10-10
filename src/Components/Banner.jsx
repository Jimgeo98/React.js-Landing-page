import React from 'react'
import styles from './Banner.module.css'
import Logo from '../images/p3.jpg'

let sectionStyle = {
    width: "100%",
	height: "800px",
    backgroundImage: `url(${Logo})`,
};


const Banner = () => {

    return (

        <div className={styles.banner_image} style={sectionStyle}>
		    <div className={styles.banner_content}>
			    <h1>Only I can change my life.<br></br><span>No one can do it for me.</span></h1>
			    <p>You only live once, but if you do it right, once is enough.</p>
		    </div>
		</div>
    )
}

export default Banner