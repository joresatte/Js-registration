/**
 * @import 
 * @param {url} url
 * @param {postsContainer}
 * @function handleEvent
 * @memberof randomBoolean
 */

// Import randomBoolean from module randomData.js
import { randomBoolean } from "../helpers/randomData.js";
import { response } from "../api/baseCall.js";
import { ErrorCls } from "../utils/room/ErrorHandlerCls.js";
import { DEBUG } from "../helpers/debug.js";

// get posts from API
// url for fetching https://jsonplaceholder.typicode.com/posts
const url = "https://jsonplaceholder.typicode.com/posts ";
const dataFetcher = response(url);
dataFetcher
  .then((posts) => {
    let {map, filter}= Array.prototype;

    // add "published" property to each posts element
    const postsWithPublished = map.call(posts, (item) => ({
      ...item, // Spread existing properties
      published: randomBoolean() // Add "published" property
    }));

    //filter data
    const publishedPosts = filter.call(postsWithPublished, (post) => post.published);

    // dislay data
    const postsContainer = document.getElementById("posts");
    // const mainContainer = document.querySelector(".main-class");

    DEBUG(postsContainer);
    if (!postsContainer) {
      throw new Error(new ErrorCls(2, 'El contenedor con id "posts" no existe en el DOM.').exceptionMessage);
    }
    let postElement = null;
    publishedPosts.forEach((post) => {
      DEBUG("debug:", post);
      postElement = document.createElement("div");
      postElement.addEventListener("click", () => handleEvent(post.id));
      postElement.className = "post";
      postElement.innerHTML = `
	  <span>title:</span>
	<h2>${post.title}</h2>
`;
      postsContainer.appendChild(postElement);
    });
  })
  .catch((error) => {
    DEBUG(new ErrorCls(400, `Error al cargar los posts: ${error}`).errorMessage);
  });

/**
 * @description - handle click event to: detail.html
 * @param {*} id 
 */
function handleEvent(id) {
  window.location.href = `detail.html?id=${id}`;
}
