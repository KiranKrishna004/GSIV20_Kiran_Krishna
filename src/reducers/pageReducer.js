/** @format */
// const scroller = document.querySelector("#scroller");
const initialState = { page: 1 };

const pageReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_PAGE":
			return { page: state.page + 1 };
		case "RESET":
			return initialState;
		default:
			return state;
	}
};
export default pageReducer;
