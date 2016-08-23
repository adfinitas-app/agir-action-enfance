function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function hideError()
{
  if ($(this).attr("type") == "radio" || $(this).attr("type") == "checkbox") {
    $("input[name=" + $(this).attr("name") + "]").parent().removeClass("error");
  } else if ($(this).hasClass("intl-tel-input")) {
    $(this).parent().parent().removeClass("error");
  } else if ($(this).prop("tagName") == "SELECT") {
    $(this).parent().parent().removeClass("error");
  } else {
    $(this).parent().removeClass("error");
  }
  $(this).off("change");
}

function showError(elem) {
  if (elem.attr("type") == "radio" || elem.attr("type") == "checkbox") {
    $("input[name=" + elem.attr("name") + "]").parent().addClass("error");
    $("input[name=" + elem.attr("name") + "]").on("change", hideError);
  } else if (elem.prop("tagName") == "SELECT") {
    elem.parent().parent().addClass("error");
    elem.on("change", hideError);
  } else if (elem.hasClass("intl-tel-input")) {
    elem.parent().parent().addClass("error");
    elem.on("change", hideError);
  } else {
    elem.parent().addClass("error");
    elem.on("change", hideError);
  }
}

function isValidField(jqueryFieldSelector) {
  var field = jqueryFieldSelector;
  var status = true;
  if (field.attr("type") == "radio" || field.attr("type") == "checkbox") {
    if ($("input[name=" + field.attr("name") + "]:checked").length == 0) {
      status = false;
    }
  } else {
    if (field.val() == "" || field.val() == null ||
	(field.attr("type") == "email" &&
	 isValidEmail(field.val()) == false) ||
	(field.attr("name") == "phone" &&
	 field.intlTelInput("isValidNumber") == false)) {
      status = false;
    }
  }
  return (status);
}

function isValidForm(jqueryFormSelector) {
  var status = true;
  $(".error").removeClass("error");
  jqueryFormSelector.find("input:not([type=submit])[required]").each(function() {
    if (isValidField($(this)) == false) {
      showError($(this));
      status = false;
    }
  });
  return (status);
}
