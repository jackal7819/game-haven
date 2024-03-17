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
		<div className='max-w-[514px] h-[393px] border border-white'>
			{game.title}
		</div>
	);
};

export default CardGame;
