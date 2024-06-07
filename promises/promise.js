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
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post);

			const error = true;

			if (!error) {
				resolve();
			} else {
				reject("Error: Something went wrong!");
			}
		}, 2000);
	});
}

createPost({title: "Happy Birthday Lawan", body: "Wishing you God's blessings and guidance"})
	.then(getPosts)
	.catch(err => console.log(err));
