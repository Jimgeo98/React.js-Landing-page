import React from 'react'
import styles from './About.module.css'
import LightSpeed from 'react-reveal/LightSpeed';

const About = () => {

    return (

        <div className={styles.about} id="about">
			<LightSpeed left>
				<h1 className={styles.title}>About Us</h1>
			</LightSpeed>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, eveniet temporibus reprehenderit. Veniam
				sunt corrupti necessitatibus quam, quia doloribus nesciunt ut eveniet, alias aspernatur eum perferendis
				commodi doloremque recusandae tenetur quis cumque voluptatibus officiis ea excepturi dignissimos!
				Repellat molestias iusto dicta facere ipsum, harum maiores illum laborum tenetur? Explicabo, cupiditate!
			</p>
		</div>

    )
}

export default About