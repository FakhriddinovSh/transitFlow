import { Counts } from '../Counts/Counts';

export const HomeCounts = () => {
	return (
		<section className="counts">
			<ul className="counts__list">
				<Counts count="1294" title="Delivered Packages" />
				<Counts count="3594" title="Satisfied Clients" />
			</ul>
		</section>
	);
};
