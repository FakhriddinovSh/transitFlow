import './whyus.css';
import AirPlane from '../../assets/images/home/airplane.png';
import GirlWriting from '../../assets/images/home/girlWriting.png';

export const WhyUs = () => {
	return (
		<section className="cause">
			<div className="cause__wrapper">
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
					<p className="cause__desc">
						Organically grow the holistic world view of disruptive
						innovation via workplace diversity and empowerment.
					</p>
					<ul className="cause__list">
						<li className="cause__item">Delivery On Time</li>
						<li className="cause__item">Optimized Travel Cost</li>
					</ul>
				</div>
				<div style={{ position: 'relative' }}>
					<img
						className="cause__first-img"
						src={AirPlane}
						width="461"
						height="415"
						alt="Airplane Image"
					/>
					<img
						className="cause__last-img"
						src={GirlWriting}
						width="272"
						height="195"
						alt="Girl Writing a Load"
					/>
				</div>
			</div>
		</section>
	);
};
