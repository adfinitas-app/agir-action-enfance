---
layout: blank
---

function pureField(string) {
  return (string.replace(/'/g, "%27").replace(/"/g, "&quot;"));
}

function submitForm(jqForm) {
  var FormData = {};
  jqForm.find("input:not([type=submit])").each(function() {
    // TODO: Check that it works with every types
    FormData[$(this).attr("name")] = $(this).val();
  });
  today = new Date();
  woopra.track('inscription', {
    url: document.URL,
    title: document.title,
    origine: jqForm.data("source"),
    optin: "non" // TODO: Champ "Optin Woopra" oui/non ?
  });
  woopra.track('adfinitascx-' + jqForm.data("source"), FormData);
  var dbData = {
    "schema": "{{ site.form-to-db_config.schema }}",
    "db": {
      "signin_date": today.toString()
    }
  }
  for (var attrname in FormData) {
    dbData.db[attrname] = pureField(FormData[attrname]);
  }
  var success = function() {
    alert("Formulaire envoyé !"); // TODO: Page de remerciement ?
  };
  makeCorsRequest(dbData, success);
}

// Pre-filled inputs from query parameter in URL.
// Example : https://example.com?name=test&email=test@test.com
// will fill the field name and email
function preFill() {
  // Function located in assets/js/app.js
  var params = extractUrlParams();
  Object.keys(params).forEach(function(key) {
    if (params[key] && params[key] != 'undefined') {
      if ($("input[name=" + key + "]").length > 0) {
	$("input[name=" + key + "]").val(params[key]);
      } else if ($("select[name=" + key + "]").length > 0) {
	$("select[name=" + key + "]").val(params[key]);
      }
    }
  });
}

$(document).ready(function() {
  preFill();
  $(".intl-tel-input").intlTelInput({
    utilsScript: "/assets/js/vendor/intl-tel-input/lib/libphonenumber/build/utils.js",
    "initialCountry": "fr",
    "autoFormat": true
  });
  var jqForm = $("form.adfinitas-cx");
  jqForm.on("submit", function(e) {
    e.preventDefault();
    if (isValid(jqForm) == true) {
      submitForm(jqForm);
    }
  });
});

/*
 * TODO
 * champ_libre_long
 * choix_multiple
 * champ_caché
 * scoring (radio de 1 à 10 en presentation horizontale)
 * liste_deroulante
 * Responsive Design
 * Docs
 */
