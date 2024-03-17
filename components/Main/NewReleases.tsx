import Link from 'next/link';
import { GoChevronRight } from 'react-icons/go';
import { games } from '@/data';

import CardGame from './CardGame';

const NewReleases = () => {
	return (
		<div className='mx-auto mb-20 max-w-[1920px] px-40'>
			<div className='flex items-center justify-between gap-5 mb-14'>
				<h2 className='text-[40px] font-medium'>New Releases</h2>
				<Link
					href='/'
					className='flex items-center justify-center gap-2 px-6 py-4 border rounded-2xl w-44 h-14 border-[#0166FB] text-[#0166FB] hover:border-[#1ECDF8] hover:text-[#1ECDF8] duration-300 text-xl'
				>
					See more <GoChevronRight size={24} />
				</Link>
			</div>
			<div className='grid grid-cols-3 gap-7'>
				{games.map((game) => (
					<CardGame key={game.id} game={game} />
				))}
			</div>
		</div>
	);
};

export default NewReleases;
