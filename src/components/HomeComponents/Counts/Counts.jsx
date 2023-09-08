import './counts.css';

export const Counts = ({ count, title }) => {
	return (
		<li className="counts__item">
			<span className="counts__number">{count}</span>
			<p className="counts__name">{title}</p>
		</li>
	);
};
