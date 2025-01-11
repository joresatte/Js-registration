
/**
 * @import 
 * @interface URLSearchParams
 * @param {postId} postId - post id
 * @param {url} url
 * @Promise
 */
import { ErrorCls } from "../utils/room/ErrorHandlerCls.js";
import { response } from "../api/baseCall.js";
import { DEBUG } from "../helpers/debug.js";
// get post id from URL
const params = new URLSearchParams(window.location.search);
const postId = params.get("id");

// API call to fetching post detail
// url for fetching https://jsonplaceholder.typicode.com/posts/<id>
const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

const dataFetcher = response(url);
dataFetcher
  .then((post) => {
    // display post
    const postContainer = document.getElementById("post");
    postContainer.innerHTML = `
<h2>
${post.title}</h2>
<p>${post.body}</p>
<p>id: ${post.id}</p>
<p>userId: ${post.userId}</p>
<a href="index.html">Volver al listado</a>
`;
Promise.resolve(post);
  })
  .catch((error) => {
    DEBUG(new ErrorCls(400, `Error al cargar los posts: ${error}`).errorMessage);
  });
