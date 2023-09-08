import { TeamItem } from '../TeamItem/TeamItem';
import './team.css';
import ExpertImage from '../../../assets/images/home/expertImage.png';
import ExpertImage2 from '../../../assets/images/home/expertImage2.png';
import ExpertImage3 from '../../../assets/images/home/expertImage3.png';

export const Team = () => {
	return (
		<section className="team">
			<div className="container">
				<span className="cause__badge team__badge">
					The Transporters
				</span>
				<h2 className="cause__title team__title">Meet Expert Team</h2>
				<ul className="team__list">
					<TeamItem user_image={ExpertImage} />
					<TeamItem user_image={ExpertImage2} />
					<TeamItem user_image={ExpertImage3} />
				</ul>
			</div>
		</section>
	);
};
