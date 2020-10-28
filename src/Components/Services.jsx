import React from 'react'
import service1 from '../images/services-1.png'
import service2 from '../images/services-2.png'
import service3 from '../images/services-3.png'
import LightSpeed from 'react-reveal/LightSpeed';
import styles from './Services.module.css'
const Services = () => {

    return (

        <div className={styles.services} id="services">
			<LightSpeed left>
				<h1 className={styles.title}>our Services</h1>
        	</LightSpeed>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam quia, porro repellendus dolore
				repudiandae, accusantium corporis harum vel iste suscipit maiores provident ullam itaque libero minus
				nesciunt consequatur iusto numquam asperiores quod fugiat veniam blanditiis.</p>

			<div className={styles.diff_services}>

				<div className={styles.diff_services_item}>
					<img src={service1} alt="service_image"></img>
					<h3 className={styles.sub_title}>Web Development</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>

				<div className={styles.diff_services_item}>
					<img src={service2} alt="service_image"></img>
					<h3 className={styles.sub_title}>App Development</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>

				<div className={styles.diff_services_item}>
					<img src={service3} alt="service_image"></img>
					<h3 className={styles.sub_title}>PSD to HTML</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>

			</div>
		</div>
    )
}

export default Services