/* 
  This uses the Module Pattern to encapsulate all the logic for 
  our fetch calls in a single Immediately Invoked Function Expression (IFFE)

  This allows us to emulate some of the functionality of classes
  by giving us public and private methods as well as internal state

  Some good reading on the subject: https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
*/

const apiAdaptor = (function() {
  // variables used by for this module
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
  };

  const update = (id, object) => {
    const options = {
      headers: defaultHeaders,
      method: "PATCH",
      body: JSON.stringify(object)
    };
    return fetchAndParse(`${baseUri}/${id}`, options);
  };

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

  /* 
    We return only the functions we want to give the rest of our code access to.
    We're using object destructuring to return an object where the keys on the object
    point to the functions defined above, this is the equivalent of:
    return { getAll: getAll, getOne: getOne, ...etc }
  */
  return {
    getAll,
    getOne,
    post,
    remove,
    update
  };
})();
