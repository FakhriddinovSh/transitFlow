import { SmallCard } from '../SmallCard/SmallCard';
import './solutions.css';
import PlaneIcon from '../../../assets/images/icons/planeIcon.svg';
import WarehouseIcon from '../../../assets/images/icons/warehouse.svg';
import AirfrightIcon from '../../../assets/images/icons/airfright.svg';
import ShippingIcon from '../../../assets/images/icons/shipping.svg';

export const Solutions = () => {
	return (
		<section className="solutions">
			<div className="container">
				<div className="solutions__wrapper">
					<div className="solutions__heading">
						<span className="solutions__badge">What We Do</span>
						<h2 className="solutions__title">
							Safe & Reliable Cargo Solutions
						</h2>
					</div>
					<ul className="solutions__list">
						<SmallCard
							icon={PlaneIcon}
							title="Sea Transport Services"
							desc="Following the quality of our service thus having gained trust of our many clients."
						/>
						<SmallCard
							icon={WarehouseIcon}
							title="Warehousing Services"
							desc="Following the quality of our service thus having gained trust of our many clients."
						/>
						<SmallCard
							icon={AirfrightIcon}
							title="Air Fright Services"
							desc="Following the quality of our service thus having gained trust of our many clients."
						/>
						<SmallCard
							icon={ShippingIcon}
							title="Local Shipping Services"
							desc="Following the quality of our service thus having gained trust of our many clients."
						/>
					</ul>
				</div>
			</div>
		</section>
	);
};
