/** @format */
import MovieCard from "./MovieCard";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
test("renders ", () => {
	render(
		<MovieCard
			imgLink='https://image.tmdb.org/t/p/w500/6zNROEm1IFpUy1SbCbxoQYFn46v.jpg'
			deets='Hello there, General Kenobi'
			title='Micheal Jackson funeral'
		/>
	);

	const element = screen.getByText("Hello there, General Kenobi");
	expect(element).toBeDefined();
});
