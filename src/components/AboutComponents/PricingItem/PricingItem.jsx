import { Link } from 'react-router-dom';
import './pricingitem.css';
import { StyledLi } from './Pricing.styled';

export const PricingItem = ({ price, plan, active }) => {
	return (
		<StyledLi active={active} className="pricing__item">
			<h3 className="pricing__subtitle">{plan}</h3>
			<p className="pricing__price">
				${price} <span>/month</span>
			</p>
			<ul className="pricing__sublist">
				<li className="pricing__subitem">Single Truck</li>
				<li className="pricing__subitem">Full Insurance</li>
				<li className="pricing__subitem">500 Km</li>
				<li className="pricing__subitem">Real-time rate shopping</li>
			</ul>
			<Link className="pricing__link" to="#">
				Choose
			</Link>
		</StyledLi>
	);
};
