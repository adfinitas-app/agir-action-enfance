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
  // Static keyword to hide the field in URL.
  // Example : https://example.com?name_hide=test
  // will hide the field name and fill it
  var hideKeyword = "_hide";
  // Function located in assets/js/app.js
  var params = extractUrlParams();
  Object.keys(params).forEach(function(key) {
    var toHide = false;
    var name = key;
    var value = params[key];
    if (key.substring(key.length - hideKeyword.length) == hideKeyword) {
      toHide = true;
      var name = key.substring(0, key.length - hideKeyword.length);
    }
    if ($("input[name=" + name + "]").length > 0) {
      var selector = $("input[name=" + name + "]");
    } else if ($("select[name=" + name + "]").length > 0) {
      var selector = $("select[name=" + name + "]");
    } else {
      return;
    }
    selector.val(value);
    if (toHide == true) {
      if (isValidField(selector, !selector.prop("required")) == false) {
	selector.val("");
      } else {
	selector.closest(".field-row").css("display", "none")
      }
    }
  });
}

$(document).ready(function() {
  preFill();
  $(".check-phone").intlTelInput({
    utilsScript: "/assets/js/vendor/intl-tel-input/lib/libphonenumber/build/utils.js",
    "initialCountry": "fr",
    "autoFormat": true
  });
  var jqForm = $("form.adfinitas-cx");
  jqForm.on("submit", function(e) {
    e.preventDefault();
    if (isValidForm(jqForm) == true) {
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
