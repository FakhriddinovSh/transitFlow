import { MainHero } from '../../components/HomeComponents/MainHero/MainHero';
import HeroBg from '../../assets/images/services/serviceBg.png';
import { Services } from '../../components/AboutComponents/Services/Services';
import { HowWeWorks } from '../../components/ServicesComponent/HowWeWorks/HowWeWorks';
import { Feedback } from '../../components/HomeComponents/Feedback/Feedback';
import { Counts } from '../../components/HomeComponents/Counts/Counts';

export const ServicesSection = () => {
	return (
		<main className="site-main">
			<MainHero
				badge="Services"
				backgroundImage={HeroBg}
				title="Our Logistics Service"
				display={'none'}
			/>
			<Services />
			<HowWeWorks />
			<Feedback bg={'true'} />
			<ul className="counts__list">
				<Counts count="24" title="Our Location" />
				<Counts count="1294" title="Delivered Packages" />
				<Counts count="3594" title="Satisfied Clients" />
				<Counts count="247+" title="Owned Vehicles" />
			</ul>
		</main>
	);
};
