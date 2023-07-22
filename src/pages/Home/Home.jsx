import { Header } from '../../components/Header/Header';
import { MainHero } from '../../components/MainHero/MainHero';
import { Solutions } from '../../components/Solutions/Solutions';
import { WhyUs } from '../../components/WhyUs/WhyUs';

export const Home = () => {
	return (
		<>
			<Header />
			<main>
				<MainHero />
				<Solutions />
				<WhyUs />
			</main>
		</>
	);
};
