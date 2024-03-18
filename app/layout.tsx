import './globals.css';

import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import { Orbitron, Montserrat } from 'next/font/google';
import type { Metadata } from 'next';


const orbitron = Orbitron({
  variable: '--font-orbitron',
  weight: ["400", "500", "700"],
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ["400", "500", "700"],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
	title: 'Game Haven',
	description: 'The best game store in the world',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={`${orbitron.variable} ${montserrat.variable}`}>
			<body className={`${montserrat.className} bg-linear-dark-blue min-h-screen text-light`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
