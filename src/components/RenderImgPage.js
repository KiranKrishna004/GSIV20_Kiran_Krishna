/** @format */

import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const RenderImgPage = () => {
	const { id } = useParams();
	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/movie/675353?api_key=${process.env.REACT_APP_APIKEY}&primary_release_date.gte=2022-03-14/`
			)
			.then((response) => {
				console.log("Promise fulfilled");
				console.log("movie deets: ", response.data);
			})
			.catch((e) => {
				console.log("failed");
			});
	}, []);
	console.log(id);

	return (
		<div>
			<>Hello</>
		</div>
	);
};
export default RenderImgPage;
