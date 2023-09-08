import { SmallCard } from '../../HomeComponents/SmallCard/SmallCard';
import './services.css';
import PlaneIcon from '../../../assets/images/icons/planeIcon.svg';
import WarehouseIcon from '../../../assets/images/icons/warehouse.svg';
import AirfrightIcon from '../../../assets/images/icons/airfright.svg';
import ProjectIcon from '../../../assets/images/icons/project.svg';
import ShippingIcon from '../../../assets/images/icons/shipping.svg';
import CustomerIcon from '../../../assets/images/icons/customer.svg';

export const Services = ({ isActive }) => {
	return (
		<section active={isActive} className="services">
			<div className="container">
				<span className="cause__badge team__badge">What We Do</span>
				<h2 className="cause__title team__title">
					Our Logistics Services
				</h2>

				<ul className="solutions__list">
					<SmallCard
						icon={PlaneIcon}
						title="Sea Transport Services"
						desc="Following the quality of our service thus having gained trust of our many clients."
						display="flex"
					/>
					<SmallCard
						icon={WarehouseIcon}
						title="Warehousing Services"
						desc="Following the quality of our service thus having gained trust of our many clients."
						display="flex"
					/>
					<SmallCard
						icon={AirfrightIcon}
						title="Air Fright Services"
						desc="Following the quality of our service thus having gained trust of our many clients."
						display="flex"
					/>
					<SmallCard
						icon={ProjectIcon}
						title="Project & Exhibition"
						desc="Following the quality of our service thus having gained trust of our many clients."
						display="flex"
					/>
					<SmallCard
						icon={ShippingIcon}
						title="Local Shipping Services"
						desc="Following the quality of our service thus having gained trust of our many clients."
						display="flex"
					/>
					<SmallCard
						icon={CustomerIcon}
						title="Customer Clearance"
						desc="Following the quality of our service thus having gained trust of our many clients."
						display="flex"
					/>
				</ul>
			</div>
		</section>
	);
};
