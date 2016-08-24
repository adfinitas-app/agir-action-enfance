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
    window.location = jqForm.data("success");
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
    if ($("select[name=" + name + "]").length > 0) {
      var selector = $("select[name=" + name + "][value=" + value + "]");
      selector.prop("selected", true);
    } else if ($("input:radio[name=" + name + "]").length > 0) {
      var selector = $("input:radio[name=" + name + "][value=" + value + "]");
      selector.prop("checked", true);
    } else if ($("input:checkbox[name=" + name + "]").length > 0) {
      var selector = $("input:checkbox[name=" + name + "][value=" + value + "]");
      selector.prop("checked", true);
    } else if ($("input[name=" + name + "]").length > 0 &&
	       $("input[name=" + name + "]").hasClass("check-phone")) {
      var selector = $("input[name=" + name + "]");
      selector.intlTelInput("setNumber", value);
    } else if ($("input[name=" + name + "]").length > 0) {
      var selector = $("input[name=" + name + "]");
      selector.val(value);
    } else {
      return;
    }
    if (toHide == true) {
      if (isValidField(selector, !selector.prop("required")) === false) {
	// Only un-fill the wrong value if this is an text/email input.
	// However nothing happens
	if (selector.attr('type') === 'text' || selector.attr('type') === 'email') {
	  selector.val("");
	}
      } else {
	selector.closest(".field-row").css("display", "none")
      }
    }
  });
}

$(document).ready(function() {
  $(".check-phone").intlTelInput({
    "initialCountry": "fr",
    "autoFormat": true
  });
  $.fn.intlTelInput.loadUtils("/assets/js/vendor/intl-tel-input/build/js/utils.js");
  var jqForm = $("form.adfinitas-cx");
  jqForm.on("submit", function(e) {
    e.preventDefault();
    if (isValidForm(jqForm) == true) {
      submitForm(jqForm);
    }
  });
});

// Trick to let intl-tel-input time to load itself
// (between document.ready and window.onload)
// If not using that, you will
// - get a invalid number (isValidNumber return false)
// - get a -99 error code with getValidationError
//
// Usisng anonymous function to avoid polluting the namespace
window.onload = (function(oldLoad) {
  return function() {
    oldLoad && oldLoad();
    preFill();
  }
})(window.onload)

/*
 * TODO
 * Woopra optin
 * Image de fond par champ
 * Reponse libre pour choix unique / choix caché
 * champ_libre_long
 * choix_multiple
 * champ_caché
 * scoring (radio de 1 à 10 en presentation horizontale)
 * liste_deroulante
 * Responsive Design
 * Docs
 *
 * CSS / JS Statique :
 * - Radio court
 *   - Checkbox sur une demi-ligne (à la fin)
 *   - Placement du label (avant ou au-dessus)
 */
