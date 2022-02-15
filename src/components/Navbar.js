/** @format */
import {
	Link,
	useLocation,
	useSearchParams,
	createSearchParams,
} from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
const Navbar = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const [search, setSearch] = useState("");
	const [searchParams, setSearchParams] = useSearchParams();

	const handleChange = (e) => {
		setSearch(e.target.value);
		setSearchParams(createSearchParams({ query: e.target.value }));
		dispatch({ type: "RESET" });
	};
	return (
		<div className='sticky top-0 bg-white w-full border-solid border-b-2 bg-white'>
			<div className='w-full mb-5 pt-5 flex justify-between items-center'>
				{location.pathname === "/" ? (
					<input
						type='text'
						className='rounded ml-3 bg-gray-200 w-1/2'
						placeholder='Search'
						value={search}
						onChange={handleChange}
					/>
				) : (
					<div className='ml-3 text-lg font-bold '>Movie Details</div>
				)}

				<Link to='/'>
					<button>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5 mr-3'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
						</svg>
					</button>
				</Link>
			</div>
		</div>
	);
};
export default Navbar;
