/** @format */
import "./Moviecard.css";
const MovieCard = ({ imgLink, deets, title }) => {
	const handleClick = (e) => {};
	return (
		<div className='p-5 rounded-lg' onClick={handleClick}>
			<div className='moviecard rounded overflow-hidden shadow-lg'>
				<img className='w-full' src={imgLink} alt='Movie Img' />
				<div className='ml-1'>
					<div className='flex justify-between'>
						<div className='font-bold '>{title}</div>
						<div className='text-gray-500'>(rating)</div>
					</div>
					<p className='text-gray-700'>{deets}</p>
				</div>
			</div>
		</div>
	);
};
export default MovieCard;
