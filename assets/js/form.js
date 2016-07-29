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

$(document).ready(function() {
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
 * Pre-filled fields from URL ?

//function fillFieldsFromUrl() {
  //p = extractUrlParams();

  //if (p['email'] && p['email'] != "undefined") {
    //$("input[name=email]").val(p['email']);
  //}

  //if (p['firstname'] && p['firstname'] != "undefined") {
    //$("input[name=firstname]").val(p['firstname']);
  //}

  //if (p['lastname'] && p['lastname'] != "undefined") {
    //$("input[name=lastname]").val(p['lastname']);
  //}

  //if (p['phone'] && p['phone'] != "undefined") {
    //$("input[name=phone]").val(p['phone']);
  //}
//}


 * champ_libre_long
 * choix_multiple
 * champ_caché
 * scoring (radio de 1 à 10 en presentation horizontale)
 * liste_deroulante
 * Responsive Design
 * Docs
 */
