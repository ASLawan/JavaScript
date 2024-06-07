#!/usr/bin/env node

posts = [
	{title: "First Post Title", body: "First Post Content"},
	{title: "Second Post Title", body: "Second Post Content"},
	{title: "Third Post Title", body: "Third Post Content"},
]

function getPosts() {
	setTimeout(() => {
		let outPut = "";
		posts.forEach((post, index) => {
			outPut += `${post.title}\n`;
		});
		console.log(outPut);
	}, 1000);
}

function createPost(post) {
	setTimeout(() => {
		posts.push(post);
	}, 2000);
}

getPosts();
createPost({title: "Happy Birthday Lawan", body: "Wishing you God's blessings and guidance"});
