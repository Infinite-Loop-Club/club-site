import Hero from './Hero';
import Features from './Features';
import CTA from './CTA';
import Members from './Members';
import { ElectionBanner, Footer } from 'components';

export default function App() {
	return (
		<>
			<ElectionBanner />
			<Hero />
			<Features />
			<CTA />
			<Members />
			<Footer />
		</>
	);
}
