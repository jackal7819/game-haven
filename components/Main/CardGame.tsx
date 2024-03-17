interface CardGameProps {
	id: number;
	title: string;
	date: string;
	price: string;
	rating: number;
	image: string;
}

const CardGame: React.FC<CardGameProps> = ({id, title, date, price, rating, image}) => {
	return <div className='max-w-[514px] h-[393px] border border-white'>{title}</div>;
};

export default CardGame;
