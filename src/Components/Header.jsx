import React from 'react'
import styles from './Header.module.css'

const NavBar = () => {

    return (

        <div className={styles.navbar} id="nav">
			<div className={styles.logo}>
				<a href="/index.html"><i className="fas fa-code"></i> Coding Market</a>
			</div>
			<div className={styles.navbar_items}>
				<ul>
					<li><a href="#home">home</a></li>
					<li><a href="#about">about</a></li>
					<li><a href="#services">services</a></li>
					<li><a href="#ourteam">our team</a></li>
				</ul>
			</div>
		</div>
        
    )
}

export default NavBar