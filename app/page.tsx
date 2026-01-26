'use client';

import HeroSection from './components/HeroSection';
import {SkillsSection} from './components/SkillsSection2';
import ContactSection from './components/ContactSection';
import Experience from './components/WorkExperience'
import Projects from './components/Projects';

export default function MobileDevPortfolio() {
	return (
		<main className="
			min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-x-hidden
			snap-y snap-mandatory overflow-y-scroll h-screen
		">
			<div className="snap-always snap-center">
				<HeroSection />
			</div>

			<div className="snap-always snap-center">
				<SkillsSection />
			</div>

			<div className="snap-always snap-center">
				<Projects />
			</div>		

			<div className="snap-always snap-center">
				<Experience />
			</div>

			<div className="snap-always snap-end">
				<ContactSection />
			</div>
			
		</main>
	);
}
