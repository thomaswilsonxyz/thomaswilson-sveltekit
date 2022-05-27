export type PostMetadata = {
	title: string;
	author: string;
	slug: string;
	draft: boolean;
	date: Date;
	html: string;
	content: string

	image?: string;
	book_review?: boolean;
	finished?: string;
	score?: number; // out of 5
	tags?: string[];
	links?: { country: string; store_name: string; link: string }[];
};

export type Post = PostMetadata & { filename: string };
