/** @format */
import axios from "axios";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
const Home = () => {
	const page = 2;
	const [results, setResults] = useState([]);
	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&page=${page}&primary_release_date.gte=2022-03-14`
			)
			.then((response) => {
				console.log("Promise fulfilled");
				setResults(response.data.results);
			})
			.catch((e) => {
				console.log("failed");
			});
	}, []);
	console.log(results);
	return (
		<div className='flex flex-wrap'>
			{" "}
			{results.map((data, index) => {
				return (
					<MovieCard
						key={data["title"]}
						imgLink={data["poster_path"]}
						deets={data["overview"]}
						title={data["title"]}
					/>
				);
			})}
		</div>
	);
};
export default Home;
