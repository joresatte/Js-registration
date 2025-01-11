/**
 * @function fetchData
 * @typedef {(Array | object)} fetchData
 * @param {url} url - URL for fetching
 * @returns {Promise}
 */

const fetchData =  (url) =>{
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        Promise.reject(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(`Error al cargar los posts: ${error}`);
      Promise.reject( error);
    });
};
// bind fetchData to globalThis
globalThis.fetchData = fetchData;
export {fetchData};
