function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
}
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

function makeCorsRequest(data) {
  var url = 'https://form-to-db.herokuapp.com/';
  var body = JSON.stringify(data);

  var xhr = createCORSRequest('POST', url);
  if (!xhr) {
    alert('CORS non supporté. Merci d\'envoyer un message à tech@adfinitas.fr');
    return;
  }

  xhr.setRequestHeader('Content-Type', 'application/json');

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    window.location.href = "merci.html";
  };

  // Error Handler
  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send(body);
}
