/** @format */

import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const RenderImgPage = () => {
	const [movieDeets, setMovieDeets] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_APIKEY}&primary_release_date.gte=2022-03-14/`
			)
			.then((response) => {
				console.log("Promise fulfilled");
				setMovieDeets(response.data);
				console.log("movie deets: ", response.data);
			})
			.catch((e) => {
				console.log("failed");
			});
	}, []);
	console.log(id);

	return (
		<div className='m-2 flex w-full h-60'>
			<img
				className=''
				src={`https://image.tmdb.org/t/p/w500${movieDeets.poster_path}`}
			/>
			<div className='m-2'>
				<div className='text-lg font-semibold'>{movieDeets.title}</div>
				<div className='text-sm mt-1'>
					{movieDeets.release_date} | {movieDeets.runtime} hrs | Director
				</div>
				<div className='text-sm '>Cast: Actor 1, Actor 2, ...</div>
				<div className='mt-2'>Description: {movieDeets.overview}</div>
			</div>
		</div>
	);
};
export default RenderImgPage;
