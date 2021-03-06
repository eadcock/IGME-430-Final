let cachedAccount;

const handleError = (message) => {
  $('#errorMessage').text(message);
  $('#noteMessage').show();
};

const redirect = (response) => {
  $('#noteMessage').hide();
  window.location = response.redirect;
};

const sendAjax = (type, action, data, success) => {
  $.ajax({
    cache: false,
    type,
    url: action,
    data,
    dataType: 'json',
    success,
    error: function(xhr, status, error) {
      var messageObj = JSON.parse(xhr.responseText);
      handleError(messageObj.error);
    }
  })
};

let sessionAccount = (callback) => {
  sendAjax('GET', '/me', null, (acc) => {
    cachedAccount = acc;
    callback(acc);
  });
};

module.exports.handleError = handleError;
module.exports.sendAjax = sendAjax;
module.exports.redirect = redirect;
module.exports.fetchAccount = sessionAccount;
module.exports.cachedAccount = cachedAccount;
