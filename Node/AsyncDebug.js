const util = require("util");
const fs = require("fs");
const { resolve } = require("dns");
const { title } = require("process");

const readFile = util.promisify(fs.readFile);

async function processUserData(userId) {
    try {
        console.log(`processing data for user ${userId}...`);

        const userData = await fetchUserData(userId);
        console.log(`User data retrived: ${userData.name}`);

        const posts = await getUserPosts(userId);
        console.log(`Retrived ${posts.length} posts for user`);

        const processPosts = posts.map(post => {
            return {
                id: post.id,
                title: post.title.toUpperCase(),
                contentLength: post.content.length,
            };
        });
        return { user: userData, posts: processPosts};
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId <= 0) {
        reject(new Error('Invalid user ID'));
      } else {
        resolve({ id: userId, name: `User ${userId}` });
      }
    }, 500);
  });
}

function getUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if(userId === 3) {
                resolve([
                    { id: 1, title: "First Post", content: "Content"},
                    { id: 2, title: "Second Post", content: undefined}
                ]);
            }
            else {
                resolve([
                    { id: 1, title: "First Post", content: "Content"},
                    { id: 1, title: "Second Post", content: "More content"}
                ]);
            }
        }, 2000);
    });
}

processUserData(3).catch(err => console.log(err.message));