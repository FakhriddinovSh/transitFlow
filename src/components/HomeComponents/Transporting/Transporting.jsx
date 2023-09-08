import { Link } from 'react-router-dom';
import './transporting.css';
import { TransportingItem } from '../TransportingItem/TransportingItem';

export const Transporting = () => {
	return (
		<section className="transporting">
			<div className="transporting__wrapper">
				<h2 className="transporting__title">
					Transporting Across The World
				</h2>
				<ul className="transporting__list row">
					<TransportingItem />
					<TransportingItem />
					<TransportingItem />
					<TransportingItem />
				</ul>
				<Link className="transporting__link" to="/">
					More Work
				</Link>
			</div>
		</section>
	);
};
