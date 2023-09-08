import { SmallCardItem, SmallCardWrapper } from './SmallCard.styled';
import './smallcard.css';

export const SmallCard = ({ icon, title, desc, display }) => {
	return (
		<SmallCardItem display={display} className="small__item">
			<img src={icon} width="50" height="56" alt="icon" />
			<SmallCardWrapper display={display} className="small__subwrapper">
				<h3 className="small__title">{title}</h3>
				<p className="small__desc">{desc}</p>
			</SmallCardWrapper>
		</SmallCardItem>
	);
};
