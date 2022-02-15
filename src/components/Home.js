/** @format */
import axios from "axios";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
	const dispatch = useDispatch();
	const [searchParams, setSearchParams] = useSearchParams();
	console.log("Params: ", searchParams.get("query"));
	//Year-Month-Date
	const todayDate = new Date().toISOString().slice(0, 10);

	//Passing state to component
	const page = useSelector((state) => state.page);
	console.log("page state :", page);
	const [results, setResults] = useState([]);

	//Handle Scroll
	const [maxheight, setMaxHeight] = useState(0);
	const handleScroll = () => {
		const bottom = document.documentElement.offsetHeight;
		console.log("height: ", bottom);
		const position = document.documentElement.scrollTop + window.innerHeight;
		console.log("postition: ", position);
		if ((position === bottom) & (bottom > maxheight)) {
			setMaxHeight(bottom);
			console.log(maxheight);
			dispatch({ type: "ADD_PAGE" });
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	useEffect(() => {
		const query = searchParams.get("query");
		const apiUrl = !query
			? `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&page=${page}&primary_release_date.gte=${todayDate}`
			: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&query=${query}&page=${page}`;
		axios
			.get(apiUrl)
			.then((response) => {
				console.log("Promise fulfilled");
				if (!query) {
					setResults(results.concat(response.data.results));
				} else {
					if (page > 1) {
						setResults(results.concat(response.data.results));
					} else {
						setResults(response.data.results);
					}
				}
				console.log(results);
			})
			.catch((e) => {
				console.log("failed");
			});
	}, [page, searchParams]);

	return (
		<div className='flex flex-wrap'>
			{" "}
			{results.map((data, index) => {
				return (
					<div key={data.title}>
						<Link to={`/movie/${data.id}`}>
							<MovieCard
								imgLink={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
								deets={data.overview}
								title={data.title}
							/>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Home;
