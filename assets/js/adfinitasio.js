function getCodeMedia() {
    if ('reserved_code_media' in p && p['reserved_code_media'] != "")
        return p['reserved_code_media'];
    else
        return ("2017WENQ")
}

function isOptin() {
  if ($("input[name=optinnps]").is(":checked"))
    return false;
  else
    return true;
}
function pureField(string) {
  return (string.replace(/'/g, "%27").replace(/"/g, "&quot;"));
}

function getSexe() {
  if (pureField($("input[name='civility']:checked").val()) == 'Madame') {
    return 'Femme';
  } else {
    return 'Homme';
  }
}

function getCivilityDear() {
  if (pureField($("input[name='civility']:checked").val()) == 'Madame') {
    return 'Chère';
  } else {
    return 'Cher';
  }
}

function getCivilityLong() {
  if (pureField($("input[name='civility']:checked").val()) == 'Madame')
    return 'MADAME';
  else
    return 'MONSIEUR';
}

function getAddLists() {
  var list = [];
  
  list.push('agir_enfance');
  return list;
}
function getAnswer (nb) {
  var question = "question" + nb;
  var cpt = 0;
  var ret = "";
  $("input[name=" + question + "]").each( function() {
    if ($(this).is(":checked"))
    {
      if (cpt == 0 && nb != 3)
        ret = "OUI";
      else if (nb != 3)
        ret = "NON";
      else
        ret = cpt + 1;
    }
    cpt++;
  });
  return (ret);
}

function submitForm(jqForm) {
 var data = {
  "db": {
    "schema": "fae_questionnaire_engagement",
    "db": {
      "email": pureField($("input[name='email']").val()),
      "phone": pureField($("input[name='telephone']").val()),
      "sexe": getSexe(),
      "civility": pureField($("input[name='civility']:checked").val()),
      "civility_dear": getCivilityDear(),
      "civility_long": getCivilityLong(),
      "personnalisation": getCivilityDear() + ' ' + pureField($("input[name='civility']:checked").val()).toUpperCase() + ' ' + pureField($("input[name='lastname']").val()).toUpperCase(),
      "personnalisation_courte": pureField($("input[name='civility']:checked").val()).toUpperCase() + ' ' + pureField($("input[name='lastname']").val()).toUpperCase(),
      "firstname": pureField($("input[name='firstname']").val().toUpperCase()),
      "lastname": pureField($("input[name='lastname']").val().toUpperCase()),
      "name": pureField($("input[name='firstname']").val()) + ' ' + pureField($("input[name='lastname']").val()),
      "reserved_code_media": getCodeMedia(),
      "language": "fr_FR",
      "quest_1_chiffre": getAnswer(1),
      "quest_2_mission": getAnswer(2),
      "quest_3_recommandation": getAnswer(3)
    }
  },
  "woopra" : {
    "host": "actionenfance.org",
    "cookie": getCookie("wooTracker"),
    "event": "fae_questionnaire_engagement",
    "cv_email": pureField($("input[name='email']").val()),
    "cv_phone": pureField($("input[name='telephone']").val()),
    "cv_sexe": getSexe(),
    "cv_civility": pureField($("input[name='civility']:checked").val()),
    "cv_firstname": pureField($("input[name='firstname']").val()),
    "cv_lastname": pureField($("input[name='lastname']").val()),
    "cv_name": pureField($("input[name='firstname']").val()) + ' ' + pureField($("input[name='lastname']").val()),
    "ce_email": pureField($("input[name='email']").val()),
    "ce_civility": pureField($("input[name='civility']:checked").val()),
    "ce_phone": pureField($("input[name='telephone']").val()),
    "ce_firstname": pureField($("input[name='firstname']").val()),
    "ce_lastname": pureField($("input[name='lastname']").val()),
    "ce_name": pureField($("input[name='firstname']").val()) + ' ' + pureField($("input[name='lastname']").val()),
    "ce_reserved_code_media": getCodeMedia(),
    "ce_language": "fr_FR",
    "ce_quest_1_chiffre": getAnswer(1),
    "ce_quest_2_mission": getAnswer(2),
    "ce_quest_3_recommandation": getAnswer(3)
  },
  "mailjet": {
    "Email": pureField($("input[name='email']").val()),
    "Properties": {
      "sexe": getSexe(),
      "civility": pureField($("input[name='civility']:checked").val()),
      "civility_dear": getCivilityDear(),
      "civility_long": getCivilityLong(),
      "personnalisation": getCivilityDear() + ' ' + pureField($("input[name='civility']:checked").val()).toUpperCase() + ' ' + pureField($("input[name='lastname']").val()).toUpperCase(),
      "personnalisation_courte": pureField($("input[name='civility']:checked").val()).toUpperCase() + ' ' + pureField($("input[name='lastname']").val()).toUpperCase(), "firstname": pureField($("input[name='firstname']").val()),
      "lastname": pureField($("input[name='lastname']").val()),
      "name": pureField($("input[name='firstname']").val()) + ' ' + pureField($("input[name='lastname']").val()),
      "reserved_code_media": getCodeMedia(),
      "language": "fr_FR"
    },
    "addLists": getAddLists(),
    "delLists": []
  },
    //"grecaptcha_response": grecaptcha.getResponse()
  }

var success = function() {
    window.location = jqForm.data("success");
  };
  makeCorsRequest(data, success);
  //console.log(data);
  var client = new adfinitracks.Reveal({
    projectId: '592fcbd154532c46e9be47ad',
    writeKey: '51FF2240B01B8150E6F65E70484EB3FBCEDC78B0BD8CDC5FA2E9111888DB1569'
  });
  var eenc = "";
  var mbzid = ""
  if ("eenc" in p){eenc = p["eenc"].toLowerCase();}
  if ("mbzid" in p){mbzid = p["mbzid"];}
  client.recordEvent('survey', {
          title   : document.title,
          url     : document.location.href,
          user    : {"uuid": adfinitracks.getUniqueId(),
                     "md5": eenc,
                     "id_mesopmindbaz": mbzid},
          organization : "actionenfance.org",
          reserved_code_media : getCodeMedia(),
          device  : adfinitracks.getDevice(),
          answers : {"quest_1_chiffre": getAnswer(1),
                     "quest_2_mission": getAnswer(2),
                     "quest_3_recommandation" : getAnswer(3)}
      });
}
