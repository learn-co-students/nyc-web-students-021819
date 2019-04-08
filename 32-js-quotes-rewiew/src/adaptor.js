/* 
  Module Pattern
*/

const apiAdaptor = (function () {
  // constants for this module
  const baseUri = "http://localhost:3000/quotes";
  const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };

  // public methods, these will be returned by the function
  const getAll = () => {
    return fetchAndParse(baseUri);
  };

  const getOne = id => {
    return fetchAndParse(`${baseUri}/${id}`);
  };

  const post = object => {
    const options = {
      headers: defaultHeaders,
      method: "POST",
      body: JSON.stringify(object)
    };
    return fetchAndParse(baseUri, options);
  };

  const remove = id => {
    const options = {
      method: "DELETE"
    };
    return fetchAndParse(`${baseUri}/${id}`, options);
  }

  const update = (id, object) => {
    const options = {
      headers: defaultHeaders,
      method: "PATCH",
      body: JSON.stringify(object)
    };
    return fetchAndParse(`${baseUri}/${id}`, options);
  }

  // private functions, these won't be available outside the closure
  const fetchAndParse = (endpoint, options) => {
    return fetch(endpoint, options).then(r => {
      logRequests();
      return r.json();
    });
  };

  // as an example of how closures can keep track of their internal state
  // this variable will increment each time fetchAndParse is called
  let requestCount = 0;

  const logRequests = () => {
    requestCount++;
    console.log(`%cNumber of API requests: ${requestCount}`, "color: green;");
  };

  return {
    getAll,
    getOne,
    post,
    remove,
    update
  };
})();
