import './mainhero.css';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionElement } from './mainhero.styled';

export const MainHero = ({ backgroundImage, title, display, badge }) => {
	return (
		<SectionElement background={backgroundImage} className="hero">
			<div className="container">
				<div className="hero__bottom-wrapper">
					<motion.span
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 1 }}
						className="hero__badge"
					>
						{badge}
					</motion.span>
					<motion.h1
						initial={{ x: -250, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1 }}
						className="hero__title"
					>
						{title}
					</motion.h1>
					<p
						style={{ display: display }}
						className="hero__description"
					>
						In augue ligula, feugiat ut nulla consequat. Ut est
						lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc
						faucibus, nisl id dapibus finibus, enim diam interdum
						nulla, sed laoreet risus lectus.
					</p>
					<Link
						style={{ display: display }}
						className="hero__link"
						to="/"
					>
						Explore More
					</Link>
				</div>
			</div>
		</SectionElement>
	);
};
