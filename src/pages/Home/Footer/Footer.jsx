import './footer.css';
import { Link } from 'react-router-dom';
import FooterLogo from '../../../assets/images/icons/siteLogo.svg';

export const Footer = () => {
	return (
		<footer className="site-footer footer ">
			<div className="footer__top">
				<div className="container d-flex align-items-center">
					<Link className="site-footer__logo" to="/">
						<img
							src={FooterLogo}
							width="210"
							height="36"
							alt="Site footer logo"
						/>
					</Link>
					<ul className="footer__toplist d-flex text-white  m-0 list-unstyled">
						<li className="footer__topitem">Pages</li>
						<li className="footer__topitem">Utility</li>
						<li className="footer__topitem">Subscribe</li>
					</ul>
				</div>
			</div>
			<div className="footer__middle">
				<div className="container">
					<div className="d-flex">
						<div className="footer__middle-wrapper">
							<p className="m-0 footer__desc">
								Leverage agile frameworks to provide a robust
								synopsis for strategy collaborative thinking to
								further the overall value proposition.
							</p>
							<ul className="contact__list footer__list">
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
							</ul>
						</div>
						<div style={{ gap: '90px' }} className="d-flex">
							<ul className="footer__middle-list">
								<li className="footer__middle-item">
									<Link to="/about">About Us</Link>
								</li>
								<li className="footer__middle-item">
									<Link to="/services">Service</Link>
								</li>
								<li className="footer__middle-item">
									<Link to="/project">Our Project</Link>
								</li>
								<li className="footer__middle-item">
									<Link to="/about">Pricing</Link>
								</li>
								<li className="footer__middle-item">
									<Link to="/contact">Contact</Link>
								</li>
							</ul>
							<ul className="footer__middle-list">
								<li className="footer__middle-item">
									<Link to="/about">About Us</Link>
								</li>
								<li className="footer__middle-item">
									<Link to="/services">Services</Link>
								</li>
								<li className="footer__middle-item">
									<Link to="/project">Our Project</Link>
								</li>
								<li className="footer__middle-item">
									<Link to="/about">Pricing</Link>
								</li>
								<li className="footer__middle-item">
									<Link to="/contact">Contact</Link>
								</li>
							</ul>
							<div className="footer__form-wrapper">
								<form
									className="footer__form"
									autoComplete="off"
								>
									<input
										className="footer__input"
										type="email"
										name="user_email"
										placeholder="Email here*"
										aria-label="Email here"
										required
									/>
									<div className="d-flex align-items-center">
										<button className="footer__btn">
											Send Now
										</button>
										<ul className="list-unstyled d-flex pt-3 gap-4">
											<li>
												<a href="" target="blank">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="22"
														height="22"
														viewBox="0 0 22 22"
														fill="none"
													>
														<path
															d="M20.0104 0.125L1.85845 0.125C0.866598 0.125 0 0.838669 0 1.81887L0 20.0111C0 20.9967 0.866598 21.8749 1.85845 21.8749L20.0051 21.8749C21.0023 21.8749 21.7499 20.9908 21.7499 20.0111L21.7499 1.81887C21.7557 0.838669 21.0023 0.125 20.0104 0.125ZM6.74199 18.2546L3.62612 18.2546L3.62612 8.56669L6.74199 8.56669L6.74199 18.2546ZM5.29183 7.09371H5.2695C4.27231 7.09371 3.62661 6.3514 3.62661 5.42217C3.62661 4.47596 4.2893 3.75112 5.30883 3.75112C6.32835 3.75112 6.95221 4.47062 6.97454 5.42217C6.97406 6.3514 6.32835 7.09371 5.29183 7.09371ZM18.1296 18.2546L15.0138 18.2546L15.0138 12.9575C15.0138 11.6884 14.5603 10.8213 13.433 10.8213C12.5717 10.8213 12.062 11.4039 11.8353 11.9714C11.7503 12.1753 11.7275 12.453 11.7275 12.7366L11.7275 18.2546L8.61161 18.2546L8.61161 8.56669L11.7275 8.56669L11.7275 9.91489C12.1809 9.26919 12.8893 8.33997 14.5375 8.33997C16.5829 8.33997 18.1301 9.68817 18.1301 12.5948L18.1296 18.2546Z"
															fill="white"
														/>
													</svg>
												</a>
											</li>
											<li>
												<a href="" target="blank">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="22"
														height="22"
														viewBox="0 0 23 18"
														fill="none"
													>
														<path
															d="M22.2211 2.74428C21.4156 3.09399 20.5635 3.32438 19.6915 3.42818C20.6079 2.89196 21.297 2.04007 21.6297 1.03229C20.7633 1.53855 19.817 1.89377 18.8313 2.08273C18.4162 1.64804 17.9171 1.30223 17.3641 1.06633C16.8111 0.830423 16.2159 0.709346 15.6147 0.710457C13.1804 0.710457 11.2104 2.65041 11.2104 5.04183C11.2087 5.37446 11.2468 5.70611 11.324 6.02968C9.57849 5.94791 7.86923 5.50294 6.30563 4.72324C4.74202 3.94353 3.3585 2.84626 2.24358 1.50164C1.85244 2.16056 1.64558 2.91237 1.64463 3.6785C1.64463 5.1804 2.42877 6.50797 3.61281 7.28574C2.9113 7.2691 2.22416 7.08356 1.60974 6.74487V6.79851C1.60974 8.89938 3.1306 10.6471 5.14351 11.045C4.76499 11.1458 4.37493 11.1969 3.98318 11.1969C3.70521 11.1974 3.42787 11.1705 3.15521 11.1165C3.71479 12.8374 5.34346 14.089 7.27273 14.1247C5.70506 15.332 3.78038 15.9846 1.80119 15.9798C1.44987 15.9792 1.09889 15.9584 0.75 15.9172C2.76344 17.2019 5.1039 17.8815 7.4928 17.875C15.6053 17.875 20.0373 11.2729 20.0373 5.54693C20.0373 5.35919 20.0323 5.17146 20.0234 4.98819C20.8836 4.37673 21.6278 3.61686 22.2211 2.74428Z"
															fill="white"
														/>
													</svg>
												</a>
											</li>
											<li>
												<a href="" target="blank">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="22"
														height="22"
														viewBox="0 0 24 22"
														fill="none"
													>
														<path
															fill-rule="evenodd"
															clip-rule="evenodd"
															d="M23.2207 11.233C23.2207 5.28459 18.0714 0.461426 11.7207 0.461426C5.37003 0.461426 0.220703 5.28459 0.220703 11.233C0.220703 16.6092 4.42539 21.0654 9.92383 21.8743L9.92383 14.3476L7.00313 14.3476L7.00313 11.233L9.92383 11.233L9.92383 8.85988C9.92383 6.16074 11.6411 4.66859 14.2676 4.66859C15.526 4.66859 16.8423 4.87921 16.8423 4.87921L16.8423 7.53027L15.3915 7.53027C13.9637 7.53027 13.5171 8.36026 13.5171 9.21333L13.5171 11.233L16.7063 11.233L16.197 14.3476L13.5176 14.3476L13.5176 21.8752C19.016 21.0669 23.2207 16.6106 23.2207 11.233Z"
															fill="white"
														/>
													</svg>
												</a>
											</li>
										</ul>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__bottom">
				<div className="container d-flex justify-content-between ">
					<span className="copywright">
						Copyright © TransitFlow | Designed by VictorFlow -
						Powered by Webflow.
					</span>
					<ul className="d-flex m-0 text-white list-unstyled gap-5">
						<li className="footer__item">Style Guide</li>
						<li className="footer__item">License</li>
						<li className="footer__item">Changelog</li>
						<li className="footer__item">Password</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};
