/**
 * listen for form submission
 */

/**
 * form validation
 */
function updateSignUpLink() {
  return new Promise((resolve) => {
    /** get query string on first hit */
    const queryString = window.location.search;
    window.sessionStorage.setItem('oauth', queryString);

    /** change signup link */
    // $('#singUpLink').attr('href', `./signup${queryString}`);

    /** extract auth data and save into session storage */
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.get('client_id')) {
      window.sessionStorage.setItem('client_id', urlParams.get('client_id'));
    }

    if (urlParams.get('redirect_uri')) {
      window.sessionStorage.setItem('redirect_uri', urlParams.get('redirect_uri'));
    }

    if (urlParams.get('scope')) {
      window.sessionStorage.setItem('scope', urlParams.get('scope'));
    }

    resolve();
  });
}

function populateApplicationDetails() {
  /** if clinet_id is already saved in session, then populate form items */
  if (window.sessionStorage.getItem('client_id')) {
    $('#client_id').val(window.sessionStorage.getItem('client_id'));
  }

  if (window.sessionStorage.getItem('redirect_uri')) {
    $('#redirect_uri').val(window.sessionStorage.getItem('redirect_uri'));
  }

  if (window.sessionStorage.getItem('scope')) {
    $('#scope').val(window.sessionStorage.getItem('scope'));
  }
}

$(document).ready(() => {
  updateSignUpLink().then(() => populateApplicationDetails());
});
