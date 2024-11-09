import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
	return {
		book_id: params.id,
	};
};