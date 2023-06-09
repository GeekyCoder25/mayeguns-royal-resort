import './styles/globals.css';
import Navbar from './components/Navbar';
import './styles/fontawesome-free-6.1.1-web/css/all.css';
import React from 'react';
import Footer from './components/Footer';
import LegalPopup from './components/LegalPopup';
import {Analytics} from '@vercel/analytics/react';

export const metadata = {
	title: 'Mayegun Royal Resort',
	description: 'Mayegun Royal Resort website',
	keywords: ['mayegun', 'royal', 'resort', 'hotel', 'mayeguns', 'resorts'],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body>
				<Navbar metadata={metadata} />
				{children}
				<Footer />
				<LegalPopup />
				<Analytics />
			</body>
		</html>
	);
}
