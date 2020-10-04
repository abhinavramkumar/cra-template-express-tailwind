import 'whatwg-fetch';

// import { IS_PRODUCTION } from './constants';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
const parseJSON = (response) => {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
};

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

export default function request(
  url,
  options = {},
  callback = r => r,
  credentials = false
) {
  if (credentials || options?.credentials === 'include') {
    options.credentials = 'include';
  }

  options.headers = {
    ...options.headers,
  };

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(callback);
}

