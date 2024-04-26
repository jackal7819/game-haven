import Filters from '@/components/Catalog/Filters';
import GamesCatalog from '@/components/Catalog/GamesCatalog';
import Pagination from '@/components/News/Pagination';

const Catalog = () => {
	return (
		<div className='container'>
			<h1>Catalog</h1>
			<div className='flex gap-3'>
				<Filters />
				<div>
					<GamesCatalog />
					<Pagination />
				</div>
			</div>
		</div>
	);
};

export default Catalog;
