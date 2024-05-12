import Image from 'next/image';
import { CiHeart, CiHome } from 'react-icons/ci';
import { games } from '@/data';

const GameCardPage = async ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const game = games.find((game) => game.id === Number(id));
	return (
		<div className='container pt-10 pb-20'>
			<div className='flex items-center gap-3 mb-10'>
				<CiHome size={24} />
				<p className='text-blue'>&gt;</p>
				<p className='font-orbitron'>Catalog</p>
				<p className='text-blue'>&gt;</p>
				<p className='font-orbitron'>Trending</p>
				<p className='text-blue'>&gt;</p>
				<p className='font-orbitron text-orange'>
					{game?.title}
				</p>
			</div>
			<section>
				<div className='flex justify-center gap-6'>
					<div>
						<Image
							className='object-cover w-[420px] h-[236px] rounded-xl'
							src={game?.image ? game.image : '/tekken.jpg'}
							alt={game?.title || 'Default Image'}
							width={420}
							height={236}
						/>
					</div>
					<div className='flex flex-col gap-3.5 md:w-1/2'>
						<h1 className='text-3xl truncate font-orbitron '>
							{game?.title}
						</h1>
						<div className='flex justify-between gap-3'>
							<p>Release date</p>
							<p>{game?.date}</p>
						</div>
						<div className='flex items-center justify-between gap-4'>
							<p>Platform</p>
							<select
								name='platform'
								id='platform'
								className='w-32 px-6 py-2 bg-transparent border item text-orange border-orange rounded-2xl'
							>
								<option value='pc'>PC</option>
								<option value='mac'>Mac</option>
								<option value='ps5'>Play station 5</option>
							</select>
						</div>
						<div className='flex justify-center gap-8'>
							<p className='text-orange'>
								<span className='text-white line-through'>
									40 €
								</span>
								&nbsp;&nbsp;&nbsp;28 %
							</p>
							<p className='mr-20'>{game?.price} €</p>
						</div>
						<div className='flex justify-between gap-3'>
							<div className='flex items-center justify-center p-3.5'>
								<CiHeart
									size={24}
									className='duration-500 hover:fill-white text-orange'
								/>
							</div>
							<button className='w-full px-6 py-3 text-2xl duration-500 bg-orange rounded-2xl hover:bg-amber-500'>
								Add to cart
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default GameCardPage;
