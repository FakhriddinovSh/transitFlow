import HeroBg from '../../assets/images/project/projectBg.png';
import { MainHero } from '../../components/HomeComponents/MainHero/MainHero';
import ProjectOne from '../../assets/images/project/project1.png';
import ProjectTwo from '../../assets/images/project/project2.png';
import ProjectThree from '../../assets/images/project/project3.png';
import ProjectFour from '../../assets/images/project/project4.png';
import ProjectFive from '../../assets/images/project/project5.png';
import ProjectSix from '../../assets/images/project/project6.png';
import { Counts } from '../../components/HomeComponents/Counts/Counts';

export const Project = () => {
	return (
		<main className="site-main">
			<MainHero
				badge="Gallery"
				backgroundImage={HeroBg}
				title="Our Project"
				display="none"
			/>
			<section>
				<div className="container">
					<ul className="list-unstyled pt-5 pb-5 d-flex justify-content-center flex-wrap gap-4">
						<li>
							<img
								src={ProjectOne}
								width="346"
								height="380"
								alt="Project image"
							/>
						</li>
						<li>
							<img
								src={ProjectTwo}
								width="346"
								height="380"
								alt="Project image"
							/>
						</li>
						<li>
							<img
								src={ProjectThree}
								width="346"
								height="380"
								alt="Project image"
							/>
						</li>
						<li>
							<img
								src={ProjectFour}
								width="346"
								height="380"
								alt="Project image"
							/>
						</li>
						<li>
							<img
								src={ProjectFive}
								width="346"
								height="380"
								alt="Project image"
							/>
						</li>
						<li>
							<img
								src={ProjectSix}
								width="346"
								height="380"
								alt="Project image"
							/>
						</li>
					</ul>
				</div>
			</section>
			<ul className="counts__list">
				<Counts count="24" title="Our Location" />
				<Counts count="1294" title="Delivered Packages" />
				<Counts count="3594" title="Satisfied Clients" />
				<Counts count="247+" title="Owned Vehicles" />
			</ul>
		</main>
	);
};
