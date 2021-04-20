import React from 'react'
import styles from './Header.module.scss'

const NavBar = () => {

    return (

        <div className={styles.navbar} id="nav">
			<div className={styles.logo}>
				<a href="/"><i className="fas fa-code"></i> Coding Market</a>
			</div>
			<div className={styles.navbar_items}>
				<ul>
					<li><a href="#about">about</a></li>
					<li><a href="#services">services</a></li>
					<li><a href="#ourteam">team</a></li>
					<li><a href="#contact">contact</a></li>
				</ul>
			</div>
		</div>
        
    )
}

export default NavBar