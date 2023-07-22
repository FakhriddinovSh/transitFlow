import './header.css';
import TransitFlowLogo from '../../assets/images/icons/siteLogo.svg';
import TimeLogo from '../../assets/images/icons/timeLogo.svg';
import TelLogo from '../../assets/images/icons/telLogo.svg';
import EmailLogo from '../../assets/images/icons/emailLogo.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header className="site-header">
			<div className="container">
				<div className="site-header__wrapper">
					<Link to="/">
						<img
							src={TransitFlowLogo}
							width="210"
							height="36"
							alt="TransitFlow's Logo"
						/>
					</Link>
					<ul className="site-header__list">
						<li className="site-header__item">
							<img
								src={TimeLogo}
								width="63"
								height="63"
								alt="Time Logo"
							/>
							<div className="site-header__subwrapper">
								<time
									className="site-header__time"
									dateTime="2023-11-11"
								>
									Mon - Sat 9.00 - 18.00
								</time>
								<p className="site-header__time">
									Sunday Closed
								</p>
							</div>
						</li>
						<li className="site-header__item">
							<img
								src={EmailLogo}
								width="63"
								height="63"
								alt="Time Logo"
							/>
							<div className="site-header__subwrapper">
								<p
									className="site-header__time"
									dateTime="2023-11-11"
								>
									Email
								</p>
								<a
									className="site-header__time"
									href="mailto:contactlogistics@gmail.com"
								>
									contact@logistics.com
								</a>
							</div>
						</li>
						<li className="site-header__item">
							<img
								src={TelLogo}
								width="63"
								height="63"
								alt="Time Logo"
							/>
							<div className="site-header__subwrapper">
								<p
									className="site-header__time"
									dateTime="2023-11-11"
								>
									Call Us
								</p>
								<a
									className="site-header__time"
									href="tel:(00)112365489"
								>
									(00) 112 365 489
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};
