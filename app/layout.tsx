import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Tiago Marques - Software engineer',
	description:
		'Software engineer and Fullstack developer, web applications, mobile apps, server and Artificial Inteligence. Lets build awesome right now.',
	keywords: [
		'Mobile Developer',
		'iOS Developer',
		'Android Developer',
		'React Native',
		'Flutter',
		'Swift',
		'Kotlin',
		'Mobile Apps',
		'Cross-Platform Development',
		'Native Development',
		'Mobile UI/UX',
		'App Store',
		'Play Store',
		'Mobile Architecture',
		'Tiago Marques',
	],
	authors: [{ name: 'Tiago Marques' }],
	creator: 'Tiago Marques',
	openGraph: {
		title: 'Tiago Marques - Mobile Developer Portfolio',
		description: 'Passionate mobile developer creating exceptional iOS and Android applications. Explore my projects and app development expertise.',
		url: 'https://your-domain.com',
		siteName: 'Tiago Marques - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Tiago Marques - Mobile Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Tiago Marques - Mobile Developer',
		description: 'Passionate mobile developer creating exceptional iOS and Android applications. Explore my projects and app development expertise.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
