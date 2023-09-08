import { PricingItem } from '../PricingItem/PricingItem';
import './pricing.css';
export const Pricing = () => {
	return (
		<section className="pricing">
			<div className="container">
				<span className="cause__badge pricing__badge">Pricing</span>
				<h2 className="cause__title team__title">Our Best Pricing</h2>
				<ul className="pricing__list">
					<PricingItem price="39" plan="Basic" />
					<PricingItem price="59" plan="Standard" active={'true'} />
					<PricingItem price="89" plan="Premium" />
				</ul>
			</div>
		</section>
	);
};
