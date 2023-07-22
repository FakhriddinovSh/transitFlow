import './solutions.css';
import { SmallCard } from '../SmallCard/SmallCard';

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
						<SmallCard />
						<SmallCard />
						<SmallCard />
						<SmallCard />
					</ul>
				</div>
			</div>
		</section>
	);
};
