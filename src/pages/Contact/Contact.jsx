import HeroBg from '../../assets/images/contact/contactbg.png';
import { ContactSection } from '../../components/ContactComponents/Contact/Contact';
import { MainHero } from '../../components/HomeComponents/MainHero/MainHero';

export const Contact = () => {
	return (
		<main>
			<MainHero
				badge="Contact"
				backgroundImage={HeroBg}
				title="Contact Us"
				display="none"
			/>
			<ContactSection />
		</main>
	);
};
