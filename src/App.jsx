import './app.css';
import { Home } from './pages/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { About } from './pages/About/About';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/HomeComponents/Header/Header';
import { Footer } from './pages/Home/Footer/Footer';
import { ServicesSection } from './pages/Services/Services';
import { Project } from './pages/Project/Project';
import { Contact } from './pages/Contact/Contact';

export const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/services" element={<ServicesSection />} />
				<Route path="/project" element={<Project />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</>
	);
};
