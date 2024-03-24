'use client';

import Image from 'next/image';
import { CiHeart, CiShoppingCart, CiStar } from 'react-icons/ci';
import { FaRegStar, FaStar } from 'react-icons/fa';

interface Game {
	id: number;
	title: string;
	date: string;
	price: string;
	rating: number;
	image: string;
}

interface CardGameProps {
	game: Game;
}

const CardGame: React.FC<CardGameProps> = ({ game }) => {
	return (
		<div className='max-w-[514px] h-[393px] flex flex-col gap-2 hover:shadow-lg hover:shadow-slate-700 rounded-xl duration-300 hover:-translate-y-3 cursor-pointer'>
			<div className='rounded-xl'>
				<Image
					className='rounded-xl'
					src={game.image}
					alt={game.title}
					width={514}
					height={261}
				/>
			</div>
			<div className='flex flex-col justify-between flex-1 gap-2 p-4'>
				<div className='flex items-center justify-between w-full'>
					{/* <p>{game.date}</p> */}
					<div className='flex gap-1'>
						{Array.from({ length: 5 }, (_, i) =>
							game.rating > i ? (
								<FaStar
									key={i}
									size={19}
									className='fill-[#DB5B32]'
								/>
							) : (
								<FaRegStar
									key={i}
									size={19}
									className='fill-[#DB5B32]'
								/>
							)
						)}
					</div>
					<p className='text-2xl'>{game.price} €</p>
				</div>
				<div className='flex items-center justify-between w-full'>
					<h2 className='flex-1 text-2xl'>{game.title}</h2>
					<div className='flex items-center justify-center p-3'>
						<CiHeart size={27} />
					</div>
					<div className='flex items-center justify-center p-3 bg-[#DB5B32] rounded-full'>
						<CiShoppingCart size={18} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardGame;
