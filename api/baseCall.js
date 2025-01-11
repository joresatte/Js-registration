/**
 * @description - Use Function constructor to fetch data
 * @function
 * @param {response}
 * @memberof fetchData
 * @returns 
 */
import { fetchData } from '../helpers/chunk-baseCall.js';

// fetchData as part of the string
const response = new Function(
  "url",
  "return fetchData.apply(this, [url]);"
);

export { response };
