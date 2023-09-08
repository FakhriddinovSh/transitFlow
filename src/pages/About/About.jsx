import { MainHero } from '../../components/HomeComponents/MainHero/MainHero';
import HeroBg from '../../assets/images/about/heroBg.png';
import { Overview } from '../../components/AboutComponents/Overview/Overview';
import { Services } from '../../components/AboutComponents/Services/Services';
import { Team } from '../../components/HomeComponents/Team/Team.jsx';
import { Feedback } from '../../components/HomeComponents/Feedback/Feedback.jsx';
import { Pricing } from '../../components/AboutComponents/Pricing/Pricing.jsx';
import { Partners } from '../../components/HomeComponents/Partners/Partners';
import StudioGreen from '../../assets/images/home/studio-green.png';
import StudioGreenLogo from '../../assets/images/icons/studio-green.svg';
import Norto from '../../assets/images/home/Norto.png';
import NortoLogo from '../../assets/images/icons/Norto-logo.svg';
import PointsOne from '../../assets/images/home/points-one.png';
import PointsOneLogo from '../../assets/images/icons/points-one.svg';
import Sandbox from '../../assets/images/home/sandbox.png';
import SandboxLogo from '../../assets/images/icons/sandbox-logo.svg';

export const About = () => {
	return (
		<main className="site-main">
			<MainHero
				badge="About Us"
				backgroundImage={HeroBg}
				title="About Our Logistics"
				display={'none'}
			/>
			<Overview />
			<Services />
			<Team />
			<Feedback bg={'true'} />
			<Pricing />
			<aside className="partners about-partners">
				<div className="container">
					<ul className="partners__home row p-0">
						<Partners
							backgroundImage={StudioGreen}
							Logo={StudioGreenLogo}
						/>
						<Partners backgroundImage={Norto} Logo={NortoLogo} />
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
		</main>
	);
};
