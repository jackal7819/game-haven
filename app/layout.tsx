import './globals.css';

import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

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
		<html lang='en'>
			<body className={`${inter.className} bg-gradient-to-br from-[#1f1559] via-[#030035] to-[#1f1559] min-h-screen text-blue-50`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
