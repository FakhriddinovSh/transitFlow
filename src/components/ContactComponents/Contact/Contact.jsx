import './contactSection.css';

export const ContactSection = () => {
	return (
		<section className="contact-section connect">
			<span className="cause__badge connect__badge">Contact</span>
			<h2 className="cause__title connect__title">
				Get in touch with us
			</h2>
			<p className="connect__desc">
				Leverage agile frameworks to provide a robust synopsis for
				strategy foster collaborative thinking to further the overall
				value.
			</p>
			<ul className="connect__list">
				<li className="connect__item">
					<a href="mailto:Contact@logistics.com">
						Contact@logistics.com
					</a>
				</li>
				<li className="connect__item">
					<a href="tel:00112365489"> (00) 112 365 489</a>
				</li>
				<li className="connect__item">
					<time dateTime="2023-09-09">
						Mon - Sat 9.00 - 18.00 Sunday Closed
					</time>
				</li>
			</ul>
			<div className="container">
				<form className="contact-form" autoComplete="off">
					<input
						className="footer__input connect__input"
						type="text"
						name="user_name"
						placeholder="Your name*"
						required
					/>
					<input
						className="footer__input connect__input"
						type="email"
						name="user_email"
						placeholder="Email*"
						required
					/>
					<input
						className="footer__input connect__input"
						type="tel"
						name="user_number"
						placeholder="Phone Number*"
						required
					/>
					<input
						className="footer__input connect__input"
						type="email"
						name="user_address"
						placeholder="City*"
						required
					/>
					<textarea
						className="footer__input connect__textarea"
						name="user_message"
						cols="30"
						rows="10"
						placeholder="Your Message"
					></textarea>
					<button className="connect__link" type="submit">
						Submit Message
					</button>
				</form>
			</div>
		</section>
	);
};
