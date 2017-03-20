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
      	  <img class='logo' src='/uploads/logo.png' alt='Logo' />
      	  <h2>Grande consultation <span class='smallest'>sur la solitude en France</span></h2>
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
          <img class='logo' src='/uploads/logo-white.png' alt='Logo' />
	  <div class='links'>
	    <a href='http://www.ssvp.fr'>www.ssvp.fr</a>
	    <a href='#'>Mentions légales</a>
	    <a href='#'>Crédits</a>
	  </div>
          <div class='social-links'>
	    <a target='_blank' href='https://www.facebook.com/SocieteDeSaintVincentDePaulFrance/'>
	      <img src='/uploads/fb.png'>
	    </a>
	    <a target='_blank' href='https://twitter.com/ssvpfrance'>
	      <img src='/uploads/twitter.png'>
	    </a>
	    <a target='_blank' href='https://www.instagram.com/ssvpfrance/'>
	      <img src='/uploads/instagram.png'>
	    </a>
	    <a target='_blank' href='https://www.youtube.com/channel/UCPorlvgCNj-CZE_c7p73Vrw'>
	      <img src='/uploads/youtube.png'>
	    </a>
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
	  <h2>Grande consultation <span class='smallest'>sur la solitude en France</span></h2>
          <div class='question-number'>
            <span class='position'>1</span>
            <span class='total'>/3</span>
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

$(document).on('ready', function() {
  $('#slide-0 p.label-choix_unique').append('<span class="source">* Source : chiffre publié par la SSVP sur FB</span>');
  insertHeader();
  insertFooter();
  insertQuestionHeader();
  insertQuestionFooter();
  smoothScroll();
  //$('.container-panneau_question label, .container-panneau_question input').on('click',
    //function() {
      //id = $(this).closest('.input-container').attr('id').slice('slide-'.length);
      //id = parseInt(id) + 1;
      //target = $('#slide-' + id);
      //$('html, body').animate({
	//scrollTop: target.offset().top
      //}, 1000);
    //}
  //);
});
