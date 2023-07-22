import './mainhero.css';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const MainHero = () => {
	return (
		<section className="hero">
			<header className="hero__header">
				<div className="container">
					<div className="hero__header-wrapper">
						<nav className="hero__navigation">
							<ul className="hero__nav-list">
								<li className="hero__nav-item">
									<NavLink
										className={({ isActive }) =>
											isActive
												? 'hero__nav-link hero__nav-link--active'
												: 'hero__nav-link'
										}
										to="/"
									>
										Home
									</NavLink>
								</li>
								<li className="hero__nav-item">
									<NavLink
										className={({ isActive }) =>
											isActive
												? 'hero__nav-link hero__nav-link--active'
												: 'hero__nav-link'
										}
										to="/about"
									>
										About
									</NavLink>
								</li>
								<li className="hero__nav-item">
									<NavLink
										className={({ isActive }) =>
											isActive
												? 'hero__nav-link hero__nav-link--active'
												: 'hero__nav-link'
										}
										to="/pages"
									>
										Pages
									</NavLink>
								</li>
								<li className="hero__nav-item">
									<NavLink
										className={({ isActive }) =>
											isActive
												? 'hero__nav-link hero__nav-link--active'
												: 'hero__nav-link'
										}
										to="/project"
									>
										Project
									</NavLink>
								</li>
								<li className="hero__nav-item">
									<NavLink
										className={({ isActive }) =>
											isActive
												? 'hero__nav-link hero__nav-link--active'
												: 'hero__nav-link'
										}
										to="/contact"
									>
										Contact
									</NavLink>
								</li>
							</ul>
						</nav>
						<div className="hero__header-wrapper">
							<ul className="hero__header-social">
								<li className="hero__header-item">
									<a href="#">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M14.0759 2.03236C15.173 2.03551 16.2242 2.45628 17 3.20276C17.7757 3.94925 18.213 4.9608 18.2162 6.01648V13.9839C18.213 15.0396 17.7757 16.0511 17 16.7976C16.2242 17.5441 15.173 17.9649 14.0759 17.968H5.79618C4.69911 17.9649 3.6479 17.5441 2.87215 16.7976C2.0964 16.0511 1.65914 15.0396 1.65586 13.9839V6.01648C1.65914 4.9608 2.0964 3.94925 2.87215 3.20276C3.6479 2.45628 4.69911 2.03551 5.79618 2.03236H14.0759ZM14.0759 0.438965H5.79618C2.60821 0.438965 0 2.94878 0 6.01648V13.9839C0 17.0516 2.60821 19.5614 5.79618 19.5614H14.0759C17.2639 19.5614 19.8721 17.0516 19.8721 13.9839V6.01648C19.8721 2.94878 17.2639 0.438965 14.0759 0.438965Z"
												fill="currentColor"
											/>
											<path
												d="M15.3177 6.01677C15.072 6.01677 14.8319 5.94668 14.6277 5.81535C14.4234 5.68403 14.2642 5.49737 14.1702 5.27898C14.0762 5.0606 14.0516 4.82029 14.0995 4.58846C14.1475 4.35662 14.2658 4.14366 14.4395 3.97652C14.6131 3.80937 14.8345 3.69555 15.0754 3.64943C15.3163 3.60331 15.566 3.62698 15.793 3.71744C16.0199 3.8079 16.2139 3.96108 16.3504 4.15763C16.4868 4.35417 16.5597 4.58524 16.5597 4.82162C16.56 4.97866 16.5282 5.13423 16.4659 5.27938C16.4036 5.42454 16.3121 5.55642 16.1967 5.66747C16.0813 5.77852 15.9442 5.86654 15.7934 5.92648C15.6425 5.98642 15.4809 6.01711 15.3177 6.01677ZM9.9358 6.81325C10.5909 6.81325 11.2313 7.00018 11.7759 7.3504C12.3206 7.70061 12.7452 8.19839 12.9958 8.78077C13.2465 9.36316 13.3121 10.004 13.1843 10.6223C13.0565 11.2405 12.7411 11.8084 12.2779 12.2542C11.8146 12.6999 11.2245 13.0035 10.582 13.1264C9.93948 13.2494 9.27351 13.1863 8.66829 12.9451C8.06307 12.7038 7.54578 12.2953 7.18184 11.7712C6.81789 11.2471 6.62364 10.6308 6.62364 10.0005C6.62458 9.15544 6.97384 8.34529 7.59478 7.74777C8.21573 7.15024 9.05765 6.81416 9.9358 6.81325ZM9.9358 5.21986C8.95322 5.21986 7.9927 5.50024 7.17571 6.02554C6.35873 6.55084 5.72196 7.29747 5.34594 8.17101C4.96993 9.04455 4.87154 10.0058 5.06323 10.9331C5.25493 11.8605 5.72809 12.7123 6.42288 13.3809C7.11767 14.0494 8.00289 14.5048 8.96659 14.6892C9.93029 14.8737 10.9292 14.779 11.837 14.4172C12.7448 14.0553 13.5207 13.4426 14.0666 12.6564C14.6125 11.8703 14.9038 10.946 14.9038 10.0005C14.9038 8.73257 14.3804 7.51661 13.4487 6.62007C12.517 5.72353 11.2534 5.21986 9.9358 5.21986Z"
												fill="currentColor"
											/>
										</svg>
									</a>
								</li>
								<li className="hero__header-item">
									<a href="#">
										<svg
											width="22"
											height="20"
											viewBox="0 0 22 20"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M21.4065 10.0578C21.4065 4.74704 16.8092 0.440918 11.1393 0.440918C5.4694 0.440918 0.87207 4.74704 0.87207 10.0578C0.87207 14.8576 4.62602 18.8362 9.53503 19.5583V12.8385H6.92743V10.0578H9.53503V7.93907C9.53503 5.52927 11.0682 4.19708 13.4132 4.19708C14.5366 4.19708 15.7119 4.38512 15.7119 4.38512V6.75199H14.4165C13.1418 6.75199 12.7431 7.49301 12.7431 8.25463V10.0578H15.5904L15.1357 12.8385H12.7435V19.5592C17.6525 18.8375 21.4065 14.8589 21.4065 10.0578Z"
												fill="currentColor"
											/>
										</svg>
									</a>
								</li>
								<li className="hero__header-item">
									<a href="#">
										<svg
											width="20"
											height="16"
											viewBox="0 0 20 16"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M19.5756 2.1537C18.8566 2.46592 18.0958 2.67161 17.3172 2.76428C18.1354 2.28554 18.7507 1.52498 19.0477 0.625233C18.2742 1.07722 17.4293 1.39436 16.5493 1.56306C16.1787 1.17497 15.733 0.866237 15.2393 0.65562C14.7456 0.445004 14.2143 0.336906 13.6775 0.337897C11.5041 0.337897 9.74533 2.06989 9.74533 4.20495C9.74379 4.50193 9.77785 4.79802 9.84677 5.08691C8.28834 5.0139 6.76231 4.61663 5.36632 3.92051C3.97033 3.22439 2.73512 2.24475 1.73972 1.04426C1.39051 1.63255 1.20583 2.30377 1.20497 2.98777C1.20497 4.32866 1.90506 5.51392 2.96217 6.20832C2.33586 6.19346 1.72238 6.02781 1.17382 5.72543V5.77332C1.17382 7.64898 2.53166 9.20937 4.32879 9.56455C3.99084 9.65458 3.64259 9.70019 3.29284 9.70024C3.04467 9.70067 2.79706 9.67661 2.55362 9.6284C3.05322 11.1648 4.5073 12.2823 6.22975 12.3142C4.83014 13.3921 3.11178 13.9746 1.34475 13.9704C1.0311 13.9699 0.717739 13.9512 0.40625 13.9145C2.20385 15.0615 4.29342 15.6682 6.42624 15.6624C13.6691 15.6624 17.6259 9.76808 17.6259 4.65591C17.6259 4.4883 17.6216 4.32068 17.6136 4.15706C18.3816 3.61115 19.046 2.93274 19.5756 2.1537Z"
												fill="currentColor"
											/>
										</svg>
									</a>
								</li>
								<li className="hero__header-item">
									<a href="#">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M18.4415 0.291016H2.2354C1.34987 0.291016 0.576172 0.928181 0.576172 1.80331V18.0454C0.576172 18.9253 1.34987 19.7094 2.2354 19.7094H18.4367C19.327 19.7094 19.9945 18.9201 19.9945 18.0454V1.80331C19.9997 0.928181 19.327 0.291016 18.4415 0.291016ZM6.59543 16.4772H3.81358V7.82777H6.59543V16.4772ZM5.30073 6.51269H5.28079C4.39049 6.51269 3.81401 5.84996 3.81401 5.02034C3.81401 4.17555 4.40566 3.52842 5.3159 3.52842C6.22613 3.52842 6.78311 4.17079 6.80305 5.02034C6.80262 5.84996 6.22613 6.51269 5.30073 6.51269ZM16.7623 16.4772H13.9805V11.7478C13.9805 10.6148 13.5756 9.84069 12.5692 9.84069C11.8002 9.84069 11.3451 10.3608 11.1427 10.8675C11.0669 11.0496 11.0465 11.2975 11.0465 11.5506V16.4772H8.26463V7.82777H11.0465V9.03145C11.4513 8.45496 12.0837 7.62535 13.5553 7.62535C15.3814 7.62535 16.7628 8.82903 16.7628 11.4241L16.7623 16.4772Z"
												fill="currentColor"
											/>
										</svg>
									</a>
								</li>
							</ul>
							<a className="hero__header-quote" href="#">
								Request Quote
							</a>
						</div>
					</div>
				</div>
			</header>
			<div className="container">
				<div className="hero__bottom-wrapper">
					<motion.span
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 1 }}
						className="hero__badge"
					>
						Logistics & Supply Chain Solutions
					</motion.span>
					<motion.h1
						initial={{ x: -250, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1 }}
						className="hero__title"
					>
						Your Gateway to any Destination in the World
					</motion.h1>
					<p className="hero__description">
						In augue ligula, feugiat ut nulla consequat. Ut est
						lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc
						faucibus, nisl id dapibus finibus, enim diam interdum
						nulla, sed laoreet risus lectus.
					</p>
					<Link className="hero__link" to="/">
						Explore More
					</Link>
				</div>
			</div>
		</section>
	);
};
