import './overview.css';
import Scania from '../../../assets/images/about/scania.png';
import ScaniaDriver from '../../../assets/images/about/scania-driver.png';

export const Overview = () => {
	return (
		<section className="overview">
			<div className="container">
				<div className="overview__wrapper d-flex">
					<div className="position-relative w-50">
						<img
							src={Scania}
							width="486"
							height="726"
							alt="Truck image"
						/>
						<img
							className="position-absolute"
							style={{ right: '140px', bottom: '0px' }}
							src={ScaniaDriver}
							width="239"
							height="233"
							alt="Truck driver image"
						/>
					</div>
					<div className="cause__content">
						<span class="cause__badge">About Us</span>
						<h2 class="cause__title">Our Company Overview</h2>
						<p class="cause__desc">
							Leverage agile frameworks to provide a robust
							synopsis for strategy foster collaborative thinking
							to further the overall value proposition.
						</p>
						<p class="cause__desc">
							Sed ut perspiciatis, unde omnis iste natus error sit
							voluptatem accusantium doloremque laudantium, totam
							rem aperiam eaque ipsa, quae ab illo inventore
							veritatis et quasi architecto beatae vitae dicta
							sunt, explicabo. Nemo enim ipsam voluptatem quia
							voluptassit.
						</p>
						<a class="transporting__link overview__link" href="/">
							Learn More
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
