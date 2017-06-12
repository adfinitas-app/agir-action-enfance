/* Here you can design everything specific to the formulaire collection */
// Typescript
(function(d) {
  var config = {
    kitId: 'itc4yof',
    scriptTimeout: 3000,
    async: true
  },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

function insertHeader() {
  header = `
    <header>
      <div class='row'>
	<div class='large-12 columns'>
	  <a target="_blank" href="http://www.actionenfance.org/">
	    <img class='logo' src='/uploads/logo.png' alt='Logo' />
	  </a>
      	   <h2>donnez-nous votre avis :<br /><span class='smallest'>Comment se reconstruire après la maltraitance ?</span></h2>
      	</div>
      </div>
    </header>
  `;
  $('.panneau-introduction').prepend(header);
}

function insertFooter() {
  footer = `
    <footer>
  <div class='row'>
    <div class='large-12 columns'>
      <a target="_blank" href="http://www.actionenfance.org/">
        <img class='logo' src='/uploads/logo.png' alt='Logo' />
      </a>
      <a target="_blank" href="http://www.donenconfiance.org/">
        <img src='/uploads/don-en-confiance.png' alt='Don en confiance' />
      </a>
      <div class='links'>
        <a target="_blank" href='http://www.actionenfance.org'>www.actionenfance.org</a>
        - 
        <a target="_blank" href='http://www.actionenfance.org/mentions-legales'>Mentions légales</a>
        - 
        <a target="_blank" href='http://www.actionenfance.org/nous-connaitre'>Crédits</a>
      </div>
      <div class='social-links'>
        <a target='_blank' href='https://www.facebook.com/ActionEnfance/'>
          <img src='/uploads/fb.png'>
        </a>
        <a target='_blank' href='https://twitter.com/action_enfance?lang=fr'>
          <img src='/uploads/twitter1.png'>
        </a>
        <a target='_blank' href='https://www.instagram.com/action_enfance/'>
          <img src='/uploads/instagram.png'>
        </a>
        <a target='_blank' href='https://www.youtube.com/user/ACTIONENFANCE'>
          <img src='/uploads/youtube.png'>
        </a>
      </div>
    </div>
  </div>
</footer>
  `;
  $('form.adfinitas-cx').append(footer);
}

function insertQuestionHeader() {
  questionHeader = `
    <div class='question-header'>
      <div class='row'>
        <div class='large-12 columns'>
          <img class='logo' src='/uploads/logo.png' alt='Logo' />
	  <h2>donnez-nous votre avis :<br /><span class='smallest'>Comment se reconstruire après la maltraitance ?</span></h2>
          <div class='question-number'>
            <span class='position'>1</span>
            <span class='total'><span class="separator">/</span>3</span>
          </div>
        </div>
      </div>
    </div>
  `;
  $('.container-panneau_question .input-container').prepend(questionHeader);
  $('.container-panneau_question .question-number .position').each(function(index) {
    $(this).html(index + 1);
  });
}

function insertQuestionFooter() {
  questionFooter = `
    <div class='question-footer'>
      <div class='row'>
	<div class='large-12 columns'>
	  <a href='#slide-0'>
	    <img class='arrow' src='/uploads/fleche.png' alt='Fleche' />
	  </a>
	</div>
      </div>
    </div>
  `;
  $('.container-panneau_question .input-container').append(questionFooter);
  $('.container-panneau_question .question-footer a').each(function(index) {
    $(this).attr('href', '#slide-' + (index + 1));
  });
}

function smoothScroll() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
	$('html, body').animate({
	  scrollTop: target.offset().top
	}, 1000);
	return false;
      }
    }
  });
}
function    scrollTo(next){
    if ($(next).length != 0)
    {
        $('html, body').stop().animate({
            scrollTop: $(next).offset().top + 1
        }, 700, 'swing');
        return false;
    }
};

$('.panneau-introduction-texte button').click( function() {
  scrollTo($('#slide-0'));
});

function insertAnswerField() {
  field = `
    <textarea rows=4 placeholder='Merci de préciser dans quelles circonstances' class='answer-field no-send'></textarea>
  `;
  $('#slide-1 .container-all-radio .reponse-container-choix_multiple:nth-child(3) label').append(field);
  $('.answer-field').on('change', function() {
    var value = $('.answer-field').val();
    $('#slide-1 #input-4').val('Oui, pas dans mon entourage proche, mais je croise souvent des personnes qui me semblent souffrir de solitude : ' + value);
  });
}

function insertSpecialButtons() {
  $('.reponse-container-choix_multiple label').wrapInner('<span class="label-container">');
  $('.reponse-container-choix_multiple label').prepend('<span class="radio-checkbox"></span>');
}

function infosPart() {
  $('input[name=email]').attr('placeholder', 'E-mail*');
  $('input[name=email]').parent().find('label').remove();
  $('input[type=submit]').parent().parent().detach().appendTo('.container-panneau_informations_personnelles');
  $('.container-panneau_informations_personnelles').prepend(`
    <div class='row'>
      <div class='large-12 columns intro-infos-perso'>
    Merci de compléter les informations ci-dessous pour soumettre vos réponses et recevoir les résultats de la consultation.
      </div>
    </div>
    <div class='row reduced-width'>
      <div class='medium-6 columns lastname-target'>
      </div>
      <div class='medium-6 columns firstname-target'>
      </div>
    </div>
    <div class='row reduced-width'>
      <div class='medium-6 columns email-target'>
      </div>
      <div class='medium-6 columns phone-target'>
      </div>
    </div>
    `);
  $('input[name=email]').closest('.input-container').detach().appendTo('.email-target');
  $('input[name=firstname]').closest('.input-container').detach().appendTo('.firstname-target');
  $('input[name=lastname]').closest('.input-container').detach().appendTo('.lastname-target');
  $('input[name=telephone]').closest('.input-container').detach().appendTo('.phone-target');
}

function changeLabel() {
  $('p.label-choix_multiple, p.label-choix_unique').each(function(idx) {
    if ($(this).text().slice(-1) == '*') {
      $(this).text($(this).text().slice(0, -1))
    }
  });
}

$(document).on('ready', function() {
  changeLabel();
  insertHeader();
  insertFooter();
  insertQuestionHeader();
  insertQuestionFooter();
  //insertAnswerField();
  smoothScroll();
  insertSpecialButtons();
  infosPart();
});
