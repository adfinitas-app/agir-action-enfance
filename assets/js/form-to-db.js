---
layout: blank
---

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

function makeCorsRequest(data, success) {
  var url = 'https://adfinitas-io.herokuapp.com/api/v1/organization/0396de57-2d19-40b5-b60d-41cda9a93ea6/webhook/36a77892-771a-4376-8e99-58a6dc8e3106';
  var body = JSON.stringify(data);

  var xhr = createCORSRequest('POST', url);
  if (!xhr) {
    alert("{{ site.form-to-db_config.message_erreur}}" + ' : CORS non supporté');
    return;
  }

  xhr.setRequestHeader('Content-Type', 'application/json');

  // Response handlers.
  xhr.onload = success;

  // Error Handler
  xhr.onerror = function() {
    alert("{{ site.form-to-db_config.message_erreur}}" + ' : Erreur inconnue');
  };

  xhr.send(body);
}
