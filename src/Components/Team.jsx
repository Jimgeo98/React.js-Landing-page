import React from 'react'
import image1 from '../images/team1.jpg'
import image2 from '../images/team2.jpg'
import image3 from '../images/team3.jpg'
import image4 from '../images/team4.jpg'
import image5 from '../images/team5.jpg'
import image6 from '../images/team6.jpg'
import styles from './Team.module.css'
import LightSpeed from 'react-reveal/LightSpeed';


const Team = () => {

    return (

        <div className={styles.ourteam} id="ourteam">

			<LightSpeed left>
				<h1 className={styles.title}>our team</h1>
        	</LightSpeed>

			<div className={styles.ourteam_wrapper}>

				<div className={styles.team1} id={styles.team}>
					<div className={styles.team_members} data-name="nathan john"><img src={image1} alt="Team_Images"></img>
					</div>
					<div className={styles.team_members} data-name="Alyssa Healy"><img src={image2} alt="Team_Images"></img>
                    </div>
					<div className={styles.team_members} data-name="Alec Stewart"><img src={image3} alt="Team_Images"></img>
					</div>
				</div>

				<div className={styles.team2} id={styles.team}>
					<div className={styles.team_members} data-name="Michael Rippon"><img src={image4} alt="Team_Images"></img>
					</div>
					<div className={styles.team_members} data-name="Meg Lanning"><img src={image5} alt="Team_Images"></img>
					</div>
					<div className={styles.team_members} data-name="Sophie Devine"><img src={image6} alt="Team_Images"></img>
					</div>
				</div>

			</div>

		</div>
    )
}

export default Team