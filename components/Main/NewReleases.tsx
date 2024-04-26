'use client';
import Link from 'next/link';
import { GoChevronRight } from 'react-icons/go';
import { games } from '@/data';
import CardGame from './CardGame';

const NewReleases: React.FC = () => {
	const innerWidth = window.innerWidth;
	const visible = innerWidth >= 1920 ? 8 : 6;
	return (
		<div className='mb-20 md:container'>
			<div className='container flex items-center justify-between gap-5 mb-14'>
				{/* TITLE */}
				<h2 className='xl:text-[40px] text-[32px] font-medium font-orbitron'>
					New Releases
				</h2>
				{/* DESKTOP LINK */}
				<Link
					href='/'
					className='items-center justify-center hidden gap-2 px-4 py-4 text-transparent duration-300 border rounded-lg md:flex border-b-light-blue w-44 h-14 border-r-blue border-t-blue border-l-light-blue hover:border-r-light-blue hover:border-b-blue hover:border-l-blue hover:border-t-light-blue group'
				>
					<span className='text-xl bg-gradient-to-r from-blue to-light-blue bg-clip-text group-hover:bg-gradient-to-l'>
						See more
					</span>
					<GoChevronRight
						size={24}
						className='mt-[3px] text-blue group-hover:text-light-blue'
					/>
				</Link>
				{/* MOBILE LINK */}
				<Link href='/' className='md:hidden'>
					<GoChevronRight
						size={24}
						className='mt-[3px] text-blue hover:text-light-blue'
					/>
				</Link>
			</div>
			{/* DESKTOP CARDS */}
			<div className='hidden grid-cols-1 gap-4 md:grid md:grid-cols-2 xl:grid-cols-3 4xl:gap-7 xl:gap-5 2xl:gap-6 4xl:grid-cols-4'>
				{games.slice(0, visible).map((game) => (
					<CardGame key={game.id} game={game} />
				))}
			</div>
			{/* MOBILE CARDS */}
			<div className='mx-4 md:hidden'>
				<div className='w-full gap-1 p-px pb-8 carousel rounded-box md:hidden profile'>
					{games.map((game) => (
						<CardGame key={game.id} game={game} />
					))}
				</div>
			</div>
		</div>
	);
};

export default NewReleases;
