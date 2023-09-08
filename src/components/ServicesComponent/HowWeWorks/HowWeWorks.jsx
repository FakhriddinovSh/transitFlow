import './howework.css';
import WorkerImage from '../../../assets/images/services/worker.png';
import ServiceImage from '../../../assets/images/services/howwework.png';
import { ProcessItem } from '../ProcessItem/ProcessItem';

export const HowWeWorks = () => {
	return (
		<section className="process">
			<div className="container">
				<span className="cause__badge">Our Goodness</span>
				<h2 className="cause__title">How We Works</h2>

				<div className="process__wrapper">
					<div className="process__inner">
						<img
							src={WorkerImage}
							width="486"
							height="726"
							alt="Worker image"
						/>
						<img
							src={ServiceImage}
							width="349"
							height="333"
							alt="ServiceImage"
						/>
					</div>
					<ul className="process__list">
						<ProcessItem />
						<ProcessItem />
						<ProcessItem />
					</ul>
				</div>
			</div>
		</section>
	);
};
