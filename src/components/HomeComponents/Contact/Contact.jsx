import { Partners } from '../Partners/Partners';
import './contact.css';
import StudioGreen from '../../../assets/images/home/studio-green.png';
import StudioGreenLogo from '../../../assets/images/icons/studio-green.svg';

import Norto from '../../../assets/images/home/Norto.png';
import NortoLogo from '../../../assets/images/icons/Norto-logo.svg';

import PointsOne from '../../../assets/images/home/points-one.png';
import PointsOneLogo from '../../../assets/images/icons/points-one.svg';

import Sandbox from '../../../assets/images/home/sandbox.png';
import SandboxLogo from '../../../assets/images/icons/sandbox-logo.svg';

export const Contact = () => {
	return (
		<section className="contact">
			<div className="container">
				<div className="contact__wrapper">
					<div className="contact__subwrapper">
						<span className="cause__badge contact__badge">
							Contact
						</span>
						<h2 className="cause__title contact__title">
							Get in touch with us
						</h2>
						<p className="contact__desc">
							Leverage agile frameworks to provide a robust
							synopsis for strategy foster collaborative thinking
							to further the overall value.
						</p>

						<ul className="contact__list">
							<li className="contact__item">
								<div>
									<p>Email</p>
									<a href="mailto:contact@logistics.com">
										contact@logistics.com
									</a>
								</div>
							</li>
							<li className="contact__item">
								<div>
									<p>Call us</p>
									<a href="tel:00112365489">
										(00) 112 365 489
									</a>
								</div>
							</li>
							<li className="contact__item">
								<div>
									<time dateTime="2023-08-13">
										Mon - Sat 9.00 - 18.00 <br /> Sunday
										Closed
									</time>
								</div>
							</li>
						</ul>
					</div>
					<form className="contact__form" autoComplete="off">
						<input
							className="contact__input"
							type="text"
							name="user_name"
							placeholder="Your name*"
							aria-label="Your name"
						/>
						<input
							className="contact__input"
							type="email"
							name="user_email"
							placeholder="Email*"
							aria-label="Email*"
						/>
						<input
							className="contact__input"
							type="tel"
							name="user_number"
							placeholder="Phone Number*"
							aria-label="Phone Number*"
						/>
						<input
							className="contact__input"
							type="text"
							name="user_city"
							placeholder="City*"
							aria-label="City*"
						/>
						<textarea
							className="contact__input contact__textarea"
							name="user_feedback"
							cols="30"
							rows="10"
							placeholder="Your Message"
						></textarea>
						<button className="contact__button" type="suibmit">
							Submit Message
						</button>
					</form>
				</div>
				<aside className="partners">
					<div className="container">
						<ul className="partners__home row p-0">
							<Partners
								backgroundImage={StudioGreen}
								Logo={StudioGreenLogo}
							/>
							<Partners
								backgroundImage={Norto}
								Logo={NortoLogo}
							/>
							<Partners
								backgroundImage={PointsOne}
								Logo={PointsOneLogo}
							/>
							<Partners
								backgroundImage={Sandbox}
								Logo={SandboxLogo}
							/>
						</ul>
					</div>
				</aside>
			</div>
		</section>
	);
};
