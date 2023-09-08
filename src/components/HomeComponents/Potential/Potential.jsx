import './potential.css';
import PotentialImage from '../../../assets/images/home/potential.png';

export const Potential = () => {
	return (
		<section className="potential">
			<div className="potential__left">
				<div className="container">
					<img
						src={PotentialImage}
						width="829"
						height="750"
						alt="Potential image Airplane"
					/>
				</div>
			</div>
			<div className="potential__right">
				<div className="cause__content">
					<span className="cause__badge">Why Us</span>
					<h2 className="cause__title">
						We provide full range global logistics solution
					</h2>
					<p className="cause__desc">
						Leverage agile frameworks to provide a robust synopsis
						for strategy foster collaborative thinking to further
						the overall value proposition.
					</p>
					<ul className="cause__list potential__list">
						<li>
							<ul className="cause__list potential__sublist">
								<li className="cause__item">Safe Package</li>
								<li className="cause__item">Global Tracking</li>
								<li className="cause__item">
									In Time Delivery
								</li>
							</ul>
						</li>

						<li>
							<ul className="cause__list potential__secondlist">
								<li className="cause__item">Ship Everyware</li>
								<li className="cause__item">24/7 Support</li>
								<li className="cause__item">
									Transparant Pricing
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};
