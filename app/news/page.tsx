import New from '@/components/News/New';
import Pagination from '@/components/News/Pagination';
import Sales from '@/components/News/Sales';
import Upcoming from '@/components/News/Upcoming';

const News = () => {
	return (
		<div className='container'>
			<h1 className='xl:text-5xl text-[32px] font-bold font-orbitron mb-14'>
				Latest news
			</h1>
			<New />
			<New />
			<New />
			<Upcoming />
			<New />
			<New />
			<New />
			<Sales />
			<New />
			<New />
			<New />
			<Pagination />
		</div>
	);
};

export default News;
