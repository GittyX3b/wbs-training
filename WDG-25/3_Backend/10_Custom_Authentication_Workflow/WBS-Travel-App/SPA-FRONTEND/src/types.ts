declare global {
	type Post = {
		_id: string;
		title: string;
		author: string;
		image: string;
		content: string;
	};

	type User = {
		email: string;
		firstName: string;
		lastName: string;
		roles?: string[];
	};
}
