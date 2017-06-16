---
layout: blank
---

/* form-to-db */
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
    // CORS not supported
    xhr = null;
  }
  return xhr;
}

function makeCorsRequest(data) {     
 var url = 'https://adfinitas-io.herokuapp.com/api/v1/organization/adc529c9-3414-4e80-8004-b2002885ee65/webhook/3a66a987-839b-4275-8149-109503eb09e1'; 

 var body = JSON.stringify(data);
 var xhr = createCORSRequest('POST', url);
 if (!xhr) {
  alert('CORS not supported');
  return;
}
xhr.setRequestHeader('Content-Type', 'application/json');
  // Error Handler
  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  xhr.send(body);
}
/* end form-to-db */