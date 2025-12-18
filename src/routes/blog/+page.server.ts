import {
  BlogController,
  type BlogItem,
  type BlogPostListItem,
  type BookReviewListItem,
} from "$lib/blog/BlogController.js";
import type { BookReview } from "$lib/blog/BookReview.js";
import type { Load } from "@sveltejs/kit";
import { differenceInCalendarDays, getYear } from "date-fns";

export const prerender = true;

type PostsGroupedByMonth = Array<{
  yearDate: string;
  posts: (BlogPostListItem | BookReviewListItem)[];
}>;

export const load: Load = async ({}) => {
  const controller = await BlogController.singleton();
  const posts = await controller.getAllBlogPosts();

  const currentYear = getYear(new Date());

  const numberOfPosts = posts.length;
  const firstPost = posts[numberOfPosts - 1];
  const numberOfBlogPostsThisYear: number = posts.filter(
    (post) => getYear(new Date(post.date)) === currentYear,
  ).length;

  const postsGroupedByMonth = posts.reduce((grouped, post) => {
    const yearDate = Intl.DateTimeFormat("en-gb", {
      year: "numeric",
      month: "long",
    }).format(new Date(post.date));

    const index = grouped.findIndex((entry) => entry.yearDate === yearDate);

    if (index === -1) {
      grouped.push({ yearDate, posts: [post] });
    } else {
      grouped[index].posts.push(post);
    }

    return grouped;
  }, [] as PostsGroupedByMonth);

  return {
    posts,
    postsGroupedByMonth,
    firstPost,
    numberOfPosts,
    numberOfBlogPostsThisYear,
  };
};
