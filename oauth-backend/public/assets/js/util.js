/**
 * Function to load cookie cookie data for client side api calls
 * @param {string} name name of the cookie to read from storage
 */
const getCookie = function(name) {
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + name + '=');
  if (parts.length == 2)
    return parts
      .pop()
      .split(';')
      .shift();
};

window.accessToken = getCookie('vitAuth');

const parseFetchResponse = (response) =>
  response.json().then((text) => ({
    json: text,
    meta: response,
  }));

const copyElementValue = (element) => {
  element.select();
  element.setSelectionRange(0, 100);
  document.execCommand('copy');
};
