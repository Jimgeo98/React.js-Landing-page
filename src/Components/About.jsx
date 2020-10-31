import React from 'react'
import styles from './About.module.css'
import LightSpeed from 'react-reveal/LightSpeed';
import abimg from '../images/aboutimg.jpg'
const About = () => {

    return (
		<div className={styles.us}  id="about">
			<LightSpeed left className={styles.speed}>
				<h1 className={styles.title}>About Us</h1>
			</LightSpeed>
			<div className={styles.about}>
				<div className={styles.cont}>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, eveniet temporibus reprehenderit. Veniam
						sunt corrupti necessitatibus quam, quia doloribus nesciunt ut eveniet, alias aspernatur eum perferendis
						commodi doloremque recusandae tenetur quis cumque voluptatibus officiis ea excepturi dignissimos!
						Repellat molestias iusto dicta facere ipsum, harum maiores illum laborum tenetur? Explicabo, cupiditate!
						Morbi vulputate purus ornare, dictum lacus et, faucibus dolor. Sed et libero maximus, varius nisl id, porttitor ante.
						Etiam at lorem sed massa lacinia finibus eget sit amet nunc. Fusce in fermentum eros, nec cursus ligula.
						Quisque condimentum nec risus nec ultricies. Nullam molestie eleifend mattis. Nullam ut vehicula ex.
						In fermentum accumsan felis, in interdum mi dignissim sed. Duis elementum ac ante maximus aliquet.
						Duis at arcu vel turpis dictum ornare vitae eget diam. Duis vel suscipit libero, eu ultricies velit.
						Morbi vulputate purus ornare, dictum lacus et, faucibus dolor. Sed et libero maximus, varius nisl id, porttitor ante.
						In id nibh interdum, condimentum purus id, tempor metus. Integer et turpis ut odio convallis elementum. Aenean ut varius ipsum.
						Aliquam in pretium dolor, id ultrices ligula. Nam mattis sollicitudin est,
						ac lacinia lorem iaculis convallis. Phasellus commodo augue eu nisi lacinia, ut posuere ante tristique.
					</p>
				</div>
				<div className={styles.image}>
					<img src={abimg} alt="about_image"></img>
				</div>
			</div>
		</div>

    )
}

export default About