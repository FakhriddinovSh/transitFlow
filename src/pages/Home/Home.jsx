import { Contact } from '../../components/HomeComponents/Contact/Contact';
import { Feedback } from '../../components/HomeComponents/Feedback/Feedback';
import { HomeCounts } from '../../components/HomeComponents/HomeCounts/HomeCounts';
import { MainHero } from '../../components/HomeComponents/MainHero/MainHero';
import { Potential } from '../../components/HomeComponents/Potential/Potential';
import { Solutions } from '../../components/HomeComponents/Solutions/Solutions';
import { Team } from '../../components/HomeComponents/Team/Team';
import { Transporting } from '../../components/HomeComponents/Transporting/Transporting';
import { WhyUs } from '../../components/HomeComponents/WhyUs/WhyUs';
import SeaImage from '../../assets/images/home/footerTop.png';
import HeroBg from '../../assets/images/home/heroBg.png';

export const Home = () => {
	return (
		<>
			<main className="site-main">
				<MainHero
					badge="Logistics & Supply Chain Solutions"
					backgroundImage={HeroBg}
					title="Your Gateway 
					to any Destination in the World"
					display="block"
				/>
				<Solutions />
				<WhyUs />
				<HomeCounts />
				<Transporting />
				<Feedback />
				<Potential />
				<Team />
				<Contact />
				<img
					style={{ width: '100%' }}
					src={SeaImage}
					width="1320"
					height="412"
					alt="Sea image"
				/>
			</main>
		</>
	);
};
