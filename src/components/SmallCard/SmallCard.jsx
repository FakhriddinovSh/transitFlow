import './smallcard.css';
import PlaneIcon from '../../assets/images/icons/planeIcon.svg';

export const SmallCard = ({ display, icon, title, desc }) => {
	return (
		<li className="small__item">
			<img src={PlaneIcon} width="50" height="56" alt="icon" />
			<div className="small__subwrapper">
				<h3 className="small__title">Sea Transport Services</h3>
				<p className="small__desc">
					Following the quality of our service thus having gained
					trust of our many clients.
				</p>
			</div>
		</li>
	);
};
